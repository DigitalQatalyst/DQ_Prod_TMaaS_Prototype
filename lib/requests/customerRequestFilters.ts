import {
  CUSTOMER_REQUEST_TABS,
  type CustomerRequestTabKey,
} from "@/lib/requests/customerRequestTabs";
import type { CustomerRequest } from "@/lib/types/requests";
import { REQUEST_STATUS_LABELS, SERVICE_TYPE_LABELS } from "@/lib/types/requests";

export function matchesCustomerRequestSearch(
  request: CustomerRequest,
  query: string
): boolean {
  const q = query.trim().toLowerCase();
  if (!q) return true;

  const serviceLabel = SERVICE_TYPE_LABELS[request.serviceType].toLowerCase();
  const statusLabel = REQUEST_STATUS_LABELS[request.status].toLowerCase();

  return (
    request.title.toLowerCase().includes(q) ||
    request.referenceNo.toLowerCase().includes(q) ||
    serviceLabel.includes(q) ||
    request.serviceType.toLowerCase().includes(q) ||
    statusLabel.includes(q) ||
    request.status.toLowerCase().includes(q)
  );
}

export function filterCustomerRequestsByTab(
  requests: CustomerRequest[],
  tabKey: CustomerRequestTabKey
): CustomerRequest[] {
  const tabDef = CUSTOMER_REQUEST_TABS.find((tab) => tab.key === tabKey) ?? CUSTOMER_REQUEST_TABS[0]!;
  if (!tabDef.predicate) return requests;
  return requests.filter(tabDef.predicate);
}

export function getCustomerRequestTabCounts(
  requests: CustomerRequest[]
): Partial<Record<CustomerRequestTabKey, number>> {
  const counts: Partial<Record<CustomerRequestTabKey, number>> = {};
  for (const tab of CUSTOMER_REQUEST_TABS) {
    counts[tab.key] = tab.predicate
      ? requests.filter(tab.predicate).length
      : requests.length;
  }
  return counts;
}
