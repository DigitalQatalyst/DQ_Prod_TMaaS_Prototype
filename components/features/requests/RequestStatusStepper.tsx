import { Check, FileText, Play, Search } from "lucide-react";
import type { CustomerRequest, RequestStatus } from "@/lib/types/requests";
import { STEPPER_STAGES } from "@/lib/types/requests";
import { formatRequestDate } from "@/lib/requests/format";
import { cn } from "@/lib/utils";

interface RequestStatusStepperProps {
  request: CustomerRequest;
}

const STAGE_ORDER: RequestStatus[] = ["submitted", "under_review", "in_progress", "closed"];

function getCurrentStageIndex(status: RequestStatus): number {
  if (status === "cancelled") {
    const lastTimeline = [...STAGE_ORDER].reverse().find((s) =>
      STEPPER_STAGES.some((stage) => stage.key === s)
    );
    return lastTimeline ? STAGE_ORDER.indexOf("under_review") : 0;
  }
  const idx = STAGE_ORDER.indexOf(status);
  return idx >= 0 ? idx : 0;
}

const STAGE_ICONS = {
  submitted: FileText,
  under_review: Search,
  in_progress: Play,
  closed: Check,
} as const;

function getStageDate(request: CustomerRequest, stageKey: RequestStatus): string | undefined {
  if (stageKey === "submitted") return formatRequestDate(request.submittedAt);
  const entry = request.timeline.find((e) => e.toStatus === stageKey);
  return entry ? formatRequestDate(entry.createdAt) : undefined;
}

export function RequestStatusStepper({ request }: RequestStatusStepperProps) {
  const currentIdx = getCurrentStageIndex(request.status);

  return (
    <div className="w-full py-2">
      <div className="flex items-start">
        {STEPPER_STAGES.map((stage, index) => {
          const state =
            index < currentIdx ? "completed" : index === currentIdx ? "current" : "upcoming";
          const Icon = STAGE_ICONS[stage.key as keyof typeof STAGE_ICONS];
          const date = getStageDate(request, stage.key);

          return (
            <div key={stage.key} className="flex flex-1 items-start">
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all",
                    state === "completed" && "border-[#FB5535] bg-[#FB5535] text-white",
                    state === "current" && "border-[#FB5535] bg-[#FB5535]/10 text-[#FB5535]",
                    state === "upcoming" && "border-navy-100 bg-navy-50 text-navy-950/30"
                  )}
                >
                  {state === "completed" ? <Check size={18} /> : <Icon size={18} />}
                </div>
                <p
                  className={cn(
                    "mt-2 max-w-[72px] text-center text-xs font-medium leading-tight",
                    state === "current" ? "text-[#FB5535]" : "text-navy-950/70"
                  )}
                >
                  {stage.label}
                </p>
                {date && (
                  <p className="mt-0.5 max-w-[72px] text-center text-[10px] text-navy-950/40">
                    {date}
                  </p>
                )}
              </div>
              {index < STEPPER_STAGES.length - 1 && (
                <div
                  className={cn(
                    "mx-1 mt-5 h-0.5 min-w-[8px] flex-1",
                    index < currentIdx ? "bg-[#FB5535]" : "bg-navy-100"
                  )}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
