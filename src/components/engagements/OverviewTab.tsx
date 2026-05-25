import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockDeliverables, mockRisks, mockIssues, mockDependencies, mockAssumptions, mockMilestones } from "@/data/mockEngagementDetails";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle2, AlertCircle, XCircle } from "lucide-react";
import {
  engagementHealthIndicators,
  getHealthStatusBadgeClass,
} from "@/data/engagementHealthIndicators";

const getStatusIcon = (status: string) => {
  if (status === "green") return <CheckCircle2 size={16} className="text-green-600" />;
  if (status === "amber") return <AlertCircle size={16} className="text-amber-600" />;
  if (status === "red") return <XCircle size={16} className="text-red-600" />;
  return null;
};

export const OverviewTab = () => {
  const totalDeliverables = mockDeliverables.length;
  const completedDeliverables = mockDeliverables.filter(d => d.status === "Closed").length;
  const inProgressDeliverables = mockDeliverables.filter(d => d.status === "In Progress" || d.status === "Pending Acceptance").length;
  const governanceAttentionRequired = mockRisks.filter(r => r.escalated).length + mockIssues.filter(i => i.escalated).length;

  const allRaid = [
    ...mockRisks.map(r => ({ ...r, category: "Risk", impact: r.severity })),
    ...mockIssues.map(i => ({ ...i, category: "Issue", impact: i.severity })),
    ...mockDependencies.map(d => ({ ...d, category: "Dependency", impact: "High" })),
    ...mockAssumptions.map(a => ({ ...a, category: "Assumption", impact: "Medium" }))
  ].filter(item => item.impact === "Critical" || item.impact === "High");

  return (
    <div className="space-y-8">
      {/* KPI SUMMARY ROW */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="shadow-sm">
          <CardContent className="p-5">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Total Deliverables</p>
            <p className="text-2xl font-bold text-navy-950">{totalDeliverables}</p>
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardContent className="p-5">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Completed Deliverables</p>
            <p className="text-2xl font-bold text-green-600">{completedDeliverables}</p>
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardContent className="p-5">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">In Progress</p>
            <p className="text-2xl font-bold text-blue-600">{inProgressDeliverables}</p>
          </CardContent>
        </Card>
        <Card className="shadow-sm border-amber-200 bg-amber-50/30">
          <CardContent className="p-5">
            <p className="text-[10px] font-bold text-amber-700 uppercase tracking-wider mb-1">Governance Attention Required</p>
            <p className="text-2xl font-bold text-amber-600">{governanceAttentionRequired}</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* 7 KEY GOVERNANCE INDICATORS */}
        <section className="space-y-4">
          <h3 className="text-lg font-bold text-navy-950">7 Key Governance Indicators</h3>
          <Card className="shadow-sm">
            <div className="divide-y divide-border">
              {engagementHealthIndicators.map((ind) => (
                <div key={ind.id} className="p-4 flex items-start justify-between bg-white hover:bg-slate-50 transition-colors">
                  <div>
                    <p className="text-sm font-semibold text-navy-950 mb-1">{ind.name}</p>
                    <p className="text-xs text-gray-500">{ind.currentReason}</p>
                  </div>
                  <Badge variant="outline" className={`ml-4 shrink-0 capitalize ${getHealthStatusBadgeClass(ind.status)} flex items-center gap-1`}>
                    {getStatusIcon(ind.status)}
                    {ind.status}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* PAYMENT MILESTONES */}
        <section className="space-y-4">
          <h3 className="text-lg font-bold text-navy-950">Payment Milestones</h3>
          <Card className="shadow-sm overflow-hidden">
            <Table>
              <TableHeader className="bg-slate-50">
                <TableRow>
                  <TableHead className="text-xs">Milestone Name</TableHead>
                  <TableHead className="text-xs">Completion %</TableHead>
                  <TableHead className="text-xs">Governance Status</TableHead>
                  <TableHead className="text-xs">Expected Review Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockMilestones.map(m => (
                  <TableRow key={m.id}>
                    <TableCell className="font-semibold text-navy-950 text-xs">{m.name}</TableCell>
                    <TableCell className="text-xs">{m.progress}%</TableCell>
                    <TableCell>
                      <Badge variant="secondary" className={m.status === 'Completed' ? 'bg-green-100 text-green-700 hover:bg-green-100' : 'bg-amber-100 text-amber-700 hover:bg-amber-100'}>
                        {m.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-xs text-gray-500">{m.endDate}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </section>
      </div>

      {/* HIGH IMPACT RAID ITEMS */}
      <section className="space-y-4">
        <h3 className="text-lg font-bold text-navy-950">High Impact RAID Items</h3>
        <Card className="shadow-sm overflow-hidden">
          <Table>
            <TableHeader className="bg-slate-50">
              <TableRow>
                <TableHead className="text-xs">Title</TableHead>
                <TableHead className="text-xs">Category</TableHead>
                <TableHead className="text-xs">Business Impact</TableHead>
                <TableHead className="text-xs">Due Date</TableHead>
                <TableHead className="text-xs">Owner</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {allRaid.map((item, i) => (
                <TableRow key={i}>
                  <TableCell className="font-semibold text-navy-950 text-xs">{item.title}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-slate-100 text-xs">{item.category}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className={item.impact === 'Critical' ? 'border-red-200 text-red-600 bg-red-50 text-xs' : 'border-orange-200 text-orange-600 bg-orange-50 text-xs'}>
                      {item.impact}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-xs text-gray-500">{item.dueDate}</TableCell>
                  <TableCell className="text-xs">{item.owner}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </section>
    </div>
  );
};
