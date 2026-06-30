"use client";
import * as React from "react";
import { Button, Input } from "@dbp/ui";
import type { DateColumnFilter } from "../../types";
import { FilterPopoverPanel } from "./ColumnHeader";

interface DateColumnFilterPopoverProps {
  current: DateColumnFilter | undefined;
  onApply: (filter: DateColumnFilter | null) => void;
  onClose: () => void;
}

export function DateColumnFilterPopover({ current, onApply, onClose }: DateColumnFilterPopoverProps) {
  const [mode, setMode] = React.useState<DateColumnFilter["mode"]>(current?.mode ?? "between");
  const [from, setFrom] = React.useState(current?.from ?? "");
  const [to, setTo] = React.useState(current?.to ?? "");
  const [exact, setExact] = React.useState(current?.exact ?? "");

  function clear() {
    onApply(null);
    onClose();
  }

  function apply() {
    if (mode === "exact" && exact) {
      onApply({ type: "date", mode, exact });
    } else if (mode === "before" && from) {
      onApply({ type: "date", mode, from });
    } else if (mode === "after" && from) {
      onApply({ type: "date", mode, from });
    } else if (mode === "between" && from && to) {
      onApply({ type: "date", mode, from, to });
    } else {
      onApply(null);
    }
    onClose();
  }

  return (
    <FilterPopoverPanel onClose={onClose}>
      <div className="space-y-2 text-xs">
        <select
          value={mode}
          onChange={(e) => setMode(e.target.value as DateColumnFilter["mode"])}
          className="w-full rounded border border-[var(--color-border)] bg-[var(--color-surface-2)] px-2 py-1.5 text-xs"
        >
          <option value="before">Before</option>
          <option value="after">After</option>
          <option value="between">Between</option>
          <option value="exact">Exact date</option>
        </select>
        {mode === "exact" ? (
          <Input type="date" value={exact} onChange={(e) => setExact(e.target.value)} className="h-8 text-xs" />
        ) : mode === "between" ? (
          <>
            <Input type="date" value={from} onChange={(e) => setFrom(e.target.value)} className="h-8 text-xs" />
            <Input type="date" value={to} onChange={(e) => setTo(e.target.value)} className="h-8 text-xs" />
          </>
        ) : (
          <Input type="date" value={from} onChange={(e) => setFrom(e.target.value)} className="h-8 text-xs" />
        )}
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        <Button type="button" variant="ghost" size="sm" onClick={clear}>
          Clear
        </Button>
        <Button type="button" size="sm" onClick={apply}>
          Apply
        </Button>
      </div>
    </FilterPopoverPanel>
  );
}
