"use client";

import { WorkingLayout } from "@dbp/shell-transaction/layouts";
import { RequestListPage } from "@/lib/dws-requests/components/RequestListPage";
import { QuickActionsPanel } from "@/components/features/requests/QuickActionsPanel";

/** DWS.01 MyRequestsShell — WorkingLayout + RequestListPage + TMaaS quick-actions rail. */
export function MyRequestsPage() {
  return (
    <div className="min-w-0 flex-1 p-6 lg:p-8">
      <div className="flex flex-col gap-8 xl:flex-row xl:items-start">
        <div className="min-w-0 flex-1">
          <WorkingLayout
            pageTitle="My Requests"
            subtitle="View and track all your service requests."
            breadcrumb={[
              { label: "TMaaS", href: "/dashboard/overview" },
              { label: "Workspace" },
              { label: "My Requests" },
            ]}
          >
            <RequestListPage variant="requester" />
          </WorkingLayout>
        </div>

        <aside className="hidden w-full shrink-0 xl:block xl:w-[260px]">
          <QuickActionsPanel />
        </aside>
      </div>

      <div className="mt-8 xl:hidden">
        <QuickActionsPanel />
      </div>
    </div>
  );
}
