"use client";
import * as React from "react";
import {
  SectionCard,
  Tabs,
  TabsList,
  TabsTrigger,
  Input,
  Button,
  Pagination,
  EmptyState,
  LoadingSkeleton,
  ErrorCard,
} from "@dbp/ui";
import { RequestRecordsTable } from "./RequestRecordsTable";
import { useRequestTableState } from "../use-request-table-state";
import { getListConfig } from "../configs/list-configs.client";
import type { RequestContext } from "../types";

export function RequestListPage({ variant }: { variant: RequestContext }) {
  const config = React.useMemo(() => getListConfig(variant), [variant]);
  const state = useRequestTableState(config);

  const {
    loading,
    error,
    reload,
    activeTab,
    setActiveTab,
    search,
    setSearch,
    columnFilters,
    setColumnFilter,
    clearAllFilters,
    hasActiveFilters,
    sort,
    setSort,
    page,
    setPage,
    pageSize,
    setPageSize,
    filtered,
    paged,
    totalFiltered,
    tabCounts,
    rows,
  } = state;

  if (error === "forbidden") {
    return <ErrorCard message="You do not have permission to view these service requests." />;
  }

  if (error === "failed") {
    return <ErrorCard message="Could not load requests." onRetry={reload} />;
  }

  return (
    <div className="space-y-4">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="flex flex-wrap gap-1">
          {config.tabs.map((tab) => (
            <TabsTrigger key={tab.key} value={tab.key} className="text-xs">
              {tab.label}
              {rows && tabCounts[tab.key] !== undefined && (
                <span className="ml-1.5 rounded-full bg-[var(--color-surface)] px-1.5 py-0.5 text-[10px]">
                  {tabCounts[tab.key]}
                </span>
              )}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="flex flex-wrap items-center gap-3">
        <Input
          placeholder="Search requests…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-xs"
        />
        {hasActiveFilters && (
          <Button type="button" variant="ghost" size="sm" onClick={clearAllFilters}>
            Clear All Filters
          </Button>
        )}
        <span className="text-xs text-[var(--color-text-muted)]">
          {loading ? "Loading…" : `${totalFiltered} result${totalFiltered === 1 ? "" : "s"}`}
        </span>
      </div>

      <SectionCard title="">
        {loading ? (
          <LoadingSkeleton rows={6} />
        ) : totalFiltered === 0 ? (
          <EmptyState
            title={rows?.length === 0 ? "No requests yet" : "No matching requests"}
            description={
              rows?.length === 0
                ? "Submit a service request from the marketplace to get started."
                : "Try adjusting your filters or search."
            }
          />
        ) : (
          <RequestRecordsTable
            config={config}
            rows={paged}
            allRows={filtered}
            columnFilters={columnFilters}
            sort={sort}
            onColumnFilter={setColumnFilter}
            onSort={(field, direction) => {
              if (direction === null) setSort(null);
              else setSort({ field, direction });
            }}
          />
        )}
      </SectionCard>

      {!loading && totalFiltered > 0 && (
        <Pagination
          page={page}
          pageSize={pageSize}
          total={totalFiltered}
          onPageChange={setPage}
          onPageSizeChange={setPageSize}
        />
      )}
    </div>
  );
}
