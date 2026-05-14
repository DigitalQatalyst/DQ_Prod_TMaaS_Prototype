import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Globe, CheckCircle2, TrendingUp, Users, Target, Database, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ServiceRequestDialog from "@/components/ServiceRequestDialog";
import MeshSection from "@/components/site/MeshSection";
import SectionHeading from "@/components/site/SectionHeading";

// Service data mapping
const servicesData: Record<string, any> = {
  "1": {
    name: "Digital Experience Strategy",
    category: "Digital Experience",
    type: "Design",
    tower: "Digital Experience",
    price: "From $25k",
    duration: "4-6 weeks",
    capabilities: ["Customer Journey", "Omnichannel", "MarTech", "CRM", "Analytics"],
    icon: Globe,
    iconColor: "text-orange-600",
    badgeColor: "border border-navy-100 bg-white/60 text-gray-700 backdrop-blur",
  },
  "2": {
    name: "DWS Strategy",
    category: "Digital Workspace",
    type: "Design",
    tower: "Digital Workspace",
    price: "From $25k",
    duration: "4-6 weeks",
    capabilities: ["Collaboration", "GRC", "Automation", "Core Systems", "Adoption"],
    icon: Users,
    iconColor: "text-orange-600",
    badgeColor: "border border-navy-100 bg-white/60 text-gray-700 backdrop-blur",
  },
  "3": {
    name: "DI&A Strategy",
    category: "Data & Intelligence",
    type: "Design",
    tower: "Data & Intelligence",
    price: "From $30k",
    duration: "5-7 weeks",
    capabilities: ["Data Governance", "Data Platform", "Analytics", "AI/ML", "Data Products"],
    icon: Database,
    iconColor: "text-orange-600",
    badgeColor: "border border-navy-100 bg-white/60 text-gray-700 backdrop-blur",
  },
  "4": {
    name: "SecDevOps Strategy",
    category: "SecDevOps",
    type: "Design",
    tower: "SecDevOps",
    price: "From $25k",
    duration: "4-6 weeks",
    capabilities: ["Security", "DevOps", "ITSM", "Observability", "Integration"],
    icon: ShieldCheck,
    iconColor: "text-orange-600",
    badgeColor: "border border-navy-100 bg-white/60 text-gray-700 backdrop-blur",
  },
};

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [requestDialogOpen, setRequestDialogOpen] = useState(false);

  // Get service data based on ID, fallback to service 1 if not found
  const serviceData = servicesData[id || "1"] || servicesData["1"];
  const ServiceIcon = serviceData.icon;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <MeshSection variant="heroLight" grid className="pt-32 pb-12">
        <div className="mx-auto max-w-7xl px-6">
          <button
            onClick={() => navigate("/marketplace")}
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 transition-colors hover:text-navy-950"
          >
            <ArrowLeft size={16} />
            Back to Marketplace
          </button>

          <div className="mt-6 grid gap-8 lg:grid-cols-3">
            {/* Main Info */}
            <div className="lg:col-span-2">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10">
                  <ServiceIcon size={24} className={serviceData.iconColor} />
                </div>
                <div className="flex gap-2">
                  <Badge className={serviceData.badgeColor}>{serviceData.category}</Badge>
                  <Badge
                    variant="secondary"
                    className="border border-navy-100 bg-white/60 text-gray-700 backdrop-blur"
                  >
                    {serviceData.type} Service
                  </Badge>
                </div>
              </div>

              <SectionHeading
                align="left"
                className="mx-0 max-w-none text-left"
                title={
                  <span className="text-4xl font-bold tracking-tight text-navy-950 md:text-5xl">
                    {serviceData.name}
                  </span>
                }
              />
              
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                Define the end-to-end customer experience architecture that enables organisations to deliver
                seamless, scalable, and insight-driven digital interactions across channels, journeys, and service
                touchpoints.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Architecture-First", "Scalable", "Governance", "Execution-Ready"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-navy-100 bg-white/60 px-3 py-1.5 text-xs font-semibold text-gray-700 backdrop-blur"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Sidebar Card */}
            <div className="rounded-3xl border border-navy-100 bg-white/70 p-6 shadow-card backdrop-blur">
              <div className="mb-4 flex items-baseline justify-between">
                <span className="text-sm text-gray-600">Investment</span>
                <span className="text-2xl font-bold text-navy-950">{serviceData.price}</span>
              </div>

              <div className="space-y-3 border-t border-navy-100 pt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-semibold text-navy-950">{serviceData.duration}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Service Type</span>
                  <span className="font-semibold text-navy-950">{serviceData.type}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tower</span>
                  <span className="font-semibold text-navy-950">{serviceData.tower}</span>
                </div>
              </div>

              <Button
                className="mt-6 w-full rounded-full bg-orange-500 text-white shadow-[var(--glow-orange-md)] hover:bg-orange-400"
                onClick={() => setRequestDialogOpen(true)}
              >
                Request Service
              </Button>
              
              <Button
                variant="outline"
                className="mt-3 w-full rounded-full border-navy-200 bg-white/60 text-navy-950 backdrop-blur hover:bg-white"
              >
                Download Overview
              </Button>
            </div>
          </div>
        </div>
      </MeshSection>

      {/* Service Request Dialog */}
      <ServiceRequestDialog
        open={requestDialogOpen}
        onOpenChange={setRequestDialogOpen}
        service={serviceData}
      />

      {/* Main Content */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="mb-8 grid w-full max-w-3xl grid-cols-5 border border-navy-100 bg-white/70 p-1 backdrop-blur lg:w-auto">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="deliverables">Deliverables</TabsTrigger>
              <TabsTrigger value="inputs">Required Inputs</TabsTrigger>
              <TabsTrigger value="methodology">Methodology</TabsTrigger>
              <TabsTrigger value="impact">Impact</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-12">
              {/* Strategic Positioning */}
              <div>
                <h2 className="mb-6 text-2xl font-bold tracking-tight text-navy-950">Strategic Positioning</h2>
                <div className="rounded-3xl border border-navy-100 bg-white/70 p-8 shadow-card backdrop-blur">
                  <p className="leading-relaxed text-navy-950">
                    This service establishes the structural foundations required to orchestrate marketing, sales, and
                    service experiences across the full growth lifecycle. Our approach emphasizes architecture-first
                    thinking, ensuring scalability and governance while creating long-term value through direct
                    alignment between experience strategy and execution.
                  </p>
                </div>
              </div>

              {/* Impact Metrics */}
              <div>
                <h2 className="mb-6 text-2xl font-bold tracking-tight text-navy-950">Measurable Business Impact</h2>
                <div className="grid gap-6 md:grid-cols-3">
                  {[
                    {
                      icon: TrendingUp,
                      title: "Customer Acquisition & Conversion",
                      description:
                        "Architecture-driven design optimizes journey orchestration, reducing friction and improving conversion rates across all touchpoints.",
                    },
                    {
                      icon: Users,
                      title: "Customer Lifetime Value & Retention",
                      description:
                        "Unified experience architecture enables personalized engagement strategies that increase retention and maximize CLV.",
                    },
                    {
                      icon: Target,
                      title: "Digital Engagement Performance",
                      description:
                        "Integrated analytics and optimization frameworks drive continuous improvement in experience quality and business outcomes.",
                    },
                  ].map((metric) => (
                    <div
                      key={metric.title}
                      className="rounded-3xl border border-navy-100 bg-white/70 p-6 shadow-card backdrop-blur transition-shadow hover:border-navy-200 hover:shadow-elevated"
                    >
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10">
                        <metric.icon size={24} className="text-orange-600" />
                      </div>
                      <h3 className="mb-2 font-semibold tracking-tight text-navy-950">{metric.title}</h3>
                      <p className="text-sm leading-relaxed text-gray-600">{metric.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Capability Areas */}
              <div>
                <h2 className="mb-4 text-2xl font-bold tracking-tight text-navy-950">Capability Areas Covered</h2>
                <p className="mb-6 leading-relaxed text-gray-600">
                  Our Design Services provide end-to-end architecture definition across the following capability areas.
                  By covering these capability areas, we prevent siloed implementations, ensure long-term scalability,
                  and align strategy directly to execution.
                </p>

                <div className="space-y-4">
                  {[
                    {
                      title: "Customer Journey & Experience Strategy",
                      description:
                        "Define persona models, lifecycle journeys, service design principles, and governance frameworks across growth stages.",
                    },
                    {
                      title: "Omnichannel Platform Architecture",
                      description:
                        "Design the digital channel ecosystem (web, mobile, portals, branch, partner channels) with unified orchestration and delivery models.",
                    },
                    {
                      title: "MarTech & Personalisation Architecture",
                      description:
                        "Define campaign orchestration, marketing technology stack alignment, content governance, and personalisation strategy.",
                    },
                    {
                      title: "CRM & Service Architecture",
                      description:
                        "Design lead-to-revenue lifecycle models, CRM operating structures, and customer interaction frameworks.",
                    },
                    {
                      title: "CX Analytics & Optimisation",
                      description:
                        "Establish experimentation models, performance analytics frameworks, and feedback loops for continuous optimisation.",
                    },
                  ].map((capability, i) => (
                    <div
                      key={capability.title}
                      className="flex gap-4 rounded-2xl border border-navy-100 bg-white/70 p-6 shadow-card backdrop-blur"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-sm font-semibold text-white shadow-[var(--glow-orange-md)]">
                        {i + 1}
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold tracking-tight text-navy-950">{capability.title}</h3>
                        <p className="text-sm leading-relaxed text-gray-600">{capability.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Deliverables Tab */}
            <TabsContent value="deliverables" className="space-y-8">
              <div>
                <h2 className="mb-4 text-2xl font-bold tracking-tight text-navy-950">Service Deliverables</h2>
                <p className="mb-8 leading-relaxed text-gray-600">
                  The deliverables focus on designing and implementing a robust Digital Experience practice. They are
                  structured across four stages of the Design service, ensuring tangible, executive-ready, and
                  implementation-oriented outputs.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      stage: "Envision Stage",
                      deliverable: "Design Report",
                      description:
                        "Structured documentation of the Digital Experience practice design and strategy, including architecture principles, capability maps, and transformation roadmap.",
                      items: [
                        "Architecture principles & patterns",
                        "Capability maturity assessment",
                        "Transformation roadmap",
                        "Governance framework",
                      ],
                    },
                    {
                      stage: "Model Stage",
                      deliverable: "Design Infographic",
                      description:
                        "Executive-ready visual summary of the practice design, platform architecture, and expected outcomes.",
                      items: [
                        "Platform architecture diagram",
                        "Journey orchestration model",
                        "Technology stack overview",
                        "Expected business outcomes",
                      ],
                    },
                    {
                      stage: "Specify Stage",
                      deliverable: "Design Specifications",
                      description:
                        "Platform requirements and high-level solution designs, including integration architecture, orchestration models, and governance structures.",
                      items: [
                        "Functional requirements",
                        "Integration architecture",
                        "Data & analytics specifications",
                        "Security & compliance requirements",
                      ],
                    },
                    {
                      stage: "Prototype Stage",
                      deliverable: "Design Prototypes",
                      description:
                        "Practical prototypes demonstrating solution behaviour across journeys and channels, validating orchestration logic and reducing implementation ambiguity.",
                      items: [
                        "Journey prototypes",
                        "Channel experience mockups",
                        "Orchestration flow validation",
                        "User testing insights",
                      ],
                    },
                  ].map((stage) => (
                    <div key={stage.stage} className="rounded-3xl border border-navy-100 bg-white/70 p-6 shadow-card backdrop-blur">
                      <div className="mb-4 flex items-start justify-between">
                        <div>
                          <Badge variant="secondary" className="mb-2 border border-navy-100 bg-white/60 text-gray-700 backdrop-blur">
                            {stage.stage}
                          </Badge>
                          <h3 className="text-xl font-semibold tracking-tight text-navy-950">{stage.deliverable}</h3>
                        </div>
                        <CheckCircle2 size={24} className="text-orange-600" />
                      </div>
                      <p className="mb-4 text-sm leading-relaxed text-gray-600">{stage.description}</p>
                      <div className="grid gap-2 sm:grid-cols-2">
                        {stage.items.map((item) => (
                          <div key={item} className="flex items-center gap-2 text-sm text-navy-950">
                            <div className="h-1.5 w-1.5 rounded-full bg-orange-500"></div>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Required Inputs Tab */}
            <TabsContent value="inputs" className="space-y-8">
              <div>
                <h2 className="mb-4 text-2xl font-bold tracking-tight text-navy-950">Required Inputs</h2>
                <p className="mb-8 leading-relaxed text-gray-600">
                  To ensure the Digital Experience Strategy is contextually relevant and executable, we require access
                  to the following organizational assets and documentation. These inputs enable us to align the
                  architecture with your strategic objectives and operational realities.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      title: "Business Vision",
                      description:
                        "Strategic direction and business model documentation that guides transformation priorities.",
                      items: [
                        "Corporate strategy & strategic objectives",
                        "Business model canvas & value propositions",
                        "Value streams & revenue models",
                        "Market positioning & competitive landscape",
                      ],
                      icon: Target,
                      color: "text-blue-600",
                      bgColor: "bg-blue-500/10",
                    },
                    {
                      title: "Enterprise Assets",
                      description:
                        "Current state documentation of business capabilities, data, applications, and technology infrastructure.",
                      items: [
                        "Business capability models",
                        "Data architecture & data catalog",
                        "Application portfolio & integrations",
                        "Technology stack & infrastructure",
                      ],
                      icon: Globe,
                      color: "text-purple-600",
                      bgColor: "bg-purple-500/10",
                    },
                    {
                      title: "Experience Assets",
                      description:
                        "Customer and market insights that inform experience design and channel strategy.",
                      items: [
                        "Customer segments & personas",
                        "Customer journeys & pain points",
                        "Digital touchpoints & channels",
                        "Experience metrics & feedback",
                      ],
                      icon: Users,
                      color: "text-green-600",
                      bgColor: "bg-green-500/10",
                    },
                    {
                      title: "Transformation Portfolio",
                      description:
                        "Existing transformation initiatives and requirements that need to be integrated or aligned.",
                      items: [
                        "Transformation roadmaps & timelines",
                        "Active initiatives & projects",
                        "Business requirements & use cases",
                        "Constraints & dependencies",
                      ],
                      icon: TrendingUp,
                      color: "text-orange-600",
                      bgColor: "bg-orange-500/10",
                    },
                  ].map((input) => (
                    <div key={input.title} className="rounded-3xl border border-navy-100 bg-white/70 p-6 shadow-card backdrop-blur">
                      <div className="mb-4 flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-500/10">
                          <input.icon size={24} className="text-orange-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="mb-1 text-xl font-semibold tracking-tight text-navy-950">{input.title}</h3>
                          <p className="text-sm leading-relaxed text-gray-600">{input.description}</p>
                        </div>
                      </div>
                      <div className="ml-16 space-y-2">
                        {input.items.map((item) => (
                          <div key={item} className="flex items-start gap-3">
                            <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-orange-600" />
                            <span className="text-sm text-navy-950">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-3xl border border-navy-100 bg-white/70 p-6 shadow-card backdrop-blur">
                  <h3 className="mb-2 font-semibold tracking-tight text-navy-950">Input Flexibility</h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    We understand that not all organizations have complete documentation across all areas. Our delivery
                    approach includes discovery workshops to capture missing information and validate existing assets.
                    The quality and completeness of inputs directly impacts the speed and precision of delivery.
                  </p>
                </div>
              </div>
            </TabsContent>

            {/* Methodology Tab */}
            <TabsContent value="methodology" className="space-y-12">
              <div>
                <h2 className="mb-6 text-2xl font-bold tracking-tight text-navy-950">The DQ Methodology</h2>
                <p className="mb-8 text-lg leading-relaxed text-gray-600">
                  An architecture-first approach that combines structured frameworks, proven practices, and AI-accelerated
                  delivery to ensure scalable, executable transformation outcomes.
                </p>

                {/* Design Method */}
                <div className="mb-12 rounded-3xl border border-navy-100 bg-white/70 p-8 shadow-card backdrop-blur">
                  <h3 className="mb-4 text-xl font-semibold tracking-tight text-navy-950">
                    The DQ Design Method — Best Practices, Yet Targeted Designs
                  </h3>
                  <p className="mb-6 leading-relaxed text-gray-600">
                    The design approach integrates four essential dimensions to deliver architecture that is both
                    industry-aligned and contextually relevant:
                  </p>

                  <div className="grid gap-6 md:grid-cols-2">
                    {[
                      {
                        title: "Framework Reference",
                        description:
                          "Structured blueprints aligned with industry standards ensure architectural integrity and cohesion.",
                      },
                      {
                        title: "Best Practices & Standards",
                        description:
                          "Incorporates proven global practices to ensure scalability and future readiness.",
                      },
                      {
                        title: "Client Context",
                        description:
                          "Tailors the design to the organisation's strategic objectives, maturity, and operational realities.",
                      },
                      {
                        title: "Reference Case",
                        description:
                          "Leverages comparable implementations to validate decisions and optimise outcomes.",
                      },
                    ].map((dimension) => (
                      <div key={dimension.title} className="rounded-2xl border border-navy-100 bg-white/60 p-5 backdrop-blur">
                        <h4 className="mb-2 font-semibold tracking-tight text-navy-950">{dimension.title}</h4>
                        <p className="text-sm leading-relaxed text-gray-600">{dimension.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* DBP Foundation */}
                <div className="mb-12">
                  <h3 className="mb-4 text-xl font-semibold tracking-tight text-navy-950">
                    The DQ Digital Business Platform (DBP) Foundation
                  </h3>
                  <p className="mb-6 leading-relaxed text-gray-600">
                    Digital Experience Strategy is anchored within the DQ Digital Business Platform (DBP), composed of
                    four integrated pillars that operate as an integrated architecture rather than standalone initiatives:
                  </p>

                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                      { name: "Digital Experience", color: "bg-blue-500" },
                      { name: "Digital Workspace", color: "bg-purple-500" },
                      { name: "Digital Intelligence & Analytics", color: "bg-green-500" },
                      { name: "Digital SecDevOps", color: "bg-orange-500" },
                    ].map((pillar) => (
                      <div
                        key={pillar.name}
                        className="rounded-2xl border border-navy-100 bg-white/70 p-5 text-center shadow-card backdrop-blur transition-shadow hover:border-navy-200 hover:shadow-elevated"
                      >
                        <div className="mx-auto mb-3 h-2 w-12 rounded-full bg-orange-500"></div>
                        <p className="text-sm font-semibold text-navy-950">{pillar.name}</p>
                      </div>
                    ))}
                  </div>

                  <p className="mt-6 text-sm leading-relaxed text-gray-600">
                    These pillars enable real-time insight, seamless workflows, and cross-functional orchestration across
                    the enterprise.
                  </p>
                </div>

                {/* AI-Accelerated Blueprints */}
                <div className="rounded-3xl border border-orange-500/20 bg-white/70 p-8 shadow-card backdrop-blur">
                  <h3 className="mb-4 text-xl font-semibold tracking-tight text-navy-950">
                    Framework & AI-Accelerated Blueprints
                  </h3>
                  <p className="mb-6 leading-relaxed text-navy-950">
                    DQ's AI-Accelerated Blueprints convert framework-driven platform designs into executable outputs. By
                    combining structured architecture with AI-assisted prototyping and build acceleration, this approach:
                  </p>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      "Reduces time to market",
                      "Lowers transformation cost",
                      "Increases solution agility",
                      "Produces validated, implementation-ready outputs",
                    ].map((benefit) => (
                      <div key={benefit} className="flex items-center gap-3">
                        <CheckCircle2 size={20} className="shrink-0 text-orange-600" />
                        <span className="text-sm font-semibold text-navy-950">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Impact Tab */}
            <TabsContent value="impact" className="space-y-8">
              <div>
                <h2 className="mb-6 text-2xl font-bold tracking-tight text-navy-950">Business Impact & ROI</h2>
                
                <div className="mb-8 rounded-3xl border border-navy-100 bg-white/70 p-8 shadow-card backdrop-blur">
                  <h3 className="mb-4 text-lg font-semibold tracking-tight text-navy-950">Expected Outcomes</h3>
                  <div className="space-y-4">
                    {[
                      {
                        metric: "15-30%",
                        description: "Improvement in customer acquisition and conversion rates",
                      },
                      {
                        metric: "20-40%",
                        description: "Increase in customer lifetime value through optimized engagement",
                      },
                      {
                        metric: "25-50%",
                        description: "Reduction in time-to-market for new digital experiences",
                      },
                      {
                        metric: "30-60%",
                        description: "Decrease in integration and orchestration complexity",
                      },
                    ].map((outcome) => (
                      <div key={outcome.description} className="flex items-start gap-4">
                        <div className="flex h-16 w-20 shrink-0 items-center justify-center rounded-2xl bg-orange-500/10">
                          <span className="text-xl font-bold text-orange-600">{outcome.metric}</span>
                        </div>
                        <div className="flex-1 pt-2">
                          <p className="text-sm leading-relaxed text-navy-950">{outcome.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-navy-100 bg-white/70 p-8 shadow-card backdrop-blur">
                  <h3 className="mb-4 text-lg font-semibold tracking-tight text-navy-950">Who This Service Is For</h3>
                  <p className="mb-6 leading-relaxed text-gray-600">
                    This service is designed for senior executives and transformation leaders who need to establish or
                    modernize their digital experience capabilities:
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {["CIOs", "CDOs", "Heads of Digital", "Marketing Directors", "Transformation Leads"].map(
                      (role) => (
                        <Badge
                          key={role}
                          variant="secondary"
                          className="border border-navy-100 bg-white/60 px-4 py-2 text-gray-700 backdrop-blur"
                        >
                          {role}
                        </Badge>
                      )
                    )}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
