import type { RequestTimelineEntry } from "@/lib/types/requests";
import { REQUEST_STATUS_LABELS } from "@/lib/types/requests";

/** DQ-facing copy for timeline entries stored with customer-oriented defaults. */
export function formatTimelineEntryForDq(entry: RequestTimelineEntry): {
  title: string;
  body: string;
} {
  if (entry.kind === "created") {
    return {
      title: "Submitted",
      body: "Customer submitted this request into the queue.",
    };
  }

  if (entry.kind === "status_change" && entry.fromStatus && entry.toStatus) {
    const from = REQUEST_STATUS_LABELS[entry.fromStatus];
    const to = REQUEST_STATUS_LABELS[entry.toStatus];
    const actor = entry.actor ? ` by ${entry.actor}` : "";
    return {
      title: entry.title || "Status updated",
      body: `Status changed from ${from} to ${to}${actor}.`,
    };
  }

  if (entry.kind === "assignment") {
    return {
      title: entry.title || "Assignment updated",
      body: entry.body,
    };
  }

  if (entry.kind === "note") {
    return {
      title: entry.title || "Note",
      body: entry.body,
    };
  }

  return { title: entry.title, body: entry.body };
}
