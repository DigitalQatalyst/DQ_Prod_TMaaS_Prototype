"use client";

import { ChevronLeft, ChevronRight, List, Loader2, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { DqServiceRequestListItem } from "@/lib/requests/serviceRequestRepository";
import { getDqRequestCustomerLabel } from "@/lib/requests/dqRequestFilters";
import {
  canAdvanceDqFlow,
  getAdvanceActionLabel,
  getNextDqFlowStage,
} from "@/lib/requests/dqRequestFlow";
import { formatRequestDate } from "@/lib/requests/format";
import { DqRequestActivityTimeline } from "@/components/features/dq-requests/DqRequestActivityTimeline";
import { DqRequestStatusStepper } from "@/components/features/dq-requests/DqRequestStatusStepper";
import { DqStatusTag } from "@/components/features/dq-requests/DqStatusTag";
import { ServiceTypeBadge } from "@/components/features/requests/ServiceTypeBadge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useDqStaffUsers } from "@/lib/hooks/useDqStaffUsers";
import { useRequestDetailCopy } from "@/lib/hooks/useRequestDetailCopy";
import { REQUEST_STATUS_LABELS, type RequestStatus } from "@/lib/types/requests";
import { UNASSIGNED_OWNER_VALUE } from "@/lib/types/dqStaff";

const LEGACY_OWNER_VALUE = "__legacy__";
import { useAuth } from "@/contexts/AuthContext";
import { cn } from "@/lib/utils";

const EDITABLE_STATUSES: RequestStatus[] = [
  "submitted",
  "under_review",
  "in_progress",
  "closed",
  "cancelled",
];

interface DqRequestDetailPanelProps {
  request: DqServiceRequestListItem;
  index: number;
  total: number;
  onPrevious: () => void;
  onNext: () => void;
  onRequestUpdated?: (request: DqServiceRequestListItem) => void;
  onClose?: () => void;
  showListToggle?: boolean;
  onShowList?: () => void;
}

function DetailField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[120px_1fr] items-start gap-3 border-b border-[var(--color-border-subtle)] py-3 last:border-b-0">
      <p className="text-xs font-medium text-[var(--color-text-muted)]">{label}</p>
      <div className="min-w-0 text-sm text-[var(--color-text-primary)]">{children}</div>
    </div>
  );
}

function SideCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-[var(--radius-card)] border border-[var(--color-border-subtle)] bg-white p-4 shadow-[var(--shadow-sm)]">
      <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
        {title}
      </p>
      {children}
    </div>
  );
}

function SideField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1 border-b border-[var(--color-border-subtle)] py-3 last:border-b-0">
      <p className="text-xs text-[var(--color-text-muted)]">{label}</p>
      <div className="text-sm text-[var(--color-text-primary)]">{children}</div>
    </div>
  );
}

