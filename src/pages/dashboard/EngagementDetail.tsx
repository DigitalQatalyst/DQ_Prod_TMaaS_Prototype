import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DashboardLayout from "@/components/DashboardLayout";
import { useAuth } from "@/contexts/AuthContext";
import { mockEngagement } from "@/data/mockEngagementDetails";
import { EngagementDetailHeader } from "@/components/engagements/EngagementDetailHeader";

import { OverviewTab } from "@/components/engagements/OverviewTab";
import { DeliveryTab } from "@/components/engagements/DeliveryTab";
import { RaidTab } from "@/components/engagements/RaidTab";
import { StakeholdersTab } from "@/components/engagements/StakeholdersTab";
import { CommercialsTab } from "@/components/engagements/CommercialsTab";
import { SessionsTab } from "@/components/engagements/SessionsTab";
import { TeamTab } from "@/components/engagements/TeamTab";
import { SevenKeysTab } from "@/components/engagements/SevenKeysTab";
import { ClientMilestonesTab } from "@/components/engagements/ClientMilestonesTab";
import { StatusReportsTab } from "@/components/engagements/StatusReportsTab";
import type { IndicatorNavigationTarget, RaidSubTab } from "@/data/engagementHealthIndicators";

const EngagementDetail = () => {
  const { user } = useAuth();
  const isClient = user.role === "client" || user.role === "client_admin";
  const [activeTab, setActiveTab] = useState(isClient ? "seven_keys" : "overview");
  const [raidSubTab, setRaidSubTab] = useState<RaidSubTab>("risks");

  const handleNavigateToIndicator = (target: IndicatorNavigationTarget) => {
    setActiveTab(target.tab);
    if (target.raidSubTab) {
      setRaidSubTab(target.raidSubTab);
    }
  };
  const backPath =
    user.role === "dq_portfolio_oversight" ? "/dashboard/dq/portfolio" : "/dashboard/services";
  const backLabel = user.role === "dq_portfolio_oversight" ? "Portfolio" : "Delivery";

  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-7xl mx-auto pb-20">
        
        {/* Navigation & Context */}
        <Link to={backPath} className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-navy-950 transition-colors">
          <ArrowLeft size={16} className="mr-2" />
          Back to {backLabel}
        </Link>

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

        {/* 2. Tabbed Workspace */}
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
                <OverviewTab onNavigateToIndicator={handleNavigateToIndicator} onNavigateToTab={setActiveTab} />
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
};

export default EngagementDetail;