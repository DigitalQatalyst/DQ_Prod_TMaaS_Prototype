import { ArrowRight } from "lucide-react";
import { DQ_CORP_WEB_URL, PLATFORM_NAME } from "@/lib/brandLinks";

const STATS = [
  { value: "50+", label: "Productised transformation services" },
  { value: "4", label: "Marketplace capability areas" },
  { value: "6+", label: "Countries with active programmes" },
  { value: "4 wks", label: "Median time to first engagement" },
];

const DqLineageStatsBand = () => {
  return (
    <section className="bg-gray-50 px-5 py-24 md:px-8 lg:px-10">
      <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <div className="grid gap-8 sm:grid-cols-2">
          {STATS.map(({ value, label }) => (
            <div key={label} className="border-l-4 border-dq-navy pl-6">
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
          <p className="mb-3 dq-eyebrow">
            Part of DigitalQatalyst
          </p>
          <h3 className="mb-3 text-2xl font-semibold tracking-tight text-dq-navy">
            A decade of transformation delivery behind the platform.
          </h3>
          <p className="mb-6 text-[15px] leading-relaxed text-gray-600">
            {PLATFORM_NAME} is DigitalQatalyst&apos;s operating platform,
            industrialising the same architecture-led methodology trusted across
            six countries into a governed, productised delivery model.
          </p>
          <a
            href={DQ_CORP_WEB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-dq-navy transition-all hover:gap-3"
          >
            About DigitalQatalyst
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default DqLineageStatsBand;
