/**
 * Generates SQL seed file from fixtures for remote apply via Supabase execute_sql.
 * Run: npx tsx scripts/generate-seed-sql.ts > supabase/seed-data.sql
 */
import { initialServices } from "../src/data/services";
import {
  marketplaceCapabilities,
  marketplaceCoreCapabilities,
  marketplaceEconomySectors,
  marketplaceGoals,
} from "../src/data/marketplaceNavigation";
import { deployModulesData } from "../src/data/deployModules";
import { CURATED_SERVICE_IDS } from "../src/data/curatedCatalog";
import { applyCardCopyOverride } from "../src/data/serviceCopy";

const seedAll = process.env.SEED_ALL === "true";
const curatedIdSet = new Set<number>(CURATED_SERVICE_IDS);
const servicesToSeed = (seedAll
  ? initialServices
  : initialServices.filter((s) => curatedIdSet.has(s.id))
).map(applyCardCopyOverride);

const VARIANT_SUFFIX_RE =
  / - (Assess|Design|AI Design|Deploy|AI Deploy|Managed|Implementation|AI Implementation|Managed Service|Transformation Bundle|Advisory Set|Design Services Set|Deploy Services Set|Managed Services Set)$/;

function esc(s: string): string {
  return s.replace(/'/g, "''");
}

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
  if (range) return { min: parseInt(range[1], 10), max: parseInt(range[2], 10) };
  const single = duration.match(/(\d+)/);
  if (single) {
    const w = parseInt(single[1], 10);
    return { min: w, max: w };
  }
  return { min: null, max: null };
}

function parsePriceAmount(price: string): number | null {
  if (price === "Free") return 0;
  if (price === "Custom") return null;
  const match = price.replace(/,/g, "").match(/(\d+)/);
  return match ? parseInt(match[1], 10) : null;
}

function resolvePurchasability(price: string, serviceType: string): string {
  if (price === "Free") return "free";
  if (price === "Custom" || serviceType === "bundle") return "request_quote";
  return "buy_now";
}

function resolvePriceType(price: string): string {
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
  return `${collection.slice(0, 3).toUpperCase()}-${serviceType.slice(0, 3).toUpperCase()}-${variantId}`;
}

const lines: string[] = ["BEGIN;"];

for (const c of marketplaceCoreCapabilities) {
  lines.push(
    `INSERT INTO categories (id, label, category_type, sort_order, is_facetable) VALUES ('${c.id}', '${esc(c.label)}', 'capability', ${marketplaceCoreCapabilities.indexOf(c)}, true) ON CONFLICT (id) DO NOTHING;`
  );
}
lines.push(
  `INSERT INTO categories (id, label, category_type, sort_order, is_facetable) VALUES ('bundles', 'Bundles', 'navigation', 99, false) ON CONFLICT (id) DO NOTHING;`
);
for (const s of marketplaceEconomySectors) {
  lines.push(
    `INSERT INTO categories (id, label, category_type, sort_order, is_facetable) VALUES ('${s.id}', '${esc(s.label)}', 'sector', ${marketplaceEconomySectors.indexOf(s)}, true) ON CONFLICT (id) DO NOTHING;`
  );
}
for (const g of marketplaceGoals) {
  lines.push(
    `INSERT INTO categories (id, label, category_type, sort_order, is_facetable) VALUES ('${g.id}', '${esc(g.label)}', 'goal', ${marketplaceGoals.indexOf(g)}, true) ON CONFLICT (id) DO NOTHING;`
  );
}

lines.push(
  `INSERT INTO merchants (slug, name, status) VALUES ('digitalqatalyst', 'DigitalQatalyst', 'active') ON CONFLICT (slug) DO NOTHING;`
);

const productStemToId = new Map<string, number>();
let nextProductId = 1;
const variantToListing = new Map<number, number>();
let nextListingId = 1;

