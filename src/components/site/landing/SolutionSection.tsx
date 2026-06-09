import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const SOLUTION_STEPS = [
  {
    num: "01",
    suite: "Discover",
    title: "Explore the marketplace",
    body: "Browse services and bundles mapped to your transformation goals, industry context, and priority outcomes.",
    linkLabel: "Explore services",
    href: "/marketplace",
  },
  {
    num: "02",
    suite: "Evaluate",
    title: "Compare offerings",
    body: "Review service details, transparent pricing, timelines, and bundled pathways before you commit.",
    linkLabel: "View service bundles",
    href: "/marketplace",
  },
  {
    num: "03",
    suite: "Engage",
    title: "Contact our team",
    body: "Reach out to scope your needs, ask questions, and activate the right transformation services for your organisation.",
    linkLabel: "Contact us",
    href: "/contact",
  },
];

const SolutionSection = () => {
  return (
    <section className="bg-white px-5 py-24 md:px-8 lg:px-10">
      <div className="mx-auto max-w-[1200px]">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-dq-orange">
          The Marketplace Model
        </p>
        <h2 className="mb-16 text-4xl font-semibold tracking-tight text-dq-navy md:text-5xl">
          Three steps to the right services.
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {SOLUTION_STEPS.map(({ num, suite, title, body, linkLabel, href }) => (
            <div key={num} className="relative flex flex-col">
              <div className="mb-3 font-mono text-7xl font-bold leading-none text-dq-navy/[0.15]">
                {num}
              </div>
              <p className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-dq-orange">
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

export default SolutionSection;
