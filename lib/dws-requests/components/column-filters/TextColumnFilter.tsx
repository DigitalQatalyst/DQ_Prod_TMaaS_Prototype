"use client";
import * as React from "react";
import { Button, Checkbox, Input } from "@dbp/ui";
import type { TextColumnFilter } from "../../types";
import { FilterPopoverPanel } from "./ColumnHeader";

interface TextColumnFilterPopoverProps {
  values: string[];
  current: TextColumnFilter | undefined;
  onApply: (filter: TextColumnFilter | null) => void;
  onClose: () => void;
}

export function TextColumnFilterPopover({
  values,
  current,
  onApply,
  onClose,
}: TextColumnFilterPopoverProps) {
  const unique = React.useMemo(
    () => [...new Set(values.map((v) => v || "—"))].sort((a, b) => a.localeCompare(b)),
    [values],
  );
  const [search, setSearch] = React.useState("");
  const [selected, setSelected] = React.useState<Set<string>>(
    () => new Set(current?.values ?? unique),
  );

  const visible = unique.filter((v) => v.toLowerCase().includes(search.toLowerCase()));

  function toggle(v: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(v)) next.delete(v);
      else next.add(v);
      return next;
    });
  }

  function selectAll() {
    setSelected(new Set(visible));
  }

  function clear() {
    onApply(null);
    onClose();
  }

  function apply() {
    if (selected.size === 0 || selected.size === unique.length) {
      onApply(null);
    } else {
      onApply({ type: "text", values: [...selected] });
    }
    onClose();
  }

  return (
    <FilterPopoverPanel onClose={onClose}>
      <Input
        placeholder="Search values…"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-2 h-8 text-xs"
      />
      <div className="max-h-48 space-y-1 overflow-y-auto">
        {visible.map((v) => (
          <label key={v} className="flex cursor-pointer items-center gap-2 text-xs">
            <Checkbox checked={selected.has(v)} onCheckedChange={() => toggle(v)} />
            <span className="truncate">{v}</span>
          </label>
        ))}
      </div>
      <div className="mt-2 flex flex-wrap gap-2 pt-2">
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
