import type { RequestStatus } from "@/lib/types/requests";

/** Tab keys mirror `RequestStatus` plus an unfiltered `all` tab. */
export type CustomerRequestTabKey = "all" | RequestStatus;

const STATUS_TAB_ORDER: RequestStatus[] = [
  "submitted",
  "under_review",
  "in_progress",
  "closed",
  "cancelled",
];

const TAB_KEYS = new Set<string>(["all", ...STATUS_TAB_ORDER]);

export function isCustomerRequestTabKey(value: string | null | undefined): value is CustomerRequestTabKey {
  return typeof value === "string" && TAB_KEYS.has(value);
}

export const DEFAULT_CUSTOMER_REQUEST_TAB: CustomerRequestTabKey = "all";
