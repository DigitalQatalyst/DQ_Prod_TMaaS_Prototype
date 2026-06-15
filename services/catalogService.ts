import { writeCachedCatalog } from "@/lib/catalogPlaceholder";
import { filterCatalogServices, sortCatalogByPopularMix } from "@/lib/marketplaceCatalogFilters";
import { getSupabaseClient, isSupabaseConfigured } from "@/lib/supabase";
import { featureFlags } from "@/lib/featureFlags";
import type { ServiceProduct } from "@/lib/types/serviceProduct";
import type {
  CatalogListParams,
  CatalogPageResult,
  DeployModule,
  PdpContent,
  PdpDeliveryProcess,
  PdpWhyItMatters,
  ServiceDetailPayload,
} from "@/lib/types/catalog";

const LISTING_COLUMNS =
  "listing_id, variant_id, display_title, product_title, variant_name, collection_id, service_type_id, short_description, price_display, duration_display, popularity_score, delivery_complexity, badge, audience, industry_relevance, department, business_impact, implementation_model, positioning, is_high_impact";

type StaticBestSellersCollection =
  | "all"
  | "experience"
  | "operations"
  | "security"
  | "ai"
  | "strategy"
  | "engineering"
  | "data";

async function loadStaticCatalog(): Promise<ServiceProduct[]> {
  const { initialServices } = await import("@/data/services");
  return [...initialServices];
}

async function loadStaticServiceById(id: number): Promise<ServiceProduct | undefined> {
  const { getServiceById } = await import("@/data/services");
  return getServiceById(id);
}

async function loadStaticBestSellers(
  collection: StaticBestSellersCollection,
  limit: number
): Promise<ServiceProduct[]> {
  const { getBestSellers } = await import("@/data/services");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return getBestSellers(collection as any, limit);
}

