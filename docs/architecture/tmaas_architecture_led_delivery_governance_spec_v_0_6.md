# Specification: Project Delivery (Engagements) — DQ Delivery Lead (Stage 03)

---

## Story: The Optimised Delivery Governance Model

As a Delivery Lead (DQ), I want to manage project engagements through an objective, architecture-led governance model, so that I can eliminate ambiguity around successful delivery, automatically calculate delivery health, link operational milestones to strategic outcomes, maintain actionable visibility of blockers and escalations, and continuously track the governance trajectory of a project over time.

### The Governance Backbone (Three-Layer Architecture)

To move away from static, subjective project states (Active / Paused / Completed), the platform models a formal relationship between three distinct layers:

1. **Project Vision & KRIs (Executive Governance Layer)**
   - Defines the internal project vision and measurable **Key Result Indicators (KRIs)** that serve as objective evidence of value realization.
   - KRIs define what "successful delivery" means (e.g., _“A deployment is only considered successful if all department users actively utilize the platform within 90 days post go-live”_).
   - This layer removes all ambiguity around "successful delivery" and executive reporting.

2. **Milestones & Deliverables (Operational Governance Layer)**
   - Outlines the milestones and deliverables that represent operational progress.
   - **Milestone-to-Outcome Linkage**: Every milestone must directly map back to at least one strategic outcome/KRI.
   - **Deliverable nesting**: Every deliverable resides under an explicit milestone, showing exactly how daily progress maps to executive goals.

3. **Tasks (Execution Layer)**
   - The execution tasks themselves are managed in external project management tools, but their metadata is formally modeled within the platform for complete governance traceability.
   - For every Deliverable, the platform tracks:
     - The list of associated tasks
     - Relevant task status
     - Percentage progress
     - Owners
     - Deep-links to each task in the external execution tool.
   - This mapping provides end-to-end traceability from a developer's ticket up to the executive project vision.

---

## Purpose (Why):

TMaaS project delivery requires a shift from passive tracking to proactive, objective governance:

- **Objective Health Logic**: Eliminate "watermelon projects" (green on the outside, red on the inside) by basing status on hard criteria rather than subjective self-reporting.
- **Automated Status Calculation**: Dynamically compute status from underlying operational and contractual facts.
- **Governance Traceability**: Establish a clear thread from individual tasks to deliverables, deliverables to milestones, and milestones to business outcomes.
- **Actionable Escalation Visibility**: Give stakeholders immediate, front-and-center visibility into why a project is off-track, what is blocked, and what actions are planned to resolve it.
- **Governance Trend Visibility**: Continuously track whether project health is improving, stable, or deteriorating over time.

---

## Offering (What):

The Project Delivery feature provides:

- A **listings screen** showing all active engagements with computed health indicators.
- A **project details workspace** featuring a persistent header showing the automated RAG status across 7 key indicators.
- A dedicated **Seven Keys Governance Workspace** exposing governance evidence, trend intelligence, and recovery tracking.
- A **tabbed workspace** structured to reflect the optimized delivery hierarchy:
  1. **Overview**
  2. **Seven Keys**
  3. **Delivery**
  4. **RAID**
  5. **Stakeholders**
  6. **Commercials**
  7. **Team**

---

## 1. Engagements Listing Screen

The starting point for portfolio governance. Displays all project engagements with automated health visibility.

### 1.1 Page Header

- Title: **Delivery**
- Subtitle: "Manage portfolio delivery and governance"
- **Refresh** button: Always visible
- **Add Project** button: Opens the Add Project modal

### 1.2 Metrics Cards

A dashboard summary showing delivery distribution:

- **Total**: Total count of all engagements.
- **(Green)**: Count of healthy engagements.
- **(Amber)**: Count of engagements with warning indicators.
- **(Red)**: Count of engagements with active blockers or overdue milestones.
- **Completed**: Closed engagements.

### 1.3 Filters & Search

- **Search**: Searches across project name, organization, and contact.
- **Health Status**: All / Green / Amber / Red.
- **Category**: Service category dropdown.
- **Sort**: Newest First / Oldest First / Health (Red first).
- **Date Range**: Start Date + End Date.
- **Export**: Exports the listing with health and KRI metrics.
- **Clear Filters**: Resets all filters to default.

