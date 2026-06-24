"use client";

// TODO: Task 9 — replace stubs with full AuthContext implementation
import { createContext, useContext, useState, ReactNode } from "react";

export type UserRole =
  | "client"
  | "dq_delivery_lead"
  | "dq_portfolio_oversight"
  | "dq_finance"
  | "dq_support";

interface User {
  name: string;
  email: string;
  roleTitle: string;
  organization: string;
  avatar: string;
  role: UserRole;
}

interface AuthContextValue {
  user: User;
  setUserRole: (role: UserRole) => void;
  setUserOrganization: (org: string) => void;
}

const defaultUser: User = {
  name: "Demo User",
  email: "demo@example.com",
  roleTitle: "Client",
  organization: "STC Bank",
  avatar: "DU",
  role: "client",
};

const AuthContext = createContext<AuthContextValue>({
  user: defaultUser,
  setUserRole: () => {},
  setUserOrganization: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(defaultUser);

  const setUserRole = (role: UserRole) => setUser((u) => ({ ...u, role }));
  const setUserOrganization = (organization: string) => setUser((u) => ({ ...u, organization }));

  return (
    <AuthContext.Provider value={{ user, setUserRole, setUserOrganization }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
