import { Users, Zap } from "lucide-react";
import { ServicePackageCard } from "./ServicePackageCard";
import {
  BUNDLE_PDP_SUBTITLE,
  getCategoryShortLabel,
  getPdpDisplayTitle,
  getPdpTypeBadgeLabel,
  type ServiceProduct,
} from "./serviceDetailHelpers";

interface ServiceDetailHeroProps {
  service: ServiceProduct;
  primaryCtaLabel: string;
  onPrimaryCta: () => void;
  onStartOnboarding: (name: string) => void;
  packageHighlights?: string[];
}

export function ServiceDetailHero({
  service,
  primaryCtaLabel,
  onPrimaryCta,
  onStartOnboarding,
  packageHighlights,
}: ServiceDetailHeroProps) {
  const title = getPdpDisplayTitle(service.standardName, service.serviceType);
  const categoryLabel = getCategoryShortLabel(service.collection);
  const isHighImpact = service.standardName.includes("(High-Impact)");
  const typeLabel = getPdpTypeBadgeLabel(service.serviceType, service.badge);
  const isBundle = service.serviceType === "bundle";

  return (
    <div>
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-10 xl:grid-cols-[minmax(0,1fr)_340px] xl:gap-12">
        <div className="min-w-0">
          <h1 className="animate-fade-in-up text-balance text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-dq-navy sm:text-4xl md:text-5xl">
            {title}
          </h1>

          <div className="animate-fade-in-up animation-delay-100 mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-gray-600">
            <span className="font-medium text-dq-navy">{categoryLabel}</span>
            <span className="text-gray-300" aria-hidden>
              •
            </span>
            <span>{typeLabel}</span>
            {isHighImpact && (
              <>
                <span className="text-gray-300" aria-hidden>
                  •
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-dq-navy px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                  <Zap size={10} className="fill-white" />
                  High-Impact
                </span>
              </>
            )}
          </div>

          {isBundle ? (
            <p className="animate-fade-in-up animation-delay-200 mt-3 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
              {BUNDLE_PDP_SUBTITLE}
            </p>
          ) : null}

          <p
            className={`animate-fade-in-up animation-delay-200 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg ${isBundle ? "mt-4" : "mt-5"}`}
          >
            {service.description}
          </p>

          <div className="animate-fade-in-up animation-delay-300 mt-5 text-sm text-gray-600">
            <span className="inline-flex items-center gap-1.5">
              <Users size={14} className="shrink-0 text-gray-400" strokeWidth={1.75} aria-hidden />
              <span>
                <span className="text-gray-500">Ideal for:</span>{" "}
                <span className="font-medium text-dq-navy">{service.audience}</span>
              </span>
            </span>
          </div>
        </div>

        <div className="animate-fade-in-up animation-delay-200 lg:sticky lg:top-24 lg:self-start">
          <ServicePackageCard
            service={service}
            primaryCtaLabel={primaryCtaLabel}
            onPrimaryCta={onPrimaryCta}
            onStartOnboarding={onStartOnboarding}
            packageHighlights={packageHighlights}
          />
        </div>
      </div>
    </div>
  );
}
