import { cn } from "@/lib/utils";

type MeshVariant = "heroLight" | "heroDark" | "ctaOrange";

function meshVar(variant: MeshVariant) {
  switch (variant) {
    case "heroDark":
      return "var(--mesh-hero-dark)";
    case "ctaOrange":
      return "var(--mesh-cta-orange)";
    case "heroLight":
    default:
      return "var(--mesh-hero-light)";
  }
}

export default function MeshSection({
  variant = "heroLight",
  grid = false,
  className,
  children,
}: {
  variant?: MeshVariant;
  grid?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={cn("relative isolate overflow-hidden", className)}>
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ background: meshVar(variant) }}
      />
      {grid ? (
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(to right, oklch(0.86 0.010 264 / 0.5) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.86 0.010 264 / 0.5) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 70% 50% at 50% 30%, black 40%, transparent 80%)",
          }}
        />
      ) : null}
      {children}
    </section>
  );
}

