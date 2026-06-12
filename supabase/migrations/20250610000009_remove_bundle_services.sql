-- Remove Transformation Bundle services (service_type_id = 'bundle').
-- Removes 35 product_variants; parent products and non-bundle variants are kept.
--
-- Run after catalog seed migrations (20250610000007 or 20250610000008).
--
-- Verify after run:
--   SELECT COUNT(*) FROM product_variants WHERE service_type_id = 'bundle';  -- 0
--   SELECT COUNT(*) FROM product_variants;                                   -- 186 (if full catalog seeded)

BEGIN;

-- Commerce tables reference variants/listings without ON DELETE CASCADE
DELETE FROM cart_items ci
USING marketplace_listings ml
JOIN product_variants pv ON pv.id = ml.variant_id
WHERE ci.listing_id = ml.id
  AND pv.service_type_id = 'bundle';

DELETE FROM order_items oi
USING product_variants pv
WHERE oi.variant_id = pv.id
  AND pv.service_type_id = 'bundle';

-- Explicit before variant delete (also cascades from product_variants)
DELETE FROM bundle_items bi
USING product_variants pv
WHERE bi.bundle_variant_id = pv.id
  AND pv.service_type_id = 'bundle';

-- Cascades: marketplace_listings, variant_prices, listing_placements,
-- product_content, product_features, product_tags, product_timeline_milestones,
-- variant_sector_titles, deploy_modules (+ deploy_module_features)
DELETE FROM product_variants
WHERE service_type_id = 'bundle';

SELECT refresh_product_search_index();

COMMIT;
