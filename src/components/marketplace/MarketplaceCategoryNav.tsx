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
    <div className="sticky top-16 z-30 -mx-5 border-b border-gray-100 bg-white px-5 py-3 md:-mx-8 md:px-8 lg:-mx-10 lg:px-10">
      <nav
        className="mx-auto flex max-w-[1200px] gap-1 overflow-x-auto pb-1"
        aria-label="Service categories"
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onTabChange(tab.id)}
              className={`shrink-0 border-b-2 px-4 py-2 text-[13px] font-medium transition-colors ${
                isActive
                  ? "border-dq-orange text-dq-orange"
                  : "border-transparent text-gray-600 hover:text-dq-navy"
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
