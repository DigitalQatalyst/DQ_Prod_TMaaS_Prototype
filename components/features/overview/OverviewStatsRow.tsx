import type { CustomerOverviewStats } from "@/lib/hooks/useCustomerOverviewStats";
import { cn } from "@/lib/utils";

interface OverviewStatsRowProps {
  stats: CustomerOverviewStats;
  className?: string;
}

type StatTone = "primary" | "success" | "info";

function toneClass(tone: StatTone): string {
  switch (tone) {
    case "success":
      return "text-[var(--color-success)]";
    case "info":
      return "text-[var(--color-info-text)]";
    case "primary":
    default:
      return "text-[var(--color-primary)]";
  }
}

function StatTile({
  label,
  value,
  subLabel,
  tone = "primary",
}: {
  label: string;
  value: string | number;
  subLabel?: string;
  tone?: StatTone;
}) {
  return (
    <div className="rounded-[var(--radius-card)] border border-[var(--color-border-subtle)] bg-[var(--color-surface-2)] px-5 py-4 shadow-[var(--shadow-sm)]">
      <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--color-text-secondary)]">
        {label}
      </p>
      <p
        className={cn(
          "mt-2 font-mono text-3xl font-bold tabular-nums leading-none",
          toneClass(tone)
        )}
      >
        {value}
      </p>
      {subLabel ? (
        <p className="mt-1 text-xs text-[var(--color-text-muted)]">{subLabel}</p>
      ) : null}
    </div>
  );
}

const STAT_TILES = [
  {
    key: "submitted" as const,
    label: "Requests submitted",
    tone: "primary" as const,
  },
  {
    key: "inProgress" as const,
    label: "In Progress",
    tone: "info" as const,
  },
  {
    key: "closed" as const,
    label: "Closed requests",
    tone: "success" as const,
  },
];

export function OverviewStatsRow({ stats, className }: OverviewStatsRowProps) {
  return (
    <div className={cn("grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {STAT_TILES.map(({ key, label, tone }) => {
        const stat = stats[key];
        return (
          <StatTile key={key} label={label} value={stat.value} tone={tone} subLabel={stat.hint} />
        );
      })}
    </div>
  );
}
