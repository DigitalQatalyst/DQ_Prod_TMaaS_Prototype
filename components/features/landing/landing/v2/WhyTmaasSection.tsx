import MeshSection from "@/components/features/landing/MeshSection";
import ChallengePainCard from "@/components/features/landing/landing/ChallengePainCard";
import {
  CHALLENGE_CARDS,
  CHALLENGE_CLOSING,
  CHALLENGE_EYEBROW,
  CHALLENGE_HEADLINE,
} from "@/components/features/landing/landing/challengeContent";

const WhyTmaasSection = () => {
  return (
    <MeshSection id="why" variant="heroDark" className="px-5 py-24 text-white md:px-8 lg:px-10">
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

      <div className="mx-auto max-w-[1200px]">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-dq-orange">
          {CHALLENGE_EYEBROW}
        </p>
        <h2 className="mb-16 text-4xl font-semibold tracking-tight text-white md:text-5xl">
          {CHALLENGE_HEADLINE}
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {CHALLENGE_CARDS.map(({ Icon, title, body }) => (
            <ChallengePainCard key={title} Icon={Icon} title={title} body={body} />
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-[15px] text-white/50">
          {CHALLENGE_CLOSING}
        </p>
      </div>
    </MeshSection>
  );
};

export default WhyTmaasSection;
