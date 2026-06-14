import {
  DQ_CORP_WEB_URL,
  PLATFORM_DESCRIPTOR,
  PLATFORM_FULL_NAME,
  PLATFORM_HERO_SUBCOPY,
} from "@/lib/brandLinks";
import {
  absoluteUrl,
  DEFAULT_OG_IMAGE_PATH,
  getSiteUrl,
  SEO_BRAND,
  SEO_PUBLISHER,
  truncateMetaDescription,
} from "@/lib/seo";
import type { ServiceProduct } from "@/types/serviceProduct";

function orgId() {
  return `${getSiteUrl()}/#organization`;
}

function websiteId() {
  return `${getSiteUrl()}/#website`;
}

const SOCIAL_PROFILES = [
  "https://www.linkedin.com/company/digitalqatalyst",
  "https://x.com/digitalqatalyst",
  "https://www.youtube.com/@digitalqatalyst",
] as const;

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

  const amount = match[1].replace(/,/g, "");
  let priceCurrency = "USD";
  if (price.includes("£")) priceCurrency = "GBP";
  if (price.includes("€")) priceCurrency = "EUR";
  if (/aed/i.test(price)) priceCurrency = "AED";

  return { price: amount, priceCurrency };
}

export function buildServiceStructuredData(
  service: ServiceProduct,
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
        serviceType: service.badge || service.serviceType,
        areaServed: service.industryRelevance || "Cross-Industry",
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

export function buildServiceFaqStructuredData(
  service: ServiceProduct,
  displayTitle: string,
  servicePath: string,
  faqs: { question: string; answer: string }[]
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
