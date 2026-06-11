import { describe, expect, it } from "vitest";

import {
  buildContactPath,
  getServiceEnquiryFormDefaults,
  mapServiceToInterest,
  mapServiceToNeed,
} from "./contactFormPrefill";

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

  it("returns enquiry defaults for service-driven submissions", () => {
    expect(
      getServiceEnquiryFormDefaults({
        service: "AI Readiness Assessment",
        type: "advisory",
        collection: "ai",
        intent: "quote",
      })
    ).toEqual({
      interest: "Transformation Strategy & Advisory",
      need: "Advisory & Strategy",
      message: "I would like to request a quote for: AI Readiness Assessment",
    });
  });
});
