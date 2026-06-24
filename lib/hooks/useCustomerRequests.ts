"use client";

import { useMemo, useState } from "react";
import { DEMO_CUSTOMER_USER_ID, mockCustomerRequests } from "@/data/mockCustomerRequests";
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

export function useCustomerRequests(
  options: UseCustomerRequestsOptions = {}
): UseCustomerRequestsResult {
  const userId = options.userId ?? DEMO_CUSTOMER_USER_ID;
  const pageSize = options.pageSize ?? 8;

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [sortField, setSortField] = useState<SortField>("submittedAt");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");

  const filtered = useMemo(() => {
    const owned = mockCustomerRequests.filter((r) => r.userId === userId);
    const searched = owned.filter((r) => matchesSearch(r, search));
    return sortRequests(searched, sortField, sortDirection);
  }, [userId, search, sortField, sortDirection]);

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
  };
}

export function getRequestById(id: string): CustomerRequest | undefined {
  return mockCustomerRequests.find((r) => r.id === id);
}

export function getServiceTypeLabel(type: ServiceType): string {
  return SERVICE_TYPE_LABELS[type];
}
