import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { 
  ArrowLeft, 
  CheckCircle2, 
  ArrowRight,
  Clock,
  Briefcase,
  Users,
  ShieldCheck,
  Building,
  Activity,
  Layers,
  ChevronRight,
  Shield,
  Zap,
  ShoppingCart,
  Check,
  Info,
  Sparkles,
} from "lucide-react";
import { toast } from "sonner";
import { useCart } from "@/contexts/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import MeshSection from "@/components/site/MeshSection";
import DiagnoseDialog from "@/components/DiagnoseDialog";
import RequestOfferDialog from "@/components/RequestOfferDialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { initialServices, getRemixedName } from "@/data/services";
import { marketplaceServiceTypeLabels, marketplaceCategoryLabels } from "@/data/marketplaceNavigation";
import { deployModulesData } from "@/data/deployModules";

const ADVISORY_DELIVERABLES = [
  "Opportunity Areas", "Transformation Vision", "Initial Recommendations"
];

const DESIGN_DELIVERABLES = [
  "Opportunity Areas", "Transformation Vision", "Initial Recommendations", 
  "Solution Blueprint", "Process Design", "Operating Model", 
  "Prototype", "Delivery Backlog", "Technical Specifications", 
  "Deployment Roadmap", "KPI Model", "Executive Brief"
];

const DEPLOY_DELIVERABLES = [
  "Validated MVP Direction", "Priority User Flows", "Initial Product Backlog",
  "Solution Blueprint", "Technical Specifications", "Delivery Plan",
  "Production MVP", "Deployment Package", "Support & Handover"
];

