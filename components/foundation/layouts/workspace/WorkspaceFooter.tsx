import Link from "next/link";
import { PLATFORM_NAME } from "@/lib/utils";

/** DWS.01 SolutionFooter pattern — compact workspace status bar. */
export function WorkspaceFooter() {
  return (
    <footer className="flex h-9 w-full shrink-0 items-center justify-between border-t border-[var(--color-border-subtle)] bg-[var(--color-surface)] px-4 text-[11px] text-[var(--color-text-muted)]">
      <div className="flex items-center gap-3">
        <span className="font-medium text-[var(--color-text-secondary)]">{PLATFORM_NAME}</span>
        <span className="text-[var(--color-text-disabled)]">© 2026 DigitalQatalyst</span>
      </div>
      <nav className="flex items-center gap-3">
        <Link href="/legal/privacy" className="hover:text-[var(--color-text-secondary)]">
          Privacy
        </Link>
        <Link href="/legal/terms" className="hover:text-[var(--color-text-secondary)]">
          Terms
        </Link>
        <a
          href="mailto:info@digitalqatalyst.com"
          className="hover:text-[var(--color-text-secondary)]"
        >
          Support
        </a>
      </nav>
    </footer>
  );
}
