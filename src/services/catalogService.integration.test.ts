import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { initialServices } from "@/data/services";
import { featureFlags } from "@/lib/featureFlags";
import {
  createSupabaseMock,
  SAMPLE_LISTING_ROW,
  SAMPLE_SEARCH_INDEX_ROW,
  type TableHandler,
} from "@/test/supabaseMock";

const getSupabaseClient = vi.fn();
const isSupabaseConfigured = vi.fn(() => true);

vi.mock("@/lib/supabase", () => ({
  getSupabaseClient,
  isSupabaseConfigured,
}));

function mockExtrasTables(variantId = SAMPLE_LISTING_ROW.variant_id) {
  const handlers: Record<string, TableHandler> = {
    product_search_index: {
      data: [SAMPLE_SEARCH_INDEX_ROW],
      error: null,
      count: 1,
    },
    product_features: {
      data: [{ variant_id: variantId, feature_text: "Dedicated TMaaS specialist team", sort_order: 0 }],
      error: null,
    },
    product_tags: {
      data: [{ variant_id: variantId, tag_name: "ai" }],
      error: null,
    },
    product_content: {
      data: [
        {
          variant_id: variantId,
          description: "Full description from product_content.",
          positioning: "(High-Impact) Positioning Strategy",
        },
      ],
      error: null,
    },
    variant_sector_titles: { data: [], error: null },
    product_timeline_milestones: {
      data: [{ variant_id: variantId, milestone_text: "Phase 1: Discovery", sort_order: 0 }],
      error: null,
    },
    bundle_items: { data: [], error: null },
    marketplace_listings_view: (state) => {
      if (state.filters.variant_id__in) {
        return { data: [SAMPLE_LISTING_ROW], error: null };
      }
      if (state.filters.listing_id__in) {
        return { data: [SAMPLE_LISTING_ROW], error: null };
      }
      return { data: [SAMPLE_LISTING_ROW], error: null };
    },
    product_category_map: {
      data: [{ product_id: SAMPLE_LISTING_ROW.product_id, category_id: "modernise-technology" }],
      error: null,
    },
  };

  return handlers;
}

