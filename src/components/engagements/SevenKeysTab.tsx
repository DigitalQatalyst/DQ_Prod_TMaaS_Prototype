import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { engagementHealthIndicators, getHealthStatusBadgeClass, type IndicatorNavigationTarget, type EngagementHealthIndicator } from "@/data/engagementHealthIndicators";
import { TrendingUp, TrendingDown, Minus, Clock, ShieldAlert, ArrowRight, Activity, Info, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceArea } from "recharts";

interface SevenKeysTabProps {
  onNavigateToIndicator: (target: IndicatorNavigationTarget) => void;
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

export const SevenKeysTab = ({ onNavigateToIndicator }: SevenKeysTabProps) => {
  const [selectedIndicator, setSelectedIndicator] = useState<EngagementHealthIndicator | null>(null);
  const [timeRange, setTimeRange] = useState("30d");

  const handleRowClick = (indicator: EngagementHealthIndicator) => {
    setSelectedIndicator(indicator);
    setTimeRange("30d"); // Reset range when opening a new indicator
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
            <h2 className="text-lg font-bold text-navy-950">Seven Keys Summary Grid</h2>
            <p className="text-sm text-gray-500 mt-1">Authoritative governance layer tracking objective project health across 7 indicators.</p>
          </div>
        </div>
        
        <Card className="shadow-sm overflow-hidden border-navy-100">
          <Table>
            <TableHeader className="bg-slate-50">
              <TableRow>
                <TableHead className="w-[30%]">Indicator</TableHead>
                <TableHead>RAG State</TableHead>
                <TableHead>Trend</TableHead>
                <TableHead>Time in State</TableHead>
                <TableHead>Last Transition</TableHead>
                <TableHead className="text-right"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {engagementHealthIndicators.map((ind) => (
                <TableRow 
                  key={ind.id} 
                  onClick={() => handleRowClick(ind)}
                  className="cursor-pointer hover:bg-slate-50 transition-colors group"
                >
                  <TableCell>
                    <div className="font-semibold text-navy-950 group-hover:text-navy-700 transition-colors">{ind.name}</div>
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
                      View Details
                      <ChevronRight size={14} className="ml-1" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </section>

      {/* OVERLAY: Contextual Governance Analysis */}
      <Dialog open={!!selectedIndicator} onOpenChange={(open) => !open && setSelectedIndicator(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          <DialogHeader className="pb-4 border-b border-border">
            <div className="flex items-center gap-3">
              <DialogTitle className="text-xl font-bold text-navy-950">{selectedIndicator?.name}</DialogTitle>
              {selectedIndicator && (
                <Badge variant="outline" className={`capitalize ${getHealthStatusBadgeClass(selectedIndicator.status)}`}>
                  {selectedIndicator.status}
                </Badge>
              )}
            </div>
            <DialogDescription className="text-sm mt-2 text-gray-600">
              {selectedIndicator?.description}
            </DialogDescription>
          </DialogHeader>

          {selectedIndicator && (
            <div className="space-y-8 mt-2">
              
              {/* Contextual Evidence Breakdown */}
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
                      <h4 className="font-bold text-gray-500 text-xs uppercase tracking-wider mb-2 flex items-center gap-1">
                        Failed Rules
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-navy-950">
                        {selectedIndicator.evidence.rules.map((rule, i) => (
                          <li key={i}>{rule}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-500 text-xs uppercase tracking-wider mb-3 flex items-center gap-1">
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
                
                {/* Specific Reason */}
                <div className="bg-amber-50/50 border border-amber-100 rounded-lg p-4 flex gap-3 items-start">
                  <Info size={16} className="text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-amber-900 leading-relaxed">{selectedIndicator.currentReason}</p>
                </div>
              </section>

              {/* Contextual Trend & Recovery Analysis */}
              <section className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-navy-950 uppercase tracking-wider flex items-center gap-2">
                    <Activity size={16} className="text-navy-950" /> 
                    Trend & Recovery Analysis
                  </h3>
                  <div className="flex bg-slate-100 rounded-md p-0.5">
                    <Button variant="ghost" size="sm" onClick={() => setTimeRange("7d")} className={`h-7 text-xs px-3 rounded-sm ${timeRange === "7d" ? "bg-white shadow-sm font-medium" : "text-gray-500 font-normal hover:text-navy-950"}`}>7 Days</Button>
                    <Button variant="ghost" size="sm" onClick={() => setTimeRange("30d")} className={`h-7 text-xs px-3 rounded-sm ${timeRange === "30d" ? "bg-white shadow-sm font-medium" : "text-gray-500 font-normal hover:text-navy-950"}`}>30 Days</Button>
                    <Button variant="ghost" size="sm" onClick={() => setTimeRange("90d")} className={`h-7 text-xs px-3 rounded-sm ${timeRange === "90d" ? "bg-white shadow-sm font-medium" : "text-gray-500 font-normal hover:text-navy-950"}`}>90 Days</Button>
                    <Button variant="ghost" size="sm" onClick={() => setTimeRange("all")} className={`h-7 text-xs px-3 rounded-sm ${timeRange === "all" ? "bg-white shadow-sm font-medium" : "text-gray-500 font-normal hover:text-navy-950"}`}>All Time</Button>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 border border-slate-100 flex flex-col md:flex-row items-center gap-8">
                  <div className="w-full md:w-2/3 h-48">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={generateMockTrendData(selectedIndicator.status, selectedIndicator.trend, timeRange)} margin={{ top: 5, right: 20, bottom: 5, left: -20 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                        <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#64748b" }} />
                        <YAxis 
                          domain={[1, 3]} 
                          ticks={[1, 2, 3]} 
                          axisLine={false} 
                          tickLine={false} 
                          tick={{ fontSize: 12, fill: "#64748b" }}
                          tickFormatter={(val) => val === 3 ? "Green" : val === 2 ? "Amber" : "Red"}
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
                  <div className="w-full md:w-1/3 space-y-2 text-center md:text-left">
                    <h4 className="font-semibold text-navy-950">Trajectory Profile</h4>
                    <p className="text-sm text-gray-500">
                      Recovered from Amber twice in last 30 days.
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
                </div>
              </section>

            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};
