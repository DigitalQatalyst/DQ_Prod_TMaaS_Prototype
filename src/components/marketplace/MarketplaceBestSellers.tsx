import ServiceProductCard from "@/components/marketplace/ServiceProductCard";
import { getRemixedName } from "@/data/services";
import { useBestSellers } from "@/hooks/useCatalog";
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
  const { data: bestSellers = [] } = useBestSellers(collection, 6);

  if (bestSellers.length === 0) return null;

  const heading =
    activeTab === "all"
      ? "Best sellers"
      : `Top ${marketplaceCategoryLabels[activeTab] ?? "picks"}`;

  return (
    <section aria-labelledby="marketplace-bestsellers-heading" className="pt-10">
      <Carousel
        opts={{
          align: "start",
          loop: false,
        }}
        className="w-full"
      >
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <p className="dq-eyebrow">Popular</p>
            <h2
              id="marketplace-bestsellers-heading"
              className="mt-4 text-4xl font-semibold tracking-tight text-dq-navy md:text-5xl"
            >
              {heading}
            </h2>
            <p className="mt-4 text-base text-gray-600">
              Top services with fixed scope and transparent pricing.
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-2 self-end sm:self-auto">
            <CarouselPrevious className="static h-8 w-8 translate-y-0" />
            <CarouselNext className="static h-8 w-8 translate-y-0" />
          </div>
        </div>

        <CarouselContent className="-ml-4 mt-8 pt-2 pb-2">
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
