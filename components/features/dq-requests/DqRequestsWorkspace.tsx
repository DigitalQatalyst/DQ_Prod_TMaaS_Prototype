"use client";

import { Search } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { WorkingLayout } from "@/components/foundation/layouts/workspace/WorkingLayout";
import {
  DqRequestDetailPanel,
  DqRequestListItemRow,
} from "@/components/features/dq-requests/DqRequestDetailPanel";
import { useDqRequests } from "@/lib/hooks/useDqRequests";
import {
  isAssignedToUser,
  matchesDqRequestSearch,
} from "@/lib/requests/dqRequestFilters";
import type { DqServiceRequestListItem } from "@/lib/requests/serviceRequestRepository";
import { useAuth } from "@/contexts/AuthContext";
import { cn } from "@/lib/utils";

export type DqRequestsViewMode = "queue" | "assignments";

interface DqRequestsWorkspaceProps {
  mode: DqRequestsViewMode;
  pageTitle: string;
  subtitle: string;
}

function filterByMode(
  requests: DqServiceRequestListItem[],
  mode: DqRequestsViewMode,
  userName: string,
  userEmail: string,
): DqServiceRequestListItem[] {
  if (mode === "queue") return requests;
  return requests.filter((request) => isAssignedToUser(request, userName, userEmail));
}

export function DqRequestsWorkspace({ mode, pageTitle, subtitle }: DqRequestsWorkspaceProps) {
  const { user } = useAuth();
  const { requests, isLoading, error, updateRequestInList } = useDqRequests();
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [mobileShowDetail, setMobileShowDetail] = useState(false);

  const scopedRequests = useMemo(
    () => filterByMode(requests, mode, user.name, user.email),
    [mode, requests, user.email, user.name],
  );

  const filteredRequests = useMemo(
    () => scopedRequests.filter((request) => matchesDqRequestSearch(request, search)),
    [scopedRequests, search],
  );

  const selectedIndex = useMemo(() => {
    if (!selectedId) return -1;
    return filteredRequests.findIndex((request) => request.id === selectedId);
  }, [filteredRequests, selectedId]);

  const selectedRequest =
    selectedIndex >= 0 ? (filteredRequests[selectedIndex] ?? null) : null;

  useEffect(() => {
    if (filteredRequests.length === 0) {
      setSelectedId(null);
      setMobileShowDetail(false);
      return;
    }

    if (!selectedId || !filteredRequests.some((request) => request.id === selectedId)) {
      setSelectedId(filteredRequests[0]?.id ?? null);
    }
  }, [filteredRequests, selectedId]);

  const handleSelect = (id: string) => {
    setSelectedId(id);
    setMobileShowDetail(true);
  };

  const handlePrevious = () => {
    if (selectedIndex > 0) {
      const prev = filteredRequests[selectedIndex - 1];
      if (prev) setSelectedId(prev.id);
    }
  };

  const handleNext = () => {
    if (selectedIndex < filteredRequests.length - 1) {
      const next = filteredRequests[selectedIndex + 1];
      if (next) setSelectedId(next.id);
    }
  };

  const listLabel =
    mode === "assignments"
      ? `${filteredRequests.length} Assignment${filteredRequests.length === 1 ? "" : "s"}`
      : `${filteredRequests.length} Request${filteredRequests.length === 1 ? "" : "s"}`;

  const emptyMessage = useMemo(() => {
    if (isLoading) return "Loading requests…";
    if (error) return error;
    if (mode === "assignments" && scopedRequests.length === 0) {
      return "No requests are assigned to you yet.";
    }
    if (filteredRequests.length === 0) return "No requests match your search.";
    return "No requests yet.";
  }, [error, filteredRequests.length, isLoading, mode, scopedRequests.length]);

  return (
    <WorkingLayout pageTitle={pageTitle} subtitle={subtitle} headerClassName="pt-5 pb-4">
      <div className="flex h-[calc(100vh-var(--shell-header-h)-10rem)] min-h-[560px] overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border-subtle)] bg-white shadow-[var(--shadow-sm)]">
        <aside
          className={cn(
            "flex w-full shrink-0 flex-col border-r border-[var(--color-border-subtle)] bg-[var(--color-surface)] lg:w-[320px] xl:w-[360px]",
            mobileShowDetail ? "hidden lg:flex" : "flex",
          )}
        >
          <div className="shrink-0 border-b border-[var(--color-border-subtle)] px-4 py-4">
            <p className="text-sm font-semibold text-[var(--color-text-primary)]">{listLabel}</p>
            <div className="relative mt-3">
              <Search
                size={15}
                strokeWidth={1.5}
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]"
              />
              <Input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search list…"
                className="h-9 w-full border-[var(--color-border)] bg-white pl-9 text-sm"
              />
            </div>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto p-2">
            {filteredRequests.length === 0 ? (
              <div className="px-3 py-10 text-center">
                <p className="text-sm text-[var(--color-text-muted)]">{emptyMessage}</p>
                {process.env.NODE_ENV !== "production" && mode === "queue" ? (
                  <p className="mt-2 text-xs text-[var(--color-text-muted)]/80">
                    To test with the dev stub session, set{" "}
                    <code>ALLOW_DQ_STUB_SESSION=true</code>.
                  </p>
                ) : null}
              </div>
            ) : (
              <div className="space-y-1">
                {filteredRequests.map((request) => (
                  <DqRequestListItemRow
                    key={request.id}
                    request={request}
                    selected={request.id === selectedId}
                    onSelect={() => handleSelect(request.id)}
                  />
                ))}
              </div>
            )}
          </div>
        </aside>

        <section
          className={cn(
            "min-w-0 flex-1",
            !mobileShowDetail && !selectedRequest ? "hidden lg:block" : "block",
            mobileShowDetail ? "block" : "hidden lg:block",
          )}
        >
          {selectedRequest && selectedIndex >= 0 ? (
            <DqRequestDetailPanel
              request={selectedRequest}
              index={selectedIndex}
              total={filteredRequests.length}
              onPrevious={handlePrevious}
              onNext={handleNext}
              onRequestUpdated={updateRequestInList}
              showListToggle
              onShowList={() => setMobileShowDetail(false)}
              onClose={() => {
                setMobileShowDetail(false);
                setSelectedId(null);
              }}
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-[var(--color-surface)] p-8 text-center">
              <p className="text-sm text-[var(--color-text-muted)]">
                Select a request from the queue to view details.
              </p>
            </div>
          )}
        </section>
      </div>
    </WorkingLayout>
  );
}
