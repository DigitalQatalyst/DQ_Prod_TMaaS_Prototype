import type { ContactInterest, ContactNeed } from "@/lib/contactFormPrefill";

export const LAUNCH_ADVISORY_OFFERING_PARAM = "launch-advisory";

export const LAUNCH_ADVISORY_CTA_LABEL = "Claim your free advisory";

export const LAUNCH_ADVISORY_NAV_CTA_LABEL = "Claim your free advisory";

export const LAUNCH_ADVISORY_EYEBROW = "June launch offer";

export const LAUNCH_ADVISORY_HEADLINE =
  "Your first advisory service is on us.";

export const LAUNCH_ADVISORY_SUBCOPY =
  "Practical guidance and strategy for the business areas you choose. Register this month. Terms apply.";

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
