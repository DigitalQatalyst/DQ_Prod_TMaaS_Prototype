import type { CustomerRequest } from "@/lib/types/requests";
import type { CustomerActivityItem } from "./activity";

export interface OverviewStat {
  value: number;
  hint: string;
}

export interface CustomerOverviewStats {
  submitted: OverviewStat;
  inProgress: OverviewStat;
  closed: OverviewStat;
}

export function buildCustomerOverviewStats(
  requests: CustomerRequest[]
): CustomerOverviewStats {
  return {
    submitted: { value: requests.length, hint: "All time" },
    inProgress: {
      value: requests.filter((r) => r.status === "in_progress").length,
      hint: "Currently in delivery",
    },
    closed: {
      value: requests.filter((r) => r.status === "closed").length,
      hint: "Successfully completed",
    },
  };
}

export function buildCustomerRecentActivity(
  requests: CustomerRequest[],
  limit = 5
): CustomerActivityItem[] {
  const items: CustomerActivityItem[] = [];

  for (const request of requests) {
    for (const entry of request.timeline) {
      items.push({
        id: `${request.id}-${entry.id}`,
        requestId: request.id,
        referenceNo: request.referenceNo,
        requestTitle: request.title,
        entry,
      });
    }
  }

  return items
    .sort(
      (a, b) =>
        new Date(b.entry.createdAt).getTime() - new Date(a.entry.createdAt).getTime()
    )
    .slice(0, limit);
}
