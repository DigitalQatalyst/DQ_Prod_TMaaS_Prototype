/**
 * Per-variant copy overrides.
 *
 * Keyed by variant id (ServiceProduct.id). Every field is optional: anything set
 * here wins over the template-generated default in
 * `scripts/lib/pdpCopyGenerator.ts` / `src/lib/variantSeoCopy.ts`; anything
 * omitted falls back to the generated template.
 *
 * Purpose: make each service variant read uniquely instead of sharing the same
 * template copy across all 186 cards. Author one entry per variant.
 *
 * Voice rules (see .cursor/rules/pdp-copy-style.mdc) MUST hold:
 *   - No em dashes (—). Use commas, colons, or full stops.
 *   - Do not open hero/description copy with duration ("In one week, ...").
 *   - British spelling where already used (organisation, prioritised, optimise).
 *   - Say "DigitalQatalyst team", not "DQ advisor".
 *   - Name the actual solution, not generic "digital presence".
 */

/** Override for a single delivery-process step, merged by array index. */
export interface DeliveryStepOverride {
  /** Step heading, e.g. "Discover". */
  title?: string;
  /** 1-2 sentence narrative for the step. */
  body?: string;
  /** Short "what happens" summary line. */
  whatHappens?: string;
}

export interface VariantCopyOverride {
  // --- Card fields (marketplace grid + product_content) ---
  /** Card + hero description. Lead with the outcome for THIS solution + stage. */
  description?: string;
  /** One-line positioning under the card title. */
  positioning?: string;
  /** 3-5 benefit-led capability bullets, specific to this solution + stage. */
  features?: string[];
  /** Topical tags beyond the formulaic [collection, serviceType, ...] set. */
  tags?: string[];
  /** Stage-appropriate milestones (an Assess plan differs from a Managed plan). */
  timelineMilestones?: string[];
  /** Concrete business impact for this solution (numbers/outcomes where possible). */
  businessImpact?: string;
  /** Named buyer roles this is built for. */
  audience?: string;
  /** Which organisations / sectors this applies to. */
  industryRelevance?: string;

  // --- PDP fields (service detail page) ---
  /** PDP hero summary. Defaults to `description` if omitted. */
  heroSummary?: string;
  /** 1-2 overview paragraphs. */
  overviewParagraphs?: string[];
  /** "Built for ..." audience sentence on the PDP. */
  audienceDescription?: string;
  /** 1-2 sentences summarising what the engagement produces. */
  deliverablesSummary?: string[];
  /** Deliverable cards: unique title + benefit-led description each. */
  deliverables?: { title: string; description: string }[];
  /** 3 package highlight bullets, specific to this solution. */
  packageHighlights?: string[];
  /** Delivery-process step overrides, merged by index onto the type template. */
  deliveryProcessSteps?: DeliveryStepOverride[];
  /** FAQ section intro line. */
  faqIntro?: string;
  /** Up to 5 FAQs (question + answer). */
  faqs?: { question: string; answer: string }[];
}

/** Map of variant id -> override. One file per collection populates this. */
export type CollectionCopyOverrides = Record<number, VariantCopyOverride>;
