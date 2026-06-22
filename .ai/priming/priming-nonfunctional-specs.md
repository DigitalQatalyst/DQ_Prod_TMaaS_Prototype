# Non-Functional Specifications

## Performance

- Core Web Vitals: LCP < 2.5s, CLS < 0.1, INP < 200ms.
- Marketplace and landing pages pre-rendered (SSG/ISR).
- Dashboard pages server-rendered per request (SSR).

## Accessibility

- WCAG 2.1 AA minimum.
- Radix UI / shadcn/ui primitives handle keyboard and ARIA.
- Colour contrast: DQ navy + white >= 7:1.

## Security

- No secrets in client bundles — env vars prefixed `NEXT_PUBLIC_` only for safe values.
- Contact form server-side validated before any external call.
- Dashboard routes server-side session-checked in middleware.

## SEO

- All public pages have canonical meta + OG tags via Next.js metadata API.
- JSON-LD structured data on service detail pages.
- `/sitemap.xml` and `/robots.txt` served from `public/`.
