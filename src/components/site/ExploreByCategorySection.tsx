import { useNavigate } from "react-router-dom";
import { ArrowRight, Layout, Settings, Shield, Cpu } from "lucide-react";
import { marketplaceCapabilities } from "@/data/marketplaceNavigation";

const ExploreByCategorySection = () => {
  const navigate = useNavigate();

  const getCategoryDetails = (id: string) => {
    switch(id) {
      case "experience":
        return {
          icon: <Layout className="text-orange-500 h-8 w-8 mb-4" strokeWidth={1.5} />,
          title: "Digital Experience",
          desc: "Transform customer journeys, web presence, and mobile engagement."
        };
      case "operations":
        return {
          icon: <Settings className="text-orange-500 h-8 w-8 mb-4" strokeWidth={1.5} />,
          title: "Digital Work System",
          desc: "Optimise workflows, cloud infrastructure, and internal operations."
        };
      case "security":
        return {
          icon: <Shield className="text-orange-500 h-8 w-8 mb-4" strokeWidth={1.5} />,
          title: "SecDevOps",
          desc: "Strengthen security posture, compliance, and secure delivery."
        };
      case "ai":
        return {
          icon: <Cpu className="text-orange-500 h-8 w-8 mb-4" strokeWidth={1.5} />,
          title: "Digital Intelligence & Analytics",
          desc: "Leverage AI, machine learning, and advanced analytics for insights."
        };
      default:
        return null;
    }
  };

  return (
    <section className="bg-white py-20 border-t border-navy-50">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl font-bold tracking-tight text-navy-950 sm:text-3xl font-heading mb-10 text-center md:text-left">
          Explore by Category
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {marketplaceCapabilities.map((cat) => {
            if (cat.id === "bundles") return null;
            const details = getCategoryDetails(cat.id);
            if (!details) return null;

            return (
              <button
                key={cat.id}
                onClick={() => {
                  navigate(`/marketplace?collection=${cat.id}`);
                  window.scrollTo(0, 0);
                }}
                className="flex flex-col items-start text-left bg-white border border-navy-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-navy-200 transition-all group"
              >
                {details.icon}
                <h3 className="text-lg font-bold text-navy-950 mb-2 group-hover:text-orange-600 transition-colors">
                  {details.title}
                </h3>
                <p className="text-sm text-gray-600 mb-6 flex-1">
                  {details.desc}
                </p>
                <div className="mt-auto flex items-center text-sm font-bold text-navy-950 group-hover:text-orange-600 transition-colors gap-1">
                  View Services <ArrowRight size={16} />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExploreByCategorySection;
