import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ---------------------------------------------------------------------------
// Brand accent — Tailwind class constants aligned with DQ_CORPWEB_PROTOTYPE.
// Navy: headings, body copy, default icon colour, structural weight.
// Orange: eyebrows, micro-labels, active nav/tabs, action links, hover accents,
//         focus rings, and primary conversion CTAs.
// ---------------------------------------------------------------------------

const focusOrange =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dq-orange focus-visible:ring-offset-2";

export const eyebrow = "font-mono text-[11px] uppercase tracking-[0.2em] text-dq-orange";

export const eyebrowOnDark = eyebrow;

export const microLabel = "font-mono text-[10px] uppercase tracking-[0.18em] text-dq-orange";

export const landingHeroHeading =
  "text-balance text-[2.75rem] font-semibold leading-[1.0] tracking-[-0.03em] text-dq-navy sm:text-6xl md:text-7xl lg:text-8xl";

export const sectionHeading = "text-xl font-semibold tracking-tight text-dq-navy";

export const serviceDetailSplitGrid =
  "grid grid-cols-1 items-start gap-8 md:grid-cols-[5fr_4fr] md:gap-10 lg:gap-14";

export const serviceDetailSplitLead = "min-w-0 md:pt-4 lg:pt-5";

export const serviceDetailSideCard = "rounded-2xl p-7 md:p-8";

export const serviceDetailTabLead = "md:pt-4 lg:pt-5";

export const btnPrimary = `inline-flex items-center justify-center gap-2 rounded-full bg-dq-orange px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#E04020] glow-orange ${focusOrange}`;

export const btnPrimaryNavy = `group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-dq-navy px-6 py-3.5 text-sm font-semibold text-white transition glow-navy ${focusOrange}`;

export const btnPrimaryNavyHoverSweep =
  "absolute inset-0 -translate-x-full bg-gradient-to-r from-dq-orange to-[#e04020] transition-transform duration-500 group-hover:translate-x-0";

export const btnPrimaryOnDark = `inline-flex items-center justify-center gap-2 rounded-full bg-dq-orange px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#E04020] ${focusOrange} focus-visible:ring-offset-dq-navy`;

export const btnSecondary = `inline-flex items-center justify-center gap-2 rounded-full border border-[#c5cde8] bg-white/60 px-6 py-3.5 text-sm font-semibold text-dq-navy backdrop-blur-sm transition hover:border-[#a0aacc] hover:bg-white ${focusOrange}`;

export const btnOutlineOrange = `inline-flex items-center justify-center gap-2 rounded-full border border-orange-200 bg-white px-6 py-3.5 text-sm font-semibold text-dq-orange transition hover:border-dq-orange/40 hover:bg-orange-50 ${focusOrange}`;

export const btnSecondaryOnDark =
  "inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dq-orange focus-visible:ring-offset-2 focus-visible:ring-offset-dq-navy";

export const iconWell = "flex items-center justify-center rounded-xl bg-navy-50 text-dq-navy";

export const iconWellInteractive =
  "flex items-center justify-center rounded-xl bg-navy-50 text-dq-navy transition-colors group-hover:bg-dq-orange group-hover:text-white";

export const iconWellOnDark =
  "flex items-center justify-center rounded-xl bg-dq-orange/10 text-dq-orange";

export const navActive = "font-semibold text-dq-orange";
export const tabActive = "-mb-px border-dq-orange font-medium text-dq-orange";

export const cardInteractive =
  "transition-all duration-300 hover:border-dq-orange hover:shadow-elevated";

export const linkAction =
  "inline-flex items-center gap-1 font-semibold text-dq-orange transition-all hover:gap-2";

export const linkMuted = "transition-colors hover:text-dq-orange";

export const statBorder = "border-l-4 border-dq-orange";

// ---------------------------------------------------------------------------
// Brand links / copy constants
// ---------------------------------------------------------------------------

export const DQ_CORP_WEB_URL = "https://digitalqatalyst.com";

export const PLATFORM_NAME = "TMaaS";
export const PLATFORM_ACRONYM = "TMaaS";
export const PLATFORM_FULL_NAME = "Transformation Management as a Service";
export const PLATFORM_NAME_EXPANDED = `${PLATFORM_FULL_NAME} (TMaaS)`;

export const PLATFORM_DESCRIPTOR = "Digital transformation marketplace";

export const PLATFORM_HERO_HEADLINE_PRIMARY = "Digital Transformation";
export const PLATFORM_HERO_HEADLINE_ACCENT = "Accelerated";

export const PLATFORM_HERO_HEADLINE = `${PLATFORM_HERO_HEADLINE_PRIMARY} ${PLATFORM_HERO_HEADLINE_ACCENT}`;

export const PLATFORM_HERO_SUBCOPY =
  "Transformation Management as a Service (TMaaS) is a digital transformation marketplace with 100+ services across AI, experience, operations, and security.";

export const PLATFORM_LINEAGE_LINE =
  "Transformation Management as a Service (TMaaS) is a DigitalQatalyst product.";

export const PLATFORM_CONTACT_LINE = "Talk to the DigitalQatalyst team about TMaaS.";

export const NAV_BROWSE_MARKETPLACE_LABEL = "Browse marketplace";

/** @deprecated Use PLATFORM_NAME */
export const PLATFORM_BRAND_LINE = PLATFORM_NAME;
