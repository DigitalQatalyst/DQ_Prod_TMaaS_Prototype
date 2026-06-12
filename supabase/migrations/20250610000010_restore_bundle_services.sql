-- Restore bundle service variants after migration 009.
-- Bundle rows (service_type_id = 'bundle') are loaded via:
--   npx tsx scripts/import-catalog-csv.ts
--
-- Expected counts after import:
--   product_variants: 221
--   product_variants WHERE service_type_id = 'bundle': 35
--   marketplace_listings: 221
--
-- Migration 009 removed bundles intentionally for an MVP slice.
-- This migration documents bundle restoration for full catalog launch.

BEGIN;

-- No-op placeholder: data is restored by CSV import pipeline.
-- Environments that need bundles back should run import-catalog-csv.ts
-- after applying this migration marker.

COMMIT;
