"use client";
import * as React from "react";
import { Button, Checkbox } from "@dbp/ui";
import type { StatusColumnFilter } from "../../types";
import { FilterPopoverPanel } from "./ColumnHeader";
import { RequestStatusBadge, SlaIndicator, HealthIndicator, PriorityIndicator } from "../indicators";

interface StatusColumnFilterPopoverProps {
  field: string;
  values: string[];
  current: StatusColumnFilter | undefined;
  onApply: (filter: StatusColumnFilter | null) => void;
  onClose: () => void;
}

function StatusPreview({ field, value }: { field: string; value: string }) {
  if (field === "status") return <RequestStatusBadge status={value} />;
  if (field === "sla_status") return <SlaIndicator sla={value} />;
  if (field === "health") return <HealthIndicator health={value} />;
  if (field === "priority") return <PriorityIndicator priority={value} />;
  return <span className="text-xs">{value}</span>;
}

export function StatusColumnFilterPopover({
  field,
  values,
  current,
  onApply,
  onClose,
}: StatusColumnFilterPopoverProps) {
  const unique = React.useMemo(
    () => [...new Set(values.filter(Boolean))].sort(),
    [values],
  );
  const [selected, setSelected] = React.useState<Set<string>>(
    () => new Set(current?.values ?? unique),
  );

  function toggle(v: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(v)) next.delete(v);
      else next.add(v);
      return next;
    });
  }

  function selectAll() {
    setSelected(new Set(unique));
  }

  function clear() {
    onApply(null);
    onClose();
  }

  function apply() {
    if (selected.size === 0 || selected.size === unique.length) {
      onApply(null);
    } else {
      onApply({ type: "status", values: [...selected] });
    }
    onClose();
  }

  return (
    <FilterPopoverPanel onClose={onClose}>
      <div className="max-h-48 space-y-2 overflow-y-auto">
        {unique.map((v) => (
          <label key={v} className="flex cursor-pointer items-center gap-2">
            <Checkbox checked={selected.has(v)} onCheckedChange={() => toggle(v)} />
            <StatusPreview field={field} value={v} />
          </label>
        ))}
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        <Button type="button" variant="ghost" size="sm" onClick={selectAll}>
          Select all
        </Button>
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
