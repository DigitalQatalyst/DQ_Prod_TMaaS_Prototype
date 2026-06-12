import type { ContactInterest, ContactNeed } from "@/lib/contactFormPrefill";

/** Variant id for the Flexible Advisory Package — featured as the launch free advisory. */
export const LAUNCH_ADVISORY_SERVICE_ID = 234;

export const LAUNCH_ADVISORY_OFFERING_PARAM = "launch-advisory";

export const LAUNCH_ADVISORY_CTA_LABEL = "Schedule free advisory";

export const LAUNCH_ADVISORY_EYEBROW = "Launch offer";

export const LAUNCH_ADVISORY_DISPLAY_TITLE = "Free Transformation Advisory";

export const LAUNCH_ADVISORY_HEADLINE = "Start with a free transformation advisory";

export const LAUNCH_ADVISORY_SUBCOPY =
  "Book a no-cost session with a DQ advisor. Clarify your priorities, identify high-impact gaps, and get a practical path forward in the marketplace.";

export const LAUNCH_ADVISORY_CARD_COPY =
  "Flexible advisory across capability areas — diagnose priorities and build executive alignment before you invest further.";

export const LAUNCH_ADVISORY_PRICE_DISPLAY = "Free";

export function buildLaunchAdvisoryContactPath(): string {
  const params = new URLSearchParams({
    offering: LAUNCH_ADVISORY_OFFERING_PARAM,
    intent: "consultation",
  });
  return `/contact?${params.toString()}`;
}

export function isLaunchAdvisoryEnquiry(searchParams: URLSearchParams): boolean {
  return searchParams.get("offering") === LAUNCH_ADVISORY_OFFERING_PARAM;
}

export function getLaunchAdvisoryFormDefaults(): {
  interest: ContactInterest;
  need: ContactNeed;
  message: string;
} {
  return {
    interest: "Transformation Strategy & Advisory",
    need: "Advisory & Strategy",
    message: "I'd like to schedule my free transformation advisory session.",
  };
}
