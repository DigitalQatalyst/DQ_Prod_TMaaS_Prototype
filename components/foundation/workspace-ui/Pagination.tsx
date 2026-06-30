import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

function getPageWindow(current: number, total: number): Array<number | "ellipsis"> {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

  const window: Array<number | "ellipsis"> = [1];

  if (current > 3) window.push("ellipsis");
  for (let p = Math.max(2, current - 1); p <= Math.min(total - 1, current + 1); p++) {
    window.push(p);
  }
  if (current < total - 2) window.push("ellipsis");

  window.push(total);
  return window;
}

const sharedPageBtn = cn(
  "flex h-8 min-w-[32px] items-center justify-center rounded-[var(--radius-button)]",
  "border border-[var(--color-border)]",
  "text-xs font-semibold",
  "transition-colors motion-safe:transition-all",
  "focus-visible:outline-none focus-visible:[box-shadow:var(--focus-ring-navy)]",
  "disabled:pointer-events-none disabled:opacity-50"
);

interface PageButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

function PageButton({ active, className, ...props }: PageButtonProps) {
  return (
    <button
      aria-current={active ? "page" : undefined}
      className={cn(
        sharedPageBtn,
        active
          ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white"
          : "bg-white text-[var(--color-text-secondary)] hover:border-[var(--color-primary)] hover:bg-[var(--color-navy-50)] hover:text-[var(--color-text-primary)]",
        className
      )}
      {...props}
    />
  );
}

function Ellipsis({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "flex h-8 min-w-[32px] items-center justify-center text-[var(--color-text-muted)]",
        className
      )}
    >
      <MoreHorizontal size={14} strokeWidth={1.5} />
    </span>
  );
}

export interface PaginationProps {
  page: number;
  pageSize: number;
  total: number;
  onPageChange: (page: number) => void;
  showCaption?: boolean;
  className?: string;
}

/** DWS.01 @dbp/ui Pagination — numbered pages with optional caption. */
export function Pagination({
  page,
  pageSize,
  total,
  onPageChange,
  showCaption = false,
  className,
}: PaginationProps) {
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const pages = getPageWindow(page, totalPages);
  const hasPrev = page > 1;
  const hasNext = page < totalPages;

  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)} aria-label="Pagination">
      <PageButton onClick={() => onPageChange(page - 1)} disabled={!hasPrev} aria-label="Previous page">
        <ChevronLeft size={14} strokeWidth={1.5} />
      </PageButton>

      {pages.map((p, i) =>
        p === "ellipsis" ? (
          <Ellipsis key={`ellipsis-${i}`} />
        ) : (
          <PageButton
            key={p}
            active={p === page}
            onClick={() => p !== page && onPageChange(p)}
          >
            {p}
          </PageButton>
        )
      )}

      <PageButton onClick={() => onPageChange(page + 1)} disabled={!hasNext} aria-label="Next page">
        <ChevronRight size={14} strokeWidth={1.5} />
      </PageButton>

      {showCaption && (
        <span
          className="ml-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-muted)]"
          aria-live="polite"
        >
          PAGE {page} OF {totalPages}
        </span>
      )}
    </div>
  );
}
