import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Info,
  ShoppingCart,
  Sparkles,
  Star,
} from "lucide-react";
import { toast } from "sonner";
import { useCart } from "@/contexts/CartContext";
import { featureFlags } from "@/lib/featureFlags";
import {
  ServiceDetailPrimaryButton,
  ServiceDetailSecondaryButton,
} from "./ServiceDetailButtons";
import { getKeyFeatures, type ServiceProduct } from "./serviceDetailHelpers";

const WHAT_HAPPENS_NEXT_STEPS = [
  {
    num: "01",
    title: "Request Submitted",
    body: "You submit your request through TMaaS.",
  },
  {
    num: "02",
    title: "DQ Advisor Review",
    body: "A DQ advisor reviews your submission and gets back to you.",
  },
  {
    num: "03",
    title: "Scope Confirmed",
    body: "Together, we confirm the right approach for your organisation.",
  },
  {
    num: "04",
    title: "Proposal Shared",
    body: "You receive a proposal with timelines and pricing.",
  },
  {
    num: "05",
    title: "Delivery Begins",
    body: "Your TMaaS engagement kicks off.",
  },
] as const;

interface ServiceDetailSidebarProps {
  service: ServiceProduct;
  requiresQuoteCTA: boolean;
  isDeployService: boolean;
  designServiceObj: ServiceProduct | null | undefined;
  bundleServiceObj: ServiceProduct | null | undefined;
  baseSolutionName: string;
  onRequestQuote: () => void;
  onStartOnboarding: (name: string) => void;
}

const sidebarCardClass =
  "rounded-xl border border-gray-200 bg-white p-6 shadow-[var(--shadow-card)]";

export function ServiceDetailSidebar({
  service,
  requiresQuoteCTA,
  isDeployService,
  designServiceObj,
  bundleServiceObj,
  baseSolutionName,
  onRequestQuote,
  onStartOnboarding,
}: ServiceDetailSidebarProps) {
  const navigate = useNavigate();
  const { addItem, hasItem, openCart } = useCart();
  const keyFeatures = getKeyFeatures(service);

  return (
    <aside className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
      <article className={sidebarCardClass}>
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-400">
          Service Package
        </p>
        <p className="mt-2 text-3xl font-semibold tracking-tight text-dq-navy">
          {service.price}
        </p>
        <p className="mt-1 text-sm text-gray-500">{service.duration}</p>

        <ul className="mt-6 space-y-3 border-t border-gray-100 pt-6">
          {[
            "SLA-backed delivery",
            "Included specialists",
            "Governance assurance",
          ].map((item) => (
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
          {isDeployService && designServiceObj && bundleServiceObj ? (
            <div className="space-y-3">
              <div className="flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50 p-4">
                <Info className="mt-0.5 shrink-0 text-blue-500" size={16} />
                <div>
                  <h4 className="text-xs font-semibold text-dq-navy">Prerequisite</h4>
                  <p className="mt-1 text-[11px] leading-relaxed text-gray-600">
                    Requires{" "}
                    <span className="font-semibold text-dq-navy">
                      {baseSolutionName} Design
                    </span>{" "}
                    before deployment.
                  </p>
                </div>
              </div>
              <ServiceDetailPrimaryButton
                fullWidth
                className="group"
                onClick={() => navigate(`/service/${designServiceObj.id}`)}
              >
                View Design Service
                <ArrowRight
                  size={14}
                  className="transition group-hover:translate-x-0.5"
                />
              </ServiceDetailPrimaryButton>
              <ServiceDetailSecondaryButton
                fullWidth
                className="text-xs"
                onClick={() => navigate(`/service/${bundleServiceObj.id}`)}
              >
                Or Get the Full Bundle
              </ServiceDetailSecondaryButton>
            </div>
          ) : requiresQuoteCTA || !featureFlags.isEnabled("cart") ? (
            <ServiceDetailPrimaryButton
              fullWidth
              className="group"
              onClick={onRequestQuote}
            >
              Request Quote
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
                    In cart — add another
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

      <article className={sidebarCardClass}>
        <h3 className="flex items-center gap-2 text-sm font-semibold text-dq-navy">
          <Star size={16} className="text-violet-600" aria-hidden />
          Key Features &amp; Capabilities
        </h3>
        <ul className="mt-4 space-y-2.5">
          {keyFeatures.slice(0, 6).map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2.5 text-[13px] leading-relaxed text-gray-600"
            >
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-dq-orange"
                aria-hidden
              />
              {feature}
            </li>
          ))}
        </ul>
      </article>

      <article className={sidebarCardClass}>
        <h3 className="text-sm font-semibold text-dq-navy">What Happens Next?</h3>
        <ol className="mt-4 space-y-4">
          {WHAT_HAPPENS_NEXT_STEPS.map((step) => (
            <li key={step.num} className="flex gap-3">
              <span className="w-6 shrink-0 font-mono text-xs font-semibold text-dq-navy/25">
                {step.num}
              </span>
              <div className="min-w-0">
                <p className="text-[13px] font-semibold text-dq-navy">{step.title}</p>
                <p className="mt-0.5 text-[12px] leading-relaxed text-gray-500">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </article>
    </aside>
  );
}
