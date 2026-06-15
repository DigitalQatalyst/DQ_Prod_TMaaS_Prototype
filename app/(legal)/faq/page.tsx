import type { Metadata } from "next";
import LandingNavbar from "@/components/features/landing/landing/LandingNavbar";
import Footer from "@/components/features/landing/Footer";
import FAQSection from "@/components/features/landing/FAQSection";

export const metadata: Metadata = {
  title: "FAQ | TMaaS",
  description: "Frequently asked questions about TMaaS and Digital Qatalyst services.",
};

export default function FaqPage() {
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
