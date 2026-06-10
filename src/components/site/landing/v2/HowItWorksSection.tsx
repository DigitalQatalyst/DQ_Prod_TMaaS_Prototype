import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const JOURNEY_STEPS = [
  {
    num: "01",
    suite: "Discover",
    title: "Browse the marketplace",
    body: "Explore productised services and blueprints by goal, industry, and capability, with transparent pricing from the start.",
    linkLabel: "Browse services",
    href: "/marketplace",
  },
  {
    num: "02",
    suite: "Evaluate",
    title: "Explore with AI-guided consulting",
    body: "Compare scope, timelines, and bundled pathways. Use guided exploration to shortlist services aligned to your priorities.",
    linkLabel: "Compare offerings",
    href: "/marketplace",
  },
  {
    num: "03",
    suite: "Engage",
    title: "Activate governed fulfilment",
    body: "Scope your needs with our team and launch structured delivery, with stakeholder coordination and delivery visibility built in.",
    linkLabel: "Talk to our team",
    href: "/contact",
  },
];

const HowItWorksSection = () => {
  return (
    <section
      id="how-it-works"
      className="bg-white px-5 py-24 md:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-[1200px]">
        <p className="mb-4 dq-eyebrow">
          How TMaaS works
        </p>
        <h2 className="mb-16 text-4xl font-semibold tracking-tight text-dq-navy md:text-5xl">
          From discovery to governed delivery in three steps.
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {JOURNEY_STEPS.map(({ num, suite, title, body, linkLabel, href }) => (
            <div key={num} className="relative flex flex-col">
              <div className="mb-3 font-mono text-7xl font-bold leading-none text-dq-navy/[0.15]">
                {num}
              </div>
              <p className="dq-micro-label mb-1.5">
                {suite}
              </p>
              <h3 className="mb-3 text-xl font-semibold tracking-tight text-dq-navy">
                {title}
              </h3>
              <p className="mb-4 flex-1 text-[14px] leading-relaxed text-gray-600">
                {body}
              </p>
              <Link
                to={href}
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
