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
  type?: "Contracted" | "Skunk";
  upcomingMilestone?: string;
  keyRisk?: string;
  lastUpdate?: string;
}

export const mockPortfolioEngagements: PortfolioEngagement[] = [
  {
    id: "ENG-2024-001",
    name: "IT GPRC",
    organization: "STC Bank",
    health: "red",
    healthLabel: "Critical",
    krisAtRisk: 1,
    blockedItems: 2,
    lead: "Rayyan Basha",
    status: "In Delivery",
    failingIndicators: ["Dependencies Met", "Progress vs Schedule"],
    type: "Contracted",
    upcomingMilestone: "Digital GRC Design Summary",
    keyRisk: "Delayed stakeholder approvals",
    lastUpdate: "3h ago by Rayyan B.",
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
    type: "Skunk",
    upcomingMilestone: "Phase 1 Review",
    keyRisk: "Resource allocation constraints",
    lastUpdate: "1d ago by Rayyan B.",
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
    type: "Contracted",
    upcomingMilestone: "Enterprise Hub V1 Deployment",
    keyRisk: "Minor scope creep on auth flow",
    lastUpdate: "2d ago by Kenzie S.",
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
    type: "Contracted",
    upcomingMilestone: "Final Handover Sign-off",
    keyRisk: "None",
    lastUpdate: "1w ago by James C.",
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
    "IT GPRC is Critical: Dependencies Met is red (blocked task T-104 and open RAID dependency D001 past due). Progress vs Schedule is amber due to an overdue deliverable.",
  blocked: [
    {
      id: "T-104",
      label: "Security Architecture Review",
      engagement: "IT GPRC",
      type: "Blocked task",
    },
    {
      id: "D001",
      label: "Enterprise architecture standards",
      engagement: "IT GPRC",
      type: "RAID dependency",
    },
  ],
  overdue: [
    {
      id: "D2",
      label: "Target Architecture Blueprint",
      engagement: "IT GPRC",
      dueDate: "2026-03-01",
    },
  ],
  krisAtRisk: [
    {
      id: "KRI-02",
      label: "Time-to-Market for New Capabilities",
      engagement: "IT GPRC",
      current: "-12%",
      target: "-20%",
    },
  ],
  escalations: [
    {
      id: "R001",
      label: "Delayed stakeholder approvals",
      engagement: "IT GPRC",
      severity: "Critical",
    },
    {
      id: "I001",
      label: "Missing security clearance for production APIs",
      engagement: "IT GPRC",
      severity: "High",
    },
  ],
  weeklyFocus: [
    {
      label: "Digital GRC Design Summary milestone review",
      engagement: "IT GPRC",
      date: "2026-03-01",
    },
    { label: "Architecture Blueprint Review session", engagement: "IT GPRC", date: "2026-02-28" },
    {
      label: "Resolve blocked security architecture task",
      engagement: "IT GPRC",
      date: "This week",
    },
  ],
};
