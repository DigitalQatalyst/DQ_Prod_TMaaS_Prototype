import { describe, expect, it } from "vitest";

import {
  buildContactPath,
  getServiceEnquiryFormDefaults,
  getServicePackageCta,
  mapServiceToInterest,
  mapServiceToNeed,
} from "@/lib/contactFormPrefill";

describe("contactFormPrefill", () => {
  it("maps advisory services to strategy interest and need", () => {
    expect(mapServiceToInterest("ai", "advisory")).toBe("Transformation Strategy & Advisory");
    expect(mapServiceToNeed("advisory", "quote")).toBe("Advisory & Strategy");
  });

  it("maps consultation intent to advisory need", () => {
    expect(mapServiceToNeed("deploy", "consultation")).toBe("Advisory & Strategy");
  });

  it("builds a contact path with service context", () => {
    expect(
      buildContactPath(
        {
          standardName: "AI Readiness Assessment",
          serviceType: "advisory",
          collection: "ai",
        } as Parameters<typeof buildContactPath>[0],
        "quote"
      )
    ).toBe(
      "/contact?service=AI+Readiness+Assessment&type=advisory&collection=ai&intent=quote"
    );
  });

  it("returns enquiry defaults for assess services", () => {
    expect(
      getServiceEnquiryFormDefaults({
        service: "AI Readiness Assessment",
        type: "advisory",
        collection: "ai",
        intent: "consultation",
      })
    ).toEqual({
      interest: "Transformation Strategy & Advisory",
      need: "Advisory & Strategy",
      message: "I'd like to get started with: AI Readiness Assessment",
    });
  });

  it("maps service stages to package CTA labels", () => {
    expect(getServicePackageCta("advisory")).toEqual({
      label: "Start here",
      intent: "consultation",
    });
    expect(getServicePackageCta("design").label).toBe("Get a quote");
    expect(getServicePackageCta("manage").label).toBe("Talk to our team");
    expect(getServicePackageCta("bundle")).toEqual({
      label: "Request proposal",
      intent: "quote",
    });
  });
});
