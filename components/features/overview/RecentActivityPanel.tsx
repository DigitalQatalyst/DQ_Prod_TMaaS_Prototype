import {
  Activity,
  FileText,
  MessageSquare,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import type { RequestTimelineEntry } from "@/lib/types/requests";
import type { CustomerActivityItem } from "@/lib/requests/activity";
import { formatActivityWhen } from "@/lib/requests/activity";
import { RailSection } from "@/components/foundation/workspace-ui/detail-rail";
import { cn } from "@/lib/utils";

interface RecentActivityPanelProps {
  items: CustomerActivityItem[];
  className?: string;
  isLoading?: boolean;
}

function activityVisual(kind: RequestTimelineEntry["kind"]): {
  icon: LucideIcon;
  iconClass: string;
} {
  switch (kind) {
    case "created":
      return { icon: FileText, iconClass: "bg-purple-100 text-purple-600" };
    case "status_change":
      return { icon: Activity, iconClass: "bg-orange-100 text-orange-600" };
    case "assignment":
      return { icon: UserRound, iconClass: "bg-blue-100 text-blue-600" };
    case "note":
      return { icon: MessageSquare, iconClass: "bg-teal-100 text-teal-600" };
  }
}

/** Overview rail — latest activity across all customer requests. */
export function RecentActivityPanel({
  items,
  className,
  isLoading = false,
}: RecentActivityPanelProps) {
  return (
    <RailSection title="Recent activity" className={cn(className)}>
      {isLoading ? (
        <ul className="divide-y divide-gray-100" aria-busy="true" aria-label="Loading activity">
          {Array.from({ length: 3 }, (_, index) => (
            <li key={index} className="flex gap-3 py-3 first:pt-0 last:pb-0" aria-hidden="true">
              <div className="h-8 w-8 shrink-0 animate-pulse rounded-lg bg-[var(--color-border-subtle)]" />
              <div className="min-w-0 flex-1 space-y-2">
                <div className="h-4 w-full max-w-[200px] animate-pulse rounded bg-[var(--color-border-subtle)]" />
                <div className="h-3 w-full max-w-[160px] animate-pulse rounded bg-[var(--color-border-subtle)]" />
                <div className="h-2.5 w-16 animate-pulse rounded bg-[var(--color-border-subtle)]" />
              </div>
            </li>
          ))}
        </ul>
      ) : items.length === 0 ? (
        <p className="text-sm text-[var(--color-text-muted)]">No activity yet.</p>
      ) : (
        <ul className="divide-y divide-gray-100">
          {items.map((item) => {
            const { icon: Icon, iconClass } = activityVisual(item.entry.kind);
            return (
              <li key={item.id} className="flex gap-3 py-3 first:pt-0 last:pb-0">
                <div
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg",
                    iconClass
                  )}
                >
                  <Icon size={15} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="line-clamp-2 text-sm font-medium leading-snug text-[var(--color-text-primary)]">
                    {item.entry.title}
                  </p>
                  <p className="mt-0.5 line-clamp-1 text-xs text-[var(--color-text-muted)]">
                    {item.requestTitle}
                  </p>
                  <p className="mt-1 text-[10px] font-medium uppercase tracking-wide text-[var(--color-text-disabled)]">
                    {formatActivityWhen(item.entry.createdAt)}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </RailSection>
  );
}
