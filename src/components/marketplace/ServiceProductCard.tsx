import type { MouseEvent } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, ShoppingCart, TrendingUp, Zap } from "lucide-react";
import { toast } from "sonner";
import { useCart } from "@/contexts/CartContext";
import { initialServices } from "@/data/services";

import { marketplaceCategoryLabels } from "@/data/marketplaceNavigation";
import { featureFlags } from "@/lib/featureFlags";
import { getServiceIcon } from "@/components/marketplace/marketplaceServiceIcons";

export type ServiceProduct = (typeof initialServices)[number];

type ServiceProductCardProps = {
  service: ServiceProduct;
  displayName?: string;
  featured?: boolean;
  /**
   * full — homepage featured (deliverables list)
   * grid — marketplace catalog (link-first)
   * list — marketplace catalog horizontal row
   * shelf — compact horizontal best-seller tile
   */
  variant?: "full" | "grid" | "list" | "shelf";
};

const ServiceProductCard = ({
  service,
  displayName,
  featured = false,
  variant = "grid",
}: ServiceProductCardProps) => {
  const rawTitle = displayName ?? service.standardName;
  const isHighImpact = rawTitle.includes("(High-Impact)");
  const title = rawTitle.replace(" (High-Impact)", "");
  const categoryLabel = marketplaceCategoryLabels[service.collection] ?? service.collection;
  const detailUrl = `/service/${service.id}`;
  const canViewDetail = featureFlags.isEnabled("serviceDetail");
  const canUseCart = featureFlags.isEnabled("cart");
  const ServiceIcon = getServiceIcon(service.collection, service.serviceType);

  if (variant === "list") {
    const inner = (
      <>
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy-500">
          <ServiceIcon size={20} strokeWidth={1.75} />
        </div>
        <div className="min-w-0 flex-1">
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-navy-400">
            {categoryLabel}
          </span>
          <h3 className="mt-1.5 text-[15px] font-semibold leading-snug text-dq-navy group-hover/card:text-dq-orange">
            {title}
          </h3>
          <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-gray-500">
            {service.description}
          </p>
          <p className="mt-3 text-sm text-dq-navy">
            <span className="font-semibold">{service.price}</span>
            <span className="text-gray-400"> · {service.duration}</span>
          </p>
        </div>
        {canViewDetail && (
          <span className="flex h-8 w-8 shrink-0 items-center justify-center self-center rounded-full bg-navy-50 text-navy-500 transition-colors group-hover/card:bg-navy-100">
            <ArrowRight size={15} strokeWidth={2} />
          </span>
        )}
      </>
    );

    return (
      <article className="group/card rounded-xl bg-white p-5 shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-elevated)]">
        {canViewDetail ? (
          <Link to={detailUrl} className="flex items-start gap-5">
            {inner}
          </Link>
        ) : (
          <div className="flex items-start gap-5">{inner}</div>
        )}
      </article>
    );
  }

  if (variant === "shelf") {
    return (
      <article className="relative flex h-full w-full min-h-[220px] flex-col rounded-xl bg-white p-6 shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-elevated)]">
        {featured && (
          <span className="absolute -top-2 left-4 inline-flex items-center gap-0.5 rounded bg-dq-orange px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white">
            <TrendingUp size={9} />
            Top pick
          </span>
        )}
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-navy-50 text-navy-500">
          <ServiceIcon size={18} strokeWidth={1.75} />
        </div>
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-navy-400">
            {categoryLabel}
          </span>
          {isHighImpact && (
            <span className="inline-flex items-center gap-0.5 rounded bg-navy-950 px-1 py-0.5 text-[8px] font-bold uppercase tracking-wider text-white">
              <Zap size={8} className="fill-white" />
              High-Impact
            </span>
          )}
        </div>
        {canViewDetail ? (
          <Link to={detailUrl} className="mt-3 block min-w-0 flex-1 group/title">
            <h3 className="line-clamp-3 text-sm font-semibold leading-relaxed text-dq-navy group-hover/title:text-dq-orange">
              {title}
            </h3>
            <p className="mt-4 text-sm text-dq-navy">
              <span className="font-semibold">{service.price}</span>
              <span className="text-gray-400"> · {service.duration}</span>
            </p>
          </Link>
        ) : (
          <div className="mt-3 min-w-0 flex-1">
            <h3 className="line-clamp-3 text-sm font-semibold leading-relaxed text-dq-navy">
              {title}
            </h3>
            <p className="mt-4 text-sm text-dq-navy">
              <span className="font-semibold">{service.price}</span>
              <span className="text-gray-400"> · {service.duration}</span>
            </p>
          </div>
        )}
      </article>
    );
  }

  if (variant === "grid") {
    const gridInner = (
      <>
        <div className={`mb-4 flex items-start gap-3 ${featured ? "mt-1" : ""}`}>
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-dq-orange">
            <ServiceIcon size={20} strokeWidth={1.75} />
          </div>
          <h3 className="min-w-0 flex-1 text-base font-semibold leading-snug text-dq-navy group-hover/card:text-dq-orange">
            {title}
          </h3>
        </div>
        <p className="line-clamp-3 flex-1 text-sm leading-snug text-gray-500">
          {service.description}
        </p>
        <div className="mt-auto space-y-3 pt-5">
          <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-gray-400">
            {categoryLabel}
          </span>
          <div className="flex items-center justify-between">
            <p className="text-sm text-dq-navy">
              <span className="font-semibold">{service.price}</span>
              <span className="text-gray-400"> · {service.duration}</span>
            </p>
            {canViewDetail && (
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-50 text-dq-orange transition-colors group-hover/card:bg-orange-100">
                <ArrowRight size={15} strokeWidth={2} />
              </span>
            )}
          </div>
        </div>
      </>
    );

    return (
      <article
        className={`group/card relative flex h-full min-h-[320px] flex-col rounded-xl bg-white p-6 text-left shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-elevated)] ${
          featured ? "pt-8" : ""
        }`}
      >
        {featured && (
          <span className="absolute top-3.5 left-6 text-[9px] font-bold uppercase tracking-wide text-dq-orange">
            Best seller
          </span>
        )}

        {canViewDetail ? (
          <Link to={detailUrl} className="flex min-h-0 flex-1 flex-col">
            {gridInner}
          </Link>
        ) : (
          <div className="flex min-h-0 flex-1 flex-col">{gridInner}</div>
        )}
      </article>
    );
  }

  // full — homepage featured (keeps add-to-cart)
  return (
    <FullServiceProductCard
      service={service}
      title={title}
      categoryLabel={categoryLabel}
      isHighImpact={isHighImpact}
      featured={featured}
      detailUrl={detailUrl}
      canViewDetail={canViewDetail}
      canUseCart={canUseCart}
    />
  );
};

