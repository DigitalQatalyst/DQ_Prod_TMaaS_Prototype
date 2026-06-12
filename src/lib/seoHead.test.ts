import { describe, expect, it, vi } from "vitest";
import {
  assemblePrerenderedHtml,
  getPrerenderPayloadForPath,
  renderSeoHeadMarkup,
  stripGeneratedSeoFromTemplate,
} from "./seoHead";

vi.mock("@/lib/seo", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@/lib/seo")>();
  return {
    ...actual,
    getSiteUrl: () => "https://tmaas.example.com",
    absoluteUrl: (p: string) => `https://tmaas.example.com${p.startsWith("/") ? p : `/${p}`}`,
  };
});

const TEMPLATE = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Fallback</title>
    <meta name="description" content="Fallback description" />
    <link rel="icon" href="/favicon.svg" />
    <script type="module" src="/assets/index.js"></script>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`;

describe("seoHead", () => {
  it("renders canonical and og tags", () => {
    const html = renderSeoHeadMarkup({
      title: "Test | TMaaS",
      description: "Test description for SEO.",
      path: "/marketplace",
    });

    expect(html).toContain("<title>Test | TMaaS</title>");
    expect(html).toContain('rel="canonical" href="https://tmaas.example.com/marketplace"');
    expect(html).toContain('property="og:url" content="https://tmaas.example.com/marketplace"');
  });

  it("assembles marketplace HTML with CollectionPage schema and noscript", () => {
    const payload = getPrerenderPayloadForPath("/marketplace");
    expect(payload).not.toBeNull();

    const html = assemblePrerenderedHtml(TEMPLATE, payload!);
    expect(html).toContain("Browse transformation services");
    expect(html).toContain("<noscript>");
    expect(html).toContain('"@type":"CollectionPage"');
    expect(html).toContain('"@type":"ItemList"');
    expect(html).not.toContain("Fallback description");
    expect(html).toContain('href="https://tmaas.example.com/marketplace"');
  });

  it("assembles service detail with Service schema", () => {
    const payload = getPrerenderPayloadForPath("/service/1");
    expect(payload).not.toBeNull();

    const html = assemblePrerenderedHtml(TEMPLATE, payload!);
    expect(html).toContain('"@type":"Service"');
    expect(html).toContain("BreadcrumbList");
    expect(html).toContain('"@type":"FAQPage"');
    expect(html).toContain('property="og:type" content="product"');
  });

  it("strips previously generated SEO tags from template", () => {
    const stripped = stripGeneratedSeoFromTemplate(TEMPLATE);
    expect(stripped).not.toContain("Fallback description");
    expect(stripped).toContain('rel="icon"');
  });
});
