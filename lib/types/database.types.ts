export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
  public: {
    Tables: {
      marketplace_listings_view: {
        Row: {
          listing_id: number;
          merchant_id: number;
          variant_id: number;
          listing_status: string;
          purchasability: string;
          popularity_score: number;
          product_id: number;
          sku: string;
          slug: string;
          variant_name: string;
          service_type_id: string;
          duration_display: string;
          duration_weeks_min: number | null;
          duration_weeks_max: number | null;
          delivery_complexity: string | null;
          implementation_model: string | null;
          badge: string | null;
          positioning: string | null;
          product_title: string;
          short_description: string | null;
          collection_id: string;
          is_high_impact: boolean;
          audience: string | null;
          industry_relevance: string | null;
          department: string | null;
          business_impact: string | null;
          price_display: string | null;
          price_amount: number | null;
          currency: string | null;
          display_title: string;
          is_bundle: boolean;
        };
      };
      product_search_index: {
        Row: {
          listing_id: number;
          variant_id: number;
          product_id: number;
          slug: string;
          display_title: string;
          short_description: string | null;
          collection_id: string;
          service_type_id: string;
          price_amount_min: number | null;
          price_display: string | null;
          duration_display: string;
          duration_weeks_min: number | null;
          popularity_score: number;
          is_bundle: boolean;
          purchasability: string;
          tags: Json;
          category_ids: Json;
          search_vector: unknown;
        };
      };
      product_features: {
        Row: { variant_id: number; feature_text: string; sort_order: number };
      };
      product_tags: {
        Row: { variant_id: number; tag_name: string };
      };
      product_content: {
        Row: {
          variant_id: number;
          description: string;
          positioning: string | null;
        };
      };
      variant_sector_titles: {
        Row: {
          variant_id: number;
          sector_category_id: string;
          title: string;
        };
      };
      product_timeline_milestones: {
        Row: {
          variant_id: number;
          milestone_text: string;
          sort_order: number;
        };
      };
      bundle_items: {
        Row: {
          bundle_variant_id: number;
          included_variant_id: number;
          sort_order: number;
        };
      };
      deploy_modules: {
        Row: { id: number; variant_id: number; name: string; sort_order: number };
      };
      deploy_module_features: {
        Row: { module_id: number; feature_text: string; sort_order: number };
      };
      listing_placements: {
        Row: {
          listing_id: number;
          placement: string;
          category_id: string | null;
          rank: number;
        };
      };
    };
    Views: Record<string, never>;
    Functions: {
      refresh_product_search_index: { Args: Record<string, never>; Returns: undefined };
    };
  };
}
