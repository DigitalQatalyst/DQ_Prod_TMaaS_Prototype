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
          Ready to Begin
        </p>

        <h2 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-5xl">
          Find your next service —{" "}
          <span className="text-dq-orange">start in the marketplace.</span>
        </h2>

        <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-white/60">
          Browse certified transformation services, then contact us when you are
          ready to activate.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/marketplace"
            className={cn(btnPrimaryOnDark, "px-7")}
          >
            Explore Marketplace
            <ArrowRight size={15} />
          </Link>
          <Link
            to="/contact"
            className={cn(btnSecondaryOnDark, "px-7")}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </MeshSection>
  );
};

export default LandingCtaSection;
