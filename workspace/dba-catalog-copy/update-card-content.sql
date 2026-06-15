-- Idempotent card-content update for an already-seeded catalog.
-- Do NOT use seed-data.sql on a populated database (that file is INSERT-only).
-- Regenerate: npm run db:card-content:sql
BEGIN;

DELETE FROM product_features WHERE variant_id IN (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237);
DELETE FROM product_tags WHERE variant_id IN (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237);
DELETE FROM product_timeline_milestones WHERE variant_id IN (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237);

-- Online Web Presence (High-Impact) - Assess (variant 1)
UPDATE product_variants SET positioning = 'Evidence-led audit of your web estate: gaps scored, priorities set, roadmap ready.' WHERE id = 1;
UPDATE product_content SET description = 'Get a clear picture of where your website is losing visitors, missing conversions, and underperforming on search, then walk away with a prioritised action list your marketing and IT teams can execute.', positioning = 'Evidence-led audit of your web estate: gaps scored, priorities set, roadmap ready.' WHERE variant_id = 1;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (1, 'Page-by-page performance audit covering speed, accessibility, and conversion friction', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (1, 'SEO health check with keyword coverage gaps and crawlability findings', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (1, 'Competitor benchmark showing where your site falls behind on key visitor journeys', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (1, 'Prioritised recommendation list scored by effort and expected traffic or conversion uplift', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (1, 'web-performance');
INSERT INTO product_tags (variant_id, tag_name) VALUES (1, 'seo');
INSERT INTO product_tags (variant_id, tag_name) VALUES (1, 'conversion-optimisation');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (1, 'Days 1-2: Stakeholder interviews, analytics access, and scope confirmation', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (1, 'Days 3-4: Site audit, crawl analysis, and competitor benchmarking', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (1, 'Day 5: Findings presentation, prioritised roadmap, and next-step recommendations', 2);
UPDATE products SET short_description = 'Get a clear picture of where your website is losing visitors, missing conversions, and underperforming on search, then walk away with a prioritised action list your marketing and IT teams can execute.', audience = 'Marketing Directors, Digital Leads, and Head of CX or IT', industry_relevance = 'B2B and B2C organisations with customer-facing websites, e-commerce platforms, or self-service portals', business_impact = 'Identifies the specific friction points and search gaps costing you visitors and conversions, giving your team a clear, prioritised starting point for web investment.' WHERE id = (SELECT product_id FROM product_variants WHERE id = 1);

-- Online Web Presence (High-Impact) - Design (variant 2)
UPDATE product_variants SET positioning = 'From brief to blueprint: user-centred web design with every decision documented for build.' WHERE id = 2;
UPDATE product_content SET description = 'Transform your web presence goals into a complete, build-ready blueprint: user journeys mapped, information architecture defined, and technical specifications your development team can code against.', positioning = 'From brief to blueprint: user-centred web design with every decision documented for build.' WHERE variant_id = 2;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (2, 'User journey mapping across your key visitor types and conversion goals', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (2, 'Information architecture and navigation design validated with your target audience', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (2, 'Component-level wireframes and interaction specifications ready for development', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (2, 'CMS and integration requirements documented to prevent rework during build', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (2, 'ux-design');
INSERT INTO product_tags (variant_id, tag_name) VALUES (2, 'information-architecture');
INSERT INTO product_tags (variant_id, tag_name) VALUES (2, 'web-strategy');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (2, 'Week 1: Discovery, user research synthesis, and journey mapping', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (2, 'Weeks 2-3: Information architecture, wireframing, and design iteration', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (2, 'Week 4: Specification finalisation, stakeholder sign-off, and build handover', 2);

-- Online Web Presence (High-Impact) - AI Design (variant 3)
UPDATE product_variants SET positioning = 'AI use cases for your web presence validated before build investment, with guardrails built in.' WHERE id = 3;
UPDATE product_content SET description = 'Identify which AI capabilities will genuinely improve your website''s visitor experience, validate the use cases with real data, and receive deployment-ready specifications before a single line of build code is written.', positioning = 'AI use cases for your web presence validated before build investment, with guardrails built in.' WHERE variant_id = 3;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (3, 'AI opportunity mapping across personalisation, search, chat, and content generation for web', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (3, 'Use-case prioritisation based on data readiness, visitor impact, and implementation complexity', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (3, 'Responsible AI workflow design covering bias checks, fallback logic, and content moderation', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (3, 'Deployment specification with model requirements, data pipelines, and integration contracts', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (3, 'ai-design');
INSERT INTO product_tags (variant_id, tag_name) VALUES (3, 'web-personalisation');
INSERT INTO product_tags (variant_id, tag_name) VALUES (3, 'responsible-ai');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (3, 'Week 1: AI opportunity discovery and data landscape review', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (3, 'Week 2: Use-case validation, feasibility scoring, and risk assessment', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (3, 'Weeks 3-4: Responsible workflow design, guardrail specification, and documentation', 2);

-- Online Web Presence (High-Impact) - Deploy (variant 4)
UPDATE product_variants SET positioning = 'Managed web delivery: configured, tested, and launched with a documented handover to your team.' WHERE id = 4;
UPDATE product_content SET description = 'Bring your website designs to life with a phased build, integration, and launch programme that keeps quality and go-live dates on track, and hands over a fully documented site to your operations team.', positioning = 'Managed web delivery: configured, tested, and launched with a documented handover to your team.' WHERE variant_id = 4;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (4, 'CMS configuration and content migration executed against the agreed specification', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (4, 'Third-party integration setup including analytics, CRM, and marketing tools', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (4, 'Cross-browser and accessibility testing before launch, with a tracked defect log', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (4, 'Staged rollout with performance monitoring and rollback procedure ready at go-live', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (4, 'web-delivery');
INSERT INTO product_tags (variant_id, tag_name) VALUES (4, 'cms-implementation');
INSERT INTO product_tags (variant_id, tag_name) VALUES (4, 'launch-management');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (4, 'Weeks 1-3: Environment setup, CMS configuration, and content migration', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (4, 'Weeks 4-8: Integration build, feature development, and internal QA', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (4, 'Weeks 9-10: User acceptance testing and defect resolution', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (4, 'Weeks 11-12: Staged launch, performance validation, and operations handover', 3);

-- Online Web Presence (High-Impact) - AI Deploy (variant 5)
UPDATE product_variants SET positioning = 'Governed AI for your website: in production, monitored, and handed over with safety controls intact.' WHERE id = 5;
UPDATE product_content SET description = 'Put your validated AI web features into production with monitoring, safety controls, and a clear operational handover, so personalisation and automation deliver measurable results from launch day.', positioning = 'Governed AI for your website: in production, monitored, and handed over with safety controls intact.' WHERE variant_id = 5;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (5, 'AI model deployment with production-grade monitoring covering accuracy, latency, and drift', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (5, 'Content moderation and output safety controls configured before public exposure', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (5, 'A/B testing framework set up to measure AI feature impact on visitor behaviour', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (5, 'Operational runbook and team training so your staff can manage AI tools post-launch', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (5, 'ai-deployment');
INSERT INTO product_tags (variant_id, tag_name) VALUES (5, 'model-monitoring');
INSERT INTO product_tags (variant_id, tag_name) VALUES (5, 'web-personalisation');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (5, 'Weeks 1-3: Infrastructure provisioning, model deployment, and integration to web platform', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (5, 'Weeks 4-7: Safety control configuration, moderation rules, and monitoring dashboard setup', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (5, 'Weeks 8-10: Controlled rollout, A/B test configuration, and performance validation', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (5, 'Weeks 11-12: Full release, operational handover, and team enablement', 3);

-- Online Web Presence (High-Impact) - Managed (variant 6)
UPDATE product_variants SET positioning = 'Your website, running and improving every month: SLA-backed operations with no surprises.' WHERE id = 6;
UPDATE product_content SET description = 'Keep your website performing at its best with ongoing monitoring, optimisation, and content governance managed by the DigitalQatalyst team under a clear SLA, so your team stays focused on business priorities.', positioning = 'Your website, running and improving every month: SLA-backed operations with no surprises.' WHERE variant_id = 6;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (6, 'Monthly performance reporting across speed, SEO rankings, and conversion metrics with trends', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (6, 'Proactive issue detection and resolution before problems affect visitors or search rankings', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (6, 'Ongoing content governance including updates, accessibility checks, and CMS user support', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (6, 'Quarterly optimisation sprints targeting the highest-impact improvements identified from data', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (6, 'managed-service');
INSERT INTO product_tags (variant_id, tag_name) VALUES (6, 'web-operations');
INSERT INTO product_tags (variant_id, tag_name) VALUES (6, 'continuous-optimisation');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (6, 'Month 1: Onboarding, baseline measurement, and SLA configuration', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (6, 'Months 2-3: First operational cycle with reporting cadence established', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (6, 'Ongoing: Monthly reporting, quarterly optimisation reviews, and continuous monitoring', 2);

-- Online Social Presence (High-Impact) - Assess (variant 7)
UPDATE product_variants SET positioning = 'A clear audit of your social channels: where audience engagement is lost and how to win it back.' WHERE id = 7;
UPDATE product_content SET description = 'Assess the health of your social media presence across every active channel, identify where engagement is low or brand consistency is missing, and receive a prioritised plan your marketing team can act on immediately.', positioning = 'A clear audit of your social channels: where audience engagement is lost and how to win it back.' WHERE variant_id = 7;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (7, 'Channel-by-channel audit of content quality, posting consistency, and audience engagement rates', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (7, 'Brand voice and visual consistency review across all active social platforms', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (7, 'Competitor social benchmarking on follower growth, reach, and content formats', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (7, 'Prioritised action plan ranked by potential engagement uplift and effort required', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (7, 'social-media');
INSERT INTO product_tags (variant_id, tag_name) VALUES (7, 'brand-consistency');
INSERT INTO product_tags (variant_id, tag_name) VALUES (7, 'audience-engagement');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (7, 'Days 1-2: Channel access, analytics review, and stakeholder interviews', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (7, 'Days 3-4: Content audit, competitor analysis, and brand consistency assessment', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (7, 'Day 5: Findings presentation with prioritised social strategy recommendations', 2);
UPDATE products SET short_description = 'Assess the health of your social media presence across every active channel, identify where engagement is low or brand consistency is missing, and receive a prioritised plan your marketing team can act on immediately.', audience = 'Marketing Directors, Social Media Managers, and Communications Leaders', industry_relevance = 'Organisations using social channels for brand awareness, customer engagement, or community building', business_impact = 'Surfaces the specific content and channel gaps reducing your social reach and engagement, so your team knows exactly where to focus effort for the fastest improvement.' WHERE id = (SELECT product_id FROM product_variants WHERE id = 7);

-- Online Social Presence (High-Impact) - Design (variant 8)
UPDATE product_variants SET positioning = 'A social strategy designed for your audience, your channels, and your team''s capacity.' WHERE id = 8;
UPDATE product_content SET description = 'Build a social media presence your audience will actually engage with: content frameworks designed for each platform, channel-specific workflows, and a publication system your team can run without agency dependency.', positioning = 'A social strategy designed for your audience, your channels, and your team''s capacity.' WHERE variant_id = 8;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (8, 'Platform-specific content strategy for each channel, matched to your audience behaviour data', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (8, 'Content pillar framework with topic clusters, formats, and publishing cadence by channel', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (8, 'Editorial workflow design covering creation, approval, scheduling, and performance review', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (8, 'Community management playbook with response frameworks for comments, messages, and crises', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (8, 'social-strategy');
INSERT INTO product_tags (variant_id, tag_name) VALUES (8, 'content-design');
INSERT INTO product_tags (variant_id, tag_name) VALUES (8, 'editorial-workflow');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (8, 'Week 1: Audience research, channel analysis, and content objective setting', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (8, 'Weeks 2-3: Content pillar design, workflow mapping, and template creation', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (8, 'Week 4: Playbook finalisation, team training, and publication system handover', 2);

-- Online Social Presence (High-Impact) - AI Design (variant 9)
UPDATE product_variants SET positioning = 'AI for social: content intelligence, scheduling optimisation, and sentiment monitoring designed before build.' WHERE id = 9;
UPDATE product_content SET description = 'Identify which AI tools will make your social content more relevant and your community management more responsive, validate those use cases, and receive specifications ready for your technology team to build.', positioning = 'AI for social: content intelligence, scheduling optimisation, and sentiment monitoring designed before build.' WHERE variant_id = 9;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (9, 'AI use-case identification for social content generation, caption optimisation, and hashtag intelligence', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (9, 'Sentiment analysis and social listening workflow design with alerting thresholds', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (9, 'Responsible content moderation design covering AI-flagged comments and escalation logic', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (9, 'Tool selection guidance with integration requirements for your existing social and CRM stack', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (9, 'social-ai');
INSERT INTO product_tags (variant_id, tag_name) VALUES (9, 'content-intelligence');
INSERT INTO product_tags (variant_id, tag_name) VALUES (9, 'sentiment-monitoring');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (9, 'Week 1: AI opportunity mapping across content, scheduling, moderation, and listening', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (9, 'Week 2: Use-case validation, platform API feasibility, and risk review', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (9, 'Weeks 3-4: Workflow design, responsible AI specification, and integration documentation', 2);

-- Online Social Presence (High-Impact) - Deploy (variant 10)
UPDATE product_variants SET positioning = 'Social channels live: tools configured, workflows active, and your team ready to publish.' WHERE id = 10;
UPDATE product_content SET description = 'Activate your social media strategy with a fully configured technology stack, content workflows, and community management tools deployed and tested so your team can publish and engage from day one.', positioning = 'Social channels live: tools configured, workflows active, and your team ready to publish.' WHERE variant_id = 10;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (10, 'Social management platform configuration with accounts, permissions, and approval workflows set up', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (10, 'Content scheduling system deployment with editorial calendar integrated to your planning tools', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (10, 'Analytics and reporting dashboard setup tracking reach, engagement, and audience growth by channel', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (10, 'Team training and process validation to confirm your team can operate every tool independently', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (10, 'social-deployment');
INSERT INTO product_tags (variant_id, tag_name) VALUES (10, 'platform-configuration');
INSERT INTO product_tags (variant_id, tag_name) VALUES (10, 'team-enablement');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (10, 'Weeks 1-2: Platform configuration, account connection, and permission structure setup', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (10, 'Weeks 3-6: Scheduling and analytics tool deployment, workflow testing, and content migration', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (10, 'Weeks 7-9: UAT, team training, and process sign-off', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (10, 'Weeks 10-12: Go-live, first publication cycle, and operational handover', 3);

-- Online Social Presence (High-Impact) - AI Deploy (variant 11)
UPDATE product_variants SET positioning = 'AI social tools in production: listening live, moderation active, and your team in control.' WHERE id = 11;
UPDATE product_content SET description = 'Deploy AI-powered social listening, content assistance, and automated moderation into your live channels with safety controls configured and your team trained to manage every feature in production.', positioning = 'AI social tools in production: listening live, moderation active, and your team in control.' WHERE variant_id = 11;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (11, 'Social listening AI deployed with real-time alerts for brand mentions, sentiment shifts, and crisis signals', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (11, 'Content AI tools activated with brand voice guardrails and editorial approval gates before publication', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (11, 'Automated comment moderation live with escalation rules your community managers control', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (11, 'Performance measurement framework tracking AI feature contribution to engagement and response time', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (11, 'social-ai');
INSERT INTO product_tags (variant_id, tag_name) VALUES (11, 'automated-moderation');
INSERT INTO product_tags (variant_id, tag_name) VALUES (11, 'ai-deployment');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (11, 'Weeks 1-3: AI platform integration, API connections, and data pipeline configuration', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (11, 'Weeks 4-7: Moderation rule setup, listening threshold calibration, and content tool activation', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (11, 'Weeks 8-10: Controlled rollout, team training, and performance baseline establishment', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (11, 'Weeks 11-12: Full activation, measurement validation, and operational handover', 3);

-- Online Social Presence (High-Impact) - Managed (variant 12)
UPDATE product_variants SET positioning = 'Social presence managed end-to-end: publishing, monitoring, and reporting every month.' WHERE id = 12;
UPDATE product_content SET description = 'Keep your social channels active, on-brand, and growing with monthly content management, community monitoring, and performance reporting handled by the DigitalQatalyst team under a defined SLA.', positioning = 'Social presence managed end-to-end: publishing, monitoring, and reporting every month.' WHERE variant_id = 12;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (12, 'Monthly content publishing across agreed channels, aligned to your brand guidelines and calendar', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (12, 'Daily community monitoring with response to comments and messages within SLA timeframes', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (12, 'Monthly performance report covering reach, engagement, follower growth, and content effectiveness', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (12, 'Quarterly strategy review to adjust content approach based on audience data and business priorities', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (12, 'managed-social');
INSERT INTO product_tags (variant_id, tag_name) VALUES (12, 'community-management');
INSERT INTO product_tags (variant_id, tag_name) VALUES (12, 'content-operations');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (12, 'Month 1: Onboarding, channel access, brand guideline review, and content calendar setup', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (12, 'Month 2: First managed content cycle with reporting cadence established', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (12, 'Ongoing: Monthly publishing, monitoring, and reporting with quarterly strategy sessions', 2);

-- Mobile Apps (High-Impact) - Assess (variant 13)
UPDATE product_variants SET positioning = 'A rigorous mobile app health check: adoption barriers identified, retention risks surfaced, roadmap ready.' WHERE id = 13;
UPDATE product_content SET description = 'Assess the performance, usability, and technical health of your mobile app portfolio, identify the gaps driving low adoption or poor retention, and receive a prioritised improvement roadmap your product and engineering teams can act on.', positioning = 'A rigorous mobile app health check: adoption barriers identified, retention risks surfaced, roadmap ready.' WHERE variant_id = 13;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (13, 'App store performance audit covering ratings, review themes, and install-to-retention funnel data', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (13, 'UX evaluation of core journeys identifying where users abandon tasks or disengage', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (13, 'Technical performance review of load times, crash rates, and API response across device types', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (13, 'Prioritised improvement roadmap scored by user impact and engineering effort', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (13, 'mobile-audit');
INSERT INTO product_tags (variant_id, tag_name) VALUES (13, 'app-performance');
INSERT INTO product_tags (variant_id, tag_name) VALUES (13, 'ux-review');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (13, 'Days 1-2: Analytics access, stakeholder interviews, and app store data collection', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (13, 'Days 3-4: Journey testing, technical performance review, and competitor app analysis', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (13, 'Day 5: Findings presentation with prioritised mobile roadmap', 2);
UPDATE products SET short_description = 'Assess the performance, usability, and technical health of your mobile app portfolio, identify the gaps driving low adoption or poor retention, and receive a prioritised improvement roadmap your product and engineering teams can act on.', audience = 'Digital Product Managers, Mobile Engineering Leads, and CX Directors', industry_relevance = 'Organisations with customer-facing, employee, or partner mobile apps across any platform', business_impact = 'Identifies the specific friction points and technical issues reducing adoption and retention so your product team can fix the highest-impact problems first.' WHERE id = (SELECT product_id FROM product_variants WHERE id = 13);

-- Mobile Apps (High-Impact) - Design (variant 14)
UPDATE product_variants SET positioning = 'From product brief to build-ready mobile app specification: user-validated, technically complete.' WHERE id = 14;
UPDATE product_content SET description = 'Turn your mobile app strategy into screen-by-screen designs and build-ready specifications that your development team can code against, with user research validating every key interaction before build begins.', positioning = 'From product brief to build-ready mobile app specification: user-validated, technically complete.' WHERE variant_id = 14;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (14, 'User research and journey mapping specific to mobile context, including offline and low-connectivity scenarios', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (14, 'Screen-by-screen interaction design validated through usability testing with target users', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (14, 'Platform-specific design system covering iOS and Android guidelines and accessibility standards', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (14, 'Technical specification with API contracts, state management design, and push notification logic', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (14, 'mobile-design');
INSERT INTO product_tags (variant_id, tag_name) VALUES (14, 'ux-research');
INSERT INTO product_tags (variant_id, tag_name) VALUES (14, 'app-specification');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (14, 'Week 1: User research, journey mapping, and product requirements alignment', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (14, 'Weeks 2-3: Wireframing, interaction design, and usability testing', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (14, 'Week 4: Design system documentation, technical specification, and handover package', 2);

-- Mobile Apps (High-Impact) - AI Design (variant 15)
UPDATE product_variants SET positioning = 'AI for mobile apps: validated use cases, on-device and cloud options assessed, guardrails specified.' WHERE id = 15;
UPDATE product_content SET description = 'Validate which AI features will genuinely improve your mobile app experience, from in-app personalisation to intelligent search, and produce deployment-ready specifications with responsible AI controls built in.', positioning = 'AI for mobile apps: validated use cases, on-device and cloud options assessed, guardrails specified.' WHERE variant_id = 15;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (15, 'AI use-case identification across personalisation, predictive actions, computer vision, and NLP for mobile', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (15, 'On-device versus cloud AI trade-off analysis covering latency, privacy, and battery impact', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (15, 'Responsible AI design including bias testing requirements, data minimisation, and user consent flows', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (15, 'Deployment specification with SDK requirements, model delivery strategy, and platform API constraints', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (15, 'mobile-ai');
INSERT INTO product_tags (variant_id, tag_name) VALUES (15, 'on-device-ml');
INSERT INTO product_tags (variant_id, tag_name) VALUES (15, 'responsible-ai');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (15, 'Week 1: AI opportunity mapping and mobile-specific feasibility review', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (15, 'Week 2: Use-case prioritisation, on-device versus cloud assessment, and privacy review', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (15, 'Weeks 3-4: Responsible workflow design, consent flow specification, and build documentation', 2);

-- Mobile Apps (High-Impact) - Deploy (variant 16)
UPDATE product_variants SET positioning = 'Mobile app delivered: built to specification, tested on real devices, and handed over with full documentation.' WHERE id = 16;
UPDATE product_content SET description = 'Build and launch your mobile app with sprint-based engineering, rigorous QA across iOS and Android, and a documented handover that leaves your team able to manage and evolve the product independently.', positioning = 'Mobile app delivered: built to specification, tested on real devices, and handed over with full documentation.' WHERE variant_id = 16;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (16, 'Cross-platform or native build executed against the agreed specification with weekly progress checkpoints', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (16, 'Real-device testing across iOS and Android covering performance, accessibility, and offline behaviour', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (16, 'App store submission management including metadata, screenshots, and review process support', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (16, 'Post-launch hypercare period covering priority defect resolution and performance stabilisation', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (16, 'mobile-delivery');
INSERT INTO product_tags (variant_id, tag_name) VALUES (16, 'app-launch');
INSERT INTO product_tags (variant_id, tag_name) VALUES (16, 'cross-platform');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (16, 'Weeks 1-4: Development environment setup, core feature build, and sprint reviews', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (16, 'Weeks 5-8: Integration, secondary feature development, and internal QA', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (16, 'Weeks 9-10: User acceptance testing and defect resolution', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (16, 'Weeks 11-12: App store submission, launch, and hypercare', 3);

-- Mobile Apps (High-Impact) - AI Deploy (variant 17)
UPDATE product_variants SET positioning = 'AI mobile features live: on-device models deployed, monitoring active, and your team in control.' WHERE id = 17;
UPDATE product_content SET description = 'Deploy your validated AI mobile features into production with on-device and cloud infrastructure configured, safety controls active, and your product team trained to manage every feature after handover.', positioning = 'AI mobile features live: on-device models deployed, monitoring active, and your team in control.' WHERE variant_id = 17;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (17, 'AI model deployment covering both on-device SDK integration and cloud inference configuration', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (17, 'Production monitoring for model accuracy, latency, and battery impact across device categories', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (17, 'User consent flow and data privacy controls implemented and verified before public release', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (17, 'Product team training on model update procedures, performance monitoring, and incident response', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (17, 'mobile-ai');
INSERT INTO product_tags (variant_id, tag_name) VALUES (17, 'ai-deployment');
INSERT INTO product_tags (variant_id, tag_name) VALUES (17, 'on-device-ml');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (17, 'Weeks 1-3: Infrastructure setup, SDK integration, and model deployment to staging', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (17, 'Weeks 4-7: Safety control configuration, consent flow testing, and performance validation', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (17, 'Weeks 8-10: Staged rollout, monitoring baseline establishment, and team training', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (17, 'Weeks 11-12: Full release, operational handover, and post-launch support window', 3);

-- Mobile Apps (High-Impact) - Managed (variant 18)
UPDATE product_variants SET positioning = 'Mobile app operations on autopilot: releases managed, performance monitored, issues resolved.' WHERE id = 18;
UPDATE product_content SET description = 'Keep your mobile app performing, updated, and growing with ongoing release management, performance monitoring, and user feedback analysis handled by the DigitalQatalyst team under a defined SLA.', positioning = 'Mobile app operations on autopilot: releases managed, performance monitored, issues resolved.' WHERE variant_id = 18;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (18, 'Monthly app store release management covering bug fixes, OS compatibility updates, and minor enhancements', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (18, 'Continuous crash and ANR monitoring with priority defect resolution within SLA timeframes', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (18, 'App store optimisation including rating response, keyword refinement, and listing updates', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (18, 'Quarterly product review analysing retention data and user feedback to guide next-quarter priorities', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (18, 'mobile-managed');
INSERT INTO product_tags (variant_id, tag_name) VALUES (18, 'release-management');
INSERT INTO product_tags (variant_id, tag_name) VALUES (18, 'app-store-optimisation');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (18, 'Month 1: Onboarding, access setup, baseline metrics, and release cadence agreement', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (18, 'Month 2: First managed release cycle with monitoring and reporting established', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (18, 'Ongoing: Monthly releases, continuous monitoring, and quarterly product reviews', 2);

-- Physical Channels (High-Impact) - Assess (variant 19)
UPDATE product_variants SET positioning = 'Frontline experience audited: service gaps mapped, consistency failures identified, priorities set.' WHERE id = 19;
UPDATE product_content SET description = 'Assess how your branches, service centres, and in-person touchpoints are performing today, identify where frontline experience is inconsistent or inefficient, and receive a prioritised improvement roadmap for your operations leadership.', positioning = 'Frontline experience audited: service gaps mapped, consistency failures identified, priorities set.' WHERE variant_id = 19;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (19, 'Mystery shopping and customer journey observation across a sample of physical locations', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (19, 'Staff process and tool review identifying friction points that slow service delivery', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (19, 'Digital-to-physical handoff assessment mapping where customers fall through channel gaps', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (19, 'Prioritised improvement plan ranked by customer experience impact and operational feasibility', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (19, 'physical-cx');
INSERT INTO product_tags (variant_id, tag_name) VALUES (19, 'frontline-experience');
INSERT INTO product_tags (variant_id, tag_name) VALUES (19, 'operations-audit');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (19, 'Days 1-2: Stakeholder interviews, process documentation review, and location sampling plan', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (19, 'Days 3-4: Mystery shopping visits, staff observations, and data collection', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (19, 'Day 5: Findings presentation with prioritised physical channel improvement roadmap', 2);
UPDATE products SET short_description = 'Assess how your branches, service centres, and in-person touchpoints are performing today, identify where frontline experience is inconsistent or inefficient, and receive a prioritised improvement roadmap for your operations leadership.', audience = 'Operations Directors, CX Leaders, Retail or Branch Network Managers', industry_relevance = 'Organisations operating branches, stores, clinics, service centres, or any network of in-person customer touchpoints', business_impact = 'Exposes the specific service inconsistencies and process bottlenecks reducing customer satisfaction and staff efficiency across your physical network.' WHERE id = (SELECT product_id FROM product_variants WHERE id = 19);

-- Physical Channels (High-Impact) - Design (variant 20)
UPDATE product_variants SET positioning = 'Physical service reimagined: connected journeys, standard processes, and digital integration designed for every location.' WHERE id = 20;
UPDATE product_content SET description = 'Design a consistent, connected physical service experience across your entire location network: standardised journeys, optimised staff workflows, and integrated digital handoffs specified for your operations team to implement.', positioning = 'Physical service reimagined: connected journeys, standard processes, and digital integration designed for every location.' WHERE variant_id = 20;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (20, 'Service journey redesign for your key in-person customer scenarios, tested with real frontline staff', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (20, 'Standard operating procedure design covering service steps, tools, and escalation paths', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (20, 'Digital handoff specification defining how in-person and online channels exchange customer context', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (20, 'Location environment and signage guidance to align physical spaces with the intended experience', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (20, 'physical-cx');
INSERT INTO product_tags (variant_id, tag_name) VALUES (20, 'service-design');
INSERT INTO product_tags (variant_id, tag_name) VALUES (20, 'omnichannel');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (20, 'Week 1: Current state analysis, frontline staff interviews, and journey prioritisation', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (20, 'Weeks 2-3: Service journey redesign, SOP drafting, and digital integration specification', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (20, 'Week 4: Pilot design validation, documentation finalisation, and handover to operations', 2);

-- Physical Channels (High-Impact) - AI Design (variant 21)
UPDATE product_variants SET positioning = 'AI for physical channels: queue intelligence, staff assistance, and in-store analytics designed before deployment.' WHERE id = 21;
UPDATE product_content SET description = 'Identify which AI tools will improve frontline service speed, reduce staff administrative burden, and make in-person experience more responsive, then validate those use cases and produce specifications ready for build.', positioning = 'AI for physical channels: queue intelligence, staff assistance, and in-store analytics designed before deployment.' WHERE variant_id = 21;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (21, 'AI use-case identification across queue management, staff decision support, product recommendation, and visitor analytics', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (21, 'Edge AI feasibility assessment for in-store or branch deployments with connectivity constraints', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (21, 'Responsible AI design for in-person contexts covering camera-based systems, consent requirements, and bias risks', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (21, 'Integration specification connecting AI tools to your existing POS, CRM, and queue management systems', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (21, 'physical-ai');
INSERT INTO product_tags (variant_id, tag_name) VALUES (21, 'edge-ai');
INSERT INTO product_tags (variant_id, tag_name) VALUES (21, 'retail-technology');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (21, 'Week 1: AI opportunity mapping for frontline and location operations contexts', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (21, 'Week 2: Use-case validation, connectivity and hardware feasibility, and regulatory review', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (21, 'Weeks 3-4: Responsible AI workflow design, consent specification, and integration documentation', 2);

-- Physical Channels (High-Impact) - Deploy (variant 22)
UPDATE product_variants SET positioning = 'Physical channel improvements deployed: configured, trained, and rolled out across your network.' WHERE id = 22;
UPDATE product_content SET description = 'Implement the designed physical channel improvements across your location network with phased rollout management, per-cohort sign-off, staff training, and operational handover so every location delivers the new experience from launch day.', positioning = 'Physical channel improvements deployed: configured, trained, and rolled out across your network.' WHERE variant_id = 22;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (22, 'Technology and tooling deployment across agreed locations including configuration and integration testing', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (22, 'Staff training programme delivered in-location and supported by self-service guides for ongoing reference', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (22, 'Pilot location launch with defined success metrics reviewed before full network rollout', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (22, 'Operations handover covering maintenance procedures, escalation contacts, and SLA documentation', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (22, 'physical-deployment');
INSERT INTO product_tags (variant_id, tag_name) VALUES (22, 'network-rollout');
INSERT INTO product_tags (variant_id, tag_name) VALUES (22, 'staff-training');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (22, 'Weeks 1-3: Technology setup, systems integration, and pilot location preparation', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (22, 'Weeks 4-7: Pilot launch, performance measurement, and staff training at pilot sites', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (22, 'Weeks 8-10: Rollout to remaining locations with lessons from pilot applied', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (22, 'Weeks 11-12: Full network go-live, performance validation, and operations handover', 3);

-- Physical Channels (High-Impact) - AI Deploy (variant 23)
UPDATE product_variants SET positioning = 'AI in your physical locations: deployed, tested, and your frontline team trained and ready.' WHERE id = 23;
UPDATE product_content SET description = 'Put AI tools into your branches, stores, and service centres with hardware deployed, safety controls active, and frontline staff trained to use and manage every AI-powered feature in their daily work.', positioning = 'AI in your physical locations: deployed, tested, and your frontline team trained and ready.' WHERE variant_id = 23;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (23, 'AI hardware and software deployed across agreed locations with integration to existing systems', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (23, 'Real-time monitoring of AI performance metrics including accuracy, latency, and hardware health', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (23, 'Frontline staff enablement covering how to use, interpret, and escalate AI tool outputs', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (23, 'Privacy and consent infrastructure implemented and verified at each physical location', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (23, 'physical-ai');
INSERT INTO product_tags (variant_id, tag_name) VALUES (23, 'ai-deployment');
INSERT INTO product_tags (variant_id, tag_name) VALUES (23, 'edge-ai');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (23, 'Weeks 1-3: Hardware procurement, infrastructure setup, and pilot location configuration', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (23, 'Weeks 4-7: AI tool deployment, safety control activation, and staff training at pilot sites', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (23, 'Weeks 8-10: Pilot performance validation and issues resolved before network rollout', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (23, 'Weeks 11-12: Network deployment, full go-live, and operational handover', 3);

-- Physical Channels (High-Impact) - Managed (variant 24)
UPDATE product_variants SET positioning = 'Physical operations managed: technology maintained, performance tracked, and issues resolved before they reach customers.' WHERE id = 24;
UPDATE product_content SET description = 'Keep your physical channel technology performing and your frontline operations running smoothly with ongoing monitoring, maintenance, and optimisation managed by the DigitalQatalyst team under a defined SLA.', positioning = 'Physical operations managed: technology maintained, performance tracked, and issues resolved before they reach customers.' WHERE variant_id = 24;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (24, 'Continuous monitoring of physical channel technology including kiosks, queue systems, and in-store tools', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (24, 'Preventive maintenance scheduling and remote resolution of technology faults within SLA timeframes', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (24, 'Monthly performance reporting across customer flow, wait times, transaction completion, and technology uptime', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (24, 'Quarterly experience review analysing operational data and customer feedback to guide network improvements', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (24, 'physical-managed');
INSERT INTO product_tags (variant_id, tag_name) VALUES (24, 'operations-management');
INSERT INTO product_tags (variant_id, tag_name) VALUES (24, 'network-maintenance');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (24, 'Month 1: Onboarding, system access, baseline performance, and SLA configuration', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (24, 'Month 2: First managed operations cycle with monitoring and reporting established', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (24, 'Ongoing: Monthly reporting, continuous monitoring, and quarterly experience reviews', 2);

-- Integrated Experience (High-Impact) - Assess (variant 25)
UPDATE product_variants SET positioning = 'Your end-to-end experience audited: cross-channel gaps mapped, consistency failures scored, priorities agreed.' WHERE id = 25;
UPDATE product_content SET description = 'Assess the consistency, quality, and connectivity of your customer and employee experience across every channel, identify where journeys break down at channel transitions, and receive a prioritised transformation roadmap.', positioning = 'Your end-to-end experience audited: cross-channel gaps mapped, consistency failures scored, priorities agreed.' WHERE variant_id = 25;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (25, 'Cross-channel journey audit tracing real customer paths from first contact through to resolution across web, app, social, and in-person', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (25, 'Channel handoff analysis identifying where customers lose context or must repeat information at transition points', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (25, 'Employee experience review assessing tool friction and process gaps affecting frontline service quality', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (25, 'Prioritised transformation roadmap ranked by cross-channel impact and investment required', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (25, 'cx-strategy');
INSERT INTO product_tags (variant_id, tag_name) VALUES (25, 'cross-channel');
INSERT INTO product_tags (variant_id, tag_name) VALUES (25, 'journey-mapping');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (25, 'Days 1-2: Stakeholder interviews, customer journey data review, and channel scope agreement', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (25, 'Days 3-4: Cross-channel testing, handoff analysis, and employee experience review', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (25, 'Day 5: Findings presentation with prioritised integrated experience roadmap', 2);
UPDATE products SET short_description = 'Assess the consistency, quality, and connectivity of your customer and employee experience across every channel, identify where journeys break down at channel transitions, and receive a prioritised transformation roadmap.', audience = 'CX Directors, Digital Leaders, Product Heads, and Marketing Directors', industry_relevance = 'Organisations operating across multiple customer channels and looking to improve consistency and connectivity across the full experience ecosystem', business_impact = 'Reveals the specific channel handoff failures and consistency gaps reducing customer satisfaction and repeat engagement, giving your team a cross-channel view of where to invest first.' WHERE id = (SELECT product_id FROM product_variants WHERE id = 25);

-- Integrated Experience (High-Impact) - Design (variant 26)
UPDATE product_variants SET positioning = 'Experience designed end-to-end: consistent journeys, unified data, and an adoption plan across every channel.' WHERE id = 26;
UPDATE product_content SET description = 'Design a connected, consistent customer and employee experience across every channel: unified journeys, shared data architecture, and an adoption plan your CX and technology teams can execute together.', positioning = 'Experience designed end-to-end: consistent journeys, unified data, and an adoption plan across every channel.' WHERE variant_id = 26;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (26, 'Unified customer journey design spanning web, mobile, social, and physical channels with no handoff gaps', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (26, 'Shared experience data architecture defining how customer context flows between every channel', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (26, 'Personalisation framework design covering segmentation, triggers, and content strategy across touchpoints', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (26, 'Employee experience design aligning frontline tools, processes, and information access with the customer journey', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (26, 'cx-design');
INSERT INTO product_tags (variant_id, tag_name) VALUES (26, 'experience-architecture');
INSERT INTO product_tags (variant_id, tag_name) VALUES (26, 'personalisation');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (26, 'Week 1: Cross-channel discovery, stakeholder alignment, and journey prioritisation', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (26, 'Weeks 2-3: Journey design, data architecture specification, and personalisation framework', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (26, 'Week 4: Employee experience design, adoption planning, and full specification handover', 2);

-- Integrated Experience (High-Impact) - AI Design (variant 27)
UPDATE product_variants SET positioning = 'AI for integrated experience: personalisation engines, journey intelligence, and next-best-action workflows specified before build.' WHERE id = 27;
UPDATE product_content SET description = 'Validate the AI use cases that will make your integrated experience genuinely more personalised and responsive, define responsible workflows for every validated use case, and produce specifications your technology teams can build to.', positioning = 'AI for integrated experience: personalisation engines, journey intelligence, and next-best-action workflows specified before build.' WHERE variant_id = 27;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (27, 'AI opportunity mapping across personalisation, journey orchestration, next-best-action, and churn prediction for multi-channel environments', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (27, 'Data readiness assessment confirming which use cases your current customer data estate can support', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (27, 'Responsible AI workflow design for customer-facing personalisation covering consent, explainability, and bias controls', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (27, 'Cross-channel AI integration specification showing how AI outputs reach customers across web, mobile, social, and in-person', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (27, 'cx-ai');
INSERT INTO product_tags (variant_id, tag_name) VALUES (27, 'personalisation-engine');
INSERT INTO product_tags (variant_id, tag_name) VALUES (27, 'journey-intelligence');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (27, 'Week 1: AI opportunity mapping and cross-channel data landscape review', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (27, 'Week 2: Use-case prioritisation, data readiness assessment, and regulatory review', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (27, 'Weeks 3-4: Responsible workflow design, integration specification, and build documentation', 2);

-- Integrated Experience (High-Impact) - Deploy (variant 28)
UPDATE product_variants SET positioning = 'Integrated experience live: channels connected, data flowing, and your teams in control from day one.' WHERE id = 28;
UPDATE product_content SET description = 'Build and activate your integrated experience design across every channel: technology configured, data pipelines live, and your CX and technology teams handed a fully documented, operational cross-channel platform.', positioning = 'Integrated experience live: channels connected, data flowing, and your teams in control from day one.' WHERE variant_id = 28;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (28, 'Cross-channel technology deployment with all agreed integrations tested end-to-end before go-live', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (28, 'Customer data pipeline configuration connecting your channel systems into a unified customer view', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (28, 'Personalisation and journey orchestration tools configured and validated against the design specification', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (28, 'CX and operations team training covering the full cross-channel platform and data management procedures', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (28, 'cx-deployment');
INSERT INTO product_tags (variant_id, tag_name) VALUES (28, 'integration-delivery');
INSERT INTO product_tags (variant_id, tag_name) VALUES (28, 'omnichannel-platform');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (28, 'Weeks 1-4: Technology environment setup, integration development, and data pipeline configuration', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (28, 'Weeks 5-8: Journey orchestration setup, personalisation rule configuration, and QA', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (28, 'Weeks 9-10: User acceptance testing and defect resolution across all channel integrations', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (28, 'Weeks 11-12: Phased go-live, performance validation, and operations handover', 3);

-- Integrated Experience (High-Impact) - AI Deploy (variant 29)
UPDATE product_variants SET positioning = 'AI experience capabilities live: personalisation active, journey intelligence running, and your CX team in control.' WHERE id = 29;
UPDATE product_content SET description = 'Deploy AI-powered personalisation, journey orchestration, and next-best-action capabilities across your full channel estate with safety controls active and your CX teams trained to manage every AI feature in production.', positioning = 'AI experience capabilities live: personalisation active, journey intelligence running, and your CX team in control.' WHERE variant_id = 29;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (29, 'Personalisation AI deployed across web, mobile, and in-person channels with segment rules and content logic active', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (29, 'Journey orchestration AI live with real-time triggers, channel handoff logic, and next-best-action recommendations', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (29, 'AI safety controls configured including consent management, bias monitoring, and output audit logging', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (29, 'CX team training covering model performance review, segment management, and AI recommendation override procedures', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (29, 'cx-ai');
INSERT INTO product_tags (variant_id, tag_name) VALUES (29, 'personalisation-deployment');
INSERT INTO product_tags (variant_id, tag_name) VALUES (29, 'journey-orchestration');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (29, 'Weeks 1-3: AI infrastructure deployment, model integration, and staging environment testing', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (29, 'Weeks 4-7: Personalisation rule configuration, orchestration logic activation, and safety control setup', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (29, 'Weeks 8-10: Controlled rollout, A/B testing framework configuration, and team training', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (29, 'Weeks 11-12: Full production release, performance baselining, and operational handover', 3);

-- Integrated Experience (High-Impact) - Managed (variant 30)
UPDATE product_variants SET positioning = 'Integrated experience managed end-to-end: all channels monitored, AI models governed, and performance improving monthly.' WHERE id = 30;
UPDATE product_content SET description = 'Keep your integrated customer experience performing, personalised, and consistent across all channels with ongoing operations, AI model governance, and cross-channel performance reporting managed by the DigitalQatalyst team.', positioning = 'Integrated experience managed end-to-end: all channels monitored, AI models governed, and performance improving monthly.' WHERE variant_id = 30;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (30, 'Continuous cross-channel performance monitoring covering customer satisfaction, journey completion, and channel adoption metrics', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (30, 'Monthly AI model governance review checking personalisation accuracy, bias flags, and recommendation quality', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (30, 'Proactive content and segment management keeping personalisation relevant as your audience and product range evolve', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (30, 'Quarterly integrated experience review aligning channel performance data with your business objectives and planning next improvements', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (30, 'cx-managed');
INSERT INTO product_tags (variant_id, tag_name) VALUES (30, 'ai-governance');
INSERT INTO product_tags (variant_id, tag_name) VALUES (30, 'cross-channel-operations');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (30, 'Month 1: Onboarding, access setup, baseline metrics across all channels, and SLA configuration', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (30, 'Month 2: First managed cycle with cross-channel reporting and AI governance established', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (30, 'Ongoing: Monthly governance reviews, reporting, and quarterly experience strategy sessions', 2);

-- CRM Solutions (High-Impact) - Assess (variant 31)
UPDATE product_variants SET positioning = 'Understand exactly where your CRM is costing you deals, before you spend a pound on change.' WHERE id = 31;
UPDATE product_content SET description = 'Audit your CRM platform and relationship management practices against current performance data, then receive a prioritised roadmap of the changes most likely to lift pipeline visibility and revenue consistency.', positioning = 'Understand exactly where your CRM is costing you deals, before you spend a pound on change.' WHERE variant_id = 31;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (31, 'Current-state audit of CRM data quality, pipeline coverage, and process adherence', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (31, 'Gap analysis mapped to sales, marketing, and service outcomes you care about', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (31, 'Prioritised improvement roadmap with effort scores and owner recommendations', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (31, 'Stakeholder-ready findings pack your leadership team can act on immediately', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (31, 'crm');
INSERT INTO product_tags (variant_id, tag_name) VALUES (31, 'pipeline-management');
INSERT INTO product_tags (variant_id, tag_name) VALUES (31, 'revenue-operations');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (31, 'Days 1-2: CRM data and process review, stakeholder interviews', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (31, 'Days 3-4: Gap scoring, impact analysis, and roadmap sequencing', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (31, 'Day 5: Findings presentation and prioritised roadmap handover', 2);
UPDATE products SET short_description = 'Audit your CRM platform and relationship management practices against current performance data, then receive a prioritised roadmap of the changes most likely to lift pipeline visibility and revenue consistency.', audience = 'Sales Directors, Revenue Operations leads, CX and Marketing leaders', industry_relevance = 'Organisations managing active sales pipelines, key account portfolios, or multi-channel customer relationships across B2B and B2C sectors', business_impact = 'Identifies the CRM gaps causing pipeline leakage and forecast inaccuracy, giving leadership a clear, costed path to higher win rates and stronger customer retention.' WHERE id = (SELECT product_id FROM product_variants WHERE id = 31);

-- CRM Solutions (High-Impact) - Design (variant 32)
UPDATE product_variants SET positioning = 'A CRM design blueprint that closes the gap between what the platform can do and what your teams actually need.' WHERE id = 32;
UPDATE product_content SET description = 'Turn your CRM improvement goals into user-centred workflows, integration specifications, and a build-ready blueprint your delivery team can implement with confidence.', positioning = 'A CRM design blueprint that closes the gap between what the platform can do and what your teams actually need.' WHERE variant_id = 32;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (32, 'User journey mapping for sales, marketing, and service roles across the CRM lifecycle', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (32, 'Data model and field architecture designed for reporting accuracy and automation readiness', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (32, 'Integration specifications covering your marketing, finance, and operational systems', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (32, 'Change and adoption plan with role-based training outlines and go-live criteria', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (32, 'crm');
INSERT INTO product_tags (variant_id, tag_name) VALUES (32, 'pipeline-management');
INSERT INTO product_tags (variant_id, tag_name) VALUES (32, 'revenue-operations');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (32, 'Week 1: Discovery workshops, user research, and current-state documentation', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (32, 'Weeks 2-3: Workflow design, data model, and integration architecture', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (32, 'Week 4: Prototype review, adoption planning, and specification sign-off', 2);

-- CRM Solutions (High-Impact) - AI Design (variant 33)
UPDATE product_variants SET positioning = 'AI capabilities for your CRM platform, scoped responsibly and specified for build before any budget is committed.' WHERE id = 33;
UPDATE product_content SET description = 'Validate which AI use cases genuinely improve CRM outcomes, then produce responsible workflow designs and deployment specifications your team can build and govern with confidence.', positioning = 'AI capabilities for your CRM platform, scoped responsibly and specified for build before any budget is committed.' WHERE variant_id = 33;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (33, 'AI use-case scoring against your CRM data maturity, business value, and implementation feasibility', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (33, 'Responsible workflow designs with bias controls, data privacy requirements, and human override points', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (33, 'Model and vendor selection guidance tailored to your CRM platform and data landscape', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (33, 'Deployment specifications including monitoring thresholds, model refresh cadence, and fallback logic', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (33, 'crm');
INSERT INTO product_tags (variant_id, tag_name) VALUES (33, 'ai-design');
INSERT INTO product_tags (variant_id, tag_name) VALUES (33, 'revenue-operations');
INSERT INTO product_tags (variant_id, tag_name) VALUES (33, 'responsible-ai');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (33, 'Week 1: AI opportunity identification and data readiness assessment', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (33, 'Weeks 2-3: Use-case validation, responsible design, and workflow specification', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (33, 'Week 4: Technical specifications, governance framework, and stakeholder sign-off', 2);

-- CRM Solutions (High-Impact) - Deploy (variant 34)
UPDATE product_variants SET positioning = 'CRM changes delivered on time, tested against your requirements, and handed over so your teams can run them without dependency on us.' WHERE id = 34;
UPDATE product_content SET description = 'Configure, integrate, test, and launch your CRM platform improvements with structured quality assurance and a controlled handover that leaves your team fully operational.', positioning = 'CRM changes delivered on time, tested against your requirements, and handed over so your teams can run them without dependency on us.' WHERE variant_id = 34;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (34, 'Configuration and customisation built to approved specifications, version-controlled throughout', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (34, 'Integration testing covering each connected system with documented pass criteria and defect resolution', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (34, 'User acceptance testing facilitated with your sales, marketing, and service representatives', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (34, 'Go-live playbook, rollback plan, and post-launch hypercare to protect business continuity', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (34, 'crm');
INSERT INTO product_tags (variant_id, tag_name) VALUES (34, 'pipeline-management');
INSERT INTO product_tags (variant_id, tag_name) VALUES (34, 'revenue-operations');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (34, 'Weeks 1-3: Configuration, customisation, and integration build', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (34, 'Weeks 4-8: System integration testing, defect resolution, and data migration', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (34, 'Weeks 9-11: User acceptance testing, training, and go-live readiness sign-off', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (34, 'Week 12: Controlled launch and hypercare handover', 3);

-- CRM Solutions (High-Impact) - AI Deploy (variant 35)
UPDATE product_variants SET positioning = 'AI in your CRM that works in production, with the governance and monitoring to keep it working reliably.' WHERE id = 35;
UPDATE product_content SET description = 'Deploy approved AI capabilities into your CRM platform with production-grade monitoring, safety controls, and a structured handover that gives your team full operational ownership.', positioning = 'AI in your CRM that works in production, with the governance and monitoring to keep it working reliably.' WHERE variant_id = 35;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (35, 'Production deployment of AI models integrated into your CRM workflows and data pipelines', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (35, 'Safety and bias monitoring configured to your agreed thresholds, with alerts and escalation paths', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (35, 'Model performance dashboards accessible to your operations and analytics teams', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (35, 'AI operations runbook and team training so your people manage the capability, not just consume it', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (35, 'crm');
INSERT INTO product_tags (variant_id, tag_name) VALUES (35, 'ai-deploy');
INSERT INTO product_tags (variant_id, tag_name) VALUES (35, 'revenue-operations');
INSERT INTO product_tags (variant_id, tag_name) VALUES (35, 'responsible-ai');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (35, 'Weeks 1-4: Infrastructure provisioning, model integration, and sandbox validation', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (35, 'Weeks 5-8: Staged production deployment, bias and safety testing, and monitoring setup', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (35, 'Weeks 9-11: Performance validation, team training, and handover readiness assessment', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (35, 'Week 12: Production sign-off and operational handover', 3);

-- CRM Solutions (High-Impact) - Managed (variant 36)
UPDATE product_variants SET positioning = 'Your CRM platform, continuously maintained and improved, so your team focuses on customers, not system administration.' WHERE id = 36;
UPDATE product_content SET description = 'Keep your CRM platform performing at the level your revenue operations depend on, with continuous monitoring, regular optimisation cycles, and a dedicated team accountable to your agreed service levels.', positioning = 'Your CRM platform, continuously maintained and improved, so your team focuses on customers, not system administration.' WHERE variant_id = 36;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (36, 'Monthly platform health checks covering data quality, automation success rates, and integration uptime', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (36, 'Proactive optimisation of workflows, fields, and reports based on usage analytics and business feedback', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (36, 'Release management, update testing, and configuration change control to protect production stability', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (36, 'Monthly performance report with KPI tracking, usage trends, and a forward roadmap of improvements', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (36, 'crm');
INSERT INTO product_tags (variant_id, tag_name) VALUES (36, 'managed-service');
INSERT INTO product_tags (variant_id, tag_name) VALUES (36, 'revenue-operations');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (36, 'Month 1: Baseline establishment, monitoring setup, and service level agreement confirmation', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (36, 'Months 2-3: First optimisation cycle and reporting cadence live', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (36, 'Ongoing: Monthly health checks, optimisation sprints, and quarterly roadmap review', 2);

-- Marketing Solutions (High-Impact) - Assess (variant 37)
UPDATE product_variants SET positioning = 'Find out exactly why campaigns are underperforming before you invest in more technology or headcount.' WHERE id = 37;
UPDATE product_content SET description = 'Audit your marketing operations, campaign infrastructure, and attribution model to identify what is limiting performance, then leave with a prioritised plan your marketing leadership can act on.', positioning = 'Find out exactly why campaigns are underperforming before you invest in more technology or headcount.' WHERE variant_id = 37;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (37, 'Marketing operations audit covering automation health, data quality, and campaign execution consistency', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (37, 'Attribution and measurement review to identify where reporting is misleading investment decisions', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (37, 'Audience segmentation and targeting assessment against campaign performance outcomes', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (37, 'Prioritised improvement roadmap with effort ratings and sequenced quick wins', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (37, 'marketing-ops');
INSERT INTO product_tags (variant_id, tag_name) VALUES (37, 'campaign-performance');
INSERT INTO product_tags (variant_id, tag_name) VALUES (37, 'attribution');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (37, 'Days 1-2: Marketing stack review, campaign data analysis, and stakeholder interviews', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (37, 'Days 3-4: Attribution assessment, segmentation gap analysis, and roadmap sequencing', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (37, 'Day 5: Findings presentation and prioritised marketing improvement roadmap', 2);
UPDATE products SET short_description = 'Audit your marketing operations, campaign infrastructure, and attribution model to identify what is limiting performance, then leave with a prioritised plan your marketing leadership can act on.', audience = 'CMOs, Marketing Operations leads, and Growth and Demand Generation directors', industry_relevance = 'Organisations running structured marketing programmes with automation, paid and owned channel investment, and a need for reliable campaign attribution', business_impact = 'Identifies the specific automation failures, attribution gaps, and segmentation weaknesses reducing campaign return, and sequences the fixes that will move the needle fastest.' WHERE id = (SELECT product_id FROM product_variants WHERE id = 37);

-- Marketing Solutions (High-Impact) - Design (variant 38)
UPDATE product_variants SET positioning = 'A marketing blueprint built for how your organisation actually generates and converts demand.' WHERE id = 38;
UPDATE product_content SET description = 'Design your marketing platform architecture, campaign structures, and audience models so your team can execute at scale with consistent measurement and predictable results.', positioning = 'A marketing blueprint built for how your organisation actually generates and converts demand.' WHERE variant_id = 38;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (38, 'Campaign architecture design covering channel mix, content cadences, and trigger logic', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (38, 'Audience segmentation model with lifecycle stage definitions and personalisation rules', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (38, 'Attribution and reporting framework designed for the decisions your leadership actually makes', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (38, 'Technology and integration design connecting your marketing stack to CRM, data, and analytics', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (38, 'marketing-ops');
INSERT INTO product_tags (variant_id, tag_name) VALUES (38, 'campaign-performance');
INSERT INTO product_tags (variant_id, tag_name) VALUES (38, 'attribution');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (38, 'Week 1: Discovery workshops, current-state review, and goals alignment', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (38, 'Weeks 2-3: Campaign architecture, segmentation model, and attribution framework design', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (38, 'Week 4: Integration specifications, adoption plan, and final design sign-off', 2);

-- Marketing Solutions (High-Impact) - AI Design (variant 39)
UPDATE product_variants SET positioning = 'AI for marketing, validated against your data reality and scoped responsibly before a single line of code is written.' WHERE id = 39;
UPDATE product_content SET description = 'Validate which AI capabilities will genuinely improve marketing outcomes for your organisation, then produce responsible workflow designs and deployment specifications ready for build.', positioning = 'AI for marketing, validated against your data reality and scoped responsibly before a single line of code is written.' WHERE variant_id = 39;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (39, 'AI use-case scoring across personalisation, content generation, audience prediction, and spend optimisation', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (39, 'Data readiness assessment confirming which use cases your current data actually supports', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (39, 'Responsible AI workflow designs with privacy controls, human review points, and bias detection requirements', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (39, 'Technical specifications covering model requirements, integration points, and monitoring thresholds', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (39, 'marketing-ops');
INSERT INTO product_tags (variant_id, tag_name) VALUES (39, 'ai-design');
INSERT INTO product_tags (variant_id, tag_name) VALUES (39, 'personalisation');
INSERT INTO product_tags (variant_id, tag_name) VALUES (39, 'responsible-ai');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (39, 'Week 1: AI opportunity identification, data quality review, and use-case shortlisting', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (39, 'Weeks 2-3: Use-case validation, responsible design, and workflow specification', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (39, 'Week 4: Technical specifications, governance framework, and sign-off', 2);

-- Marketing Solutions (High-Impact) - Deploy (variant 40)
UPDATE product_variants SET positioning = 'Marketing platform capabilities delivered and tested, with your team ready to run campaigns before the project closes.' WHERE id = 40;
UPDATE product_content SET description = 'Build, integrate, test, and launch your marketing platform capabilities with structured quality assurance and a controlled handover so your team can execute campaigns from day one.', positioning = 'Marketing platform capabilities delivered and tested, with your team ready to run campaigns before the project closes.' WHERE variant_id = 40;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (40, 'Platform configuration and campaign template build to agreed specifications', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (40, 'Integration delivery across CRM, analytics, paid channels, and data sources, with documented test evidence', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (40, 'Audience and segmentation configuration validated against your approved segment definitions', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (40, 'User acceptance testing with your marketing team and a go-live readiness checklist before launch', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (40, 'marketing-ops');
INSERT INTO product_tags (variant_id, tag_name) VALUES (40, 'campaign-performance');
INSERT INTO product_tags (variant_id, tag_name) VALUES (40, 'attribution');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (40, 'Weeks 1-4: Platform configuration, automation build, and integration delivery', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (40, 'Weeks 5-8: System integration testing, data validation, and defect resolution', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (40, 'Weeks 9-11: User acceptance testing, campaign template sign-off, and team training', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (40, 'Week 12: Controlled launch and post-go-live support handover', 3);

-- Marketing Solutions (High-Impact) - AI Deploy (variant 41)
UPDATE product_variants SET positioning = 'AI-powered marketing capabilities live in production, governed from the start, and run by your team.' WHERE id = 41;
UPDATE product_content SET description = 'Deploy validated AI capabilities into your marketing platform with production monitoring, privacy controls, and a team handover that gives your marketing operations function full ownership.', positioning = 'AI-powered marketing capabilities live in production, governed from the start, and run by your team.' WHERE variant_id = 41;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (41, 'Production deployment of AI models integrated into your marketing automation and data workflows', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (41, 'Privacy and consent controls validated against your data obligations before any model goes live', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (41, 'Model performance dashboards and alerting configured for your marketing operations team', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (41, 'AI operations training and runbook so your team manages the capability rather than depending on external support', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (41, 'marketing-ops');
INSERT INTO product_tags (variant_id, tag_name) VALUES (41, 'ai-deploy');
INSERT INTO product_tags (variant_id, tag_name) VALUES (41, 'personalisation');
INSERT INTO product_tags (variant_id, tag_name) VALUES (41, 'responsible-ai');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (41, 'Weeks 1-4: Infrastructure setup, model integration, and staging environment validation', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (41, 'Weeks 5-8: Staged production deployment, privacy control verification, and monitoring configuration', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (41, 'Weeks 9-11: Performance validation, team training, and operational handover preparation', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (41, 'Week 12: Production sign-off and formal handover', 3);

-- Marketing Solutions (High-Impact) - Managed (variant 42)
UPDATE product_variants SET positioning = 'Your marketing operations, continuously maintained and improved, so campaigns keep delivering without platform bottlenecks.' WHERE id = 42;
UPDATE product_content SET description = 'Keep your marketing platform and campaigns operating at full capability, with monthly performance reporting, proactive optimisation, and a team accountable to your agreed service levels.', positioning = 'Your marketing operations, continuously maintained and improved, so campaigns keep delivering without platform bottlenecks.' WHERE variant_id = 42;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (42, 'Monthly marketing platform health checks covering automation reliability, data quality, and integration uptime', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (42, 'Campaign performance analysis and optimisation recommendations based on your actual results data', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (42, 'Release and update management, with testing before any platform changes reach production', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (42, 'Monthly performance report covering KPIs, automation health, and a forward optimisation plan', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (42, 'marketing-ops');
INSERT INTO product_tags (variant_id, tag_name) VALUES (42, 'managed-service');
INSERT INTO product_tags (variant_id, tag_name) VALUES (42, 'campaign-performance');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (42, 'Month 1: Service baseline, monitoring configuration, and KPI framework agreement', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (42, 'Months 2-3: First optimisation cycle and monthly reporting cadence established', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (42, 'Ongoing: Monthly health checks, quarterly campaign reviews, and continuous optimisation', 2);

-- Smart Sales & Quotation (High-Impact) - Assess (variant 43)
UPDATE product_variants SET positioning = 'Find the bottlenecks costing you deals and margin before committing to platform or process change.' WHERE id = 43;
UPDATE product_content SET description = 'Audit your sales process and quotation workflows to identify where deals are slowing down, where pricing decisions are inconsistent, and where manual effort is creating conversion risk.', positioning = 'Find the bottlenecks costing you deals and margin before committing to platform or process change.' WHERE variant_id = 43;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (43, 'End-to-end sales process audit from lead qualification through to quote acceptance', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (43, 'Quotation workflow review covering approval steps, pricing rules, and error rates', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (43, 'Pricing consistency assessment across products, channels, and sales team behaviour', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (43, 'Prioritised improvement roadmap with effort scores and quick-win identification', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (43, 'sales-ops');
INSERT INTO product_tags (variant_id, tag_name) VALUES (43, 'cpq');
INSERT INTO product_tags (variant_id, tag_name) VALUES (43, 'pricing-control');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (43, 'Days 1-2: Sales process documentation review, quotation data analysis, and stakeholder interviews', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (43, 'Days 3-4: Bottleneck identification, pricing consistency assessment, and roadmap sequencing', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (43, 'Day 5: Findings presentation and prioritised improvement roadmap handover', 2);
UPDATE products SET short_description = 'Audit your sales process and quotation workflows to identify where deals are slowing down, where pricing decisions are inconsistent, and where manual effort is creating conversion risk.', audience = 'Sales Directors, Commercial Operations leads, and Revenue Management executives', industry_relevance = 'Organisations with structured sales processes, complex product or service pricing, and formal quotation or proposal workflows across B2B sectors', business_impact = 'Identifies the specific process and pricing control gaps causing slow quote turnaround and margin leakage, giving commercial leadership a costed plan for improvement.' WHERE id = (SELECT product_id FROM product_variants WHERE id = 43);

-- Smart Sales & Quotation (High-Impact) - Design (variant 44)
UPDATE product_variants SET positioning = 'A quotation system design that gives your sales team speed and your commercial leadership confidence in every price sent.' WHERE id = 44;
UPDATE product_content SET description = 'Design the sales workflows, quotation logic, and pricing rules your team needs to produce accurate, approved quotes faster, with the integration and adoption plan to make it work in practice.', positioning = 'A quotation system design that gives your sales team speed and your commercial leadership confidence in every price sent.' WHERE variant_id = 44;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (44, 'Sales journey design from opportunity qualification through quote generation and contract handoff', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (44, 'Quotation logic and pricing rule architecture tailored to your product and customer complexity', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (44, 'Approval workflow design with delegation matrices, override controls, and audit trail requirements', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (44, 'Integration specifications connecting your CPQ platform to CRM, ERP, and contract systems', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (44, 'sales-ops');
INSERT INTO product_tags (variant_id, tag_name) VALUES (44, 'cpq');
INSERT INTO product_tags (variant_id, tag_name) VALUES (44, 'pricing-control');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (44, 'Week 1: Discovery workshops with sales, commercial, and finance stakeholders', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (44, 'Weeks 2-3: Sales journey design, quotation logic, approval workflows, and integration architecture', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (44, 'Week 4: Prototype review, adoption planning, and specification sign-off', 2);

-- Smart Sales & Quotation (High-Impact) - AI Design (variant 45)
UPDATE product_variants SET positioning = 'AI for sales and quotation, scoped to the use cases your data supports and specified for responsible deployment.' WHERE id = 45;
UPDATE product_content SET description = 'Validate which AI capabilities can meaningfully accelerate your quotation process and improve pricing decisions, then produce responsible workflow designs and deployment specifications ready for build.', positioning = 'AI for sales and quotation, scoped to the use cases your data supports and specified for responsible deployment.' WHERE variant_id = 45;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (45, 'AI use-case scoring for pricing optimisation, quote-to-win prediction, and configuration assistance', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (45, 'Data readiness assessment confirming which use cases your transaction and product data actually supports', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (45, 'Responsible AI workflow designs with override controls, pricing authority boundaries, and audit trail requirements', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (45, 'Technical specifications for model integration with your CPQ and CRM platforms', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (45, 'sales-ops');
INSERT INTO product_tags (variant_id, tag_name) VALUES (45, 'ai-design');
INSERT INTO product_tags (variant_id, tag_name) VALUES (45, 'pricing-control');
INSERT INTO product_tags (variant_id, tag_name) VALUES (45, 'responsible-ai');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (45, 'Week 1: AI opportunity identification, transaction data assessment, and use-case shortlisting', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (45, 'Weeks 2-3: Use-case validation, responsible design, and workflow specification', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (45, 'Week 4: Technical specifications, governance framework, and stakeholder sign-off', 2);

-- Smart Sales & Quotation (High-Impact) - Deploy (variant 46)
UPDATE product_variants SET positioning = 'Your CPQ platform live and tested, with your sales team confident in it before the first real quote goes out.' WHERE id = 46;
UPDATE product_content SET description = 'Configure, integrate, test, and launch your CPQ and sales quotation platform with structured quality assurance and a handover that leaves your sales team fully equipped to operate independently.', positioning = 'Your CPQ platform live and tested, with your sales team confident in it before the first real quote goes out.' WHERE variant_id = 46;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (46, 'CPQ platform configuration built to your approved pricing rules and workflow specifications', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (46, 'Integration delivery connecting CPQ to CRM, ERP, and contract systems, with documented test evidence', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (46, 'End-to-end quotation workflow testing using representative sales scenarios from your actual product catalogue', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (46, 'Sales team training and a go-live readiness assessment before controlled launch', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (46, 'sales-ops');
INSERT INTO product_tags (variant_id, tag_name) VALUES (46, 'cpq');
INSERT INTO product_tags (variant_id, tag_name) VALUES (46, 'pricing-control');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (46, 'Weeks 1-4: CPQ configuration, pricing rule implementation, and integration build', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (46, 'Weeks 5-8: System integration testing, pricing accuracy validation, and defect resolution', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (46, 'Weeks 9-11: User acceptance testing, sales team training, and launch readiness sign-off', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (46, 'Week 12: Controlled launch and post-go-live support handover', 3);

-- Smart Sales & Quotation (High-Impact) - AI Deploy (variant 47)
UPDATE product_variants SET positioning = 'AI-assisted pricing and sales recommendations in production, governed correctly from the first quote.' WHERE id = 47;
UPDATE product_content SET description = 'Deploy validated AI capabilities into your CPQ and sales platform with production monitoring, commercial authority controls, and a structured handover that gives your sales operations team full ownership.', positioning = 'AI-assisted pricing and sales recommendations in production, governed correctly from the first quote.' WHERE variant_id = 47;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (47, 'Production deployment of AI models integrated into your CPQ and CRM workflows', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (47, 'Commercial authority controls and override logic validated before any model goes live', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (47, 'AI performance dashboards covering pricing accuracy, recommendation acceptance rates, and business impact', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (47, 'Sales team training and AI operations runbook so your team manages the capability confidently', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (47, 'sales-ops');
INSERT INTO product_tags (variant_id, tag_name) VALUES (47, 'ai-deploy');
INSERT INTO product_tags (variant_id, tag_name) VALUES (47, 'pricing-control');
INSERT INTO product_tags (variant_id, tag_name) VALUES (47, 'responsible-ai');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (47, 'Weeks 1-4: Infrastructure provisioning, model integration, and staging environment validation', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (47, 'Weeks 5-8: Staged production deployment, commercial control verification, and monitoring setup', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (47, 'Weeks 9-11: Performance validation, sales team training, and handover preparation', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (47, 'Week 12: Production sign-off and operational handover', 3);

-- Smart Sales & Quotation (High-Impact) - Managed (variant 48)
UPDATE product_variants SET positioning = 'Your quotation platform continuously maintained so pricing stays accurate and sales teams can generate quotes without delay.' WHERE id = 48;
UPDATE product_content SET description = 'Keep your CPQ platform and quotation operations running at full commercial accuracy, with monthly health checks, pricing rule maintenance, and a team accountable to your agreed service levels.', positioning = 'Your quotation platform continuously maintained so pricing stays accurate and sales teams can generate quotes without delay.' WHERE variant_id = 48;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (48, 'Monthly CPQ platform health checks covering pricing rule accuracy, workflow reliability, and integration uptime', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (48, 'Pricing rule and product catalogue maintenance as your commercial offer evolves', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (48, 'Release and update management, with pricing accuracy testing before any changes reach production', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (48, 'Monthly performance report covering quote cycle times, approval volumes, and pricing exception rates', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (48, 'sales-ops');
INSERT INTO product_tags (variant_id, tag_name) VALUES (48, 'managed-service');
INSERT INTO product_tags (variant_id, tag_name) VALUES (48, 'cpq');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (48, 'Month 1: Service baseline, pricing rule audit, and SLA framework agreement', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (48, 'Months 2-3: First maintenance cycle, reporting cadence established', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (48, 'Ongoing: Monthly health checks, pricing updates, and quarterly commercial alignment reviews', 2);

-- Customer Support & Success (High-Impact) - Assess (variant 49)
UPDATE product_variants SET positioning = 'Understand exactly where your support operation is losing customers and agent productivity before investing in change.' WHERE id = 49;
UPDATE product_content SET description = 'Audit your customer support and success operations to identify where resolution times are lagging, where customer effort is highest, and where your current tooling is creating agent and customer friction.', positioning = 'Understand exactly where your support operation is losing customers and agent productivity before investing in change.' WHERE variant_id = 49;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (49, 'Support channel and case management audit covering resolution times, escalation rates, and first-contact resolution', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (49, 'Customer effort assessment identifying where process or tooling is creating unnecessary friction for customers', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (49, 'Agent productivity review covering handle times, knowledge access, and tool-switching burden', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (49, 'Prioritised improvement roadmap with effort scores and quick wins your leadership can act on', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (49, 'customer-support');
INSERT INTO product_tags (variant_id, tag_name) VALUES (49, 'cx-operations');
INSERT INTO product_tags (variant_id, tag_name) VALUES (49, 'service-desk');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (49, 'Days 1-2: Support data review, case management analysis, and stakeholder interviews with service leaders and agents', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (49, 'Days 3-4: Effort assessment, productivity gap analysis, and roadmap sequencing', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (49, 'Day 5: Findings presentation and prioritised improvement roadmap handover', 2);
UPDATE products SET short_description = 'Audit your customer support and success operations to identify where resolution times are lagging, where customer effort is highest, and where your current tooling is creating agent and customer friction.', audience = 'Customer Service Directors, Head of Customer Success, and CX Operations leaders', industry_relevance = 'Organisations operating structured customer support functions across digital and voice channels, including aftersales, account success, and technical support', business_impact = 'Identifies the specific resolution, effort, and productivity gaps reducing customer retention and support efficiency, and prioritises the changes that will lower churn and reduce cost to serve.' WHERE id = (SELECT product_id FROM product_variants WHERE id = 49);

-- Customer Support & Success (High-Impact) - Design (variant 50)
UPDATE product_variants SET positioning = 'A support operations design that gives your agents the right information at the right moment and your customers a resolution without unnecessary effort.' WHERE id = 50;
UPDATE product_content SET description = 'Design the support workflows, knowledge architecture, and channel strategy your team needs to resolve cases faster, reduce escalations, and deliver a consistent customer experience at scale.', positioning = 'A support operations design that gives your agents the right information at the right moment and your customers a resolution without unnecessary effort.' WHERE variant_id = 50;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (50, 'Support journey design covering all customer channels with escalation logic and handoff specifications', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (50, 'Knowledge management architecture designed for agent accuracy, self-service deflection, and maintenance efficiency', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (50, 'Case routing and priority logic tailored to your SLA tiers, customer segments, and agent skill sets', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (50, 'Agent experience design covering workspace layout, knowledge access patterns, and after-call workflow', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (50, 'customer-support');
INSERT INTO product_tags (variant_id, tag_name) VALUES (50, 'cx-operations');
INSERT INTO product_tags (variant_id, tag_name) VALUES (50, 'service-desk');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (50, 'Week 1: Discovery workshops with service leaders, agents, and CX stakeholders', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (50, 'Weeks 2-3: Journey design, knowledge architecture, routing logic, and agent experience specification', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (50, 'Week 4: Prototype review, adoption planning, and design sign-off', 2);

-- Customer Support & Success (High-Impact) - AI Design (variant 51)
UPDATE product_variants SET positioning = 'AI for customer support, scoped to use cases your data and platform support, with guardrails that protect customers and agents.' WHERE id = 51;
UPDATE product_content SET description = 'Validate which AI capabilities can genuinely improve resolution speed and customer effort in your support operation, then produce responsible workflow designs and deployment specifications ready for build.', positioning = 'AI for customer support, scoped to use cases your data and platform support, with guardrails that protect customers and agents.' WHERE variant_id = 51;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (51, 'AI use-case scoring for intelligent triage, agent assist, self-service automation, and sentiment monitoring', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (51, 'Data readiness assessment confirming which use cases your case history and knowledge data actually supports', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (51, 'Responsible AI workflow designs with human escalation paths, bias controls, and transparency requirements', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (51, 'Technical specifications for integration with your support platform, knowledge base, and CRM', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (51, 'customer-support');
INSERT INTO product_tags (variant_id, tag_name) VALUES (51, 'ai-design');
INSERT INTO product_tags (variant_id, tag_name) VALUES (51, 'cx-operations');
INSERT INTO product_tags (variant_id, tag_name) VALUES (51, 'responsible-ai');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (51, 'Week 1: AI opportunity identification, case data review, and use-case shortlisting', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (51, 'Weeks 2-3: Use-case validation, responsible design, and workflow specification', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (51, 'Week 4: Technical specifications, governance framework, and stakeholder sign-off', 2);

-- Customer Support & Success (High-Impact) - Deploy (variant 52)
UPDATE product_variants SET positioning = 'Support capabilities delivered and tested before your team takes a single live case through the new system.' WHERE id = 52;
UPDATE product_content SET description = 'Configure, integrate, test, and launch your customer support platform improvements with structured quality assurance and a controlled handover that leaves your agents and service leaders fully operational.', positioning = 'Support capabilities delivered and tested before your team takes a single live case through the new system.' WHERE variant_id = 52;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (52, 'Support platform configuration built to approved specifications covering routing, queues, and case management', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (52, 'Knowledge base build and integration with your support platform, validated for accuracy and agent accessibility', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (52, 'Integration delivery connecting support, CRM, and operational systems, with documented test evidence', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (52, 'Agent user acceptance testing and training completed before go-live, with a readiness sign-off process', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (52, 'customer-support');
INSERT INTO product_tags (variant_id, tag_name) VALUES (52, 'cx-operations');
INSERT INTO product_tags (variant_id, tag_name) VALUES (52, 'service-desk');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (52, 'Weeks 1-4: Platform configuration, knowledge base build, and integration delivery', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (52, 'Weeks 5-8: System integration testing, routing validation, and defect resolution', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (52, 'Weeks 9-11: Agent user acceptance testing, training, and go-live readiness assessment', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (52, 'Week 12: Controlled launch and post-go-live support handover', 3);

-- Customer Support & Success (High-Impact) - AI Deploy (variant 53)
UPDATE product_variants SET positioning = 'AI-assisted support in production, with the guardrails and monitoring your team needs to operate it confidently.' WHERE id = 53;
UPDATE product_content SET description = 'Deploy validated AI capabilities into your customer support platform with production monitoring, human escalation controls, and a structured handover so your service operations team can manage the capability independently.', positioning = 'AI-assisted support in production, with the guardrails and monitoring your team needs to operate it confidently.' WHERE variant_id = 53;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (53, 'Production deployment of AI models integrated into your support platform workflows and knowledge systems', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (53, 'Human escalation controls validated to ensure customers can always reach a live agent when AI cannot resolve their need', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (53, 'AI performance dashboards covering resolution rates, escalation triggers, accuracy metrics, and customer satisfaction signals', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (53, 'Service team training and AI operations runbook so your agents and team leads understand and can manage the capability', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (53, 'customer-support');
INSERT INTO product_tags (variant_id, tag_name) VALUES (53, 'ai-deploy');
INSERT INTO product_tags (variant_id, tag_name) VALUES (53, 'cx-operations');
INSERT INTO product_tags (variant_id, tag_name) VALUES (53, 'responsible-ai');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (53, 'Weeks 1-4: Infrastructure provisioning, AI model integration, and staging environment validation', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (53, 'Weeks 5-8: Staged production deployment, escalation control verification, and monitoring configuration', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (53, 'Weeks 9-11: Performance validation, agent and team lead training, and handover preparation', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (53, 'Week 12: Production sign-off and operational handover', 3);

-- Customer Support & Success (High-Impact) - Managed (variant 54)
UPDATE product_variants SET positioning = 'Your support operation continuously maintained and improved, so your team focuses on customers, not platform issues.' WHERE id = 54;
UPDATE product_content SET description = 'Keep your customer support and success platform running at the service levels your customers and agents depend on, with continuous monitoring, proactive optimisation, and regular performance reporting.', positioning = 'Your support operation continuously maintained and improved, so your team focuses on customers, not platform issues.' WHERE variant_id = 54;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (54, 'Monthly support platform health checks covering routing accuracy, SLA compliance, and integration reliability', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (54, 'Case management and knowledge base optimisation based on resolution data and agent feedback', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (54, 'Release and update management, with regression testing before any changes reach the production environment', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (54, 'Monthly performance report covering resolution rates, customer satisfaction scores, and a forward optimisation plan', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (54, 'customer-support');
INSERT INTO product_tags (variant_id, tag_name) VALUES (54, 'managed-service');
INSERT INTO product_tags (variant_id, tag_name) VALUES (54, 'cx-operations');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (54, 'Month 1: Service baseline, monitoring configuration, and SLA framework agreement', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (54, 'Months 2-3: First optimisation cycle and monthly reporting cadence established', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (54, 'Ongoing: Monthly health checks, knowledge maintenance, and quarterly service reviews', 2);

-- Digital Workplace (High-Impact) - Assess (variant 55)
UPDATE product_variants SET positioning = 'Understand where your digital workplace is losing productivity, then fix the highest-impact gaps first.' WHERE id = 55;
UPDATE product_content SET description = 'A focused assessment of your collaboration tools, intranet, and employee-facing platforms that surfaces the gaps stopping people from finding information, communicating, and getting work done. You leave with a maturity rating and a prioritised improvement roadmap.', positioning = 'Understand where your digital workplace is losing productivity, then fix the highest-impact gaps first.' WHERE variant_id = 55;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (55, 'A scored baseline revealing exactly which collaboration and knowledge-sharing gaps cost the most productivity, so your investment targets the highest-return improvements', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (55, 'Gap analysis mapped to specific tools: Microsoft 365, Teams, SharePoint, or equivalents', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (55, 'Interview-led findings from IT, HR, and end-user perspectives to surface adoption blockers', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (55, 'Prioritised roadmap with effort estimates so leadership can sequence investment confidently', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (55, 'digital-workplace');
INSERT INTO product_tags (variant_id, tag_name) VALUES (55, 'employee-experience');
INSERT INTO product_tags (variant_id, tag_name) VALUES (55, 'microsoft-365');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (55, 'Days 1-2: Stakeholder interviews, tool inventory, and current-state data gathering', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (55, 'Days 3-4: Maturity scoring, gap analysis, and roadmap drafting', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (55, 'Day 5: Findings playback, roadmap review, and handover pack', 2);
UPDATE products SET short_description = 'A focused assessment of your collaboration tools, intranet, and employee-facing platforms that surfaces the gaps stopping people from finding information, communicating, and getting work done. You leave with a maturity rating and a prioritised improvement roadmap.', audience = 'HR Directors, IT Managers, and Internal Communications leaders', industry_relevance = 'Any organisation with 100 or more knowledge workers, particularly those mid-migration to Microsoft 365 or managing hybrid work arrangements', business_impact = 'Identifies the collaboration and knowledge-access gaps that cut into productive hours, giving leadership a clear, costed view of where to act first.' WHERE id = (SELECT product_id FROM product_variants WHERE id = 55);

-- Digital Workplace (High-Impact) - Design (variant 56)
UPDATE product_variants SET positioning = 'Turn workplace collaboration goals into a blueprint your IT team can build and your employees will actually use.' WHERE id = 56;
UPDATE product_content SET description = 'Turn your digital workplace goals into user-centred wireframes, information architecture, and build-ready specifications covering Microsoft 365 configuration, intranet structure, and adoption planning, delivered across a focused four-week design engagement.', positioning = 'Turn workplace collaboration goals into a blueprint your IT team can build and your employees will actually use.' WHERE variant_id = 56;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (56, 'User journey mapping for key workplace tasks: finding information, collaborating on documents, and onboarding', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (56, 'Information architecture and SharePoint site structure designed for your organisation''s size and working patterns', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (56, 'Microsoft 365 configuration specifications with integration points for HR, ITSM, and communication channels', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (56, 'Adoption and change plan with champions model, training outline, and launch communications', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (56, 'digital-workplace');
INSERT INTO product_tags (variant_id, tag_name) VALUES (56, 'sharepoint');
INSERT INTO product_tags (variant_id, tag_name) VALUES (56, 'intranet-design');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (56, 'Week 1: Discovery workshops, persona definition, and current-state mapping', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (56, 'Week 2: Information architecture, navigation, and wireframe drafting', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (56, 'Week 3: Configuration specifications, integrations design, and adoption planning', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (56, 'Week 4: Design review, stakeholder sign-off, and build-ready handover', 3);

-- Digital Workplace (High-Impact) - AI Design (variant 57)
UPDATE product_variants SET positioning = 'Find the AI use cases that will genuinely improve employee productivity, and design them safely before spending on build.' WHERE id = 57;
UPDATE product_content SET description = 'Find the AI use cases that will genuinely reduce friction in your digital workplace, validate each for feasibility and responsibility, and produce governed workflow specifications ready for build, all within a four-week AI design engagement.', positioning = 'Find the AI use cases that will genuinely improve employee productivity, and design them safely before spending on build.' WHERE variant_id = 57;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (57, 'Use-case discovery and scoring against impact, data readiness, and responsible AI criteria for workplace scenarios', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (57, 'Copilot for Microsoft 365 readiness evaluation covering data governance, sensitivity labels, and licence posture', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (57, 'Responsible AI workflow design with human-in-the-loop checkpoints, override controls, and audit logging', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (57, 'Deployment specification including prompt engineering guidance, integration requirements, and rollout sequencing', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (57, 'digital-workplace');
INSERT INTO product_tags (variant_id, tag_name) VALUES (57, 'copilot');
INSERT INTO product_tags (variant_id, tag_name) VALUES (57, 'responsible-ai');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (57, 'Week 1: AI use-case discovery workshops and current-data landscape review', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (57, 'Week 2: Use-case scoring, Copilot readiness evaluation, and responsible-AI framing', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (57, 'Week 3: Workflow design, guardrails specification, and integration mapping', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (57, 'Week 4: Specification review, risk sign-off, and build-ready handover', 3);

-- Digital Workplace (High-Impact) - Deploy (variant 58)
UPDATE product_variants SET positioning = 'Get your digital workplace built, tested, and adopted, not just switched on.' WHERE id = 58;
UPDATE product_content SET description = 'Get your Microsoft 365 digital workplace environment built, integrated, and adopted, covering SharePoint intranet, Teams governance, and the structured adoption programme your employees need to shift their working habits, delivered across twelve weeks.', positioning = 'Get your digital workplace built, tested, and adopted, not just switched on.' WHERE variant_id = 58;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (58, 'SharePoint intranet built to the approved information architecture with page templates, navigation, and content migration', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (58, 'Microsoft Teams governance configuration covering naming policies, channel templates, guest access, and lifecycle management', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (58, 'Integration setup for HRIS, ITSM, and communication tools so the workplace connects to the systems employees rely on', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (58, 'Structured adoption programme: champion training, launch comms, and 30-day usage tracking to confirm behaviour change', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (58, 'digital-workplace');
INSERT INTO product_tags (variant_id, tag_name) VALUES (58, 'sharepoint');
INSERT INTO product_tags (variant_id, tag_name) VALUES (58, 'microsoft-365-deployment');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (58, 'Weeks 1-2: Environment setup, governance configuration, and sprint planning', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (58, 'Weeks 3-7: SharePoint build, Teams configuration, and integration development', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (58, 'Weeks 8-10: User acceptance testing, content migration, and champion training', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (58, 'Weeks 11-12: Controlled launch, hypercare support, and handover to your operations team', 3);

-- Digital Workplace (High-Impact) - AI Deploy (variant 59)
UPDATE product_variants SET positioning = 'Put AI to work in your digital workplace with governance, monitoring, and adoption built in from the start.' WHERE id = 59;
UPDATE product_content SET description = 'Put AI to work across your digital workplace with governance, monitoring, and adoption built in from the start, including Microsoft Copilot, automated knowledge surfacing, and AI-assisted communication tools deployed over twelve weeks.', positioning = 'Put AI to work in your digital workplace with governance, monitoring, and adoption built in from the start.' WHERE variant_id = 59;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (59, 'Copilot for Microsoft 365 deployment with data sensitivity controls, usage policies, and employee guidance materials', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (59, 'AI-powered search and knowledge surfacing configured to return accurate, permission-aware results', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (59, 'Automated workflows for routine employee requests: IT tickets, HR queries, and meeting summaries', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (59, 'Monitoring dashboard tracking AI usage, prompt quality, override rates, and adoption by team', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (59, 'digital-workplace');
INSERT INTO product_tags (variant_id, tag_name) VALUES (59, 'copilot-deployment');
INSERT INTO product_tags (variant_id, tag_name) VALUES (59, 'ai-governance');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (59, 'Weeks 1-2: Governance configuration, sensitivity labelling review, and pilot cohort selection', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (59, 'Weeks 3-6: Copilot rollout to pilot cohort with usage monitoring and feedback capture', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (59, 'Weeks 7-10: AI search, automated workflows, and broader rollout to remaining users', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (59, 'Weeks 11-12: Performance review, monitoring handover, and operational sign-off', 3);

-- Digital Workplace (High-Impact) - Managed (variant 60)
UPDATE product_variants SET positioning = 'Keep your digital workplace performing, adopted, and fit for purpose without loading internal IT with platform management.' WHERE id = 60;
UPDATE product_content SET description = 'Ongoing managed operations for your Microsoft 365 digital workplace environment, covering platform health monitoring, licence and configuration governance, adoption reporting, and monthly optimisation to keep the environment aligned to how your organisation works.', positioning = 'Keep your digital workplace performing, adopted, and fit for purpose without loading internal IT with platform management.' WHERE variant_id = 60;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (60, 'Monthly Microsoft 365 health reports covering Teams usage, SharePoint performance, and licence consumption', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (60, 'Configuration drift detection and correction before issues affect employee productivity', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (60, 'Adoption analytics reviewed monthly with recommended actions to lift engagement in underused tools', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (60, 'Coordinated rollout of Microsoft feature updates so new capabilities land without disrupting working patterns', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (60, 'digital-workplace');
INSERT INTO product_tags (variant_id, tag_name) VALUES (60, 'managed-service');
INSERT INTO product_tags (variant_id, tag_name) VALUES (60, 'microsoft-365-governance');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (60, 'Month 1: Baseline health audit, SLA agreement, and monitoring tool configuration', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (60, 'Months 2-3: First reporting cycle, adoption review, and backlog prioritisation', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (60, 'Ongoing: Monthly health reports, quarterly roadmap reviews, and annual licence optimisation', 2);

-- Business Process Automation (High-Impact) - Assess (variant 61)
UPDATE product_variants SET positioning = 'Find the manual processes that cost the most time, then get a clear plan to automate the right ones first.' WHERE id = 61;
UPDATE product_content SET description = 'Find out which manual processes cost the most time and which are genuinely ready to automate, with a prioritised roadmap and an honest view of the tooling and data readiness required, delivered within one week.', positioning = 'Find the manual processes that cost the most time, then get a clear plan to automate the right ones first.' WHERE variant_id = 61;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (61, 'A prioritised map of the manual, rules-based work costing your teams the most time and error rate, ranked by automation ROI so effort goes to the highest-return processes first', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (61, 'Automation potential scoring by volume, error rate, complexity, and data availability', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (61, 'Tool fit analysis covering RPA, workflow automation, and API integration options relative to your existing stack', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (61, 'Prioritised automation roadmap with effort, cost, and expected time-saving estimates for each candidate', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (61, 'process-automation');
INSERT INTO product_tags (variant_id, tag_name) VALUES (61, 'rpa');
INSERT INTO product_tags (variant_id, tag_name) VALUES (61, 'workflow-efficiency');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (61, 'Days 1-2: Process discovery workshops and document/system review', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (61, 'Days 3-4: Scoring, tool-fit analysis, and roadmap drafting', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (61, 'Day 5: Findings playback with prioritised roadmap and next-step recommendations', 2);
UPDATE products SET short_description = 'Find out which manual processes cost the most time and which are genuinely ready to automate, with a prioritised roadmap and an honest view of the tooling and data readiness required, delivered within one week.', audience = 'COOs, Operations Directors, and Transformation leads', industry_relevance = 'Organisations in financial services, professional services, logistics, healthcare administration, or any sector with high volumes of repeatable back-office work', business_impact = 'Gives leadership a costed, sequenced view of where automation saves the most time and reduces the rework and manual error that erode margin in back-office operations.' WHERE id = (SELECT product_id FROM product_variants WHERE id = 61);

-- Business Process Automation (High-Impact) - Design (variant 62)
UPDATE product_variants SET positioning = 'Design your automations properly before building them: fewer rework cycles, faster go-live, and workflows that hold up in production.' WHERE id = 62;
UPDATE product_content SET description = 'Eliminate the ambiguity that causes automation rework: get detailed process specifications, tool configurations, and test plans your delivery team can build and launch each workflow against, completed across a focused four-week design engagement.', positioning = 'Design your automations properly before building them: fewer rework cycles, faster go-live, and workflows that hold up in production.' WHERE variant_id = 62;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (62, 'As-is and to-be process maps for each priority workflow, showing every step, decision point, and exception path', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (62, 'Tool configuration specifications for Power Automate, UiPath, or your chosen platform, with field mappings and error handling defined', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (62, 'Integration design covering API connections, data transformations, and authentication requirements for each workflow', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (62, 'Test plan with acceptance criteria, edge-case scenarios, and sign-off checklist your QA team can execute against', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (62, 'process-automation');
INSERT INTO product_tags (variant_id, tag_name) VALUES (62, 'workflow-design');
INSERT INTO product_tags (variant_id, tag_name) VALUES (62, 'integration-architecture');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (62, 'Week 1: Process deep-dives, exception mapping, and tool scoping', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (62, 'Week 2: To-be process design and integration architecture', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (62, 'Week 3: Configuration specifications, field mapping, and test plan drafting', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (62, 'Week 4: Design review, stakeholder sign-off, and build-ready handover', 3);

-- Business Process Automation (High-Impact) - AI Design (variant 63)
UPDATE product_variants SET positioning = 'Design the AI layer that takes your process automation from rules-based to genuinely intelligent, safely and with governance built in.' WHERE id = 63;
UPDATE product_content SET description = 'Identify where intelligent automation, including document processing, decision support, and predictive routing, can extend your process automation beyond what rules-based tools handle, with responsible design and deployment specifications for each use case, ready after four weeks.', positioning = 'Design the AI layer that takes your process automation from rules-based to genuinely intelligent, safely and with governance built in.' WHERE variant_id = 63;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (63, 'AI use-case identification for processes where rules-based automation reaches its limits: unstructured documents, judgement-intensive approvals, and variable inputs', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (63, 'Feasibility scoring across data quality, model availability, and responsible AI criteria for each candidate', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (63, 'Intelligent document processing design for invoices, contracts, forms, and other high-volume unstructured inputs', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (63, 'Governance specification covering confidence thresholds, human-review triggers, audit logging, and model retraining schedules', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (63, 'intelligent-automation');
INSERT INTO product_tags (variant_id, tag_name) VALUES (63, 'document-processing');
INSERT INTO product_tags (variant_id, tag_name) VALUES (63, 'ai-workflow-design');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (63, 'Week 1: AI use-case workshops, data landscape review, and feasibility scoping', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (63, 'Week 2: Use-case scoring and responsible AI framing for prioritised candidates', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (63, 'Week 3: Workflow design, model selection, and governance specification', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (63, 'Week 4: Specification review, risk assessment sign-off, and handover', 3);

-- Business Process Automation (High-Impact) - Deploy (variant 64)
UPDATE product_variants SET positioning = 'Get your automation workflows built, tested, and running in production, with the documentation and training your team needs to own them.' WHERE id = 64;
UPDATE product_content SET description = 'Get your automation workflows built, tested, and running in production, covering RPA bots, low-code automations, and API integrations, with a documented handover including runbooks and administrator sign-off to the teams who will maintain them, delivered across twelve weeks.', positioning = 'Get your automation workflows built, tested, and running in production, with the documentation and training your team needs to own them.' WHERE variant_id = 64;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (64, 'Automation build for prioritised workflows across your chosen platform: Power Automate, UiPath, or equivalent', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (64, 'API integration development connecting automation to ERP, CRM, HRIS, and other source systems', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (64, 'End-to-end testing with business stakeholders covering happy paths, exceptions, and volume stress scenarios', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (64, 'Operations handover including runbooks, monitoring setup, and administrator training for your internal team', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (64, 'process-automation');
INSERT INTO product_tags (variant_id, tag_name) VALUES (64, 'rpa-deployment');
INSERT INTO product_tags (variant_id, tag_name) VALUES (64, 'workflow-build');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (64, 'Weeks 1-2: Environment setup, access configuration, and sprint planning with your team', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (64, 'Weeks 3-8: Automation builds and integration development in fortnightly sprint cycles', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (64, 'Weeks 9-10: User acceptance testing, exception handling refinement, and business sign-off', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (64, 'Weeks 11-12: Controlled launch, hypercare support, and handover with runbooks and training', 3);

-- Business Process Automation (High-Impact) - AI Deploy (variant 65)
UPDATE product_variants SET positioning = 'Put governed AI automation into production: document intelligence, decision support, and predictive routing, live and monitored.' WHERE id = 65;
UPDATE product_content SET description = 'Put governed AI automation into production, including intelligent document processing, AI-driven decision routing, and predictive workflow triggers, with monitoring active from day one and a pilot-first approach that contains risk before full scale.', positioning = 'Put governed AI automation into production: document intelligence, decision support, and predictive routing, live and monitored.' WHERE variant_id = 65;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (65, 'Intelligent document processing deployment for invoices, purchase orders, contracts, or forms, with accuracy baselines and human-review thresholds set', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (65, 'AI decision-routing models integrated into your existing workflow orchestration so exceptions are handled consistently', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (65, 'Confidence-score monitoring configured to alert when model accuracy degrades below agreed thresholds', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (65, 'Structured pilot-to-production rollout with a defined cohort so risk is contained before full-scale automation runs', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (65, 'intelligent-automation');
INSERT INTO product_tags (variant_id, tag_name) VALUES (65, 'document-intelligence');
INSERT INTO product_tags (variant_id, tag_name) VALUES (65, 'ai-operations');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (65, 'Weeks 1-3: Governance setup, model configuration, and pilot environment preparation', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (65, 'Weeks 4-7: Pilot deployment with monitoring, accuracy tracking, and threshold calibration', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (65, 'Weeks 8-10: Production rollout, integration testing, and exception-handling validation', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (65, 'Weeks 11-12: Performance baseline review, monitoring handover, and operational sign-off', 3);

-- Business Process Automation (High-Impact) - Managed (variant 66)
UPDATE product_variants SET positioning = 'Keep your automation estate healthy and producing savings, without your team spending time on bot maintenance and exception triaging.' WHERE id = 66;
UPDATE product_content SET description = 'Ongoing managed operations for your business process automation environment, covering bot health monitoring, exception queue management, platform updates, and monthly performance reporting so your automations keep delivering the savings they were built to produce.', positioning = 'Keep your automation estate healthy and producing savings, without your team spending time on bot maintenance and exception triaging.' WHERE variant_id = 66;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (66, 'Daily bot health monitoring with alerting for failures, queue backlogs, and throughput drops before they become business issues', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (66, 'Exception queue management: first-line triage and resolution for automation failures so manual fallback is minimised', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (66, 'Monthly performance report covering hours saved, exception rates, and SLA adherence across all automations', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (66, 'Planned change management for platform updates, system changes, and new process variations that affect existing bots', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (66, 'process-automation');
INSERT INTO product_tags (variant_id, tag_name) VALUES (66, 'managed-service');
INSERT INTO product_tags (variant_id, tag_name) VALUES (66, 'bot-operations');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (66, 'Month 1: Automation estate handover, monitoring tool setup, and SLA baseline agreement', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (66, 'Months 2-3: First full monitoring cycle, exception reporting, and backlog prioritisation', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (66, 'Ongoing: Monthly performance reports, quarterly optimisation reviews, and annual capacity planning', 2);

-- Specialised Operations (High-Impact) - Assess (variant 73)
UPDATE product_variants SET positioning = 'Walk away with a clear picture of where your specialist operation is haemorrhaging time and risk, and which fixes will pay back fastest.' WHERE id = 73;
UPDATE product_content SET description = 'Most specialist operations work -- barely. Facilities management teams run on spreadsheets and tribal knowledge. Legal ops functions manage matter intake through email. Field service scheduling lives in a supervisor''s head. This one-week assessment maps the workflows, bottlenecks, and tech debt unique to your operational function and tells you where you are losing money, creating compliance risk, and building fragility into something the business depends on.', positioning = 'Walk away with a clear picture of where your specialist operation is haemorrhaging time and risk, and which fixes will pay back fastest.' WHERE variant_id = 73;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (73, 'A domain-specific map of every bottleneck in your operational function -- work order flow, matter lifecycle, inspection cycle, or equivalent -- showing exactly which manual steps and approval delays cost the most throughput and compliance exposure, so you know precisely what to fix first', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (73, 'Bottleneck scoring identifying where throughput is constrained by manual steps, approval delays, or system gaps in your specific function', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (73, 'Tech debt identification across the tools and workarounds your team has built up over time, ranked by operational and compliance risk', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (73, 'Risk exposure assessment flagging the gaps most likely to cause audit failure, safety incidents, or regulatory non-compliance in your domain', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (73, 'specialised-operations');
INSERT INTO product_tags (variant_id, tag_name) VALUES (73, 'operational-assessment');
INSERT INTO product_tags (variant_id, tag_name) VALUES (73, 'domain-operations');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (73, 'Days 1-2: Stakeholder interviews with operational leads and front-line staff, process walkthroughs, and system and tooling review', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (73, 'Days 3-4: Bottleneck scoring, tech debt mapping, risk exposure assessment, and improvement roadmap drafting', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (73, 'Day 5: Findings playback with the DigitalQatalyst team and prioritised roadmap handover', 2);
UPDATE products SET short_description = 'Most specialist operations work -- barely. Facilities management teams run on spreadsheets and tribal knowledge. Legal ops functions manage matter intake through email. Field service scheduling lives in a supervisor''s head. This one-week assessment maps the workflows, bottlenecks, and tech debt unique to your operational function and tells you where you are losing money, creating compliance risk, and building fragility into something the business depends on.', audience = 'Business Unit Directors, Domain Operations Managers, and functional leads in specialist operational roles', industry_relevance = 'Organisations with domain-specific operational functions where generic enterprise platforms do not fully fit, including field service, quality management, facilities, and supply chain execution', business_impact = 'Surfaces the specific process and tooling gaps that limit throughput, control, and scalability in specialist functions, giving leadership a costed improvement plan to act on.' WHERE id = (SELECT product_id FROM product_variants WHERE id = 73);

-- Specialised Operations (High-Impact) - Design (variant 74)
UPDATE product_variants SET positioning = 'Get build-ready process redesigns and system specifications that solve the problems your assessment identified, not a generic operating model document.' WHERE id = 74;
UPDATE product_content SET description = 'Your assessment identified the highest-priority problems. Now you need a blueprint that actually fixes them -- process redesigns your operational staff will recognise, system configurations your delivery team can build, and integration specifications that close the gaps between your operational platform and the ERP, scheduling, and reporting tools it needs to talk to. This four-week design engagement produces that blueprint, built for your specific domain.', positioning = 'Get build-ready process redesigns and system specifications that solve the problems your assessment identified, not a generic operating model document.' WHERE variant_id = 74;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (74, 'Process redesign for your highest-priority gaps: work order management, matter lifecycle, inspection workflow, or the specific flows where your function is losing the most time', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (74, 'System configuration specification covering the data model, screen layouts, automation rules, and approval logic your operational platform needs to support the redesigned processes', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (74, 'Integration design producing API contracts and data transformation rules for the connections between your operational system, ERP, scheduling, and reporting tools', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (74, 'Adoption and change plan specifying the training, communication, and cut-over activities your team needs to shift to the new workflows without disrupting live operations', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (74, 'specialised-operations');
INSERT INTO product_tags (variant_id, tag_name) VALUES (74, 'operational-design');
INSERT INTO product_tags (variant_id, tag_name) VALUES (74, 'workflow-specification');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (74, 'Week 1: Domain discovery workshops with front-line staff and operational leads, current-state mapping, and problem prioritisation', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (74, 'Week 2: To-be process redesign for the highest-priority workflows, validated with operational stakeholders', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (74, 'Week 3: System configuration specification, integration architecture, and data model design', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (74, 'Week 4: Design review, stakeholder sign-off, and build-ready handover pack', 3);

-- Specialised Operations (High-Impact) - AI Design (variant 75)
UPDATE product_variants SET positioning = 'Identify where AI genuinely improves specialist operational performance, and design it responsibly before investing in build.' WHERE id = 75;
UPDATE product_content SET description = 'Identify where AI can genuinely improve your facilities management, field service, quality, or other specialist operational workflows, from predictive scheduling and anomaly detection to AI-assisted decision support, with feasibility validation and responsible design specifications for each use case.', positioning = 'Identify where AI genuinely improves specialist operational performance, and design it responsibly before investing in build.' WHERE variant_id = 75;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (75, 'AI use-case discovery focused on domain-specific opportunities: predictive maintenance, intelligent scheduling, quality anomaly detection, and case triage', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (75, 'Data readiness assessment evaluating whether your operational data supports the candidate AI models', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (75, 'Responsible AI workflow design with domain-specific risk considerations, override mechanisms, and auditability requirements', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (75, 'Deployment specification covering model selection, integration points, confidence thresholds, and human-review rules for each validated use case', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (75, 'specialised-operations');
INSERT INTO product_tags (variant_id, tag_name) VALUES (75, 'predictive-operations');
INSERT INTO product_tags (variant_id, tag_name) VALUES (75, 'ai-workflow-design');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (75, 'Week 1: AI opportunity workshops, data landscape review, and domain-specific risk framing', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (75, 'Week 2: Use-case scoring and responsible AI assessment for prioritised candidates', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (75, 'Week 3: Workflow design, integration mapping, and governance specification', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (75, 'Week 4: Specification review, risk sign-off, and build-ready handover', 3);

-- Specialised Operations (High-Impact) - Deploy (variant 76)
UPDATE product_variants SET positioning = 'Get your specialist operational system configured, connected, and live, with the training and documentation to own it after handover.' WHERE id = 76;
UPDATE product_content SET description = 'Get your specialist operational system, whether for field service, facilities management, quality management, or case handling, configured, integrated, tested, and live in twelve weeks, with week-by-week knowledge transfer and handover documentation so your team can manage the environment independently.', positioning = 'Get your specialist operational system configured, connected, and live, with the training and documentation to own it after handover.' WHERE variant_id = 76;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (76, 'Platform configuration built to the approved domain-specific specification, covering objects, workflows, screens, and automation rules', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (76, 'Integration development connecting your operational platform to ERP, scheduling, reporting, and communication systems', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (76, 'Role-based user acceptance testing with operational staff validating real task scenarios, not just system functionality', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (76, 'Knowledge transfer programme: administrator training, runbooks, and a documented configuration baseline for your team', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (76, 'specialised-operations');
INSERT INTO product_tags (variant_id, tag_name) VALUES (76, 'platform-deployment');
INSERT INTO product_tags (variant_id, tag_name) VALUES (76, 'operational-configuration');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (76, 'Weeks 1-2: Environment setup, data migration planning, and sprint kickoff with your operational leads', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (76, 'Weeks 3-8: Platform configuration, integration development, and iterative review with operational stakeholders', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (76, 'Weeks 9-10: User acceptance testing with front-line staff and defect resolution', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (76, 'Weeks 11-12: Controlled go-live, hypercare support, and handover with training and runbooks', 3);

-- Specialised Operations (High-Impact) - AI Deploy (variant 77)
UPDATE product_variants SET positioning = 'Deploy AI into your specialist operational workflows with the governance, accuracy monitoring, and staff enablement your domain requires.' WHERE id = 77;
UPDATE product_content SET description = 'Deploy AI into your specialist operational environment, whether field service, facilities management, quality, or logistics, including predictive models, intelligent routing, and anomaly detection, with governance controls and performance monitoring active from the pilot phase.', positioning = 'Deploy AI into your specialist operational workflows with the governance, accuracy monitoring, and staff enablement your domain requires.' WHERE variant_id = 77;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (77, 'Predictive model deployment for domain-specific use cases such as maintenance scheduling, quality defect detection, or workload routing', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (77, 'AI integration into operational workflows so predictions and recommendations surface in the systems your staff already use', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (77, 'Governance configuration: confidence thresholds, human-override controls, and audit logging specific to your operational domain', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (77, 'Staff enablement programme ensuring operational teams understand AI recommendations and know when to act on or override them', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (77, 'specialised-operations');
INSERT INTO product_tags (variant_id, tag_name) VALUES (77, 'predictive-ai');
INSERT INTO product_tags (variant_id, tag_name) VALUES (77, 'operational-ai-deployment');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (77, 'Weeks 1-3: Model configuration, governance setup, and pilot environment preparation', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (77, 'Weeks 4-7: Pilot deployment with accuracy monitoring, threshold calibration, and staff feedback', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (77, 'Weeks 8-10: Production rollout, integration validation, and exception-handling confirmation', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (77, 'Weeks 11-12: Performance baseline, monitoring handover, and operational sign-off', 3);

-- Specialised Operations (High-Impact) - Managed (variant 78)
UPDATE product_variants SET positioning = 'Keep your specialist operational systems performing at capacity, with proactive monitoring and expert support when domain-specific issues arise.' WHERE id = 78;
UPDATE product_content SET description = 'Ongoing managed operations for your specialist operational systems and workflows, covering platform health, data quality monitoring, user support, and monthly performance reporting so your domain function stays at operating capacity without straining internal resources.', positioning = 'Keep your specialist operational systems performing at capacity, with proactive monitoring and expert support when domain-specific issues arise.' WHERE variant_id = 78;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (78, 'Platform health monitoring with SLA-backed alerting for system performance, integration failures, and data quality degradation', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (78, 'First-line operational support for domain-specific system issues, workflow errors, and configuration queries from your operations team', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (78, 'Monthly performance report covering system uptime, data quality metrics, workflow throughput, and SLA adherence', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (78, 'Planned maintenance and change management for system updates, process changes, and new configuration requirements from your operational function', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (78, 'specialised-operations');
INSERT INTO product_tags (variant_id, tag_name) VALUES (78, 'managed-service');
INSERT INTO product_tags (variant_id, tag_name) VALUES (78, 'operational-support');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (78, 'Month 1: System handover, monitoring configuration, and SLA baseline agreement', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (78, 'Months 2-3: First reporting cycle, support pattern analysis, and backlog prioritisation', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (78, 'Ongoing: Monthly performance reports, quarterly roadmap reviews, and proactive maintenance scheduling', 2);

-- Enterprise Operations (High-Impact) - Assess (variant 79)
UPDATE product_variants SET positioning = 'Get a COO-ready view of the coordination failures slowing your enterprise down, and a sequenced plan for fixing them.' WHERE id = 79;
UPDATE product_content SET description = 'Your quarterly planning cycle finishes two weeks late. Cross-functional projects stall in approval queues nobody owns. Performance reporting takes a fortnight to produce and is already out of date by the time it reaches the COO. These are not technology problems -- they are coordination failures baked into how your enterprise operates. This one-week assessment maps those failures, names where decision rights are ambiguous, and tells you what to fix first.', positioning = 'Get a COO-ready view of the coordination failures slowing your enterprise down, and a sequenced plan for fixing them.' WHERE variant_id = 79;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (79, 'A scored gap view of your enterprise coordination failures -- decision rights, handoffs, planning cadence, and performance visibility -- so your COO and leadership team can see exactly which gaps slow execution the most and where to intervene first', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (79, 'Cross-functional handoff audit tracing where projects stall and approvals queue, with the root cause identified for each failure point', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (79, 'Planning cycle diagnostic measuring where your quarterly and monthly cycles lose time, from kickoff to sign-off, and why', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (79, 'Performance visibility gap report documenting where your reporting data is late, incomplete, or inconsistent and what it is costing leadership in decision latency', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (79, 'enterprise-operations');
INSERT INTO product_tags (variant_id, tag_name) VALUES (79, 'operating-model');
INSERT INTO product_tags (variant_id, tag_name) VALUES (79, 'operational-visibility');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (79, 'Days 1-2: Leadership interviews with COO, Chief of Staff, and function heads, operating model documentation review, and system landscape mapping', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (79, 'Days 3-4: Coordination failure analysis, decision rights mapping, and improvement roadmap drafting', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (79, 'Day 5: Findings playback and prioritised roadmap handover to leadership', 2);
UPDATE products SET short_description = 'Your quarterly planning cycle finishes two weeks late. Cross-functional projects stall in approval queues nobody owns. Performance reporting takes a fortnight to produce and is already out of date by the time it reaches the COO. These are not technology problems -- they are coordination failures baked into how your enterprise operates. This one-week assessment maps those failures, names where decision rights are ambiguous, and tells you what to fix first.', audience = 'COOs, Chief of Staff, Strategy Directors, and heads of Transformation', industry_relevance = 'Large organisations where cross-functional coordination, planning visibility, and execution discipline are limiting competitive performance', business_impact = 'Identifies the operating model and technology gaps that slow enterprise decision-making and cross-functional execution, giving leadership a costed plan to address the highest-impact ones first.' WHERE id = (SELECT product_id FROM product_variants WHERE id = 79);

-- Enterprise Operations (High-Impact) - Design (variant 80)
UPDATE product_variants SET positioning = 'Get the process redesigns, governance frameworks, and decision authority structures your COO needs to bring operating model change to the business.' WHERE id = 80;
UPDATE product_content SET description = 'Your assessment named the coordination failures. Now you need something the COO can bring to the business: redesigned processes that close the planning cycle gaps, a governance framework that resolves the decision rights disputes, and a decision authority matrix that tells each function what they own. This four-week design engagement produces those outputs -- changes your organisation can actually implement, not a slide deck about operating model theory.', positioning = 'Get the process redesigns, governance frameworks, and decision authority structures your COO needs to bring operating model change to the business.' WHERE variant_id = 80;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (80, 'Cross-functional process redesigns for your highest-priority coordination failures -- planning cycle, performance review, escalation, and cross-functional project handoff', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (80, 'Governance framework specifying how decisions are made, escalated, and recorded across enterprise functions, with accountabilities assigned to roles not individuals', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (80, 'Decision authority matrix defining what each function owns, what requires cross-functional sign-off, and what escalates to the COO -- in a format usable in practice', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (80, 'Platform configuration specification for the ERP or operational management changes needed to support the redesigned processes, formatted for your delivery team', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (80, 'enterprise-operations');
INSERT INTO product_tags (variant_id, tag_name) VALUES (80, 'operating-model-design');
INSERT INTO product_tags (variant_id, tag_name) VALUES (80, 'cross-functional-process');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (80, 'Week 1: Operating model workshops with COO and function heads, stakeholder alignment, and current-state process mapping', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (80, 'Week 2: To-be process redesign and governance framework development with cross-functional stakeholders', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (80, 'Week 3: Decision authority matrix, platform configuration specification, and integration architecture', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (80, 'Week 4: Design review, leadership sign-off, and build-ready handover pack', 3);

-- Enterprise Operations (High-Impact) - AI Design (variant 81)
UPDATE product_variants SET positioning = 'Design AI capabilities that improve enterprise operational decisions, not just automate them.' WHERE id = 81;
UPDATE product_content SET description = 'Design AI capabilities that improve enterprise operational decisions, not just automate them, covering demand forecasting, resource optimisation, and operational risk detection, with responsible design and governance specifications for each validated use case.', positioning = 'Design AI capabilities that improve enterprise operational decisions, not just automate them.' WHERE variant_id = 81;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (81, 'Enterprise AI use-case discovery focused on operational decision support: demand forecasting, capacity planning, supply chain risk, and performance anomaly detection', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (81, 'Data landscape assessment evaluating whether enterprise data sources have the quality and accessibility AI models require', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (81, 'Responsible AI framework design including bias testing approach, human oversight requirements, and explainability standards for enterprise decision contexts', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (81, 'Multi-system integration specification mapping how AI outputs feed into ERP, planning, and operational reporting platforms', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (81, 'enterprise-operations');
INSERT INTO product_tags (variant_id, tag_name) VALUES (81, 'operational-ai');
INSERT INTO product_tags (variant_id, tag_name) VALUES (81, 'demand-forecasting');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (81, 'Week 1: Enterprise AI opportunity workshops, data landscape review, and responsible AI scoping', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (81, 'Week 2: Use-case scoring, feasibility assessment, and data readiness gaps identified', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (81, 'Week 3: AI workflow design, integration architecture, and governance specification', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (81, 'Week 4: Specification review, executive sign-off, and build-ready handover', 3);

-- Enterprise Operations (High-Impact) - Deploy (variant 82)
UPDATE product_variants SET positioning = 'Deploy operating model changes that stick -- with adoption built into delivery, not bolted on at the end.' WHERE id = 82;
UPDATE product_content SET description = 'Large operating model change programmes fail for predictable reasons: adoption collapses when the new processes conflict with how people actually work, political resistance kills cross-functional changes that no single function owns, and the new governance structures do not stick without active reinforcement. This twelve-week deployment programme embeds change adoption directly into delivery -- with cross-functional programme management, per-function sign-off at each phase, and a change champion network that keeps adoption from sliding once the DigitalQatalyst team hands over.', positioning = 'Deploy operating model changes that stick -- with adoption built into delivery, not bolted on at the end.' WHERE variant_id = 82;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (82, 'Stakeholder alignment sessions at each programme phase, ensuring cross-functional sign-off before changes go live in any function', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (82, 'Phased rollout with per-function adoption checkpoints so problems surface and are resolved before the next phase starts', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (82, 'Change champion network established within the business to sustain adoption and resolve resistance at the operational level', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (82, 'Post-go-live adoption tracking covering process adherence, decision rights usage, and governance forum participation for the first 30 days', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (82, 'enterprise-operations');
INSERT INTO product_tags (variant_id, tag_name) VALUES (82, 'erp-configuration');
INSERT INTO product_tags (variant_id, tag_name) VALUES (82, 'operational-programme');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (82, 'Weeks 1-2: Environment setup, change champion identification, and sprint planning with cross-functional leads', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (82, 'Weeks 3-8: Platform configuration, integration builds, and phased stakeholder review with per-function adoption checkpoints', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (82, 'Weeks 9-10: User acceptance testing across affected functions, adoption readiness assessment, and defect resolution', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (82, 'Weeks 11-12: Controlled go-live, hypercare support, change champion handover, and 30-day adoption baseline capture', 3);

-- Enterprise Operations (High-Impact) - AI Deploy (variant 83)
UPDATE product_variants SET positioning = 'Put AI-driven decision support into your enterprise operational workflows, with the governance and accuracy monitoring that enterprise risk requires.' WHERE id = 83;
UPDATE product_content SET description = 'Put AI-driven decision support into your enterprise operational workflows, including demand forecasting models, supply chain risk detection, and operational anomaly alerting, with governance controls and executive visibility built in from day one of a twelve-week deployment.', positioning = 'Put AI-driven decision support into your enterprise operational workflows, with the governance and accuracy monitoring that enterprise risk requires.' WHERE variant_id = 83;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (83, 'Demand forecasting model deployment integrated into your planning system so forecasts update automatically from live operational data', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (83, 'Supply chain and operational risk detection with configurable alert thresholds and escalation routing to the right operational owners', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (83, 'AI decision explainability built into every model output so operational managers understand why the AI recommendation was generated', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (83, 'Executive AI governance dashboard tracking model performance, override rates, and decision outcomes across enterprise functions', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (83, 'enterprise-operations');
INSERT INTO product_tags (variant_id, tag_name) VALUES (83, 'forecasting-ai');
INSERT INTO product_tags (variant_id, tag_name) VALUES (83, 'supply-chain-risk');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (83, 'Weeks 1-3: Data pipeline configuration, model setup, and governance framework activation', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (83, 'Weeks 4-7: Pilot deployment with business stakeholders, accuracy calibration, and threshold tuning', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (83, 'Weeks 8-10: Production rollout across target functions, integration testing, and manager enablement', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (83, 'Weeks 11-12: Performance baseline review, governance dashboard handover, and operational sign-off', 3);

-- Enterprise Operations (High-Impact) - Managed (variant 84)
UPDATE product_variants SET positioning = 'Keep your enterprise operational systems and AI capabilities running at the performance levels your business depends on.' WHERE id = 84;
UPDATE product_content SET description = 'Ongoing managed operations for your enterprise operational platforms and AI capabilities, covering system health monitoring, model performance tracking, operational reporting, and continuous improvement to keep your enterprise operating model performing as your business evolves.', positioning = 'Keep your enterprise operational systems and AI capabilities running at the performance levels your business depends on.' WHERE variant_id = 84;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (84, 'Enterprise platform health monitoring with SLA-backed response for system degradation, integration failures, and data quality issues', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (84, 'AI model performance tracking with monthly accuracy reviews and threshold recalibration to prevent forecast drift over time', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (84, 'Monthly operational performance report covering system uptime, data quality, AI accuracy, and a summary of changes made', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (84, 'Proactive change management for ERP updates, data model changes, and new operational requirements from business functions', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (84, 'enterprise-operations');
INSERT INTO product_tags (variant_id, tag_name) VALUES (84, 'managed-service');
INSERT INTO product_tags (variant_id, tag_name) VALUES (84, 'ai-model-governance');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (84, 'Month 1: Platform and AI estate handover, monitoring configuration, and SLA baseline agreement', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (84, 'Months 2-3: First full reporting cycle, model accuracy review, and improvement backlog prioritisation', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (84, 'Ongoing: Monthly performance reports, quarterly AI accuracy reviews, and annual enterprise roadmap planning', 2);

-- Governance, Risk & Compliance (High-Impact) - Assess (variant 85)
UPDATE product_variants SET positioning = 'See where compliance gaps create real exposure, then fix the highest-risk ones first.' WHERE id = 85;
UPDATE product_content SET description = 'Map your governance, risk, and compliance posture against the controls that matter most, and leave with a prioritised remediation plan your board can sign off.', positioning = 'See where compliance gaps create real exposure, then fix the highest-risk ones first.' WHERE variant_id = 85;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (85, 'Control-by-control gap assessment against your chosen framework (ISO 27001, NIST CSF, SOC 2, or sector standard)', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (85, 'Risk register scored by likelihood and business impact so investment targets the right areas', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (85, 'Prioritised remediation roadmap with named owners, effort bands, and sequenced dependencies', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (85, 'Board-ready executive summary translating technical exposure into business risk language', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (85, 'compliance');
INSERT INTO product_tags (variant_id, tag_name) VALUES (85, 'risk-management');
INSERT INTO product_tags (variant_id, tag_name) VALUES (85, 'GRC');
INSERT INTO product_tags (variant_id, tag_name) VALUES (85, 'audit-readiness');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (85, 'Days 1-2: Scope confirmation, framework alignment, and stakeholder interviews', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (85, 'Days 3-4: Control evidence review, gap scoring, and risk register build', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (85, 'Day 5: Findings playback, roadmap validation, and board summary delivery', 2);
UPDATE products SET short_description = 'Map your governance, risk, and compliance posture against the controls that matter most, and leave with a prioritised remediation plan your board can sign off.', audience = 'CISOs, risk and compliance officers, heads of internal audit, and legal and regulatory affairs leaders', industry_relevance = 'Regulated organisations in financial services, healthcare, government, and any business preparing for certification or facing audit scrutiny', business_impact = 'Reduces audit findings and regulatory exposure by focusing remediation on the controls with the greatest risk, shortening the path to certification and strengthening board-level assurance.' WHERE id = (SELECT product_id FROM product_variants WHERE id = 85);

-- Governance, Risk & Compliance (High-Impact) - Design (variant 86)
UPDATE product_variants SET positioning = 'A delivery-ready GRC blueprint: operating model, controls architecture, and integration specifications in four weeks.' WHERE id = 86;
UPDATE product_content SET description = 'Turn your compliance goals and risk appetite into a fully specified GRC operating model, with process designs, control architectures, and implementation blueprints your delivery teams can build against.', positioning = 'A delivery-ready GRC blueprint: operating model, controls architecture, and integration specifications in four weeks.' WHERE variant_id = 86;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (86, 'GRC operating model design covering roles, accountabilities, escalation paths, and review cadences', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (86, 'Control architecture specifying the controls, automation points, and tooling integrations to close priority gaps', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (86, 'Process and workflow designs for risk identification, incident triage, and compliance reporting', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (86, 'User-centred interface prototypes and adoption plan so teams actually use what is built', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (86, 'compliance');
INSERT INTO product_tags (variant_id, tag_name) VALUES (86, 'risk-management');
INSERT INTO product_tags (variant_id, tag_name) VALUES (86, 'GRC');
INSERT INTO product_tags (variant_id, tag_name) VALUES (86, 'operating-model');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (86, 'Week 1: Current-state review, requirements capture, and design principles', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (86, 'Weeks 2-3: Operating model design, control architecture, and workflow prototyping', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (86, 'Week 4: Specification sign-off, integration requirements, and build handover package', 2);

-- Governance, Risk & Compliance (High-Impact) - AI Design (variant 87)
UPDATE product_variants SET positioning = 'AI-powered GRC starts here: validated use cases, responsible workflows, and specifications ready to build.' WHERE id = 87;
UPDATE product_content SET description = 'Identify where AI can strengthen your GRC capability, validate those use cases against data, regulatory, and ethical requirements, and produce deployment-ready specifications before any build investment is committed.', positioning = 'AI-powered GRC starts here: validated use cases, responsible workflows, and specifications ready to build.' WHERE variant_id = 87;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (87, 'AI use-case identification for risk detection, compliance monitoring, and anomaly alerting within your GRC context', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (87, 'Responsible AI assessment covering data quality, bias risk, regulatory constraints, and explainability requirements', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (87, 'Workflow designs specifying how AI-generated insights integrate into existing compliance and risk processes', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (87, 'Deployment specifications including model requirements, guardrails, human-in-the-loop controls, and monitoring criteria', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (87, 'AI-governance');
INSERT INTO product_tags (variant_id, tag_name) VALUES (87, 'responsible-AI');
INSERT INTO product_tags (variant_id, tag_name) VALUES (87, 'GRC');
INSERT INTO product_tags (variant_id, tag_name) VALUES (87, 'compliance-automation');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (87, 'Week 1: AI opportunity mapping, data landscape review, and regulatory constraint analysis', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (87, 'Weeks 2-3: Use-case validation workshops, responsible AI assessment, and workflow design', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (87, 'Week 4: Deployment specifications, guardrails definition, and design sign-off', 2);

-- Governance, Risk & Compliance (High-Impact) - Deploy (variant 88)
UPDATE product_variants SET positioning = 'From design to live GRC operations: configured controls, integrated systems, and a tested, handed-over capability.' WHERE id = 88;
UPDATE product_content SET description = 'Configure, integrate, test, and launch your GRC capability across the agreed scope, with staged testing and signed acceptance criteria at every phase and a controlled handover that leaves your operations team ready to run.', positioning = 'From design to live GRC operations: configured controls, integrated systems, and a tested, handed-over capability.' WHERE variant_id = 88;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (88, 'End-to-end configuration of your GRC platform against agreed control requirements and operating model', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (88, 'System integrations connecting risk, compliance, and audit data sources so reporting is automated and accurate', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (88, 'Three-phase testing programme covering functional, integration, and user acceptance before go-live', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (88, 'Controlled launch with runbooks, training, and a hypercare period so operations teams are fully prepared', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (88, 'GRC-implementation');
INSERT INTO product_tags (variant_id, tag_name) VALUES (88, 'compliance');
INSERT INTO product_tags (variant_id, tag_name) VALUES (88, 'risk-management');
INSERT INTO product_tags (variant_id, tag_name) VALUES (88, 'platform-deployment');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (88, 'Weeks 1-3: Environment setup, configuration, and initial integration build', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (88, 'Weeks 4-8: Integration testing, control validation, and UAT with compliance and audit teams', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (88, 'Weeks 9-11: Pilot launch, issue resolution, and runbook finalisation', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (88, 'Week 12: Full go-live, hypercare activation, and operational handover', 3);

-- Governance, Risk & Compliance (High-Impact) - AI Deploy (variant 89)
UPDATE product_variants SET positioning = 'AI-powered GRC in production: governed models, live monitoring, and your team trained to operate them safely.' WHERE id = 89;
UPDATE product_content SET description = 'Deploy AI-enabled GRC capabilities into production with the monitoring, safety controls, human-in-the-loop workflows, and operational handover your compliance function needs to run them confidently.', positioning = 'AI-powered GRC in production: governed models, live monitoring, and your team trained to operate them safely.' WHERE variant_id = 89;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (89, 'Production deployment of validated AI models for risk detection, compliance monitoring, or anomaly alerting', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (89, 'Safety and guardrail configuration enforcing human-in-the-loop approval at critical decision points', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (89, 'Live monitoring dashboards tracking model accuracy, alert volumes, and compliance outcomes week-on-week', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (89, 'Operations training programme so your GRC team can manage, retrain, and override AI outputs with confidence', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (89, 'AI-deployment');
INSERT INTO product_tags (variant_id, tag_name) VALUES (89, 'compliance-automation');
INSERT INTO product_tags (variant_id, tag_name) VALUES (89, 'responsible-AI');
INSERT INTO product_tags (variant_id, tag_name) VALUES (89, 'GRC');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (89, 'Weeks 1-3: Production environment preparation, model deployment, and integration testing', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (89, 'Weeks 4-7: Guardrail configuration, monitoring setup, and parallel-run validation', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (89, 'Weeks 8-10: Phased cutover, alert tuning, and false-positive reduction', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (89, 'Weeks 11-12: Full production handover, operations training, and hypercare activation', 3);

-- Governance, Risk & Compliance (High-Impact) - Managed (variant 90)
UPDATE product_variants SET positioning = 'Ongoing GRC operations with named accountability: monthly reporting, continuous control testing, and proactive optimisation.' WHERE id = 90;
UPDATE product_content SET description = 'Keep your GRC capability operating at peak performance with ongoing monitoring, control testing, compliance reporting, and continuous optimisation backed by a named DigitalQatalyst team and defined service levels.', positioning = 'Ongoing GRC operations with named accountability: monthly reporting, continuous control testing, and proactive optimisation.' WHERE variant_id = 90;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (90, 'Continuous control monitoring with exception alerting so control failures are caught before they become findings', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (90, 'Monthly compliance performance reports mapped to your chosen framework and formatted for board and audit committees', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (90, 'Quarterly control testing programme producing evidence packs ready for internal audit and external certification', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (90, 'Proactive optimisation cycles adjusting controls, processes, and tooling as your risk landscape or regulatory obligations change', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (90, 'managed-GRC');
INSERT INTO product_tags (variant_id, tag_name) VALUES (90, 'compliance-operations');
INSERT INTO product_tags (variant_id, tag_name) VALUES (90, 'continuous-monitoring');
INSERT INTO product_tags (variant_id, tag_name) VALUES (90, 'audit-readiness');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (90, 'Month 1: Onboarding, baseline establishment, and SLA confirmation', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (90, 'Months 2-3: Steady-state monitoring, first reporting cycle, and initial optimisation', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (90, 'Quarterly: Control testing, evidence pack production, and performance review', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (90, 'Ongoing: Continuous monitoring, reporting, and regulatory change response', 3);

-- Enterprise Resource Planning (High-Impact) - Assess (variant 91)
UPDATE product_variants SET positioning = 'Understand exactly where your ERP is creating manual workarounds and data quality issues, and get a sequenced plan to fix them.' WHERE id = 91;
UPDATE product_content SET description = 'Understand exactly where your ERP is creating manual workarounds, data quality problems, and integration failures across finance, procurement, and HR, then get a prioritised remediation roadmap your leaders can act on, all within one week.', positioning = 'Understand exactly where your ERP is creating manual workarounds and data quality issues, and get a sequenced plan to fix them.' WHERE variant_id = 91;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (91, 'ERP process coverage review across finance, procurement, inventory, and HR modules to identify gaps driving manual workarounds', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (91, 'Data quality and consistency assessment across master data, transactional records, and reporting outputs', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (91, 'Integration gap analysis mapping where ERP data fails to flow accurately to downstream systems, including payroll, CRM, and reporting', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (91, 'Prioritised remediation roadmap with effort estimates, data risk flags, and recommended sequencing for each improvement', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (91, 'erp');
INSERT INTO product_tags (variant_id, tag_name) VALUES (91, 'finance-systems');
INSERT INTO product_tags (variant_id, tag_name) VALUES (91, 'data-quality');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (91, 'Days 1-2: ERP module walkthroughs, stakeholder interviews, and data extract review', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (91, 'Days 3-4: Gap scoring, integration analysis, and roadmap drafting', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (91, 'Day 5: Findings playback with prioritised roadmap and recommended next steps', 2);
UPDATE products SET short_description = 'Understand exactly where your ERP is creating manual workarounds, data quality problems, and integration failures across finance, procurement, and HR, then get a prioritised remediation roadmap your leaders can act on, all within one week.', audience = 'CFOs, Finance Directors, Procurement Directors, and HR leaders', industry_relevance = 'Organisations running SAP, Oracle, Microsoft Dynamics, or Sage that are experiencing manual workarounds, data quality issues, or reconciliation failures between ERP and downstream systems', business_impact = 'Identifies the ERP gaps creating the highest financial reporting risk, manual effort, and data inconsistency, giving finance and operations leadership a costed plan to address them.' WHERE id = (SELECT product_id FROM product_variants WHERE id = 91);

-- Enterprise Resource Planning (High-Impact) - Design (variant 92)
UPDATE product_variants SET positioning = 'Design your ERP improvements properly before configuration begins: fewer change requests, fewer reconciliation failures, and a system that reflects how your business actually runs.' WHERE id = 92;
UPDATE product_content SET description = 'Design your ERP improvements properly before configuration begins: redesigned process flows, data model specifications, and configuration blueprints your implementation team can build against, covering finance, procurement, and HR modules, across a four-week engagement.', positioning = 'Design your ERP improvements properly before configuration begins: fewer change requests, fewer reconciliation failures, and a system that reflects how your business actually runs.' WHERE variant_id = 92;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (92, 'Process redesign for ERP-supported functions: purchase-to-pay, order-to-cash, record-to-report, and hire-to-retire workflows', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (92, 'Master data model design covering chart of accounts, cost centre structure, supplier master, and employee data standards', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (92, 'ERP configuration specification defining module settings, approval workflows, validation rules, and reporting dimensions', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (92, 'Integration architecture for connections between ERP and payroll, CRM, data warehouse, and other dependent systems', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (92, 'erp');
INSERT INTO product_tags (variant_id, tag_name) VALUES (92, 'process-design');
INSERT INTO product_tags (variant_id, tag_name) VALUES (92, 'master-data');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (92, 'Week 1: Process deep-dives across finance, procurement, and HR with module owners', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (92, 'Week 2: To-be process design and master data model specification', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (92, 'Week 3: ERP configuration specification and integration architecture', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (92, 'Week 4: Design review, sign-off with finance and IT, and build-ready handover', 3);

-- Enterprise Resource Planning (High-Impact) - AI Design (variant 93)
UPDATE product_variants SET positioning = 'Design the AI capabilities that make your ERP data work harder for finance, procurement, and HR decision-makers.' WHERE id = 93;
UPDATE product_content SET description = 'Make your ERP data work harder for finance, procurement, and HR decision-makers by identifying where AI can improve ERP-driven decisions, from automated invoice matching and cash flow forecasting to procurement risk detection, with responsible design and governance specifications for each validated use case.', positioning = 'Design the AI capabilities that make your ERP data work harder for finance, procurement, and HR decision-makers.' WHERE variant_id = 93;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (93, 'ERP-specific AI use-case discovery covering accounts payable automation, cash flow forecasting, spend anomaly detection, and workforce planning', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (93, 'Data quality and lineage assessment of ERP data to confirm it meets the volume and accuracy requirements for AI model training', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (93, 'Responsible AI design for finance-critical use cases: auditability requirements, control frameworks, and exception routing before any automated action is taken', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (93, 'Specification for AI integration with ERP modules, covering API connections, data transformation rules, and model output display within ERP workflows', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (93, 'erp');
INSERT INTO product_tags (variant_id, tag_name) VALUES (93, 'finance-ai');
INSERT INTO product_tags (variant_id, tag_name) VALUES (93, 'accounts-payable-automation');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (93, 'Week 1: AI use-case workshops with finance, procurement, and HR stakeholders, and ERP data landscape review', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (93, 'Week 2: Use-case scoring, data readiness assessment, and responsible AI framing for finance contexts', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (93, 'Week 3: AI workflow design, ERP integration specification, and control framework design', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (93, 'Week 4: Specification review, finance and IT sign-off, and build-ready handover', 3);

-- Enterprise Resource Planning (High-Impact) - Deploy (variant 94)
UPDATE product_variants SET positioning = 'Get your ERP configured correctly, your data migrated cleanly, and your finance and procurement teams live on improved processes within twelve weeks.' WHERE id = 94;
UPDATE product_content SET description = 'Get your ERP modules correctly configured, your data migrated cleanly, and your finance and procurement teams live on improved processes, with structured data migration, business user testing, and handover to your finance and IT teams, all within twelve weeks.', positioning = 'Get your ERP configured correctly, your data migrated cleanly, and your finance and procurement teams live on improved processes within twelve weeks.' WHERE variant_id = 94;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (94, 'ERP module configuration aligned to approved process designs and the master data standards agreed in the design phase', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (94, 'Data migration and cleansing for master data and transactional records, with reconciliation checks before any data is loaded to production', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (94, 'Integration development connecting ERP to payroll, CRM, data warehouse, and other dependent systems, tested against agreed data flow specifications', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (94, 'Finance and procurement user acceptance testing with real transaction scenarios and month-end close rehearsal before go-live', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (94, 'erp');
INSERT INTO product_tags (variant_id, tag_name) VALUES (94, 'erp-implementation');
INSERT INTO product_tags (variant_id, tag_name) VALUES (94, 'finance-operations');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (94, 'Weeks 1-2: Environment preparation, data migration planning, and sprint kickoff with finance and IT leads', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (94, 'Weeks 3-8: ERP configuration, integration builds, and data migration runs in iterative sprints', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (94, 'Weeks 9-10: User acceptance testing with finance and procurement teams, including month-end close simulation', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (94, 'Weeks 11-12: Controlled go-live with parallel run, hypercare support, and handover documentation', 3);

-- Enterprise Resource Planning (High-Impact) - AI Deploy (variant 95)
UPDATE product_variants SET positioning = 'Deploy AI into your ERP with the audit trail, control framework, and accuracy monitoring your finance function requires.' WHERE id = 95;
UPDATE product_content SET description = 'Deploy AI into your ERP environment with the audit trail, control framework, and accuracy monitoring your finance function requires, covering automated invoice processing, cash flow forecasting, and spend anomaly detection, active from the pilot phase.', positioning = 'Deploy AI into your ERP with the audit trail, control framework, and accuracy monitoring your finance function requires.' WHERE variant_id = 95;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (95, 'Automated invoice matching and exception routing deployed within your ERP''s accounts payable workflow, with confidence scoring and human-review queues', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (95, 'Cash flow forecasting model integrated with your ERP data, generating rolling forecasts with variance explanations for your finance team', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (95, 'Spend anomaly detection configured to flag procurement and expense transactions that fall outside policy or expected patterns', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (95, 'Finance-grade audit logging for every AI action: input data, model version, output, confidence score, and reviewer decision recorded', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (95, 'erp');
INSERT INTO product_tags (variant_id, tag_name) VALUES (95, 'accounts-payable-ai');
INSERT INTO product_tags (variant_id, tag_name) VALUES (95, 'cash-flow-forecasting');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (95, 'Weeks 1-3: Governance setup, ERP data pipeline configuration, and pilot cohort selection', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (95, 'Weeks 4-7: Pilot deployment with accuracy monitoring, threshold calibration, and finance team feedback', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (95, 'Weeks 8-10: Production rollout across finance and procurement functions, integration testing, and user enablement', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (95, 'Weeks 11-12: Accuracy baseline, audit log review, monitoring handover, and sign-off', 3);

-- Enterprise Resource Planning (High-Impact) - Managed (variant 96)
UPDATE product_variants SET positioning = 'Keep your ERP and finance AI capabilities running reliably, with expert support for period-end close and proactive monitoring between reporting cycles.' WHERE id = 96;
UPDATE product_content SET description = 'Ongoing managed operations for your ERP environment and AI capabilities, covering system health monitoring, period-end support, data quality governance, and monthly performance reporting so your finance and procurement functions run without operational disruption.', positioning = 'Keep your ERP and finance AI capabilities running reliably, with expert support for period-end close and proactive monitoring between reporting cycles.' WHERE variant_id = 96;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (96, 'ERP system health monitoring with SLA-backed alerting for performance degradation, integration failures, and data quality issues before they affect period-end close', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (96, 'Period-end close support covering reconciliation checks, posting run oversight, and rapid issue resolution during month-end and quarter-end', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (96, 'AI model accuracy monitoring with monthly reviews and recalibration to maintain invoice matching and forecasting performance as ERP data evolves', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (96, 'Proactive ERP patch and upgrade management with impact assessment and testing before any change reaches your production environment', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (96, 'erp');
INSERT INTO product_tags (variant_id, tag_name) VALUES (96, 'managed-service');
INSERT INTO product_tags (variant_id, tag_name) VALUES (96, 'finance-operations-support');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (96, 'Month 1: ERP and AI estate handover, monitoring setup, and SLA baseline agreement', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (96, 'Months 2-3: First full monitoring cycle, period-end support run, and AI accuracy review', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (96, 'Ongoing: Monthly performance reports, quarterly AI accuracy reviews, and annual upgrade planning', 2);

-- Workforce Management (High-Impact) - Assess (variant 97)
UPDATE product_variants SET positioning = 'A structured assessment that shows exactly where workforce management breaks down and what to fix first.' WHERE id = 97;
UPDATE product_content SET description = 'Understand where your workforce management platform is falling short: scheduling gaps, visibility blind spots, and coordination friction that cost you productivity every day. The DigitalQatalyst team returns a prioritised findings report and a practical roadmap your HR and operations leaders can act on immediately.', positioning = 'A structured assessment that shows exactly where workforce management breaks down and what to fix first.' WHERE variant_id = 97;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (97, 'Scheduling and rostering gap analysis across all workforce categories', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (97, 'Productivity visibility audit: what you can and cannot measure today', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (97, 'Integration review of time-and-attendance, payroll, and HRIS touchpoints', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (97, 'Prioritised improvement roadmap with effort and impact scoring', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (97, 'workforce-planning');
INSERT INTO product_tags (variant_id, tag_name) VALUES (97, 'scheduling');
INSERT INTO product_tags (variant_id, tag_name) VALUES (97, 'hr-operations');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (97, 'Days 1-2: Stakeholder interviews, data access, and scope confirmation', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (97, 'Days 3-4: Scheduling analysis, system review, and gap documentation', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (97, 'Day 5: Findings playback, roadmap walkthrough, and next-step agreement', 2);
UPDATE products SET short_description = 'Understand where your workforce management platform is falling short: scheduling gaps, visibility blind spots, and coordination friction that cost you productivity every day. The DigitalQatalyst team returns a prioritised findings report and a practical roadmap your HR and operations leaders can act on immediately.', audience = 'HR directors, workforce planning managers, and head-of-operations roles', industry_relevance = 'Organisations managing distributed, shift-based, field, frontline, or knowledge workforces across any sector', business_impact = 'Surfaces the scheduling gaps and visibility gaps costing the most time and money, so investment goes to the fixes with the greatest return.' WHERE id = (SELECT product_id FROM product_variants WHERE id = 97);

-- Workforce Management (High-Impact) - Design (variant 98)
UPDATE product_variants SET positioning = 'A design engagement that produces workforce management specifications ready for configuration and build.' WHERE id = 98;
UPDATE product_content SET description = 'Turn workforce management goals into a complete, build-ready blueprint: role-based journeys, scheduling logic, integration specifications, and an adoption plan your delivery teams can execute without ambiguity.', positioning = 'A design engagement that produces workforce management specifications ready for configuration and build.' WHERE variant_id = 98;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (98, 'Role-based journey mapping for managers, schedulers, and frontline workers', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (98, 'Scheduling rules and rostering logic documented for your delivery context', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (98, 'Integration specifications for payroll, HRIS, time-and-attendance, and comms platforms', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (98, 'Adoption and change plan covering training, rollout phasing, and early-life support', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (98, 'workforce-planning');
INSERT INTO product_tags (variant_id, tag_name) VALUES (98, 'scheduling');
INSERT INTO product_tags (variant_id, tag_name) VALUES (98, 'hr-operations');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (98, 'Week 1: Current-state review, goal alignment, and workforce journey workshops', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (98, 'Weeks 2-3: Scheduling logic design, integration specification, and prototype validation', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (98, 'Week 4: Final blueprint review, adoption planning, and build-readiness sign-off', 2);

-- Workforce Management (High-Impact) - AI Design (variant 99)
UPDATE product_variants SET positioning = 'Define and validate the AI use cases that will actually improve workforce management, with guardrails built in from the start.' WHERE id = 99;
UPDATE product_content SET description = 'Validate where AI can improve scheduling accuracy, demand forecasting, and workforce coordination before committing build budget. The DigitalQatalyst team produces responsible workflow designs and deployment-ready specifications for every approved use case.', positioning = 'Define and validate the AI use cases that will actually improve workforce management, with guardrails built in from the start.' WHERE variant_id = 99;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (99, 'AI use-case evaluation: demand forecasting, auto-rostering, absence prediction, and fatigue detection', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (99, 'Data readiness assessment covering the inputs each model needs and what is missing', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (99, 'Responsible AI workflow design with bias controls, override paths, and explainability requirements', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (99, 'Deployment specification including model selection criteria, monitoring thresholds, and retraining triggers', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (99, 'workforce-ai');
INSERT INTO product_tags (variant_id, tag_name) VALUES (99, 'scheduling');
INSERT INTO product_tags (variant_id, tag_name) VALUES (99, 'predictive-analytics');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (99, 'Week 1: Use-case discovery, data landscape review, and feasibility scoring', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (99, 'Weeks 2-3: Responsible workflow design, guardrail specification, and stakeholder validation', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (99, 'Week 4: Deployment specification sign-off and build-readiness confirmation', 2);

-- Workforce Management (High-Impact) - Deploy (variant 100)
UPDATE product_variants SET positioning = 'A managed deployment that takes your workforce management blueprint from specification to live operations.' WHERE id = 100;
UPDATE product_content SET description = 'Configure, integrate, and launch your workforce management platform with structured quality assurance and a controlled handover that leaves your operations team confident and self-sufficient.', positioning = 'A managed deployment that takes your workforce management blueprint from specification to live operations.' WHERE variant_id = 100;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (100, 'Platform configuration against approved scheduling rules, rostering logic, and role permissions', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (100, 'End-to-end integration testing with payroll, HRIS, time-and-attendance, and communication systems', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (100, 'User acceptance testing with managers, schedulers, and representative frontline workers', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (100, 'Hypercare period covering issue resolution and adoption support in the first weeks of live operation', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (100, 'workforce-planning');
INSERT INTO product_tags (variant_id, tag_name) VALUES (100, 'scheduling');
INSERT INTO product_tags (variant_id, tag_name) VALUES (100, 'hr-operations');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (100, 'Weeks 1-3: Environment setup, configuration build, and integration development', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (100, 'Weeks 4-8: System integration testing, data migration validation, and defect resolution', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (100, 'Weeks 9-10: User acceptance testing and sign-off', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (100, 'Weeks 11-12: Controlled go-live, hypercare, and operational handover', 3);

-- Workforce Management (High-Impact) - AI Deploy (variant 101)
UPDATE product_variants SET positioning = 'Put AI-powered scheduling and forecasting into production with the governance and monitoring your HR leaders require.' WHERE id = 101;
UPDATE product_content SET description = 'Deploy validated AI capabilities for demand forecasting, auto-rostering, and absence prediction into your live workforce management environment, with monitoring, safety controls, and a handover that keeps your operations team in control.', positioning = 'Put AI-powered scheduling and forecasting into production with the governance and monitoring your HR leaders require.' WHERE variant_id = 101;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (101, 'Governed model deployment for approved use cases including demand forecasting and shift optimisation', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (101, 'Real-time monitoring dashboards tracking model accuracy, fairness metrics, and operational impact', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (101, 'Human override and escalation workflows embedded in scheduling and rostering tools', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (101, 'Operations team enablement covering model behaviour, intervention triggers, and performance review cadence', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (101, 'workforce-ai');
INSERT INTO product_tags (variant_id, tag_name) VALUES (101, 'scheduling');
INSERT INTO product_tags (variant_id, tag_name) VALUES (101, 'predictive-analytics');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (101, 'Weeks 1-4: Production environment preparation, data pipeline validation, and model staging', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (101, 'Weeks 5-8: Controlled rollout to pilot workforce cohorts with close monitoring', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (101, 'Weeks 9-10: Full rollout, override workflow validation, and performance baseline capture', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (101, 'Weeks 11-12: Governance handover, monitoring setup confirmation, and retraining schedule agreement', 3);

-- Workforce Management (High-Impact) - Managed (variant 102)
UPDATE product_variants SET positioning = 'Ongoing management of your workforce management platform so scheduling accuracy and visibility never degrade.' WHERE id = 102;
UPDATE product_content SET description = 'Keep your workforce management platform performing at pace with your business: SLA-backed scheduling system operations, monthly performance reporting, and ongoing optimisation as your workforce grows or changes.', positioning = 'Ongoing management of your workforce management platform so scheduling accuracy and visibility never degrade.' WHERE variant_id = 102;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (102, 'Monthly scheduling performance reports covering fill rates, overtime variance, and absenteeism trends', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (102, 'Proactive system health monitoring with incident response within agreed SLA windows', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (102, 'Configuration updates as scheduling rules, roles, or workforce structures change', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (102, 'Quarterly optimisation reviews identifying new capability opportunities and technical debt', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (102, 'workforce-planning');
INSERT INTO product_tags (variant_id, tag_name) VALUES (102, 'scheduling');
INSERT INTO product_tags (variant_id, tag_name) VALUES (102, 'managed-service');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (102, 'Month 1: Service baseline, monitoring setup, and SLA agreement confirmation', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (102, 'Months 2-3: First reporting cycle, initial optimisation recommendations, and configuration updates', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (102, 'Ongoing: Monthly performance reviews, quarterly optimisation sessions, and annual roadmap refresh', 2);

-- Enterprise Data Platform (High-Impact) - Assess (variant 103)
UPDATE product_variants SET positioning = 'Pinpoint the data quality, governance, and architecture gaps blocking your platform from becoming a trusted enterprise asset.' WHERE id = 103;
UPDATE product_content SET description = 'Pinpoint the architecture weaknesses, governance gaps, and pipeline failures holding your data platform back from becoming a trusted enterprise asset, and leave with a scored maturity view and prioritised roadmap your CDO and engineering leads can act on immediately.', positioning = 'Pinpoint the data quality, governance, and architecture gaps blocking your platform from becoming a trusted enterprise asset.' WHERE variant_id = 103;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (103, 'A domain-by-domain scorecard showing exactly which gaps in ingestion, storage, governance, and consumption are undermining data trust, so investment targets the root causes rather than the symptoms', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (103, 'Data quality and lineage gap identification with root-cause mapping', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (103, 'Prioritised remediation roadmap ranked by business impact and implementation effort', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (103, 'Stakeholder-ready findings pack including an executive summary and a technical annexe', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (103, 'data-platform');
INSERT INTO product_tags (variant_id, tag_name) VALUES (103, 'data-governance');
INSERT INTO product_tags (variant_id, tag_name) VALUES (103, 'maturity-assessment');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (103, 'Days 1-2: Architecture review, stakeholder interviews, and data landscape mapping', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (103, 'Days 3-4: Pipeline and governance analysis, quality sampling, and gap scoring', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (103, 'Day 5: Findings playback, roadmap walkthrough, and executive summary delivery', 2);
UPDATE products SET short_description = 'Pinpoint the architecture weaknesses, governance gaps, and pipeline failures holding your data platform back from becoming a trusted enterprise asset, and leave with a scored maturity view and prioritised roadmap your CDO and engineering leads can act on immediately.', audience = 'CDOs, CIOs, and data and analytics engineering leads', industry_relevance = 'Organisations building governed data platforms, data products, or AI-ready foundations across financial services, retail, healthcare, and the public sector', business_impact = 'Cuts wasted data engineering effort by exposing root causes of quality and governance failures, and gives leadership a concrete investment case for the platform improvements with the greatest return.' WHERE id = (SELECT product_id FROM product_variants WHERE id = 103);

-- Enterprise Data Platform (High-Impact) - Design (variant 104)
UPDATE product_variants SET positioning = 'Go from data platform ambition to build-ready specifications: architecture, contracts, governance, and an adoption plan in one engagement.' WHERE id = 104;
UPDATE product_content SET description = 'Turn your enterprise data platform goals into an architecture blueprint, data model specifications, and a governance framework your engineering teams can build against with confidence.', positioning = 'Go from data platform ambition to build-ready specifications: architecture, contracts, governance, and an adoption plan in one engagement.' WHERE variant_id = 104;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (104, 'A build-ready architecture blueprint your engineering teams can act on immediately, with every layer -- ingestion, processing, storage, and serving -- specified so delivery starts without rework or ambiguity', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (104, 'Canonical data model and domain ownership definitions aligned to your business domains', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (104, 'Governance framework including lineage, cataloguing, access control, and data quality contracts', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (104, 'Phased build plan with team assignments, milestones, and dependency sequencing', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (104, 'data-platform');
INSERT INTO product_tags (variant_id, tag_name) VALUES (104, 'data-architecture');
INSERT INTO product_tags (variant_id, tag_name) VALUES (104, 'data-governance');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (104, 'Week 1: Discovery, requirements workshops, and current-state architecture review', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (104, 'Week 2: Target architecture design, data domain mapping, and technology selection', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (104, 'Week 3: Governance framework, data contracts, and integration design', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (104, 'Week 4: Build plan, adoption playbook, and design pack delivery', 3);

-- Enterprise Data Platform (High-Impact) - AI Design (variant 105)
UPDATE product_variants SET positioning = 'Validate which AI capabilities your data platform can reliably support, and leave with responsible workflow designs your team can build without reinventing guardrails.' WHERE id = 105;
UPDATE product_content SET description = 'Identify the highest-value AI use cases your data platform can reliably support, validate their feasibility, and leave with responsible workflow designs and deployment-ready specifications before any build investment is committed.', positioning = 'Validate which AI capabilities your data platform can reliably support, and leave with responsible workflow designs your team can build without reinventing guardrails.' WHERE variant_id = 105;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (105, 'A ranked shortlist of AI use cases your data platform can reliably support, each scored against data readiness, feasibility, and business value, so build investment goes only to capabilities with a clear path to production', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (105, 'Responsible AI workflow design covering bias checks, explainability requirements, and human-in-the-loop controls', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (105, 'Data readiness assessment identifying the gaps that must close before each use case can train or run reliably', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (105, 'Deployment-ready specifications including model requirements, feature pipelines, and monitoring design', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (105, 'data-platform');
INSERT INTO product_tags (variant_id, tag_name) VALUES (105, 'responsible-ai');
INSERT INTO product_tags (variant_id, tag_name) VALUES (105, 'ml-platform');
INSERT INTO product_tags (variant_id, tag_name) VALUES (105, 'ai-design');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (105, 'Week 1: Use-case discovery, data readiness review, and feasibility scoring', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (105, 'Week 2: Responsible AI requirements, ethics review, and workflow design', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (105, 'Week 3: Feature pipeline and model specification, monitoring and alerting design', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (105, 'Week 4: Specification pack delivery and build-readiness review', 3);

-- Enterprise Data Platform (High-Impact) - Deploy (variant 106)
UPDATE product_variants SET positioning = 'Move from approved architecture to a live, tested data platform, with every pipeline validated, every integration confirmed, and your team ready to operate it.' WHERE id = 106;
UPDATE product_content SET description = 'Configure, integrate, and launch your enterprise data platform with sprint-gated quality assurance, full pipeline testing, and a clean handover to your operations and data engineering teams, within a fixed twelve-week programme.', positioning = 'Move from approved architecture to a live, tested data platform, with every pipeline validated, every integration confirmed, and your team ready to operate it.' WHERE variant_id = 106;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (106, 'A live, production-ready data platform built to the approved blueprint, with all pipelines running, acceptance criteria met, and your operations team certified before the DigitalQatalyst team steps back', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (106, 'Pipeline build and integration testing covering ingestion, transformation, and serving layers end to end', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (106, 'Data quality validation at each layer with acceptance criteria agreed before launch', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (106, 'Week-by-week knowledge transfer with your operations team certified against runbooks and on-call guides before handover', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (106, 'data-platform');
INSERT INTO product_tags (variant_id, tag_name) VALUES (106, 'data-engineering');
INSERT INTO product_tags (variant_id, tag_name) VALUES (106, 'platform-deployment');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (106, 'Weeks 1-3: Environment setup, infrastructure provisioning, and pipeline scaffolding', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (106, 'Weeks 4-7: Pipeline implementation, source system integration, and data quality testing', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (106, 'Weeks 8-10: End-to-end validation, performance testing, and user acceptance testing', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (106, 'Weeks 11-12: Controlled launch, handover sessions, and runbook sign-off', 3);

-- Enterprise Data Platform (High-Impact) - AI Deploy (variant 107)
UPDATE product_variants SET positioning = 'Launch AI models on your data platform the right way: governed, monitored, and production-hardened before your business depends on them.' WHERE id = 107;
UPDATE product_content SET description = 'Put your designed AI capabilities into production on the enterprise data platform with governance controls, drift monitoring, and safety checks built in from the first day of operation.', positioning = 'Launch AI models on your data platform the right way: governed, monitored, and production-hardened before your business depends on them.' WHERE variant_id = 107;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (107, 'AI models serving live predictions in production, with version control and rollback confirmed working before any model handles business decisions', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (107, 'Real-time drift and performance monitoring configured to alert before model quality degrades', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (107, 'Governance controls including audit logging, prediction traceability, and access controls on model endpoints', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (107, 'Documented handover with incident playbooks and on-call guidance for your ML engineering team, validated before the DigitalQatalyst team steps back', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (107, 'data-platform');
INSERT INTO product_tags (variant_id, tag_name) VALUES (107, 'ml-deployment');
INSERT INTO product_tags (variant_id, tag_name) VALUES (107, 'model-governance');
INSERT INTO product_tags (variant_id, tag_name) VALUES (107, 'responsible-ai');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (107, 'Weeks 1-3: ML infrastructure provisioning, model packaging, and staging environment setup', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (107, 'Weeks 4-7: Feature pipeline deployment, model serving configuration, and monitoring instrumentation', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (107, 'Weeks 8-10: Production validation, load testing, and governance control verification', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (107, 'Weeks 11-12: Controlled production launch, operational handover, and incident playbook delivery', 3);

-- Enterprise Data Platform (High-Impact) - Managed (variant 108)
UPDATE product_variants SET positioning = 'Keep your data platform trusted and performant every month, with proactive monitoring, rapid incident resolution, and a continuous improvement cycle built into the service.' WHERE id = 108;
UPDATE product_content SET description = 'Keep your enterprise data platform running, governed, and improving every month, with SLA-backed pipeline monitoring, incident response, data quality reporting, and continuous optimisation by the DigitalQatalyst team.', positioning = 'Keep your data platform trusted and performant every month, with proactive monitoring, rapid incident resolution, and a continuous improvement cycle built into the service.' WHERE variant_id = 108;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (108, 'Continuous pipeline health coverage with defined SLAs, so data failures are caught and resolved before they affect the business decisions or reports that depend on them', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (108, 'Monthly data quality reports covering completeness, accuracy, freshness, and lineage coverage', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (108, 'Capacity and performance optimisation reviews ensuring platform costs and query performance stay within targets', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (108, 'Governance and compliance reporting aligned to your data policies and any applicable regulations', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (108, 'data-platform');
INSERT INTO product_tags (variant_id, tag_name) VALUES (108, 'managed-service');
INSERT INTO product_tags (variant_id, tag_name) VALUES (108, 'platform-operations');
INSERT INTO product_tags (variant_id, tag_name) VALUES (108, 'data-quality');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (108, 'Month 1: Onboarding, monitoring baseline, and SLA definition', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (108, 'Month 2 onwards: Continuous monitoring, monthly quality reports, and quarterly optimisation reviews', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (108, 'Ongoing: Incident management, change requests, and annual roadmap review', 2);

-- Business Intelligence & Analytics (High-Impact) - Assess (variant 109)
UPDATE product_variants SET positioning = 'Find out exactly where your BI and analytics capability falls short, and leave with a prioritised plan to close the gaps that matter most to your decision-makers.' WHERE id = 109;
UPDATE product_content SET description = 'Surface the data, tooling, and governance gaps that limit management visibility and leave key decisions relying on spreadsheets rather than trusted reports, and leave with a prioritised plan to close what matters most to your decision-makers.', positioning = 'Find out exactly where your BI and analytics capability falls short, and leave with a prioritised plan to close the gaps that matter most to your decision-makers.' WHERE variant_id = 109;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (109, 'BI maturity assessment covering data sources, reporting tools, KPI definitions, and self-service capability', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (109, 'Report and dashboard audit identifying duplication, inconsistency, and single points of failure', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (109, 'Stakeholder interviews mapping the decisions that lack reliable data and the cost of that gap', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (109, 'Prioritised improvement roadmap ranked by decision-making impact and implementation effort', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (109, 'business-intelligence');
INSERT INTO product_tags (variant_id, tag_name) VALUES (109, 'analytics');
INSERT INTO product_tags (variant_id, tag_name) VALUES (109, 'reporting');
INSERT INTO product_tags (variant_id, tag_name) VALUES (109, 'kpi-design');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (109, 'Days 1-2: Stakeholder interviews, report inventory, and data source mapping', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (109, 'Days 3-4: Tool and governance review, KPI consistency analysis, and gap scoring', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (109, 'Day 5: Findings playback, prioritised roadmap delivery, and next-step recommendations', 2);
UPDATE products SET short_description = 'Surface the data, tooling, and governance gaps that limit management visibility and leave key decisions relying on spreadsheets rather than trusted reports, and leave with a prioritised plan to close what matters most to your decision-makers.', audience = 'Strategy, finance, and analytics leaders, and heads of data and reporting', industry_relevance = 'Organisations across financial services, retail, manufacturing, and the public sector seeking better performance visibility, consistent KPIs, and faster, more confident decision-making', business_impact = 'Identifies the specific reporting and data gaps reducing decision confidence, and provides a roadmap that gives leadership reliable insight where it is currently absent.' WHERE id = (SELECT product_id FROM product_variants WHERE id = 109);

-- Business Intelligence & Analytics (High-Impact) - Design (variant 110)
UPDATE product_variants SET positioning = 'Design the BI and analytics environment your decision-makers actually need: agreed metrics, clean data models, and dashboards specified before a single report is built.' WHERE id = 110;
UPDATE product_content SET description = 'Turn your business intelligence and analytics goals into user-centred dashboard specifications, a semantic layer design, and a governed data model your delivery teams can build against, with metrics agreed and signed off before a single report is built.', positioning = 'Design the BI and analytics environment your decision-makers actually need: agreed metrics, clean data models, and dashboards specified before a single report is built.' WHERE variant_id = 110;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (110, 'Metrics catalogue and KPI definitions agreed across business and finance stakeholders before design begins', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (110, 'Semantic layer and data model design ensuring consistent metric calculation across all reports', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (110, 'Dashboard and self-service analytics specifications mapped to named user roles and decision workflows', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (110, 'Governance design covering report certification, data ownership, and access control policies', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (110, 'business-intelligence');
INSERT INTO product_tags (variant_id, tag_name) VALUES (110, 'analytics');
INSERT INTO product_tags (variant_id, tag_name) VALUES (110, 'data-modelling');
INSERT INTO product_tags (variant_id, tag_name) VALUES (110, 'semantic-layer');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (110, 'Week 1: Stakeholder workshops, metrics catalogue drafting, and current-state data model review', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (110, 'Week 2: Semantic layer design, data model specification, and metric sign-off', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (110, 'Week 3: Dashboard wireframes, self-service requirements, and governance policy design', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (110, 'Week 4: Specification pack delivery, build backlog, and adoption plan', 3);

-- Business Intelligence & Analytics (High-Impact) - AI Design (variant 111)
UPDATE product_variants SET positioning = 'Design AI-augmented analytics your organisation can trust: use cases validated against your data, workflows designed responsibly, specifications ready to build.' WHERE id = 111;
UPDATE product_content SET description = 'Identify where machine learning and AI-driven insights can augment your business intelligence and analytics capability, validate each use case against your actual data, and leave with responsible workflow designs and deployment-ready specifications ready for engineering.', positioning = 'Design AI-augmented analytics your organisation can trust: use cases validated against your data, workflows designed responsibly, specifications ready to build.' WHERE variant_id = 111;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (111, 'AI use-case identification across forecasting, anomaly detection, natural language querying, and automated narrative generation', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (111, 'Data readiness review confirming whether your existing analytics data can support each proposed AI capability', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (111, 'Responsible AI workflow design specifying human review points, bias checks, and confidence thresholds for each model', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (111, 'Technical specifications covering model requirements, feature engineering, and integration with your existing BI tooling', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (111, 'business-intelligence');
INSERT INTO product_tags (variant_id, tag_name) VALUES (111, 'analytics-ai');
INSERT INTO product_tags (variant_id, tag_name) VALUES (111, 'forecasting');
INSERT INTO product_tags (variant_id, tag_name) VALUES (111, 'responsible-ai');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (111, 'Week 1: Use-case discovery workshops, data readiness review, and feasibility scoring', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (111, 'Week 2: Responsible AI requirements, workflow design, and ethics review', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (111, 'Week 3: Technical specifications, feature engineering design, and BI integration architecture', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (111, 'Week 4: Specification delivery, build prioritisation, and data gap remediation plan', 3);

-- Business Intelligence & Analytics (High-Impact) - Deploy (variant 112)
UPDATE product_variants SET positioning = 'Get your BI and analytics environment live: data connected, metrics consistent, dashboards certified, and your users confident before the engagement ends.' WHERE id = 112;
UPDATE product_content SET description = 'Build, connect, and launch your agreed BI and analytics environment, from data pipeline integration and semantic layer implementation to certified dashboards and a trained self-service user community, within a milestone-gated twelve-week programme.', positioning = 'Get your BI and analytics environment live: data connected, metrics consistent, dashboards certified, and your users confident before the engagement ends.' WHERE variant_id = 112;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (112, 'Data source integration and pipeline configuration connecting your agreed data to the BI layer with tested refresh schedules', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (112, 'Semantic layer implementation ensuring every tool calculates agreed KPIs from a single consistent source', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (112, 'Dashboard development and certification covering all specified reports built to the agreed wireframes', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (112, 'User training and self-service enablement leaving your analytics community able to answer their own questions', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (112, 'business-intelligence');
INSERT INTO product_tags (variant_id, tag_name) VALUES (112, 'analytics');
INSERT INTO product_tags (variant_id, tag_name) VALUES (112, 'dashboard-development');
INSERT INTO product_tags (variant_id, tag_name) VALUES (112, 'self-service-analytics');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (112, 'Weeks 1-3: Environment setup, data source integration, and pipeline testing', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (112, 'Weeks 4-7: Semantic layer implementation, dashboard development, and iterative review', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (112, 'Weeks 8-10: User acceptance testing, report certification, and self-service configuration', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (112, 'Weeks 11-12: Go-live support, user training delivery, and handover documentation', 3);

-- Business Intelligence & Analytics (High-Impact) - AI Deploy (variant 113)
UPDATE product_variants SET positioning = 'Launch AI-powered analytics in production: models governed, outputs integrated into your existing dashboards, and your analytics team trained to act on what the AI surfaces.' WHERE id = 113;
UPDATE product_content SET description = 'Put validated forecasting, anomaly detection, and AI-driven insight capabilities into production within your BI and analytics environment, with governance controls and monitoring configured from the first day of operation.', positioning = 'Launch AI-powered analytics in production: models governed, outputs integrated into your existing dashboards, and your analytics team trained to act on what the AI surfaces.' WHERE variant_id = 113;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (113, 'AI model deployment integrated directly into your BI tooling so insights appear where analysts already work', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (113, 'Prediction monitoring and drift detection configured to alert before model accuracy degrades', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (113, 'Human-in-the-loop controls implemented at the decision points specified in the AI design', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (113, 'Analytics team enablement covering how to interpret model outputs, act on alerts, and escalate when the AI is uncertain', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (113, 'analytics-ai');
INSERT INTO product_tags (variant_id, tag_name) VALUES (113, 'forecasting');
INSERT INTO product_tags (variant_id, tag_name) VALUES (113, 'anomaly-detection');
INSERT INTO product_tags (variant_id, tag_name) VALUES (113, 'ml-deployment');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (113, 'Weeks 1-3: ML infrastructure setup, model packaging, and staging environment validation', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (113, 'Weeks 4-7: Model deployment, BI integration, and monitoring instrumentation', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (113, 'Weeks 8-10: Production validation, user acceptance testing, and governance control verification', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (113, 'Weeks 11-12: Controlled launch, analytics team training, and operational handover', 3);

-- Business Intelligence & Analytics (High-Impact) - Managed (variant 114)
UPDATE product_variants SET positioning = 'Maintain a BI and analytics environment your decision-makers can rely on every month, with proactive quality checks, rapid incident resolution, and regular optimisation reviews.' WHERE id = 114;
UPDATE product_content SET description = 'Keep your business intelligence and analytics environment accurate, performant, and current every month, with SLA-backed monitoring, monthly quality reporting, and a continuous improvement cycle managed by the DigitalQatalyst team.', positioning = 'Maintain a BI and analytics environment your decision-makers can rely on every month, with proactive quality checks, rapid incident resolution, and regular optimisation reviews.' WHERE variant_id = 114;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (114, 'Dashboard and data pipeline monitoring with SLA-backed response to report failures or data refresh issues', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (114, 'Monthly analytics quality report covering metric accuracy, report usage, and data freshness by source', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (114, 'Quarterly optimisation review addressing slow-running reports, redundant dashboards, and new stakeholder requirements', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (114, 'Governed change management for new reports, metric updates, and data source additions', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (114, 'business-intelligence');
INSERT INTO product_tags (variant_id, tag_name) VALUES (114, 'analytics');
INSERT INTO product_tags (variant_id, tag_name) VALUES (114, 'managed-service');
INSERT INTO product_tags (variant_id, tag_name) VALUES (114, 'reporting-operations');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (114, 'Month 1: Onboarding, monitoring baseline, SLA definition, and service catalogue agreement', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (114, 'Month 2 onwards: Continuous monitoring, monthly quality reporting, and change request management', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (114, 'Quarterly: Performance optimisation review and roadmap update', 2);

-- Enterprise AI & Automation (High-Impact) - Assess (variant 115)
UPDATE product_variants SET positioning = 'Find out where AI and automation will create the most value for your organisation, what is blocking you today, and what needs to happen before you build.' WHERE id = 115;
UPDATE product_content SET description = 'Identify the highest-value AI and automation opportunities in your organisation, uncover the data and infrastructure gaps blocking adoption, and leave with a prioritised roadmap and the governance requirements your first production capability will need.', positioning = 'Find out where AI and automation will create the most value for your organisation, what is blocking you today, and what needs to happen before you build.' WHERE variant_id = 115;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (115, 'AI and automation opportunity mapping across your key workflows, ranked by value and feasibility', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (115, 'Readiness assessment covering data quality, infrastructure, skills, and governance against each priority use case', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (115, 'Risk and ethics review identifying the responsible AI requirements specific to your sector and use cases', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (115, 'Prioritised adoption roadmap with sequenced actions and the investment case for the top three use cases', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (115, 'enterprise-ai');
INSERT INTO product_tags (variant_id, tag_name) VALUES (115, 'automation');
INSERT INTO product_tags (variant_id, tag_name) VALUES (115, 'ai-readiness');
INSERT INTO product_tags (variant_id, tag_name) VALUES (115, 'ai-strategy');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (115, 'Days 1-2: Opportunity discovery workshops, workflow mapping, and stakeholder interviews', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (115, 'Days 3-4: Readiness assessment, risk and ethics review, and use-case scoring', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (115, 'Day 5: Findings playback, roadmap delivery, and executive briefing', 2);
UPDATE products SET short_description = 'Identify the highest-value AI and automation opportunities in your organisation, uncover the data and infrastructure gaps blocking adoption, and leave with a prioritised roadmap and the governance requirements your first production capability will need.', audience = 'CEOs, CIOs, chief transformation officers, and heads of AI and automation', industry_relevance = 'Organisations across financial services, professional services, manufacturing, retail, and the public sector looking to move from AI experimentation to structured, governed adoption', business_impact = 'Removes the strategic uncertainty that slows AI adoption by identifying the use cases with the strongest value-to-risk ratio and the exact readiness gaps that must close before build investment begins.' WHERE id = (SELECT product_id FROM product_variants WHERE id = 115);

-- Enterprise AI & Automation (High-Impact) - Design (variant 116)
UPDATE product_variants SET positioning = 'Translate AI and automation ambitions into build-ready specifications: workflows designed, integrations mapped, governance controls specified, and adoption planned before a line of code is written.' WHERE id = 116;
UPDATE product_content SET description = 'Turn your validated AI and automation use cases into user-centred workflow designs, integration specifications, and a governed deployment blueprint your engineering teams can build against, with governance and override controls designed in from the outset.', positioning = 'Translate AI and automation ambitions into build-ready specifications: workflows designed, integrations mapped, governance controls specified, and adoption planned before a line of code is written.' WHERE variant_id = 116;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (116, 'Workflow redesign for each prioritised use case, showing how AI or automation changes the user and system interactions', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (116, 'Integration architecture mapping how AI capabilities connect to your existing applications, data sources, and process flows', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (116, 'Governance framework design covering decision audit trails, human override controls, and escalation protocols', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (116, 'Change management and adoption plan addressing the people, skills, and process changes needed for successful rollout', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (116, 'enterprise-ai');
INSERT INTO product_tags (variant_id, tag_name) VALUES (116, 'automation');
INSERT INTO product_tags (variant_id, tag_name) VALUES (116, 'workflow-design');
INSERT INTO product_tags (variant_id, tag_name) VALUES (116, 'ai-governance');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (116, 'Week 1: Workflow discovery, current-state process mapping, and stakeholder requirements workshops', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (116, 'Week 2: Redesigned workflow designs, integration architecture, and technology alignment', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (116, 'Week 3: Governance framework, audit and override control design, and compliance review', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (116, 'Week 4: Adoption plan, change impact assessment, and full design pack delivery', 3);

-- Enterprise AI & Automation (High-Impact) - AI Design (variant 117)
UPDATE product_variants SET positioning = 'Design enterprise AI capabilities that are viable, responsible, and buildable: each use case validated, each workflow governed, each specification ready for engineering.' WHERE id = 117;
UPDATE product_content SET description = 'Validate your enterprise AI and automation use cases against data readiness, responsible AI requirements, and sector-specific compliance obligations, and leave with deployment-ready specifications your engineering team can build against without ambiguity.', positioning = 'Design enterprise AI capabilities that are viable, responsible, and buildable: each use case validated, each workflow governed, each specification ready for engineering.' WHERE variant_id = 117;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (117, 'Use-case feasibility validation covering data availability, model complexity, and responsible AI risk before any build commitment', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (117, 'Responsible workflow design specifying explainability requirements, bias controls, human oversight points, and confidence thresholds', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (117, 'Model and infrastructure specification defining training data requirements, compute needs, and serving architecture for each use case', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (117, 'Governance and compliance mapping ensuring each AI workflow meets the obligations relevant to your sector', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (117, 'enterprise-ai');
INSERT INTO product_tags (variant_id, tag_name) VALUES (117, 'responsible-ai');
INSERT INTO product_tags (variant_id, tag_name) VALUES (117, 'ai-governance');
INSERT INTO product_tags (variant_id, tag_name) VALUES (117, 'compliance');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (117, 'Week 1: Use-case feasibility review, data and infrastructure readiness assessment, and risk scoring', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (117, 'Week 2: Responsible AI requirements, ethics review, and workflow design', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (117, 'Week 3: Model and infrastructure specifications, governance mapping, and compliance review', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (117, 'Week 4: Specification pack delivery, build prioritisation, and gap remediation plan', 3);

-- Enterprise AI & Automation (High-Impact) - Deploy (variant 118)
UPDATE product_variants SET positioning = 'Move from approved AI and automation designs to live production capabilities: integrated, tested, adopted, and handed over within a milestone-gated twelve-week programme.' WHERE id = 118;
UPDATE product_content SET description = 'Configure, integrate, and launch your enterprise AI and automation capabilities into production with sprint-gated testing, quality assurance, change management, and a clean operational handover to your teams, within a twelve-week programme.', positioning = 'Move from approved AI and automation designs to live production capabilities: integrated, tested, adopted, and handed over within a milestone-gated twelve-week programme.' WHERE variant_id = 118;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (118, 'AI and automation capability configuration and integration with your existing applications, data sources, and process workflows', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (118, 'End-to-end testing covering functional validation, edge cases, and performance under expected production load', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (118, 'User acceptance testing with process owners confirming the automated workflows meet agreed outcome criteria', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (118, 'Structured go-live support and handover with runbooks, escalation paths, and trained operators ready before launch', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (118, 'enterprise-ai');
INSERT INTO product_tags (variant_id, tag_name) VALUES (118, 'automation');
INSERT INTO product_tags (variant_id, tag_name) VALUES (118, 'ai-deployment');
INSERT INTO product_tags (variant_id, tag_name) VALUES (118, 'process-automation');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (118, 'Weeks 1-3: Environment provisioning, integration configuration, and source system connectivity testing', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (118, 'Weeks 4-7: Capability build, workflow integration, and iterative functional testing', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (118, 'Weeks 8-10: User acceptance testing, performance validation, and go-live readiness review', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (118, 'Weeks 11-12: Controlled launch, go-live support, and operational handover', 3);

-- Enterprise AI & Automation (High-Impact) - AI Deploy (variant 119)
UPDATE product_variants SET positioning = 'Launch enterprise AI in production the right way: governed, monitored, auditable, and with your teams fully prepared to operate it before the DigitalQatalyst team steps back.' WHERE id = 119;
UPDATE product_content SET description = 'Put your validated enterprise AI capabilities into production with full governance controls, real-time monitoring, safety checks, and a documented handover with runbooks and team sign-off so your teams can manage AI responsibly from day one.', positioning = 'Launch enterprise AI in production the right way: governed, monitored, auditable, and with your teams fully prepared to operate it before the DigitalQatalyst team steps back.' WHERE variant_id = 119;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (119, 'Production AI deployment with model versioning, rollback capability, and staged rollout to manage adoption risk', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (119, 'Real-time model performance and drift monitoring with configurable alert thresholds and incident playbooks', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (119, 'Audit logging and decision traceability covering every model prediction and the human review outcomes', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (119, 'AI operations handover including retraining triggers, model lifecycle management, and escalation protocols', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (119, 'enterprise-ai');
INSERT INTO product_tags (variant_id, tag_name) VALUES (119, 'ai-governance');
INSERT INTO product_tags (variant_id, tag_name) VALUES (119, 'ml-deployment');
INSERT INTO product_tags (variant_id, tag_name) VALUES (119, 'responsible-ai');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (119, 'Weeks 1-3: AI infrastructure provisioning, model packaging, and staging environment validation', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (119, 'Weeks 4-7: Production deployment, monitoring instrumentation, and governance control implementation', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (119, 'Weeks 8-10: Shadow period validation, load testing, and governance control verification', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (119, 'Weeks 11-12: Controlled production launch, operations team handover, and incident playbook delivery', 3);

-- Enterprise AI & Automation (High-Impact) - Managed (variant 120)
UPDATE product_variants SET positioning = 'Maintain enterprise AI that your organisation can trust every month: monitored, governed, optimised, and with every model lifecycle event handled before it becomes a problem.' WHERE id = 120;
UPDATE product_content SET description = 'Keep your enterprise AI and automation capabilities operating reliably and responsibly, with SLA-backed monitoring, monthly performance reporting, model lifecycle management, and a continuous improvement cycle run by the DigitalQatalyst team.', positioning = 'Maintain enterprise AI that your organisation can trust every month: monitored, governed, optimised, and with every model lifecycle event handled before it becomes a problem.' WHERE variant_id = 120;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (120, 'Continuous AI model performance monitoring with SLA-backed response to degradation or drift alerts', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (120, 'Monthly AI operations report covering model accuracy, drift indicators, incident history, and retraining events', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (120, 'Proactive model lifecycle management including scheduled retraining, version upgrades, and deprecation planning', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (120, 'Governance and compliance reporting confirming that audit controls, access policies, and responsible AI requirements remain in place', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (120, 'enterprise-ai');
INSERT INTO product_tags (variant_id, tag_name) VALUES (120, 'ai-governance');
INSERT INTO product_tags (variant_id, tag_name) VALUES (120, 'managed-service');
INSERT INTO product_tags (variant_id, tag_name) VALUES (120, 'mlops');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (120, 'Month 1: Onboarding, monitoring baseline, SLA definition, and service catalogue agreement', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (120, 'Month 2 onwards: Continuous monitoring, monthly performance reporting, and incident management', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (120, 'Quarterly: Model review, optimisation assessment, and responsible AI compliance check', 2);

-- Technology Governance (High-Impact) - Assess (variant 121)
UPDATE product_variants SET positioning = 'Understand where your technology governance framework is strong and where it is creating delivery risk, cost drag, or architectural drift.' WHERE id = 121;
UPDATE product_content SET description = 'Assess the maturity of your technology governance framework across portfolio management, architecture standards, vendor oversight, and delivery controls, and receive a prioritised improvement roadmap your CIO can act on immediately.', positioning = 'Understand where your technology governance framework is strong and where it is creating delivery risk, cost drag, or architectural drift.' WHERE variant_id = 121;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (121, 'Technology governance maturity assessment across portfolio, architecture, vendor, and delivery dimensions', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (121, 'Investment and portfolio control review identifying where spend is misaligned to strategy or poorly governed', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (121, 'Architecture standards assessment surfacing where technical debt and non-standard choices are accumulating risk', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (121, 'Prioritised improvement roadmap with effort estimates and sequencing recommendations for your CIO and architecture leaders', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (121, 'technology-governance');
INSERT INTO product_tags (variant_id, tag_name) VALUES (121, 'enterprise-architecture');
INSERT INTO product_tags (variant_id, tag_name) VALUES (121, 'portfolio-management');
INSERT INTO product_tags (variant_id, tag_name) VALUES (121, 'IT-governance');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (121, 'Days 1-2: Scope confirmation, maturity model alignment, and leadership interviews', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (121, 'Days 3-4: Documentation review, portfolio analysis, and architecture standards gap scoring', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (121, 'Day 5: Findings playback, roadmap review, and next-step recommendations', 2);
UPDATE products SET short_description = 'Assess the maturity of your technology governance framework across portfolio management, architecture standards, vendor oversight, and delivery controls, and receive a prioritised improvement roadmap your CIO can act on immediately.', audience = 'CIOs, heads of enterprise architecture, PMO directors, and technology portfolio leaders', industry_relevance = 'Organisations managing complex technology portfolios, multi-vendor environments, or enterprise architecture programmes across any sector', business_impact = 'Identifies the governance gaps creating the greatest delivery risk and cost exposure, so improvement investment is targeted rather than spread across lower-priority activities.' WHERE id = (SELECT product_id FROM product_variants WHERE id = 121);

-- Technology Governance (High-Impact) - Design (variant 122)
UPDATE product_variants SET positioning = 'A technology governance blueprint that translates strategy into accountable decisions, consistent architecture, and disciplined delivery.' WHERE id = 122;
UPDATE product_content SET description = 'Design a technology governance operating model that aligns portfolio decisions, architecture standards, vendor oversight, and delivery controls to your strategy, with the specifications and adoption plan your teams need to implement it.', positioning = 'A technology governance blueprint that translates strategy into accountable decisions, consistent architecture, and disciplined delivery.' WHERE variant_id = 122;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (122, 'Technology governance operating model defining decision rights, escalation paths, and accountability across portfolio, architecture, and vendor domains', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (122, 'Architecture review board and standards framework design, including decision criteria, review processes, and exception handling', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (122, 'Portfolio governance process designs covering investment approval, prioritisation, and performance tracking', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (122, 'Change and adoption plan addressing how governance changes are embedded without disrupting ongoing delivery', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (122, 'technology-governance');
INSERT INTO product_tags (variant_id, tag_name) VALUES (122, 'operating-model');
INSERT INTO product_tags (variant_id, tag_name) VALUES (122, 'enterprise-architecture');
INSERT INTO product_tags (variant_id, tag_name) VALUES (122, 'portfolio-governance');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (122, 'Week 1: Current-state review, governance principles, and design requirements', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (122, 'Weeks 2-3: Operating model design, process workshops, and architecture framework development', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (122, 'Week 4: Specification sign-off, adoption planning, and implementation handover package', 2);

-- Technology Governance (High-Impact) - AI Design (variant 123)
UPDATE product_variants SET positioning = 'AI-assisted technology governance starts with validated use cases and responsible design, not experimentation.' WHERE id = 123;
UPDATE product_content SET description = 'Validate where AI can strengthen technology governance, design responsible decision-support workflows, and produce deployment-ready specifications so build investment goes into AI use cases that are feasible, governed, and aligned to your architecture standards.', positioning = 'AI-assisted technology governance starts with validated use cases and responsible design, not experimentation.' WHERE variant_id = 123;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (123, 'AI use-case identification for portfolio analytics, architecture drift detection, vendor risk scoring, and delivery performance prediction', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (123, 'Feasibility and data readiness assessment for each prioritised use case, covering available data, model requirements, and integration points', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (123, 'Responsible AI workflow design including human-in-the-loop decision approval, explainability requirements, and bias risk assessment', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (123, 'Deployment specifications ready to hand to a build team, with guardrails, monitoring criteria, and audit logging defined', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (123, 'AI-governance');
INSERT INTO product_tags (variant_id, tag_name) VALUES (123, 'technology-governance');
INSERT INTO product_tags (variant_id, tag_name) VALUES (123, 'responsible-AI');
INSERT INTO product_tags (variant_id, tag_name) VALUES (123, 'portfolio-analytics');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (123, 'Week 1: AI opportunity mapping, data landscape review, and technology governance process analysis', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (123, 'Weeks 2-3: Use-case validation, responsible AI assessment, and workflow design workshops', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (123, 'Week 4: Deployment specification finalisation, guardrails design, and sign-off', 2);

-- Technology Governance (High-Impact) - Deploy (variant 124)
UPDATE product_variants SET positioning = 'From governance design to live operations: configured tooling, integrated data, and your team trained to govern technology at scale.' WHERE id = 124;
UPDATE product_content SET description = 'Implement your technology governance operating model with configured tooling, integrated data sources, tested processes, and a controlled handover that leaves your CIO and architecture teams running confidently.', positioning = 'From governance design to live operations: configured tooling, integrated data, and your team trained to govern technology at scale.' WHERE variant_id = 124;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (124, 'Technology governance platform configuration aligned to your operating model, decision rights, and reporting requirements', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (124, 'Data integrations connecting portfolio, financial, vendor, and architecture data sources into a single governance view', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (124, 'Process activation covering architecture review board, portfolio governance cycles, and vendor oversight workflows', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (124, 'Training programme and runbooks ensuring your CIO, architecture, and PMO teams can operate the governance model from day one', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (124, 'technology-governance');
INSERT INTO product_tags (variant_id, tag_name) VALUES (124, 'portfolio-management');
INSERT INTO product_tags (variant_id, tag_name) VALUES (124, 'platform-deployment');
INSERT INTO product_tags (variant_id, tag_name) VALUES (124, 'IT-governance');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (124, 'Weeks 1-3: Environment setup, platform configuration, and initial data integration', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (124, 'Weeks 4-8: Process activation, governance workflow testing, and UAT with CIO and architecture stakeholders', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (124, 'Weeks 9-11: Pilot governance cycles, issue resolution, and runbook finalisation', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (124, 'Week 12: Full go-live, first governance reporting cycle, and operational handover', 3);

-- Technology Governance (High-Impact) - AI Deploy (variant 125)
UPDATE product_variants SET positioning = 'AI in production for technology governance: validated models, governed decisions, and your team trained to manage them.' WHERE id = 125;
UPDATE product_content SET description = 'Deploy AI decision-support capabilities into your technology governance function with live monitoring, human-in-the-loop controls, and an operations model that keeps your CIO and architecture teams in charge of every material decision.', positioning = 'AI in production for technology governance: validated models, governed decisions, and your team trained to manage them.' WHERE variant_id = 125;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (125, 'Production deployment of AI models for portfolio health analytics, architecture drift detection, or vendor risk scoring', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (125, 'Human-in-the-loop approval workflows ensuring AI recommendations are reviewed by accountable leaders before action is taken', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (125, 'Monitoring dashboards surfacing model accuracy, recommendation acceptance rates, and governance outcomes in real time', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (125, 'Operations and override training so your CIO, architecture, and PMO teams can manage, retrain, and override AI outputs independently', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (125, 'AI-deployment');
INSERT INTO product_tags (variant_id, tag_name) VALUES (125, 'technology-governance');
INSERT INTO product_tags (variant_id, tag_name) VALUES (125, 'portfolio-analytics');
INSERT INTO product_tags (variant_id, tag_name) VALUES (125, 'responsible-AI');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (125, 'Weeks 1-3: Production environment preparation, model deployment, and integration testing', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (125, 'Weeks 4-7: Human-in-the-loop workflow activation, monitoring configuration, and parallel-run validation', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (125, 'Weeks 8-10: Phased cutover, recommendation tuning, and false-positive reduction', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (125, 'Weeks 11-12: Full production handover, operations training, and hypercare activation', 3);

-- Technology Governance (High-Impact) - Managed (variant 126)
UPDATE product_variants SET positioning = 'Named governance operations, monthly reporting, and continuous optimisation so technology governance keeps pace with your business.' WHERE id = 126;
UPDATE product_content SET description = 'Operate your technology governance framework continuously, with monthly portfolio reporting, quarterly architecture reviews, vendor oversight, and proactive optimisation so your CIO always has an accurate picture of investment alignment and technology risk.', positioning = 'Named governance operations, monthly reporting, and continuous optimisation so technology governance keeps pace with your business.' WHERE variant_id = 126;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (126, 'Continuous portfolio and investment monitoring with monthly performance reports aligned to your strategic objectives', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (126, 'Quarterly architecture review cycles assessing standards compliance, technical debt accumulation, and non-standard exceptions', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (126, 'Ongoing vendor oversight covering contract performance, risk monitoring, and renewal preparation', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (126, 'Proactive governance optimisation adjusting processes, tooling, and reporting as your technology strategy or organisation evolves', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (126, 'managed-governance');
INSERT INTO product_tags (variant_id, tag_name) VALUES (126, 'technology-governance');
INSERT INTO product_tags (variant_id, tag_name) VALUES (126, 'portfolio-management');
INSERT INTO product_tags (variant_id, tag_name) VALUES (126, 'IT-governance');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (126, 'Month 1: Onboarding, baseline establishment, and governance calendar confirmation', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (126, 'Months 2-3: First monthly reporting cycle, architecture review activation, and vendor oversight baseline', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (126, 'Quarterly: Architecture review, vendor risk refresh, and governance performance review', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (126, 'Ongoing: Monthly portfolio reporting, continuous monitoring, and optimisation cycles', 3);

-- DevSecOps Automation (High-Impact) - Assess (variant 127)
UPDATE product_variants SET positioning = 'A structured assessment of your delivery pipeline that shows where automation gaps slow releases and where security controls are missing.' WHERE id = 127;
UPDATE product_content SET description = 'Identify where your software delivery pipeline leaks speed, introduces security risk, or fails to meet reliability standards. The DigitalQatalyst team maps DevSecOps maturity across your toolchain and returns a prioritised roadmap your engineering and security leaders can act on.', positioning = 'A structured assessment of your delivery pipeline that shows where automation gaps slow releases and where security controls are missing.' WHERE variant_id = 127;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (127, 'Pipeline topology review covering build, test, security scanning, and deployment stages', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (127, 'Security control gap analysis against shift-left and DevSecOps best practices', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (127, 'Release velocity and defect-escape-rate benchmarking against your current toolchain', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (127, 'Prioritised remediation roadmap with effort estimates and risk-reduction impact scores', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (127, 'devsecops');
INSERT INTO product_tags (variant_id, tag_name) VALUES (127, 'ci-cd');
INSERT INTO product_tags (variant_id, tag_name) VALUES (127, 'pipeline-security');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (127, 'Days 1-2: Pipeline inventory, toolchain access, and stakeholder interviews', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (127, 'Days 3-4: Automated and manual control review, velocity data analysis, and gap documentation', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (127, 'Day 5: Findings playback, risk-ranked roadmap presentation, and next-step agreement', 2);
UPDATE products SET short_description = 'Identify where your software delivery pipeline leaks speed, introduces security risk, or fails to meet reliability standards. The DigitalQatalyst team maps DevSecOps maturity across your toolchain and returns a prioritised roadmap your engineering and security leaders can act on.', audience = 'CTOs, heads of engineering, DevOps leads, and application security managers', industry_relevance = 'Organisations building, integrating, or operating digital platforms and software products across any sector', business_impact = 'Identifies the pipeline bottlenecks and security gaps costing the most release velocity and audit risk, so remediation effort goes where it returns the greatest improvement.' WHERE id = (SELECT product_id FROM product_variants WHERE id = 127);

-- DevSecOps Automation (High-Impact) - Design (variant 128)
UPDATE product_variants SET positioning = 'A design engagement that produces a complete DevSecOps automation blueprint ready for your engineering teams to implement.' WHERE id = 128;
UPDATE product_content SET description = 'Design a DevSecOps automation programme that closes your pipeline security gaps, accelerates release cycles, and gives your engineering teams clear, build-ready specifications for every workflow change.', positioning = 'A design engagement that produces a complete DevSecOps automation blueprint ready for your engineering teams to implement.' WHERE variant_id = 128;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (128, 'Pipeline architecture design covering build, test, security scan, deploy, and observe stages', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (128, 'Security toolchain specification: SAST, DAST, dependency scanning, secrets detection, and container signing', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (128, 'Branching strategy, environment promotion gates, and release approval workflow design', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (128, 'Developer experience and adoption plan covering training, documentation, and inner-loop tooling', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (128, 'devsecops');
INSERT INTO product_tags (variant_id, tag_name) VALUES (128, 'ci-cd');
INSERT INTO product_tags (variant_id, tag_name) VALUES (128, 'pipeline-security');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (128, 'Week 1: Pipeline review, team interviews, and target-state goal alignment', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (128, 'Weeks 2-3: Architecture design, toolchain selection, and workflow specification workshops', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (128, 'Week 4: Blueprint review, developer experience validation, and build-readiness sign-off', 2);

-- DevSecOps Automation (High-Impact) - AI Design (variant 129)
UPDATE product_variants SET positioning = 'Define and validate the AI capabilities that will accelerate delivery and improve security posture, with governance built in from the start.' WHERE id = 129;
UPDATE product_content SET description = 'Validate which AI use cases will genuinely improve your DevSecOps pipeline, and design responsible, auditable workflows before any build investment is committed. The DigitalQatalyst team produces deployment-ready specifications for AI-assisted code review, anomaly detection, and predictive quality gating.', positioning = 'Define and validate the AI capabilities that will accelerate delivery and improve security posture, with governance built in from the start.' WHERE variant_id = 129;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (129, 'AI use-case evaluation: code review assistance, vulnerability prioritisation, anomaly detection, and predictive test selection', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (129, 'Data and signal readiness assessment covering pipeline telemetry, scan outputs, and historical defect data', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (129, 'Responsible AI workflow design with human review gates, model confidence thresholds, and override mechanisms', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (129, 'Deployment specification including model selection, monitoring approach, and feedback loop design', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (129, 'devsecops-ai');
INSERT INTO product_tags (variant_id, tag_name) VALUES (129, 'pipeline-security');
INSERT INTO product_tags (variant_id, tag_name) VALUES (129, 'ci-cd');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (129, 'Week 1: Use-case discovery, pipeline telemetry review, and feasibility scoring', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (129, 'Weeks 2-3: Responsible workflow design, guardrail specification, and engineering team validation', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (129, 'Week 4: Deployment specification sign-off and build-readiness confirmation', 2);

-- DevSecOps Automation (High-Impact) - Deploy (variant 130)
UPDATE product_variants SET positioning = 'A managed deployment that takes your DevSecOps design from specification to a production-ready, security-embedded pipeline.' WHERE id = 130;
UPDATE product_content SET description = 'Implement your DevSecOps automation blueprint with structured configuration, integration testing, and a controlled handover that leaves your engineering teams operating a faster, more secure delivery pipeline from day one.', positioning = 'A managed deployment that takes your DevSecOps design from specification to a production-ready, security-embedded pipeline.' WHERE variant_id = 130;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (130, 'Pipeline configuration and toolchain integration across build, test, security scan, and deploy stages', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (130, 'Security gate implementation including SAST, DAST, dependency scanning, and secrets detection policies', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (130, 'Environment promotion and release approval workflow setup with audit trail and approval controls', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (130, 'Engineering team enablement: pipeline onboarding, runbook creation, and go-live support', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (130, 'devsecops');
INSERT INTO product_tags (variant_id, tag_name) VALUES (130, 'ci-cd');
INSERT INTO product_tags (variant_id, tag_name) VALUES (130, 'pipeline-security');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (130, 'Weeks 1-4: Toolchain setup, pipeline configuration, and security gate integration', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (130, 'Weeks 5-9: Integration testing, policy validation, and defect resolution across all environments', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (130, 'Weeks 10-11: Team onboarding, runbook validation, and controlled go-live', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (130, 'Week 12: Hypercare, incident monitoring, and operational handover', 3);

-- DevSecOps Automation (High-Impact) - AI Deploy (variant 131)
UPDATE product_variants SET positioning = 'Put AI-assisted delivery and security capabilities into production with the audit trail and oversight controls your engineering organisation requires.' WHERE id = 131;
UPDATE product_content SET description = 'Deploy validated AI capabilities for code review assistance, vulnerability prioritisation, and anomaly detection into your live DevSecOps pipeline, with monitoring, override controls, and a governance handover that keeps your engineering and security teams in control.', positioning = 'Put AI-assisted delivery and security capabilities into production with the audit trail and oversight controls your engineering organisation requires.' WHERE variant_id = 131;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (131, 'Governed model deployment for approved use cases including predictive test selection and AI-assisted vulnerability prioritisation', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (131, 'Pipeline telemetry dashboards tracking model accuracy, false-positive rates, and delivery impact', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (131, 'Developer-facing override and feedback mechanisms embedded in existing tooling', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (131, 'Engineering team enablement on model behaviour, intervention scenarios, and performance review cadence', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (131, 'devsecops-ai');
INSERT INTO product_tags (variant_id, tag_name) VALUES (131, 'pipeline-security');
INSERT INTO product_tags (variant_id, tag_name) VALUES (131, 'ci-cd');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (131, 'Weeks 1-4: Production environment preparation, telemetry pipeline validation, and model staging', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (131, 'Weeks 5-8: Controlled rollout to pilot engineering teams with close monitoring', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (131, 'Weeks 9-10: Full rollout, override workflow validation, and performance baseline capture', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (131, 'Weeks 11-12: Governance handover, monitoring confirmation, and retraining schedule agreement', 3);

-- DevSecOps Automation (High-Impact) - Managed (variant 132)
UPDATE product_variants SET positioning = 'Ongoing management of your DevSecOps pipeline so delivery speed and security assurance never degrade as the organisation grows.' WHERE id = 132;
UPDATE product_content SET description = 'Keep your DevSecOps pipeline performing at pace with your engineering organisation: SLA-backed pipeline operations, monthly delivery and security metrics reporting, and ongoing optimisation as your platform and team scale.', positioning = 'Ongoing management of your DevSecOps pipeline so delivery speed and security assurance never degrade as the organisation grows.' WHERE variant_id = 132;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (132, 'Monthly delivery metrics reports covering deployment frequency, lead time, change failure rate, and security finding trends', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (132, 'Proactive pipeline health monitoring with incident response within agreed SLA windows', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (132, 'Policy and configuration updates as toolchains, teams, or security requirements evolve', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (132, 'Quarterly optimisation reviews identifying bottlenecks, redundant stages, and new automation opportunities', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (132, 'devsecops');
INSERT INTO product_tags (variant_id, tag_name) VALUES (132, 'ci-cd');
INSERT INTO product_tags (variant_id, tag_name) VALUES (132, 'managed-service');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (132, 'Month 1: Service baseline, monitoring setup, and SLA agreement confirmation', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (132, 'Months 2-3: First reporting cycle, initial optimisation actions, and policy update cadence established', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (132, 'Ongoing: Monthly delivery and security reports, quarterly optimisation sessions, and annual pipeline roadmap', 2);

-- IT Operations & Support (High-Impact) - Assess (variant 133)
UPDATE product_variants SET positioning = 'Find the operational gaps creating IT reliability risk and service desk inefficiency before they become incidents your business notices.' WHERE id = 133;
UPDATE product_content SET description = 'Audit your IT operations and service desk to identify where incidents are taking too long to resolve, where change control is creating risk, and where manual effort is reducing your team''s capacity for strategic work.', positioning = 'Find the operational gaps creating IT reliability risk and service desk inefficiency before they become incidents your business notices.' WHERE variant_id = 133;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (133, 'IT service desk audit covering incident volumes, resolution times, escalation rates, and repeat failures', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (133, 'Change management process review assessing control effectiveness and the risk of uncontrolled change', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (133, 'Operational tooling assessment covering monitoring coverage, alert quality, and automation maturity', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (133, 'Prioritised improvement roadmap with effort scores and quick-win identification for your IT leadership', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (133, 'it-operations');
INSERT INTO product_tags (variant_id, tag_name) VALUES (133, 'itsm');
INSERT INTO product_tags (variant_id, tag_name) VALUES (133, 'service-desk');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (133, 'Days 1-2: ITSM data review, tooling assessment, and stakeholder interviews with IT operations and service desk leads', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (133, 'Days 3-4: Gap analysis, change risk assessment, and roadmap sequencing', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (133, 'Day 5: Findings presentation and prioritised IT operations improvement roadmap', 2);
UPDATE products SET short_description = 'Audit your IT operations and service desk to identify where incidents are taking too long to resolve, where change control is creating risk, and where manual effort is reducing your team''s capacity for strategic work.', audience = 'CIOs, IT Operations directors, and IT Service Desk and Infrastructure leads', industry_relevance = 'Organisations dependent on reliable IT services to support their business operations, whether running on-premises, cloud, or hybrid infrastructure', business_impact = 'Identifies the specific incident, change, and automation gaps reducing IT service reliability and team productivity, and prioritises the fixes that will lower outage frequency and improve service desk throughput.' WHERE id = (SELECT product_id FROM product_variants WHERE id = 133);

-- IT Operations & Support (High-Impact) - Design (variant 134)
UPDATE product_variants SET positioning = 'An IT operations design that gives your service desk team the structure and tools to manage incidents and change without firefighting.' WHERE id = 134;
UPDATE product_content SET description = 'Design the ITSM processes, tooling architecture, and automation workflows your IT operations team needs to resolve incidents faster, control change more effectively, and reduce manual workload.', positioning = 'An IT operations design that gives your service desk team the structure and tools to manage incidents and change without firefighting.' WHERE variant_id = 134;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (134, 'ITSM process design covering incident, problem, change, and request management tailored to your operational environment', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (134, 'Automation workflow design for alert triage, ticket enrichment, and routine resolution paths', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (134, 'Monitoring and observability architecture aligned to your infrastructure and the services your business depends on', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (134, 'Tooling integration specifications connecting your ITSM platform to monitoring, asset management, and CI/CD systems', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (134, 'it-operations');
INSERT INTO product_tags (variant_id, tag_name) VALUES (134, 'itsm');
INSERT INTO product_tags (variant_id, tag_name) VALUES (134, 'service-desk');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (134, 'Week 1: Discovery workshops with IT operations, service desk, and infrastructure stakeholders', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (134, 'Weeks 2-3: Process design, automation workflow, monitoring architecture, and integration specifications', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (134, 'Week 4: Design review, adoption planning, and specification sign-off', 2);

-- IT Operations & Support (High-Impact) - AI Design (variant 135)
UPDATE product_variants SET positioning = 'AI for IT operations, validated against your operational data and designed with the safety controls your infrastructure team requires.' WHERE id = 135;
UPDATE product_content SET description = 'Validate which AI capabilities can genuinely improve incident resolution and IT operations efficiency for your organisation, then produce responsible workflow designs and deployment specifications ready for build.', positioning = 'AI for IT operations, validated against your operational data and designed with the safety controls your infrastructure team requires.' WHERE variant_id = 135;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (135, 'AI use-case scoring for intelligent incident triage, anomaly detection, predictive failure prevention, and self-healing automation', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (135, 'Data readiness assessment confirming which use cases your monitoring, ticket, and log data supports', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (135, 'Responsible AI workflow designs with human approval gates, rollback controls, and blast-radius limits for automated remediation', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (135, 'Technical specifications for integration with your ITSM, monitoring, and infrastructure platforms', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (135, 'it-operations');
INSERT INTO product_tags (variant_id, tag_name) VALUES (135, 'ai-design');
INSERT INTO product_tags (variant_id, tag_name) VALUES (135, 'itsm');
INSERT INTO product_tags (variant_id, tag_name) VALUES (135, 'responsible-ai');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (135, 'Week 1: AI opportunity identification, operational data assessment, and use-case shortlisting', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (135, 'Weeks 2-3: Use-case validation, responsible design, and workflow specification', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (135, 'Week 4: Technical specifications, governance framework, and stakeholder sign-off', 2);

-- IT Operations & Support (High-Impact) - Deploy (variant 136)
UPDATE product_variants SET positioning = 'IT operations capabilities delivered and tested, with your team ready to manage incidents and change before the project closes.' WHERE id = 136;
UPDATE product_content SET description = 'Configure, integrate, test, and launch your ITSM and IT operations platform improvements with structured quality assurance and a handover that leaves your operations team fully equipped to manage them independently.', positioning = 'IT operations capabilities delivered and tested, with your team ready to manage incidents and change before the project closes.' WHERE variant_id = 136;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (136, 'ITSM platform configuration built to approved process specifications covering incident, change, and request management', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (136, 'Monitoring and alerting configuration validated against your agreed coverage requirements and noise reduction targets', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (136, 'Integration delivery connecting ITSM to monitoring, asset management, and CI/CD systems, with documented test evidence', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (136, 'Operations team training and go-live readiness assessment completed before the controlled launch', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (136, 'it-operations');
INSERT INTO product_tags (variant_id, tag_name) VALUES (136, 'itsm');
INSERT INTO product_tags (variant_id, tag_name) VALUES (136, 'service-desk');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (136, 'Weeks 1-4: ITSM configuration, automation build, monitoring setup, and integration delivery', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (136, 'Weeks 5-8: System integration testing, alert validation, and defect resolution', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (136, 'Weeks 9-11: Operations team user acceptance testing, training, and launch readiness sign-off', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (136, 'Week 12: Controlled launch and post-go-live support handover', 3);

-- IT Operations & Support (High-Impact) - AI Deploy (variant 137)
UPDATE product_variants SET positioning = 'AI-assisted incident detection and operations automation in production, with the safety controls your infrastructure team demands.' WHERE id = 137;
UPDATE product_content SET description = 'Deploy validated AI capabilities into your IT operations and ITSM environment with production monitoring, safety controls, and a structured handover that gives your operations team full ownership of the capability.', positioning = 'AI-assisted incident detection and operations automation in production, with the safety controls your infrastructure team demands.' WHERE variant_id = 137;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (137, 'Production deployment of AI models integrated into your ITSM, monitoring, and alerting workflows', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (137, 'Safety controls and blast-radius limits validated before any automated remediation goes live in production', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (137, 'AI operations dashboards covering detection accuracy, false positive rates, automated resolution success, and model health', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (137, 'Operations team training and runbook so your engineers understand how to work alongside and manage the AI capability', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (137, 'it-operations');
INSERT INTO product_tags (variant_id, tag_name) VALUES (137, 'ai-deploy');
INSERT INTO product_tags (variant_id, tag_name) VALUES (137, 'itsm');
INSERT INTO product_tags (variant_id, tag_name) VALUES (137, 'responsible-ai');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (137, 'Weeks 1-4: Infrastructure provisioning, model integration, and staging environment validation', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (137, 'Weeks 5-8: Staged production deployment, safety control verification, and monitoring configuration', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (137, 'Weeks 9-11: Performance validation, operations team training, and handover preparation', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (137, 'Week 12: Production sign-off and operational handover', 3);

-- IT Operations & Support (High-Impact) - Managed (variant 138)
UPDATE product_variants SET positioning = 'Your IT operations platform continuously maintained and optimised, so your team resolves incidents faster and changes land without surprises.' WHERE id = 138;
UPDATE product_content SET description = 'Keep your IT operations and ITSM platform running reliably, with ongoing monitoring, proactive incident trend analysis, and a team accountable to your service levels so your IT function can focus on delivery.', positioning = 'Your IT operations platform continuously maintained and optimised, so your team resolves incidents faster and changes land without surprises.' WHERE variant_id = 138;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (138, 'Monthly ITSM platform health checks covering routing accuracy, SLA compliance, automation success rates, and integration reliability', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (138, 'Incident trend analysis and problem management support to reduce repeat failures over time', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (138, 'Release and update management with regression testing before any ITSM changes reach the production environment', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (138, 'Monthly IT operations report covering service levels, incident trends, change success rates, and a forward improvement plan', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (138, 'it-operations');
INSERT INTO product_tags (variant_id, tag_name) VALUES (138, 'managed-service');
INSERT INTO product_tags (variant_id, tag_name) VALUES (138, 'itsm');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (138, 'Month 1: Service baseline, monitoring configuration, and SLA framework agreement', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (138, 'Months 2-3: First trend analysis cycle and monthly reporting cadence established', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (138, 'Ongoing: Monthly health checks, problem management reviews, and quarterly service alignment sessions', 2);

-- Farming Operations (High-Impact) - Assess (variant 149)
UPDATE product_variants SET positioning = 'A structured assessment that reveals where operational gaps are costing yield, water, and labour, and what to fix first.' WHERE id = 149;
UPDATE product_content SET description = 'Understand where your farming operations fall short on yield visibility, resource efficiency, and planning accuracy. The DigitalQatalyst team assesses your current operational maturity and returns a prioritised roadmap your agribusiness leaders can act on.', positioning = 'A structured assessment that reveals where operational gaps are costing yield, water, and labour, and what to fix first.' WHERE variant_id = 149;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (149, 'Yield tracking and crop performance visibility gap analysis across fields and seasons', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (149, 'Resource usage audit covering irrigation scheduling, input application, and equipment utilisation', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (149, 'Operational planning and coordination review across planting, harvesting, and logistics cycles', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (149, 'Prioritised improvement roadmap with effort estimates and expected yield or cost impact', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (149, 'agribusiness');
INSERT INTO product_tags (variant_id, tag_name) VALUES (149, 'precision-agriculture');
INSERT INTO product_tags (variant_id, tag_name) VALUES (149, 'farm-operations');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (149, 'Days 1-2: Stakeholder interviews, data review, and operational scope confirmation', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (149, 'Days 3-4: Field operations analysis, system and data gap documentation, and benchmarking', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (149, 'Day 5: Findings presentation, prioritised roadmap walkthrough, and next-step agreement', 2);
UPDATE products SET short_description = 'Understand where your farming operations fall short on yield visibility, resource efficiency, and planning accuracy. The DigitalQatalyst team assesses your current operational maturity and returns a prioritised roadmap your agribusiness leaders can act on.', audience = 'Agribusiness executives, farm operations managers, and heads of agricultural production', industry_relevance = 'Agribusiness, food production, crop operations, and agricultural service providers pursuing digital and operational improvement', business_impact = 'Surfaces the yield tracking and resource efficiency gaps costing the most per season, so investment goes to the improvements with the clearest return.' WHERE id = (SELECT product_id FROM product_variants WHERE id = 149);

-- Farming Operations (High-Impact) - Design (variant 150)
UPDATE product_variants SET positioning = 'A design engagement that produces farming operations specifications ready for technology configuration and rollout.' WHERE id = 150;
UPDATE product_content SET description = 'Turn farming operations improvement goals into a complete, build-ready blueprint: field monitoring workflows, resource scheduling logic, integration specifications, and an adoption plan your operations team can execute from the next season.', positioning = 'A design engagement that produces farming operations specifications ready for technology configuration and rollout.' WHERE variant_id = 150;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (150, 'Field monitoring and crop performance tracking workflow design for managers and field operators', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (150, 'Resource scheduling logic for irrigation, input application, and equipment across planting and harvest cycles', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (150, 'Integration specifications for farm management systems, IoT sensors, and logistics platforms', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (150, 'Operational adoption plan covering training, phased rollout, and early-life support across seasonal transitions', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (150, 'agribusiness');
INSERT INTO product_tags (variant_id, tag_name) VALUES (150, 'precision-agriculture');
INSERT INTO product_tags (variant_id, tag_name) VALUES (150, 'farm-operations');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (150, 'Week 1: Current-state review, goal alignment, and operational workflow workshops', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (150, 'Weeks 2-3: Workflow design, integration specification, and prototype validation with field teams', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (150, 'Week 4: Final blueprint review, adoption planning, and build-readiness sign-off', 2);

-- Farming Operations (High-Impact) - AI Design (variant 151)
UPDATE product_variants SET positioning = 'Define the AI use cases that will improve yield and reduce input waste, with data readiness and responsible workflow design confirmed before build.' WHERE id = 151;
UPDATE product_content SET description = 'Validate where AI can improve yield prediction, irrigation scheduling, and pest or disease detection before any build investment is committed. The DigitalQatalyst team designs responsible, audit-ready workflows and deployment-ready specifications for every approved agricultural AI use case.', positioning = 'Define the AI use cases that will improve yield and reduce input waste, with data readiness and responsible workflow design confirmed before build.' WHERE variant_id = 151;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (151, 'AI use-case evaluation: yield forecasting, irrigation optimisation, pest detection, and crop health monitoring', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (151, 'Data readiness assessment covering satellite imagery, sensor telemetry, historical yield data, and weather feeds', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (151, 'Responsible AI workflow design with agronomist review gates, confidence thresholds, and field override mechanisms', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (151, 'Deployment specification including model selection criteria, monitoring approach, and seasonal retraining schedules', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (151, 'precision-agriculture');
INSERT INTO product_tags (variant_id, tag_name) VALUES (151, 'agricultural-ai');
INSERT INTO product_tags (variant_id, tag_name) VALUES (151, 'farm-operations');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (151, 'Week 1: Use-case discovery, data landscape review, and feasibility scoring', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (151, 'Weeks 2-3: Responsible workflow design, guardrail specification, and agronomist validation', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (151, 'Week 4: Deployment specification sign-off and build-readiness confirmation', 2);

-- Farming Operations (High-Impact) - Deploy (variant 152)
UPDATE product_variants SET positioning = 'A managed deployment that takes your farming operations blueprint from specification to a live, tested platform aligned to your seasonal calendar.' WHERE id = 152;
UPDATE product_content SET description = 'Configure, integrate, and launch your farming operations platform with structured testing across field and back-office workflows, and a controlled handover that leaves your operations team self-sufficient before the next season begins.', positioning = 'A managed deployment that takes your farming operations blueprint from specification to a live, tested platform aligned to your seasonal calendar.' WHERE variant_id = 152;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (152, 'Platform configuration against approved field monitoring, resource scheduling, and logistics workflows', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (152, 'End-to-end integration testing with farm management systems, IoT sensor networks, and logistics providers', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (152, 'Field acceptance testing with farm managers, supervisors, and representative field operators', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (152, 'Seasonal go-live planning with hypercare support timed to avoid critical planting or harvest windows', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (152, 'agribusiness');
INSERT INTO product_tags (variant_id, tag_name) VALUES (152, 'farm-operations');
INSERT INTO product_tags (variant_id, tag_name) VALUES (152, 'precision-agriculture');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (152, 'Weeks 1-4: Environment setup, platform configuration, and integration development', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (152, 'Weeks 5-9: System integration testing, sensor data validation, and defect resolution', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (152, 'Weeks 10-11: Field acceptance testing and operational sign-off', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (152, 'Week 12: Controlled go-live, hypercare, and operational handover', 3);

-- Farming Operations (High-Impact) - AI Deploy (variant 153)
UPDATE product_variants SET positioning = 'Put AI-powered crop management and resource optimisation into production, with responsible controls that keep agronomist expertise at the centre of every decision.' WHERE id = 153;
UPDATE product_content SET description = 'Deploy validated AI capabilities for yield forecasting, irrigation optimisation, and pest detection into your live farming operations environment, with seasonal monitoring, agronomist override controls, and a governance handover that keeps your operations team in control.', positioning = 'Put AI-powered crop management and resource optimisation into production, with responsible controls that keep agronomist expertise at the centre of every decision.' WHERE variant_id = 153;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (153, 'Governed model deployment for approved use cases including yield forecasting and variable-rate irrigation scheduling', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (153, 'Field-level monitoring dashboards tracking model accuracy, recommendation adoption rates, and yield impact', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (153, 'Agronomist review workflows and override mechanisms embedded in field management tooling', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (153, 'Operations team enablement on model behaviour, seasonal retraining, and performance review cadence', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (153, 'precision-agriculture');
INSERT INTO product_tags (variant_id, tag_name) VALUES (153, 'agricultural-ai');
INSERT INTO product_tags (variant_id, tag_name) VALUES (153, 'farm-operations');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (153, 'Weeks 1-4: Production environment setup, data pipeline validation, and model staging', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (153, 'Weeks 5-8: Controlled rollout to pilot fields or farm zones with close monitoring', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (153, 'Weeks 9-10: Full rollout, override workflow validation, and seasonal baseline capture', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (153, 'Weeks 11-12: Governance handover, monitoring confirmation, and retraining schedule agreement', 3);

-- Farming Operations (High-Impact) - Managed (variant 154)
UPDATE product_variants SET positioning = 'Ongoing management of your farming operations platform so yield visibility and resource efficiency never degrade across seasons.' WHERE id = 154;
UPDATE product_content SET description = 'Keep your farming operations platform performing across every season: SLA-backed system operations, monthly yield and resource performance reporting, and ongoing optimisation as your farm footprint and crop programmes evolve.', positioning = 'Ongoing management of your farming operations platform so yield visibility and resource efficiency never degrade across seasons.' WHERE variant_id = 154;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (154, 'Monthly performance reports covering yield tracking accuracy, resource utilisation, and system health', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (154, 'Proactive platform monitoring with incident response within agreed SLA windows', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (154, 'Seasonal configuration updates as crop programmes, field boundaries, or equipment change', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (154, 'Annual optimisation review identifying new capability opportunities and data quality improvements', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (154, 'agribusiness');
INSERT INTO product_tags (variant_id, tag_name) VALUES (154, 'farm-operations');
INSERT INTO product_tags (variant_id, tag_name) VALUES (154, 'managed-service');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (154, 'Month 1: Service baseline, seasonal calendar mapping, and SLA agreement confirmation', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (154, 'Months 2-3: First reporting cycle, initial optimisation recommendations, and configuration update cadence', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (154, 'Ongoing: Monthly performance reports, seasonal configuration updates, and annual capability review', 2);

-- Manufacturing Operations (High-Impact) - Assess (variant 155)
UPDATE product_variants SET positioning = 'A structured plant assessment that shows where production gaps are costing throughput and quality, and what to address first.' WHERE id = 155;
UPDATE product_content SET description = 'Identify where your manufacturing operations are losing throughput, masking quality issues, or running blind on downtime. The DigitalQatalyst team assesses plant operational maturity and delivers a prioritised roadmap your operations and plant leaders can act on.', positioning = 'A structured plant assessment that shows where production gaps are costing throughput and quality, and what to address first.' WHERE variant_id = 155;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (155, 'Production throughput and OEE gap analysis across lines, shifts, and equipment classes', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (155, 'Quality control visibility review covering defect detection, reporting accuracy, and escape rates', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (155, 'Downtime and maintenance planning audit: planned versus unplanned maintenance ratios and root-cause tracking', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (155, 'Prioritised improvement roadmap with effort estimates and expected throughput or quality impact', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (155, 'manufacturing');
INSERT INTO product_tags (variant_id, tag_name) VALUES (155, 'oee');
INSERT INTO product_tags (variant_id, tag_name) VALUES (155, 'plant-operations');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (155, 'Days 1-2: Plant tours, production data review, and stakeholder interviews', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (155, 'Days 3-4: OEE analysis, quality and downtime gap documentation, and benchmarking', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (155, 'Day 5: Findings presentation, prioritised roadmap walkthrough, and next-step agreement', 2);
UPDATE products SET short_description = 'Identify where your manufacturing operations are losing throughput, masking quality issues, or running blind on downtime. The DigitalQatalyst team assesses plant operational maturity and delivers a prioritised roadmap your operations and plant leaders can act on.', audience = 'Plant managers, heads of manufacturing, operations directors, and continuous improvement leads', industry_relevance = 'Manufacturers, industrial operators, and production environments across discrete, process, and mixed manufacturing sectors', business_impact = 'Surfaces the throughput and quality losses costing the most per shift, so improvement investment goes to the changes with the greatest return on production capacity.' WHERE id = (SELECT product_id FROM product_variants WHERE id = 155);

-- Manufacturing Operations (High-Impact) - Design (variant 156)
UPDATE product_variants SET positioning = 'A design engagement that produces manufacturing operations specifications ready for MES configuration and plant rollout.' WHERE id = 156;
UPDATE product_content SET description = 'Turn manufacturing improvement goals into a complete, build-ready operations blueprint: production workflow designs, quality control specifications, maintenance scheduling logic, and an adoption plan your plant teams can execute without ambiguity.', positioning = 'A design engagement that produces manufacturing operations specifications ready for MES configuration and plant rollout.' WHERE variant_id = 156;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (156, 'Production workflow design covering scheduling, WIP tracking, line balancing, and shift handover processes', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (156, 'Quality control specification: inspection points, defect classification, corrective action workflows, and reporting', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (156, 'Preventive and predictive maintenance scheduling logic tied to equipment class and production calendars', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (156, 'Plant adoption plan covering operator training, phased line rollout, and early-life support', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (156, 'manufacturing');
INSERT INTO product_tags (variant_id, tag_name) VALUES (156, 'oee');
INSERT INTO product_tags (variant_id, tag_name) VALUES (156, 'plant-operations');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (156, 'Week 1: Plant review, goal alignment, and production workflow workshops with operations and quality teams', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (156, 'Weeks 2-3: Workflow design, MES and ERP integration specification, and prototype validation', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (156, 'Week 4: Final blueprint review, adoption planning, and build-readiness sign-off', 2);

-- Manufacturing Operations (High-Impact) - AI Design (variant 157)
UPDATE product_variants SET positioning = 'Define and validate the AI use cases that will improve production output and reduce quality escapes, with data readiness confirmed before build.' WHERE id = 157;
UPDATE product_content SET description = 'Validate which AI use cases will genuinely improve throughput, quality, and maintenance performance before committing build budget. The DigitalQatalyst team designs responsible, audit-ready workflows and deployment-ready specifications for every approved manufacturing AI application.', positioning = 'Define and validate the AI use cases that will improve production output and reduce quality escapes, with data readiness confirmed before build.' WHERE variant_id = 157;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (157, 'AI use-case evaluation: predictive maintenance, visual quality inspection, demand-based production scheduling, and OEE anomaly detection', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (157, 'Data readiness assessment covering sensor telemetry, MES output, maintenance records, and quality inspection data', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (157, 'Responsible AI workflow design with quality engineer review gates, confidence thresholds, and production override mechanisms', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (157, 'Deployment specification including model selection, monitoring approach, and retraining trigger design', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (157, 'manufacturing-ai');
INSERT INTO product_tags (variant_id, tag_name) VALUES (157, 'predictive-maintenance');
INSERT INTO product_tags (variant_id, tag_name) VALUES (157, 'plant-operations');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (157, 'Week 1: Use-case discovery, manufacturing data landscape review, and feasibility scoring', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (157, 'Weeks 2-3: Responsible workflow design, guardrail specification, and plant team validation', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (157, 'Week 4: Deployment specification sign-off and build-readiness confirmation', 2);

-- Manufacturing Operations (High-Impact) - Deploy (variant 158)
UPDATE product_variants SET positioning = 'A managed deployment that takes your manufacturing blueprint from specification to a live, production-tested platform.' WHERE id = 158;
UPDATE product_content SET description = 'Configure, integrate, and launch your manufacturing operations platform with structured testing across production, quality, and maintenance workflows, and a controlled handover that leaves your plant team ready to operate independently.', positioning = 'A managed deployment that takes your manufacturing blueprint from specification to a live, production-tested platform.' WHERE variant_id = 158;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (158, 'MES configuration against approved production scheduling, WIP tracking, and quality control workflows', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (158, 'End-to-end integration testing with ERP, sensor networks, SCADA, and maintenance management systems', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (158, 'Operator and supervisor acceptance testing across all in-scope lines and work centres', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (158, 'Hypercare period covering production issue resolution and adoption support in the first weeks of live operation', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (158, 'manufacturing');
INSERT INTO product_tags (variant_id, tag_name) VALUES (158, 'oee');
INSERT INTO product_tags (variant_id, tag_name) VALUES (158, 'plant-operations');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (158, 'Weeks 1-4: Environment setup, MES configuration, and integration development', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (158, 'Weeks 5-9: System and integration testing, data validation, and defect resolution', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (158, 'Weeks 10-11: Operator acceptance testing and plant sign-off', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (158, 'Week 12: Controlled go-live, hypercare, and operational handover', 3);

-- Manufacturing Operations (High-Impact) - AI Deploy (variant 159)
UPDATE product_variants SET positioning = 'Put AI-powered maintenance, quality, and scheduling capabilities into production with the oversight controls your plant and quality teams require.' WHERE id = 159;
UPDATE product_content SET description = 'Deploy validated AI capabilities for predictive maintenance, visual quality inspection, and production scheduling into your live manufacturing environment, with real-time monitoring, engineer override controls, and a governance handover that keeps your plant team in control.', positioning = 'Put AI-powered maintenance, quality, and scheduling capabilities into production with the oversight controls your plant and quality teams require.' WHERE variant_id = 159;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (159, 'Governed model deployment for approved use cases including predictive maintenance and visual defect detection', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (159, 'Line-level dashboards tracking model accuracy, engineer override rates, and production impact', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (159, 'Quality engineer and maintenance technician override workflows embedded in existing plant systems', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (159, 'Plant team enablement on model behaviour, retraining triggers, and monthly performance review', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (159, 'manufacturing-ai');
INSERT INTO product_tags (variant_id, tag_name) VALUES (159, 'predictive-maintenance');
INSERT INTO product_tags (variant_id, tag_name) VALUES (159, 'plant-operations');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (159, 'Weeks 1-4: Production environment setup, sensor data pipeline validation, and model staging', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (159, 'Weeks 5-8: Controlled rollout to pilot lines with close monitoring', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (159, 'Weeks 9-10: Full plant rollout, override workflow validation, and performance baseline capture', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (159, 'Weeks 11-12: Governance handover, monitoring confirmation, and retraining schedule agreement', 3);

-- Manufacturing Operations (High-Impact) - Managed (variant 160)
UPDATE product_variants SET positioning = 'Ongoing management of your manufacturing platform so production visibility, quality controls, and maintenance scheduling never degrade.' WHERE id = 160;
UPDATE product_content SET description = 'Keep your manufacturing operations platform and production performance metrics running reliably: SLA-backed system operations, monthly OEE and quality reporting, and ongoing optimisation as your plant footprint and production programmes grow.', positioning = 'Ongoing management of your manufacturing platform so production visibility, quality controls, and maintenance scheduling never degrade.' WHERE variant_id = 160;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (160, 'Monthly OEE, quality, and maintenance performance reports with trend analysis and recommended actions', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (160, 'Proactive platform monitoring with incident response within agreed SLA windows', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (160, 'Configuration updates as production lines, equipment classes, or quality standards change', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (160, 'Quarterly optimisation reviews identifying throughput improvement and technical debt reduction opportunities', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (160, 'manufacturing');
INSERT INTO product_tags (variant_id, tag_name) VALUES (160, 'oee');
INSERT INTO product_tags (variant_id, tag_name) VALUES (160, 'managed-service');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (160, 'Month 1: Service baseline, production calendar mapping, and SLA agreement confirmation', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (160, 'Months 2-3: First reporting cycle, initial optimisation recommendations, and configuration update cadence established', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (160, 'Ongoing: Monthly OEE and quality reports, quarterly optimisation sessions, and annual plant roadmap', 2);

-- Infrastructure Operations (High-Impact) - Assess (variant 161)
UPDATE product_variants SET positioning = 'A structured assessment that shows where infrastructure asset gaps create reliability and service continuity risk, and what to prioritise first.' WHERE id = 161;
UPDATE product_content SET description = 'Identify where your infrastructure operations are creating asset reliability risk, maintenance planning gaps, or field productivity loss. The DigitalQatalyst team assesses operational maturity across your asset portfolio and returns a prioritised roadmap your asset and operations leaders can act on.', positioning = 'A structured assessment that shows where infrastructure asset gaps create reliability and service continuity risk, and what to prioritise first.' WHERE variant_id = 161;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (161, 'Asset registry and condition visibility audit across your infrastructure portfolio', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (161, 'Maintenance planning review: planned versus reactive maintenance ratios and work order management accuracy', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (161, 'Field workforce productivity gap analysis covering job scheduling, parts availability, and travel efficiency', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (161, 'Prioritised improvement roadmap with effort estimates and expected reliability or cost impact', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (161, 'asset-management');
INSERT INTO product_tags (variant_id, tag_name) VALUES (161, 'infrastructure');
INSERT INTO product_tags (variant_id, tag_name) VALUES (161, 'maintenance-operations');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (161, 'Days 1-2: Asset portfolio review, operational data access, and stakeholder interviews', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (161, 'Days 3-4: Maintenance and field operations analysis, gap documentation, and benchmarking', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (161, 'Day 5: Findings presentation, prioritised roadmap walkthrough, and next-step agreement', 2);
UPDATE products SET short_description = 'Identify where your infrastructure operations are creating asset reliability risk, maintenance planning gaps, or field productivity loss. The DigitalQatalyst team assesses operational maturity across your asset portfolio and returns a prioritised roadmap your asset and operations leaders can act on.', audience = 'Asset managers, heads of infrastructure operations, maintenance directors, and field operations leads', industry_relevance = 'Utilities, transport, real estate, facilities management, energy, and other asset-intensive operators', business_impact = 'Surfaces the asset visibility and maintenance planning gaps creating the greatest reliability risk, so investment goes to the improvements with the most direct impact on service continuity.' WHERE id = (SELECT product_id FROM product_variants WHERE id = 161);

-- Infrastructure Operations (High-Impact) - Design (variant 162)
UPDATE product_variants SET positioning = 'A design engagement that produces infrastructure operations specifications ready for EAM configuration and field rollout.' WHERE id = 162;
UPDATE product_content SET description = 'Turn infrastructure operations improvement goals into a complete, build-ready blueprint: asset management workflows, maintenance scheduling logic, field workforce coordination specifications, and an adoption plan your operations teams can execute without ambiguity.', positioning = 'A design engagement that produces infrastructure operations specifications ready for EAM configuration and field rollout.' WHERE variant_id = 162;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (162, 'Asset lifecycle workflow design covering inspection, condition assessment, work order creation, and disposal', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (162, 'Preventive and condition-based maintenance scheduling logic tied to asset class and criticality', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (162, 'Field workforce coordination specification: job scheduling, parts and materials management, and completion recording', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (162, 'Operations adoption plan covering technician training, mobile tool rollout, and early-life support', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (162, 'asset-management');
INSERT INTO product_tags (variant_id, tag_name) VALUES (162, 'infrastructure');
INSERT INTO product_tags (variant_id, tag_name) VALUES (162, 'maintenance-operations');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (162, 'Week 1: Asset portfolio review, goal alignment, and operations workflow workshops', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (162, 'Weeks 2-3: Workflow design, EAM and GIS integration specification, and prototype validation with field teams', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (162, 'Week 4: Final blueprint review, adoption planning, and build-readiness sign-off', 2);

-- Infrastructure Operations (High-Impact) - AI Design (variant 163)
UPDATE product_variants SET positioning = 'Define and validate the AI capabilities that will improve asset uptime and field efficiency, with data readiness and responsible design confirmed before build.' WHERE id = 163;
UPDATE product_content SET description = 'Validate which AI use cases will genuinely improve asset reliability, maintenance scheduling, and field productivity before committing build budget. The DigitalQatalyst team designs responsible, audit-ready workflows and deployment-ready specifications for every approved infrastructure AI application.', positioning = 'Define and validate the AI capabilities that will improve asset uptime and field efficiency, with data readiness and responsible design confirmed before build.' WHERE variant_id = 163;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (163, 'AI use-case evaluation: predictive asset failure, condition-based maintenance scheduling, field route optimisation, and fault pattern detection', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (163, 'Data readiness assessment covering sensor telemetry, maintenance history, inspection records, and GIS data', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (163, 'Responsible AI workflow design with engineer review gates, confidence thresholds, and field override mechanisms', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (163, 'Deployment specification including model selection criteria, monitoring approach, and retraining trigger design', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (163, 'infrastructure-ai');
INSERT INTO product_tags (variant_id, tag_name) VALUES (163, 'asset-management');
INSERT INTO product_tags (variant_id, tag_name) VALUES (163, 'predictive-maintenance');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (163, 'Week 1: Use-case discovery, asset data landscape review, and feasibility scoring', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (163, 'Weeks 2-3: Responsible workflow design, guardrail specification, and operations team validation', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (163, 'Week 4: Deployment specification sign-off and build-readiness confirmation', 2);

-- Infrastructure Operations (High-Impact) - Deploy (variant 164)
UPDATE product_variants SET positioning = 'A managed deployment that takes your infrastructure operations blueprint from specification to a live, field-tested platform.' WHERE id = 164;
UPDATE product_content SET description = 'Configure, integrate, and launch your infrastructure operations platform with structured testing across asset management, maintenance, and field workforce workflows, and a controlled handover that leaves your operations team ready to manage assets independently.', positioning = 'A managed deployment that takes your infrastructure operations blueprint from specification to a live, field-tested platform.' WHERE variant_id = 164;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (164, 'EAM and field management platform configuration against approved asset lifecycle, maintenance, and job scheduling workflows', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (164, 'End-to-end integration testing with GIS, sensor networks, finance systems, and regulatory reporting platforms', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (164, 'Field technician and supervisor acceptance testing across all in-scope asset classes and work order types', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (164, 'Hypercare period covering field issue resolution and adoption support in the first weeks of live operation', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (164, 'asset-management');
INSERT INTO product_tags (variant_id, tag_name) VALUES (164, 'infrastructure');
INSERT INTO product_tags (variant_id, tag_name) VALUES (164, 'maintenance-operations');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (164, 'Weeks 1-4: Environment setup, EAM configuration, and integration development', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (164, 'Weeks 5-9: System integration testing, asset data migration validation, and defect resolution', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (164, 'Weeks 10-11: Field acceptance testing and operational sign-off', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (164, 'Week 12: Controlled go-live, hypercare, and operational handover', 3);

-- Infrastructure Operations (High-Impact) - AI Deploy (variant 165)
UPDATE product_variants SET positioning = 'Put AI-powered asset reliability and field optimisation capabilities into production with the oversight and audit controls your operations leadership requires.' WHERE id = 165;
UPDATE product_content SET description = 'Deploy validated AI capabilities for predictive asset failure, condition-based maintenance, and field route optimisation into your live infrastructure operations environment, with real-time monitoring, engineer override controls, and a governance handover that keeps your operations team in control.', positioning = 'Put AI-powered asset reliability and field optimisation capabilities into production with the oversight and audit controls your operations leadership requires.' WHERE variant_id = 165;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (165, 'Governed model deployment for approved use cases including predictive failure and condition-based maintenance scheduling', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (165, 'Portfolio-level dashboards tracking model accuracy, maintenance prediction hit rates, and field productivity impact', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (165, 'Engineer and technician override workflows embedded in EAM and field management tools', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (165, 'Operations team enablement on model behaviour, retraining triggers, and quarterly performance review', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (165, 'infrastructure-ai');
INSERT INTO product_tags (variant_id, tag_name) VALUES (165, 'asset-management');
INSERT INTO product_tags (variant_id, tag_name) VALUES (165, 'predictive-maintenance');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (165, 'Weeks 1-4: Production environment setup, sensor data pipeline validation, and model staging', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (165, 'Weeks 5-8: Controlled rollout to pilot asset classes with close monitoring', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (165, 'Weeks 9-10: Full portfolio rollout, override workflow validation, and performance baseline capture', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (165, 'Weeks 11-12: Governance handover, monitoring confirmation, and retraining schedule agreement', 3);

-- Infrastructure Operations (High-Impact) - Managed (variant 166)
UPDATE product_variants SET positioning = 'Ongoing management of your infrastructure operations platform so asset visibility, maintenance scheduling, and field coordination never degrade.' WHERE id = 166;
UPDATE product_content SET description = 'Keep your infrastructure operations platform and asset performance metrics running reliably: SLA-backed system operations, monthly asset health and maintenance reporting, and ongoing optimisation as your asset portfolio and regulatory requirements evolve.', positioning = 'Ongoing management of your infrastructure operations platform so asset visibility, maintenance scheduling, and field coordination never degrade.' WHERE variant_id = 166;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (166, 'Monthly asset health and maintenance performance reports with reliability trend analysis', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (166, 'Proactive platform monitoring with incident response within agreed SLA windows', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (166, 'Configuration updates as asset portfolios, maintenance standards, or regulatory requirements change', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (166, 'Quarterly optimisation reviews identifying reliability improvement and field productivity opportunities', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (166, 'asset-management');
INSERT INTO product_tags (variant_id, tag_name) VALUES (166, 'infrastructure');
INSERT INTO product_tags (variant_id, tag_name) VALUES (166, 'managed-service');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (166, 'Month 1: Service baseline, asset portfolio mapping, and SLA agreement confirmation', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (166, 'Months 2-3: First reporting cycle, initial optimisation recommendations, and configuration update cadence', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (166, 'Ongoing: Monthly asset health reports, quarterly optimisation sessions, and annual infrastructure roadmap', 2);

-- Government Operations (High-Impact) - Assess (variant 167)
UPDATE product_variants SET positioning = 'A structured assessment that reveals where government operational gaps reduce citizen service quality and what to address first.' WHERE id = 167;
UPDATE product_content SET description = 'Identify where your government operations and citizen services are creating processing backlogs, transparency gaps, or cross-agency coordination failures. The DigitalQatalyst team assesses operational maturity and returns a prioritised roadmap your programme leaders can act on.', positioning = 'A structured assessment that reveals where government operational gaps reduce citizen service quality and what to address first.' WHERE variant_id = 167;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (167, 'Citizen service delivery review: end-to-end process mapping, touchpoint analysis, and waiting time measurement', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (167, 'Cross-agency coordination audit covering data sharing, referral workflows, and information handoff accuracy', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (167, 'Back-office processing efficiency review: approval queues, manual steps, and regulatory compliance controls', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (167, 'Prioritised improvement roadmap with effort estimates and expected service quality and efficiency impact', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (167, 'digital-government');
INSERT INTO product_tags (variant_id, tag_name) VALUES (167, 'citizen-services');
INSERT INTO product_tags (variant_id, tag_name) VALUES (167, 'public-sector');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (167, 'Days 1-2: Service inventory review, process documentation access, and stakeholder interviews', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (167, 'Days 3-4: Service delivery analysis, cross-agency coordination review, and gap documentation', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (167, 'Day 5: Findings presentation, prioritised roadmap walkthrough, and next-step agreement', 2);
UPDATE products SET short_description = 'Identify where your government operations and citizen services are creating processing backlogs, transparency gaps, or cross-agency coordination failures. The DigitalQatalyst team assesses operational maturity and returns a prioritised roadmap your programme leaders can act on.', audience = 'Digital government directors, programme leaders, heads of service delivery, and chief operating officers in public sector organisations', industry_relevance = 'Ministries, authorities, agencies, municipalities, and public service organisations pursuing digital and operational improvement', business_impact = 'Surfaces the processing bottlenecks and coordination gaps reducing citizen service quality most, so investment goes to the improvements with the greatest public value return.' WHERE id = (SELECT product_id FROM product_variants WHERE id = 167);

-- Government Operations (High-Impact) - Design (variant 168)
UPDATE product_variants SET positioning = 'A design engagement that produces government operations and citizen service specifications ready for platform configuration and delivery.' WHERE id = 168;
UPDATE product_content SET description = 'Turn government operations and citizen service improvement goals into a complete, build-ready blueprint: service journey designs, back-office workflow specifications, cross-agency integration patterns, and an adoption plan your delivery teams can execute within public sector governance.', positioning = 'A design engagement that produces government operations and citizen service specifications ready for platform configuration and delivery.' WHERE variant_id = 168;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (168, 'Citizen journey design across all in-scope services: application, processing, notification, and appeals flows', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (168, 'Back-office workflow specification covering approvals, case management, compliance checks, and audit trails', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (168, 'Cross-agency data sharing and referral workflow design with privacy and regulatory compliance built in', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (168, 'Public sector adoption plan covering staff training, phased rollout, and accessibility compliance requirements', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (168, 'digital-government');
INSERT INTO product_tags (variant_id, tag_name) VALUES (168, 'citizen-services');
INSERT INTO product_tags (variant_id, tag_name) VALUES (168, 'public-sector');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (168, 'Week 1: Service and process review, goal alignment, and citizen and staff journey workshops', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (168, 'Weeks 2-3: Workflow design, integration specification, and prototype validation with service teams', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (168, 'Week 4: Final blueprint review, adoption planning, and build-readiness sign-off', 2);

-- Government Operations (High-Impact) - AI Design (variant 169)
UPDATE product_variants SET positioning = 'Define and validate the AI use cases that will improve citizen service quality and processing efficiency, with responsible design and public sector accountability built in.' WHERE id = 169;
UPDATE product_content SET description = 'Validate where AI can improve government service processing speed, decision support, and cross-agency coordination before committing build budget. The DigitalQatalyst team designs responsible, audit-ready AI workflows and deployment-ready specifications that meet public sector accountability requirements.', positioning = 'Define and validate the AI use cases that will improve citizen service quality and processing efficiency, with responsible design and public sector accountability built in.' WHERE variant_id = 169;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (169, 'AI use-case evaluation: automated eligibility checking, document classification, processing queue prioritisation, and risk-based compliance flagging', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (169, 'Data readiness assessment covering case management records, document stores, and inter-agency data sharing agreements', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (169, 'Responsible AI workflow design with case officer review gates, explainability requirements, and citizen appeal rights preserved', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (169, 'Deployment specification aligned to public sector AI policy, including bias testing, audit logging, and accountability assignment', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (169, 'digital-government');
INSERT INTO product_tags (variant_id, tag_name) VALUES (169, 'government-ai');
INSERT INTO product_tags (variant_id, tag_name) VALUES (169, 'citizen-services');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (169, 'Week 1: Use-case discovery, government data landscape review, and feasibility scoring', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (169, 'Weeks 2-3: Responsible workflow design, accountability framework specification, and programme team validation', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (169, 'Week 4: Deployment specification sign-off and build-readiness confirmation', 2);

-- Government Operations (High-Impact) - Deploy (variant 170)
UPDATE product_variants SET positioning = 'A managed deployment that takes your government operations blueprint from specification to a live, tested platform that meets public sector delivery and compliance requirements.' WHERE id = 170;
UPDATE product_content SET description = 'Configure, integrate, and launch your government operations and citizen service platform with structured testing across service delivery, back-office, and cross-agency workflows, and a controlled handover that leaves your programme team ready to operate within public sector governance.', positioning = 'A managed deployment that takes your government operations blueprint from specification to a live, tested platform that meets public sector delivery and compliance requirements.' WHERE variant_id = 170;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (170, 'Citizen service platform configuration against approved service journeys, back-office workflows, and compliance controls', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (170, 'End-to-end integration testing with case management, document management, identity, and cross-agency data sharing systems', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (170, 'Staff acceptance testing across all in-scope service lines with accessibility and compliance validation included', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (170, 'Hypercare period covering service issue resolution and staff support in the first weeks of live operation', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (170, 'digital-government');
INSERT INTO product_tags (variant_id, tag_name) VALUES (170, 'citizen-services');
INSERT INTO product_tags (variant_id, tag_name) VALUES (170, 'public-sector');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (170, 'Weeks 1-4: Environment setup, platform configuration, and integration development', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (170, 'Weeks 5-9: System integration testing, data migration validation, and defect resolution', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (170, 'Weeks 10-11: Staff acceptance testing and service sign-off', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (170, 'Week 12: Controlled go-live, hypercare, and operational handover', 3);

-- Government Operations (High-Impact) - AI Deploy (variant 171)
UPDATE product_variants SET positioning = 'Put AI-powered government service processing into production with the accountability controls, explainability, and citizen appeal rights your public sector obligations require.' WHERE id = 171;
UPDATE product_content SET description = 'Deploy validated AI capabilities for eligibility checking, document classification, and case prioritisation into your live government operations environment, with monitoring, case officer override controls, and a governance handover that maintains public accountability from day one.', positioning = 'Put AI-powered government service processing into production with the accountability controls, explainability, and citizen appeal rights your public sector obligations require.' WHERE variant_id = 171;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (171, 'Governed model deployment for approved use cases including automated eligibility pre-screening and document classification', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (171, 'Service-level monitoring dashboards tracking model accuracy, case officer override rates, and processing time impact', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (171, 'Case officer review workflows and override mechanisms embedded in existing case management tools', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (171, 'Programme team enablement on model behaviour, bias monitoring, and quarterly accountability review', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (171, 'digital-government');
INSERT INTO product_tags (variant_id, tag_name) VALUES (171, 'government-ai');
INSERT INTO product_tags (variant_id, tag_name) VALUES (171, 'citizen-services');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (171, 'Weeks 1-4: Production environment setup, data pipeline validation, and model staging in test environment', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (171, 'Weeks 5-8: Controlled rollout to pilot service line with close case officer monitoring', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (171, 'Weeks 9-10: Full service rollout, override workflow validation, and performance baseline capture', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (171, 'Weeks 11-12: Governance handover, bias monitoring confirmation, and accountability review schedule agreement', 3);

-- Government Operations (High-Impact) - Managed (variant 172)
UPDATE product_variants SET positioning = 'Ongoing management of your government operations platform so citizen service quality, processing efficiency, and compliance controls never degrade.' WHERE id = 172;
UPDATE product_content SET description = 'Keep your government operations and citizen service platform running reliably within public sector governance: SLA-backed system operations, monthly service performance reporting, and ongoing optimisation as policy requirements and citizen demand evolve.', positioning = 'Ongoing management of your government operations platform so citizen service quality, processing efficiency, and compliance controls never degrade.' WHERE variant_id = 172;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (172, 'Monthly service performance reports covering processing times, case backlogs, error rates, and compliance control status', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (172, 'Proactive platform monitoring with incident response within agreed SLA windows appropriate for public services', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (172, 'Configuration updates as policy changes, legislation amendments, or new services require platform adjustment', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (172, 'Quarterly optimisation reviews identifying processing efficiency improvements and technical debt reduction opportunities', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (172, 'digital-government');
INSERT INTO product_tags (variant_id, tag_name) VALUES (172, 'citizen-services');
INSERT INTO product_tags (variant_id, tag_name) VALUES (172, 'managed-service');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (172, 'Month 1: Service baseline, SLA agreement confirmation, and compliance monitoring setup', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (172, 'Months 2-3: First reporting cycle, initial optimisation recommendations, and configuration update cadence established', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (172, 'Ongoing: Monthly service performance reports, quarterly optimisation sessions, and annual capability roadmap', 2);

-- Hospitality Operations (High-Impact) - Assess (variant 173)
UPDATE product_variants SET positioning = 'Find the operational gaps that are holding back guest experience, then prioritise the fixes with the greatest return.' WHERE id = 173;
UPDATE product_content SET description = 'A structured assessment of your hotel, resort, or venue operations that surfaces the friction points costing you guest satisfaction, staff hours, and revenue, and returns a prioritised roadmap your leadership team can act on.', positioning = 'Find the operational gaps that are holding back guest experience, then prioritise the fixes with the greatest return.' WHERE variant_id = 173;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (173, 'Guest-journey friction audit covering front-of-house, housekeeping, F&B, and reservations', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (173, 'Staff coordination review identifying handoff failures and scheduling inefficiencies', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (173, 'Technology coverage gap analysis across your PMS, POS, and guest-communication tools', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (173, 'Prioritised recommendations scored by guest-experience impact and delivery effort', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (173, 'guest-experience');
INSERT INTO product_tags (variant_id, tag_name) VALUES (173, 'hospitality-operations');
INSERT INTO product_tags (variant_id, tag_name) VALUES (173, 'operational-assessment');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (173, 'Days 1-2: Stakeholder interviews, operational data review, and scope confirmation', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (173, 'Days 3-4: Guest-journey mapping, friction scoring, and technology gap analysis', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (173, 'Day 5: Findings playback, prioritised roadmap, and quick-win recommendations', 2);
UPDATE products SET short_description = 'A structured assessment of your hotel, resort, or venue operations that surfaces the friction points costing you guest satisfaction, staff hours, and revenue, and returns a prioritised roadmap your leadership team can act on.', audience = 'General managers, heads of operations, and guest experience directors in hotels, resorts, and venues', industry_relevance = 'Hotels, resorts, serviced apartments, tourism operators, conference venues, and hospitality groups', business_impact = 'Identifies the highest-cost service failures and technology gaps, giving leadership a clear, prioritised plan to raise guest satisfaction scores and reduce operational waste.' WHERE id = (SELECT product_id FROM product_variants WHERE id = 173);

-- Hospitality Operations (High-Impact) - Design (variant 174)
UPDATE product_variants SET positioning = 'Turn operational ambitions into a build-ready hospitality service blueprint, from guest journeys to system integrations.' WHERE id = 174;
UPDATE product_content SET description = 'A design engagement that translates your hospitality operations goals into guest-centred service blueprints, workflow specifications, and technology integration plans your delivery teams can build and launch from.', positioning = 'Turn operational ambitions into a build-ready hospitality service blueprint, from guest journeys to system integrations.' WHERE variant_id = 174;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (174, 'End-to-end guest service journey design covering arrival, stay, and departure touchpoints', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (174, 'Staff workflow and handoff specifications that reduce coordination failures across departments', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (174, 'PMS, POS, and guest-communication integration architecture with data-flow diagrams', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (174, 'Adoption and change plan covering training, role-specific guides, and go-live communication', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (174, 'service-design');
INSERT INTO product_tags (variant_id, tag_name) VALUES (174, 'guest-journey');
INSERT INTO product_tags (variant_id, tag_name) VALUES (174, 'hospitality-operations');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (174, 'Week 1: Discovery workshops, current-state mapping, and design principles agreement', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (174, 'Weeks 2-3: Guest journey design, workflow specification, and technology integration architecture', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (174, 'Week 4: Design review, stakeholder sign-off, and final blueprint delivery', 2);

-- Hospitality Operations (High-Impact) - AI Design (variant 175)
UPDATE product_variants SET positioning = 'Design AI capabilities for hospitality with validated use cases, clear data requirements, and governance guardrails already built in.' WHERE id = 175;
UPDATE product_content SET description = 'A focused AI design engagement that validates which AI use cases will genuinely improve hospitality operations, defines responsible workflows, and produces deployment-ready specifications before any build investment is committed.', positioning = 'Design AI capabilities for hospitality with validated use cases, clear data requirements, and governance guardrails already built in.' WHERE variant_id = 175;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (175, 'AI use-case validation against real guest-experience and operational data, not theoretical potential', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (175, 'Responsible workflow design specifying human-oversight points, escalation paths, and model boundaries', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (175, 'Data readiness assessment covering guest profiles, booking history, and operational signals required for each use case', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (175, 'Deployment-ready AI specifications including model selection rationale, integration points, and monitoring requirements', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (175, 'ai-design');
INSERT INTO product_tags (variant_id, tag_name) VALUES (175, 'responsible-ai');
INSERT INTO product_tags (variant_id, tag_name) VALUES (175, 'hospitality-technology');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (175, 'Week 1: AI use-case workshops, data landscape review, and feasibility scoring', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (175, 'Weeks 2-3: Responsible workflow design, governance specification, and integration mapping', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (175, 'Week 4: Specification review, risk assessment sign-off, and deployment-ready documentation delivery', 2);

-- Hospitality Operations (High-Impact) - Deploy (variant 176)
UPDATE product_variants SET positioning = 'Bring your hospitality operations blueprint to life through a managed build, integration, and launch with a tested handover.' WHERE id = 176;
UPDATE product_content SET description = 'A managed deployment that configures, integrates, tests, and launches your hospitality operations platform capabilities, with structured quality assurance and a formal handover to your operations team.', positioning = 'Bring your hospitality operations blueprint to life through a managed build, integration, and launch with a tested handover.' WHERE variant_id = 176;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (176, 'Configured PMS, POS, and guest-communication platform setup aligned to your approved service design', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (176, 'End-to-end integration testing across booking, housekeeping, F&B, and front-desk workflows', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (176, 'Staff acceptance testing programme with department-specific scenarios and sign-off gates', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (176, 'Structured go-live with hypercare support and a confirmed operational handover to your team', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (176, 'deployment');
INSERT INTO product_tags (variant_id, tag_name) VALUES (176, 'hospitality-technology');
INSERT INTO product_tags (variant_id, tag_name) VALUES (176, 'platform-launch');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (176, 'Weeks 1-3: Environment setup, system configuration, and integration build', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (176, 'Weeks 4-8: Workflow configuration, data migration, and unit testing by department', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (176, 'Weeks 9-11: Staff acceptance testing, issue resolution, and go-live preparation', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (176, 'Week 12: Controlled launch, hypercare period, and formal operational handover', 3);

-- Hospitality Operations (High-Impact) - AI Deploy (variant 177)
UPDATE product_variants SET positioning = 'Launch AI-enabled hospitality operations with monitoring, guardrails, and staff confidence built in before the first live guest interaction.' WHERE id = 177;
UPDATE product_content SET description = 'A governed AI deployment that puts validated hospitality AI capabilities into production with integrated monitoring, safety controls, staff enablement, and a formal operational handover.', positioning = 'Launch AI-enabled hospitality operations with monitoring, guardrails, and staff confidence built in before the first live guest interaction.' WHERE variant_id = 177;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (177, 'Production deployment of validated AI features across personalisation, scheduling, and guest communication workflows', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (177, 'Real-time monitoring dashboards tracking model accuracy, guest-experience signals, and operational KPIs', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (177, 'Safety and override controls ensuring staff can review, correct, or override AI outputs at any step', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (177, 'Staff AI literacy programme covering how each model works, when to trust it, and how to escalate', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (177, 'ai-deployment');
INSERT INTO product_tags (variant_id, tag_name) VALUES (177, 'responsible-ai');
INSERT INTO product_tags (variant_id, tag_name) VALUES (177, 'hospitality-technology');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (177, 'Weeks 1-4: Production environment setup, AI model integration, and data pipeline validation', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (177, 'Weeks 5-8: Controlled shadow-mode testing alongside existing workflows, performance baselining', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (177, 'Weeks 9-11: Phased live activation by department, monitoring review, and staff sign-off', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (177, 'Week 12: Full live operation, handover to operations team, and ongoing monitoring confirmed', 3);

-- Hospitality Operations (High-Impact) - Managed (variant 178)
UPDATE product_variants SET positioning = 'Keep hospitality operations performing at their best with continuous monitoring, expert optimisation, and a team who knows your property.' WHERE id = 178;
UPDATE product_content SET description = 'An ongoing managed service that runs and continuously improves your hospitality operations platform, with SLA-backed monitoring, monthly performance reporting, and proactive optimisation by the DigitalQatalyst team.', positioning = 'Keep hospitality operations performing at their best with continuous monitoring, expert optimisation, and a team who knows your property.' WHERE variant_id = 178;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (178, 'SLA-backed monitoring of PMS, POS, and guest-communication platforms with defined response and resolution times', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (178, 'Monthly operational performance reviews covering guest satisfaction, system uptime, and throughput metrics', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (178, 'Proactive optimisation cycles adjusting workflows, configurations, and integrations as your operation evolves', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (178, 'Named service team with hospitality-sector knowledge providing continuity across every engagement', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (178, 'managed-service');
INSERT INTO product_tags (variant_id, tag_name) VALUES (178, 'hospitality-operations');
INSERT INTO product_tags (variant_id, tag_name) VALUES (178, 'continuous-optimisation');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (178, 'Month 1: Service onboarding, baseline metrics, and SLA confirmation', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (178, 'Months 2-3: Steady-state monitoring, first performance review, and initial optimisation cycle', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (178, 'Ongoing: Monthly reviews, quarterly optimisation sprints, and annual roadmap refresh', 2);

-- Retail Operations (High-Impact) - Assess (variant 179)
UPDATE product_variants SET positioning = 'Understand exactly where your retail operations fall short, and walk away with a prioritised action plan your store and commerce leaders can execute.' WHERE id = 179;
UPDATE product_content SET description = 'A targeted assessment of your retail and omnichannel operations that identifies the gaps in store productivity, inventory visibility, and sales execution that are costing you revenue and customer loyalty.', positioning = 'Understand exactly where your retail operations fall short, and walk away with a prioritised action plan your store and commerce leaders can execute.' WHERE variant_id = 179;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (179, 'Omnichannel customer journey audit covering in-store, online, click-and-collect, and returns flows', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (179, 'Inventory visibility gap analysis across warehouses, stores, and digital channels', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (179, 'Store productivity review examining task management, staff scheduling, and service standards', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (179, 'Prioritised improvement register scored by revenue impact, customer-experience uplift, and delivery effort', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (179, 'retail-operations');
INSERT INTO product_tags (variant_id, tag_name) VALUES (179, 'omnichannel');
INSERT INTO product_tags (variant_id, tag_name) VALUES (179, 'store-productivity');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (179, 'Days 1-2: Stakeholder interviews, sales and operations data review, and scope confirmation', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (179, 'Days 3-4: Omnichannel journey mapping, inventory-gap analysis, and store productivity assessment', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (179, 'Day 5: Findings playback, prioritised recommendations, and quick-win identification', 2);
UPDATE products SET short_description = 'A targeted assessment of your retail and omnichannel operations that identifies the gaps in store productivity, inventory visibility, and sales execution that are costing you revenue and customer loyalty.', audience = 'Heads of retail operations, omnichannel directors, store operations managers, and e-commerce leads', industry_relevance = 'Retailers, marketplace operators, distributors, and omnichannel commerce organisations at any stage of digital maturity', business_impact = 'Identifies the specific operational gaps that reduce conversion, increase fulfilment errors, and erode store productivity, giving leadership a clear evidence-based case for where to invest.' WHERE id = (SELECT product_id FROM product_variants WHERE id = 179);

-- Retail Operations (High-Impact) - Design (variant 180)
UPDATE product_variants SET positioning = 'Design the retail operations blueprint your teams need: customer journeys, inventory workflows, and system integrations ready for build.' WHERE id = 180;
UPDATE product_content SET description = 'A design engagement that converts your retail operations objectives into customer-centred journey designs, inventory workflow specifications, and technology integration blueprints your implementation teams can build and release.', positioning = 'Design the retail operations blueprint your teams need: customer journeys, inventory workflows, and system integrations ready for build.' WHERE variant_id = 180;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (180, 'Omnichannel customer journey designs covering browse, purchase, fulfilment, and return experiences', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (180, 'Inventory and order management workflow specifications reducing stock inaccuracies and fulfilment delays', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (180, 'POS, OMS, and WMS integration architecture aligned to your existing technology estate', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (180, 'Store and digital adoption plan with role-specific training outlines and a go-live communication schedule', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (180, 'retail-design');
INSERT INTO product_tags (variant_id, tag_name) VALUES (180, 'omnichannel');
INSERT INTO product_tags (variant_id, tag_name) VALUES (180, 'inventory-management');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (180, 'Week 1: Stakeholder workshops, current-state mapping, and design-principles agreement', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (180, 'Weeks 2-3: Journey design, workflow specification, and technology integration architecture', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (180, 'Week 4: Design review, stakeholder sign-off, and build-ready documentation delivery', 2);

-- Retail Operations (High-Impact) - AI Design (variant 181)
UPDATE product_variants SET positioning = 'Design AI for retail with evidence-backed use cases, clean data requirements, and responsible-AI guardrails agreed before a line of code is written.' WHERE id = 181;
UPDATE product_content SET description = 'A retail-focused AI design engagement that validates which AI use cases will genuinely improve sales execution, inventory accuracy, and customer engagement, producing responsible workflow designs and build-ready specifications before any development begins.', positioning = 'Design AI for retail with evidence-backed use cases, clean data requirements, and responsible-AI guardrails agreed before a line of code is written.' WHERE variant_id = 181;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (181, 'AI use-case scoring for retail: demand forecasting, personalisation, markdown optimisation, and loss-prevention ranked by data readiness and commercial value', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (181, 'Responsible workflow design specifying human-review checkpoints, pricing override controls, and model-boundary documentation', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (181, 'Retail data readiness assessment covering transactional, behavioural, and inventory data required for each validated use case', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (181, 'Deployment-ready AI specifications with model selection rationale, integration points, and monitoring metrics for approved use cases', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (181, 'ai-design');
INSERT INTO product_tags (variant_id, tag_name) VALUES (181, 'retail-ai');
INSERT INTO product_tags (variant_id, tag_name) VALUES (181, 'responsible-ai');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (181, 'Week 1: AI use-case workshops, retail data landscape review, and feasibility scoring', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (181, 'Weeks 2-3: Responsible workflow design, data-gap remediation planning, and integration mapping', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (181, 'Week 4: Specification review, governance sign-off, and deployment-ready documentation delivery', 2);

-- Retail Operations (High-Impact) - Deploy (variant 182)
UPDATE product_variants SET positioning = 'Launch retail operations improvements across store and digital channels with a tested build, structured rollout, and confirmed team handover.' WHERE id = 182;
UPDATE product_content SET description = 'A managed retail operations deployment that configures, integrates, tests, and launches your omnichannel commerce platform capabilities, with structured quality assurance and a formal handover to your store and digital operations teams.', positioning = 'Launch retail operations improvements across store and digital channels with a tested build, structured rollout, and confirmed team handover.' WHERE variant_id = 182;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (182, 'Configured POS, OMS, and WMS platform setup aligned to your approved omnichannel design', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (182, 'End-to-end integration testing across in-store, online, and fulfilment workflows before any live customer traffic', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (182, 'Store and digital team acceptance testing with channel-specific scenarios and formal sign-off gates', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (182, 'Phased go-live by channel or store format, with hypercare support during the critical first weeks of operation', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (182, 'deployment');
INSERT INTO product_tags (variant_id, tag_name) VALUES (182, 'retail-technology');
INSERT INTO product_tags (variant_id, tag_name) VALUES (182, 'omnichannel-launch');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (182, 'Weeks 1-3: Environment setup, system configuration, and integration build', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (182, 'Weeks 4-8: Workflow configuration, data migration, and channel-by-channel unit testing', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (182, 'Weeks 9-11: Acceptance testing by store and digital teams, issue resolution, and go-live preparation', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (182, 'Week 12: Phased channel launch, hypercare monitoring, and formal operational handover', 3);

-- Retail Operations (High-Impact) - AI Deploy (variant 183)
UPDATE product_variants SET positioning = 'Activate retail AI in a controlled, monitored way that protects pricing integrity, inventory accuracy, and customer trust from launch day.' WHERE id = 183;
UPDATE product_content SET description = 'A governed AI deployment that puts validated retail AI capabilities into production with integrated monitoring, merchandising-safe override controls, and a formal handover to your retail operations and technology teams.', positioning = 'Activate retail AI in a controlled, monitored way that protects pricing integrity, inventory accuracy, and customer trust from launch day.' WHERE variant_id = 183;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (183, 'Production deployment of validated retail AI features: demand forecasting, personalisation, and markdown optimisation', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (183, 'Real-time monitoring dashboards tracking model accuracy, inventory impact, and revenue signals across channels', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (183, 'Merchandising override controls ensuring commercial teams can adjust or veto AI pricing and markdown recommendations', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (183, 'Retail staff AI literacy programme covering model purpose, confidence thresholds, and escalation procedures', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (183, 'ai-deployment');
INSERT INTO product_tags (variant_id, tag_name) VALUES (183, 'retail-ai');
INSERT INTO product_tags (variant_id, tag_name) VALUES (183, 'responsible-ai');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (183, 'Weeks 1-4: Production environment setup, model integration, and data pipeline validation', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (183, 'Weeks 5-8: Shadow-mode operation alongside existing workflows, accuracy baselining by use case', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (183, 'Weeks 9-11: Phased live activation by use case, monitoring review, and merchandising team sign-off', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (183, 'Week 12: Full live operation, handover to retail and technology teams, monitoring confirmed', 3);

-- Retail Operations (High-Impact) - Managed (variant 184)
UPDATE product_variants SET positioning = 'Keep retail operations and omnichannel commerce performing reliably with continuous monitoring, proactive optimisation, and monthly commercial performance reporting.' WHERE id = 184;
UPDATE product_content SET description = 'An ongoing managed service that runs and continuously improves your retail operations platform, with SLA-backed monitoring, monthly performance reporting across store and digital channels, and proactive optimisation by the DigitalQatalyst team.', positioning = 'Keep retail operations and omnichannel commerce performing reliably with continuous monitoring, proactive optimisation, and monthly commercial performance reporting.' WHERE variant_id = 184;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (184, 'SLA-backed monitoring of POS, OMS, and WMS platforms with defined response and resolution times across store and digital environments', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (184, 'Monthly omnichannel performance reviews covering conversion, fulfilment accuracy, inventory availability, and system uptime', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (184, 'Proactive optimisation cycles adjusting workflows, integrations, and configurations as your retail operation evolves', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (184, 'Named retail-sector service team providing continuity and commercial context in every engagement', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (184, 'managed-service');
INSERT INTO product_tags (variant_id, tag_name) VALUES (184, 'retail-operations');
INSERT INTO product_tags (variant_id, tag_name) VALUES (184, 'omnichannel');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (184, 'Month 1: Service onboarding, baseline metrics across channels, and SLA confirmation', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (184, 'Months 2-3: Steady-state monitoring, first omnichannel performance review, and initial optimisation cycle', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (184, 'Ongoing: Monthly reviews, quarterly optimisation sprints, and annual retail roadmap refresh', 2);

-- Service Operations (High-Impact) - Assess (variant 185)
UPDATE product_variants SET positioning = 'Get a clear picture of where your service operations underperform, with every recommendation ranked by throughput impact and delivery effort.' WHERE id = 185;
UPDATE product_content SET description = 'A structured assessment of your service, field, or professional operations that identifies the scheduling failures, delivery bottlenecks, and quality gaps reducing throughput and customer satisfaction, and returns a prioritised improvement roadmap.', positioning = 'Get a clear picture of where your service operations underperform, with every recommendation ranked by throughput impact and delivery effort.' WHERE variant_id = 185;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (185, 'Service delivery throughput analysis covering job completion rates, rework frequency, and first-visit resolution', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (185, 'Scheduling and dispatch efficiency review identifying capacity waste, double-booking, and travel-time losses', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (185, 'Customer satisfaction touchpoint audit mapping where the service experience falls short of commitments', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (185, 'Prioritised improvement register with each recommendation scored by impact on throughput, quality, and customer retention', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (185, 'service-operations');
INSERT INTO product_tags (variant_id, tag_name) VALUES (185, 'field-service');
INSERT INTO product_tags (variant_id, tag_name) VALUES (185, 'throughput-optimisation');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (185, 'Days 1-2: Stakeholder interviews, job-completion data review, and scope confirmation', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (185, 'Days 3-4: Throughput analysis, scheduling review, and customer-satisfaction gap mapping', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (185, 'Day 5: Findings playback, prioritised roadmap, and immediate-action recommendations', 2);
UPDATE products SET short_description = 'A structured assessment of your service, field, or professional operations that identifies the scheduling failures, delivery bottlenecks, and quality gaps reducing throughput and customer satisfaction, and returns a prioritised improvement roadmap.', audience = 'Heads of service operations, field service directors, professional services leaders, and customer service managers', industry_relevance = 'Professional services firms, field service organisations, maintenance and repair operators, and customer service functions across technical and non-technical sectors', business_impact = 'Surfaces the specific scheduling, delivery, and quality failures reducing throughput and customer retention, giving leadership an evidence-based starting point for targeted improvement investment.' WHERE id = (SELECT product_id FROM product_variants WHERE id = 185);

-- Service Operations (High-Impact) - Design (variant 186)
UPDATE product_variants SET positioning = 'Design the service operations workflows your teams need: scheduling logic, field processes, and system integrations built for throughput and quality.' WHERE id = 186;
UPDATE product_content SET description = 'A design engagement that turns your service operations improvement goals into job-scheduling blueprints, field workflow specifications, and technology integration plans your delivery teams can implement and go live with.', positioning = 'Design the service operations workflows your teams need: scheduling logic, field processes, and system integrations built for throughput and quality.' WHERE variant_id = 186;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (186, 'Job lifecycle workflow designs covering intake, scheduling, dispatch, execution, and closure with quality checkpoints at each stage', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (186, 'Field service process specifications reducing rework by defining completion standards and sign-off requirements before a job is closed', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (186, 'FSM, CRM, and ERP integration architecture connecting your scheduling, customer, and billing data into a single operational view', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (186, 'Adoption plan with role-specific training outlines for dispatch, field staff, and service managers', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (186, 'service-design');
INSERT INTO product_tags (variant_id, tag_name) VALUES (186, 'field-service-management');
INSERT INTO product_tags (variant_id, tag_name) VALUES (186, 'workflow-design');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (186, 'Week 1: Stakeholder workshops, current-state process mapping, and design-principles agreement', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (186, 'Weeks 2-3: Job lifecycle design, field workflow specification, and technology integration architecture', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (186, 'Week 4: Design review, stakeholder sign-off, and build-ready documentation delivery', 2);

-- Service Operations (High-Impact) - AI Design (variant 187)
UPDATE product_variants SET positioning = 'Design AI for service operations with validated scheduling and quality use cases, responsible guardrails, and deployment specifications ready before build.' WHERE id = 187;
UPDATE product_content SET description = 'A service-operations AI design engagement that validates which AI capabilities will improve scheduling accuracy, first-visit resolution, and service quality prediction, producing responsible workflow designs and build-ready specifications before any development commitment.', positioning = 'Design AI for service operations with validated scheduling and quality use cases, responsible guardrails, and deployment specifications ready before build.' WHERE variant_id = 187;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (187, 'AI use-case validation for service operations: predictive scheduling, first-visit-resolution modelling, and service quality forecasting scored by data readiness and throughput value', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (187, 'Responsible dispatch-AI workflow design specifying when human dispatchers retain override authority and how model recommendations are presented', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (187, 'Service data readiness assessment covering job history, technician skills, asset records, and customer data required for each validated use case', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (187, 'Deployment-ready AI specifications with model selection rationale, FSM integration points, and monitoring metrics for approved use cases', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (187, 'ai-design');
INSERT INTO product_tags (variant_id, tag_name) VALUES (187, 'service-ai');
INSERT INTO product_tags (variant_id, tag_name) VALUES (187, 'scheduling-optimisation');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (187, 'Week 1: AI use-case workshops, service data landscape review, and feasibility scoring', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (187, 'Weeks 2-3: Responsible workflow design, data-gap remediation planning, and FSM integration mapping', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (187, 'Week 4: Specification review, governance sign-off, and deployment-ready documentation delivery', 2);

-- Service Operations (High-Impact) - Deploy (variant 188)
UPDATE product_variants SET positioning = 'Go live with improved service operations tools through a tested, managed build that covers scheduling, dispatch, field workflows, and operations handover.' WHERE id = 188;
UPDATE product_content SET description = 'A managed service operations deployment that configures, integrates, tests, and launches your field service management and scheduling platform capabilities, with structured quality assurance and a formal handover to your service operations team.', positioning = 'Go live with improved service operations tools through a tested, managed build that covers scheduling, dispatch, field workflows, and operations handover.' WHERE variant_id = 188;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (188, 'Configured FSM, scheduling, and mobile field-application setup aligned to your approved workflow designs', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (188, 'End-to-end integration testing across job intake, dispatch, field execution, and billing closure workflows', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (188, 'Dispatcher and field-staff acceptance testing with job-type-specific scenarios and formal sign-off gates', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (188, 'Controlled go-live with hypercare monitoring and a confirmed operational handover to your service management team', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (188, 'deployment');
INSERT INTO product_tags (variant_id, tag_name) VALUES (188, 'field-service-management');
INSERT INTO product_tags (variant_id, tag_name) VALUES (188, 'service-technology');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (188, 'Weeks 1-3: Environment setup, FSM configuration, and integration build', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (188, 'Weeks 4-8: Workflow configuration, data migration, and job-type-specific unit testing', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (188, 'Weeks 9-11: Dispatcher and field-staff acceptance testing, issue resolution, and go-live readiness review', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (188, 'Week 12: Controlled launch, hypercare period, and formal service operations handover', 3);

-- Service Operations (High-Impact) - AI Deploy (variant 189)
UPDATE product_variants SET positioning = 'Put scheduling AI and service quality models into live production with monitoring, dispatcher overrides, and governance built in from activation.' WHERE id = 189;
UPDATE product_content SET description = 'A governed AI deployment that activates validated service operations AI capabilities in production, with integrated monitoring, dispatcher safety controls, and a formal handover to your service operations and technology teams.', positioning = 'Put scheduling AI and service quality models into live production with monitoring, dispatcher overrides, and governance built in from activation.' WHERE variant_id = 189;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (189, 'Production deployment of validated service AI features: predictive scheduling, first-visit-resolution modelling, and asset failure prediction', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (189, 'Real-time monitoring dashboards tracking scheduling accuracy, first-visit resolution rates, and model recommendation uptake', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (189, 'Dispatcher override controls ensuring scheduling teams can adjust or reject AI job assignments at any point', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (189, 'Service team AI literacy programme covering model purpose, confidence thresholds, and escalation procedures for field and dispatch staff', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (189, 'ai-deployment');
INSERT INTO product_tags (variant_id, tag_name) VALUES (189, 'service-ai');
INSERT INTO product_tags (variant_id, tag_name) VALUES (189, 'scheduling-ai');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (189, 'Weeks 1-4: Production environment setup, AI model integration, and data pipeline validation', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (189, 'Weeks 5-8: Shadow-mode operation alongside existing dispatch workflows, scheduling accuracy baselining', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (189, 'Weeks 9-11: Phased live activation by job type, monitoring review, and dispatcher sign-off', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (189, 'Week 12: Full live operation, handover to service and technology teams, monitoring confirmed', 3);

-- Service Operations (High-Impact) - Managed (variant 190)
UPDATE product_variants SET positioning = 'Keep service operations performing at throughput targets with continuous monitoring, proactive scheduling optimisation, and monthly operational reporting.' WHERE id = 190;
UPDATE product_content SET description = 'An ongoing managed service that runs and continuously improves your service operations platform, with SLA-backed monitoring, monthly performance reporting across scheduling and field delivery, and proactive optimisation by the DigitalQatalyst team.', positioning = 'Keep service operations performing at throughput targets with continuous monitoring, proactive scheduling optimisation, and monthly operational reporting.' WHERE variant_id = 190;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (190, 'SLA-backed monitoring of FSM, scheduling, and mobile field platforms with defined response and resolution times', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (190, 'Monthly performance reviews covering job completion rates, first-visit resolution, scheduling utilisation, and customer satisfaction', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (190, 'Proactive optimisation cycles adjusting scheduling logic, workflow configurations, and integrations as your service operation evolves', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (190, 'Named service-operations service team with field-sector knowledge providing continuity across every review cycle', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (190, 'managed-service');
INSERT INTO product_tags (variant_id, tag_name) VALUES (190, 'service-operations');
INSERT INTO product_tags (variant_id, tag_name) VALUES (190, 'field-service-management');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (190, 'Month 1: Service onboarding, baseline metrics, SLA confirmation, and first monitoring window', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (190, 'Months 2-3: Steady-state monitoring, first performance review, and initial scheduling optimisation cycle', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (190, 'Ongoing: Monthly reviews, quarterly optimisation sprints, and annual service operations roadmap', 2);

-- Logistics Operations (High-Impact) - Assess (variant 191)
UPDATE product_variants SET positioning = 'Pinpoint the logistics and supply chain gaps costing you fulfilment accuracy, delivery visibility, and asset utilisation, with every recommendation ranked for impact.' WHERE id = 191;
UPDATE product_content SET description = 'A structured assessment of your logistics and supply chain operations that identifies the fulfilment inaccuracies, visibility gaps, and asset utilisation losses reducing delivery performance, and returns a prioritised improvement roadmap your supply chain leaders can act on.', positioning = 'Pinpoint the logistics and supply chain gaps costing you fulfilment accuracy, delivery visibility, and asset utilisation, with every recommendation ranked for impact.' WHERE variant_id = 191;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (191, 'Fulfilment accuracy audit covering pick, pack, despatch, and last-mile delivery failure rates and root causes', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (191, 'Supply chain visibility gap analysis identifying where order, stock, and carrier data breaks down across the network', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (191, 'Asset and fleet utilisation review exposing idle time, underloaded routes, and capacity waste', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (191, 'Prioritised improvement register scored by fulfilment-accuracy, cost-reduction, and delivery-performance impact', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (191, 'logistics-operations');
INSERT INTO product_tags (variant_id, tag_name) VALUES (191, 'supply-chain');
INSERT INTO product_tags (variant_id, tag_name) VALUES (191, 'fulfilment-accuracy');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (191, 'Days 1-2: Stakeholder interviews, fulfilment and carrier data review, and scope confirmation', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (191, 'Days 3-4: Fulfilment accuracy analysis, visibility gap mapping, and asset utilisation review', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (191, 'Day 5: Findings playback, prioritised roadmap, and quick-win identification', 2);
UPDATE products SET short_description = 'A structured assessment of your logistics and supply chain operations that identifies the fulfilment inaccuracies, visibility gaps, and asset utilisation losses reducing delivery performance, and returns a prioritised improvement roadmap your supply chain leaders can act on.', audience = 'Supply chain directors, heads of logistics, distribution centre managers, and transport operations leaders', industry_relevance = 'Logistics providers, distributors, retailers with in-house logistics, supply chain operators, and fulfilment organisations of any network scale', business_impact = 'Identifies the specific fulfilment, visibility, and utilisation failures reducing delivery performance and inflating cost, giving supply chain leadership a clear evidence-based roadmap for targeted improvement.' WHERE id = (SELECT product_id FROM product_variants WHERE id = 191);

-- Logistics Operations (High-Impact) - Design (variant 192)
UPDATE product_variants SET positioning = 'Design the logistics operations blueprint you need: fulfilment workflows, carrier integrations, and warehouse technology ready for build.' WHERE id = 192;
UPDATE product_content SET description = 'A logistics design engagement that converts your supply chain improvement objectives into fulfilment workflow blueprints, carrier integration specifications, and warehouse technology architectures your delivery teams can implement and launch.', positioning = 'Design the logistics operations blueprint you need: fulfilment workflows, carrier integrations, and warehouse technology ready for build.' WHERE variant_id = 192;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (192, 'Fulfilment workflow designs covering inbound, storage, pick and pack, despatch, and returns with throughput and accuracy checkpoints at each stage', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (192, 'Carrier and last-mile integration architecture connecting your WMS, TMS, and carrier APIs into a real-time delivery visibility layer', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (192, 'Warehouse layout and technology specifications for scanning, slotting, and automation aligned to your throughput targets', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (192, 'Adoption plan with role-specific training outlines for warehouse, transport, and planning teams', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (192, 'logistics-design');
INSERT INTO product_tags (variant_id, tag_name) VALUES (192, 'supply-chain');
INSERT INTO product_tags (variant_id, tag_name) VALUES (192, 'warehouse-management');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (192, 'Week 1: Stakeholder workshops, current-state network mapping, and design-principles agreement', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (192, 'Weeks 2-3: Fulfilment workflow design, carrier integration architecture, and warehouse technology specification', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (192, 'Week 4: Design review, stakeholder sign-off, and build-ready documentation delivery', 2);

-- Logistics Operations (High-Impact) - AI Design (variant 193)
UPDATE product_variants SET positioning = 'Design logistics AI with validated forecasting and routing use cases, clean data requirements, and responsible guardrails defined before build begins.' WHERE id = 193;
UPDATE product_content SET description = 'A logistics-focused AI design engagement that validates which AI capabilities will genuinely improve demand forecasting, route optimisation, and fulfilment planning, producing responsible workflow designs and build-ready specifications before any development investment is committed.', positioning = 'Design logistics AI with validated forecasting and routing use cases, clean data requirements, and responsible guardrails defined before build begins.' WHERE variant_id = 193;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (193, 'AI use-case validation for logistics: demand forecasting, dynamic route optimisation, predictive inventory replenishment, and carrier performance scoring ranked by data readiness and network value', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (193, 'Responsible logistics AI workflow design specifying when planners retain override authority over AI routing and replenishment recommendations', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (193, 'Logistics data readiness assessment covering order history, carrier, fleet, and inventory data required for each validated use case', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (193, 'Deployment-ready AI specifications with model selection rationale, WMS and TMS integration points, and monitoring metrics', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (193, 'ai-design');
INSERT INTO product_tags (variant_id, tag_name) VALUES (193, 'logistics-ai');
INSERT INTO product_tags (variant_id, tag_name) VALUES (193, 'route-optimisation');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (193, 'Week 1: AI use-case workshops, logistics data landscape review, and feasibility scoring', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (193, 'Weeks 2-3: Responsible workflow design, data-gap remediation planning, and WMS/TMS integration mapping', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (193, 'Week 4: Specification review, governance sign-off, and deployment-ready documentation delivery', 2);

-- Logistics Operations (High-Impact) - Deploy (variant 194)
UPDATE product_variants SET positioning = 'Go live with improved logistics operations through a tested build that covers WMS configuration, carrier integration, and fulfilment workflow launch.' WHERE id = 194;
UPDATE product_content SET description = 'A managed logistics deployment that configures, integrates, tests, and launches your warehouse management and carrier integration capabilities, with structured quality assurance across fulfilment workflows and a formal handover to your logistics operations team.', positioning = 'Go live with improved logistics operations through a tested build that covers WMS configuration, carrier integration, and fulfilment workflow launch.' WHERE variant_id = 194;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (194, 'Configured WMS and TMS setup aligned to your approved fulfilment workflow designs, including scanning, slotting, and carrier API connections', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (194, 'End-to-end integration testing across inbound, pick and pack, despatch, carrier handoff, and returns workflows before any live inventory traffic', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (194, 'Warehouse and planning team acceptance testing with fulfilment-scenario sign-off gates for each operational zone', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (194, 'Controlled go-live with hypercare monitoring and a confirmed operational handover to your logistics management team', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (194, 'deployment');
INSERT INTO product_tags (variant_id, tag_name) VALUES (194, 'logistics-technology');
INSERT INTO product_tags (variant_id, tag_name) VALUES (194, 'warehouse-management');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (194, 'Weeks 1-3: Environment setup, WMS configuration, and carrier integration build', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (194, 'Weeks 4-8: Workflow configuration, inventory data migration, and zone-by-zone unit testing', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (194, 'Weeks 9-11: Warehouse and planning team acceptance testing, issue resolution, and go-live readiness review', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (194, 'Week 12: Controlled launch, hypercare monitoring, and formal logistics operations handover', 3);

-- Logistics Operations (High-Impact) - AI Deploy (variant 195)
UPDATE product_variants SET positioning = 'Activate demand forecasting and route optimisation AI in a controlled, monitored environment with planner authority and governance built in from day one.' WHERE id = 195;
UPDATE product_content SET description = 'A governed AI deployment that activates validated logistics AI capabilities in production, with integrated monitoring, planner override controls, and a formal handover to your supply chain operations and technology teams.', positioning = 'Activate demand forecasting and route optimisation AI in a controlled, monitored environment with planner authority and governance built in from day one.' WHERE variant_id = 195;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (195, 'Production deployment of validated logistics AI features: demand forecasting, dynamic route optimisation, and predictive inventory replenishment', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (195, 'Real-time monitoring dashboards tracking forecast accuracy, route efficiency gains, and fulfilment-cost signals across the network', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (195, 'Planner override controls ensuring supply chain planners can adjust or reject AI routing and replenishment recommendations at any stage', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (195, 'Logistics team AI literacy programme covering model purpose, confidence intervals, and escalation procedures for planning and operations staff', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (195, 'ai-deployment');
INSERT INTO product_tags (variant_id, tag_name) VALUES (195, 'logistics-ai');
INSERT INTO product_tags (variant_id, tag_name) VALUES (195, 'demand-forecasting');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (195, 'Weeks 1-4: Production environment setup, AI model integration, and data pipeline validation', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (195, 'Weeks 5-8: Shadow-mode operation alongside existing planning workflows, forecast accuracy and route efficiency baselining', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (195, 'Weeks 9-11: Phased live activation by use case, monitoring review, and planning team sign-off', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (195, 'Week 12: Full live operation, handover to logistics and technology teams, monitoring confirmed', 3);

-- Logistics Operations (High-Impact) - Managed (variant 196)
UPDATE product_variants SET positioning = 'Keep logistics and supply chain operations performing at target with continuous monitoring, proactive route and fulfilment optimisation, and monthly network performance reporting.' WHERE id = 196;
UPDATE product_content SET description = 'An ongoing managed service that runs and continuously improves your logistics operations platform, with SLA-backed monitoring, monthly performance reporting across fulfilment and carrier delivery, and proactive network optimisation by the DigitalQatalyst team.', positioning = 'Keep logistics and supply chain operations performing at target with continuous monitoring, proactive route and fulfilment optimisation, and monthly network performance reporting.' WHERE variant_id = 196;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (196, 'SLA-backed monitoring of WMS, TMS, and carrier integration platforms with defined response and resolution times across your fulfilment network', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (196, 'Monthly network performance reviews covering fulfilment accuracy, on-time delivery, carrier performance, and system availability', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (196, 'Proactive optimisation cycles adjusting routing configurations, slotting logic, and carrier integrations as your network evolves', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (196, 'Named logistics-sector service team providing supply chain context and continuity across every monthly review', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (196, 'managed-service');
INSERT INTO product_tags (variant_id, tag_name) VALUES (196, 'logistics-operations');
INSERT INTO product_tags (variant_id, tag_name) VALUES (196, 'supply-chain');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (196, 'Month 1: Service onboarding, baseline network metrics, SLA confirmation, and first monitoring window', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (196, 'Months 2-3: Steady-state monitoring, first fulfilment performance review, and initial network optimisation cycle', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (196, 'Ongoing: Monthly reviews, quarterly optimisation sprints, and annual logistics roadmap refresh', 2);

-- Wellness Operations (High-Impact) - Assess (variant 197)
UPDATE product_variants SET positioning = 'Understand exactly where your wellness operations fall short on client experience and scheduling efficiency, with every finding ranked for clinical and operational impact.' WHERE id = 197;
UPDATE product_content SET description = 'A structured assessment of your wellness, clinic, or care operations that identifies the scheduling inefficiencies, care coordination gaps, and service quality issues reducing client experience and operational throughput, and returns a prioritised improvement roadmap.', positioning = 'Understand exactly where your wellness operations fall short on client experience and scheduling efficiency, with every finding ranked for clinical and operational impact.' WHERE variant_id = 197;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (197, 'Client journey audit mapping the friction points across booking, arrival, session delivery, and follow-up that reduce satisfaction and retention', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (197, 'Scheduling and capacity utilisation review identifying appointment gaps, cancellation patterns, and practitioner underutilisation', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (197, 'Care coordination gap analysis covering communication between practitioners, referral pathways, and client record completeness', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (197, 'Prioritised improvement register scored by client-satisfaction, retention, and operational-efficiency impact', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (197, 'wellness-operations');
INSERT INTO product_tags (variant_id, tag_name) VALUES (197, 'client-experience');
INSERT INTO product_tags (variant_id, tag_name) VALUES (197, 'scheduling-efficiency');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (197, 'Days 1-2: Stakeholder interviews, scheduling and satisfaction data review, and scope confirmation', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (197, 'Days 3-4: Client journey mapping, scheduling analysis, and care coordination gap assessment', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (197, 'Day 5: Findings playback, prioritised roadmap, and quick-win identification', 2);
UPDATE products SET short_description = 'A structured assessment of your wellness, clinic, or care operations that identifies the scheduling inefficiencies, care coordination gaps, and service quality issues reducing client experience and operational throughput, and returns a prioritised improvement roadmap.', audience = 'Clinic directors, wellness centre managers, heads of allied health operations, and practice managers in wellness and preventive care organisations', industry_relevance = 'Wellness providers, clinics, fitness operators, preventive health services, and allied health practices seeking to improve client experience and operational efficiency', business_impact = 'Surfaces the specific scheduling, coordination, and service-quality failures reducing client retention and practitioner utilisation, giving leadership a clear evidence-based plan for targeted improvement.' WHERE id = (SELECT product_id FROM product_variants WHERE id = 197);

-- Wellness Operations (High-Impact) - Design (variant 198)
UPDATE product_variants SET positioning = 'Design the wellness operations blueprint your practitioners and clients need: booking journeys, care coordination workflows, and platform integrations ready for build.' WHERE id = 198;
UPDATE product_content SET description = 'A design engagement that converts your wellness operations goals into client-centred journey designs, appointment and care coordination workflow specifications, and technology integration blueprints your implementation teams can build and launch.', positioning = 'Design the wellness operations blueprint your practitioners and clients need: booking journeys, care coordination workflows, and platform integrations ready for build.' WHERE variant_id = 198;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (198, 'Client journey designs covering online booking, arrival, session delivery, care plan recording, and post-session follow-up across every touchpoint', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (198, 'Practitioner workflow specifications defining care coordination, record-keeping, referral, and scheduling handoff standards to reduce administrative burden', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (198, 'Practice management system and EHR integration architecture connecting booking, care records, billing, and client communications into a single operational view', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (198, 'Adoption plan with role-specific training outlines for reception, practitioners, and clinic management', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (198, 'wellness-design');
INSERT INTO product_tags (variant_id, tag_name) VALUES (198, 'client-journey');
INSERT INTO product_tags (variant_id, tag_name) VALUES (198, 'practice-management');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (198, 'Week 1: Stakeholder workshops, current-state mapping, and design-principles agreement', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (198, 'Weeks 2-3: Client journey design, practitioner workflow specification, and technology integration architecture', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (198, 'Week 4: Design review, stakeholder sign-off, and build-ready documentation delivery', 2);

-- Wellness Operations (High-Impact) - AI Design (variant 199)
UPDATE product_variants SET positioning = 'Design AI for wellness with validated scheduling and retention use cases, clear data requirements, and clinical governance guardrails defined before build begins.' WHERE id = 199;
UPDATE product_content SET description = 'A wellness-focused AI design engagement that validates which AI capabilities will genuinely improve appointment scheduling, client retention prediction, and care coordination quality, producing responsible workflow designs and build-ready specifications before any development begins.', positioning = 'Design AI for wellness with validated scheduling and retention use cases, clear data requirements, and clinical governance guardrails defined before build begins.' WHERE variant_id = 199;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (199, 'AI use-case validation for wellness: appointment scheduling optimisation, client dropout prediction, care plan recommendation, and demand forecasting scored by data readiness and clinical value', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (199, 'Responsible wellness AI workflow design specifying where practitioners retain full clinical authority and how AI recommendations are framed as support tools rather than directives', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (199, 'Wellness data readiness assessment covering appointment history, client engagement, care plan, and practitioner data required for each validated use case', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (199, 'Deployment-ready AI specifications with model selection rationale, PMS and EHR integration points, and monitoring metrics for approved use cases', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (199, 'ai-design');
INSERT INTO product_tags (variant_id, tag_name) VALUES (199, 'wellness-ai');
INSERT INTO product_tags (variant_id, tag_name) VALUES (199, 'responsible-ai');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (199, 'Week 1: AI use-case workshops, wellness data landscape review, and feasibility scoring', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (199, 'Weeks 2-3: Responsible workflow design, clinical-governance specification, and PMS/EHR integration mapping', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (199, 'Week 4: Specification review, governance sign-off, and deployment-ready documentation delivery', 2);

-- Wellness Operations (High-Impact) - Deploy (variant 200)
UPDATE product_variants SET positioning = 'Launch improved wellness operations through a tested build covering practice management configuration, care coordination workflows, and a confirmed team handover.' WHERE id = 200;
UPDATE product_content SET description = 'A managed wellness operations deployment that configures, integrates, tests, and launches your practice management and client engagement platform capabilities, with structured quality assurance and a formal handover to your clinic and wellness operations team.', positioning = 'Launch improved wellness operations through a tested build covering practice management configuration, care coordination workflows, and a confirmed team handover.' WHERE variant_id = 200;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (200, 'Configured practice management system and EHR setup aligned to your approved client journey and practitioner workflow designs', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (200, 'End-to-end integration testing across booking, scheduling, care record, billing, and client-communication workflows before any live client interactions', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (200, 'Practitioner and reception team acceptance testing with discipline-specific scenarios and formal sign-off gates', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (200, 'Controlled go-live with hypercare monitoring and a confirmed operational handover to your clinic management team', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (200, 'deployment');
INSERT INTO product_tags (variant_id, tag_name) VALUES (200, 'wellness-technology');
INSERT INTO product_tags (variant_id, tag_name) VALUES (200, 'practice-management');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (200, 'Weeks 1-3: Environment setup, PMS and EHR configuration, and integration build', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (200, 'Weeks 4-8: Workflow configuration, client data migration, and discipline-specific unit testing', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (200, 'Weeks 9-11: Practitioner and reception acceptance testing, issue resolution, and go-live readiness review', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (200, 'Week 12: Controlled launch, hypercare monitoring, and formal wellness operations handover', 3);

-- Wellness Operations (High-Impact) - AI Deploy (variant 201)
UPDATE product_variants SET positioning = 'Launch scheduling optimisation and client retention AI in a controlled, monitored environment where practitioners retain full clinical authority from activation day.' WHERE id = 201;
UPDATE product_content SET description = 'A governed AI deployment that activates validated wellness AI capabilities in production, with integrated monitoring, practitioner authority controls, and a formal handover to your clinic operations and technology teams.', positioning = 'Launch scheduling optimisation and client retention AI in a controlled, monitored environment where practitioners retain full clinical authority from activation day.' WHERE variant_id = 201;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (201, 'Production deployment of validated wellness AI features: appointment scheduling optimisation, client dropout prediction, and demand forecasting', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (201, 'Real-time monitoring dashboards tracking scheduling fill rates, client retention signals, and model recommendation uptake across your practice', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (201, 'Practitioner authority controls ensuring clinical staff can review, modify, or reject any AI care-support recommendation at any point', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (201, 'Wellness team AI literacy programme covering model purpose, confidence thresholds, data-privacy commitments, and escalation procedures', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (201, 'ai-deployment');
INSERT INTO product_tags (variant_id, tag_name) VALUES (201, 'wellness-ai');
INSERT INTO product_tags (variant_id, tag_name) VALUES (201, 'responsible-ai');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (201, 'Weeks 1-4: Production environment setup, AI model integration, and data pipeline validation', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (201, 'Weeks 5-8: Shadow-mode operation alongside existing scheduling workflows, accuracy and retention-signal baselining', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (201, 'Weeks 9-11: Phased live activation by use case, monitoring review, and practitioner sign-off', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (201, 'Week 12: Full live operation, handover to clinic and technology teams, monitoring confirmed', 3);

-- Wellness Operations (High-Impact) - Managed (variant 202)
UPDATE product_variants SET positioning = 'Keep wellness operations and client experience performing consistently with continuous monitoring, proactive scheduling optimisation, and monthly operational reporting.' WHERE id = 202;
UPDATE product_content SET description = 'An ongoing managed service that runs and continuously improves your wellness operations platform, with SLA-backed monitoring, monthly performance reporting across scheduling and client experience, and proactive optimisation by the DigitalQatalyst team.', positioning = 'Keep wellness operations and client experience performing consistently with continuous monitoring, proactive scheduling optimisation, and monthly operational reporting.' WHERE variant_id = 202;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (202, 'SLA-backed monitoring of your practice management system, EHR, and client-communication platforms with defined response and resolution times', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (202, 'Monthly performance reviews covering appointment fill rates, client retention, care coordination quality, and system availability', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (202, 'Proactive optimisation cycles adjusting scheduling logic, workflow configurations, and platform integrations as your practice evolves', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (202, 'Named wellness-sector service team with clinical operations context providing continuity across every monthly review', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (202, 'managed-service');
INSERT INTO product_tags (variant_id, tag_name) VALUES (202, 'wellness-operations');
INSERT INTO product_tags (variant_id, tag_name) VALUES (202, 'practice-management');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (202, 'Month 1: Service onboarding, baseline operational metrics, SLA confirmation, and first monitoring window', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (202, 'Months 2-3: Steady-state monitoring, first performance review, and initial scheduling optimisation cycle', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (202, 'Ongoing: Monthly reviews, quarterly optimisation sprints, and annual wellness operations roadmap', 2);

-- Online Web Presence (High-Impact) - Transformation Bundle (variant 203)
UPDATE product_variants SET positioning = 'One team, one programme, one web presence that converts visitors and keeps improving after go-live.' WHERE id = 203;
UPDATE product_content SET description = 'Take your organisation''s website from a static brochure to a high-performing digital front door: designed, AI-enhanced, launched, and actively managed under a single continuous programme. Every stage builds on the last, so the web presence that goes live reflects the strategy set on day one.', positioning = 'One team, one programme, one web presence that converts visitors and keeps improving after go-live.' WHERE variant_id = 203;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (203, 'Continuous team context across Design, AI Design, Deploy, AI Deploy, and Managed stages removes costly re-onboarding between phases', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (203, 'AI-informed content personalisation and journey optimisation built into the architecture from the design stage, not retrofitted later', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (203, 'Unified governance framework means every milestone, change request, and performance metric is tracked in one place throughout the engagement', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (203, 'Post-launch managed service extends the programme investment, applying analytics and optimisation so performance compounds over time', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (203, 'bundle');
INSERT INTO product_tags (variant_id, tag_name) VALUES (203, 'end-to-end');
INSERT INTO product_tags (variant_id, tag_name) VALUES (203, 'web-presence');
INSERT INTO product_tags (variant_id, tag_name) VALUES (203, 'digital-experience');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (203, 'Weeks 1-4: Web strategy, user research, information architecture, and design blueprints', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (203, 'Weeks 5-8: AI use-case validation and content personalisation specifications', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (203, 'Weeks 9-16: Platform build, content migration, integrations, and structured testing', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (203, 'Weeks 17-20: AI capability deployment, monitoring configuration, and controlled launch', 3);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (203, 'Weeks 21-24: Managed service activation, first optimisation cycle, and performance review', 4);
UPDATE products SET short_description = 'Take your organisation''s website from a static brochure to a high-performing digital front door: designed, AI-enhanced, launched, and actively managed under a single continuous programme. Every stage builds on the last, so the web presence that goes live reflects the strategy set on day one.', audience = 'Chief Marketing Officers, Heads of Digital, and CX leaders accountable for online revenue and brand', industry_relevance = 'B2B and B2C organisations where the website is a primary channel for lead generation, customer acquisition, or service delivery', business_impact = 'Delivers a fully operational, AI-optimised web presence within 24 weeks, with measurable improvement in organic visibility, lead conversion, and digital service completion rates from launch through continuous managed operation.' WHERE id = (SELECT product_id FROM product_variants WHERE id = 203);

-- Online Social Presence (High-Impact) - Transformation Bundle (variant 204)
UPDATE product_variants SET positioning = 'From social strategy to sustained audience growth, delivered as one programme with no hand-off gaps.' WHERE id = 204;
UPDATE product_content SET description = 'Build a coordinated social media capability that spans channel strategy, AI-assisted content workflows, platform activation, and ongoing performance management without handing off between separate teams at each stage. The result is a social presence that grows audience, drives engagement, and responds to campaigns with the agility your brand requires.', positioning = 'From social strategy to sustained audience growth, delivered as one programme with no hand-off gaps.' WHERE variant_id = 204;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (204, 'Single design-to-operate team retains full channel strategy context through every stage, eliminating briefing duplication', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (204, 'AI content and scheduling workflows are specified and validated before build, ensuring they integrate cleanly rather than being added as afterthoughts', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (204, 'Cross-stage governance tracks audience KPIs, content velocity, and campaign ROI from the first week through to steady-state managed operations', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (204, 'Managed service stage continuously optimises posting cadence, channel mix, and paid amplification based on live performance data', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (204, 'bundle');
INSERT INTO product_tags (variant_id, tag_name) VALUES (204, 'end-to-end');
INSERT INTO product_tags (variant_id, tag_name) VALUES (204, 'social-media');
INSERT INTO product_tags (variant_id, tag_name) VALUES (204, 'content-marketing');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (204, 'Weeks 1-4: Audience analysis, channel strategy, content framework, and persona design', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (204, 'Weeks 5-8: AI content workflow validation, scheduling automation specifications', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (204, 'Weeks 9-14: Platform configuration, content calendar build, and integration testing', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (204, 'Weeks 15-18: AI scheduling and analytics deployment, soft launch and tuning', 3);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (204, 'Weeks 19-24: Managed service activation, first campaign cycle, and performance reporting', 4);
UPDATE products SET short_description = 'Build a coordinated social media capability that spans channel strategy, AI-assisted content workflows, platform activation, and ongoing performance management without handing off between separate teams at each stage. The result is a social presence that grows audience, drives engagement, and responds to campaigns with the agility your brand requires.', audience = 'Chief Marketing Officers, Heads of Social and Content, and Communications leaders', industry_relevance = 'Organisations using social channels as a primary route to brand awareness, community engagement, or customer acquisition across B2C, B2B, and public-sector contexts', business_impact = 'Creates a scalable social capability with consistent content output, measurable audience growth, and AI-optimised campaign activation from launch, sustained through ongoing managed operations.' WHERE id = (SELECT product_id FROM product_variants WHERE id = 204);

-- Mobile Apps (High-Impact) - Transformation Bundle (variant 205)
UPDATE product_variants SET positioning = 'A mobile app designed, launched, and operated as one programme so quality is maintained from first sketch to live service.' WHERE id = 205;
UPDATE product_content SET description = 'Design, build, and operate a mobile app capability that serves your customers, employees, or field teams with the reliability and experience quality they expect from day one. The bundle runs from user research through AI feature integration to App Store launch and managed support, with no re-scoping between phases.', positioning = 'A mobile app designed, launched, and operated as one programme so quality is maintained from first sketch to live service.' WHERE variant_id = 205;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (205, 'User research and journey design from the bundle''s first stage directly shapes the build backlog, preventing costly scope changes mid-development', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (205, 'AI features such as personalisation, predictive search, or smart notifications are validated in the design stage and built to specification in deploy, not bolted on post-launch', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (205, 'A single cross-stage team maintains app architecture context, preventing the technical debt that accumulates when design and build are separated', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (205, 'Managed service stage includes crash monitoring, OS update management, and feature optimisation so the app does not degrade after handover', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (205, 'bundle');
INSERT INTO product_tags (variant_id, tag_name) VALUES (205, 'end-to-end');
INSERT INTO product_tags (variant_id, tag_name) VALUES (205, 'mobile-app');
INSERT INTO product_tags (variant_id, tag_name) VALUES (205, 'digital-product');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (205, 'Weeks 1-5: User research, journey mapping, UX design, and technical architecture blueprints', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (205, 'Weeks 6-9: AI feature use-case validation, data requirements, and interaction specifications', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (205, 'Weeks 10-17: App development, API integrations, device testing, and UAT', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (205, 'Weeks 18-21: AI feature deployment, performance monitoring setup, and App Store submission', 3);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (205, 'Weeks 22-24: Managed service activation, first update cycle, and adoption reporting', 4);
UPDATE products SET short_description = 'Design, build, and operate a mobile app capability that serves your customers, employees, or field teams with the reliability and experience quality they expect from day one. The bundle runs from user research through AI feature integration to App Store launch and managed support, with no re-scoping between phases.', audience = 'Digital Product Directors, Heads of Mobile, and Operations leaders accountable for field or customer-facing mobile services', industry_relevance = 'Organisations with mobile-first customer journeys, field workforce apps, or employee self-service tools across retail, logistics, healthcare, and professional services', business_impact = 'Delivers a production-ready, AI-enhanced mobile app with sustainable managed operations, improving user adoption rates and reducing the post-launch maintenance burden that typically follows separately managed projects.' WHERE id = (SELECT product_id FROM product_variants WHERE id = 205);

-- Physical Channels (High-Impact) - Transformation Bundle (variant 206)
UPDATE product_variants SET positioning = 'Digital capabilities for your physical locations, delivered end-to-end so frontline teams are set up to succeed from the start.' WHERE id = 206;
UPDATE product_content SET description = 'Connect your physical locations with digital capabilities that make every in-person interaction faster, better informed, and easier to manage at scale. This bundle takes the solution from service design to deployed hardware integrations to managed operations, with the same team maintaining context at every stage.', positioning = 'Digital capabilities for your physical locations, delivered end-to-end so frontline teams are set up to succeed from the start.' WHERE variant_id = 206;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (206, 'Service design and digital capability blueprints created before hardware procurement, ensuring technology choices fit the real operational environment rather than driving it', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (206, 'AI-assisted queue management, capacity sensing, or staff scheduling specifications validated before deployment, not speculated during build', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (206, 'Unified testing programme covers both physical integration points and digital workflows, catching issues that siloed testing misses', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (206, 'Post-launch managed service monitors device health, customer experience signals, and operational KPIs across all locations in scope', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (206, 'bundle');
INSERT INTO product_tags (variant_id, tag_name) VALUES (206, 'end-to-end');
INSERT INTO product_tags (variant_id, tag_name) VALUES (206, 'physical-channels');
INSERT INTO product_tags (variant_id, tag_name) VALUES (206, 'omnichannel');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (206, 'Weeks 1-4: Site discovery, journey design, digital capability blueprints, and integration architecture', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (206, 'Weeks 5-8: AI use-case validation for queue, capacity, or scheduling optimisation', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (206, 'Weeks 9-16: System configuration, device integration, workflow build, and cross-channel testing', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (206, 'Weeks 17-20: AI capability deployment, monitoring setup, and phased location rollout', 3);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (206, 'Weeks 21-24: Managed operations activation, device fleet management, and performance review cadence', 4);
UPDATE products SET short_description = 'Connect your physical locations with digital capabilities that make every in-person interaction faster, better informed, and easier to manage at scale. This bundle takes the solution from service design to deployed hardware integrations to managed operations, with the same team maintaining context at every stage.', audience = 'Operations Directors, Heads of Retail or Branch Networks, and Facilities leaders responsible for in-person service performance', industry_relevance = 'Organisations operating branches, retail stores, clinics, service centres, venues, or hospitality environments where physical and digital experience must work together', business_impact = 'Reduces queue times, improves staff productivity, and gives operations leaders a real-time view of physical channel performance, sustained through continuous managed operations after launch.' WHERE id = (SELECT product_id FROM product_variants WHERE id = 206);

-- Integrated Experience (High-Impact) - Transformation Bundle (variant 207)
UPDATE product_variants SET positioning = 'Consistent, personalised experiences across every channel, built as a single programme rather than a patchwork of individual projects.' WHERE id = 207;
UPDATE product_content SET description = 'Design and deliver a connected experience ecosystem where customers and employees encounter consistent journeys, content, and personalisation regardless of which channel they use. This bundle builds the capability once, integrates it across touchpoints, and operates it continuously so the experience stays coherent as channels and expectations evolve.', positioning = 'Consistent, personalised experiences across every channel, built as a single programme rather than a patchwork of individual projects.' WHERE variant_id = 207;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (207, 'Experience architecture designed across all channels in the first stage, creating a shared journey model that governs every subsequent build decision', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (207, 'Personalisation and AI recommendation specifications are validated before deployment, so the right data pipelines and consent frameworks are in place from go-live', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (207, 'Cross-channel integration testing covers edge cases that single-channel testing always misses, reducing post-launch friction', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (207, 'Managed service tracks experience consistency metrics and runs quarterly optimisation cycles, preventing channel experience drift over time', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (207, 'bundle');
INSERT INTO product_tags (variant_id, tag_name) VALUES (207, 'end-to-end');
INSERT INTO product_tags (variant_id, tag_name) VALUES (207, 'integrated-experience');
INSERT INTO product_tags (variant_id, tag_name) VALUES (207, 'personalisation');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (207, 'Weeks 1-5: Journey research, experience architecture, channel mapping, and design system blueprints', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (207, 'Weeks 6-9: Personalisation and AI recommendation use-case validation and data requirements', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (207, 'Weeks 10-17: Platform configuration, content integration, cross-channel workflow build, and testing', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (207, 'Weeks 18-21: AI personalisation deployment, consent framework activation, and experience tuning', 3);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (207, 'Weeks 22-24: Managed service start, first optimisation review, and experience quality baseline', 4);
UPDATE products SET short_description = 'Design and deliver a connected experience ecosystem where customers and employees encounter consistent journeys, content, and personalisation regardless of which channel they use. This bundle builds the capability once, integrates it across touchpoints, and operates it continuously so the experience stays coherent as channels and expectations evolve.', audience = 'Chief Experience Officers, Heads of Digital Product, and Marketing leaders responsible for customer or employee experience strategy', industry_relevance = 'Consumer brands, financial services providers, and large employers where experience consistency across digital, physical, and assisted channels is a competitive differentiator', business_impact = 'Produces measurable improvement in journey completion rates, NPS, and channel attribution accuracy, with ongoing managed operations ensuring the experience advantage compounds rather than erodes.' WHERE id = (SELECT product_id FROM product_variants WHERE id = 207);

-- CRM Solutions (High-Impact) - Transformation Bundle (variant 208)
UPDATE product_variants SET positioning = 'A CRM capability built for adoption and operated for performance, not handed over and left to drift.' WHERE id = 208;
UPDATE product_content SET description = 'Replace a fragmented approach to customer relationship management with a fully configured CRM platform that your sales, marketing, and service teams actually use, supported by AI-enhanced workflows and active managed operations that keep data and process quality high long after go-live.', positioning = 'A CRM capability built for adoption and operated for performance, not handed over and left to drift.' WHERE variant_id = 208;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (208, 'Process design and CRM data model defined at the start of the bundle ensures platform configuration reflects how your teams actually sell and serve, reducing rework during build', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (208, 'AI lead scoring, opportunity prioritisation, and next-best-action specifications validated before build means AI is embedded in core workflows rather than layered on top', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (208, 'Single team carries CRM knowledge from design through deployment, so business rules captured early are not lost between phases', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (208, 'Managed service includes data quality monitoring, user adoption reporting, and quarterly workflow optimisation so CRM performance improves rather than plateauing', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (208, 'bundle');
INSERT INTO product_tags (variant_id, tag_name) VALUES (208, 'end-to-end');
INSERT INTO product_tags (variant_id, tag_name) VALUES (208, 'CRM');
INSERT INTO product_tags (variant_id, tag_name) VALUES (208, 'revenue-operations');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (208, 'Weeks 1-4: Sales and service process mapping, CRM requirements, data model design, and platform selection', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (208, 'Weeks 5-8: AI workflow validation, lead scoring specifications, and integration architecture', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (208, 'Weeks 9-16: CRM configuration, data migration, integrations, and structured UAT', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (208, 'Weeks 17-20: AI workflow deployment, sales enablement activation, and controlled go-live', 3);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (208, 'Weeks 21-24: Managed operations start, adoption monitoring, and first optimisation cycle', 4);
UPDATE products SET short_description = 'Replace a fragmented approach to customer relationship management with a fully configured CRM platform that your sales, marketing, and service teams actually use, supported by AI-enhanced workflows and active managed operations that keep data and process quality high long after go-live.', audience = 'Chief Revenue Officers, Sales Directors, VP of Marketing, and Customer Service leaders accountable for pipeline, revenue, and retention', industry_relevance = 'B2B organisations managing structured sales cycles, B2C businesses with subscription or account models, and service organisations tracking relationship portfolios', business_impact = 'Increases pipeline visibility, shortens sales cycles, and improves customer retention through better data and AI-guided workflows, sustained by managed operations that maintain platform health and adoption rates.' WHERE id = (SELECT product_id FROM product_variants WHERE id = 208);

-- Marketing Solutions (High-Impact) - Transformation Bundle (variant 209)
UPDATE product_variants SET positioning = 'Marketing operations built for scalability and measured from the start, not after things go wrong.' WHERE id = 209;
UPDATE product_content SET description = 'Build a marketing operations capability that runs campaigns from audience insight to performance measurement with structured automation, AI-assisted activation, and the governance to scale it. The bundle spans strategy design through platform deployment to managed operations so marketing effectiveness compounds, not just launches.', positioning = 'Marketing operations built for scalability and measured from the start, not after things go wrong.' WHERE variant_id = 209;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (209, 'Audience strategy, channel architecture, and campaign workflow designs created before any platform configuration, ensuring the tech stack serves the strategy', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (209, 'AI audience segmentation, content recommendation, and campaign optimisation use cases validated in the design stage, with data requirements confirmed before build commits', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (209, 'Cross-channel campaign testing conducted under unified governance before go-live, preventing the attribution gaps that fragment marketing reporting', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (209, 'Managed service delivers monthly performance reporting, A/B testing cycles, and audience refresh so marketing ROI improves continuously after launch', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (209, 'bundle');
INSERT INTO product_tags (variant_id, tag_name) VALUES (209, 'end-to-end');
INSERT INTO product_tags (variant_id, tag_name) VALUES (209, 'marketing-operations');
INSERT INTO product_tags (variant_id, tag_name) VALUES (209, 'campaign-automation');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (209, 'Weeks 1-4: Audience strategy, campaign workflow design, MarTech architecture, and measurement framework', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (209, 'Weeks 5-8: AI segmentation and content recommendation validation and data pipeline specifications', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (209, 'Weeks 9-16: Platform configuration, automation build, integration testing, and campaign UAT', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (209, 'Weeks 17-20: AI activation deployment, attribution setup, and first live campaign', 3);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (209, 'Weeks 21-24: Managed service start, monthly reporting cycle, and optimisation roadmap', 4);
UPDATE products SET short_description = 'Build a marketing operations capability that runs campaigns from audience insight to performance measurement with structured automation, AI-assisted activation, and the governance to scale it. The bundle spans strategy design through platform deployment to managed operations so marketing effectiveness compounds, not just launches.', audience = 'Chief Marketing Officers, Heads of Marketing Operations, and Growth leaders accountable for demand generation and marketing ROI', industry_relevance = 'Organisations scaling paid, owned, and earned marketing channels where data-driven targeting and campaign automation are necessary to maintain efficiency at volume', business_impact = 'Reduces campaign setup time, improves audience targeting precision, and increases marketing return on investment through AI-assisted optimisation, sustained by managed operations that keep the MarTech stack performing.' WHERE id = (SELECT product_id FROM product_variants WHERE id = 209);

-- Smart Sales & Quotation (High-Impact) - Transformation Bundle (variant 210)
UPDATE product_variants SET positioning = 'Faster quotes, controlled pricing, and a managed sales workflow from design to live operations.' WHERE id = 210;
UPDATE product_content SET description = 'Accelerate the journey from opportunity to signed order by designing, building, and operating a sales and quotation capability that automates pricing logic, guided configuration, and approval workflows. The bundle carries commercial and technical requirements through every stage under the same team, so complexity does not compound between phases.', positioning = 'Faster quotes, controlled pricing, and a managed sales workflow from design to live operations.' WHERE variant_id = 210;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (210, 'Commercial rules, pricing logic, and approval governance captured during design are encoded directly into the platform configuration, with no translation loss between stages', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (210, 'AI price optimisation and guided configuration use cases validated against your product catalogue and margin requirements before build investment is committed', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (210, 'End-to-end integration testing covers CRM, ERP, and contract management connections in a single structured programme, not separate workstreams', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (210, 'Managed service monitors quote cycle times, win rates, and pricing exception volumes so continuous improvements are grounded in real commercial data', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (210, 'bundle');
INSERT INTO product_tags (variant_id, tag_name) VALUES (210, 'end-to-end');
INSERT INTO product_tags (variant_id, tag_name) VALUES (210, 'CPQ');
INSERT INTO product_tags (variant_id, tag_name) VALUES (210, 'sales-automation');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (210, 'Weeks 1-4: Commercial process mapping, pricing logic design, quotation workflow blueprints, and integration architecture', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (210, 'Weeks 5-8: AI configuration guidance and price optimisation validation and CPQ platform specifications', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (210, 'Weeks 9-16: CPQ platform build, ERP and CRM integration, approval workflow configuration, and UAT', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (210, 'Weeks 17-20: AI recommendation deployment, pricing engine activation, and controlled go-live', 3);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (210, 'Weeks 21-24: Managed service start, quote performance monitoring, and first optimisation cycle', 4);
UPDATE products SET short_description = 'Accelerate the journey from opportunity to signed order by designing, building, and operating a sales and quotation capability that automates pricing logic, guided configuration, and approval workflows. The bundle carries commercial and technical requirements through every stage under the same team, so complexity does not compound between phases.', audience = 'Chief Revenue Officers, Commercial Directors, and Sales Operations leaders accountable for win rates and pricing discipline', industry_relevance = 'Manufacturers, technology vendors, professional services firms, and distributors with complex pricing, product configuration, or multi-stakeholder approval requirements', business_impact = 'Cuts average quote turnaround by reducing manual calculation and approval bottlenecks, improves pricing consistency, and gives commercial leaders live visibility of pipeline and margin performance.' WHERE id = (SELECT product_id FROM product_variants WHERE id = 210);

-- Customer Support & Success (High-Impact) - Transformation Bundle (variant 211)
UPDATE product_variants SET positioning = 'Support operations designed for retention, not just resolution, delivered and managed end-to-end.' WHERE id = 211;
UPDATE product_content SET description = 'Transform customer support from a reactive cost centre into a proactive success capability: structured service workflows, AI-assisted triage and resolution, and an operations model that maintains quality at scale. The bundle runs from service design to live managed support, carrying customer context and process knowledge through every stage.', positioning = 'Support operations designed for retention, not just resolution, delivered and managed end-to-end.' WHERE variant_id = 211;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (211, 'Service workflow, escalation path, and knowledge architecture designed together in the first stage, eliminating the gaps that emerge when support processes are designed separately from knowledge systems', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (211, 'AI triage, suggested resolution, and sentiment analysis use cases validated before build, ensuring the right data, consent, and agent workflow integrations are confirmed upfront', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (211, 'Unified change management and training programme spans design through go-live, so agents adopt the new model consistently rather than working around it', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (211, 'Managed service tracks CSAT, first-contact resolution, and handle time monthly, with quarterly optimisation cycles targeting the metrics most affecting retention', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (211, 'bundle');
INSERT INTO product_tags (variant_id, tag_name) VALUES (211, 'end-to-end');
INSERT INTO product_tags (variant_id, tag_name) VALUES (211, 'customer-support');
INSERT INTO product_tags (variant_id, tag_name) VALUES (211, 'service-operations');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (211, 'Weeks 1-4: Service workflow mapping, knowledge architecture design, case management blueprint, and SLA framework', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (211, 'Weeks 5-8: AI triage and resolution use-case validation, sentiment analysis specifications, and agent desktop requirements', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (211, 'Weeks 9-16: Platform configuration, knowledge base build, integrations, training content, and UAT', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (211, 'Weeks 17-20: AI capability deployment, agent training, controlled launch, and hypercare', 3);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (211, 'Weeks 21-24: Managed service activation, CSAT baseline, and first optimisation review', 4);
UPDATE products SET short_description = 'Transform customer support from a reactive cost centre into a proactive success capability: structured service workflows, AI-assisted triage and resolution, and an operations model that maintains quality at scale. The bundle runs from service design to live managed support, carrying customer context and process knowledge through every stage.', audience = 'VP of Customer Success, Heads of Customer Service, and CX leaders accountable for retention and service cost', industry_relevance = 'Subscription businesses, SaaS providers, consumer services organisations, and any company where customer retention is tied directly to support quality', business_impact = 'Improves first-contact resolution, reduces average handle time, and increases customer retention through AI-assisted support workflows, sustained by managed operations that monitor and improve performance continuously.' WHERE id = (SELECT product_id FROM product_variants WHERE id = 211);

-- Digital Workplace (High-Impact) - Transformation Bundle (variant 212)
UPDATE product_variants SET positioning = 'A digital workplace your employees will actually use, built with their journeys in mind from the first workshop to managed operations.' WHERE id = 212;
UPDATE product_content SET description = 'Create a digital workplace where employees find information, collaborate across teams, and complete workflows without switching between disconnected tools. This bundle takes the employee experience from journey design to platform deployment to managed operations, maintaining the same understanding of how your organisation works at every stage.', positioning = 'A digital workplace your employees will actually use, built with their journeys in mind from the first workshop to managed operations.' WHERE variant_id = 212;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (212, 'Employee journey research from the design stage shapes platform configuration decisions, preventing the common failure of deploying tools that do not fit real working patterns', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (212, 'AI-assisted search, knowledge surfacing, and workflow automation validated before build ensures intelligent features are woven into the platform architecture, not added as plugins', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (212, 'Change and adoption programme designed in stage one and executed through deployment, creating the adoption conditions for durable behaviour change rather than short-term launch activity', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (212, 'Managed service includes platform health monitoring, feature adoption tracking, and quarterly capability reviews so the workplace continues to deliver value as the organisation evolves', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (212, 'bundle');
INSERT INTO product_tags (variant_id, tag_name) VALUES (212, 'end-to-end');
INSERT INTO product_tags (variant_id, tag_name) VALUES (212, 'digital-workplace');
INSERT INTO product_tags (variant_id, tag_name) VALUES (212, 'employee-experience');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (212, 'Weeks 1-4: Employee journey research, information architecture design, collaboration workflow blueprints, and governance model', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (212, 'Weeks 5-8: AI search and workflow automation use-case validation and integration requirements', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (212, 'Weeks 9-16: Platform configuration, intranet or collaboration suite build, integrations, and UAT', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (212, 'Weeks 17-20: AI feature deployment, adoption programme launch, and controlled go-live', 3);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (212, 'Weeks 21-24: Managed service start, adoption metrics baseline, and first quarterly capability review', 4);
UPDATE products SET short_description = 'Create a digital workplace where employees find information, collaborate across teams, and complete workflows without switching between disconnected tools. This bundle takes the employee experience from journey design to platform deployment to managed operations, maintaining the same understanding of how your organisation works at every stage.', audience = 'Chief People Officers, Heads of IT, and Internal Communications leaders accountable for employee productivity and digital ways of working', industry_relevance = 'Organisations with distributed, hybrid, or knowledge-intensive workforces where collaboration quality and information accessibility directly affect productivity and retention', business_impact = 'Reduces time spent searching for information, improves cross-team collaboration, and accelerates new employee productivity, with adoption and performance sustained through ongoing managed operations.' WHERE id = (SELECT product_id FROM product_variants WHERE id = 212);

-- Business Process Automation (High-Impact) - Transformation Bundle (variant 213)
UPDATE product_variants SET positioning = 'Automation that targets the right processes, built properly, and kept running at peak performance.' WHERE id = 213;
UPDATE product_content SET description = 'Identify the business processes creating the most manual effort, design automation that fits your actual workflows, deploy it with proper integration and testing, and then operate it so performance improves as process volumes and requirements change. The bundle avoids the typical failure mode of automating the wrong things by starting with process design before touching any tooling.', positioning = 'Automation that targets the right processes, built properly, and kept running at peak performance.' WHERE variant_id = 213;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (213, 'Process discovery and prioritisation in the design stage means automation investment targets the workflows with the highest return, not just the ones that are easiest to automate', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (213, 'AI process mining, intelligent document processing, or decision automation use cases validated against your actual data quality and exception volumes before build begins', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (213, 'Integration testing covers upstream and downstream system connections as a single programme, preventing the partial automation failures that occur when hand-offs are tested in isolation', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (213, 'Managed service monitors process throughput, exception rates, and automation coverage monthly, and runs optimisation cycles to extend coverage as new process candidates emerge', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (213, 'bundle');
INSERT INTO product_tags (variant_id, tag_name) VALUES (213, 'end-to-end');
INSERT INTO product_tags (variant_id, tag_name) VALUES (213, 'process-automation');
INSERT INTO product_tags (variant_id, tag_name) VALUES (213, 'RPA');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (213, 'Weeks 1-4: Process discovery, prioritisation, automation opportunity scoring, and workflow redesign blueprints', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (213, 'Weeks 5-8: AI process mining and intelligent automation use-case validation, exception handling design', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (213, 'Weeks 9-16: Automation platform build, system integrations, exception workflows, and structured testing', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (213, 'Weeks 17-20: AI automation deployment, monitoring configuration, and phased process cutover', 3);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (213, 'Weeks 21-24: Managed operations start, exception monitoring, throughput reporting, and optimisation backlog', 4);
UPDATE products SET short_description = 'Identify the business processes creating the most manual effort, design automation that fits your actual workflows, deploy it with proper integration and testing, and then operate it so performance improves as process volumes and requirements change. The bundle avoids the typical failure mode of automating the wrong things by starting with process design before touching any tooling.', audience = 'Chief Operating Officers, Heads of Transformation, and Business Process Owners accountable for operational efficiency and throughput', industry_relevance = 'Organisations with high-volume, rule-based, or approval-heavy processes across finance, HR, operations, procurement, and customer service', business_impact = 'Reduces manual processing effort, shortens cycle times on priority workflows, and improves exception handling, with managed operations extending automation coverage and sustaining performance gains over time.' WHERE id = (SELECT product_id FROM product_variants WHERE id = 213);

-- Specialised Operations (High-Impact) - Transformation Bundle (variant 214)
UPDATE product_variants SET positioning = 'Domain-fit digital operations: a solution shaped around your specialised workflows and operated by a team that understands them.' WHERE id = 214;
UPDATE product_content SET description = 'Digitise the specialised operational environment where your domain-specific workflows, data types, and compliance requirements make generic enterprise platforms a poor fit. This bundle designs a tailored solution, validates AI use cases within your domain constraints, deploys the capability, and then operates it with the domain knowledge that generic managed services cannot replicate.', positioning = 'Domain-fit digital operations: a solution shaped around your specialised workflows and operated by a team that understands them.' WHERE variant_id = 214;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (214, 'Domain-specific requirements captured during design inform platform selection and configuration, avoiding the compromises that arise when a generic tool is forced to fit specialist operations', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (214, 'AI use cases are validated against the particular data structures, regulatory constraints, and exception patterns of your domain before any build commitment', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (214, 'The same team that designed the solution configures and deploys it, preserving the institutional knowledge that is typically lost in hand-offs between specialist design and generic delivery teams', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (214, 'Managed service is staffed with domain-aware operators who can interpret operational anomalies in context, rather than applying generic SLA responses to domain-specific problems', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (214, 'bundle');
INSERT INTO product_tags (variant_id, tag_name) VALUES (214, 'end-to-end');
INSERT INTO product_tags (variant_id, tag_name) VALUES (214, 'specialised-operations');
INSERT INTO product_tags (variant_id, tag_name) VALUES (214, 'domain-specific');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (214, 'Weeks 1-5: Domain workflow analysis, operational requirements, platform options assessment, and solution blueprint', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (214, 'Weeks 6-9: AI use-case validation within domain constraints, data readiness and compliance review', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (214, 'Weeks 10-17: Platform configuration, domain-specific integration build, data migration, and specialist UAT', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (214, 'Weeks 18-21: AI deployment, operational team training, controlled cutover, and hypercare', 3);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (214, 'Weeks 22-24: Managed operations activation, domain KPI baseline, and first performance review', 4);
UPDATE products SET short_description = 'Digitise the specialised operational environment where your domain-specific workflows, data types, and compliance requirements make generic enterprise platforms a poor fit. This bundle designs a tailored solution, validates AI use cases within your domain constraints, deploys the capability, and then operates it with the domain knowledge that generic managed services cannot replicate.', audience = 'Business Unit heads, Domain Operations Directors, and specialist function leaders where generic platforms have failed to deliver operational fit', industry_relevance = 'Legal operations, research and laboratory environments, specialised financial services functions, engineering and technical operations, and regulated professional services', business_impact = 'Delivers operational capability that generic platforms cannot match, reducing manual workarounds, improving domain process control, and providing the specialist oversight needed to sustain performance.' WHERE id = (SELECT product_id FROM product_variants WHERE id = 214);

-- Enterprise Operations (High-Impact) - Transformation Bundle (variant 215)
UPDATE product_variants SET positioning = 'Enterprise operations redesigned and operated as one coordinated programme, not a sequence of disconnected projects.' WHERE id = 215;
UPDATE product_content SET description = 'Bring coherence to enterprise-wide operational coordination by designing an operating model, deploying the enabling platforms, and then running them with the governance discipline that keeps performance visible and decisions informed. The bundle spans the full journey from operating model design to live managed operations, using a single team that carries your organisational context throughout.', positioning = 'Enterprise operations redesigned and operated as one coordinated programme, not a sequence of disconnected projects.' WHERE variant_id = 215;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (215, 'Enterprise operating model and performance framework designed first, so platform and tooling choices align to how the business needs to coordinate rather than to vendor defaults', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (215, 'AI performance prediction, resource optimisation, and exception alerting validated against your actual operational data and reporting requirements before build', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (215, 'A single cross-stage team prevents the fragmentation that occurs when operating model design, platform deployment, and managed operations are delivered by different parties with no shared context', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (215, 'Managed service provides monthly enterprise performance reporting, quarterly operating model reviews, and continuous optimisation of the platforms and processes in scope', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (215, 'bundle');
INSERT INTO product_tags (variant_id, tag_name) VALUES (215, 'end-to-end');
INSERT INTO product_tags (variant_id, tag_name) VALUES (215, 'enterprise-operations');
INSERT INTO product_tags (variant_id, tag_name) VALUES (215, 'operating-model');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (215, 'Weeks 1-5: Operating model design, performance framework, governance blueprint, and platform requirements', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (215, 'Weeks 6-9: AI performance analytics and resource optimisation validation, data and integration requirements', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (215, 'Weeks 10-17: Platform configuration, cross-function integration build, workflow activation, and UAT', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (215, 'Weeks 18-21: AI capability deployment, leadership dashboard activation, and controlled rollout', 3);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (215, 'Weeks 22-24: Managed operations start, monthly reporting cycle, and first operating model review', 4);
UPDATE products SET short_description = 'Bring coherence to enterprise-wide operational coordination by designing an operating model, deploying the enabling platforms, and then running them with the governance discipline that keeps performance visible and decisions informed. The bundle spans the full journey from operating model design to live managed operations, using a single team that carries your organisational context throughout.', audience = 'Chief Operating Officers, Strategy and Transformation Directors, and enterprise leaders accountable for cross-functional coordination and operational performance', industry_relevance = 'Large and complex organisations where operational silos, inconsistent reporting, or slow decision-making are reducing execution effectiveness at enterprise scale', business_impact = 'Improves cross-functional coordination, accelerates decision-making with better real-time visibility, and sustains enterprise performance gains through governed managed operations rather than point-in-time project outputs.' WHERE id = (SELECT product_id FROM product_variants WHERE id = 215);

-- Governance, Risk & Compliance (High-Impact) - Transformation Bundle (variant 216)
UPDATE product_variants SET positioning = 'From control design to continuous compliance: a GRC capability built, deployed, and operated under a single programme.' WHERE id = 216;
UPDATE product_content SET description = 'Build a governance, risk, and compliance capability that is designed with your control frameworks in mind, enhanced with responsible AI, deployed with full audit evidence, and then operated continuously so your compliance posture never degrades between reporting cycles. The bundle eliminates the gap between compliance assessment and live GRC operations.', positioning = 'From control design to continuous compliance: a GRC capability built, deployed, and operated under a single programme.' WHERE variant_id = 216;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (216, 'Control framework, risk taxonomy, and operating model designed together in stage one, ensuring the GRC platform is configured to reflect your actual risk appetite rather than a generic template', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (216, 'AI risk detection and compliance monitoring use cases validated against regulatory constraints and data quality requirements before any configuration work begins', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (216, 'Audit evidence pack produced during deployment is scoped to support both internal audit review and external certification, built in rather than assembled after go-live', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (216, 'Managed service provides monthly compliance performance reports, quarterly control testing, and proactive regulatory change monitoring as a continuous managed programme', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (216, 'bundle');
INSERT INTO product_tags (variant_id, tag_name) VALUES (216, 'end-to-end');
INSERT INTO product_tags (variant_id, tag_name) VALUES (216, 'GRC');
INSERT INTO product_tags (variant_id, tag_name) VALUES (216, 'compliance-operations');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (216, 'Weeks 1-4: Control framework design, risk taxonomy, GRC operating model blueprints, and platform selection', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (216, 'Weeks 5-8: AI compliance monitoring and risk detection use-case validation, regulatory constraint review', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (216, 'Weeks 9-16: GRC platform configuration, system integrations, control workflow build, and audit evidence testing', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (216, 'Weeks 17-20: AI monitoring deployment, alert tuning, parallel-run validation, and go-live', 3);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (216, 'Weeks 21-24: Managed compliance operations start, first monthly report, and quarterly control testing schedule', 4);
UPDATE products SET short_description = 'Build a governance, risk, and compliance capability that is designed with your control frameworks in mind, enhanced with responsible AI, deployed with full audit evidence, and then operated continuously so your compliance posture never degrades between reporting cycles. The bundle eliminates the gap between compliance assessment and live GRC operations.', audience = 'Chief Risk Officers, Heads of Compliance, Internal Audit Directors, and Legal and Regulatory Affairs leaders', industry_relevance = 'Regulated organisations in financial services, healthcare, government contracting, energy, and any business preparing for certification or under active regulatory scrutiny', business_impact = 'Reduces compliance exposure by building continuous monitoring into live GRC operations from day one, replacing periodic manual reviews with a sustained capability that keeps the board informed and auditors confident.' WHERE id = (SELECT product_id FROM product_variants WHERE id = 216);

-- Enterprise Resource Planning (High-Impact) - Transformation Bundle (variant 217)
UPDATE product_variants SET positioning = 'ERP modernisation delivered as a single programme: from process design to live managed operations without context loss between phases.' WHERE id = 217;
UPDATE product_content SET description = 'Modernise your ERP-enabled operations across finance, procurement, HR, and inventory with a single programme that takes you from process design and data model definition through platform deployment to managed ERP operations. The bundle keeps business process knowledge and technical configuration understanding with the same team at every stage, preventing the costly gap between design intent and deployed reality.', positioning = 'ERP modernisation delivered as a single programme: from process design to live managed operations without context loss between phases.' WHERE variant_id = 217;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (217, 'Business process design and data model decisions made in the first stage directly inform every configuration and integration choice during deployment, eliminating redesign cycles mid-project', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (217, 'AI forecasting, automated reconciliation, and procurement intelligence use cases validated against your chart of accounts, master data quality, and finance team workflows before build', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (217, 'Single data migration strategy designed upfront and executed in deployment, with validation against business rules established at design stage rather than improvised at cutover', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (217, 'Managed service monitors ERP system health, data quality metrics, and process performance monthly, with access to the same team that designed and deployed the capability', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (217, 'bundle');
INSERT INTO product_tags (variant_id, tag_name) VALUES (217, 'end-to-end');
INSERT INTO product_tags (variant_id, tag_name) VALUES (217, 'ERP');
INSERT INTO product_tags (variant_id, tag_name) VALUES (217, 'finance-operations');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (217, 'Weeks 1-5: Business process design, data model, integration architecture, and ERP platform selection', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (217, 'Weeks 6-9: AI forecasting and automation use-case validation, master data readiness assessment', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (217, 'Weeks 10-18: ERP configuration, data migration build, system integrations, and structured testing', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (217, 'Weeks 19-22: AI capability deployment, cutover preparation, parallel-run, and controlled go-live', 3);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (217, 'Weeks 23-24: Managed ERP operations activation, hypercare, and first performance reporting cycle', 4);
UPDATE products SET short_description = 'Modernise your ERP-enabled operations across finance, procurement, HR, and inventory with a single programme that takes you from process design and data model definition through platform deployment to managed ERP operations. The bundle keeps business process knowledge and technical configuration understanding with the same team at every stage, preventing the costly gap between design intent and deployed reality.', audience = 'Chief Financial Officers, Heads of Finance Transformation, Procurement Directors, and HR leaders accountable for core enterprise operations', industry_relevance = 'Manufacturing, distribution, professional services, and public sector organisations where ERP is the operational backbone for finance, procurement, and workforce management', business_impact = 'Delivers a live, AI-enhanced ERP capability with clean data, integrated processes, and managed operations that maintain system health and drive continuous finance and operational process improvement.' WHERE id = (SELECT product_id FROM product_variants WHERE id = 217);

-- Workforce Management (High-Impact) - Transformation Bundle (variant 218)
UPDATE product_variants SET positioning = 'Workforce management designed for your operational reality and operated to improve scheduling accuracy month after month.' WHERE id = 218;
UPDATE product_content SET description = 'Give your workforce planning, scheduling, and productivity operations the digital backbone they need: designed around how your people actually work, enhanced with AI-driven demand forecasting, deployed with your scheduling rules embedded, and actively managed to keep schedules accurate and employees informed. One continuous programme from strategy to operations.', positioning = 'Workforce management designed for your operational reality and operated to improve scheduling accuracy month after month.' WHERE variant_id = 218;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (218, 'Scheduling rules, demand patterns, and workforce constraints captured during design are encoded directly into platform configuration, preventing the gap between policy and deployed behaviour', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (218, 'AI demand forecasting and optimised schedule generation use cases validated against your historical staffing data and compliance requirements before build begins', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (218, 'Change management and employee communication programme designed alongside the platform, ensuring frontline workers adopt self-service scheduling from go-live rather than reverting to manual processes', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (218, 'Managed service tracks schedule adherence, overtime rates, and demand forecast accuracy, with monthly reporting and quarterly model recalibration as labour patterns shift', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (218, 'bundle');
INSERT INTO product_tags (variant_id, tag_name) VALUES (218, 'end-to-end');
INSERT INTO product_tags (variant_id, tag_name) VALUES (218, 'workforce-management');
INSERT INTO product_tags (variant_id, tag_name) VALUES (218, 'scheduling');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (218, 'Weeks 1-4: Workforce analysis, scheduling rules design, demand pattern review, and platform requirements', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (218, 'Weeks 5-8: AI demand forecasting and schedule optimisation use-case validation and data requirements', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (218, 'Weeks 9-16: Platform configuration, payroll integration, scheduling workflow build, and manager UAT', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (218, 'Weeks 17-20: AI forecasting deployment, schedule generation testing, and phased workforce rollout', 3);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (218, 'Weeks 21-24: Managed service activation, schedule accuracy monitoring, and first optimisation cycle', 4);
UPDATE products SET short_description = 'Give your workforce planning, scheduling, and productivity operations the digital backbone they need: designed around how your people actually work, enhanced with AI-driven demand forecasting, deployed with your scheduling rules embedded, and actively managed to keep schedules accurate and employees informed. One continuous programme from strategy to operations.', audience = 'HR Directors, Workforce Planning leads, and Operations leaders responsible for scheduling, labour cost, and frontline productivity', industry_relevance = 'Retail, logistics, healthcare, hospitality, manufacturing, and any organisation managing shift-based, field, or distributed workforces where scheduling accuracy directly affects service quality and labour cost', business_impact = 'Reduces scheduling errors and overtime costs, improves shift coverage for customer-facing operations, and gives workforce leaders the demand visibility needed to plan accurately across seasonal and operational cycles.' WHERE id = (SELECT product_id FROM product_variants WHERE id = 218);

-- Enterprise Data Platform (High-Impact) - Transformation Bundle (variant 219)
UPDATE product_variants SET positioning = 'A governed data platform designed for scale, deployed for quality, and managed so trust in data compounds over time.' WHERE id = 219;
UPDATE product_content SET description = 'Build the data foundation your organisation needs to trust its reporting, scale its analytics, and adopt AI with confidence. This bundle takes the data platform from architecture design and governance model through to live deployment and managed data operations, with data quality and platform reliability maintained as continuous commitments rather than launch-time promises.', positioning = 'A governed data platform designed for scale, deployed for quality, and managed so trust in data compounds over time.' WHERE variant_id = 219;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (219, 'Data architecture, governance model, and domain ownership structure designed before any platform configuration, ensuring the technical choices serve the data strategy rather than constraining it', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (219, 'AI-readiness validation confirms that the data assets, metadata standards, and quality thresholds needed for planned AI workloads are achievable before build investment is committed', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (219, 'Data quality framework designed in stage one and enforced through platform configuration and managed operations, creating a continuous quality assurance programme rather than a one-time data cleanse', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (219, 'Managed data operations include data catalogue maintenance, pipeline health monitoring, and quarterly data product reviews, keeping the platform reliable as new sources and consumers are added', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (219, 'bundle');
INSERT INTO product_tags (variant_id, tag_name) VALUES (219, 'end-to-end');
INSERT INTO product_tags (variant_id, tag_name) VALUES (219, 'data-platform');
INSERT INTO product_tags (variant_id, tag_name) VALUES (219, 'data-governance');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (219, 'Weeks 1-5: Data architecture design, governance model, domain ownership, and platform selection', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (219, 'Weeks 6-9: AI-readiness validation, data quality requirements, and integration catalogue review', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (219, 'Weeks 10-17: Platform build, data pipeline development, metadata framework, and data quality testing', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (219, 'Weeks 18-21: AI workload environment deployment, data catalogue publication, and controlled go-live', 3);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (219, 'Weeks 22-24: Managed data operations activation, pipeline monitoring, and first data quality review cycle', 4);
UPDATE products SET short_description = 'Build the data foundation your organisation needs to trust its reporting, scale its analytics, and adopt AI with confidence. This bundle takes the data platform from architecture design and governance model through to live deployment and managed data operations, with data quality and platform reliability maintained as continuous commitments rather than launch-time promises.', audience = 'Chief Data Officers, CIOs, Data Architecture leads, and Analytics leaders accountable for data platform strategy and enterprise reporting', industry_relevance = 'Data-intensive organisations in financial services, healthcare, retail, and operations sectors where data quality, lineage, and governance directly affect regulatory compliance and commercial decision-making', business_impact = 'Creates a trusted, scalable data platform that reduces time-to-insight for analytics teams, accelerates AI initiative delivery, and improves confidence in management reporting through continuous data quality management.' WHERE id = (SELECT product_id FROM product_variants WHERE id = 219);

-- Business Intelligence & Analytics (High-Impact) - Transformation Bundle (variant 220)
UPDATE product_variants SET positioning = 'Analytics that answers the questions your leaders actually ask, built and operated as one coherent programme.' WHERE id = 220;
UPDATE product_content SET description = 'Turn your enterprise data into the management intelligence your leaders need to make faster, better-grounded decisions: designed around your actual KPIs and decision workflows, deployed with governed data pipelines, and operated as a continuous analytics service. The bundle builds BI capability from measurement design to live managed reporting.', positioning = 'Analytics that answers the questions your leaders actually ask, built and operated as one coherent programme.' WHERE variant_id = 220;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (220, 'KPI framework and decision workflow analysis conducted before any dashboard design, ensuring the BI outputs serve real management decisions rather than replicating existing spreadsheet patterns', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (220, 'AI-assisted analytics, anomaly detection, and narrative generation use cases validated against your data platform quality before build, preventing AI features from surfacing unreliable insights', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (220, 'Single semantic layer designed and governed across all BI outputs in the programme, ensuring metric definitions are consistent across finance, operations, and commercial dashboards from launch', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (220, 'Managed analytics service delivers monthly report packs, tracks data freshness and dashboard adoption, and runs quarterly insight reviews with leadership to keep analytics aligned to evolving business priorities', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (220, 'bundle');
INSERT INTO product_tags (variant_id, tag_name) VALUES (220, 'end-to-end');
INSERT INTO product_tags (variant_id, tag_name) VALUES (220, 'business-intelligence');
INSERT INTO product_tags (variant_id, tag_name) VALUES (220, 'analytics');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (220, 'Weeks 1-4: KPI framework design, decision workflow analysis, data source assessment, and BI architecture', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (220, 'Weeks 5-8: AI analytics and anomaly detection use-case validation, semantic layer design', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (220, 'Weeks 9-15: Dashboard build, semantic layer implementation, data pipeline configuration, and UAT', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (220, 'Weeks 16-19: AI narrative and anomaly detection deployment, management report pack testing, go-live', 3);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (220, 'Weeks 20-24: Managed analytics activation, adoption tracking, and first quarterly leadership review', 4);
UPDATE products SET short_description = 'Turn your enterprise data into the management intelligence your leaders need to make faster, better-grounded decisions: designed around your actual KPIs and decision workflows, deployed with governed data pipelines, and operated as a continuous analytics service. The bundle builds BI capability from measurement design to live managed reporting.', audience = 'Finance Directors, Strategy leads, Chief Data Officers, and executive sponsors accountable for management reporting and operational performance visibility', industry_relevance = 'Organisations across all sectors where leadership decisions rely on enterprise data, and where inconsistent metrics, slow reporting, or poor data quality are reducing decision confidence', business_impact = 'Accelerates management decision cycles, reduces time spent reconciling conflicting data definitions, and improves leadership confidence in performance data through consistent, governed, and AI-enhanced analytics.' WHERE id = (SELECT product_id FROM product_variants WHERE id = 220);

-- Enterprise AI & Automation (High-Impact) - Transformation Bundle (variant 221)
UPDATE product_variants SET positioning = 'Enterprise AI deployed responsibly and operated with the oversight that makes it sustainable, not just a pilot.' WHERE id = 221;
UPDATE product_content SET description = 'Scale AI and automation across your organisation''s workflows, decisions, and knowledge operations with a programme that validates use cases responsibly, deploys governed AI capabilities, and then operates them under continuous human oversight. The bundle takes enterprise AI from strategy through responsible deployment to live managed AI operations.', positioning = 'Enterprise AI deployed responsibly and operated with the oversight that makes it sustainable, not just a pilot.' WHERE variant_id = 221;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (221, 'AI strategy and use-case prioritisation conducted before any model selection, ensuring adoption targets the workflows with the best combination of value, data readiness, and risk profile', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (221, 'Responsible AI assessment and workflow design stage validates ethical constraints, human-in-the-loop requirements, and regulatory obligations before build, not after a prototype fails scrutiny', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (221, 'Governed model deployment includes safety controls, monitoring, and override procedures designed in the AI Design stage and implemented consistently across all use cases in the programme', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (221, 'Managed AI operations monitor model performance, alert volumes, and business impact monthly, with quarterly retraining cycles and human override review built into the service as standard', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (221, 'bundle');
INSERT INTO product_tags (variant_id, tag_name) VALUES (221, 'end-to-end');
INSERT INTO product_tags (variant_id, tag_name) VALUES (221, 'enterprise-AI');
INSERT INTO product_tags (variant_id, tag_name) VALUES (221, 'responsible-AI');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (221, 'Weeks 1-5: AI strategy, use-case discovery, responsible AI assessment, and deployment requirements', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (221, 'Weeks 6-9: Workflow design, human-in-the-loop specifications, guardrails design, and data readiness', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (221, 'Weeks 10-17: Model preparation, AI platform configuration, workflow integration, and parallel-run testing', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (221, 'Weeks 18-21: Governed production deployment, safety control activation, monitoring setup, and launch', 3);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (221, 'Weeks 22-24: Managed AI operations activation, model performance review, and first retraining cycle', 4);
UPDATE products SET short_description = 'Scale AI and automation across your organisation''s workflows, decisions, and knowledge operations with a programme that validates use cases responsibly, deploys governed AI capabilities, and then operates them under continuous human oversight. The bundle takes enterprise AI from strategy through responsible deployment to live managed AI operations.', audience = 'Chief AI Officers, CEOs, CIOs, and Transformation Directors accountable for enterprise AI strategy and responsible adoption', industry_relevance = 'Organisations across financial services, healthcare, operations, and professional services ready to move beyond AI pilots to governed, production-scale AI operations', business_impact = 'Accelerates the safe adoption of AI at enterprise scale, improving productivity and decision speed across targeted workflows while maintaining the human oversight and governance that regulators and boards require.' WHERE id = (SELECT product_id FROM product_variants WHERE id = 221);

-- Technology Governance (High-Impact) - Transformation Bundle (variant 222)
UPDATE product_variants SET positioning = 'Technology governance that works in practice, not just on paper, designed and operated as a sustained programme.' WHERE id = 222;
UPDATE product_content SET description = 'Establish the technology governance operating model your organisation needs to make consistent investment decisions, maintain architecture standards, and oversee vendors with confidence. This bundle designs the governance framework, deploys supporting tooling, and then operates it as a continuous managed service, keeping your CIO and board informed through every portfolio and architecture cycle.', positioning = 'Technology governance that works in practice, not just on paper, designed and operated as a sustained programme.' WHERE variant_id = 222;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (222, 'Governance operating model, decision rights, and architecture standards defined in the design stage and encoded directly into the governance tooling during deployment, preventing the drift between policy and practice', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (222, 'AI-assisted portfolio analytics and architecture drift detection validated against your actual investment data and architecture repository before build, ensuring AI decision support is grounded rather than aspirational', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (222, 'Governance processes activated and tested in a live cycle during deployment, so your CIO receives real governance outputs before handover rather than test artefacts', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (222, 'Managed governance service delivers monthly portfolio reports, quarterly architecture reviews, and proactive vendor risk monitoring, all under the accountability of the same team that designed the model', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (222, 'bundle');
INSERT INTO product_tags (variant_id, tag_name) VALUES (222, 'end-to-end');
INSERT INTO product_tags (variant_id, tag_name) VALUES (222, 'technology-governance');
INSERT INTO product_tags (variant_id, tag_name) VALUES (222, 'IT-governance');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (222, 'Weeks 1-5: Governance framework design, decision rights, architecture standards, and tooling requirements', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (222, 'Weeks 6-9: AI portfolio analytics and architecture monitoring validation, data source assessment', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (222, 'Weeks 10-17: Governance platform configuration, data integration, process activation, and first-cycle testing', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (222, 'Weeks 18-21: AI analytics deployment, architecture review board activation, and go-live', 3);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (222, 'Weeks 22-24: Managed governance operations start, monthly portfolio reporting, and architecture review cadence', 4);
UPDATE products SET short_description = 'Establish the technology governance operating model your organisation needs to make consistent investment decisions, maintain architecture standards, and oversee vendors with confidence. This bundle designs the governance framework, deploys supporting tooling, and then operates it as a continuous managed service, keeping your CIO and board informed through every portfolio and architecture cycle.', audience = 'Chief Information Officers, Enterprise Architecture leads, PMO Directors, and Technology Portfolio leaders', industry_relevance = 'Organisations managing complex multi-platform technology portfolios, significant vendor ecosystems, or active enterprise architecture programmes across any sector', business_impact = 'Replaces ad-hoc technology governance with a disciplined, continuously operated capability that reduces investment waste, slows architecture drift, and gives leadership reliable monthly visibility of technology risk.' WHERE id = (SELECT product_id FROM product_variants WHERE id = 222);

-- DevSecOps Automation (High-Impact) - Transformation Bundle (variant 223)
UPDATE product_variants SET positioning = 'DevSecOps designed for speed and security together, deployed across your pipeline, and managed as a sustained engineering capability.' WHERE id = 223;
UPDATE product_content SET description = 'Build the DevSecOps capability your engineering teams need to deliver software faster without trading security for speed: designed with security controls embedded in the pipeline from the outset, deployed with automated testing and release governance, and then operated as a continuous managed engineering service. The bundle eliminates the security-delivery tension by treating both as engineering requirements from day one.', positioning = 'DevSecOps designed for speed and security together, deployed across your pipeline, and managed as a sustained engineering capability.' WHERE variant_id = 223;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (223, 'Pipeline architecture, security control placement, and release governance designed as an integrated model in stage one, preventing the friction that arises when security is retrofitted to an existing delivery pipeline', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (223, 'AI-assisted vulnerability detection, dependency scanning, and release quality prediction validated against your code repositories and deployment patterns before pipeline build', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (223, 'Security testing automation and release gate enforcement implemented consistently across all environments in scope during a single deployment programme, avoiding the environment drift common in phased rollouts', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (223, 'Managed DevSecOps service monitors pipeline health, security scan coverage, deployment frequency, and change failure rate, with monthly engineering performance reports and quarterly pipeline optimisation cycles', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (223, 'bundle');
INSERT INTO product_tags (variant_id, tag_name) VALUES (223, 'end-to-end');
INSERT INTO product_tags (variant_id, tag_name) VALUES (223, 'DevSecOps');
INSERT INTO product_tags (variant_id, tag_name) VALUES (223, 'delivery-automation');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (223, 'Weeks 1-4: Pipeline assessment, DevSecOps framework design, security control architecture, and toolchain selection', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (223, 'Weeks 5-8: AI security scanning and release quality prediction validation, environment and repository review', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (223, 'Weeks 9-16: Pipeline build, security control integration, automated testing activation, and engineering UAT', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (223, 'Weeks 17-20: AI tool deployment, release gate enforcement, production monitoring setup, and go-live', 3);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (223, 'Weeks 21-24: Managed DevSecOps operations start, DORA metric baseline, and first optimisation cycle', 4);
UPDATE products SET short_description = 'Build the DevSecOps capability your engineering teams need to deliver software faster without trading security for speed: designed with security controls embedded in the pipeline from the outset, deployed with automated testing and release governance, and then operated as a continuous managed engineering service. The bundle eliminates the security-delivery tension by treating both as engineering requirements from day one.', audience = 'Chief Technology Officers, Engineering Directors, DevOps leads, and Security leaders accountable for delivery speed, software quality, and production security', industry_relevance = 'Software product companies, digital platform operators, financial services technology teams, and any organisation where software delivery velocity and production security are both board-level concerns', business_impact = 'Increases deployment frequency, reduces change failure rate, and embeds security assurance into the delivery pipeline as a permanent operational capability, improving both release confidence and audit posture.' WHERE id = (SELECT product_id FROM product_variants WHERE id = 223);

-- IT Operations & Support (High-Impact) - Transformation Bundle (variant 224)
UPDATE product_variants SET positioning = 'IT support redesigned for the way your people work today, then managed to maintain quality as your organisation grows.' WHERE id = 224;
UPDATE product_content SET description = 'Modernise IT service delivery so employees receive fast, consistent support and IT operations leaders have the visibility to manage reliability proactively. This bundle designs the service management model, deploys AI-assisted support capabilities, and then operates the IT service desk as a continuously improving managed service under defined SLAs.', positioning = 'IT support redesigned for the way your people work today, then managed to maintain quality as your organisation grows.' WHERE variant_id = 224;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (224, 'Service catalogue, incident management process, and knowledge architecture designed together in stage one, so the ITSM platform is configured to reflect the real support model rather than a default template', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (224, 'AI-assisted triage, knowledge article recommendation, and automated resolution use cases validated against your ticket history and knowledge base quality before any configuration work', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (224, 'Knowledge base population and self-service portal activation completed during deployment as part of the programme, not left as a post-launch task that is typically never prioritised', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (224, 'Managed IT service delivers monthly SLA and ticket performance reports, quarterly knowledge base reviews, and proactive capacity planning so support quality improves as headcount and tooling change', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (224, 'bundle');
INSERT INTO product_tags (variant_id, tag_name) VALUES (224, 'end-to-end');
INSERT INTO product_tags (variant_id, tag_name) VALUES (224, 'IT-operations');
INSERT INTO product_tags (variant_id, tag_name) VALUES (224, 'ITSM');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (224, 'Weeks 1-4: Service catalogue design, incident and request workflow blueprints, ITSM platform selection, and SLA framework', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (224, 'Weeks 5-8: AI triage and resolution use-case validation, ticket data analysis, and knowledge gap review', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (224, 'Weeks 9-15: ITSM platform configuration, knowledge base build, integrations, self-service portal, and UAT', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (224, 'Weeks 16-19: AI capability deployment, first-line automation activation, and controlled go-live', 3);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (224, 'Weeks 20-24: Managed IT service operations start, SLA baseline, and first optimisation review', 4);
UPDATE products SET short_description = 'Modernise IT service delivery so employees receive fast, consistent support and IT operations leaders have the visibility to manage reliability proactively. This bundle designs the service management model, deploys AI-assisted support capabilities, and then operates the IT service desk as a continuously improving managed service under defined SLAs.', audience = 'Chief Information Officers, IT Operations Directors, and Service Desk leaders accountable for employee productivity and IT service reliability', industry_relevance = 'Organisations of any sector where IT service quality affects employee productivity, and where growing headcount or platform complexity is straining existing support capacity', business_impact = 'Reduces average ticket resolution time, improves first-contact resolution rates through AI-assisted support, and provides IT leadership with the operational visibility to manage reliability rather than react to failures.' WHERE id = (SELECT product_id FROM product_variants WHERE id = 224);

-- Farming Operations (High-Impact) - Transformation Bundle (variant 225)
UPDATE product_variants SET positioning = 'Digital farming operations from crop plan to harvest, designed for your land and operated through every season.' WHERE id = 225;
UPDATE product_content SET description = 'Bring precision and coordination to farming operations by digitising field activity, crop planning, resource management, and yield monitoring across your agricultural business. This bundle designs the operational capability, validates AI-driven agronomic insights, deploys the solution across your farm environment, and then operates it through growing seasons with the domain knowledge your operations require.', positioning = 'Digital farming operations from crop plan to harvest, designed for your land and operated through every season.' WHERE variant_id = 225;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (225, 'Operational design conducted by a team with farming context, ensuring digital workflows map to actual seasonal cycles and field activity patterns rather than generic operations templates', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (225, 'AI yield prediction, irrigation optimisation, and pest risk alerting validated against your crop types, soil data, and historical yield records before any platform build', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (225, 'Deployment includes field device integration, IoT sensor connectivity, and agronomic data pipeline setup as a single coordinated programme, avoiding the fragmented rollout that leaves data siloed by field or season', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (225, 'Managed service operates through growing seasons, monitoring equipment health, data ingestion quality, and agronomic alert accuracy, with seasonal performance reviews tied to your production calendar', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (225, 'bundle');
INSERT INTO product_tags (variant_id, tag_name) VALUES (225, 'end-to-end');
INSERT INTO product_tags (variant_id, tag_name) VALUES (225, 'farming-operations');
INSERT INTO product_tags (variant_id, tag_name) VALUES (225, 'agritech');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (225, 'Weeks 1-4: Farm operations mapping, crop planning workflow design, data platform requirements, and device integration architecture', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (225, 'Weeks 5-8: AI yield prediction and resource optimisation use-case validation, soil and historical data review', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (225, 'Weeks 9-16: Platform configuration, IoT integration, field data pipeline build, and operational UAT', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (225, 'Weeks 17-20: AI agronomic model deployment, alert configuration, seasonal monitoring setup, and go-live', 3);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (225, 'Weeks 21-24: Managed farming operations activation, first seasonal review, and yield data baseline', 4);
UPDATE products SET short_description = 'Bring precision and coordination to farming operations by digitising field activity, crop planning, resource management, and yield monitoring across your agricultural business. This bundle designs the operational capability, validates AI-driven agronomic insights, deploys the solution across your farm environment, and then operates it through growing seasons with the domain knowledge your operations require.', audience = 'Agribusiness Chief Operating Officers, Farm Operations Directors, and Agricultural Technology leaders', industry_relevance = 'Commercial farming enterprises, food production businesses, agribusiness cooperatives, and agricultural technology providers across arable, horticultural, and livestock operations', business_impact = 'Improves yield predictability, reduces input waste through precise resource management, and gives farm operations leaders the real-time field visibility needed to act on agronomic signals before they become production losses.' WHERE id = (SELECT product_id FROM product_variants WHERE id = 225);

-- Manufacturing Operations (High-Impact) - Transformation Bundle (variant 226)
UPDATE product_variants SET positioning = 'Manufacturing operations redesigned for Industry 4.0 and operated to improve OEE continuously after go-live.' WHERE id = 226;
UPDATE product_content SET description = 'Modernise your manufacturing operations with a programme that connects production planning, shopfloor visibility, quality management, and predictive maintenance into a single operational capability. The bundle takes manufacturing digitisation from process design through MES and IIoT deployment to managed plant operations, maintaining the production context needed to make each stage build on the last.', positioning = 'Manufacturing operations redesigned for Industry 4.0 and operated to improve OEE continuously after go-live.' WHERE variant_id = 226;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (226, 'Production process mapping and digital workflow design conducted before any platform selection, ensuring the manufacturing execution system reflects your actual production sequences and quality checkpoints', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (226, 'AI predictive maintenance, quality defect detection, and production scheduling optimisation validated against your equipment data, failure history, and production constraint records before build', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (226, 'Shopfloor integration programme covering PLC, SCADA, and sensor connectivity as a unified deployment, avoiding the data fragmentation that results from separate integration projects for each production line', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (226, 'Managed plant operations service monitors OEE, predictive maintenance alert accuracy, quality rates, and production plan adherence with monthly reports and quarterly optimisation cycles', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (226, 'bundle');
INSERT INTO product_tags (variant_id, tag_name) VALUES (226, 'end-to-end');
INSERT INTO product_tags (variant_id, tag_name) VALUES (226, 'manufacturing-operations');
INSERT INTO product_tags (variant_id, tag_name) VALUES (226, 'Industry-4.0');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (226, 'Weeks 1-5: Production process mapping, digital workflow design, MES requirements, and IIoT architecture', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (226, 'Weeks 6-9: AI predictive maintenance and quality detection validation, equipment data and sensor review', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (226, 'Weeks 10-17: MES configuration, PLC and sensor integration, production workflow build, and plant UAT', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (226, 'Weeks 18-21: AI model deployment, predictive alert configuration, production monitoring setup, and phased go-live', 3);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (226, 'Weeks 22-24: Managed plant operations activation, OEE baseline, and first quarterly optimisation review', 4);
UPDATE products SET short_description = 'Modernise your manufacturing operations with a programme that connects production planning, shopfloor visibility, quality management, and predictive maintenance into a single operational capability. The bundle takes manufacturing digitisation from process design through MES and IIoT deployment to managed plant operations, maintaining the production context needed to make each stage build on the last.', audience = 'Manufacturing Directors, Plant Managers, and Operations leaders accountable for production throughput, quality, and asset performance', industry_relevance = 'Discrete and process manufacturers, industrial operators, food and beverage producers, and automotive and aerospace component suppliers undertaking Industry 4.0 transformation', business_impact = 'Increases overall equipment effectiveness, reduces unplanned downtime through predictive maintenance, and improves quality defect detection rates, with managed operations sustaining and extending these gains as production volumes and mix change.' WHERE id = (SELECT product_id FROM product_variants WHERE id = 226);

-- Infrastructure Operations (High-Impact) - Transformation Bundle (variant 227)
UPDATE product_variants SET positioning = 'Infrastructure operations built on trusted asset data, predictive maintenance, and the field mobility your teams need to act fast.' WHERE id = 227;
UPDATE product_content SET description = 'Digitise infrastructure asset management and field operations with a programme that takes you from asset data model design through IoT and field mobility deployment to managed infrastructure operations. The bundle addresses the challenge of ageing asset records, reactive maintenance, and field coordination gaps as a single end-to-end capability, not separate workstreams.', positioning = 'Infrastructure operations built on trusted asset data, predictive maintenance, and the field mobility your teams need to act fast.' WHERE variant_id = 227;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (227, 'Asset data model, maintenance strategy, and field workflow design conducted in stage one ensures the operational platform reflects your actual asset classes, maintenance regimes, and field team structures', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (227, 'AI predictive failure detection and work order prioritisation validated against your historical maintenance records and asset condition data before any configuration begins', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (227, 'Field mobility and IoT sensor integration deployed as part of the same programme as the asset management platform, ensuring data flows from sensor to work order to performance dashboard without manual intervention', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (227, 'Managed infrastructure operations provide monthly asset health reports, maintenance schedule adherence tracking, and quarterly asset performance reviews aligned to your regulatory and service level commitments', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (227, 'bundle');
INSERT INTO product_tags (variant_id, tag_name) VALUES (227, 'end-to-end');
INSERT INTO product_tags (variant_id, tag_name) VALUES (227, 'infrastructure-operations');
INSERT INTO product_tags (variant_id, tag_name) VALUES (227, 'asset-management');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (227, 'Weeks 1-5: Asset data model design, maintenance strategy, field workflow blueprints, and integration architecture', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (227, 'Weeks 6-9: AI predictive maintenance validation, sensor data review, and condition monitoring requirements', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (227, 'Weeks 10-17: EAM platform configuration, IoT integration, field mobility deployment, and structured testing', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (227, 'Weeks 18-21: AI failure prediction deployment, work order automation, monitoring setup, and go-live', 3);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (227, 'Weeks 22-24: Managed infrastructure operations activation, maintenance schedule baseline, and first performance review', 4);
UPDATE products SET short_description = 'Digitise infrastructure asset management and field operations with a programme that takes you from asset data model design through IoT and field mobility deployment to managed infrastructure operations. The bundle addresses the challenge of ageing asset records, reactive maintenance, and field coordination gaps as a single end-to-end capability, not separate workstreams.', audience = 'Asset Management Directors, Infrastructure Operations leaders, and Facilities or Utilities executives accountable for asset reliability and maintenance cost', industry_relevance = 'Utilities, transport authorities, energy operators, real estate portfolio managers, and asset-intensive industrial operators where asset reliability and regulatory compliance are operational priorities', business_impact = 'Reduces unplanned asset failures through predictive maintenance, improves field productivity through better work order management, and provides asset leaders with the reliability data needed to plan capital investment accurately.' WHERE id = (SELECT product_id FROM product_variants WHERE id = 227);

-- Government Operations (High-Impact) - Transformation Bundle (variant 228)
UPDATE product_variants SET positioning = 'Government transformation delivered with the accountability, accessibility, and security that public services demand.' WHERE id = 228;
UPDATE product_content SET description = 'Modernise government service delivery and internal operations with a programme that designs citizen-centred workflows, validates responsible AI use within public sector constraints, deploys digital capabilities with the security and accessibility standards public services require, and then operates them as managed government services accountable to citizens and oversight bodies.', positioning = 'Government transformation delivered with the accountability, accessibility, and security that public services demand.' WHERE variant_id = 228;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (228, 'Service design grounded in citizen journey research and public sector accessibility requirements, ensuring digital services meet the standards expected before build investment is committed', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (228, 'AI use-case validation conducted with public sector regulatory, explainability, and ethical constraints as first-order requirements, not afterthoughts added during deployment', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (228, 'Deployment programme includes security accreditation support, accessibility compliance testing, and data sovereignty verification as integrated workstreams, not separate projects requiring separate sign-off cycles', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (228, 'Managed public service operations deliver monthly service performance reports, accessibility compliance monitoring, and security posture reviews aligned to government assurance frameworks', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (228, 'bundle');
INSERT INTO product_tags (variant_id, tag_name) VALUES (228, 'end-to-end');
INSERT INTO product_tags (variant_id, tag_name) VALUES (228, 'government-operations');
INSERT INTO product_tags (variant_id, tag_name) VALUES (228, 'citizen-services');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (228, 'Weeks 1-5: Citizen journey research, service workflow design, accessibility requirements, and digital platform selection', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (228, 'Weeks 6-9: AI use-case validation within public sector constraints, data governance and security requirements', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (228, 'Weeks 10-17: Platform configuration, accessibility build, security controls, and structured testing', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (228, 'Weeks 18-21: AI capability deployment, security accreditation, accessibility audit, and controlled launch', 3);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (228, 'Weeks 22-24: Managed government service operations start, first citizen satisfaction measurement, and performance baseline', 4);
UPDATE products SET short_description = 'Modernise government service delivery and internal operations with a programme that designs citizen-centred workflows, validates responsible AI use within public sector constraints, deploys digital capabilities with the security and accessibility standards public services require, and then operates them as managed government services accountable to citizens and oversight bodies.', audience = 'Digital Government Directors, Ministry CIOs, Agency Operations leaders, and Transformation Secretaries accountable for public service delivery', industry_relevance = 'National and local government ministries, regulatory agencies, public authorities, and publicly funded service organisations transforming citizen-facing or internal government operations', business_impact = 'Improves citizen service speed and accessibility, reduces case processing backlogs through automation, and provides public sector leaders with the operational transparency expected by oversight bodies and the public.' WHERE id = (SELECT product_id FROM product_variants WHERE id = 228);

-- Hospitality Operations (High-Impact) - Transformation Bundle (variant 229)
UPDATE product_variants SET positioning = 'Hospitality operations built around the guest journey, deployed across your properties, and managed to improve satisfaction scores continuously.' WHERE id = 229;
UPDATE product_content SET description = 'Elevate the guest experience and streamline hospitality operations by designing a digital capability that connects reservations, housekeeping, food and beverage, and guest communications into a single coordinated service model. The bundle takes hospitality operations from workflow design through property management system deployment to live managed guest operations.', positioning = 'Hospitality operations built around the guest journey, deployed across your properties, and managed to improve satisfaction scores continuously.' WHERE variant_id = 229;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (229, 'Guest journey mapping and operational workflow design conducted first ensures that platform configuration reflects your actual service standards and property workflows, not a generic hospitality template', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (229, 'AI-driven demand forecasting, dynamic pricing, and personalised upsell recommendations validated against your booking history, seasonality patterns, and revenue management strategy before build', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (229, 'Property management system and guest communication platform deployed as a single integrated programme, eliminating the fragmentation where reservations, housekeeping, and F&B operate on disconnected systems', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (229, 'Managed hospitality operations monitor guest satisfaction scores, service response times, and revenue per available room, with seasonal performance reviews and continuous operational optimisation', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (229, 'bundle');
INSERT INTO product_tags (variant_id, tag_name) VALUES (229, 'end-to-end');
INSERT INTO product_tags (variant_id, tag_name) VALUES (229, 'hospitality-operations');
INSERT INTO product_tags (variant_id, tag_name) VALUES (229, 'guest-experience');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (229, 'Weeks 1-4: Guest journey mapping, service workflow design, PMS requirements, and revenue management integration architecture', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (229, 'Weeks 5-8: AI demand forecasting and personalisation use-case validation, booking data review', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (229, 'Weeks 9-15: PMS and channel manager configuration, housekeeping integration, F&B workflow build, and UAT', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (229, 'Weeks 16-19: AI pricing and personalisation deployment, guest communication activation, and controlled go-live', 3);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (229, 'Weeks 20-24: Managed hospitality operations activation, guest satisfaction baseline, and first revenue review', 4);
UPDATE products SET short_description = 'Elevate the guest experience and streamline hospitality operations by designing a digital capability that connects reservations, housekeeping, food and beverage, and guest communications into a single coordinated service model. The bundle takes hospitality operations from workflow design through property management system deployment to live managed guest operations.', audience = 'Hotel General Managers, Heads of Operations, Revenue Directors, and Guest Experience leaders accountable for occupancy, RevPAR, and guest satisfaction', industry_relevance = 'Hotels, resorts, serviced residences, venue operators, and tourism businesses where guest experience quality and revenue optimisation are both operational and commercial priorities', business_impact = 'Improves guest satisfaction scores through faster, more personalised service, increases RevPAR through AI-driven pricing and upsell, and reduces operational coordination effort across housekeeping, F&B, and front office.' WHERE id = (SELECT product_id FROM product_variants WHERE id = 229);

-- Retail Operations (High-Impact) - Transformation Bundle (variant 230)
UPDATE product_variants SET positioning = 'Retail operations designed for omnichannel consistency and managed to improve trading performance continuously after launch.' WHERE id = 230;
UPDATE product_content SET description = 'Build a retail operations capability that keeps stores performing, inventory accurate, and customer engagement consistent across all channels. This bundle designs the omnichannel operational model, validates AI merchandising and demand planning use cases, deploys the platform, and then operates retail operations as a managed service that responds to trading patterns rather than lagging them.', positioning = 'Retail operations designed for omnichannel consistency and managed to improve trading performance continuously after launch.' WHERE variant_id = 230;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (230, 'Omnichannel operational model and inventory architecture designed before any platform configuration, preventing the inventory synchronisation failures that stem from designing commerce and store systems separately', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (230, 'AI demand forecasting, replenishment optimisation, and personalised promotion targeting validated against your SKU portfolio, seasonality, and customer purchase data before build', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (230, 'Store systems, e-commerce platform, and inventory management deployed as a unified programme with a single integration testing cycle covering all channel hand-offs', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (230, 'Managed retail operations deliver weekly trading performance dashboards, monthly inventory accuracy reports, and quarterly trading reviews so operational response keeps pace with commercial needs', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (230, 'bundle');
INSERT INTO product_tags (variant_id, tag_name) VALUES (230, 'end-to-end');
INSERT INTO product_tags (variant_id, tag_name) VALUES (230, 'retail-operations');
INSERT INTO product_tags (variant_id, tag_name) VALUES (230, 'omnichannel');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (230, 'Weeks 1-4: Omnichannel model design, inventory architecture, store workflow blueprints, and platform selection', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (230, 'Weeks 5-8: AI demand forecasting and promotion targeting validation, customer data and catalogue review', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (230, 'Weeks 9-16: Platform configuration, store and commerce integrations, inventory workflow build, and trading UAT', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (230, 'Weeks 17-20: AI merchandising deployment, promotion engine activation, and controlled launch', 3);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (230, 'Weeks 21-24: Managed retail operations activation, inventory accuracy baseline, and first trading performance review', 4);
UPDATE products SET short_description = 'Build a retail operations capability that keeps stores performing, inventory accurate, and customer engagement consistent across all channels. This bundle designs the omnichannel operational model, validates AI merchandising and demand planning use cases, deploys the platform, and then operates retail operations as a managed service that responds to trading patterns rather than lagging them.', audience = 'Chief Retail Officers, Heads of Commerce, Store Operations Directors, and Supply Chain leaders accountable for sales performance and stock accuracy', industry_relevance = 'Physical and omnichannel retailers, grocery operators, fashion and lifestyle brands, and marketplace businesses where inventory accuracy and customer engagement are critical to trading performance', business_impact = 'Reduces stock-outs and overstock positions through AI-driven replenishment, improves conversion through better promotion targeting, and gives retail leaders the real-time trading visibility to respond to demand shifts quickly.' WHERE id = (SELECT product_id FROM product_variants WHERE id = 230);

-- Service Operations (High-Impact) - Transformation Bundle (variant 231)
UPDATE product_variants SET positioning = 'Service operations designed for throughput and quality, deployed for field execution, and managed to close every job right.' WHERE id = 231;
UPDATE product_content SET description = 'Design and operate a service delivery model that coordinates scheduling, field execution, quality, and customer follow-through from a single platform. This bundle takes service operations from workflow design through field service management deployment to managed service operations, keeping service delivery KPIs and operational context with the same team throughout.', positioning = 'Service operations designed for throughput and quality, deployed for field execution, and managed to close every job right.' WHERE variant_id = 231;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (231, 'Service workflow, scheduling rules, and quality checkpoint design in stage one ensures the field service management platform is configured to match your actual service types, technician skills, and SLA commitments', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (231, 'AI job scheduling optimisation and predictive service demand validated against your job history, technician capacity, and geographic distribution before build', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (231, 'Customer communication workflows, technician mobile app, and back-office integration deployed in a single programme, eliminating the gap between what the customer is told and what the field team does', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (231, 'Managed service operations track first-time fix rate, SLA compliance, technician utilisation, and customer satisfaction monthly, with quarterly scheduling optimisation cycles', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (231, 'bundle');
INSERT INTO product_tags (variant_id, tag_name) VALUES (231, 'end-to-end');
INSERT INTO product_tags (variant_id, tag_name) VALUES (231, 'service-operations');
INSERT INTO product_tags (variant_id, tag_name) VALUES (231, 'field-service');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (231, 'Weeks 1-4: Service workflow design, scheduling rules, skill matrix, SLA framework, and FSM platform selection', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (231, 'Weeks 5-8: AI scheduling optimisation and demand forecasting validation, job history and capacity review', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (231, 'Weeks 9-15: FSM configuration, mobile app deployment, customer communication build, and integrated testing', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (231, 'Weeks 16-19: AI scheduling deployment, route optimisation activation, and controlled go-live', 3);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (231, 'Weeks 20-24: Managed service operations activation, first-time fix baseline, and scheduling optimisation cycle', 4);
UPDATE products SET short_description = 'Design and operate a service delivery model that coordinates scheduling, field execution, quality, and customer follow-through from a single platform. This bundle takes service operations from workflow design through field service management deployment to managed service operations, keeping service delivery KPIs and operational context with the same team throughout.', audience = 'Service Operations Directors, Field Service Managers, and Customer Experience leaders accountable for service delivery quality and operational cost', industry_relevance = 'Field service organisations, maintenance and repair providers, professional services firms, facilities management companies, and any organisation where technician scheduling and on-site service quality affect customer retention', business_impact = 'Increases first-time fix rates, reduces travel time through AI-optimised scheduling, improves customer satisfaction through proactive communication, and gives service leaders the visibility to manage capacity before SLA breaches occur.' WHERE id = (SELECT product_id FROM product_variants WHERE id = 231);

-- Logistics Operations (High-Impact) - Transformation Bundle (variant 232)
UPDATE product_variants SET positioning = 'Logistics operations built for visibility and responsiveness, deployed end-to-end, and managed to reduce exception handling costs.' WHERE id = 232;
UPDATE product_content SET description = 'Build a logistics capability that gives you real-time visibility across your fleet, warehouse, and fulfilment operations while reducing the manual coordination that slows execution and creates errors. This bundle takes logistics digitisation from operational design through WMS and TMS deployment to managed logistics operations, maintaining supply chain context at every stage.', positioning = 'Logistics operations built for visibility and responsiveness, deployed end-to-end, and managed to reduce exception handling costs.' WHERE variant_id = 232;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (232, 'Supply chain operational design and data flow architecture confirmed before any platform selection, ensuring the WMS, TMS, and tracking systems are chosen and configured to work together from the start', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (232, 'AI route optimisation, demand-driven replenishment, and predictive delay alerting validated against your shipment volumes, carrier mix, and network geography before build', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (232, 'Warehouse, transport, and carrier integration deployed as a unified programme with end-to-end testing covering order, pick, dispatch, and last-mile hand-offs in a single test cycle', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (232, 'Managed logistics operations deliver daily exception dashboards, weekly performance summaries, and monthly network optimisation reviews so logistics costs and service levels improve continuously', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (232, 'bundle');
INSERT INTO product_tags (variant_id, tag_name) VALUES (232, 'end-to-end');
INSERT INTO product_tags (variant_id, tag_name) VALUES (232, 'logistics-operations');
INSERT INTO product_tags (variant_id, tag_name) VALUES (232, 'supply-chain');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (232, 'Weeks 1-5: Network design, operational workflow mapping, data flow architecture, and WMS or TMS platform selection', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (232, 'Weeks 6-9: AI route and replenishment optimisation validation, carrier data and shipment history review', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (232, 'Weeks 10-17: Platform configuration, warehouse workflow build, carrier integration, and end-to-end testing', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (232, 'Weeks 18-21: AI optimisation deployment, tracking activation, monitoring setup, and phased go-live', 3);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (232, 'Weeks 22-24: Managed logistics operations activation, network performance baseline, and first monthly review', 4);
UPDATE products SET short_description = 'Build a logistics capability that gives you real-time visibility across your fleet, warehouse, and fulfilment operations while reducing the manual coordination that slows execution and creates errors. This bundle takes logistics digitisation from operational design through WMS and TMS deployment to managed logistics operations, maintaining supply chain context at every stage.', audience = 'Supply Chain Directors, Heads of Logistics, Fulfilment Operations leaders, and COOs accountable for delivery performance and logistics cost', industry_relevance = '3PL providers, e-commerce fulfilment operators, distributors, manufacturers with outbound logistics operations, and importers where delivery performance and inventory accuracy are competitive differentiators', business_impact = 'Improves on-time delivery rates, reduces per-shipment cost through AI-optimised routing, and gives logistics leaders the real-time network visibility needed to intervene before delays become customer complaints.' WHERE id = (SELECT product_id FROM product_variants WHERE id = 232);

-- Wellness Operations (High-Impact) - Transformation Bundle (variant 233)
UPDATE product_variants SET positioning = 'A connected wellness capability that improves client outcomes and practice efficiency, designed and managed end-to-end.' WHERE id = 233;
UPDATE product_content SET description = 'Create a wellness service model where clients receive consistent, coordinated care from first booking through treatment, follow-up, and ongoing wellness engagement. This bundle designs the client experience and clinical workflow, validates AI-assisted care recommendations within wellness and clinical constraints, deploys the practice management capability, and then operates it as a managed wellness service.', positioning = 'A connected wellness capability that improves client outcomes and practice efficiency, designed and managed end-to-end.' WHERE variant_id = 233;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (233, 'Client journey and care workflow design conducted before any practice management platform configuration, ensuring scheduling, records, and care coordination align to your actual clinical or wellness model', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (233, 'AI wellness recommendation, appointment optimisation, and client engagement use cases validated against your care protocols, data consent model, and applicable wellness or clinical regulations', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (233, 'Client portal, practitioner scheduling, and electronic records deployed as a single integrated programme, preventing the disconnection between what clients see and what practitioners access', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (233, 'Managed wellness operations monitor booking conversion, client retention, appointment utilisation, and care plan completion rates, with quarterly operational reviews and continuous workflow optimisation', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (233, 'bundle');
INSERT INTO product_tags (variant_id, tag_name) VALUES (233, 'end-to-end');
INSERT INTO product_tags (variant_id, tag_name) VALUES (233, 'wellness-operations');
INSERT INTO product_tags (variant_id, tag_name) VALUES (233, 'health-tech');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (233, 'Weeks 1-4: Client journey mapping, care workflow design, practice management requirements, and regulatory review', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (233, 'Weeks 5-8: AI care recommendation and scheduling optimisation validation, consent model and data review', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (233, 'Weeks 9-15: Platform configuration, client portal build, records integration, and clinical workflow testing', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (233, 'Weeks 16-19: AI recommendation deployment, appointment optimisation activation, and controlled go-live', 3);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (233, 'Weeks 20-24: Managed wellness operations activation, client retention baseline, and first quarterly review', 4);
UPDATE products SET short_description = 'Create a wellness service model where clients receive consistent, coordinated care from first booking through treatment, follow-up, and ongoing wellness engagement. This bundle designs the client experience and clinical workflow, validates AI-assisted care recommendations within wellness and clinical constraints, deploys the practice management capability, and then operates it as a managed wellness service.', audience = 'Clinic Directors, Wellness Operations leaders, and Practice Managers accountable for client outcomes, retention, and practitioner productivity', industry_relevance = 'Wellness centres, physiotherapy and allied health clinics, preventive health providers, fitness and lifestyle operators, and mental health service organisations', business_impact = 'Increases client retention through personalised engagement, reduces appointment no-show rates through automated reminders, improves practitioner utilisation, and gives practice leaders clear visibility of care quality and operational performance.' WHERE id = (SELECT product_id FROM product_variants WHERE id = 233);

-- Advisory Set - Advisory Set (variant 234)
UPDATE product_variants SET positioning = 'Targeted transformation diagnostics across your chosen domains, consolidated into priorities your leadership can act on.' WHERE id = 234;
UPDATE product_content SET description = 'A structured advisory programme for organisations that need targeted diagnostic work across multiple transformation domains before committing to larger investments. The Advisory Set applies the DigitalQatalyst team''s assessment methodology selectively across your chosen capability areas, producing a consolidated view of priorities with the rigour of a full assessment and the focus of a targeted engagement.', positioning = 'Targeted transformation diagnostics across your chosen domains, consolidated into priorities your leadership can act on.' WHERE variant_id = 234;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (234, 'Scope defined by your transformation agenda, not a fixed domain list, allowing the advisory to focus where your organisation''s most consequential decisions need support', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (234, 'Cross-domain findings consolidated into a single priority map, surfacing the interdependencies between capability areas that siloed assessments typically miss', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (234, 'Each advisory workstream applies the same structured assessment methodology, ensuring findings are comparable and can be sequenced into a coherent transformation roadmap', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (234, 'Executive alignment session at the close translates findings into investment decisions and sequencing recommendations that leadership can take to board or budget review', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (234, 'bundle');
INSERT INTO product_tags (variant_id, tag_name) VALUES (234, 'end-to-end');
INSERT INTO product_tags (variant_id, tag_name) VALUES (234, 'advisory');
INSERT INTO product_tags (variant_id, tag_name) VALUES (234, 'transformation-strategy');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (234, 'Phase 1: Scope alignment and advisory workstream design', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (234, 'Phase 2: Domain assessments, stakeholder interviews, and findings development', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (234, 'Phase 3: Cross-domain analysis, priority synthesis, and roadmap drafting', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (234, 'Phase 4: Leadership playback, investment alignment, and roadmap sign-off', 3);
UPDATE products SET short_description = 'A structured advisory programme for organisations that need targeted diagnostic work across multiple transformation domains before committing to larger investments. The Advisory Set applies the DigitalQatalyst team''s assessment methodology selectively across your chosen capability areas, producing a consolidated view of priorities with the rigour of a full assessment and the focus of a targeted engagement.', audience = 'Chief Executives, Strategy Directors, Transformation Sponsors, and Executive leadership teams making investment decisions across multiple transformation domains', industry_relevance = 'Organisations at a strategic inflection point across any sector, where multiple transformation opportunities are competing for leadership attention and investment priority', business_impact = 'Creates the leadership alignment and priority clarity needed to commit transformation investment with confidence, reducing the risk of misallocated spend across competing initiatives.' WHERE id = (SELECT product_id FROM product_variants WHERE id = 234);

-- Design Services Set - Design Services Set (variant 235)
UPDATE product_variants SET positioning = 'Transformation blueprints across your chosen domains, coordinated to avoid conflicts and ready to hand to delivery teams.' WHERE id = 235;
UPDATE product_content SET description = 'A design programme that turns transformation priorities across multiple capability areas into solution blueprints, user-centred specifications, and delivery-ready backlogs. The Design Services Set applies the DigitalQatalyst team''s design methodology selectively across your chosen domains, with cross-domain design coherence built in rather than bolted on.', positioning = 'Transformation blueprints across your chosen domains, coordinated to avoid conflicts and ready to hand to delivery teams.' WHERE variant_id = 235;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (235, 'Design scope shaped around your transformation priorities, with the DigitalQatalyst team confirming design dependencies and sequencing before work begins to prevent downstream conflicts', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (235, 'Each domain design produces build-ready specifications with acceptance criteria, data requirements, and integration dependencies documented to a consistent standard', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (235, 'Cross-domain integration requirements identified and resolved during the design programme, not discovered during build when fixing them is expensive', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (235, 'Design governance framework established at the start applies consistent architecture principles and approval standards across all domain workstreams in the set', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (235, 'bundle');
INSERT INTO product_tags (variant_id, tag_name) VALUES (235, 'end-to-end');
INSERT INTO product_tags (variant_id, tag_name) VALUES (235, 'design-services');
INSERT INTO product_tags (variant_id, tag_name) VALUES (235, 'transformation-design');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (235, 'Phase 1: Design scope alignment, cross-domain dependency mapping, and design principles', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (235, 'Phase 2: Domain design workstreams: journey design, solution blueprints, and specification development', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (235, 'Phase 3: Cross-domain integration design, architecture review, and specification alignment', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (235, 'Phase 4: Stakeholder sign-off, delivery backlog handover, and build-readiness confirmation', 3);
UPDATE products SET short_description = 'A design programme that turns transformation priorities across multiple capability areas into solution blueprints, user-centred specifications, and delivery-ready backlogs. The Design Services Set applies the DigitalQatalyst team''s design methodology selectively across your chosen domains, with cross-domain design coherence built in rather than bolted on.', audience = 'Heads of Digital and Technology, Delivery Sponsors, Product Directors, and Programme leaders accountable for solution design quality across multiple workstreams', industry_relevance = 'Organisations with concurrent transformation workstreams across digital, operational, or data domains that need coordinated design rather than separately managed design projects', business_impact = 'Delivers build-ready specifications for multiple transformation domains without the integration conflicts that arise from separately managed design workstreams, accelerating the path from strategy to delivery.' WHERE id = (SELECT product_id FROM product_variants WHERE id = 235);

-- Deploy Services Set - Deploy Services Set (variant 236)
UPDATE product_variants SET positioning = 'Multiple capability deployments coordinated as one programme, with shared governance and a single programme team accountable for delivery.' WHERE id = 236;
UPDATE product_content SET description = 'A structured deployment programme that implements selected TMaaS capabilities across your organisation through managed delivery, configuration, and integration work governed under a single programme framework. The Deploy Services Set applies consistent delivery standards across multiple capability deployments, reducing the coordination burden that falls on your team when running separate delivery projects simultaneously.', positioning = 'Multiple capability deployments coordinated as one programme, with shared governance and a single programme team accountable for delivery.' WHERE variant_id = 236;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (236, 'Delivery programme governance established at the start covers all deployment workstreams, providing a single status view and consistent escalation path rather than separate steering arrangements for each capability', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (236, 'Integration dependencies across capability deployments managed within the programme, preventing the hand-off failures that occur when separate projects share data or platform dependencies', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (236, 'Testing and quality assurance standards applied consistently across all deployments in the set, so acceptance criteria and defect management are governed to the same standard everywhere', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (236, 'Controlled launch and hypercare coordinated across all capabilities in scope, ensuring support capacity and issue management are planned for the full go-live portfolio rather than each deployment in isolation', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (236, 'bundle');
INSERT INTO product_tags (variant_id, tag_name) VALUES (236, 'end-to-end');
INSERT INTO product_tags (variant_id, tag_name) VALUES (236, 'deployment-services');
INSERT INTO product_tags (variant_id, tag_name) VALUES (236, 'programme-delivery');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (236, 'Phase 1: Programme setup, deployment scope confirmation, and dependency mapping across capabilities', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (236, 'Phase 2: Configuration and build across capability workstreams, with integration touchpoints managed centrally', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (236, 'Phase 3: Integrated testing, cross-capability UAT, and launch readiness confirmation', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (236, 'Phase 4: Phased go-live, hypercare, and operational handover across all deployed capabilities', 3);
UPDATE products SET short_description = 'A structured deployment programme that implements selected TMaaS capabilities across your organisation through managed delivery, configuration, and integration work governed under a single programme framework. The Deploy Services Set applies consistent delivery standards across multiple capability deployments, reducing the coordination burden that falls on your team when running separate delivery projects simultaneously.', audience = 'Programme Directors, Delivery Sponsors, and Technology leaders accountable for delivering multiple simultaneous transformation capabilities', industry_relevance = 'Organisations with active transformation portfolios across digital, data, operational, or automation domains where separate project delivery is creating coordination overhead and integration risk', business_impact = 'Reduces delivery risk and coordination effort for multi-capability deployments, shortening the time from committed investment to live operations by treating interdependent deployments as a single managed programme.' WHERE id = (SELECT product_id FROM product_variants WHERE id = 236);

-- Managed Services Set - Managed Services Set (variant 237)
UPDATE product_variants SET positioning = 'One team, one service agreement, one performance view across all your deployed capabilities after go-live.' WHERE id = 237;
UPDATE product_content SET description = 'A flexible managed operations programme that sustains performance across your deployed TMaaS capabilities after launch, with monitoring, optimisation, and continuous improvement governed under a single service agreement. The Managed Services Set gives organisations one accountable team for ongoing operations across multiple capabilities rather than separate managed service contracts for each.', positioning = 'One team, one service agreement, one performance view across all your deployed capabilities after go-live.' WHERE variant_id = 237;
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (237, 'Single service management framework governs all capabilities in scope, providing a consolidated monthly performance report and one escalation path for issues across all deployed platforms', 0);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (237, 'Continuous optimisation cycles applied across the set identify improvement opportunities that span capability boundaries, such as data quality improvements that benefit both analytics and automation', 1);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (237, 'SLA coverage negotiated at the portfolio level, with the flexibility to allocate response priority and service hours to the capabilities where operational risk is highest', 2);
INSERT INTO product_features (variant_id, feature_text, sort_order) VALUES (237, 'Regular performance reviews assess each capability''s contribution to business outcomes and identify where additional investment or scope changes would increase impact, keeping the managed service aligned to your evolving priorities', 3);
INSERT INTO product_tags (variant_id, tag_name) VALUES (237, 'bundle');
INSERT INTO product_tags (variant_id, tag_name) VALUES (237, 'end-to-end');
INSERT INTO product_tags (variant_id, tag_name) VALUES (237, 'managed-services');
INSERT INTO product_tags (variant_id, tag_name) VALUES (237, 'service-operations');
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (237, 'Phase 1: Service scope confirmation, SLA alignment, and onboarding across all capabilities in the set', 0);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (237, 'Phase 2: Steady-state operations, first consolidated performance reporting cycle, and baseline establishment', 1);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (237, 'Phase 3: First optimisation cycle, cross-capability improvement identification, and service review', 2);
INSERT INTO product_timeline_milestones (variant_id, milestone_text, sort_order) VALUES (237, 'Ongoing: Monthly performance reporting, continuous monitoring, and quarterly optimisation across all capabilities', 3);
UPDATE products SET short_description = 'A flexible managed operations programme that sustains performance across your deployed TMaaS capabilities after launch, with monitoring, optimisation, and continuous improvement governed under a single service agreement. The Managed Services Set gives organisations one accountable team for ongoing operations across multiple capabilities rather than separate managed service contracts for each.', audience = 'Chief Operating Officers, Service Owners, IT Directors, and Transformation leaders accountable for the sustained performance of deployed digital and operational capabilities', industry_relevance = 'Organisations with multiple live TMaaS capabilities that want a coordinated managed service approach rather than a growing portfolio of separately contracted support arrangements', business_impact = 'Reduces the management overhead of operating multiple deployed capabilities, improves cross-capability performance through coordinated optimisation, and provides leadership with a single consolidated view of operational health across the transformation portfolio.' WHERE id = (SELECT product_id FROM product_variants WHERE id = 237);

SELECT refresh_product_search_index();
COMMIT;