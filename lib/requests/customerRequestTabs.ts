import type { CustomerRequest } from "@/lib/types/requests";

export type CustomerRequestTabKey =
  | "my_requests"
  | "under_review"
  | "in_progress"
  | "recently_updated"
  | "closed";

export interface CustomerRequestTab {
  key: CustomerRequestTabKey;
  label: string;
  predicate?: (request: CustomerRequest) => boolean;
  sortBy?: { field: "updatedAt" | "submittedAt"; direction: "asc" | "desc" };
}

/** DWS.01 requester list tabs — adapted to TMaaS customer request statuses. */
export const CUSTOMER_REQUEST_TABS: CustomerRequestTab[] = [
  { key: "my_requests", label: "My Requests" },
  {
    key: "under_review",
    label: "Under Review",
    predicate: (r) => r.status === "under_review",
  },
  {
    key: "in_progress",
    label: "In Progress",
    predicate: (r) => r.status === "in_progress",
  },
  {
    key: "recently_updated",
    label: "Recently Updated",
    sortBy: { field: "updatedAt", direction: "desc" },
  },
  {
    key: "closed",
    label: "Closed / Completed",
    predicate: (r) => r.status === "closed" || r.status === "cancelled",
  },
];
