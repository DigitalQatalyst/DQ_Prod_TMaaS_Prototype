import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { featureFlags } from "@/lib/featureFlags";
import LegalPageClient from "./_client";

export const metadata: Metadata = {
  title: "Legal | TMaaS",
  description: "Legal information, terms, and policies for TMaaS by Digital Qatalyst.",
};

export default function LegalPage() {
  if (!featureFlags.isEnabled("legal")) {
    redirect("/");
  }

  return <LegalPageClient />;
}
