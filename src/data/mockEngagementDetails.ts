export const mockEngagement = {
  id: "ENG-2024-001",
  name: "IT GPRC",
  client: "STC Bank",
  clientLogo: "STC",
  type: "Design",
  status: "In Delivery",
  deliveryLead: "Rayyan Basha",
  startDate: "2026-02-01",
  forecastEndDate: "2026-03-15",
  actualProgress: 65,
  plannedProgress: 70,
  visionStatement: "Establish a resilient, future-ready enterprise architecture that aligns IT investments with DEWA's strategic business goals and accelerates digital transformation.",
};

export const mockKRIs = [
  {
    id: "KRI-01",
    title: "IT-to-Business Alignment Score",
    target: "85%",
    current: "88%",
    status: "On Track",
    outcomeEvidence: "Q1 Architecture Review Board (ARB) Survey Results",
  },
  {
    id: "KRI-02",
    title: "Time-to-Market for New Capabilities",
    target: "-20%",
    current: "-12%",
    status: "At Risk",
    outcomeEvidence: "Release Cycle Analytics Dashboard",
  },
  {
    id: "KRI-03",
    title: "Technology Debt Reduction",
    target: "15%",
    current: "18%",
    status: "On Track",
    outcomeEvidence: "SonarQube & Cloud Cost Optimization Report",
  }
];

export const mockMilestones = [
  {
    id: 1,
    name: "Project Charter",
    description: "Define project scope, objectives, and governance framework.",
    startDate: "2026-02-01",
    endDate: "2026-02-15",
    originalContractDate: "2026-02-15",
    adjustedContractDate: "2026-02-15",
    forecastDate: "2026-02-15",
    status: "Completed",
    contractualStatus: "In Place",
    progress: 100,
    health: "On Track",
    outcomeMapping: ["KRI-01"],
  },
  {
    id: 2,
    name: "Digital GRC Design Summary",
    description: "Design target state architecture and integration patterns.",
    startDate: "2026-02-16",
    endDate: "2026-03-01",
    originalContractDate: "2026-03-01",
    adjustedContractDate: "2026-03-01",
    forecastDate: "2026-03-01",
    status: "In Progress",
    contractualStatus: "In Place",
    progress: 60,
    health: "At Risk",
    outcomeMapping: ["KRI-01", "KRI-02"],
  },
  {
    id: 3,
    name: "Digital GRC Practice Playbook",
    description: "Develop operational procedures and practice guidelines.",
    startDate: "2026-03-02",
    endDate: "2026-03-20",
    originalContractDate: "2026-03-20",
    adjustedContractDate: "2026-03-20",
    forecastDate: "2026-03-20",
    status: "Not Started",
    contractualStatus: "In Place",
    progress: 0,
    health: "Delayed",
    outcomeMapping: ["KRI-03"],
  },
  {
    id: 4,
    name: "Tool Deployment & Training",
    description: "System rollout and end-user enablement.",
    startDate: "2026-03-21",
    endDate: "2026-04-15",
    originalContractDate: "2026-04-15",
    adjustedContractDate: "2026-04-15",
    forecastDate: "2026-04-15",
    status: "Not Started",
    contractualStatus: "In Place",
    progress: 0,
    health: "On Track",
    outcomeMapping: ["KRI-02", "KRI-03"],
  }
];

export const mockDeliverables = [
  {
    id: "D1",
    name: "Project Charter Document",
    milestone: 1,
    milestoneName: "Project Charter",
    status: "Closed",
    dueDate: "2026-02-15",
    owner: "Maria Santos",
    description: "Formal charter defining objectives, scope, and governance.",
    completionProgress: 100,
    tasks: [
      { id: "T-101", name: "Stakeholder Alignment", status: "Done", progress: 100, owner: "Maria Santos", externalLink: "https://jira.dq.com/T-101" },
      { id: "T-102", name: "Charter Sign-off", status: "Done", progress: 100, owner: "David Kumar", externalLink: "https://jira.dq.com/T-102" }
    ]
  },
  {
    id: "D2",
    name: "Target Architecture Blueprint",
    milestone: 2,
    milestoneName: "Digital GRC Design Summary",
    status: "In Progress",
    dueDate: "2026-03-01",
    owner: "James Chen",
    description: "Detailed target state architecture diagrams.",
    completionProgress: 60,
    tasks: [
      { id: "T-103", name: "Integration Patterns Design", status: "In Progress", progress: 80, owner: "James Chen", externalLink: "https://jira.dq.com/T-103" },
      { id: "T-104", name: "Security Architecture Review", status: "Blocked", progress: 30, owner: "Alex Johnson", externalLink: "https://jira.dq.com/T-104" }
    ]
  },
  {
    id: "D3",
    name: "Practice Playbook v1.0",
    milestone: 3,
    milestoneName: "Digital GRC Practice Playbook",
    status: "New",
    dueDate: "2026-03-20",
    owner: "Rayyan Basha",
    description: "Operational procedures and practice guidelines.",
    completionProgress: 0,
    tasks: [
      { id: "T-105", name: "Draft Playbook", status: "To Do", progress: 0, owner: "Rayyan Basha", externalLink: "https://jira.dq.com/T-105" }
    ]
  }
];

export const mockRisks = [
  {
    id: "R001",
    title: "Delayed stakeholder approvals",
    description: "Key stakeholders may not be available for timely review of the blueprint.",
    severity: "Critical",
    status: "Open",
    owner: "James Chen",
    identifiedDate: "2026-02-01",
    dueDate: "2026-02-28",
  }
];

