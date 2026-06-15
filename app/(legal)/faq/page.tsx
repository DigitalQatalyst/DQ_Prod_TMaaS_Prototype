import LandingNavbar from "@/components/features/landing/landing/LandingNavbar";
import Footer from "@/components/features/landing/Footer";
import FAQSection from "@/components/features/landing/FAQSection";

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
