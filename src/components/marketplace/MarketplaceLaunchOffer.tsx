import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {
  LAUNCH_ADVISORY_CTA_LABEL,
  LAUNCH_ADVISORY_EYEBROW,
  LAUNCH_ADVISORY_HEADLINE,
  LAUNCH_ADVISORY_SUBCOPY,
  buildLaunchAdvisoryContactPath,
} from "@/lib/launchOffering";
import { btnPrimaryOnDark } from "@/lib/brandAccent";
import { cn } from "@/lib/utils";
import { featureFlags } from "@/lib/featureFlags";

const MarketplaceLaunchOffer = () => {
  if (!featureFlags.isEnabled("contactUs")) return null;

  return (
    <section aria-labelledby="marketplace-launch-offer-heading" className="mb-10">
      <div className="relative isolate overflow-hidden rounded-2xl text-center text-white shadow-lg">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{ background: "var(--mesh-cta-orange)" }}
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse 60% 50% at 50% 50%, black 40%, transparent 80%)",
          }}
        />

        <div className="relative px-6 py-10 md:px-10 md:py-12 lg:px-12 lg:py-14">
          <p className="dq-eyebrow-on-dark mb-4">{LAUNCH_ADVISORY_EYEBROW}</p>

          <h2
            id="marketplace-launch-offer-heading"
            className="mx-auto max-w-2xl text-balance text-3xl font-semibold leading-[1.05] tracking-tight text-white md:text-4xl lg:text-[2.75rem]"
          >
            {LAUNCH_ADVISORY_HEADLINE}
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-white/60">
            {LAUNCH_ADVISORY_SUBCOPY}
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              to={buildLaunchAdvisoryContactPath()}
              className={cn(btnPrimaryOnDark, "w-full px-7 sm:w-auto")}
            >
              {LAUNCH_ADVISORY_CTA_LABEL}
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketplaceLaunchOffer;
