# PR Code Review: Vite → Next.js App Router Migration

**Branch:** `claude/nextjs-migration-sharavi` → `staging`
**Files changed:** 416
**Review date:** 2026-06-15
**Reviewer:** Claude Code (automated review)

---

## Executive Summary

This PR migrates the DQ TMaaS Prototype from Vite/SPA to Next.js 15 App Router. The scaffold is substantial — 416 files changed, covering route stubs, a lib layer, middleware auth, providers, SEO infrastructure, and a Next.js build config. The migration demonstrates good structural intent: server/client component separation via the `_client.tsx` pattern, a typed Supabase layer, feature-flag infrastructure, and structured data helpers.

However, the branch has **10 confirmed high-severity issues** and **1 confirmed critical-class issue** (the CSP `unsafe-inline`) that must be resolved before merging to staging. Several of these are hard build-time errors (missing Suspense boundaries) or complete functional failures (`parseInt` on a slug). The security posture of the middleware auth layer is insufficient even as a scaffold — a cookie-presence check with no validation and a matcher covering only `/dashboard` means the entire auth architecture needs to be reworked before any protected routes are exposed.

**Verdict: Request Changes** — no merge to staging until the high-severity items in Section 2 are resolved. The medium/low items in Section 3 are tracked for follow-up but do not block staging.

---

## 1. Critical Issues

| #   | File          | Line | Issue                                             | Impact                                                                                                                                                                                                                                                                                               |
| --- | ------------- | ---- | ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| C1  | `vercel.json` | 14   | `script-src 'self' 'unsafe-inline'` in CSP header | Eliminates XSS protection entirely. Any inline script executes, defeating the purpose of the header. Static `vercel.json` headers cannot support nonces; the CSP must move into `middleware.ts` to allow per-request nonce injection via `NextResponse` headers and the Next.js script `nonce` prop. |

**Fix for C1:** Remove the CSP header from `vercel.json`. Add a `middleware.ts` function that generates a cryptographically random nonce per request (`crypto.randomUUID()` or `crypto.getRandomValues`), sets it on `<Script nonce={nonce}>` via `next/script`, and writes the header as `Content-Security-Policy: script-src 'self' 'nonce-{nonce}'`.

---

## 2. High-Severity Issues

| #   | File                                                       | Lines   | Issue                                                                                                                                                                                           | Impact                                                                                                                            |
| --- | ---------------------------------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| H1  | `middleware.ts`                                            | 4, 18   | Auth guard only covers `/dashboard/:path*`; all other protected routes (`/settings`, `/profile`, `/admin`, non-health API routes) are unguarded                                                 | Unauthenticated access to any route outside `/dashboard` is possible with zero tooling                                            |
| H2  | `middleware.ts`                                            | 4       | `hasSession` checks only that the `session_token` cookie key exists and is non-empty — no signature verification, expiry check, or server-side lookup                                           | Any non-empty string in the cookie bypasses the guard; trivially exploitable                                                      |
| H3  | _(no sign-in route)_                                       | —       | No code anywhere sets `session_token` with `HttpOnly`, `Secure`, or `SameSite` flags. The architectural intent is confirmed in plan/priming docs but no typed helper enforces secure attributes | When sign-in lands it will bake in an insecure cookie unless explicitly constrained                                               |
| H4  | `app/marketplace/_client.tsx` / `app/marketplace/page.tsx` | 38 / 11 | `useSearchParams()` called in client component rendered without a `<Suspense>` boundary                                                                                                         | Hard build-time error: `useSearchParams() should be wrapped in a suspense boundary at page /marketplace` — entire route is broken |
| H5  | `app/contact/_client.tsx` / `app/contact/page.tsx`         | 108 / — | Same `useSearchParams()` without `<Suspense>` pattern as H4                                                                                                                                     | Same class of build-time error or forced dynamic rendering for `/contact`                                                         |
| H6  | `app/marketplace/[slug]/_client.tsx`                       | 33      | `parseInt(slug \|\| "0", 10)` where `slug` is a kebab-case string like `ai-strategy-consulting` — `parseInt` returns `NaN`                                                                      | Every marketplace service detail page renders "Service not found". Complete functional failure of the feature                     |
| H7  | `app/marketplace/_client.tsx`                              | —       | 494-line monolithic `"use client"` boundary includes `LandingNavbar`, `Footer`, hero section, and category nav — all static — pulling them into the client bundle                               | Blocks RSC streaming above-the-fold, inflates hydration payload, prevents Suspense streaming for static portions                  |
| H8  | `lib/featureFlags.ts` / `lib/config/index.ts`              | —       | Verbatim duplicate `FeatureFlags` interface, `FeatureFlagService` class, `DEFAULT_FEATURE_FLAGS`, and all four helper exports. Two separate singleton instances exist in the module graph       | Runtime mutations via one singleton are invisible to consumers of the other; divergent flag defaults silently possible            |

