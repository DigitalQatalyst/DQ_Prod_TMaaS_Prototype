import type { Metadata } from "next";
import LandingNavbar from "@/components/features/landing/landing/LandingNavbar";
import Footer from "@/components/features/landing/Footer";
import {
  LegalPageLayout,
  type LegalSection,
} from "@/components/foundation/layouts/LegalPageLayout";
import { PLATFORM_NAME_EXPANDED } from "@/lib/brandLinks";

export const metadata: Metadata = {
  title: "Terms of Service",
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
      "Registered address: Unit 1992, DMCC Business Center, Level 1, Jewellery & Gemplex 3, PO Box 340505, Dubai, UAE.",
      `${PLATFORM_NAME_EXPANDED} is a DigitalQatalyst product — a digital transformation marketplace through which organisations can explore, compare, and engage transformation services across AI, experience, operations, and security.`,
    ],
  },
  {
    id: "permitted-use",
    heading: "3. Permitted Use",
    body: [
      "You may access and use the Platform for lawful purposes only, in accordance with these Terms. Permitted uses include browsing the service catalogue, exploring our offerings, submitting an enquiry, and accessing publicly available content.",
      "You must not use the Platform to: (a) violate any applicable law or regulation; (b) infringe the intellectual property rights of DigitalQatalyst DMCC or any third party; (c) transmit any harmful, offensive, or unlawful content; (d) attempt to gain unauthorised access to any part of the Platform or its underlying systems; (e) use automated tools to scrape, harvest, or extract data without our prior written consent; or (f) interfere with or disrupt the integrity or performance of the Platform.",
    ],
  },
  {
    id: "intellectual-property",
    heading: "4. Intellectual Property",
    body: [
      "All content on the Platform — including but not limited to text, graphics, logos, icons, images, methodology frameworks (including the 6xD Framework), product and service names (including the TMaaS product suite), and software — is the property of DigitalQatalyst DMCC or its licensors and is protected by applicable intellectual property laws in the UAE and internationally.",
      "You may view and download content from the Platform solely for your personal, non-commercial reference. You must not reproduce, redistribute, republish, sell, modify, or create derivative works from any content without our prior written consent.",
      "The DigitalQatalyst name, logo, TMaaS brand, and all related product and service trade names and brands are proprietary to DigitalQatalyst DMCC. Nothing on the Platform grants you any licence to use them.",
    ],
  },
  {
    id: "third-party-links",
    heading: "5. Third-Party Links and Content",
    body: [
      "The Platform may contain links to third-party websites or services that are not owned or controlled by DigitalQatalyst DMCC. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites.",
      "We recommend that you review the terms and privacy policies of any third-party sites you visit.",
    ],
  },
  {
    id: "disclaimers",
    heading: "6. Disclaimers",
    body: [
      'The Platform and its content are provided on an "as is" and "as available" basis without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.',
      "DigitalQatalyst DMCC does not warrant that the Platform will be uninterrupted, error-free, or free of viruses or other harmful components. We do not warrant the accuracy, completeness, or timeliness of any content on the Platform.",
      "Information published on the Platform is provided for general informational purposes only and does not constitute professional, legal, financial, or regulatory advice. You should seek independent professional advice before acting on any information provided here.",
    ],
  },
  {
    id: "limitation-of-liability",
    heading: "7. Limitation of Liability",
    body: [
      "To the fullest extent permitted by applicable UAE law, DigitalQatalyst DMCC and its directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or exemplary damages — including but not limited to loss of profits, data, goodwill, or business opportunities — arising out of or in connection with your use of the Platform or these Terms, even if advised of the possibility of such damages.",
      "Our total aggregate liability to you for any claim arising under these Terms shall not exceed the amount paid by you to DigitalQatalyst DMCC in the twelve months preceding the event giving rise to the claim, or AED 1,000 if no amounts have been paid.",
    ],
  },
  {
    id: "privacy",
    heading: "8. Privacy",
    body: [
      "Our collection and use of your personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference. By using the Platform, you agree to our Privacy Policy.",
    ],
  },
  {
    id: "governing-law",
    heading: "9. Governing Law and Disputes",
    body: [
      "These Terms and any disputes or claims arising out of or in connection with them (including non-contractual disputes or claims) shall be governed by and construed in accordance with the laws of the United Arab Emirates as applied in the Emirate of Dubai.",
      "Any dispute arising from these Terms shall be subject to the exclusive jurisdiction of the courts of Dubai, UAE, unless otherwise agreed in writing between the parties.",
    ],
  },
  {
    id: "changes",
    heading: "10. Changes to These Terms",
    body: [
      'We reserve the right to modify these Terms at any time. When we make changes, we will update the "Last updated" date at the top of this page. Where changes are material, we will provide reasonable notice.',
      "Your continued use of the Platform after any changes constitutes your acceptance of the revised Terms. If you do not agree to the revised Terms, please discontinue use of the Platform.",
    ],
  },
  {
    id: "contact",
    heading: "11. Contact",
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
      <main>
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
