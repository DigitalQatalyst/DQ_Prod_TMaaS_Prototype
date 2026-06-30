"use client";

import type { CustomerRequest, RequestStatus } from "@/lib/types/requests";
import {
  DQ_FLOW_STAGE_ORDER,
  getDqFlowStageIndex,
  getDqFlowStageLabel,
} from "@/lib/requests/dqRequestFlow";
import { formatRequestDate } from "@/lib/requests/format";
import { cn } from "@/lib/utils";

function getStageDate(request: CustomerRequest, stageKey: RequestStatus): string | undefined {
  if (stageKey === "submitted") return formatRequestDate(request.submittedAt);
  const entry = request.timeline.find((e) => e.toStatus === stageKey);
  return entry ? formatRequestDate(entry.createdAt) : undefined;
}

function connectorClass(completed: boolean) {
  return completed ? "bg-[#030F35]" : "bg-[var(--color-border-subtle)]";
}

interface DqRequestStatusStepperProps {
  request: CustomerRequest;
}

export function DqRequestStatusStepper({ request }: DqRequestStatusStepperProps) {
  const currentIdx = getDqFlowStageIndex(request.status);
  const lastIndex = DQ_FLOW_STAGE_ORDER.length - 1;

  return (
    <div className="w-full py-3">
      <div className="grid grid-cols-4">
        {DQ_FLOW_STAGE_ORDER.map((stageKey, index) => {
          const state =
            index < currentIdx ? "completed" : index === currentIdx ? "current" : "upcoming";
          const label = getDqFlowStageLabel(stageKey);
          const date = getStageDate(request, stageKey);
          const leftSegmentCompleted = index > 0 && index - 1 < currentIdx;
          const rightSegmentCompleted = index < lastIndex && index < currentIdx;

          return (
            <div key={stageKey} className="flex min-w-0 items-start">
              <div
                className={cn(
                  "mt-[18px] h-0.5 min-w-0 flex-1",
                  index === 0 ? "invisible" : connectorClass(leftSegmentCompleted),
                )}
                aria-hidden
              />
              <div className="flex shrink-0 flex-col items-center px-1 text-center">
                <div
                  className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold transition-all",
                    state === "completed" && "bg-[#030F35] text-white",
                    state === "current" && "bg-[#FB5535] text-white",
                    state === "upcoming" &&
                      "bg-[var(--color-navy-50)] text-[var(--color-text-muted)]",
                  )}
                >
                  {index + 1}
                </div>
                <p
                  className={cn(
                    "mt-2 text-xs font-medium leading-tight",
                    state === "current"
                      ? "text-[#FB5535]"
                      : state === "completed"
                        ? "text-[var(--color-text-primary)]"
                        : "text-[var(--color-text-muted)]",
                  )}
                >
                  {label}
                </p>
                {date ? (
                  <p className="mt-0.5 text-[10px] text-[var(--color-text-muted)]">{date}</p>
                ) : null}
              </div>
              <div
                className={cn(
                  "mt-[18px] h-0.5 min-w-0 flex-1",
                  index === lastIndex ? "invisible" : connectorClass(rightSegmentCompleted),
                )}
                aria-hidden
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
