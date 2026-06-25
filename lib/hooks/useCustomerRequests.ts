"use client";

import { useMemo, useState } from "react";
import { DEMO_CUSTOMER_USER_ID, mockCustomerRequests } from "@/data/mockCustomerRequests";
import {
  CUSTOMER_REQUEST_TABS,
  type CustomerRequestTabKey,
} from "@/lib/requests/customerRequestTabs";
import type { CustomerRequest, ServiceType } from "@/lib/types/requests";
import { SERVICE_TYPE_LABELS } from "@/lib/types/requests";

export type SortField = "submittedAt" | "title" | "referenceNo";
export type SortDirection = "asc" | "desc";

export interface UseCustomerRequestsOptions {
  userId?: string;
  pageSize?: number;
}

export interface UseCustomerRequestsResult {
  requests: CustomerRequest[];
  totalCount: number;
  page: number;
  pageSize: number;
  totalPages: number;
  search: string;
  setSearch: (value: string) => void;
  sortField: SortField;
  sortDirection: SortDirection;
  toggleSort: (field: SortField) => void;
  setPage: (page: number) => void;
  activeTab: CustomerRequestTabKey;
  setActiveTab: (tab: CustomerRequestTabKey) => void;
  tabCounts: Partial<Record<CustomerRequestTabKey, number>>;
}

function matchesSearch(request: CustomerRequest, query: string): boolean {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  const serviceLabel = SERVICE_TYPE_LABELS[request.serviceType].toLowerCase();
  return (
    request.title.toLowerCase().includes(q) ||
    request.referenceNo.toLowerCase().includes(q) ||
    serviceLabel.includes(q) ||
    request.serviceType.toLowerCase().includes(q)
  );
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
    } else {
      cmp = a.referenceNo.localeCompare(b.referenceNo);
    }
    return direction === "asc" ? cmp : -cmp;
  });
  return sorted;
}

function applyTabFilter(
  requests: CustomerRequest[],
  tabKey: CustomerRequestTabKey
): CustomerRequest[] {
  const tabDef = CUSTOMER_REQUEST_TABS.find((t) => t.key === tabKey) ?? CUSTOMER_REQUEST_TABS[0]!;
  let result = requests;
  if (tabDef.predicate) {
    result = result.filter(tabDef.predicate);
  }
  if (tabDef.sortBy) {
    const { field, direction } = tabDef.sortBy;
    result = [...result].sort((a, b) => {
      const cmp = new Date(a[field]).getTime() - new Date(b[field]).getTime();
      return direction === "asc" ? cmp : -cmp;
    });
  }
  return result;
}

export function useCustomerRequests(
  options: UseCustomerRequestsOptions = {}
): UseCustomerRequestsResult {
  const userId = options.userId ?? DEMO_CUSTOMER_USER_ID;
  const pageSize = options.pageSize ?? 8;

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [activeTab, setActiveTabState] = useState<CustomerRequestTabKey>("my_requests");
  const [sortField, setSortField] = useState<SortField>("submittedAt");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");

  const owned = useMemo(
    () => mockCustomerRequests.filter((r) => r.userId === userId),
    [userId]
  );

  const tabCounts = useMemo(() => {
    const counts: Partial<Record<CustomerRequestTabKey, number>> = {};
    for (const tab of CUSTOMER_REQUEST_TABS) {
      counts[tab.key] = tab.predicate
        ? owned.filter(tab.predicate).length
        : owned.length;
    }
    return counts;
  }, [owned]);

  const filtered = useMemo(() => {
    const tabbed = applyTabFilter(owned, activeTab);
    const searched = tabbed.filter((r) => matchesSearch(r, search));
    return sortRequests(searched, sortField, sortDirection);
  }, [owned, activeTab, search, sortField, sortDirection]);

  const totalCount = filtered.length;
  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));
  const safePage = Math.min(page, totalPages);

  const paged = useMemo(() => {
    const start = (safePage - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, safePage, pageSize]);

  const toggleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortField(field);
      setSortDirection(field === "submittedAt" ? "desc" : "asc");
    }
    setPage(1);
  };

  const setActiveTab = (tab: CustomerRequestTabKey) => {
    setActiveTabState(tab);
    setPage(1);
  };

  return {
    requests: paged,
    totalCount,
    page: safePage,
    pageSize,
    totalPages,
    search,
    setSearch: (value: string) => {
      setSearch(value);
      setPage(1);
    },
    sortField,
    sortDirection,
    toggleSort,
    setPage,
    activeTab,
    setActiveTab,
    tabCounts,
  };
}

export function getRequestById(id: string): CustomerRequest | undefined {
  return mockCustomerRequests.find((r) => r.id === id);
}

export function getServiceTypeLabel(type: ServiceType): string {
  return SERVICE_TYPE_LABELS[type];
}
