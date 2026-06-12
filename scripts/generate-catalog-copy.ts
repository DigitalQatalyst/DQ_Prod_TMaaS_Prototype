/**
 * Applies MVP catalog copy standards to products.csv and product_variants.csv.
 * Writes shard files and merged outputs under .service-catalog/
 *
 * Run: npx tsx scripts/generate-catalog-copy.ts
 */
import path from "path";
import { fileURLToPath } from "url";
import { initialServices } from "../src/data/services";
import {
  catalogDir,
  shardDir,
  readCsv,
  writeCsv,
  PRODUCT_CSV_HEADERS,
  VARIANT_CSV_HEADERS,
  type ProductRow,
  type VariantRow,
} from "./catalog-csv-utils";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, "..");

const VARIANT_LABELS: Record<
  string,
  { variant_name: string; badge: string }
> = {
  advisory: { variant_name: "Assess", badge: "Assess" },
  design: { variant_name: "Design", badge: "Design" },
  ai_design: { variant_name: "AI Design", badge: "AI Design" },
  deploy: { variant_name: "Deploy", badge: "Deploy" },
  ai_deploy: { variant_name: "AI Deploy", badge: "AI Deploy" },
  manage: { variant_name: "Managed", badge: "Managed" },
};

const PRODUCT_DOMAIN: Record<number, string> = {
  1: "online web presence",
  2: "social presence and audience engagement",
  3: "mobile apps and mobile services",
  4: "physical channels and frontline experience",
  5: "integrated customer and employee experience",
  6: "CRM and relationship management",
  7: "marketing operations and campaigns",
  8: "sales and quotation",
  9: "customer support and success",
  10: "digital workplace and collaboration",
  11: "business process automation",
  12: "specialised operations",
  13: "enterprise operations",
  14: "governance, risk and compliance",
  15: "ERP and core enterprise operations",
  16: "workforce management",
  17: "enterprise data platform",
  18: "business intelligence and analytics",
  19: "enterprise AI and automation",
  20: "technology governance",
  21: "DevSecOps automation",
  22: "IT operations and employee support services",
  23: "farming operations",
  24: "manufacturing operations",
  25: "infrastructure operations",
  26: "government operations and citizen services",
  27: "hospitality operations and guest experience",
  28: "retail operations and omnichannel commerce",
  29: "service operations",
  30: "logistics and supply chain operations",
  31: "wellness operations and client experience",
};

const PRODUCT_TITLE_OVERRIDES: Record<number, string> = {
  5: "Integrated Experience (High-Impact)",
  12: "Specialised Operations (High-Impact)",
  33: "Design Services Set",
  34: "Deploy Services Set",
  35: "Managed Services Set",
};

const SHORT_DESC_OVERRIDES: Record<number, string> = {
  22: "Improve IT service delivery and employee support through better incident handling, knowledge, automation and service management.",
  5: "Design integrated experiences across journeys, content, channels and personalisation to improve customer and employee engagement.",
};

const AUDIENCE_OVERRIDES: Record<number, string> = {
  1: "CX, Digital, Marketing & IT leaders",
  2: "Marketing, Communications & CX leaders",
  3: "Digital Product, CX & Operations leaders",
  4: "Operations, CX & Facilities leaders",
  5: "CX, Digital, Product & Marketing leaders",
  6: "Sales, Marketing, Service & CX leaders",
  7: "CMOs, Marketing Ops & Growth leaders",
  8: "Sales, Commercial & Revenue Ops leaders",
  9: "Customer Service, Success & CX leaders",
  10: "HR, IT & Internal Comms leaders",
  11: "COOs, Operations & Transformation leaders",
  12: "Business Unit & Domain Operations leaders",
  13: "COOs, Strategy & Transformation leaders",
  14: "Risk, Compliance, Audit & Legal leaders",
  15: "CFOs, Finance, Procurement & HR leaders",
  16: "HR, Workforce Planning & Operations leaders",
  17: "CDOs, CIOs, Data & Analytics leaders",
  18: "Strategy, Finance & Analytics leaders",
  19: "CEOs, CIOs, AI & Transformation leaders",
  20: "CIOs, Enterprise Architecture & PMO leaders",
  21: "CTOs, Engineering, Security & DevOps leaders",
  22: "CIOs, IT Operations & Service Desk leaders",
  23: "Agribusiness & Farm Operations leaders",
  24: "Manufacturing & Plant Operations leaders",
  25: "Asset Managers & Infrastructure leaders",
  26: "Public sector & Digital Government leaders",
  27: "Hospitality & Guest Experience leaders",
  28: "Retail, Commerce & Store Operations leaders",
  29: "Service Operations & Field Service leaders",
  30: "Logistics & Supply Chain leaders",
  31: "Wellness, Clinic & Care Operations leaders",
  32: "Executives & Transformation leaders",
  33: "Product Owners & Delivery leaders",
  34: "Delivery Sponsors & Product Owners",
  35: "Service Owners & Operations leaders",
};

