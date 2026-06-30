"use client";

import { WorkingLayout } from "@/components/foundation/layouts/workspace/WorkingLayout";

export default function DqOverviewPage() {
  return (
    <WorkingLayout
      pageTitle="My Dashboard"
      subtitle="Your operational overview for triaging TMaaS customer requests."
      headerClassName="pt-5 pb-4"
    >
      <div className="rounded-[var(--radius-card)] border border-[var(--color-border-subtle)] bg-white p-10 text-center shadow-[var(--shadow-sm)]">
        <p className="text-sm text-[var(--color-text-muted)]">Coming next: assignments and queue insights.</p>
      </div>
    </WorkingLayout>
  );
}

