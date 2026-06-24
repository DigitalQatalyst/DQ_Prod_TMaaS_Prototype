import type { EnrichedRequestRow, HealthStatus, RequestListRow, SlaStatus } from "./types";

const ACTIVE_STATUSES = ["submitted", "in_review", "in_fulfilment", "returned_for_information"];
const CLOSED_STATUSES = ["closed", "cancelled"];

export function deriveSlaStatus(row: RequestListRow): SlaStatus {
  if (CLOSED_STATUSES.includes(row.status)) return "none";
  if (!row.target_due) return "none";
  const due = new Date(row.target_due).getTime();
  const now = Date.now();
  if (due < now) return "breached";
  const hours72 = 72 * 60 * 60 * 1000;
  if (due - now < hours72) return "at_risk";
  return "on_track";
}

export function deriveHealth(row: RequestListRow, sla: SlaStatus): HealthStatus {
  if (sla === "breached") return "critical";
  if (row.status === "returned_for_information") return "blocked";
  if (
    ACTIVE_STATUSES.includes(row.status) &&
    !row.assignee_name &&
    ["in_review", "in_fulfilment"].includes(row.status)
  ) {
    return "attention";
  }
  if (sla === "at_risk") return "attention";
  return "healthy";
}

export function deriveNextAction(row: RequestListRow): string {
  switch (row.status) {
    case "submitted":
      return "Awaiting triage";
    case "in_review":
      return row.assignee_name ? "Under review" : "Awaiting assignment";
    case "in_fulfilment":
      return "In fulfilment";
    case "returned_for_information":
      return "Provide information";
    case "closed":
      return "Closed";
    case "cancelled":
      return "Cancelled";
    default:
      return "—";
  }
}

export function enrichRow(row: RequestListRow): EnrichedRequestRow {
  const sla_status = deriveSlaStatus(row);
  return {
    ...row,
    sla_status,
    health: deriveHealth(row, sla_status),
    next_action: deriveNextAction(row),
  };
}

export function enrichRows(rows: RequestListRow[]): EnrichedRequestRow[] {
  return rows.map(enrichRow);
}

export function isAtRisk(row: EnrichedRequestRow): boolean {
  return (
    row.sla_status === "at_risk" ||
    row.sla_status === "breached" ||
    row.health === "blocked" ||
    row.health === "critical"
  );
}

export function isActive(row: EnrichedRequestRow): boolean {
  return !CLOSED_STATUSES.includes(row.status);
}

export function lifecycleStageIndex(status: string): number {
  if (status === "submitted") return 0;
  if (status === "in_fulfilment" || status === "returned_for_information") return 1;
  if (status === "in_review") return 2;
  if (status === "closed" || status === "cancelled") return 3;
  return 0;
}

export function isTimelineInternal(entry: { kind: string; metadata: Record<string, unknown> | null }): boolean {
  return entry.kind === "note" && entry.metadata?.internal === true;
}
