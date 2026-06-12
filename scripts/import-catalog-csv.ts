/**
 * Upserts catalog from .service-catalog/*.csv into Supabase.
 * Requires: SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY
 * Run: npx tsx scripts/import-catalog-csv.ts
 */
import { createClient } from "@supabase/supabase-js";
import path from "path";
import { fileURLToPath } from "url";
import { initialServices } from "../src/data/services";
import { catalogDir, readCsv } from "./catalog-csv-utils";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, "..");

const serviceById = new Map(initialServices.map((s) => [s.id, s]));

function parseBool(value: string): boolean {
  return value === "true" || value === "t" || value === "1";
}

function parseNullableInt(value: string): number | null {
  if (!value || value === "NULL") return null;
  const n = parseInt(value, 10);
  return Number.isNaN(n) ? null : n;
}

async function main() {
  const url = process.env.SUPABASE_URL ?? process.env.VITE_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceKey) {
    console.error("Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY before import.");
    process.exit(1);
  }

  const supabase = createClient(url, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const catalog = catalogDir(REPO_ROOT);
  const { rows: products } = readCsv(path.join(catalog, "products.csv"));
  const { rows: variants } = readCsv(path.join(catalog, "product_variants.csv"));

  console.log(`Importing ${products.length} products and ${variants.length} variants...`);

  const productPayload = products.map((row) => ({
    id: parseInt(row.id, 10),
    slug: row.slug,
    title: row.title,
    short_description: row.short_description,
    collection_id: row.collection_id,
    is_high_impact: parseBool(row.is_high_impact),
    audience: row.audience,
    industry_relevance: row.industry_relevance,
    department: row.department,
    business_impact: row.business_impact,
    status: row.status,
    updated_at: new Date().toISOString(),
  }));

  const { error: productsError } = await supabase.from("products").upsert(productPayload, {
    onConflict: "id",
  });
  if (productsError) throw productsError;

  const variantPayload = variants.map((row) => ({
    id: parseInt(row.id, 10),
    product_id: parseInt(row.product_id, 10),
    sku: row.sku,
    slug: row.slug,
    variant_name: row.variant_name,
    service_type_id: row.service_type_id,
    duration_display: row.duration_display,
    duration_weeks_min: parseNullableInt(row.duration_weeks_min),
    duration_weeks_max: parseNullableInt(row.duration_weeks_max),
    delivery_complexity: row.delivery_complexity,
    implementation_model: row.implementation_model,
    badge: row.badge,
    positioning: row.positioning,
    is_default_variant: parseBool(row.is_default_variant),
    status: row.status,
    updated_at: new Date().toISOString(),
  }));

  const { error: variantsError } = await supabase
    .from("product_variants")
    .upsert(variantPayload, { onConflict: "id" });
  if (variantsError) throw variantsError;

  const contentPayload = variants.map((row) => {
    const product = products.find((p) => p.id === row.product_id);
    return {
      variant_id: parseInt(row.id, 10),
      description: product?.short_description ?? "",
      positioning: row.positioning,
    };
  });

  const { error: contentError } = await supabase
    .from("product_content")
    .upsert(contentPayload, { onConflict: "variant_id" });
  if (contentError) throw contentError;

  for (const row of variants) {
    const variantId = parseInt(row.id, 10);
    const fixture = serviceById.get(variantId);
    const price = fixture?.price ?? "Custom";
    const popularity = fixture?.popularityRank ?? 50;
    const purchasability =
      price === "Free"
        ? "free"
        : price === "Custom" || row.service_type_id === "bundle"
          ? "request_quote"
          : "buy_now";
    const priceType = price.startsWith("From")
      ? "from"
      : price === "Custom"
        ? "custom_floor"
        : "list";
    const amount =
      price === "Free" ? 0 : price === "Custom" ? null : parseInt(price.replace(/,/g, "").match(/(\d+)/)?.[1] ?? "0", 10);

    const { data: existingListing } = await supabase
      .from("marketplace_listings")
      .select("id")
      .eq("variant_id", variantId)
      .maybeSingle();

    let listingId = existingListing?.id;
    if (!listingId) {
      const { data: inserted, error: listingInsertError } = await supabase
        .from("marketplace_listings")
        .insert({
          merchant_id: 1,
          variant_id: variantId,
          listing_status: "active",
          purchasability,
          popularity_score: popularity,
        })
        .select("id")
        .single();
      if (listingInsertError) throw listingInsertError;
      listingId = inserted.id;
    } else {
      const { error: listingUpdateError } = await supabase
        .from("marketplace_listings")
        .update({ purchasability, popularity_score: popularity, listing_status: "active" })
        .eq("id", listingId);
      if (listingUpdateError) throw listingUpdateError;
    }

    const { data: existingPrice } = await supabase
      .from("variant_prices")
      .select("id")
      .eq("listing_id", listingId)
      .eq("is_current", true)
      .maybeSingle();

    const priceRow = {
      listing_id: listingId,
      price_type: priceType,
      amount,
      price_display: price,
      billing_period: row.service_type_id === "manage" ? "monthly" : "one_time",
      is_current: true,
    };

    if (existingPrice?.id) {
      const { error } = await supabase.from("variant_prices").update(priceRow).eq("id", existingPrice.id);
      if (error) throw error;
    } else {
      const { error } = await supabase.from("variant_prices").insert(priceRow);
      if (error) throw error;
    }
  }

  const { error: refreshError } = await supabase.rpc("refresh_product_search_index");
  if (refreshError) throw refreshError;

  console.log("Catalog import complete.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
