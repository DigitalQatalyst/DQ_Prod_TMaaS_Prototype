"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import {
  engagementHealthIndicators,
  getHealthStatusBadgeClass,
  type IndicatorNavigationTarget,
  type EngagementHealthIndicator,
  type HealthStatus,
} from "@/data/engagementHealthIndicators" // TODO: Task 9 — wire up data;
import { TrendingUp, TrendingDown, Minus, Clock, ShieldAlert, ArrowRight, Activity, Info, ChevronRight, CheckCircle2, AlertCircle, XCircle, Cpu, UserCog, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface SevenKeysTabProps {
  onNavigateToIndicator: (target: IndicatorNavigationTarget) => void;
  isClient?: boolean;
}

const getTrendIcon = (trend: string) => {
  if (trend === "improving") return <TrendingUp size={16} className="text-green-600" />;
  if (trend === "deteriorating") return <TrendingDown size={16} className="text-red-600" />;
  return <Minus size={16} className="text-gray-400" />;
};

const generateMockTrendData = (status: string, trend: string, range: string) => {
  const baseValue = status === "green" ? 3 : status === "amber" ? 2 : 1;
  const prevValue = trend === "improving" ? baseValue - 1 : trend === "deteriorating" ? baseValue + 1 : baseValue;
  const oldestValue = trend === "improving" ? baseValue - 1 : trend === "deteriorating" ? Math.min(baseValue + 2, 3) : baseValue;

  const clamp = (v: number) => Math.max(1, Math.min(3, v));

  if (range === "7d") {
    return [
      { date: "-7d", score: clamp(prevValue) },
      { date: "-5d", score: clamp(prevValue) },
      { date: "-2d", score: clamp(baseValue) },
      { date: "Now", score: clamp(baseValue) },
    ];
  }

  if (range === "90d") {
    return [
      { date: "-90d", score: 3 },
      { date: "-60d", score: clamp(oldestValue) },
      { date: "-30d", score: clamp(prevValue) },
      { date: "Now", score: clamp(baseValue) },
    ];
  }

  if (range === "all") {
    return [
      { date: "Kickoff", score: 3 },
      { date: "Month 1", score: clamp(oldestValue) },
      { date: "Month 2", score: clamp(prevValue) },
      { date: "Now", score: clamp(baseValue) },
    ];
  }

  // Default 30d
  return [
    { date: "-30d", score: clamp(oldestValue) },
    { date: "-20d", score: clamp(prevValue) },
    { date: "-10d", score: clamp(prevValue) },
    { date: "Now", score: clamp(baseValue) },
  ];
};

// ─── RAG Option Card ─────────────────────────────────────────────────────────
const ragConfig: Record<HealthStatus, { icon: React.ReactNode; border: string; selectedBg: string; labelColor: string; bullet: string }> = {
  green: {
    icon: <CheckCircle2 size={18} className="text-green-600" />,
    border: "border-green-200 hover:border-green-400",
    selectedBg: "bg-green-50 border-green-400 ring-2 ring-green-300/60",
    labelColor: "text-green-700",
    bullet: "bg-green-500",
  },
  amber: {
    icon: <AlertCircle size={18} className="text-amber-500" />,
    border: "border-amber-200 hover:border-amber-400",
    selectedBg: "bg-amber-50 border-amber-400 ring-2 ring-amber-300/60",
    labelColor: "text-amber-700",
    bullet: "bg-amber-500",
  },
  red: {
    icon: <XCircle size={18} className="text-red-500" />,
    border: "border-red-200 hover:border-red-400",
    selectedBg: "bg-red-50 border-red-400 ring-2 ring-red-300/60",
    labelColor: "text-red-700",
    bullet: "bg-red-500",
  },
};

interface ManualRagSelectorProps {
  indicator: EngagementHealthIndicator;
  currentStatus: HealthStatus;
  onSelect: (status: HealthStatus) => void;
}

const ManualRagSelector = ({ indicator, currentStatus, onSelect }: ManualRagSelectorProps) => {
  if (!indicator.governanceCriteria) return null;

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center gap-2 pb-1">
        <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
          <UserCog size={12} className="text-blue-600" />
        </div>
        <p className="text-xs font-semibold text-blue-700 uppercase tracking-wider">
          Delivery Lead Assessment
        </p>
      </div>

      <p className="text-xs text-gray-500 leading-relaxed -mt-2">
        Select the RAG status that best reflects current stakeholder engagement using the criteria below. Your selection is recorded and timestamped.
      </p>

      {/* RAG option cards */}
      <div className="space-y-3">
        {indicator.governanceCriteria.map((criterion) => {
          const cfg = ragConfig[criterion.status];
          const isSelected = currentStatus === criterion.status;

          return (
            <button
              key={criterion.status}
              onClick={() => onSelect(criterion.status)}
              className={`w-full text-left rounded-xl border-2 p-4 transition-all duration-200 cursor-pointer ${
                isSelected ? cfg.selectedBg : `bg-white ${cfg.border}`
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                {cfg.icon}
                <span className={`font-bold text-sm ${cfg.labelColor}`}>
                  {criterion.status.charAt(0).toUpperCase() + criterion.status.slice(1)}, {criterion.label}
                </span>
                {isSelected && (
                  <span className={`ml-auto text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${
                    criterion.status === "green"
                      ? "bg-green-100 text-green-700"
                      : criterion.status === "amber"
                      ? "bg-amber-100 text-amber-700"
                      : "bg-red-100 text-red-700"
                  }`}>
                    Selected
                  </span>
                )}
              </div>
              <ul className="space-y-1.5">
                {criterion.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-gray-600 leading-snug">
                    <span className={`w-1.5 h-1.5 rounded-full ${cfg.bullet} shrink-0 mt-1.5`} />
                    {item}
                  </li>
                ))}
              </ul>
            </button>
          );
        })}
      </div>

      {/* Last updated note */}
      <p className="text-[10px] text-gray-400 flex items-center gap-1.5 border-t border-slate-100 pt-3">
        <Clock size={10} />
        Last updated: {indicator.lastTransition} · Delivery Lead
      </p>
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────
export const SevenKeysTab = ({ onNavigateToIndicator, isClient = false }: SevenKeysTabProps) => {
  const [indicators, setIndicators] = useState<EngagementHealthIndicator[]>(engagementHealthIndicators);
  const [selectedIndicator, setSelectedIndicator] = useState<EngagementHealthIndicator | null>(null);
  const [timeRange, setTimeRange] = useState("30d");

  const handleRowClick = (indicator: EngagementHealthIndicator) => {
    // Always open from the live indicators array (so status is up-to-date)
    const live = indicators.find((i) => i.id === indicator.id) ?? indicator;
    setSelectedIndicator(live);
    setTimeRange("30d");
  };

  const handleManualStatusChange = (status: HealthStatus) => {
    if (!selectedIndicator) return;
    const updated = indicators.map((ind) =>
      ind.id === selectedIndicator.id
        ? {
            ...ind,
            status,
            lastTransition: new Date().toISOString().split("T")[0],
            timeInState: "Just now",
          }
        : ind
    );
    setIndicators(updated as EngagementHealthIndicator[]);
    setSelectedIndicator((prev) => prev ? { ...prev, status, lastTransition: new Date().toISOString().split("T")[0], timeInState: "Just now" } as EngagementHealthIndicator : null);
  };

  const handleNavigate = (target: IndicatorNavigationTarget) => {
    onNavigateToIndicator(target);
    setSelectedIndicator(null);
  };

  return (
    <div className="space-y-6">
      {/* PRIMARY VIEW: Seven Keys Summary Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-navy-950">
              {isClient ? "Delivery Health Overview" : "Seven Keys Summary Grid"}
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              {isClient
                ? "Overview of objective project health and status."
                : "Governance layer tracking project health across 7 indicators. Some indicators are manually assessed by the Delivery Lead."}
            </p>
          </div>

          {/* Legend */}
          {!isClient && (
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1.5">
                <Cpu size={12} className="text-navy-400" /> Automated
              </span>
              <span className="flex items-center gap-1.5">
                <UserCog size={12} className="text-blue-500" /> Manual
              </span>
            </div>
          )}
        </div>

        <Card className="shadow-sm overflow-hidden border-navy-100">
          <Table>
            <TableHeader className="bg-slate-50">
              <TableRow>
                <TableHead className="w-[30%]">Indicator</TableHead>
                <TableHead>Source</TableHead>
                <TableHead>RAG State</TableHead>
                <TableHead>Trend</TableHead>
                <TableHead>Time in State</TableHead>
                <TableHead>Last Transition</TableHead>
                <TableHead className="text-right"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {indicators.map((ind) => (
                <TableRow
                  key={ind.id}
                  onClick={() => handleRowClick(ind)}
                  className="cursor-pointer hover:bg-slate-50 transition-colors group"
                >
                  <TableCell>
                    <div className="font-semibold text-navy-950 group-hover:text-navy-700 transition-colors">{ind.name}</div>
                  </TableCell>
                  <TableCell>
                    {ind.inputMode === "manual" ? (
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 gap-1 text-[11px]">
                        <UserCog size={11} /> Manual
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="bg-slate-50 text-slate-500 border-slate-200 gap-1 text-[11px]">
                        <Cpu size={11} /> Auto
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className={`capitalize ${getHealthStatusBadgeClass(ind.status)}`}>
                      {ind.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2 capitalize text-sm">
                      {getTrendIcon(ind.trend)}
                      {ind.trend}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock size={14} className="text-gray-400" />
                      {ind.timeInState}
                    </div>
                  </TableCell>
                  <TableCell className="text-sm text-gray-500 font-mono">
                    {ind.lastTransition}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" className="text-navy-600 font-semibold group-hover:bg-navy-50 group-hover:text-navy-900">
                      {ind.inputMode === "manual" && !isClient ? (
                        <>
                          <Pencil size={13} className="mr-1" /> Update
                        </>
                      ) : (
                        <>
                          View Details <ChevronRight size={14} className="ml-1" />
                        </>
                      )}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </section>

      {/* ── DETAIL DIALOG ───────────────────────────────────────── */}
      <Dialog open={!!selectedIndicator} onOpenChange={(open) => !open && setSelectedIndicator(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader className="pb-4 border-b border-border">
            <div className="flex items-center gap-3 flex-wrap">
              <DialogTitle className="text-xl font-bold text-navy-950">{selectedIndicator?.name}</DialogTitle>
              {selectedIndicator && (
                <Badge variant="outline" className={`capitalize ${getHealthStatusBadgeClass(selectedIndicator.status)}`}>
                  {selectedIndicator.status}
                </Badge>
              )}
              {selectedIndicator?.inputMode === "manual" && (
                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 gap-1 text-[11px]">
                  <UserCog size={11} /> Manually Assessed
                </Badge>
              )}
            </div>
            <DialogDescription className="text-sm mt-2 text-gray-600">
              {selectedIndicator?.description}
            </DialogDescription>
          </DialogHeader>

          {selectedIndicator && (
            <div className="space-y-8 mt-2">

              {/* ── MANUAL: RAG SELECTOR ────────────────────────────── */}
              {selectedIndicator.inputMode === "manual" && !isClient && (
                <section className="space-y-3">
                  <h3 className="text-sm font-bold text-navy-950 uppercase tracking-wider flex items-center gap-2">
                    <UserCog size={16} className="text-blue-600" />
                    Governance Assessment
                  </h3>
                  <ManualRagSelector
                    indicator={selectedIndicator}
                    currentStatus={selectedIndicator.status}
                    onSelect={handleManualStatusChange}
                  />
                </section>
              )}

              {/* ── AUTOMATED: Governance Evidence ──────────────────── */}
              {selectedIndicator.inputMode === "automated" && !isClient && (
                <section className="space-y-3">
                  <h3 className="text-sm font-bold text-navy-950 uppercase tracking-wider flex items-center gap-2">
                    <ShieldAlert size={16} className="text-navy-950" />
                    Governance Evidence
                  </h3>

                  {selectedIndicator.status === "green" ? (
                    <div className="bg-green-50/50 rounded-lg p-6 text-center border border-green-100">
                      <p className="text-sm text-green-800 font-medium">All governance rules are currently passing.</p>
                    </div>
                  ) : (
                    <div className="bg-slate-50 rounded-lg p-5 grid md:grid-cols-2 gap-6 text-sm border border-slate-100">
                      <div>
                        <h4 className="font-bold text-gray-500 text-xs uppercase tracking-wider mb-2">
                          Failed Rules
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-navy-950">
                          {selectedIndicator.evidence.rules.map((rule, i) => (
                            <li key={i}>{rule}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-500 text-xs uppercase tracking-wider mb-3">
                          Active Triggers
                        </h4>
                        <ul className="space-y-3 text-navy-950">
                          {selectedIndicator.evidence.triggers.map((trigger, i) => (
                            <li key={i} className="flex items-start justify-between gap-4 border-b border-slate-200/50 last:border-0 pb-3 last:pb-0">
                              <div className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-navy-400 shrink-0 mt-1.5" />
                                <span className="flex-1 leading-snug">{trigger}</span>
                              </div>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleNavigate(selectedIndicator.navigation)}
                                className="h-auto py-1 px-2 text-navy-600 hover:text-navy-950 hover:bg-navy-50 text-xs shrink-0"
                              >
                                View <ArrowRight size={12} className="ml-1" />
                              </Button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </section>
              )}

              {/* ── CLIENT VIEW: Status Reason ──────────────────────── */}
              {isClient && (
                <section className="space-y-3">
                  <h3 className="text-sm font-bold text-navy-950 uppercase tracking-wider flex items-center gap-2">
                    <Info size={16} className="text-navy-950" />
                    Status Details
                  </h3>
                  <div className="bg-slate-50 border-slate-200 border rounded-lg p-4 flex gap-3 items-start">
                    <Info size={16} className="text-slate-500 shrink-0 mt-0.5" />
                    <p className="text-sm text-navy-900 leading-relaxed">{selectedIndicator.currentReason}</p>
                  </div>
                </section>
              )}

              {/* ── Delivery Lead reasoning note (manual indicators, non-client) */}
              {selectedIndicator.inputMode === "manual" && !isClient && (
                <section className="space-y-2">
                  <h3 className="text-sm font-bold text-navy-950 uppercase tracking-wider flex items-center gap-2">
                    <Info size={16} className="text-navy-950" />
                    Current Assessment Note
                  </h3>
                  <div className="bg-amber-50/50 border-amber-100 border rounded-lg p-4 flex gap-3 items-start">
                    <Info size={16} className="text-amber-600 shrink-0 mt-0.5" />
                    <p className="text-sm text-amber-900 leading-relaxed">{selectedIndicator.currentReason}</p>
                  </div>
                </section>
              )}

              {/* ── Automated: current reason note ─────────────────── */}
              {selectedIndicator.inputMode === "automated" && !isClient && (
                <section>
                  <div className="bg-amber-50/50 border-amber-100 border rounded-lg p-4 flex gap-3 items-start">
                    <Info size={16} className="text-amber-600 shrink-0 mt-0.5" />
                    <p className="text-sm text-amber-900 leading-relaxed">{selectedIndicator.currentReason}</p>
                  </div>
                </section>
              )}

              {/* ── Trend Chart ──────────────────────────────────────── */}
              <section className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-navy-950 uppercase tracking-wider flex items-center gap-2">
                    <Activity size={16} className="text-navy-950" />
                    Trend & Recovery Analysis
                  </h3>
                  <div className="flex bg-slate-100 rounded-md p-0.5">
                    {["7d", "30d", "90d", "all"].map((r) => (
                      <Button
                        key={r}
                        variant="ghost"
                        size="sm"
                        onClick={() => setTimeRange(r)}
                        className={`h-7 text-xs px-3 rounded-sm ${
                          timeRange === r ? "bg-white shadow-sm font-medium" : "text-gray-500 font-normal hover:text-navy-950"
                        }`}
                      >
                        {r === "all" ? "All Time" : r === "7d" ? "7 Days" : r === "30d" ? "30 Days" : "90 Days"}
                      </Button>
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 border border-slate-100 flex flex-col md:flex-row items-center gap-8">
                  <div className={`w-full ${!isClient ? "md:w-2/3" : ""} h-48`}>
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={generateMockTrendData(selectedIndicator.status, selectedIndicator.trend, timeRange)}
                        margin={{ top: 5, right: 20, bottom: 5, left: -20 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                        <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#64748b" }} />
                        <YAxis
                          domain={[1, 3]}
                          ticks={[1, 2, 3]}
                          axisLine={false}
                          tickLine={false}
                          tick={{ fontSize: 12, fill: "#64748b" }}
                          tickFormatter={(val) => (val === 3 ? "Green" : val === 2 ? "Amber" : "Red")}
                        />
                        <Tooltip
                          formatter={(value: number) => [value === 3 ? "Green" : value === 2 ? "Amber" : "Red", "Status"]}
                          labelStyle={{ color: "#0f172a" }}
                          contentStyle={{ borderRadius: "8px", border: "1px solid #e2e8f0", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }}
                        />
                        <Line type="stepAfter" dataKey="score" stroke="#0f172a" strokeWidth={2} dot={{ r: 4, fill: "#0f172a" }} activeDot={{ r: 6 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  {!isClient && (
                    <div className="w-full md:w-1/3 space-y-2 text-center md:text-left">
                      <h4 className="font-semibold text-navy-950">Trajectory Profile</h4>
                      <p className="text-sm text-gray-500">
                        {selectedIndicator.inputMode === "manual"
                          ? "Status reflects Delivery Lead assessment over time."
                          : "Recovered from Amber twice in last 30 days."}
                      </p>
                      {selectedIndicator.trend === "deteriorating" && (
                        <div className="mt-4 p-3 bg-red-50 border border-red-100 rounded-md text-red-800 text-xs font-semibold">
                          Warning: Downward trend sustained for {selectedIndicator.timeInState}.
                        </div>
                      )}
                      {selectedIndicator.trend === "improving" && (
                        <div className="mt-4 p-3 bg-green-50 border border-green-100 rounded-md text-green-800 text-xs font-semibold">
                          Positive: Upward trend sustained for {selectedIndicator.timeInState}.
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </section>

            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};
