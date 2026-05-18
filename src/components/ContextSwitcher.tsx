import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowRightLeft, Compass, LayoutDashboard, Landmark, Shield, CreditCard, Headphones } from "lucide-react";
import { useAuth, type UserRole } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type ContextTarget =
  | { key: "explore"; label: string; description: string; icon: typeof Compass; to: string }
  | {
      key: "role";
      label: string;
      description: string;
      icon: typeof LayoutDashboard;
      role: UserRole;
      to: string;
    };

const roleMeta: Record<UserRole, { label: string; icon: typeof LayoutDashboard }> = {
  client: { label: "Client Delivery", icon: Landmark },
  dq_delivery_lead: { label: "DQ Delivery Lead", icon: LayoutDashboard },
  dq_portfolio_oversight: { label: "Portfolio Oversight", icon: Shield },
  dq_finance: { label: "Finance", icon: CreditCard },
  dq_support: { label: "Support Ops", icon: Headphones },
};

const ContextSwitcher = ({
  stage = "auto",
  scrolled = false,
  className,
}: {
  stage?: "auto" | "marketing" | "dashboard";
  scrolled?: boolean;
  className?: string;
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, setUserRole } = useAuth();

  const effectiveStage = useMemo(() => {
    if (stage !== "auto") return stage;
    return location.pathname.startsWith("/dashboard") ? "dashboard" : "marketing";
  }, [location.pathname, stage]);

  const targets: ContextTarget[] = [
    {
      key: "explore",
      label: "Exploring (Stage 0/1)",
      description: "Landing / Explore / Marketplace",
      icon: Compass,
      to: "/",
    },
    {
      key: "role",
      label: "Client Delivery (Stage 2)",
      description: "Client workspace",
      icon: roleMeta.client.icon,
      role: "client",
      to: "/dashboard/overview",
    },
    {
      key: "role",
      label: "DQ Delivery Lead (Stage 3)",
      description: "Delivery operations",
      icon: roleMeta.dq_delivery_lead.icon,
      role: "dq_delivery_lead",
      to: "/dashboard/overview",
    },
    {
      key: "role",
      label: "Portfolio Oversight (Stage 3)",
      description: "Portfolio dashboard",
      icon: roleMeta.dq_portfolio_oversight.icon,
      role: "dq_portfolio_oversight",
      to: "/dashboard/dq/portfolio",
    },
    {
      key: "role",
      label: "Finance (Stage 3)",
      description: "Commercial tracking",
      icon: roleMeta.dq_finance.icon,
      role: "dq_finance",
      to: "/dashboard/dq/finance",
    },
    {
      key: "role",
      label: "Support Ops (Stage 3)",
      description: "Onboarding & interruptions",
      icon: roleMeta.dq_support.icon,
      role: "dq_support",
      to: "/dashboard/dq/support",
    },
  ];

  const currentLabel =
    effectiveStage === "marketing"
      ? "Exploring"
      : roleMeta[user.role]?.label ?? "Dashboard";

  const triggerClassName =
    effectiveStage === "marketing"
      ? [
          "rounded-full",
          scrolled ? "border border-navy-100 bg-white/60" : "border border-transparent bg-white/10",
          "backdrop-blur-xl backdrop-saturate-150",
          "hover:bg-white/70",
        ].join(" ")
      : "rounded-full";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={effectiveStage === "marketing" ? "ghost" : "outline"}
          size="sm"
          className={[triggerClassName, "gap-2", className].filter(Boolean).join(" ")}
        >
          <ArrowRightLeft size={16} />
          <span className="hidden sm:inline">Context:</span>
          <span className="font-medium">{currentLabel}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[280px]">
        <DropdownMenuLabel>Mock journey switcher</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {targets.map((t) => {
          const Icon = t.icon;
          return (
            <DropdownMenuItem
              key={t.key === "explore" ? t.key : t.role}
              className="flex items-start gap-3"
              onClick={() => {
                if (t.key === "role") setUserRole(t.role);
                navigate(t.to);
              }}
            >
              <span className="mt-0.5 grid h-8 w-8 place-items-center rounded-md bg-muted text-foreground">
                <Icon size={16} />
              </span>
              <span className="flex flex-col">
                <span className="text-sm font-medium leading-tight">{t.label}</span>
                <span className="text-xs text-muted-foreground">{t.description}</span>
              </span>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ContextSwitcher;

