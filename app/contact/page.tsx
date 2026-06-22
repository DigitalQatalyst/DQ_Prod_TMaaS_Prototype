import { Suspense } from "react";
import type { Metadata } from "next";
import ContactPageClient from "./_client";

export const metadata: Metadata = {
  title: "Talk to our team",
  description: "Get in touch with Digital Qatalyst to discuss your technology management needs.",
};

export default function ContactPage() {
  return (
    <Suspense fallback={null}>
      <ContactPageClient />
    </Suspense>
  );
}
