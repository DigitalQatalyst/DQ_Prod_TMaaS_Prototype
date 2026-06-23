import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { buttonVariants } from "@/components/ui/button";
import {
  btnOutlineOrange,
  btnPrimary,
  btnPrimaryOnDark,
  btnSecondary,
  btnSecondaryOnDark,
  linkAction,
  linkMuted,
} from "@/lib/brandAccent";

const root = resolve(__dirname, "../..");

function readSource(relativePath: string): string {
  return readFileSync(resolve(root, relativePath), "utf8");
}

describe("interactive cursor consistency", () => {
  it("applies global pointer styles for native interactive elements", () => {
    const css = readSource("app/globals.css");
    expect(css).toContain('a[href]:not([aria-disabled="true"])');
    expect(css).toContain('button:not(:disabled):not([aria-disabled="true"])');
    expect(css).toContain('[role="tab"]');
    expect(css).toContain("cursor: pointer");
  });

  it("includes cursor-pointer on the shared Button primitive", () => {
    expect(buttonVariants()).toContain("cursor-pointer");
    expect(buttonVariants()).toContain("disabled:cursor-not-allowed");
  });

  it("includes cursor-pointer on shared TabsTrigger styles", () => {
    const source = readSource("components/ui/tabs.tsx");
    expect(source).toContain("cursor-pointer");
    expect(source).toContain("disabled:cursor-not-allowed");
  });

  it("includes cursor-pointer on brand CTA and link tokens", () => {
    for (const token of [
      btnPrimary,
      btnPrimaryOnDark,
      btnSecondary,
      btnSecondaryOnDark,
      btnOutlineOrange,
      linkAction,
      linkMuted,
    ]) {
      expect(token).toContain("cursor-pointer");
    }
  });

  it("includes cursor-pointer on marketplace category nav tabs", () => {
    const source = readSource("components/features/marketplace/MarketplaceCategoryNav.tsx");
    expect(source).toContain("cursor-pointer");
    expect(source).toContain("hover:text-dq-orange");
  });

  it("includes cursor-pointer and orange hover on service detail tab triggers", () => {
    const source = readSource("components/features/service-detail/ServiceDetailTabs.tsx");
    expect(source).toContain("cursor-pointer");
    expect(source).toContain("hover:text-dq-orange");
  });
});
