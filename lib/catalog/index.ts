// ---------------------------------------------------------------------------
// Catalog utilities — display labels, filters, sorting, product helpers.
// Types are inlined here to keep lib/ independent of src/.
// ---------------------------------------------------------------------------

export const CATALOG_QUERY_KEY = ["catalog"] as const;

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type ServiceTypeId =
  | "advisory"
  | "design"
  | "ai_design"
  | "deploy"
  | "ai_deploy"
  | "manage"
  | "bundle";

export type DeliveryComplexity = "low" | "medium" | "high";

export interface ServiceProduct {
  id: number;
  collection: string;
  serviceType: ServiceTypeId;
  standardName: string;
  remixName: Record<string, string>;
  description: string;
  positioning: string;
  price: string;
  duration: string;
  popularityRank: number;
  deliveryComplexity: DeliveryComplexity;
  badge: string;
  audience: string;
  industryRelevance: string;
  features: string[];
  tags: string[];
  outcomes: string[];
  department: string;
  businessImpact: string;
  implementationModel: string;
  timelineMilestones: string[];
  relatedServices: number[];
}

// ---------------------------------------------------------------------------
// serviceProductUtils
// ---------------------------------------------------------------------------

export function getRemixedName(service: ServiceProduct, remixKey: string = "all"): string {
  if (remixKey === "all") return service.standardName;
  return service.remixName[remixKey] ?? service.standardName;
}

const PRICE_DISPLAY_OVERRIDES: Record<string, string> = {
  Custom: "Pricing on request",
  "Custom Monthly Plans": "Pricing on request",
};

export function formatPriceDisplay(price: string): string {
  const trimmed = price.trim();
  return PRICE_DISPLAY_OVERRIDES[trimmed] ?? trimmed;
}

export function parseServicePrice(price: string): number {
  return Number(price.replace(/[^0-9]/g, "")) || 0;
}

export function formatServicePrice(amount: number): string {
  return `$${amount.toLocaleString("en-US")}`;
}

// ---------------------------------------------------------------------------
// marketplaceDisplayLabels
// ---------------------------------------------------------------------------

const VARIANT_SUFFIX_RE =
  /^(.+?)\s+-\s+(Assess|Design|AI Design|Deploy|AI Deploy|Managed|Managed Service|Transformation Bundle|Advisory Set|Design Services Set|Deploy Services Set|Managed Services Set)$/;

export const PRODUCT_DISPLAY_RENAMES: Record<string, string> = {
  "Mobile Apps": "Mobile Apps & Services",
  "Physical Channels": "Physical & Frontline Channels",
  "CRM Solutions": "CRM & Customer Relationship",
  "Marketing Solutions": "Marketing Operations",
  "Advisory Set": "Flexible Advisory Package",
  "Design Services Set": "Flexible Design Package",
  "Deploy Services Set": "Flexible Deploy Package",
  "Managed Services Set": "Flexible Managed Services Package",
};

const SUFFIX_TO_SERVICE_TYPE: Record<string, string> = {
  Assess: "advisory",
  Design: "design",
  "AI Design": "ai_design",
  Deploy: "deploy",
  "AI Deploy": "ai_deploy",
  Managed: "manage",
  "Managed Service": "manage",
  "Transformation Bundle": "bundle",
  "Advisory Set": "bundle",
  "Design Services Set": "bundle",
  "Deploy Services Set": "bundle",
  "Managed Services Set": "bundle",
};

const CARD_STAGE_LABEL: Record<string, string> = {
  advisory: "Assess",
  design: "Design",
  ai_design: "AI Design",
  deploy: "Deploy",
  ai_deploy: "AI Deploy",
  manage: "Managed Service",
  bundle: "End-to-end bundle",
};

const PDP_TYPE_BADGE_LABEL: Record<string, string> = {
  advisory: "Assessment",
  design: "Design",
  ai_design: "AI Design",
  deploy: "Deploy",
  ai_deploy: "AI Deploy",
  manage: "Managed Service",
  bundle: "End-to-end bundle",
};

export const MARKETPLACE_SERVICE_TYPE_LABELS: Record<string, string> = {
  advisory: "Assess",
  design: "Design",
  ai_design: "AI Design",
  deploy: "Deploy",
  ai_deploy: "AI Deploy",
  manage: "Managed Service",
  bundle: "End-to-end bundle",
};

