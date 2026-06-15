"use client";

import { useRouter } from "next/navigation";
import { ArrowRight, Layout, Settings, Shield, Cpu } from "lucide-react";
import { marketplaceCapabilities } from "@/data/marketplaceNavigation" // TODO: Task 9 — wire up data;

const ExploreByCategorySection = () => {
  const router = useRouter();

  const getCategoryDetails = (id: string) => {
    switch (id) {
      case "experience":
        return {
          icon: <Layout className="mb-4 h-8 w-8 text-dq-orange" strokeWidth={1.5} />,
          title: "Digital Experience",
          desc: "Transform customer journeys, web presence, and mobile engagement.",
        };
      case "operations":
        return {
          icon: <Settings className="mb-4 h-8 w-8 text-dq-orange" strokeWidth={1.5} />,
          title: "Digital Work System",
          desc: "Optimise workflows, cloud infrastructure, and internal operations.",
        };
      case "security":
        return {
          icon: <Shield className="mb-4 h-8 w-8 text-dq-orange" strokeWidth={1.5} />,
          title: "SecDevOps",
          desc: "Strengthen security posture, compliance, and secure delivery.",
        };
      case "ai":
        return {
          icon: <Cpu className="mb-4 h-8 w-8 text-dq-orange" strokeWidth={1.5} />,
          title: "Digital Intelligence & Analytics",
          desc: "Leverage AI, machine learning, and advanced analytics for insights.",
        };
      default:
        return null;
    }
  };

  return (
    <section className="border-t border-gray-100 bg-white px-5 py-24 md:px-8 lg:px-10">
      <div className="mx-auto max-w-[1200px]">
        <p className="dq-eyebrow">
          Categories
        </p>
        <h2 className="mt-4 text-center text-4xl font-semibold tracking-tight text-dq-navy md:text-left md:text-5xl">
          Explore by Category
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {marketplaceCapabilities.map((cat) => {
            if (cat.id === "bundles") return null;
            const details = getCategoryDetails(cat.id);
            if (!details) return null;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  router.push(`/marketplace?collection=${cat.id}`);
                  window.scrollTo(0, 0);
                }}
                className="group flex flex-col items-start rounded-2xl border border-gray-200 bg-white p-6 text-left transition-all duration-300 hover:border-dq-orange hover:shadow-xl"
              >
                {details.icon}
                <h3 className="mb-2 text-lg font-semibold text-dq-navy transition-colors group-hover:text-dq-orange">
                  {details.title}
                </h3>
                <p className="mb-6 flex-1 text-sm text-gray-600">{details.desc}</p>
                <div className="mt-auto flex items-center gap-1 text-sm font-semibold text-dq-navy transition-colors group-hover:text-dq-orange">
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
