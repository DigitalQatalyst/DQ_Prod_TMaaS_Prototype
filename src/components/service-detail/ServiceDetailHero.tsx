import { Clock, Users, Zap } from "lucide-react";
import { getServiceIcon } from "@/components/marketplace/marketplaceServiceIcons";
import { marketplaceServiceTypeLabels } from "@/data/marketplaceNavigation";
import { ServicePackageCard } from "./ServicePackageCard";
import {
  getCategoryShortLabel,
  getCollectionAccent,
  getDisplayTitle,
  type ServiceProduct,
} from "./serviceDetailHelpers";

interface ServiceDetailHeroProps {
  service: ServiceProduct;
  requiresQuoteCTA: boolean;
  onRequestQuote: () => void;
  onStartOnboarding: (name: string) => void;
}

export function ServiceDetailHero({
  service,
  requiresQuoteCTA,
  onRequestQuote,
  onStartOnboarding,
}: ServiceDetailHeroProps) {
  const title = getDisplayTitle(service.standardName);
  const categoryLabel = getCategoryShortLabel(service.collection);
  const accent = getCollectionAccent(service.collection);
  const ServiceIcon = getServiceIcon(service.collection, service.serviceType);
  const isHighImpact = service.standardName.includes("(High-Impact)");
  const typeLabel =
    marketplaceServiceTypeLabels[service.serviceType] || service.serviceType;

  return (
    <div>
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-10 xl:grid-cols-[minmax(0,1fr)_340px] xl:gap-12">
        <div className="min-w-0">
          <h1 className="animate-fade-in-up text-balance text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-dq-navy sm:text-4xl md:text-5xl">
            {title}
          </h1>

          <div className="animate-fade-in-up animation-delay-100 mt-4 flex flex-wrap items-center gap-2">
            <span
              className={`inline-flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] ${accent.badge}`}
            >
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-xl ${accent.iconBg}`}
              >
                <ServiceIcon size={16} className={accent.icon} strokeWidth={1.75} />
              </span>
              {categoryLabel}
            </span>
            <span className="rounded-full bg-gray-100 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-600">
              {typeLabel}
            </span>
            {isHighImpact && (
              <span className="inline-flex items-center gap-1 rounded-full bg-dq-navy px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                <Zap size={10} className="fill-white" />
                High-Impact
              </span>
            )}
          </div>

          <p className="animate-fade-in-up animation-delay-200 mt-5 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
            {service.description}
          </p>

          <div className="animate-fade-in-up animation-delay-300 mt-5 flex flex-col gap-2 text-sm text-gray-600 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-2">
            <span className="inline-flex items-center gap-1.5">
              <Clock size={14} className="shrink-0 text-gray-400" strokeWidth={1.75} aria-hidden />
              <span>
                <span className="text-gray-400">Timeline</span>{" "}
                <span className="font-medium text-dq-navy">{service.duration}</span>
              </span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Users size={14} className="shrink-0 text-gray-400" strokeWidth={1.75} aria-hidden />
              <span>
                <span className="text-gray-400">Ideal for</span>{" "}
                <span className="font-medium text-dq-navy">{service.audience}</span>
              </span>
            </span>
          </div>
        </div>

        <div className="animate-fade-in-up animation-delay-200 lg:sticky lg:top-24 lg:self-start">
          <ServicePackageCard
            service={service}
            requiresQuoteCTA={requiresQuoteCTA}
            onRequestQuote={onRequestQuote}
            onStartOnboarding={onStartOnboarding}
          />
        </div>
      </div>
    </div>
  );
}
