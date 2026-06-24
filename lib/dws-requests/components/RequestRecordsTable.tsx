"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import { ColumnHeader } from "./column-filters/ColumnHeader";
import { TextColumnFilterPopover } from "./column-filters/TextColumnFilter";
import { StatusColumnFilterPopover } from "./column-filters/StatusColumnFilter";
import { DateColumnFilterPopover } from "./column-filters/DateColumnFilter";
import {
  HealthIndicator,
  PriorityIndicator,
  RequestStatusBadge,
  SlaIndicator,
} from "./indicators";
import { shortDate } from "../format";
import type {
  ColumnDef,
  ColumnFilter,
  ColumnFilters,
  EnrichedRequestRow,
  ListPageConfig,
  SortState,
} from "../types";
import { saveViewState, loadViewState } from "../view-state";

interface RequestRecordsTableProps {
  config: ListPageConfig;
  rows: EnrichedRequestRow[];
  allRows: EnrichedRequestRow[];
  columnFilters: ColumnFilters;
  sort: SortState | null;
  onColumnFilter: (field: string, filter: ColumnFilter | null) => void;
  onSort: (field: string, direction: "asc" | "desc" | null) => void;
}

function getDisplayValue(row: EnrichedRequestRow, col: ColumnDef): React.ReactNode {
  const key = col.key;
  switch (key) {
    case "status":
      return <RequestStatusBadge status={row.status} />;
    case "sla_status":
      return <SlaIndicator sla={row.sla_status} />;
    case "health":
      return <HealthIndicator health={row.health} />;
    case "priority":
      if (col.plain) {
        return row.priority ? row.priority.charAt(0).toUpperCase() + row.priority.slice(1) : "—";
      }
      return <PriorityIndicator priority={row.priority} />;
    case "created_at":
    case "updated_at":
    case "target_due":
      return shortDate(row[key as keyof EnrichedRequestRow] as string | null);
    case "department_name":
    case "requestor_name":
    case "assignee_name":
      return (row[key as keyof EnrichedRequestRow] as string | null) ?? "—";
    default:
      return String(row[key as keyof EnrichedRequestRow] ?? "—");
  }
}

function getRawValues(rows: EnrichedRequestRow[], key: string): string[] {
  return rows.map((r) => {
    const v = r[key as keyof EnrichedRequestRow];
    if (v === null || v === undefined) return "";
    return String(v);
  });
}

export function RequestRecordsTable({
  config,
  rows,
  allRows,
  columnFilters,
  sort,
  onColumnFilter,
  onSort,
}: RequestRecordsTableProps) {
  const router = useRouter();

  function handleSort(field: string, direction: "asc" | "desc" | null) {
    if (direction === null) onSort(field, null);
    else onSort(field, direction);
  }

  function openDetail(ref: string) {
    const state = loadViewState(config.storageKey, config.tabs[0]?.key ?? "all");
    saveViewState(config.storageKey, {
      ...state,
      visibleRefs: allRows.map((r) => r.reference_no),
    });
    router.push(`${config.detailBasePath}/${encodeURIComponent(ref)}`);
  }

  function renderFilterPopover(col: ColumnDef, onClose: () => void) {
    const current = columnFilters[col.key];

    if (col.filterType === "text") {
      return (
        <TextColumnFilterPopover
          values={getRawValues(allRows, col.key)}
          current={current?.type === "text" ? current : undefined}
          onApply={(f) => onColumnFilter(col.key, f)}
          onClose={onClose}
        />
      );
    }
    if (col.filterType === "status") {
      return (
        <StatusColumnFilterPopover
          field={col.key}
          values={getRawValues(allRows, col.key)}
          current={current?.type === "status" ? current : undefined}
          onApply={(f) => onColumnFilter(col.key, f)}
          onClose={onClose}
        />
      );
    }
    if (col.filterType === "date") {
      return (
        <DateColumnFilterPopover
          current={current?.type === "date" ? current : undefined}
          onApply={(f) => onColumnFilter(col.key, f)}
          onClose={onClose}
        />
      );
    }
    return null;
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[900px] text-sm">
        <thead className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
          <tr>
            {config.columns.map((col) => (
              <FilterableColumnHeader
                key={col.key}
                col={col}
                columnFilters={columnFilters}
                sort={sort}
                onSort={handleSort}
                renderFilter={(onClose) => renderFilterPopover(col, onClose)}
              />
            ))}
            {!config.hideActionColumn ? (
              <th className="px-3 py-2 text-right text-[10px] font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">
                Action
              </th>
            ) : null}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.id}
              className={
                config.navigateOnRowClick === false
                  ? "border-b border-[var(--color-border)]"
                  : "cursor-pointer border-b border-[var(--color-border)] transition-colors hover:bg-[var(--color-surface)]"
              }
              onClick={config.navigateOnRowClick === false ? undefined : () => openDetail(row.reference_no)}
            >
              {config.columns.map((col) => (
                <td key={col.key} className="max-w-[200px] truncate px-3 py-2.5 text-[var(--color-text-secondary)]">
                  {getDisplayValue(row, col)}
                </td>
              ))}
              {!config.hideActionColumn ? (
                <td className="px-3 py-2.5 text-right text-xs font-medium text-[var(--color-text-secondary)]">
                  Open request →
                </td>
              ) : null}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function FilterableColumnHeader({
  col,
  columnFilters,
  sort,
  onSort,
  renderFilter,
}: {
  col: ColumnDef;
  columnFilters: ColumnFilters;
  sort: SortState | null;
  onSort: (field: string, direction: "asc" | "desc" | null) => void;
  renderFilter: (onClose: () => void) => React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);
  return (
    <ColumnHeader
      label={col.label}
      field={col.key}
      sortable={col.sortable ?? false}
      filterable={!!col.filterType}
      filterActive={!!columnFilters[col.key]}
      sort={sort}
      onSort={onSort}
      filterOpen={open}
      onFilterOpenChange={setOpen}
      filterPopover={open ? renderFilter(() => setOpen(false)) : null}
    />
  );
}
