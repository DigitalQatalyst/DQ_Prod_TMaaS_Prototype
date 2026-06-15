/**
 * Ports src/ components to components/features/ with Next.js navigation swaps.
 * Run: node scripts/port-components.mjs
 */

import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync } from "fs";
import { join, relative, extname } from "path";

const ROOT = process.cwd();

function transform(src) {
  let out = src;

  // 1. Replace react-router-dom imports
  // Link
  out = out.replace(
    /import\s+\{([^}]*)\bLink\b([^}]*)\}\s+from\s+["']react-router-dom["']/g,
    (_, pre, post) => {
      const rest = [pre, post]
        .join("")
        .replace(/\bLink\b/g, "")
        .replace(/,\s*,/g, ",")
        .replace(/^\s*,|,\s*$/g, "")
        .trim();
      const lines = [];
      lines.push(`import Link from "next/link"`);
      if (rest) lines.push(`import {${rest}} from "react-router-dom"`);
      return lines.join("\n");
    }
  );

  // NavLink from react-router-dom (handled separately as component)
  out = out.replace(
    /import\s+\{\s*NavLink\s+as\s+RouterNavLink[^}]*\}\s+from\s+["']react-router-dom["']/g,
    `import Link from "next/link"\nimport { usePathname } from "next/navigation"`
  );
  out = out.replace(
    /import\s+\{\s*NavLink[,\s]*NavLinkProps[^}]*\}\s+from\s+["']react-router-dom["']/g,
    `import Link from "next/link"\nimport { usePathname } from "next/navigation"`
  );

  // useNavigate
  out = out.replace(/\buseNavigate\b/g, "useRouter");
  out = out.replace(
    /import\s+\{([^}]*)\buseNavigate\b([^}]*)\}\s+from\s+["']react-router-dom["']/g,
    (_, pre, post) => {
      const rest = [pre, post]
        .join("")
        .replace(/\buseNavigate\b/g, "")
        .replace(/,\s*,/g, ",")
        .replace(/^\s*,|,\s*$/g, "")
        .trim();
      const lines = [];
      lines.push(`import { useRouter } from "next/navigation"`);
      if (rest.replace(/\s/g, "")) lines.push(`import {${rest}} from "react-router-dom"`);
      return lines.join("\n");
    }
  );
  // navigate(x) → router.push(x)
  out = out.replace(/\bconst navigate = useNavigate\(\)/g, "const router = useRouter()");
  out = out.replace(/\bnavigate\(/g, "router.push(");

  // useLocation → usePathname
  out = out.replace(
    /import\s+\{([^}]*)\buseLocation\b([^}]*)\}\s+from\s+["']react-router-dom["']/g,
    (_, pre, post) => {
      const rest = [pre, post]
        .join("")
        .replace(/\buseLocation\b/g, "")
        .replace(/,\s*,/g, ",")
        .replace(/^\s*,|,\s*$/g, "")
        .trim();
      const lines = [];
      lines.push(`import { usePathname } from "next/navigation"`);
      if (rest.replace(/\s/g, "")) lines.push(`import {${rest}} from "react-router-dom"`);
      return lines.join("\n");
    }
  );
  out = out.replace(/\bconst location = useLocation\(\)/g, "const pathname = usePathname()");
  out = out.replace(/\blocation\.pathname\b/g, "pathname");

  // useParams
  out = out.replace(
    /import\s+\{\s*useParams\s*\}\s+from\s+["']react-router-dom["']/g,
    `import { useParams } from "next/navigation"`
  );

  // <Link to= → <Link href=
  out = out.replace(/<Link\s+to=/g, "<Link href=");

  // import.meta.env.VITE_ → process.env.NEXT_PUBLIC_
  out = out.replace(/import\.meta\.env\.VITE_/g, "process.env.NEXT_PUBLIC_");

  // src/components imports → @/components/...  (old vite alias @/ was src/)
  // imports from @/contexts/ → TODO stub
  out = out.replace(
    /from\s+["']@\/contexts\/([^"']+)["']/g,
    `from "@/contexts/$1" // TODO: Task 9 — wire up context`
  );

  // imports from @/data/ → TODO
  out = out.replace(
    /from\s+["']@\/data\/([^"']+)["']/g,
    `from "@/data/$1" // TODO: Task 9 — wire up data`
  );

  return out;
}

