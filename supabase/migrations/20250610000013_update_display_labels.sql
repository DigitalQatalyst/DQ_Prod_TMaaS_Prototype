-- Buyer-facing display labels: product titles, stage variant_name/badge, search view refresh
-- Prerequisites: catalog seed (08+) applied
-- Regenerate: npm run db:display-labels:sql
-- Apply in Supabase Dashboard → SQL Editor

BEGIN;

-- Product family title renames (slugs unchanged)
UPDATE products SET title = 'Mobile Apps & Services (High-Impact)', updated_at = now() WHERE id = 3;
UPDATE products SET title = 'Physical & Frontline Channels (High-Impact)', updated_at = now() WHERE id = 4;
UPDATE products SET title = 'CRM & Customer Relationship (High-Impact)', updated_at = now() WHERE id = 6;
UPDATE products SET title = 'Marketing Operations (High-Impact)', updated_at = now() WHERE id = 7;
UPDATE products SET title = 'Flexible Advisory Package', updated_at = now() WHERE id = 32;
UPDATE products SET title = 'Flexible Design Package', updated_at = now() WHERE id = 33;
UPDATE products SET title = 'Flexible Deploy Package', updated_at = now() WHERE id = 34;
UPDATE products SET title = 'Flexible Managed Services Package', updated_at = now() WHERE id = 35;

-- Managed → Managed Service on all manage variants
UPDATE product_variants
SET variant_name = 'Managed Service', badge = 'Managed Service', updated_at = now()
WHERE service_type_id = 'manage'
  AND (variant_name = 'Managed' OR badge = 'Managed');

-- Transformation bundles: End-to-end bundle label
UPDATE product_variants
SET variant_name = 'End-to-end bundle', badge = 'End-to-end bundle', updated_at = now()
WHERE service_type_id = 'bundle'
  AND product_id BETWEEN 1 AND 31;

-- Flexible set bundle variant 234
UPDATE product_variants
SET variant_name = 'Flexible Advisory Package', badge = 'End-to-end bundle', updated_at = now()
WHERE id = 234;
-- Flexible set bundle variant 235
UPDATE product_variants
SET variant_name = 'Flexible Design Package', badge = 'End-to-end bundle', updated_at = now()
WHERE id = 235;
-- Flexible set bundle variant 236
UPDATE product_variants
SET variant_name = 'Flexible Deploy Package', badge = 'End-to-end bundle', updated_at = now()
WHERE id = 236;
-- Flexible set bundle variant 237
UPDATE product_variants
SET variant_name = 'Flexible Managed Services Package', badge = 'End-to-end bundle', updated_at = now()
WHERE id = 237;

-- Deduplicate self-titled bundle display titles in PLP view
CREATE OR REPLACE VIEW marketplace_listings_view AS
SELECT
  l.id AS listing_id,
  l.merchant_id,
  l.variant_id,
  l.listing_status,
  l.purchasability,
  l.popularity_score,
  v.product_id,
  v.sku,
  v.slug,
  v.variant_name,
  v.service_type_id,
  v.duration_display,
  v.duration_weeks_min,
  v.duration_weeks_max,
  v.delivery_complexity,
  v.implementation_model,
  v.badge,
  v.positioning,
  p.title AS product_title,
  p.short_description,
  p.collection_id,
  p.is_high_impact,
  p.audience,
  p.industry_relevance,
  p.department,
  p.business_impact,
  vp.price_display,
  vp.amount AS price_amount,
  vp.currency,
  CASE
    WHEN p.title = v.variant_name THEN p.title
    ELSE p.title || ' - ' || v.variant_name
  END AS display_title,
  (v.service_type_id = 'bundle') AS is_bundle
FROM marketplace_listings l
JOIN product_variants v ON v.id = l.variant_id
JOIN products p ON p.id = v.product_id
LEFT JOIN variant_prices vp ON vp.listing_id = l.id AND vp.is_current = true
WHERE l.listing_status = 'active'
  AND v.status = 'published'
  AND p.status = 'published';

DROP MATERIALIZED VIEW IF EXISTS product_search_index;

CREATE MATERIALIZED VIEW product_search_index AS
SELECT
  l.id AS listing_id,
  v.id AS variant_id,
  p.id AS product_id,
  v.slug,
  CASE
    WHEN p.title = v.variant_name THEN p.title
    ELSE p.title || ' - ' || v.variant_name
  END AS display_title,
  COALESCE(pc.description, p.short_description) AS short_description,
  p.collection_id,
  v.service_type_id,
  vp.amount AS price_amount_min,
  vp.price_display,
  v.duration_display,
  v.duration_weeks_min,
  l.popularity_score,
  (v.service_type_id = 'bundle') AS is_bundle,
  l.purchasability,
  COALESCE(
    (
      SELECT jsonb_agg(DISTINCT pt.tag_name)
      FROM product_tags pt
      WHERE pt.variant_id = v.id
    ),
    '[]'::jsonb
  ) AS tags,
  COALESCE(
    (
      SELECT jsonb_agg(pcm.category_id)
      FROM product_category_map pcm
      WHERE pcm.product_id = p.id
    ),
    '[]'::jsonb
  ) AS category_ids,
  to_tsvector(
    'english',
    coalesce(p.title, '') || ' ' ||
    coalesce(v.variant_name, '') || ' ' ||
    coalesce(pc.description, p.short_description, '') || ' ' ||
    coalesce(
      (SELECT string_agg(pt.tag_name, ' ') FROM product_tags pt WHERE pt.variant_id = v.id),
      ''
    ) || ' ' ||
    coalesce(
      (SELECT string_agg(pf.feature_text, ' ') FROM product_features pf WHERE pf.variant_id = v.id),
      ''
    )
  ) AS search_vector
FROM marketplace_listings l
JOIN product_variants v ON v.id = l.variant_id
JOIN products p ON p.id = v.product_id
LEFT JOIN variant_prices vp ON vp.listing_id = l.id AND vp.is_current = true
LEFT JOIN product_content pc ON pc.variant_id = v.id
WHERE l.listing_status = 'active'
  AND v.status = 'published'
  AND p.status = 'published';

CREATE UNIQUE INDEX idx_product_search_index_listing ON product_search_index (listing_id);
CREATE INDEX idx_product_search_index_collection ON product_search_index (collection_id, popularity_score DESC);
CREATE INDEX idx_product_search_index_service_type ON product_search_index (service_type_id);
CREATE INDEX idx_product_search_index_price ON product_search_index (price_amount_min);
CREATE INDEX idx_product_search_index_duration ON product_search_index (duration_weeks_min);
CREATE INDEX idx_product_search_index_search ON product_search_index USING GIN (search_vector);

SELECT refresh_product_search_index();
COMMIT;

-- Product stem renames mirrored in src/lib/marketplaceDisplayLabels.ts: Mobile Apps, Physical Channels, CRM Solutions, Marketing Solutions, Advisory Set, Design Services Set, Deploy Services Set, Managed Services Set