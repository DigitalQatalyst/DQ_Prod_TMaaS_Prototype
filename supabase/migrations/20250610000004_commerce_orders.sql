-- Phase 2/3: carts, quotes, orders, service fulfillment

CREATE TYPE cart_status AS ENUM ('active', 'converted', 'abandoned');
CREATE TYPE quote_status AS ENUM ('draft', 'sent', 'accepted', 'expired');
CREATE TYPE order_status AS ENUM (
  'pending_payment',
  'confirmed',
  'in_fulfillment',
  'completed',
  'cancelled'
);
CREATE TYPE fulfillment_status AS ENUM (
  'pending',
  'in_progress',
  'delivered',
  'cancelled'
);
CREATE TYPE service_order_stage AS ENUM (
  'payment_confirmation_pending',
  'client_input_pending',
  'input_in_review',
  'in_delivery',
  'deliverables_pending_review',
  'closed'
);

CREATE TABLE carts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID,
  session_id VARCHAR(128),
  status cart_status NOT NULL DEFAULT 'active',
  currency CHAR(3) NOT NULL DEFAULT 'USD',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE cart_items (
  cart_id UUID NOT NULL REFERENCES carts(id) ON DELETE CASCADE,
  listing_id INT NOT NULL REFERENCES marketplace_listings(id) ON DELETE CASCADE,
  quantity INT NOT NULL CHECK (quantity > 0),
  unit_price_snapshot DECIMAL(12, 2),
  PRIMARY KEY (cart_id, listing_id)
);

CREATE TABLE quotes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  cart_id UUID REFERENCES carts(id) ON DELETE SET NULL,
  order_id UUID,
  status quote_status NOT NULL DEFAULT 'draft',
  total_amount DECIMAL(12, 2),
  currency CHAR(3) NOT NULL DEFAULT 'USD',
  valid_until TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_number VARCHAR(32) NOT NULL UNIQUE,
  user_id UUID,
  org_id UUID,
  merchant_id INT NOT NULL REFERENCES merchants(id),
  status order_status NOT NULL DEFAULT 'pending_payment',
  subtotal DECIMAL(12, 2) NOT NULL DEFAULT 0,
  tax DECIMAL(12, 2) NOT NULL DEFAULT 0,
  total DECIMAL(12, 2) NOT NULL DEFAULT 0,
  currency CHAR(3) NOT NULL DEFAULT 'USD',
  placed_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE order_items (
  id SERIAL PRIMARY KEY,
  order_id UUID NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  listing_id INT NOT NULL REFERENCES marketplace_listings(id),
  variant_id INT NOT NULL REFERENCES product_variants(id),
  product_title TEXT NOT NULL,
  variant_name TEXT NOT NULL,
  sku VARCHAR(64) NOT NULL,
  quantity INT NOT NULL DEFAULT 1,
  unit_price DECIMAL(12, 2) NOT NULL DEFAULT 0,
  line_total DECIMAL(12, 2) NOT NULL DEFAULT 0,
  price_display VARCHAR(64) NOT NULL,
  duration_display VARCHAR(64),
  fulfillment_status fulfillment_status NOT NULL DEFAULT 'pending'
);

CREATE TABLE service_orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_item_id INT NOT NULL UNIQUE REFERENCES order_items(id) ON DELETE CASCADE,
  service_order_number VARCHAR(32) NOT NULL UNIQUE,
  stage service_order_stage NOT NULL DEFAULT 'payment_confirmation_pending',
  delivery_lead TEXT,
  start_date DATE,
  end_date DATE,
  client_organisation TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE service_inputs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  service_order_id UUID NOT NULL REFERENCES service_orders(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  status VARCHAR(32) NOT NULL DEFAULT 'Pending',
  submitted_date TIMESTAMPTZ,
  review_feedback TEXT
);

CREATE TABLE service_deliverables (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  service_order_id UUID NOT NULL REFERENCES service_orders(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  status VARCHAR(32) NOT NULL DEFAULT 'Not Started',
  submission_date TIMESTAMPTZ,
  review_deadline TIMESTAMPTZ,
  client_feedback TEXT,
  accepted_by TEXT,
  accepted_date TIMESTAMPTZ
);

CREATE TABLE service_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  service_order_id UUID NOT NULL REFERENCES service_orders(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  session_date TIMESTAMPTZ NOT NULL,
  duration_minutes INT NOT NULL DEFAULT 60,
  status VARCHAR(32) NOT NULL DEFAULT 'Scheduled',
  meeting_link TEXT,
  notes TEXT
);

CREATE TABLE service_audit_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  service_order_id UUID NOT NULL REFERENCES service_orders(id) ON DELETE CASCADE,
  timestamp TIMESTAMPTZ NOT NULL DEFAULT now(),
  actor TEXT NOT NULL,
  action TEXT NOT NULL,
  details TEXT,
  entry_type VARCHAR(32) NOT NULL DEFAULT 'message'
);

CREATE INDEX idx_cart_items_cart ON cart_items(cart_id);
CREATE INDEX idx_order_items_order ON order_items(order_id);
CREATE INDEX idx_service_orders_stage ON service_orders(stage);
