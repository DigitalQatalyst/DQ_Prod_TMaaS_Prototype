import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Seo from "@/components/Seo";
import LandingNavbar from "@/components/site/landing/LandingNavbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { NOT_FOUND_SEO } from "@/lib/seo";
import { featureFlags } from "@/lib/featureFlags";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Seo
        title={NOT_FOUND_SEO.title}
        description={NOT_FOUND_SEO.description}
        path={location.pathname}
        noindex
      />
      <LandingNavbar />
      <main className="flex flex-1 flex-col items-center justify-center px-5 py-20 text-center">
        <p className="dq-eyebrow">404</p>
        <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-dq-navy md:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-gray-600">
          The page you requested doesn&apos;t exist or may have moved. Try the marketplace or
          contact our team for help.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          {featureFlags.isEnabled("marketplace") && (
            <Button asChild className="rounded-full bg-dq-orange hover:bg-[#E04020]">
              <Link to="/marketplace">Browse services</Link>
            </Button>
          )}
          <Button asChild variant="outline" className="rounded-full">
            <Link to="/">Back to home</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
