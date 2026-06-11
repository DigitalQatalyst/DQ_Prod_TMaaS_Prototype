/**
 * Builds supabase/migrations/20250610000008_seed_full_catalog.sql from fixtures.
 * Run: npm run db:migration:full-catalog
 */
import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const migrationPath = path.join(
  root,
  "supabase/migrations/20250610000008_seed_full_catalog.sql"
);
const seedPath = path.join(root, "supabase/seed-data.sql");

const header = `-- Seed: full marketplace catalog (35 products, 221 product_variants)
-- Prerequisites: migrations 20250610000001 … 20250610000006 must be applied first.
--
-- Regenerate: npm run db:migration:full-catalog
-- Standalone SQL copy: supabase/seed-data.sql
--
-- Run in Supabase Dashboard → SQL Editor, or: supabase db push
--
-- Re-seeding on a DB that already has catalog data: uncomment the TRUNCATE block below.

/*
TRUNCATE
  bundle_items,
  deploy_module_features,
  deploy_modules,
  listing_placements,
  variant_prices,
  marketplace_listings,
  product_timeline_milestones,
  product_tags,
  product_features,
  product_content,
  product_category_map,
  product_variants,
  products,
  merchants,
  categories
RESTART IDENTITY CASCADE;
*/

`;

const seed = execSync("npx tsx scripts/generate-seed-sql.ts", {
  cwd: root,
  env: { ...process.env, SEED_ALL: "true" },
  encoding: "utf8",
});

fs.writeFileSync(seedPath, seed);
fs.writeFileSync(migrationPath, header + seed);

const productCount = (seed.match(/^INSERT INTO products /gm) ?? []).length;
const variantCount = (seed.match(/^INSERT INTO product_variants /gm) ?? []).length;

console.log(`Wrote ${migrationPath}`);
console.log(`Wrote ${seedPath}`);
console.log(`Products: ${productCount}, product_variants: ${variantCount}`);
