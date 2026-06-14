import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  turbopack: {
    // Fix workspace root detection (multiple lockfiles in parent dirs)
    root: __dirname,
  },
  // Only treat *.page.tsx / *.page.ts / *.page.jsx / *.page.js as pages-router
  // entries AND as app-router page/route segments. This prevents the legacy
  // Vite pages in src/pages/ from being compiled as Next.js routes during
  // the incremental migration. App-router special files (layout, error, loading,
  // not-found) are NOT affected by pageExtensions and still use standard names.
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
};

export default nextConfig;
