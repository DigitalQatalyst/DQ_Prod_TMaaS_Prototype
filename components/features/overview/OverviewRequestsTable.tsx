"use client";

import { ChevronRight } from "lucide-react";
import type { CustomerRequest } from "@/lib/types/requests";
import { formatRequestDate } from "@/lib/requests/format";
import { getServiceTypeVisual } from "@/lib/requests/serviceTypeVisuals";
import { RequestStatusBadge } from "@/components/features/requests/RequestStatusBadge";
import { ServiceTypeBadge } from "@/components/features/requests/ServiceTypeBadge";
import { cn } from "@/lib/utils";

interface OverviewRequestsTableProps {
  requests: CustomerRequest[];
  onRowClick: (request: CustomerRequest) => void;
  selectedId?: string | undefined;
}

/** Overview dashboard requests table — icon lockup, last updated column. */
export function OverviewRequestsTable({
  requests,
  onRowClick,
  selectedId,
}: OverviewRequestsTableProps) {
  return (
    <div className="overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-0 text-sm">
          <thead className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
            <tr>
              <th className="w-[36%] px-4 py-3 text-left text-[10px] font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">
                Request
              </th>
              <th className="px-4 py-3 text-left text-[10px] font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">
                Service Type
              </th>
              <th className="whitespace-nowrap px-4 py-3 text-left text-[10px] font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">
                Submitted
              </th>
              <th className="px-4 py-3 text-left text-[10px] font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">
                Status
              </th>
              <th className="whitespace-nowrap px-4 py-3 text-left text-[10px] font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">
                Last Updated
              </th>
              <th className="w-10 px-4 py-3" />
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => {
              const visual = getServiceTypeVisual(request.serviceType);
              const Icon = visual.icon;
              return (
                <tr
                  key={request.id}
                  onClick={() => onRowClick(request)}
                  className={cn(
                    "cursor-pointer border-b border-[var(--color-border)] transition-colors hover:bg-[var(--color-surface)]",
                    selectedId === request.id && "bg-[var(--color-secondary)]/5"
                  )}
                >
                  <td className="px-4 py-3.5">
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg",
                          visual.iconClass
                        )}
                      >
                        <Icon size={16} strokeWidth={1.5} aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <p className="line-clamp-1 font-medium text-[var(--color-text-primary)]">
                          {request.title}
                        </p>
                        <p className="mt-0.5 font-mono text-[11px] text-[var(--color-text-muted)]">
                          {request.referenceNo}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3.5">
                    <ServiceTypeBadge type={request.serviceType} />
                  </td>
                  <td className="whitespace-nowrap px-4 py-3.5 text-[var(--color-text-secondary)]">
                    {formatRequestDate(request.submittedAt)}
                  </td>
                  <td className="px-4 py-3.5">
                    <RequestStatusBadge status={request.status} />
                  </td>
                  <td className="whitespace-nowrap px-4 py-3.5 text-[var(--color-text-secondary)]">
                    {formatRequestDate(request.updatedAt)}
                  </td>
                  <td className="px-4 py-3.5">
                    <ChevronRight size={16} className="text-[var(--color-text-disabled)]" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
