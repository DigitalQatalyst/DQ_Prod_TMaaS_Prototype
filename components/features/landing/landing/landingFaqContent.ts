export type LandingFaqItem = {
  question: string;
  answer: string;
};

export const LANDING_FAQ_EYEBROW = "Good to know";

export const LANDING_FAQ_HEADLINE = "Frequently asked";

export const LANDING_FAQ_ITEMS: LandingFaqItem[] = [
  {
    question:
      "Is TMaaS a marketplace of different providers, or a DigitalQatalyst service?",
    answer:
      "TMaaS is DigitalQatalyst's own catalogue of productised transformation services. Every service is scoped, priced, and delivered by DQ's teams under one fixed-price model, not brokered across third-party providers.",
  },
  {
    question: "How is pricing fixed before I commit?",
    answer:
      "Each service in the catalogue has a defined scope and price band, built from a repeatable blueprint rather than estimated from scratch. You see the price and timeline before agreeing to anything.",
  },
  {
    question: "What happens after I book a discovery session?",
    answer:
      "We confirm your goal, recommend the services or bundle that fit, and agree scope and price. Most engagements can start within a day of that agreement.",
  },
  {
    question: "Can TMaaS support regulated or government organisations?",
    answer:
      "Yes. DigitalQatalyst's delivery teams work across government, financial services, and other regulated enterprises in the GCC, and TMaaS services are built to that delivery standard.",
  },
];
