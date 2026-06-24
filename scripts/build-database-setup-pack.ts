/**
 * Builds release-1-database-setup/ — clean-prod migration pack for Release 1.
 * Sources:
 *   - Schema DDL from git history (pre-supabase untrack)
 *   - Base catalog INSERT from git 08 (structure + rows only; copy superseded in 09–10)
 *   - Card + PDP copy from workspace/dba-catalog-copy (handoff authority)
 *
 * Run: npm run db:setup-pack
 */
import { execSync } from "node:child_process";
import { mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const packRoot = join(root, "release-1-database-setup");
const migrationsDir = join(packRoot, "migrations");
const gitRef = "a648937^";

const SCHEMA_FROM_GIT = [
  "20250610000001_catalog_schema.sql",
  "20250610000002_commerce_schema.sql",
  "20250610000003_content_schema.sql",
  "20250610000004_commerce_orders.sql",
  "20250610000005_search_index.sql",
  "20250610000006_rls_policies.sql",
  "20250610000011_pdp_content_extensions.sql",
];

const PACK_FILES: {
  out: string;
  source: "git" | "workspace" | "supabase";
  path: string;
  header?: string;
}[] = [
  ...SCHEMA_FROM_GIT.map((name, i) => ({
    out: `${String(i + 1).padStart(2, "0")}_${name.replace(/^\d+_/, "")}`,
    source: "git" as const,
    path: `supabase/migrations/${name}`,
  })),
  {
    out: "08_base_catalog_seed.sql",
    source: "git",
    path: "supabase/migrations/20250610000008_seed_full_catalog.sql",
    header: `-- Base catalog rows (35 products, 221 variants).
-- Card and PDP copy in this file are placeholders; migrations 09–10 apply the
-- authoritative non-generic copy from workspace/dba-catalog-copy (see handoff.md).
`,
  },
  {
    out: "09_card_content.sql",
    source: "workspace",
    path: "workspace/dba-catalog-copy/update-card-content.sql",
  },
  {
    out: "10_pdp_content.sql",
    source: "workspace",
    path: "workspace/dba-catalog-copy/seed_pdp_content.sql",
  },
  {
    out: "11_display_labels.sql",
    source: "supabase",
    path: "supabase/migrations/20250610000013_update_display_labels.sql",
  },
  {
    out: "12_delivery_process.sql",
    source: "supabase",
    path: "supabase/migrations/20250612000014_update_advisory_manage_delivery_process.sql",
  },
  {
    out: "13_featured_services.sql",
    source: "workspace",
    path: "workspace/dba-catalog-copy/update-featured-services.sql",
  },
];

function gitShow(path: string): string {
  return execSync(`git show ${gitRef}:${path}`, { cwd: root, encoding: "utf8" });
}

function readSource(entry: (typeof PACK_FILES)[number]): string {
  if (entry.source === "git") {
    return gitShow(entry.path);
  }
  const abs = join(root, entry.path);
  return readFileSync(abs, "utf8");
}

function main() {
  mkdirSync(migrationsDir, { recursive: true });

  const written: string[] = [];

  for (const entry of PACK_FILES) {
    let body = readSource(entry);
    if (entry.header) {
      body = entry.header + "\n" + body;
    }
    const outPath = join(migrationsDir, entry.out);
    writeFileSync(outPath, body);
    written.push(entry.out);
    console.log(`Wrote migrations/${entry.out}`);
  }

  const applyAllParts = written.map((name) => {
    const content = readFileSync(join(migrationsDir, name), "utf8");
    return [
      `-- =============================================================================`,
      `-- ${name}`,
      `-- =============================================================================`,
      content.trimEnd(),
      "",
    ].join("\n");
  });

  const readme = `# TMaaS Release 1 — Database Setup

Migration pack for a **clean** Supabase production database with **non-generic catalog copy**.

Aligned with \`workspace/dba-catalog-copy/handoff.md\`.

## Apply order (migrations/)

| # | File | Purpose |
|---|------|---------|
| 01–07 | \`*_schema*.sql\`, \`pdp_content_extensions.sql\` | Tables, views, search index, RLS |
| 08 | \`base_catalog_seed.sql\` | Full catalog row structure (221 variants) |
| 09 | \`card_content.sql\` | **Handoff** — unique card copy (UPDATE, idempotent) |
| 10 | \`pdp_content.sql\` | **Handoff** — unique PDP copy (UPDATE, idempotent) |
| 11 | \`display_labels.sql\` | Buyer-facing stage labels + product title renames |
| 12 | \`delivery_process.sql\` | Assess / Managed How It Works lifecycles |
| 13 | \`featured_services.sql\` | Homepage featured service rankings |

## Quick start

**Supabase SQL Editor** — paste and run \`00_apply_all.sql\`, or run each file in \`migrations/\` in numeric order.

After seeding:

\`\`\`sql
SELECT refresh_product_search_index();
\`\`\`

## Verification (from handoff)

\`\`\`sql
SELECT COUNT(DISTINCT short_description) AS distinct_short_descriptions
FROM products WHERE status = 'published';

SELECT COUNT(DISTINCT faq_intro) AS distinct_faq_intros
FROM product_content WHERE faq_intro IS NOT NULL;

SELECT short_description, positioning
FROM marketplace_listings_view WHERE variant_id = 85;
\`\`\`

## Regenerate this pack

\`\`\`bash
npm run db:card-content:sql   # refresh workspace/dba-catalog-copy/update-card-content.sql
npm run db:pdp-content:sql    # refresh workspace/dba-catalog-copy/seed_pdp_content.sql
npm run db:setup-pack         # rebuild this folder
\`\`\`

**Do not** add legacy \`seed_pdp_content\` migrations from git — card and PDP copy come only from 09 and 10.

Generated: ${new Date().toISOString().slice(0, 10)}
`;

  writeFileSync(
    join(packRoot, "00_apply_all.sql"),
    `-- TMaaS clean production setup — apply on an empty Supabase public schema.\n-- Generated ${new Date().toISOString()}\n\n` +
      applyAllParts.join("\n")
  );

  writeFileSync(join(packRoot, "README.md"), readme);

  const applySh = `#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")" && pwd)"
if [[ -z "\${DATABASE_URL:-}" ]]; then
  echo "Set DATABASE_URL to your Supabase Postgres connection string." >&2
  exit 1
fi
for f in "$ROOT/migrations"/*.sql; do
  echo "Applying $(basename "$f")..."
  psql "$DATABASE_URL" -v ON_ERROR_STOP=1 -f "$f"
done
echo "Done. Run: SELECT refresh_product_search_index();"
`;
  writeFileSync(join(packRoot, "apply-all.sh"), applySh, { mode: 0o755 });

  console.log(
    `\\nPack ready at release-1-database-setup/ (${written.length} migrations + 00_apply_all.sql)`
  );
}

main();