function needsUseClient(src) {
  const hooks = [
    "useState",
    "useEffect",
    "useCallback",
    "useMemo",
    "useRef",
    "useContext",
    "useReducer",
    "useRouter",
    "usePathname",
    "useParams",
    "useSearchParams",
    "useQuery",
    "useMutation",
    "useForm",
  ];
  const clientPatterns = [
    /\bonClick\b/,
    /\bonChange\b/,
    /\bonSubmit\b/,
    /from\s+["']framer-motion["']/,
    /\bwindow\b/,
    /\bdocument\b/,
    /\blocalStorage\b/,
    /from\s+["']next\/navigation["']/,
  ];
  for (const h of hooks) {
    if (new RegExp(`\\b${h}\\b`).test(src)) return true;
  }
  for (const p of clientPatterns) {
    if (p.test(src)) return true;
  }
  return false;
}

function portFile(srcPath, destPath) {
  let content = readFileSync(srcPath, "utf8");
  content = transform(content);
  if (needsUseClient(content) && !content.startsWith('"use client"')) {
    content = `"use client";\n\n${content}`;
  }
  mkdirSync(destPath.replace(/[^/\\]+$/, ""), { recursive: true });
  writeFileSync(destPath, content, "utf8");
}

function portDir(srcDir, destDir) {
  const entries = readdirSync(srcDir);
  for (const entry of entries) {
    const srcPath = join(srcDir, entry);
    const destPath = join(destDir, entry);
    const stat = statSync(srcPath);
    if (stat.isDirectory()) {
      portDir(srcPath, destPath);
    } else if ([".tsx", ".ts", ".js"].includes(extname(entry))) {
      portFile(srcPath, destPath);
      console.log(`  ✓ ${relative(ROOT, srcPath)} → ${relative(ROOT, destPath)}`);
    }
  }
}

const mappings = [
  // landing: site/ + site/landing/
  { src: "src/components/site", dest: "components/features/landing" },
  // marketplace
  { src: "src/components/marketplace", dest: "components/features/marketplace" },
  // service-detail
  { src: "src/components/service-detail", dest: "components/features/service-detail" },
  // engagements
  { src: "src/components/engagements", dest: "components/features/engagements" },
  // cart
  { src: "src/components/cart", dest: "components/features/cart" },
];

// dashboard-level top components
const dashboardFiles = [
  "ContextSwitcher.tsx",
  "OrderStepper.tsx",
  "RequestOfferDialog.tsx",
  "ServiceRequestDialog.tsx",
  "DiagnoseDialog.tsx",
  "FeatureFlagAdmin.tsx",
  "FeatureFlagGuard.tsx",
  "ChatButton.tsx",
  "TMaaSLogo.tsx",
  "TransactAIMode01.tsx",
];

// landing-level top components (site-level ones at src/components root)
const landingTopFiles = [
  "CTASection.tsx",
  "DT2Section.tsx",
  "ExploreDigitalQatalystCta.tsx",
  "ExploreSection.tsx",
  "FAQSection.tsx",
  "HeroSection.tsx",
  "HeroSectionTraditional.tsx",
  "HowItWorksSection.tsx",
  "TMaaSLogo.tsx",
  "TowersSection.tsx",
  "ValuePropsSection.tsx",
  "Footer.tsx",
];

console.log("Porting directory mappings...");
for (const { src, dest } of mappings) {
  const srcDir = join(ROOT, src);
  const destDir = join(ROOT, dest);
  console.log(`\n${src} → ${dest}`);
  portDir(srcDir, destDir);
}

console.log("\nPorting dashboard top-level files...");
for (const f of dashboardFiles) {
  const srcPath = join(ROOT, "src/components", f);
  const destPath = join(ROOT, "components/features/dashboard", f);
  try {
    portFile(srcPath, destPath);
    console.log(`  ✓ src/components/${f}`);
  } catch (e) {
    console.log(`  ⚠ skip ${f}: ${e.message}`);
  }
}

console.log("\nPorting landing top-level files...");
for (const f of landingTopFiles) {
  const srcPath = join(ROOT, "src/components", f);
  const destPath = join(ROOT, "components/features/landing", f);
  try {
    portFile(srcPath, destPath);
    console.log(`  ✓ src/components/${f}`);
  } catch (e) {
    console.log(`  ⚠ skip ${f}: ${e.message}`);
  }
}

console.log("\nDone.");
