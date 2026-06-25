"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface RequestsToolbarProps {
  search: string;
  onSearchChange: (value: string) => void;
  totalCount: number;
}

/** DWS.01 RequestListPage toolbar — search + result count. */
export function RequestsToolbar({ search, onSearchChange, totalCount }: RequestsToolbarProps) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="relative w-full max-w-xs">
        <Search
          size={16}
          strokeWidth={1.5}
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]"
        />
        <Input
          type="search"
          placeholder="Search requests…"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="h-10 rounded-[var(--radius-button)] border-[var(--color-border)] bg-white pl-9 text-sm"
        />
      </div>
      <span className="text-xs text-[var(--color-text-muted)]">
        {totalCount} result{totalCount === 1 ? "" : "s"}
      </span>
    </div>
  );
}
