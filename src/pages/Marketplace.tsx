import { useState, useMemo, useEffect, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Filter, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DiagnoseDialog from "@/components/DiagnoseDialog";
import MarketplaceCategoryNav from "@/components/marketplace/MarketplaceCategoryNav";
import MarketplaceFilters from "@/components/marketplace/MarketplaceFilters";
import MarketplaceBestSellers from "@/components/marketplace/MarketplaceBestSellers";
import ServiceProductCard from "@/components/marketplace/ServiceProductCard";
import { getBestSellers } from "@/data/services";
import {
  marketplaceCategoryLabels,
  marketplaceCollectionIds,
  marketplaceGoals,
} from "@/data/marketplaceNavigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { initialServices, getRemixedName } from "@/data/services";

// Removed old labels

const Marketplace = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [selectedServiceTypes, setSelectedServiceTypes] = useState<string[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogPrompt, setDialogPrompt] = useState("");
  const [sortBy, setSortBy] = useState("popular");

  const scrollToCatalog = useCallback(() => {
    requestAnimationFrame(() => {
      document.getElementById("catalog-grid")?.scrollIntoView({ behavior: "smooth" });
    });
  }, []);

  useEffect(() => {
    const goals = searchParams.getAll("goal").filter((g) =>
      marketplaceGoals.some((o) => o.id === g)
    );
    setSelectedGoals(goals);

    const collection = searchParams.get("collection");
    if (
      collection &&
      marketplaceCollectionIds.includes(
        collection as (typeof marketplaceCollectionIds)[number]
      )
    ) {
      setActiveTab(collection);
    } else if (!collection) {
      setActiveTab("all");
    }

    const q = searchParams.get("q");
    if (q !== null) setSearchQuery(q);

    if (goals.length > 0 || collection) {
      scrollToCatalog();
    }
  }, [searchParams, scrollToCatalog]);

  const applyCollectionFilter = useCallback(
    (collection: string) => {
      setActiveTab(collection);
      const next = new URLSearchParams(searchParams);
      if (collection === "all") next.delete("collection");
      else next.set("collection", collection);
      setSearchParams(next, { replace: true });
      scrollToCatalog();
    },
    [searchParams, setSearchParams, scrollToCatalog]
  );

  const handleGoalChange = useCallback(
    (value: string) => {
      const next = selectedGoals.includes(value)
        ? selectedGoals.filter((g) => g !== value)
        : [...selectedGoals, value];

      setSelectedGoals(next);

      const nextParams = new URLSearchParams(searchParams);
      nextParams.delete("goal");
      next.forEach((g) => nextParams.append("goal", g));
      setSearchParams(nextParams, { replace: true });
    },
    [searchParams, setSearchParams, selectedGoals]
  );

  const handleIndustryChange = useCallback((value: string) => {
    setSelectedIndustries((prev) =>
      prev.includes(value) ? prev.filter((i) => i !== value) : [...prev, value]
    );
  }, []);

  const handleServiceTypeChange = useCallback((value: string) => {
    setSelectedServiceTypes((prev) =>
      prev.includes(value) ? prev.filter((t) => t !== value) : [...prev, value]
    );
  }, []);

  const clearAllFilters = useCallback(() => {
    setSelectedIndustries([]);
    setSelectedGoals([]);
    setSelectedServiceTypes([]);
    setSearchQuery("");
    setSortBy("popular");
    setActiveTab("all");
    setSearchParams({}, { replace: true });
  }, [setSearchParams]);

  const hasRefinementFilters =
    selectedGoals.length > 0 ||
    selectedIndustries.length > 0 ||
    selectedServiceTypes.length > 0 ||
    searchQuery !== "";

  const hasActiveFilters = hasRefinementFilters || activeTab !== "all";

  const showBestSellers = !hasRefinementFilters;

  const bestSellerIds = useMemo(() => {
    if (!showBestSellers) return new Set<number>();
    const collection = activeTab === "all" ? "all" : activeTab;
    return new Set(
      getBestSellers(
        collection as "all" | "ai" | "cx" | "ops" | "growth" | "gov",
        4
      ).map((s) => s.id)
    );
  }, [showBestSellers, activeTab]);

  const filteredServices = useMemo(() => {
    return initialServices.filter((pkg) => {
      const matchesCollection = activeTab === "all" || pkg.collection === activeTab;
      const matchesGoal =
        selectedGoals.length === 0 || pkg.outcomes.some((o) => selectedGoals.includes(o));
      const matchesServiceType =
        selectedServiceTypes.length === 0 || selectedServiceTypes.includes((pkg as any).serviceType);

      // Extract the first active industry for remixing name, fallback to 'general'
      const activeIndustry = selectedIndustries.length > 0 ? selectedIndustries[0] : "all";

      const matchesSearch = searchQuery === "" || 
        pkg.standardName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        getRemixedName(pkg, activeIndustry).toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
        pkg.features.some(feat => feat.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCollection && matchesGoal && matchesServiceType && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === "popular") return b.popularityRank - a.popularityRank;
      if (sortBy === "price-low") return parseInt(a.price.replace(/[$,]/g, "")) - parseInt(b.price.replace(/[$,]/g, ""));
      if (sortBy === "fastest") return parseInt(a.duration) - parseInt(b.duration);
      return 0;
    });
  }, [activeTab, searchQuery, selectedGoals, selectedServiceTypes, selectedIndustries, sortBy]);

  const catalogServices = useMemo(() => {
    if (!showBestSellers) return filteredServices;
    return filteredServices.filter((s) => !bestSellerIds.has(s.id));
  }, [filteredServices, showBestSellers, bestSellerIds]);

  const activeFilterChips = useMemo(() => {
    const chips: { key: string; label: string; onRemove: () => void }[] = [];

    if (activeTab !== "all") {
      chips.push({
        key: "category",
        label: marketplaceCategoryLabels[activeTab] ?? activeTab,
        onRemove: () => applyCollectionFilter("all"),
      });
    }
    selectedGoals.forEach((goalId) => {
      const o = marketplaceGoals.find((x) => x.id === goalId);
      chips.push({
        key: `goal-${goalId}`,
        label: o?.label ?? goalId,
        onRemove: () => handleGoalChange(goalId),
      });
    });

    selectedIndustries.forEach((industry) => {
      chips.push({
        key: `industry-${industry}`,
        label: `Industry: ${industry}`,
        onRemove: () => handleIndustryChange(industry),
      });
    });

    selectedServiceTypes.forEach((type) => {
      chips.push({
        key: `type-${type}`,
        label: `Type: ${type}`,
        onRemove: () => handleServiceTypeChange(type),
      });
    });
    if (searchQuery) {
      chips.push({
        key: "q",
        label: `“${searchQuery.length > 20 ? `${searchQuery.slice(0, 20)}…` : searchQuery}”`,
        onRemove: () => setSearchQuery(""),
      });
    }

    return chips;
  }, [
    activeTab,
    selectedGoals,
    selectedIndustries,
    selectedServiceTypes,
    searchQuery,
    applyCollectionFilter,
    handleGoalChange,
    handleIndustryChange,
    handleServiceTypeChange,
  ]);



  const handleAskAI = () => {
    setDialogPrompt("");
    setIsDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <header className="border-b border-navy-100 bg-white pt-24 pb-6">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="font-heading text-2xl font-bold tracking-tight text-navy-950 md:text-3xl">
                Marketplace
              </h1>
              <p className="mt-1 text-sm text-gray-600">
                Pre-scoped transformation services with fixed price and timeline.
              </p>
            </div>
            <button
              type="button"
              onClick={handleAskAI}
              className="shrink-0 text-sm font-medium text-orange-600 hover:text-orange-500"
            >
              Need help choosing? Ask Butler
            </button>
          </div>

          <div className="relative mt-5 max-w-xl">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search services..."
              className="h-10 rounded-lg border-navy-200 bg-white pl-10 pr-9 text-sm"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-navy-950"
                aria-label="Clear search"
              >
                <X size={15} />
              </button>
            )}
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-6">
        <div id="catalog-grid" className="scroll-mt-20 space-y-5">
          {showBestSellers && (
            <MarketplaceBestSellers
              activeTab="all"
              selectedIndustry={selectedIndustries.length > 0 ? selectedIndustries[0] : "all"}
            />
          )}

          <MarketplaceCategoryNav
            activeTab={activeTab}
            onTabChange={applyCollectionFilter}
          />

          <div className="flex flex-col lg:flex-row lg:items-start gap-6">
            <aside
              className={`lg:w-56 shrink-0 ${
                sidebarOpen ? "block" : "hidden lg:block"
              }`}
            >
              <div className="lg:sticky lg:top-24">
                <MarketplaceFilters
                  selectedIndustries={selectedIndustries}
                  onIndustryChange={handleIndustryChange}
                  selectedGoals={selectedGoals}
                  onGoalChange={handleGoalChange}
                  selectedServiceTypes={selectedServiceTypes}
                  onServiceTypeChange={handleServiceTypeChange}
                  onClearAll={clearAllFilters}
                  showClearAll={hasActiveFilters}
                />
              </div>
            </aside>

            <main className="min-w-0 flex-1">
              {showBestSellers && (
                <p className="mb-3 text-sm font-semibold text-navy-950">
                  All services
                </p>
              )}
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="h-9 gap-1.5 rounded-lg border-navy-100 lg:hidden"
                  >
                    <Filter size={14} />
                    Filters
                  </Button>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-navy-950">
                      {catalogServices.length}
                    </span>
                    {catalogServices.length === 1 ? " service" : " services"}
                  </p>
                </div>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="h-9 w-[10.5rem] border-navy-100 bg-white text-sm rounded-lg">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Most popular</SelectItem>
                    <SelectItem value="fastest">Fastest delivery</SelectItem>
                    <SelectItem value="price-low">Lowest price</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {activeFilterChips.length > 0 && (
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  {activeFilterChips.map((chip) => (
                    <button
                      key={chip.key}
                      type="button"
                      onClick={chip.onRemove}
                      className="inline-flex items-center gap-1 rounded-full border border-navy-100 bg-slate-50 py-1 pl-2.5 pr-1.5 text-xs font-medium text-navy-950 hover:bg-slate-100"
                    >
                      {chip.label}
                      <X size={12} className="text-gray-400" />
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={clearAllFilters}
                    className="text-xs font-medium text-orange-600 hover:text-orange-500"
                  >
                    Clear all
                  </button>
                </div>
              )}

              {catalogServices.length === 0 ? (
                <div className="rounded-xl border border-navy-100 bg-white p-12 text-center">
                  <Search
                    size={32}
                    className="mx-auto mb-4 text-gray-300"
                    strokeWidth={1.5}
                  />
                  <h3 className="text-sm font-semibold text-navy-950">
                    No services match
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Try fewer filters or a different category.
                  </p>
                  <Button
                    type="button"
                    onClick={clearAllFilters}
                    className="mt-6 h-9 rounded-lg bg-navy-950 px-5 text-sm text-white hover:bg-navy-900"
                  >
                    Reset filters
                  </Button>
                </div>
              ) : (
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {catalogServices.map((pkg) => (
                    <ServiceProductCard
                      key={pkg.id}
                      service={pkg}
                      variant="grid"
                      displayName={getRemixedName(pkg, selectedIndustries.length > 0 ? selectedIndustries[0] : "all")}
                    />
                  ))}
                </div>
              )}
            </main>
          </div>
        </div>
      </div>

      <Footer />

      <DiagnoseDialog
        isOpen={isDialogOpen}
        onClose={() => {
          setIsDialogOpen(false);
          setDialogPrompt("");
        }}
        initialProblem={dialogPrompt}
      />
    </div>
  );
};

export default Marketplace;
