import { useMemo } from "react";
import ServiceProductCard from "@/components/marketplace/ServiceProductCard";
import { initialServices } from "@/data/services";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const TransformationJourneysSection = () => {
  const navigate = useNavigate();
  
  const journeys = useMemo(() => {
    const targetNames = [
      "Design Services set",
      "Deploy Services set",
      "Managed Services set"
    ];
    
    return targetNames
      .map(name => initialServices.find(s => s.standardName === name))
      .filter(Boolean) as typeof initialServices;
  }, []);

  if (journeys.length === 0) return null;

  return (
    <section className="bg-slate-50 py-20 border-t border-navy-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-navy-950 sm:text-3xl font-heading">
              Transformation Journeys
            </h2>
            <p className="mt-3 text-base text-gray-600">
              End-to-end service bundles designed to accelerate your digital transformation across design, implementation, and ongoing operations.
            </p>
          </div>
          <Button 
            onClick={() => {
              navigate("/marketplace?collection=bundles");
              window.scrollTo(0, 0);
            }}
            variant="outline"
            className="rounded-xl border-navy-200 text-navy-950 font-bold shrink-0 hidden md:flex h-11"
          >
            View all bundles
          </Button>
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
        
        <Button 
          onClick={() => {
            navigate("/marketplace?collection=bundles");
            window.scrollTo(0, 0);
          }}
          variant="outline"
          className="w-full mt-8 rounded-xl border-navy-200 text-navy-950 font-bold md:hidden h-11"
        >
          View all bundles
        </Button>
      </div>
    </section>
  );
};

export default TransformationJourneysSection;
