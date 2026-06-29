import type { RequestStatus } from "@/lib/types/requests";
import { cn } from "@/lib/utils";

interface DqStatusTagProps {
  status: RequestStatus;
  className?: string;
}

/** Lowercase snake_case status pill used in DQ workspace headers and list rows. */
export function DqStatusTag({ status, className }: DqStatusTagProps) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center rounded-md bg-[var(--color-surface)] px-2 py-0.5 font-mono text-[11px] text-[var(--color-text-muted)] ring-1 ring-[var(--color-border-subtle)]",
        className,
      )}
    >
      {status}
    </span>
  );
}
