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
    () => getBestSellers(collection as "all" | "ai" | "cx" | "ops" | "growth" | "gov", 6),
    [collection]
  );

  if (bestSellers.length === 0) return null;

  const heading =
    activeTab === "all"
      ? "Best sellers"
      : `Top ${marketplaceCategoryLabels[activeTab] ?? "picks"}`;

  return (
    <section aria-labelledby="marketplace-bestsellers-heading" className="relative pt-10">
      <div className="pr-24">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-dq-orange">
          Popular
        </p>
        <h2
          id="marketplace-bestsellers-heading"
          className="mt-4 text-4xl font-semibold tracking-tight text-dq-navy md:text-5xl"
        >
          {heading}
        </h2>
        <p className="mt-4 text-base text-gray-600">
          Popular packages — fixed scope and pricing.
        </p>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: false,
        }}
        className="mt-10 w-full"
      >
        <div className="absolute -top-14 right-0 flex items-center gap-2">
          <CarouselPrevious className="static h-8 w-8 translate-y-0" />
          <CarouselNext className="static h-8 w-8 translate-y-0" />
        </div>
        <CarouselContent className="-ml-4 pt-2 pb-2">
          {bestSellers.map((service) => (
            <CarouselItem
              key={service.id}
              className="basis-[85%] pl-4 sm:basis-1/2 md:basis-1/3"
            >
              <ServiceProductCard
                service={service}
                variant="grid"
                featured
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
