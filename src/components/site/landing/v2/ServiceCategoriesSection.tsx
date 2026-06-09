import { Link } from "react-router-dom";
import {
  ArrowRight,
  Monitor,
  Workflow,
  Shield,
  BarChart2,
  type LucideIcon,
} from "lucide-react";
import { marketplaceCoreCapabilities } from "@/data/marketplaceNavigation";

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  experience: Monitor,
  operations: Workflow,
  security: Shield,
  ai: BarChart2,
};

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  experience:
    "Customer-facing platforms, portals, and engagement experiences designed for adoption and scale.",
  operations:
    "Workflow automation, operating models, and productivity systems that connect people to outcomes.",
  security:
    "Secure delivery pipelines, cloud infrastructure, and DevSecOps practices built for enterprise compliance.",
  ai: "Data platforms, analytics, and AI capabilities that turn information into actionable insight.",
};

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

        <div className="grid gap-6 md:grid-cols-2">
          {marketplaceCoreCapabilities.map(({ id, label }) => {
            const Icon = CATEGORY_ICONS[id];
            return (
              <Link
                key={id}
                to="/marketplace"
                className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-6 outline-none transition-all duration-300 hover:border-dq-orange hover:shadow-xl focus-visible:ring-2 focus-visible:ring-dq-orange focus-visible:ring-offset-2"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-dq-navy transition-colors group-hover:bg-dq-orange group-hover:text-white">
                  <Icon size={22} />
                </div>
                <div className="flex-1">
                  <h3 className="mb-1 text-lg font-semibold text-dq-navy">{label}</h3>
                  <p className="text-[15px] text-gray-600">
                    {CATEGORY_DESCRIPTIONS[id]}
                  </p>
                </div>
                <ArrowRight
                  size={20}
                  className="text-gray-400 transition-colors group-hover:text-dq-orange"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategoriesSection;
