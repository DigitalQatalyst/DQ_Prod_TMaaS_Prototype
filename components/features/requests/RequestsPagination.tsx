"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface RequestsPaginationProps {
  page: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

/** DWS.01 Pagination pattern with workspace tokens. */
export function RequestsPagination({
  page,
  pageSize,
  totalCount,
  totalPages,
  onPageChange,
}: RequestsPaginationProps) {
  const from = totalCount === 0 ? 0 : (page - 1) * pageSize + 1;
  const to = Math.min(page * pageSize, totalCount);

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
      <p className="text-sm text-[var(--color-text-muted)]">
        Showing {from} to {to} of {totalCount} request{totalCount === 1 ? "" : "s"}
      </p>
      <div className="flex items-center gap-2">
        <button
          type="button"
          className="inline-flex h-8 w-8 items-center justify-center rounded-[var(--radius-button)] border border-[var(--color-border)] bg-white text-[var(--color-text-secondary)] transition hover:bg-[var(--color-surface)] disabled:opacity-40"
          disabled={page <= 1}
          onClick={() => onPageChange(page - 1)}
          aria-label="Previous page"
        >
          <ChevronLeft size={16} strokeWidth={1.5} />
        </button>
        <span className="flex h-8 min-w-8 items-center justify-center rounded-[var(--radius-button)] border border-[var(--color-border)] bg-white px-2 text-sm font-medium text-[var(--color-text-primary)]">
          {page}
        </span>
        <button
          type="button"
          className="inline-flex h-8 w-8 items-center justify-center rounded-[var(--radius-button)] border border-[var(--color-border)] bg-white text-[var(--color-text-secondary)] transition hover:bg-[var(--color-surface)] disabled:opacity-40"
          disabled={page >= totalPages}
          onClick={() => onPageChange(page + 1)}
          aria-label="Next page"
        >
          <ChevronRight size={16} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}
