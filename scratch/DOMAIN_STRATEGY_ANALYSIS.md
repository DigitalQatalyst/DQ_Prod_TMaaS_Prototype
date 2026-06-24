# DigitalQatalyst — Product Domain Strategy Analysis

**Prepared by:** Sharavi Ravi  
**Date:** 2026-06-15  
**Purpose:** Approval decision on domain structure for the DQ product suite  
**Scope:** How to expose multiple SaaS products (TMaaS and future products) under the digitalqatalyst.com domain

---

## Context

DigitalQatalyst is building a suite of SaaS products hosted on Vercel. The first product going live is **TMaaS** (Technology Management as a Service). Future products will follow. A domain structure decision made now will set the pattern for the entire product portfolio.

The question: should products live at **path-based URLs** (`apps.digitalqatalyst.com/tmaas`) or **subdomain URLs** (`tmaas.digitalqatalyst.com`)?

---

## Option 1 — Product Subdomains (Recommended)

Each product gets its own subdomain directly under `digitalqatalyst.com`.

```
tmaas.digitalqatalyst.com
insights.digitalqatalyst.com
portal.digitalqatalyst.com
```

### Pros

- **Zero routing complexity.** Each product is an independent Vercel project pointed at its own subdomain. No shared infrastructure between products.
- **Independent deployment.** Deploying, rolling back, or taking down one product has zero impact on others.
- **No code changes required.** No `basePath` configuration, no path prefixes leaking into internal links, API routes, or image paths.
- **Clean separation of concerns.** Teams working on different products cannot accidentally affect each other's deployment pipelines.
- **Standard Vercel architecture.** Vercel is designed around one domain per project. Subdomains are a first-class, zero-friction feature.
- **SSL is automatic.** Vercel provisions and renews a certificate per subdomain automatically.
- **Scales indefinitely.** Adding a new product is a two-step operation: add a domain in Vercel and add a DNS record. No changes to any existing product.
- **Product identity.** Each product has a memorable, brandable URL. Users bookmark `tmaas.digitalqatalyst.com`, not a path.

### Cons

- **Domain proliferation.** As the portfolio grows, you accumulate subdomains. Manageable with a DNS convention (`[product].digitalqatalyst.com`).
- **No consolidated analytics by default.** Web analytics tools require per-subdomain setup rather than tracking a single domain. Solvable with a shared analytics property or tag manager.
- **Cookie scope.** Cookies set on `tmaas.digitalqatalyst.com` are not automatically available on `insights.digitalqatalyst.com`. Shared session state (e.g. single sign-on) requires cookies scoped to `.digitalqatalyst.com`, which is standard practice.

---

## Option 2 — Path-Based Under a Shared Subdomain

All products live under one subdomain, differentiated by path.

```
apps.digitalqatalyst.com/tmaas
apps.digitalqatalyst.com/insights
apps.digitalqatalyst.com/portal
```

### Pros

- **Unified entry point.** One subdomain for all products — useful if you want a single `apps.` brand landing page that links out to each product.
- **SEO domain consolidation.** All product traffic contributes to the authority of one domain. Relevant for consumer products competing on organic search; low priority for B2B SaaS accessed via direct link or SSO.
- **Simpler DNS.** One DNS record for `apps.digitalqatalyst.com` covers all products.

### Cons

- **Requires a gateway project.** Vercel does not natively route one domain across multiple projects by path. A dedicated "gateway" Vercel project must be built and maintained — it rewrites `/tmaas/**` to the TMaaS deployment, `/insights/**` to the insights deployment, and so on. This gateway is a single point of failure for the entire product suite.
- **basePath requirement.** Every product must set `basePath` in its Next.js config (e.g. `basePath: '/tmaas'`). This prefix leaks into every internal link, every API route, every image URL, and every redirect in the app. It cannot be removed later without a full redeployment.
- **Coupled deployments.** Updating the gateway (e.g. to add a new product) requires deploying a shared piece of infrastructure that touches all products simultaneously.
- **Operational overhead.** Two layers to debug when something breaks: the gateway and the product itself.
- **Not how Vercel is designed to work.** Path-based multi-project routing is a workaround, not a supported pattern. It requires ongoing maintenance as Vercel's platform evolves.

---

## Option 3 — Flat Subdomains (Variant of Option 1)

Products live directly under `digitalqatalyst.com` without a grouping subdomain.

```
tmaas.digitalqatalyst.com        (instead of tmaas.apps.digitalqatalyst.com)
```

This is a simplification of Option 1 — same architecture, shorter URLs. Included here for completeness; the decision between `tmaas.digitalqatalyst.com` and `tmaas.apps.digitalqatalyst.com` is cosmetic and can be revisited.

---

## Market Standards

### What leading B2B SaaS companies do

| Company          | Pattern                 | Example                                                           |
| ---------------- | ----------------------- | ----------------------------------------------------------------- |
| Salesforce       | Product subdomains      | `trailhead.salesforce.com`, `help.salesforce.com`                 |
| HubSpot          | Product subdomains      | `app.hubspot.com`, `academy.hubspot.com`, `community.hubspot.com` |
| Atlassian        | Product subdomains      | `jira.atlassian.com`, `confluence.atlassian.com`                  |
| Google Workspace | Product subdomains      | `mail.google.com`, `drive.google.com`, `docs.google.com`          |
| Microsoft 365    | Product subdomains      | `teams.microsoft.com`, `outlook.live.com`                         |
| Notion           | Path-based (single app) | `notion.so/workspace/...` — single product, not comparable        |
| Linear           | Subdomain per workspace | `linear.app` → `[team].linear.app` — multi-tenant, not comparable |

**The consistent pattern across enterprise SaaS:** subdomains for distinct products, paths for sections within a single product.

### When path-based is chosen

Path-based product URLs (`example.com/product-a`) are typically seen in:

- **Consumer web platforms** where SEO consolidation under one domain materially affects organic acquisition (e.g. Reddit, YouTube)
- **Documentation sites** where all content is under one project (`docs.example.com/product-a/getting-started`)
- **Single-page marketing sites** listing multiple offerings on one domain (not separate applications)

None of these patterns apply to a B2B SaaS product suite.

---

## Recommendation

**Option 1 — Product subdomains** using the pattern `[product].digitalqatalyst.com`.

**For TMaaS specifically:** `tmaas.digitalqatalyst.com`

This matches market standards for B2B SaaS, is the intended Vercel deployment model, requires no gateway infrastructure, and gives each product a clean independent identity. It scales to any number of products without architectural changes.

The only significant future consideration is **single sign-on** — when DQ introduces shared authentication across products, cookies and tokens should be scoped to `.digitalqatalyst.com` to work across all product subdomains. This is standard practice and does not affect the domain structure decision.

---

## Decision Required

| Option                                        | Infrastructure change                        | Code change                  | Recommended |
| --------------------------------------------- | -------------------------------------------- | ---------------------------- | ----------- |
| `tmaas.digitalqatalyst.com` (subdomains)      | DNS record + Vercel domain                   | None                         | **Yes**     |
| `apps.digitalqatalyst.com/tmaas` (path-based) | DNS record + Vercel domain + gateway project | `basePath` in next.config.ts | No          |

Approval to proceed with `tmaas.digitalqatalyst.com` and the subdomain pattern for all future DQ products?