export function DqRequestDetailPanel({
  request,
  index,
  total,
  onPrevious,
  onNext,
  onRequestUpdated,
  onClose,
  showListToggle = false,
  onShowList,
}: DqRequestDetailPanelProps) {
  const { user } = useAuth();
  const { users: staffUsers, source: staffSource, isLoading: staffLoading, error: staffError } =
    useDqStaffUsers();
  const [localRequest, setLocalRequest] = useState(request);
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  useEffect(() => {
    setLocalRequest(request);
    setSaveError(null);
  }, [request]);

  const customerLabel = getDqRequestCustomerLabel(localRequest);
  const { additionalDetails, marketplaceHref } = useRequestDetailCopy(localRequest);
  const canGoPrevious = index > 0;
  const canGoNext = index < total - 1;
  const nextStage = getNextDqFlowStage(localRequest.status);
  const advanceActionLabel = getAdvanceActionLabel(localRequest.status);
  const canAdvance = canAdvanceDqFlow(localRequest.status);

  async function patchRequest(updates: {
    status?: RequestStatus;
    deliveryLead?: string | null;
    deliveryLeadEmail?: string | null;
  }) {
    setIsSaving(true);
    setSaveError(null);

    try {
      const res = await fetch(`/api/dq/requests/${localRequest.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify(updates),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error ?? "Could not save changes.");
      }

      const data = (await res.json()) as { request: DqServiceRequestListItem };
      setLocalRequest(data.request);
      onRequestUpdated?.(data.request);
    } catch (err) {
      setSaveError(err instanceof Error ? err.message : "Could not save changes.");
    } finally {
      setIsSaving(false);
    }
  }

  const handleStatusChange = (value: string) => {
    void patchRequest({ status: value as RequestStatus });
  };

  const selectedOwnerEmail = useMemo(() => {
    if (localRequest.deliveryLeadEmail) {
      return localRequest.deliveryLeadEmail;
    }

    const lead = localRequest.deliveryLead?.trim().toLowerCase();
    if (!lead) return UNASSIGNED_OWNER_VALUE;

    const byEmail = staffUsers.find((staffUser) => staffUser.email === lead);
    if (byEmail) return byEmail.email;

    const byName = staffUsers.find(
      (staffUser) => staffUser.displayName.trim().toLowerCase() === lead,
    );
    if (byName) return byName.email;

    return LEGACY_OWNER_VALUE;
  }, [localRequest.deliveryLead, localRequest.deliveryLeadEmail, staffUsers]);

  const legacyOwnerLabel =
    selectedOwnerEmail === LEGACY_OWNER_VALUE ? localRequest.deliveryLead : null;

  const ownerSelectLabel = useMemo(() => {
    if (selectedOwnerEmail === UNASSIGNED_OWNER_VALUE) return "Unassigned";
    if (selectedOwnerEmail === LEGACY_OWNER_VALUE) return legacyOwnerLabel ?? "Assigned";
    return (
      staffUsers.find((staffUser) => staffUser.email === selectedOwnerEmail)?.displayName ??
      "Unassigned"
    );
  }, [legacyOwnerLabel, selectedOwnerEmail, staffUsers]);

  const handleOwnerChange = (value: string) => {
    if (value === UNASSIGNED_OWNER_VALUE) {
      void patchRequest({ deliveryLead: null, deliveryLeadEmail: null });
      return;
    }

    const selected = staffUsers.find((staffUser) => staffUser.email === value);
    if (!selected) return;

    void patchRequest({
      deliveryLead: selected.displayName,
      deliveryLeadEmail: selected.email,
    });
  };

  const handleAssignToMe = () => {
    const me =
      staffUsers.find((staffUser) => staffUser.email === user.email.toLowerCase()) ??
      staffUsers.find(
        (staffUser) => staffUser.displayName.trim().toLowerCase() === user.name.trim().toLowerCase(),
      );

    if (me) {
      void patchRequest({
        deliveryLead: me.displayName,
        deliveryLeadEmail: me.email,
      });
      return;
    }

    void patchRequest({
      deliveryLead: user.name || user.email,
      deliveryLeadEmail: user.email.toLowerCase(),
    });
  };

  const handleAdvanceStage = () => {
    if (!nextStage) return;
    void patchRequest({ status: nextStage });
  };

  return (
    <div className="flex h-full min-h-0 flex-col bg-[var(--color-surface)]">
      <div className="flex shrink-0 items-center justify-between gap-3 border-b border-[var(--color-border-subtle)] bg-white px-4 py-3">
        <div className="flex items-center gap-2">
          {showListToggle && onShowList ? (
            <button
              type="button"
              onClick={onShowList}
              className="inline-flex h-8 w-8 items-center justify-center rounded-[var(--radius-button)] border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] hover:bg-[var(--color-surface)] lg:hidden"
              aria-label="Back to list"
            >
              <ChevronLeft size={16} />
            </button>
          ) : null}
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={onPrevious}
              disabled={!canGoPrevious}
              className="inline-flex h-8 w-8 items-center justify-center rounded-[var(--radius-button)] border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] hover:bg-[var(--color-surface)] disabled:opacity-40"
              aria-label="Previous request"
            >
              <ChevronLeft size={16} />
            </button>
            <span className="min-w-[3rem] text-center text-xs text-[var(--color-text-muted)]">
              {index + 1} / {total}
            </span>
            <button
              type="button"
              onClick={onNext}
              disabled={!canGoNext}
              className="inline-flex h-8 w-8 items-center justify-center rounded-[var(--radius-button)] border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] hover:bg-[var(--color-surface)] disabled:opacity-40"
              aria-label="Next request"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {canAdvance && advanceActionLabel ? (
            <button
              type="button"
              onClick={handleAdvanceStage}
              disabled={isSaving}
              className="hidden rounded-[var(--radius-button)] border border-[var(--color-border-default)] bg-white px-3 py-1.5 text-xs font-medium text-[var(--color-text-primary)] hover:bg-[var(--color-surface)] disabled:cursor-not-allowed disabled:opacity-50 sm:inline-flex"
            >
              {advanceActionLabel}
            </button>
          ) : null}
          {isSaving ? (
            <Loader2 size={16} className="animate-spin text-[var(--color-text-muted)]" />
          ) : null}
          {onShowList ? (
            <button
              type="button"
              onClick={onShowList}
              className="hidden h-8 w-8 items-center justify-center rounded-[var(--radius-button)] border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] hover:bg-[var(--color-surface)] lg:inline-flex"
              aria-label="Show list"
            >
              <List size={16} />
            </button>
          ) : null}
          {onClose ? (
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-8 w-8 items-center justify-center rounded-[var(--radius-button)] border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] hover:bg-[var(--color-surface)]"
              aria-label="Close detail"
            >
              <X size={16} />
            </button>
          ) : null}
        </div>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto px-4 py-5 lg:px-6">
        <div className="mb-5">
          <div className="flex flex-wrap items-start gap-3">
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">
                  {localRequest.title}
                </h2>
                <DqStatusTag status={localRequest.status} />
              </div>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">{customerLabel}</p>
            </div>
          </div>
          {saveError ? (
            <p className="mt-2 text-sm text-[var(--color-danger-text)]">{saveError}</p>
          ) : null}
        </div>

        <div className="mb-6 rounded-[var(--radius-card)] border border-[var(--color-border-subtle)] bg-white px-4 py-2 shadow-[var(--shadow-sm)]">
          <DqRequestStatusStepper request={localRequest} />
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="h-auto w-full justify-start rounded-none border-b border-[var(--color-border-subtle)] bg-transparent p-0">
            <TabsTrigger
              value="overview"
              className="rounded-none border-b-2 border-transparent px-0 pb-3 pt-1 text-sm data-[state=active]:border-[var(--color-text-primary)] data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="activity"
              className="ml-6 rounded-none border-b-2 border-transparent px-0 pb-3 pt-1 text-sm data-[state=active]:border-[var(--color-text-primary)] data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              Activity
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-0">
            <div className="grid gap-4 lg:grid-cols-[minmax(0,1.4fr)_minmax(240px,0.8fr)]">
              <div className="rounded-[var(--radius-card)] border border-[var(--color-border-subtle)] bg-white px-4 py-1 shadow-[var(--shadow-sm)]">
                <p className="border-b border-[var(--color-border-subtle)] py-3 text-[11px] font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                  Request
                </p>
                <DetailField label="Reference">
                  <span className="font-mono text-xs">{localRequest.referenceNo}</span>
                </DetailField>
                <DetailField label="Title">{localRequest.title}</DetailField>
                <DetailField label="Service Type">
                  <ServiceTypeBadge type={localRequest.serviceType} />
                </DetailField>
                <DetailField label="Status">
                  <Select
                    value={localRequest.status}
                    onValueChange={handleStatusChange}
                    disabled={isSaving}
                  >
                    <SelectTrigger className="h-9 w-full max-w-[220px] border-[var(--color-border-subtle)] bg-white text-sm">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {EDITABLE_STATUSES.map((status) => (
                        <SelectItem key={status} value={status}>
                          {REQUEST_STATUS_LABELS[status]}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </DetailField>
                <DetailField label="Requestor">{customerLabel}</DetailField>
                <DetailField label="Email">{localRequest.submitterEmail}</DetailField>
                {localRequest.customerOrganisation ? (
                  <DetailField label="Organisation">
                    {localRequest.customerOrganisation}
                  </DetailField>
                ) : null}
                <DetailField label="Submitted">
                  {formatRequestDate(localRequest.submittedAt)}
                </DetailField>
                <DetailField label="Last Updated">
                  {formatRequestDate(localRequest.updatedAt)}
                </DetailField>
                {marketplaceHref ? (
                  <DetailField label="About this service">
                    <Link
                      href={marketplaceHref}
                      className="font-medium text-[var(--color-primary)] hover:underline"
                    >
                      View on marketplace
                    </Link>
                  </DetailField>
                ) : null}
                <DetailField label="Additional details">
                  <p className="whitespace-pre-wrap text-[var(--color-text-secondary)]">
                    {additionalDetails ?? "No additional details provided."}
                  </p>
                </DetailField>
              </div>

              <div className="space-y-4">
                <SideCard title="Assignment">
                  <SideField label="Owner">
                    <div className="space-y-2">
                      <Select
                        value={selectedOwnerEmail}
                        onValueChange={handleOwnerChange}
                        disabled={isSaving || staffLoading}
                      >
                        <SelectTrigger className="h-9 w-full border-[var(--color-border-subtle)] bg-white text-sm">
                          <span className="truncate">{ownerSelectLabel}</span>
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value={UNASSIGNED_OWNER_VALUE}>Unassigned</SelectItem>
                          {legacyOwnerLabel ? (
                            <SelectItem value={LEGACY_OWNER_VALUE} disabled>
                              {legacyOwnerLabel}
                            </SelectItem>
                          ) : null}
                          {staffUsers.map((staffUser) => (
                            <SelectItem key={staffUser.id} value={staffUser.email}>
                              {staffUser.displayName}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {staffError ? (
                        <p className="text-xs text-[var(--color-danger-text)]">{staffError}</p>
                      ) : staffSource === "fallback" ? (
                        <p className="text-xs text-[var(--color-text-muted)]">
                          Using temporary staff list until directory sync is enabled.
                        </p>
                      ) : null}
                      <button
                        type="button"
                        onClick={handleAssignToMe}
                        disabled={isSaving || staffLoading}
                        className="text-xs font-medium text-[var(--color-primary)] hover:underline disabled:opacity-50"
                      >
                        Assign to me
                      </button>
                    </div>
                  </SideField>
                </SideCard>
                <SideCard title="Details">
                  <SideField label="Submitted">
                    {formatRequestDate(localRequest.submittedAt)}
                  </SideField>
                  <SideField label="Updated">
                    {formatRequestDate(localRequest.updatedAt)}
                  </SideField>
                </SideCard>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="activity" className="mt-0">
            <div className="rounded-[var(--radius-card)] border border-[var(--color-border-subtle)] bg-white p-4 shadow-[var(--shadow-sm)]">
              <DqRequestActivityTimeline entries={localRequest.timeline} />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

interface DqRequestListItemProps {
  request: DqServiceRequestListItem;
  selected: boolean;
  onSelect: () => void;
}

export function DqRequestListItemRow({
  request,
  selected,
  onSelect,
}: DqRequestListItemProps) {
  const customerLabel = getDqRequestCustomerLabel(request);

  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        "w-full rounded-[var(--radius-card)] border px-3 py-3 text-left transition",
        selected
          ? "border-[var(--color-text-primary)] bg-white shadow-[var(--shadow-sm)]"
          : "border-transparent bg-transparent hover:border-[var(--color-border-subtle)] hover:bg-white",
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-[var(--color-text-primary)]">
            {request.title}
          </p>
          <p className="mt-0.5 truncate text-xs text-[var(--color-text-muted)]">
            {customerLabel}
          </p>
        </div>
        <DqStatusTag status={request.status} />
      </div>
    </button>
  );
}
