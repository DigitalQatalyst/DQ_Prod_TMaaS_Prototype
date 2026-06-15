import Link from "next/link";
import {
  ArrowRight,
  Monitor,
  Workflow,
  Shield,
  BarChart2,
  type LucideIcon,
} from "lucide-react";
import { marketplaceCoreCapabilities } from "@/data/marketplaceNavigation" // TODO: Task 9 — wire up data;

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  experience: Monitor,
  operations: Workflow,
  security: Shield,
  ai: BarChart2,
};

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  experience:
    "Customer portals, apps, and digital experiences built to scale.",
  operations:
    "Workflows and automation that help teams work smarter.",
  security:
    "Cloud, security, and DevOps for compliant enterprise delivery.",
  ai: "Data, analytics, and AI services that turn insight into action.",
};

const MarketplacePreviewSection = () => {
  return (
    <section
      id="marketplace-preview"
      className="bg-gray-50 px-5 py-24 md:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-[1200px]">
        <p className="mb-4 dq-eyebrow">
          The marketplace
        </p>
        <h2 className="mb-4 max-w-2xl text-4xl font-semibold tracking-tight text-dq-navy md:text-5xl">
          Browse digital transformation services by category.
        </h2>
        <p className="mb-12 max-w-xl text-lg text-gray-600">
          Four capability areas. One catalogue. Pick what matters most and
          explore ready-to-launch services.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {marketplaceCoreCapabilities.map(({ id, label }) => {
            const Icon = CATEGORY_ICONS[id] as LucideIcon | undefined;
            if (!Icon) return null;
            return (
              <Link
                key={id}
                href="/marketplace"
                className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-6 outline-none transition-all duration-300 hover:border-dq-orange hover:shadow-xl focus-visible:ring-2 focus-visible:ring-dq-orange focus-visible:ring-offset-2"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-dq-navy transition-colors group-hover:bg-dq-orange group-hover:text-white">
                  <Icon size={22} />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="mb-1 text-lg font-semibold text-dq-navy">{label}</h3>
                  <p className="text-[15px] leading-relaxed text-gray-600">
                    {CATEGORY_DESCRIPTIONS[id]}
                  </p>
                </div>
                <ArrowRight
                  size={20}
                  className="shrink-0 text-gray-400 transition-colors group-hover:text-dq-orange"
                />
              </Link>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link href="/marketplace"
            className="inline-flex items-center gap-2 text-sm font-semibold text-dq-navy transition-colors hover:text-dq-navy/70"
          >
            View all 100+ services
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MarketplacePreviewSection;