function trimAudience(value: string, productId: number): string {
  if (AUDIENCE_OVERRIDES[productId]) return AUDIENCE_OVERRIDES[productId];
  const trimmed = value.replace(/\s+in enterprise and mid-market organisations$/i, "");
  if (trimmed.length <= 60) return trimmed;
  const slice = trimmed.slice(0, 59);
  const lastSpace = slice.lastIndexOf(" ");
  return `${slice.slice(0, lastSpace > 30 ? lastSpace : 59).trim()}…`;
}

function normalizeIndustryRelevance(value: string): string {
  return value.replace(/^Cross-industry:\s*/i, "");
}

function buildPositioning(
  serviceTypeId: string,
  domain: string,
  productId: number
): string {
  if (serviceTypeId === "bundle") {
    if (productId === 32) {
      return "Flexible advisory across selected TMaaS capability areas — diagnose priorities and build executive alignment.";
    }
    if (productId === 33) {
      return "Blueprints and delivery plans across selected transformation priorities — journey designs, backlogs and governance included.";
    }
    if (productId === 34) {
      return "Managed implementation across selected capabilities — configuration, integration, testing and controlled launch support.";
    }
    if (productId === 35) {
      return "Ongoing operations for selected deployed capabilities — monitoring, optimisation and service continuity.";
    }
    return `End-to-end phased delivery for ${domain}: assess, design, deploy and handover under unified TMaaS governance.`;
  }

  if (
    serviceTypeId === "ai_design" &&
    (productId === 14 || productId === 20)
  ) {
    return `Define responsible AI for ${domain} — prioritised use cases, evidence automation, guardrails, and a blueprint ready to build.`;
  }

  const performClause =
    domain.includes(" and ") ||
    /\b(apps|services|operations|channels|campaigns)\b/i.test(domain)
      ? `${domain} perform today`
      : `${domain} performs today`;

  const templates: Record<string, string> = {
    advisory: `See how ${performClause}, identify the highest-impact gaps, and leave with prioritised next steps and a practical roadmap.`,
    design: `Turn ${domain} goals into a delivery-ready blueprint with journeys, workflows, integrations, controls, and an adoption plan your teams can execute.`,
    ai_design: `Define the AI use cases that matter for ${domain}, with data requirements, guardrails, and specifications ready to build.`,
    deploy: `Implement agreed ${domain} changes through managed configuration, integration, testing, and controlled launch support.`,
    ai_deploy: `Put AI-enabled ${domain} workflows into production with security, governance, and adoption built in from day one.`,
    manage: `Run and improve ${domain} with ongoing monitoring, reporting, and optimisation so performance keeps pace with your business.`,
  };

  return templates[serviceTypeId] ?? "";
}

function transformProduct(row: ProductRow): ProductRow {
  const id = parseInt(row.id, 10);
  const next = { ...row };

  if (PRODUCT_TITLE_OVERRIDES[id]) {
    next.title = PRODUCT_TITLE_OVERRIDES[id];
  }
  if (SHORT_DESC_OVERRIDES[id]) {
    next.short_description = SHORT_DESC_OVERRIDES[id];
  }
  next.audience = trimAudience(row.audience, id);
  next.industry_relevance = normalizeIndustryRelevance(row.industry_relevance);

  if (id === 12 && next.title.includes("Specialized")) {
    next.title = "Specialised Operations (High-Impact)";
  }

  return next;
}

