import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  transpilePackages: [
    "@dbp/ui",
    "@dbp/shell-transaction",
    "@dbp/ps-search",
    "@dbp/ps-notif",
    "@dbp/ps-ai",
    "@dbp/ps-audit",
    "@dbp/ps-rbac",
  ],
  experimental: {
    extensionAlias: {
      ".js": [".ts", ".tsx", ".js", ".jsx"],
    },
  },
};

export default nextConfig;
