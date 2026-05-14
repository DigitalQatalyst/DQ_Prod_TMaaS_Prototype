import { cn } from "@/lib/utils";

type Align = "left" | "center";

export default function SectionHeading({
  kicker,
  title,
  description,
  align = "center",
  className,
}: {
  kicker?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: Align;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto max-w-2xl",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {kicker ? (
        <span className="mb-4 inline-block rounded-full border border-navy-100 bg-white/70 px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-600 backdrop-blur">
          {kicker}
        </span>
      ) : null}
      <div className="mt-4 text-3xl font-bold tracking-tight text-navy-950 md:text-4xl">
        {title}
      </div>
      {description ? (
        <div className="mt-4 text-base leading-relaxed text-gray-600">
          {description}
        </div>
      ) : null}
    </div>
  );
}

