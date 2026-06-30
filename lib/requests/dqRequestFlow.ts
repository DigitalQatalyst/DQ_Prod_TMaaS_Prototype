import { REQUEST_STATUS_LABELS, type RequestStatus } from "@/lib/types/requests";

/** TMaaS request lifecycle stages shown in the DQ stepper and advance actions. */
export const DQ_FLOW_STAGE_ORDER = [
  "submitted",
  "under_review",
  "in_progress",
  "closed",
] as const satisfies readonly RequestStatus[];

export type DqFlowStage = (typeof DQ_FLOW_STAGE_ORDER)[number];

export function getDqFlowStageLabel(stage: DqFlowStage): string {
  return REQUEST_STATUS_LABELS[stage];
}

export function getDqFlowStageIndex(status: RequestStatus): number {
  if (status === "cancelled") {
    return DQ_FLOW_STAGE_ORDER.indexOf("under_review");
  }
  const idx = DQ_FLOW_STAGE_ORDER.indexOf(status as DqFlowStage);
  return idx >= 0 ? idx : 0;
}

export function getNextDqFlowStage(status: RequestStatus): DqFlowStage | null {
  const currentIdx = getDqFlowStageIndex(status);
  if (currentIdx < 0 || currentIdx >= DQ_FLOW_STAGE_ORDER.length - 1) {
    return null;
  }
  return DQ_FLOW_STAGE_ORDER[currentIdx + 1] ?? null;
}

export function getAdvanceActionLabel(status: RequestStatus): string | null {
  const nextStage = getNextDqFlowStage(status);
  if (!nextStage) return null;
  return `Move to ${REQUEST_STATUS_LABELS[nextStage]}`;
}

export function canAdvanceDqFlow(status: RequestStatus): boolean {
  return getNextDqFlowStage(status) !== null;
}
