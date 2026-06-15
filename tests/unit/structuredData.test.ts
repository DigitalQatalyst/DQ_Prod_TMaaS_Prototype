import { beforeAll, afterAll, describe, expect, it } from "vitest";
import type { ServiceForStructuredData } from "@/lib/seo";
import {
  buildContactStructuredData,
  buildHomeStructuredData,
  buildMarketplaceStructuredData,
  buildServiceFaqStructuredData,
  buildServiceStructuredData,
} from "@/lib/seo";

// Set the site URL env var so all getSiteUrl() calls return the test domain.
const ORIGINAL_SITE_URL = process.env["NEXT_PUBLIC_SITE_URL"];

beforeAll(() => {
  process.env["NEXT_PUBLIC_SITE_URL"] = "https://tmaas.example.com";
});

afterAll(() => {
  if (ORIGINAL_SITE_URL === undefined) {
    delete process.env["NEXT_PUBLIC_SITE_URL"];
  } else {
    process.env["NEXT_PUBLIC_SITE_URL"] = ORIGINAL_SITE_URL;
  }
});

const sampleService: ServiceForStructuredData = {
  description: "Evaluate AI readiness across your organisation.",
  price: "From $12,500",
  badge: "Advisory",
  serviceType: "advisory",
  industryRelevance: "Cross-Industry",
};

describe("structuredData", () => {
  it("builds Organization and WebSite graph for home", () => {
    const data = buildHomeStructuredData();
    const graph = data["@graph"] as Record<string, unknown>[];

    expect(graph).toHaveLength(3);
    expect(graph[0]?.["@type"]).toBe("Organization");
    expect(graph[1]?.["@type"]).toBe("WebSite");
    expect(graph[1]?.potentialAction).toMatchObject({
      "@type": "SearchAction",
    });
    expect(graph[2]?.["@type"]).toBe("SoftwareApplication");
  });

  it("builds Service, Offer, and BreadcrumbList for service detail", () => {
    const data = buildServiceStructuredData(sampleService, "AI Readiness - Assess", "/service/42");
    const graph = data["@graph"] as Record<string, unknown>[];
    const service = graph.find((node) => node["@type"] === "Service");

    expect(service).toMatchObject({
      name: "AI Readiness - Assess",
      offers: {
        "@type": "Offer",
        price: "12500",
        priceCurrency: "USD",
      },
    });
    expect(graph.some((node) => node["@type"] === "BreadcrumbList")).toBe(true);
  });

  it("builds ContactPage schema", () => {
    const data = buildContactStructuredData();
    expect(data["@type"]).toBe("ContactPage");
    expect(data.url).toBe("https://tmaas.example.com/contact");
  });

  it("builds marketplace CollectionPage and ItemList", () => {
    const data = buildMarketplaceStructuredData([
      { id: 1, name: "Test Service", url: "https://tmaas.example.com/service/1" },
    ]);
    const graph = data["@graph"] as Record<string, unknown>[];

    expect(graph.some((node) => node["@type"] === "CollectionPage")).toBe(true);
    expect(graph.some((node) => node["@type"] === "ItemList")).toBe(true);
  });

  it("builds FAQPage schema for service detail", () => {
    const data = buildServiceFaqStructuredData(
      sampleService,
      "AI Readiness - Assess",
      "/service/42",
      [{ question: "How long?", answer: "Two weeks." }]
    );

    expect(data?.["@type"]).toBe("FAQPage");
    expect(data?.mainEntity).toHaveLength(1);
  });
});
