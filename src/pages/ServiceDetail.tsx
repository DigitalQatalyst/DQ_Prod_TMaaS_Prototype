import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
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
} from "lucide-react";
import { toast } from "sonner";
import { useCart } from "@/contexts/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import MeshSection from "@/components/site/MeshSection";
import DiagnoseDialog from "@/components/DiagnoseDialog";
import { initialServices, getRemixedName } from "@/data/services";

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogPrompt, setDialogPrompt] = useState("");
  const { addItem, hasItem, openCart } = useCart();

  const service = initialServices.find(s => s.id === parseInt(id || "0"));

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-navy-950 mb-4">Service Not Found</h2>
        <Button onClick={() => navigate("/marketplace")} className="bg-navy-950">
          Return to Marketplace
        </Button>
      </div>
    );
  }

  const relatedServicesData = initialServices.filter(s => service.relatedServices?.includes(s.id));

  const handleStartOnboarding = (pkgName: string) => {
    setDialogPrompt(`I would like to get started with the ${pkgName} service.`);
    setIsDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-left">
      <Navbar />

      {/* 1. SERVICE HERO SECTION & ACTIVATION PANEL */}
      <MeshSection variant="heroLight" grid className="pt-28 pb-16 border-b border-navy-50">
        <div className="mx-auto max-w-7xl px-6">
          <Link 
            to="/marketplace"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 transition-colors hover:text-navy-950 mb-8"
          >
            <ArrowLeft size={14} />
            Back to Marketplace
          </Link>

          <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
            {/* Left Side: Commercial Clarity */}
            <div>
              <span className="rounded bg-slate-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-4 inline-block">
                Transformation Service
              </span>
              
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-navy-950 mb-4 leading-tight">
                {service.standardName}
              </h1>
              
              <p className="text-lg md:text-xl leading-relaxed text-gray-600 mb-8">
                {service.positioning}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 border-t border-navy-50 pt-8">
                <div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Clock size={12} /> Timeline
                  </div>
                  <div className="text-sm font-semibold text-navy-950">{service.duration}</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Zap size={12} /> Delivery Model
                  </div>
                  <div className="text-sm font-semibold text-navy-950">{service.implementationModel}</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Users size={12} /> Target Size
                  </div>
                  <div className="text-sm font-semibold text-navy-950">{service.audience}</div>
                </div>
                <div className="col-span-2 md:col-span-3">
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Building size={12} /> Industry Relevance
                  </div>
                  <div className="text-sm font-semibold text-navy-950">{service.industryRelevance || "Cross-Industry Application"}</div>
                </div>
              </div>
            </div>

            {/* Right Side: Activation Panel */}
            <div className="relative">
              <div className="sticky top-28 rounded-2xl border border-navy-100 bg-white p-6 shadow-elevated">
                <div className="mb-6 flex items-baseline justify-between border-b border-navy-50 pb-6">
                  <div>
                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Starting Investment</div>
                    <div className="text-3xl font-bold text-navy-950">{service.price}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Est. Timeline</div>
                    <div className="text-sm font-bold text-navy-950">{service.duration}</div>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-orange-500 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-navy-950">SLA-backed Delivery</div>
                      <div className="text-[11px] text-gray-500">Guaranteed outcomes & timelines</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-orange-500 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-navy-950">Included Specialists</div>
                      <div className="text-[11px] text-gray-500">Dedicated TMaaS transformation team</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-orange-500 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-navy-950">Governance Assurance</div>
                      <div className="text-[11px] text-gray-500">Architecture-led milestone tracking</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button
                    className={`w-full h-12 font-bold rounded-xl text-sm flex items-center justify-center gap-2 ${
                      hasItem(service.id)
                        ? "bg-orange-50 border border-orange-200 text-orange-700 hover:bg-orange-100"
                        : "bg-orange-500 hover:bg-orange-400 text-white"
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
                    className="w-full h-12 bg-navy-950 hover:bg-navy-900 text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2 group"
                    onClick={() => handleStartOnboarding(service.standardName)}
                  >
                    Ask Butler
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full h-12 border-navy-200 bg-white text-navy-950 hover:bg-slate-50 font-bold rounded-xl text-sm"
                    onClick={() => navigate("/cart")}
                  >
                    View cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MeshSection>

      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-20 lg:grid-cols-[1fr_380px]">
        
        {/* Main Content Flow */}
        <div className="space-y-20">
          
          {/* 2. BUSINESS OUTCOMES SECTION */}
          <section>
            <h2 className="text-2xl font-bold tracking-tight text-navy-950 mb-6">What This Service Helps You Achieve</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {service.outcomes.map((outcome, idx) => (
                <div key={idx} className="flex items-center gap-3 rounded-xl border border-navy-100 bg-white p-4 shadow-sm">
                  <div className="h-8 w-8 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600 shrink-0">
                    <Activity size={16} />
                  </div>
                  <span className="text-sm font-semibold text-navy-950">{outcome}</span>
                </div>
              ))}
              <div className="flex items-center gap-3 rounded-xl border border-navy-100 bg-white p-4 shadow-sm">
                <div className="h-8 w-8 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600 shrink-0">
                  <Activity size={16} />
                </div>
                <span className="text-sm font-semibold text-navy-950">Establish governance foundations</span>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-navy-100 bg-white p-4 shadow-sm">
                <div className="h-8 w-8 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600 shrink-0">
                  <Activity size={16} />
                </div>
                <span className="text-sm font-semibold text-navy-950">Accelerate enterprise adoption</span>
              </div>
            </div>
          </section>

          {/* 3. WHAT'S INCLUDED */}
          <section>
            <h2 className="text-2xl font-bold tracking-tight text-navy-950 mb-6">Included Deliverables</h2>
            <p className="text-sm text-gray-600 mb-8 leading-relaxed max-w-2xl">
              This is a productized transformation service. You receive clear, scoped deliverables managed under strict SLA agreements to ensure predictable outcomes.
            </p>
            <div className="grid gap-4">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4 rounded-xl border border-navy-100 bg-slate-50 p-5">
                  <div className="mt-0.5">
                    <CheckCircle2 size={18} className="text-orange-500" />
                  </div>
                  <span className="text-sm font-semibold text-navy-950 leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 4. DELIVERY APPROACH */}
          <section>
            <h2 className="text-2xl font-bold tracking-tight text-navy-950 mb-6">How Delivery Works</h2>
            <div className="relative border-l border-navy-100 ml-4 space-y-8 pb-4">
              <div className="relative pl-8">
                <div className="absolute -left-3.5 top-0 h-7 w-7 rounded-full bg-navy-950 flex items-center justify-center text-[10px] font-bold text-white border-4 border-white shadow-sm">1</div>
                <h3 className="text-base font-bold text-navy-950 mb-2">Discovery & Alignment</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We assess operational priorities, organizational readiness, and strategic objectives before initiation.
                </p>
              </div>
              
              <div className="relative pl-8">
                <div className="absolute -left-3.5 top-0 h-7 w-7 rounded-full bg-navy-950 flex items-center justify-center text-[10px] font-bold text-white border-4 border-white shadow-sm">2</div>
                <h3 className="text-base font-bold text-navy-950 mb-2">Service Delivery</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  TMaaS specialists execute the scoped transformation activities using standardized governance controls.
                </p>
              </div>

              <div className="relative pl-8">
                <div className="absolute -left-3.5 top-0 h-7 w-7 rounded-full bg-navy-950 flex items-center justify-center text-[10px] font-bold text-white border-4 border-white shadow-sm">3</div>
                <h3 className="text-base font-bold text-navy-950 mb-2">Governance & Oversight</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Progress, milestones, and delivery quality are tracked directly through TMaaS governance workflows.
                </p>
              </div>

              <div className="relative pl-8">
                <div className="absolute -left-3.5 top-0 h-7 w-7 rounded-full bg-navy-950 flex items-center justify-center text-[10px] font-bold text-white border-4 border-white shadow-sm">4</div>
                <h3 className="text-base font-bold text-navy-950 mb-2">Handover & Next Steps</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Receive final deliverables, recommendations, and structured activation guidance.
                </p>
              </div>
            </div>
          </section>

          {/* 7. RELATED SERVICES (Desktop Bottom) */}
          {relatedServicesData.length > 0 && (
            <section className="pt-8 border-t border-navy-50 hidden lg:block">
              <h2 className="text-lg font-bold tracking-tight text-navy-950 mb-6">Related Transformation Services</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {relatedServicesData.map(related => (
                  <div key={related.id} className="rounded-xl border border-navy-100 bg-white p-5 shadow-sm group hover:border-orange-500 transition-colors">
                    <h4 className="text-sm font-bold text-navy-950 mb-1 group-hover:text-orange-600 transition-colors">{related.standardName}</h4>
                    <p className="text-[11px] text-gray-500 mb-4 line-clamp-2">{related.positioning}</p>
                    <button 
                      onClick={() => navigate(`/service/${related.id}`)}
                      className="text-[11px] font-bold text-navy-950 flex items-center gap-1 hover:text-orange-600 transition-colors"
                    >
                      View Service <ArrowRight size={12} />
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
          <div className="rounded-2xl border border-navy-100 bg-slate-50 p-6">
            <h3 className="text-sm font-bold tracking-tight text-navy-950 mb-5 flex items-center gap-2">
              <ShieldCheck size={18} className="text-orange-500" />
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
                  <span className="text-xs text-navy-950 font-medium leading-relaxed">{trust}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 6. IDEAL FOR SECTION */}
          <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm">
            <h3 className="text-sm font-bold tracking-tight text-navy-950 mb-4 flex items-center gap-2">
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

          {/* 7. RELATED SERVICES (Mobile Fallback) */}
          {relatedServicesData.length > 0 && (
            <div className="lg:hidden mt-8">
              <h3 className="text-sm font-bold tracking-tight text-navy-950 mb-4">Related Services</h3>
              <div className="grid gap-4">
                {relatedServicesData.map(related => (
                  <div key={related.id} className="rounded-xl border border-navy-100 bg-white p-4 shadow-sm">
                    <h4 className="text-xs font-bold text-navy-950 mb-1">{related.standardName}</h4>
                    <button 
                      onClick={() => {
                        navigate(`/service/${related.id}`);
                        window.scrollTo(0, 0);
                      }}
                      className="text-[10px] font-bold text-orange-600 mt-2 flex items-center gap-1"
                    >
                      View Service <ArrowRight size={12} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>

      {/* 9. FINAL CTA SECTION */}
      <MeshSection variant="dark" className="py-20 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-bold tracking-tight text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-slate-300 mb-10 leading-relaxed">
            Launch your transformation initiative with structured delivery, governance oversight, and dedicated TMaaS specialists.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              className="h-12 px-8 bg-orange-500 hover:bg-orange-400 text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2 group"
              onClick={() => handleStartOnboarding(service.standardName)}
            >
              Get Started 
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline"
              className="h-12 px-8 border-slate-600 bg-transparent text-white hover:bg-slate-800 font-bold rounded-xl text-sm"
            >
              Speak to a Specialist
            </Button>
          </div>
        </div>
      </MeshSection>

      <DiagnoseDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        initialProblem={dialogPrompt}
      />
    </div>
  );
};

export default ServiceDetail;
