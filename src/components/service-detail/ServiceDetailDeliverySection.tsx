import { serviceDetailTabLead } from "@/lib/brandAccent";
import { cn } from "@/lib/utils";
import { ServiceDetailSection } from "./ServiceDetailSection";

export type EffortLevel = "low" | "medium" | "high";

export interface DeliveryStep {
  step: number;
  title: string;
  duration?: string;
  body: string;
  active?: boolean;
  whatHappens: string;
  dqEffort: EffortLevel;
  yourEffort: EffortLevel;
}

export interface DeliveryProcess {
  steps: DeliveryStep[];
  totalDuration: string;
}

interface ServiceDetailDeliverySectionProps {
  process: DeliveryProcess;
}

const EFFORT_STYLES: Record<EffortLevel, { dot: string; label: string }> = {
  low: { dot: "bg-emerald-500", label: "Low" },
  medium: { dot: "bg-blue-500", label: "Medium" },
  high: { dot: "bg-dq-orange", label: "High" },
};

function EffortIndicator({ level }: { level: EffortLevel }) {
  const { dot, label } = EFFORT_STYLES[level];
  return (
    <span className="inline-flex items-center gap-2 text-sm text-gray-700">
      <span className={cn("h-2 w-2 shrink-0 rounded-full", dot)} aria-hidden />
      {label}
    </span>
  );
}

function stepperGridClass(stepCount: number): string {
  if (stepCount <= 1) return "grid-cols-1 max-w-sm";
  if (stepCount === 2) return "grid-cols-2";
  if (stepCount === 3) return "grid-cols-3";
  return "grid-cols-2 xl:grid-cols-4";
}

function StepCircle({
  step,
  active,
  size = "desktop",
}: {
  step: number;
  active?: boolean;
  size?: "desktop" | "mobile";
}) {
  const isDesktop = size === "desktop";

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-full border-2 font-mono font-bold",
        isDesktop ? "mb-5 h-14 w-14 text-lg" : "h-12 w-12 text-base",
        active
          ? cn(
              "border-dq-orange bg-dq-orange text-white",
              isDesktop && "shadow-lg"
            )
          : "border-gray-200 bg-white text-dq-navy"
      )}
    >
      {String(step).padStart(2, "0")}
    </div>
  );
}

