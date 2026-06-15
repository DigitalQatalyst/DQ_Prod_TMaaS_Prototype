import { describe, expect, it } from "vitest";
import { FEATURED_SERVICE_VARIANT_IDS } from "@/data/featuredServices";
import { getBestSellers } from "@/data/services";

describe("featured services carousel", () => {
  it("surfaces the curated six across journey stages on the all tab", () => {
    const featured = getBestSellers("all", 6);

    expect(featured.map((service) => service.id)).toEqual([...FEATURED_SERVICE_VARIANT_IDS]);
    expect(featured.map((service) => service.serviceType)).toEqual([
      "advisory",
      "design",
      "ai_design",
      "deploy",
      "ai_deploy",
      "manage",
    ]);
  });
});
