import type { ContactInterest, ContactNeed } from "@/lib/contactFormPrefill";

export const LAUNCH_ADVISORY_OFFERING_PARAM = "launch-advisory";

export const LAUNCH_ADVISORY_CTA_LABEL = "Claim your free advisory";

export const LAUNCH_ADVISORY_NAV_CTA_LABEL = "Claim your free advisory";

export const LAUNCH_ADVISORY_EYEBROW = "June launch offer";

export const LAUNCH_ADVISORY_HEADLINE =
  "Your first advisory service is on us.";

export const LAUNCH_ADVISORY_SUBCOPY =
  "Choose one advisory service from our catalog. Practical guidance for the business areas you choose.";

export const LAUNCH_ADVISORY_TERMS = [
  "Requests must be submitted by 30 June 2026.",
  "One free advisory service per enterprise.",
  "Service scope and delivery are subject to mutual agreement.",
] as const;

export const LAUNCH_ADVISORY_TERMS_PATH = "/legal/launch-offer";

export const LAUNCH_ADVISORY_TERMS_LINK_LABEL = "Offer terms";

export const LAUNCH_ADVISORY_TERMS_FOOTNOTE_HINT =
  "One per enterprise · Submit by 30 June";

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
    message: "I'd like to claim my free advisory service.",
  };
}
