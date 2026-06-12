const fs = require('fs');

const descriptions = {
  "Enterprise Data Platform (High-Impact) - Assess": "Assessment of enterprise data maturity, governance capabilities, operational data quality, platform readiness, and data transformation opportunities.",
  "Enterprise Data Platform (High-Impact) - Design": "Design of enterprise data architectures, governance frameworks, data pipelines, operational data models, and scalable data platform strategies.",
  "Enterprise Data Platform (High-Impact) - AI Design": "Design of AI-ready data capabilities including intelligent pipelines, automated governance, metadata intelligence, vector architectures, and operational data automation.",
  "Enterprise Data Platform (High-Impact) - Implementation": "Deployment and implementation of enterprise data platforms, data pipelines, governance environments, operational data ecosystems, and scalable analytics foundations.",
  "Enterprise Data Platform (High-Impact) - AI Implementation": "Deployment of AI-powered data automation, intelligent governance, metadata intelligence, operational data orchestration, and AI-ready platform capabilities.",
  "Enterprise Data Platform (High-Impact) - Managed Service": "Managed data platform operations, governance monitoring, optimisation, support, reporting, and continuous enterprise data improvement services.",

  "Business Intelligence & Analytics (High-Impact) - Assess": "Assessment of reporting maturity, decision intelligence capabilities, analytics readiness, operational visibility, and enterprise intelligence opportunities.",
  "Business Intelligence & Analytics (High-Impact) - Design": "Design of business intelligence frameworks, KPI models, analytics workflows, forecasting environments, executive reporting structures, and operational intelligence strategies.",
  "Business Intelligence & Analytics (High-Impact) - AI Design": "Design of AI-powered analytics capabilities including predictive intelligence, intelligent forecasting, process intelligence, anomaly detection, and operational analytics automation.",
  "Business Intelligence & Analytics (High-Impact) - Implementation": "Deployment and implementation of analytics platforms, reporting systems, executive dashboards, operational intelligence environments, and enterprise analytics capabilities.",
  "Business Intelligence & Analytics (High-Impact) - AI Implementation": "Deployment of AI-powered analytics automation, predictive intelligence, forecasting environments, anomaly detection, and intelligent reporting capabilities.",
  "Business Intelligence & Analytics (High-Impact) - Managed Service": "Managed analytics operations, dashboard optimisation, reporting support, monitoring, operational intelligence management, and continuous analytics improvement services.",

  "Enterprise AI & Automation (High-Impact) - Assess": "Strategic assessment of AI readiness, automation opportunities, operational intelligence maturity, and enterprise AI transformation potential.",
  "Enterprise AI & Automation (High-Impact) - Design": "Design of enterprise AI operating models, intelligent automation architectures, AI assistants, agents, copilots, and cognitive operational workflows.",
  "Enterprise AI & Automation (High-Impact) - AI Design": "Design of advanced AI ecosystems including agents, copilots, PromptOps, ModelOps, knowledge architectures, automation frameworks, and intelligent orchestration environments.",
  "Enterprise AI & Automation (High-Impact) - Implementation": "Deployment and implementation of enterprise AI platforms, intelligent assistants, operational automation environments, and AI-driven business capabilities.",
  "Enterprise AI & Automation (High-Impact) - AI Implementation": "Deployment of advanced AI agents, intelligent copilots, cognitive automation frameworks, AI orchestration environments, and enterprise operational intelligence capabilities.",
  "Enterprise AI & Automation (High-Impact) - Managed Service": "Managed AI operations, monitoring, optimization, governance, model lifecycle management, operational intelligence support, and continuous AI improvement services.",

  "Technology Governance (High-Impact) - Assess": "Assessment of technology governance maturity, architecture controls, standards compliance, operational assurance, and enterprise governance opportunities.",
  "Technology Governance (High-Impact) - Design": "Design of governance frameworks, architecture standards, operational controls, compliance structures, assurance environments, and enterprise governance strategies.",
  "Technology Governance (High-Impact) - AI Design": "Design of AI-powered governance capabilities including intelligent compliance monitoring, policy automation, operational assurance analytics, and governance intelligence.",
  "Technology Governance (High-Impact) - Implementation": "Deployment and implementation of governance platforms, architecture control environments, standards management systems, compliance capabilities, and assurance frameworks.",
  "Technology Governance (High-Impact) - AI Implementation": "Deployment of AI-powered governance automation, intelligent compliance monitoring, operational assurance analytics, predictive governance, and standards intelligence capabilities.",
  "Technology Governance (High-Impact) - Managed Service": "Managed governance operations, compliance monitoring, standards optimisation, operational assurance support, and continuous governance improvement services.",

  "DevSecOps Automation (High-Impact) - Assess": "Assessment of DevSecOps maturity, automation readiness, security operations, release management capabilities, and enterprise delivery optimization opportunities.",
  "DevSecOps Automation (High-Impact) - Design": "Design of DevSecOps architectures, automation pipelines, infrastructure-as-code frameworks, secure delivery operating models, and release orchestration environments.",
  "DevSecOps Automation (High-Impact) - AI Design": "Design of AI-powered DevSecOps capabilities including intelligent pipelines, AI-assisted testing, automation orchestration, operational intelligence, and predictive delivery optimization.",
  "DevSecOps Automation (High-Impact) - Implementation": "Deployment and implementation of DevSecOps pipelines, automation frameworks, infrastructure delivery environments, secure operational workflows, and release orchestration platforms.",
  "DevSecOps Automation (High-Impact) - AI Implementation": "Deployment of AI-powered DevSecOps automation, intelligent testing, predictive delivery optimization, operational orchestration, and secure automation capabilities.",
  "DevSecOps Automation (High-Impact) - Managed Service": "Managed DevSecOps operations, pipeline monitoring, automation support, release optimisation, security operations support, and continuous delivery improvement services.",

  "IT Operations & Support (High-Impact) - Assess": "Assessment of IT operational maturity, support workflows, service management capabilities, operational resilience, and enterprise support optimization opportunities.",
  "IT Operations & Support (High-Impact) - Design": "Design of IT operations models, service management workflows, operational monitoring environments, support structures, and enterprise operational governance strategies.",
  "IT Operations & Support (High-Impact) - AI Design": "Design of AI-powered IT operations capabilities including intelligent monitoring, automated support, AI service desks, predictive operations, and operational intelligence workflows.",
  "IT Operations & Support (High-Impact) - Implementation": "Deployment and implementation of IT operations platforms, service desk environments, monitoring systems, operational support workflows, and enterprise support capabilities.",
  "IT Operations & Support (High-Impact) - AI Implementation": "Deployment of AI-powered operational automation, intelligent monitoring, predictive support, AI service assistants, and enterprise operational intelligence capabilities.",
  "IT Operations & Support (High-Impact) - Managed Service": "Managed IT operations, monitoring, incident management, support optimisation, operational reporting, and continuous enterprise support improvement services."
};

const filePath = 'src/data/services.ts';
let content = fs.readFileSync(filePath, 'utf8');

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
      currentStandardName = null;
    }
  }
}

fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log(`Updated ${updatedLines} descriptions.`);
