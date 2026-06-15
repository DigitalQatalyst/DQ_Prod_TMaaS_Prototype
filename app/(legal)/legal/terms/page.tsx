import type { Metadata } from "next";
import LandingNavbar from "@/components/features/landing/landing/LandingNavbar";
import Footer from "@/components/features/landing/Footer";
import {
  LegalPageLayout,
  type LegalSection,
} from "@/components/foundation/layouts/LegalPageLayout";
import { PLATFORM_NAME_EXPANDED } from "@/lib/brandLinks";

export const metadata: Metadata = {
  title: "Terms of Service | TMaaS",
  description: "TMaaS Terms of Service — Digital Qatalyst.",
};

const LAST_UPDATED = "June 2026";

const SECTIONS: LegalSection[] = [
  {
    id: "agreement",
    heading: "1. Agreement to These Terms",
    body: [
      `By accessing or using the ${PLATFORM_NAME_EXPANDED} platform at tmaas.digitalqatalyst.com and any associated subdomains or services (collectively, the "Platform"), you agree to be bound by these Terms of Use ("Terms").`,
      "If you are accessing the Platform on behalf of an organisation, you represent that you have the authority to bind that organisation to these Terms. If you do not agree to these Terms, please do not use the Platform.",
    ],
  },
  {
    id: "about-dq",
    heading: "2. About DigitalQatalyst and TMaaS",
    body: [
      "The Platform is operated by DigitalQatalyst DMCC, a company incorporated in the Dubai Multi Commodities Centre (DMCC) Free Zone, Dubai, United Arab Emirates (DMCC Licence No. 131122).",
      `${PLATFORM_NAME_EXPANDED} is a DigitalQatalyst product — a digital transformation marketplace through which organisations can explore, compare, and engage transformation services across AI, experience, operations, and security.`,
    ],
  },
  {
    id: "permitted-use",
    heading: "3. Permitted Use",
    body: [
      "You may access and use the Platform for lawful purposes only, in accordance with these Terms. Permitted uses include browsing the service catalogue, submitting an enquiry, and accessing publicly available content.",
      "You must not use the Platform to violate any applicable law or regulation, infringe intellectual property rights, transmit harmful content, or attempt to gain unauthorised access to any part of the Platform.",
    ],
  },
  {
    id: "intellectual-property",
    heading: "4. Intellectual Property",
    body: [
      "All content on the Platform — including text, graphics, logos, icons, methodology frameworks, and software — is the property of DigitalQatalyst DMCC or its licensors and is protected by applicable intellectual property laws.",
      "The DigitalQatalyst name, logo, TMaaS brand, and all related product and service trade names and brands are proprietary to DigitalQatalyst DMCC.",
    ],
  },
  {
    id: "disclaimers",
    heading: "5. Disclaimers",
    body: [
      'The Platform and its content are provided on an "as is" and "as available" basis without warranties of any kind, either express or implied.',
      "Information published on the Platform is provided for general informational purposes only and does not constitute professional, legal, financial, or regulatory advice.",
    ],
  },
  {
    id: "governing-law",
    heading: "6. Governing Law and Disputes",
    body: [
      "These Terms and any disputes shall be governed by and construed in accordance with the laws of the United Arab Emirates as applied in the Emirate of Dubai.",
    ],
  },
  {
    id: "contact",
    heading: "7. Contact",
    body: [
      "If you have any questions about these Terms, please contact us at info@digitalqatalyst.com.",
      "DigitalQatalyst DMCC · Unit 1992, DMCC Business Center, Level 1, Jewellery & Gemplex 3, PO Box 340505, Dubai, UAE",
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <LandingNavbar />
      <main className="pt-20">
        <LegalPageLayout
          eyebrow="Legal"
          title="Terms of Use"
          subtitle={`The terms governing your use of the ${PLATFORM_NAME_EXPANDED} platform.`}
          lastUpdated={LAST_UPDATED}
          sections={SECTIONS}
        />
      </main>
      <Footer />
    </div>
  );
}
