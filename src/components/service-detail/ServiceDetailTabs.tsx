import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { DeliveryProcess } from "./ServiceDetailDeliverySection";
import { ServiceDetailDeliverySection } from "./ServiceDetailDeliverySection";
import { ServiceDetailOverviewTab } from "./ServiceDetailOverviewTab";
import { ServiceDetailSection } from "./ServiceDetailSection";
import { ServiceDetailWhatYouReceiveTab } from "./ServiceDetailWhatYouReceiveTab";
import { ServiceDetailWhyItMattersTab } from "./ServiceDetailWhyItMattersTab";
import { WHAT_HAPPENS_NEXT_STEPS, type ServiceProduct } from "./serviceDetailHelpers";

const SERVICE_DETAIL_TABS = [
  { value: "overview", label: "Overview" },
  { value: "what-you-receive", label: "What You Receive" },
  { value: "how-it-works", label: "How It Works" },
  { value: "why-it-matters", label: "Why It Matters" },
  { value: "faqs", label: "FAQs" },
] as const;

const tabTriggerClass =
  "rounded-none border-b-2 border-transparent px-4 pb-3 pt-1 text-sm font-semibold text-dq-navy transition-colors hover:text-dq-navy/80 data-[state=active]:border-dq-orange data-[state=active]:bg-transparent data-[state=active]:text-dq-orange data-[state=active]:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dq-orange focus-visible:ring-offset-2";

const itemCardClass =
  "rounded-xl border border-gray-200 bg-white p-5 shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-elevated)]";

interface ServiceDetailTabsProps {
  service: ServiceProduct;
  deliverables: readonly string[];
  deliveryProcess: DeliveryProcess;
  deployModules: { name: string; features: string[] }[];
  isDeployService: boolean;
}

export function ServiceDetailTabs({
  service,
  deliverables,
  deliveryProcess,
  deployModules,
  isDeployService,
}: ServiceDetailTabsProps) {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="mb-8 flex h-auto w-full justify-start gap-0 overflow-x-auto rounded-none border-b border-gray-200 bg-transparent p-0 sm:gap-1">
        {SERVICE_DETAIL_TABS.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value} className={tabTriggerClass}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      <TabsContent value="overview" className="mt-0 focus-visible:outline-none">
        <ServiceDetailOverviewTab service={service} />
      </TabsContent>

      <TabsContent value="what-you-receive" className="mt-0 focus-visible:outline-none">
        <ServiceDetailWhatYouReceiveTab
          service={service}
          deliverables={deliverables}
          deployModules={deployModules}
          isDeployService={isDeployService}
        />
      </TabsContent>

      <TabsContent value="how-it-works" className="mt-0 focus-visible:outline-none">
        <div className="space-y-16">
          {deliveryProcess.steps.length > 0 ? (
            <ServiceDetailDeliverySection process={deliveryProcess} />
          ) : (
            <p className="text-sm leading-relaxed text-gray-500">
              Delivery process details for this service will be available soon.
            </p>
          )}

          <ServiceDetailSection title="What Happens Next?">
            <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {WHAT_HAPPENS_NEXT_STEPS.map((step) => (
                <li key={step.num} className={`${itemCardClass} flex gap-3`}>
                  <span className="w-6 shrink-0 font-mono text-xs font-semibold text-dq-navy/25">
                    {step.num}
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-dq-navy">{step.title}</p>
                    <p className="mt-1 text-[13px] leading-relaxed text-gray-500">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </ServiceDetailSection>
        </div>
      </TabsContent>

      <TabsContent value="why-it-matters" className="mt-0 focus-visible:outline-none">
        <ServiceDetailWhyItMattersTab service={service} />
      </TabsContent>

      <TabsContent value="faqs" className="mt-0 focus-visible:outline-none">
        <div className="rounded-xl border border-gray-200 bg-white p-8 text-center shadow-[var(--shadow-card)]">
          <p className="text-sm font-semibold text-dq-navy">FAQs coming soon</p>
          <p className="mt-2 text-sm leading-relaxed text-gray-500">
            Common questions about this service will be published here. Contact us
            if you need guidance in the meantime.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  );
}
