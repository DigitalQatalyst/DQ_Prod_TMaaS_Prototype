"use client";

import { useState } from "react";
import type { CustomerRequest } from "@/lib/types/requests";
import { useCustomerRequests } from "@/lib/hooks/useCustomerRequests";
import { PLATFORM_NAME } from "@/lib/utils";
import { RequestsToolbar } from "./RequestsToolbar";
import { RequestsTable } from "./RequestsTable";
import { RequestsPagination } from "./RequestsPagination";
import { QuickActionsPanel } from "./QuickActionsPanel";
import { RequestDetailSheet } from "./RequestDetailSheet";

export function MyRequestsPage() {
  const {
    requests,
    totalCount,
    page,
    pageSize,
    totalPages,
    search,
    setSearch,
    sortField,
    sortDirection,
    toggleSort,
    setPage,
  } = useCustomerRequests();

  const [selectedRequest, setSelectedRequest] = useState<CustomerRequest | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);

  const handleRowClick = (request: CustomerRequest) => {
    setSelectedRequest(request);
    setSheetOpen(true);
  };

  const handleSheetOpenChange = (open: boolean) => {
    setSheetOpen(open);
    if (!open) setSelectedRequest(null);
  };

  return (
    <div className="flex min-h-full flex-col">
      <div className="flex-1 p-6 lg:p-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold tracking-tight text-navy-950">My Requests</h1>
          <p className="mt-1 text-sm text-navy-950/50">
            View and track all your service requests.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 xl:grid-cols-[1fr_280px]">
          <div className="space-y-4">
            <RequestsToolbar search={search} onSearchChange={setSearch} />
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
              totalPages={totalPages}
              onPageChange={setPage}
            />
          </div>
          <aside className="hidden xl:block">
            <QuickActionsPanel />
          </aside>
        </div>

        <div className="mt-8 xl:hidden">
          <QuickActionsPanel />
        </div>
      </div>

      <footer className="border-t border-navy-100/60 py-4 text-center text-xs text-navy-950/40">
        © 2026 {PLATFORM_NAME} by DigitalQatalyst. All rights reserved.
      </footer>

      <RequestDetailSheet
        request={selectedRequest}
        open={sheetOpen}
        onOpenChange={handleSheetOpenChange}
      />
    </div>
  );
}
