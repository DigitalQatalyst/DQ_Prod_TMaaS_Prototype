import { sectorIdToCatalogTag } from "@/data/marketplaceNavigation";
import { getRemixedName } from "@/lib/serviceProductUtils";
import type { ServiceProduct, ServiceTypeId } from "@/lib/types/serviceProduct";

function matchesSectorFilter(pkg: ServiceProduct, selectedSectors: string[]): boolean {
  if (selectedSectors.length === 0) return true;

  return selectedSectors.some((sectorId) => {
    const sectorTag = sectorIdToCatalogTag(sectorId);
    return (
      pkg.tags.includes(sectorTag) ||
      Object.prototype.hasOwnProperty.call(pkg.remixName, sectorId)
    );
  });
}

export type MarketplaceSortBy = "popular" | "price-low" | "fastest";

/** Journey order — used to interleave types when popularity scores tie across products. */
const SERVICE_TYPE_INTERLEAVE_ORDER: ServiceTypeId[] = [
  "advisory",
  "design",
  "ai_design",
  "deploy",
  "ai_deploy",
  "manage",
  "bundle",
];

function compareWithinPopularityBucket(a: ServiceProduct, b: ServiceProduct): number {
  return b.popularityRank - a.popularityRank || a.id - b.id;
}

/**
 * Popularity is scored per product stage (all Assess variants share the top band), so a flat
 * sort surfaces only one service type on early pages. Round-robin across types instead.
 */
export function sortCatalogByPopularMix(services: ServiceProduct[]): ServiceProduct[] {
  const buckets = new Map<ServiceTypeId, ServiceProduct[]>();

  for (const type of SERVICE_TYPE_INTERLEAVE_ORDER) {
    buckets.set(type, []);
  }

  for (const service of services) {
    const bucket = buckets.get(service.serviceType);
    if (bucket) {
      bucket.push(service);
    } else {
      buckets.set(service.serviceType, [service]);
    }
  }

  for (const bucket of buckets.values()) {
    bucket.sort(compareWithinPopularityBucket);
  }

  const activeTypes = SERVICE_TYPE_INTERLEAVE_ORDER.filter(
    (type) => (buckets.get(type)?.length ?? 0) > 0
  );

  const mixed: ServiceProduct[] = [];
  while (true) {
    let added = 0;
    for (const type of activeTypes) {
      const bucket = buckets.get(type);
      const next = bucket?.shift();
      if (next) {
        mixed.push(next);
        added++;
      }
    }
    if (added === 0) break;
  }

  return mixed;
}

export type MarketplaceCatalogFilters = {
  activeTab: string;
  searchQuery: string;
  selectedCategories: string[];
  selectedServiceTypes: string[];
  selectedIncluded: string[];
  selectedSectors: string[];
  sortBy: MarketplaceSortBy;
  excludeVariantIds?: number[];
};

function compareServices(a: ServiceProduct, b: ServiceProduct, sortBy: MarketplaceSortBy): number {
  if (sortBy === "popular") return b.popularityRank - a.popularityRank;
  if (sortBy === "price-low") {
    return parseInt(a.price.replace(/[$,]/g, ""), 10) - parseInt(b.price.replace(/[$,]/g, ""), 10);
  }
  if (sortBy === "fastest") {
    return parseInt(a.duration, 10) - parseInt(b.duration, 10);
  }
  return 0;
}

export function filterCatalogServices(
  catalog: ServiceProduct[],
  filters: MarketplaceCatalogFilters
): ServiceProduct[] {
  const {
    activeTab,
    searchQuery,
    selectedCategories,
    selectedServiceTypes,
    selectedIncluded,
    selectedSectors,
    sortBy,
    excludeVariantIds = [],
  } = filters;

  const excludeIds = new Set(excludeVariantIds);
  const wantsMultiOnly = selectedIncluded.includes("multi") && !selectedIncluded.includes("single");
  const wantsSingleOnly =
    selectedIncluded.includes("single") && !selectedIncluded.includes("multi");
  const activeSector = selectedSectors.length > 0 ? selectedSectors[0] : "all";

  const filtered = catalog.filter((pkg) => {
    if (excludeIds.has(pkg.id)) return false;

    const isBundle = pkg.serviceType === "bundle";

    if (activeTab === "bundles") {
      if (!isBundle) return false;
    } else if (wantsMultiOnly) {
      if (!isBundle) return false;
    } else if (wantsSingleOnly) {
      if (isBundle) return false;
    } else if (isBundle) {
      return false;
    }

    const matchesCollection =
      activeTab === "all" || activeTab === "bundles" || pkg.collection === activeTab;

    const matchesCategory =
      selectedCategories.length === 0 || selectedCategories.includes(pkg.collection);

    const matchesServiceType =
      selectedServiceTypes.length === 0 || selectedServiceTypes.includes(pkg.serviceType);

    const matchesSearch =
      searchQuery === "" ||
      pkg.standardName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      getRemixedName(pkg, activeSector).toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
      pkg.features.some((feat) => feat.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesSector = matchesSectorFilter(pkg, selectedSectors);

    return (
      matchesCollection &&
      matchesCategory &&
      matchesServiceType &&
      matchesSector &&
      matchesSearch
    );
  });

  if (sortBy === "popular") {
    return sortCatalogByPopularMix(filtered);
  }

  return filtered.sort((a, b) => compareServices(a, b, sortBy));
}
