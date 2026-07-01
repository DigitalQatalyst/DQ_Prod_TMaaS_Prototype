import Link from "next/link";
import { ArrowRight, BarChart2, Lock, Sparkles, TrendingUp } from "lucide-react";
import SectionHeading from "@/components/features/landing/SectionHeading";
import {
  SHOP_BY_GOAL_CARDS,
  SHOP_BY_GOAL_EYEBROW,
  SHOP_BY_GOAL_HEADLINE,
  SHOP_BY_GOAL_SUBCOPY,
} from "@/components/features/landing/landing/shopByGoalContent";
import { cardInteractive } from "@/lib/brandAccent";
import { cn } from "@/lib/utils";

const GOAL_ICONS = {
  "grow-revenue": TrendingUp,
  "launch-ai": Sparkles,
  "modernise-operations": BarChart2,
  "strengthen-compliance": Lock,
} as const;

const ShopByGoalSection = () => {
  return (
    <section id="goals" className="bg-white px-5 py-24 md:px-8 lg:px-10">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading
          kicker={SHOP_BY_GOAL_EYEBROW}
          title={SHOP_BY_GOAL_HEADLINE}
          description={SHOP_BY_GOAL_SUBCOPY}
          className="mb-12 max-w-2xl"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SHOP_BY_GOAL_CARDS.map(({ id, title, body, collection }) => {
            const Icon = GOAL_ICONS[id as keyof typeof GOAL_ICONS];
            return (
              <Link
                key={id}
                href={`/marketplace?collection=${collection}`}
                className={cn(
                  "group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 outline-none focus-visible:ring-2 focus-visible:ring-dq-orange focus-visible:ring-offset-2",
                  cardInteractive
                )}
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-navy-50 text-dq-orange transition-colors group-hover:bg-dq-orange group-hover:text-white">
                  <Icon size={20} aria-hidden />
                </div>
                <h3 className="text-[15.5px] font-semibold text-dq-navy">{title}</h3>
                <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-gray-500">{body}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-dq-orange transition-all group-hover:gap-2">
                  Browse services
                  <ArrowRight size={14} aria-hidden />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ShopByGoalSection;
