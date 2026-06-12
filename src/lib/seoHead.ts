import { PLATFORM_HERO_HEADLINE } from "@/lib/brandLinks";
import {
  absoluteUrl,
  buildServiceMetaDescription,
  CONTACT_SEO,
  DEFAULT_OG_IMAGE_PATH,
  HOME_SEO,
  MARKETPLACE_SEO,
  SEO_BRAND,
  SEO_PUBLISHER,
  truncateMetaDescription,
} from "@/lib/seo";
import {
  buildContactStructuredData,
  buildHomeStructuredData,
  buildMarketplaceStructuredData,
  buildServiceFaqStructuredData,
  buildServiceStructuredData,
} from "@/lib/structuredData";
import { getServiceFaqsContent } from "@/components/service-detail/serviceFaqsContent";
import { getDisplayTitle } from "@/components/service-detail/serviceDetailHelpers";
import { getServiceById, initialServices } from "@/data/services";

export type SeoHeadInput = {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
  ogType?: "website" | "article" | "product";
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeJsonForHtml(json: string): string {
  return json.replace(/</g, "\\u003c");
}

export function renderSeoHeadMarkup({
  title,
  description,
  path,
  noindex = false,
  ogType = "website",
}: SeoHeadInput): string {
  const metaDescription = truncateMetaDescription(description);
  const canonical = absoluteUrl(path);
  const ogImage = absoluteUrl(DEFAULT_OG_IMAGE_PATH);

  const lines = [
    `<title>${escapeHtml(title)}</title>`,
    `<meta name="description" content="${escapeHtml(metaDescription)}" />`,
    `<link rel="canonical" href="${escapeHtml(canonical)}" />`,
    noindex ? `<meta name="robots" content="noindex, nofollow" />` : "",
    `<meta property="og:title" content="${escapeHtml(title)}" />`,
    `<meta property="og:description" content="${escapeHtml(metaDescription)}" />`,
    `<meta property="og:url" content="${escapeHtml(canonical)}" />`,
    `<meta property="og:type" content="${ogType}" />`,
    `<meta property="og:image" content="${escapeHtml(ogImage)}" />`,
    `<meta property="og:site_name" content="${escapeHtml(SEO_PUBLISHER)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:site" content="@digitalqatalyst" />`,
    `<meta name="twitter:title" content="${escapeHtml(title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(metaDescription)}" />`,
    `<meta name="twitter:image" content="${escapeHtml(ogImage)}" />`,
  ].filter(Boolean);

  return lines.join("\n    ");
}

export function renderJsonLdScript(data: Record<string, unknown>): string {
  return `<script type="application/ld+json">${escapeJsonForHtml(JSON.stringify(data))}</script>`;
}

export function renderNoscriptFallback(heading: string, description: string): string {
  return `<noscript><main style="max-width:48rem;margin:2rem auto;padding:0 1.25rem;font-family:system-ui,sans-serif;color:#1a2744"><h1 style="font-size:2rem;margin-bottom:0.75rem">${escapeHtml(heading)}</h1><p style="line-height:1.6;color:#64748b">${escapeHtml(truncateMetaDescription(description))}</p></main></noscript>`;
}

export type PrerenderPagePayload = {
  head: SeoHeadInput;
  jsonLd?: Record<string, unknown>;
  noscript: { heading: string; description: string };
};

export function getPrerenderPayloadForPath(path: string): PrerenderPagePayload | null {
  if (path === HOME_SEO.path) {
    return {
      head: {
        title: HOME_SEO.title,
        description: HOME_SEO.description,
        path: HOME_SEO.path,
      },
      jsonLd: buildHomeStructuredData(),
      noscript: {
        heading: PLATFORM_HERO_HEADLINE,
        description: HOME_SEO.description,
      },
    };
  }

  if (path === MARKETPLACE_SEO.path) {
    const items = initialServices.map((service) => ({
      id: service.id,
      name: getDisplayTitle(service.standardName, service.serviceType),
      url: absoluteUrl(`/service/${service.id}`),
    }));

    return {
      head: {
        title: MARKETPLACE_SEO.title,
        description: MARKETPLACE_SEO.description,
        path: MARKETPLACE_SEO.path,
      },
      jsonLd: buildMarketplaceStructuredData(items),
      noscript: {
        heading: "Browse transformation services",
        description: MARKETPLACE_SEO.description,
      },
    };
  }

  if (path === CONTACT_SEO.path) {
    return {
      head: {
        title: CONTACT_SEO.title,
        description: CONTACT_SEO.description,
        path: CONTACT_SEO.path,
      },
      jsonLd: buildContactStructuredData(),
      noscript: {
        heading: "Talk to our team",
        description: CONTACT_SEO.description,
      },
    };
  }

  const serviceMatch = path.match(/^\/service\/(\d+)$/);
  if (!serviceMatch) return null;

  const serviceId = Number(serviceMatch[1]);
  const service = getServiceById(serviceId);
  if (!service) return null;

  const displayTitle = getDisplayTitle(service.standardName, service.serviceType);
  const servicePath = `/service/${serviceId}`;
  const description = buildServiceMetaDescription(displayTitle, service);
  const faqSchema = buildServiceFaqStructuredData(
    service,
    displayTitle,
    servicePath,
    getServiceFaqsContent(service).faqs
  );

  return {
    head: {
      title: `${displayTitle} | ${SEO_BRAND}`,
      description,
      path: servicePath,
      ogType: "product",
    },
    jsonLd: faqSchema
      ? {
          "@context": "https://schema.org",
          "@graph": [
            ...(buildServiceStructuredData(service, displayTitle, servicePath)[
              "@graph"
            ] as Record<string, unknown>[]),
            faqSchema,
          ],
        }
      : buildServiceStructuredData(service, displayTitle, servicePath),
    noscript: {
      heading: displayTitle,
      description,
    },
  };
}

const SEO_TAG_PATTERN =
  /[ \t]*<title>[\s\S]*?<\/title>\s*|[ \t]*<meta\s+name="description"[^>]*>\s*|[ \t]*<meta\s+name="author"[^>]*>\s*|[ \t]*<meta\s+name="robots"[^>]*>\s*|[ \t]*<meta\s+property="og:[^"]+"[^>]*>\s*|[ \t]*<meta\s+name="twitter:[^"]+"[^>]*>\s*|[ \t]*<link\s+rel="canonical"[^>]*>\s*|[ \t]*<script\s+type="application\/ld\+json">[\s\S]*?<\/script>\s*/gi;

export function stripGeneratedSeoFromTemplate(html: string): string {
  return html.replace(SEO_TAG_PATTERN, "");
}

export function assemblePrerenderedHtml(
  template: string,
  payload: PrerenderPagePayload
): string {
  const stripped = stripGeneratedSeoFromTemplate(template);
  const seoBlock = renderSeoHeadMarkup(payload.head);
  const jsonLdBlock = payload.jsonLd ? `\n    ${renderJsonLdScript(payload.jsonLd)}` : "";
  const noscript = renderNoscriptFallback(
    payload.noscript.heading,
    payload.noscript.description
  );

  const withHead = stripped.replace(
    /<\/head>/i,
    `    ${seoBlock}${jsonLdBlock}\n  </head>`
  );

  return withHead.replace(/<body([^>]*)>/i, `<body$1>\n    ${noscript}`);
}
