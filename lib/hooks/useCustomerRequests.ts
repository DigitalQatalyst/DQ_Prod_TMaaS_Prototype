"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { DEMO_CUSTOMER_USER_ID, mockCustomerRequests } from "@/data/mockCustomerRequests";
import type { CustomerRequestTabKey } from "@/lib/requests/customerRequestTabs";
import {
  filterCustomerRequestsByTab,
  getCustomerRequestTabCounts,
  matchesCustomerRequestSearch,
} from "@/lib/requests/customerRequestFilters";
import type { CustomerRequest, ServiceType } from "@/lib/types/requests";
import { REQUEST_STATUS_LABELS, SERVICE_TYPE_LABELS } from "@/lib/types/requests";

export type SortField =
  | "submittedAt"
  | "title"
  | "referenceNo"
  | "serviceType"
  | "status";
export type SortDirection = "asc" | "desc";

export interface UseCustomerRequestsOptions {
  userId?: string;
  pageSize?: number;
  /** Use in-memory mock data (tests / storybook). */
  useMockData?: boolean;
}

export interface UseCustomerRequestsResult {
  requests: CustomerRequest[];
  allRequests: CustomerRequest[];
  totalCount: number;
  page: number;
  pageSize: number;
  totalPages: number;
  search: string;
  setSearchQuery: (value: string) => void;
  sortField: SortField;
  sortDirection: SortDirection;
  toggleSort: (field: SortField) => void;
  setPage: (page: number) => void;
  activeTab: CustomerRequestTabKey;
  setActiveTab: (tab: CustomerRequestTabKey) => void;
  tabCounts: Partial<Record<CustomerRequestTabKey, number>>;
  isLoading: boolean;
  refresh: () => void;
}

function sortRequests(
  requests: CustomerRequest[],
  field: SortField,
  direction: SortDirection
): CustomerRequest[] {
  const sorted = [...requests].sort((a, b) => {
    let cmp = 0;
    if (field === "submittedAt") {
      cmp = new Date(a.submittedAt).getTime() - new Date(b.submittedAt).getTime();
    } else if (field === "title") {
      cmp = a.title.localeCompare(b.title);
    } else if (field === "serviceType") {
      cmp = SERVICE_TYPE_LABELS[a.serviceType].localeCompare(SERVICE_TYPE_LABELS[b.serviceType]);
    } else if (field === "status") {
      cmp = REQUEST_STATUS_LABELS[a.status].localeCompare(REQUEST_STATUS_LABELS[b.status]);
    } else {
      cmp = a.referenceNo.localeCompare(b.referenceNo);
    }
    return direction === "asc" ? cmp : -cmp;
  });
  return sorted;
}

async function fetchCustomerRequests(): Promise<CustomerRequest[]> {
  const res = await fetch("/api/customer/requests", { credentials: "same-origin" });
  if (!res.ok) return [];
  const data = (await res.json()) as { requests?: CustomerRequest[] };
  return data.requests ?? [];
}

export function useCustomerRequests(
  options: UseCustomerRequestsOptions = {}
): UseCustomerRequestsResult {
  const userId = options.userId ?? DEMO_CUSTOMER_USER_ID;
  const pageSize = options.pageSize ?? 8;
  const useMockData = options.useMockData ?? false;

  const [search, setSearchState] = useState("");
  const [page, setPageState] = useState(1);
  const [activeTab, setActiveTabState] = useState<CustomerRequestTabKey>("all");
  const [sortField, setSortField] = useState<SortField>("submittedAt");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");
  const [liveRequests, setLiveRequests] = useState<CustomerRequest[]>([]);
  const [isLoading, setIsLoading] = useState(!useMockData);
  const [refreshKey, setRefreshKey] = useState(0);

  const refresh = useCallback(() => {
    setRefreshKey((value) => value + 1);
  }, []);

  useEffect(() => {
    if (useMockData) return;

    let cancelled = false;
    setIsLoading(true);

    fetchCustomerRequests()
      .then((requests) => {
        if (!cancelled) setLiveRequests(requests);
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [useMockData, refreshKey]);

  const owned = useMemo(() => {
    if (useMockData) {
      return mockCustomerRequests.filter((r) => r.userId === userId);
    }
    return liveRequests;
  }, [useMockData, userId, liveRequests]);

  const tabCounts = useMemo(() => getCustomerRequestTabCounts(owned), [owned]);

  const filtered = useMemo(() => {
    const tabbed = filterCustomerRequestsByTab(owned, activeTab);
    const searched = tabbed.filter((r) => matchesCustomerRequestSearch(r, search));
    return sortRequests(searched, sortField, sortDirection);
  }, [owned, activeTab, search, sortField, sortDirection]);

  const totalCount = filtered.length;
  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));
  const safePage = Math.min(page, totalPages);

  useEffect(() => {
    if (page > totalPages) {
      setPageState(totalPages);
    }
  }, [page, totalPages]);

  const paged = useMemo(() => {
    const start = (safePage - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, safePage, pageSize]);

  const setSearchQuery = useCallback((value: string) => {
    setSearchState(value);
    setPageState(1);
  }, []);

  const setActiveTab = useCallback((tab: CustomerRequestTabKey) => {
    setActiveTabState(tab);
    setPageState(1);
  }, []);

  const setPage = useCallback((nextPage: number) => {
    setPageState(nextPage);
  }, []);

  const toggleSort = useCallback(
    (field: SortField) => {
      if (sortField === field) {
        setSortDirection((direction) => (direction === "asc" ? "desc" : "asc"));
      } else {
        setSortField(field);
        setSortDirection(field === "submittedAt" ? "desc" : "asc");
      }
      setPageState(1);
    },
    [sortField]
  );

  return {
    requests: paged,
    allRequests: owned,
    totalCount,
    page: safePage,
    pageSize,
    totalPages,
    search,
    setSearchQuery,
    sortField,
    sortDirection,
    toggleSort,
    setPage,
    activeTab,
    setActiveTab,
    tabCounts,
    isLoading,
    refresh,
  };
}

export function getRequestById(
  id: string,
  requests: CustomerRequest[] = mockCustomerRequests
): CustomerRequest | undefined {
  return requests.find((r) => r.id === id);
}

export function getServiceTypeLabel(type: ServiceType): string {
  return SERVICE_TYPE_LABELS[type];
}
