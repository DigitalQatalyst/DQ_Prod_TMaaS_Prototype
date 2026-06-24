# Setup Guide

## Prerequisites

- Node.js 20+
- npm 10+
- Supabase project (or local Supabase via `supabase start`)

## Installation

```bash
npm install
cp .env.example .env.local
```

Fill in `.env.local`:

- `NEXT_PUBLIC_SUPABASE_URL` — your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` — your Supabase anon key

## Database

```bash
npx supabase db push          # apply migrations
npm run db:seed               # seed catalog data
```

## Development

```bash
npm run dev                   # http://localhost:3000
```

## Tests

```bash
npm test                      # run all tests
npm run test:coverage         # with coverage report
```

Note: integration tests that hit Supabase require a running Supabase instance and valid env vars.

## Deployment

Push to `staging` branch to trigger a Vercel preview deployment.
Push to `main` to deploy to production.

Deployment commits must use the DQ author email:

```bash
git -c user.email="dq.demo.a@digitalqatalyst.com" -c user.name="Sharavi" commit ...
```
