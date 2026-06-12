import { useState, useMemo, useEffect, useCallback } from "react";
import Seo from "@/components/Seo";
import JsonLd from "@/components/JsonLd";
import { MARKETPLACE_SEO, absoluteUrl } from "@/lib/seo";
import { buildMarketplaceStructuredData } from "@/lib/structuredData";
import { initialServices } from "@/data/services";
import { getDisplayTitle } from "@/components/service-detail/serviceDetailHelpers";
import { useSearchParams } from "react-router-dom";
import LandingNavbar from "@/components/site/landing/LandingNavbar";
import Footer from "@/components/Footer";
import { Filter, LayoutGrid, List, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import MarketplaceCategoryNav from "@/components/marketplace/MarketplaceCategoryNav";
import MarketplaceFilters from "@/components/marketplace/MarketplaceFilters";
import MarketplaceBestSellers from "@/components/marketplace/MarketplaceBestSellers";
import MarketplacePagination from "@/components/marketplace/MarketplacePagination";
import ServiceProductCard from "@/components/marketplace/ServiceProductCard";
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
import { useBestSellers, useMarketplaceListings } from "@/hooks/useCatalog";
import type { MarketplaceSortBy } from "@/lib/marketplaceCatalogFilters";
import { getRemixedName } from "@/lib/serviceProductUtils";

const PAGE_SIZE = 15;
type ViewMode = "grid" | "list";

// Removed old labels

const Marketplace = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedIncluded, setSelectedIncluded] = useState<string[]>([]);
  const [selectedSectors, setSelectedSectors] = useState<string[]>([]);
  const [selectedServiceTypes, setSelectedServiceTypes] = useState<string[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sortBy, setSortBy] = useState<MarketplaceSortBy>("popular");
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState<ViewMode>("grid");

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
    setSelectedSectors((prev) =>
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
  const bestSellerCollection = activeTab === "all" ? "all" : activeTab;
  const { data: bestSellers = [] } = useBestSellers(bestSellerCollection, 4, showBestSellers);
  const excludeVariantIds = useMemo(
    () => (showBestSellers ? bestSellers.map((service) => service.id) : []),
    [bestSellers, showBestSellers]
  );

  const catalogListParams = useMemo(
    () => ({
      page: currentPage,
      pageSize: PAGE_SIZE,
      activeTab,
      searchQuery,
      selectedCategories,
      selectedServiceTypes,
      selectedIncluded,
      selectedSectors,
      sortBy,
      excludeVariantIds,
    }),
    [
      activeTab,
      currentPage,
      excludeVariantIds,
      searchQuery,
      selectedCategories,
      selectedIncluded,
      selectedSectors,
      selectedServiceTypes,
      sortBy,
    ]
  );

  const { services: paginatedServices, totalCount: catalogServicesCount } =
    useMarketplaceListings(catalogListParams);

  const totalPages = Math.max(1, Math.ceil(catalogServicesCount / PAGE_SIZE));

  useEffect(() => {
    setCurrentPage(1);
  }, [
    activeTab,
    searchQuery,
    selectedCategories,
    selectedIncluded,
    selectedSectors,
    selectedServiceTypes,
    sortBy,
  ]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const showingFrom = catalogServicesCount === 0 ? 0 : (currentPage - 1) * PAGE_SIZE + 1;
  const showingTo = Math.min(currentPage * PAGE_SIZE, catalogServicesCount);

  const handlePageChange = useCallback(
    (page: number) => {
      setCurrentPage(page);
      scrollToCatalog();
    },
    [scrollToCatalog]
  );

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
      const label = marketplaceCategoryLabels[cat] ?? cat;
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



  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={MARKETPLACE_SEO.title}
        description={MARKETPLACE_SEO.description}
        path={MARKETPLACE_SEO.path}
      />
      <JsonLd
        data={buildMarketplaceStructuredData(
          initialServices.map((service) => ({
            id: service.id,
            name: getDisplayTitle(service.standardName, service.serviceType),
            url: absoluteUrl(`/service/${service.id}`),
          })),
        )}
      />
      <LandingNavbar />

      <MeshSection variant="heroLight" grid className="px-5 pb-8 pt-20 md:px-8 md:pb-10 md:pt-24 lg:px-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="dq-eyebrow">
            Digital transformation marketplace
          </p>
          <h1 className="mt-4 text-balance text-[2.25rem] font-semibold leading-[1.05] tracking-[-0.02em] text-dq-navy min-[400px]:text-[2.75rem] sm:text-5xl md:text-6xl lg:text-7xl">
            Browse transformation services
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 md:text-lg">
            Explore 200+ transformation services across AI, experience,
            operations, and security.
          </p>

          <div className="relative mt-6 flex w-full items-center">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search services by name, category, or keyword…"
              className="h-11 w-full rounded-xl border-gray-200 bg-white pl-11 pr-10 text-sm shadow-sm transition-all duration-300 focus-visible:border-dq-orange focus-visible:ring-dq-orange"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center justify-center text-gray-400 hover:text-dq-orange"
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>
      </MeshSection>

      <section className="bg-background px-5 pb-16 pt-2 md:px-8 lg:px-10">
        <div className="mx-auto max-w-[1280px]">
          <div id="catalog-grid" className="scroll-mt-32">
            {showBestSellers && (
              <div className="mb-10">
                <MarketplaceBestSellers
                  activeTab="all"
                  selectedIndustry={selectedSectors.length > 0 ? selectedSectors[0] : "all"}
                />
              </div>
            )}

            {showBestSellers && (
              <h2 className="mb-6 text-2xl font-semibold tracking-tight text-dq-navy">
                All services
              </h2>
            )}

            <MarketplaceCategoryNav
              activeTab={activeTab}
              onTabChange={applyCollectionFilter}
            />

            <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-start">
              <aside
                className={`lg:w-[240px] shrink-0 ${
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
                <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
                  <div className="flex min-w-0 items-center gap-3">
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => setSidebarOpen(!sidebarOpen)}
                      className="h-9 shrink-0 gap-1.5 rounded-lg border-gray-200 lg:hidden"
                    >
                      <Filter size={14} />
                      Filters
                    </Button>
                    <p className="min-w-0 text-sm text-gray-600">
                      {catalogServicesCount === 0 ? (
                        <>0 services</>
                      ) : (
                        <>
                          Showing{" "}
                          <span className="font-semibold text-dq-navy">
                            {showingFrom}–{showingTo}
                          </span>{" "}
                          of{" "}
                          <span className="font-semibold text-dq-navy">
                            {catalogServicesCount}
                          </span>{" "}
                          {catalogServicesCount === 1 ? "service" : "services"}
                        </>
                      )}
                    </p>
                  </div>

                  <div className="flex w-full items-center justify-between gap-3 sm:w-auto sm:justify-end">
                    <Select
                      value={sortBy}
                      onValueChange={(value) => setSortBy(value as MarketplaceSortBy)}
                    >
                      <SelectTrigger className="h-9 w-full min-w-0 max-w-[10.5rem] rounded-lg border-gray-200 bg-white text-sm shadow-none sm:w-[10.5rem]">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="popular">Most popular</SelectItem>
                        <SelectItem value="fastest">Fastest delivery</SelectItem>
                        <SelectItem value="price-low">Lowest price</SelectItem>
                      </SelectContent>
                    </Select>

                    <div className="flex items-center rounded-lg border border-gray-200 bg-white p-0.5">
                      <button
                        type="button"
                        onClick={() => setViewMode("grid")}
                        aria-label="Grid view"
                        aria-pressed={viewMode === "grid"}
                        className={`flex h-8 w-8 items-center justify-center rounded-md transition-colors ${
                          viewMode === "grid"
                            ? "bg-navy-50 text-dq-navy"
                            : "text-gray-400 hover:text-gray-600"
                        }`}
                      >
                        <LayoutGrid size={16} />
                      </button>
                      <button
                        type="button"
                        onClick={() => setViewMode("list")}
                        aria-label="List view"
                        aria-pressed={viewMode === "list"}
                        className={`flex h-8 w-8 items-center justify-center rounded-md transition-colors ${
                          viewMode === "list"
                            ? "bg-navy-50 text-dq-navy"
                            : "text-gray-400 hover:text-gray-600"
                        }`}
                      >
                        <List size={16} />
                      </button>
                    </div>
                  </div>
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
                    className="text-xs font-medium text-dq-navy hover:text-dq-navy/80"
                  >
                    Clear all
                  </button>
                </div>
              )}

              {catalogServicesCount === 0 ? (
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
                    Try fewer filters or a different search term.
                  </p>
                  <Button
                    type="button"
                    onClick={clearAllFilters}
                    className="mt-6 h-9 rounded-full bg-dq-navy px-5 text-sm text-white hover:bg-dq-navy/90"
                  >
                    Reset filters
                  </Button>
                </div>
              ) : (
                <div className="pb-4">
                  <div
                    className={
                      viewMode === "grid"
                        ? "grid items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-3"
                        : "flex flex-col gap-4"
                    }
                  >
                    {paginatedServices.map((pkg) => (
                      <ServiceProductCard
                        key={pkg.id}
                        service={pkg}
                        variant={viewMode}
                        displayName={getRemixedName(
                          pkg,
                          selectedSectors.length > 0 ? selectedSectors[0] : "all"
                        )}
                      />
                    ))}
                  </div>

                  <MarketplacePagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                </div>
              )}
            </main>
          </div>
        </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Marketplace;
