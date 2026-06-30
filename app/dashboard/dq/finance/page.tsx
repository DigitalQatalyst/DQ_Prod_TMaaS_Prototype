"use client";

import { WorkingLayout } from "@/components/foundation/layouts/workspace/WorkingLayout";

export default function DqFinancePage() {
  return (
    <WorkingLayout
      pageTitle="Finance"
      subtitle="DQ delivery finance overview."
      headerClassName="pt-5 pb-4"
    >
      <div className="rounded-[var(--radius-card)] border border-[var(--color-border-subtle)] bg-white p-10 text-center shadow-[var(--shadow-sm)]">
        <p className="text-sm text-[var(--color-text-muted)]">Full implementation coming soon.</p>
      </div>
    </WorkingLayout>
  );
}
