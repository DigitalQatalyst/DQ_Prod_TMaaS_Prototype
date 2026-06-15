import { cn } from "@/lib/utils";

export default function SplitSectionHeader({
  kicker,
  title,
  description,
  dark = false,
  className,
}: {
  kicker: string;
  title: React.ReactNode;
  description: React.ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-14 grid gap-6 md:mb-16 md:grid-cols-[1fr_1fr] md:items-end md:gap-10",
        className
      )}
    >
      <div>
        <p className="mb-4 dq-eyebrow">{kicker}</p>
        <h2
          className={cn(
            "text-4xl font-semibold tracking-tight md:text-5xl",
            dark ? "text-white" : "text-dq-navy"
          )}
        >
          {title}
        </h2>
      </div>
      <p
        className={cn(
          "max-w-md text-[15px] leading-relaxed md:justify-self-end",
          dark ? "text-white/60" : "text-gray-600"
        )}
      >
        {description}
      </p>
    </div>
  );
}
