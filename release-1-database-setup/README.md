# TMaaS Release 1 — Database Setup

Migration pack for a **clean** Supabase production database with **non-generic catalog copy**.

Aligned with `workspace/dba-catalog-copy/handoff.md`.

## Apply order (migrations/)

| # | File | Purpose |
|---|------|---------|
| 01–07 | `*_schema*.sql`, `pdp_content_extensions.sql` | Tables, views, search index, RLS |
| 08 | `base_catalog_seed.sql` | Full catalog row structure (221 variants) |
| 09 | `card_content.sql` | **Handoff** — unique card copy (UPDATE, idempotent) |
| 10 | `pdp_content.sql` | **Handoff** — unique PDP copy (UPDATE, idempotent) |
| 11 | `display_labels.sql` | Buyer-facing stage labels + product title renames |
| 12 | `delivery_process.sql` | Assess / Managed How It Works lifecycles |
| 13 | `featured_services.sql` | Homepage featured service rankings |

## Quick start

**Supabase SQL Editor** — paste and run `00_apply_all.sql`, or run each file in `migrations/` in numeric order.

After seeding:

```sql
SELECT refresh_product_search_index();
```

## Verification (from handoff)

```sql
SELECT COUNT(DISTINCT short_description) AS distinct_short_descriptions
FROM products WHERE status = 'published';

SELECT COUNT(DISTINCT faq_intro) AS distinct_faq_intros
FROM product_content WHERE faq_intro IS NOT NULL;

SELECT short_description, positioning
FROM marketplace_listings_view WHERE variant_id = 85;
```

## Regenerate this pack

```bash
npm run db:card-content:sql   # refresh workspace/dba-catalog-copy/update-card-content.sql
npm run db:pdp-content:sql    # refresh workspace/dba-catalog-copy/seed_pdp_content.sql
npm run db:setup-pack         # rebuild this folder
```

**Do not** add legacy `seed_pdp_content` migrations from git — card and PDP copy come only from 09 and 10.

Generated: 2026-06-15
