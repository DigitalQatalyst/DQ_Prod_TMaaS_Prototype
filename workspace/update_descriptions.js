const fs = require('fs');

const descriptions = {
  "Online Web Presence (High-Impact) - Assess": "A strategic discovery engagement focused on evaluating your organisation’s web presence, digital journeys, customer engagement opportunities, and AI enablement potential.",
  "Online Web Presence (High-Impact) - Design": "Design and specification of high-impact web platforms, portals, customer journeys, and digital engagement experiences aligned to business goals.",
  "Online Web Presence (High-Impact) - AI Design": "Design of AI-powered web capabilities including assistants, personalization, automation, intelligent search, and customer engagement workflows.",
  "Online Web Presence (High-Impact) - Implementation": "Deployment and implementation of enterprise web platforms, portals, landing pages, and customer-facing digital experiences.",
  "Online Web Presence (High-Impact) - AI Implementation": "Deployment of AI-powered web assistants, intelligent automation, AI search, recommendations, and conversational experiences.",
  "Online Web Presence (High-Impact) - Managed Service": "Ongoing management, optimisation, support, monitoring, and continuous improvement of enterprise web experience platforms.",

  "Online Social Presence (High-Impact) - Assess": "Strategic assessment of your organisation’s social engagement maturity, audience presence, publishing strategy, and AI engagement opportunities.",
  "Online Social Presence (High-Impact) - Design": "Design of social engagement strategies, audience journeys, campaign structures, and digital community engagement models.",
  "Online Social Presence (High-Impact) - AI Design": "Design of AI-enabled social engagement capabilities including AI content generation, intelligent moderation, automation, and sentiment analysis.",
  "Online Social Presence (High-Impact) - Implementation": "Deployment and configuration of social engagement, publishing, campaign, and audience interaction platforms.",
  "Online Social Presence (High-Impact) - AI Implementation": "Deployment of AI-powered social engagement automation, content intelligence, audience insights, and conversational engagement capabilities.",
  "Online Social Presence (High-Impact) - Managed Service": "Managed operations and optimisation of social engagement platforms, campaigns, publishing workflows, and audience engagement environments.",

  "Mobile Apps (High-Impact) - Assess": "Discovery engagement focused on evaluating mobile engagement opportunities, user journeys, digital accessibility, and mobile transformation priorities.",
  "Mobile Apps (High-Impact) - Design": "Design of mobile applications, mobile-first customer journeys, engagement experiences, and operational workflows.",
  "Mobile Apps (High-Impact) - AI Design": "Design of AI-powered mobile capabilities including assistants, intelligent notifications, automation, recommendations, and contextual engagement.",
  "Mobile Apps (High-Impact) - Implementation": "Development and deployment of enterprise mobile applications, mobile engagement platforms, and mobile-first customer experiences.",
  "Mobile Apps (High-Impact) - AI Implementation": "Deployment of AI-driven mobile assistants, predictive experiences, intelligent engagement, and automated workflows.",
  "Mobile Apps (High-Impact) - Managed Service": "Ongoing support, optimisation, monitoring, and operational management of enterprise mobile platforms and services.",

  "Physical Channels (High-Impact) - Assess": "Assessment of physical and digital customer engagement environments to identify transformation and AI enablement opportunities.",
  "Physical Channels (High-Impact) - Design": "Design of integrated physical and digital customer experiences across kiosks, branches, front desks, and connected touchpoints.",
  "Physical Channels (High-Impact) - AI Design": "Design of AI-powered phygital experiences including intelligent kiosks, smart routing, conversational agents, and automation capabilities.",
  "Physical Channels (High-Impact) - Implementation": "Deployment of connected physical and digital engagement platforms, customer interaction systems, and omnichannel touchpoints.",
  "Physical Channels (High-Impact) - AI Implementation": "Deployment of AI-enabled customer engagement automation, intelligent kiosks, AI routing, and smart interaction experiences.",
  "Physical Channels (High-Impact) - Managed Service": "Managed operations and optimisation of integrated physical and digital customer engagement environments.",

  "Experience Solutions (High-Impact) - Assess": "Assessment of content operations, customer journeys, personalization maturity, and digital engagement opportunities.",
  "Experience Solutions (High-Impact) - Design": "Design of digital content ecosystems, personalized customer journeys, publishing workflows, and experience strategies.",
  "Experience Solutions (High-Impact) - AI Design": "Design of AI-powered content operations including intelligent personalization, AI content generation, automation, and recommendations.",
  "Experience Solutions (High-Impact) - Implementation": "Deployment and implementation of content management systems, journey orchestration platforms, and personalization environments.",
  "Experience Solutions (High-Impact) - AI Implementation": "Deployment of AI-powered personalization, content intelligence, automation, and journey optimization capabilities.",
  "Experience Solutions (High-Impact) - Managed Service": "Ongoing support and optimisation of enterprise content operations, digital journeys, and personalization environments.",

  "CRM Solutions (High-Impact) - Assess": "Strategic assessment of customer engagement, relationship management, lead management, and CRM transformation opportunities.",
  "CRM Solutions (High-Impact) - Design": "Design of CRM operating models, customer engagement workflows, sales processes, and relationship management strategies.",
  "CRM Solutions (High-Impact) - AI Design": "Design of AI-enabled CRM capabilities including copilots, lead scoring, automation, customer insights, and intelligent engagement.",
  "CRM Solutions (High-Impact) - Implementation": "Deployment and implementation of CRM platforms, customer engagement systems, and sales workflow environments.",
  "CRM Solutions (High-Impact) - AI Implementation": "Deployment of AI-powered CRM automation, intelligent customer engagement, predictive insights, and AI assistant capabilities.",
  "CRM Solutions (High-Impact) - Managed Service": "Managed operations, support, optimization, reporting, and administration of CRM platforms and customer engagement environments.",

  "Marketing Solutions (High-Impact) - Assess": "Assessment of digital marketing maturity, campaign performance, engagement workflows, and AI-driven marketing opportunities.",
  "Marketing Solutions (High-Impact) - Design": "Design of digital marketing strategies, customer engagement campaigns, automation journeys, and communication workflows.",
  "Marketing Solutions (High-Impact) - AI Design": "Design of AI-driven marketing capabilities including campaign intelligence, audience targeting, automation, and content generation.",
  "Marketing Solutions (High-Impact) - Implementation": "Deployment and implementation of marketing automation, campaign orchestration, and customer engagement platforms.",
  "Marketing Solutions (High-Impact) - AI Implementation": "Deployment of AI-powered marketing automation, predictive targeting, campaign optimization, and intelligent engagement capabilities.",
  "Marketing Solutions (High-Impact) - Managed Service": "Managed operations and optimisation of digital marketing platforms, campaigns, automation workflows, and engagement environments.",

  "Smart Sales & Quotation (High-Impact) - Assess": "Assessment of sales operations, quotation workflows, pricing models, and sales enablement transformation opportunities.",
  "Smart Sales & Quotation (High-Impact) - Design": "Design of CPQ workflows, sales processes, pricing structures, proposal management, and quotation experiences.",
  "Smart Sales & Quotation (High-Impact) - AI Design": "Design of AI-powered sales enablement capabilities including intelligent recommendations, pricing automation, and proposal generation.",
  "Smart Sales & Quotation (High-Impact) - Implementation": "Deployment and implementation of CPQ platforms, pricing engines, quotation systems, and sales enablement workflows.",
  "Smart Sales & Quotation (High-Impact) - AI Implementation": "Deployment of AI-powered pricing intelligence, proposal automation, sales recommendations, and smart quotation capabilities.",
  "Smart Sales & Quotation (High-Impact) - Managed Service": "Managed operations and optimisation of CPQ platforms, sales workflows, pricing systems, and quotation environments.",

  "Customer Support & Success (High-Impact) - Assess": "Assessment of customer support operations, service maturity, aftercare workflows, and customer success opportunities.",
  "Customer Support & Success (High-Impact) - Design": "Design of customer support operating models, service workflows, customer success journeys, and support experiences.",
  "Customer Support & Success (High-Impact) - AI Design": "Design of AI-powered support capabilities including assistants, automation, intelligent routing, and customer engagement workflows.",
  "Customer Support & Success (High-Impact) - Implementation": "Deployment and implementation of customer support platforms, service desk environments, and aftercare systems.",
  "Customer Support & Success (High-Impact) - AI Implementation": "Deployment of AI-powered support automation, conversational assistants, intelligent routing, and service optimization capabilities.",
  "Customer Support & Success (High-Impact) - Managed Service": "Managed operations, optimisation, and continuous support for customer support and customer success environments."
};

