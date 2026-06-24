# Database Architecture

## Supabase PostgreSQL

- All schema changes via migrations in `supabase/migrations/`.
- Types auto-generated in `lib/types/database.types.ts`.
- Row Level Security (RLS) enforced at the database level.

## Client access

- `lib/api/v1/client.ts` exports the typed Supabase client.
- Use typed query helpers — never cast to `any` when reading Supabase results.
- Server Components access Supabase via server-side client (no anon key exposure).

## Key tables (catalog)

- Services, variants, pricing in the catalog schema.
- Engagements, milestones, service orders in the delivery schema.
- Users, organisations, roles in the auth/IAM schema.
