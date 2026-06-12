import { Clock, CircleDollarSign, RefreshCw, type LucideIcon } from "lucide-react";
import { PLATFORM_NAME, PLATFORM_HERO_SUBCOPY } from "@/lib/brandLinks";

export type ChallengeCard = {
  Icon: LucideIcon;
  title: string;
  body: string;
};

export const CHALLENGE_EYEBROW = "The challenge";

export const CHALLENGE_HEADLINE =
  "Digital transformation is slow, costly, and hard to scale";

export const CHALLENGE_CARDS: ChallengeCard[] = [
  {
    Icon: Clock,
    title: "Slow to start",
    body: "Consultant-led programmes take months before anything ships. Every project starts from scratch.",
  },
  {
    Icon: CircleDollarSign,
    title: "Expensive and unclear",
    body: "Open-ended budgets and hidden costs make it hard to see value or know what to fund next.",
  },
  {
    Icon: RefreshCw,
    title: "Hard to adapt",
    body: "Disconnected tools and teams can't keep up when business priorities change.",
  },
];

export const CHALLENGE_CLOSING = `${PLATFORM_NAME} fixes this — ${PLATFORM_HERO_SUBCOPY.replace(/^TMaaS is /, "")}`;
