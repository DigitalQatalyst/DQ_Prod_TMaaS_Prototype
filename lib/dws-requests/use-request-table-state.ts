"use client";
import * as React from "react";
import { enrichRows } from "./derivations";
import type {
  ColumnFilter,
  ColumnFilters,
  EnrichedRequestRow,
  ListPageConfig,
  RequestListRow,
  SortState,
} from "./types";
import { loadViewState, saveViewState } from "./view-state";

function getCellValue(row: EnrichedRequestRow, field: string): string {
  const v = row[field as keyof EnrichedRequestRow];
  if (v === null || v === undefined) return "";
  return String(v);
}

function matchesSearch(row: EnrichedRequestRow, q: string): boolean {
  const hay = [
    row.reference_no,
    row.title,
    row.service_name,
    row.department_name,
    row.requestor_name,
    row.assignee_name,
    row.status,
    row.next_action,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
  return hay.includes(q);
}

function matchesTextFilter(value: string, filter: ColumnFilter): boolean {
  if (filter.type !== "text") return true;
  if (filter.values.length === 0) return true;
  return filter.values.includes(value || "—");
}

function matchesStatusFilter(value: string, filter: ColumnFilter): boolean {
  if (filter.type !== "status") return true;
  if (filter.values.length === 0) return true;
  return filter.values.includes(value);
}

function matchesDateFilter(value: string | null, filter: ColumnFilter): boolean {
  if (filter.type !== "date") return true;
  if (!value) return false;
  const d = new Date(value).getTime();
  if (Number.isNaN(d)) return false;
  const { mode, from, to, exact } = filter;
  if (mode === "exact" && exact) {
    const e = new Date(exact);
    return d >= e.setHours(0, 0, 0, 0) && d <= e.setHours(23, 59, 59, 999);
  }
  if (mode === "before" && from) return d < new Date(from).getTime();
  if (mode === "after" && from) return d > new Date(from).setHours(23, 59, 59, 999);
  if (mode === "between" && from && to) {
    return d >= new Date(from).getTime() && d <= new Date(to).setHours(23, 59, 59, 999);
  }
  return true;
}

function matchesColumnFilters(row: EnrichedRequestRow, filters: ColumnFilters): boolean {
  for (const [field, filter] of Object.entries(filters) as [string, ColumnFilter][]) {
    const raw = getCellValue(row, field);
    if (filter.type === "text" && !matchesTextFilter(raw || "—", filter)) return false;
    if (filter.type === "status" && !matchesStatusFilter(raw, filter)) return false;
    if (filter.type === "date") {
      const dateVal = row[field as keyof EnrichedRequestRow] as string | null;
      if (!matchesDateFilter(dateVal, filter)) return false;
    }
  }
  return true;
}

function compareRows(a: EnrichedRequestRow, b: EnrichedRequestRow, sort: SortState): number {
  const av = getCellValue(a, sort.field);
  const bv = getCellValue(b, sort.field);
  const aDate = sort.field.includes("_at") || sort.field === "target_due";
  let cmp = 0;
  if (aDate) {
    cmp = new Date(av || 0).getTime() - new Date(bv || 0).getTime();
  } else {
    cmp = av.localeCompare(bv, undefined, { sensitivity: "base" });
  }
  return sort.direction === "asc" ? cmp : -cmp;
}

export interface UseRequestTableStateResult {
  rows: EnrichedRequestRow[] | null;
  error: "forbidden" | "failed" | null;
  loading: boolean;
  reload: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  search: string;
  setSearch: (s: string) => void;
  columnFilters: ColumnFilters;
  setColumnFilter: (field: string, filter: ColumnFilter | null) => void;
  clearAllFilters: () => void;
  hasActiveFilters: boolean;
  sort: SortState | null;
  setSort: (sort: SortState | null) => void;
  page: number;
  setPage: (p: number) => void;
  pageSize: number;
  setPageSize: (s: number) => void;
  filtered: EnrichedRequestRow[];
  paged: EnrichedRequestRow[];
  totalFiltered: number;
  tabCounts: Record<string, number>;
}

export function useRequestTableState(config: ListPageConfig): UseRequestTableStateResult {
  const defaultTab = config.tabs[0]?.key ?? "all";
  const [rows, setRows] = React.useState<EnrichedRequestRow[] | null>(null);
  const [error, setError] = React.useState<"forbidden" | "failed" | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [hydrated, setHydrated] = React.useState(false);

  const [activeTab, setActiveTabState] = React.useState(defaultTab);
  const [search, setSearchState] = React.useState("");
  const [columnFilters, setColumnFilters] = React.useState<ColumnFilters>({});
  const [sort, setSortState] = React.useState<SortState | null>(null);
  const [page, setPageState] = React.useState(1);
  const [pageSize, setPageSizeState] = React.useState(10);

  React.useEffect(() => {
    const saved = loadViewState(config.storageKey, defaultTab);
    setActiveTabState(saved.activeTab);
    setSearchState(saved.search);
    setColumnFilters(saved.columnFilters);
    setSortState(saved.sort);
    setPageState(saved.page);
    setPageSizeState(saved.pageSize);
    setHydrated(true);
  }, [config.storageKey, defaultTab]);

  const persist = React.useCallback(
    (patch: Partial<{
      activeTab: string;
      search: string;
      columnFilters: ColumnFilters;
      sort: SortState | null;
      page: number;
      pageSize: number;
      visibleRefs: string[];
    }>) => {
      const current = loadViewState(config.storageKey, defaultTab);
      saveViewState(config.storageKey, {
        ...current,
        activeTab,
        search,
        columnFilters,
        sort,
        page,
        pageSize,
        ...patch,
      });
    },
    [config.storageKey, defaultTab, activeTab, search, columnFilters, sort, page, pageSize],
  );

  const load = React.useCallback(() => {
    setLoading(true);
    setError(null);
    const url = config.apiScope === "queue" ? "/api/requests?scope=queue" : "/api/requests";
    fetch(url, { credentials: "same-origin" })
      .then((r) => {
        if (r.status === 403) {
          setError("forbidden");
          throw new Error("forbidden");
        }
        if (!r.ok) throw new Error("failed");
        return r.json() as Promise<{ rows: RequestListRow[] }>;
      })
      .then((d) => setRows(enrichRows(d.rows)))
      .catch((e: Error) => {
        if (e.message !== "forbidden") setError("failed");
      })
      .finally(() => setLoading(false));
  }, [config.apiScope]);

  React.useEffect(() => {
    load();
  }, [load]);

  const setActiveTab = React.useCallback(
    (tab: string) => {
      setActiveTabState(tab);
      setPageState(1);
      persist({ activeTab: tab, page: 1 });
    },
    [persist],
  );

  const setSearch = React.useCallback(
    (s: string) => {
      setSearchState(s);
      setPageState(1);
      persist({ search: s, page: 1 });
    },
    [persist],
  );

  const setColumnFilter = React.useCallback(
    (field: string, filter: ColumnFilter | null) => {
      setColumnFilters((prev) => {
        const next = { ...prev };
        if (filter) next[field] = filter;
        else delete next[field];
        persist({ columnFilters: next, page: 1 });
        return next;
      });
      setPageState(1);
    },
    [persist],
  );

  const clearAllFilters = React.useCallback(() => {
    setColumnFilters({});
    setSearchState("");
    setSortState(null);
    setPageState(1);
    persist({ columnFilters: {}, search: "", sort: null, page: 1 });
  }, [persist]);

  const setSort = React.useCallback(
    (s: SortState | null) => {
      setSortState(s);
      persist({ sort: s });
    },
    [persist],
  );

  const setPage = React.useCallback(
    (p: number) => {
      setPageState(p);
      persist({ page: p });
    },
    [persist],
  );

  const setPageSize = React.useCallback(
    (s: number) => {
      setPageSizeState(s);
      setPageState(1);
      persist({ pageSize: s, page: 1 });
    },
    [persist],
  );

  const tabDef = config.tabs.find((t) => t.key === activeTab) ?? config.tabs[0];

  const tabFiltered = React.useMemo(() => {
    if (!rows) return [];
    let result = rows;
    if (tabDef?.predicate) {
      result = result.filter(tabDef.predicate);
    }
    if (tabDef?.sortBy) {
      const { field, direction } = tabDef.sortBy;
      result = [...result].sort((a, b) => {
        const av = String(a[field] ?? "");
        const bv = String(b[field] ?? "");
        const cmp = av.localeCompare(bv);
        return direction === "asc" ? cmp : -cmp;
      });
    }
    return result;
  }, [rows, tabDef]);

  const filtered = React.useMemo(() => {
    const q = search.trim().toLowerCase();
    let result = tabFiltered;
    if (q) result = result.filter((r) => matchesSearch(r, q));
    result = result.filter((r) => matchesColumnFilters(r, columnFilters));
    if (sort) result = [...result].sort((a, b) => compareRows(a, b, sort));
    return result;
  }, [tabFiltered, search, columnFilters, sort]);

  React.useEffect(() => {
    if (!hydrated) return;
    persist({ visibleRefs: filtered.map((r) => r.reference_no) });
  }, [filtered, hydrated, persist]);

  const paged = filtered.slice((page - 1) * pageSize, page * pageSize);

  const tabCounts = React.useMemo(() => {
    if (!rows) return {};
    const counts: Record<string, number> = {};
    for (const tab of config.tabs) {
      counts[tab.key] = tab.predicate ? rows.filter(tab.predicate).length : rows.length;
    }
    return counts;
  }, [rows, config.tabs]);

  const hasActiveFilters =
    search.trim().length > 0 ||
    Object.keys(columnFilters).length > 0 ||
    sort !== null;

  return {
    rows,
    error,
    loading,
    reload: load,
    activeTab,
    setActiveTab,
    search,
    setSearch,
    columnFilters,
    setColumnFilter,
    clearAllFilters,
    hasActiveFilters,
    sort,
    setSort,
    page,
    setPage,
    pageSize,
    setPageSize,
    filtered,
    paged,
    totalFiltered: filtered.length,
    tabCounts,
  };
}
