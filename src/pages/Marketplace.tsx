import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Globe, 
  Users, 
  Database, 
  ShieldCheck, 
  Filter, 
  Search, 
  ArrowRight, 
  Sparkles, 
  Percent, 
  Star, 
  DollarSign, 
  Clock, 
  CheckCircle,
  Building,
  Activity,
  Layers,
  ChevronDown,
  Zap,
  Lock,
  Shield,
  TrendingUp,
  ShoppingBag,
  Plus,
  Minus,
  Trash2,
  ChevronRight,
  ShoppingCart,
  HelpCircle,
  X,
  Award,
  HeartHandshake
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MeshSection from "@/components/site/MeshSection";
import DiagnoseDialog from "@/components/DiagnoseDialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { initialServices, getRemixedName } from "@/data/services";

const prices = [
  { id: "under-2k", label: "Under $2k", max: 2000 },
  { id: "2k-3k", label: "$2k - $3k", min: 2000, max: 3000 },
  { id: "3k-plus", label: "$3k+", min: 3000 }
];

const industriesList = [
  { id: "retail", label: "Retail & E-commerce", icon: ShoppingCart },
  { id: "banking", label: "Banking & Finance", icon: Building },
  { id: "healthcare", label: "Healthcare & Biotech", icon: Activity },
  { id: "logistics", label: "Logistics & Supply Chain", icon: Globe },
  { id: "government", label: "Government & Public", icon: ShieldCheck },
  { id: "education", label: "Education & Academy", icon: Users }
];

const outcomesList = [
  { id: "Grow Revenue", label: "Grow Revenue" },
  { id: "Launch AI Capabilities", label: "Launch AI Capabilities" },
  { id: "Improve Customer Experience", label: "Improve Customer Experience" },
  { id: "Modernize Operations", label: "Modernize Operations" },
  { id: "Accelerate Delivery", label: "Accelerate Delivery" },
  { id: "Improve Compliance", label: "Improve Compliance" }
];

const outcomeDiscoveryCards = [
  { id: "Launch AI Capabilities", title: "Launch AI Capabilities", subtitle: "Operational value: Adopt intelligence safely" },
  { id: "Improve Customer Experience", title: "Improve Customer Experience", subtitle: "Operational value: Grow brand loyalty" },
  { id: "Modernize Operations", title: "Modernize Operations", subtitle: "Operational value: Reduce manual overhead" },
  { id: "Accelerate Delivery", title: "Accelerate Delivery", subtitle: "Operational value: Speed to market" }
];

const companySizes = [
  { id: "mid-market", label: "Mid-Market" },
  { id: "enterprise", label: "Enterprise" }
];

const deliveryComplexities = [
  { id: "low", label: "Low Complexity" },
  { id: "medium", label: "Medium Complexity" },
  { id: "high", label: "High Complexity" }
];

const departmentsList = [
  { id: "IT & Product Engineering", label: "IT & Engineering" },
  { id: "Customer Service", label: "Customer Service" },
  { id: "Marketing & Sales", label: "Marketing & Sales" },
  { id: "Operations & HR", label: "Operations & HR" }
];

