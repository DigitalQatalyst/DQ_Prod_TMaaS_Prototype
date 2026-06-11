import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const JOURNEY_STEPS = [
  {
    num: "01",
    suite: "Discover",
    title: "Browse the marketplace",
    body: "Find services and blueprints by goal, industry, and outcome. Pricing is clear from the start.",
    linkLabel: "Browse services",
    href: "/marketplace",
  },
  {
    num: "02",
    suite: "Evaluate",
    title: "Compare your options",
    body: "Review scope, timelines, and bundles. Use AI-guided exploration to shortlist what fits.",
    linkLabel: "Compare services",
    href: "/marketplace",
  },
  {
    num: "03",
    suite: "Engage",
    title: "Launch with our team",
    body: "Talk to us to scope your needs and start delivery with full visibility from day one.",
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
          From browse to launch in three steps.
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {JOURNEY_STEPS.map(({ num, suite, title, body, linkLabel, href }) => (
            <div
              key={num}
              className="relative flex flex-col sm:last:col-span-2 lg:last:col-span-1"
            >
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
