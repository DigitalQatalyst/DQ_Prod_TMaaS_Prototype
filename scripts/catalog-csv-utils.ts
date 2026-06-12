import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import path from "path";

export type ProductRow = Record<string, string>;
export type VariantRow = Record<string, string>;

const PRODUCT_HEADERS = [
  "id",
  "slug",
  "title",
  "short_description",
  "collection_id",
  "is_high_impact",
  "audience",
  "industry_relevance",
  "department",
  "business_impact",
  "status",
  "created_at",
  "updated_at",
] as const;

const VARIANT_HEADERS = [
  "id",
  "product_id",
  "sku",
  "slug",
  "variant_name",
  "service_type_id",
  "duration_display",
  "duration_weeks_min",
  "duration_weeks_max",
  "delivery_complexity",
  "implementation_model",
  "badge",
  "positioning",
  "is_default_variant",
  "status",
  "created_at",
  "updated_at",
] as const;

function parseCsvLine(line: string): string[] {
  const fields: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }
    if (ch === "," && !inQuotes) {
      fields.push(current);
      current = "";
      continue;
    }
    current += ch;
  }
  fields.push(current);
  return fields;
}

function escapeCsvField(value: string): string {
  if (/[",\n\r]/.test(value)) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}

export function readCsv(filePath: string): { headers: string[]; rows: Record<string, string>[] } {
  const raw = readFileSync(filePath, "utf8").trim();
  const lines = raw.split(/\r?\n/);
  const headers = parseCsvLine(lines[0]);
  const rows = lines.slice(1).map((line) => {
    const values = parseCsvLine(line);
    const row: Record<string, string> = {};
    headers.forEach((header, index) => {
      row[header] = values[index] ?? "";
    });
    return row;
  });
  return { headers, rows };
}

export function writeCsv(
  filePath: string,
  headers: readonly string[],
  rows: Record<string, string>[]
): void {
  const dir = path.dirname(filePath);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  const lines = [
    headers.join(","),
    ...rows.map((row) => headers.map((h) => escapeCsvField(row[h] ?? "")).join(",")),
  ];
  writeFileSync(filePath, `${lines.join("\n")}\n`, "utf8");
}

export const PRODUCT_CSV_HEADERS = PRODUCT_HEADERS;
export const VARIANT_CSV_HEADERS = VARIANT_HEADERS;

export function catalogDir(repoRoot: string): string {
  return path.join(repoRoot, ".service-catalog");
}

export function shardDir(repoRoot: string): string {
  return path.join(repoRoot, "..", "workspace", "catalog-shards");
}
