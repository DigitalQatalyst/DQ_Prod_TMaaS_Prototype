import { useNavigate } from "react-router-dom";
import { marketplaceEconomySectors } from "@/data/marketplaceNavigation";

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
    <section className="bg-white py-20 border-t border-navy-50">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl font-bold tracking-tight text-navy-950 sm:text-3xl font-heading mb-3 text-center md:text-left">
          Industry Solutions
        </h2>
        <p className="mb-10 text-base text-gray-600 text-center md:text-left max-w-2xl">
          Discover tailored services aligned to the specific requirements and workflows of your industry.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {marketplaceEconomySectors.map((sector) => (
            <button
              key={sector.id}
              onClick={() => {
                navigate(`/marketplace?sector=${sector.id}`);
                window.scrollTo(0, 0);
              }}
              className="group relative h-48 w-full overflow-hidden rounded-2xl bg-navy-900 text-left transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              <img
                src={getIndustryImage(sector.id)}
                alt={sector.label}
                className="absolute inset-0 h-full w-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">
                  {sector.label}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrySolutionsSection;
