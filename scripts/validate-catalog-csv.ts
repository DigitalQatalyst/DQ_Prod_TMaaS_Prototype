/**
 * Validates .service-catalog/products.csv and product_variants.csv
 * Run: npx tsx scripts/validate-catalog-csv.ts
 */
import path from "path";
import { fileURLToPath } from "url";
import { catalogDir, readCsv, PRODUCT_CSV_HEADERS, VARIANT_CSV_HEADERS } from "./catalog-csv-utils";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, "..");

const VARIANT_LABELS: Record<string, { variant_name: string; badge: string }> = {
  advisory: { variant_name: "Assess", badge: "Assess" },
  design: { variant_name: "Design", badge: "Design" },
  ai_design: { variant_name: "AI Design", badge: "AI Design" },
  deploy: { variant_name: "Deploy", badge: "Deploy" },
  ai_deploy: { variant_name: "AI Deploy", badge: "AI Deploy" },
  manage: { variant_name: "Managed Service", badge: "Managed Service" },
};

const BUNDLE_STAGE_LABEL = "End-to-end bundle";

const US_SPELLING = /\b(optimize|organization|specialized)\b/i;

function tokenOverlap(a: string, b: string): number {
  const tokensA = new Set(a.toLowerCase().split(/\W+/).filter(Boolean));
  const tokensB = new Set(b.toLowerCase().split(/\W+/).filter(Boolean));
  if (tokensA.size === 0 || tokensB.size === 0) return 0;
  let shared = 0;
  for (const t of tokensA) if (tokensB.has(t)) shared++;
  return shared / Math.max(tokensA.size, tokensB.size);
}

function main() {
  const catalog = catalogDir(REPO_ROOT);
  const errors: string[] = [];
  const warnings: string[] = [];

  const products = readCsv(path.join(catalog, "products.csv"));
  const variants = readCsv(path.join(catalog, "product_variants.csv"));

  if (products.headers.join(",") !== PRODUCT_CSV_HEADERS.join(",")) {
    errors.push("products.csv headers do not match expected schema");
  }
  if (variants.headers.join(",") !== VARIANT_CSV_HEADERS.join(",")) {
    errors.push("product_variants.csv headers do not match expected schema");
  }

  if (products.rows.length !== 35) {
    errors.push(`Expected 35 products, found ${products.rows.length}`);
  }
  if (variants.rows.length !== 221) {
    errors.push(`Expected 221 variants, found ${variants.rows.length}`);
  }

  const productIds = new Set<string>();
  for (const row of products.rows) {
    if (productIds.has(row.id)) errors.push(`Duplicate product id ${row.id}`);
    productIds.add(row.id);
    if (US_SPELLING.test(row.short_description) || US_SPELLING.test(row.title)) {
      warnings.push(`Product ${row.id}: possible US spelling in copy fields`);
    }
    if (row.audience.length > 60) {
      warnings.push(`Product ${row.id}: audience exceeds 60 chars (${row.audience.length})`);
    }
    if (/^Cross-industry:/i.test(row.industry_relevance)) {
      errors.push(`Product ${row.id}: industry_relevance still has Cross-industry prefix`);
    }
  }

  const variantIds = new Set<string>();
  const skus = new Set<string>();
  const slugs = new Set<string>();
  const byProduct = new Map<string, typeof variants.rows>();

  for (const row of variants.rows) {
    if (variantIds.has(row.id)) errors.push(`Duplicate variant id ${row.id}`);
    if (skus.has(row.sku)) errors.push(`Duplicate sku ${row.sku}`);
    if (slugs.has(row.slug)) errors.push(`Duplicate slug ${row.slug}`);
    variantIds.add(row.id);
    skus.add(row.sku);
    slugs.add(row.slug);

    const label = VARIANT_LABELS[row.service_type_id];
    if (label) {
      if (row.variant_name !== label.variant_name) {
        errors.push(
          `Variant ${row.id}: variant_name '${row.variant_name}' should be '${label.variant_name}'`
        );
      }
      if (row.badge !== label.badge) {
        errors.push(`Variant ${row.id}: badge '${row.badge}' should be '${label.badge}'`);
      }
    }

    if (row.service_type_id === "bundle" && row.badge !== BUNDLE_STAGE_LABEL) {
      errors.push(`Variant ${row.id}: bundle badge must be ${BUNDLE_STAGE_LABEL}`);
    }

    if (/maturity gaps/i.test(row.positioning)) {
      errors.push(`Variant ${row.id}: positioning still uses deprecated 'maturity gaps' template`);
    }

    const list = byProduct.get(row.product_id) ?? [];
    list.push(row);
    byProduct.set(row.product_id, list);
  }

  for (let pid = 1; pid <= 35; pid++) {
    const rows = byProduct.get(String(pid)) ?? [];
    const expected = pid >= 32 ? 1 : 7;
    if (rows.length !== expected) {
      errors.push(`Product ${pid}: expected ${expected} variants, found ${rows.length}`);
    }
  }

  const byType = new Map<string, string[]>();
  for (const row of variants.rows) {
    const list = byType.get(row.service_type_id) ?? [];
    list.push(row.positioning);
    byType.set(row.service_type_id, list);
  }

  for (const [type, positions] of byType) {
    if (type === "bundle") continue;
    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        if (tokenOverlap(positions[i], positions[j]) > 0.8) {
          warnings.push(`High positioning overlap (${type}): variants may still read as templated`);
          break;
        }
      }
    }
  }

  if (warnings.length) {
    console.warn("Warnings:");
    warnings.forEach((w) => console.warn(`  - ${w}`));
  }

  if (errors.length) {
    console.error("Validation failed:");
    errors.forEach((e) => console.error(`  - ${e}`));
    process.exit(1);
  }

  console.log("Catalog CSV validation passed.");
  console.log(`  Products: ${products.rows.length}`);
  console.log(`  Variants: ${variants.rows.length}`);
  console.log(`  Bundles: ${variants.rows.filter((v) => v.service_type_id === "bundle").length}`);
}

main();
