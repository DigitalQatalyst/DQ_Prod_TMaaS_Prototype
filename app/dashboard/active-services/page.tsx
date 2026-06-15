"use client";

import ClientEngagements from "@/components/features/engagements/ClientEngagements";
import DQEngagements from "@/components/features/engagements/DQEngagements";
import { useAuth } from "@/contexts/AuthContext";

export default function ActiveServicesPage() {
  const { user } = useAuth();

  if (user.role === "dq_delivery_lead") {
    return <DQEngagements />;
  }

  return <ClientEngagements />;
}
