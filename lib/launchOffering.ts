import type { ContactInterest, ContactNeed } from "@/lib/contactFormPrefill";

export const DISCOVERY_SESSION_CTA_LABEL = "Book a discovery session";

export const DISCOVERY_SESSION_EYEBROW = "Next step";

export const DISCOVERY_SESSION_HEADLINE = "Book a discovery session";

export const DISCOVERY_SESSION_SUBCOPY =
  "Tell us your goal. We will recommend the right service, show you the price, and confirm a start date, usually within a day.";

export function buildDiscoverySessionContactPath(): string {
  const params = new URLSearchParams({ intent: "consultation" });
  return `/contact?${params.toString()}`;
}

export const LAUNCH_ADVISORY_OFFERING_PARAM = "launch-advisory";

export const LAUNCH_ADVISORY_CTA_LABEL = "Claim 3 Months Free";

export const LAUNCH_ADVISORY_NAV_CTA_LABEL = "Claim Your Free Advisory";

export const LAUNCH_ADVISORY_EYEBROW = "Limited launch offer";

export const LAUNCH_ADVISORY_HEADLINE = "3 months of transformation advisory, free.";

export const LAUNCH_ADVISORY_SUBCOPY =
  "Expert guidance from day one. No fee to get started. Terms apply.";

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
