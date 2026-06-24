import Link from "next/link";
import { Linkedin, Twitter, Youtube } from "lucide-react";
import TMaaSLogo from "@/components/features/landing/TMaaSLogo";
import DqBrandMark from "@/components/foundation/DqBrandMark";
import {
  DQ_CORP_WEB_ABOUT_URL,
  DQ_CORP_WEB_URL,
  FOOTER_ABOUT_DQ_LABEL,
  FOOTER_EXPLORE_DQ_LABEL,
  NAV_BROWSE_MARKETPLACE_LABEL,
  PLATFORM_FOOTER_PRODUCT_LINE,
  PLATFORM_HERO_SUBCOPY,
  POWERED_BY_LINE,
} from "@/lib/brandLinks";
import { featureFlags } from "@/lib/featureFlags";

const footerColumnLabelClass =
  "mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-gray-400";

const footerLinkClass = "transition-colors hover:text-dq-orange";

const footerExternalLinkClass =
  "inline-flex items-center gap-2 text-[14px] text-gray-600 transition-colors hover:text-dq-orange";

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white px-5 pb-8 pt-14 md:px-8 lg:px-10">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1fr_auto_auto_auto] lg:gap-16">
          <div className="space-y-4 md:col-span-2 lg:col-span-1">
            <TMaaSLogo />
            <p className="max-w-[320px] text-[14px] leading-relaxed text-gray-500">
              {PLATFORM_HERO_SUBCOPY}
            </p>
          </div>

          <div>
            <p className={footerColumnLabelClass}>Explore</p>
            <ul className="space-y-2.5 text-[14px] text-gray-600">
              {featureFlags.isEnabled("marketplace") && (
                <li>
                  <Link href="/marketplace" className={footerLinkClass}>
                    {NAV_BROWSE_MARKETPLACE_LABEL}
                  </Link>
                </li>
              )}
              {featureFlags.isEnabled("contactUs") && (
                <li>
                  <Link href="/contact" className={footerLinkClass}>
                    Talk to our team
                  </Link>
                </li>
              )}
              <li>
                <Link href="/legal/privacy" className={footerLinkClass}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className={footerLinkClass}>
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className={footerColumnLabelClass}>Company</p>
            <ul className="space-y-2.5 text-[14px] text-gray-600">
              <li>
                <a
                  href={DQ_CORP_WEB_ABOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={footerExternalLinkClass}
                >
                  {FOOTER_ABOUT_DQ_LABEL}
                </a>
              </li>
              <li>
                <a
                  href={DQ_CORP_WEB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={footerExternalLinkClass}
                >
                  {FOOTER_EXPLORE_DQ_LABEL}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className={footerColumnLabelClass}>Follow us</p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://www.linkedin.com/company/digitalqatalyst"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={footerExternalLinkClass}
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
                  className={footerExternalLinkClass}
                >
                  <Twitter size={14} />X
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@digitalqatalyst"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={footerExternalLinkClass}
                >
                  <Youtube size={14} />
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 border-t border-gray-100 pt-8 text-[13px] text-gray-500 lg:grid-cols-3 lg:items-center lg:gap-6">
          <div className="flex items-center justify-center gap-2.5 lg:justify-start">
            <DqBrandMark size="md" />
            <span>{POWERED_BY_LINE}</span>
          </div>
          <p className="text-center">{PLATFORM_FOOTER_PRODUCT_LINE}</p>
          <p className="text-center lg:text-right">© 2026 DigitalQatalyst</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
