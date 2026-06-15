import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MeshSection from "@/components/features/landing/MeshSection";
import { NAV_BROWSE_MARKETPLACE_LABEL } from "@/lib/brandLinks";
import {
  LAUNCH_ADVISORY_CTA_LABEL,
  LAUNCH_ADVISORY_EYEBROW,
  LAUNCH_ADVISORY_HEADLINE,
  LAUNCH_ADVISORY_SUBCOPY,
  buildLaunchAdvisoryContactPath,
} from "@/lib/launchOffering";
import { btnPrimaryOnDark, btnSecondaryOnDark } from "@/lib/brandAccent";
import { featureFlags } from "@/lib/featureFlags";
import { cn } from "@/lib/utils";

const LandingCtaSection = () => {
  return (
    <MeshSection
      variant="ctaOrange"
      className="relative px-5 py-24 text-center text-white md:px-8 lg:px-10"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, black 40%, transparent 80%)",
        }}
      />

      <div className="relative mx-auto max-w-[720px]">
        {featureFlags.isEnabled("contactUs") && (
          <p className="dq-eyebrow-on-dark mb-4">{LAUNCH_ADVISORY_EYEBROW}</p>
        )}
        <h2 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-5xl">
          {featureFlags.isEnabled("contactUs") ? (
            LAUNCH_ADVISORY_HEADLINE
          ) : (
            <>
              Find your next service <span className="text-dq-orange">in the marketplace.</span>
            </>
          )}
        </h2>

        <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-white/60">
          {featureFlags.isEnabled("contactUs")
            ? LAUNCH_ADVISORY_SUBCOPY
            : "Browse on your own and find the right service for your next step."}
        </p>

        <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
          {featureFlags.isEnabled("contactUs") ? (
            <Link
              href={buildLaunchAdvisoryContactPath()}
              className={cn(btnPrimaryOnDark, "w-full px-7 sm:w-auto")}
            >
              {LAUNCH_ADVISORY_CTA_LABEL}
              <ArrowRight size={15} />
            </Link>
          ) : (
            <Link href="/marketplace" className={cn(btnPrimaryOnDark, "w-full px-7 sm:w-auto")}>
              {NAV_BROWSE_MARKETPLACE_LABEL}
              <ArrowRight size={15} />
            </Link>
          )}
          <Link href="/marketplace" className={cn(btnSecondaryOnDark, "w-full px-7 sm:w-auto")}>
            {NAV_BROWSE_MARKETPLACE_LABEL}
          </Link>
        </div>
      </div>
    </MeshSection>
  );
};

export default LandingCtaSection;
