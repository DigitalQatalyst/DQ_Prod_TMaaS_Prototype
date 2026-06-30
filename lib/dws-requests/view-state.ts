import type { ColumnFilters, ListViewState, SortState } from "./types";

const DEFAULT_PAGE_SIZE = 10;

export function defaultViewState(defaultTab: string): ListViewState {
  return {
    activeTab: defaultTab,
    search: "",
    columnFilters: {},
    sort: null,
    page: 1,
    pageSize: DEFAULT_PAGE_SIZE,
    visibleRefs: [],
  };
}

export function loadViewState(key: string, defaultTab: string): ListViewState {
  if (typeof window === "undefined") return defaultViewState(defaultTab);
  try {
    const raw = sessionStorage.getItem(key);
    if (!raw) return defaultViewState(defaultTab);
    const parsed = JSON.parse(raw) as Partial<ListViewState>;
    return {
      ...defaultViewState(defaultTab),
      ...parsed,
      columnFilters: (parsed.columnFilters ?? {}) as ColumnFilters,
      sort: (parsed.sort ?? null) as SortState | null,
    };
  } catch {
    return defaultViewState(defaultTab);
  }
}

export function saveViewState(key: string, state: ListViewState): void {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(key, JSON.stringify(state));
  } catch {
    // ignore quota errors
  }
}

export function saveVisibleRefs(key: string, refs: string[]): void {
  if (typeof window === "undefined") return;
  try {
    const current = loadViewState(key, "");
    saveViewState(key, { ...current, visibleRefs: refs });
  } catch {
    // ignore
  }
}

export function getVisibleRefs(key: string): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = sessionStorage.getItem(key);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as ListViewState;
    return parsed.visibleRefs ?? [];
  } catch {
    return [];
  }
}
