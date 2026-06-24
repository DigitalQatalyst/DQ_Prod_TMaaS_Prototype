/**
 * Updates src/data/services.ts copy fields from .service-catalog CSVs.
 * Preserves non-CSV fixture data (features, tags, prices, relatedServices, etc.)
 *
 * Run: npx tsx scripts/sync-fixture-from-csv.ts
 */
import { writeFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { initialServices } from "../src/data/services";
import { catalogDir, readCsv } from "./catalog-csv-utils";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, "..");

const VARIANT_SUFFIX: Record<string, string> = {
  advisory: "Assess",
  design: "Design",
  ai_design: "AI Design",
  deploy: "Deploy",
  ai_deploy: "AI Deploy",
  manage: "Managed",
  bundle: "Transformation Bundle",
};

function main() {
  const catalog = catalogDir(REPO_ROOT);
  const { rows: products } = readCsv(path.join(catalog, "products.csv"));
  const { rows: variants } = readCsv(path.join(catalog, "product_variants.csv"));

  const productById = new Map(products.map((p) => [p.id, p]));

  const updated = initialServices.map((service) => {
    const variant = variants.find((v) => v.id === String(service.id));
    if (!variant) return service;

    const product = productById.get(variant.product_id);
    if (!product) return service;

    const suffix =
      service.serviceType === "bundle" && parseInt(variant.product_id, 10) >= 32
        ? product.title
        : (VARIANT_SUFFIX[service.serviceType] ?? variant.variant_name);

    const standardName = `${product.title} - ${suffix}`;

    return {
      ...service,
      standardName,
      description: product.short_description,
      positioning: variant.positioning,
      badge: variant.badge,
      audience: product.audience,
      industryRelevance: product.industry_relevance,
      department: product.department,
      businessImpact: product.business_impact,
      duration: variant.duration_display || service.duration,
      deliveryComplexity: variant.delivery_complexity as typeof service.deliveryComplexity,
      implementationModel: variant.implementation_model,
    };
  });

  const output = `import { sortCatalogByPopularMix } from "@/lib/marketplaceCatalogFilters";
import type { ServiceProduct } from "@/types/serviceProduct";

export const initialServices = ${JSON.stringify(updated, null, 2)} as const satisfies readonly ServiceProduct[];

export const getRemixedName = (
  service: (typeof initialServices)[number],
  remixKey: string = "all"
) => {
  if (remixKey === "all") return service.standardName;
  return service.remixName[remixKey as keyof typeof service.remixName] || service.standardName;
};

type ServiceCollection = "experience" | "operations" | "security" | "ai" | "bundles";

export const getPopularServices = (
  collection: "all" | ServiceCollection = "all",
  limit = 4
) => {
  const pool =
    collection === "all"
      ? initialServices
      : initialServices.filter((s) => s.collection === collection);
  return [...pool]
    .sort((a, b) => b.popularityRank - a.popularityRank)
    .slice(0, limit);
};

export const getServiceById = (id: number) =>
  initialServices.find((s) => s.id === id);

export const parseServicePrice = (price: string): number =>
  Number(price.replace(/[^0-9]/g, "")) || 0;

export const formatServicePrice = (amount: number): string =>
  \`$\${amount.toLocaleString("en-US")}\`;

/** Top services per collection (homepage featured + marketplace shelf) */
export const getFeaturedByCollection = (
  collection: ServiceCollection,
  limit = 3
) =>
  initialServices
    .filter((s) => s.collection === collection)
    .sort((a, b) => b.popularityRank - a.popularityRank)
    .slice(0, limit);

/** Best sellers for marketplace, all categories or one collection */
export const getBestSellers = (
  collection: "all" | ServiceCollection = "all",
  limit = 4
) => {
  const pool =
    collection === "all"
      ? initialServices
      : initialServices.filter((s) => s.collection === collection);
  return sortCatalogByPopularMix(pool.filter((s) => s.serviceType !== "bundle")).slice(0, limit);
};
`;

  const target = path.join(REPO_ROOT, "src/data/services.ts");
  writeFileSync(target, output, "utf8");
  console.log(`Updated ${target} (${updated.length} services)`);
}

main();
