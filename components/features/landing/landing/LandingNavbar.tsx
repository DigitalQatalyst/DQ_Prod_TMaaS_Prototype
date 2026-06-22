"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import TMaaSLogo from "@/components/features/landing/TMaaSLogo";
import ExploreDigitalQatalystCta from "@/components/features/landing/ExploreDigitalQatalystCta";
import { btnPrimary } from "@/lib/brandAccent";
import { NAV_BROWSE_MARKETPLACE_LABEL } from "@/lib/brandLinks";
import {
  LAUNCH_ADVISORY_NAV_CTA_LABEL,
  buildLaunchAdvisoryContactPath,
} from "@/lib/launchOffering";
import { featureFlags } from "@/lib/featureFlags";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  {
    label: NAV_BROWSE_MARKETPLACE_LABEL,
    href: "/marketplace",
    flag: "marketplace" as const,
  },
];

const LandingNavbarInner = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const launchAdvisoryPath = buildLaunchAdvisoryContactPath();
  const isOnLaunchAdvisory =
    pathname.startsWith("/contact") && searchParams.get("offering") === "launch-advisory";

  const visibleLinks = NAV_LINKS.filter((link) => !link.flag || featureFlags.isEnabled(link.flag));

  const navLinkClass = cn(
    "text-sm font-medium text-gray-600 transition-colors hover:text-dq-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dq-orange focus-visible:ring-offset-2 rounded-sm"
  );

  const renderLink = (link: (typeof NAV_LINKS)[number]) => (
    <Link key={link.label} href={link.href} className={navLinkClass}>
      {link.label}
    </Link>
  );

  return (
    <>
      <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-gray-100 bg-white px-5 md:px-8 lg:px-10">
        <div className="flex items-center gap-2 lg:gap-3">
          <TMaaSLogo size="lg" />

          <nav className="hidden items-center lg:flex">{visibleLinks.map(renderLink)}</nav>
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          {featureFlags.isEnabled("auth") && (
            <div className="hidden items-center gap-3 md:flex">
              <Link
                href="/sign-in"
                className="px-2 text-sm font-medium text-gray-600 transition-colors hover:text-dq-navy"
              >
                Log in
              </Link>
              <Link href="/sign-in">
                <Button size="sm" className={cn(btnPrimary, "px-5")}>
                  Get Started
                </Button>
              </Link>
            </div>
          )}

          <ExploreDigitalQatalystCta className="hidden md:inline-flex" />
          {featureFlags.isEnabled("contactUs") && (
            <Link
              href={launchAdvisoryPath}
              className={cn(
                btnPrimary,
                "hidden px-4 py-2 md:inline-flex",
                isOnLaunchAdvisory && "ring-2 ring-dq-orange ring-offset-2"
              )}
            >
              {LAUNCH_ADVISORY_NAV_CTA_LABEL}
            </Link>
          )}

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="rounded-md p-2 outline-none focus-visible:ring-2 focus-visible:ring-dq-navy focus-visible:ring-offset-2 lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 top-16 z-30 flex flex-col gap-1 overflow-y-auto bg-white p-4 lg:hidden">
          {visibleLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="border-b border-gray-100 py-3 text-lg font-medium text-dq-navy"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          {featureFlags.isEnabled("auth") && (
            <>
              <Link
                href="/sign-in"
                className="border-b border-gray-100 py-3 text-lg font-medium text-dq-navy"
                onClick={() => setMobileOpen(false)}
              >
                Log in
              </Link>
              <Link href="/sign-in" onClick={() => setMobileOpen(false)} className="mt-4">
                <Button className={cn(btnPrimary, "w-full py-3")}>Get Started</Button>
              </Link>
            </>
          )}
          <ExploreDigitalQatalystCta className="mt-4 w-full" showIcon={false} />
          {featureFlags.isEnabled("contactUs") && (
            <Link
              href={launchAdvisoryPath}
              onClick={() => setMobileOpen(false)}
              className={cn(btnPrimary, "mt-3 w-full py-3 text-center")}
            >
              {LAUNCH_ADVISORY_NAV_CTA_LABEL}
            </Link>
          )}
        </div>
      )}
    </>
  );
};

const LandingNavbar = () => (
  <Suspense fallback={null}>
    <LandingNavbarInner />
  </Suspense>
);

export default LandingNavbar;
