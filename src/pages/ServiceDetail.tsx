import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowRight, CheckCircle2, Sparkles, Target, TrendingUp, Users, Zap } from "lucide-react";
import LandingNavbar from "@/components/site/landing/LandingNavbar";
import Footer from "@/components/Footer";
import MeshSection from "@/components/site/MeshSection";
import DiagnoseDialog from "@/components/DiagnoseDialog";
import RequestOfferDialog from "@/components/RequestOfferDialog";
import {
  ServiceDetailPrimaryButton,
  ServiceDetailSecondaryButtonDark,
} from "@/components/service-detail/ServiceDetailButtons";
import { iconWell } from "@/lib/brandAccent";
import { ServiceDetailHero } from "@/components/service-detail/ServiceDetailHero";
import { ServiceDetailSidebar } from "@/components/service-detail/ServiceDetailSidebar";
import { ServiceDetailSection } from "@/components/service-detail/ServiceDetailSection";
import {
  getDeliverySteps,
  ServiceDetailDeliverySection,
} from "@/components/service-detail/ServiceDetailDeliverySection";
import { getBenefitStatements } from "@/components/service-detail/serviceDetailHelpers";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { initialServices } from "@/data/services";
import { marketplaceServiceTypeLabels } from "@/data/marketplaceNavigation";
import { deployModulesData } from "@/data/deployModules";
import { featureFlags } from "@/lib/featureFlags";

const ADVISORY_DELIVERABLES = [
  "Opportunity Areas",
  "Transformation Vision",
  "Initial Recommendations",
];

const DESIGN_DELIVERABLES = [
  "Opportunity Areas",
  "Transformation Vision",
  "Initial Recommendations",
  "Solution Blueprint",
  "Process Design",
  "Operating Model",
  "Prototype",
  "Delivery Backlog",
  "Technical Specifications",
  "Deployment Roadmap",
  "KPI Model",
  "Executive Brief",
];

const DEPLOY_DELIVERABLES = [
  "Validated MVP Direction",
  "Priority User Flows",
  "Initial Product Backlog",
  "Solution Blueprint",
  "Technical Specifications",
  "Delivery Plan",
  "Production MVP",
  "Deployment Package",
  "Support & Handover",
];

const BENEFIT_ICONS = [Target, TrendingUp, Users, Sparkles] as const;