function transformVariant(row: VariantRow, products: Map<string, ProductRow>): VariantRow {
  const next = { ...row };
  const productId = parseInt(row.product_id, 10);
  const serviceTypeId = row.service_type_id;
  const domain = PRODUCT_DOMAIN[productId] ?? "your transformation priorities";

  if (serviceTypeId !== "bundle" && VARIANT_LABELS[serviceTypeId]) {
    next.variant_name = VARIANT_LABELS[serviceTypeId].variant_name;
    next.badge = VARIANT_LABELS[serviceTypeId].badge;
  }

  next.positioning = buildPositioning(serviceTypeId, domain, productId);

  if (serviceTypeId === "bundle" && productId >= 32) {
    const product = products.get(String(productId));
    if (product) {
      next.variant_name = product.title;
    }
  }

  return next;
}

const BUNDLE_PRODUCT_ID: Record<number, number> = Object.fromEntries(
  [...Array.from({ length: 31 }, (_, i) => [203 + i, i + 1]), [234, 32], [235, 33], [236, 34], [237, 35]]
) as Record<number, number>;

const BUNDLE_SLUGS: Record<number, string> = {
  203: "online-web-presence-high-impact-transformation-bundle-203",
  204: "online-social-presence-high-impact-transformation-bundle-204",
  205: "mobile-apps-high-impact-transformation-bundle-205",
  206: "physical-channels-high-impact-transformation-bundle-206",
  207: "experience-solutions-high-impact-transformation-bundle-207",
  208: "crm-solutions-high-impact-transformation-bundle-208",
  209: "marketing-solutions-high-impact-transformation-bundle-209",
  210: "smart-sales-quotation-high-impact-transformation-bundle-210",
  211: "customer-support-success-high-impact-transformation-bundle-211",
  212: "digital-workplace-high-impact-transformation-bundle-212",
  213: "business-process-automation-high-impact-transformation-bundle-213",
  214: "specialized-operations-high-impact-transformation-bundle-214",
  215: "enterprise-operations-high-impact-transformation-bundle-215",
  216: "governance-risk-compliance-high-impact-transformation-bundle-216",
  217: "enterprise-resource-planning-high-impact-transformation-bundle-217",
  218: "workforce-management-high-impact-transformation-bundle-218",
  219: "enterprise-data-platform-high-impact-transformation-bundle-219",
  220: "business-intelligence-analytics-high-impact-transformation-bundle-220",
  221: "enterprise-ai-automation-high-impact-transformation-bundle-221",
  222: "technology-governance-high-impact-transformation-bundle-222",
  223: "devsecops-automation-high-impact-transformation-bundle-223",
  224: "it-operations-support-high-impact-transformation-bundle-224",
  225: "farming-operations-high-impact-transformation-bundle-225",
  226: "manufacturing-operations-high-impact-transformation-bundle-226",
  227: "infrastructure-operations-high-impact-transformation-bundle-227",
  228: "government-operations-high-impact-transformation-bundle-228",
  229: "hospitality-operations-high-impact-transformation-bundle-229",
  230: "retail-operations-high-impact-transformation-bundle-230",
  231: "service-operations-high-impact-transformation-bundle-231",
  232: "logistics-operations-high-impact-transformation-bundle-232",
  233: "wellness-operations-high-impact-transformation-bundle-233",
  234: "advisory-set-advisory-set-234",
  235: "design-services-set-design-services-set-235",
  236: "deploy-services-set-deploy-services-set-236",
  237: "managed-services-set-managed-services-set-237",
};

