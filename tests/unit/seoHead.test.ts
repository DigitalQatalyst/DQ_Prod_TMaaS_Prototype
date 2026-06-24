/**
 * seoHead — Vite prerender utility (src/lib/seoHead.ts) is not carried forward to the
 * Next.js migration. SEO metadata and structured-data injection are now handled by the
 * Next.js Metadata API and the JsonLd component, which are tested at the page level
 * rather than via a custom HTML-assembly pipeline.
 *
 * This file is kept as a placeholder so the original test surface is documented.
 * All cases are skipped until equivalent Next.js SEO tests are written.
 */

import { describe, it } from "vitest";

describe.skip("seoHead (Vite prerender — superseded by Next.js Metadata API)", () => {
  it("renders canonical and og tags");
  it("assembles marketplace HTML with CollectionPage schema and noscript");
  it("assembles service detail with Service schema");
  it("strips previously generated SEO tags from template");
});
