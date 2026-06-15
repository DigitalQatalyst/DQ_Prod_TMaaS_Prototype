"use client";

import { use } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import DashboardLayout from "@/components/foundation/layouts/DashboardLayout";
import OrderStepper from "@/components/features/dashboard/OrderStepper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ServiceOrderDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center gap-3">
          <Link href="/dashboard/service-orders">
            <Button variant="ghost" size="sm" className="gap-2 text-gray-600">
              <ArrowLeft size={16} />
              Back to Orders
            </Button>
          </Link>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-1">
            <span className="text-xs font-mono font-bold text-gray-400">{id}</span>
            <Badge className="text-[10px] font-bold border-none bg-green-100 text-green-700">Active</Badge>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-navy-950">Service Order Detail</h1>
          <p className="mt-1 text-sm text-gray-500">Digital Experience Strategy · STC Bank</p>
        </div>

        <Card className="rounded-2xl border-navy-100 shadow-sm">
          <CardHeader>
            <CardTitle className="text-sm font-bold text-navy-950">Order Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <OrderStepper currentStage="Input in Review" />
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
