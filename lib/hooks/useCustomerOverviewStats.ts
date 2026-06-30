"use client";

import { useMemo } from "react";
import type { CustomerRequest } from "@/lib/types/requests";
import {
  buildCustomerOverviewStats,
  type CustomerOverviewStats,
} from "@/lib/requests/customerOverview";

export type { CustomerOverviewStats, OverviewStat } from "@/lib/requests/customerOverview";

export function useCustomerOverviewStats(
  requests: CustomerRequest[]
): CustomerOverviewStats {
  return useMemo(() => buildCustomerOverviewStats(requests), [requests]);
}
