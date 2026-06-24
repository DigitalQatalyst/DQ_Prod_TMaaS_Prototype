import type { LucideIcon } from "lucide-react";

const challengePainCardClass =
  "group rounded-2xl border border-white/10 bg-white/[0.06] p-8 backdrop-blur-sm transition-all duration-300 hover:border-dq-orange/40 hover:bg-white/[0.09]";

const challengePainIconWellClass =
  "mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-dq-orange/10 text-dq-orange transition-colors duration-300 group-hover:bg-dq-orange/20";

type ChallengePainCardProps = {
  Icon: LucideIcon;
  title: string;
  body: string;
};

const ChallengePainCard = ({ Icon, title, body }: ChallengePainCardProps) => {
  return (
    <div className={challengePainCardClass}>
      <div className={challengePainIconWellClass}>
        <Icon size={22} />
      </div>
      <h3 className="mb-3 text-xl font-semibold tracking-tight text-white">{title}</h3>
      <p className="text-[15px] leading-relaxed text-white/60">{body}</p>
    </div>
  );
};

export default ChallengePainCard;
