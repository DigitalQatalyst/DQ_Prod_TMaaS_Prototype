"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface SegmentOption {
  value: string;
  label: React.ReactNode;
  ariaLabel?: string;
  count?: number;
}

export interface SegmentedControlProps {
  options: SegmentOption[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
  name?: string;
}

/** DWS.01 @dbp/ui SegmentedControl — pill filter tabs with optional count badges. */
export function SegmentedControl({
  options,
  value,
  onChange,
  className,
  name,
}: SegmentedControlProps) {
  const groupId = React.useId();
  const groupName = name ?? groupId;

  return (
    <div
      role="radiogroup"
      aria-label={groupName}
      className={cn(
        "inline-flex h-10 items-center gap-0.5",
        "rounded-[var(--radius-pill)]",
        "border border-[var(--color-border-subtle)]",
        "bg-[var(--color-surface)]",
        "p-0.5",
        className
      )}
    >
      {options.map((opt) => {
        const isActive = opt.value === value;
        return (
          <button
            key={opt.value}
            type="button"
            role="radio"
            aria-checked={isActive}
            aria-label={opt.ariaLabel}
            onClick={() => onChange(opt.value)}
            className={cn(
              "flex h-full items-center gap-1.5 rounded-[var(--radius-pill)] px-3",
              "text-xs font-semibold",
              "transition-all duration-150 motion-safe:transition-all",
              "focus-visible:outline-none focus-visible:[box-shadow:var(--focus-ring-navy)]",
              isActive
                ? "bg-white text-[var(--color-text-primary)] shadow-sm"
                : "text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
            )}
          >
            {opt.label}
            {opt.count !== undefined && (
              <span
                className={cn(
                  "inline-flex h-[17px] min-w-[17px] items-center justify-center rounded-full px-1 text-[10px] font-bold leading-none tabular-nums",
                  isActive
                    ? "bg-[color-mix(in_srgb,var(--color-primary)_12%,transparent)] text-[var(--color-text-primary)]"
                    : "bg-[var(--color-surface-raised)] text-[var(--color-text-muted)]"
                )}
              >
                {opt.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