describe("catalogService Supabase integration", () => {
  beforeEach(() => {
    featureFlags.enable("supabaseCatalog");
    isSupabaseConfigured.mockReturnValue(true);
    getSupabaseClient.mockReset();
  });

  afterEach(() => {
    featureFlags.resetToDefaults();
    vi.clearAllMocks();
  });

  it("uses static catalog when the supabaseCatalog flag is disabled", async () => {
    featureFlags.disable("supabaseCatalog");
    const { fetchCatalog, shouldUseSupabaseCatalog } = await import("./catalogService");

    expect(shouldUseSupabaseCatalog()).toBe(false);
    await expect(fetchCatalog()).resolves.toEqual(initialServices);
    expect(getSupabaseClient).not.toHaveBeenCalled();
  });

  it("uses static catalog when Supabase env vars are missing", async () => {
    isSupabaseConfigured.mockReturnValue(false);
    const { fetchCatalog, shouldUseSupabaseCatalog } = await import("./catalogService");

    expect(shouldUseSupabaseCatalog()).toBe(false);
    await expect(fetchCatalog()).resolves.toEqual(initialServices);
  });

  it("maps marketplace_listings_view rows into ServiceProduct records", async () => {
    getSupabaseClient.mockReturnValue(createSupabaseMock(mockExtrasTables()));

    const { fetchCatalogFromSupabase } = await import("./catalogService");
    const catalog = await fetchCatalogFromSupabase();

    expect(catalog).toHaveLength(1);
    expect(catalog[0]).toMatchObject({
      id: 103,
      collection: "ai",
      serviceType: "advisory",
      standardName: "Enterprise Data Platform (High-Impact) - Assess",
      description: "Assess your data platform readiness.",
      price: "Free",
      duration: "1 Week",
      popularityRank: 100,
      features: [],
      tags: [],
      outcomes: [],
      timelineMilestones: [],
    });
  });

  it("returns undefined when a service variant is not found", async () => {
    getSupabaseClient.mockReturnValue(
      createSupabaseMock({
        marketplace_listings_view: { data: null, error: null },
      })
    );

    const { fetchServiceById } = await import("./catalogService");
    await expect(fetchServiceById(99999)).resolves.toBeUndefined();
  });

  it("loads a single service with joined catalog extras", async () => {
    getSupabaseClient.mockReturnValue(
      createSupabaseMock({
        ...mockExtrasTables(),
        marketplace_listings_view: (state) => {
          if (state.filters.variant_id === SAMPLE_LISTING_ROW.variant_id) {
            return { data: SAMPLE_LISTING_ROW, error: null };
          }
          if (state.filters.variant_id__in) {
            return {
              data: [{ variant_id: SAMPLE_LISTING_ROW.variant_id, product_id: SAMPLE_LISTING_ROW.product_id }],
              error: null,
            };
          }
          return { data: [], error: null };
        },
      })
    );

    const { fetchServiceById } = await import("./catalogService");
    const service = await fetchServiceById(SAMPLE_LISTING_ROW.variant_id);

    expect(service?.standardName).toBe(SAMPLE_LISTING_ROW.display_title);
    expect(service?.features).toContain("Dedicated TMaaS specialist team");
  });

  it("returns best sellers from the shared catalog query", async () => {
    const secondListing = {
      ...SAMPLE_LISTING_ROW,
      listing_id: 12,
      variant_id: 109,
      display_title: "Business Intelligence & Analytics (High-Impact) - Assess",
      popularity_score: 99,
    };

    getSupabaseClient.mockReturnValue(
      createSupabaseMock({
        ...mockExtrasTables(),
        product_search_index: {
          data: [
            { variant_id: 103, listing_id: 11, popularity_score: 100, is_bundle: false },
            { variant_id: 109, listing_id: 12, popularity_score: 99, is_bundle: false },
          ],
          error: null,
          count: 2,
        },
        marketplace_listings_view: (state) => {
          if (state.filters.listing_id__in) {
            return { data: [SAMPLE_LISTING_ROW, secondListing], error: null };
          }
          if (state.filters.variant_id__in) {
            return { data: [SAMPLE_LISTING_ROW, secondListing], error: null };
          }
          return { data: [SAMPLE_LISTING_ROW, secondListing], error: null };
        },
        listing_placements: {
          data: [
            { listing_id: 11, rank: 1, category_id: null },
            { listing_id: 12, rank: 2, category_id: null },
          ],
          error: null,
        },
        product_features: {
          data: [
            { variant_id: 103, feature_text: "Feature A", sort_order: 0 },
            { variant_id: 109, feature_text: "Feature B", sort_order: 0 },
          ],
          error: null,
        },
        product_tags: {
          data: [
            { variant_id: 103, tag_name: "ai" },
            { variant_id: 109, tag_name: "ai" },
          ],
          error: null,
        },
        product_content: {
          data: [
            {
              variant_id: 103,
              description: "Service 103",
              positioning: "Positioning 103",
            },
            {
              variant_id: 109,
              description: "Service 109",
              positioning: "Positioning 109",
            },
          ],
          error: null,
        },
        product_timeline_milestones: { data: [], error: null },
        product_category_map: {
          data: [
            { product_id: 4, category_id: "modernise-technology" },
            { product_id: 5, category_id: "grow-revenue" },
          ],
          error: null,
        },
      })
    );

    const { fetchBestSellers } = await import("./catalogService");
    const bestSellers = await fetchBestSellers("all", 2);

    expect(bestSellers.map((service) => service.id)).toEqual([103, 109]);
  });

  it("loads deploy modules and features for deploy services", async () => {
    getSupabaseClient.mockReturnValue(
      createSupabaseMock({
        deploy_modules: {
          data: [{ id: 1, name: "Digital Experience Portal", sort_order: 0 }],
          error: null,
        },
        deploy_module_features: {
          data: [
            { module_id: 1, feature_text: "Multi-device responsiveness", sort_order: 0 },
            { module_id: 1, feature_text: "Accessibility baseline", sort_order: 1 },
          ],
          error: null,
        },
      })
    );

    const { fetchDeployModulesForService } = await import("./catalogService");
    const modules = await fetchDeployModulesForService("Any Deploy Service", 4);

    expect(modules).toEqual([
      {
        name: "Digital Experience Portal",
        features: ["Multi-device responsiveness", "Accessibility baseline"],
      },
    ]);
  });

  it("returns a full service detail payload with deploy modules", async () => {
    getSupabaseClient.mockReturnValue(
      createSupabaseMock({
        ...mockExtrasTables(),
        marketplace_listings_view: (state) => {
          if (state.filters.variant_id === SAMPLE_LISTING_ROW.variant_id) {
            return { data: SAMPLE_LISTING_ROW, error: null };
          }
          if (state.filters.variant_id__in) {
            return {
              data: [{ variant_id: SAMPLE_LISTING_ROW.variant_id, product_id: SAMPLE_LISTING_ROW.product_id }],
              error: null,
            };
          }
          return { data: [], error: null };
        },
        deploy_modules: { data: [], error: null },
      })
    );

    const { fetchServiceDetail } = await import("./catalogService");
    const detail = await fetchServiceDetail(SAMPLE_LISTING_ROW.variant_id);

    expect(detail?.service.id).toBe(103);
    expect(detail?.deployModules).toEqual([]);
  });

  it("surfaces Supabase query errors from the listings view", async () => {
    getSupabaseClient.mockReturnValue(
      createSupabaseMock({
        marketplace_listings_view: {
          data: null,
          error: { message: "permission denied for view marketplace_listings_view" },
        },
      })
    );

    const { fetchCatalogFromSupabase } = await import("./catalogService");
    await expect(fetchCatalogFromSupabase()).rejects.toMatchObject({
      message: "permission denied for view marketplace_listings_view",
    });
  });

  it("fetches a paginated catalog page from product_search_index", async () => {
    getSupabaseClient.mockReturnValue(createSupabaseMock(mockExtrasTables()));

    const { fetchCatalogPage } = await import("./catalogService");
    const page = await fetchCatalogPage({
      page: 1,
      pageSize: 15,
      activeTab: "all",
      searchQuery: "",
      selectedCategories: [],
      selectedServiceTypes: [],
      selectedIncluded: [],
      selectedSectors: [],
      sortBy: "popular",
    });

    expect(page.totalCount).toBe(1);
    expect(page.services).toHaveLength(1);
    expect(page.services[0]?.id).toBe(103);
  });

  it("ranks services by popularity within a collection", async () => {
    const { pickTopServicesByPopularity } = await import("./catalogService");
    const services = [
      { ...initialServices[0], id: 1, collection: "ai", popularityRank: 10, serviceType: "advisory" as const },
      { ...initialServices[0], id: 2, collection: "ai", popularityRank: 50, serviceType: "design" as const },
      { ...initialServices[0], id: 3, collection: "experience", popularityRank: 99, serviceType: "advisory" as const },
      { ...initialServices[0], id: 4, collection: "ai", popularityRank: 5, serviceType: "bundle" as const },
    ];

    const topAi = pickTopServicesByPopularity(services, "ai", 2);
    expect(topAi.map((service) => service.id)).toEqual([1, 2]);
  });
});
