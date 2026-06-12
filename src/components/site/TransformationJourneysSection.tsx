import { useMemo } from "react";
import ServiceProductCard from "@/components/marketplace/ServiceProductCard";
import { initialServices } from "@/data/services";
import { useNavigate } from "react-router-dom";

const TransformationJourneysSection = () => {
  const navigate = useNavigate();

  const journeys = useMemo(() => {
    const targetNames = [
      "Design Services set",
      "Deploy Services set",
      "Managed Services set",
    ];

    return targetNames
      .map((name) => initialServices.find((s) => s.standardName === name))
      .filter(Boolean) as typeof initialServices;
  }, []);

  if (journeys.length === 0) return null;

  return (
    <section className="border-t border-gray-100 bg-gray-50 px-5 py-24 md:px-8 lg:px-10">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="dq-eyebrow">
              Bundles
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-dq-navy md:text-5xl">
              Transformation Journeys
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              End-to-end service bundles designed to accelerate your digital transformation across design, implementation, and ongoing operations.
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              navigate("/marketplace?collection=bundles");
              window.scrollTo(0, 0);
            }}
            className="hidden h-11 shrink-0 items-center justify-center rounded-full border border-[#c5cde8] bg-white/60 px-6 text-sm font-semibold text-dq-navy backdrop-blur-sm transition hover:border-[#a0aacc] hover:bg-white md:inline-flex"
          >
            View all bundles
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {journeys.map((journey) => (
            <ServiceProductCard
              key={journey.id}
              service={journey}
              variant="grid"
              featured={false}
              displayName={journey.standardName}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => {
            navigate("/marketplace?collection=bundles");
            window.scrollTo(0, 0);
          }}
          className="mt-8 flex h-11 w-full items-center justify-center rounded-full border border-[#c5cde8] bg-white/60 text-sm font-semibold text-dq-navy backdrop-blur-sm transition hover:border-[#a0aacc] hover:bg-white md:hidden"
        >
          View all bundles
        </button>
      </div>
    </section>
  );
};

export default TransformationJourneysSection;
