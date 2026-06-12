import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { sectionHeading, serviceDetailTabLead } from "@/lib/brandAccent";
import { buildContactPath } from "@/lib/contactFormPrefill";
import { featureFlags } from "@/lib/featureFlags";
import type { PdpContent } from "@/types/catalog";
import { getServiceFaqsContent } from "./serviceFaqsContent";
import type { ServiceProduct } from "./serviceDetailHelpers";

const itemCardClass =
  "rounded-xl border border-gray-200 bg-white shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-elevated)]";

interface ServiceDetailFaqsTabProps {
  service: ServiceProduct;
  pdpContent?: PdpContent;
}

export function ServiceDetailFaqsTab({ service, pdpContent }: ServiceDetailFaqsTabProps) {
  const fallback = getServiceFaqsContent(service);
  const intro = pdpContent?.faqIntro ?? fallback.intro;
  const faqs = pdpContent?.faqs?.length ? pdpContent.faqs : fallback.faqs;

  return (
    <div className="space-y-10">
      <section aria-labelledby="service-faqs-heading" className={serviceDetailTabLead}>
        <h2 id="service-faqs-heading" className={sectionHeading}>
          Frequently Asked Questions
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#667085] md:text-base">
          {intro}
        </p>

        <Accordion type="single" collapsible className="mt-6 space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={`faq-${index}`}
              className={`${itemCardClass} border-0 px-5`}
            >
              <AccordionTrigger className="py-4 text-left text-sm font-semibold text-dq-navy hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="border-t border-gray-100 pt-4">
                <p className="text-sm leading-[1.65] text-[#667085]">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section
        aria-labelledby="faqs-contact-heading"
        className={`${itemCardClass} px-6 py-5`}
      >
        <h3 id="faqs-contact-heading" className="text-sm font-semibold text-dq-navy">
          Still have questions?
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[#667085]">
          Our team can help you scope the right approach for your organisation.{" "}
          {featureFlags.isEnabled("contactUs") ? (
            <Link
              to={buildContactPath(service, "consultation")}
              className="font-semibold text-dq-orange transition-colors hover:text-dq-orange/80"
            >
              Contact us →
            </Link>
          ) : (
            <a
              href="mailto:info@digitalqatalyst.com"
              className="font-semibold text-dq-orange transition-colors hover:text-dq-orange/80"
            >
              Contact us →
            </a>
          )}
        </p>
      </section>
    </div>
  );
}
