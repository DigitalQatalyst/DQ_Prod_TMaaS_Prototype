"use client";

import { useCallback, useEffect, useState } from "react";
import type { DqServiceRequestListItem } from "@/lib/requests/serviceRequestRepository";

export function useDqRequests() {
  const [requests, setRequests] = useState<DqServiceRequestListItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/dq/requests", { credentials: "same-origin" });
      if (!res.ok) {
        if (res.status === 403) {
          throw new Error("You do not have access to the DQ request queue.");
        }
        throw new Error("Could not load requests.");
      }
      const data = (await res.json()) as { requests?: DqServiceRequestListItem[] };
      setRequests(data.requests ?? []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setRequests([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const updateRequestInList = useCallback((updated: DqServiceRequestListItem) => {
    setRequests((prev) => prev.map((request) => (request.id === updated.id ? updated : request)));
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  return { requests, isLoading, error, refresh: load, updateRequestInList };
}