### 1.4 Projects Table

- **Project Name**: Click to navigate to details.
- **Organisation**: Client organization name.
- **Overall Health**: Aggregated RAG status based on the 7 indicators.
- **Blocked Items**: Count of currently blocked tasks/RAID items.
- **Lead**: Assigned delivery lead (assigned/unassigned indicator).
- **Actions**: Assign Lead, Delete.

---

## 2. Engagement Header & Automated Project Status

Every project detail page includes a persistent, context-retaining header.

### 2.1 Header Components

- Client organisation logo or avatar.
- Project name
- Organisation name
- Chip: Service Type (Design / Deploy / Design & Deploy).
- Status chip: Active / Paused / Closed / Cancelled

Summary Tags (editable)

- Start date
- Forecasted end date
- Project Status: Displays Aggregated RAG status showing an average status of the 7 indicators.
- Clicking the status badge opens the dedicated **Seven Keys** tab.
- Assigned Delivery Lead

---

### Governance Principle — Objective Delivery Governance

Project health cannot be manually overridden.

All governance indicators derive from objective operational and contractual facts, including:

- milestone dates
- deliverable completion state
- task metadata
- RAID status
- stakeholder engagement records
- contractual states
- KRI realization evidence.

The platform acts as a governance calculation engine rather than a manual reporting tool.

---

## 2.2 Seven Keys Governance Architecture

The Seven Keys represent the primary project health governance layer of the platform.

Each indicator functions as:

- a calculated governance signal
- an operational escalation mechanism
- a historical trend monitor
- and an evidence-based delivery assessment.

Each Seven Key includes:

- Current RAG state
- Contributing governance criteria
- Historical trend
- Time spent in current state
- Linked mitigation and recovery actions.

---

## 2.3 Seven Keys Trend Intelligence

The platform continuously tracks governance history for all indicators.

For every indicator, the platform maintains:

- Historical RAG snapshots
- State transition history
- Trend trajectory
- Governance recovery patterns.

Trend states include:

- Improving
- Stable
- Deteriorating.

Examples:

- “Amber for 18 days”
- “Recovered from Red to Amber”
- “Three consecutive deteriorations detected”.

This trend intelligence provides proactive governance visibility rather than static reporting.

---

## 2.4 Automated Project Status (The 7 Key Indicators)

Status is never set manually. The platform calculates each indicator using objective criteria:

| Indicator                     | Metric / Logic                                                                                                                 | Calculated RAG State                                                                                                                                                                                                                                                                                                                     |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **a. Progress vs Schedule**   | Based on milestone and deliverable timelines. Includes trend analysis on overdue trajectory and delivery recovery patterns.    | **Green**: 0 overdue milestones or deliverables.<br>**Amber**: Overdue deliverables, but no overdue milestones.<br>**Red**: One or more milestones are overdue past their set due dates.                                                                                                                                                 |
| **b. Scope Confirmed**        | Checks if all scope is defined and stable. Includes governance evidence linked to contract changes and undefined deliverables. | **Green**: All deliverables defined, and 0 deliverables associated with a Contract Change that is in a 'New', 'In Negotiation', or 'In Specification' status.<br>**Amber**: Active contract changes exist but are in advanced review.<br>**Red**: Key deliverables are missing definition OR contract changes are pending specification. |
| **c. Plan Confirmed**         | Checks complete planning readiness. Includes governance validation across milestones, owners, and execution readiness.         | **Green**: All milestones have due dates set AND every deliverable and task has a designated owner.<br>**Amber**: Milestone due dates set, but some deliverables/tasks lack assigned owners.<br>**Red**: Milestones exist without set due dates.                                                                                         |
| **d. Dependencies Met**       | Identifies blocking issues. Includes dependency aging and escalation tracking.                                                 | **Green**: 0 blocked tasks AND all dependency (RAID) items are closed.<br>**Amber**: No tasks blocked, but open dependencies exist (not yet overdue).<br>**Red**: At least one task is blocked OR a dependency RAID item is past its due date.                                                                                           |
| **e. Contractual Status**     | Validates milestone formalization and commercial governance maturity.                                                          | **Green**: All milestones have their contractual status marked as "In Place".<br>**Amber**: Milestones are in "Pending" or "In Negotiation" status.<br>**Red**: No milestones are defined OR one or more milestones are marked as "Not Started".                                                                                         |
| **f. Stakeholders Committed** | Measures stakeholder engagement consistency and governance participation. Includes stakeholder activity trends.                | **Green**: Stakeholder catalogue updated within the last 7 days AND all priority stakeholders are marked as actively engaged.<br>**Amber**: Priority stakeholders engaged, but catalogue has not been updated in >7 days.<br>**Red**: Priority stakeholders are marked as unengaged or resistant.                                        |
| **g. Business Benefits**      | Evaluates post-go-live outcome realization and KRI performance trajectory.                                                     | **Green**: Project KPIs and KRIs are defined and progressing/realizing value as expected.<br>**Amber**: KRIs defined but currently showing values below the target threshold.<br>**Red**: KRIs are not yet defined OR have failed to hit target thresholds post go-live.                                                                 |

