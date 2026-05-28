import { Link } from "react-router-dom";
import {
  ArrowRight,
  AlertTriangle,
  Ban,
  Calendar,
  Flag,
  RefreshCw,
  Target,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <Card className="rounded-2xl border-navy-100 shadow-sm overflow-hidden">
            <CardHeader className="pb-4 border-b border-navy-50">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg font-bold text-navy-950">Engagements</CardTitle>
                  <CardDescription className="text-xs">
                    Overall health from 7 key governance indicators
                  </CardDescription>
                </div>
                <Link to="/dashboard/services">
                  <Button variant="ghost" size="sm" className="gap-1 text-xs font-semibold text-orange-600 hover:text-orange-700 hover:bg-orange-50">
                    View all
                    <ArrowRight size={14} />
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <Table>
              <TableHeader className="bg-slate-50/50">
                <TableRow>
                  <TableHead>Engagement</TableHead>
                  <TableHead>Organisation</TableHead>
                  <TableHead>Health</TableHead>
                  <TableHead className="text-center">Blocked</TableHead>
                  <TableHead>Lead</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockPortfolioEngagements.map((engagement) => (
                  <TableRow key={engagement.id} className="hover:bg-slate-50/50">
                    <TableCell>
                      <Link
                        to={`/dashboard/engagement/${engagement.id}`}
                        className="font-semibold text-sm text-navy-950 hover:text-orange-600 transition-colors"
                      >
                        {engagement.name}
                      </Link>
                      <p className="text-[10px] text-gray-400 font-mono mt-0.5">{engagement.id}</p>
                    </TableCell>
                    <TableCell className="text-xs text-gray-600 max-w-[140px]">{engagement.organization}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className={healthBadgeClass(engagement.health)}>
                        {engagement.healthLabel}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-center">
                      <span className={engagement.blockedItems > 0 ? "font-bold text-red-600" : "text-gray-400"}>
                        {engagement.blockedItems}
                      </span>
                    </TableCell>
                    <TableCell className="text-xs font-medium text-navy-950">{engagement.lead}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>

          <Card className="rounded-2xl border-navy-100 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-bold text-navy-950 flex items-center gap-2">
                <Flag size={16} className="text-blue-500" />
                This Week&apos;s Governance Focus
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0 space-y-3">
              {governanceAlerts.weeklyFocus.map((item, i) => (
                <div key={i} className="flex items-start justify-between gap-3 p-3 rounded-xl border border-navy-50 bg-slate-50/50">
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
            </CardContent>
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
                <Target size={14} className="text-orange-500" />
                KRIs at Risk
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 divide-y divide-navy-50">
              {governanceAlerts.krisAtRisk.map((kri) => (
                <div key={kri.id} className="p-4">
                  <div className="flex items-center justify-between mb-1">
                    <Badge variant="outline" className="text-[10px] font-bold border-orange-200 text-orange-700 bg-orange-50">
                      {kri.id}
                    </Badge>
                    <span className="text-[10px] font-bold text-amber-600">{kri.current} / {kri.target}</span>
                  </div>
                  <p className="text-xs font-semibold text-navy-950">{kri.label}</p>
                  <p className="text-[10px] text-gray-500 mt-0.5">{kri.engagement}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {attentionEngagements.length > 0 && (
            <Card className="rounded-2xl border-amber-200 bg-amber-50/30 shadow-sm">
              <CardContent className="p-4">
                <p className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-2">
                  Needs review
                </p>
                <p className="text-sm text-amber-900/90">
                  {attentionEngagements.length} engagement{attentionEngagements.length !== 1 ? "s" : ""} require
                  governance attention this week.
                </p>
                <Link to="/dashboard/services" className="inline-flex items-center gap-1 mt-3 text-xs font-semibold text-orange-600 hover:text-orange-700">
                  Open Delivery workspace
                  <ArrowRight size={12} />
                </Link>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};
