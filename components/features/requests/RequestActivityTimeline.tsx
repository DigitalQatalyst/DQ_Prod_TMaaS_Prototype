import type { RequestTimelineEntry } from "@/lib/types/requests";
import { formatRequestDateTime } from "@/lib/requests/format";
import { cn } from "@/lib/utils";

interface RequestActivityTimelineProps {
  entries: RequestTimelineEntry[];
}

export function RequestActivityTimeline({ entries }: RequestActivityTimelineProps) {
  const sorted = [...entries].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return (
    <div className="space-y-0">
      {sorted.map((entry, index) => (
        <div key={entry.id} className="relative flex gap-3 pb-6 last:pb-0">
          {index < sorted.length - 1 && (
            <span
              className="absolute left-[7px] top-4 h-[calc(100%-8px)] w-px bg-navy-100"
              aria-hidden
            />
          )}
          <span
            className={cn(
              "relative z-10 mt-1 h-3.5 w-3.5 shrink-0 rounded-full border-2",
              index === 0
                ? "border-[#FB5535] bg-[#FB5535]"
                : "border-navy-200 bg-white"
            )}
            aria-hidden
          />
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-baseline gap-2">
              <p className="text-sm font-semibold text-navy-950">{entry.title}</p>
              {index === 0 && (
                <span className="rounded-full bg-[#FB5535]/10 px-2 py-0.5 text-[10px] font-semibold text-[#FB5535]">
                  Latest
                </span>
              )}
            </div>
            <p className="text-xs text-navy-950/50">{formatRequestDateTime(entry.createdAt)}</p>
            <p className="mt-1 text-sm text-navy-950/70">{entry.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
