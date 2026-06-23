export const DQ_CORP_WEB_URL = "https://digitalqatalyst.com";
export const DQ_CORP_WEB_ABOUT_URL = "https://www.digitalqatalyst.com/about";

export const FOOTER_ABOUT_DQ_LABEL = "About DigitalQatalyst";
export const FOOTER_EXPLORE_DQ_LABEL = "Explore DigitalQatalyst";

/** Customer-facing product brand (logo, hero, titles). */
export const PLATFORM_NAME = "TMaaS";
export const PLATFORM_ACRONYM = "TMaaS";
export const PLATFORM_FULL_NAME = "Transformation Management as a Service";
export const PLATFORM_NAME_EXPANDED = `${PLATFORM_FULL_NAME} (TMaaS)`;

export const COMPANY_NAME = "DigitalQatalyst";
export const PAGE_TITLE_SEPARATOR = " · ";
export const POWERED_BY_LINE = `Powered by ${COMPANY_NAME}`;

/** Browser tab title: `TMaaS · <page>` per product-chrome guidelines. */
export function buildPageTitle(pageName: string): string {
  return `${PLATFORM_ACRONYM}${PAGE_TITLE_SEPARATOR}${pageName}`;
}

export const PLATFORM_DESCRIPTOR = "Digital transformation marketplace";

export const PLATFORM_HERO_HEADLINE_PRIMARY = "Digital Transformation";
export const PLATFORM_HERO_HEADLINE_ACCENT = "Accelerated";

export const PLATFORM_HERO_HEADLINE = `${PLATFORM_HERO_HEADLINE_PRIMARY} ${PLATFORM_HERO_HEADLINE_ACCENT}`;

export const PLATFORM_HERO_SUBCOPY =
  "Transformation Management as a Service (TMaaS) is a digital transformation marketplace with 100+ services across AI, experience, operations, and security.";

export const PLATFORM_LINEAGE_LINE =
  "Transformation Management as a Service (TMaaS) is a DigitalQatalyst product.";

export const PLATFORM_CONTACT_LINE = "Talk to the DigitalQatalyst team about TMaaS.";

export const NAV_BROWSE_MARKETPLACE_LABEL = "Browse marketplace";

/** @deprecated Use PLATFORM_NAME */
export const PLATFORM_BRAND_LINE = PLATFORM_NAME;
