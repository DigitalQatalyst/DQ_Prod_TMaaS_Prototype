"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import type { CustomerRequest } from "@/lib/types/requests";
import { CUSTOMER_REQUEST_TABS } from "@/lib/requests/customerRequestTabs";
import { useCustomerRequests } from "@/lib/hooks/useCustomerRequests";
import { WorkingLayout } from "@/components/foundation/layouts/workspace/WorkingLayout";
import { RequestsListToolbar } from "./RequestsListToolbar";
import { RequestsTable } from "./RequestsTable";
import { RequestsPagination } from "./RequestsPagination";
import { RequestDetailSheet } from "./RequestDetailSheet";

/** DWS.01 /transactions/requests — WorkingLayout + EntityList toolbar/table/pager. */
export function MyRequestsPage({ useMockData = false }: { useMockData?: boolean }) {
  const searchParams = useSearchParams();
  const highlightId = searchParams.get("highlight");

  const {
    requests,
    allRequests,
    totalCount,
    page,
    pageSize,
    search,
    setSearchQuery,
    sortField,
    sortDirection,
    toggleSort,
    setPage,
    activeTab,
    setActiveTab,
    tabCounts,
    isLoading,
  } = useCustomerRequests({ pageSize: 15, useMockData });

  const [selectedRequest, setSelectedRequest] = useState<CustomerRequest | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);

  useEffect(() => {
    if (!highlightId || isLoading) return;
    const match = allRequests.find((request) => request.id === highlightId);
    if (match) {
      setSelectedRequest(match);
      setSheetOpen(true);
    }
  }, [highlightId, allRequests, isLoading]);

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
      pageTitle="My Requests"
      subtitle="Track and manage all your TMaaS service requests and advisory engagements."
      headerClassName="pt-5 pb-4"
    >
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3 rounded-[var(--radius-card)] border border-[var(--color-border-subtle)] bg-[var(--color-surface-2)] px-4 py-3 shadow-[var(--shadow-sm)]">
        <div className="min-w-0">
          <p className="text-sm font-semibold text-[var(--color-text-primary)]">
            Need another service?
          </p>
          <p className="mt-0.5 text-xs text-[var(--color-text-muted)]">
            Explore the catalogue to submit a new request.
          </p>
        </div>
        <Link
          href="/marketplace"
          className="inline-flex items-center gap-1 rounded-[var(--radius-button)] border border-[var(--color-border-default)] bg-white px-3 py-2 text-sm font-medium text-[var(--color-text-primary)] shadow-sm transition hover:bg-[var(--color-surface)]"
        >
          Explore more services
          <ArrowUpRight size={14} strokeWidth={1.5} aria-hidden="true" />
        </Link>
      </div>
      <div className="relative z-[1] flex flex-col gap-3" data-testid="entity-list">
        <RequestsListToolbar
          activeTab={activeTab}
          onTabChange={setActiveTab}
          tabCounts={tabCounts}
          tabs={CUSTOMER_REQUEST_TABS}
          search={search}
          onSearchChange={setSearchQuery}
          visibleCount={requests.length}
          totalCount={totalCount}
        />

        <RequestsTable
          requests={requests}
          sortField={sortField}
          sortDirection={sortDirection}
          onSort={toggleSort}
          onRowClick={handleRowClick}
          selectedId={selectedRequest?.id}
        />

        <RequestsPagination
          page={page}
          pageSize={pageSize}
          totalCount={totalCount}
          onPageChange={setPage}
        />
      </div>

      <RequestDetailSheet
        request={selectedRequest}
        open={sheetOpen}
        onOpenChange={handleSheetOpenChange}
      />
    </WorkingLayout>
  );
}
