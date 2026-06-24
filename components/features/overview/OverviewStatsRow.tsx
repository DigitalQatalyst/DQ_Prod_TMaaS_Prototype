import { Calendar, CheckCircle2, FileText, Search } from "lucide-react";
import type { CustomerOverviewStats } from "@/lib/hooks/useCustomerOverviewStats";

interface OverviewStatsRowProps {
  stats: CustomerOverviewStats;
}

const STAT_CARDS = [
  {
    key: "submitted" as const,
    label: "Requests Submitted",
    icon: FileText,
    iconClass: "bg-purple-100 text-purple-600",
  },
  {
    key: "underReview" as const,
    label: "Under Review",
    icon: Search,
    iconClass: "bg-orange-100 text-orange-600",
  },
  {
    key: "inProgress" as const,
    label: "In Progress",
    icon: Calendar,
    iconClass: "bg-blue-100 text-blue-600",
  },
  {
    key: "closed" as const,
    label: "Closed Requests",
    icon: CheckCircle2,
    iconClass: "bg-green-100 text-green-600",
  },
];

export function OverviewStatsRow({ stats }: OverviewStatsRowProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {STAT_CARDS.map(({ key, label, icon: Icon, iconClass }) => {
        const stat = stats[key];
        return (
          <div
            key={key}
            className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-white p-5 shadow-sm"
          >
            <div className="flex items-start gap-3">
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${iconClass}`}
              >
                <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-medium text-[var(--color-text-muted)]">{label}</p>
                <p className="mt-1 text-2xl font-semibold tabular-nums text-[var(--color-text-primary)]">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-[11px] text-[var(--color-text-muted)]">{stat.hint}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
