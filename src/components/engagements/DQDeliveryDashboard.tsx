import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  AlertTriangle,
  Ban,
  Calendar,
  Flag,
  RefreshCw,
  Target,
  XCircle,
  Clock,
  ShieldAlert,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  mockPortfolioEngagements,
  portfolioHealthMetrics,
  governanceAlerts,
  type PortfolioHealth,
} from "@/data/mockPortfolioEngagements";
import { useAuth } from "@/contexts/AuthContext";

const healthBadgeClass = (health: PortfolioHealth) => {
  if (health === "green") return "bg-green-50 text-green-700 border-green-200";
  if (health === "amber") return "bg-amber-50 text-amber-700 border-amber-200";
  return "bg-red-50 text-red-700 border-red-200";
};

const metricCards = [
  { key: "total", label: "Total", value: portfolioHealthMetrics.total, accent: "text-navy-950" },
  { key: "onTrack", label: "(Green)", value: portfolioHealthMetrics.onTrack, accent: "text-green-600" },
  { key: "atRisk", label: "(Amber)", value: portfolioHealthMetrics.atRisk, accent: "text-amber-600" },
  { key: "critical", label: "(Red)", value: portfolioHealthMetrics.critical, accent: "text-red-600" },
  { key: "completed", label: "Completed", value: portfolioHealthMetrics.completed, accent: "text-slate-600" },
] as const;

export const DQDeliveryDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const attentionEngagements = mockPortfolioEngagements.filter(
    (e) => e.health !== "green" || e.blockedItems > 0 || e.krisAtRisk > 0
  );

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-navy-950">Delivery</h1>
          <p className="mt-1 text-sm text-gray-500">
            Portfolio health, escalations, and operational focus for {user.name}
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <Button variant="outline" size="sm" className="gap-2 rounded-xl">
            <RefreshCw size={14} />
            Refresh
          </Button>
          <Link to="/dashboard/services">
            <Button size="sm" className="gap-2 bg-navy-950 hover:bg-navy-900 text-white rounded-xl">
              View Delivery
              <ArrowRight size={14} />
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {metricCards.map((metric) => (
          <Card key={metric.key} className="rounded-2xl border-navy-100 shadow-sm">
            <CardContent className="p-5">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                {metric.label}
              </p>
              <p className={`text-3xl font-bold ${metric.accent}`}>{metric.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          {portfolioHealthMetrics.critical > 0 && (
            <Card className="rounded-2xl border-red-200 bg-red-50/40 shadow-sm">
              <CardContent className="p-5 flex gap-4">
                <div className="h-10 w-10 shrink-0 rounded-xl bg-red-100 flex items-center justify-center">
                  <AlertTriangle size={20} className="text-red-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-red-900 mb-1">Why is attention required?</p>
                  <p className="text-sm text-red-800/90 leading-relaxed">{governanceAlerts.criticalSummary}</p>
                </div>
              </CardContent>
            </Card>
          )}

          <Card className="rounded-2xl border-amber-200 bg-amber-50/10 shadow-sm overflow-hidden">
            <CardHeader className="pb-4 border-b border-amber-100 bg-amber-50/50">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg font-bold text-amber-950 flex items-center gap-2">
                    <ShieldAlert size={18} className="text-amber-600" />
                    Requires Attention
                  </CardTitle>
                  <CardDescription className="text-xs text-amber-800/70 mt-1">
                    Projects marked as Amber or Red, or with active blocks.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <div className="divide-y divide-amber-100/50">
              {attentionEngagements.length === 0 ? (
                <div className="p-8 text-center text-sm text-gray-500">
                  No projects currently require attention.
                </div>
              ) : (
                attentionEngagements.map((project) => (
                  <div 
                    key={project.id} 
                    className="p-4 hover:bg-amber-50/30 cursor-pointer transition-colors flex items-center justify-between gap-4"
                    onClick={() => navigate(`/dashboard/engagement/${project.id}`)}
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        {project.health === "red" ? (
                          <ShieldAlert size={14} className="text-red-600" />
                        ) : (
                          <AlertTriangle size={14} className="text-amber-600" />
                        )}
                        <p className="font-semibold text-sm text-navy-950">{project.name}</p>
                      </div>
                      <p className="text-[10px] text-gray-500">{project.organization} · Lead: {project.lead}</p>
                    </div>
                    <div className="text-right flex flex-col items-end gap-2">
                      <Badge variant="outline" className={project.health === "red" ? "border-red-200 bg-red-50 text-red-700 text-[10px]" : "border-amber-200 bg-amber-50 text-amber-700 text-[10px]"}>
                        {project.healthLabel}
                      </Badge>
                      {project.blockedItems > 0 && (
                        <span className="text-[10px] font-bold text-red-600 flex items-center gap-1">
                          <Ban size={10} /> {project.blockedItems} blocked
                        </span>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="rounded-2xl border-navy-100 shadow-sm">
            <CardHeader className="pb-3 border-b border-navy-50">
              <CardTitle className="text-sm font-bold text-navy-950">Active Escalations</CardTitle>
            </CardHeader>
            <CardContent className="p-0 divide-y divide-navy-50">
              {governanceAlerts.escalations.map((item) => (
                <div key={item.id} className="p-4">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <p className="text-xs font-semibold text-navy-950 leading-snug">{item.label}</p>
                    <Badge variant="outline" className="text-[9px] shrink-0 bg-red-50 text-red-700 border-red-200">
                      {item.severity}
                    </Badge>
                  </div>
                  <p className="text-[10px] text-gray-500">{item.engagement}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-navy-100 shadow-sm">
            <CardHeader className="pb-3 border-b border-navy-50">
              <CardTitle className="text-sm font-bold text-navy-950 flex items-center gap-2">
                <Ban size={14} className="text-red-500" />
                Blocked
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 divide-y divide-navy-50">
              {governanceAlerts.blocked.map((item) => (
                <div key={item.id} className="p-4">
                  <p className="text-xs font-semibold text-navy-950">{item.label}</p>
                  <p className="text-[10px] text-gray-500 mt-0.5">
                    {item.type} · {item.engagement}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-navy-100 shadow-sm">
            <CardHeader className="pb-3 border-b border-navy-50">
              <CardTitle className="text-sm font-bold text-navy-950 flex items-center gap-2">
                <XCircle size={14} className="text-amber-500" />
                Overdue
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 divide-y divide-navy-50">
              {governanceAlerts.overdue.map((item) => (
                <div key={item.id} className="p-4">
                  <p className="text-xs font-semibold text-navy-950">{item.label}</p>
                  <p className="text-[10px] text-gray-500 mt-0.5">
                    Due {item.dueDate} · {item.engagement}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-navy-100 shadow-sm">
            <CardHeader className="pb-3 border-b border-navy-50">
              <CardTitle className="text-sm font-bold text-navy-950 flex items-center gap-2">
                <Flag size={16} className="text-blue-500" />
                This Week&apos;s Governance Focus
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0 space-y-3">
              <div className="p-4">
                {governanceAlerts.weeklyFocus.map((item, i) => (
                  <div key={i} className="flex items-start justify-between gap-3 p-3 mt-2 rounded-xl border border-navy-50 bg-slate-50/50">
                    <div>
                      <p className="text-sm font-semibold text-navy-950">{item.label}</p>
                      <p className="text-xs text-gray-500">{item.engagement}</p>
                    </div>
                    <span className="text-[10px] font-bold text-gray-400 whitespace-nowrap flex items-center gap-1">
                      <Calendar size={12} />
                      {item.date}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
