import SectionHeading from "@/components/features/landing/SectionHeading";

const PROOF_PLACEHOLDER_LOGOS = [
  "Client or partner logo",
  "Client or partner logo",
  "Client or partner logo",
  "Client or partner logo",
] as const;

const ProofSection = () => {
  return (
    <section id="proof" className="bg-gray-50 px-5 py-24 md:px-8 lg:px-10">
      <div className="mx-auto max-w-[1200px]">
        <div className="rounded-3xl border border-gray-200/80 bg-[#F3F5FD] px-6 py-12 md:px-10 md:py-14">
          <SectionHeading
            kicker="Proof, not promises"
            title="Built from real delivery, not theory"
            description="DigitalQatalyst's delivery teams design and run transformation programmes for government, financial services, and regulated enterprises across the GCC. TMaaS packages that same delivery discipline into fixed-scope services, rather than a generic consulting framework."
            className="max-w-3xl"
          />

          <div
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
            aria-label="Client and partner logos"
          >
            {PROOF_PLACEHOLDER_LOGOS.map((label, index) => (
              <div
                key={`${label}-${index}`}
                className="flex min-h-[52px] min-w-[160px] items-center justify-center rounded-xl border border-dashed border-gray-300 bg-white px-6 py-4 text-center text-[13px] font-semibold text-gray-400"
              >
                {label}
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-dq-orange">
                Outcome, placeholder
              </p>
              <p className="mt-3 text-[14px] leading-relaxed text-gray-600">
                Add one quantified result once available, for example time-to-launch against a
                baseline, or cost saved versus a comparable consultant-led programme.
              </p>
              <p className="mt-3 text-xs text-gray-400">
                Replace before publishing. Do not invent a figure.
              </p>
            </div>

            <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-dq-orange">
                Reference, placeholder
              </p>
              <p className="mt-3 text-[14px] leading-relaxed text-gray-600">
                Add a short, named case reference or client quote once cleared for public use,
                ideally from a regulated or government engagement.
              </p>
              <p className="mt-3 text-xs text-gray-400">
                Replace before publishing. Do not invent a name or quote.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
