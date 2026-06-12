import { describe, expect, it } from "vitest";
import { initialServices } from "@/data/services";
import { filterCatalogServices, sortCatalogByPopularMix } from "@/lib/marketplaceCatalogFilters";
import type { ServiceProduct } from "@/types/serviceProduct";

function cloneWithId(service: ServiceProduct, id: number): ServiceProduct {
  return { ...service, id };
}

describe("sortCatalogByPopularMix", () => {
  it("interleaves service types instead of grouping by stage popularity", () => {
    const assessA = cloneWithId(initialServices[0], 1);
    const designA = cloneWithId(initialServices[1], 2);
    const deployA = cloneWithId(initialServices[3], 4);
    const assessB = cloneWithId(initialServices[6], 7);

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

    const firstPageTypes = filtered
      .slice(0, 6)
      .map((service) => service.serviceType);

    expect(new Set(firstPageTypes).size).toBeGreaterThan(1);
    expect(firstPageTypes[0]).toBe("advisory");
    expect(firstPageTypes[1]).toBe("design");
    expect(firstPageTypes[2]).toBe("ai_design");
  });
});
