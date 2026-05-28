import { useMemo } from "react";
import ServiceProductCard from "@/components/marketplace/ServiceProductCard";
import { getBestSellers } from "@/data/services";
import { getRemixedName } from "@/data/services";
import { marketplaceCategoryLabels } from "@/data/marketplaceNavigation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
    () => getBestSellers(collection as any, 6),
    [collection]
  );

  if (bestSellers.length === 0) return null;

  const heading =
    activeTab === "all"
      ? "Best sellers"
      : `Top ${marketplaceCategoryLabels[activeTab] ?? "picks"}`;

  return (
    <section aria-labelledby="marketplace-bestsellers-heading" className="mb-6 relative">
      <div className="pr-24">
        <h2
          id="marketplace-bestsellers-heading"
          className="text-lg font-bold tracking-tight text-navy-950"
        >
          {heading}
        </h2>
        <p className="mt-0.5 text-xs text-gray-500 mb-4">
          Popular packages — fixed scope and pricing.
        </p>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: false,
        }}
        className="w-full"
      >
        <div className="absolute -top-12 right-0 flex items-center gap-2">
          <CarouselPrevious className="static translate-y-0 h-8 w-8" />
          <CarouselNext className="static translate-y-0 h-8 w-8" />
        </div>
        <CarouselContent className="-ml-4 pt-2 pb-2">
          {bestSellers.map((service, index) => (
            <CarouselItem key={service.id} className="pl-4 basis-[85%] sm:basis-1/2 md:basis-1/3">
              <ServiceProductCard
                service={service}
                variant="shelf"
                featured={index === 0 || service.badge === "Top Pick"}
                displayName={getRemixedName(service, selectedIndustry)}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default MarketplaceBestSellers;
