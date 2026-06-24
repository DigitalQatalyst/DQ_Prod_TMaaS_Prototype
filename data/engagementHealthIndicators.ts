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

export type TrendDirection = "improving" | "stable" | "deteriorating";

export type InputMode = "automated" | "manual";

export interface GovernanceCriterion {
  status: HealthStatus;
  label: string;
  items: string[];
}

export interface GovernanceEvidence {
  rules: string[];
  triggers: string[];
  impactedMilestones?: number[];
  relatedRaidIds?: string[];
  relatedKriIds?: string[];
  stakeholderIds?: string[];
}

export interface EngagementHealthIndicator {
  id: string;
  name: string;
  status: HealthStatus;
  /** 'automated' = computed from workspace data; 'manual' = Delivery Lead selects RAG */
  inputMode: InputMode;
  /** Predefined governance criteria shown when inputMode === 'manual' */
  governanceCriteria?: GovernanceCriterion[];
  description: string;
  logic: string;
  currentReason: string;
  trend: TrendDirection;
  timeInState: string;
  lastTransition: string;
  evidence: GovernanceEvidence;
  navigation: IndicatorNavigationTarget;
}

export const engagementHealthIndicators: EngagementHealthIndicator[] = [
  {
    id: "schedule",
    name: "Progress vs Schedule",
    status: "amber",
    inputMode: "automated",
    description: "Based on milestone and deliverable timelines.",
    logic:
      "Green: 0 overdue milestones/deliverables. Amber: Overdue deliverables, no overdue milestones. Red: Overdue milestones.",
    currentReason:
      "Deliverable 'Target Architecture Blueprint' is past its internal target date, but Milestone 2 is not yet overdue.",
    trend: "deteriorating",
    timeInState: "3 days",
    lastTransition: "2026-02-25",
    evidence: {
      rules: ["Deliverable overdue > 0 days"],
      triggers: ["D2 (Target Architecture Blueprint) past internal target"],
      impactedMilestones: [2],
    },
    navigation: {
      tab: "delivery",
      destinationLabel: "Delivery, Milestones & deliverables",
    },
  },
  {
    id: "scope",
    name: "Scope Confirmed",
    status: "green",
    inputMode: "automated",
    description: "Checks if all scope is defined and stable.",
    logic:
      "Green: All deliverables defined, 0 deliverables tied to contract changes in New, In Negotiation, or In Specification. Amber: Changes in advanced review. Red: Missing deliverable definitions or pending specification.",
    currentReason: "All scope is fully specified. No blocking contract changes.",
    trend: "stable",
    timeInState: "28 days",
    lastTransition: "2026-01-31",
    evidence: {
      rules: ["100% deliverables defined", "0 pending CRs affecting scope"],
      triggers: ["No active contract changes identified"],
    },
    navigation: {
      tab: "commercials",
      destinationLabel: "Commercials, Contract changes",
    },
  },
  {
    id: "plan",
    name: "Plan Confirmed",
    status: "green",
    inputMode: "automated",
    description: "Checks complete planning readiness.",
    logic:
      "Green: All milestones have due dates and every deliverable/task has an owner. Amber: Dates set but some owners missing. Red: Milestones without due dates.",
    currentReason: "All items have assigned owners and due dates.",
    trend: "stable",
    timeInState: "28 days",
    lastTransition: "2026-01-31",
    evidence: {
      rules: ["100% milestones have dates", "100% deliverables have owners"],
      triggers: ["All planning constraints met"],
    },
    navigation: {
      tab: "delivery",
      destinationLabel: "Delivery, Deliverables & tasks",
    },
  },
  {
    id: "dependencies",
    name: "Dependencies Met",
    status: "red",
    inputMode: "automated",
    description: "Blocked execution tasks and open RAID dependency items.",
    logic:
      "Green: 0 blocked tasks and all RAID dependency items closed. Amber: No blocked tasks but open dependencies (not overdue). Red: Blocked task(s) or overdue RAID dependency.",
    currentReason:
      "Blocked task T-104 on a deliverable. RAID dependency D001 (Enterprise architecture standards) is open and past its due date.",
    trend: "deteriorating",
    timeInState: "5 days",
    lastTransition: "2026-02-23",
    evidence: {
      rules: ["Blocked tasks > 0", "Overdue dependencies > 0"],
      triggers: ["Task T-104 marked blocked", "Dependency D001 past due"],
      impactedMilestones: [2],
      relatedRaidIds: ["D001"],
    },
    navigation: {
      tab: "raid",
      raidSubTab: "dependencies",
      destinationLabel: "RAID, Dependencies",
    },
  },
  {
    id: "contractual",
    name: "Contractual Status",
    status: "green",
    inputMode: "automated",
    description: "Validates milestone formalization.",
    logic:
      "Green: All milestones marked In Place. Amber: Pending or In Negotiation. Red: No milestones or Not Started contractual status.",
    currentReason: "All 4 milestones are marked 'In Place'.",
    trend: "improving",
    timeInState: "14 days",
    lastTransition: "2026-02-14",
    evidence: {
      rules: ["100% milestones In Place"],
      triggers: ["Contract finalized on Feb 14"],
    },
    navigation: {
      tab: "delivery",
      destinationLabel: "Delivery, Milestones",
    },
  },
  {
    id: "stakeholders",
    name: "Stakeholder Commitment",
    status: "amber",
    inputMode: "manual",
    governanceCriteria: [
      {
        status: "green",
        label: "On Track",
        items: [
          "Key stakeholders attending governance meetings and reviews",
          "Approvals and sign-offs received on time",
          "No escalations or unresolved stakeholder concerns",
        ],
      },
      {
        status: "amber",
        label: "Some Gaps",
        items: [
          "Stakeholder engagement inconsistent or declining",
          "Approval or sign-off delayed but being pursued",
          "One stakeholder misaligned but being managed",
        ],
      },
      {
        status: "red",
        label: "At Risk",
        items: [
          "Key stakeholder disengaged or unresponsive",
          "Critical approval blocked with no path to resolution",
          "Active escalation or governance breakdown in progress",
        ],
      },
    ],
    description:
      "Delivery Lead assessment of stakeholder engagement, approvals, and governance participation.",
    logic:
      "Manually assessed by Delivery Lead using predefined governance criteria. Green: all stakeholders engaged and approvals on track. Amber: some gaps but being managed. Red: critical disengagement or escalation.",
    currentReason:
      "Stakeholder engagement is inconsistent, approval on Phase 2 SOW is delayed but being actively pursued.",
    trend: "stable",
    timeInState: "12 days",
    lastTransition: "2026-02-16",
    evidence: {
      rules: ["Manual RAG set by Delivery Lead"],
      triggers: ["Amber selected: approval delayed but being pursued"],
      stakeholderIds: ["SH002"],
    },
    navigation: {
      tab: "stakeholders",
      destinationLabel: "Stakeholders, Catalogue",
    },
  },
  {
    id: "benefits",
    name: "Business Benefits",
    status: "amber",
    inputMode: "manual",
    governanceCriteria: [
      {
        status: "green",
        label: "On Track",
        items: [
          "Benefits defined, measurable, and agreed with client",
          "Progress towards outcomes being tracked and reported",
          "No significant risk to expected business outcomes",
        ],
      },
      {
        status: "amber",
        label: "Some Gaps",
        items: [
          "Benefits defined but not yet measurable or tracked",
          "Some outcomes at risk due to scope or timeline gaps",
          "Client and team not fully aligned on expected outcomes",
        ],
      },
      {
        status: "red",
        label: "At Risk",
        items: [
          "Business benefits not defined or agreed",
          "Delivery trajectory unlikely to achieve stated outcomes",
          "No mechanism in place to measure or track benefits",
        ],
      },
    ],
    description:
      "Delivery Lead assessment of whether business benefits are defined, measurable, and on track to be realised.",
    logic:
      "Manually assessed by Delivery Lead using predefined governance criteria. Green: benefits defined and tracked. Amber: gaps in measurability or alignment. Red: benefits undefined or unachievable.",
    currentReason:
      "Benefits are defined but progress tracking is not yet in place, client and team alignment on expected outcomes is still being finalised.",
    trend: "deteriorating",
    timeInState: "8 days",
    lastTransition: "2026-02-20",
    evidence: {
      rules: ["Manual RAG set by Delivery Lead"],
      triggers: ["Amber selected: benefits defined but not yet measurable or tracked"],
    },
    navigation: {
      tab: "delivery",
      destinationLabel: "Delivery, Vision & KRIs",
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
