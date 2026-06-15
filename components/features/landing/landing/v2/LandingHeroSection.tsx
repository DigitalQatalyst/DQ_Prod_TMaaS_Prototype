import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MeshSection from "@/components/features/landing/MeshSection";
import HeroDashboardMockup from "@/components/features/landing/landing/HeroDashboardMockup";
import {
  NAV_BROWSE_MARKETPLACE_LABEL,
  PLATFORM_DESCRIPTOR,
  PLATFORM_HERO_HEADLINE_ACCENT,
  PLATFORM_HERO_HEADLINE_PRIMARY,
  PLATFORM_HERO_SUBCOPY,
} from "@/lib/brandLinks";
import {
  LAUNCH_ADVISORY_CTA_LABEL,
  LAUNCH_ADVISORY_EYEBROW,
  buildLaunchAdvisoryContactPath,
} from "@/lib/launchOffering";
import { btnPrimary, btnSecondary, landingHeroHeading } from "@/lib/brandAccent";
import { featureFlags } from "@/lib/featureFlags";
import { cn } from "@/lib/utils";

const LandingHeroSection = () => {
  return (
    <MeshSection
      variant="heroLight"
      grid
      className="px-5 pb-16 pt-16 md:px-8 md:pb-20 md:pt-24 lg:px-10 lg:pb-24 lg:pt-28"
    >
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="min-w-0">
          <p className="animate-fade-in-up dq-eyebrow">{PLATFORM_DESCRIPTOR}</p>

          <h1
            className={`animate-fade-in-up animation-delay-100 mt-5 ${landingHeroHeading}`}
          >
            <span className="block">{PLATFORM_HERO_HEADLINE_PRIMARY}</span>
            <span className="block text-dq-orange">{PLATFORM_HERO_HEADLINE_ACCENT}</span>
          </h1>

          <p className="animate-fade-in-up animation-delay-200 mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
            {PLATFORM_HERO_SUBCOPY}
          </p>

          {featureFlags.isEnabled("contactUs") && (
            <p className="animate-fade-in-up animation-delay-300 mt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-dq-orange">
              {LAUNCH_ADVISORY_EYEBROW}
            </p>
          )}

          <div className="animate-fade-in-up animation-delay-300 mt-4 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            {featureFlags.isEnabled("contactUs") ? (
              <Link href={buildLaunchAdvisoryContactPath()}
                className={cn(btnPrimary, "group w-full sm:w-auto")}
              >
                {LAUNCH_ADVISORY_CTA_LABEL}
                <ArrowRight
                  size={16}
                  className="transition group-hover:translate-x-0.5"
                />
              </Link>
            ) : (
              <Link href="/marketplace"
                className={cn(btnPrimary, "group w-full sm:w-auto")}
              >
                {NAV_BROWSE_MARKETPLACE_LABEL}
                <ArrowRight
                  size={16}
                  className="transition group-hover:translate-x-0.5"
                />
              </Link>
            )}
            <Link href="/marketplace"
              className={cn(btnSecondary, "w-full sm:w-auto")}
            >
              {NAV_BROWSE_MARKETPLACE_LABEL}
            </Link>
          </div>
        </div>

        <div className="animate-fade-in-up animation-delay-200 min-w-0 overflow-hidden px-2 py-4 sm:px-4 sm:py-6 lg:justify-self-end">
          <HeroDashboardMockup />
        </div>
      </div>
    </MeshSection>
  );
};

export default LandingHeroSection;