function buildBundleVariant(
  service: (typeof initialServices)[number],
  productMap: Map<string, ProductRow>
): VariantRow {
  const productId = BUNDLE_PRODUCT_ID[service.id];
  const product = productMap.get(String(productId));
  const variantName =
    productId >= 32 ? (product?.title ?? service.standardName) : "Transformation Bundle";

  const row: VariantRow = {
    id: String(service.id),
    product_id: String(productId),
    sku: `${service.collection.slice(0, 3).toUpperCase()}-BUN-${service.id}`,
    slug: BUNDLE_SLUGS[service.id] ?? `bundle-${service.id}`,
    variant_name: variantName,
    service_type_id: "bundle",
    duration_display: service.duration,
    duration_weeks_min: productId >= 32 ? "" : "16",
    duration_weeks_max: productId >= 32 ? "" : "24",
    delivery_complexity: service.deliveryComplexity,
    implementation_model: service.implementationModel,
    badge: "Bundle",
    positioning: "",
    is_default_variant: "false",
    status: "published",
    created_at: "2026-06-10 15:31:29.889873+00",
    updated_at: "2026-06-10 15:31:29.889873+00",
  };

  return transformVariant(row, productMap);
}

function main() {
  const catalog = catalogDir(REPO_ROOT);
  const shards = shardDir(REPO_ROOT);

  const { rows: productRows } = readCsv(path.join(catalog, "products.csv"));
  const { rows: variantRows } = readCsv(path.join(catalog, "product_variants.csv"));

  const products = productRows.map(transformProduct);
  const productMap = new Map(products.map((p) => [p.id, p]));

  const nonBundleVariants = variantRows
    .filter((v) => v.service_type_id !== "bundle")
    .map((v) => transformVariant(v, productMap));

  const bundleServices = initialServices.filter((s) => s.serviceType === "bundle");
  const bundleVariants = bundleServices.map((s) => buildBundleVariant(s, productMap));

  const allVariants = [...nonBundleVariants, ...bundleVariants].sort(
    (a, b) => parseInt(a.id, 10) - parseInt(b.id, 10)
  );

  const productsP1 = products.filter((p) => parseInt(p.id, 10) <= 17);
  const productsP2 = products.filter((p) => parseInt(p.id, 10) >= 18);

  const expProductIds = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 22]);
  const opsProductIds = new Set([10, 11, 12, 13, 15, 16, 21]);
  const secAiProductIds = new Set([14, 17, 18, 19, 20]);
  const sectorProductIds = new Set([23, 24, 25, 26, 27, 28, 29, 30, 31]);

  const variantsExp = allVariants.filter((v) => expProductIds.has(parseInt(v.product_id, 10)));
  const variantsOps = allVariants.filter((v) => opsProductIds.has(parseInt(v.product_id, 10)));
  const variantsSecAi = allVariants.filter((v) => secAiProductIds.has(parseInt(v.product_id, 10)));
  const variants40 = allVariants.filter((v) => sectorProductIds.has(parseInt(v.product_id, 10)));
  const variantsBundles = allVariants.filter((v) => v.service_type_id === "bundle");

  writeCsv(path.join(shards, "products-01-17.csv"), PRODUCT_CSV_HEADERS, productsP1);
  writeCsv(path.join(shards, "products-18-35.csv"), PRODUCT_CSV_HEADERS, productsP2);
  writeCsv(path.join(shards, "variants-exp.csv"), VARIANT_CSV_HEADERS, variantsExp);
  writeCsv(path.join(shards, "variants-ops.csv"), VARIANT_CSV_HEADERS, variantsOps);
  writeCsv(path.join(shards, "variants-sec-ai.csv"), VARIANT_CSV_HEADERS, variantsSecAi);
  writeCsv(path.join(shards, "variants-40.csv"), VARIANT_CSV_HEADERS, variants40);
  writeCsv(path.join(shards, "variants-bundles.csv"), VARIANT_CSV_HEADERS, variantsBundles);

  writeCsv(path.join(catalog, "products.csv"), PRODUCT_CSV_HEADERS, products);
  writeCsv(path.join(catalog, "product_variants.csv"), VARIANT_CSV_HEADERS, allVariants);

  console.log(`Products: ${products.length}`);
  console.log(`Variants: ${allVariants.length} (${nonBundleVariants.length} staged + ${bundleVariants.length} bundles)`);
  console.log(`Shards written to ${shards}`);
}

main();