const BUNDLE_DELIVERABLES = [
  "Grouped capabilities", "Combined deliverables", 
  "Phased transformation outputs", "Linked services"
];

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isOfferDialogOpen, setIsOfferDialogOpen] = useState(false);
  const [dialogPrompt, setDialogPrompt] = useState("");
  const { addItem, hasItem, openCart } = useCart();

  const service = initialServices.find(s => s.id === parseInt(id || "0"));

  const isAdvisoryService = service && service.serviceType === "advisory";
  const isDesignService = service && ["design", "ai_design"].includes(service.serviceType);
  const isDeployService = service && ["deploy", "ai_deploy"].includes(service.serviceType);
  const requiresQuoteCTA = isDeployService || (service && (service.serviceType === "manage" || service.serviceType === "bundle"));

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-dq-navy mb-4">Service Not Found</h2>
        <Button onClick={() => navigate("/marketplace")} className="bg-navy-950">
          Return to Marketplace
        </Button>
      </div>
    );
  }

  const relatedServicesData = initialServices.filter(s => service.relatedServices?.includes(s.id));
  
  const getDeployModules = (name: string) => {
    if (deployModulesData[name]) return deployModulesData[name];
    const baseNameMatch = name.match(/^(.*?)\s*\(/);
    if (baseNameMatch) {
      const baseName = baseNameMatch[1];
      const matchingKey = Object.keys(deployModulesData).find(key => key.startsWith(baseName));
      if (matchingKey) return deployModulesData[matchingKey];
    }
    return [];
  };

  const deployModules = isDeployService ? getDeployModules(service.standardName) : [];

  const handleStartOnboarding = (pkgName: string) => {
    setDialogPrompt(`I would like to get started with the ${pkgName} service.`);
    setIsDialogOpen(true);
  };

  const getStageFromServiceType = (type: string) => {
    if (type === "advisory") return "Assess";
    if (type === "design" || type === "ai_design") return "Design";
    if (type === "deploy" || type === "ai_deploy") return "Implementation";
    if (type === "manage") return "Managed";
    return "";
  };
  const currentStage = getStageFromServiceType(service.serviceType);
  const LIFECYCLE_STAGES = ["Assess", "Design", "Implementation", "Managed"];

  const baseSolutionMatch = service.standardName.match(/^(.*?)\s*\(/);
  const baseSolutionName = baseSolutionMatch ? baseSolutionMatch[1] : "";
  
  let designServiceName = "";
  let bundleServiceName = "";
  if (isDeployService) {
    if (service.serviceType === "deploy") {
      designServiceName = service.standardName.replace("Implementation", "Design");
    } else if (service.serviceType === "ai_deploy") {
      designServiceName = service.standardName.replace("AI Implementation", "AI Design");
    }
    bundleServiceName = service.standardName.replace(/-\s*(?:AI\s*)?Implementation$/, "- Transformation Bundle");
  }

  const designServiceObj = isDeployService ? initialServices.find(s => s.standardName === designServiceName) : null;
  const bundleServiceObj = isDeployService ? initialServices.find(s => s.standardName === bundleServiceName) : null;

  let recommendedBundles: any[] = [];
  if (service && service.serviceType !== "bundle") {
    const specificBundleName = service.standardName.replace(/\s+(Advisory|Design|AI Design|Implementation|AI Implementation|Managed Operations)$/, "") + " - Transformation Bundle";
    const specificBundle = initialServices.find(s => s.standardName === specificBundleName);
    
    if (specificBundle) {
      recommendedBundles.push(specificBundle);
    } else {
      let fallbackSetName = "Managed Services set";
      if (["advisory", "design", "ai_design"].includes(service.serviceType)) {
        fallbackSetName = "Design Services set";
      } else if (["deploy", "ai_deploy"].includes(service.serviceType)) {
        fallbackSetName = "Deploy Services set";
      }
      const fallbackBundle = initialServices.find(s => s.standardName === fallbackSetName);
      if (fallbackBundle) {
        recommendedBundles.push(fallbackBundle);
      }
    }
  }

  return (
    <div className="min-h-screen bg-background text-left">
      <Navbar />

      {/* 1. SERVICE HERO SECTION & ACTIVATION PANEL */}
      <MeshSection variant="heroLight" grid className="px-5 pb-16 pt-28 md:px-8 md:pt-36 lg:px-10">
        <div className="mx-auto max-w-[1200px]">
          <Link 
            to="/marketplace"
            className="mb-8 inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 transition-colors hover:text-dq-navy"
          >
            <ArrowLeft size={14} />
            Back to Marketplace
          </Link>

          <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
            {/* Left Side: Commercial Clarity */}
            <div>
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="rounded bg-slate-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-600 inline-block">
                  {marketplaceServiceTypeLabels[service.serviceType] || service.serviceType}
                </span>
                {service.standardName.includes("(High-Impact)") && (
                  <span className="inline-flex items-center gap-1 rounded bg-navy-950 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                    <Zap size={10} className="fill-white" />
                    High-Impact
                  </span>
                )}
              </div>
              
              <h1 className="mb-4 text-4xl font-semibold leading-tight tracking-tight text-dq-navy md:text-5xl">
                {service.standardName.replace(" (High-Impact)", "")}
              </h1>
              
              <p className="text-lg md:text-xl leading-relaxed text-gray-600 mb-8">
                {service.description}
              </p>

              <div className="grid grid-cols-2 gap-6 border-t border-gray-100 pt-8 md:grid-cols-2">
                <div>
                  <div className="mb-1.5 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-gray-400">
                    <Clock size={12} /> Timeline
                  </div>
                  <div className="text-sm font-semibold text-dq-navy">{service.duration}</div>
                </div>
                <div>
                  <div className="mb-1.5 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-gray-400">
                    <Users size={12} /> Target Size
                  </div>
                  <div className="text-sm font-semibold text-dq-navy">{service.audience}</div>
                </div>
                <div>
                  <div className="mb-1.5 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-gray-400">
                    <Layers size={12} /> Category
                  </div>
                  <div className="text-sm font-semibold text-dq-navy">{marketplaceCategoryLabels[service.collection] || service.collection}</div>
                </div>
                <div>
                  <div className="mb-1.5 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-gray-400">
                    <Building size={12} /> Industry Sector Relevance
                  </div>
                  <div className="text-sm font-semibold text-dq-navy">All</div>
                </div>
              </div>
            </div>

            {/* Right Side: Activation Panel */}
            <div className="relative">
              <div className="sticky top-28 rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">
                <div className="mb-6 flex items-baseline justify-between border-b border-gray-100 pb-6">
                  <div>
                    <div className="mb-1 font-mono text-[10px] uppercase tracking-[0.18em] text-gray-400">Starting Investment</div>
                    <div className="text-3xl font-semibold text-dq-navy">{service.price}</div>
                  </div>
                  <div className="text-right">
                    <div className="mb-1 font-mono text-[10px] uppercase tracking-[0.18em] text-gray-400">Est. Timeline</div>
                    <div className="text-sm font-semibold text-dq-navy">{service.duration}</div>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="mt-0.5 text-dq-orange" />
                    <div>
                      <div className="text-xs font-semibold text-dq-navy">SLA-backed Delivery</div>
                      <div className="text-[11px] text-gray-500">Guaranteed outcomes & timelines</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="mt-0.5 text-dq-orange" />
                    <div>
                      <div className="text-xs font-semibold text-dq-navy">Included Specialists</div>
                      <div className="text-[11px] text-gray-500">Dedicated TMaaS transformation team</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="mt-0.5 text-dq-orange" />
                    <div>
                      <div className="text-xs font-semibold text-dq-navy">Governance Assurance</div>
                      <div className="text-[11px] text-gray-500">Architecture-led milestone tracking</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {isDeployService && designServiceObj && bundleServiceObj ? (
                    <div className="space-y-4 pt-2 border-t border-navy-50">
                      <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
                        <Info className="text-blue-500 mt-0.5 shrink-0" size={18} />
                        <div>
                          <h4 className="text-xs font-bold text-dq-navy mb-1">Prerequisite</h4>
                          <p className="text-[11px] text-gray-600 leading-relaxed">
                            Requires the <span className="font-semibold text-dq-navy">{baseSolutionName} Design</span> service to be completed prior to deployment.
                          </p>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Button
                          className="w-full h-12 bg-dq-orange hover:bg-[#E04020] text-white font-bold rounded-full text-sm flex items-center justify-center gap-2 group"
                          onClick={() => navigate(`/service/${designServiceObj.id}`)}
                        >
                          View Design Service
                          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button 
                          variant="outline" 
                          className="w-full h-10 bg-white border-slate-200 text-dq-navy hover:bg-slate-50 font-bold rounded-full text-xs"
                          onClick={() => navigate(`/service/${bundleServiceObj.id}`)}
                        >
                          Or Get the Full Bundle
                        </Button>
                      </div>
                    </div>
                  ) : requiresQuoteCTA ? (
                    <Button
                      className="w-full h-12 bg-dq-orange hover:bg-[#E04020] text-white font-bold rounded-full text-sm flex items-center justify-center gap-2 group"
                      onClick={() => setIsOfferDialogOpen(true)}
                    >
                      Request Quote
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Button>
                  ) : (
                    <>
                      <Button
                        className={`w-full h-12 font-bold rounded-full text-sm flex items-center justify-center gap-2 ${
                          hasItem(service.id)
                            ? "bg-orange-50 border border-orange-200 text-orange-700 hover:bg-orange-100"
                            : "bg-dq-orange hover:bg-[#E04020] text-white"
                        }`}
                        onClick={() => {
                          addItem(service.id);
                          toast.success("Added to cart", {
                            description: service.standardName,
                            action: { label: "View cart", onClick: openCart },
                          });
                        }}
                      >
                        {hasItem(service.id) ? (
                          <>
                            <Check size={16} />
                            In cart — add another
                          </>
                        ) : (
                          <>
                            <ShoppingCart size={16} />
                            Add to cart
                          </>
                        )}
                      </Button>
                      <Button
                        className="w-full h-12 bg-dq-navy hover:bg-dq-navy/90 text-white font-bold rounded-full text-sm flex items-center justify-center gap-2 group"
                        onClick={() => handleStartOnboarding(service.standardName)}
                      >
                        <Sparkles size={16} className="text-orange-400" />
                        Ask AI
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full h-12 border-navy-200 bg-white text-dq-navy hover:bg-slate-50 font-bold rounded-full text-sm"
                        onClick={() => navigate("/cart")}
                      >
                        View cart
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </MeshSection>

      <div className="mx-auto grid max-w-[1200px] gap-20 px-5 py-24 md:px-8 lg:grid-cols-[1fr_380px] lg:px-10">
        
        {/* Main Content Flow */}
        <div className="space-y-20">
          
          {/* 1.5 WHERE THIS FITS SECTION */}
          {service.serviceType !== "bundle" && currentStage && (
            <section>
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-dq-orange">Lifecycle</p>
              <h2 className="mb-6 text-4xl font-semibold tracking-tight text-dq-navy md:text-5xl">Where This Fits</h2>
              <div className="flex items-center gap-2 md:gap-4 flex-wrap">
                {LIFECYCLE_STAGES.map((stage, idx) => {
                  const isActive = currentStage === stage;
                  return (
                    <div key={stage} className="flex items-center gap-2 md:gap-4">
                      <div className={`flex items-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                        isActive 
                          ? 'scale-105 bg-dq-orange text-white shadow-md' 
                          : 'border border-gray-200 bg-white text-gray-500'
                      }`}>
                        {isActive && <CheckCircle2 size={16} />}
                        {stage}
                      </div>
                      {idx < LIFECYCLE_STAGES.length - 1 && (
                        <ChevronRight size={20} className="text-slate-300 shrink-0" />
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* 2. BUSINESS OUTCOMES SECTION */}
          {service.serviceType !== "bundle" && (
            <section>
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-dq-orange">Outcomes</p>
              <h2 className="mb-6 text-4xl font-semibold tracking-tight text-dq-navy md:text-5xl">What This Service Helps You Achieve</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.outcomes.map((outcome, idx) => (
                  <div key={idx} className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-4 transition-all duration-300 hover:border-dq-orange hover:shadow-xl">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-dq-orange">
                      <Activity size={16} />
                    </div>
                    <span className="text-sm font-semibold text-dq-navy">{outcome}</span>
                  </div>
                ))}
                <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-4 transition-all duration-300 hover:border-dq-orange hover:shadow-xl">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-dq-orange">
                    <Activity size={16} />
                  </div>
                  <span className="text-sm font-semibold text-dq-navy">Establish governance foundations</span>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-4 transition-all duration-300 hover:border-dq-orange hover:shadow-xl">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-dq-orange">
                    <Activity size={16} />
                  </div>
                  <span className="text-sm font-semibold text-dq-navy">Accelerate enterprise adoption</span>
                </div>
              </div>
            </section>
          )}

          {/* 2.5 BUNDLE INCLUDED SERVICES */}
          {service.serviceType === "bundle" && service.relatedServices && service.relatedServices.length > 0 && (
            <section>
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-dq-orange">Bundle</p>
              <h2 className="mb-6 text-4xl font-semibold tracking-tight text-dq-navy md:text-5xl">What's Included</h2>
              <p className="text-sm text-gray-600 mb-8 leading-relaxed max-w-2xl">
                This transformation bundle includes the following comprehensive services to ensure end-to-end delivery of your solution.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.relatedServices
                  .map((id: number) => initialServices.find(s => s.id === id))
                  .filter((s: any) => s && s.serviceType !== "advisory")
                  .map((s: any) => (
                    <div key={s.id} className="flex flex-col rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:border-dq-orange hover:shadow-xl">
                      <div className="mb-3 flex items-center gap-2">
                        <span className="rounded bg-slate-100 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-slate-600">
                          {marketplaceServiceTypeLabels[s.serviceType] || s.serviceType}
                        </span>
                        {s.standardName.includes("(High-Impact)") && (
                          <span className="inline-flex items-center gap-1 rounded bg-navy-950 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
                            <Zap size={9} className="fill-white" />
                            High-Impact
                          </span>
                        )}
                      </div>
                      <h3 className="text-sm font-bold leading-snug text-dq-navy mb-2">
                        {s.standardName.replace(" (High-Impact)", "")}
                      </h3>
                      <p className="line-clamp-2 text-xs leading-relaxed text-gray-500 mb-4 flex-1">
                        {s.description}
                      </p>
                      <button 
                        onClick={() => navigate(`/service/${s.id}`)}
                        className="text-[11px] font-bold text-dq-navy flex items-center gap-1 hover:text-dq-orange transition-colors mt-auto"
                      >
                        View Details <ArrowRight size={12} />
                      </button>
                    </div>
                  ))}
              </div>
            </section>
          )}

          {/* 3. WHAT'S INCLUDED */}
          {service.serviceType !== "bundle" && (
            <section>
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-dq-orange">Deliverables</p>
              <h2 className="mb-6 text-4xl font-semibold tracking-tight text-dq-navy md:text-5xl">Included Deliverables</h2>
              <p className="text-sm text-gray-600 mb-8 leading-relaxed max-w-2xl">
                This is a productized transformation service. You receive clear, scoped deliverables managed under strict SLA agreements to ensure predictable outcomes.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {(isAdvisoryService ? ADVISORY_DELIVERABLES :
                  isDesignService ? DESIGN_DELIVERABLES :
                  isDeployService ? DEPLOY_DELIVERABLES :
                  service.features).map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-5 transition-all duration-300 hover:border-dq-orange hover:shadow-xl">
                    <div className="mt-0.5">
                      <CheckCircle2 size={18} className="text-dq-orange" />
                    </div>
                    <span className="text-sm font-semibold text-dq-navy leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 3.5 MODULES & APPLICATIONS (DEPLOY ONLY) */}
          {isDeployService && deployModules.length > 0 && (
            <section>
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-dq-orange">Architecture</p>
              <h2 className="mb-6 text-4xl font-semibold tracking-tight text-dq-navy md:text-5xl">Modules & Applications</h2>
              <p className="text-sm text-gray-600 mb-8 leading-relaxed max-w-2xl">
                The target architecture and functional components implemented during the build phase.
              </p>
              <Accordion type="single" collapsible className="w-full space-y-4">
                {deployModules.map((module, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="rounded-2xl border border-gray-200 bg-white px-5 transition-all duration-300 hover:border-dq-orange hover:shadow-xl">
                    <AccordionTrigger className="text-sm font-bold text-dq-navy hover:no-underline hover:text-dq-orange">
                      {module.name}
                    </AccordionTrigger>
                    <AccordionContent className="pt-2 pb-5 border-t border-navy-50">
                      <ul className="grid sm:grid-cols-2 gap-y-3 gap-x-6 mt-4">
                        {module.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5">
                            <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-dq-orange shrink-0" />
                            <span className="text-sm text-gray-600 leading-snug">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          )}

          {/* 4. DELIVERY APPROACH */}
          <section>
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-dq-orange">Delivery</p>
            <h2 className="mb-6 text-4xl font-semibold tracking-tight text-dq-navy md:text-5xl">How Delivery Works</h2>
            <div className="relative ml-4 space-y-8 border-l border-gray-200 pb-4">
              
              {isAdvisoryService && (
                <div className="relative pl-8">
                  <div className="absolute -left-3.5 top-0 h-7 w-7 rounded-full bg-dq-orange flex items-center justify-center text-[10px] font-semibold text-white border-4 border-white shadow-sm">1</div>
                  <h3 className="text-base font-bold text-dq-navy mb-1">Assess <span className="text-gray-400 font-normal ml-2 text-sm">(1 Week)</span></h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We begin by understanding your organisation, current challenges, workflows, systems, and transformation goals. This helps us identify the highest-value opportunities for digital and AI enablement.
                  </p>
                </div>
              )}

              {isDesignService && (
                <>
                  <div className="relative pl-8">
                    <div className="absolute -left-3.5 top-0 h-7 w-7 rounded-full bg-dq-orange flex items-center justify-center text-[10px] font-semibold text-white border-4 border-white shadow-sm">1</div>
                    <h3 className="text-base font-bold text-dq-navy mb-1">Discover <span className="text-gray-400 font-normal ml-2 text-sm">(1 Week)</span></h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      We begin by understanding your organisation, current challenges, workflows, systems, and transformation goals. This helps us identify the highest-value opportunities for digital and AI enablement.
                    </p>
                  </div>
                  <div className="relative pl-8">
                    <div className="absolute -left-3.5 top-0 h-7 w-7 rounded-full bg-dq-navy flex items-center justify-center text-[10px] font-semibold text-white border-4 border-white shadow-sm">2</div>
                    <h3 className="text-base font-bold text-dq-navy mb-1">Design <span className="text-gray-400 font-normal ml-2 text-sm">(1 Week)</span></h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      We design the target experience, workflows, operating model, and AI-supported processes required to deliver measurable business outcomes.
                    </p>
                  </div>
                  <div className="relative pl-8">
                    <div className="absolute -left-3.5 top-0 h-7 w-7 rounded-full bg-dq-navy flex items-center justify-center text-[10px] font-semibold text-white border-4 border-white shadow-sm">3</div>
                    <h3 className="text-base font-bold text-dq-navy mb-1">Prototype <span className="text-gray-400 font-normal ml-2 text-sm">(1 Week)</span></h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      We convert the approved direction into implementation-ready assets including prototypes, specifications, backlog items, and deployment requirements.
                    </p>
                  </div>
                  <div className="relative pl-8">
                    <div className="absolute -left-3.5 top-0 h-7 w-7 rounded-full bg-dq-navy flex items-center justify-center text-[10px] font-semibold text-white border-4 border-white shadow-sm">4</div>
                    <h3 className="text-base font-bold text-dq-navy mb-1">Launch Plan <span className="text-gray-400 font-normal ml-2 text-sm">(1 Week)</span></h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      We provide executive guidance, KPI recommendations, rollout planning, and deployment support to help your organisation move confidently into implementation.
                    </p>
                  </div>
                </>
              )}

              {isDeployService && (
                <>
                  <div className="relative pl-8">
                    <div className="absolute -left-3.5 top-0 h-7 w-7 rounded-full bg-dq-orange flex items-center justify-center text-[10px] font-semibold text-white border-4 border-white shadow-sm">1</div>
                    <h3 className="text-base font-bold text-dq-navy mb-1">Discover & Validate <span className="text-gray-400 font-normal ml-2 text-sm">(1 Week)</span></h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      We validate the business problem, define the MVP scope, and align the solution direction before development begins.
                    </p>
                  </div>
                  <div className="relative pl-8">
                    <div className="absolute -left-3.5 top-0 h-7 w-7 rounded-full bg-dq-navy flex items-center justify-center text-[10px] font-semibold text-white border-4 border-white shadow-sm">2</div>
                    <h3 className="text-base font-bold text-dq-navy mb-1">Solution Design <span className="text-gray-400 font-normal ml-2 text-sm">(1 Week)</span></h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      We translate the approved concept into implementation-ready specifications, architecture, and delivery planning.
                    </p>
                  </div>
                  <div className="relative pl-8">
                    <div className="absolute -left-3.5 top-0 h-7 w-7 rounded-full bg-dq-navy flex items-center justify-center text-[10px] font-semibold text-white border-4 border-white shadow-sm">3</div>
                    <h3 className="text-base font-bold text-dq-navy mb-1">Build & Launch <span className="text-gray-400 font-normal ml-2 text-sm">(10 Weeks)</span></h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      We develop, test, deploy, and activate the MVP in a production-ready environment.
                    </p>
                  </div>
                </>
              )}

              {service.serviceType === "bundle" && (
                <>
                  <div className="relative pl-8">
                    <div className="absolute -left-3.5 top-0 h-7 w-7 rounded-full bg-dq-orange flex items-center justify-center text-[10px] font-semibold text-white border-4 border-white shadow-sm">1</div>
                    <h3 className="text-base font-bold text-dq-navy mb-1">Assess & Discover <span className="text-gray-400 font-normal ml-2 text-sm">(1 Week)</span></h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      We evaluate your organization's current workflows, identify opportunities for digital and AI enablement, and align on the overarching transformation strategy.
                    </p>
                  </div>
                  <div className="relative pl-8">
                    <div className="absolute -left-3.5 top-0 h-7 w-7 rounded-full bg-dq-navy flex items-center justify-center text-[10px] font-semibold text-white border-4 border-white shadow-sm">2</div>
                    <h3 className="text-base font-bold text-dq-navy mb-1">Design & Prototype <span className="text-gray-400 font-normal ml-2 text-sm">(4 Weeks)</span></h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      We design the target experience, define architecture, establish governance, and create implementation-ready prototypes and specifications for the deployment phase.
                    </p>
                  </div>
                  <div className="relative pl-8">
                    <div className="absolute -left-3.5 top-0 h-7 w-7 rounded-full bg-dq-navy flex items-center justify-center text-[10px] font-semibold text-white border-4 border-white shadow-sm">3</div>
                    <h3 className="text-base font-bold text-dq-navy mb-1">Build & Launch <span className="text-gray-400 font-normal ml-2 text-sm">(10 Weeks)</span></h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Our TMaaS specialists execute the solution build, integrating AI components, conducting rigorous testing, and launching the capability into your production environment.
                    </p>
                  </div>
                  <div className="relative pl-8">
                    <div className="absolute -left-3.5 top-0 h-7 w-7 rounded-full bg-dq-navy flex items-center justify-center text-[10px] font-semibold text-white border-4 border-white shadow-sm">4</div>
                    <h3 className="text-base font-bold text-dq-navy mb-1">Managed Operations <span className="text-gray-400 font-normal ml-2 text-sm">(Ongoing)</span></h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      We provide continuous monitoring, incident resolution, performance optimization, and lifecycle governance to ensure sustained business value from your transformation.
                    </p>
                  </div>
                </>
              )}
              
              {service.serviceType === "manage" && (
                <>
                  <div className="relative pl-8">
                    <div className="absolute -left-3.5 top-0 h-7 w-7 rounded-full bg-dq-orange flex items-center justify-center text-[10px] font-semibold text-white border-4 border-white shadow-sm">1</div>
                    <h3 className="text-base font-bold text-dq-navy mb-2">Discovery & Alignment</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      We assess operational priorities, organizational readiness, and strategic objectives before initiation.
                    </p>
                  </div>
                  <div className="relative pl-8">
                    <div className="absolute -left-3.5 top-0 h-7 w-7 rounded-full bg-dq-navy flex items-center justify-center text-[10px] font-semibold text-white border-4 border-white shadow-sm">2</div>
                    <h3 className="text-base font-bold text-dq-navy mb-2">Service Delivery</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      TMaaS specialists execute the scoped transformation activities using standardized governance controls.
                    </p>
                  </div>
                  <div className="relative pl-8">
                    <div className="absolute -left-3.5 top-0 h-7 w-7 rounded-full bg-dq-navy flex items-center justify-center text-[10px] font-semibold text-white border-4 border-white shadow-sm">3</div>
                    <h3 className="text-base font-bold text-dq-navy mb-2">Governance & Oversight</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Progress, milestones, and delivery quality are tracked directly through TMaaS governance workflows.
                    </p>
                  </div>
                </>
              )}

            </div>
          </section>

          {/* 7. RECOMMENDED BUNDLES (Desktop Bottom) */}
          {service.serviceType !== "bundle" && recommendedBundles.length > 0 && (
            <section className="pt-8 border-t border-navy-50 hidden lg:block">
              <h2 className="text-lg font-bold tracking-tight text-dq-navy mb-6">Recommended Bundles</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {recommendedBundles.map(bundle => (
                  <div key={bundle.id} className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:border-dq-orange hover:shadow-xl">
                    <h4 className="text-sm font-bold text-dq-navy mb-1 group-hover:text-dq-orange transition-colors">{bundle.standardName}</h4>
                    <p className="text-[11px] text-gray-500 mb-4 line-clamp-2">{bundle.description || bundle.positioning}</p>
                    <button 
                      onClick={() => {
                        navigate(`/service/${bundle.id}`);
                        window.scrollTo(0, 0);
                      }}
                      className="text-[11px] font-bold text-dq-navy flex items-center gap-1 hover:text-dq-orange transition-colors mt-auto"
                    >
                      View Bundle <ArrowRight size={12} />
                    </button>
                  </div>
                ))}
              </div>
            </section>
          )}

        </div>

        {/* Sidebar Content Flow */}
        <div className="space-y-8">
          
          {/* 5. GOVERNANCE & TRUST SECTION */}
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <h3 className="text-sm font-bold tracking-tight text-dq-navy mb-5 flex items-center gap-2">
              <ShieldCheck size={18} className="text-dq-orange" />
              Delivery Confidence & Governance
            </h3>
            <ul className="space-y-4">
              {[
                "SLA-backed delivery timelines",
                "Architecture-led governance oversight",
                "Milestone-based execution tracking",
                "Delivery visibility through TMaaS",
                "Structured stakeholder reporting",
                "Standardized quality controls"
              ].map((trust, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <div className="mt-1 h-1 w-1 rounded-full bg-slate-400 shrink-0" />
                  <span className="text-xs text-dq-navy font-medium leading-relaxed">{trust}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 6. IDEAL FOR SECTION */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-sm font-bold tracking-tight text-dq-navy mb-4 flex items-center gap-2">
              <Briefcase size={18} className="text-gray-400" />
              Ideal For
            </h3>
            <div className="flex flex-wrap gap-2">
              {service.tags.map((tag, idx) => (
                <span key={idx} className="rounded-md bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-700 border border-slate-200">
                  {tag}
                </span>
              ))}
              <span className="rounded-md bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-700 border border-slate-200">
                Governance-sensitive environments
              </span>
              <span className="rounded-md bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-700 border border-slate-200">
                Enterprise & Mid-Market
              </span>
            </div>
          </div>

          {/* 7. RECOMMENDED BUNDLES (Mobile Fallback) */}
          {service.serviceType !== "bundle" && recommendedBundles.length > 0 && (
            <div className="lg:hidden mt-8">
              <h3 className="text-sm font-bold tracking-tight text-dq-navy mb-4">Recommended Bundles</h3>
              <div className="grid gap-4">
                {recommendedBundles.map(bundle => (
                  <div key={bundle.id} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm flex flex-col">
                    <h4 className="text-xs font-bold text-dq-navy mb-1">{bundle.standardName}</h4>
                    <button 
                      onClick={() => {
                        navigate(`/service/${bundle.id}`);
                        window.scrollTo(0, 0);
                      }}
                      className="text-[10px] font-bold text-orange-600 mt-2 flex items-center gap-1 mt-auto"
                    >
                      View Bundle <ArrowRight size={12} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>

      {/* 9. FINAL CTA SECTION */}
      <MeshSection variant="ctaOrange" className="px-5 py-24 text-center md:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Ready to Get Started?
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-white/70">
            Launch your transformation initiative with structured delivery, governance oversight, and dedicated TMaaS specialists.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            {requiresQuoteCTA ? (
              <Button
                className="group flex h-12 items-center justify-center gap-2 rounded-full bg-dq-orange px-8 text-sm font-semibold text-white hover:bg-[#E04020]"
                onClick={() => setIsOfferDialogOpen(true)}
              >
                Request Quote
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Button>
            ) : (
              <>
                <Button
                  className="group flex h-12 items-center justify-center gap-2 rounded-full bg-dq-orange px-8 text-sm font-semibold text-white hover:bg-[#E04020]"
                  onClick={() => handleStartOnboarding(service.standardName)}
                >
                  Get Started
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  variant="outline"
                  className="flex h-12 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/20"
                  onClick={() => handleStartOnboarding(service.standardName)}
                >
                  <Sparkles size={16} className="text-dq-orange" />
                  Ask AI
                </Button>
              </>
            )}
          </div>
        </div>
      </MeshSection>

      <RequestOfferDialog
        isOpen={isOfferDialogOpen}
        onClose={() => setIsOfferDialogOpen(false)}
        serviceName={service.standardName}
      />

      <DiagnoseDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        initialProblem={dialogPrompt}
      />
      <Footer />
    </div>
  );
};

export default ServiceDetail;
