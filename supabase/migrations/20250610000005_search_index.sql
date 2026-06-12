-- PLP read model: views and materialized search index

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
  (p.title || ' - ' || v.variant_name) AS display_title,
  (v.service_type_id = 'bundle') AS is_bundle
FROM marketplace_listings l
JOIN product_variants v ON v.id = l.variant_id
JOIN products p ON p.id = v.product_id
LEFT JOIN variant_prices vp ON vp.listing_id = l.id AND vp.is_current = true
WHERE l.listing_status = 'active'
  AND v.status = 'published'
  AND p.status = 'published';

CREATE MATERIALIZED VIEW product_search_index AS
SELECT
  l.id AS listing_id,
  v.id AS variant_id,
  p.id AS product_id,
  v.slug,
  (p.title || ' - ' || v.variant_name) AS display_title,
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

CREATE OR REPLACE FUNCTION refresh_product_search_index()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  REFRESH MATERIALIZED VIEW CONCURRENTLY product_search_index;
EXCEPTION
  WHEN OTHERS THEN
    REFRESH MATERIALIZED VIEW product_search_index;
END;
$$;
