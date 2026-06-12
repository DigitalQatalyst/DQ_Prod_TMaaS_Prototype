/**
 * Post-build SSG: writes route-specific HTML with SEO head + JSON-LD into dist/.
 * Skipped when PRERENDER_SKIP=true (e.g. fast local iteration).
 */
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { assemblePrerenderedHtml, getPrerenderPayloadForPath } from "../src/lib/seoHead";
import { getAllPrerenderPaths } from "./seo-routes";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "../dist");
const templatePath = path.join(distDir, "index.html");

function outputPathForRoute(routePath: string): string {
  if (routePath === "/") return path.join(distDir, "index.html");
  const segments = routePath.replace(/^\//, "");
  return path.join(distDir, segments, "index.html");
}

function main() {
  if (process.env.PRERENDER_SKIP === "true") {
    console.log("Skipping HTML prerender (PRERENDER_SKIP=true)");
    return;
  }

  const siteUrl = process.env.VITE_SITE_URL?.trim();
  if (!siteUrl) {
    console.warn(
      "VITE_SITE_URL not set — prerender uses default from src/lib/seo.ts. Set in CI for production canonicals."
    );
  }

  const template = readFileSync(templatePath, "utf8");
  const routes = getAllPrerenderPaths();
  let written = 0;

  for (const routePath of routes) {
    const payload = getPrerenderPayloadForPath(routePath);
    if (!payload) {
      console.warn(`Skipping prerender — no payload for ${routePath}`);
      continue;
    }

    const html = assemblePrerenderedHtml(template, payload);
    const outPath = outputPathForRoute(routePath);
    mkdirSync(path.dirname(outPath), { recursive: true });
    writeFileSync(outPath, html, "utf8");
    written += 1;
  }

  console.log(`Prerendered ${written} HTML documents into dist/`);
}

main();
