import { describe, expect, it } from "vitest";
import { isAllowedPublicPath, isStaticAssetPath } from "./allowedRoutes";

describe("allowedRoutes", () => {
  it("allows MVP public paths", () => {
    expect(isAllowedPublicPath("/")).toBe(true);
    expect(isAllowedPublicPath("/marketplace")).toBe(true);
    expect(isAllowedPublicPath("/contact")).toBe(true);
    expect(isAllowedPublicPath("/service/42")).toBe(true);
  });

  it("rejects unknown paths", () => {
    expect(isAllowedPublicPath("/dashboard/overview")).toBe(false);
    expect(isAllowedPublicPath("/not-a-page")).toBe(false);
    expect(isAllowedPublicPath("/service/abc")).toBe(false);
  });

  it("detects static asset paths", () => {
    expect(isStaticAssetPath("/assets/index.js")).toBe(true);
    expect(isStaticAssetPath("/og-image.png")).toBe(true);
    expect(isStaticAssetPath("/marketplace")).toBe(false);
  });
});
