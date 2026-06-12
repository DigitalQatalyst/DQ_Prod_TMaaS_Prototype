/**
 * Buyer-facing labels for marketplace cards and PDPs.
 * Internal variant_name / DB slugs are unchanged.
 */

const VARIANT_SUFFIX_RE =
  /^(.+?)\s+-\s+(Assess|Design|AI Design|Deploy|AI Deploy|Managed|Managed Service|Transformation Bundle|Advisory Set|Design Services Set|Deploy Services Set|Managed Services Set)$/;

/** Product family stem renames (display only). Slugs unchanged. */
export const PRODUCT_DISPLAY_RENAMES: Record<string, string> = {
  "Mobile Apps": "Mobile Apps & Services",
  "Physical Channels": "Physical & Frontline Channels",
  "CRM Solutions": "CRM & Customer Relationship",
  "Marketing Solutions": "Marketing Operations",
  "Advisory Set": "Flexible Advisory Package",
  "Design Services Set": "Flexible Design Package",
  "Deploy Services Set": "Flexible Deploy Package",
  "Managed Services Set": "Flexible Managed Services Package",
};

const SUFFIX_TO_SERVICE_TYPE: Record<string, string> = {
  Assess: "advisory",
  Design: "design",
  "AI Design": "ai_design",
  Deploy: "deploy",
  "AI Deploy": "ai_deploy",
  Managed: "manage",
  "Managed Service": "manage",
  "Transformation Bundle": "bundle",
  "Advisory Set": "bundle",
  "Design Services Set": "bundle",
  "Deploy Services Set": "bundle",
  "Managed Services Set": "bundle",
};

/** Marketplace card / listing stage label (suffix after product name). */
const CARD_STAGE_LABEL: Record<string, string> = {
  advisory: "Assess",
  design: "Design",
  ai_design: "AI Design",
  deploy: "Deploy",
  ai_deploy: "AI Deploy",
  manage: "Managed Service",
  bundle: "End-to-end bundle",
};

/** PDP hero type badge (differs from title for Assess only). */
const PDP_TYPE_BADGE_LABEL: Record<string, string> = {
  advisory: "Assessment",
  design: "Design",
  ai_design: "AI Design",
  deploy: "Deploy",
  ai_deploy: "AI Deploy",
  manage: "Managed Service",
  bundle: "End-to-end bundle",
};

/** Filter chips and service-type pickers (customer-facing). */
export const MARKETPLACE_SERVICE_TYPE_LABELS: Record<string, string> = {
  advisory: "Assess",
  design: "Design",
  ai_design: "AI Design",
  deploy: "Deploy",
  ai_deploy: "AI Deploy",
  manage: "Managed Service",
  bundle: "End-to-end bundle",
};

export const BUNDLE_PDP_SUBTITLE =
  "Full transformation path — assessment, design, deployment, and managed service, scoped to your priorities.";

export const BUNDLE_PDP_SUBTITLE_SHORT =
  "Advisory through managed operations, tailored to your organisation.";

export const BUNDLE_INCLUSION_LINE =
  "Includes design, AI design, deploy, AI deploy, and managed service stages, scoped during assessment.";

type ParsedName = {
  productStem: string;
  variantSuffix: string | null;
  serviceType: string | undefined;
};

function parseStandardName(standardName: string): ParsedName {
  const withoutHighImpact = standardName.replace(" (High-Impact)", "").trim();
  const match = withoutHighImpact.match(VARIANT_SUFFIX_RE);
  if (!match) {
    return { productStem: withoutHighImpact, variantSuffix: null, serviceType: undefined };
  }
  const variantSuffix = match[2];
  return {
    productStem: match[1].trim(),
    variantSuffix,
    serviceType: SUFFIX_TO_SERVICE_TYPE[variantSuffix],
  };
}

function renameProductStem(stem: string): string {
  return PRODUCT_DISPLAY_RENAMES[stem] ?? stem;
}

function resolveServiceType(standardName: string, serviceType?: string): string | undefined {
  if (serviceType) return serviceType;
  return parseStandardName(standardName).serviceType;
}

const PDP_BUNDLE_TITLE_STAGE = "End-to-end transformation";

function formatTitle(
  standardName: string,
  serviceType: string | undefined,
  stageLabel: string | undefined,
  bundleTitleStage: string = PDP_BUNDLE_TITLE_STAGE
): string {
  const { productStem, variantSuffix } = parseStandardName(standardName);
  const product = renameProductStem(productStem);

  if (variantSuffix && productStem === variantSuffix) {
    return product;
  }

  if (serviceType === "bundle" || variantSuffix === "Transformation Bundle") {
    return `${product} - ${bundleTitleStage}`;
  }

  const stage =
    stageLabel ??
    (serviceType ? CARD_STAGE_LABEL[serviceType] : variantSuffix) ??
    variantSuffix;

  if (!stage) return product;
  return `${product} - ${stage}`;
}

/** Marketplace cards, shelves, and list rows. */
export function getMarketplaceCardTitle(
  standardName: string,
  serviceType?: string
): string {
  const type = resolveServiceType(standardName, serviceType);
  const stage = type ? CARD_STAGE_LABEL[type] : undefined;
  return formatTitle(standardName, type, stage, CARD_STAGE_LABEL.bundle);
}

/** PDP H1 and SEO title (keeps "Assess" in title, not "Assessment"). */
export function getPdpDisplayTitle(standardName: string, serviceType?: string): string {
  const type = resolveServiceType(standardName, serviceType);
  const stage = type ? CARD_STAGE_LABEL[type] : undefined;
  return formatTitle(standardName, type, stage, PDP_BUNDLE_TITLE_STAGE);
}

/** @deprecated Use getPdpDisplayTitle or getMarketplaceCardTitle */
export function getDisplayTitle(standardName: string, serviceType?: string): string {
  return getPdpDisplayTitle(standardName, serviceType);
}

/** PDP hero type badge chip. */
export function getPdpTypeBadgeLabel(serviceType: string, badge?: string): string {
  if (serviceType === "bundle") return PDP_TYPE_BADGE_LABEL.bundle;
  return PDP_TYPE_BADGE_LABEL[serviceType] ?? badge ?? serviceType;
}

/** Rename product stem only (e.g. solution family in copy). */
export function getDisplayProductName(standardName: string): string {
  const { productStem } = parseStandardName(standardName);
  return renameProductStem(productStem);
}
