"use client";

import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

export interface FilterBarProps {
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  searchPlaceholder?: string;
  className?: string;
}

/** DWS.01 @dbp/ui FilterBar — compact search input for list toolbars. */
export function FilterBar({
  searchValue,
  onSearchChange,
  searchPlaceholder = "Search…",
  className,
}: FilterBarProps) {
  if (onSearchChange === undefined) return null;

  return (
    <div className={cn("relative shrink-0", className)}>
      <Search
        size={15}
        strokeWidth={1.5}
        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]"
      />
      <Input
        type="text"
        value={searchValue ?? ""}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder={searchPlaceholder}
        className="h-9 w-full border-[var(--color-border)] bg-white pl-9 text-sm sm:w-56"
      />
    </div>
  );
}
