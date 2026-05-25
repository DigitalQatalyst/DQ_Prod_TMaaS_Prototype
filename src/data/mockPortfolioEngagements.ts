export type PortfolioHealth = "green" | "amber" | "red";

export interface PortfolioEngagement {
  id: string;
  name: string;
  organization: string;
  health: PortfolioHealth;
  healthLabel: string;
  krisAtRisk: number;
  blockedItems: number;
  lead: string;
  status: string;
  failingIndicators?: string[];
}

export const mockPortfolioEngagements: PortfolioEngagement[] = [
  {
    id: "ENG-2024-001",
    name: "IT GPRC",
    organization: "Dubai Electricity & Water Authority",
    health: "red",
    healthLabel: "Critical",
    krisAtRisk: 1,
    blockedItems: 2,
    lead: "Rayyan Basha",
    status: "In Delivery",
    failingIndicators: ["Dependencies Met", "Progress vs Schedule"],
  },
  {
    id: "L-2025-081",
    name: "IT.GPRC",
    organization: "STC Bank",
    health: "amber",
    healthLabel: "At Risk",
    krisAtRisk: 0,
    blockedItems: 1,
    lead: "Rayyan Basha",
    status: "Paused",
    failingIndicators: ["Stakeholders Committed"],
  },
  {
    id: "L-2025-092",
    name: "EJP Enterprise Hub Deploy",
    organization: "Khalifa Fund",
    health: "green",
    healthLabel: "On Track",
    krisAtRisk: 0,
    blockedItems: 0,
    lead: "Kenzie Sharon",
    status: "Paused",
  },
  {
    id: "L-2024-110",
    name: "Data Platform Modernisation",
    organization: "Emirates NBD",
    health: "green",
    healthLabel: "On Track",
    krisAtRisk: 0,
    blockedItems: 0,
    lead: "James Chen",
    status: "Completed",
  },
];

export const portfolioHealthMetrics = {
  total: mockPortfolioEngagements.length,
  onTrack: mockPortfolioEngagements.filter((e) => e.health === "green").length,
  atRisk: mockPortfolioEngagements.filter((e) => e.health === "amber").length,
  critical: mockPortfolioEngagements.filter((e) => e.health === "red").length,
  completed: mockPortfolioEngagements.filter((e) => e.status === "Completed").length,
};

export const governanceAlerts = {
  criticalSummary:
    "IT GPRC is Critical: Dependencies Met is red (blocked task T-104 and Issue I001). Progress vs Schedule is amber due to an overdue deliverable.",
  blocked: [
    { id: "T-104", label: "Security Architecture Review", engagement: "IT GPRC", type: "Task" },
    { id: "I001", label: "Missing security clearance for production APIs", engagement: "IT GPRC", type: "Issue" },
  ],
  overdue: [
    { id: "D2", label: "Target Architecture Blueprint", engagement: "IT GPRC", dueDate: "2026-03-01" },
  ],
  krisAtRisk: [
    { id: "KRI-02", label: "Time-to-Market for New Capabilities", engagement: "IT GPRC", current: "-12%", target: "-20%" },
  ],
  escalations: [
    { id: "R001", label: "Delayed stakeholder approvals", engagement: "IT GPRC", severity: "Critical" },
    { id: "I001", label: "Missing security clearance for production APIs", engagement: "IT GPRC", severity: "High" },
  ],
  weeklyFocus: [
    { label: "Digital GRC Design Summary milestone review", engagement: "IT GPRC", date: "2026-03-01" },
    { label: "Architecture Blueprint Review session", engagement: "IT GPRC", date: "2026-02-28" },
    { label: "Resolve blocked security architecture task", engagement: "IT GPRC", date: "This week" },
  ],
};
