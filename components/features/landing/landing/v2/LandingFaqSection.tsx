"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import SectionHeading from "@/components/features/landing/SectionHeading";
import {
  LANDING_FAQ_EYEBROW,
  LANDING_FAQ_HEADLINE,
  LANDING_FAQ_ITEMS,
} from "@/components/features/landing/landing/landingFaqContent";
import { featureFlags } from "@/lib/featureFlags";

const LandingFaqSection = () => {
  return (
    <section
      id="faq"
      className="border-t border-gray-100 bg-white px-5 py-24 md:px-8 lg:px-10"
      aria-labelledby="landing-faq-heading"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12">
          <SectionHeading
            kicker={LANDING_FAQ_EYEBROW}
            title={<span id="landing-faq-heading">{LANDING_FAQ_HEADLINE}</span>}
          />
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {LANDING_FAQ_ITEMS.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`landing-faq-${index}`}
                className="rounded-2xl border border-gray-200 bg-white px-6 transition-all duration-300 hover:border-dq-orange hover:shadow-xl"
              >
                <AccordionTrigger className="text-left font-semibold text-dq-navy hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <p className="mx-auto mt-12 max-w-3xl text-center text-sm text-gray-600">
          Still have questions?{" "}
          {featureFlags.isEnabled("contactUs") ? (
            <Link href="/contact" className="font-semibold text-dq-orange hover:underline">
              Contact our team
            </Link>
          ) : (
            <a
              href="mailto:info@digitalqatalyst.com"
              className="font-semibold text-dq-orange hover:underline"
            >
              Contact our team
            </a>
          )}
        </p>
      </div>
    </section>
  );
};

export default LandingFaqSection;
