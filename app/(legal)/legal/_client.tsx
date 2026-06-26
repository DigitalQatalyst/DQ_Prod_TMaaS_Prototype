"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, FileText, Shield, HelpCircle, Scale, ChevronRight, Gift } from "lucide-react";
import { LAUNCH_ADVISORY_TERMS_PATH } from "@/lib/launchOffering";

interface LegalCategory {
  icon: typeof FileText;
  title: string;
  description: string;
  path: string;
  color: string;
}

const legalCategories: LegalCategory[] = [
  {
    icon: FileText,
    title: "Terms of Service",
    description: "Describes the rules you agree to when using our services",
    path: "/legal/terms",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Shield,
    title: "Privacy Policy",
    description:
      "Explains what information we collect and why, how we use it, and how to review and update it",
    path: "/legal/privacy",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: HelpCircle,
    title: "Frequently Asked Questions",
    description: "Common questions about our legal terms and policies",
    path: "/legal/faq",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Gift,
    title: "June Launch Offer Terms",
    description: "Conditions for the complimentary advisory service promotion",
    path: LAUNCH_ADVISORY_TERMS_PATH,
    color: "bg-orange-100 text-dq-orange",
  },
];

export default function LegalPageClient() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = legalCategories.filter(
    (category) =>
      category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-white">
      <section className="border-b border-gray-200 bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-blue-100 p-4">
              <Scale size={32} className="text-blue-600" />
            </div>
          </div>
          <h1 className="mb-4 text-4xl font-bold text-dq-navy">Legal Information</h1>
          <p className="text-lg text-gray-600">
            Simplified contractual terms and resources for customers, partners, and developers
          </p>

          <div className="mt-8">
            <div className="relative mx-auto max-w-2xl">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search legal documents..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-12 w-full rounded-lg border border-gray-300 pl-12 pr-4 text-base focus:border-dq-orange focus:outline-none focus:ring-2 focus:ring-dq-orange/20"
              />
            </div>
            {searchQuery && (
              <p className="mt-2 text-sm text-gray-600">
                {filteredCategories.length} result{filteredCategories.length !== 1 ? "s" : ""} found
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredCategories.map((category) => {
              const Icon = category.icon;
              return (
                <Link
                  key={category.path}
                  href={category.path}
                  className="group rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-dq-orange/50 hover:shadow-lg"
                >
                  <div
                    className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg ${category.color}`}
                  >
                    <Icon size={24} />
                  </div>
                  <h3 className="mb-2 flex items-center justify-between text-lg font-semibold text-dq-navy">
                    {category.title}
                    <ChevronRight
                      size={20}
                      className="text-gray-400 transition-transform group-hover:translate-x-1"
                    />
                  </h3>
                  <p className="text-sm text-gray-600">{category.description}</p>
                </Link>
              );
            })}
          </div>

          <div className="mt-12 rounded-lg border border-gray-200 bg-gray-50 p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex-1">
                <h3 className="mb-2 text-lg font-semibold text-dq-navy">Have a question?</h3>
                <p className="text-sm text-gray-600">
                  Please review the{" "}
                  <Link href="/legal/faq" className="text-dq-orange hover:underline">
                    Frequently Asked Questions
                  </Link>{" "}
                  or contact our support team for assistance.
                </p>
              </div>
              <Link
                href="/dashboard/support"
                className="inline-block rounded-lg bg-dq-orange px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-orange-600"
              >
                Contact Support
              </Link>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">Last updated: January 1, 2026</p>
          </div>
        </div>
      </section>
    </main>
  );
}
