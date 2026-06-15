#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")" && pwd)"
if [[ -z "${DATABASE_URL:-}" ]]; then
  echo "Set DATABASE_URL to your Supabase Postgres connection string." >&2
  exit 1
fi
for f in "$ROOT/migrations"/*.sql; do
  echo "Applying $(basename "$f")..."
  psql "$DATABASE_URL" -v ON_ERROR_STOP=1 -f "$f"
done
echo "Done. Run: SELECT refresh_product_search_index();"
