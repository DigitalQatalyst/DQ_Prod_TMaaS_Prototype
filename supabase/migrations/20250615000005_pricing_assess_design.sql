-- Update assess (advisory) services: Free -> From $1,000
UPDATE variant_prices vp
SET price_display = 'From $1,000',
    amount        = 1000,
    price_type    = 'from'
FROM marketplace_listings l
JOIN product_variants v ON l.variant_id = v.id
WHERE vp.listing_id = l.id
  AND v.service_type_id = 'advisory'
  AND vp.is_current = true;

-- Update design services: From $1,000 -> From $2,000
UPDATE variant_prices vp
SET price_display = 'From $2,000',
    amount        = 2000
FROM marketplace_listings l
JOIN product_variants v ON l.variant_id = v.id
WHERE vp.listing_id = l.id
  AND v.service_type_id = 'design'
  AND vp.is_current = true;
