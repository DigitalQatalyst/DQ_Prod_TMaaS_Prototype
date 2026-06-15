import type { ContactInterest, ContactNeed } from "@/lib/contactFormPrefill";

export const LAUNCH_ADVISORY_OFFERING_PARAM = "launch-advisory";

export const LAUNCH_ADVISORY_CTA_LABEL = "Schedule free advisory";

export const LAUNCH_ADVISORY_EYEBROW = "Launch offer";

export const LAUNCH_ADVISORY_HEADLINE = "Start with a free transformation advisory";

export const LAUNCH_ADVISORY_SUBCOPY =
  "Book a no-cost session with a DQ advisor. Clarify your priorities, identify high-impact gaps, and get a practical path forward in the marketplace.";

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
