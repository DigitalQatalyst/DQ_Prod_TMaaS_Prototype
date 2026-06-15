"use client";

import { use, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DashboardLayout from "@/components/foundation/layouts/DashboardLayout";
import { useAuth } from "@/contexts/AuthContext";
import { mockEngagement } from "@/data/mockEngagementDetails";
import { EngagementDetailHeader } from "@/components/features/engagements/EngagementDetailHeader";
import { OverviewTab } from "@/components/features/engagements/OverviewTab";
import { DeliveryTab } from "@/components/features/engagements/DeliveryTab";
import { RaidTab } from "@/components/features/engagements/RaidTab";
import { StakeholdersTab } from "@/components/features/engagements/StakeholdersTab";
import { CommercialsTab } from "@/components/features/engagements/CommercialsTab";
import { SessionsTab } from "@/components/features/engagements/SessionsTab";
import { TeamTab } from "@/components/features/engagements/TeamTab";
import { SevenKeysTab } from "@/components/features/engagements/SevenKeysTab";
import { ClientMilestonesTab } from "@/components/features/engagements/ClientMilestonesTab";
import { StatusReportsTab } from "@/components/features/engagements/StatusReportsTab";
import type { RaidSubTab } from "@/data/engagementHealthIndicators";

export default function EngagementDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("seven_keys");
  const [raidSubTab, setRaidSubTab] = useState<RaidSubTab>("risks");

  const isClient = user.role === "client";

  const handleNavigateToIndicator = (target: { tab: string }) => {
    setActiveTab(target.tab);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <EngagementDetailHeader
          name={mockEngagement.name}
          organization={mockEngagement.client}
          engagementId={mockEngagement.id}
          deliveryLead={mockEngagement.deliveryLead}
          clientLogo={mockEngagement.clientLogo}
          type={mockEngagement.type}
          status={mockEngagement.status}
          startDate={mockEngagement.startDate}
          forecastEndDate={mockEngagement.forecastEndDate}
          onNavigateToSevenKeys={() => setActiveTab("seven_keys")}
        />

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full justify-start bg-transparent border-b border-border h-auto p-0 rounded-none overflow-x-auto overflow-y-hidden flex-nowrap">
            {isClient ? (
              <>
                <TabsTrigger value="seven_keys" className="rounded-none border-b-2 border-transparent data-[state=active]:border-navy-900 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 pb-3 text-sm font-semibold">Overview</TabsTrigger>
                <TabsTrigger value="milestones" className="rounded-none border-b-2 border-transparent data-[state=active]:border-navy-900 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 pb-3 text-sm font-semibold">Milestones</TabsTrigger>
                <TabsTrigger value="status_reports" className="rounded-none border-b-2 border-transparent data-[state=active]:border-navy-900 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 pb-3 text-sm font-semibold">Status Reports</TabsTrigger>
              </>
            ) : (
              <>
                <TabsTrigger value="overview" className="rounded-none border-b-2 border-transparent data-[state=active]:border-navy-900 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 pb-3 text-sm font-semibold">Overview</TabsTrigger>
                <TabsTrigger value="seven_keys" className="rounded-none border-b-2 border-transparent data-[state=active]:border-navy-900 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 pb-3 text-sm font-semibold">Seven Keys</TabsTrigger>
                <TabsTrigger value="delivery" className="rounded-none border-b-2 border-transparent data-[state=active]:border-navy-900 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 pb-3 text-sm font-semibold">Delivery</TabsTrigger>
                <TabsTrigger value="raid" className="rounded-none border-b-2 border-transparent data-[state=active]:border-navy-900 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 pb-3 text-sm font-semibold">RAID</TabsTrigger>
                <TabsTrigger value="commercials" className="rounded-none border-b-2 border-transparent data-[state=active]:border-navy-900 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 pb-3 text-sm font-semibold">Commercials</TabsTrigger>
                <TabsTrigger value="team" className="rounded-none border-b-2 border-transparent data-[state=active]:border-navy-900 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 pb-3 text-sm font-semibold">Team</TabsTrigger>
                <TabsTrigger value="stakeholders" className="rounded-none border-b-2 border-transparent data-[state=active]:border-navy-900 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 pb-3 text-sm font-semibold">Stakeholders</TabsTrigger>
              </>
            )}
          </TabsList>

          <div className="mt-8">
            {!isClient && (
              <TabsContent value="overview" className="m-0">
                <OverviewTab onNavigateToTab={setActiveTab} />
              </TabsContent>
            )}
            <TabsContent value="seven_keys" className="m-0">
              <SevenKeysTab onNavigateToIndicator={handleNavigateToIndicator} isClient={isClient} />
            </TabsContent>
            {isClient ? (
              <>
                <TabsContent value="milestones" className="m-0"><ClientMilestonesTab /></TabsContent>
                <TabsContent value="status_reports" className="m-0"><StatusReportsTab /></TabsContent>
              </>
            ) : (
              <>
                <TabsContent value="delivery" className="m-0"><DeliveryTab /></TabsContent>
                <TabsContent value="raid" className="m-0">
                  <RaidTab activeSubTab={raidSubTab} onSubTabChange={setRaidSubTab} />
                </TabsContent>
                <TabsContent value="commercials" className="m-0"><CommercialsTab /></TabsContent>
                <TabsContent value="team" className="m-0"><TeamTab /></TabsContent>
                <TabsContent value="stakeholders" className="m-0"><StakeholdersTab /></TabsContent>
              </>
            )}
          </div>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
