"use client";

import { useState, Suspense, use } from "react";
import { useRouter } from "next/navigation";
import LandingNavbar from "@/components/features/landing/landing/LandingNavbar";
import Footer from "@/components/features/landing/Footer";
import MeshSection from "@/components/features/landing/MeshSection";
import { ServiceDetailHero } from "@/components/features/service-detail/ServiceDetailHero";
import { ServiceDetailTabs } from "@/components/features/service-detail/ServiceDetailTabs";
import { ServiceDetailRelatedServices } from "@/components/features/service-detail/ServiceDetailRelatedServices";
import {
  ServiceDetailPrimaryButton,
  ServiceDetailSecondaryButtonDark,
} from "@/components/features/service-detail/ServiceDetailButtons";
import { getDeliverySteps } from "@/components/features/service-detail/ServiceDetailDeliverySection";
import { getDisplayTitle } from "@/components/features/service-detail/serviceDetailHelpers";
import { getServiceFaqsContent } from "@/components/features/service-detail/serviceFaqsContent";
import {
  ASK_ABOUT_SERVICE_CTA_LABEL,
  buildAskAboutServicePath,
  buildRequestServicePath,
  REQUEST_SERVICE_CTA_LABEL,
} from "@/lib/requestService";
import { useServiceDetail } from "@/lib/hooks/useServiceDetail";
import { featureFlags } from "@/lib/featureFlags";
import { Button } from "@/components/ui/button";
import DiagnoseDialog from "@/components/features/dashboard/DiagnoseDialog";

export default function ServiceDetailPageClient({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const router = useRouter();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogPrompt, setDialogPrompt] = useState("");
  const idOrSlug = /^\d+$/.test(slug) ? parseInt(slug, 10) : slug;

  const { data: detail, isLoading } = useServiceDetail(idOrSlug);
  const service = detail?.service;

  const isAdvisoryService = service?.serviceType === "advisory";
  const isDesignService = service && ["design", "ai_design"].includes(service.serviceType);
  const isDeployService = service && ["deploy", "ai_deploy"].includes(service.serviceType);

  if (isLoading && !service) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background">
        <p className="text-gray-500">Loading service…</p>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background">
        <h2 className="mb-4 text-2xl font-semibold text-dq-navy">Service not found</h2>
        <p className="mb-6 max-w-sm text-center text-sm text-gray-600">
          This service may have moved. Browse the marketplace to find what you need.
        </p>
        <Button onClick={() => router.push("/marketplace")} className="rounded-full bg-dq-navy">
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

  const handleRequestService = () => {
    if (featureFlags.isEnabled("contactUs")) {
      router.push(buildRequestServicePath(service));
      return;
    }
    handleStartOnboarding(service.standardName);
  };

  const handleAskAboutService = () => {
    if (featureFlags.isEnabled("contactUs")) {
      router.push(buildAskAboutServicePath(service));
      return;
    }
    handleStartOnboarding(service.standardName);
  };

  const displayTitle = getDisplayTitle(service.standardName, service.serviceType);

  return (
    <div className="min-h-screen bg-background text-left">
      <LandingNavbar />

      <div className="relative overflow-hidden">
        <div className="relative px-5 pb-12 pt-20 md:px-8 md:pb-14 md:pt-24 lg:px-10">
          <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
            <MeshSection variant="heroLight" grid className="h-full min-h-full">
              <span />
            </MeshSection>
          </div>
          <div className="relative z-10 mx-auto max-w-[1200px]">
            <ServiceDetailHero
              service={service}
              primaryCtaLabel={REQUEST_SERVICE_CTA_LABEL}
              onPrimaryCta={handleRequestService}
              secondaryCtaLabel={ASK_ABOUT_SERVICE_CTA_LABEL}
              onSecondaryCta={handleAskAboutService}
              onStartOnboarding={handleStartOnboarding}
              {...(pdpContent?.packageHighlights !== undefined && {
                packageHighlights: pdpContent.packageHighlights,
              })}
            />
          </div>
        </div>

        <div className="bg-background px-5 pb-16 pt-10 md:px-8 md:pb-20 md:pt-12 lg:px-10 lg:pt-14">
          <div className="mx-auto max-w-[1200px]">
            <ServiceDetailTabs
              service={service}
              deliveryProcess={deliveryProcess}
              deployModules={deployModules}
              isDeployService={!!isDeployService}
              pdpContent={pdpContent}
            />
          </div>
        </div>

        <section className="border-t border-gray-100 bg-white px-5 py-14 md:px-8 md:py-16 lg:px-10">
          <div className="mx-auto max-w-[1200px]">
            <ServiceDetailRelatedServices service={service} />
          </div>
        </section>
      </div>

      <MeshSection variant="ctaOrange" className="px-5 py-20 md:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="dq-eyebrow-on-dark">Need help?</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Not sure if this is the right fit?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
            Our team can help you compare options and find the best service for your goals.
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <ServiceDetailSecondaryButtonDark
              onClick={handleAskAboutService}
              fullWidth
              className="sm:w-auto"
            >
              {ASK_ABOUT_SERVICE_CTA_LABEL}
            </ServiceDetailSecondaryButtonDark>
            <ServiceDetailPrimaryButton
              onClick={handleRequestService}
              fullWidth
              className="sm:w-auto"
            >
              {REQUEST_SERVICE_CTA_LABEL}
            </ServiceDetailPrimaryButton>
            <ServiceDetailSecondaryButtonDark
              onClick={() => router.push("/marketplace")}
              fullWidth
              className="sm:w-auto"
            >
              Browse more services
            </ServiceDetailSecondaryButtonDark>
          </div>
        </div>
      </MeshSection>

      {isDialogOpen && (
        <Suspense fallback={null}>
          <DiagnoseDialog
            isOpen={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            initialProblem={dialogPrompt}
          />
        </Suspense>
      )}

      <Footer />
    </div>
  );
}
