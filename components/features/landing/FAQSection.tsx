"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import SectionHeading from "@/components/features/landing/SectionHeading";
import { featureFlags } from "@/lib/featureFlags";

const faqs = [
  {
    question: "What is TMaaS?",
    answer: "TMaaS (Transformation as a Service) is a low-cost, architecture-led digital transformation marketplace and execution platform. It enables organisations to identify, design, deploy, and continuously drive digital transformation initiatives using AI-powered, ready-to-launch blueprints grounded in enterprise architecture.",
  },
  {
    question: "How is TMaaS different from traditional consulting?",
    answer: "Unlike traditional consulting that delivers static reports, TMaaS provides executable blueprints, AI-augmented builds, and continuous synchronization between design and delivery. This approach reduces costs by up to 40%, accelerates delivery by 50%, and ensures your transformation stays aligned with your evolving business needs.",
  },
  {
    question: "What is the Digital Business Platform (DBP)?",
    answer: "The DBP is a unifying architecture built as integrated service marketplaces across four pillars: Digital Experience (external value), Digital Workspace (internal efficiency), Digital Intelligence & Analytics (AI-driven insights), and SecDevOps (platform foundation). It provides a structured approach to enterprise-wide digital transformation.",
  },
  {
    question: "How does the 4D Framework work?",
    answer: "The 4D Framework guides transformation through four phases: Discern (identify problems and opportunities), Design (create architecture and blueprints), Deploy (execute with proven platforms), and Drive (optimize and continuously improve). Each phase is supported by specific services and tools.",
  },
  {
    question: "What types of services are available?",
    answer: "We offer Design Services (strategic architecture), Deploy Services (implementations), and Drive Services (managed platforms). You can purchase individual services or select curated Transformation Bundles that combine multiple services for a complete strategic outcome.",
  },
  {
    question: "How do I get started?",
    answer: "Start with our AI-powered Butler to identify the right services for your needs, or browse our marketplace and recommended bundles directly. Each offering includes clear deliverables, timelines, and pricing to help you make informed decisions.",
  },
  {
    question: "What is the typical timeline for transformation?",
    answer: "Design Services typically take 4-6 weeks, while Deploy Services range from 6-12 weeks depending on complexity. Our blueprint-driven approach and AI-augmented builds reduce traditional timelines by up to 50%, getting you to value faster.",
  },
  {
    question: "Can TMaaS work for my industry?",
    answer: "Yes. TMaaS is built on industry-standard frameworks and best practices that apply across sectors. Our blueprints are contextually adapted to your organization's specific needs, maturity level, and industry requirements while maintaining architectural integrity.",
  },
];

const FAQSection = () => {
  return (
    <section className="border-t border-gray-100 bg-gray-50 px-5 py-24 md:px-8 lg:px-10">
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <SectionHeading
            kicker="FAQ"
            title="Frequently Asked Questions"
            description="Everything you need to know about TMaaS and digital transformation"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mx-auto max-w-3xl"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-600">
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
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
