"use client";

import { Suspense } from "react";
import { MyRequestsPage } from "@/components/features/requests/MyRequestsPage";

export default function RequestsPage() {
  return (
    <Suspense fallback={null}>
      <MyRequestsPage />
    </Suspense>
  );
}
