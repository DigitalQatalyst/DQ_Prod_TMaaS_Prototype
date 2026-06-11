/**
 * Seeds Supabase catalog from static fixtures.
 * Requires: SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY
 * Run: npm run db:seed
 */
import { createClient } from "@supabase/supabase-js";
import { initialServices } from "../src/data/services";
import {
  marketplaceCapabilities,
  marketplaceCoreCapabilities,
  marketplaceEconomySectors,
  marketplaceGoals,
} from "../src/data/marketplaceNavigation";
import { deployModulesData } from "../src/data/deployModules";
import { CURATED_SERVICE_IDS } from "../src/data/curatedCatalog";

const seedAll = process.env.SEED_ALL === "true";
const curatedIdSet = new Set<number>(CURATED_SERVICE_IDS);
const servicesToSeed = seedAll
  ? initialServices
  : initialServices.filter((s) => curatedIdSet.has(s.id));

const VARIANT_SUFFIX_RE =
  / - (Assess|Design|AI Design|Implementation|AI Implementation|Managed Service|Transformation Bundle)$/;

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/\(high-impact\)/gi, "high-impact")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 200);
}

function parseDurationWeeks(duration: string): { min: number | null; max: number | null } {
  const range = duration.match(/(\d+)\s*-\s*(\d+)/);
  if (range) {
    return { min: parseInt(range[1], 10), max: parseInt(range[2], 10) };
  }
  const single = duration.match(/(\d+)/);
  if (single) {
    const weeks = parseInt(single[1], 10);
    return { min: weeks, max: weeks };
  }
  return { min: null, max: null };
}

function parsePriceAmount(price: string): number | null {
  if (price === "Free" || price === "Custom") return price === "Free" ? 0 : null;
  const match = price.replace(/,/g, "").match(/(\d+)/);
  return match ? parseInt(match[1], 10) : null;
}

function resolvePurchasability(
  price: string,
  serviceType: string
): "buy_now" | "request_quote" | "free" | "not_purchasable" {
  if (price === "Free") return "free";
  if (price === "Custom" || serviceType === "bundle") return "request_quote";
  return "buy_now";
}

function resolvePriceType(price: string): "list" | "from" | "custom_floor" {
  if (price.startsWith("From")) return "from";
  if (price === "Custom") return "custom_floor";
  return "list";
}

function splitProductStem(standardName: string): { title: string; variantName: string } {
  const match = standardName.match(VARIANT_SUFFIX_RE);
  if (match) {
    return {
      title: standardName.replace(VARIANT_SUFFIX_RE, "").trim(),
      variantName: match[1],
    };
  }
  return { title: standardName, variantName: standardName };
}

function buildSku(collection: string, variantId: number, serviceType: string): string {
  const prefix = collection.slice(0, 3).toUpperCase();
  const type = serviceType.slice(0, 3).toUpperCase();
  return `${prefix}-${type}-${variantId}`;
}

