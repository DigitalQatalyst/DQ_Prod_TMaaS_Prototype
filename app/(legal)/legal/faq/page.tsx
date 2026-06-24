import type { Metadata } from "next";
import { redirect } from "next/navigation";
import LandingNavbar from "@/components/features/landing/landing/LandingNavbar";
import Footer from "@/components/features/landing/Footer";
import FAQSection from "@/components/features/landing/FAQSection";
import { featureFlags } from "@/lib/featureFlags";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about TMaaS and Digital Qatalyst services.",
};

export default function FaqPage() {
  if (!featureFlags.isEnabled("legal")) {
    redirect("/");
  }

  return (
    <div className="min-h-screen bg-white">
      <LandingNavbar />
      <main className="pt-20">
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
