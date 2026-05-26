export type HealthStatus = "green" | "amber" | "red";

export type EngagementWorkspaceTab =
  | "overview"
  | "delivery"
  | "raid"
  | "stakeholders"
  | "commercials";

export type RaidSubTab = "risks" | "issues" | "dependencies" | "assumptions";

export interface IndicatorNavigationTarget {
  tab: EngagementWorkspaceTab;
  raidSubTab?: RaidSubTab;
  destinationLabel: string;
}

export interface EngagementHealthIndicator {
  id: string;
  name: string;
  status: HealthStatus;
  description: string;
  logic: string;
  currentReason: string;
  navigation: IndicatorNavigationTarget;
}

export const engagementHealthIndicators: EngagementHealthIndicator[] = [
  {
    id: "schedule",
    name: "Progress vs Schedule",
    status: "amber",
    description: "Based on milestone and deliverable timelines.",
    logic:
      "Green: 0 overdue milestones/deliverables. Amber: Overdue deliverables, no overdue milestones. Red: Overdue milestones.",
    currentReason:
      "Deliverable 'Target Architecture Blueprint' is past its internal target date, but Milestone 2 is not yet overdue.",
    navigation: {
      tab: "delivery",
      destinationLabel: "Delivery — Milestones & deliverables",
    },
  },
  {
    id: "scope",
    name: "Scope Confirmed",
    status: "green",
    description: "Checks if all scope is defined and stable.",
    logic:
      "Green: All deliverables defined, 0 deliverables tied to contract changes in New, In Negotiation, or In Specification. Amber: Changes in advanced review. Red: Missing deliverable definitions or pending specification.",
    currentReason: "All scope is fully specified. No blocking contract changes.",
    navigation: {
      tab: "commercials",
      destinationLabel: "Commercials — Contract changes",
    },
  },
  {
    id: "plan",
    name: "Plan Confirmed",
    status: "green",
    description: "Checks complete planning readiness.",
    logic:
      "Green: All milestones have due dates and every deliverable/task has an owner. Amber: Dates set but some owners missing. Red: Milestones without due dates.",
    currentReason: "All items have assigned owners and due dates.",
    navigation: {
      tab: "delivery",
      destinationLabel: "Delivery — Deliverables & tasks",
    },
  },
  {
    id: "dependencies",
    name: "Dependencies Met",
    status: "red",
    description: "Blocked execution tasks and open RAID dependency items.",
    logic:
      "Green: 0 blocked tasks and all RAID dependency items closed. Amber: No blocked tasks but open dependencies (not overdue). Red: Blocked task(s) or overdue RAID dependency.",
    currentReason:
      "Blocked task T-104 on a deliverable. RAID dependency D001 (Enterprise architecture standards) is open and past its due date.",
    navigation: {
      tab: "raid",
      raidSubTab: "dependencies",
      destinationLabel: "RAID — Dependencies",
    },
  },
  {
    id: "contractual",
    name: "Contractual Status",
    status: "green",
    description: "Validates milestone formalization.",
    logic:
      "Green: All milestones marked In Place. Amber: Pending or In Negotiation. Red: No milestones or Not Started contractual status.",
    currentReason: "All 4 milestones are marked 'In Place'.",
    navigation: {
      tab: "delivery",
      destinationLabel: "Delivery — Milestones",
    },
  },
  {
    id: "stakeholders",
    name: "Stakeholders Committed",
    status: "amber",
    description: "Measures client commitment and catalogue updates.",
    logic:
      "Green: Stakeholder catalogue updated within 7 days and priority stakeholders actively engaged. Amber: Engaged but catalogue stale (>7 days). Red: Priority stakeholders unengaged or resistant.",
    currentReason: "Sarah Johnson's commitment is currently 'Medium'.",
    navigation: {
      tab: "stakeholders",
      destinationLabel: "Stakeholders — Catalogue",
    },
  },
  {
    id: "benefits",
    name: "Business Benefits",
    status: "amber",
    description: "Evaluates post-go-live outcome realization.",
    logic:
      "Green: KRIs defined and on track. Amber: KRIs below target threshold. Red: KRIs undefined or failing post go-live.",
    currentReason: "KRI-02 (Time-to-Market) is currently performing below its target.",
    navigation: {
      tab: "delivery",
      destinationLabel: "Delivery — Vision & KRIs",
    },
  },
];

export const getHealthStatusColor = (status: HealthStatus) => {
  if (status === "green") return "bg-green-500";
  if (status === "amber") return "bg-amber-500";
  return "bg-red-500";
};

export const getHealthStatusBadgeClass = (status: HealthStatus) => {
  if (status === "green") return "bg-green-50 text-green-700 border-green-200";
  if (status === "amber") return "bg-amber-50 text-amber-700 border-amber-200";
  return "bg-red-50 text-red-700 border-red-200";
};

export const computeOverallHealth = (indicators: EngagementHealthIndicator[]) => {
  const statuses = indicators.map((i) => i.status);
  if (statuses.includes("red")) {
    return { status: "red" as HealthStatus, label: "Critical" };
  }
  if (statuses.includes("amber")) {
    return { status: "amber" as HealthStatus, label: "At Risk" };
  }
  return { status: "green" as HealthStatus, label: "On Track" };
};