const filePath = 'src/data/services.ts';
let content = fs.readFileSync(filePath, 'utf8');

// The file format has objects like:
// "standardName": "Online Web Presence (High-Impact) - Assess",
// "remixName": {},
// "description": "High-Impact advisory for Online Web Presence.",

let replacedCount = 0;

for (const [name, desc] of Object.entries(descriptions)) {
  // Regex to match the block starting with standardName and capturing the description line
  // We use [\s\S]*? to match the lines in between.
  // Note: standardName could have quotes around the key or not, but in TS it's usually quoted.
  
  // We'll replace the description line directly if we find the exact standardName nearby.
  // A safer way: parse line by line and track current standardName.
}

// Line by line parser
const lines = content.split('\n');
let currentStandardName = null;
let updatedLines = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  const standardNameMatch = line.match(/"standardName"\s*:\s*"([^"]+)"/);
  if (standardNameMatch) {
    currentStandardName = standardNameMatch[1];
  }
  
  if (currentStandardName && descriptions[currentStandardName]) {
    const descMatch = line.match(/(\s*"description"\s*:\s*)"([^"]+)"(,)?/);
    if (descMatch) {
      lines[i] = `${descMatch[1]}"${descriptions[currentStandardName]}"${descMatch[3] || ''}`;
      updatedLines++;
      // Once updated, we don't necessarily clear currentStandardName because there's only one description per block
      currentStandardName = null;
    }
  }
}

fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log(`Updated ${updatedLines} descriptions.`);
