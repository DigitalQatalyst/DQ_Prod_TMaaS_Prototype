export type ServiceBundle = {
  id: string;
  title: string;
  outcomeStatement: string;
  servicesIncludedCount: number;
  timeline: string;
  price: string;
  icon: string;
};

export const recommendedBundles: ServiceBundle[] = [
  {
    "id": "customer-experience-bundle",
    "title": "Customer Experience Bundle",
    "outcomeStatement": "End-to-end customer engagement, digital channels, marketing, CRM, and support solutions bundled into a unified transformation offering.",
    "servicesIncludedCount": 5,
    "timeline": "16-24 Weeks",
    "price": "Custom",
    "icon": "Package",
    "category": "Customer Experience"
  },
  {
    "id": "digital-workspace-bundle",
    "title": "Digital Workspace Bundle",
    "outcomeStatement": "Unified workplace, operations, ERP, workforce, and governance solutions for enterprise operations transformation.",
    "servicesIncludedCount": 5,
    "timeline": "16-24 Weeks",
    "price": "Custom",
    "icon": "Package",
    "category": "Digital Workspace"
  },
  {
    "id": "ai--analytics-bundle",
    "title": "AI & Analytics Bundle",
    "outcomeStatement": "Enterprise AI, analytics, and data platform services bundled into a unified intelligence transformation offering.",
    "servicesIncludedCount": 5,
    "timeline": "16-24 Weeks",
    "price": "Custom",
    "icon": "Package",
    "category": "AI & Analytics"
  },
  {
    "id": "secdevops-bundle",
    "title": "SecDevOps Bundle",
    "outcomeStatement": "Enterprise governance, DevSecOps, and IT operations services bundled into a unified delivery and operations offering.",
    "servicesIncludedCount": 5,
    "timeline": "16-24 Weeks",
    "price": "Custom",
    "icon": "Package",
    "category": "SecDevOps"
  }
];
