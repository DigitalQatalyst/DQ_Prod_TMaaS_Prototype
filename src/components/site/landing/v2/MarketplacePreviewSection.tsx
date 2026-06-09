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

const SERVICE_COUNTS: Record<string, string> = {
  experience: "24 services",
  operations: "18 services",
  security: "15 services",
  ai: "12 services",
};

const MarketplacePreviewSection = () => {
  return (
    <section
      id="marketplace-preview"
      className="bg-gray-50 px-5 py-24 md:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-dq-orange">
          Inside the marketplace
        </p>
        <h2 className="mb-4 max-w-2xl text-4xl font-semibold tracking-tight text-dq-navy md:text-5xl">
          Browse transformation services by category.
        </h2>
        <p className="mb-12 max-w-xl text-lg text-gray-600">
          Start with the capability area that matches your priority — every
          category links to the full marketplace catalogue.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {marketplaceCoreCapabilities.map(({ id, label }) => {
            const Icon = CATEGORY_ICONS[id];
            return (
              <Link
                key={id}
                to="/marketplace"
                className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-6 outline-none transition-all duration-300 hover:border-dq-orange hover:shadow-xl focus-visible:ring-2 focus-visible:ring-dq-orange focus-visible:ring-offset-2"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 text-dq-navy transition-colors group-hover:bg-dq-orange group-hover:text-white">
                  <Icon size={22} />
                </div>
                <h3 className="mb-1 text-lg font-semibold text-dq-navy">{label}</h3>
                <p className="mb-4 text-sm text-gray-500">
                  {SERVICE_COUNTS[id]}
                </p>
                <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-dq-orange transition-all group-hover:gap-2">
                  Browse <ArrowRight size={14} />
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/marketplace"
            className="inline-flex items-center gap-2 text-sm font-semibold text-dq-navy transition-colors hover:text-dq-orange"
          >
            Browse all services
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MarketplacePreviewSection;
