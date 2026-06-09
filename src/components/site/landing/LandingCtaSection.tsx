import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import MeshSection from "@/components/site/MeshSection";

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
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-dq-orange">
          Ready to Begin
        </p>

        <h2 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-5xl">
          Deploy your transformation —{" "}
          <span className="text-dq-orange">in weeks, not months.</span>
        </h2>

        <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-white/60">
          Explore transformation services, then get in touch when you are ready to move forward.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/marketplace"
            className="inline-flex items-center gap-2 rounded-full bg-dq-orange px-7 py-3.5 text-sm font-semibold text-white outline-none transition hover:bg-[#E04020] focus-visible:ring-2 focus-visible:ring-dq-orange focus-visible:ring-offset-2 focus-visible:ring-offset-dq-navy"
            style={{ boxShadow: "var(--glow-orange-md)" }}
          >
            Explore Marketplace
            <ArrowRight size={15} />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm outline-none transition hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-dq-orange focus-visible:ring-offset-2 focus-visible:ring-offset-dq-navy"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </MeshSection>
  );
};

export default LandingCtaSection;
