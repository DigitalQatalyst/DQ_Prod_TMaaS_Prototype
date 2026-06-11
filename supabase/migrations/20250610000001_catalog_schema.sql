-- Catalog: categories, products, variants, features, bundles

CREATE TYPE category_type AS ENUM ('capability', 'sector', 'goal', 'navigation');
CREATE TYPE entity_status AS ENUM ('draft', 'published', 'archived');
CREATE TYPE delivery_complexity AS ENUM ('low', 'medium', 'high');

CREATE TABLE categories (
  id VARCHAR(64) PRIMARY KEY,
  parent_id VARCHAR(64) REFERENCES categories(id) ON DELETE SET NULL,
  label TEXT NOT NULL,
  category_type category_type NOT NULL DEFAULT 'navigation',
  sort_order INT NOT NULL DEFAULT 0,
  is_facetable BOOLEAN NOT NULL DEFAULT false
);

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  slug VARCHAR(255) NOT NULL UNIQUE,
  title TEXT NOT NULL,
  short_description TEXT,
  collection_id VARCHAR(64) NOT NULL REFERENCES categories(id),
  is_high_impact BOOLEAN NOT NULL DEFAULT false,
  audience TEXT,
  industry_relevance TEXT,
  department TEXT,
  business_impact TEXT,
  status entity_status NOT NULL DEFAULT 'published',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE product_variants (
  id SERIAL PRIMARY KEY,
  product_id INT NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  sku VARCHAR(64) NOT NULL UNIQUE,
  slug VARCHAR(255) NOT NULL UNIQUE,
  variant_name TEXT NOT NULL,
  service_type_id VARCHAR(32) NOT NULL,
  duration_display VARCHAR(64) NOT NULL,
  duration_weeks_min INT,
  duration_weeks_max INT,
  delivery_complexity delivery_complexity,
  implementation_model TEXT,
  badge VARCHAR(64),
  positioning TEXT,
  is_default_variant BOOLEAN NOT NULL DEFAULT false,
  status entity_status NOT NULL DEFAULT 'published',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE product_category_map (
  product_id INT NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  category_id VARCHAR(64) NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
  PRIMARY KEY (product_id, category_id)
);

CREATE TABLE product_features (
  id SERIAL PRIMARY KEY,
  variant_id INT NOT NULL REFERENCES product_variants(id) ON DELETE CASCADE,
  feature_text TEXT NOT NULL,
  sort_order INT NOT NULL DEFAULT 0
);

CREATE TABLE product_tags (
  id SERIAL PRIMARY KEY,
  variant_id INT NOT NULL REFERENCES product_variants(id) ON DELETE CASCADE,
  tag_name VARCHAR(128) NOT NULL
);

CREATE TABLE variant_sector_titles (
  variant_id INT NOT NULL REFERENCES product_variants(id) ON DELETE CASCADE,
  sector_category_id VARCHAR(64) NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  PRIMARY KEY (variant_id, sector_category_id)
);

CREATE TABLE bundle_items (
  bundle_variant_id INT NOT NULL REFERENCES product_variants(id) ON DELETE CASCADE,
  included_variant_id INT NOT NULL REFERENCES product_variants(id) ON DELETE CASCADE,
  sort_order INT NOT NULL DEFAULT 0,
  quantity INT NOT NULL DEFAULT 1,
  discount_pct DECIMAL(5, 2),
  PRIMARY KEY (bundle_variant_id, included_variant_id)
);

CREATE TABLE product_timeline_milestones (
  id SERIAL PRIMARY KEY,
  variant_id INT NOT NULL REFERENCES product_variants(id) ON DELETE CASCADE,
  milestone_text TEXT NOT NULL,
  sort_order INT NOT NULL DEFAULT 0
);

CREATE INDEX idx_products_collection ON products(collection_id) WHERE status = 'published';
CREATE INDEX idx_variants_product ON product_variants(product_id);
CREATE INDEX idx_variants_service_type ON product_variants(service_type_id);
CREATE INDEX idx_product_tags_variant ON product_tags(variant_id);
CREATE INDEX idx_product_features_variant ON product_features(variant_id);