const Marketplace = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState<string>("all");
  const [selectedOutcome, setSelectedOutcome] = useState<string>("all");
  const [selectedDepartment, setSelectedDepartment] = useState<string>("all");
  const [selectedPrice, setSelectedPrice] = useState<string>("all");
  const [selectedSize, setSelectedSize] = useState<string>("all");
  const [selectedComplexity, setSelectedComplexity] = useState<string>("all");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogPrompt, setDialogPrompt] = useState("");
  const [sortBy, setSortBy] = useState("popular");

  const filteredServices = useMemo(() => {
    return initialServices.filter((pkg) => {
      const matchesCollection = activeTab === "all" || pkg.collection === activeTab;
      const matchesOutcome = selectedOutcome === "all" || pkg.outcomes.includes(selectedOutcome);
      const matchesDept = selectedDepartment === "all" || pkg.department === selectedDepartment;
      const matchesComplexity = selectedComplexity === "all" || pkg.deliveryComplexity === selectedComplexity;
      const matchesSize = selectedSize === "all" || pkg.audience.toLowerCase().includes(selectedSize.toLowerCase());

      const priceNum = parseInt(pkg.price.replace(/[$,]/g, ""));
      let matchesPrice = true;
      if (selectedPrice === "under-2k") {
        matchesPrice = priceNum < 2000;
      } else if (selectedPrice === "2k-3k") {
        matchesPrice = priceNum >= 2000 && priceNum <= 3000;
      } else if (selectedPrice === "3k-plus") {
        matchesPrice = priceNum > 3000;
      }

      const matchesSearch = searchQuery === "" || 
        pkg.standardName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        getRemixedName(pkg, selectedIndustry).toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
        pkg.features.some(feat => feat.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCollection && matchesOutcome && matchesDept && matchesComplexity && matchesSize && matchesPrice && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === "popular") return b.popularityRank - a.popularityRank;
      if (sortBy === "price-low") return parseInt(a.price.replace(/[$,]/g, "")) - parseInt(b.price.replace(/[$,]/g, ""));
      if (sortBy === "fastest") return parseInt(a.duration) - parseInt(b.duration);
      return 0;
    });
  }, [activeTab, searchQuery, selectedOutcome, selectedDepartment, selectedComplexity, selectedSize, selectedPrice, selectedIndustry, sortBy]);

  const handleStartOnboarding = (pkgName: string) => {
    setDialogPrompt(`I would like to get started with the ${pkgName} service.`);
    setIsDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* SECTION 1: Clean Enterprise Directory Header */}
      <MeshSection variant="heroLight" grid className="pt-20 pb-8 border-b border-navy-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl text-left">
              <h1 className="font-heading text-3xl font-bold tracking-tight text-navy-950 mb-3">
                Transformation Marketplace
              </h1>
              <p className="text-sm leading-relaxed text-gray-500">
                Browse pre-scoped transformation services tailored to your operational priorities, industry requirements, and growth objectives.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
              <Button variant="outline" className="w-full sm:w-auto rounded-xl border-navy-100 text-navy-950 shadow-sm text-xs font-semibold h-10 hover:bg-slate-50">
                Browse Services
              </Button>
              <Button variant="outline" className="w-full sm:w-auto rounded-xl border-navy-100 text-navy-950 shadow-sm text-xs font-semibold h-10 hover:bg-slate-50">
                Compare Solutions
              </Button>
              <a href="#" className="w-full sm:w-auto text-center text-[11px] font-semibold text-orange-600 hover:text-orange-500 mt-2 sm:mt-0 px-2">
                Need help selecting a service?
              </a>
            </div>
          </div>

          {/* Simple Clean Search Bar Below Header */}
          <div className="mt-8 relative max-w-3xl">
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search transformation services or by business objective..."
              className="pl-12 pr-4 py-6 text-sm rounded-xl border border-navy-100 bg-white focus:ring-2 focus:ring-orange-500/20 placeholder:text-gray-400 shadow-sm"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-4 text-gray-400 hover:text-navy-950 transition"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>
      </MeshSection>

      {/* Main Stores Container */}
      <div className="mx-auto max-w-7xl px-6 py-8 text-left">
        
        {/* Outcome-Led Discovery */}
        <div className="mb-12">
          <h2 className="text-sm font-bold text-navy-950 mb-4">Discover by Outcome</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {outcomeDiscoveryCards.map(outcome => (
              <div 
                key={outcome.id}
                className="rounded-xl border border-navy-100 bg-white p-5 shadow-sm flex flex-col justify-between items-start text-left cursor-pointer hover:border-orange-500 hover:shadow-md transition-all group"
                onClick={() => {
                  setSelectedOutcome(outcome.id);
                  document.getElementById('catalog-grid')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <div>
                  <h4 className="text-[13px] font-bold text-navy-950 mb-1 group-hover:text-orange-600 transition-colors">{outcome.title}</h4>
                  <p className="text-[10px] text-gray-500 leading-relaxed">
                    {outcome.subtitle}
                  </p>
                </div>
                <button
                  className="mt-4 text-[10px] font-bold text-orange-600 hover:text-orange-500 flex items-center gap-1"
                >
                  <span>Get Started</span>
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Marketplace Collections */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-bold text-navy-950">Featured Marketplace Collections</h2>
            <a href="#" className="text-[11px] font-semibold text-orange-600 hover:text-orange-500 flex items-center gap-1">
              View All Collections <ChevronRight size={12} />
            </a>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              "Fast Launch Services", 
              "Enterprise Governance Solutions", 
              "AI Transformation Bundles", 
              "Customer Experience Accelerators", 
              "Most Adopted by Financial Services", 
              "Operations Efficiency Packs"
            ].map((collection, idx) => (
              <button 
                key={idx}
                className="rounded-full border border-navy-100 bg-white px-4 py-2 text-[11px] font-semibold text-navy-950 shadow-sm hover:border-navy-950 hover:bg-slate-50 transition"
              >
                {collection}
              </button>
            ))}
          </div>
        </div>

        {/* Main Explorer section grid */}
        <div id="catalog-grid" className="scroll-mt-8 border-t border-navy-50 pt-8">
          <div className="mb-6 flex flex-col lg:flex-row justify-between items-start lg:items-center border-b border-navy-50 pb-4 gap-4">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-5xl">
              <TabsList className="flex flex-wrap lg:grid lg:w-full lg:grid-cols-6 border border-navy-100 bg-white p-1 shadow-sm rounded-xl gap-1">
                <TabsTrigger value="all" className="data-[state=active]:bg-navy-950 data-[state=active]:text-white rounded-lg text-[11px]">
                  All Services
                </TabsTrigger>
                <TabsTrigger value="ai" className="data-[state=active]:bg-navy-950 data-[state=active]:text-white rounded-lg text-[11px]">
                  AI & Automation
                </TabsTrigger>
                <TabsTrigger value="cx" className="data-[state=active]:bg-navy-950 data-[state=active]:text-white rounded-lg text-[11px]">
                  Customer Experience
                </TabsTrigger>
                <TabsTrigger value="ops" className="data-[state=active]:bg-navy-950 data-[state=active]:text-white rounded-lg text-[11px]">
                  Operations Modernization
                </TabsTrigger>
                <TabsTrigger value="growth" className="data-[state=active]:bg-navy-950 data-[state=active]:text-white rounded-lg text-[11px]">
                  Growth & Commerce
                </TabsTrigger>
                <TabsTrigger value="gov" className="data-[state=active]:bg-navy-950 data-[state=active]:text-white rounded-lg text-[11px]">
                  Governance & Compliance
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <Button
              variant="outline"
              size="sm"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="gap-2 hidden lg:flex rounded-lg border-navy-100 bg-white text-navy-950 shadow-sm hover:bg-slate-50"
            >
              <Filter size={14} />
              <span>{sidebarOpen ? "Hide Filters" : "Show Filters"}</span>
            </Button>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside className={`w-full lg:w-64 shrink-0 ${sidebarOpen ? "block" : "hidden"}`}>
              <div className="sticky top-24 space-y-6">
                
                {/* Industry Selection */}
                <div>
                  <label className="mb-2.5 block text-xs font-bold text-navy-950 uppercase tracking-wider flex items-center gap-1.5">
                    <Building size={12} className="text-gray-400" />
                    <span>Industry Sector</span>
                  </label>
                  <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                    <SelectTrigger className="border-navy-100 bg-white text-xs font-medium text-navy-950 rounded-lg shadow-sm">
                      <SelectValue placeholder="All Industries" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">General Catalog</SelectItem>
                      {industriesList.map((ind) => (
                        <SelectItem key={ind.id} value={ind.id}>{ind.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Outcome filter */}
                <div>
                  <label className="mb-2.5 block text-xs font-bold text-navy-950 uppercase tracking-wider flex items-center gap-1.5">
                    <Zap size={12} className="text-gray-400" />
                    <span>Target Outcome</span>
                  </label>
                  <Select value={selectedOutcome} onValueChange={setSelectedOutcome}>
                    <SelectTrigger className="border-navy-100 bg-white text-xs font-medium text-navy-950 rounded-lg shadow-sm">
                      <SelectValue placeholder="All Outcomes" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Outcomes</SelectItem>
                      {outcomesList.map((o) => (
                        <SelectItem key={o.id} value={o.id}>{o.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Target Department */}
                <div>
                  <label className="mb-2.5 block text-xs font-bold text-navy-950 uppercase tracking-wider flex items-center gap-1.5">
                    <Users size={12} className="text-gray-400" />
                    <span>Business Unit</span>
                  </label>
                  <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                    <SelectTrigger className="border-navy-100 bg-white text-xs font-medium text-navy-950 rounded-lg shadow-sm">
                      <SelectValue placeholder="All Departments" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Departments</SelectItem>
                      {departmentsList.map((d) => (
                        <SelectItem key={d.id} value={d.id}>{d.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Delivery Complexity Target */}
                <div>
                  <label className="mb-2.5 block text-xs font-bold text-navy-950 uppercase tracking-wider flex items-center gap-1.5">
                    <Shield size={12} className="text-gray-400" />
                    <span>Delivery Complexity</span>
                  </label>
                  <div className="flex flex-wrap gap-1.5 text-left">
                    {deliveryComplexities.map((mt) => (
                      <button
                        key={mt.id}
                        onClick={() => setSelectedComplexity(selectedComplexity === mt.id ? "all" : mt.id)}
                        className={`px-3 py-1.5 border rounded-lg text-[10px] font-semibold transition ${
                          selectedComplexity === mt.id ? "border-navy-950 bg-navy-950 text-white" : "border-navy-100 bg-white text-navy-950 shadow-sm"
                        }`}
                      >
                        {mt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Company Size */}
                <div>
                  <label className="mb-2.5 block text-xs font-bold text-navy-950 uppercase tracking-wider flex items-center gap-1.5">
                    <Building size={12} className="text-gray-400" />
                    <span>Company Sizing</span>
                  </label>
                  <div className="flex gap-2 text-left">
                    {companySizes.map((sz) => (
                      <button
                        key={sz.id}
                        onClick={() => setSelectedSize(selectedSize === sz.id ? "all" : sz.id)}
                        className={`flex-1 py-1.5 border rounded-lg text-[10px] font-semibold transition ${
                          selectedSize === sz.id ? "border-navy-950 bg-navy-950 text-white" : "border-navy-100 bg-white text-navy-950 shadow-sm"
                        }`}
                      >
                        {sz.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget Investment */}
                <div>
                  <label className="mb-2.5 block text-xs font-bold text-navy-950 uppercase tracking-wider flex items-center gap-1.5">
                    <DollarSign size={12} className="text-gray-400" />
                    <span>Investment Limit</span>
                  </label>
                  <Select value={selectedPrice} onValueChange={setSelectedPrice}>
                    <SelectTrigger className="border-navy-100 bg-white text-xs font-medium text-navy-950 rounded-lg shadow-sm">
                      <SelectValue placeholder="All Investments" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Budgets</SelectItem>
                      {prices.map((p) => (
                        <SelectItem key={p.id} value={p.id}>{p.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Sorting */}
                <div>
                  <label className="mb-2.5 block text-xs font-bold text-navy-950 uppercase tracking-wider flex items-center gap-1.5">
                    <Filter size={12} className="text-gray-400" />
                    <span>Sort Services By</span>
                  </label>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="border-navy-100 bg-white text-xs font-medium text-navy-950 rounded-lg shadow-sm">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="popular">Most Popular</SelectItem>
                      <SelectItem value="fastest">Fastest Deployment</SelectItem>
                      <SelectItem value="price-low">Lowest Investment</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Clear filters button */}
                {(selectedOutcome !== "all" || selectedPrice !== "all" || selectedIndustry !== "all" || selectedSize !== "all" || selectedComplexity !== "all" || selectedDepartment !== "all" || searchQuery) && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSelectedIndustry("all");
                      setSelectedOutcome("all");
                      setSelectedDepartment("all");
                      setSelectedPrice("all");
                      setSelectedSize("all");
                      setSelectedComplexity("all");
                      setSearchQuery("");
                      setSortBy("popular");
                    }}
                    className="w-full rounded-lg border-navy-100 bg-white text-navy-950 shadow-sm hover:bg-slate-50 transition font-semibold"
                  >
                    Clear All Filters
                  </Button>
                )}
              </div>
            </aside>

            {/* Catalog Grid panel */}
            <main className="flex-1">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">
                  {filteredServices.length} {filteredServices.length === 1 ? "Service" : "Services"} Found
                </p>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="gap-2 lg:hidden rounded-lg border-navy-100 bg-white text-navy-950 shadow-sm"
                >
                  <Filter size={14} />
                  Filters
                </Button>
              </div>

              {filteredServices.length === 0 ? (
                <div className="rounded-xl border border-navy-100 bg-white p-12 text-center shadow-sm">
                  <Search size={32} className="mx-auto mb-4 text-gray-300" />
                  <h3 className="mb-2 text-sm font-bold text-navy-950">No Services Found</h3>
                  <p className="text-xs text-gray-500 mb-6 max-w-sm mx-auto leading-relaxed">
                    Adjust your filter criteria to discover more transformation services.
                  </p>
                  <Button
                    onClick={() => {
                      setSelectedIndustry("all");
                      setSelectedOutcome("all");
                      setSelectedDepartment("all");
                      setSelectedPrice("all");
                      setSelectedSize("all");
                      setSelectedComplexity("all");
                      setSearchQuery("");
                    }}
                    className="rounded-lg bg-navy-950 text-white hover:bg-navy-900 transition px-6 text-xs h-9"
                  >
                    Reset Filters
                  </Button>
                </div>
              ) : (
                <div className="grid gap-5 md:grid-cols-2">
                  <AnimatePresence mode="wait">
                    {filteredServices.map((pkg, i) => {
                      const displayTitle = getRemixedName(pkg, selectedIndustry);
                      
                      return (
                        <motion.div
                          key={pkg.id}
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.25, delay: i * 0.03 }}
                          className="group flex flex-col justify-between rounded-xl border border-navy-100 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md text-left"
                        >
                          <div>
                            <div className="flex items-start justify-between mb-3">
                              <span className="rounded bg-slate-100 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-slate-600">
                                {pkg.collection === "ai" 
                                  ? "AI & Automation" 
                                  : pkg.collection === "cx" 
                                  ? "Customer Experience" 
                                  : pkg.collection === "ops" 
                                  ? "Operations Modernization"
                                  : pkg.collection === "growth"
                                  ? "Growth & Commerce"
                                  : "Governance & Compliance"}
                              </span>
                              {pkg.badge && (
                                <span className="rounded bg-orange-50 border border-orange-100 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-orange-700">
                                  {pkg.badge}
                                </span>
                              )}
                            </div>

                            <h3 className="text-[15px] font-bold tracking-tight text-navy-950">
                              {displayTitle}
                            </h3>
                            <p className="mt-2 text-[11px] leading-relaxed text-gray-500 line-clamp-2">
                              {descriptionFormatting(pkg.description)}
                            </p>

                            <div className="mt-4 border-t border-slate-100 pt-3">
                              <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-2">Included Deliverables</div>
                              <ul className="grid gap-1.5 grid-cols-1">
                                {pkg.features.slice(0, 4).map((feat) => (
                                  <li key={feat} className="flex items-start gap-2 text-[11px] text-gray-600">
                                    <div className="h-1 w-1 bg-gray-400 rounded-full shrink-0 mt-1.5" />
                                    <span className="leading-tight">{feat}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div>
                            <div className="mt-5 grid grid-cols-2 gap-4 border-y border-slate-100 py-3 mb-5">
                              <div>
                                <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Investment</div>
                                <div className="text-xs font-bold text-navy-950 mt-0.5">{pkg.price}</div>
                              </div>
                              <div>
                                <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Timeline</div>
                                <div className="text-xs font-bold text-navy-950 mt-0.5">{pkg.duration}</div>
                              </div>
                            </div>

                            {/* Standardized Commercial CTAs */}
                            <div className="flex gap-2">
                              <button
                                onClick={() => handleStartOnboarding(pkg.standardName)}
                                className="flex-1 inline-flex items-center justify-center rounded-lg bg-navy-950 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-navy-900 transition gap-1.5 group/btn"
                              >
                                Get Started
                                <ArrowRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
                              </button>
                              
                              <button
                                onClick={() => navigate(`/service/${pkg.id}`)}
                                className="flex-1 inline-flex items-center justify-center rounded-lg border border-navy-100 bg-white py-2.5 text-xs font-semibold text-navy-950 hover:bg-slate-50 transition"
                              >
                                View Details
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>
              )}
            </main>
          </div>
        </div>
      </div>

      <Footer />

      <DiagnoseDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        initialProblem={dialogPrompt}
      />
    </div>
  );
};

// Helper to keep descriptions clean
function descriptionFormatting(desc: string) {
  return desc;
}

export default Marketplace;