### Fix Guidance

**H1 + H2 (middleware auth):** Expand the matcher to cover all protected route prefixes. Replace the cookie-presence check with a real session validation — at minimum a signed JWT verification (`jose` or `jsonwebtoken`) or a Supabase server-side session check via `createServerClient`.

```ts
// middleware.ts — illustrative
export const config = {
  matcher: ["/dashboard/:path*", "/settings/:path*", "/profile/:path*", "/admin/:path*"],
};

async function validateSession(token: string): Promise<boolean> {
  // Verify JWT signature + expiry, or call Supabase auth.getUser()
}
```

**H3 (cookie security):** Add `lib/auth/cookies.ts` with a typed helper before any sign-in implementation:

```ts
export function setSessionCookie(res: NextResponse, token: string) {
  res.cookies.set("session_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
}
```

**H4 + H5 (Suspense boundaries):**

```tsx
// app/marketplace/page.tsx
import { Suspense } from "react";
export default function MarketplacePage() {
  return (
    <Suspense fallback={<MarketplaceSkeleton />}>
      <MarketplacePageClient />
    </Suspense>
  );
}
```

Apply the same pattern to `app/contact/page.tsx`.

**H6 (parseInt on slug):** Pass the slug string directly to `useServiceDetail`:

```ts
// Before
const variantId = parseInt(slug || "0", 10);
// After
const serviceSlug = slug ?? "";
```

`useServiceDetail` should accept a string slug and query by slug, not by numeric ID.

**H7 (monolithic client boundary):** Extract `LandingNavbar`, `Footer`, and the static hero `MeshSection` wrapper into `app/marketplace/page.tsx` as server-rendered children. Keep only the interactive catalog area (filters, sort, grid, pagination, search input) in `_client.tsx`.

**H8 (duplicate feature flags):** Delete `lib/config/index.ts` (zero importers confirmed) and keep `lib/featureFlags.ts` as the single source. Or split `lib/featureFlags.ts` into `lib/featureFlags/types.ts`, `lib/featureFlags/service.ts` for clarity.

---

## 3. Medium and Low Issues

| #   | Severity | File                                                         | Issue                                                                                                                                                                                | Dimension       |
| --- | -------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------- |
| M1  | medium   | `components/foundation/seo/JsonLd.tsx:9`                     | `dangerouslySetInnerHTML` with `JSON.stringify(data)` — `</script>` or Unicode line terminators in API-sourced data can break out of the script block                                | Security        |
| M2  | medium   | `lib/api/v1/client.ts:4`                                     | Module is dead code (zero importers) but if ever imported server-side it uses the anon key instead of service-role key                                                               | Security        |
| M3  | low      | `app/api/health/route.ts:3`                                  | No `Cache-Control: no-store` header; no rate limiting on public liveness endpoint                                                                                                    | Security        |
| M4  | medium   | `app/marketplace/[slug]/page.tsx:26`                         | Page export is not `async` but `generateMetadata` awaits `params` — inconsistency in Promise handling at the RSC boundary                                                            | Correctness     |
| M5  | low      | `app/page.tsx:16`                                            | `metadata` export declared mid-file between import blocks                                                                                                                            | Correctness     |
| M6  | medium   | `app/marketplace/`                                           | No `loading.tsx` for the marketplace route segment — root `app/loading.tsx` does not fire on client-side navigations to `/marketplace`                                               | Performance     |
| M7  | medium   | `components/foundation/providers/Providers.tsx:10`           | Global `staleTime: 60_000` (1 min) for static catalog data causes unnecessary refetches and visible loading flicker                                                                  | Performance     |
| M8  | medium   | `app/layout.tsx:6`                                           | Three Google Fonts loaded without explicit weight arrays — may load all available weights (100–900 kB extra)                                                                         | Performance     |
| M9  | medium   | `next.config.ts:3`                                           | No `images.remotePatterns` — external image URLs (Supabase storage, CDN) will fail at runtime with no build-time warning                                                             | Performance     |
| M10 | medium   | `components/features/landing/IndustrySolutionsSection.tsx:1` | Raw `<img>` tag instead of `next/image` — no WebP/AVIF, no lazy loading, no CLS prevention                                                                                           | Performance     |
| M11 | low      | `app/marketplace/_client.tsx:37`                             | 30+ dashboard `page.tsx` files marked `"use client"` — server-shell pattern not applied to dashboard routes                                                                          | Performance     |
| M12 | medium   | `lib/catalog/index.ts:1`                                     | 408-line file aggregates types, display labels, and filter logic; old flat files (`lib/marketplaceDisplayLabels.ts`, etc.) still exist alongside it — two competing source locations | Maintainability |
| M13 | medium   | `tests/unit/seoHead.test.ts:13`                              | Entire test file permanently skipped with `describe.skip`; no replacement tests for `lib/seo/index.ts` logic                                                                         | Maintainability |
| M14 | medium   | `app/api/contact/route.ts:37`                                | `// TODO: send email via email provider / store in Supabase` — route accepts submissions but silently discards all data                                                              | Maintainability |
| M15 | medium   | `lib/api/v1/client.ts:1`                                     | Dead code — zero importers; actual code still routes through untyped `lib/supabase.ts` with `VITE_*` env var fallbacks                                                               | Maintainability |
| M16 | medium   | `lib/supabase.ts`                                            | Active Supabase client has `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY` fallbacks — these env vars are never defined in a Next.js environment, masking misconfiguration            | Maintainability |
| M17 | low      | `.ai/AGENTS.md:1`                                            | References `context.md` and priming files not verified to exist; no CI check to assert their presence                                                                                | Maintainability |

