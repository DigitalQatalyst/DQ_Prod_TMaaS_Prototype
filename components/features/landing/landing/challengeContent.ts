import { Clock, CircleDollarSign, RefreshCw, type LucideIcon } from "lucide-react";

export type ChallengeCard = {
  Icon: LucideIcon;
  title: string;
  body: string;
};

export const CHALLENGE_EYEBROW = "The problem";

export const CHALLENGE_HEADLINE = "Why transformation programmes stall";

export const CHALLENGE_CARDS: ChallengeCard[] = [
  {
    Icon: Clock,
    title: "Slow to start",
    body: "Programmes take months to start. Every engagement begins from a blank page. Ready-to-launch blueprints get most engagements live in under a day.",
  },
  {
    Icon: CircleDollarSign,
    title: "Expensive and unclear",
    body: "Costs are open-ended and hard to predict until the work is already under way. Every service is priced before you commit — from $1k, fixed scope.",
  },
  {
    Icon: RefreshCw,
    title: "Hard to adapt",
    body: "Disconnected tools and teams cannot keep pace when priorities change. Modular services activate independently, so scope can flex without renegotiating a master contract.",
  },
];

export const CHALLENGE_CLOSING =
  "Each of these is a known failure point in consultant-led delivery. Here is what TMaaS does differently for each one.";
