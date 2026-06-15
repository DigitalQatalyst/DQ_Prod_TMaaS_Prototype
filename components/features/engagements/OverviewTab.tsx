"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  mockDeliverables,
  mockRisks,
  mockIssues,
  mockDependencies,
  mockAssumptions,
  mockMilestones,
  mockPaymentMilestones,
} from "@/data/mockEngagementDetails"; // TODO: Task 9 — wire up data;
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Calendar, AlertCircle } from "lucide-react";

interface OverviewTabProps {
  onNavigateToTab?: (tab: string) => void;
}

export const OverviewTab = ({ onNavigateToTab }: OverviewTabProps) => {
  const milestonesInProgress = mockMilestones.filter((m) => m.status === "In Progress").length;
  const deliverablesInProgress = mockDeliverables.filter(
    (d) => d.status === "In Progress" || d.status === "Pending Acceptance"
  ).length;

  const allRaid = [
    ...mockRisks.map((r) => ({ ...r, category: "Risk", impact: r.severity })),
    ...mockIssues.map((i) => ({ ...i, category: "Issue", impact: i.severity })),
    ...mockDependencies.map((d) => ({ ...d, category: "Dependency", impact: "High" })),
    ...mockAssumptions.map((a) => ({ ...a, category: "Assumption", impact: "Medium" })),
  ];

  const openRaidItems = allRaid.filter(
    (item) => item.status !== "Closed" && item.status !== "Resolved"
  ).length;
  const itemsRequiringAttention =
    mockRisks.filter((r) => r.severity === "High" && r.status === "Open").length +
    mockIssues.filter((i) => i.severity === "High" && i.status === "Open").length;
  const highImpactRaid = allRaid.filter(
    (item) => item.impact === "Critical" || item.impact === "High"
  );

  // Grouped Weekly Delivery Focus
  const blockedTasks = mockDeliverables
    .flatMap((d) =>
      d.tasks
        .filter((t) => t.status === "Blocked")
        .map((t) => ({
          label: t.name,
          type: "Task",
          dateLabel: "Due Date",
          date: d.dueDate,
          tab: "delivery",
        }))
    )
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const inProgressTasks = mockDeliverables
    .flatMap((d) =>
      d.tasks
        .filter((t) => t.status === "In Progress")
        .map((t) => ({
          label: t.name,
          type: "Task",
          dateLabel: "Due Date",
          date: d.dueDate,
          tab: "delivery",
        }))
    )
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const approachingItems = [
    ...mockMilestones
      .filter((m) => m.status === "In Progress" || m.status === "Not Started")
      .map((m) => ({
        label: m.name,
        type: "Milestone",
        dateLabel: "Contracted Date",
        date: m.adjustedContractDate || m.endDate,
        tab: "delivery",
      })),
    ...mockDeliverables
      .filter(
        (d) => d.status === "In Progress" || d.status === "New" || d.status === "Pending Acceptance"
      )
      .map((d) => ({
        label: d.name,
        type: "Deliverable",
        dateLabel: "Due Date",
        date: d.dueDate,
        tab: "delivery",
      })),
  ]
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 5);

  return (
    <div className="space-y-8">
      {/* KPI SUMMARY ROW */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="shadow-sm">
          <CardContent className="p-5">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
              Milestones In Progress
            </p>
            <p className="text-2xl font-bold text-navy-950">{milestonesInProgress}</p>
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardContent className="p-5">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
              Deliverables In Progress
            </p>
            <p className="text-2xl font-bold text-blue-600">{deliverablesInProgress}</p>
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardContent className="p-5">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
              Open RAID Items
            </p>
            <p className="text-2xl font-bold text-navy-950">{openRaidItems}</p>
          </CardContent>
        </Card>
        <Card className="shadow-sm border-amber-200 bg-amber-50/30">
          <CardContent className="p-5">
            <p className="text-[10px] font-bold text-amber-700 uppercase tracking-wider mb-1">
              Items Requiring Attention
            </p>
            <p className="text-2xl font-bold text-amber-600">{itemsRequiringAttention}</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* WEEKLY DELIVERY FOCUS */}
        <section className="space-y-4">
          <h3 className="text-lg font-bold text-navy-950 flex items-center gap-2">
            <Calendar size={18} className="text-orange-500" />
            Weekly Delivery Focus
          </h3>
          <Card className="shadow-sm overflow-hidden bg-white">
            <CardContent className="p-0">
              {/* Blocked Items */}
              {blockedTasks.length > 0 && (
                <div className="border-b border-border last:border-0">
                  <div className="bg-red-50/50 px-4 py-2 border-b border-red-100 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    <h4 className="text-xs font-bold text-red-800 uppercase tracking-wider">
                      Blocked Items
                    </h4>
                  </div>
                  <div className="divide-y divide-border">
                    {blockedTasks.map((item, idx) => (
                      <div
                        key={idx}
                        onClick={() => onNavigateToTab?.(item.tab)}
                        className="p-4 flex items-start justify-between gap-4 hover:bg-slate-50 cursor-pointer transition-colors group"
                      >
                        <div>
                          <p className="text-sm font-semibold text-navy-950 group-hover:text-navy-700 transition-colors">
                            {item.label}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">{item.type}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-bold text-navy-950 whitespace-nowrap block">
                            {item.date}
                          </span>
                          <span className="text-[10px] text-gray-400 uppercase tracking-wider block mt-0.5">
                            {item.dateLabel}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* In Progress Tasks */}
              {inProgressTasks.length > 0 && (
                <div className="border-b border-border last:border-0">
                  <div className="bg-blue-50/50 px-4 py-2 border-b border-blue-100 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <h4 className="text-xs font-bold text-blue-800 uppercase tracking-wider">
                      In Progress
                    </h4>
                  </div>
                  <div className="divide-y divide-border">
                    {inProgressTasks.slice(0, 3).map((item, idx) => (
                      <div
                        key={idx}
                        onClick={() => onNavigateToTab?.(item.tab)}
                        className="p-4 flex items-start justify-between gap-4 hover:bg-slate-50 cursor-pointer transition-colors group"
                      >
                        <div>
                          <p className="text-sm font-semibold text-navy-950 group-hover:text-navy-700 transition-colors">
                            {item.label}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">{item.type}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-bold text-navy-950 whitespace-nowrap block">
                            {item.date}
                          </span>
                          <span className="text-[10px] text-gray-400 uppercase tracking-wider block mt-0.5">
                            {item.dateLabel}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Approaching Milestones / Deliverables */}
              {approachingItems.length > 0 && (
                <div className="border-b border-border last:border-0">
                  <div className="bg-slate-50 px-4 py-2 border-b border-slate-100 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                    <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Approaching Dates
                    </h4>
                  </div>
                  <div className="divide-y divide-border">
                    {approachingItems.map((item, idx) => (
                      <div
                        key={idx}
                        onClick={() => onNavigateToTab?.(item.tab)}
                        className="p-4 flex items-start justify-between gap-4 hover:bg-slate-50 cursor-pointer transition-colors group"
                      >
                        <div>
                          <p className="text-sm font-semibold text-navy-950 group-hover:text-navy-700 transition-colors">
                            {item.label}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">{item.type}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-bold text-navy-950 whitespace-nowrap block">
                            {item.date}
                          </span>
                          <span className="text-[10px] text-gray-400 uppercase tracking-wider block mt-0.5">
                            {item.dateLabel}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
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
                  <TableHead className="text-xs">Status</TableHead>
                  <TableHead className="text-xs">Contracted Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockPaymentMilestones.map((m) => (
                  <TableRow key={m.id}>
                    <TableCell className="font-semibold text-navy-950 text-xs">{m.name}</TableCell>
                    <TableCell className="text-xs">
                      {mockMilestones.find((mil) => mil.id === m.milestoneId)?.progress ?? 0}%
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="secondary"
                        className={
                          m.status === "Paid"
                            ? "bg-green-100 text-green-700 hover:bg-green-100"
                            : "bg-amber-100 text-amber-700 hover:bg-amber-100"
                        }
                      >
                        {m.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-xs text-gray-500">{m.contractDate}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </section>
      </div>

      {/* HIGH IMPACT RAID ITEMS */}
      <section className="space-y-4">
        <h3 className="text-lg font-bold text-navy-950 flex items-center gap-2">
          <AlertCircle size={18} className="text-red-500" />
          High Impact RAID Items
        </h3>
        <Card className="shadow-sm overflow-hidden">
          <Table>
            <TableHeader className="bg-slate-50">
              <TableRow>
                <TableHead className="text-xs">Title</TableHead>
                <TableHead className="text-xs">Category</TableHead>
                <TableHead className="text-xs">Severity</TableHead>
                <TableHead className="text-xs">Due Date</TableHead>
                <TableHead className="text-xs">Owner</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {highImpactRaid.map((item, i) => (
                <TableRow key={i}>
                  <TableCell className="font-semibold text-navy-950 text-xs">
                    {item.title}
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-slate-100 text-xs">
                      {item.category}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={
                        item.impact === "Critical"
                          ? "border-red-200 text-red-600 bg-red-50 text-xs"
                          : "border-orange-200 text-orange-600 bg-orange-50 text-xs"
                      }
                    >
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
