"use client";

import { isAtRisk, isActive } from "../derivations";
import type { EnrichedRequestRow, ListPageConfig, RequestContext } from "../types";

const CLOSED = (r: EnrichedRequestRow) => r.status === "closed" || r.status === "cancelled";

export const requesterListConfig: ListPageConfig = {
  context: "requester",
  storageKey: "tmaas:requests:dashboard:list",
  overline: "WORKSPACE",
  title: "My Requests",
  description: "View and track all your service requests.",
  detailBasePath: "/dashboard/requests",
  listHref: "/dashboard/requests",
  hideActionColumn: true,
  navigateOnRowClick: false,
  breadcrumb: [
    { label: "TMaaS", href: "/dashboard/overview" },
    { label: "Workspace" },
    { label: "My Requests" },
  ],
  tabs: [
    { key: "my_requests", label: "My Requests" },
    {
      key: "pending_actions",
      label: "Pending Actions",
      predicate: (r) => r.status === "returned_for_information",
    },
    {
      key: "recently_updated",
      label: "Recently Updated",
      sortBy: { field: "updated_at", direction: "desc" },
    },
    {
      key: "awaiting_information",
      label: "Awaiting Information",
      predicate: (r) => r.status === "returned_for_information",
    },
    {
      key: "closed",
      label: "Closed / Completed",
      predicate: CLOSED,
    },
  ],
  columns: [
    { key: "reference_no", label: "Ref", filterType: "text", sortable: true },
    { key: "title", label: "Title", filterType: "text", sortable: true },
    { key: "status", label: "Status", filterType: "status", sortable: true },
    { key: "priority", label: "Priority", filterType: "status", sortable: true, plain: true },
    { key: "department_name", label: "Department", filterType: "text", sortable: true },
    { key: "updated_at", label: "Updated", filterType: "date", sortable: true },
  ],
};

export const operationalListConfig: ListPageConfig = {
  context: "operational",
  storageKey: "dws:requests:manage-services:list",
  apiScope: "queue",
  overline: "SERVICE OPERATIONS",
  title: "Service Requests",
  description:
    "Review, assign, and manage incoming service requests within your authorised departments and service areas.",
  detailBasePath: "/manage-services/requests",
  listHref: "/manage-services/requests",
  breadcrumb: [
    { label: "DWS.01", href: "/home" },
    { label: "Service Operations" },
    { label: "Manage Services" },
    { label: "Service Requests" },
  ],
  tabs: [
    { key: "all", label: "All Requests" },
    {
      key: "unassigned",
      label: "Unassigned",
      predicate: (r) => isActive(r) && !r.assignee_name,
    },
    {
      key: "assigned",
      label: "Assigned",
      predicate: (r) => !!r.assignee_name && isActive(r),
    },
    {
      key: "in_review",
      label: "In Review",
      predicate: (r) => r.status === "in_review",
    },
    {
      key: "awaiting_information",
      label: "Awaiting Information",
      predicate: (r) => r.status === "returned_for_information",
    },
    {
      key: "in_fulfilment",
      label: "In Fulfilment",
      predicate: (r) => r.status === "in_fulfilment",
    },
    {
      key: "at_risk",
      label: "At Risk",
      predicate: isAtRisk,
    },
    {
      key: "closed",
      label: "Closed / Completed",
      predicate: CLOSED,
    },
  ],
  columns: [
    { key: "reference_no", label: "Request ID", filterType: "text", sortable: true },
    { key: "title", label: "Request Title", filterType: "text", sortable: true },
    { key: "service_name", label: "Service", filterType: "text", sortable: true },
    { key: "department_name", label: "Department", filterType: "text", sortable: true },
    { key: "requestor_name", label: "Requester", filterType: "text", sortable: true },
    { key: "status", label: "Status", filterType: "status", sortable: true },
    { key: "sla_status", label: "SLA", filterType: "status", sortable: true },
    { key: "health", label: "Health", filterType: "status", sortable: true },
    { key: "priority", label: "Priority", filterType: "status", sortable: true },
    { key: "assignee_name", label: "Assigned Owner", filterType: "text", sortable: true },
    { key: "created_at", label: "Submitted On", filterType: "date", sortable: true },
    { key: "target_due", label: "Expected Resolution", filterType: "date", sortable: true },
    { key: "updated_at", label: "Last Updated", filterType: "date", sortable: true },
    { key: "next_action", label: "Next Action", filterType: "text", sortable: true },
  ],
};

const LIST_CONFIGS: Record<RequestContext, ListPageConfig> = {
  requester: requesterListConfig,
  operational: operationalListConfig,
};

export function getListConfig(variant: RequestContext): ListPageConfig {
  return LIST_CONFIGS[variant];
}