for (const service of servicesToSeed) {
  const { title, variantName } = splitProductStem(service.standardName);
  const productSlug = slugify(title);
  let productId = productStemToId.get(productSlug);
  if (!productId) {
    productId = nextProductId++;
    productStemToId.set(productSlug, productId);
    lines.push(
      `INSERT INTO products (id, slug, title, short_description, collection_id, is_high_impact, audience, industry_relevance, department, business_impact, status) VALUES (${productId}, '${esc(productSlug)}', '${esc(title)}', '${esc(service.description)}', '${service.collection}', ${service.standardName.includes("(High-Impact)")}, '${esc(service.audience)}', '${esc(service.industryRelevance)}', '${esc(service.department)}', '${esc(service.businessImpact)}', 'published');`
    );
    for (const goalId of service.outcomes ?? []) {
      lines.push(
        `INSERT INTO product_category_map (product_id, category_id) VALUES (${productId}, '${goalId}') ON CONFLICT DO NOTHING;`
      );
    }
  }

  const duration = parseDurationWeeks(service.duration);
  const variantSlug = slugify(`${title}-${variantName}-${service.id}`);
  const listingId = nextListingId++;
  variantToListing.set(service.id, listingId);

  lines.push(
    `INSERT INTO product_variants (id, product_id, sku, slug, variant_name, service_type_id, duration_display, duration_weeks_min, duration_weeks_max, delivery_complexity, implementation_model, badge, positioning, is_default_variant, status) VALUES (${service.id}, ${productId}, '${buildSku(service.collection, service.id, service.serviceType)}', '${esc(variantSlug)}', '${esc(variantName)}', '${service.serviceType}', '${esc(service.duration)}', ${duration.min ?? "NULL"}, ${duration.max ?? "NULL"}, '${service.deliveryComplexity}', '${esc(service.implementationModel)}', '${esc(service.badge)}', '${esc(service.positioning)}', ${variantName === "Assess"}, 'published');`
  );
  lines.push(
    `INSERT INTO marketplace_listings (id, merchant_id, variant_id, listing_status, purchasability, popularity_score) VALUES (${listingId}, 1, ${service.id}, 'active', '${resolvePurchasability(service.price, service.serviceType)}', ${service.popularityRank});`
  );
  lines.push(
    `INSERT INTO variant_prices (listing_id, price_type, amount, price_display, billing_period, is_current) VALUES (${listingId}, '${resolvePriceType(service.price)}', ${parsePriceAmount(service.price) ?? "NULL"}, '${esc(service.price)}', '${service.serviceType === "manage" ? "monthly" : "one_time"}', true);`
  );
  lines.push(
    `INSERT INTO product_content (variant_id, description, positioning) VALUES (${service.id}, '${esc(service.description)}', '${esc(service.positioning)}');`
  );

  service.features?.forEach((f, i) => {
    lines.push(
      `INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (${service.id}, '${esc(f)}', ${i});`
    );
  });
  service.tags?.forEach((t) => {
    lines.push(`INSERT INTO product_tags (variant_id, tag_name) VALUES (${service.id}, '${esc(t)}');`);
  });
  service.timelineMilestones?.forEach((m, i) => {
    lines.push(
      `INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (${service.id}, '${esc(m)}', ${i});`
    );
  });
  for (const [sectorId, sectorTitle] of Object.entries(service.remixName ?? {})) {
    lines.push(
      `INSERT INTO variant_sector_titles (variant_id, sector_category_id, title) VALUES (${service.id}, '${sectorId}', '${esc(sectorTitle)}') ON CONFLICT DO NOTHING;`
    );
  }
}

for (const service of servicesToSeed) {
  if (service.serviceType !== "bundle" || !service.relatedServices?.length) continue;
  const included = service.relatedServices.filter((id) =>
    seedAll ? true : curatedIdSet.has(id)
  );
  included.forEach((includedId, i) => {
    lines.push(
      `INSERT INTO bundle_items (bundle_variant_id, included_variant_id, sort_order) VALUES (${service.id}, ${includedId}, ${i}) ON CONFLICT DO NOTHING;`
    );
  });
}

for (const service of servicesToSeed) {
  const modules = deployModulesData[service.standardName];
  if (!modules?.length) continue;
  modules.forEach((mod, mi) => {
    lines.push(
      `INSERT INTO deploy_modules (variant_id, name, sort_order) VALUES (${service.id}, '${esc(mod.name)}', ${mi});`
    );
    mod.features.forEach((f, fi) => {
      lines.push(
        `INSERT INTO deploy_module_features (module_id, feature_text, sort_order) SELECT id, '${esc(f)}', ${fi} FROM deploy_modules WHERE variant_id = ${service.id} AND name = '${esc(mod.name)}' LIMIT 1;`
      );
    });
  });
}

const collections = ["all", ...marketplaceCapabilities.map((c) => c.id).filter((id) => id !== "bundles")];
for (const collection of collections) {
    const pool = (
      collection === "all"
        ? [...servicesToSeed]
        : servicesToSeed.filter((s) => s.collection === collection)
    ).filter((s) => s.serviceType !== "bundle");
  const top = pool.sort((a, b) => b.popularityRank - a.popularityRank).slice(0, 4);
  top.forEach((s, rank) => {
    const listingId = variantToListing.get(s.id);
    if (!listingId) return;
    const cat = collection === "all" ? "NULL" : `'${collection}'`;
    lines.push(
      `INSERT INTO listing_placements (listing_id, placement, category_id, rank) VALUES (${listingId}, 'best_seller', ${cat}, ${rank});`
    );
  });
}

lines.push("SELECT reset_catalog_sequences();");
lines.push("SELECT refresh_product_search_index();");
lines.push("COMMIT;");

process.stdout.write(lines.join("\n"));
