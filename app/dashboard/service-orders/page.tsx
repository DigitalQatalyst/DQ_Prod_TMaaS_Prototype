"use client";

import DashboardLayout from "@/components/foundation/layouts/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const mockOrders = [
  { id: "SO-001", service: "Digital Experience Strategy", client: "STC Bank", status: "Active", date: "Jan 15, 2026", value: "AED 85,000" },
  { id: "SO-002", service: "AI Workforce Enablement Sprint", client: "STC Bank", status: "Awaiting Inputs", date: "Feb 1, 2026", value: "AED 45,000" },
  { id: "SO-003", service: "Data Governance Platform", client: "STC Bank", status: "Active", date: "Feb 20, 2026", value: "AED 120,000" },
];

const statusColors: Record<string, string> = {
  Active: "bg-green-100 text-green-700",
  "Awaiting Inputs": "bg-orange-100 text-orange-700",
  Completed: "bg-blue-100 text-blue-700",
  Cancelled: "bg-red-100 text-red-700",
};

export default function ServiceOrdersPage() {
  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-navy-950">Service Orders</h1>
          <p className="mt-1 text-sm text-gray-500">All active and historical service orders for your organisation.</p>
        </div>

        <div className="space-y-4">
          {mockOrders.map((order) => (
            <Card key={order.id} className="rounded-2xl border-navy-100 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs font-mono font-bold text-gray-400">{order.id}</span>
                      <Badge className={`text-[10px] font-bold border-none ${statusColors[order.status] ?? "bg-gray-100 text-gray-700"}`}>
                        {order.status}
                      </Badge>
                    </div>
                    <h3 className="text-sm font-bold text-navy-950">{order.service}</h3>
                    <p className="text-xs text-gray-500 mt-0.5">{order.client} · Started {order.date}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-sm font-bold text-navy-950">{order.value}</p>
                    <Link href={`/dashboard/service-orders/${order.id}`} className="mt-1 text-xs text-dq-orange hover:underline">
                      View details
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
