import type { DqServiceRequestListItem } from "@/lib/requests/serviceRequestRepository";
import { REQUEST_STATUS_LABELS, SERVICE_TYPE_LABELS } from "@/lib/types/requests";

export function getDqRequestCustomerLabel(request: DqServiceRequestListItem): string {
  return (
    request.customerOrganisation ??
    request.customerName ??
    request.submitterEmail
  );
}

export function matchesDqRequestSearch(
  request: DqServiceRequestListItem,
  query: string,
): boolean {
  const q = query.trim().toLowerCase();
  if (!q) return true;

  const haystack = [
    request.referenceNo,
    request.title,
    request.description,
    request.submitterEmail,
    request.customerName,
    request.customerOrganisation,
    request.deliveryLead,
    REQUEST_STATUS_LABELS[request.status],
    SERVICE_TYPE_LABELS[request.serviceType],
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  return haystack.includes(q);
}

export function isAssignedToUser(
  request: DqServiceRequestListItem,
  userName: string,
  userEmail: string,
): boolean {
  const email = userEmail.trim().toLowerCase();
  const name = userName.trim().toLowerCase();
  const leadEmail = request.deliveryLeadEmail?.trim().toLowerCase();
  if (leadEmail && leadEmail === email) return true;

  const lead = request.deliveryLead?.trim().toLowerCase();
  if (!lead) return false;

  return lead === name || lead === email;
}
