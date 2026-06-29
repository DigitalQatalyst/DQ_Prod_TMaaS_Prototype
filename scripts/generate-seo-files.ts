/**
 * Generates public/sitemap.xml and public/robots.txt at build time.
 * Uses VITE_SITE_URL from the environment (falls back to production default).
 */
import { writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { getAllPrerenderPaths, STATIC_PRERENDER_PATHS } from "./seo-routes";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(__dirname, "../public");

const DEFAULT_SITE_URL = "https://tmaas.digitalqatalyst.com";
const siteUrl = (process.env.VITE_SITE_URL?.trim() || DEFAULT_SITE_URL).replace(/\/$/, "");
const today = new Date().toISOString().slice(0, 10);

const staticPaths = [...STATIC_PRERENDER_PATHS];

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function urlEntry(loc: string, priority: string): string {
  return `  <url>
    <loc>${escapeXml(`${siteUrl}${loc}`)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

const allPaths = getAllPrerenderPaths();
const servicePaths = allPaths.filter((p) => p.startsWith("/service/"));

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPaths.map((p) => urlEntry(p, p === "/" ? "1.0" : "0.8")).join("\n")}
${servicePaths.map((p) => urlEntry(p, "0.6")).join("\n")}
</urlset>
`;

const robots = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /dashboard/
Disallow: /onboarding/
Disallow: /sign-in
Disallow: /dq/sign-in
Disallow: /landing-v1
Disallow: /home
Disallow: /explore
Disallow: /butler-demo
Disallow: /cart

Sitemap: ${siteUrl}/sitemap.xml
`;

writeFileSync(path.join(publicDir, "sitemap.xml"), sitemap, "utf8");
writeFileSync(path.join(publicDir, "robots.txt"), robots, "utf8");

console.log(`Generated sitemap.xml (${allPaths.length} URLs) and robots.txt for ${siteUrl}`);
