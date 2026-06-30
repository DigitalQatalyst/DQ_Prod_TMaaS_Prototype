import type { RequestTimelineEntry } from "@/lib/types/requests";
import { formatRequestDate } from "./format";

export interface CustomerActivityItem {
  id: string;
  requestId: string;
  referenceNo: string;
  requestTitle: string;
  entry: RequestTimelineEntry;
}

/** Short relative label for overview activity feed. */
export function formatActivityWhen(iso: string): string {
  const then = new Date(iso).getTime();
  const diffMs = Date.now() - then;
  const hours = Math.floor(diffMs / (1000 * 60 * 60));

  if (hours < 1) return "Just now";
  if (hours < 24) return `${hours} hour${hours === 1 ? "" : "s"} ago`;

  const days = Math.floor(hours / 24);
  if (days < 7) return `${days} day${days === 1 ? "" : "s"} ago`;

  return formatRequestDate(iso);
}
