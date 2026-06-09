import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, Clock, Zap } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { getServiceIcon } from "@/components/marketplace/marketplaceServiceIcons";
import { marketplaceServiceTypeLabels } from "@/data/marketplaceNavigation";
import {
  ServiceDetailPrimaryButton,
  ServiceDetailSecondaryButton,
} from "./ServiceDetailButtons";
import {
  getCategoryShortLabel,
  getCollectionAccent,
  getDisplayTitle,
  type ServiceProduct,
} from "./serviceDetailHelpers";

interface ServiceDetailHeroProps {
  service: ServiceProduct;
  onRequestQuote: () => void;
  onBookConsultation: () => void;
}

export function ServiceDetailHero({
  service,
  onRequestQuote,
  onBookConsultation,
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
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link
                to="/marketplace"
                className="text-xs font-medium text-gray-500 transition-colors hover:text-dq-navy"
              >
                Marketplace
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <ChevronRight size={12} className="text-gray-300" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link
                to={`/marketplace?collection=${service.collection}`}
                className="text-xs font-medium text-gray-500 transition-colors hover:text-dq-navy"
              >
                {categoryLabel}
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <ChevronRight size={12} className="text-gray-300" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage className="max-w-[240px] truncate text-xs font-medium text-dq-navy sm:max-w-none">
              {title}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mb-5 flex flex-wrap items-center gap-2">
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

      <h1 className="text-balance text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-dq-navy sm:text-4xl md:text-5xl">
        {title}
      </h1>

      <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
        {service.description}
      </p>

      <div className="mt-6 flex items-center gap-2 text-sm">
        <Clock size={15} className="text-dq-orange" aria-hidden />
        <span className="text-gray-500">Timeline</span>
        <span className="font-semibold text-dq-navy">{service.duration}</span>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <ServiceDetailPrimaryButton
          className="group w-full sm:w-auto"
          onClick={onRequestQuote}
        >
          Request Quote
          <ArrowRight
            size={16}
            className="transition group-hover:translate-x-0.5"
          />
        </ServiceDetailPrimaryButton>
        <ServiceDetailSecondaryButton
          className="w-full sm:w-auto"
          onClick={onBookConsultation}
        >
          Book a Consultation
        </ServiceDetailSecondaryButton>
      </div>
    </div>
  );
}
