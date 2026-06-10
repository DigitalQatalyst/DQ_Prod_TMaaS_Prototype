import { Clock, CircleDollarSign, RefreshCw, type LucideIcon } from "lucide-react";
import { PLATFORM_NAME } from "@/lib/brandLinks";

export type ChallengeCard = {
  Icon: LucideIcon;
  title: string;
  body: string;
};

export const CHALLENGE_EYEBROW = "Why teams switch";

export const CHALLENGE_HEADLINE =
  "Transformation shouldn't depend on isolated consulting engagements";

export const CHALLENGE_CARDS: ChallengeCard[] = [
  {
    Icon: Clock,
    title: "Hard to find initiatives that fit your goals",
    body: "Transformation leads struggle to identify and tailor programmes aligned with organisational priorities. Every engagement starts from scratch.",
  },
  {
    Icon: CircleDollarSign,
    title: "High cost, unclear business value",
    body: "Business leaders face open-ended budgets and weak ROI visibility, making it difficult to justify spend or decide what to fund next.",
  },
  {
    Icon: RefreshCw,
    title: "Disconnected, complex delivery",
    body: "Technology leaders are overwhelmed by fragmented processes, siloed stakeholders, and delivery models that don't scale or adapt.",
  },
];

export const CHALLENGE_CLOSING = `${PLATFORM_NAME} industrialises delivery through a productised marketplace: AI-ready blueprints, governed execution, and reusable operating models that adapt as priorities shift.`;
