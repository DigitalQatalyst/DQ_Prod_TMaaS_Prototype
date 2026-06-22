import Link from "next/link";
import { Linkedin, Twitter, Youtube } from "lucide-react";
import TMaaSLogo from "@/components/features/landing/TMaaSLogo";
import { NAV_BROWSE_MARKETPLACE_LABEL, PLATFORM_FULL_NAME, PLATFORM_HERO_SUBCOPY, POWERED_BY_LINE } from "@/lib/brandLinks";
import { featureFlags } from "@/lib/featureFlags";

const CORP_WEB_BASE = "https://www.digitalqatalyst.com";

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white px-5 pb-8 pt-14 md:px-8 lg:px-10">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-[1fr_auto_auto] md:gap-16">
          <div className="space-y-4">
            <TMaaSLogo />
            <p className="max-w-[320px] text-[14px] leading-relaxed text-gray-500">
              {PLATFORM_HERO_SUBCOPY}
            </p>
          </div>

          <div>
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-gray-400">
              Explore
            </p>
            <ul className="space-y-2.5 text-[14px] text-gray-600">
              {featureFlags.isEnabled("marketplace") && (
                <li>
                  <Link href="/marketplace" className="transition-colors hover:text-dq-orange">
                    {NAV_BROWSE_MARKETPLACE_LABEL}
                  </Link>
                </li>
              )}
              {featureFlags.isEnabled("contactUs") && (
                <li>
                  <Link href="/contact" className="transition-colors hover:text-dq-orange">
                    Talk to our team
                  </Link>
                </li>
              )}
            </ul>
          </div>

          <div>
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-gray-400">
              Follow Us
            </p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://www.linkedin.com/company/digitalqatalyst"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[14px] text-gray-600 transition-colors hover:text-dq-orange"
                >
                  <Linkedin size={14} />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/digitalqatalyst"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[14px] text-gray-600 transition-colors hover:text-dq-orange"
                >
                  <Twitter size={14} />X
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@digitalqatalyst"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[14px] text-gray-600 transition-colors hover:text-dq-orange"
                >
                  <Youtube size={14} />
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href={CORP_WEB_BASE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[14px] text-gray-600 transition-colors hover:text-dq-orange"
                >
                  Explore DigitalQatalyst
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-6 flex flex-col items-center gap-2 border-t border-gray-100 pt-8 text-center sm:flex-row sm:justify-center sm:gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/favicon-32.png"
            alt=""
            aria-hidden
            className="h-6 w-6 shrink-0 rounded-md"
            width={24}
            height={24}
          />
          <p className="text-[13px] text-gray-500">
            {POWERED_BY_LINE}
            <span aria-hidden className="mx-2 text-gray-300">
              ·
            </span>
            {PLATFORM_FULL_NAME}
          </p>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-gray-100 pt-6 text-[12px] text-gray-400 sm:flex-row">
          <p>© 2026 DigitalQatalyst. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/legal/privacy" className="transition-colors hover:text-gray-700">
              Privacy
            </Link>
            <Link href="/legal/terms" className="transition-colors hover:text-gray-700">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
