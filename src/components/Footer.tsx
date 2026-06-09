import { Link } from "react-router-dom";
import { Linkedin, Instagram, Youtube } from "lucide-react";
import TMaaSLogo from "@/components/TMaaSLogo";
import { featureFlags } from "@/lib/featureFlags";

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white px-5 pb-8 pt-14 md:px-8 lg:px-10">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-[1fr_auto_auto_auto] md:gap-16">
          <div className="space-y-4">
            <TMaaSLogo />
            <p className="max-w-[240px] text-[14px] leading-relaxed text-gray-500">
              Transformation Management As A Service
            </p>
          </div>

          <div>
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-gray-400">
              Explore DigitalQatalyst
            </p>
            <ul className="space-y-2.5 text-[14px] text-gray-600">
              <li>
                <a
                  href="https://digitalqatalyst.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-dq-orange"
                >
                  Visit DigitalQatalyst.com
                </a>
              </li>
              <li>
                <a
                  href="https://digitalqatalyst.com/products"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-dq-orange"
                >
                  Our Products
                </a>
              </li>
              {featureFlags.isEnabled("legal") && (
                <>
                  <li>
                    <Link to="/legal/terms" className="transition-colors hover:text-dq-orange">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link to="/legal/privacy" className="transition-colors hover:text-dq-orange">
                      Privacy Policy
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>

          <div>
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-gray-400">
              Explore TMaaS
            </p>
            <ul className="space-y-2.5 text-[14px] text-gray-600">
              {featureFlags.isEnabled("explore") && (
                <li>
                  <Link to="/explore" className="transition-colors hover:text-dq-orange">
                    About TMaaS
                  </Link>
                </li>
              )}
              {featureFlags.isEnabled("chatAssistant") && (
                <li>
                  <Link to="/#hero" className="transition-colors hover:text-dq-orange">
                    Start with AI
                  </Link>
                </li>
              )}
              {featureFlags.isEnabled("marketplace") && (
                <li>
                  <Link to="/marketplace" className="transition-colors hover:text-dq-orange">
                    Design & Deploy Services
                  </Link>
                </li>
              )}
              {featureFlags.isEnabled("contactUs") && (
                <li>
                  <Link to="/contact" className="transition-colors hover:text-dq-orange">
                    Contact Us
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
                  href="https://linkedin.com/company/digitalqatalyst"
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
                  href="https://instagram.com/digitalqatalyst"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[14px] text-gray-600 transition-colors hover:text-dq-orange"
                >
                  <Instagram size={14} />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/@digitalqatalyst"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[14px] text-gray-600 transition-colors hover:text-dq-orange"
                >
                  <Youtube size={14} />
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-gray-100 pt-6 text-[12px] text-gray-400 sm:flex-row">
          <p>© 2026 DigitalQatalyst. All rights reserved.</p>
          {featureFlags.isEnabled("legal") && (
            <div className="flex gap-5">
              <Link to="/legal/privacy" className="transition-colors hover:text-gray-700">
                Privacy
              </Link>
              <Link to="/legal/terms" className="transition-colors hover:text-gray-700">
                Terms
              </Link>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
