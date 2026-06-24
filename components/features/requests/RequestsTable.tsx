"use client";

import { ChevronRight, ChevronUp, ChevronDown } from "lucide-react";
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
  if (sortField !== field) return null;
  return sortDirection === "asc" ? (
    <ChevronUp size={14} className="inline text-[var(--color-text-muted)]" />
  ) : (
    <ChevronDown size={14} className="inline text-[var(--color-text-muted)]" />
  );
}

/** DWS.01 RequestRecordsTable styling — native table + workspace tokens. */
export function RequestsTable({
  requests,
  sortField,
  sortDirection,
  onSort,
  onRowClick,
  selectedId,
}: RequestsTableProps) {
  return (
    <div className="overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-0 text-sm">
          <thead className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
            <tr>
              <th className="w-[38%] px-4 py-3 text-left text-[10px] font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">
                Request
              </th>
              <th className="px-4 py-3 text-left text-[10px] font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">
                Service Type
              </th>
              <th className="whitespace-nowrap px-4 py-3 text-left text-[10px] font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">
                <button
                  type="button"
                  onClick={() => onSort("submittedAt")}
                  className="inline-flex items-center gap-1 hover:text-[var(--color-text-primary)]"
                >
                  Submission Date
                  <SortIcon
                    field="submittedAt"
                    sortField={sortField}
                    sortDirection={sortDirection}
                  />
                </button>
              </th>
              <th className="px-4 py-3 text-left text-[10px] font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">
                Status
              </th>
              <th className="whitespace-nowrap px-4 py-3 text-left text-[10px] font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">
                Request ID
              </th>
              <th className="w-10 px-4 py-3" />
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <tr
                key={request.id}
                onClick={() => onRowClick(request)}
                className={cn(
                  "cursor-pointer border-b border-[var(--color-border)] transition-colors hover:bg-[var(--color-surface)]",
                  selectedId === request.id && "bg-[var(--color-secondary)]/5"
                )}
              >
                <td className="px-4 py-3.5 font-medium text-[var(--color-text-primary)]">
                  <span className="line-clamp-2">{request.title}</span>
                </td>
                <td className="whitespace-nowrap px-4 py-3.5 text-[var(--color-text-secondary)]">
                  <ServiceTypeBadge type={request.serviceType} />
                </td>
                <td className="whitespace-nowrap px-4 py-3.5 text-[var(--color-text-secondary)]">
                  {formatRequestDate(request.submittedAt)}
                </td>
                <td className="px-4 py-3.5">
                  <RequestStatusBadge status={request.status} />
                </td>
                <td className="whitespace-nowrap px-4 py-3.5 font-mono text-xs text-[var(--color-text-muted)]">
                  {request.referenceNo}
                </td>
                <td className="px-4 py-3.5">
                  <ChevronRight size={16} className="text-[var(--color-text-disabled)]" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
