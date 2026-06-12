import { PLATFORM_HERO_SUBCOPY } from "@/lib/brandLinks";

export const SEO_BRAND = "TMaaS";
export const SEO_PUBLISHER = "DigitalQatalyst";

const DEFAULT_SITE_URL = "https://tmaas.digitalqatalyst.com";

export function getSiteUrl(): string {
  const fromNode =
    typeof process !== "undefined" ? process.env.VITE_SITE_URL?.trim() : undefined;
  const fromVite = import.meta.env?.VITE_SITE_URL as string | undefined;
  const base = (fromNode || fromVite?.trim() || DEFAULT_SITE_URL).replace(/\/$/, "");
  return base;
}

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteUrl()}${normalized}`;
}

export function truncateMetaDescription(text: string, maxLength = 155): string {
  const trimmed = text.replace(/\s+/g, " ").trim();
  if (trimmed.length <= maxLength) return trimmed;
  const slice = trimmed.slice(0, maxLength - 1);
  const lastSpace = slice.lastIndexOf(" ");
  return `${(lastSpace > 80 ? slice.slice(0, lastSpace) : slice).trim()}…`;
}

export const DEFAULT_OG_IMAGE_PATH = "/og-image.png";

export const HOME_SEO = {
  title: `${SEO_BRAND} | Digital Transformation Marketplace | ${SEO_PUBLISHER}`,
  description: PLATFORM_HERO_SUBCOPY,
  path: "/",
} as const;

export const MARKETPLACE_SEO = {
  title: `Marketplace | Digital Transformation Services | ${SEO_BRAND}`,
  description:
    "Explore 100+ digital transformation services with clear pricing and timelines. Filter by AI, experience, operations, or security to find the right blueprint.",
  path: "/marketplace",
} as const;

export const CONTACT_SEO = {
  title: `Talk to our team | ${SEO_BRAND}`,
  description:
    "Talk to the DigitalQatalyst team about TMaaS. Request a quote, book a consultation, or get help finding the right transformation service.",
  path: "/contact",
} as const;

export const NOT_FOUND_SEO = {
  title: `Page not found | ${SEO_BRAND}`,
  description:
    "The page you requested could not be found. Browse the TMaaS marketplace or contact our team for help finding the right digital transformation service.",
  path: "/404",
} as const;

export function buildServiceMetaDescription(
  displayTitle: string,
  service: { description: string; price: string; duration: string }
): string {
  const lead = `${displayTitle}. ${service.price} · ${service.duration}.`;
  const body = service.description.trim();
  return truncateMetaDescription(body ? `${lead} ${body}` : lead);
}
