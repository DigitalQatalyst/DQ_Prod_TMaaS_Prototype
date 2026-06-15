"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Package,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
  Bot,
  ShoppingBag,
  Activity,
  Clock,
  Calendar,
  FileCheck,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import DashboardLayout from "@/components/foundation/layouts/DashboardLayout";
import { useAuth } from "@/contexts/AuthContext";
import { initialServices } from "@/data/services";

const activeEngagements = [
  { id: 1, name: "Customer Experience Strategy", service: "Digital Experience Strategy", status: "In Progress", health: "On Track", nextSession: "Architecture Workshop", sessionDate: "Mar 20, 2026", progress: 35 },
  { id: 2, name: "AI Workforce Enablement", service: "AI Workforce Enablement Sprint", status: "Awaiting Inputs", health: "At Risk", nextSession: "Baseline Productivity Scan", sessionDate: "Mar 18, 2026", progress: 10 },
  { id: 3, name: "Data Platform Modernisation", service: "Data Governance Platform", status: "In Progress", health: "On Track", nextSession: "Requirements Workshop", sessionDate: "Mar 25, 2026", progress: 30 },
];

const recentUpdates = [
  { id: 1, title: "Document Approved: Technical Requirements v1.2", engagement: "Customer Experience Strategy", time: "2 hours ago", icon: CheckCircle2, color: "text-green-500", bgColor: "bg-green-500/10" },
  { id: 2, title: "Session Completed: Kickoff Meeting", engagement: "AI Workforce Enablement", time: "5 hours ago", icon: Activity, color: "text-orange-500", bgColor: "bg-orange-500/10" },
  { id: 3, title: "New message from Delivery Lead", engagement: "Data Platform Modernisation", time: "1 day ago", icon: MessageSquare, color: "text-blue-500", bgColor: "bg-blue-500/10" },
];

const upcomingDeliverables = [
  { id: 1, title: "Architecture Blueprint Document", engagement: "Customer Experience Strategy", dueDate: "March 22, 2026", status: "Drafting" },
  { id: 2, title: "Productivity Scan Results", engagement: "AI Workforce Enablement", dueDate: "March 24, 2026", status: "Pending Inputs" },
  { id: 3, title: "Governance Framework Draft", engagement: "Data Platform Modernisation", dueDate: "April 2, 2026", status: "In Progress" },
];

function ClientOverview() {
  const recommendedServices = initialServices.slice(0, 2);

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-navy-950">Transformation Overview</h1>
          <p className="mt-1 text-sm text-gray-500">Here is the latest status across your active engagements.</p>
        </div>
        <Link href="/marketplace">
          <Button className="bg-navy-950 hover:bg-navy-900 text-white rounded-xl shadow-sm text-xs font-semibold px-5 h-10 gap-2">
            <ShoppingBag size={14} />
            Explore Services
          </Button>
        </Link>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <Card className="rounded-2xl border-navy-100 shadow-sm">
            <CardHeader className="pb-4 border-b border-navy-50">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg font-bold text-navy-950">Active Engagements</CardTitle>
                  <CardDescription className="text-xs">Tracking {activeEngagements.length} ongoing initiatives</CardDescription>
                </div>
                <Link href="/dashboard/active-services">
                  <Button variant="ghost" size="sm" className="gap-2 text-xs font-semibold text-orange-600 hover:text-orange-700 hover:bg-orange-50">
                    View All <ArrowRight size={14} />
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-navy-50">
                {activeEngagements.map((engagement) => (
                  <div key={engagement.id} className="p-5 hover:bg-slate-50 transition-colors">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="font-bold text-navy-950 text-sm mb-1">{engagement.name}</h4>
                        <p className="text-xs text-gray-500">{engagement.service}</p>
                      </div>
                      <div className="flex gap-2">
                        <Badge variant="secondary" className="bg-white border-navy-100 text-[10px] font-semibold text-navy-950">{engagement.status}</Badge>
                        <Badge variant="secondary" className={`border-transparent text-[10px] font-bold ${engagement.health === "On Track" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"}`}>{engagement.health}</Badge>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-navy-50 rounded-xl p-3 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 shrink-0">
                          <Clock size={14} />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Upcoming Activity</p>
                          <p className="text-xs font-semibold text-navy-950">{engagement.nextSession}</p>
                        </div>
                      </div>
                      <div className="text-left sm:text-right">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Date</p>
                        <p className="text-xs font-semibold text-navy-950">{engagement.sessionDate}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-orange-200 bg-orange-50/30 shadow-sm">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2 mb-1">
                <Bot size={16} className="text-orange-500" />
                <CardTitle className="text-sm font-bold text-navy-950">Recommended Services</CardTitle>
              </div>
              <CardDescription className="text-xs text-gray-600">Based on your active engagements and operational profile.</CardDescription>
            </CardHeader>
            <CardContent className="pt-2 pb-4">
              <div className="grid sm:grid-cols-2 gap-4">
                {recommendedServices.map((service) => (
                  <Link key={service.id} href={`/marketplace/${service.id}`} className="block group">
                    <div className="rounded-xl border border-orange-100 bg-white p-4 shadow-sm transition-all hover:border-orange-300 hover:shadow-md">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="bg-orange-50 text-orange-700 border-none text-[9px] font-bold uppercase">Recommended</Badge>
                        <ArrowUpRight size={14} className="text-gray-400 group-hover:text-orange-500 transition-colors" />
                      </div>
                      <h4 className="text-xs font-bold text-navy-950 mb-1">{service.standardName}</h4>
                      <p className="text-[10px] text-gray-500 line-clamp-2 leading-relaxed">{service.positioning}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="rounded-2xl border-navy-100 shadow-sm">
            <CardHeader className="pb-4 border-b border-navy-50">
              <CardTitle className="text-sm font-bold text-navy-950">Recent Updates</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-navy-50">
                {recentUpdates.map((update) => {
                  const Icon = update.icon;
                  return (
                    <div key={update.id} className="p-4 flex gap-3 hover:bg-slate-50 transition-colors">
                      <div className={`mt-0.5 shrink-0 rounded-full h-8 w-8 flex items-center justify-center ${update.bgColor} ${update.color}`}>
                        <Icon size={14} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-navy-950 leading-tight mb-1">{update.title}</p>
                        <p className="text-[10px] text-gray-500 mb-1">{update.engagement}</p>
                        <p className="text-[9px] font-bold text-gray-400 uppercase">{update.time}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-navy-100 shadow-sm">
            <CardHeader className="pb-4 border-b border-navy-50">
              <CardTitle className="text-sm font-bold text-navy-950 flex items-center gap-2">
                <FileCheck size={16} className="text-gray-400" />
                Upcoming Deliverables
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-navy-50">
                {upcomingDeliverables.map((del) => (
                  <div key={del.id} className="p-4 hover:bg-slate-50 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <p className="text-xs font-semibold text-navy-950">{del.title}</p>
                      <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        del.status === "Drafting" ? "bg-blue-50 text-blue-700" :
                        del.status === "Pending Inputs" ? "bg-orange-50 text-orange-700" : "bg-slate-100 text-slate-700"
                      }`}>{del.status}</span>
                    </div>
                    <p className="text-[10px] text-gray-500 mb-2">{del.engagement}</p>
                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400">
                      <Calendar size={12} />
                      Due: {del.dueDate}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default function DashboardOverviewPage() {
  const { user } = useAuth();

  if (user.role === "dq_delivery_lead") {
    return (
      <DashboardLayout>
        <div className="p-4 text-sm text-gray-500">DQ Delivery view — coming soon</div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <ClientOverview />
    </DashboardLayout>
  );
}
