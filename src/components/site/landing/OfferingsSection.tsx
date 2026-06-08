import { Link } from "react-router-dom";
import { ArrowRight, Monitor, Workflow, Shield, BarChart2, Package } from "lucide-react";
import SplitSectionHeader from "./SplitSectionHeader";

const OFFERINGS = [
  {
    Icon: Monitor,
    title: "Digital Experience",
    body: "Customer-facing platforms, portals, and omnichannel experiences designed for adoption and scale.",
    linkLabel: "Explore services",
    href: "/marketplace",
  },
  {
    Icon: Workflow,
    title: "Digital Work System",
    body: "Operating models, workflow automation, and collaboration systems that connect people to outcomes.",
    linkLabel: "Explore services",
    href: "/marketplace",
  },
  {
    Icon: Shield,
    title: "SecDevOps",
    body: "Secure delivery pipelines, cloud infrastructure, and DevOps practices built for enterprise compliance.",
    linkLabel: "Explore services",
    href: "/marketplace",
  },
  {
    Icon: BarChart2,
    title: "Digital Intelligence & Analytics",
    body: "Data platforms, analytics, and AI capabilities that turn information into actionable insight.",
    linkLabel: "Explore services",
    href: "/marketplace",
  },
  {
    Icon: Package,
    title: "Bundles",
    body: "Pre-configured service bundles mapped to common transformation journeys and industry outcomes.",
    linkLabel: "Explore bundles",
    href: "/marketplace",
  },
];

const OfferingsSection = () => {
  return (
    <section
      id="offerings"
      className="bg-gray-50 px-5 py-24 md:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-[1200px]">
        <SplitSectionHeader
          kicker="Our Offerings"
          title="Comprehensive services. Measurable impact."
          description="From digital experience to SecDevOps, TMaaS offers a full spectrum of transformation services — delivered by certified providers with proven track records."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {OFFERINGS.map(({ Icon, title, body, linkLabel, href }) => (
            <div
              key={title}
              className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-dq-orange hover:shadow-xl"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-dq-orange/10 text-dq-orange">
                <Icon size={22} strokeWidth={1.75} />
              </div>
              <h3 className="mb-2 text-base font-semibold tracking-tight text-dq-navy">
                {title}
              </h3>
              <p className="mb-6 flex-1 text-[14px] leading-relaxed text-gray-600">
                {body}
              </p>
              <Link
                to={href}
                className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-dq-orange transition hover:gap-2.5"
              >
                {linkLabel}
                <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