export const mockIssues = [
  {
    id: "I001",
    title: "Missing security clearance for production APIs",
    description: "Team cannot validate integration patterns without production metadata.",
    severity: "High",
    status: "Blocked",
    owner: "Alex Johnson",
    identifiedDate: "2026-02-20",
    dueDate: "2026-02-25",
  }
];

export const mockDependencies = [
  {
    id: "D001",
    title: "Enterprise architecture standards",
    description: "Requires finalized EA standards from client team",
    type: "External",
    status: "Pending",
    owner: "James Chen",
    dueDate: "2026-02-28",
  }
];

export const mockAssumptions = [
  {
    id: "A001",
    title: "Client SME Availability",
    description: "Client SMEs are available 4 hrs/week for validation.",
    status: "Valid",
    owner: "Rayyan Basha",
    dueDate: "2026-03-15",
  }
];

export const mockStakeholders = [
  {
    id: "SH001",
    name: "Ahmed Al Tayer",
    position: "Chief Digital Officer",
    organisation: "DEWA",
    type: "Project Sponsor",
    influence: "High",
    commitment: "High",
    lastInteraction: "2026-02-24",
    email: "ahmed@dewa.gov.ae",
    engagementStatus: "Confirmed",
  },
  {
    id: "SH002",
    name: "Sarah Johnson",
    position: "Head of Infrastructure",
    organisation: "DEWA",
    type: "Project Owner",
    influence: "High",
    commitment: "Medium",
    lastInteraction: "2026-02-15",
    email: "sarah@dewa.gov.ae",
    engagementStatus: "Pending",
  },
  {
    id: "SH003",
    name: "Khalid Mansouri",
    position: "IT Programme Manager",
    organisation: "DEWA",
    type: "Project Manager",
    influence: "Medium",
    commitment: "High",
    lastInteraction: "2026-02-22",
    email: "khalid@dewa.gov.ae",
    engagementStatus: "Confirmed",
  },
];

export const mockContractChanges = [
  {
    id: "CR-001",
    subject: "Additional Cloud Assessment",
    description: "Expansion of scope to include assessing the hybrid cloud environment.",
    status: "Agreed",
    milestonesAffected: ["MS02"],
    requestedBy: "Client",
    value: 45000,
    attachments: 2,
  },
  {
    id: "CR-002",
    subject: "Timeline Extension",
    description: "Extending MS03 by two weeks due to pending dependency resolution.",
    status: "In Negotiation",
    milestonesAffected: ["MS03", "MS04"],
    requestedBy: "DQ",
    value: 0,
    attachments: 1,
  }
];

export const mockContractData = {
  contractNumber: "DEWA-SO-001",
  contractValue: 155100.0,
  currency: "AED",
  contractType: "Fixed Price",
  signedDate: "2026-01-15",
  numberOfChanges: 2,
  invoicedAmount: 38775.0,
  receivedAmount: 38775.0,
};

const milestonePaymentById: Record<
  number,
  { value: number; status: "Paid" | "Pending" | "Invoiced" | "Partially Paid"; paidAmount: number; outstandingAmount: number }
> = {
  1: { value: 38775, status: "Paid", paidAmount: 38775, outstandingAmount: 0 },
  2: { value: 38775, status: "Invoiced", paidAmount: 0, outstandingAmount: 38775 },
  3: { value: 38775, status: "Pending", paidAmount: 0, outstandingAmount: 38775 },
  4: { value: 38775, status: "Pending", paidAmount: 0, outstandingAmount: 38775 },
};

/** Payment milestones aligned 1:1 with delivery milestones (mockMilestones). */
export const mockPaymentMilestones = mockMilestones.map((m) => {
  const payment = milestonePaymentById[m.id];
  return {
    id: `PM00${m.id}`,
    milestoneId: m.id,
    name: m.name,
    value: payment.value,
    status: payment.status,
    contractDate: m.adjustedContractDate,
    paidAmount: payment.paidAmount,
    outstandingAmount: payment.outstandingAmount,
  };
});

export const mockCommercialDocuments = [
  {
    id: "DOC-001",
    title: "DEWA-SO-001 Master Agreement",
    description: "Fully executed Statement of Work",
    documentType: "Contract",
    link: "#",
  },
  {
    id: "DOC-002",
    title: "Invoice INV-2026-001",
    description: "Milestone 1 Payment",
    documentType: "Invoice",
    link: "#",
  },
  {
    id: "DOC-003",
    title: "CR-001 Form",
    description: "Signed Change Request for Cloud Assessment",
    documentType: "Change",
    link: "#",
  }
];

export const mockTeamMembers = [
  { id: "TM001", name: "Rayyan Basha", role: "Delivery Lead", avatar: "RB", allocation: 100, assignments: { deliverables: 0, tasks: 2, raid: 1 } },
  { id: "TM002", name: "James Chen", role: "Solution Architect", avatar: "JC", allocation: 80, assignments: { deliverables: 2, tasks: 5, raid: 2 } },
  { id: "TM003", name: "Maria Santos", role: "Technical Lead", avatar: "MS", allocation: 100, assignments: { deliverables: 1, tasks: 3, raid: 0 } },
  { id: "TM004", name: "Alex Johnson", role: "Security SME", avatar: "AJ", allocation: 50, assignments: { deliverables: 0, tasks: 1, raid: 1 } },
];

export const mockSessions = [
  {
    id: "SES-01",
    title: "Architecture Blueprint Review",
    date: "2026-02-28",
    time: "10:00 AM - 12:00 PM",
    type: "Workshop",
    status: "Scheduled",
  }
];
