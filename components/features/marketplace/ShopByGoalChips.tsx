"use client";

import Link from "next/link";
import { ArrowRight, Target } from "lucide-react";
import { marketplaceGoals } from "@/data/marketplaceNavigation"; // TODO: Task 9 — wire up data;

type ShopByGoalChipsProps = {
  /** `link` = navigate via URL (homepage). `filter` = apply filter on marketplace page */
  mode?: "link" | "filter";
  selectedGoal?: string;
  onSelectGoal?: (goal: string) => void;
  className?: string;
};

const ShopByGoalChips = ({
  mode = "link",
  selectedGoal,
  onSelectGoal,
  className = "",
}: ShopByGoalChipsProps) => {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {marketplaceGoals.map((goal) => {
        const isActive = selectedGoal === goal.id;
        const chipClass = [
          "inline-flex items-center gap-1.5 rounded-lg border px-3.5 py-2 text-xs font-semibold shadow-sm transition",
          isActive
            ? "border-orange-300 bg-orange-50 text-orange-800"
            : "border-navy-100 bg-white text-navy-950 hover:border-orange-300 hover:bg-orange-50/60 hover:text-orange-700",
        ].join(" ");

        if (mode === "link") {
          return (
            <Link
              key={goal.id}
              href={`/marketplace?goal=${encodeURIComponent(goal.id)}`}
              className={chipClass}
            >
              <Target size={12} className="shrink-0 text-orange-500" strokeWidth={2} />
              {goal.label}
              <ArrowRight size={12} className="opacity-60" />
            </Link>
          );
        }

        return (
          <button
            key={goal.id}
            type="button"
            onClick={() => onSelectGoal?.(goal.id)}
            className={chipClass}
          >
            <Target size={12} className="shrink-0 text-orange-500" strokeWidth={2} />
            {goal.label}
          </button>
        );
      })}
    </div>
  );
};

export default ShopByGoalChips;
