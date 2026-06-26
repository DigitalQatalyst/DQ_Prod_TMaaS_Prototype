import type { Metadata } from "next";
import LandingNavbar from "@/components/features/landing/landing/LandingNavbar";
import Footer from "@/components/features/landing/Footer";
import {
  LegalPageLayout,
  type LegalSection,
} from "@/components/foundation/layouts/LegalPageLayout";
import { PLATFORM_NAME_EXPANDED } from "@/lib/brandLinks";
import { LAUNCH_ADVISORY_TERMS } from "@/lib/launchOffering";

export const metadata: Metadata = {
  title: "June Launch Offer Terms | TMaaS",
  description:
    "Terms and conditions for the TMaaS June launch offer: one free advisory service per enterprise.",
};

const LAST_UPDATED = "June 2026";

const SECTIONS: LegalSection[] = [
  {
    id: "overview",
    heading: "1. Overview",
    body: [
      `DigitalQatalyst DMCC ("DQ", "we", "us") is offering eligible enterprises one complimentary advisory service from the ${PLATFORM_NAME_EXPANDED} catalogue as part of our June 2026 launch promotion (the "Offer").`,
      "This page sets out the conditions that apply to the Offer. By submitting a request through the launch offer contact flow, you acknowledge that you have read and understood these terms.",
    ],
  },
  {
    id: "eligibility",
    heading: "2. Eligibility and limits",
    body: [
      LAUNCH_ADVISORY_TERMS[0],
      LAUNCH_ADVISORY_TERMS[1],
      "An enterprise is defined as a single legal entity or organisation. Related entities, subsidiaries, or affiliates may not claim separate entitlements under the same corporate group unless expressly agreed in writing by DQ.",
      LAUNCH_ADVISORY_TERMS[2],
      "DQ will confirm the selected advisory service, scope, deliverables, and timeline with you before work commences. The Offer does not guarantee availability of a specific catalogue item or start date.",
    ],
  },
  {
    id: "how-to-claim",
    heading: "3. How to claim",
    body: [
      'Submit your request via the "Claim your free advisory" call-to-action on the Platform, or through the contact form with the launch offer parameter applied.',
      "Include accurate organisation and contact details. DQ may contact you to verify eligibility and agree service details before the Offer is applied.",
      "Submission of a request does not constitute acceptance. DQ reserves the right to decline requests that do not meet these terms or that we cannot fulfil within the promotional period.",
    ],
  },
  {
    id: "general",
    heading: "4. General",
    body: [
      "The Offer is promotional, has no cash value, and is non-transferable. It cannot be combined with other promotions unless expressly stated.",
      "DQ may amend, suspend, or withdraw the Offer at any time. Where practicable, we will update this page when material changes are made.",
      `Use of the Platform remains subject to our Terms of Use and Privacy Policy. For questions about this Offer, contact info@digitalqatalyst.com.`,
    ],
  },
];

export default function LaunchOfferTermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <LandingNavbar />
      <main>
        <LegalPageLayout
          eyebrow="Promotional offer"
          title="June launch offer terms"
          subtitle="Conditions for the complimentary advisory service available to eligible enterprises in June 2026."
          lastUpdated={LAST_UPDATED}
          sections={SECTIONS}
        />
      </main>
      <Footer />
    </div>
  );
}
