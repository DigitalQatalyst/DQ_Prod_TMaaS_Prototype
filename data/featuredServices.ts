/**
 * Marketplace "Featured services" carousel (all categories).
 * One variant per journey stage, interleaved via sortCatalogByPopularMix.
 * popularity_score / popularityRank must stay above the default stage band (100).
 */
export const FEATURED_POPULARITY_SCORE = 110;

export const FEATURED_SERVICE_VARIANT_IDS = [
  85, // Governance, Risk & Compliance (High-Impact) - Assess
  62, // Business Process Automation (High-Impact) - Design
  117, // Enterprise AI & Automation (High-Impact) - AI Design
  130, // DevSecOps Automation (High-Impact) - Deploy
  107, // Enterprise Data Platform (High-Impact) - AI Deploy
  30, // Integrated Experience (High-Impact) - Managed
] as const;

export type FeaturedServiceVariantId = (typeof FEATURED_SERVICE_VARIANT_IDS)[number];