type FullCardProps = {
  service: ServiceProduct;
  title: string;
  categoryLabel: string;
  isHighImpact: boolean;
  featured: boolean;
  detailUrl: string;
  canViewDetail: boolean;
  canUseCart: boolean;
};

const FullServiceProductCard = ({
  service,
  title,
  categoryLabel,
  isHighImpact,
  featured,
  detailUrl,
  canViewDetail,
  canUseCart,
}: FullCardProps) => {
  const { addItem, hasItem, openCart } = useCart();
  const inCart = hasItem(service.id);

  let relatedServiceName = "";
  if (service.relatedServices && service.relatedServices.length > 0) {
    const relatedId = service.relatedServices[0];
    const relatedSvc = initialServices.find((s) => s.id === relatedId);
    if (relatedSvc) relatedServiceName = relatedSvc.standardName;
  }

  const handleAddToCart = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(service.id);
    toast.success("Added to cart", {
      description: title,
      action: { label: "View cart", onClick: openCart },
    });
  };

  const cartButton = (
    <button
      type="button"
      onClick={handleAddToCart}
      aria-label={inCart ? `${title} in cart` : `Add ${title} to cart`}
      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition ${
        inCart
          ? "border-orange-200 bg-orange-50 text-dq-orange"
          : "border-gray-200 bg-white text-gray-500 hover:border-dq-orange hover:text-dq-navy"
      }`}
    >
      {inCart ? <Check size={15} strokeWidth={2.5} /> : <ShoppingCart size={15} />}
    </button>
  );

  return (
    <article
      className={`relative flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-5 text-left transition-all duration-300 hover:border-dq-orange hover:shadow-xl ${
        featured ? "pt-8" : ""
      }`}
    >
      {featured && (
        <span className="absolute top-3 left-4 inline-flex items-center gap-1 rounded-full bg-orange-500 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
          <TrendingUp size={10} />
          Best seller
        </span>
      )}
      {canUseCart && <div className="absolute top-3 right-3">{cartButton}</div>}

      {canViewDetail ? (
      <Link to={detailUrl} className={`flex min-w-0 flex-1 flex-col group/card ${canUseCart ? "pr-10" : ""}`}>
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="rounded bg-slate-100 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-slate-600">
            {categoryLabel}
          </span>
          {isHighImpact && (
            <span className="inline-flex items-center gap-1 rounded bg-navy-950 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
              <Zap size={9} className="fill-white" />
              High-Impact
            </span>
          )}
          {service.badge && (
            <span className="rounded border border-orange-100 bg-orange-50 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-orange-700">
              {service.badge}
            </span>
          )}
        </div>
        <h3 className="text-[15px] font-semibold leading-snug text-dq-navy group-hover/card:text-dq-orange">
          {title}
        </h3>
        <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-gray-500">
          {service.description}
        </p>
        <div className="mt-4 border-t border-slate-100 pt-3">
          <ul className="space-y-1.5">
            {service.features.slice(0, 3).map((feat) => (
              <li
                key={feat}
                className="flex items-start gap-2 text-[11px] text-gray-600 leading-tight"
              >
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-400" />
                {feat}
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-auto pt-4 text-sm text-dq-navy">
          <span className="font-bold">{service.price}</span>
          <span className="text-gray-400"> · {service.duration}</span>
          <span className="ml-2 text-xs font-medium text-dq-orange group-hover/card:underline">
            View details
          </span>
        </p>
        {relatedServiceName && (
          <div className="mt-3 border-t border-slate-100 pt-3">
            <p className="text-[10px] text-gray-500">
              <span className="font-semibold text-navy-950">Often paired with:</span> {relatedServiceName}
            </p>
          </div>
        )}
      </Link>
      ) : (
      <div className={`flex min-w-0 flex-1 flex-col ${canUseCart ? "pr-10" : ""}`}>
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="rounded bg-slate-100 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-slate-600">
            {categoryLabel}
          </span>
          {isHighImpact && (
            <span className="inline-flex items-center gap-1 rounded bg-navy-950 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
              <Zap size={9} className="fill-white" />
              High-Impact
            </span>
          )}
          {service.badge && (
            <span className="rounded border border-orange-100 bg-orange-50 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-orange-700">
              {service.badge}
            </span>
          )}
        </div>
        <h3 className="text-[15px] font-semibold leading-snug text-dq-navy">{title}</h3>
        <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-gray-500">
          {service.description}
        </p>
        <div className="mt-4 border-t border-slate-100 pt-3">
          <ul className="space-y-1.5">
            {service.features.slice(0, 3).map((feat) => (
              <li
                key={feat}
                className="flex items-start gap-2 text-[11px] leading-tight text-gray-600"
              >
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-400" />
                {feat}
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-auto pt-4 text-sm text-dq-navy">
          <span className="font-bold">{service.price}</span>
          <span className="text-gray-400"> · {service.duration}</span>
        </p>
        {relatedServiceName && (
          <div className="mt-3 border-t border-slate-100 pt-3">
            <p className="text-[10px] text-gray-500">
              <span className="font-semibold text-navy-950">Often paired with:</span> {relatedServiceName}
            </p>
          </div>
        )}
      </div>
      )}
    </article>
  );
};

export default ServiceProductCard;
