import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MeshSection from "@/components/features/landing/MeshSection";
import {
  DISCOVERY_SESSION_CTA_LABEL,
  DISCOVERY_SESSION_EYEBROW,
  DISCOVERY_SESSION_HEADLINE,
  DISCOVERY_SESSION_SUBCOPY,
  buildDiscoverySessionContactPath,
} from "@/lib/launchOffering";
import { NAV_BROWSE_MARKETPLACE_LABEL } from "@/lib/brandLinks";
import { btnPrimaryOnDark, btnSecondaryOnDark } from "@/lib/brandAccent";
import { featureFlags } from "@/lib/featureFlags";
import { cn } from "@/lib/utils";

const CTA_STATS = [
  { value: "From $1k", label: "Fixed price" },
  { value: "<1 day", label: "To start" },
  { value: "100+", label: "Services" },
] as const;

const LandingCtaSection = () => {
  const discoveryPath = buildDiscoverySessionContactPath();
  const showDiscoveryCta = featureFlags.isEnabled("contactUs");

  return (
    <MeshSection
      id="contact"
      variant="heroDark"
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
        {showDiscoveryCta && <p className="dq-eyebrow-on-dark mb-4">{DISCOVERY_SESSION_EYEBROW}</p>}
        <h2 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-5xl">
          {showDiscoveryCta ? (
            DISCOVERY_SESSION_HEADLINE
          ) : (
            <>
              Find your next service in the <span className="text-dq-orange">catalogue.</span>
            </>
          )}
        </h2>

        <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-white/60">
          {showDiscoveryCta
            ? DISCOVERY_SESSION_SUBCOPY
            : "Browse on your own and find the right service for your next step."}
        </p>

        <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
          {showDiscoveryCta ? (
            <Link
              href={discoveryPath}
              className={cn(btnPrimaryOnDark, "w-full px-7 sm:w-auto")}
            >
              {DISCOVERY_SESSION_CTA_LABEL}
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

        <div className="mt-10 flex flex-wrap items-center justify-center gap-8 sm:gap-10">
          {CTA_STATS.map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-lg font-semibold text-white">{value}</div>
              <div className="mt-1 text-[13px] text-white/60">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </MeshSection>
  );
};

export default LandingCtaSection;
