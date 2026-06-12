import { describe, expect, it } from "vitest";
import {
  getMarketplaceCardTitle,
  getPdpDisplayTitle,
  getPdpTypeBadgeLabel,
} from "./marketplaceDisplayLabels";

describe("marketplaceDisplayLabels", () => {
  it("renames product stems and applies stage labels on cards", () => {
    expect(
      getMarketplaceCardTitle("Mobile Apps (High-Impact) - Assess", "advisory")
    ).toBe("Mobile Apps & Services - Assess");

    expect(
      getMarketplaceCardTitle("Online Web Presence (High-Impact) - Managed", "manage")
    ).toBe("Online Web Presence - Managed Service");

    expect(
      getMarketplaceCardTitle(
        "CRM Solutions (High-Impact) - Transformation Bundle",
        "bundle"
      )
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

  it("renames flexible set bundles without duplicating suffix", () => {
    expect(getMarketplaceCardTitle("Advisory Set - Advisory Set", "bundle")).toBe(
      "Flexible Advisory Package"
    );
  });
});
