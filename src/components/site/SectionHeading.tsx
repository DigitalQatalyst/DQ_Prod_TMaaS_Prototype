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
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-dq-orange">
          {kicker}
        </p>
      ) : null}
      <div className="text-4xl font-semibold tracking-tight text-dq-navy md:text-5xl">
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
