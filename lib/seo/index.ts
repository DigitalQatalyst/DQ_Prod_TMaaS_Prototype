// ---------------------------------------------------------------------------
// SEO constants and utilities — Next.js Metadata API compatible.
// No React Helmet / useHead / JSX dependencies.
// ---------------------------------------------------------------------------

import {
  DQ_CORP_WEB_URL,
  PLATFORM_DESCRIPTOR,
  PLATFORM_FULL_NAME,
  PLATFORM_HERO_SUBCOPY,
} from "@/lib/brandLinks";

export const SEO_BRAND = "TMaaS";
export const SEO_PUBLISHER = "DigitalQatalyst";
export const DEFAULT_OG_IMAGE_PATH = "/og-image.png";

const DEFAULT_SITE_URL = "https://tmaas.digitalqatalyst.com";

export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  return (fromEnv ?? DEFAULT_SITE_URL).replace(/\/$/, "");
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

// ---------------------------------------------------------------------------
// Structured data (JSON-LD schema builders)
// ---------------------------------------------------------------------------

const SOCIAL_PROFILES = [
  "https://www.linkedin.com/company/digitalqatalyst",
  "https://x.com/digitalqatalyst",
  "https://www.youtube.com/@digitalqatalyst",
] as const;

function orgId() {
  return `${getSiteUrl()}/#organization`;
}

function websiteId() {
  return `${getSiteUrl()}/#website`;
}

export function buildHomeStructuredData() {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId(),
        name: SEO_PUBLISHER,
        alternateName: "DQ",
        url: DQ_CORP_WEB_URL,
        logo: absoluteUrl(DEFAULT_OG_IMAGE_PATH),
        description:
          "DigitalQatalyst (DQ) is a digital transformation company and the creator of TMaaS — a marketplace for end-to-end transformation services covering AI, customer experience, operations, and cybersecurity.",
        areaServed: ["AE", "GB", "US", "AU"],
        knowsAbout: [
          "Digital Transformation",
          "Transformation Management as a Service",
          "AI Strategy",
          "Customer Experience",
          "Operational Excellence",
          "Cybersecurity",
          "Change Management",
        ],
        sameAs: [...SOCIAL_PROFILES],
      },
      {
        "@type": "WebSite",
        "@id": websiteId(),
        name: SEO_BRAND,
        url: siteUrl,
        description: PLATFORM_HERO_SUBCOPY,
        publisher: { "@id": orgId() },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${siteUrl}/marketplace?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${siteUrl}/#platform`,
        name: SEO_BRAND,
        alternateName: PLATFORM_FULL_NAME,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: siteUrl,
        description: PLATFORM_HERO_SUBCOPY,
        about: {
          "@type": "Thing",
          name: PLATFORM_DESCRIPTOR,
          description:
            "A curated marketplace of digital transformation services with transparent pricing, delivery timelines, and end-to-end advisory support.",
        },
        featureList: [
          "100+ digital transformation services",
          "Transparent pricing and delivery timelines",
          "AI, experience, operations, and security blueprints",
          "End-to-end transformation advisory",
          "Service bundling and managed delivery",
        ],
        provider: { "@id": orgId() },
        offers: {
          "@type": "Offer",
          url: absoluteUrl("/marketplace"),
          description:
            "Browse and purchase digital transformation services with clear pricing and timelines.",
          availability: "https://schema.org/InStock",
        },
      },
    ],
  };
}

function parseOfferPrice(price: string): { price?: string; priceCurrency?: string } {
  const normalized = price.trim().toLowerCase();
  if (!normalized || normalized === "free" || normalized === "contact us") {
    return {};
  }
  const match = price.match(/(?:from\s+)?(?:[£$€]|aed\s*)?([\d,]+(?:\.\d+)?)/i);
  if (!match) return {};
  const amount = match[1]!.replace(/,/g, "");
  let priceCurrency = "USD";
  if (price.includes("£")) priceCurrency = "GBP";
  if (price.includes("€")) priceCurrency = "EUR";
  if (/aed/i.test(price)) priceCurrency = "AED";
  return { price: amount, priceCurrency };
}

export type ServiceForStructuredData = {
  description: string;
  price: string;
  badge?: string | null;
  serviceType: string;
  industryRelevance?: string;
};

export function buildServiceStructuredData(
  service: ServiceForStructuredData,
  displayTitle: string,
  servicePath: string
) {
  const pageUrl = absoluteUrl(servicePath);
  const description = truncateMetaDescription(
    service.description ||
      `${displayTitle} — digital transformation service on the TMaaS marketplace.`
  );
  const offer = parseOfferPrice(service.price);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId(),
        name: SEO_PUBLISHER,
        url: DQ_CORP_WEB_URL,
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: displayTitle,
        description,
        url: pageUrl,
        provider: { "@id": orgId() },
        serviceType: service.badge ?? service.serviceType,
        areaServed: service.industryRelevance ?? "Cross-Industry",
        ...(Object.keys(offer).length > 0
          ? {
              offers: {
                "@type": "Offer",
                url: pageUrl,
                availability: "https://schema.org/InStock",
                ...offer,
              },
            }
          : {}),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: getSiteUrl(),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Marketplace",
            item: absoluteUrl("/marketplace"),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: displayTitle,
            item: pageUrl,
          },
        ],
      },
    ],
  };
}

export function buildContactStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Talk to our team | ${SEO_BRAND}`,
    url: absoluteUrl("/contact"),
    description:
      "Contact DigitalQatalyst to discuss digital transformation services, request a quote, or book a TMaaS marketplace consultation.",
    isPartOf: { "@id": websiteId() },
    publisher: { "@id": orgId() },
  };
}

export type MarketplaceListItem = {
  id: number;
  name: string;
  url: string;
};

export function buildMarketplaceStructuredData(items: MarketplaceListItem[]) {
  const pageUrl = absoluteUrl("/marketplace");

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}#webpage`,
        name: `Marketplace | ${SEO_BRAND}`,
        url: pageUrl,
        description:
          "Browse digital transformation services with transparent pricing and timelines on the TMaaS marketplace.",
        isPartOf: { "@id": websiteId() },
        publisher: { "@id": orgId() },
        mainEntity: { "@id": `${pageUrl}#itemlist` },
      },
      {
        "@type": "ItemList",
        "@id": `${pageUrl}#itemlist`,
        name: "TMaaS transformation services",
        numberOfItems: items.length,
        itemListElement: items.slice(0, 50).map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          url: item.url,
        })),
      },
    ],
  };
}

export type ServiceFaq = { question: string; answer: string };

export function buildServiceFaqStructuredData(
  service: ServiceForStructuredData,
  displayTitle: string,
  servicePath: string,
  faqs: ServiceFaq[]
) {
  if (faqs.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
    url: absoluteUrl(servicePath),
    about: {
      "@type": "Service",
      name: displayTitle,
      description: truncateMetaDescription(service.description),
    },
  };
}