const itemCardClass =
  "rounded-xl border border-gray-200 bg-white p-5 shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-elevated)]";

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isOfferDialogOpen, setIsOfferDialogOpen] = useState(false);
  const [dialogPrompt, setDialogPrompt] = useState("");

  const service = initialServices.find((s) => s.id === parseInt(id || "0"));

  const isAdvisoryService = service?.serviceType === "advisory";
  const isDesignService =
    service && ["design", "ai_design"].includes(service.serviceType);
  const isDeployService =
    service && ["deploy", "ai_deploy"].includes(service.serviceType);
  const requiresQuoteCTA =
    isDeployService ||
    (service &&
      (service.serviceType === "manage" || service.serviceType === "bundle"));

  if (!service) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background">
        <h2 className="mb-4 text-2xl font-semibold text-dq-navy">Service Not Found</h2>
        <Button onClick={() => navigate("/marketplace")} className="rounded-full bg-dq-navy">
          Return to Marketplace
        </Button>
      </div>
    );
  }

  const getDeployModules = (name: string) => {
    if (deployModulesData[name]) return deployModulesData[name];
    const baseNameMatch = name.match(/^(.*?)\s*\(/);
    if (baseNameMatch) {
      const baseName = baseNameMatch[1];
      const matchingKey = Object.keys(deployModulesData).find((key) =>
        key.startsWith(baseName)
      );
      if (matchingKey) return deployModulesData[matchingKey];
    }
    return [];
  };

  const deployModules = isDeployService
    ? getDeployModules(service.standardName)
    : [];

  const handleStartOnboarding = (pkgName: string) => {
    setDialogPrompt(`I would like to get started with the ${pkgName} service.`);
    setIsDialogOpen(true);
  };

  const benefits = getBenefitStatements(service.outcomes);
  const deliverySteps = getDeliverySteps(service.serviceType, {
    isAdvisory: !!isAdvisoryService,
    isDesign: !!isDesignService,
    isDeploy: !!isDeployService,
  });

  const baseSolutionMatch = service.standardName.match(/^(.*?)\s*\(/);
  const baseSolutionName = baseSolutionMatch ? baseSolutionMatch[1] : "";

  let designServiceName = "";
  let bundleServiceName = "";
  if (isDeployService) {
    if (service.serviceType === "deploy") {
      designServiceName = service.standardName.replace("Implementation", "Design");
    } else if (service.serviceType === "ai_deploy") {
      designServiceName = service.standardName.replace(
        "AI Implementation",
        "AI Design"
      );
    }
    bundleServiceName = service.standardName.replace(
      /-\s*(?:AI\s*)?Implementation$/,
      "- Transformation Bundle"
    );
  }

  const designServiceObj = isDeployService
    ? initialServices.find((s) => s.standardName === designServiceName)
    : null;
  const bundleServiceObj = isDeployService
    ? initialServices.find((s) => s.standardName === bundleServiceName)
    : null;

  let recommendedBundles: (typeof initialServices)[number][] = [];
  if (service.serviceType !== "bundle") {
    const specificBundleName =
      service.standardName.replace(
        /\s+(Advisory|Design|AI Design|Implementation|AI Implementation|Managed Operations)$/,
        ""
      ) + " - Transformation Bundle";
    const specificBundle = initialServices.find(
      (s) => s.standardName === specificBundleName
    );

    if (specificBundle) {
      recommendedBundles.push(specificBundle);
    } else {
      let fallbackSetName = "Managed Services set";
      if (["advisory", "design", "ai_design"].includes(service.serviceType)) {
        fallbackSetName = "Design Services set";
      } else if (["deploy", "ai_deploy"].includes(service.serviceType)) {
        fallbackSetName = "Deploy Services set";
      }
      const fallbackBundle = initialServices.find(
        (s) => s.standardName === fallbackSetName
      );
      if (fallbackBundle) recommendedBundles.push(fallbackBundle);
    }
  }

  const deliverables = isAdvisoryService
    ? ADVISORY_DELIVERABLES
    : isDesignService
      ? DESIGN_DELIVERABLES
      : isDeployService
        ? DEPLOY_DELIVERABLES
        : service.features;

  const handleRequestQuote = () => setIsOfferDialogOpen(true);
  const handleBookConsultation = () => {
    if (featureFlags.isEnabled("contactUs")) {
      navigate("/contact");
      return;
    }
    handleStartOnboarding(service.standardName);
  };

  return (
    <div className="min-h-screen bg-background text-left">
      <LandingNavbar />

      <div className="relative">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[520px] overflow-hidden md:h-[560px]"
          aria-hidden
        >
          <MeshSection variant="heroLight" grid className="h-full" />
        </div>

        <div className="relative z-10 px-5 pb-20 pt-20 md:px-8 md:pb-24 md:pt-24 lg:px-10">
          <div className="mx-auto grid max-w-[1200px] items-start gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-12">
            <div className="min-w-0">
              <ServiceDetailHero
                service={service}
                onRequestQuote={handleRequestQuote}
                onBookConsultation={handleBookConsultation}
              />

              <div className="mt-16 space-y-16 lg:mt-20">
                {service.serviceType !== "bundle" && (
                  <ServiceDetailSection
                    eyebrow="Outcomes"
                    title="What This Service Helps You Achieve"
                  >
                    <div className="grid gap-4 sm:grid-cols-2">
                      {benefits.map((benefit, idx) => {
                        const Icon = BENEFIT_ICONS[idx % BENEFIT_ICONS.length];
                        return (
                          <div key={benefit} className={`${itemCardClass} flex items-center gap-3`}>
                            <div className={`${iconWell} h-10 w-10 shrink-0 text-dq-orange`}>
                              <Icon size={18} strokeWidth={1.75} />
                            </div>
                            <span className="text-sm font-semibold text-dq-navy">{benefit}</span>
                          </div>
                        );
                      })}
                    </div>
                  </ServiceDetailSection>
                )}

                {service.serviceType === "bundle" &&
                  service.relatedServices &&
                  service.relatedServices.length > 0 && (
                    <ServiceDetailSection
                      eyebrow="Bundle"
                      title="What's Included"
                      description="This transformation bundle includes the following services for end-to-end delivery."
                    >
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {service.relatedServices
                          .map((relatedId: number) =>
                            initialServices.find((s) => s.id === relatedId)
                          )
                          .filter((s) => s && s.serviceType !== "advisory")
                          .map((s) => (
                            <div key={s!.id} className={`${itemCardClass} flex flex-col`}>
                              <div className="mb-3 flex flex-wrap items-center gap-2">
                                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-gray-400">
                                  {marketplaceServiceTypeLabels[s!.serviceType] ||
                                    s!.serviceType}
                                </span>
                                {s!.standardName.includes("(High-Impact)") && (
                                  <span className="inline-flex items-center gap-1 rounded-full bg-dq-navy px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
                                    <Zap size={9} className="fill-white" />
                                    High-Impact
                                  </span>
                                )}
                              </div>
                              <h3 className="text-sm font-semibold leading-snug text-dq-navy">
                                {s!.standardName.replace(" (High-Impact)", "")}
                              </h3>
                              <p className="mt-2 line-clamp-2 flex-1 text-xs leading-relaxed text-gray-500">
                                {s!.description}
                              </p>
                              <button
                                type="button"
                                onClick={() => navigate(`/service/${s!.id}`)}
                                className="mt-4 flex items-center gap-1 text-xs font-semibold text-dq-navy transition-colors hover:text-dq-navy/70"
                              >
                                View Details <ArrowRight size={12} />
                              </button>
                            </div>
                          ))}
                      </div>
                    </ServiceDetailSection>
                  )}

                {service.serviceType !== "bundle" && (
                  <ServiceDetailSection
                    eyebrow="Deliverables"
                    title="Included Deliverables"
                    description="Clear, scoped deliverables managed under strict SLA agreements for predictable outcomes."
                  >
                    <div className="grid gap-3 sm:grid-cols-2">
                      {deliverables.map((feature) => (
                        <div key={feature} className={`${itemCardClass} flex items-start gap-3`}>
                          <CheckCircle2
                            size={18}
                            className="mt-0.5 shrink-0 text-dq-orange"
                            aria-hidden
                          />
                          <span className="text-sm font-medium leading-relaxed text-dq-navy">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </ServiceDetailSection>
                )}

                {isDeployService && deployModules.length > 0 && (
                  <ServiceDetailSection
                    eyebrow="Architecture"
                    title="Modules & Applications"
                    description="Target architecture and functional components implemented during the build phase."
                  >
                    <Accordion type="single" collapsible className="space-y-3">
                      {deployModules.map((module, idx) => (
                        <AccordionItem
                          key={module.name}
                          value={`item-${idx}`}
                          className={`${itemCardClass} border-0 px-5`}
                        >
                          <AccordionTrigger className="py-0 text-sm font-semibold text-dq-navy hover:no-underline">
                            {module.name}
                          </AccordionTrigger>
                          <AccordionContent className="border-t border-gray-100 pb-1 pt-4">
                            <ul className="grid gap-y-2 gap-x-6 sm:grid-cols-2">
                              {module.features.map((feature) => (
                                <li
                                  key={feature}
                                  className="flex items-start gap-2.5 text-sm text-gray-600"
                                >
                                  <span
                                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-dq-orange"
                                    aria-hidden
                                  />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </ServiceDetailSection>
                )}

                {deliverySteps.length > 0 && (
                  <ServiceDetailDeliverySection steps={deliverySteps} />
                )}

                {service.serviceType !== "bundle" && recommendedBundles.length > 0 && (
                  <ServiceDetailSection eyebrow="Bundles" title="Recommended Bundles">
                    <div className="grid gap-4 sm:grid-cols-2">
                      {recommendedBundles.map((bundle) => (
                        <div key={bundle.id} className={`${itemCardClass} group flex flex-col`}>
                          <h4 className="text-sm font-semibold text-dq-navy">
                            {bundle.standardName}
                          </h4>
                          <p className="mt-2 line-clamp-2 text-xs text-gray-500">
                            {bundle.description || bundle.positioning}
                          </p>
                          <button
                            type="button"
                            onClick={() => {
                              navigate(`/service/${bundle.id}`);
                              window.scrollTo(0, 0);
                            }}
                            className="mt-4 flex items-center gap-1 text-xs font-semibold text-dq-navy transition-colors hover:text-dq-navy/70"
                          >
                            View Bundle <ArrowRight size={12} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </ServiceDetailSection>
                )}
              </div>
            </div>

            <ServiceDetailSidebar
              service={service}
              requiresQuoteCTA={!!requiresQuoteCTA}
              isDeployService={!!isDeployService}
              designServiceObj={designServiceObj}
              bundleServiceObj={bundleServiceObj}
              baseSolutionName={baseSolutionName}
              onRequestQuote={handleRequestQuote}
              onStartOnboarding={handleStartOnboarding}
            />
          </div>
        </div>
      </div>

      <MeshSection variant="ctaOrange" className="px-5 py-20 md:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="dq-eyebrow-on-dark">
            Ready to Transform?
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
            Launch your transformation initiative with structured delivery,
            governance oversight, and dedicated TMaaS specialists.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ServiceDetailPrimaryButton className="group" onClick={handleRequestQuote}>
              Request Quote
              <ArrowRight
                size={16}
                className="transition group-hover:translate-x-0.5"
              />
            </ServiceDetailPrimaryButton>
            <ServiceDetailSecondaryButtonDark onClick={handleBookConsultation}>
              Book a Consultation
            </ServiceDetailSecondaryButtonDark>
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