---

## 3. Tab Structure (Engagement Workspace)

---

### Updated Tab Structure

1. **Overview** (Operational control center)
2. **Seven Keys** (Dedicated governance health workspace)
3. **Delivery** (Project Vision, KRIs, Milestones contributing to KRIs, Deliverables mapped to Milestones, Tasks mapped to Deliverables)
4. **RAID** (Risks, Issues, Dependencies, Assumptions)
5. **Commercials** (Contract Status, Payment Milestones & Changes, Commercial Documents)
6. **Messages** (Inbox)
7. **Team** (Delivery team)
8. **Stakeholders** (Stakeholders)

---

### 3.1 Overview (Operational Control Center)

A high-density dashboard that answers operational questions immediately.

#### Metric Cards:

- **Milestones In Progress**
- **Deliverables In Progress**
- **Open RAID Items**
- **Items Requiring Attention**

---

#### Payment Milestones Table:

- **Milestone Name**
- **Completion %**
- **Status**
- **Contracted Date**

---

#### High Impact RAID Items:

- High Severity RAID items
- Blocked dependencies
- Escalated delivery concerns

---

#### This Week’s Items:

- Current week delivery activities
- Upcoming deliverables
- Active milestone activities

---

### 3.2 Seven Keys

Dedicated tab focused on objective project health analysis.

The Seven Keys workspace serves as the authoritative governance layer for the engagement.

#### A. Seven Keys Summary Grid

Displays all Seven Keys indicators with:

- Current RAG state
- Trend direction
- Time in current state
- Last status transition timestamp.

#### B. Governance Evidence Breakdown

For every indicator, the platform exposes:

- Contributing governance rules
- Triggers
- Impacted milestones and deliverables (where applicable)
- Related RAID items (where applicable)
- Related KRIs (where applicable)
- Linked stakeholder or contractual dependencies (where applicable).

#### C. Trend & Recovery Analysis

Displays:

- Historical RAGhealth timeline

---

### 3.3 Delivery

This tab manages the core execution and maps it directly to strategic goals.

#### A. Project Vision & KRIs

- **Vision Statement**: DQ's internal strategic vision for the engagement.
- **Measurable KRIs**:
  - List of Key Result Indicators.
  - **Status**: Visual indicator showing if the KRI is on track (based on status of linked Milestones).

#### B. Milestones

- List of milestones representing the operational schedule.
- **Linked KRIs**: Every milestone displays a list of the specific KRIs/outcomes it directly supports.
- **Contractual Status**: Not Started / Pending / In Negotiation / In Delivery / Delivered / Accepted / Invoiced / Partially Paid / Paid.
- **Delivery Progress**: Based on linked deliverable progress
- **Timeline**: Start date, contracted due date, and forecasted date or actual completion date.

#### C. Deliverables & Tasks

- Lists all deliverables nested under their respective milestone.
- **Deliverable details**: Description, owner, progress, status.
- **Execution Task Board (The Task Modeling Layer)**:
  - Formally models external tasks for each deliverable:
    - **Task Name**
    - **Status** (New / In Progress / Blocked / Done)
    - **% Progress**
    - **Owner**
    - **External Link**: Deep-link to the task in Planner.

---

### 3.4 RAID

#### RAID Items

Tracks Risks, Issues, Dependencies, and Assumptions (RAID).

