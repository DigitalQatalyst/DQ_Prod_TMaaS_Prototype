"use client";

import { ArrowDown, ArrowUp, ChevronsUpDown } from "lucide-react";
import type { CustomerRequest } from "@/lib/types/requests";
import type { SortDirection, SortField } from "@/lib/hooks/useCustomerRequests";
import { formatRequestDate } from "@/lib/requests/format";
import { RequestStatusBadge } from "./RequestStatusBadge";
import { ServiceTypeBadge } from "./ServiceTypeBadge";
import { cn } from "@/lib/utils";

interface RequestsTableProps {
  requests: CustomerRequest[];
  sortField: SortField;
  sortDirection: SortDirection;
  onSort: (field: SortField) => void;
  onRowClick: (request: CustomerRequest) => void;
  selectedId?: string | undefined;
  variant?: "full" | "overview";
}

function SortIcon({
  field,
  sortField,
  sortDirection,
}: {
  field: SortField;
  sortField: SortField;
  sortDirection: SortDirection;
}) {
  if (sortField !== field) {
    return (
      <ChevronsUpDown size={13} strokeWidth={1.5} className="text-[var(--color-text-disabled)]" />
    );
  }
  return sortDirection === "asc" ? (
    <ArrowUp size={13} strokeWidth={1.5} className="text-[var(--color-text-disabled)]" />
  ) : (
    <ArrowDown size={13} strokeWidth={1.5} className="text-[var(--color-text-disabled)]" />
  );
}

function SortableHeader({
  label,
  field,
  sortField,
  sortDirection,
  onSort,
  className,
}: {
  label: string;
  field: SortField;
  sortField: SortField;
  sortDirection: SortDirection;
  onSort: (field: SortField) => void;
  className?: string;
}) {
  const sortDir = sortField === field ? sortDirection : undefined;
  return (
    <th
      className={cn(
        "whitespace-nowrap px-4 py-3 text-left font-mono text-[11px] font-medium uppercase tracking-wider text-[var(--color-text-muted)]",
        "cursor-pointer select-none hover:text-[var(--color-text-secondary)]",
        className
      )}
      onClick={() => onSort(field)}
      aria-sort={
        sortDir === "asc" ? "ascending" : sortDir === "desc" ? "descending" : "none"
      }
    >
      <span className="flex items-center gap-1.5">
        {label}
        <span aria-hidden="true">
          <SortIcon field={field} sortField={sortField} sortDirection={sortDirection} />
        </span>
      </span>
    </th>
  );
}

/** DWS.01 EntityList table — bordered card, sortable headers, row selection. */
export function RequestsTable({
  requests,
  sortField,
  sortDirection,
  onSort,
  onRowClick,
  selectedId,
  variant = "full",
}: RequestsTableProps) {
  if (requests.length === 0) {
    return (
      <div className="rounded-[var(--radius-card)] border border-[var(--color-border-default)] bg-[var(--color-surface-2)] px-6 py-16 text-center shadow-[var(--shadow-sm)]">
        <p className="text-sm font-medium text-[var(--color-text-primary)]">No requests found</p>
        <p className="mt-1 text-sm text-[var(--color-text-muted)]">
          Try a different filter or search term.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-auto rounded-[var(--radius-card)] border border-[var(--color-border-default)] bg-[var(--color-surface-2)] shadow-[var(--shadow-sm)]">
      <table
        className="w-full border-collapse text-sm text-[var(--color-text-primary)]"
        data-testid="data-table"
      >
        <thead>
          <tr className="border-b border-[var(--color-border-subtle)] bg-[var(--color-surface)]">
            <SortableHeader
              label="Request"
              field="title"
              sortField={sortField}
              sortDirection={sortDirection}
              onSort={onSort}
              className="w-[34%]"
            />
            <SortableHeader
              label="Service Type"
              field="serviceType"
              sortField={sortField}
              sortDirection={sortDirection}
              onSort={onSort}
            />
            {variant === "full" && (
              <SortableHeader
                label="Submitted"
                field="submittedAt"
                sortField={sortField}
                sortDirection={sortDirection}
                onSort={onSort}
              />
            )}
            <SortableHeader
              label="Status"
              field="status"
              sortField={sortField}
              sortDirection={sortDirection}
              onSort={onSort}
            />
            {variant === "full" && (
              <SortableHeader
                label="Request ID"
                field="referenceNo"
                sortField={sortField}
                sortDirection={sortDirection}
                onSort={onSort}
              />
            )}
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => {
            const isActive = selectedId === request.id;
            return (
              <tr
                key={request.id}
                role="button"
                tabIndex={0}
                data-selected={isActive ? "true" : undefined}
                onClick={() => onRowClick(request)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onRowClick(request);
                  }
                }}
                className={cn(
                  "cursor-pointer border-b border-[var(--color-border-subtle)] bg-[var(--color-surface-2)] transition-colors hover:bg-[var(--color-surface)]",
                  isActive && "bg-[var(--color-navy-50)]"
                )}
              >
                <td className="max-w-[360px] px-4 py-2.5 font-medium">
                  <span className="line-clamp-2">{request.title}</span>
                  {variant === "overview" && (
                    <span className="mt-0.5 block font-mono text-xs font-normal text-[var(--color-text-muted)]">
                      {request.referenceNo}
                    </span>
                  )}
                </td>
                <td className="whitespace-nowrap px-4 py-2.5 text-[var(--color-text-secondary)]">
                  <ServiceTypeBadge type={request.serviceType} />
                </td>
                {variant === "full" && (
                  <td className="whitespace-nowrap px-4 py-2.5 text-[var(--color-text-secondary)]">
                    {formatRequestDate(request.submittedAt)}
                  </td>
                )}
                <td className="px-4 py-2.5">
                  <RequestStatusBadge status={request.status} />
                </td>
                {variant === "full" && (
                  <td className="whitespace-nowrap px-4 py-2.5 font-mono text-xs text-[var(--color-text-muted)]">
                    {request.referenceNo}
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
