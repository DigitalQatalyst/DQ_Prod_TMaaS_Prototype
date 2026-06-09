import { Link } from "react-router-dom";
import {
  ArrowRight,
  Monitor,
  Workflow,
  Shield,
  BarChart2,
  Package,
} from "lucide-react";

const CATEGORIES = [
  {
    Icon: Monitor,
    title: "Digital Experience",
    desc: "Customer-facing platforms, portals, and omnichannel experiences designed for adoption and scale.",
  },
  {
    Icon: Workflow,
    title: "Digital Work System",
    desc: "Operating models, workflow automation, and collaboration systems that connect people to outcomes.",
  },
  {
    Icon: Shield,
    title: "SecDevOps",
    desc: "Secure delivery pipelines, cloud infrastructure, and DevOps practices built for enterprise compliance.",
  },
  {
    Icon: BarChart2,
    title: "Digital Intelligence & Analytics",
    desc: "Data platforms, analytics, and AI capabilities that turn information into actionable insight.",
  },
  {
    Icon: Package,
    title: "Bundles",
    desc: "Pre-configured service bundles mapped to common transformation journeys and industry outcomes.",
  },
];

const ServiceCategoriesSection = () => {
  return (
    <section
      id="categories"
      className="bg-gray-50 px-5 py-24 md:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-[1200px]">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-dq-orange">
          Service Categories
        </p>
        <h2 className="mb-12 text-4xl font-semibold tracking-tight text-dq-navy md:text-5xl">
          Every capability area, one marketplace.
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map(({ Icon, title, desc }) => (
            <Link
              key={title}
              to="/marketplace"
              className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-6 outline-none transition-all duration-300 hover:border-dq-orange hover:shadow-xl focus-visible:ring-2 focus-visible:ring-dq-orange focus-visible:ring-offset-2"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-dq-navy transition-colors group-hover:bg-dq-orange group-hover:text-white">
                <Icon size={22} />
              </div>
              <div className="flex-1">
                <h3 className="mb-1 text-lg font-semibold text-dq-navy">{title}</h3>
                <p className="text-[15px] text-gray-600">{desc}</p>
              </div>
              <ArrowRight
                size={20}
                className="text-gray-400 transition-colors group-hover:text-dq-orange"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategoriesSection;
