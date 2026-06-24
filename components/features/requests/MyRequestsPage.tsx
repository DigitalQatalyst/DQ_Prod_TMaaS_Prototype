"use client";

import { useState } from "react";
import type { CustomerRequest } from "@/lib/types/requests";
import { useCustomerRequests } from "@/lib/hooks/useCustomerRequests";
import { RequestsToolbar } from "./RequestsToolbar";
import { RequestsTable } from "./RequestsTable";
import { RequestsPagination } from "./RequestsPagination";
import { QuickActionsPanel } from "./QuickActionsPanel";
import { RequestDetailSheet } from "./RequestDetailSheet";
import { WorkspacePageHeader } from "@/components/foundation/layouts/workspace/WorkspacePageHeader";

/** DWS.01 WorkingLayout + RequestListPage pattern for customer My Requests. */
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
      <WorkspacePageHeader
        title="My Requests"
        description="View and track all your service requests."
      />

      <div className="flex-1 space-y-4 p-6 lg:p-8">
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

        <div className="xl:hidden">
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
