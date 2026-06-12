import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import LaunchAdvisoryIllustration from "@/components/marketplace/LaunchAdvisoryIllustration";
import {
  LAUNCH_ADVISORY_CTA_LABEL,
  LAUNCH_ADVISORY_EYEBROW,
  LAUNCH_ADVISORY_HEADLINE,
  LAUNCH_ADVISORY_SUBCOPY,
  buildLaunchAdvisoryContactPath,
} from "@/lib/launchOffering";
import { btnPrimary } from "@/lib/brandAccent";
import { cn } from "@/lib/utils";
import { featureFlags } from "@/lib/featureFlags";

const MarketplaceLaunchOffer = () => {
  const contactPath = buildLaunchAdvisoryContactPath();

  if (!featureFlags.isEnabled("contactUs")) return null;

  return (
    <section
      aria-labelledby="marketplace-launch-offer-heading"
      className="relative mb-12 overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-sm"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-orange-50/70 via-white to-[#f4f7fb]"
      />
      <div
        aria-hidden
        className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-dq-orange/[0.07] blur-3xl"
      />

      <div className="relative grid items-center gap-8 p-6 md:grid-cols-[1fr_auto] md:gap-10 md:p-8 lg:grid-cols-[1.15fr_0.85fr] lg:p-10">
        <div className="min-w-0">
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
          <div className="mt-7">
            <Link to={contactPath} className={cn(btnPrimary, "w-full sm:w-auto")}>
              {LAUNCH_ADVISORY_CTA_LABEL}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <LaunchAdvisoryIllustration />
        </div>
      </div>
    </section>
  );
};

export default MarketplaceLaunchOffer;
