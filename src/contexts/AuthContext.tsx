import React, { createContext, useContext, useState, ReactNode } from 'react';

export type UserRole =
  | 'client'
  | 'dq_delivery_lead'
  | 'dq_portfolio_oversight'
  | 'dq_finance'
  | 'dq_support';

interface User {
  name: string;
  email: string;
  roleTitle: string;
  organization: string;
  avatar: string;
  role: UserRole;
}

const mockClientUserSTCBank: User = {
  name: "Sarah Mitchell",
  email: "sarah.mitchell@stcbank.com",
  roleTitle: "Chief Digital Officer",
  organization: "STC Bank",
  avatar: "SM",
  role: 'client',
};

const mockClientUserDEWA: User = {
  name: "Ahmed Al Tayer",
  email: "ahmed.altayer@dewa.gov.ae",
  roleTitle: "Chief Digital & Innovation Officer",
  organization: "Dubai Electricity & Water Authority",
  avatar: "AA",
  role: 'client',
};

const mockDQDeliveryLead: User = {
  name: "Rayyan Basha",
  email: "rayyan.basha@dataquest.com",
  roleTitle: "DQ Delivery Lead",
  organization: "DataQuest",
  avatar: "RB",
  role: 'dq_delivery_lead',
};

const mockDQPortfolioOversight: User = {
  name: "Nadia Al Farsi",
  email: "nadia.alfarsi@dataquest.com",
  roleTitle: "Portfolio Oversight",
  organization: "DataQuest",
  avatar: "NF",
  role: "dq_portfolio_oversight",
};

const mockDQFinance: User = {
  name: "Joseph Kimani",
  email: "joseph.kimani@dataquest.com",
  roleTitle: "Finance Operations",
  organization: "DataQuest",
  avatar: "JK",
  role: "dq_finance",
};

const mockDQSupport: User = {
  name: "Aisha Hassan",
  email: "aisha.hassan@dataquest.com",
  roleTitle: "Support Operations",
  organization: "DataQuest",
  avatar: "AH",
  role: "dq_support",
};

interface AuthContextType {
  user: User;
  setUserRole: (role: UserRole) => void;
  setUserOrganization: (organization: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(mockClientUserDEWA);

  const setUserRole = (role: UserRole) => {
    if (role === 'client') {
      setUser(mockClientUserDEWA);
    } else if (role === 'dq_delivery_lead') {
      setUser(mockDQDeliveryLead);
    } else if (role === "dq_portfolio_oversight") {
      setUser(mockDQPortfolioOversight);
    } else if (role === "dq_finance") {
      setUser(mockDQFinance);
    } else if (role === "dq_support") {
      setUser(mockDQSupport);
    }
  };

  const setUserOrganization = (organization: string) => {
    if (organization === 'STC Bank') {
      setUser(mockClientUserSTCBank);
    } else if (organization === 'Dubai Electricity & Water Authority') {
      setUser(mockClientUserDEWA);
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUserRole, setUserOrganization }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
