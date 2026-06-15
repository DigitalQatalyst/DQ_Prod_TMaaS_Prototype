"use client";

import DashboardLayout from "@/components/foundation/layouts/DashboardLayout";

export default function AccountSettingsPage() {
  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto space-y-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-navy-950">Settings</h1>
          <p className="mt-1 text-sm text-gray-500">Manage account settings.</p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-12 text-center">
          <p className="text-sm text-gray-400">Full implementation coming soon.</p>
        </div>
      </div>
    </DashboardLayout>
  );
}
