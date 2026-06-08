import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { featureFlags } from "@/lib/featureFlags";

const NAV_LINKS = [
  { label: "Marketplace", href: "/marketplace", flag: "marketplace" as const, external: false },
  { label: "How it Works", href: "#how-it-works", flag: null, external: false },
  { label: "Offerings", href: "#offerings", flag: null, external: false },
  { label: "Resources", href: "/legal/faq", flag: "legal" as const, external: false },
  { label: "About Us", href: "/explore", flag: "explore" as const, external: false },
];

const LandingNavbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const visibleLinks = NAV_LINKS.filter(
    (link) => !link.flag || featureFlags.isEnabled(link.flag)
  );

  const navLinkClass =
    "text-[13px] font-medium text-gray-600 transition-colors hover:text-dq-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dq-orange focus-visible:ring-offset-2 rounded-sm";

  const renderLink = (link: (typeof NAV_LINKS)[number]) => {
    if (link.href.startsWith("#")) {
      return (
        <a key={link.label} href={link.href} className={navLinkClass}>
          {link.label}
        </a>
      );
    }
    return (
      <Link key={link.label} to={link.href} className={navLinkClass}>
        {link.label}
      </Link>
    );
  };

  return (
    <>
      <header className="sticky top-0 z-40 flex h-16 items-center border-b border-gray-100 bg-white px-5 md:px-8 lg:px-10">
        <div className="mx-auto grid w-full max-w-[1200px] grid-cols-[1fr_auto_1fr] items-center">
          <Link
            to="/home"
            className="flex items-center gap-2 font-semibold tracking-tight transition-opacity hover:opacity-80"
          >
            <span className="grid h-7 w-7 place-items-center rounded-md bg-dq-orange text-white">
              <span className="font-mono text-[11px] font-bold">DQ</span>
            </span>
            <span className="text-lg text-dq-orange">TMaaS</span>
          </Link>

          <nav className="hidden items-center justify-center gap-7 lg:flex">
            {visibleLinks.map(renderLink)}
          </nav>

          <div className="hidden items-center justify-end gap-3 lg:flex">
            {featureFlags.isEnabled("auth") && (
              <>
                <Link
                  to="/sign-in"
                  className="px-2 text-[13px] font-medium text-gray-600 transition-colors hover:text-dq-navy"
                >
                  Log in
                </Link>
                <Link to="/sign-in">
                  <Button
                    size="sm"
                    className="rounded-full bg-dq-orange px-5 text-[13px] font-semibold text-white hover:bg-[#E04020]"
                  >
                    Get Started
                  </Button>
                </Link>
              </>
            )}
          </div>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="col-start-3 justify-self-end rounded-md p-2 outline-none focus-visible:ring-2 focus-visible:ring-dq-orange focus-visible:ring-offset-2 lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 top-16 z-30 flex flex-col gap-1 overflow-y-auto bg-white p-4 lg:hidden">
          {visibleLinks.map((link) =>
            link.href.startsWith("#") ? (
              <a
                key={link.label}
                href={link.href}
                className="border-b border-gray-100 py-3 text-lg font-medium text-dq-navy"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className="border-b border-gray-100 py-3 text-lg font-medium text-dq-navy"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
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
                <Button className="w-full rounded-full bg-dq-orange py-3 text-center font-semibold text-white hover:bg-[#E04020]">
                  Get Started
                </Button>
              </Link>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default LandingNavbar;
