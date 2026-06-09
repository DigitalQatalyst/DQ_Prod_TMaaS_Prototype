import { ArrowRight } from "lucide-react";
import { DQ_CORP_WEB_URL, PLATFORM_NAME } from "@/lib/brandLinks";

const STATS = [
  { value: "50+", label: "Certified transformation services" },
  { value: "5", label: "Core capability categories" },
  { value: "6+", label: "Countries with active programmes" },
  { value: "4 wks", label: "Typical time to first engagement" },
];

const DqLineageStatsBand = () => {
  return (
    <section className="bg-gray-50 px-5 py-24 md:px-8 lg:px-10">
      <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <div className="grid gap-8 sm:grid-cols-2">
          {STATS.map(({ value, label }) => (
            <div key={label} className="border-l-4 border-dq-orange pl-6">
              <div className="mb-2 text-5xl font-semibold tracking-tight text-dq-navy md:text-6xl">
                {value}
              </div>
              <p className="max-w-[200px] text-sm leading-snug text-gray-600">
                {label}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-8">
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-dq-orange">
            Part of DigitalQatalyst
          </p>
          <h3 className="mb-3 text-2xl font-semibold tracking-tight text-dq-navy">
            Built on a decade of transformation delivery.
          </h3>
          <p className="mb-6 text-[15px] leading-relaxed text-gray-600">
            {PLATFORM_NAME} is a DigitalQatalyst product — bringing marketplace access to
            the same architecture-driven methodology trusted by organisations
            across six countries.
          </p>
          <a
            href={DQ_CORP_WEB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-dq-orange transition-all hover:gap-3"
          >
            Explore DigitalQatalyst
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default DqLineageStatsBand;
