/**
 * 20 representative marketplace services across collections and service types.
 * Used for Supabase dev/staging seeds.
 */
export const CURATED_SERVICE_IDS = [
  // experience — advisory, design, ai_design, deploy, manage, bundle
  1, 2, 3, 4, 6, 203,
  // operations
  55, 56, 57, 58, 212,
  // security
  85, 86, 88, 216,
  // ai
  103, 104, 106, 108, 219,
] as const;

export type CuratedServiceId = (typeof CURATED_SERVICE_IDS)[number];
