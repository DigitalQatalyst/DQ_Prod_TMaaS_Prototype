"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import type { CustomerRequest } from "@/lib/types/requests";
import { useCustomerRequests } from "@/lib/hooks/useCustomerRequests";
import { useCustomerOverviewStats } from "@/lib/hooks/useCustomerOverviewStats";
import { useCustomerRecentActivity } from "@/lib/hooks/useCustomerRecentActivity";
import { WorkingLayout } from "@/components/foundation/layouts/workspace/WorkingLayout";
import { QuickActionsPanel } from "@/components/features/requests/QuickActionsPanel";
import { RequestDetailSheet } from "@/components/features/requests/RequestDetailSheet";
import { RequestsPagination } from "@/components/features/requests/RequestsPagination";
import { RequestsTable } from "@/components/features/requests/RequestsTable";
import { OverviewStatsRow } from "./OverviewStatsRow";
import { RecentActivityPanel } from "./RecentActivityPanel";

const DEWA_STUB_FIRST_NAME = "Ahmed";

function resolveFirstName(authName: string): string {
  if (authName === "Demo User") return DEWA_STUB_FIRST_NAME;
  return authName.split(/\s+/)[0] ?? authName;
}

/** Customer Overview — welcome, then two columns: metrics + table | quick actions. */
export function OverviewPage() {
  const { user } = useAuth();
  const {
    requests,
    allRequests,
    totalCount,
    page,
    pageSize,
    setPage,
    sortField,
    sortDirection,
    toggleSort,
    isLoading,
  } = useCustomerRequests({ pageSize: 5 });
  const stats = useCustomerOverviewStats(allRequests);
  const recentActivity = useCustomerRecentActivity(allRequests);

  const [selectedRequest, setSelectedRequest] = useState<CustomerRequest | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);

  const firstName = resolveFirstName(user.name);

  const handleRowClick = (request: CustomerRequest) => {
    setSelectedRequest(request);
    setSheetOpen(true);
  };

  const handleSheetOpenChange = (open: boolean) => {
    setSheetOpen(open);
    if (!open) setSelectedRequest(null);
  };

  return (
    <WorkingLayout
      pageTitle={`Welcome back, ${firstName}`}
      subtitle="Your open requests, recent updates, and quick actions in one place."
      headerClassName="pt-5 pb-4"
    >
      <div className="flex flex-col gap-6 xl:flex-row xl:items-start">
        <div className="min-w-0 flex-1 space-y-6">
          <OverviewStatsRow stats={stats} isLoading={isLoading} />

          <div className="flex flex-col gap-3" data-testid="entity-list">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="min-w-0">
                <h2 className="truncate text-sm font-semibold text-[var(--color-text-primary)]">
                  My Requests
                </h2>
                <p className="mt-0.5 text-xs text-[var(--color-text-muted)]">
                  Track the status of all your service requests and advisory engagements
                </p>
              </div>
              <Link
                href="/dashboard/requests"
                className="inline-flex items-center gap-1 text-xs font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:underline"
              >
                View all
                <ArrowRight size={14} strokeWidth={1.5} aria-hidden="true" />
              </Link>
            </div>

            <RequestsTable
              requests={requests}
              variant="overview"
              sortField={sortField}
              sortDirection={sortDirection}
              onSort={toggleSort}
              onRowClick={handleRowClick}
              selectedId={selectedRequest?.id}
              isLoading={isLoading}
              skeletonRowCount={pageSize}
            />

            <RequestsPagination
              page={page}
              pageSize={pageSize}
              totalCount={totalCount}
              onPageChange={setPage}
            />
          </div>
        </div>

        <aside className="hidden w-full shrink-0 space-y-4 xl:block xl:w-[280px]">
          <QuickActionsPanel />
          <RecentActivityPanel items={recentActivity} isLoading={isLoading} />
        </aside>
      </div>

      <div className="mt-6 space-y-4 xl:hidden">
        <QuickActionsPanel />
        <RecentActivityPanel items={recentActivity} isLoading={isLoading} />
      </div>

      <RequestDetailSheet
        request={selectedRequest}
        open={sheetOpen}
        onOpenChange={handleSheetOpenChange}
      />
    </WorkingLayout>
  );
}
