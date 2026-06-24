import Link from "next/link";
import { ChevronRight, Mail, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function QuickActionsPanel() {
  return (
    <div className="space-y-4">
      <h2 className="text-sm font-semibold text-navy-950">Quick Actions</h2>
      <Card className="rounded-xl border-navy-100/60 shadow-sm transition-shadow hover:shadow-md">
        <Link href="/marketplace">
          <CardContent className="flex items-start gap-3 p-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
              <Search size={18} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-navy-950">Browse Services</p>
              <p className="mt-0.5 text-xs text-navy-950/50">
                Explore Design, Deploy, Assess, AI Design and AI Deploy services
              </p>
            </div>
            <ChevronRight size={16} className="mt-1 shrink-0 text-navy-950/30" />
          </CardContent>
        </Link>
      </Card>
      <Card className="rounded-xl border-navy-100/60 shadow-sm transition-shadow hover:shadow-md">
        <Link href="/contact">
          <CardContent className="flex items-start gap-3 p-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
              <Mail size={18} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-navy-950">Contact DQ Team</p>
              <p className="mt-0.5 text-xs text-navy-950/50">
                Get assistance from the TMaaS team
              </p>
            </div>
            <ChevronRight size={16} className="mt-1 shrink-0 text-navy-950/30" />
          </CardContent>
        </Link>
      </Card>
    </div>
  );
}
