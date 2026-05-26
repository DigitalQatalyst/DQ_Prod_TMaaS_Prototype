import { marketplaceCapabilities } from "@/data/marketplaceNavigation";

const allTab = { id: "all", label: "All" };

const tabs = [
  allTab,
  ...marketplaceCapabilities.map((c) => ({ id: c.id, label: c.label })),
];

type MarketplaceCategoryNavProps = {
  activeTab: string;
  onTabChange: (tab: string) => void;
};

const MarketplaceCategoryNav = ({
  activeTab,
  onTabChange,
}: MarketplaceCategoryNavProps) => {
  return (
    <nav
      className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin"
      aria-label="Service categories"
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onTabChange(tab.id)}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition ${
              isActive
                ? "bg-navy-950 text-white shadow-sm"
                : "border border-navy-100 bg-white text-navy-950 hover:border-navy-200 hover:bg-slate-50"
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </nav>
  );
};

export default MarketplaceCategoryNav;
