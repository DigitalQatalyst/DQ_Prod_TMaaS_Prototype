# DQ TMaaS — Deployment Workflow Setup

**Date:** 2026-06-15  
**Author:** Sharavi Ravi  
**Status:** Partially configured — deploy repo pending

---

## 1. Model: Two-Repo Deploy (mirrors CorpWeb)

```
DigitalQatalyst/DQ_Prod_TMaaS_Prototype   ← BUILD repo (all development)
        │
        │  git push deploy main:main --force
        ▼
DQ-Superuser/DQ-TMaaS                     ← DEPLOY repo (Vercel watches this)
        │
        │  Vercel auto-builds on push to main
        ▼
   [TMaaS production URL]                 ← production
```

---

## 2. One-Time Setup (manual steps)

### Step A — Create the deploy repo

1. Log in to GitHub as **DQ-Superuser** (superuser@digitalqatalyst.com)
2. Create a new **private** repo: `DQ-Superuser/DQ-TMaaS`
3. Leave it empty (no README, no .gitignore)

### Step B — Connect Vercel to the deploy repo

1. Log in to Vercel at https://vercel.com with **tech@digitalqatalyst.com** (OTP to inbox)
2. In the TMaaS Vercel project → Settings → Git → disconnect the current repo
3. Reconnect to `DQ-Superuser/DQ-TMaaS`, branch `main`
4. Framework: **Next.js** (auto-detected)
5. Re-add all environment variables (copy from current project settings)

### Step C — Add the deploy remote to the build repo (run once locally)

```bash
git remote add deploy https://github.com/DQ-Superuser/DQ-TMaaS.git
```

Verify:
```bash
git remote -v
# origin   https://github.com/DigitalQatalyst/DQ_Prod_TMaaS_Prototype.git
# deploy   https://github.com/DQ-Superuser/DQ-TMaaS.git
```

### Step D — Do the initial push to populate the deploy repo

```bash
git checkout main
git -c user.email="superuser@digitalqatalyst.com" -c user.name="Sharavi" \
  commit --allow-empty -m "ci: initial deploy"
git push deploy main:main --force
```

---

## 3. Branch Structure

| Branch | Purpose |
|--------|---------|
| `develop` | Active development — all feature branches merge here |
| `staging` | Pre-production verification — PRs from develop |
| `main` | Production-ready — push to deploy repo triggers live deploy |
| `claude/<feature>-sharavi` | Claude Code feature branches |

---

## 4. Standard Deploy Workflow

```bash
# 1. Ensure staging is merged to main (via PR)
gh pr create --base main --head staging --title "staging → main: <release summary>"
gh pr merge <PR#> --merge

# 2. Push all branches to build repo
git push origin develop main staging

# 3. Create a trigger commit with the deploy-repo author email
git -c user.email="superuser@digitalqatalyst.com" -c user.name="Sharavi" \
  commit --allow-empty -m "ci: deploy to production"

# 4. Push to deploy repo — triggers Vercel build and live deploy
git push deploy main:main --force

# 5. Sync origin/main
git push origin main
git checkout develop
```

---

## 5. Commit Author Emails

| Repo | Required email | Name |
|------|---------------|------|
| `DigitalQatalyst/DQ_Prod_TMaaS_Prototype` (build) | `dq.demo.a@digitalqatalyst.com` | Sharavi |
| `DQ-Superuser/DQ-TMaaS` (deploy) | `superuser@digitalqatalyst.com` | Sharavi |

Always set explicitly with `-c user.email=` — do not rely on local git config.

### If a deploy fails due to wrong author email

```bash
git -c user.email="superuser@digitalqatalyst.com" -c user.name="Sharavi" \
  commit --allow-empty -m "ci: trigger deployment with correct email"
git push deploy main:main --force
```

---

## 6. CI Workflows (already configured)

### `.github/workflows/ci.yml`
Runs on PRs to `main` and `staging`:
- TypeScript typecheck (`tsc --noEmit`)
- ESLint (`npm run lint`)
- Unit tests (`npm test`)

### `.github/workflows/branch-protection.yml`
Blocks direct pushes to `main`. Valid branch prefixes for PRs:
`feature/`, `bugfix/`, `hotfix/`, `release/`, `fix/`, `chore/`, `claude/`, `staging`

### `.github/workflows/deploy.yml` *(added — inactive until deploy repo is created)*
Runs on push to `main` in the build repo. Pushes `main` to the deploy repo using a deploy key stored in GitHub Secrets. See section 7.

---

## 7. Automated Deploy via GitHub Actions (optional, post-setup)

Once the deploy repo exists, you can automate Step 4 above using a deploy key:

### Setup

1. Generate an SSH key pair (no passphrase):
   ```bash
   ssh-keygen -t ed25519 -C "deploy-tmaas" -f ~/.ssh/dq_tmaas_deploy
   ```
2. Add the **public key** as a Deploy Key on `DQ-Superuser/DQ-TMaaS` (Settings → Deploy Keys → Allow write access)
3. Add the **private key** as a GitHub Actions secret on `DigitalQatalyst/DQ_Prod_TMaaS_Prototype`:
   - Name: `DEPLOY_REPO_SSH_KEY`

The `deploy.yml` workflow (already added to this repo) will then push automatically on every merge to `main`.

---

## 8. Environment Variables

All env vars live in the Vercel project dashboard. After reconnecting Vercel to the deploy repo, re-enter them. Current variables required (check Vercel dashboard for current values):

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role (server-side only) |
| `TURNSTILE_SECRET_KEY` | Cloudflare Turnstile secret |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Cloudflare Turnstile site key |

*(Add others as discovered — run `vercel env pull .env.local` once Vercel CLI is installed to get the full list)*

---

## 9. What's Already Done vs. Pending

| Item | Status |
|------|--------|
| Branch structure (main/staging/develop) | ✅ Done |
| CI workflow (ci.yml) | ✅ Done |
| branch-protection.yml (fixed) | ✅ Done |
| deploy.yml skeleton | ✅ Done (inactive) |
| Deploy repo created (`DQ-Superuser/DQ-TMaaS`) | ⏳ Manual step |
| Vercel reconnected to deploy repo | ⏳ After deploy repo created |
| `deploy` git remote added locally | ⏳ After deploy repo created |
| Initial push to deploy repo | ⏳ After remote added |
| Deploy key wired for auto-deploy | ⏳ Optional, after deploy repo |
