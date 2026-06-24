# Specification: Client Project Dashboard — Client User (Stage 03)

---

## Story: The Transparent but Governed Client Experience

As a Client User (e.g., at STC Bank), I want to track my active projects in a centralized dashboard, so that I can maintain high-level visibility into delivery progress, understand project health, track major milestones, and access executive status reports without being overwhelmed by low-level operational details, internal tasks, or complex governance rules.

### The Client Experience Philosophy

To strike the right balance between transparency and avoiding information overload, the platform abstracts away internal complexities while still surfacing the objective truth of project health:

1. **Filtered Visibility**
   - The client only sees engagements and projects belonging to their specific organization.
   - Internal delivery tasks, blockers, and detailed RAID items are hidden.
2. **Abstracted Delivery Health**
   - The objective "Seven Keys" governance model drives the data, but internal terminology and rules engines (e.g., "Active Triggers", "Failed Rules") are concealed.
   - Instead, the client sees a clean "Delivery Health Overview" with high-level trajectory charts and simplified status reasoning.

3. **High-Level Milestone Tracking**
   - The schedule is communicated through high-level delivery milestones rather than deep deliverable and ticket-level mapping.

---

## Purpose (Why):

TMaaS requires a dedicated client-facing delivery interface to:

- **Build Trust through Transparency**: Give clients continuous, objective visibility into how their projects are progressing.
- **Reduce Reporting Overhead**: Move away from ad-hoc email updates to a self-serve portal where clients can check timelines and health instantly.
- **Maintain Internal Safety**: Prevent clients from panicking over minor internal delivery blockers or detailed risk mitigation activities that DQ is handling.
- **Centralize Documentation**: Provide a single source of truth for formal executive status reports and summaries.

---

## Offering (What):

The Client Project Dashboard feature provides:

- A **listings screen** ("Active Projects" / "Orders") showing the client's requested projects and their overall health.
- A **restricted project details workspace** featuring a persistent header showing Start Date and Forecasted Completion Date.
- A **simplified tabbed workspace** containing only three tabs:
  1. **Overview** (Delivery Health Overview)
  2. **Milestones** (High-level Schedule)
  3. **Status Reports** (Executive reporting repository)

---

## 1. Active Projects Listing Screen

The entry point for the client to view their portfolio of active services and projects.

### 1.1 Page Header

- Title: **Active Projects** (or **Orders**)
- Subtitle: "Track and manage your requested services and delivery progress."

### 1.2 Filters & Search

- **Search**: Searches across project name or reference ID.
- **Status Filter**: All Statuses / Requested / Awaiting Payment / In Delivery / Awaiting Client Input / Delivered / Closed.
- **Clear Filters**: Resets all filters to default.

### 1.3 Projects Cards

Instead of a dense table, projects are presented in digestible cards showing:

- **Project Name & Reference ID**
- **Assigned DQ Lead**
- **Blocked Items Indicator**: (Only if items are flagged for client visibility)
- **Overall Health**: Visual indicator (Green/Amber/Red) with the status label (e.g., "On Track", "At Risk").
- **Current Status Phase**: (e.g., "In Delivery").

---

## 2. Project Details Header

Every project detail page includes a persistent, context-retaining header tailored for the client.

### 2.1 Header Components

- Client organisation logo or avatar.
- Project name
- Organisation name
- Status chip: Active / Paused / Closed / Cancelled

### Summary Tags

- **Start Date**
- **Forecasted End Date**
  _(Note: Internal aggregated RAG status chips or deep technical metrics are hidden from this header)._

---

## 3. Tab Structure (Client Workspace)

The client workspace is intentionally restricted to three tabs.

### 3.1 Overview (Delivery Health Overview)

A simplified version of the internal Seven Keys tab. It provides objective health analysis while hiding the internal rule engine.

#### A. Delivery Health Summary Grid

Displays the core health indicators with:

- Current RAG state
- Trend direction
- Time in current state
- Last status transition timestamp.

#### B. Contextual Overlay (Client View)

When a client clicks an indicator for details, they see a tailored overlay:

- **Status Details**: A client-friendly presentation of the current status reasoning (hiding all internal Governance Evidence, Failed Rules, and Active Triggers).
- **Trend & Recovery Analysis**: An interactive, full-width timeline chart displaying the historical RAG health trajectory (hiding the internal "Trajectory Profile" textual warnings).

---

### 3.2 Milestones

A high-level operational schedule and delivery progress tracker.

#### Milestone Table

- **Milestone Name**
- **Delivery Progress**: A single percentage progress bar aggregating the completion of underlying deliverables (the underlying deliverables themselves are hidden).
- **Timeline**:
  - Start Date
  - Forecast Date

---

### 3.3 Status Reports

A repository for formal, executive-level documentation.

#### Report List

- **Report Title**: (e.g., "Weekly Status Report - Week 12", "Monthly Executive Summary").
- **Date Published**
- **Status**: (e.g., Published).
- **Actions**: "View" and "Download" buttons.

---

## 4. Roles & Responsibilities

### Client User / Client Admin

- Logs in to view portfolio health.
- Self-serves milestone timelines and downloads weekly status reports.
- Cannot manually edit milestones, change project health, or view underlying execution tasks.

### Delivery Lead (DQ)

- Continues to manage the project via the Stage 03 internal views.
- Their internal updates to milestones and governance indicators automatically reflect in the client's simplified views.
- Uploads/Publishes the weekly status reports to the repository.

---

## 5. Expected Outcomes

- **Reduced Communication Friction**: Clients no longer need to constantly ask for progress updates or schedule checks.
- **Controlled Transparency**: DQ maintains an objective, data-driven relationship with the client while protecting the delivery team's internal operational workspaces.
- **Unified Experience**: The client portal feels like a natural, premium extension of the TMaaS offering, driving client engagement and trust.
