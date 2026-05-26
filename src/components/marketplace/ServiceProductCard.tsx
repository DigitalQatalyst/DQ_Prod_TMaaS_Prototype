import type { MouseEvent } from "react";
import { Link } from "react-router-dom";
import { Check, ShoppingCart, TrendingUp } from "lucide-react";
import { toast } from "sonner";
import { useCart } from "@/contexts/CartContext";
import { initialServices } from "@/data/services";

import { marketplaceCategoryLabels } from "@/data/marketplaceNavigation";

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
  const title = displayName ?? service.standardName;
  const categoryLabel = marketplaceCategoryLabels[service.collection] ?? service.collection;
  const detailUrl = `/service/${service.id}`;

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
          ? "border-orange-200 bg-orange-50 text-orange-600"
          : "border-navy-100 bg-white text-gray-500 hover:border-navy-200 hover:text-navy-950"
      }`}
    >
      {inCart ? <Check size={15} strokeWidth={2.5} /> : <ShoppingCart size={15} />}
    </button>
  );

  if (variant === "shelf") {
    return (
      <article className="relative flex h-full w-[min(260px,85vw)] shrink-0 flex-col rounded-xl border border-navy-100 bg-white p-4 shadow-sm transition hover:border-navy-200 hover:shadow-md sm:w-full sm:shrink">
        {featured && (
          <span className="absolute -top-2 left-3 inline-flex items-center gap-0.5 rounded bg-orange-500 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white">
            <TrendingUp size={9} />
            Top pick
          </span>
        )}
        <div className="flex items-start justify-between gap-2">
          <span className="text-[10px] font-medium uppercase tracking-wide text-gray-400">
            {categoryLabel}
          </span>
          {cartButton}
        </div>
        <Link to={detailUrl} className="mt-2 block min-w-0 flex-1 group/title">
          <h3 className="text-sm font-semibold leading-snug text-navy-950 group-hover/title:text-orange-600 line-clamp-2">
            {title}
          </h3>
          <p className="mt-2 text-sm text-navy-950">
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
        className={`relative flex h-full flex-col rounded-xl border border-navy-100 bg-white p-5 text-left shadow-sm transition hover:border-navy-200 hover:shadow-md ${
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
            {service.badge && (
              <span className="rounded border border-orange-100 bg-orange-50 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-orange-700">
                {service.badge}
              </span>
            )}
          </div>
          <h3 className="text-[15px] font-bold leading-snug text-navy-950 group-hover/card:text-orange-600">
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
          <p className="mt-auto pt-4 text-sm text-navy-950">
            <span className="font-bold">{service.price}</span>
            <span className="text-gray-400"> · {service.duration}</span>
            <span className="ml-2 text-xs font-medium text-orange-600 group-hover/card:underline">
              View details
            </span>
          </p>
        </Link>
      </article>
    );
  }

  // grid — default marketplace catalog
  return (
    <article
      className={`group/card relative flex h-full flex-col rounded-xl border border-navy-100 bg-white p-4 text-left shadow-sm transition hover:border-navy-200 hover:shadow-md ${
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
          {!service.badge && (
            <span className="text-[10px] text-gray-400">· {service.serviceType}</span>
          )}
          {service.badge && (
            <span className="rounded border border-orange-100 bg-orange-50 px-1.5 py-0.5 text-[9px] font-semibold text-orange-700">
              {service.badge}
            </span>
          )}
        </div>
        <h3 className="text-sm font-semibold leading-snug text-navy-950 group-hover/card:text-orange-600">
          {title}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-gray-500">
          {service.description}
        </p>
        <p className="mt-auto pt-3 text-sm text-navy-950">
          <span className="font-bold">{service.price}</span>
          <span className="text-gray-400"> · {service.duration}</span>
        </p>
      </Link>
    </article>
  );
};

export default ServiceProductCard;
