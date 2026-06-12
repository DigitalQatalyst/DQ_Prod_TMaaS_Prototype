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
  const canContact = featureFlags.isEnabled("contactUs");

  if (!canContact) return null;

  return (
    <section
      aria-labelledby="marketplace-launch-offer-heading"
      className="relative mb-12 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-card"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0"
        style={{ background: "var(--mesh-hero-light)" }}
      />
      <div
        aria-hidden
        className="hero-grid pointer-events-none absolute inset-0 -z-0 opacity-30"
      />

      <div className="relative z-10 grid lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
        <div className="flex flex-col justify-center px-6 py-10 md:px-10 md:py-12 lg:py-14">
          <p className="dq-eyebrow">{LAUNCH_ADVISORY_EYEBROW}</p>
          <h2
            id="marketplace-launch-offer-heading"
            className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-dq-navy md:text-4xl lg:text-[2.5rem] lg:leading-[1.1]"
          >
            {LAUNCH_ADVISORY_HEADLINE}
          </h2>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-gray-600 md:text-base">
            {LAUNCH_ADVISORY_SUBCOPY}
          </p>
          <div className="mt-8">
            <Link to={contactPath} className={cn(btnPrimary, "group w-full sm:w-auto")}>
              {LAUNCH_ADVISORY_CTA_LABEL}
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>

        <div className="relative min-h-[200px] overflow-hidden border-t border-gray-100 lg:min-h-[280px] lg:border-l lg:border-t-0">
          <LaunchAdvisoryIllustration className="absolute inset-0 h-full w-full scale-105 opacity-90" />
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/80 to-transparent lg:hidden"
          />
        </div>
      </div>
    </section>
  );
};

export default MarketplaceLaunchOffer;
