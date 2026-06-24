// Shared request UI types — mirrors solution/adapters/requests.ts list/detail shapes.

export type SlaStatus = "on_track" | "at_risk" | "breached" | "none";
export type HealthStatus = "healthy" | "attention" | "blocked" | "critical";
export type RequestContext = "requester" | "operational";

export interface RequestListRow {
  id: string;
  reference_no: string;
  service_name: string;
  title: string;
  status: string;
  priority: string;
  department_name: string | null;
  department_id: string | null;
  target_due: string | null;
  created_at: string;
  updated_at: string;
  requestor_name: string | null;
  assignee_name: string | null;
}

export interface EnrichedRequestRow extends RequestListRow {
  sla_status: SlaStatus;
  health: HealthStatus;
  next_action: string;
}

export interface TimelineEntry {
  kind: string;
  body: string | null;
  from_status: string | null;
  to_status: string | null;
  created_at: string;
  actor: string | null;
  metadata: Record<string, unknown> | null;
}

export interface RequestDetailData extends RequestListRow {
  summary: string | null;
  form: Record<string, unknown>;
  timeline: TimelineEntry[];
  requestor_id: string;
  assignee_id: string | null;
  queue_name: string | null;
  version: number;
}

export type ColumnFilterType = "text" | "status" | "date";

export interface TextColumnFilter {
  type: "text";
  values: string[];
}

export interface StatusColumnFilter {
  type: "status";
  values: string[];
}

export interface DateColumnFilter {
  type: "date";
  mode: "before" | "after" | "between" | "exact";
  from?: string;
  to?: string;
  exact?: string;
}

export type ColumnFilter = TextColumnFilter | StatusColumnFilter | DateColumnFilter;

export type ColumnFilters = Record<string, ColumnFilter>;

export interface SortState {
  field: string;
  direction: "asc" | "desc";
}

export interface ListViewState {
  activeTab: string;
  search: string;
  columnFilters: ColumnFilters;
  sort: SortState | null;
  page: number;
  pageSize: number;
  visibleRefs: string[];
}

export type ColumnKey =
  | "reference_no"
  | "title"
  | "service_name"
  | "department_name"
  | "requestor_name"
  | "status"
  | "sla_status"
  | "health"
  | "priority"
  | "assignee_name"
  | "created_at"
  | "target_due"
  | "updated_at"
  | "next_action";

export interface ColumnDef {
  key: ColumnKey;
  label: string;
  filterType?: ColumnFilterType;
  sortable?: boolean;
  /** Render as plain text instead of a coloured badge or accent link. */
  plain?: boolean;
}

export interface TabDef {
  key: string;
  label: string;
  predicate?: (row: EnrichedRequestRow) => boolean;
  sortBy?: { field: keyof EnrichedRequestRow; direction: "asc" | "desc" };
}

export interface ListPageConfig {
  context: RequestContext;
  storageKey: string;
  apiScope?: "queue";
  overline: string;
  title: string;
  description: string;
  ctaHref?: string;
  ctaLabel?: string;
  detailBasePath: string;
  listHref: string;
  breadcrumb: { label: string; href?: string }[];
  tabs: TabDef[];
  columns: ColumnDef[];
  /** Hide the trailing Open request action column (row click still opens detail). */
  hideActionColumn?: boolean;
  /** When false, table rows are not clickable. */
  navigateOnRowClick?: boolean;
}

export interface DetailConfig {
  context: RequestContext;
  storageKey: string;
  apiScope?: "queue";
  listHref: string;
  detailBasePath: string;
  breadcrumb: { label: string; href?: string }[];
  sidebarHeading: string;
  showNewRequest?: boolean;
  newRequestHref?: string;
}

export const LIFECYCLE_STAGES = [
  { key: "open", label: "Open", statuses: ["submitted"] },
  { key: "in_progress", label: "In Progress", statuses: ["in_fulfilment", "returned_for_information"] },
  { key: "review", label: "Review", statuses: ["in_review"] },
  { key: "done", label: "Done", statuses: ["closed", "cancelled"] },
] as const;
