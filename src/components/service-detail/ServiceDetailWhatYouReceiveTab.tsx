import { useNavigate } from "react-router-dom";
import { ArrowRight, ClipboardList, Zap } from "lucide-react";
import {
  sectionHeading,
  serviceDetailSideCard,
  serviceDetailSplitGrid,
  serviceDetailSplitLead,
} from "@/lib/brandAccent";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useCatalogData } from "@/contexts/CatalogContext";
import type { PdpContent } from "@/types/catalog";
import {
  BUNDLE_INCLUSION_LINE,
  getAudienceCardAccent,
  getDeliverableBreakdown,
  getDeliverablesAtAGlance,
  getDeliverablesForService,
  getDeliverablesSummaryContent,
  getMarketplaceCardTitle,
  getPdpTypeBadgeLabel,
  type ServiceProduct,
} from "./serviceDetailHelpers";

const itemCardClass =
  "rounded-xl border border-gray-200 bg-white p-5 shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-elevated)]";

interface ServiceDetailWhatYouReceiveTabProps {
  service: ServiceProduct;
  deployModules: { name: string; features: string[] }[];
  isDeployService: boolean;
  pdpContent?: PdpContent;
}

function DeliverablesIntroSection({
  service,
  deliverableCount,
  pdpContent,
}: {
  service: ServiceProduct;
  deliverableCount: number;
  pdpContent?: PdpContent;
}) {
  const { paragraphs: fallbackParagraphs } = getDeliverablesSummaryContent(service);
  const paragraphs = pdpContent?.deliverablesSummary?.length
    ? pdpContent.deliverablesSummary
    : fallbackParagraphs;
  const atAGlance = getDeliverablesAtAGlance(service, deliverableCount);
  const accent = getAudienceCardAccent(service.collection);

  return (
    <section aria-labelledby="deliverables-summary-heading">
      <div className={serviceDetailSplitGrid}>
        <div className={serviceDetailSplitLead}>
          <h2 id="deliverables-summary-heading" className={sectionHeading}>
            Deliverables Summary
          </h2>
          <div className="mt-6 space-y-5">
            {paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base leading-[1.7] text-[#667085]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <aside
          className={`${serviceDetailSideCard} ${accent.cardBg}`}
          aria-labelledby="deliverables-at-a-glance-heading"
        >
          <h3 id="deliverables-at-a-glance-heading" className={sectionHeading}>
            At a glance
          </h3>
          <div
            className={`mt-5 flex h-11 w-11 items-center justify-center rounded-full ${accent.iconWell}`}
          >
            <ClipboardList
              size={20}
              className={accent.icon}
              strokeWidth={1.75}
              aria-hidden
            />
          </div>
          <dl className="mt-5 space-y-4">
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-gray-400">
                Duration
              </dt>
              <dd className="mt-1 text-sm font-medium text-dq-navy">
                {atAGlance.duration}
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-gray-400">
                Scope
              </dt>
              <dd className="mt-1 text-sm font-medium text-dq-navy">
                {atAGlance.scopeLabel}
              </dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}

function DeliverablesBreakdown({
  service,
  deliverables,
  pdpContent,
}: {
  service: ServiceProduct;
  deliverables: readonly string[];
  pdpContent?: PdpContent;
}) {
  const items = pdpContent?.deliverables?.length
    ? pdpContent.deliverables
    : getDeliverableBreakdown(service, deliverables);

  return (
    <section aria-labelledby="deliverables-breakdown-heading">
      <h2 id="deliverables-breakdown-heading" className={sectionHeading}>
        Deliverables Breakdown
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-[#667085]">
        Each output is focused, actionable, and easy to apply.
      </p>

      <ol className="mt-6 list-none overflow-hidden rounded-2xl border border-gray-200 bg-white">
        {items.map((item, index) => (
          <li
            key={item.title}
            className="border-t border-gray-100 first:border-t-0"
          >
            <div className="flex flex-col gap-3 px-5 py-5 sm:flex-row sm:items-center sm:gap-5 sm:px-6">
              <span
                aria-hidden
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-sm font-semibold text-dq-orange"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="shrink-0 text-sm font-medium text-dq-navy sm:w-36 lg:w-44">
                {item.title}
              </span>
              <div
                className="hidden h-10 w-px shrink-0 bg-gray-200 sm:block"
                aria-hidden
              />
              <p className="min-w-0 flex-1 text-sm leading-[1.65] text-[#667085]">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function BundleIncludedSection({ service }: { service: ServiceProduct }) {
  const navigate = useNavigate();
  const catalog = useCatalogData();

  if (
    service.serviceType !== "bundle" ||
    !service.relatedServices?.length
  ) {
    return null;
  }

  return (
    <section aria-labelledby="bundle-included-heading">
      <h2 id="bundle-included-heading" className={sectionHeading}>
        What&apos;s Included
      </h2>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#667085]">
        {BUNDLE_INCLUSION_LINE}
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {service.relatedServices
          .map((relatedId: number) =>
            catalog.find((s) => s.id === relatedId)
          )
          .filter((s) => s && s.serviceType !== "advisory")
          .map((s) => (
            <div key={s!.id} className={`${itemCardClass} flex flex-col`}>
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-gray-400">
                  {getPdpTypeBadgeLabel(s!.serviceType, s!.badge)}
                </span>
                {s!.standardName.includes("(High-Impact)") && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-dq-navy px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
                    <Zap size={9} className="fill-white" />
                    High-Impact
                  </span>
                )}
              </div>
              <h3 className="text-sm font-semibold leading-snug text-dq-navy">
                {getMarketplaceCardTitle(s!.standardName, s!.serviceType)}
              </h3>
              <p className="mt-2 line-clamp-2 flex-1 text-xs leading-relaxed text-[#667085]">
                {s!.description}
              </p>
              <button
                type="button"
                onClick={() => navigate(`/service/${s!.id}`)}
                className="mt-4 flex items-center gap-1 text-xs font-semibold text-dq-navy transition-colors hover:text-dq-navy/70"
              >
                View Details <ArrowRight size={12} />
              </button>
            </div>
          ))}
      </div>
    </section>
  );
}

function ModulesApplicationsSection({
  deployModules,
}: {
  deployModules: { name: string; features: string[] }[];
}) {
  if (deployModules.length === 0) {
    return null;
  }

  return (
    <section aria-labelledby="modules-applications-heading">
      <h2 id="modules-applications-heading" className={sectionHeading}>
        Modules &amp; Applications
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-[#667085]">
        Target architecture and functional components implemented during the
        build phase.
      </p>
      <Accordion type="single" collapsible className="mt-6 space-y-3">
        {deployModules.map((module, idx) => (
          <AccordionItem
            key={module.name}
            value={`module-${idx}`}
            className={`${itemCardClass} border-0 px-5`}
          >
            <AccordionTrigger className="py-0 text-sm font-semibold text-dq-navy hover:no-underline">
              {module.name}
            </AccordionTrigger>
            <AccordionContent className="border-t border-gray-100 pb-1 pt-4">
              <ul className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
                {module.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-[#667085]"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-dq-orange"
                      aria-hidden
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

export function ServiceDetailWhatYouReceiveTab({
  service,
  deployModules,
  isDeployService,
  pdpContent,
}: ServiceDetailWhatYouReceiveTabProps) {
  const isBundle = service.serviceType === "bundle";
  const deliverables = pdpContent?.deliverables?.length
    ? pdpContent.deliverables.map((d) => d.title)
    : getDeliverablesForService(service);

  if (isBundle) {
    return (
      <div className="space-y-12">
        <BundleIncludedSection service={service} />
      </div>
    );
  }

  return (
    <div className="space-y-12">
      <DeliverablesIntroSection
        service={service}
        deliverableCount={deliverables.length}
        pdpContent={pdpContent}
      />
      <DeliverablesBreakdown
        service={service}
        deliverables={deliverables}
        pdpContent={pdpContent}
      />
      {isDeployService && (
        <ModulesApplicationsSection deployModules={deployModules} />
      )}
    </div>
  );
}
