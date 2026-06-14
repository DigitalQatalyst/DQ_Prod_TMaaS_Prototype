# DBA Handoff: Catalog Copy Rewrite

**Branch:** `claude/catalog-copy-rewrite-sharavi`
**Date:** 2026-06-14
**Prepared by:** Sharavi
**Urgency:** Non-urgent. No schema changes. Data only.

---

## What this changes

All 221 TMaaS marketplace service cards (186 individual service variants + 35 bundle products) have had their copy rewritten. The previous content was generated from templates and repeated heavily across cards. This update replaces it with unique, per-variant authored copy.

No database schema changes. No new tables or columns. This is a data-only update to existing rows.

---

## Target database

```
https://jchpvnqmdfuqehfxyhjn.supabase.co
```

---

## Step 1: Take a backup FIRST

Before running anything, take a full backup of the database above via:
- Supabase dashboard: Settings > Database > Backups, or
- pg_dump using the connection string from Settings > Database > Connection string

Verify the backup is restorable before proceeding.

---

## Step 2: Run the SQL files (in order)

Both files are in this folder (`workspace/dba-catalog-copy/`).

### File 1: `seed-data.sql`
- **Updates:** Card-level fields for all 221 products — `short_description`, `product_content` (description + positioning), `product_features`, `product_tags`, `product_timeline_milestones`, `audience`, `industry_relevance`, `business_impact`
- **Size:** ~371 lines
- **Idempotent:** Yes. Uses `ON CONFLICT ... DO UPDATE`. Safe to re-run.

### File 2: `seed_pdp_content.sql`
- **Updates:** PDP (service detail page) fields for all 186 individual variants — `hero_summary`, `overview_paragraphs`, `audience_description`, `deliverables_summary`, `delivery_process`, `package_highlights`, `variant_deliverables`, `product_faqs`, `faq_intro`
- **Size:** ~4,309 lines
- **Idempotent:** Yes. Uses upsert pattern. Safe to re-run.

Run File 1 first, then File 2.

---

## Rollback

Restore from the backup taken in Step 1. The source code on this branch is unaffected by a DB restore.

---

## Verification queries (run after applying)

```sql
-- Should return 221 distinct descriptions (was ~6 before)
SELECT COUNT(DISTINCT (content->>'description')) AS distinct_descriptions
FROM products
WHERE product_type != 'category';

-- Should return 186 distinct faq_intro values
SELECT COUNT(DISTINCT faq_intro) AS distinct_faq_intros
FROM product_pdp_content;

-- Spot-check a specific card (GRC Assess, id 85)
SELECT short_description, content->>'positioning'
FROM products
WHERE id = 85;
```

---

## Questions

Contact Sharavi for anything content-related. This document covers the DB side only.
