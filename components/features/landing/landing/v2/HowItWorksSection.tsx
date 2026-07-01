import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildDiscoverySessionContactPath } from "@/lib/launchOffering";
import { NAV_BROWSE_MARKETPLACE_LABEL } from "@/lib/brandLinks";

const JOURNEY_STEPS = [
  {
    num: "01",
    suite: "Discover",
    title: "Tell us the goal",
    body: "Answer a few questions about your priority and constraints. We match you to the services and blueprint that fit, instead of a generic catalogue search.",
    linkLabel: "Book a discovery session",
    href: buildDiscoverySessionContactPath(),
  },
  {
    num: "02",
    suite: "Evaluate",
    title: "See scope and price",
    body: "Review the fixed scope, timeline, and price for each matched service before you talk to anyone. Compare bundles where more than one fits.",
    linkLabel: NAV_BROWSE_MARKETPLACE_LABEL,
    href: "/marketplace",
  },
  {
    num: "03",
    suite: "Engage",
    title: "Start with full visibility",
    body: "Confirm scope with our team and start delivery, typically within a day, with progress visible throughout.",
    linkLabel: "Talk to our team",
    href: buildDiscoverySessionContactPath(),
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="bg-gray-50 px-5 py-24 md:px-8 lg:px-10">
      <div className="mx-auto max-w-[1200px]">
        <p className="mb-4 dq-eyebrow">How it works</p>
        <h2 className="mb-16 text-4xl font-semibold tracking-tight text-dq-navy md:text-5xl">
          From goal to delivery, in three steps
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {JOURNEY_STEPS.map(({ num, suite, title, body, linkLabel, href }) => (
            <div key={num} className="relative flex flex-col sm:last:col-span-2 lg:last:col-span-1">
              <div className="mb-3 font-mono text-7xl font-bold leading-none text-dq-navy/[0.15]">
                {num}
              </div>
              <p className="dq-micro-label mb-1.5">{suite}</p>
              <h3 className="mb-3 text-xl font-semibold tracking-tight text-dq-navy">{title}</h3>
              <p className="mb-4 flex-1 text-[14px] leading-relaxed text-gray-600">{body}</p>
              <Link
                href={href}
                className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-dq-orange transition-all hover:gap-2"
              >
                {linkLabel} <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
