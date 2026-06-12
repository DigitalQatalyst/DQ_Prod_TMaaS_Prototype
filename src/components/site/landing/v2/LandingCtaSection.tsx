import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import MeshSection from "@/components/site/MeshSection";
import { btnPrimaryOnDark, btnSecondaryOnDark } from "@/lib/brandAccent";
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
          maskImage:
            "radial-gradient(ellipse 60% 50% at 50% 50%, black 40%, transparent 80%)",
        }}
      />

      <div className="relative mx-auto max-w-[720px]">
        <p className="dq-eyebrow-on-dark mb-4">
          Get started
        </p>

        <h2 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-5xl">
          Find your next service{" "}
          <span className="text-dq-orange">in the marketplace.</span>
        </h2>

        <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-white/60">
          Browse on your own or talk to our team when you&apos;re ready to
          launch.
        </p>

        <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
          <Link
            to="/marketplace"
            className={cn(btnPrimaryOnDark, "w-full px-7 sm:w-auto")}
          >
            Browse services
            <ArrowRight size={15} />
          </Link>
          <Link
            to="/contact"
            className={cn(btnSecondaryOnDark, "w-full px-7 sm:w-auto")}
          >
            Talk to our team
          </Link>
        </div>
      </div>
    </MeshSection>
  );
};

export default LandingCtaSection;
