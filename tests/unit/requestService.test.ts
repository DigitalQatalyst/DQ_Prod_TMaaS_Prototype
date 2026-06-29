import { describe, expect, it } from "vitest";
import {
  ASK_ABOUT_SERVICE_CTA_LABEL,
  buildAskAboutServicePath,
  buildRequestServiceDescription,
  buildRequestServicePath,
  buildSignInPathWithReturn,
  REQUEST_SERVICE_CTA_LABEL,
} from "@/lib/requestService";

const sampleService = {
  id: 42,
  slug: "ai-readiness-assessment",
  standardName: "AI Readiness Assessment",
  serviceType: "advisory",
  collection: "ai",
} as Parameters<typeof buildRequestServicePath>[0];

describe("requestService", () => {
  it("exposes stable CTA labels", () => {
    expect(REQUEST_SERVICE_CTA_LABEL).toBe("Request service");
    expect(ASK_ABOUT_SERVICE_CTA_LABEL).toBe("Ask about this service");
  });

  it("builds a request-service path with service context", () => {
    expect(buildRequestServicePath(sampleService)).toBe(
      "/request-service?service=AI+Readiness+Assessment&type=advisory&collection=ai&variantId=42&slug=ai-readiness-assessment",
    );
  });

  it("builds an ask-about contact path with consultation intent", () => {
    expect(buildAskAboutServicePath(sampleService)).toBe(
      "/contact?service=AI+Readiness+Assessment&type=advisory&collection=ai&intent=consultation&variantId=42&slug=ai-readiness-assessment",
    );
  });

  it("builds a default request description when notes are empty", () => {
    expect(buildRequestServiceDescription("AI Readiness Assessment")).toBe(
      "Service requested via TMaaS marketplace: AI Readiness Assessment",
    );
    expect(buildRequestServiceDescription("AI Readiness Assessment", "Need Q3 delivery")).toBe(
      "Need Q3 delivery",
    );
  });

  it("builds a sign-in path that returns to the request flow", () => {
    expect(buildSignInPathWithReturn("/request-service?service=Test")).toBe(
      "/sign-in?returnTo=%2Frequest-service%3Fservice%3DTest",
    );
  });
});
