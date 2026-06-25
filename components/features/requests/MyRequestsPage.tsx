"use client";

import { useState } from "react";
import type { CustomerRequest } from "@/lib/types/requests";
import { CUSTOMER_REQUEST_TABS } from "@/lib/requests/customerRequestTabs";
import { useCustomerRequests } from "@/lib/hooks/useCustomerRequests";
import { SectionCard } from "@/components/foundation/workspace-ui/detail-rail";
import { RequestsTabs } from "./RequestsTabs";
import { RequestsToolbar } from "./RequestsToolbar";
import { RequestsTable } from "./RequestsTable";
import { RequestsPagination } from "./RequestsPagination";
import { RequestDetailSheet } from "./RequestDetailSheet";
import { WorkspacePageHeader } from "@/components/foundation/layouts/workspace/WorkspacePageHeader";

/** DWS.01 RequestListPage pattern for customer My Requests. */
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
    activeTab,
    setActiveTab,
    tabCounts,
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
    <div className="flex min-h-full min-w-0 flex-col">
      <WorkspacePageHeader
        title="My Requests"
        description="View and track all your service requests."
      />

      <div className="min-w-0 flex-1 space-y-4 p-6 lg:p-8">
        <RequestsTabs
          activeTab={activeTab}
          onTabChange={setActiveTab}
          tabCounts={tabCounts}
          tabs={CUSTOMER_REQUEST_TABS}
        />

        <RequestsToolbar search={search} onSearchChange={setSearch} totalCount={totalCount} />

        <SectionCard>
          <RequestsTable
            requests={requests}
            sortField={sortField}
            sortDirection={sortDirection}
            onSort={toggleSort}
            onRowClick={handleRowClick}
            selectedId={selectedRequest?.id}
          />
        </SectionCard>

        <RequestsPagination
          page={page}
          pageSize={pageSize}
          totalCount={totalCount}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      </div>

      <RequestDetailSheet
        request={selectedRequest}
        open={sheetOpen}
        onOpenChange={handleSheetOpenChange}
      />
    </div>
  );
}
