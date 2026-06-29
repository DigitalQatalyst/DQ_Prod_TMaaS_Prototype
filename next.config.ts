import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /**
   * TMaaS consumes some `@dbp/*` packages directly from TypeScript source
   * (e.g. `@dbp/ui/src/index.ts`). Next must transpile these packages or it
   * will throw "Unknown module type".
   */
  transpilePackages: ["@dbp/ui"],
};

export default nextConfig;
