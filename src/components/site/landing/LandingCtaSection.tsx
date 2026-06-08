import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import MeshSection from "@/components/site/MeshSection";

const LandingCtaSection = () => {
  return (
    <MeshSection
      variant="heroDark"
      className="relative px-5 py-28 text-center md:px-8 lg:px-10"
    >
      {/* glowing mesh accent — bottom right */}
      <div
        aria-hidden
        className="absolute bottom-0 right-0 -z-10 h-[400px] w-[400px] opacity-50"
        style={{
          background:
            "radial-gradient(ellipse at center, oklch(0.55 0.22 29 / 0.35), oklch(0.35 0.15 280 / 0.15) 50%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        aria-hidden
        className="absolute bottom-0 right-0 -z-10 h-[300px] w-[300px] opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(251,85,53,0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(251,85,53,0.3) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          transform: "perspective(600px) rotateX(60deg)",
          transformOrigin: "bottom right",
        }}
      />

      <div className="relative mx-auto max-w-[720px]">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-dq-orange">
          Ready to Transform?
        </p>

        <h2 className="text-balance text-4xl font-semibold tracking-tight text-white md:text-5xl">
          Deploy your transformation in{" "}
          <span className="text-dq-orange">weeks, not months.</span>
        </h2>

        <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-white/60">
          Discover. Engage. Deliver. All on TMaaS.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/marketplace"
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-dq-orange px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#E04020]"
            style={{ boxShadow: "var(--glow-orange-md)" }}
          >
            Explore Marketplace
            <ArrowRight
              size={16}
              className="transition group-hover:translate-x-0.5"
            />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/30 hover:bg-white/10"
          >
            Request a Demo
          </Link>
        </div>
      </div>
    </MeshSection>
  );
};

export default LandingCtaSection;
