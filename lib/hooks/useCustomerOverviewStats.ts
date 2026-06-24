"use client";

import { useMemo } from "react";
import { DEMO_CUSTOMER_USER_ID, mockCustomerRequests } from "@/data/mockCustomerRequests";
import type { CustomerRequest } from "@/lib/types/requests";

export interface OverviewStat {
  value: number;
  hint: string;
}

export interface CustomerOverviewStats {
  submitted: OverviewStat;
  inProgress: OverviewStat;
  closed: OverviewStat;
}

/** All-time closed count includes historical completions beyond the active mock list. */
const CLOSED_ALL_TIME = 12;

function buildStats(requests: CustomerRequest[]): CustomerOverviewStats {
  return {
    submitted: { value: requests.length, hint: "All time" },
    inProgress: {
      value: requests.filter((r) => r.status === "in_progress").length,
      hint: "Currently in delivery",
    },
    closed: { value: CLOSED_ALL_TIME, hint: "Successfully completed" },
  };
}

export function useCustomerOverviewStats(userId: string = DEMO_CUSTOMER_USER_ID): CustomerOverviewStats {
  return useMemo(() => {
    const owned = mockCustomerRequests.filter((r) => r.userId === userId);
    return buildStats(owned);
  }, [userId]);
}