async function loadStaticDeployModules(standardName: string): Promise<DeployModule[]> {
  const { deployModulesData } = await import("@/data/deployModules");
  const directMatch = deployModulesData[standardName];
  if (directMatch) return directMatch;
  const baseNameMatch = standardName.match(/^(.*?)\s*\(/);
  if (baseNameMatch) {
    const baseName = baseNameMatch[1]!;
    const matchingKey = Object.keys(deployModulesData).find((key) => key.startsWith(baseName));
    if (matchingKey) return deployModulesData[matchingKey] ?? [];
  }
  return [];
}

type ListingViewRow = {
  listing_id: number;
  variant_id: number;
  display_title: string;
  product_title: string;
  variant_name: string;
  collection_id: string;
  service_type_id: string;
  short_description: string | null;
  price_display: string | null;
  duration_display: string;
  popularity_score: number;
  delivery_complexity: string | null;
  badge: string | null;
  audience: string | null;
  industry_relevance: string | null;
  department: string | null;
  business_impact: string | null;
  implementation_model: string | null;
  positioning: string | null;
  is_high_impact: boolean;
};

export const shouldUseSupabaseCatalog = (): boolean =>
  featureFlags.isEnabled("supabaseCatalog") && isSupabaseConfigured();

async function fetchListingRowsByVariantIds(variantIds: number[]): Promise<ListingViewRow[]> {
  if (variantIds.length === 0) return [];

  const supabase = getSupabaseClient();
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("marketplace_listings_view")
    .select(LISTING_COLUMNS)
    .in("variant_id", variantIds);

  if (error) throw error;

  const rows = (data ?? []) as ListingViewRow[];
  const byVariantId = new Map(rows.map((row) => [row.variant_id, row]));
  return variantIds
    .map((id) => byVariantId.get(id))
    .filter((row): row is ListingViewRow => Boolean(row));
}

type VariantExtras = Awaited<ReturnType<typeof fetchVariantExtras>>;

function emptyVariantExtras(): VariantExtras {
  return {
    features: new Map(),
    tags: new Map(),
    descriptions: new Map(),
    remixNames: new Map(),
    milestones: new Map(),
    bundleRelated: new Map(),
    outcomes: new Map(),
  };
}

async function fetchCatalogListExtras(variantIds: number[]): Promise<VariantExtras> {
  const empty = emptyVariantExtras();
  const supabase = getSupabaseClient();
  if (!supabase || variantIds.length === 0) return empty;

  const [featuresRes, tagsRes, contentRes, remixRes] = await Promise.all([
    supabase
      .from("product_features")
      .select("variant_id, feature_text, sort_order")
      .in("variant_id", variantIds),
    supabase.from("product_tags").select("variant_id, tag_name").in("variant_id", variantIds),
    supabase
      .from("product_content")
      .select("variant_id, description, positioning")
      .in("variant_id", variantIds),
    supabase
      .from("variant_sector_titles")
      .select("variant_id, sector_category_id, title")
      .in("variant_id", variantIds),
  ]);

  const features = new Map<number, string[]>();
  for (const row of featuresRes.data ?? []) {
    const list = features.get(row.variant_id) ?? [];
    list.push(row.feature_text);
    features.set(row.variant_id, list);
  }

  const tags = new Map<number, string[]>();
  for (const row of tagsRes.data ?? []) {
    const list = tags.get(row.variant_id) ?? [];
    list.push(row.tag_name);
    tags.set(row.variant_id, list);
  }

  const descriptions = new Map<number, { description: string; positioning: string | null }>();
  for (const row of contentRes.data ?? []) {
    descriptions.set(row.variant_id, {
      description: row.description,
      positioning: row.positioning,
    });
  }

  const remixNames = new Map<number, Record<string, string>>();
  for (const row of remixRes.data ?? []) {
    const current = remixNames.get(row.variant_id) ?? {};
    current[row.sector_category_id] = row.title;
    remixNames.set(row.variant_id, current);
  }

  return { ...empty, features, tags, descriptions, remixNames };
}

async function mapListingRowsToServices(
  rows: ListingViewRow[],
  extrasMode: "list" | "full" = "full"
): Promise<ServiceProduct[]> {
  if (rows.length === 0) return [];
  const variantIds = rows.map((row) => row.variant_id);
  const extras =
    extrasMode === "list"
      ? await fetchCatalogListExtras(variantIds)
      : await fetchVariantExtras(variantIds);
  return rows.map((row) => mapRowToServiceProduct(row, extras));
}

function mapListingRowsToServicesSync(
  rows: ListingViewRow[],
  extras: VariantExtras = emptyVariantExtras()
): ServiceProduct[] {
  return rows.map((row) => mapRowToServiceProduct(row, extras));
}

async function fetchServicesByVariantIds(variantIds: number[]): Promise<ServiceProduct[]> {
  const rows = await fetchListingRowsByVariantIds(variantIds);
  return mapListingRowsToServices(rows, "full");
}

export function pickTopServicesByPopularity(
  services: ServiceProduct[],
  collection: string,
  limit: number,
  { excludeBundles = true }: { excludeBundles?: boolean } = {}
): ServiceProduct[] {
  let pool = excludeBundles ? services.filter((s) => s.serviceType !== "bundle") : services;
  if (collection !== "all") {
    pool = pool.filter((s) => s.collection === collection);
  }
  return sortCatalogByPopularMix(pool).slice(0, limit);
}

/** Tags, features, and sector remix titles — run after the fast listing fetch. */
export async function enrichCatalogListExtras(
  services: ServiceProduct[]
): Promise<ServiceProduct[]> {
  if (services.length === 0) return services;

  const extras = await fetchCatalogListExtras(services.map((service) => service.id));
  return services.map((service) => {
    const content = extras.descriptions.get(service.id);
    return {
      ...service,
      features: extras.features.get(service.id) ?? service.features,
      tags: extras.tags.get(service.id) ?? service.tags,
      remixName: extras.remixNames.get(service.id) ?? service.remixName,
      ...(content
        ? {
            description: content.description,
            positioning: content.positioning ?? service.positioning,
          }
        : {}),
    };
  });
}

async function fetchVariantExtras(variantIds: number[]) {
  const supabase = getSupabaseClient();
  if (!supabase || variantIds.length === 0) {
    return {
      features: new Map<number, string[]>(),
      tags: new Map<number, string[]>(),
      descriptions: new Map<number, { description: string; positioning: string | null }>(),
      remixNames: new Map<number, Record<string, string>>(),
      milestones: new Map<number, string[]>(),
      bundleRelated: new Map<number, number[]>(),
      outcomes: new Map<number, string[]>(),
    };
  }

  const [featuresRes, tagsRes, contentRes, remixRes, milestonesRes, bundleRes, categoryRes] =
    await Promise.all([
      supabase
        .from("product_features")
        .select("variant_id, feature_text, sort_order")
        .in("variant_id", variantIds),
      supabase.from("product_tags").select("variant_id, tag_name").in("variant_id", variantIds),
      supabase
        .from("product_content")
        .select("variant_id, description, positioning")
        .in("variant_id", variantIds),
      supabase
        .from("variant_sector_titles")
        .select("variant_id, sector_category_id, title")
        .in("variant_id", variantIds),
      supabase
        .from("product_timeline_milestones")
        .select("variant_id, milestone_text, sort_order")
        .in("variant_id", variantIds),
      supabase
        .from("bundle_items")
        .select("bundle_variant_id, included_variant_id, sort_order")
        .in("bundle_variant_id", variantIds),
      supabase
        .from("marketplace_listings_view")
        .select("variant_id, product_id")
        .in("variant_id", variantIds),
    ]);

  const productIds = [...new Set((categoryRes.data ?? []).map((r) => r.product_id))];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const outcomesRes = productIds.length
    ? await (supabase as any)
        .from("product_category_map")
        .select("product_id, category_id")
        .in("product_id", productIds)
    : { data: [] as { product_id: number; category_id: string }[] };

  const variantToProduct = new Map(
    (categoryRes.data ?? []).map((r) => [r.variant_id as number, r.product_id as number])
  );

  const features = new Map<number, string[]>();
  for (const row of featuresRes.data ?? []) {
    const list = features.get(row.variant_id) ?? [];
    list.push(row.feature_text);
    features.set(row.variant_id, list);
  }

  const tags = new Map<number, string[]>();
  for (const row of tagsRes.data ?? []) {
    const list = tags.get(row.variant_id) ?? [];
    list.push(row.tag_name);
    tags.set(row.variant_id, list);
  }

  const descriptions = new Map<number, { description: string; positioning: string | null }>();
  for (const row of contentRes.data ?? []) {
    descriptions.set(row.variant_id, {
      description: row.description,
      positioning: row.positioning,
    });
  }

  const remixNames = new Map<number, Record<string, string>>();
  for (const row of remixRes.data ?? []) {
    const current = remixNames.get(row.variant_id) ?? {};
    current[row.sector_category_id] = row.title;
    remixNames.set(row.variant_id, current);
  }

  const milestones = new Map<number, string[]>();
  for (const row of milestonesRes.data ?? []) {
    const list = milestones.get(row.variant_id) ?? [];
    list.push(row.milestone_text);
    milestones.set(row.variant_id, list);
  }

  const bundleRelated = new Map<number, number[]>();
  for (const row of bundleRes.data ?? []) {
    const list = bundleRelated.get(row.bundle_variant_id) ?? [];
    list.push(row.included_variant_id);
    bundleRelated.set(row.bundle_variant_id, list);
  }

  const productOutcomes = new Map<number, string[]>();
  for (const row of outcomesRes.data ?? []) {
    const list = productOutcomes.get(row.product_id) ?? [];
    list.push(row.category_id);
    productOutcomes.set(row.product_id, list);
  }

  const outcomes = new Map<number, string[]>();
  for (const variantId of variantIds) {
    const productId = variantToProduct.get(variantId);
    if (productId) outcomes.set(variantId, productOutcomes.get(productId) ?? []);
  }

  return { features, tags, descriptions, remixNames, milestones, bundleRelated, outcomes };
}

function mapRowToServiceProduct(
  row: ListingViewRow,
  extras: Awaited<ReturnType<typeof fetchVariantExtras>>
): ServiceProduct {
  const variantId = row.variant_id;
  const content = extras.descriptions.get(variantId);

  return {
    id: variantId,
    collection: row.collection_id as ServiceProduct["collection"],
    serviceType: row.service_type_id as ServiceProduct["serviceType"],
    standardName: row.display_title,
    remixName: extras.remixNames.get(variantId) ?? {},
    description: content?.description ?? row.short_description ?? "",
    positioning: content?.positioning ?? row.positioning ?? "",
    price: row.price_display ?? "Pricing on request",
    duration: row.duration_display,
    popularityRank: row.popularity_score,
    deliveryComplexity: (row.delivery_complexity ??
      "medium") as ServiceProduct["deliveryComplexity"],
    badge: row.badge ?? "",
    audience: row.audience ?? "",
    industryRelevance: row.industry_relevance ?? "",
    features: extras.features.get(variantId) ?? [],
    tags: extras.tags.get(variantId) ?? [],
    outcomes: extras.outcomes.get(variantId) ?? [],
    department: row.department ?? "",
    businessImpact: row.business_impact ?? "",
    implementationModel: row.implementation_model ?? "",
    timelineMilestones: extras.milestones.get(variantId) ?? [],
    relatedServices: extras.bundleRelated.get(variantId) ?? [],
  };
}

export async function fetchCatalogFromSupabase(): Promise<ServiceProduct[]> {
  const supabase = getSupabaseClient();
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("marketplace_listings_view")
    .select(LISTING_COLUMNS)
    .order("popularity_score", { ascending: false });

  if (error) throw error;

  return mapListingRowsToServices((data ?? []) as ListingViewRow[], "full");
}

export async function fetchCatalogPage(params: CatalogListParams): Promise<CatalogPageResult> {
  if (!shouldUseSupabaseCatalog()) {
    const catalog = await loadStaticCatalog();
    const filtered = filterCatalogServices(catalog, params);
    const start = (params.page - 1) * params.pageSize;
    return {
      services: filtered.slice(start, start + params.pageSize),
      totalCount: filtered.length,
    };
  }

  const supabase = getSupabaseClient();
  if (!supabase) {
    const catalog = await loadStaticCatalog();
    const filtered = filterCatalogServices(catalog, params);
    const start = (params.page - 1) * params.pageSize;
    return {
      services: filtered.slice(start, start + params.pageSize),
      totalCount: filtered.length,
    };
  }

  const {
    page,
    pageSize,
    activeTab,
    searchQuery,
    selectedCategories,
    selectedServiceTypes,
    selectedIncluded,
    sortBy,
    excludeVariantIds = [],
  } = params;

  const wantsMultiOnly = selectedIncluded.includes("multi") && !selectedIncluded.includes("single");
  const wantsSingleOnly =
    selectedIncluded.includes("single") && !selectedIncluded.includes("multi");

  let query = supabase
    .from("product_search_index")
    .select("variant_id, listing_id, popularity_score, price_amount_min, duration_weeks_min", {
      count: "exact",
    });

  if (activeTab === "bundles" || wantsMultiOnly) {
    query = query.eq("is_bundle", true);
  } else {
    query = query.eq("is_bundle", false);
  }

  if (activeTab !== "all" && activeTab !== "bundles") {
    query = query.eq("collection_id", activeTab);
  }

  if (selectedCategories.length > 0) {
    query = query.in("collection_id", selectedCategories);
  }

  if (selectedServiceTypes.length > 0) {
    query = query.in("service_type_id", selectedServiceTypes);
  }

  const trimmedSearch = searchQuery.trim();
  if (trimmedSearch) {
    query = query.textSearch("search_vector", trimmedSearch, {
      type: "websearch",
      config: "english",
    });
  }

  if (excludeVariantIds.length > 0) {
    query = query.not("variant_id", "in", `(${excludeVariantIds.join(",")})`);
  }

  if (sortBy === "popular") {
    query = query.order("popularity_score", { ascending: false });
  } else if (sortBy === "price-low") {
    query = query.order("price_amount_min", { ascending: true, nullsFirst: false });
  } else if (sortBy === "fastest") {
    query = query.order("duration_weeks_min", { ascending: true, nullsFirst: false });
  }

  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  const { data, count, error } = await query.range(from, to);
  if (error) throw error;

  const variantIds = (data ?? []).map((row) => row.variant_id as number);
  const services = await fetchServicesByVariantIds(variantIds);

  return {
    services,
    totalCount: count ?? services.length,
  };
}

export async function fetchCatalog(): Promise<ServiceProduct[]> {
  if (!shouldUseSupabaseCatalog()) return loadStaticCatalog();

  const catalog = await fetchCatalogFromSupabase();
  writeCachedCatalog(catalog);
  return catalog;
}

export async function fetchServiceById(id: number): Promise<ServiceProduct | undefined> {
  if (!shouldUseSupabaseCatalog()) return loadStaticServiceById(id);

  const supabase = getSupabaseClient();
  if (!supabase) return loadStaticServiceById(id);

  const { data, error } = await supabase
    .from("marketplace_listings_view")
    .select(LISTING_COLUMNS)
    .eq("variant_id", id)
    .maybeSingle();

  if (error) throw error;
  if (!data) return undefined;

  const extras = await fetchVariantExtras([id]);
  return mapRowToServiceProduct(data as ListingViewRow, extras);
}

export async function fetchBestSellers(
  collection: string = "all",
  limit = 4
): Promise<ServiceProduct[]> {
  if (!shouldUseSupabaseCatalog()) {
    return loadStaticBestSellers(collection as StaticBestSellersCollection, limit);
  }

  const catalog = await fetchCatalog();
  return pickTopServicesByPopularity(catalog, collection, limit);
}

type ProductContentPdpRow = {
  variant_id: number;
  hero_summary: string | null;
  overview_paragraphs: string[] | null;
  audience_description: string | null;
  deliverables_summary: string[] | null;
  delivery_process: PdpDeliveryProcess | null;
  package_highlights: string[] | null;
  why_it_matters: PdpWhyItMatters | null;
  faq_intro: string | null;
};

async function fetchPdpContent(variantId: number): Promise<PdpContent | undefined> {
  if (!shouldUseSupabaseCatalog()) return undefined;

  const supabase = getSupabaseClient();
  if (!supabase) return undefined;

  const [contentRes, deliverablesRes, faqsRes] = await Promise.all([
    supabase
      .from("product_content")
      .select(
        "variant_id, hero_summary, overview_paragraphs, audience_description, deliverables_summary, delivery_process, package_highlights, why_it_matters, faq_intro"
      )
      .eq("variant_id", variantId)
      .maybeSingle(),
    supabase
      .from("variant_deliverables")
      .select("title, description, sort_order")
      .eq("variant_id", variantId)
      .order("sort_order"),
    supabase
      .from("product_faqs")
      .select("question, answer, sort_order")
      .eq("variant_id", variantId)
      .order("sort_order"),
  ]);

  const schemaNotReady = (message: string | undefined) =>
    Boolean(
      message &&
      (/does not exist/i.test(message) ||
        /relation .* does not exist/i.test(message) ||
        /column .* does not exist/i.test(message))
    );

  if (contentRes.error) {
    if (schemaNotReady(contentRes.error.message)) return undefined;
    throw contentRes.error;
  }
  if (deliverablesRes.error) {
    if (schemaNotReady(deliverablesRes.error.message)) return undefined;
    throw deliverablesRes.error;
  }
  if (faqsRes.error) {
    if (schemaNotReady(faqsRes.error.message)) return undefined;
    throw faqsRes.error;
  }

  const row = contentRes.data as ProductContentPdpRow | null;
  const deliverables = (deliverablesRes.data ?? []).map((d) => ({
    title: d.title,
    description: d.description,
  }));
  const faqs = (faqsRes.data ?? []).map((f) => ({
    question: f.question,
    answer: f.answer,
  }));

  const hasExtendedContent =
    row?.hero_summary ||
    row?.overview_paragraphs?.length ||
    row?.audience_description ||
    row?.deliverables_summary?.length ||
    row?.delivery_process?.steps?.length ||
    row?.package_highlights?.length ||
    row?.why_it_matters ||
    row?.faq_intro ||
    deliverables.length > 0 ||
    faqs.length > 0;

  if (!hasExtendedContent) return undefined;

  const pdpContent: PdpContent = {};
  if (row?.hero_summary) pdpContent.heroSummary = row.hero_summary;
  if (row?.overview_paragraphs?.length) pdpContent.overviewParagraphs = row.overview_paragraphs;
  if (row?.audience_description) pdpContent.audienceDescription = row.audience_description;
  if (row?.deliverables_summary?.length) pdpContent.deliverablesSummary = row.deliverables_summary;
  if (deliverables.length > 0) pdpContent.deliverables = deliverables;
  if (row?.delivery_process) pdpContent.deliveryProcess = row.delivery_process;
  if (row?.package_highlights?.length) pdpContent.packageHighlights = row.package_highlights;
  if (row?.why_it_matters) pdpContent.whyItMatters = row.why_it_matters;
  if (row?.faq_intro) pdpContent.faqIntro = row.faq_intro;
  if (faqs.length > 0) pdpContent.faqs = faqs;
  return pdpContent;
}

export async function fetchDeployModulesForService(
  standardName: string,
  variantId?: number
): Promise<DeployModule[]> {
  if (!shouldUseSupabaseCatalog() || !variantId) {
    return loadStaticDeployModules(standardName);
  }

  const supabase = getSupabaseClient();
  if (!supabase) return [];

  const { data: modules, error } = await supabase
    .from("deploy_modules")
    .select("id, name, sort_order")
    .eq("variant_id", variantId)
    .order("sort_order");

  if (error) throw error;
  if (!modules?.length) return [];

  const moduleIds = modules.map((m) => m.id);
  const { data: features } = await supabase
    .from("deploy_module_features")
    .select("module_id, feature_text, sort_order")
    .in("module_id", moduleIds)
    .order("sort_order");

  const featuresByModule = new Map<number, string[]>();
  for (const f of features ?? []) {
    const list = featuresByModule.get(f.module_id) ?? [];
    list.push(f.feature_text);
    featuresByModule.set(f.module_id, list);
  }

  return modules.map((m) => ({
    name: m.name,
    features: featuresByModule.get(m.id) ?? [],
  }));
}

export async function fetchServiceDetail(id: number): Promise<ServiceDetailPayload | undefined> {
  const service = await fetchServiceById(id);
  if (!service) return undefined;

  const [deployModules, pdpContent] = await Promise.all([
    fetchDeployModulesForService(service.standardName, service.id),
    fetchPdpContent(id),
  ]);

  const payload: ServiceDetailPayload = { service, deployModules };
  if (pdpContent) payload.pdpContent = pdpContent;
  return payload;
}
