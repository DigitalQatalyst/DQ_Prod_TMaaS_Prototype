/**
 * Updates description and positioning in src/data/services.ts from variant SEO copy.
 * Run: npm run catalog:sync-variant-copy
 */
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { initialServices } from "../src/data/services";
import {
  buildVariantHeroDescription,
  buildVariantPositioning,
} from "../src/lib/variantSeoCopy";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const servicesPath = path.resolve(__dirname, "../src/data/services.ts");

const updated = initialServices.map((service) => {
  if (service.serviceType === "bundle") return service;
  return {
    ...service,
    description: buildVariantHeroDescription(service),
    positioning: buildVariantPositioning(service),
  };
});

const tail = readFileSync(servicesPath, "utf8").replace(
  /^[\s\S]*?export const initialServices = [\s\S]*? as const satisfies readonly ServiceProduct\[\];\n\n/,
  ""
);

const output = `import { sortCatalogByPopularMix } from "@/lib/marketplaceCatalogFilters";
import type { ServiceProduct } from "@/types/serviceProduct";

export const initialServices = ${JSON.stringify(updated, null, 2)} as const satisfies readonly ServiceProduct[];

${tail}`;

writeFileSync(servicesPath, output, "utf8");
console.log(`Updated ${updated.filter((s) => s.serviceType !== "bundle").length} variant descriptions in ${servicesPath}`);
