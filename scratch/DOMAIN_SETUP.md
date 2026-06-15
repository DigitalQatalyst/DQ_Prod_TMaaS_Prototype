# TMaaS — Domain Setup: apps.digitalqatalyst.com/tmaas

**Date:** 2026-06-15

---

## The core problem

Vercel assigns one domain per project. `apps.digitalqatalyst.com/tmaas` is a **path-prefixed subdomain**, meaning traffic to `apps.digitalqatalyst.com` must be routed and the `/tmaas` prefix stripped (or preserved) before hitting the TMaaS app.

Two viable approaches:

---

## Option A — basePath (Recommended if apps.dq.com will host multiple apps)

Set `basePath: '/tmaas'` in Next.js config so the app self-serves under that path. Then assign `apps.digitalqatalyst.com` as the Vercel domain. Future apps get their own basePath (`/corpweb`, `/another-app`, etc.) and can share the same subdomain via separate Vercel projects + a gateway rewrite layer.

**Pros:** Clean URLs, no proxy needed, no extra project  
**Cons:** Requires a code change + redeployment; all internal Next.js links must be basePath-aware (Next.js handles this automatically)

### Steps

#### 1. Update next.config.ts

```ts
const nextConfig: NextConfig = {
  output: "standalone",
  basePath: "/tmaas",
};
```

#### 2. Merge and deploy

```bash
# On a branch
git checkout -b chore/basepath-tmaas
# edit next.config.ts
git add next.config.ts
git -c user.email="dq.demo.a@digitalqatalyst.com" -c user.name="Sharavi" commit -m "chore: set basePath /tmaas for apps subdomain"
git push origin chore/basepath-tmaas
# PR → staging → main → push deploy
```

#### 3. Add domain in Vercel

Vercel project → Settings → Domains → Add `apps.digitalqatalyst.com`

Vercel will show you a CNAME or A record to add.

#### 4. Add DNS record (Cloudflare or registrar)

| Type | Name | Value |
|------|------|-------|
| CNAME | `apps` | `cname.vercel-dns.com` |

Or if Vercel gives an A record, use that instead.

#### 5. Verify

Once DNS propagates (minutes on Cloudflare, up to 48h elsewhere):
- `https://apps.digitalqatalyst.com/tmaas` → TMaaS home
- `https://apps.digitalqatalyst.com` → 404 (expected — no root app yet)

---

## Option B — Rewrite gateway (if you want apps.dq.com root to do something)

Create a separate minimal Vercel project at `apps.digitalqatalyst.com` whose only job is to rewrite `/tmaas/**` to the TMaaS deployment URL. Useful if you want a landing page at `apps.digitalqatalyst.com/`.

This adds complexity (extra repo/project) and is only worth it if the root domain needs its own content. Skip for now.

---

## Recommended path

Go with **Option A**. Set `basePath: '/tmaas'`, deploy, add the domain in Vercel, add the CNAME in DNS.

---

## DNS provider

The `digitalqatalyst.com` domain is managed through Cloudflare (based on CorpWeb setup). Log in to Cloudflare → digitalqatalyst.com → DNS → add the record Vercel specifies.

Set the Cloudflare proxy toggle to **DNS only (grey cloud)** initially — Vercel needs direct DNS for SSL certificate provisioning. Can re-enable proxy after cert is issued if desired.
