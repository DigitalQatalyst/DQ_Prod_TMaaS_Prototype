import { useNavigate } from "react-router-dom";
import { ArrowRight, Zap } from "lucide-react";
import { sectionHeading } from "@/lib/brandAccent";
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
  getDeliverableBreakdown,
  getDeliverablesAtAGlance,
  getDeliverablesForService,
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

function DeliverablesSection({
  service,
  deliverableCount,
  deliverables,
  pdpContent,
}: {
  service: ServiceProduct;
  deliverableCount: number;
  deliverables: readonly string[];
  pdpContent?: PdpContent;
}) {
  const atAGlance = getDeliverablesAtAGlance(service, deliverableCount);
  const items = pdpContent?.deliverables?.length
    ? pdpContent.deliverables
    : getDeliverableBreakdown(service, deliverables);

  return (
    <section aria-labelledby="deliverables-heading">
      <h2 id="deliverables-heading" className={sectionHeading}>
        Deliverables
      </h2>
      <p className="mt-4 text-sm font-medium text-dq-navy">
        <span className="text-gray-500">Duration:</span> {atAGlance.duration}
        <span className="mx-2 text-gray-300" aria-hidden>
          •
        </span>
        <span className="text-gray-500">Scope:</span> {atAGlance.scopeLabel}
      </p>

      <ul className="mt-6 list-none divide-y divide-gray-200 border-t border-gray-200">
        {items.map((item, index) => (
          <li key={item.title} className="py-5 first:pt-5">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-6">
              <span
                aria-hidden
                className="shrink-0 font-mono text-sm font-semibold text-dq-orange"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-dq-navy">{item.title}</p>
                <p className="mt-1 text-sm leading-[1.65] text-[#667085]">
                  {item.description}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
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
      <div className="space-y-10">
        <BundleIncludedSection service={service} />
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <DeliverablesSection
        service={service}
        deliverableCount={deliverables.length}
        deliverables={deliverables}
        pdpContent={pdpContent}
      />
      {isDeployService && (
        <ModulesApplicationsSection deployModules={deployModules} />
      )}
    </div>
  );
}
