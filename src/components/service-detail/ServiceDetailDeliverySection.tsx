import { ServiceDetailSection } from "./ServiceDetailSection";

interface DeliveryStep {
  step: number;
  title: string;
  duration?: string;
  body: string;
  active?: boolean;
}

interface ServiceDetailDeliverySectionProps {
  steps: DeliveryStep[];
}

export function ServiceDetailDeliverySection({
  steps,
}: ServiceDetailDeliverySectionProps) {
  return (
    <ServiceDetailSection eyebrow="Delivery" title="How Delivery Works">
      <div className="relative ml-4 space-y-8 border-l border-gray-200">
        {steps.map((item) => (
          <div key={item.step} className="relative pl-8">
            <div
              className={`absolute -left-3.5 top-0 flex h-7 w-7 items-center justify-center rounded-full border-4 border-white text-[10px] font-semibold text-white shadow-sm ${
                item.active ? "bg-dq-orange" : "bg-dq-navy"
              }`}
            >
              {item.step}
            </div>
            <h3 className="text-base font-semibold text-dq-navy">
              {item.title}
              {item.duration ? (
                <span className="ml-2 text-sm font-normal text-gray-400">
                  ({item.duration})
                </span>
              ) : null}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-gray-600">{item.body}</p>
          </div>
        ))}
      </div>
    </ServiceDetailSection>
  );
}

export function getDeliverySteps(
  serviceType: string,
  flags: {
    isAdvisory: boolean;
    isDesign: boolean;
    isDeploy: boolean;
  }
): DeliveryStep[] {
  if (flags.isAdvisory) {
    return [
      {
        step: 1,
        title: "Assess",
        duration: "1 Week",
        body: "We evaluate your organisation, current challenges, and transformation goals to identify the highest-value opportunities.",
        active: true,
      },
    ];
  }

  if (flags.isDesign) {
    return [
      {
        step: 1,
        title: "Discover",
        duration: "1 Week",
        body: "We understand your organisation, workflows, systems, and transformation goals to identify high-value opportunities.",
        active: true,
      },
      {
        step: 2,
        title: "Design",
        duration: "1 Week",
        body: "We design the target experience, workflows, operating model, and AI-supported processes for measurable outcomes.",
      },
      {
        step: 3,
        title: "Prototype",
        duration: "1 Week",
        body: "We convert the approved direction into implementation-ready assets including prototypes and specifications.",
      },
      {
        step: 4,
        title: "Launch Plan",
        duration: "1 Week",
        body: "We provide executive guidance, KPI recommendations, and rollout planning for confident implementation.",
      },
    ];
  }

  if (flags.isDeploy) {
    return [
      {
        step: 1,
        title: "Discover & Validate",
        duration: "1 Week",
        body: "We validate the business problem, define MVP scope, and align the solution direction before development begins.",
        active: true,
      },
      {
        step: 2,
        title: "Solution Design",
        duration: "1 Week",
        body: "We translate the approved concept into implementation-ready specifications, architecture, and delivery planning.",
      },
      {
        step: 3,
        title: "Build & Launch",
        duration: "10 Weeks",
        body: "We develop, test, deploy, and activate the MVP in a production-ready environment.",
      },
    ];
  }

  if (serviceType === "bundle") {
    return [
      {
        step: 1,
        title: "Assess & Discover",
        duration: "1 Week",
        body: "We evaluate your organization's current workflows, identify opportunities for digital and AI enablement, and align on the overarching transformation strategy.",
        active: true,
      },
      {
        step: 2,
        title: "Design & Prototype",
        duration: "4 Weeks",
        body: "We design the target experience, define architecture, establish governance, and create implementation-ready prototypes and specifications for the deployment phase.",
      },
      {
        step: 3,
        title: "Build & Launch",
        duration: "10 Weeks",
        body: "Our TMaaS specialists execute the solution build, integrating AI components, conducting rigorous testing, and launching the capability into your production environment.",
      },
      {
        step: 4,
        title: "Managed Operations",
        duration: "Ongoing",
        body: "We provide continuous monitoring, incident resolution, performance optimization, and lifecycle governance to ensure sustained business value from your transformation.",
      },
    ];
  }

  if (serviceType === "manage") {
    return [
      {
        step: 1,
        title: "Discovery & Alignment",
        body: "We assess operational priorities, organizational readiness, and strategic objectives before initiation.",
        active: true,
      },
      {
        step: 2,
        title: "Service Delivery",
        body: "TMaaS specialists execute the scoped transformation activities using standardized governance controls.",
      },
      {
        step: 3,
        title: "Governance & Oversight",
        body: "Progress, milestones, and delivery quality are tracked directly through TMaaS governance workflows.",
      },
    ];
  }

  return [];
}
