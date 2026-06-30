"use client";

import { DqRequestsWorkspace } from "@/components/features/dq-requests/DqRequestsWorkspace";

export default function DqQueuePage() {
  return (
    <DqRequestsWorkspace
      mode="queue"
      pageTitle="Requests Queue"
      subtitle="Triaged customer requests across TMaaS."
    />
  );
}
