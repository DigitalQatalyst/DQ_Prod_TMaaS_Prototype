import { lazy, Suspense, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import LandingNavbar from "@/components/site/landing/LandingNavbar";
import Footer from "@/components/Footer";
import MeshSection from "@/components/site/MeshSection";

const DiagnoseDialog = lazy(() => import("@/components/DiagnoseDialog"));
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
import { getDisplayTitle } from "@/components/service-detail/serviceDetailHelpers";
import { buildContactPath, getServicePackageCta } from "@/lib/contactFormPrefill";
import JsonLd from "@/components/JsonLd";
import Seo from "@/components/Seo";
import { buildServiceMetaDescription, SEO_BRAND } from "@/lib/seo";
import {
  buildServiceFaqStructuredData,
  buildServiceStructuredData,
} from "@/lib/structuredData";
import { getServiceFaqsContent } from "@/components/service-detail/serviceFaqsContent";
import { Button } from "@/components/ui/button";
import { featureFlags } from "@/lib/featureFlags";
import { useServiceDetail } from "@/hooks/useServiceDetail";

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogPrompt, setDialogPrompt] = useState("");
  const variantId = parseInt(id || "0", 10);

  const { data: detail, isLoading } = useServiceDetail(variantId);
  const service = detail?.service;

  const isAdvisoryService = service?.serviceType === "advisory";
  const isDesignService =
    service && ["design", "ai_design"].includes(service.serviceType);
  const isDeployService =
    service && ["deploy", "ai_deploy"].includes(service.serviceType);
  const servicePath = `/service/${id ?? ""}`;

  if (isLoading && !service) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background">
        <Seo
          title={`Loading service | ${SEO_BRAND}`}
          description="Loading digital transformation service details from the TMaaS marketplace."
          path={servicePath}
          noindex
        />
        <p className="text-gray-500">Loading service…</p>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background">
        <Seo
          title={`Service not found | ${SEO_BRAND}`}
          description="This service could not be found. Browse the TMaaS marketplace for digital transformation services."
          path={servicePath}
          noindex
        />
        <h2 className="mb-4 text-2xl font-semibold text-dq-navy">Service not found</h2>
        <p className="mb-6 max-w-sm text-center text-sm text-gray-600">
          This service may have moved. Browse the marketplace to find what you need.
        </p>
        <Button onClick={() => navigate("/marketplace")} className="rounded-full bg-dq-navy">
          Browse services
        </Button>
      </div>
    );
  }

  const deployModules = isDeployService ? (detail?.deployModules ?? []) : [];

  const handleStartOnboarding = (pkgName: string) => {
    setDialogPrompt(`I would like to get started with the ${pkgName} service.`);
    setIsDialogOpen(true);
  };

  const pdpContent = detail?.pdpContent;
  const deliveryProcess =
    pdpContent?.deliveryProcess ??
    getDeliverySteps(service.serviceType, {
      isAdvisory: !!isAdvisoryService,
      isDesign: !!isDesignService,
      isDeploy: !!isDeployService,
    });

  const packageCta = getServicePackageCta(service.serviceType);

  const handlePrimaryCta = () => {
    if (featureFlags.isEnabled("contactUs")) {
      navigate(buildContactPath(service, packageCta.intent));
      return;
    }
    handleStartOnboarding(service.standardName);
  };

  const handleBookConsultation = () => {
    if (featureFlags.isEnabled("contactUs")) {
      navigate(buildContactPath(service, "consultation"));
      return;
    }
    handleStartOnboarding(service.standardName);
  };

  const displayTitle = getDisplayTitle(service.standardName, service.serviceType);

  return (
    <div className="min-h-screen bg-background text-left">
      <Seo
        title={`${displayTitle} | ${SEO_BRAND}`}
        description={buildServiceMetaDescription(displayTitle, service)}
        path={servicePath}
        ogType="product"
      />
      <JsonLd
        data={buildServiceStructuredData(service, displayTitle, servicePath)}
      />
      {(() => {
        const faqItems = pdpContent?.faqs?.length
          ? pdpContent.faqs
          : getServiceFaqsContent(service).faqs;
        const faqSchema = buildServiceFaqStructuredData(
          service,
          displayTitle,
          servicePath,
          faqItems
        );
        return faqSchema ? <JsonLd data={faqSchema} /> : null;
      })()}
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
              primaryCtaLabel={packageCta.label}
              onPrimaryCta={handlePrimaryCta}
              onStartOnboarding={handleStartOnboarding}
              packageHighlights={pdpContent?.packageHighlights}
            />
          </div>
        </div>

        <div className="bg-background px-5 pb-20 pt-12 md:px-8 md:pb-24 md:pt-14 lg:px-10 lg:pt-16">
          <div className="mx-auto max-w-[1200px]">
            <ServiceDetailTabs
              service={service}
              deliveryProcess={deliveryProcess}
              deployModules={deployModules}
              isDeployService={!!isDeployService}
              pdpContent={pdpContent}
            />

            <ServiceDetailRelatedServices service={service} />
          </div>
        </div>
      </div>

      <MeshSection variant="ctaOrange" className="px-5 py-20 md:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="dq-eyebrow-on-dark">Need help?</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Not sure if this is the right fit?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
            Our team can help you compare options and find the best service for
            your goals.
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <ServiceDetailPrimaryButton
              onClick={handleBookConsultation}
              fullWidth
              className="sm:w-auto"
            >
              Talk to our team
            </ServiceDetailPrimaryButton>
            <ServiceDetailSecondaryButtonDark
              onClick={() => navigate("/marketplace")}
              fullWidth
              className="sm:w-auto"
            >
              Browse more services
            </ServiceDetailSecondaryButtonDark>
          </div>
        </div>
      </MeshSection>

      {isDialogOpen ? (
        <Suspense fallback={null}>
          <DiagnoseDialog
            isOpen={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            initialProblem={dialogPrompt}
          />
        </Suspense>
      ) : null}
      <Footer />
    </div>
  );
};

export default ServiceDetail;
