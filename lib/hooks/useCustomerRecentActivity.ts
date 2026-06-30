"use client";

import { useMemo } from "react";
import type { CustomerRequest } from "@/lib/types/requests";
import type { CustomerActivityItem } from "@/lib/requests/activity";
import { buildCustomerRecentActivity } from "@/lib/requests/customerOverview";

export function useCustomerRecentActivity(
  requests: CustomerRequest[],
  limit = 5
): CustomerActivityItem[] {
  return useMemo(
    () => buildCustomerRecentActivity(requests, limit),
    [requests, limit]
  );
}
