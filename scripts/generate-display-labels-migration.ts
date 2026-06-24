/**
 * Generates Supabase migration for buyer-facing stage labels and product title renames.
 * Run: npm run db:display-labels:sql
 */
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { escSql } from "./lib/pdpCopyGenerator";
import { PRODUCT_DISPLAY_RENAMES } from "../src/lib/marketplaceDisplayLabels";

const outPath = join(process.cwd(), "supabase/migrations/20250610000013_update_display_labels.sql");

const PRODUCT_TITLE_BY_ID: Record<number, string> = {
  3: "Mobile Apps & Services (High-Impact)",
  4: "Physical & Frontline Channels (High-Impact)",
  6: "CRM & Customer Relationship (High-Impact)",
  7: "Marketing Operations (High-Impact)",
  32: "Flexible Advisory Package",
  33: "Flexible Design Package",
  34: "Flexible Deploy Package",
  35: "Flexible Managed Services Package",
};

const FLEXIBLE_SET_VARIANT_IDS: Record<number, number> = {
  32: 234,
  33: 235,
  34: 236,
  35: 237,
};

const DISPLAY_TITLE_EXPR = `CASE
    WHEN p.title = v.variant_name THEN p.title
    ELSE p.title || ' - ' || v.variant_name
  END`;

const lines: string[] = [
  "-- Buyer-facing display labels: product titles, stage variant_name/badge, search view refresh",
  "-- Prerequisites: catalog seed (08+) applied",
  "-- Regenerate: npm run db:display-labels:sql",
  "-- Apply in Supabase Dashboard → SQL Editor",
  "",
  "BEGIN;",
  "",
  "-- Product family title renames (slugs unchanged)",
];

for (const [id, title] of Object.entries(PRODUCT_TITLE_BY_ID)) {
  lines.push(
    `UPDATE products SET title = '${escSql(title)}', updated_at = now() WHERE id = ${id};`
  );
}

lines.push(
  "",
  "-- Managed → Managed Service on all manage variants",
  `UPDATE product_variants`,
  `SET variant_name = 'Managed Service', badge = 'Managed Service', updated_at = now()`,
  `WHERE service_type_id = 'manage'`,
  `  AND (variant_name = 'Managed' OR badge = 'Managed');`,
  "",
  "-- Transformation bundles: End-to-end bundle label",
  `UPDATE product_variants`,
  `SET variant_name = 'End-to-end bundle', badge = 'End-to-end bundle', updated_at = now()`,
  `WHERE service_type_id = 'bundle'`,
  `  AND product_id BETWEEN 1 AND 31;`,
  ""
);

for (const [productId, variantId] of Object.entries(FLEXIBLE_SET_VARIANT_IDS)) {
  const title = PRODUCT_TITLE_BY_ID[Number(productId)];
  lines.push(
    `-- Flexible set bundle variant ${variantId}`,
    `UPDATE product_variants`,
    `SET variant_name = '${escSql(title)}', badge = 'End-to-end bundle', updated_at = now()`,
    `WHERE id = ${variantId};`
  );
}

