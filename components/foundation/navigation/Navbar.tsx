"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ContextSwitcher from "@/components/features/dashboard/ContextSwitcher";
import CartNavButton from "@/components/features/cart/CartNavButton";
import ExploreDigitalQatalystCta from "@/components/features/landing/ExploreDigitalQatalystCta";
import { featureFlags } from "@/lib/featureFlags";
import { PLATFORM_NAME } from "@/lib/brandLinks";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isOnMarketplace = pathname.startsWith("/marketplace");

  const navLinkClass = (active: boolean) =>
    `text-[13px] font-medium transition-colors focus-visible:ring-2 focus-visible:ring-dq-orange focus-visible:ring-offset-2 rounded-sm outline-none ${
      active ? "font-semibold text-dq-orange" : "text-gray-600 hover:text-dq-navy"
    }`;

  return (
    <>
      <header className="sticky top-0 z-40 flex h-16 items-center border-b border-gray-100 bg-white px-5 md:px-8">
        <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between">
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="flex items-center gap-2 font-semibold tracking-tight transition-opacity hover:opacity-80"
            >
              <span className="grid h-7 w-7 place-items-center rounded-md bg-dq-orange text-white">
                <span className="font-mono text-[11px] font-bold">DQ</span>
              </span>
              <span className="max-w-[10.5rem] text-sm font-semibold leading-tight text-dq-orange sm:max-w-none sm:text-lg sm:leading-none">
                {PLATFORM_NAME}
              </span>
            </Link>

            <nav className="hidden items-center gap-6 lg:flex">
              {featureFlags.isEnabled("marketplace") && (
                <Link href="/marketplace" className={navLinkClass(isOnMarketplace)}>
                  Services
                </Link>
              )}
            </nav>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            {featureFlags.isEnabled("contextSwitcher") && (
              <ContextSwitcher stage="marketing" scrolled={false} />
            )}
            {featureFlags.isEnabled("cart") && <CartNavButton className="h-9 w-9 shrink-0" />}
            {featureFlags.isEnabled("auth") && (
              <>
                <Link
                  href="/sign-in"
                  className="px-2 text-[13px] font-medium text-gray-600 transition-colors hover:text-dq-orange"
                >
                  Login
                </Link>
                <Link href="/sign-in">
                  <Button size="sm" className="px-5 text-[13px]">
                    Get Started
                  </Button>
                </Link>
              </>
            )}
            <ExploreDigitalQatalystCta className="hidden md:inline-flex" />
            {featureFlags.isEnabled("contactUs") && (
              <Link
                href="/contact"
                className="rounded-full border border-[#c5cde8] bg-white px-4 py-2 text-sm font-semibold text-dq-navy transition-colors hover:border-[#a0aacc] hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dq-orange focus-visible:ring-offset-2"
              >
                Contact Us
              </Link>
            )}
          </div>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="rounded-md p-2 outline-none focus-visible:ring-2 focus-visible:ring-dq-orange focus-visible:ring-offset-2 lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 top-16 z-30 flex flex-col gap-1 overflow-y-auto bg-white p-4 lg:hidden">
          {featureFlags.isEnabled("marketplace") && (
            <Link
              href="/marketplace"
              className="border-b border-gray-100 py-3 text-lg font-medium text-dq-navy"
              onClick={() => setMobileOpen(false)}
            >
              Services
            </Link>
          )}
          {featureFlags.isEnabled("contextSwitcher") && (
            <div className="border-b border-gray-100 py-3">
              <ContextSwitcher stage="marketing" scrolled={false} />
            </div>
          )}
          {featureFlags.isEnabled("cart") && (
            <div className="flex items-center gap-2 border-b border-gray-100 py-3">
              <CartNavButton className="h-9 w-9" />
              <span className="text-sm text-gray-600">Cart</span>
            </div>
          )}
          {featureFlags.isEnabled("auth") && (
            <>
              <Link
                href="/sign-in"
                className="border-b border-gray-100 py-3 text-lg font-medium text-dq-navy"
                onClick={() => setMobileOpen(false)}
              >
                Login
              </Link>
              <Link href="/sign-in" onClick={() => setMobileOpen(false)} className="mt-4">
                <Button className="w-full rounded-full bg-dq-navy py-3 text-center font-semibold text-white hover:bg-dq-navy/90">
                  Get Started
                </Button>
              </Link>
            </>
          )}
          <ExploreDigitalQatalystCta className="mt-4 w-full" showIcon={false} />
          {featureFlags.isEnabled("contactUs") && (
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-3 w-full rounded-full bg-dq-navy py-3 text-center font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dq-orange focus-visible:ring-offset-2"
            >
              Contact Us
            </Link>
          )}
        </div>
      )}
    </>
  );
};

export { Navbar };
export default Navbar;
