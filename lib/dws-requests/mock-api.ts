import type { CustomerRequest, RequestStatus } from "@/lib/types/requests";
import { SERVICE_TYPE_LABELS } from "@/lib/types/requests";
import type { RequestListRow } from "@/lib/dws-requests/types";

const STATUS_TO_DWS: Record<RequestStatus, string> = {
  submitted: "submitted",
  under_review: "in_review",
  in_progress: "in_fulfilment",
  closed: "closed",
  cancelled: "cancelled",
};

/** Map TMaaS mock customer requests to DWS.01 RequestListRow shape for /api/requests. */
export function toDwsRequestListRow(request: CustomerRequest): RequestListRow {
  return {
    id: request.id,
    reference_no: request.referenceNo,
    service_name: SERVICE_TYPE_LABELS[request.serviceType],
    title: request.title,
    status: STATUS_TO_DWS[request.status],
    priority: "normal",
    department_name: "Dubai Electricity & Water Authority",
    department_id: null,
    target_due: null,
    created_at: request.submittedAt,
    updated_at: request.updatedAt,
    requestor_name: "Ahmed Al Tayer",
    assignee_name: request.deliveryLead ?? null,
  };
}
