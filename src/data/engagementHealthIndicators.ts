export type HealthStatus = "green" | "amber" | "red";

export interface EngagementHealthIndicator {
  id: string;
  name: string;
  status: HealthStatus;
  description: string;
  logic: string;
  currentReason: string;
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
  },
  {
    id: "scope",
    name: "Scope Confirmed",
    status: "green",
    description: "Checks if all scope is defined and stable.",
    logic:
      "Green: All deliverables defined, no pending contract changes impacting scope.",
    currentReason: "All scope is fully specified. No blocking contract changes.",
  },
  {
    id: "plan",
    name: "Plan Confirmed",
    status: "green",
    description: "Checks complete planning readiness.",
    logic: "Green: All milestones have due dates, every deliverable/task has an owner.",
    currentReason: "All items have assigned owners and due dates.",
  },
  {
    id: "dependencies",
    name: "Dependencies Met",
    status: "red",
    description: "Identifies blocking issues and RAID dependencies.",
    logic:
      "Green: 0 blocked tasks. Amber: Open dependencies exist. Red: Blocked tasks or overdue dependencies.",
    currentReason: "Task T-104 is blocked and Issue I001 is marked as blocked.",
  },
  {
    id: "contractual",
    name: "Contractual Status",
    status: "green",
    description: "Validates milestone formalization.",
    logic: "Green: All milestones 'In Place'. Amber: Pending negotiation. Red: Not started/no milestones.",
    currentReason: "All 4 milestones are marked 'In Place'.",
  },
  {
    id: "stakeholders",
    name: "Stakeholders Committed",
    status: "amber",
    description: "Measures client commitment and catalogue updates.",
    logic:
      "Green: Catalogue updated <7 days, high commitment. Amber: Not updated <7 days or medium commitment.",
    currentReason: "Sarah Johnson's commitment is currently 'Medium'.",
  },
  {
    id: "benefits",
    name: "Business Benefits",
    status: "amber",
    description: "Evaluates post-go-live outcome realization.",
    logic: "Green: KRIs on track. Amber: KRIs below target. Red: KRIs undefined.",
    currentReason: "KRI-02 (Time-to-Market) is currently performing below its target.",
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
