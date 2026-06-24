"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import type { CustomerRequest } from "@/lib/types/requests";
import { useCustomerRequests } from "@/lib/hooks/useCustomerRequests";
import { useCustomerOverviewStats } from "@/lib/hooks/useCustomerOverviewStats";
import { QuickActionsPanel } from "@/components/features/requests/QuickActionsPanel";
import { RequestDetailSheet } from "@/components/features/requests/RequestDetailSheet";
import { RequestsPagination } from "@/components/features/requests/RequestsPagination";
import { OverviewStatsRow } from "./OverviewStatsRow";
import { OverviewRequestsTable } from "./OverviewRequestsTable";

const DEWA_STUB_FIRST_NAME = "Ahmed";

function resolveFirstName(authName: string): string {
  if (authName === "Demo User") return DEWA_STUB_FIRST_NAME;
  return authName.split(/\s+/)[0] ?? authName;
}

/** Customer Overview — welcome, then two columns: metrics + table | quick actions. */
export function OverviewPage() {
  const { user } = useAuth();
  const stats = useCustomerOverviewStats();
  const {
    requests,
    totalCount,
    page,
    pageSize,
    totalPages,
    setPage,
  } = useCustomerRequests({ pageSize: 5 });

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
    <div className="flex min-h-full min-w-0 flex-col">
      <div className="border-b border-[var(--color-border-subtle)] bg-white px-6 py-6 lg:px-8">
        <h1 className="text-2xl font-semibold tracking-tight text-[var(--color-text-primary)]">
          Welcome back, {firstName}
        </h1>
        <p className="mt-1 text-sm text-[var(--color-text-muted)]">
          Manage your TMaaS requests and advisory engagements
        </p>
      </div>

      <div className="min-w-0 flex-1 p-6 lg:p-8">
        <div className="flex flex-col gap-8 xl:flex-row xl:items-start">
          <div className="min-w-0 flex-1 space-y-8">
            <OverviewStatsRow stats={stats} />

            <div className="space-y-4">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">
                    My Requests
                  </h2>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                    Track the status of all your service requests and advisory engagements
                  </p>
                </div>
                <Link
                  href="/dashboard/requests"
                  className="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-secondary)] hover:underline"
                >
                  View all
                  <ArrowRight size={14} strokeWidth={1.5} aria-hidden="true" />
                </Link>
              </div>

              <OverviewRequestsTable
                requests={requests}
                onRowClick={handleRowClick}
                selectedId={selectedRequest?.id}
              />

              <RequestsPagination
                page={page}
                pageSize={pageSize}
                totalCount={totalCount}
                totalPages={totalPages}
                onPageChange={setPage}
              />
            </div>
          </div>

          <aside className="hidden w-full shrink-0 xl:block xl:w-[260px]">
            <QuickActionsPanel />
          </aside>
        </div>

        <div className="mt-8 xl:hidden">
          <QuickActionsPanel />
        </div>
      </div>

      <RequestDetailSheet
        request={selectedRequest}
        open={sheetOpen}
        onOpenChange={handleSheetOpenChange}
      />
    </div>
  );
}
