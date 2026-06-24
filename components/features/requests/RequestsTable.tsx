"use client";

import { ChevronRight, ChevronUp, ChevronDown } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
    <ChevronUp size={14} className="inline text-navy-950/50" />
  ) : (
    <ChevronDown size={14} className="inline text-navy-950/50" />
  );
}

export function RequestsTable({
  requests,
  sortField,
  sortDirection,
  onSort,
  onRowClick,
  selectedId,
}: RequestsTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-navy-100/60 bg-white shadow-sm">
      <Table>
        <TableHeader>
          <TableRow className="border-navy-100/60 hover:bg-transparent">
            <TableHead className="text-[11px] font-semibold uppercase tracking-wider text-navy-950/50">
              Request
            </TableHead>
            <TableHead className="text-[11px] font-semibold uppercase tracking-wider text-navy-950/50">
              Service Type
            </TableHead>
            <TableHead className="text-[11px] font-semibold uppercase tracking-wider text-navy-950/50">
              <button
                type="button"
                onClick={() => onSort("submittedAt")}
                className="inline-flex items-center gap-1 hover:text-navy-950"
              >
                Submission Date
                <SortIcon
                  field="submittedAt"
                  sortField={sortField}
                  sortDirection={sortDirection}
                />
              </button>
            </TableHead>
            <TableHead className="text-[11px] font-semibold uppercase tracking-wider text-navy-950/50">
              Status
            </TableHead>
            <TableHead className="text-[11px] font-semibold uppercase tracking-wider text-navy-950/50">
              Request ID
            </TableHead>
            <TableHead className="w-10" />
          </TableRow>
        </TableHeader>
        <TableBody>
          {requests.map((request) => (
            <TableRow
              key={request.id}
              onClick={() => onRowClick(request)}
              className={cn(
                "cursor-pointer border-navy-100/40 transition-colors hover:bg-navy-50/50",
                selectedId === request.id && "bg-[#FB5535]/5"
              )}
            >
              <TableCell className="font-medium text-navy-950">{request.title}</TableCell>
              <TableCell>
                <ServiceTypeBadge type={request.serviceType} />
              </TableCell>
              <TableCell className="text-sm text-navy-950/70">
                {formatRequestDate(request.submittedAt)}
              </TableCell>
              <TableCell>
                <RequestStatusBadge status={request.status} />
              </TableCell>
              <TableCell className="font-mono text-xs text-navy-950/60">
                {request.referenceNo}
              </TableCell>
              <TableCell>
                <ChevronRight size={16} className="text-navy-950/30" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
