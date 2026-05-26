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
import { HealthIndicatorModal } from "@/components/engagements/HealthIndicatorModal";
import type { IndicatorNavigationTarget, RaidSubTab } from "@/data/engagementHealthIndicators";

const EngagementDetail = () => {
  const [healthModalOpen, setHealthModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [raidSubTab, setRaidSubTab] = useState<RaidSubTab>("risks");
  const { user } = useAuth();

  const handleNavigateToIndicator = (target: IndicatorNavigationTarget) => {
    setActiveTab(target.tab);
    if (target.raidSubTab) {
      setRaidSubTab(target.raidSubTab);
    }
    setHealthModalOpen(false);
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
          onViewStatusDetails={() => setHealthModalOpen(true)}
        />

        {/* 2. Tabbed Workspace */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full justify-start bg-transparent border-b border-border h-auto p-0 rounded-none overflow-x-auto overflow-y-hidden flex-nowrap">
            <TabsTrigger value="overview" className="rounded-none border-b-2 border-transparent data-[state=active]:border-navy-900 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 pb-3 text-sm font-semibold">Overview</TabsTrigger>
            <TabsTrigger value="delivery" className="rounded-none border-b-2 border-transparent data-[state=active]:border-navy-900 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 pb-3 text-sm font-semibold">Delivery</TabsTrigger>
            <TabsTrigger value="raid" className="rounded-none border-b-2 border-transparent data-[state=active]:border-navy-900 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 pb-3 text-sm font-semibold">RAID</TabsTrigger>
            <TabsTrigger value="stakeholders" className="rounded-none border-b-2 border-transparent data-[state=active]:border-navy-900 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 pb-3 text-sm font-semibold">Stakeholders</TabsTrigger>
            <TabsTrigger value="commercials" className="rounded-none border-b-2 border-transparent data-[state=active]:border-navy-900 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 pb-3 text-sm font-semibold">Commercials</TabsTrigger>
            <TabsTrigger value="sessions" className="rounded-none border-b-2 border-transparent data-[state=active]:border-navy-900 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 pb-3 text-sm font-semibold">Sessions</TabsTrigger>
            <TabsTrigger value="messages" className="rounded-none border-b-2 border-transparent data-[state=active]:border-navy-900 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 pb-3 text-sm font-semibold">Messages</TabsTrigger>
            <TabsTrigger value="team" className="rounded-none border-b-2 border-transparent data-[state=active]:border-navy-900 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 pb-3 text-sm font-semibold">Team</TabsTrigger>
          </TabsList>

          <div className="mt-8">
            <TabsContent value="overview" className="m-0">
              <OverviewTab onNavigateToIndicator={handleNavigateToIndicator} />
            </TabsContent>
            <TabsContent value="delivery" className="m-0"><DeliveryTab /></TabsContent>
            <TabsContent value="raid" className="m-0">
              <RaidTab activeSubTab={raidSubTab} onSubTabChange={setRaidSubTab} />
            </TabsContent>
            <TabsContent value="stakeholders" className="m-0"><StakeholdersTab /></TabsContent>
            <TabsContent value="commercials" className="m-0"><CommercialsTab /></TabsContent>
            <TabsContent value="sessions" className="m-0"><SessionsTab /></TabsContent>
            <TabsContent value="messages" className="m-0">
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <h3 className="text-lg font-bold text-navy-950 mb-2">Message Center</h3>
                <p className="text-sm text-gray-500 max-w-md">The communications hub is connected directly to the client's Inbox workspace.</p>
              </div>
            </TabsContent>
            <TabsContent value="team" className="m-0"><TeamTab /></TabsContent>
          </div>
        </Tabs>

        {/* Modal */}
        <HealthIndicatorModal
          open={healthModalOpen}
          onOpenChange={setHealthModalOpen}
          onNavigateToIndicator={handleNavigateToIndicator}
        />
      </div>
    </DashboardLayout>
  );
};

export default EngagementDetail;