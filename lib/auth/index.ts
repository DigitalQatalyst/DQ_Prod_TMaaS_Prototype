// Auth types extracted from AuthContext.
// The AuthProvider component itself lives in components/foundation/auth/.

export type UserRole =
  | "client"
  | "dq_delivery_lead"
  | "dq_portfolio_oversight"
  | "dq_finance"
  | "dq_support";

export interface AuthUser {
  name: string;
  email: string;
  roleTitle: string;
  organization: string;
  avatar: string;
  role: UserRole;
}
