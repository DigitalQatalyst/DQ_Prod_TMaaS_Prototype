// @vitest-environment node

import { beforeEach, describe, expect, it } from "vitest";
import { featureFlags } from "@/lib/featureFlags";

// Check for live Supabase credentials in process.env (Next.js uses NEXT_PUBLIC_ prefix)
const hasLiveSupabase = Boolean(
  (process.env["NEXT_PUBLIC_SUPABASE_URL"] ?? process.env["VITE_SUPABASE_URL"]) &&
  (process.env["NEXT_PUBLIC_SUPABASE_ANON_KEY"] ?? process.env["VITE_SUPABASE_ANON_KEY"]) &&
  !(
    process.env["NEXT_PUBLIC_SUPABASE_ANON_KEY"] ??
    process.env["VITE_SUPABASE_ANON_KEY"] ??
    ""
  ).includes("your-anon-key")
);

describe.skipIf(!hasLiveSupabase)("Supabase live catalog integration", () => {
  beforeEach(() => {
    featureFlags.enable("supabaseCatalog");
  });

  it("allows anon reads from marketplace_listings_view", async () => {
    const { getSupabaseClient } = await import("@/lib/supabase");
    const supabase = getSupabaseClient();
    expect(supabase).not.toBeNull();

    const { data, error } = await supabase!
      .from("marketplace_listings_view")
      .select("variant_id, display_title, collection_id, service_type_id, price_display")
      .order("popularity_score", { ascending: false })
      .limit(5);

    expect(error).toBeNull();
    expect(data?.length).toBeGreaterThan(0);
    expect(data?.[0]).toMatchObject({
      variant_id: expect.any(Number),
      display_title: expect.any(String),
      collection_id: expect.any(String),
      service_type_id: expect.any(String),
    });
  });

  it("fetches a mapped catalog from Supabase", async () => {
    const { fetchCatalogFromSupabase, shouldUseSupabaseCatalog } =
      await import("@/services/catalogService");

    expect(shouldUseSupabaseCatalog()).toBe(true);

    const catalog = await fetchCatalogFromSupabase();
    expect(catalog.length).toBeGreaterThan(0);

    const first = catalog[0];
    if (!first) throw new Error("Expected at least one catalog item");
    expect(first.id).toBeGreaterThan(0);
    expect(first.standardName.length).toBeGreaterThan(0);
    expect(first.price.length).toBeGreaterThan(0);
    expect(first.duration.length).toBeGreaterThan(0);
    expect(Array.isArray(first.features)).toBe(true);
    expect(Array.isArray(first.tags)).toBe(true);
  });

  it("loads a known service variant with joined extras", async () => {
    const { getSupabaseClient } = await import("@/lib/supabase");
    const supabase = getSupabaseClient()!;

    const { data: topListing } = await supabase
      .from("marketplace_listings_view")
      .select("variant_id")
      .order("popularity_score", { ascending: false })
      .limit(1)
      .maybeSingle();

    expect(topListing?.variant_id).toBeDefined();

    const { fetchServiceById } = await import("@/services/catalogService");
    const service = await fetchServiceById(topListing!.variant_id);

    expect(service).toBeDefined();
    expect(service?.id).toBe(topListing!.variant_id);
    expect(service?.description.length).toBeGreaterThan(0);
  });

  it("returns best sellers from placements or popularity fallback", async () => {
    const { fetchBestSellers } = await import("@/services/catalogService");
    const bestSellers = await fetchBestSellers("all", 4);

    expect(bestSellers.length).toBeGreaterThan(0);
    expect(bestSellers.length).toBeLessThanOrEqual(4);
    expect(bestSellers.every((service) => service.serviceType !== "bundle")).toBe(true);
  });

  it("loads deploy modules for a deploy service when present", async () => {
    const { getSupabaseClient } = await import("@/lib/supabase");
    const supabase = getSupabaseClient()!;

    const { data: deployVariant } = await supabase
      .from("deploy_modules")
      .select("variant_id")
      .limit(1)
      .maybeSingle();

    if (!deployVariant?.variant_id) {
      return;
    }

    const { fetchDeployModulesForService } = await import("@/services/catalogService");
    const modules = await fetchDeployModulesForService("Deploy Service", deployVariant.variant_id);

    expect(modules.length).toBeGreaterThan(0);
    const firstModule = modules[0];
    if (!firstModule) throw new Error("Expected at least one deploy module");
    expect(firstModule.name.length).toBeGreaterThan(0);
    expect(Array.isArray(firstModule.features)).toBe(true);
  });

  it("returns a complete service detail payload", async () => {
    const { getSupabaseClient } = await import("@/lib/supabase");
    const supabase = getSupabaseClient()!;

    const { data: listing } = await supabase
      .from("marketplace_listings_view")
      .select("variant_id, display_title")
      .order("popularity_score", { ascending: false })
      .limit(1)
      .maybeSingle();

    expect(listing?.variant_id).toBeDefined();

    const { fetchServiceDetail } = await import("@/services/catalogService");
    const detail = await fetchServiceDetail(listing!.variant_id);

    expect(detail?.service.standardName).toBe(listing!.display_title);
    expect(detail?.deployModules).toBeDefined();
  });
});
