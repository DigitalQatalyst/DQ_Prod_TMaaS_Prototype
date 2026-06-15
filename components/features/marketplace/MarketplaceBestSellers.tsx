import ServiceProductCard from "@/components/features/marketplace/ServiceProductCard";
import type { ServiceProduct } from "@/lib/types/serviceProduct";
import { getRemixedName } from "@/lib/serviceProductUtils";
import { useBestSellers } from "@/lib/hooks/useCatalog";
import { marketplaceCategoryLabels } from "@/data/marketplaceNavigation" // TODO: Task 9 — wire up data;
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

  const categoryLabel = marketplaceCategoryLabels[activeTab];
  const eyebrow =
    activeTab === "all" ? "Curated selection" : `${categoryLabel ?? "Category"} highlights`;
  const subcopy =
    activeTab === "all"
      ? "Popular starting points across assessment, design, and delivery."
      : `Standout services in ${categoryLabel ?? "this category"}.`;

  return (
    <section aria-labelledby="marketplace-featured-heading" className="pt-10">
      <Carousel
        opts={{
          align: "start",
          loop: false,
        }}
        className="w-full"
      >
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <p className="dq-eyebrow">{eyebrow}</p>
            <h2
              id="marketplace-featured-heading"
              className="mt-4 text-4xl font-semibold tracking-tight text-dq-navy md:text-5xl"
            >
              Featured services
            </h2>
            <p className="mt-4 text-base text-gray-600">{subcopy}</p>
          </div>

          <div className="flex shrink-0 items-center gap-2 self-end sm:self-auto">
            <CarouselPrevious className="static h-8 w-8 translate-y-0" />
            <CarouselNext className="static h-8 w-8 translate-y-0" />
          </div>
        </div>

        <CarouselContent className="-ml-4 mt-8 pt-2 pb-2">
          {bestSellers.map((service: ServiceProduct) => (
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
