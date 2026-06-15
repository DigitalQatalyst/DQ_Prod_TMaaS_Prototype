import type { Metadata } from "next";
import LandingNavbar from "@/components/features/landing/landing/LandingNavbar";
import Footer from "@/components/features/landing/Footer";
import {
  LegalPageLayout,
  type LegalSection,
} from "@/components/foundation/layouts/LegalPageLayout";
import { PLATFORM_NAME_EXPANDED } from "@/lib/brandLinks";

export const metadata: Metadata = {
  title: "Privacy Policy | TMaaS",
  description: "TMaaS Privacy Policy — Digital Qatalyst.",
};

const LAST_UPDATED = "June 2026";

const SECTIONS: LegalSection[] = [
  {
    id: "who-we-are",
    heading: "1. Who We Are",
    body: [
      'DigitalQatalyst DMCC ("DigitalQatalyst", "we", "our", "us") is a digital transformation consultancy incorporated in the DMCC Free Zone, Dubai, UAE (DMCC Licence No. 131122).',
      `For the purposes of applicable data protection law, DigitalQatalyst DMCC is the data controller of any personal information collected through the ${PLATFORM_NAME_EXPANDED} platform.`,
      "Email: info@digitalqatalyst.com | Telephone: +971 4 266 6169",
    ],
  },
  {
    id: "information-we-collect",
    heading: "2. Information We Collect",
    body: [
      "We collect information you provide directly (name, work email, organisation name, job role, and context when submitting an enquiry) and information collected automatically (standard web server logs, analytics data).",
    ],
  },
  {
    id: "how-we-use",
    heading: "3. How We Use Your Information",
    body: [
      "We use the information you provide to respond to enquiries, route your request to the appropriate DQ advisor, and send you relevant information about TMaaS services where you have consented.",
    ],
  },
  {
    id: "your-rights",
    heading: "4. Your Rights",
    body: [
      "You may have the right to access, correct, erase, restrict, or port your personal data, and to object to processing. To exercise any of these rights, please email info@digitalqatalyst.com.",
    ],
  },
  {
    id: "contact",
    heading: "5. Contact Us",
    body: [
      "If you have questions about this Privacy Policy or the way we handle your personal data, please contact us at info@digitalqatalyst.com.",
      "DigitalQatalyst DMCC · Unit 1992, DMCC Business Center, Level 1, Jewellery & Gemplex 3, PO Box 340505, Dubai, UAE",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <LandingNavbar />
      <main className="pt-20">
        <LegalPageLayout
          eyebrow="Legal"
          title="Privacy Policy"
          subtitle="How DigitalQatalyst DMCC collects, uses, and protects your personal information."
          lastUpdated={LAST_UPDATED}
          sections={SECTIONS}
        />
      </main>
      <Footer />
    </div>
  );
}
