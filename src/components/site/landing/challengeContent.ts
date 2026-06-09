import { Clock, CircleDollarSign, RefreshCw, type LucideIcon } from "lucide-react";

export type ChallengeCard = {
  Icon: LucideIcon;
  title: string;
  body: string;
};

export const CHALLENGE_EYEBROW = "The Challenge";

export const CHALLENGE_HEADLINE = "Traditional transformation is broken";

export const CHALLENGE_CARDS: ChallengeCard[] = [
  {
    Icon: Clock,
    title: "Slow, consultant-heavy delivery",
    body: "Transformation programmes drag on behind consultant-led models that resist speed, iteration, and ready-to-launch execution.",
  },
  {
    Icon: CircleDollarSign,
    title: "High cost of digital transformation, unclear value",
    body: "Enterprise budgets disappear into open-ended engagements — with opaque pricing and no clear line of sight to measurable outcomes.",
  },
  {
    Icon: RefreshCw,
    title: "Changing transformation priorities & demand",
    body: "The priority for transformation is continuously shifting in organisations due to continuously changing market trends and business priorities.",
  },
];

export const CHALLENGE_CLOSING =
  "TMaaS was built to close this gap — with a low-cost, architecture-led marketplace that accelerates impact and adapts as your priorities shift.";
