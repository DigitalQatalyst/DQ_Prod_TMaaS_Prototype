import type { DetailConfig } from "../types";

export const requesterDetailBase = {
  context: "requester",
  storageKey: "dws:requests:transactions:list",
  listHref: "/transactions/requests",
  detailBasePath: "/transactions/requests",
  sidebarHeading: "My Requests",
} as const;

export function getRequesterDetailConfig(ref: string): DetailConfig {
  return {
    ...requesterDetailBase,
    breadcrumb: [
      { label: "DWS.01", href: "/home" },
      { label: "Transactions" },
      { label: "Requests", href: "/transactions/requests" },
      { label: ref },
    ],
  };
}

export const operationalDetailBase = {
  context: "operational",
  storageKey: "dws:requests:manage-services:list",
  apiScope: "queue",
  listHref: "/manage-services/requests",
  detailBasePath: "/manage-services/requests",
  sidebarHeading: "Service Requests",
} as const;

export function getOperationalDetailConfig(ref: string): DetailConfig {
  return {
    ...operationalDetailBase,
    breadcrumb: [
      { label: "DWS.01", href: "/home" },
      { label: "Service Operations" },
      { label: "Manage Services" },
      { label: "Service Requests", href: "/manage-services/requests" },
      { label: ref },
    ],
  };
}
