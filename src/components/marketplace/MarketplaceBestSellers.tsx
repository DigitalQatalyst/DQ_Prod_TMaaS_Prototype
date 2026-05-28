import { useMemo } from "react";
import ServiceProductCard from "@/components/marketplace/ServiceProductCard";
import { getBestSellers } from "@/data/services";
import { getRemixedName } from "@/data/services";
import { marketplaceCategoryLabels } from "@/data/marketplaceNavigation";

type MarketplaceBestSellersProps = {
  activeTab: string;
  selectedIndustry: string;
};

const MarketplaceBestSellers = ({
  activeTab,
  selectedIndustry,
}: MarketplaceBestSellersProps) => {
  const collection = activeTab === "all" ? "all" : activeTab;
  const bestSellers = useMemo(
    () => getBestSellers(collection as any, 3),
    [collection]
  );

  if (bestSellers.length === 0) return null;

  const heading =
    activeTab === "all"
      ? "Best sellers"
      : `Top ${marketplaceCategoryLabels[activeTab] ?? "picks"}`;

  return (
    <section aria-labelledby="marketplace-bestsellers-heading" className="mb-2">
      <h2
        id="marketplace-bestsellers-heading"
        className="text-lg font-bold tracking-tight text-navy-950"
      >
        {heading}
      </h2>
      <p className="mt-0.5 text-xs text-gray-500">
        Popular packages — fixed scope and pricing.
      </p>

      <div className="mt-3 flex gap-3 overflow-x-auto pb-1 sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0">
        {bestSellers.map((service, index) => (
          <ServiceProductCard
            key={service.id}
            service={service}
            variant="shelf"
            featured={index === 0 || service.badge === "Top Pick"}
            displayName={getRemixedName(service, selectedIndustry)}
          />
        ))}
      </div>
    </section>
  );
};

export default MarketplaceBestSellers;
