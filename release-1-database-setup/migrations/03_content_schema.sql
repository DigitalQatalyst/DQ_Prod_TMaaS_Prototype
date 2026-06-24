-- PDP content: product_content, deploy modules

CREATE TABLE product_content (
  variant_id INT PRIMARY KEY REFERENCES product_variants(id) ON DELETE CASCADE,
  description TEXT NOT NULL,
  positioning TEXT,
  overview_paragraphs JSONB,
  audience_description TEXT,
  why_it_matters JSONB,
  delivery_process_id INT
);

CREATE TABLE deploy_modules (
  id SERIAL PRIMARY KEY,
  variant_id INT NOT NULL REFERENCES product_variants(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  sort_order INT NOT NULL DEFAULT 0
);

CREATE TABLE deploy_module_features (
  id SERIAL PRIMARY KEY,
  module_id INT NOT NULL REFERENCES deploy_modules(id) ON DELETE CASCADE,
  feature_text TEXT NOT NULL,
  sort_order INT NOT NULL DEFAULT 0
);

CREATE INDEX idx_deploy_modules_variant ON deploy_modules(variant_id);
