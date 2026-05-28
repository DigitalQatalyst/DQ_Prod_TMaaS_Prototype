import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import ServiceProductCard from "@/components/marketplace/ServiceProductCard";
import { getFeaturedByCollection } from "@/data/services";

const collectionTabs = [
  { id: "ai" as const, label: "AI & Automation" },
  { id: "experience" as const, label: "Customer Experience" },
  { id: "operations" as const, label: "Operations" },
  { id: "security" as const, label: "Security & Delivery" },
];

const FeaturedPackagesSection = () => {
  const [activeTab, setActiveTab] = useState<"ai" | "experience" | "operations" | "security">("ai");

  const featuredProducts = useMemo(
    () => getFeaturedByCollection(activeTab, 3),
    [activeTab]
  );

  return (
    <section
      id="featured-packages"
      className="border-y border-navy-100 bg-slate-50/80 py-16 md:py-20"
      aria-labelledby="featured-packages-heading"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="text-left">
            <p className="text-[10px] font-bold uppercase tracking-widest text-orange-600 mb-1">
              Best sellers
            </p>
            <h2
              id="featured-packages-heading"
              className="text-2xl font-bold tracking-tight text-navy-950 md:text-3xl"
            >
              Featured transformation services
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-gray-600">
              Fixed scope, price, and timeline — add packages to your cart or view
              full details before checkout.
            </p>
          </div>
          <Link
            to="/marketplace"
            className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-orange-600 transition hover:text-orange-500"
          >
            View all services
            <ChevronRight size={16} />
          </Link>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {collectionTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-lg border px-4 py-2 text-xs font-semibold shadow-sm transition ${
                activeTab === tab.id
                  ? "border-navy-950 bg-navy-950 text-white"
                  : "border-navy-100 bg-white text-navy-950 hover:border-navy-300 hover:bg-slate-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {featuredProducts.map((service, index) => (
              <ServiceProductCard
                key={service.id}
                service={service}
                variant="full"
                featured={index === 0}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {featuredProducts.length === 0 && (
          <p className="rounded-xl border border-navy-100 bg-white p-8 text-center text-sm text-gray-500">
            No packages in this category yet.{" "}
            <Link to="/marketplace" className="font-semibold text-orange-600 hover:underline">
              Browse the full catalog
            </Link>
          </p>
        )}
      </div>
    </section>
  );
};

export default FeaturedPackagesSection;
