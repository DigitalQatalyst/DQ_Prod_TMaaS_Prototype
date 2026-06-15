-- Commerce: merchants, listings, prices, placements

CREATE TYPE listing_status AS ENUM ('active', 'out_of_stock', 'quote_only', 'hidden');
CREATE TYPE purchasability AS ENUM ('buy_now', 'request_quote', 'free', 'not_purchasable');
CREATE TYPE price_type AS ENUM ('list', 'sale', 'from', 'custom_floor');
CREATE TYPE billing_period AS ENUM ('one_time', 'monthly');
CREATE TYPE listing_placement AS ENUM ('best_seller', 'featured', 'homepage_shelf', 'category_hero');

CREATE TABLE merchants (
  id SERIAL PRIMARY KEY,
  slug VARCHAR(64) NOT NULL UNIQUE,
  name TEXT NOT NULL,
  status VARCHAR(16) NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'suspended'))
);

CREATE TABLE marketplace_listings (
  id SERIAL PRIMARY KEY,
  merchant_id INT NOT NULL REFERENCES merchants(id) ON DELETE CASCADE,
  variant_id INT NOT NULL REFERENCES product_variants(id) ON DELETE CASCADE,
  listing_status listing_status NOT NULL DEFAULT 'active',
  purchasability purchasability NOT NULL DEFAULT 'buy_now',
  lead_time_days INT,
  max_concurrent_orders INT,
  popularity_score INT NOT NULL DEFAULT 0,
  published_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE (merchant_id, variant_id)
);

CREATE TABLE variant_prices (
  id SERIAL PRIMARY KEY,
  listing_id INT NOT NULL REFERENCES marketplace_listings(id) ON DELETE CASCADE,
  price_type price_type NOT NULL DEFAULT 'list',
  amount DECIMAL(12, 2),
  currency CHAR(3) NOT NULL DEFAULT 'USD',
  price_display VARCHAR(64) NOT NULL,
  billing_period billing_period NOT NULL DEFAULT 'one_time',
  valid_from TIMESTAMPTZ NOT NULL DEFAULT now(),
  valid_to TIMESTAMPTZ,
  is_current BOOLEAN NOT NULL DEFAULT true
);

CREATE TABLE listing_placements (
  id SERIAL PRIMARY KEY,
  listing_id INT NOT NULL REFERENCES marketplace_listings(id) ON DELETE CASCADE,
  placement listing_placement NOT NULL,
  category_id VARCHAR(64) REFERENCES categories(id) ON DELETE SET NULL,
  rank INT NOT NULL DEFAULT 0,
  starts_at TIMESTAMPTZ,
  ends_at TIMESTAMPTZ
);

CREATE INDEX idx_listings_variant ON marketplace_listings(variant_id);
CREATE INDEX idx_listings_status ON marketplace_listings(listing_status) WHERE listing_status = 'active';
CREATE INDEX idx_listings_popularity ON marketplace_listings(popularity_score DESC);
CREATE INDEX idx_variant_prices_listing ON variant_prices(listing_id) WHERE is_current = true;
CREATE INDEX idx_listing_placements_listing ON listing_placements(listing_id);
