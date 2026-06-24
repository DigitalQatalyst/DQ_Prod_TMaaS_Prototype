import { describe, expect, it } from "vitest";
import { initialServices } from "@/data/services";
import { sectorIdToCatalogTag } from "@/data/marketplaceNavigation";
import { filterCatalogServices, sortCatalogByPopularMix } from "@/lib/marketplaceCatalogFilters";
import type { ServiceProduct } from "@/lib/types/serviceProduct";

function cloneWithId(service: ServiceProduct, id: number): ServiceProduct {
  return { ...service, id };
}

describe("sortCatalogByPopularMix", () => {
  it("interleaves service types instead of grouping by stage popularity", () => {
    const assessA = cloneWithId(initialServices[0]!, 1);
    const designA = cloneWithId(initialServices[1]!, 2);
    const deployA = cloneWithId(initialServices[3]!, 4);
    const assessB = cloneWithId(initialServices[6]!, 7);

    const mixed = sortCatalogByPopularMix([assessA, designA, deployA, assessB]);

    expect(mixed.map((service) => service.serviceType)).toEqual([
      "advisory",
      "design",
      "deploy",
      "advisory",
    ]);
  });
});

describe("filterCatalogServices", () => {
  it("returns a type mix on the first page when sorting by popular", () => {
    const assessHeavyOrder = initialServices
      .filter((service) => service.serviceType !== "bundle")
      .sort((a, b) => b.popularityRank - a.popularityRank || a.id - b.id);

    const filtered = filterCatalogServices(assessHeavyOrder, {
      activeTab: "all",
      searchQuery: "",
      selectedCategories: [],
      selectedServiceTypes: [],
      selectedIncluded: [],
      selectedSectors: [],
      sortBy: "popular",
      excludeVariantIds: [],
    });

    const firstPageTypes = filtered.slice(0, 6).map((service) => service.serviceType);

    expect(new Set(firstPageTypes).size).toBeGreaterThan(1);
    expect(firstPageTypes[0]).toBe("advisory");
    expect(firstPageTypes[1]).toBe("design");
    expect(firstPageTypes[2]).toBe("ai_design");
  });

  it("filters services by Economy 4.0 sector tags", () => {
    const farmingTag = sectorIdToCatalogTag("farming-4-0");
    // Seed a known farming-tagged service since the static catalog may not include one.
    const farmingService: ServiceProduct = {
      ...initialServices[0]!,
      id: 9998,
      tags: [...(initialServices[0]!.tags ?? []), farmingTag],
    };
    const catalogWithFarming = [...initialServices, farmingService];
    const farmingServices = catalogWithFarming.filter((s) => s.tags.includes(farmingTag));

    const filtered = filterCatalogServices(catalogWithFarming, {
      activeTab: "all",
      searchQuery: "",
      selectedCategories: [],
      selectedServiceTypes: [],
      selectedIncluded: [],
      selectedSectors: ["farming-4-0"],
      sortBy: "popular",
      excludeVariantIds: [],
    });

    expect(farmingServices.length).toBeGreaterThan(0);
    expect(filtered).toHaveLength(farmingServices.length);
    expect(filtered.every((service) => service.tags.includes(farmingTag))).toBe(true);
  });

  it("matches sector remix titles when catalog tags are absent", () => {
    const service: ServiceProduct = {
      ...initialServices[0]!,
      id: 9999,
      tags: [],
      remixName: { "government-4-0": "Government Remix Title" },
    };

    const filtered = filterCatalogServices([service], {
      activeTab: "all",
      searchQuery: "",
      selectedCategories: [],
      selectedServiceTypes: [],
      selectedIncluded: [],
      selectedSectors: ["government-4-0"],
      sortBy: "popular",
      excludeVariantIds: [],
    });

    expect(filtered).toHaveLength(1);
  });
});
