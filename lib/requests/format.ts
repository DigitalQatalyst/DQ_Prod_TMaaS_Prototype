import type { RequestStatus, ServiceType } from "@/lib/types/requests";
import { REQUEST_STATUS_LABELS, SERVICE_TYPE_LABELS } from "@/lib/types/requests";

export function getStatusLabel(status: RequestStatus): string {
  return REQUEST_STATUS_LABELS[status];
}

export function getStatusBadgeClass(status: RequestStatus): string {
  const map: Record<RequestStatus, string> = {
    under_review: "bg-orange-100 text-orange-700 border-orange-200",
    in_progress: "bg-blue-100 text-blue-700 border-blue-200",
    submitted: "bg-gray-100 text-gray-600 border-gray-200",
    closed: "bg-green-100 text-green-700 border-green-200",
    cancelled: "bg-red-100 text-red-700 border-red-200",
  };
  return map[status];
}

export function getServiceTypeDotClass(type: ServiceType): string {
  const map: Record<ServiceType, string> = {
    design: "bg-purple-500",
    ai_design: "bg-purple-500",
    deploy: "bg-blue-500",
    assess: "bg-teal-500",
    ai_deploy: "bg-orange-500",
  };
  return map[type];
}

export function getServiceTypeLabel(type: ServiceType): string {
  return SERVICE_TYPE_LABELS[type];
}

const MONTHS_SHORT = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] as const;

/** SSR-safe date label — avoids locale hydration mismatches. */
export function formatRequestDate(iso: string): string {
  const date = new Date(iso);
  return `${date.getUTCDate()} ${MONTHS_SHORT[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
}

export function formatRequestDateTime(iso: string): string {
  return new Date(iso).toLocaleString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}
