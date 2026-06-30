export type BadgeTone = "success" | "warning" | "info" | "danger" | "gray" | "orange" | "navy" | "default";

export function statusTone(status: string): BadgeTone {
  const m: Record<string, BadgeTone> = {
    submitted: "info",
    in_review: "warning",
    in_fulfilment: "orange",
    returned_for_information: "gray",
    closed: "success",
    cancelled: "gray",
  };
  return m[status] ?? "default";
}

export function priorityTone(priority: string): BadgeTone {
  if (priority === "high") return "danger";
  if (priority === "low") return "gray";
  return "default";
}

export function slaTone(sla: string): BadgeTone {
  const m: Record<string, BadgeTone> = {
    on_track: "success",
    at_risk: "warning",
    breached: "danger",
    none: "gray",
  };
  return m[sla] ?? "default";
}

export function healthTone(health: string): BadgeTone {
  const m: Record<string, BadgeTone> = {
    healthy: "success",
    attention: "warning",
    blocked: "orange",
    critical: "danger",
  };
  return m[health] ?? "default";
}

export function statusLabel(s: string): string {
  return s.replace(/_/g, " ");
}

export function slaLabel(sla: string): string {
  const m: Record<string, string> = {
    on_track: "On track",
    at_risk: "At risk",
    breached: "Breached",
    none: "—",
  };
  return m[sla] ?? sla;
}

export function healthLabel(health: string): string {
  const m: Record<string, string> = {
    healthy: "Healthy",
    attention: "Needs attention",
    blocked: "Blocked",
    critical: "Critical",
  };
  return m[health] ?? health;
}

export function shortDate(iso: string | null): string {
  if (!iso) return "—";
  try {
    return new Date(iso).toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" });
  } catch {
    return iso;
  }
}

export function shortDateTime(iso: string | null): string {
  if (!iso) return "—";
  try {
    return new Date(iso).toLocaleString(undefined, {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return iso;
  }
}

export function relTime(iso: string): string {
  try {
    const diff = Date.now() - new Date(iso).getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 1) return "just now";
    if (mins < 60) return `${mins}m ago`;
    const hrs = Math.floor(mins / 60);
    if (hrs < 24) return `${hrs}h ago`;
    return shortDate(iso);
  } catch {
    return iso;
  }
}