export const BUNDLE_PDP_SUBTITLE =
  "Full transformation path — assessment, design, deployment, and managed service, scoped to your priorities.";

export const BUNDLE_PDP_SUBTITLE_SHORT =
  "Advisory through managed operations, tailored to your organisation.";

export const BUNDLE_INCLUSION_LINE =
  "Includes design, AI design, deploy, AI deploy, and managed service stages, scoped during assessment.";

type ParsedName = {
  productStem: string;
  variantSuffix: string | null;
  serviceType: string | undefined;
};

function parseStandardName(standardName: string): ParsedName {
  const withoutHighImpact = standardName.replace(" (High-Impact)", "").trim();
  const match = withoutHighImpact.match(VARIANT_SUFFIX_RE);
  if (!match) {
    return { productStem: withoutHighImpact, variantSuffix: null, serviceType: undefined };
  }
  const variantSuffix = match[2]!;
  return {
    productStem: match[1]!.trim(),
    variantSuffix,
    serviceType: SUFFIX_TO_SERVICE_TYPE[variantSuffix],
  };
}

function renameProductStem(stem: string): string {
  return PRODUCT_DISPLAY_RENAMES[stem] ?? stem;
}

function resolveServiceType(standardName: string, serviceType?: string): string | undefined {
  if (serviceType) return serviceType;
  return parseStandardName(standardName).serviceType;
}

const PDP_BUNDLE_TITLE_STAGE = "End-to-end transformation";

function formatTitle(
  standardName: string,
  serviceType: string | undefined,
  stageLabel: string | undefined,
  bundleTitleStage: string = PDP_BUNDLE_TITLE_STAGE
): string {
  const { productStem, variantSuffix } = parseStandardName(standardName);
  const product = renameProductStem(productStem);

  if (variantSuffix && productStem === variantSuffix) {
    return product;
  }

  if (serviceType === "bundle" || variantSuffix === "Transformation Bundle") {
    return `${product} - ${bundleTitleStage}`;
  }

  const stage =
    stageLabel ?? (serviceType ? CARD_STAGE_LABEL[serviceType] : variantSuffix) ?? variantSuffix;

  if (!stage) return product;
  return `${product} - ${stage}`;
}

export function getMarketplaceCardTitle(standardName: string, serviceType?: string): string {
  const type = resolveServiceType(standardName, serviceType);
  const stage = type ? CARD_STAGE_LABEL[type] : undefined;
  return formatTitle(standardName, type, stage, CARD_STAGE_LABEL["bundle"]);
}

export function getPdpDisplayTitle(standardName: string, serviceType?: string): string {
  const type = resolveServiceType(standardName, serviceType);
  const stage = type ? CARD_STAGE_LABEL[type] : undefined;
  return formatTitle(standardName, type, stage, PDP_BUNDLE_TITLE_STAGE);
}

/** @deprecated Use getPdpDisplayTitle or getMarketplaceCardTitle */
export function getDisplayTitle(standardName: string, serviceType?: string): string {
  return getPdpDisplayTitle(standardName, serviceType);
}

export function getPdpTypeBadgeLabel(serviceType: string, badge?: string): string {
  if (serviceType === "bundle") return PDP_TYPE_BADGE_LABEL["bundle"]!;
  return PDP_TYPE_BADGE_LABEL[serviceType] ?? badge ?? serviceType;
}

export function getDisplayProductName(standardName: string): string {
  const { productStem } = parseStandardName(standardName);
  return renameProductStem(productStem);
}

// ---------------------------------------------------------------------------
// marketplaceCatalogFilters
// ---------------------------------------------------------------------------

export type MarketplaceSortBy = "popular" | "price-low" | "fastest";

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
  const activeSector = selectedSectors.length > 0 ? selectedSectors[0]! : "all";

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

    return matchesCollection && matchesCategory && matchesServiceType && matchesSearch;
  });

  if (sortBy === "popular") {
    return sortCatalogByPopularMix(filtered);
  }

  return filtered.sort((a, b) => compareServices(a, b, sortBy));
}