- **Sub-tabs**: Risks, Issues, Dependencies, Assumptions (each with a count badge).
- **Properties**: Title, description, severity, status, owner, due date, mitigation notes.

### 3.5 Stakeholders

#### Stakeholder Catalogue

- Registry of key client stakeholders.
- **Role/Influence**: Map stakeholder influence (High/Medium/Low) and commitment level.
- **Engagement History**: Track contact logs and regular touchpoints.
- **Catalogue Activity Log**: Shows the timestamp of the last catalogue update (used to drive the "Stakeholders Committed" green health rule).

---

### 3.6 Commercials

Manages the commercial, contractual, and financial tracking of the project.

---

#### Contract Status Card:

Editable commercial summary values for the project contract.

- **Contract Currency**
- **Total Contract Value**
- **Contract Signed Date**
- **No. of Contract Changes**
- **Invoiced Amount**
- **Received Amount**

---

#### Payment Milestones:

Tracks payment-linked project milestones and their commercial status.

Users can add and edit payment milestones.

For each payment milestone:

- **Status**
- **Milestone Value**
- **Paid Amount**
- **Outstanding Amount**
- **Contracted Date**

---

#### Contract Changes:

Tracks commercial and scope-related contract changes raised during project execution.

Users can add contract changes.

For each contract change:

- **Subject**
- **Description**
- **Status**

  - New
  - In Negotiation
  - In Specification
  - Agreed
  - Signed

- **Milestones Affected**

  - Selectable from the project payment milestones

- **Requested By**

  - DQ
  - Client

- **Relevant Attachments**

  - Links

---

#### Commercial Documents:

Repository for project commercial and contractual documents.

Users can add commercial documents.

For each document:

- **Title**
- **Description**
- **Link**
- **Document Type**

  - Contract
  - Contract Change
  - Invoice
  - Other

---

### 3.7 Team

- Roster of delivery professionals assigned to the engagement (e.g., Delivery Lead, Business Analyst, Architect), managing assignment fields to drive the "Plan Confirmed" metric.
- A team member can be assigned as the owner of a Deliverable or Task or RAID item.

---

## 4. Roles & Responsibilities

### Delivery Lead (DQ)

- Owns the updates of the Stakeholder Catalogue, RAID details, and Milestone-to-Outcome mapping.
- Oversees the mapping of external tasks to deliverables.
- Reviews automated status calculations to coordinate recovery plans.
- Drives sessions, mitigates dependencies, and registers contract changes.
- Reviews Seven Keys trend deterioration and recovery trajectories.
- Coordinates governance recovery actions for non-green indicators.

---

## 5. Navigation & UX Principles

- **Outcome-Driven UI**: Visual indicators clearly show the link from execution tasks through deliverables and milestones to KRIs.
- **Calculated RAG Prompts**: Tooltips and visual cues explain exactly which objective governance criteria triggered the status.
- **Governance Explainability**: Every Seven Key exposes the operational evidence contributing to the current health state.
- **Trend Visibility**: Governance indicators must always display directional movement and historical trajectory.
- **Focused Home**: Overview dashboard defaults to the weekly governance view to keep weekly check-ins highly efficient.
- **Persistent Header**: Always visible status ensures governance context is never lost.
- **Consistent Governance Navigation**: Governance-related tabs and workspaces must follow a unified interaction and layout structure across the platform.

---

## 6. Out of Scope

- Direct execution of tasks (task boards are read-only reflections of external tools).
- Automatic billing or invoice generation (commercials track status but do not process payments).
- Automated resource allocation scheduling.

---

## 7. Expected Outcomes

- **Total Transparency**: Rayyan and executive leadership can instantly see why any project is red, amber, or green.
- **No Watermelon Projects**: Objective health logic surfaces hidden delivery risks before they cause delay.
- **Value Linkage**: Ensures delivery teams focus on achieving KRIs and outcomes rather than just checking off checklist milestones.
- **Actionable Governance**: Weekly meetings are focused entirely on high-impact items and blockers, reducing meeting overhead.
- **Governance Trend Visibility**: Delivery leadership can identify deteriorating governance patterns before project failure occurs.
- **Evidence-Based Delivery Health**: Every governance status is traceable back to measurable operational evidence.
