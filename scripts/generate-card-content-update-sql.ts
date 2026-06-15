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
 *     (product level, updated from Assess variants and bundle variants)
 *
 * Run: npm run db:card-content:sql
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { initialServices } from "../src/data/services";
import { applyCardCopyOverride } from "../src/data/serviceCopy";
import type { ServiceProduct } from "../src/types/serviceProduct";

function esc(s: string): string {
  return s.replace(/'/g, "''");
}

const services = (initialServices as ServiceProduct[]).map(applyCardCopyOverride);
const ids = services.map((s) => s.id);

const lines: string[] = [
  "-- Idempotent card-content update for an already-seeded catalog.",
  "-- Do NOT use seed-data.sql on a populated database (that file is INSERT-only).",
  "-- Regenerate: npm run db:card-content:sql",
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

  // Staged services: product card fields come from the Assess variant.
  // Bundles: each bundle variant owns its product-level card fields.
  if (s.serviceType === "advisory" || s.serviceType === "bundle") {
    lines.push(
      `UPDATE products SET short_description = '${esc(s.description)}', audience = '${esc(s.audience)}', industry_relevance = '${esc(s.industryRelevance)}', business_impact = '${esc(s.businessImpact)}' WHERE id = (SELECT product_id FROM product_variants WHERE id = ${s.id});`
    );
  }
  lines.push("");
}

lines.push("SELECT refresh_product_search_index();");
lines.push("COMMIT;");

const migrationPath = join(
  process.cwd(),
  "supabase/migrations/20250614000001_update_card_content.sql"
);
const handoffPath = join(process.cwd(), "workspace/dba-catalog-copy/update-card-content.sql");
const sql = lines.join("\n");

mkdirSync(dirname(handoffPath), { recursive: true });
writeFileSync(migrationPath, sql, "utf8");
writeFileSync(handoffPath, sql, "utf8");
console.log(`Wrote ${migrationPath} (${services.length} variants)`);
console.log(`Wrote ${handoffPath} (${services.length} variants)`);
