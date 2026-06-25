"use client";

import { useMemo } from "react";
import { DEMO_CUSTOMER_USER_ID, mockCustomerRequests } from "@/data/mockCustomerRequests";
import type { CustomerActivityItem } from "@/lib/requests/activity";

export function useCustomerRecentActivity(
  userId: string = DEMO_CUSTOMER_USER_ID,
  limit = 5
): CustomerActivityItem[] {
  return useMemo(() => {
    const items: CustomerActivityItem[] = [];

    for (const request of mockCustomerRequests) {
      if (request.userId !== userId) continue;
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
  }, [userId, limit]);
}
