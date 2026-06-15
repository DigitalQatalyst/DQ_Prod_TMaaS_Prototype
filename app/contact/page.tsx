import type { Metadata } from "next";
import ContactPageClient from "./_client";

export const metadata: Metadata = {
  title: "Contact Us | TMaaS",
  description:
    "Get in touch with Digital Qatalyst to discuss your technology management needs.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
