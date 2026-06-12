-- PDP content extensions for full Supabase-driven service detail pages.
-- Run generate script: npm run db:pdp-content:sql

ALTER TABLE product_content
  ADD COLUMN IF NOT EXISTS hero_summary TEXT,
  ADD COLUMN IF NOT EXISTS deliverables_summary JSONB,
  ADD COLUMN IF NOT EXISTS delivery_process JSONB,
  ADD COLUMN IF NOT EXISTS package_highlights JSONB,
  ADD COLUMN IF NOT EXISTS faq_intro TEXT;

CREATE TABLE IF NOT EXISTS variant_deliverables (
  id SERIAL PRIMARY KEY,
  variant_id INT NOT NULL REFERENCES product_variants(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  sort_order INT NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS product_faqs (
  id SERIAL PRIMARY KEY,
  variant_id INT NOT NULL REFERENCES product_variants(id) ON DELETE CASCADE,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  sort_order INT NOT NULL DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_variant_deliverables_variant ON variant_deliverables(variant_id);
CREATE INDEX IF NOT EXISTS idx_product_faqs_variant ON product_faqs(variant_id);

ALTER TABLE variant_deliverables ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_faqs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read variant_deliverables"
  ON variant_deliverables FOR SELECT TO anon, authenticated USING (true);

CREATE POLICY "Public read product_faqs"
  ON product_faqs FOR SELECT TO anon, authenticated USING (true);