async function main() {
  const url = process.env.SUPABASE_URL ?? process.env.VITE_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceKey) {
    console.error("Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY before seeding.");
    process.exit(1);
  }

  const supabase = createClient(url, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  console.log("Clearing existing catalog data...");
  const tables = [
    "service_audit_log",
    "service_sessions",
    "service_deliverables",
    "service_inputs",
    "service_orders",
    "order_items",
    "orders",
    "quotes",
    "cart_items",
    "carts",
    "listing_placements",
    "variant_prices",
    "marketplace_listings",
    "deploy_module_features",
    "deploy_modules",
    "product_content",
    "bundle_items",
    "variant_sector_titles",
    "product_timeline_milestones",
    "product_tags",
    "product_features",
    "product_category_map",
    "product_variants",
    "products",
    "merchants",
    "categories",
  ];

  for (const table of tables) {
    const { error } = await supabase.from(table).delete().neq("id", "00000000-0000-0000-0000-000000000000");
    if (error && !error.message.includes("Could not find")) {
      // UUID tables need different delete - use gt on serial
    }
  }

  // Truncate via RPC not available — delete in dependency order with broad filters
  await supabase.from("deploy_module_features").delete().gte("id", 0);
  await supabase.from("deploy_modules").delete().gte("id", 0);
  await supabase.from("product_content").delete().gte("variant_id", 0);
  await supabase.from("bundle_items").delete().gte("bundle_variant_id", 0);
  await supabase.from("variant_sector_titles").delete().gte("variant_id", 0);
  await supabase.from("product_timeline_milestones").delete().gte("id", 0);
  await supabase.from("product_tags").delete().gte("id", 0);
  await supabase.from("product_features").delete().gte("id", 0);
  await supabase.from("product_category_map").delete().gte("product_id", 0);
  await supabase.from("listing_placements").delete().gte("id", 0);
  await supabase.from("variant_prices").delete().gte("id", 0);
  await supabase.from("marketplace_listings").delete().gte("id", 0);
  await supabase.from("product_variants").delete().gte("id", 0);
  await supabase.from("products").delete().gte("id", 0);
  await supabase.from("merchants").delete().gte("id", 0);
  await supabase.from("categories").delete().neq("id", "");

  console.log("Seeding categories...");
  const categoryRows = [
    ...marketplaceCoreCapabilities.map((c, i) => ({
      id: c.id,
      parent_id: null,
      label: c.label,
      category_type: "capability",
      sort_order: i,
      is_facetable: true,
    })),
    { id: "bundles", parent_id: null, label: "Bundles", category_type: "navigation", sort_order: 99, is_facetable: false },
    ...marketplaceEconomySectors.map((s, i) => ({
      id: s.id,
      parent_id: null,
      label: s.label,
      category_type: "sector",
      sort_order: i,
      is_facetable: true,
    })),
    ...marketplaceGoals.map((g, i) => ({
      id: g.id,
      parent_id: null,
      label: g.label,
      category_type: "goal",
      sort_order: i,
      is_facetable: true,
    })),
  ];

  const { error: catError } = await supabase.from("categories").upsert(categoryRows);
  if (catError) throw catError;

  console.log("Seeding merchant...");
  const { data: merchantRows, error: merchantError } = await supabase
    .from("merchants")
    .upsert({ slug: "digitalqatalyst", name: "DigitalQatalyst", status: "active" })
    .select()
    .single();
  if (merchantError) throw merchantError;
  const merchantId = merchantRows.id as number;

  const productStemToId = new Map<string, number>();
  const variantIdToListingId = new Map<number, number>();

  console.log(
    `Seeding ${servicesToSeed.length} services (${seedAll ? "full catalog" : "curated"})...`
  );

  for (const service of servicesToSeed) {
    const { title, variantName } = splitProductStem(service.standardName);
    const productSlug = slugify(title);
    let productId = productStemToId.get(productSlug);

    if (!productId) {
      const { data: product, error: productError } = await supabase
        .from("products")
        .insert({
          slug: productSlug,
          title,
          short_description: service.description,
          collection_id: service.collection,
          is_high_impact: service.standardName.includes("(High-Impact)"),
          audience: service.audience,
          industry_relevance: service.industryRelevance,
          department: service.department,
          business_impact: service.businessImpact,
          status: "published",
        })
        .select("id")
        .single();
      if (productError) throw productError;
      productId = product.id as number;
      productStemToId.set(productSlug, productId);

      if (service.outcomes?.length) {
        const { error: mapError } = await supabase.from("product_category_map").insert(
          service.outcomes.map((goalId) => ({
            product_id: productId,
            category_id: goalId,
          }))
        );
        if (mapError) throw mapError;
      }
    }

    const duration = parseDurationWeeks(service.duration);
    const variantSlug = slugify(`${title}-${variantName}-${service.id}`);

    const { error: variantError } = await supabase.from("product_variants").insert({
      id: service.id,
      product_id: productId,
      sku: buildSku(service.collection, service.id, service.serviceType),
      slug: variantSlug,
      variant_name: variantName,
      service_type_id: service.serviceType,
      duration_display: service.duration,
      duration_weeks_min: duration.min,
      duration_weeks_max: duration.max,
      delivery_complexity: service.deliveryComplexity,
      implementation_model: service.implementationModel,
      badge: service.badge,
      positioning: service.positioning,
      is_default_variant: variantName === "Assess",
      status: "published",
    });
    if (variantError) throw variantError;

    const { data: listing, error: listingError } = await supabase
      .from("marketplace_listings")
      .insert({
        merchant_id: merchantId,
        variant_id: service.id,
        listing_status: "active",
        purchasability: resolvePurchasability(service.price, service.serviceType),
        popularity_score: service.popularityRank,
        published_at: new Date().toISOString(),
      })
      .select("id")
      .single();
    if (listingError) throw listingError;
    variantIdToListingId.set(service.id, listing.id as number);

    const { error: priceError } = await supabase.from("variant_prices").insert({
      listing_id: listing.id,
      price_type: resolvePriceType(service.price),
      amount: parsePriceAmount(service.price),
      currency: "USD",
      price_display: service.price,
      billing_period: service.serviceType === "manage" ? "monthly" : "one_time",
      is_current: true,
    });
    if (priceError) throw priceError;

    const { error: contentError } = await supabase.from("product_content").insert({
      variant_id: service.id,
      description: service.description,
      positioning: service.positioning,
    });
    if (contentError) throw contentError;

    if (service.features?.length) {
      const { error: featError } = await supabase.from("product_features").insert(
        service.features.map((feature_text, sort_order) => ({
          variant_id: service.id,
          feature_text,
          sort_order,
        }))
      );
      if (featError) throw featError;
    }

    if (service.tags?.length) {
      const { error: tagError } = await supabase.from("product_tags").insert(
        service.tags.map((tag_name) => ({ variant_id: service.id, tag_name }))
      );
      if (tagError) throw tagError;
    }

    if (service.timelineMilestones?.length) {
      const { error: msError } = await supabase.from("product_timeline_milestones").insert(
        service.timelineMilestones.map((milestone_text, sort_order) => ({
          variant_id: service.id,
          milestone_text,
          sort_order,
        }))
      );
      if (msError) throw msError;
    }

    const remixEntries = Object.entries(service.remixName ?? {});
    if (remixEntries.length > 0) {
      const { error: remixError } = await supabase.from("variant_sector_titles").insert(
        remixEntries.map(([sector_category_id, title]) => ({
          variant_id: service.id,
          sector_category_id,
          title,
        }))
      );
      if (remixError) throw remixError;
    }
  }

  console.log("Seeding bundle items...");
  for (const service of servicesToSeed) {
    if (service.serviceType !== "bundle" || !service.relatedServices?.length) continue;
    const included = service.relatedServices.filter((id) =>
      seedAll ? true : curatedIdSet.has(id)
    );
    if (!included.length) continue;
    const { error } = await supabase.from("bundle_items").insert(
      included.map((included_variant_id, sort_order) => ({
        bundle_variant_id: service.id,
        included_variant_id,
        sort_order,
      }))
    );
    if (error) throw error;
  }

  console.log("Seeding deploy modules...");
  for (const service of servicesToSeed) {
    const modules = deployModulesData[service.standardName];
    if (!modules?.length) continue;
    for (let i = 0; i < modules.length; i++) {
      const mod = modules[i];
      const { data: modRow, error: modError } = await supabase
        .from("deploy_modules")
        .insert({ variant_id: service.id, name: mod.name, sort_order: i })
        .select("id")
        .single();
      if (modError) throw modError;
      if (mod.features?.length) {
        const { error: featError } = await supabase.from("deploy_module_features").insert(
          mod.features.map((feature_text, sort_order) => ({
            module_id: modRow.id,
            feature_text,
            sort_order,
          }))
        );
        if (featError) throw featError;
      }
    }
  }

  console.log("Seeding best-seller placements...");
  const collections = ["all", ...marketplaceCapabilities.map((c) => c.id).filter((id) => id !== "bundles")];
  for (const collection of collections) {
    const pool =
      collection === "all"
        ? [...servicesToSeed]
        : servicesToSeed.filter((s) => s.collection === collection);
    const top = pool.sort((a, b) => b.popularityRank - a.popularityRank).slice(0, 4);
    for (let rank = 0; rank < top.length; rank++) {
      const listingId = variantIdToListingId.get(top[rank].id);
      if (!listingId) continue;
      const { error } = await supabase.from("listing_placements").insert({
        listing_id: listingId,
        placement: "best_seller",
        category_id: collection === "all" ? null : collection,
        rank,
      });
      if (error) throw error;
    }
  }

  console.log("Resetting sequences...");
  const { error: seqError } = await supabase.rpc("reset_catalog_sequences");
  if (seqError) {
    console.warn("Could not reset sequences:", seqError.message);
  }

  console.log("Refreshing search index...");
  const { error: refreshError } = await supabase.rpc("refresh_product_search_index");
  if (refreshError) {
    console.warn("Could not refresh search index via RPC:", refreshError.message);
  }

  console.log("Seed complete.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
