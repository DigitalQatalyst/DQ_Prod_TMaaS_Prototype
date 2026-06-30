import { initialServices } from "@/data/services";
import type { ServiceProduct, ServiceTypeId } from "@/lib/types/serviceProduct";
import type { CustomerRequest, RequestStatus, ServiceType } from "@/lib/types/requests";

/** Stub user id for DEWA demo persona (Ahmed Al Tayer). */
export const DEMO_CUSTOMER_USER_ID = "user-dewa-ahmed";

const REQUEST_STATUSES: RequestStatus[] = [
  "under_review",
  "in_progress",
  "closed",
  "submitted",
  "in_progress",
  "under_review",
  "closed",
  "cancelled",
];

const DELIVERY_LEADS = ["Sarah Mitchell", "James Okonkwo", "Priya Sharma", "Omar Hassan"];

/** Catalog rows used as the source of truth for mock customer requests. */
const REQUEST_SERVICE_IDS = [2, 3, 4, 5, 1, 10, 15, 20] as const;

function mapCatalogServiceType(type: ServiceTypeId): ServiceType {
  switch (type) {
    case "advisory":
      return "assess";
    case "design":
      return "design";
    case "ai_design":
      return "ai_design";
    case "deploy":
      return "deploy";
    case "ai_deploy":
      return "ai_deploy";
    case "manage":
      return "deploy";
    case "bundle":
      return "design";
    default:
      return "design";
  }
}

function buildTimeline(
  service: ServiceProduct,
  status: RequestStatus,
  submittedAt: string,
  updatedAt: string
): CustomerRequest["timeline"] {
  const entries: CustomerRequest["timeline"] = [
    {
      id: `tl-${service.id}-created`,
      kind: "created",
      title: "Submitted",
      body: "Your request has been submitted successfully.",
      createdAt: submittedAt,
    },
  ];

  if (status !== "submitted") {
    entries.push({
      id: `tl-${service.id}-review`,
      kind: "status_change",
      title: status === "under_review" ? "Under Review" : "Status Updated",
      body:
        status === "under_review"
          ? "Your request is under review by the DQ team."
          : `Request status updated to ${status.replace(/_/g, " ")}.`,
      actor: "DQ Team",
      fromStatus: "submitted",
      toStatus: status === "cancelled" ? "cancelled" : "under_review",
      createdAt: updatedAt,
    });
  }

  return entries;
}

function buildRequestFromService(
  service: ServiceProduct,
  index: number,
  status: RequestStatus
): CustomerRequest {
  const dayOffset = (REQUEST_SERVICE_IDS.length - index) * 3;
  const submitted = new Date("2026-06-01T10:00:00Z");
  submitted.setDate(submitted.getDate() + dayOffset);
  const updated = new Date(submitted);
  updated.setDate(updated.getDate() + (status === "submitted" ? 0 : 2));

  const submittedAt = submitted.toISOString();
  const updatedAt = updated.toISOString();
  const refNum = String(service.id).padStart(3, "0");
  const deliveryLead =
    status === "submitted" || status === "cancelled"
      ? undefined
      : DELIVERY_LEADS[index % DELIVERY_LEADS.length];

  return {
    id: `req-${service.id}`,
    referenceNo: `TM-2026-${refNum}`,
    title: service.standardName,
    serviceType: mapCatalogServiceType(service.serviceType),
    status,
    submittedAt,
    updatedAt,
    ...(deliveryLead ? { deliveryLead } : {}),
    description:
      index % 2 === 0
        ? "We are targeting a Q3 start and need support aligning stakeholders before kick-off."
        : "Looking for guidance on scope and timeline for our first phase.",
    marketplaceSlug: service.slug,
    variantId: service.id,
    userId: DEMO_CUSTOMER_USER_ID,
    timeline: buildTimeline(service, status, submittedAt, updatedAt),
  };
}

function buildMockCustomerRequests(): CustomerRequest[] {
  return REQUEST_SERVICE_IDS.map((id, index) => {
    const service = initialServices.find((s) => s.id === id);
    if (!service) {
      throw new Error(`Missing catalog service id ${id} for mock customer requests`);
    }
    return buildRequestFromService(service, index, REQUEST_STATUSES[index] ?? "submitted");
  }).sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime());
}

export const mockCustomerRequests: CustomerRequest[] = buildMockCustomerRequests();
