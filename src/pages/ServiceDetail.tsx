import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import LandingNavbar from "@/components/site/landing/LandingNavbar";
import Footer from "@/components/Footer";
import MeshSection from "@/components/site/MeshSection";
import DiagnoseDialog from "@/components/DiagnoseDialog";
import RequestOfferDialog from "@/components/RequestOfferDialog";
import {
  ServiceDetailPrimaryButton,
  ServiceDetailSecondaryButtonDark,
} from "@/components/service-detail/ServiceDetailButtons";
import { ServiceDetailHero } from "@/components/service-detail/ServiceDetailHero";
import { ServiceDetailTabs } from "@/components/service-detail/ServiceDetailTabs";
import { ServiceDetailRelatedServices } from "@/components/service-detail/ServiceDetailRelatedServices";
import {
  getDeliverySteps,
} from "@/components/service-detail/ServiceDetailDeliverySection";
import { Button } from "@/components/ui/button";
import { initialServices } from "@/data/services";
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
  const requiresQuoteCTA = service?.serviceType === "bundle";

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

  const deliveryProcess = getDeliverySteps(service.serviceType, {
    isAdvisory: !!isAdvisoryService,
    isDesign: !!isDesignService,
    isDeploy: !!isDeployService,
  });

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

      <div className="relative overflow-hidden">
        <div className="relative px-5 pb-12 pt-20 md:px-8 md:pb-14 md:pt-24 lg:px-10">
          <div
            className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
            aria-hidden
          >
            <MeshSection variant="heroLight" grid className="h-full min-h-full" />
          </div>
          <div className="relative z-10 mx-auto max-w-[1200px]">
            <ServiceDetailHero
              service={service}
              requiresQuoteCTA={!!requiresQuoteCTA}
              onRequestQuote={handleRequestQuote}
              onBookConsultation={handleBookConsultation}
              onStartOnboarding={handleStartOnboarding}
            />
          </div>
        </div>

        <div className="bg-background px-5 pb-20 pt-12 md:px-8 md:pb-24 md:pt-14 lg:px-10 lg:pt-16">
          <div className="mx-auto max-w-[1200px]">
            <ServiceDetailTabs
              service={service}
              deliverables={deliverables}
              deliveryProcess={deliveryProcess}
              deployModules={deployModules}
              isDeployService={!!isDeployService}
            />

            <ServiceDetailRelatedServices service={service} />
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
