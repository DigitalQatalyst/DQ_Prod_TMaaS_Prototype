import { describe, expect, it } from "vitest";
import {
  getMarketplaceCardTitle,
  getPdpDisplayTitle,
  getPdpTypeBadgeLabel,
} from "@/lib/marketplaceDisplayLabels";

describe("marketplaceDisplayLabels", () => {
  it("renames product stems and applies stage labels on cards", () => {
    expect(getMarketplaceCardTitle("Mobile Apps (High-Impact) - Assess", "advisory")).toBe(
      "Mobile Apps & Services - Assess"
    );

    expect(getMarketplaceCardTitle("Online Web Presence (High-Impact) - Managed", "manage")).toBe(
      "Online Web Presence - Managed Service"
    );

    expect(
      getMarketplaceCardTitle("CRM Solutions (High-Impact) - Transformation Bundle", "bundle")
    ).toBe("CRM & Customer Relationship - End-to-end bundle");
  });

  it("uses End-to-end transformation on bundle PDP titles only", () => {
    expect(
      getPdpDisplayTitle("CRM Solutions (High-Impact) - Transformation Bundle", "bundle")
    ).toBe("CRM & Customer Relationship - End-to-end transformation");
  });

  it("uses Assessment on PDP badge only for Assess variants", () => {
    expect(getPdpTypeBadgeLabel("advisory")).toBe("Assessment");
    expect(getPdpDisplayTitle("Online Web Presence (High-Impact) - Assess", "advisory")).toBe(
      "Online Web Presence - Assess"
    );
  });

  it("does not duplicate End-to-end bundle when DB variant_name already uses that label", () => {
    expect(
      getMarketplaceCardTitle("Online Web Presence (High-Impact) - End-to-end bundle", "bundle")
    ).toBe("Online Web Presence - End-to-end bundle");

    expect(getMarketplaceCardTitle("Mobile Apps (High-Impact) - End-to-end bundle", "bundle")).toBe(
      "Mobile Apps & Services - End-to-end bundle"
    );
  });

  it("renames flexible set bundles without duplicating suffix", () => {
    expect(getMarketplaceCardTitle("Advisory Set - Advisory Set", "bundle")).toBe(
      "Flexible Advisory Package"
    );
  });

  it("strips High-Impact when title is passed via displayName override", () => {
    expect(getMarketplaceCardTitle("Online Web Presence (High-Impact) - Assess", "advisory")).toBe(
      "Online Web Presence - Assess"
    );
  });
});
