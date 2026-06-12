import { ArrowRight, Check, CheckCircle2, ShoppingCart, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { useCart } from "@/contexts/CartContext";
import { featureFlags } from "@/lib/featureFlags";
import { cn } from "@/lib/utils";
import { ServiceDetailPrimaryButton } from "./ServiceDetailButtons";
import {
  formatPackagePrice,
  servicePackageCardClass,
  type ServiceProduct,
} from "./serviceDetailHelpers";

const DEFAULT_PACKAGE_FEATURES = [
  "SLA-backed delivery",
  "Expert team included",
  "Clear delivery milestones",
] as const;

interface ServicePackageCardProps {
  service: ServiceProduct;
  primaryCtaLabel: string;
  onPrimaryCta: () => void;
  onStartOnboarding: (name: string) => void;
  packageHighlights?: string[];
  className?: string;
}

export function ServicePackageCard({
  service,
  primaryCtaLabel,
  onPrimaryCta,
  onStartOnboarding,
  packageHighlights,
  className,
}: ServicePackageCardProps) {
  const features =
    packageHighlights?.length ? packageHighlights : DEFAULT_PACKAGE_FEATURES;
  const { addItem, hasItem, openCart } = useCart();

  return (
    <article className={cn(servicePackageCardClass, className)}>
      <p className="text-2xl font-semibold tracking-tight text-dq-navy">
        {formatPackagePrice(service.price)}
      </p>
      <p className="mt-1 text-sm text-gray-500">{service.duration}</p>

      <ul className="mt-6 space-y-3 border-t border-gray-100 pt-6">
        {features.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
            <CheckCircle2
              size={16}
              className="mt-0.5 shrink-0 text-dq-orange"
              aria-hidden
            />
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-6">
        {service.serviceType === "bundle" || !featureFlags.isEnabled("cart") ? (
          <ServiceDetailPrimaryButton
            fullWidth
            className="group"
            onClick={onPrimaryCta}
          >
            {primaryCtaLabel}
            <ArrowRight
              size={16}
              className="transition group-hover:translate-x-0.5"
            />
          </ServiceDetailPrimaryButton>
        ) : (
          <div className="space-y-2.5">
            <button
              type="button"
              className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dq-orange focus-visible:ring-offset-2 ${
                hasItem(service.id)
                  ? "border border-orange-200 bg-orange-50 text-orange-700 hover:bg-orange-100"
                  : "bg-dq-orange text-white hover:bg-[#E04020] glow-orange"
              }`}
              onClick={() => {
                addItem(service.id);
                toast.success("Added to cart", {
                  description: service.standardName,
                  action: { label: "View cart", onClick: openCart },
                });
              }}
            >
              {hasItem(service.id) ? (
                <>
                  <Check size={16} />
                  In cart, add another
                </>
              ) : (
                <>
                  <ShoppingCart size={16} />
                  Add to cart
                </>
              )}
            </button>
            {featureFlags.isEnabled("chatAssistant") && (
              <button
                type="button"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-dq-navy px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-dq-navy/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dq-orange focus-visible:ring-offset-2"
                onClick={() => onStartOnboarding(service.standardName)}
              >
                <Sparkles size={16} className="text-orange-400" />
                Ask AI
              </button>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
