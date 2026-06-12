import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { DeliveryProcess } from "./ServiceDetailDeliverySection";
import { ServiceDetailDeliverySection } from "./ServiceDetailDeliverySection";
import { ServiceDetailOverviewTab } from "./ServiceDetailOverviewTab";
import { ServiceDetailWhatYouReceiveTab } from "./ServiceDetailWhatYouReceiveTab";
import { ServiceDetailFaqsTab } from "./ServiceDetailFaqsTab";
import { ServiceDetailWhyItMattersTab } from "./ServiceDetailWhyItMattersTab";
import type { PdpContent } from "@/types/catalog";
import type { ServiceProduct } from "./serviceDetailHelpers";

const SERVICE_DETAIL_TABS = [
  { value: "overview", label: "Overview" },
  { value: "what-you-receive", label: "What You Receive" },
  { value: "how-it-works", label: "How It Works" },
  { value: "why-it-matters", label: "Why It Matters" },
  { value: "faqs", label: "FAQs" },
] as const;

const tabTriggerClass =
  "shrink-0 rounded-none border-b-2 border-transparent px-3 pb-3 pt-1 text-sm font-semibold text-dq-navy transition-colors hover:text-dq-navy/80 data-[state=active]:border-dq-orange data-[state=active]:bg-transparent data-[state=active]:text-dq-orange data-[state=active]:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dq-orange focus-visible:ring-offset-2 sm:px-4";

interface ServiceDetailTabsProps {
  service: ServiceProduct;
  deliveryProcess: DeliveryProcess;
  deployModules: { name: string; features: string[] }[];
  isDeployService: boolean;
  pdpContent?: PdpContent;
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
      <TabsList className="mb-8 flex h-auto w-full flex-nowrap justify-start gap-0 overflow-x-auto rounded-none border-b border-gray-200 bg-transparent p-0 scrollbar-none sm:gap-1">
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
            Delivery process details for this service will be available soon.
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
