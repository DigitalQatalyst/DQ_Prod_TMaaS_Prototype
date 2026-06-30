"use client";

import { useCallback, useEffect, useState } from "react";
import type { DqStaffUser } from "@/lib/types/dqStaff";

export function useDqStaffUsers() {
  const [users, setUsers] = useState<DqStaffUser[]>([]);
  const [source, setSource] = useState<"graph" | "fallback" | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/dq/users", { credentials: "same-origin" });
      if (!res.ok) {
        throw new Error("Could not load DigitalQatalyst users.");
      }
      const data = (await res.json()) as {
        users?: DqStaffUser[];
        source?: "graph" | "fallback";
      };
      setUsers(data.users ?? []);
      setSource(data.source ?? null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setUsers([]);
      setSource(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  return { users, source, isLoading, error, refresh: load };
}
