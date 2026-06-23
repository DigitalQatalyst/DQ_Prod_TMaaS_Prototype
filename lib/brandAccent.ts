/**
 * DQ brand accent balance, aligned with DQ_CORPWEB_PROTOTYPE.
 *
 * Navy: headings, body copy, default icon colour, structural weight.
 * Orange: eyebrows, micro-labels, active nav/tabs, action links, hover accents,
 *         focus rings, and primary conversion CTAs.
 */

const focusOrange =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dq-orange focus-visible:ring-offset-2";

/** Section eyebrow, orange on all surfaces (corp web default) */
export const eyebrow = "font-mono text-[11px] uppercase tracking-[0.2em] text-dq-orange";

/** Alias for dark mesh sections (same treatment as light) */
export const eyebrowOnDark = eyebrow;

/** Step / suite micro-label */
export const microLabel = "font-mono text-[10px] uppercase tracking-[0.18em] text-dq-orange";

/** Landing hero h1, matches DQ_CORPWEB_PROTOTYPE `Home.tsx` HeroSection */
export const landingHeroHeading = "dq-landing-hero-heading font-semibold text-dq-navy";

/**
 * In-page section h2, corp web content card title scale
 * (e.g. ServiceOverviewCard `text-xl font-bold` → semibold per TMaaS tokens).
 */
export const sectionHeading = "text-xl font-semibold tracking-tight text-dq-navy";

/** Two-column intro row, Overview / What You Receive (top-aligned) */
export const serviceDetailSplitGrid =
  "grid grid-cols-1 items-start gap-8 md:grid-cols-[5fr_4fr] md:gap-10 lg:gap-14";

/** Lead column offset, aligns `sectionHeading` with side-card title (card uses `p-7 md:p-8`) */
export const serviceDetailSplitLead = "min-w-0 md:pt-4 lg:pt-5";

/** Tinted side card in split intro rows */
export const serviceDetailSideCard = "rounded-2xl p-7 md:p-8";

/** First tab-section offset, matches split-grid lead column on How It Works */
export const serviceDetailTabLead = "md:pt-4 lg:pt-5";

/** Primary CTA, orange fill (corp offerings / marketplace pattern) */
export const btnPrimary = `dq-cta-primary inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#FB5535] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#E04020] glow-orange ${focusOrange}`;

/** Primary CTA, navy with orange hover sweep (corp home / offerings hero) */
export const btnPrimaryNavy = `group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-[#030F35] px-6 py-3.5 text-sm font-semibold text-white glow-navy ${focusOrange}`;

export const btnPrimaryNavyHoverSweep =
  "absolute inset-0 -translate-x-full bg-gradient-to-r from-dq-orange to-[#e04020] transition-transform duration-500 group-hover:translate-x-0";

/** Primary CTA on dark mesh, orange (corp about / framework closing) */
export const btnPrimaryOnDark = `dq-cta-primary inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#FB5535] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#E04020] ${focusOrange} focus-visible:ring-offset-dq-navy`;

/** Secondary CTA on light surfaces */
export const btnSecondary = `inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-[#c5cde8] bg-white/60 px-6 py-3.5 text-sm font-semibold text-dq-navy backdrop-blur-sm transition hover:border-[#a0aacc] hover:bg-white ${focusOrange}`;

/** Outlined orange CTA, service package card on light surfaces */
export const btnOutlineOrange = `inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-orange-200 bg-white px-6 py-3.5 text-sm font-semibold text-dq-orange transition hover:border-dq-orange/40 hover:bg-orange-50 ${focusOrange}`;

/** Secondary CTA on dark mesh surfaces */
export const btnSecondaryOnDark =
  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dq-orange focus-visible:ring-offset-2 focus-visible:ring-offset-dq-navy";

/** Default icon well, neutral surface, navy icon */
export const iconWell = "flex items-center justify-center rounded-xl bg-navy-50 text-dq-navy";

/** Icon well with corp hover accent */
export const iconWellInteractive =
  "flex items-center justify-center rounded-xl bg-navy-50 text-dq-navy transition-colors group-hover:bg-dq-orange group-hover:text-white";

/** Icon well on dark cards */
export const iconWellOnDark =
  "flex items-center justify-center rounded-xl bg-dq-orange/10 text-dq-orange";

/** Active nav / tab */
export const navActive = "font-semibold text-dq-orange";
export const tabActive = "-mb-px border-dq-orange font-medium text-dq-orange";

/** Card hover, corp border accent (use with `shadow-card` base) */
export const cardInteractive =
  "transition-all duration-300 hover:border-dq-orange hover:shadow-elevated";

/** Inline action link */
export const linkAction =
  "inline-flex cursor-pointer items-center gap-1 font-semibold text-dq-orange transition-all hover:gap-2";

/** Footer / muted link */
export const linkMuted = "cursor-pointer transition-colors hover:text-dq-orange";

/** Stat / emphasis border */
export const statBorder = "border-l-4 border-dq-orange";
