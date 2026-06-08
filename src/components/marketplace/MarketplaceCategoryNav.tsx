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
    <div className="sticky top-16 z-30 -mx-5 bg-background px-5 md:-mx-8 md:px-8 lg:-mx-10 lg:px-10">
      <nav
        className="mx-auto flex max-w-[1200px] gap-0 overflow-x-auto border-b border-gray-200/80"
        aria-label="Service categories"
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onTabChange(tab.id)}
              className={`shrink-0 border-b-2 px-5 py-3.5 text-sm font-medium transition-colors ${
                isActive
                  ? "-mb-px border-dq-orange text-dq-orange"
                  : "border-transparent text-gray-500 hover:text-dq-navy"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default MarketplaceCategoryNav;
