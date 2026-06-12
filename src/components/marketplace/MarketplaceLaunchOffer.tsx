import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { useServiceDetail } from "@/hooks/useServiceDetail";
import {
  LAUNCH_ADVISORY_CARD_COPY,
  LAUNCH_ADVISORY_CTA_LABEL,
  LAUNCH_ADVISORY_DISPLAY_TITLE,
  LAUNCH_ADVISORY_EYEBROW,
  LAUNCH_ADVISORY_HEADLINE,
  LAUNCH_ADVISORY_PRICE_DISPLAY,
  LAUNCH_ADVISORY_SERVICE_ID,
  LAUNCH_ADVISORY_SUBCOPY,
  buildLaunchAdvisoryContactPath,
} from "@/lib/launchOffering";
import { btnPrimary } from "@/lib/brandAccent";
import { cn } from "@/lib/utils";
import { featureFlags } from "@/lib/featureFlags";

const MarketplaceLaunchOffer = () => {
  const { data: service } = useServiceDetail(LAUNCH_ADVISORY_SERVICE_ID);
  const contactPath = buildLaunchAdvisoryContactPath();
  const detailPath = `/service/${LAUNCH_ADVISORY_SERVICE_ID}`;
  const canViewDetail = featureFlags.isEnabled("serviceDetail");
  const canContact = featureFlags.isEnabled("contactUs");

  if (!canContact) return null;

  return (
    <section
      aria-labelledby="marketplace-launch-offer-heading"
      className="mb-10 overflow-hidden rounded-2xl border border-dq-orange/20 bg-gradient-to-br from-orange-50/80 via-white to-white shadow-sm"
    >
      <div className="grid gap-8 p-6 md:grid-cols-[1.2fr_1fr] md:items-center md:p-8 lg:gap-10">
        <div>
          <p className="dq-eyebrow">{LAUNCH_ADVISORY_EYEBROW}</p>
          <h2
            id="marketplace-launch-offer-heading"
            className="mt-4 text-3xl font-semibold tracking-tight text-dq-navy md:text-4xl"
          >
            {LAUNCH_ADVISORY_HEADLINE}
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-gray-600">
            {LAUNCH_ADVISORY_SUBCOPY}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link to={contactPath} className={cn(btnPrimary, "w-full sm:w-auto")}>
              {LAUNCH_ADVISORY_CTA_LABEL}
              <ArrowRight size={16} />
            </Link>
            {canViewDetail && (
              <Link
                to={detailPath}
                className="text-center text-sm font-semibold text-dq-navy transition-colors hover:text-dq-orange sm:text-left"
              >
                View service details
              </Link>
            )}
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-card">
          <div className="mb-4 flex items-start justify-between gap-3">
            <span className="inline-flex items-center gap-1 rounded-full bg-dq-orange/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-dq-orange">
              <Sparkles size={11} aria-hidden />
              {LAUNCH_ADVISORY_EYEBROW}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-gray-400">
              Assessment
            </span>
          </div>
          <h3 className="text-xl font-semibold tracking-tight text-dq-navy">
            {LAUNCH_ADVISORY_DISPLAY_TITLE}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-gray-600">
            {service?.positioning ?? LAUNCH_ADVISORY_CARD_COPY}
          </p>
          <div className="mt-5 flex items-baseline justify-between gap-4 border-t border-gray-100 pt-4">
            <div>
              <p className="text-2xl font-semibold text-dq-navy">{LAUNCH_ADVISORY_PRICE_DISPLAY}</p>
              <p className="text-sm text-gray-500">{service?.duration ?? "Variable"}</p>
            </div>
            {canViewDetail ? (
              <Link
                to={detailPath}
                className="inline-flex items-center gap-1 text-sm font-semibold text-dq-orange transition-all hover:gap-2"
              >
                Learn more
                <ArrowRight size={14} />
              </Link>
            ) : (
              <Link
                to={contactPath}
                className="inline-flex items-center gap-1 text-sm font-semibold text-dq-orange transition-all hover:gap-2"
              >
                {LAUNCH_ADVISORY_CTA_LABEL}
                <ArrowRight size={14} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketplaceLaunchOffer;
