import type { LucideIcon } from "lucide-react";
import { CircleDollarSign, Clock, Layers } from "lucide-react";

export type HeroMockupStat = {
  value: string;
  label: string;
  Icon: LucideIcon;
};

export const HERO_MOCKUP_EYEBROW = "TMaaS · SERVICE CATALOGUE";

export const HERO_MOCKUP_BADGE = "CATALOGUE · LIVE";

export const HERO_MOCKUP_STATS: HeroMockupStat[] = [
  {
    value: "From $1k",
    label: "Fixed price, shown before you commit",
    Icon: CircleDollarSign,
  },
  {
    value: "<1 day",
    label: "To start",
    Icon: Clock,
  },
  {
    value: "100+",
    label: "Services, 12 categories",
    Icon: Layers,
  },
];
