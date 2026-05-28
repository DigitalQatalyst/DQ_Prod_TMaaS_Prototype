import { useNavigate } from "react-router-dom";
import { marketplaceEconomySectors } from "@/data/marketplaceNavigation";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const IndustrySolutionsSection = () => {
  const navigate = useNavigate();

  const getIndustryImage = (id: string) => {
    switch (id) {
      case "farming-4-0":
        return "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=800&auto=format&fit=crop";
      case "plant-4-0":
        return "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop";
      case "infrastructure-4-0":
        return "https://images.unsplash.com/photo-1541888087425-ce81dfc46928?q=80&w=800&auto=format&fit=crop";
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
    <section className="bg-slate-50 py-20 border-t border-navy-50">
      <div className="mx-auto max-w-7xl px-6 relative">
        <div className="pr-24">
          <h2 className="text-2xl font-bold tracking-tight text-navy-950 sm:text-3xl font-heading mb-3">
            Industry Solutions
          </h2>
          <p className="mb-10 text-base text-gray-600 max-w-2xl">
            Discover tailored services aligned to the specific requirements and workflows of your industry.
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full"
        >
          <div className="absolute top-0 right-6 flex items-center gap-2">
            <CarouselPrevious className="static translate-y-0 h-8 w-8" />
            <CarouselNext className="static translate-y-0 h-8 w-8" />
          </div>
          <CarouselContent className="-ml-4 pb-4">
            {marketplaceEconomySectors.map((sector) => (
              <CarouselItem key={sector.id} className="pl-4 basis-[85%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <button
                  onClick={() => {
                    navigate(`/marketplace?sector=${sector.id}`);
                    window.scrollTo(0, 0);
                  }}
                  className="group flex flex-col h-full w-full overflow-hidden rounded-2xl border border-navy-100 bg-white text-left shadow-sm transition-all hover:shadow-md hover:border-navy-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={getIndustryImage(sector.id)}
                      alt={sector.label}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-lg font-bold text-navy-950 mb-4 group-hover:text-orange-600 transition-colors">
                      {sector.label}
                    </h3>
                    <div className="mt-auto flex items-center text-sm font-bold text-navy-950 group-hover:text-orange-600 transition-colors gap-1">
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
