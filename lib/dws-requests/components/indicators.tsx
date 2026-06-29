"use client";
import { Badge } from "@dbp/ui";
import {
  healthLabel,
  healthTone,
  priorityTone,
  slaLabel,
  slaTone,
  statusLabel,
  statusTone,
} from "../format";

export function RequestStatusBadge({ status }: { status: string }) {
  return (
    <Badge tone={statusTone(status)} dot>
      {statusLabel(status)}
    </Badge>
  );
}

export function SlaIndicator({ sla }: { sla: string }) {
  if (sla === "none") return null;
  return <Badge tone={slaTone(sla)}>{slaLabel(sla)}</Badge>;
}

export function HealthIndicator({ health }: { health: string }) {
  return <Badge tone={healthTone(health)}>{healthLabel(health)}</Badge>;
}

export function PriorityIndicator({ priority }: { priority: string }) {
  return (
    <Badge tone={priorityTone(priority)}>
      {priority.charAt(0).toUpperCase() + priority.slice(1)}
    </Badge>
  );
}
