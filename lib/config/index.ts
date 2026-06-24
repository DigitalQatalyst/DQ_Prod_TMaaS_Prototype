export const config = {
  supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
  supabaseAnonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "",
  env: (process.env.NEXT_PUBLIC_ENV ?? "development") as "development" | "staging" | "production",
} as const;

// Re-export feature flags from the canonical singleton to avoid duplicate instances.
export {
  featureFlags,
  isPageEnabled,
  isFeatureEnabled,
  getEnabledPages,
  getFirstEnabledRoute,
} from "@/lib/featureFlags";
export type { FeatureFlags } from "@/lib/featureFlags";
