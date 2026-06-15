/**
 * Generates PDP content seed migration (Option A copy).
 * Run: npm run db:pdp-content:sql
 */
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { initialServices } from "../src/data/services";
import { escSql, generatePdpContent, jsonSql } from "./lib/pdpCopyGenerator";

const services = initialServices.filter((s) => s.serviceType !== "bundle");
const outPath = join(process.cwd(), "supabase/migrations/20250610000012_seed_pdp_content.sql");

const lines: string[] = [
  "-- PDP content seed (Option A voice). Apply after 20250610000011_pdp_content_extensions.sql",
  "-- Regenerate: npm run db:pdp-content:sql",
  "",
  "DELETE FROM product_faqs WHERE variant_id IN (",
  `  ${services.map((s) => s.id).join(", ")}`,
  ");",
  "",
  "DELETE FROM variant_deliverables WHERE variant_id IN (",
  `  ${services.map((s) => s.id).join(", ")}`,
  ");",
  "",
];

for (const service of services) {
  const content = generatePdpContent(service);

  lines.push(`-- ${service.standardName} (variant ${service.id})`);
  lines.push(
    `UPDATE product_content SET`,
    `  description = '${escSql(content.heroSummary)}',`,
    `  positioning = '${escSql(content.positioning)}',`,
    `  hero_summary = '${escSql(content.heroSummary)}',`,
    `  overview_paragraphs = ${jsonSql(content.overviewParagraphs)},`,
    `  audience_description = '${escSql(content.audienceDescription)}',`,
    `  deliverables_summary = ${jsonSql(content.deliverablesSummary)},`,
    `  delivery_process = ${jsonSql(content.deliveryProcess)},`,
    `  package_highlights = ${jsonSql(content.packageHighlights)},`,
    `  why_it_matters = ${jsonSql(content.whyItMatters)},`,
    `  faq_intro = '${escSql(content.faqIntro)}'`,
    `WHERE variant_id = ${service.id};`
  );
  lines.push("");

  content.deliverables.forEach((item, index) => {
    lines.push(
      `INSERT INTO variant_deliverables (variant_id, title, description, sort_order) VALUES (${service.id}, '${escSql(item.title)}', '${escSql(item.description)}', ${index});`
    );
  });

  content.faqs.forEach((faq, index) => {
    lines.push(
      `INSERT INTO product_faqs (variant_id, question, answer, sort_order) VALUES (${service.id}, '${escSql(faq.question)}', '${escSql(faq.answer)}', ${index});`
    );
  });

  lines.push("");
}

writeFileSync(outPath, lines.join("\n"), "utf8");
console.log(`Wrote ${outPath} (${services.length} variants)`);
