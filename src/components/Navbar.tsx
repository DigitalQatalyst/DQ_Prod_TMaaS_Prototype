import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ContextSwitcher from "@/components/ContextSwitcher";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 transition-all duration-300">
      <div
        className={[
          "mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300",
          scrolled
            ? "mt-3 h-12 rounded-full border border-navy-100 bg-white/70 px-4 shadow-sm backdrop-blur-xl backdrop-saturate-150"
            : "h-16",
        ].join(" ")}
        style={
          scrolled
            ? {
                boxShadow:
                  "0 1px 0 rgba(3,15,53,0.04), 0 8px 24px rgba(3,15,53,0.06)",
              }
            : undefined
        }
      >
        <div className="flex items-center gap-8">
          <a
            href="/"
            className="flex items-center gap-2 font-semibold tracking-tight transition-opacity hover:opacity-80"
          >
            <span className="grid h-7 w-7 place-items-center rounded-md bg-orange-500 text-white">
              <span className="font-mono text-[11px] font-bold">DQ</span>
            </span>
            <span className="text-orange-500 font-heading text-lg">
              TMaaS
            </span>
          </a>
          
          <a href="/marketplace" className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground md:block">
            Marketplace
          </a>
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <ContextSwitcher stage="marketing" scrolled={scrolled} />
          <a href="/sign-in" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Login</a>
          <a href="/sign-in">
            <Button size="sm" className="rounded-full bg-orange-500 px-5 text-white shadow-[var(--glow-orange-sm)] hover:bg-orange-400 transition-all">
              Get Started
            </Button>
          </a>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="mt-2 border-t border-border bg-background/95 p-6 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4">
            <div className="pt-1">
              <ContextSwitcher stage="marketing" scrolled />
            </div>
            <a href="/marketplace" className="text-sm text-muted-foreground">Marketplace</a>
            <a href="/sign-in">
              <Button size="sm" className="mt-2 w-full rounded-full bg-orange-500 text-white shadow-[var(--glow-orange-sm)] hover:bg-orange-400">Get Started</Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
