"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import type { SessionAudience } from "@/lib/auth/audience";

export type UserRole =
  | "client"
  | "dq_delivery_lead"
  | "dq_portfolio_oversight"
  | "dq_finance"
  | "dq_support";

interface User {
  id?: string;
  name: string;
  email: string;
  roleTitle: string;
  organization: string;
  avatar: string;
  role: UserRole;
  audience: SessionAudience;
}

interface AuthContextValue {
  user: User;
  isAuthenticated: boolean;
  isLoading: boolean;
  setUserRole: (role: UserRole) => void;
  setUserOrganization: (org: string) => void;
  signOut: () => Promise<void>;
}

const defaultUser: User = {
  name: "Demo User",
  email: "demo@example.com",
  roleTitle: "Client",
  organization: "",
  avatar: "DU",
  role: "client",
  audience: "customer",
};

const AuthContext = createContext<AuthContextValue>({
  user: defaultUser,
  isAuthenticated: false,
  isLoading: true,
  setUserRole: () => {},
  setUserOrganization: () => {},
  signOut: async () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(defaultUser);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const sessionUrl =
      typeof window !== "undefined"
        ? new URL("/api/auth/session", window.location.origin).toString()
        : null;

    if (!sessionUrl) {
      setIsLoading(false);
      return;
    }

    fetch(sessionUrl, { credentials: "same-origin" })
      .then(async (res) => {
        if (!res.ok) return null;
        const data = (await res.json()) as { user?: User };
        return data.user ?? null;
      })
      .then((sessionUser) => {
        if (cancelled) return;
        if (sessionUser) {
          setUser(sessionUser);
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
          setUser(defaultUser);
        }
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const setUserRole = (role: UserRole) => setUser((u) => ({ ...u, role }));
  const setUserOrganization = (organization: string) => setUser((u) => ({ ...u, organization }));

  const signOut = async () => {
    const logoutAudience = user.audience;
    const fallbackSignIn = logoutAudience === "internal" ? "/dq/sign-in" : "/sign-in";

    const logoutUrl =
      typeof window !== "undefined"
        ? new URL("/api/auth/session", window.location.origin).toString()
        : "/api/auth/session";

    const res = await fetch(logoutUrl, {
      method: "DELETE",
      credentials: "same-origin",
      headers: { Accept: "application/json" },
    });

    setIsAuthenticated(false);
    setUser(defaultUser);

    if (res.ok) {
      try {
        const data = (await res.json()) as { logoutUrl?: string | null };
        if (data.logoutUrl) {
          window.location.assign(data.logoutUrl);
          return;
        }
      } catch {
        // Fall through to local sign-in redirect.
      }
    }

    window.location.assign(fallbackSignIn);
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, isLoading, setUserRole, setUserOrganization, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
