import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Settings2, TrendingUp, Package } from "lucide-react";
import { recommendedBundles } from "@/data/bundles";

const IconMap: Record<string, React.ElementType> = {
  Sparkles: Sparkles,
  Settings2: Settings2,
  TrendingUp: TrendingUp,
};

const RecommendedBundlesSection = () => {
  return (
    <section
      id="recommended-bundles"
      className="border-b border-navy-100 bg-white py-16 md:py-20"
      aria-labelledby="recommended-bundles-heading"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <p className="text-[10px] font-bold uppercase tracking-widest text-orange-600 mb-2">
            Guided Transformation
          </p>
          <h2
            id="recommended-bundles-heading"
            className="text-2xl font-bold tracking-tight text-navy-950 md:text-3xl"
          >
            Recommended Transformation Bundles
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-gray-600">
            Combine services into structured transformation pathways. Start with a foundational bundle to solve broader business challenges faster.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {recommendedBundles.map((bundle) => {
            const Icon = IconMap[bundle.icon] || Package;
            return (
              <div
                key={bundle.id}
                className="group flex flex-col justify-between rounded-2xl border border-navy-100 bg-white p-6 shadow-sm transition hover:border-orange-300 hover:shadow-md"
              >
                <div>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold text-navy-950 group-hover:text-orange-600 transition-colors">
                    {bundle.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {bundle.outcomeStatement}
                  </p>
                </div>
                
                <div className="mt-8">
                  <div className="mb-5 grid grid-cols-2 gap-4 border-t border-navy-50 pt-5">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Services</p>
                      <p className="mt-1 font-semibold text-navy-950">{bundle.servicesIncludedCount} Included</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Est. Timeline</p>
                      <p className="mt-1 font-semibold text-navy-950">{bundle.timeline}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Starting from</p>
                      <p className="text-lg font-bold text-navy-950">{bundle.price}</p>
                    </div>
                    <Link
                      to={`/marketplace`} // In future: `/bundles/${bundle.id}`
                      className="inline-flex items-center justify-center rounded-lg bg-navy-950 p-2.5 text-white transition hover:bg-navy-900"
                      aria-label={`Explore ${bundle.title}`}
                    >
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RecommendedBundlesSection;
