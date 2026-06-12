import { ArrowRight } from "lucide-react";
import { DQ_CORP_WEB_URL, PLATFORM_LINEAGE_LINE, PLATFORM_NAME_EXPANDED } from "@/lib/brandLinks";

const STATS = [
  { value: "100+", label: "Digital transformation services" },
  { value: "4", label: "Service categories" },
  { value: "6+", label: "Countries served" },
  { value: "<1 day", label: "Typical time to start" },
];

const DqLineageStatsBand = () => {
  return (
    <section
      className="border-y border-gray-100 bg-[#f4f6f9] px-5 py-24 md:px-8 lg:px-10"
      aria-labelledby="dq-lineage-stats-heading"
    >
      <h2 id="dq-lineage-stats-heading" className="sr-only">
        {PLATFORM_NAME_EXPANDED} at a glance
      </h2>
      <div className="mx-auto max-w-[1200px]">
        <p className="mb-10 dq-eyebrow">At a glance</p>

        <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:items-stretch lg:gap-12">
          <div className="grid gap-4 sm:grid-cols-2">
            {STATS.map(({ value, label }) => (
              <div
                key={label}
                className="rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-2 text-4xl font-semibold tracking-tight text-dq-navy md:text-5xl">
                  {value}
                </div>
                <p className="text-sm leading-snug text-gray-600">{label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-dq-navy/10 bg-dq-navy p-8 text-white shadow-lg">
            <div>
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-dq-orange">
                Part of DigitalQatalyst
              </p>
              <p className="mb-3 text-2xl font-semibold tracking-tight">
                Built on a decade of transformation delivery.
              </p>
              <p className="text-[15px] leading-relaxed text-white/75">
                {PLATFORM_LINEAGE_LINE}
              </p>
            </div>
            <a
              href={DQ_CORP_WEB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white transition-all hover:gap-3 hover:text-dq-orange"
            >
              About DigitalQatalyst
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DqLineageStatsBand;
