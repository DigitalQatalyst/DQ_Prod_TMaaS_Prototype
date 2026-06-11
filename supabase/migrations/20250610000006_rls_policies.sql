-- Row Level Security: public read on catalog, authenticated write on carts/orders

ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_variants ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_category_map ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_features ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE variant_sector_titles ENABLE ROW LEVEL SECURITY;
ALTER TABLE bundle_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_timeline_milestones ENABLE ROW LEVEL SECURITY;
ALTER TABLE merchants ENABLE ROW LEVEL SECURITY;
ALTER TABLE marketplace_listings ENABLE ROW LEVEL SECURITY;
ALTER TABLE variant_prices ENABLE ROW LEVEL SECURITY;
ALTER TABLE listing_placements ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE deploy_modules ENABLE ROW LEVEL SECURITY;
ALTER TABLE deploy_module_features ENABLE ROW LEVEL SECURITY;
ALTER TABLE carts ENABLE ROW LEVEL SECURITY;
ALTER TABLE cart_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE quotes ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE service_orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE service_inputs ENABLE ROW LEVEL SECURITY;
ALTER TABLE service_deliverables ENABLE ROW LEVEL SECURITY;
ALTER TABLE service_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE service_audit_log ENABLE ROW LEVEL SECURITY;

-- Public read: catalog + commerce listings
CREATE POLICY "Public read categories" ON categories FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Public read products" ON products FOR SELECT TO anon, authenticated USING (status = 'published');
CREATE POLICY "Public read variants" ON product_variants FOR SELECT TO anon, authenticated USING (status = 'published');
CREATE POLICY "Public read product_category_map" ON product_category_map FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Public read product_features" ON product_features FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Public read product_tags" ON product_tags FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Public read variant_sector_titles" ON variant_sector_titles FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Public read bundle_items" ON bundle_items FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Public read milestones" ON product_timeline_milestones FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Public read merchants" ON merchants FOR SELECT TO anon, authenticated USING (status = 'active');
CREATE POLICY "Public read listings" ON marketplace_listings FOR SELECT TO anon, authenticated USING (listing_status = 'active');
CREATE POLICY "Public read prices" ON variant_prices FOR SELECT TO anon, authenticated USING (is_current = true);
CREATE POLICY "Public read placements" ON listing_placements FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Public read product_content" ON product_content FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Public read deploy_modules" ON deploy_modules FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Public read deploy_module_features" ON deploy_module_features FOR SELECT TO anon, authenticated USING (true);

-- Carts: users manage own carts (session-based guest carts use service role in API layer)
CREATE POLICY "Users read own carts" ON carts FOR SELECT TO authenticated USING (user_id = auth.uid());
CREATE POLICY "Users insert own carts" ON carts FOR INSERT TO authenticated WITH CHECK (user_id = auth.uid());
CREATE POLICY "Users update own carts" ON carts FOR UPDATE TO authenticated USING (user_id = auth.uid());

CREATE POLICY "Users read own cart items" ON cart_items FOR SELECT TO authenticated
  USING (EXISTS (SELECT 1 FROM carts c WHERE c.id = cart_id AND c.user_id = auth.uid()));
CREATE POLICY "Users manage own cart items" ON cart_items FOR ALL TO authenticated
  USING (EXISTS (SELECT 1 FROM carts c WHERE c.id = cart_id AND c.user_id = auth.uid()));

-- Orders: buyers read own orders
CREATE POLICY "Users read own orders" ON orders FOR SELECT TO authenticated USING (user_id = auth.uid());
CREATE POLICY "Users read own order items" ON order_items FOR SELECT TO authenticated
  USING (EXISTS (SELECT 1 FROM orders o WHERE o.id = order_id AND o.user_id = auth.uid()));
CREATE POLICY "Users read own service orders" ON service_orders FOR SELECT TO authenticated
  USING (EXISTS (
    SELECT 1 FROM order_items oi
    JOIN orders o ON o.id = oi.order_id
    WHERE oi.id = order_item_id AND o.user_id = auth.uid()
  ));

GRANT SELECT ON marketplace_listings_view TO anon, authenticated;
GRANT SELECT ON product_search_index TO anon, authenticated;

CREATE OR REPLACE FUNCTION reset_catalog_sequences()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  PERFORM setval(pg_get_serial_sequence('products', 'id'), COALESCE((SELECT MAX(id) FROM products), 1));
  PERFORM setval(pg_get_serial_sequence('product_variants', 'id'), COALESCE((SELECT MAX(id) FROM product_variants), 1));
  PERFORM setval(pg_get_serial_sequence('marketplace_listings', 'id'), COALESCE((SELECT MAX(id) FROM marketplace_listings), 1));
  PERFORM setval(pg_get_serial_sequence('merchants', 'id'), COALESCE((SELECT MAX(id) FROM merchants), 1));
END;
$$;
