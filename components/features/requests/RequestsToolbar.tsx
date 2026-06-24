"use client";

import { Calendar, Filter, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface RequestsToolbarProps {
  search: string;
  onSearchChange: (value: string) => void;
}

export function RequestsToolbar({ search, onSearchChange }: RequestsToolbarProps) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="relative min-w-[240px] flex-1">
        <Search
          size={16}
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]"
        />
        <Input
          type="search"
          placeholder="Search requests by name, ID or service type..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="h-10 rounded-[var(--radius-button)] border-[var(--color-border)] bg-white pl-9 text-sm"
        />
      </div>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="gap-2 rounded-[var(--radius-button)] border-[var(--color-border)] text-[var(--color-text-primary)]"
          >
            <Filter size={16} />
            Filter
          </Button>
        </PopoverTrigger>
        <PopoverContent align="start" className="w-64">
          <p className="text-sm text-muted-foreground">
            Status and date filters will be available when request data is connected to the database.
          </p>
        </PopoverContent>
      </Popover>
      <Button
        variant="outline"
        size="icon"
        className="shrink-0 rounded-[var(--radius-button)] border-[var(--color-border)]"
        aria-label="Filter by date"
      >
        <Calendar size={16} />
      </Button>
    </div>
  );
}
