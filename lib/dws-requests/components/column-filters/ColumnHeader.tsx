"use client";
import * as React from "react";
import { Filter, ArrowUp, ArrowDown, ArrowUpDown } from "lucide-react";
import type { ColumnFilter, SortState } from "../../types";

interface ColumnHeaderProps {
  label: string;
  field: string;
  sortable?: boolean;
  filterable?: boolean;
  filterActive?: boolean;
  sort: SortState | null;
  onSort: (field: string, direction: "asc" | "desc" | null) => void;
  filterOpen?: boolean;
  onFilterOpenChange?: (open: boolean) => void;
  filterPopover: React.ReactNode;
}

export function ColumnHeader({
  label,
  field,
  sortable,
  filterable,
  filterActive,
  sort,
  onSort,
  filterOpen: controlledOpen,
  onFilterOpenChange,
  filterPopover,
}: ColumnHeaderProps) {
  const [internalOpen, setInternalOpen] = React.useState(false);
  const open = controlledOpen ?? internalOpen;
  const setOpen = onFilterOpenChange ?? setInternalOpen;
  const ref = React.useRef<HTMLTableCellElement>(null);

  React.useEffect(() => {
    if (!open) return;
    function onDoc(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open, setOpen]);

  const isSorted = sort?.field === field;

  function cycleSort() {
    if (!sortable) return;
    if (!isSorted) onSort(field, "asc");
    else if (sort?.direction === "asc") onSort(field, "desc");
    else onSort(field, null);
  }

  return (
    <th
      ref={ref}
      className="relative whitespace-nowrap px-3 py-2 text-left text-[10px] font-semibold uppercase tracking-wide text-[var(--color-text-muted)]"
    >
      <div className="flex items-center gap-1">
        <span>{label}</span>
        {sortable && (
          <button
            type="button"
            onClick={cycleSort}
            className="rounded p-0.5 hover:bg-[var(--color-surface)]"
            aria-label={`Sort ${label}`}
          >
            {isSorted ? (
              sort?.direction === "asc" ? (
                <ArrowUp className="h-3 w-3 text-[var(--color-secondary)]" />
              ) : (
                <ArrowDown className="h-3 w-3 text-[var(--color-secondary)]" />
              )
            ) : (
              <ArrowUpDown className="h-3 w-3 opacity-40" />
            )}
          </button>
        )}
        {filterable && (
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className={`rounded p-0.5 hover:bg-[var(--color-surface)] ${
              filterActive ? "text-[var(--color-secondary)]" : "opacity-50"
            }`}
            aria-label={`Filter ${label}`}
          >
            <Filter className="h-3 w-3" />
          </button>
        )}
      </div>
      {open && filterPopover}
    </th>
  );
}

export function FilterPopoverPanel({ children, onClose }: { children: React.ReactNode; onClose: () => void }) {
  return (
    <div
      className="absolute left-0 top-full z-50 mt-1 min-w-[220px] rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-2)] p-3 shadow-lg"
      onClick={(e) => e.stopPropagation()}
    >
      {children}
      <div className="mt-3 flex justify-end gap-2 border-t border-[var(--color-border)] pt-2">
        <button
          type="button"
          className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export type { ColumnFilter };
