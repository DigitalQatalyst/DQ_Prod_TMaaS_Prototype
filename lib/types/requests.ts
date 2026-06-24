export type RequestStatus =
  | "submitted"
  | "under_review"
  | "in_progress"
  | "closed"
  | "cancelled";

export type ServiceType = "design" | "deploy" | "assess" | "ai_design" | "ai_deploy";

export interface RequestTimelineEntry {
  id: string;
  kind: "status_change" | "assignment" | "note" | "created";
  title: string;
  body: string;
  actor?: string;
  fromStatus?: RequestStatus;
  toStatus?: RequestStatus;
  createdAt: string;
}

export interface CustomerRequest {
  id: string;
  referenceNo: string;
  title: string;
  serviceType: ServiceType;
  status: RequestStatus;
  submittedAt: string;
  updatedAt: string;
  deliveryLead?: string;
  description: string;
  marketplaceSlug?: string;
  userId: string;
  timeline: RequestTimelineEntry[];
}

export const REQUEST_STATUS_LABELS: Record<RequestStatus, string> = {
  submitted: "Submitted",
  under_review: "Under Review",
  in_progress: "In Progress",
  closed: "Closed",
  cancelled: "Cancelled",
};

export const SERVICE_TYPE_LABELS: Record<ServiceType, string> = {
  design: "Design",
  deploy: "Deploy",
  assess: "Assess",
  ai_design: "AI Design",
  ai_deploy: "AI Deploy",
};

export const STEPPER_STAGES: { key: RequestStatus; label: string }[] = [
  { key: "submitted", label: "Submitted" },
  { key: "under_review", label: "Under Review" },
  { key: "in_progress", label: "In Progress" },
  { key: "closed", label: "Closed" },
];