/** Matches `HowWeWorkSection` stepper on DQ_CORPWEB_PROTOTYPE About Us page. */
function HorizontalDeliveryStepper({ steps }: { steps: DeliveryStep[] }) {
  return (
    <>
      <div className="relative hidden lg:block">
        <div
          className="absolute left-[3%] right-[3%] top-[28px] h-px bg-gray-200"
          aria-hidden
        />
        <div className={cn("relative grid gap-4", stepperGridClass(steps.length))}>
          {steps.map((item) => (
            <div key={item.step} className="flex flex-col items-start">
              <StepCircle step={item.step} active={item.active} />
              <h3 className="mb-2 text-lg font-semibold text-dq-navy">{item.title}</h3>
              <p className="text-[14px] leading-relaxed text-gray-600">{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-5 lg:hidden">
        {steps.map((item, index) => (
          <div key={item.step} className="flex gap-4">
            <div className="flex shrink-0 flex-col items-center">
              <StepCircle step={item.step} active={item.active} size="mobile" />
              {index < steps.length - 1 ? (
                <div className="my-2 w-px flex-1 bg-gray-200" aria-hidden />
              ) : null}
            </div>
            <div className="pb-4">
              <h3 className="mb-1.5 text-lg font-semibold text-dq-navy">{item.title}</h3>
              <p className="text-[14px] leading-relaxed text-gray-600">{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function TimelineEffortGrid({
  steps,
  totalDuration,
}: {
  steps: DeliveryStep[];
  totalDuration: string;
}) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-[var(--shadow-card)]">
      <table className="w-full min-w-[640px] text-left text-sm">
        <thead>
          <tr className="border-b border-gray-200 bg-gray-50/80">
            <th className="px-5 py-3.5 font-semibold text-dq-navy">Phase</th>
            <th className="px-5 py-3.5 font-semibold text-dq-navy">What Happens</th>
            <th className="px-5 py-3.5 font-semibold text-dq-navy">DQ Effort</th>
            <th className="px-5 py-3.5 font-semibold text-dq-navy">Your Effort</th>
            <th className="px-5 py-3.5 font-semibold text-dq-navy">Duration</th>
          </tr>
        </thead>
        <tbody>
          {steps.map((item) => (
            <tr key={item.step} className="border-b border-gray-100 last:border-b-0">
              <td className="px-5 py-4 font-semibold text-dq-navy">{item.title}</td>
              <td className="px-5 py-4 text-gray-600">{item.whatHappens}</td>
              <td className="px-5 py-4">
                <EffortIndicator level={item.dqEffort} />
              </td>
              <td className="px-5 py-4">
                <EffortIndicator level={item.yourEffort} />
              </td>
              <td className="px-5 py-4 text-gray-700">{item.duration ?? "-"}</td>
            </tr>
          ))}
          <tr className="bg-gray-50/50">
            <td className="px-5 py-4 font-semibold text-dq-navy">Total</td>
            <td className="px-5 py-4 text-gray-400">-</td>
            <td className="px-5 py-4 text-gray-400">-</td>
            <td className="px-5 py-4 text-gray-400">-</td>
            <td className="px-5 py-4 font-semibold text-dq-navy">{totalDuration}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function ServiceDetailDeliverySection({
  process,
}: ServiceDetailDeliverySectionProps) {
  const { steps, totalDuration } = process;

  return (
    <div className="space-y-16">
      <ServiceDetailSection
        className={serviceDetailTabLead}
        title="Our Delivery Process"
        description="A clear, structured approach designed to deliver actionable outcomes quickly and confidently."
      >
        <HorizontalDeliveryStepper steps={steps} />
      </ServiceDetailSection>

      <ServiceDetailSection
        title="Timeline & Effort"
        description="A streamlined engagement designed for speed and clarity."
      >
        <TimelineEffortGrid steps={steps} totalDuration={totalDuration} />
      </ServiceDetailSection>
    </div>
  );
}

export function getDeliverySteps(
  serviceType: string,
  flags: {
    isAdvisory: boolean;
    isDesign: boolean;
    isDeploy: boolean;
  }
): DeliveryProcess {
  if (flags.isAdvisory) {
    return {
      totalDuration: "Up to 1 Week",
      steps: [
        {
          step: 1,
          title: "Assess",
          duration: "1 Week",
          body: "We evaluate your organisation, current challenges, and transformation goals to identify the highest-value opportunities.",
          whatHappens: "Evaluate organisation, challenges, and transformation goals",
          dqEffort: "high",
          yourEffort: "medium",
          active: true,
        },
      ],
    };
  }

  if (flags.isDesign) {
    return {
      totalDuration: "Up to 4 Weeks",
      steps: [
        {
          step: 1,
          title: "Discover",
          duration: "1 Week",
          body: "We understand your organisation, workflows, systems, and transformation goals to identify high-value opportunities.",
          whatHappens: "Align on scope, objectives, and current-state context",
          dqEffort: "medium",
          yourEffort: "low",
          active: true,
        },
        {
          step: 2,
          title: "Design",
          duration: "1 Week",
          body: "We design the target experience, workflows, operating model, and AI-supported processes for measurable outcomes.",
          whatHappens: "Design target experience, workflows, and operating model",
          dqEffort: "high",
          yourEffort: "medium",
        },
        {
          step: 3,
          title: "Prototype",
          duration: "1 Week",
          body: "We convert the approved direction into implementation-ready assets including prototypes and specifications.",
          whatHappens: "Develop prototypes and implementation-ready specifications",
          dqEffort: "high",
          yourEffort: "low",
        },
        {
          step: 4,
          title: "Launch Plan",
          duration: "1 Week",
          body: "We provide executive guidance, KPI recommendations, and rollout planning for confident implementation.",
          whatHappens: "Present rollout plan, KPIs, and executive guidance",
          dqEffort: "medium",
          yourEffort: "low",
        },
      ],
    };
  }

  if (flags.isDeploy) {
    return {
      totalDuration: "Up to 12 Weeks",
      steps: [
        {
          step: 1,
          title: "Discover & Validate",
          duration: "1 Week",
          body: "We validate the business problem, define MVP scope, and align the solution direction before development begins.",
          whatHappens: "Validate scope, MVP direction, and solution alignment",
          dqEffort: "medium",
          yourEffort: "low",
          active: true,
        },
        {
          step: 2,
          title: "Solution Design",
          duration: "1 Week",
          body: "We translate the approved concept into implementation-ready specifications, architecture, and delivery planning.",
          whatHappens: "Define architecture, specifications, and delivery plan",
          dqEffort: "high",
          yourEffort: "medium",
        },
        {
          step: 3,
          title: "Build & Launch",
          duration: "10 Weeks",
          body: "We develop, test, deploy, and activate the MVP in a production-ready environment.",
          whatHappens: "Build, test, deploy, and activate in production",
          dqEffort: "high",
          yourEffort: "medium",
        },
      ],
    };
  }

  if (serviceType === "bundle") {
    return {
      totalDuration: "Ongoing",
      steps: [
        {
          step: 1,
          title: "Assess & Discover",
          duration: "1 Week",
          body: "We evaluate your organization's current workflows, identify opportunities for digital and AI enablement, and align on the overarching transformation strategy.",
          whatHappens: "Assess workflows and align transformation strategy",
          dqEffort: "high",
          yourEffort: "medium",
          active: true,
        },
        {
          step: 2,
          title: "Design & Prototype",
          duration: "4 Weeks",
          body: "We design the target experience, define architecture, establish governance, and create implementation-ready prototypes and specifications for the deployment phase.",
          whatHappens: "Design experience, architecture, and prototypes",
          dqEffort: "high",
          yourEffort: "medium",
        },
        {
          step: 3,
          title: "Build & Launch",
          duration: "10 Weeks",
          body: "Our TMaaS specialists execute the solution build, integrating AI components, conducting rigorous testing, and launching the capability into your production environment.",
          whatHappens: "Build, integrate, test, and launch the solution",
          dqEffort: "high",
          yourEffort: "medium",
        },
        {
          step: 4,
          title: "Managed Operations",
          duration: "Ongoing",
          body: "We provide continuous monitoring, incident resolution, performance optimization, and lifecycle governance to ensure sustained business value from your transformation.",
          whatHappens: "Operate, monitor, and optimise under SLA governance",
          dqEffort: "medium",
          yourEffort: "low",
        },
      ],
    };
  }

  if (serviceType === "manage") {
    return {
      totalDuration: "Ongoing",
      steps: [
        {
          step: 1,
          title: "Discovery & Alignment",
          duration: "1 Week",
          body: "We assess operational priorities, organizational readiness, and strategic objectives before initiation.",
          whatHappens: "Align on priorities, readiness, and service scope",
          dqEffort: "medium",
          yourEffort: "low",
          active: true,
        },
        {
          step: 2,
          title: "Service Delivery",
          duration: "Ongoing",
          body: "TMaaS specialists execute the scoped transformation activities using standardized governance controls.",
          whatHappens: "Execute scoped activities under governance controls",
          dqEffort: "high",
          yourEffort: "low",
        },
        {
          step: 3,
          title: "Governance & Oversight",
          duration: "Ongoing",
          body: "Progress, milestones, and delivery quality are tracked directly through TMaaS governance workflows.",
          whatHappens: "Track milestones, quality, and service performance",
          dqEffort: "medium",
          yourEffort: "low",
        },
      ],
    };
  }

  return { steps: [], totalDuration: "-" };
}
