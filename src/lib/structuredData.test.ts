import { describe, expect, it, vi } from "vitest";
import type { ServiceProduct } from "@/types/serviceProduct";
import {
  buildContactStructuredData,
  buildHomeStructuredData,
  buildMarketplaceStructuredData,
  buildServiceFaqStructuredData,
  buildServiceStructuredData,
} from "./structuredData";

vi.mock("@/lib/seo", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@/lib/seo")>();
  return {
    ...actual,
    getSiteUrl: () => "https://tmaas.example.com",
    absoluteUrl: (path: string) => `https://tmaas.example.com${path}`,
  };
});

const sampleService: ServiceProduct = {
  id: 42,
  collection: "ai",
  serviceType: "advisory",
  standardName: "AI Readiness (High-Impact) - Assess",
  remixName: {},
  description: "Evaluate AI readiness across your organisation.",
  positioning: "Positioning",
  price: "From $12,500",
  duration: "2 Weeks",
  popularityRank: 10,
  deliveryComplexity: "medium",
  badge: "Advisory",
  audience: "Enterprise",
  industryRelevance: "Cross-Industry",
  features: [],
  tags: [],
  outcomes: [],
  department: "IT",
  businessImpact: "High",
  implementationModel: "TMaaS",
  timelineMilestones: [],
  relatedServices: [],
};

describe("structuredData", () => {
  it("builds Organization and WebSite graph for home", () => {
    const data = buildHomeStructuredData();
    const graph = data["@graph"] as Record<string, unknown>[];

    expect(graph).toHaveLength(2);
    expect(graph[0]["@type"]).toBe("Organization");
    expect(graph[1]["@type"]).toBe("WebSite");
    expect(graph[1].potentialAction).toMatchObject({
      "@type": "SearchAction",
    });
  });

  it("builds Service, Offer, and BreadcrumbList for service detail", () => {
    const data = buildServiceStructuredData(
      sampleService,
      "AI Readiness - Assess",
      "/service/42"
    );
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
