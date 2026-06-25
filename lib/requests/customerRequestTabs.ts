import type { CustomerRequest } from "@/lib/types/requests";
import { REQUEST_STATUS_LABELS } from "@/lib/types/requests";
import {
  DEFAULT_CUSTOMER_REQUEST_TAB,
  type CustomerRequestTabKey,
} from "@/lib/requests/customerRequestTabKeys";

export type { CustomerRequestTabKey } from "@/lib/requests/customerRequestTabKeys";

export interface CustomerRequestTab {
  key: CustomerRequestTabKey;
  label: string;
  predicate?: (request: CustomerRequest) => boolean;
}

/** Status filter pills — labels match the Status column in the requests table. */
export const CUSTOMER_REQUEST_TABS: CustomerRequestTab[] = [
  { key: "all", label: "All" },
  ...(
    [
      "submitted",
      "under_review",
      "in_progress",
      "closed",
      "cancelled",
    ] as const
  ).map((status) => ({
    key: status,
    label: REQUEST_STATUS_LABELS[status],
    predicate: (request: CustomerRequest) => request.status === status,
  })),
];

export { DEFAULT_CUSTOMER_REQUEST_TAB };
