import type { MouseEvent } from "react";
import { Link } from "react-router-dom";
import { Check, ShoppingCart, TrendingUp, Zap } from "lucide-react";
import { toast } from "sonner";
import { useCart } from "@/contexts/CartContext";
import { initialServices } from "@/data/services";

import { marketplaceCategoryLabels, marketplaceServiceTypeLabels } from "@/data/marketplaceNavigation";

export type ServiceProduct = (typeof initialServices)[number];

type ServiceProductCardProps = {
  service: ServiceProduct;
  displayName?: string;
  featured?: boolean;
  /**
   * full — homepage featured (deliverables list)
   * grid — marketplace catalog (link-first, icon cart)
   * shelf — compact horizontal best-seller tile
   */
  variant?: "full" | "grid" | "shelf";
};

const ServiceProductCard = ({
  service,
  displayName,
  featured = false,
  variant = "grid",
}: ServiceProductCardProps) => {
  const { addItem, hasItem, openCart } = useCart();
  const inCart = hasItem(service.id);
  const rawTitle = displayName ?? service.standardName;
  const isHighImpact = rawTitle.includes("(High-Impact)");
  const title = rawTitle.replace(" (High-Impact)", "");
  const categoryLabel = marketplaceCategoryLabels[service.collection] ?? service.collection;
  const typeLabel = marketplaceServiceTypeLabels[service.serviceType] ?? service.serviceType;
  const detailUrl = `/service/${service.id}`;

  let relatedServiceName = "";
  if (variant === "full" && service.relatedServices && service.relatedServices.length > 0) {
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

  if (variant === "shelf") {
    return (
      <article className="relative flex h-full w-full flex-col rounded-2xl border border-gray-200 bg-white p-4 transition-all duration-300 hover:border-dq-orange hover:shadow-xl">
        {featured && (
          <span className="absolute -top-2 left-3 inline-flex items-center gap-0.5 rounded bg-orange-500 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white">
            <TrendingUp size={9} />
            Top pick
          </span>
        )}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[10px] font-medium uppercase tracking-wide text-gray-400">
              {categoryLabel}
            </span>
            {isHighImpact && (
              <span className="inline-flex items-center gap-0.5 rounded bg-navy-950 px-1 py-0.5 text-[8px] font-bold uppercase tracking-wider text-white">
                <Zap size={8} className="fill-white" />
                High-Impact
              </span>
            )}
          </div>
          {cartButton}
        </div>
        <Link to={detailUrl} className="mt-2 block min-w-0 flex-1 group/title">
          <h3 className="line-clamp-3 text-sm font-semibold leading-snug text-dq-navy group-hover/title:text-dq-orange">
            {title}
          </h3>
          <p className="mt-2 text-sm text-dq-navy">
            <span className="font-bold">{service.price}</span>
            <span className="text-gray-400"> · {service.duration}</span>
          </p>
        </Link>
      </article>
    );
  }

  if (variant === "full") {
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
        <div className="absolute top-3 right-3">{cartButton}</div>

        <Link to={detailUrl} className="flex min-w-0 flex-1 flex-col pr-10 group/card">
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
      </article>
    );
  }

  // grid — default marketplace catalog
  return (
    <article
      className={`group/card relative flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-4 text-left transition-all duration-300 hover:border-dq-orange hover:shadow-xl ${
        featured ? "pt-7" : ""
      }`}
    >
      {featured && (
        <span className="absolute top-2.5 left-3 text-[9px] font-bold uppercase tracking-wide text-orange-600">
          Best seller
        </span>
      )}
      <div className={`absolute top-3 right-3 ${featured ? "top-8" : ""}`}>
        {cartButton}
      </div>

      <Link to={detailUrl} className="flex min-h-0 flex-1 flex-col pr-9">
        <div className="mb-2 flex flex-wrap items-center gap-1.5">
          <span className="text-[10px] font-medium uppercase tracking-wide text-gray-400">
            {categoryLabel}
          </span>
          {isHighImpact && (
            <span className="inline-flex items-center gap-0.5 rounded bg-navy-950 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-white">
              <Zap size={8} className="fill-white" />
              High-Impact
            </span>
          )}
          {!service.badge && !isHighImpact && (
            <span className="text-[10px] text-gray-400">· {typeLabel}</span>
          )}
          {service.badge && (
            <span className="rounded border border-orange-100 bg-orange-50 px-1.5 py-0.5 text-[9px] font-semibold text-orange-700">
              {service.badge}
            </span>
          )}
        </div>
        <h3 className="text-sm font-semibold leading-snug text-dq-navy group-hover/card:text-dq-orange">
          {title}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-gray-500">
          {service.description}
        </p>
        <p className="mt-auto pt-3 text-sm text-dq-navy">
          <span className="font-bold">{service.price}</span>
          <span className="text-gray-400"> · {service.duration}</span>
        </p>
      </Link>
    </article>
  );
};

export default ServiceProductCard;