### Key Suggestions

- **M1:** Sanitize JSON-LD output: `.replace(/</g, '\\u003c').replace(/>/g, '\\u003e').replace(/&/g, '\\u0026')` before `dangerouslySetInnerHTML`.
- **M6:** Add `app/marketplace/loading.tsx` with a skeleton matching the hero + catalog grid layout.
- **M7:** Set `staleTime: Infinity` on `useBestSellers` and `useMarketplaceListings` queries individually.
- **M9:** Add `images.remotePatterns` to `next.config.ts` for the Supabase storage bucket and any CDN origin.
- **M12:** Pick one canonical location per concern and delete the duplicates. Suggested split: `lib/catalog/types.ts`, `lib/catalog/displayLabels.ts`, `lib/catalog/filters.ts`.
- **M14:** Guard the contact route behind a feature flag (`isFeatureEnabled('contactForm')`) and return `501 Not Implemented` until the email/Supabase handler is written.
- **M15 + M16:** Delete `lib/api/v1/client.ts`. Migrate `lib/supabase.ts` to use `NEXT_PUBLIC_SUPABASE_*` env vars exclusively and add the `Database` generic type.

---

## 4. What Looks Good

- **Server/client separation pattern** — `app/marketplace/page.tsx` correctly delegates to `_client.tsx`, and `generateMetadata` is implemented for SEO. This pattern should be extended to other routes.
- **`lib/seo/index.ts`** — `buildServiceStructuredData`, `buildMarketplaceStructuredData`, and the OpenGraph helpers are well-structured; the JSON-LD helper only needs the escaping fix.
- **Feature flag infrastructure** — `FeatureFlagService` with `setFlags` / override support is a solid foundation once the duplication is resolved.
- **`app/api/health/route.ts`** — basic liveness probe is the right pattern for Vercel deployments; just needs `Cache-Control: no-store`.
- **`components/foundation/providers/Providers.tsx`** — `QueryClient` scoped to the Providers wrapper (not a module-level singleton) correctly avoids cross-request cache sharing in SSR.
- **TypeScript strictness** — the new lib layer avoids `any` in the areas reviewed; the `Database` generic in `lib/api/v1/client.ts` shows good type-safety intent even though the module is currently dead code.
- **Conventional commit history** — the branch has clean, scoped commits with `feat:`, `fix:` prefixes making the migration intent traceable.
- **`next.config.ts` `output: 'standalone'`** — correct for Vercel containerised deployments.

---

## 5. Verdict

**Request Changes**

Do not merge `claude/nextjs-migration-sharavi` → `staging` in its current state.

**Required before merge (blocks staging):**

1. Fix H4 and H5 (Suspense boundaries around `useSearchParams` callers) — these are hard build errors.
2. Fix H6 (`parseInt` on slug) — complete functional failure of marketplace detail pages.
3. Fix H1 and H2 (middleware matcher scope and cookie validation) — auth bypass is trivially exploitable.
4. Fix C1 (CSP `unsafe-inline`) — eliminates XSS protection.
5. Fix H3 (document and enforce `HttpOnly`/`Secure`/`SameSite` on session cookie) — required before sign-in implementation lands.
6. Fix H8 (feature flag singleton duplication) — two singletons with identical exports will cause silent divergence.
7. Fix H7 (monolithic client boundary) — not a blocker for a staging deploy but should be resolved before any load testing or LCP measurement.

**Recommended before merge (does not block staging, but should be tracked):**

- M1 (JSON-LD XSS escaping), M6 (marketplace loading skeleton), M9 (image domains), M14 (contact route stub guard), M15 + M16 (Supabase client cleanup).

**Can be deferred to a follow-up PR:**

- M7 (staleTime tuning), M8 (font weight subsetting), M10 (img → next/image), M11 (dashboard server shell), M12 (catalog module split), M13 (skipped tests), M17 (AGENTS.md file existence check).
