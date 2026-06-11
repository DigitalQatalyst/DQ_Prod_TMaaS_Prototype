import { initialServices, getServiceById, getBestSellers as getStaticBestSellers } from "@/data/services";
import { deployModulesData, type DeployModule } from "@/data/deployModules";
import { getSupabaseClient, isSupabaseConfigured } from "@/lib/supabase";
import { featureFlags } from "@/lib/featureFlags";
import type { ServiceProduct } from "@/types/serviceProduct";
import type { ServiceDetailPayload } from "@/types/catalog";

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

async function fetchListingRows(): Promise<ListingViewRow[]> {
  const supabase = getSupabaseClient();
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("marketplace_listings_view")
    .select("*")
    .order("popularity_score", { ascending: false });

  if (error) throw error;
  return (data ?? []) as ListingViewRow[];
}

async function fetchVariantExtras(variantIds: number[]) {
  const supabase = getSupabaseClient();
  if (!supabase || variantIds.length === 0) {
    return {
      features: new Map<number, string[]>(),
      tags: new Map<number, string[]>(),
      descriptions: new Map<number, string>(),
      remixNames: new Map<number, Record<string, string>>(),
      milestones: new Map<number, string[]>(),
      bundleRelated: new Map<number, number[]>(),
      outcomes: new Map<number, string[]>(),
    };
  }

  const [featuresRes, tagsRes, contentRes, remixRes, milestonesRes, bundleRes, categoryRes] =
    await Promise.all([
      supabase.from("product_features").select("variant_id, feature_text, sort_order").in("variant_id", variantIds),
      supabase.from("product_tags").select("variant_id, tag_name").in("variant_id", variantIds),
      supabase.from("product_content").select("variant_id, description, positioning").in("variant_id", variantIds),
      supabase.from("variant_sector_titles").select("variant_id, sector_category_id, title").in("variant_id", variantIds),
      supabase.from("product_timeline_milestones").select("variant_id, milestone_text, sort_order").in("variant_id", variantIds),
      supabase.from("bundle_items").select("bundle_variant_id, included_variant_id, sort_order").in("bundle_variant_id", variantIds),
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
    price: row.price_display ?? "Custom",
    duration: row.duration_display,
    popularityRank: row.popularity_score,
    deliveryComplexity: (row.delivery_complexity ?? "medium") as ServiceProduct["deliveryComplexity"],
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
  const rows = await fetchListingRows();
  const variantIds = rows.map((r) => r.variant_id);
  const extras = await fetchVariantExtras(variantIds);
  return rows.map((row) => mapRowToServiceProduct(row, extras));
}

export async function fetchCatalog(): Promise<ServiceProduct[]> {
  if (!shouldUseSupabaseCatalog()) return [...initialServices];
  return fetchCatalogFromSupabase();
}

export async function fetchServiceById(id: number): Promise<ServiceProduct | undefined> {
  if (!shouldUseSupabaseCatalog()) return getServiceById(id);

  const supabase = getSupabaseClient();
  if (!supabase) return getServiceById(id);

  const { data, error } = await supabase
    .from("marketplace_listings_view")
    .select("*")
    .eq("variant_id", id)
    .maybeSingle();

  if (error) throw error;
  if (!data) return undefined;

  const extras = await fetchVariantExtras([id]);
  return mapRowToServiceProduct(data as ListingViewRow, extras);
}

export function pickTopServicesByPopularity(
  services: ServiceProduct[],
  collection: string,
  limit: number,
  { excludeBundles = true }: { excludeBundles?: boolean } = {}
): ServiceProduct[] {
  let pool = excludeBundles
    ? services.filter((s) => s.serviceType !== "bundle")
    : services;
  if (collection !== "all") {
    pool = pool.filter((s) => s.collection === collection);
  }
  return [...pool].sort((a, b) => b.popularityRank - a.popularityRank).slice(0, limit);
}

export async function fetchBestSellers(
  collection: string = "all",
  limit = 4
): Promise<ServiceProduct[]> {
  if (!shouldUseSupabaseCatalog()) {
    return getStaticBestSellers(collection as Parameters<typeof getStaticBestSellers>[0], limit);
  }

  const supabase = getSupabaseClient();
  const catalog = await fetchCatalogFromSupabase();

  if (!supabase) {
    return pickTopServicesByPopularity(catalog, collection, limit);
  }

  let placementQuery = supabase
    .from("listing_placements")
    .select("listing_id, rank, category_id")
    .eq("placement", "best_seller")
    .order("rank", { ascending: true });

  if (collection !== "all") {
    placementQuery = placementQuery.eq("category_id", collection);
  } else {
    placementQuery = placementQuery.is("category_id", null);
  }

  const { data: placements, error: placementError } = await placementQuery.limit(limit);
  if (placementError) throw placementError;

  if (!placements?.length) {
    return pickTopServicesByPopularity(catalog, collection, limit);
  }

  const listingIds = placements.map((p) => p.listing_id);
  const { data: listingRows } = await supabase
    .from("marketplace_listings_view")
    .select("listing_id, variant_id")
    .in("listing_id", listingIds);

  const variantOrder = listingIds
    .map((lid) => listingRows?.find((r) => r.listing_id === lid)?.variant_id)
    .filter((id): id is number => typeof id === "number");

  const fromPlacements = variantOrder
    .map((variantId) => catalog.find((s) => s.id === variantId))
    .filter((s): s is ServiceProduct => Boolean(s) && s.serviceType !== "bundle");

  if (fromPlacements.length >= limit) {
    return fromPlacements.slice(0, limit);
  }

  const seen = new Set(fromPlacements.map((s) => s.id));
  const backfill = pickTopServicesByPopularity(catalog, collection, limit).filter(
    (s) => !seen.has(s.id)
  );

  return [...fromPlacements, ...backfill].slice(0, limit);
}

export async function fetchDeployModulesForService(
  standardName: string,
  variantId?: number
): Promise<DeployModule[]> {
  if (!shouldUseSupabaseCatalog() || !variantId) {
    if (deployModulesData[standardName]) return deployModulesData[standardName];
    const baseNameMatch = standardName.match(/^(.*?)\s*\(/);
    if (baseNameMatch) {
      const baseName = baseNameMatch[1];
      const matchingKey = Object.keys(deployModulesData).find((key) =>
        key.startsWith(baseName)
      );
      if (matchingKey) return deployModulesData[matchingKey];
    }
    return [];
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

  const deployModules = await fetchDeployModulesForService(service.standardName, service.id);
  return { service, deployModules };
}
