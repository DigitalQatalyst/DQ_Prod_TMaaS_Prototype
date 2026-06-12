import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import TMaaSLogo from "@/components/TMaaSLogo";
import ExploreDigitalQatalystCta from "@/components/ExploreDigitalQatalystCta";
import { btnPrimary, btnSecondary } from "@/lib/brandAccent";
import { featureFlags } from "@/lib/featureFlags";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Services", href: "/marketplace", flag: "marketplace" as const },
];

const LandingNavbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isOnContact = location.pathname.startsWith("/contact");

  const visibleLinks = NAV_LINKS.filter(
    (link) => !link.flag || featureFlags.isEnabled(link.flag)
  );

  const navLinkClass = cn(
    "text-sm font-medium text-gray-600 transition-colors hover:text-dq-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dq-orange focus-visible:ring-offset-2 rounded-sm"
  );

  const renderLink = (link: (typeof NAV_LINKS)[number]) => (
    <Link key={link.label} to={link.href} className={navLinkClass}>
      {link.label}
    </Link>
  );

  return (
    <>
      <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-gray-100 bg-white px-5 md:px-8 lg:px-10">
        <div className="flex items-center gap-8">
          <TMaaSLogo />

          <nav className="hidden items-center gap-6 lg:flex">
            {visibleLinks.map(renderLink)}
          </nav>
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          {featureFlags.isEnabled("auth") && (
            <div className="hidden items-center gap-3 md:flex">
              <Link
                to="/sign-in"
                className="px-2 text-sm font-medium text-gray-600 transition-colors hover:text-dq-navy"
              >
                Log in
              </Link>
              <Link to="/sign-in">
                <Button size="sm" className={cn(btnPrimary, "px-5")}>
                  Get Started
                </Button>
              </Link>
            </div>
          )}

          <ExploreDigitalQatalystCta className="hidden md:inline-flex" />
          {featureFlags.isEnabled("contactUs") && (
            <Link
              to="/contact"
              className={cn(
                "hidden md:block",
                isOnContact ? btnPrimary : btnSecondary,
                "px-4 py-2"
              )}
            >
              Talk to our team
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
              to={link.href}
              className="border-b border-gray-100 py-3 text-lg font-medium text-dq-navy"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          {featureFlags.isEnabled("auth") && (
            <>
              <Link
                to="/sign-in"
                className="border-b border-gray-100 py-3 text-lg font-medium text-dq-navy"
                onClick={() => setMobileOpen(false)}
              >
                Log in
              </Link>
              <Link to="/sign-in" onClick={() => setMobileOpen(false)} className="mt-4">
                <Button className={cn(btnPrimary, "w-full py-3")}>
                  Get Started
                </Button>
              </Link>
            </>
          )}
          <ExploreDigitalQatalystCta
            className="mt-4 w-full"
            showIcon={false}
          />
          {featureFlags.isEnabled("contactUs") && (
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className={cn(btnPrimary, "mt-3 w-full py-3 text-center")}
            >
              Talk to our team
            </Link>
          )}
        </div>
      )}
    </>
  );
};

export default LandingNavbar;
