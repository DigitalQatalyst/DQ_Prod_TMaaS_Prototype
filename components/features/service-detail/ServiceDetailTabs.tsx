"use client";

import { useState } from "react";
import Link from "next/link";
import { featureFlags } from "@/lib/featureFlags";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { DeliveryProcess } from "./ServiceDetailDeliverySection";
import { ServiceDetailDeliverySection } from "./ServiceDetailDeliverySection";
import { ServiceDetailOverviewTab } from "./ServiceDetailOverviewTab";
import { ServiceDetailWhatYouReceiveTab } from "./ServiceDetailWhatYouReceiveTab";
import { ServiceDetailFaqsTab } from "./ServiceDetailFaqsTab";
import { ServiceDetailWhyItMattersTab } from "./ServiceDetailWhyItMattersTab";
import type { PdpContent } from "@/lib/types/catalog";
import type { ServiceProduct } from "./serviceDetailHelpers";

const SERVICE_DETAIL_TABS = [
  { value: "overview", label: "Overview" },
  { value: "what-you-receive", label: "What You Receive" },
  { value: "how-it-works", label: "How It Works" },
  { value: "why-it-matters", label: "Why It Matters" },
  { value: "faqs", label: "FAQs" },
] as const;

const tabTriggerClass =
  "shrink-0 cursor-pointer rounded-none border-b-2 border-transparent px-3 pb-2 pt-1 text-sm font-medium text-gray-500 transition-colors hover:text-dq-orange data-[state=active]:-mb-px data-[state=active]:border-dq-orange data-[state=active]:bg-transparent data-[state=active]:font-semibold data-[state=active]:text-dq-orange data-[state=active]:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dq-orange focus-visible:ring-offset-2 sm:px-4";

interface ServiceDetailTabsProps {
  service: ServiceProduct;
  deliveryProcess: DeliveryProcess;
  deployModules: { name: string; features: string[] }[];
  isDeployService: boolean;
  pdpContent?: PdpContent | undefined;
}

export function ServiceDetailTabs({
  service,
  deliveryProcess,
  deployModules,
  isDeployService,
  pdpContent,
}: ServiceDetailTabsProps) {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="mb-6 flex h-auto w-full flex-nowrap justify-start gap-0 overflow-x-auto rounded-none border-b border-gray-200 bg-transparent p-0 scrollbar-none sm:gap-1">
        {SERVICE_DETAIL_TABS.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value} className={tabTriggerClass}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      <TabsContent value="overview" className="mt-0 focus-visible:outline-none">
        <ServiceDetailOverviewTab service={service} pdpContent={pdpContent} />
      </TabsContent>

      <TabsContent value="what-you-receive" className="mt-0 focus-visible:outline-none">
        <ServiceDetailWhatYouReceiveTab
          service={service}
          deployModules={deployModules}
          isDeployService={isDeployService}
          pdpContent={pdpContent}
        />
      </TabsContent>

      <TabsContent value="how-it-works" className="mt-0 focus-visible:outline-none">
        {deliveryProcess.steps.length > 0 ? (
          <ServiceDetailDeliverySection process={deliveryProcess} />
        ) : (
          <p className="text-sm leading-relaxed text-gray-500">
            Delivery steps for this service are tailored during scoping.{" "}
            {featureFlags.isEnabled("contactUs") ? (
              <>
                <Link
                  href="/contact"
                  className="font-semibold text-dq-navy underline decoration-dq-navy/30 underline-offset-2 transition-colors hover:text-dq-orange hover:decoration-dq-orange"
                >
                  Talk to our team
                </Link>{" "}
                for a detailed plan.
              </>
            ) : (
              "Talk to our team for a detailed plan."
            )}
          </p>
        )}
      </TabsContent>

      <TabsContent value="why-it-matters" className="mt-0 focus-visible:outline-none">
        <ServiceDetailWhyItMattersTab service={service} pdpContent={pdpContent} />
      </TabsContent>

      <TabsContent value="faqs" className="mt-0 focus-visible:outline-none">
        <ServiceDetailFaqsTab service={service} pdpContent={pdpContent} />
      </TabsContent>
    </Tabs>
  );
}
