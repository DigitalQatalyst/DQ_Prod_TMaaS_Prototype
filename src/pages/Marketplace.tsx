import { useState, useMemo, useEffect, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Filter, Search, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DiagnoseDialog from "@/components/DiagnoseDialog";
import MarketplaceCategoryNav from "@/components/marketplace/MarketplaceCategoryNav";
import MarketplaceFilters from "@/components/marketplace/MarketplaceFilters";
import MarketplaceBestSellers from "@/components/marketplace/MarketplaceBestSellers";
import ServiceProductCard from "@/components/marketplace/ServiceProductCard";
import { getBestSellers } from "@/data/services";
import MeshSection from "@/components/site/MeshSection";
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
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedIncluded, setSelectedIncluded] = useState<string[]>([]);
  const [selectedSectors, setSelectedIndustries] = useState<string[]>([]);
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
    if (collection) {
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

  const handleCategoryChange = useCallback((value: string) => {
    setSelectedCategories((prev) =>
      prev.includes(value) ? prev.filter((i) => i !== value) : [...prev, value]
    );
  }, []);

  const handleIncludedChange = useCallback((value: string) => {
    setSelectedIncluded((prev) =>
      prev.includes(value) ? prev.filter((i) => i !== value) : [...prev, value]
    );
  }, []);

  const handleSectorChange = useCallback((value: string) => {
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
    setSelectedSectors([]);
    setSelectedCategories([]);
    setSelectedIncluded([]);
    setSelectedServiceTypes([]);
    setSearchQuery("");
    setSortBy("popular");
    setActiveTab("all");
    setSearchParams({}, { replace: true });
  }, [setSearchParams]);

  const hasRefinementFilters =
    selectedCategories.length > 0 ||
    selectedIncluded.length > 0 ||
    selectedSectors.length > 0 ||
    selectedServiceTypes.length > 0 ||
    searchQuery !== "";

  const hasActiveFilters = hasRefinementFilters || activeTab !== "all";

  const showBestSellers = !hasRefinementFilters && activeTab !== "bundles";

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
      const isBundle = (pkg as any).serviceType === "bundle";
      
      if (activeTab === "bundles") {
        if (!isBundle) return false;
      } else {
        if (isBundle) return false;
      }

      const matchesCollection = activeTab === "all" || activeTab === "bundles" || pkg.collection === activeTab;
      
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(pkg.collection);

      let matchesIncluded = true;
      if (selectedIncluded.length > 0) {
        if (selectedIncluded.includes("multi") && !selectedIncluded.includes("single")) {
          matchesIncluded = isBundle;
        } else if (selectedIncluded.includes("single") && !selectedIncluded.includes("multi")) {
          matchesIncluded = !isBundle;
        }
      }

      const matchesServiceType =
        selectedServiceTypes.length === 0 || selectedServiceTypes.includes((pkg as any).serviceType);

      // Extract the first active industry for remixing name, fallback to 'general'
      const activeIndustry = selectedSectors.length > 0 ? selectedSectors[0] : "all";

      const matchesSearch = searchQuery === "" || 
        pkg.standardName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        getRemixedName(pkg, activeIndustry).toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
        pkg.features.some(feat => feat.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCollection && matchesCategory && matchesIncluded && matchesServiceType && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === "popular") return b.popularityRank - a.popularityRank;
      if (sortBy === "price-low") return parseInt(a.price.replace(/[$,]/g, "")) - parseInt(b.price.replace(/[$,]/g, ""));
      if (sortBy === "fastest") return parseInt(a.duration) - parseInt(b.duration);
      return 0;
    });
  }, [activeTab, searchQuery, selectedCategories, selectedIncluded, selectedServiceTypes, selectedSectors, sortBy]);

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
    selectedCategories.forEach((cat) => {
      const label = cat === "experience" ? "Digital Experience" : cat === "operations" ? "Digital Work System" : cat === "security" ? "SecDevOps" : cat === "ai" ? "Digital Intelligence & Analytics" : cat;
      chips.push({
        key: `cat-${cat}`,
        label: `Category: ${label}`,
        onRemove: () => handleCategoryChange(cat),
      });
    });

    selectedIncluded.forEach((inc) => {
      chips.push({
        key: `inc-${inc}`,
        label: `Included: ${inc === "multi" ? "Multi-service" : "Single-service"}`,
        onRemove: () => handleIncludedChange(inc),
      });
    });

    selectedSectors.forEach((sector) => {
      chips.push({
        key: `sector-${sector}`,
        label: `Sector: ${sector}`,
        onRemove: () => handleSectorChange(sector),
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
    selectedCategories,
    selectedIncluded,
    selectedSectors,
    selectedServiceTypes,
    searchQuery,
    applyCollectionFilter,
    handleCategoryChange,
    handleIncludedChange,
    handleSectorChange,
    handleServiceTypeChange,
  ]);



  const handleAskAI = () => {
    setDialogPrompt("");
    setIsDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <MeshSection variant="heroLight" grid className="px-5 pb-16 pt-28 md:px-8 md:pt-36 lg:px-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="animate-fade-in-up font-mono text-[11px] uppercase tracking-[0.2em] text-dq-orange">
            Marketplace
          </p>
          <h1 className="animate-fade-in-up animation-delay-200 mt-4 text-4xl font-semibold tracking-tight text-dq-navy md:text-5xl">
            Transformation Services Marketplace
          </h1>
          <p className="animate-fade-in-up animation-delay-300 mt-4 max-w-xl text-base leading-relaxed text-gray-600">
            Discover architecture-led transformation services across digital experience, digital operations, AI enablement, and enterprise modernization.
          </p>

          <div className="animate-fade-in-up animation-delay-300 relative mt-8 flex w-full items-center">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <Input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search services or describe your transformation goals…"
              className="h-14 w-full rounded-2xl border-gray-200 bg-white pl-12 pr-44 text-base shadow-sm transition-all duration-300 focus-visible:border-dq-orange focus-visible:ring-dq-orange"
            />
            <div className="absolute right-2 top-1/2 flex -translate-y-1/2 items-center gap-3">
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="flex h-full items-center justify-center text-gray-400 hover:text-dq-navy"
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
              <Button
                type="button"
                size="sm"
                onClick={handleAskAI}
                className="flex h-10 items-center gap-1.5 rounded-full bg-dq-orange px-4 text-xs font-semibold text-white hover:bg-[#E04020]"
              >
                <Sparkles size={14} className="fill-white" />
                Or Ask AI
              </Button>
            </div>
          </div>
          <p className="mt-3 max-w-lg text-[10px] leading-relaxed text-gray-400">
            By using Butler, you agree that your prompt may be processed to recommend TMaaS services. Do not submit confidential data.
          </p>
        </div>
      </MeshSection>

      <div className="mx-auto max-w-[1200px] px-5 py-6 md:px-8 lg:px-10">
        <div id="catalog-grid" className="scroll-mt-32 space-y-5">
          {showBestSellers && (
            <MarketplaceBestSellers
              activeTab="all"
              selectedIndustry={selectedSectors.length > 0 ? selectedSectors[0] : "all"}
            />
          )}

          {showBestSellers && (
            <h3 className="text-2xl font-semibold tracking-tight text-dq-navy">
              All services
            </h3>
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
              <div className="lg:sticky lg:top-32">
                <MarketplaceFilters
                  selectedSectors={selectedSectors}
                  onSectorChange={handleSectorChange}
                  selectedCategories={selectedCategories}
                  onCategoryChange={handleCategoryChange}
                  selectedIncluded={selectedIncluded}
                  onIncludedChange={handleIncludedChange}
                  selectedServiceTypes={selectedServiceTypes}
                  onServiceTypeChange={handleServiceTypeChange}
                  onClearAll={clearAllFilters}
                  showClearAll={hasActiveFilters}
                />
              </div>
            </aside>

            <main className="min-w-0 flex-1">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="h-9 gap-1.5 rounded-full border-gray-200 lg:hidden"
                  >
                    <Filter size={14} />
                    Filters
                  </Button>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-dq-navy">
                      {catalogServices.length}
                    </span>
                    {catalogServices.length === 1 ? " service" : " services"}
                  </p>
                </div>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="h-9 w-[10.5rem] rounded-lg border-gray-200 bg-white text-sm">
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
                      className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-gray-50 py-1 pl-2.5 pr-1.5 text-xs font-medium text-dq-navy hover:bg-gray-100"
                    >
                      {chip.label}
                      <X size={12} className="text-gray-400" />
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={clearAllFilters}
                    className="text-xs font-medium text-dq-orange hover:text-[#E04020]"
                  >
                    Clear all
                  </button>
                </div>
              )}

              {catalogServices.length === 0 ? (
                <div className="rounded-2xl border border-gray-200 bg-white p-12 text-center">
                  <Search
                    size={32}
                    className="mx-auto mb-4 text-gray-300"
                    strokeWidth={1.5}
                  />
                  <h3 className="text-sm font-semibold text-dq-navy">
                    No services match
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Try fewer filters or a different category. Not sure where to start?
                  </p>
                  <Button
                    type="button"
                    onClick={handleAskAI}
                    variant="outline"
                    className="mx-2 mt-6 h-9 rounded-full border-gray-200 text-sm font-semibold text-dq-navy"
                  >
                    Use AI Guidance
                  </Button>
                  <Button
                    type="button"
                    onClick={clearAllFilters}
                    className="mx-2 mt-6 h-9 rounded-full bg-dq-navy px-5 text-sm text-white hover:bg-dq-navy/90"
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
                      displayName={getRemixedName(pkg, selectedSectors.length > 0 ? selectedSectors[0] : "all")}
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
