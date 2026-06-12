import {
  AlertCircle,
  ArrowRight,
  GitBranch,
  Layers,
  Lightbulb,
  Target,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { sectionHeading, serviceDetailTabLead } from "@/lib/brandAccent";
import type { PdpContent } from "@/types/catalog";
import type { ServiceProduct } from "./serviceDetailHelpers";
import { getWhyItMattersContent } from "./whyItMattersContent";

const BEFORE_ICONS = [AlertCircle, GitBranch, Layers] as const;
const AFTER_ICONS = [Target, Lightbulb, TrendingUp] as const;

interface ServiceDetailWhyItMattersTabProps {
  service: ServiceProduct;
  pdpContent?: PdpContent;
}

function StateItem({
  index,
  title,
  description,
  variant,
  Icon,
}: {
  index: number;
  title: string;
  description: string;
  variant: "before" | "after";
  Icon: LucideIcon;
}) {
  const isBefore = variant === "before";

  return (
    <li
      className={
        isBefore
          ? "flex gap-4 rounded-xl border border-gray-100 bg-white p-4 shadow-sm"
          : "flex gap-4 rounded-xl border border-orange-100/80 bg-white p-4 shadow-sm transition-colors hover:border-dq-orange/25"
      }
    >
      <div
        className={
          isBefore
            ? "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-500"
            : "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-dq-orange"
        }
      >
        <Icon size={18} strokeWidth={1.75} aria-hidden />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-2">
          <span
            aria-hidden
            className={
              isBefore
                ? "font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-400"
                : "font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-dq-orange"
            }
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <h4 className="text-sm font-semibold text-dq-navy">{title}</h4>
        </div>
        <p className="mt-1.5 text-sm leading-[1.65] text-[#667085]">{description}</p>
      </div>
    </li>
  );
}

function BeforeAfterComparison({
  before,
  after,
}: {
  before: { eyebrow: string; title: string; items: { title: string; description: string }[] };
  after: { eyebrow: string; title: string; items: { title: string; description: string }[] };
}) {
  return (
    <section
      aria-label="Before and after comparison"
      className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[var(--shadow-card)]"
    >
      <div className="grid lg:grid-cols-2">
        <div className="border-b border-gray-200 bg-gradient-to-b from-gray-50/90 to-white p-6 md:p-8 lg:border-b-0 lg:border-r">
          <header>
            <span className="inline-flex items-center rounded-full bg-gray-200/70 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-600">
              {before.eyebrow}
            </span>
            <h3 className="mt-3 text-lg font-semibold tracking-tight text-dq-navy">
              {before.title}
            </h3>
          </header>
          <ul className="mt-6 space-y-3">
            {before.items.map((item, index) => (
              <StateItem
                key={item.title}
                index={index}
                title={item.title}
                description={item.description}
                variant="before"
                Icon={BEFORE_ICONS[index % BEFORE_ICONS.length]}
              />
            ))}
          </ul>
        </div>

        <div className="relative bg-gradient-to-b from-orange-50/50 to-white p-6 md:p-8">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 hidden w-px bg-gradient-to-b from-transparent via-dq-orange/20 to-transparent lg:block"
          />
          <header>
            <span className="inline-flex items-center rounded-full bg-dq-orange/10 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-dq-orange">
              {after.eyebrow}
            </span>
            <h3 className="mt-3 text-lg font-semibold tracking-tight text-dq-navy">
              {after.title}
            </h3>
          </header>
          <ul className="mt-6 space-y-3">
            {after.items.map((item, index) => (
              <StateItem
                key={item.title}
                index={index}
                title={item.title}
                description={item.description}
                variant="after"
                Icon={AFTER_ICONS[index % AFTER_ICONS.length]}
              />
            ))}
          </ul>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 lg:flex"
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-white bg-dq-orange text-white shadow-[0_4px_14px_rgba(251,85,53,0.35)]">
          <ArrowRight size={18} strokeWidth={2.25} />
        </div>
      </div>

      <div
        aria-hidden
        className="flex items-center justify-center gap-3 border-t border-gray-100 bg-white px-6 py-3 lg:hidden"
      >
        <span className="h-px flex-1 bg-gray-200" />
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-dq-orange text-white shadow-sm">
          <ArrowRight size={14} strokeWidth={2.25} />
        </span>
        <span className="h-px flex-1 bg-gray-200" />
      </div>
    </section>
  );
}

export function ServiceDetailWhyItMattersTab({
  service,
  pdpContent,
}: ServiceDetailWhyItMattersTabProps) {
  const content = pdpContent?.whyItMatters ?? getWhyItMattersContent(service);

  return (
    <div className="space-y-12">
      <section aria-labelledby="why-service-matters-heading" className={serviceDetailTabLead}>
        <h2 id="why-service-matters-heading" className={sectionHeading}>
          Why This Service Matters
        </h2>
        <div className="mt-6 space-y-5">
          <p className="text-base font-medium leading-[1.7] text-dq-navy">
            {content.hook}
          </p>
          <p className="text-base leading-[1.7] text-[#667085]">
            {content.problemParagraph}
          </p>
        </div>
      </section>

      <BeforeAfterComparison before={content.before} after={content.after} />
    </div>
  );
}