lines.push(
  "",
  "-- Deduplicate self-titled bundle display titles in PLP view",
  "CREATE OR REPLACE VIEW marketplace_listings_view AS",
  "SELECT",
  "  l.id AS listing_id,",
  "  l.merchant_id,",
  "  l.variant_id,",
  "  l.listing_status,",
  "  l.purchasability,",
  "  l.popularity_score,",
  "  v.product_id,",
  "  v.sku,",
  "  v.slug,",
  "  v.variant_name,",
  "  v.service_type_id,",
  "  v.duration_display,",
  "  v.duration_weeks_min,",
  "  v.duration_weeks_max,",
  "  v.delivery_complexity,",
  "  v.implementation_model,",
  "  v.badge,",
  "  v.positioning,",
  "  p.title AS product_title,",
  "  p.short_description,",
  "  p.collection_id,",
  "  p.is_high_impact,",
  "  p.audience,",
  "  p.industry_relevance,",
  "  p.department,",
  "  p.business_impact,",
  "  vp.price_display,",
  "  vp.amount AS price_amount,",
  "  vp.currency,",
  `  ${DISPLAY_TITLE_EXPR} AS display_title,`,
  "  (v.service_type_id = 'bundle') AS is_bundle",
  "FROM marketplace_listings l",
  "JOIN product_variants v ON v.id = l.variant_id",
  "JOIN products p ON p.id = v.product_id",
  "LEFT JOIN variant_prices vp ON vp.listing_id = l.id AND vp.is_current = true",
  "WHERE l.listing_status = 'active'",
  "  AND v.status = 'published'",
  "  AND p.status = 'published';",
  "",
  "DROP MATERIALIZED VIEW IF EXISTS product_search_index;",
  "",
  "CREATE MATERIALIZED VIEW product_search_index AS",
  "SELECT",
  "  l.id AS listing_id,",
  "  v.id AS variant_id,",
  "  p.id AS product_id,",
  "  v.slug,",
  `  ${DISPLAY_TITLE_EXPR} AS display_title,`,
  "  COALESCE(pc.description, p.short_description) AS short_description,",
  "  p.collection_id,",
  "  v.service_type_id,",
  "  vp.amount AS price_amount_min,",
  "  vp.price_display,",
  "  v.duration_display,",
  "  v.duration_weeks_min,",
  "  l.popularity_score,",
  "  (v.service_type_id = 'bundle') AS is_bundle,",
  "  l.purchasability,",
  "  COALESCE(",
  "    (",
  "      SELECT jsonb_agg(DISTINCT pt.tag_name)",
  "      FROM product_tags pt",
  "      WHERE pt.variant_id = v.id",
  "    ),",
  "    '[]'::jsonb",
  "  ) AS tags,",
  "  COALESCE(",
  "    (",
  "      SELECT jsonb_agg(pcm.category_id)",
  "      FROM product_category_map pcm",
  "      WHERE pcm.product_id = p.id",
  "    ),",
  "    '[]'::jsonb",
  "  ) AS category_ids,",
  "  to_tsvector(",
  "    'english',",
  "    coalesce(p.title, '') || ' ' ||",
  "    coalesce(v.variant_name, '') || ' ' ||",
  "    coalesce(pc.description, p.short_description, '') || ' ' ||",
  "    coalesce(",
  "      (SELECT string_agg(pt.tag_name, ' ') FROM product_tags pt WHERE pt.variant_id = v.id),",
  "      ''",
  "    ) || ' ' ||",
  "    coalesce(",
  "      (SELECT string_agg(pf.feature_text, ' ') FROM product_features pf WHERE pf.variant_id = v.id),",
  "      ''",
  "    )",
  "  ) AS search_vector",
  "FROM marketplace_listings l",
  "JOIN product_variants v ON v.id = l.variant_id",
  "JOIN products p ON p.id = v.product_id",
  "LEFT JOIN variant_prices vp ON vp.listing_id = l.id AND vp.is_current = true",
  "LEFT JOIN product_content pc ON pc.variant_id = v.id",
  "WHERE l.listing_status = 'active'",
  "  AND v.status = 'published'",
  "  AND p.status = 'published';",
  "",
  "CREATE UNIQUE INDEX idx_product_search_index_listing ON product_search_index (listing_id);",
  "CREATE INDEX idx_product_search_index_collection ON product_search_index (collection_id, popularity_score DESC);",
  "CREATE INDEX idx_product_search_index_service_type ON product_search_index (service_type_id);",
  "CREATE INDEX idx_product_search_index_price ON product_search_index (price_amount_min);",
  "CREATE INDEX idx_product_search_index_duration ON product_search_index (duration_weeks_min);",
  "CREATE INDEX idx_product_search_index_search ON product_search_index USING GIN (search_vector);",
  "",
  "SELECT refresh_product_search_index();",
  "COMMIT;",
  "",
  `-- Product stem renames mirrored in src/lib/marketplaceDisplayLabels.ts: ${Object.keys(PRODUCT_DISPLAY_RENAMES).join(", ")}`
);

writeFileSync(outPath, lines.join("\n"), "utf8");
console.log(`Wrote ${outPath}`);
