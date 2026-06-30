"use client";

import { DqRequestsWorkspace } from "@/components/features/dq-requests/DqRequestsWorkspace";

export default function DqMyAssignmentsPage() {
  return (
    <DqRequestsWorkspace
      mode="assignments"
      pageTitle="My Assignments"
      subtitle="Requests assigned to you and awaiting action."
    />
  );
}
