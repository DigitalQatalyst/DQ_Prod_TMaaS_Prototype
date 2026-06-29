"use client";

import { useMemo } from "react";
import type { CustomerRequestTabKey } from "@/lib/requests/customerRequestTabs";
import { SegmentedControl } from "@/components/foundation/workspace-ui/SegmentedControl";
import { FilterBar } from "@/components/foundation/workspace-ui/FilterBar";

interface RequestsListToolbarProps {
  activeTab: CustomerRequestTabKey;
  onTabChange: (tab: CustomerRequestTabKey) => void;
  tabCounts: Partial<Record<CustomerRequestTabKey, number>>;
  tabs: { key: CustomerRequestTabKey; label: string }[];
  search: string;
  onSearchChange: (value: string) => void;
  visibleCount: number;
  totalCount: number;
}

function formatRecordCount(n: number): string {
  return n.toLocaleString("en-US");
}

/** DWS.01 EntityList toolbar — filter pills, search, and record counter on one row. */
export function RequestsListToolbar({
  activeTab,
  onTabChange,
  tabCounts,
  tabs,
  search,
  onSearchChange,
  visibleCount,
  totalCount,
}: RequestsListToolbarProps) {
  const tabOptions = useMemo(
    () =>
      tabs.map((tab) => ({
        value: tab.key,
        label: tab.label,
        ...(tabCounts[tab.key] !== undefined ? { count: tabCounts[tab.key] } : {}),
      })),
    [tabs, tabCounts]
  );

  return (
    <div className="relative z-[1] flex flex-wrap items-center gap-3" data-testid="tab-strip">
      <SegmentedControl
        options={tabOptions}
        value={activeTab}
        onChange={(key) => onTabChange(key as CustomerRequestTabKey)}
        name="requests-list-tabs"
      />
      <FilterBar
        searchValue={search}
        onSearchChange={onSearchChange}
        searchPlaceholder="Search requests…"
      />
      <span
        className="ml-auto font-mono text-[10.5px] uppercase tracking-[0.18em] text-[var(--color-text-muted)]"
        data-testid="record-counter"
      >
        {formatRecordCount(visibleCount)} OF {formatRecordCount(totalCount)} RECORDS
      </span>
    </div>
  );
}
