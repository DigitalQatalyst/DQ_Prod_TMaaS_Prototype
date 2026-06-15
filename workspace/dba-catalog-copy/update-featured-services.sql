-- Featured services carousel (all categories) — Jun 2026 industry-aligned set.
-- Run on populated Supabase after review. Safe to re-run (idempotent scores).
-- Then refresh search index so marketplace sort picks up new scores.

UPDATE marketplace_listings
SET popularity_score = 110
WHERE variant_id IN (85, 62, 117, 130, 107, 30);

-- Optional: verify
SELECT variant_id, popularity_score
FROM marketplace_listings
WHERE variant_id IN (85, 62, 117, 130, 107, 30)
ORDER BY variant_id;

SELECT refresh_product_search_index();
