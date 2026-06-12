import type { ContactInterest, ContactNeed } from "@/lib/contactFormPrefill";

export const LAUNCH_ADVISORY_OFFERING_PARAM = "launch-advisory";

export const LAUNCH_ADVISORY_CTA_LABEL = "Claim 3 Months Free";

export const LAUNCH_ADVISORY_NAV_CTA_LABEL = "Claim Your Free Advisory";

export const LAUNCH_ADVISORY_EYEBROW = "Register by June";

export const LAUNCH_ADVISORY_HEADLINE =
  "Your First 3 Months of End-to-End Transformation Advisory — On Us.";

export const LAUNCH_ADVISORY_SUBCOPY =
  "Get full access to DQ's transformation framework at no cost. Terms and conditions apply.";

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
