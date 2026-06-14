/**
 * Generates an IDEMPOTENT card-content update migration for an already-seeded DB.
 *
 * Unlike generate-seed-sql.ts (fresh INSERTs for an empty DB), this emits
 * UPDATE / DELETE+INSERT statements keyed by variant id, so it can be applied
 * safely to a live database to refresh the per-variant copy.
 *
 * Covers card fields NOT already handled by the PDP content migration:
 *   - product_features, product_tags, product_timeline_milestones (variant level)
 *   - product_variants.positioning (variant level)
 *   - product_content.description / positioning (variant level; also re-stated here
 *     so this migration is self-contained)
 *   - products.short_description / audience / industry_relevance / business_impact
 *     (product level, updated once per product from its Assess variant)
 *
 * Run: npx tsx scripts/generate-card-content-update-sql.ts > supabase/migrations/20250614000001_update_card_content.sql
 */
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { initialServices } from "../src/data/services";
import { applyCardCopyOverride } from "../src/data/serviceCopy";

function esc(s: string): string {
  return s.replace(/'/g, "''");
}

const services = (initialServices as unknown as import("../src/types/serviceProduct").ServiceProduct[])
  .filter((s) => s.serviceType !== "bundle")
  .map(applyCardCopyOverride);

const ids = services.map((s) => s.id);
const seenProduct = new Set<number>();

const lines: string[] = [
  "-- Idempotent card-content update for already-seeded catalog.",
  "-- Regenerate: npx tsx scripts/generate-card-content-update-sql.ts",
  "BEGIN;",
  "",
  `DELETE FROM product_features WHERE variant_id IN (${ids.join(", ")});`,
  `DELETE FROM product_tags WHERE variant_id IN (${ids.join(", ")});`,
  `DELETE FROM product_timeline_milestones WHERE variant_id IN (${ids.join(", ")});`,
  "",
];

for (const s of services) {
  lines.push(`-- ${s.standardName} (variant ${s.id})`);

  lines.push(
    `UPDATE product_variants SET positioning = '${esc(s.positioning)}' WHERE id = ${s.id};`
  );
  lines.push(
    `UPDATE product_content SET description = '${esc(s.description)}', positioning = '${esc(s.positioning)}' WHERE variant_id = ${s.id};`
  );

  s.features?.forEach((f, i) => {
    lines.push(
      `INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (${s.id}, '${esc(f)}', ${i});`
    );
  });
  s.tags?.forEach((t) => {
    lines.push(
      `INSERT INTO product_tags (variant_id, tag_name) VALUES (${s.id}, '${esc(t)}');`
    );
  });
  s.timelineMilestones?.forEach((m, i) => {
    lines.push(
      `INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (${s.id}, '${esc(m)}', ${i});`
    );
  });

  // Product-level fields are stored once per product family (shared across its 6
  // stage variants). Update from the Assess variant only, so the product card uses
  // the assessment-stage description as its short_description.
  if (s.serviceType === "advisory") {
    lines.push(
      `UPDATE products SET short_description = '${esc(s.description)}', audience = '${esc(s.audience)}', industry_relevance = '${esc(s.industryRelevance)}', business_impact = '${esc(s.businessImpact)}' WHERE id = (SELECT product_id FROM product_variants WHERE id = ${s.id});`
    );
    seenProduct.add(s.id);
  }
  lines.push("");
}

lines.push("SELECT refresh_product_search_index();");
lines.push("COMMIT;");

const outPath = join(
  process.cwd(),
  "supabase/migrations/20250614000001_update_card_content.sql"
);
writeFileSync(outPath, lines.join("\n"), "utf8");
console.log(`Wrote ${outPath} (${services.length} variants)`);
