import LandingNavbar from "@/components/site/landing/LandingNavbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { LegalPageLayout, type LegalSection } from "@/components/LegalPageLayout";
import { PLATFORM_NAME_EXPANDED } from "@/lib/brandLinks";
import { SEO_BRAND } from "@/lib/seo";

const LAST_UPDATED = "June 2026";

const SECTIONS: LegalSection[] = [
  {
    id: "who-we-are",
    heading: "1. Who We Are",
    body: [
      'DigitalQatalyst DMCC ("DigitalQatalyst", "we", "our", "us") is a digital transformation consultancy incorporated in the Dubai Multi Commodities Centre (DMCC) Free Zone, Dubai, United Arab Emirates (DMCC Licence No. 131122).',
      `For the purposes of applicable data protection law, DigitalQatalyst DMCC is the data controller of any personal information collected through the ${PLATFORM_NAME_EXPANDED} platform.`,
      "Registered address: Unit 1992, DMCC Business Center, Level 1, Jewellery & Gemplex 3, PO Box 340505, Dubai, UAE.",
      "Email: info@digitalqatalyst.com | Telephone: +971 4 266 6169",
    ],
  },
  {
    id: "applicable-law",
    heading: "2. Applicable Data Protection Law",
    body: [
      "As a DMCC-incorporated entity operating in the UAE, DigitalQatalyst DMCC is subject to the UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data (UAE PDPL) and its implementing regulations.",
      "Where we process personal data of individuals located in the European Economic Area (EEA) or the United Kingdom, the EU General Data Protection Regulation (GDPR) and the UK GDPR may also apply. This Privacy Policy is written to satisfy both frameworks.",
      "The supervisory authority for UAE PDPL matters is the UAE Data Office (uaedataoffice.ae). For EEA individuals, the relevant supervisory authority is the data protection authority in your country of residence.",
    ],
  },
  {
    id: "information-we-collect",
    heading: "3. Information We Collect",
    body: [
      "We collect information in two ways: information you provide to us directly, and information collected automatically when you use our website.",
      `Information you provide directly includes your name, work email address, organisation name, job role, and any context you share when submitting an enquiry through the TMaaS contact form or requesting information about a marketplace service.`,
      "Information collected automatically includes standard web server logs (IP address, browser type, pages visited, time and date of visit). We may use analytics tools to understand aggregate website usage patterns. We do not use advertising cookies or cross-site behavioural tracking.",
      "Third-party connections: our website loads web fonts from Google Fonts (fonts.googleapis.com). This results in your browser making a connection to Google's servers, which may process your IP address. We do not control Google's data practices; please refer to Google's Privacy Policy for details.",
    ],
  },
  {
    id: "how-we-use-your-information",
    heading: "4. How We Use Your Information",
    body: [
      "We use the information you provide to respond to your enquiries, route your request to the appropriate DQ advisor or service team, and send you relevant information about TMaaS services where you have consented or where we have a legitimate interest in doing so.",
      "We use automatically collected information to maintain the security and performance of our website, understand how visitors use the TMaaS platform, and improve our content and services.",
      "We do not use your personal information for automated decision-making or profiling that produces legal or similarly significant effects.",
    ],
  },
  {
    id: "legal-basis",
    heading: "5. Legal Basis for Processing",
    body: [
      "Under the UAE PDPL and GDPR (where applicable), we rely on the following legal bases for processing your personal data:",
      "Consent — where you have given us clear consent for a specific purpose, such as receiving marketing communications.",
      "Legitimate interests — where processing is necessary for our legitimate business interests (responding to enquiries, improving our website, maintaining records), and those interests are not overridden by your rights and freedoms.",
      "Contract — where processing is necessary to take steps at your request prior to entering into a contract, or to perform a contract with you.",
      "Legal obligation — where processing is required to comply with applicable law.",
    ],
  },
  {
    id: "sharing-your-information",
    heading: "6. Sharing Your Information",
    body: [
      "We do not sell, rent, or trade your personal information to third parties for their own marketing purposes.",
      "We may share your information with trusted service providers who assist us in operating our website and delivering our services (for example, email delivery platforms, CRM software, cloud hosting providers), under contractual obligations that require them to keep your information confidential and process it only on our instructions.",
      "We may disclose information where required by UAE law, regulation, legal process, or governmental request, or where necessary to protect the rights, property, or safety of DigitalQatalyst DMCC, our clients, or others.",
    ],
  },
  {
    id: "international-transfers",
    heading: "7. International Data Transfers",
    body: [
      "DigitalQatalyst DMCC operates from Dubai, UAE and serves clients across the GCC and internationally. Your personal data may be processed in countries other than your own.",
      "Under the UAE PDPL, we ensure that cross-border transfers of personal data are conducted in accordance with the conditions and safeguards set out by the UAE Data Office.",
      "Where we transfer personal data of EEA or UK individuals to countries without an adequacy decision, we use appropriate safeguards — such as Standard Contractual Clauses (SCCs) or equivalent mechanisms — to ensure your data receives the same level of protection.",
    ],
  },
  {
    id: "data-retention",
    heading: "8. Data Retention",
    body: [
      "We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by applicable law.",
      "Enquiry and correspondence data is retained for a minimum of five years, in line with commercial record-keeping requirements under UAE law. You may request deletion of your data at any time — see Your Rights below — subject to any legal obligation to retain it.",
    ],
  },
  {
    id: "your-rights",
    heading: "9. Your Rights",
    body: [
      "Depending on your jurisdiction, you may have the following rights in relation to your personal data:",
      "Access — the right to request a copy of the personal data we hold about you.",
      "Correction — the right to request that we correct inaccurate or incomplete data.",
      "Erasure — the right to request that we delete your personal data where there is no lawful reason to continue processing it.",
      "Restriction — the right to ask us to restrict processing of your data in certain circumstances.",
      "Portability — the right to receive your data in a structured, machine-readable format (applies under GDPR and equivalent provisions).",
      "Objection — the right to object to processing based on legitimate interests, including for direct marketing.",
      "To exercise any of these rights, please email info@digitalqatalyst.com. We will acknowledge your request promptly and respond within the timeframe required by applicable law (typically 30 days for GDPR requests; timelines under UAE PDPL are set by the UAE Data Office). You also have the right to lodge a complaint with the relevant supervisory authority — the UAE Data Office for UAE PDPL matters, or your local data protection authority for GDPR matters.",
    ],
  },
  {
    id: "cookies",
    heading: "10. Cookies",
    body: [
      "Our website uses essential cookies required for the site to function correctly. We do not use advertising, tracking, or behavioural profiling cookies.",
      "As noted in Section 3, our website connects to Google Fonts to load typefaces. This is a functional dependency, not a tracking mechanism, but it involves a network request to Google's servers.",
      "You can control cookies through your browser settings. Disabling essential cookies may affect the functionality of parts of our website.",
    ],
  },
  {
    id: "security",
    heading: "11. Security",
    body: [
      "We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, disclosure, alteration, loss, or destruction. All data transmitted between your browser and our website is encrypted using TLS.",
      "No method of transmission over the internet is completely secure. While we take reasonable precautions, we cannot guarantee the absolute security of your data.",
    ],
  },
  {
    id: "changes",
    heading: "12. Changes to This Policy",
    body: [
      'We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. When we make material changes, we will update the "Last updated" date at the top of this page.',
      "We encourage you to review this policy periodically.",
    ],
  },
  {
    id: "contact",
    heading: "13. Contact Us",
    body: [
      "If you have questions, concerns, or requests relating to this Privacy Policy or the way we handle your personal data, please contact us at info@digitalqatalyst.com.",
      "DigitalQatalyst DMCC · Unit 1992, DMCC Business Center, Level 1, Jewellery & Gemplex 3, PO Box 340505, Dubai, UAE",
    ],
  },
];

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title={`Privacy Policy | ${SEO_BRAND}`}
        description={`How DigitalQatalyst DMCC collects, uses, and protects your personal information on the ${PLATFORM_NAME_EXPANDED} platform.`}
        path="/legal/privacy"
      />
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
};

export default Privacy;
