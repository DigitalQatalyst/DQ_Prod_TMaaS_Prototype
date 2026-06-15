"use client";

import { useRouter } from "next/navigation";
import { marketplaceEconomySectors } from "@/data/marketplaceNavigation"; // TODO: Task 9 — wire up data;
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const IndustrySolutionsSection = () => {
  const router = useRouter();

  const getIndustryImage = (id: string) => {
    switch (id) {
      case "farming-4-0":
        return "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=800&auto=format&fit=crop";
      case "plant-4-0":
        return "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop";
      case "infrastructure-4-0":
        return "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop";
      case "government-4-0":
        return "https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?q=80&w=800&auto=format&fit=crop";
      case "hospitality-4-0":
        return "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop";
      case "retail-4-0":
        return "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop";
      case "service-4-0":
        return "https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&w=800&auto=format&fit=crop";
      case "logistics-4-0":
        return "https://images.unsplash.com/photo-1586528116311-ad8ed7c663be?q=80&w=800&auto=format&fit=crop";
      case "wellness-4-0":
        return "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop";
      default:
        return "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop";
    }
  };

  return (
    <section className="border-t border-gray-100 bg-gray-50 px-5 py-24 md:px-8 lg:px-10">
      <div className="relative mx-auto max-w-[1200px]">
        <div className="pr-24">
          <p className="dq-eyebrow">Industries</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-dq-navy md:text-5xl">
            Industry Solutions
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-600">
            Discover tailored services aligned to the specific requirements and workflows of your
            industry.
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
          <CarouselContent className="-ml-4 pb-4">
            {marketplaceEconomySectors.map((sector) => (
              <CarouselItem
                key={sector.id}
                className="basis-[85%] pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <button
                  type="button"
                  onClick={() => {
                    router.push(`/marketplace?sector=${sector.id}`);
                    window.scrollTo(0, 0);
                  }}
                  className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white text-left transition-all duration-300 hover:border-dq-orange hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-dq-orange focus:ring-offset-2"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={getIndustryImage(sector.id)}
                      alt={sector.label}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="mb-4 text-lg font-semibold text-dq-navy transition-colors group-hover:text-dq-orange">
                      {sector.label}
                    </h3>
                    <div className="mt-auto flex items-center gap-1 text-sm font-semibold text-dq-navy transition-colors group-hover:text-dq-orange">
                      Explore services <ArrowRight size={16} />
                    </div>
                  </div>
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default IndustrySolutionsSection;
