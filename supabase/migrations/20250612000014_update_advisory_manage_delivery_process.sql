-- Three-step How It Works lifecycles for Assess (advisory) and Managed services
-- Prerequisites: product_content seed (12) applied

BEGIN;

UPDATE product_content pc
SET
  delivery_process = '{"totalDuration":"1 Week","steps":[{"step":1,"title":"Scope","duration":"Days 1-2","body":"We align on your goals, stakeholders, and assessment focus so the week stays targeted.","whatHappens":"Kick-off, context gathering, and assessment scope","dqEffort":"medium","yourEffort":"medium","active":true},{"step":2,"title":"Assess","duration":"Days 3-4","body":"We review your current state, surface priority gaps, and gather evidence your leadership can act on.","whatHappens":"Current-state review, gap analysis, and evidence capture","dqEffort":"high","yourEffort":"medium"},{"step":3,"title":"Advise","duration":"Day 5","body":"We share findings, recommendations, and practical next steps so you know what to prioritise in the marketplace.","whatHappens":"Findings playback, recommendations, and next-step roadmap","dqEffort":"medium","yourEffort":"low"}]}'::jsonb
FROM product_variants pv
WHERE pc.variant_id = pv.id
  AND pv.service_type_id = 'advisory';

UPDATE product_content pc
SET
  delivery_process = '{"totalDuration":"Ongoing","steps":[{"step":1,"title":"Onboard","duration":"Week 1","body":"We align on scope, SLAs, access, and how we will run the service with your team.","whatHappens":"Scope alignment, SLA setup, and access provisioning","dqEffort":"medium","yourEffort":"medium","active":true},{"step":2,"title":"Operate","duration":"Ongoing","body":"We run agreed operations with monitoring, incident response, and SLA-backed reporting.","whatHappens":"Monitoring, incident response, and service reporting","dqEffort":"high","yourEffort":"low"},{"step":3,"title":"Improve","duration":"Ongoing","body":"We review performance, apply optimisations, and keep the service aligned as your needs change.","whatHappens":"Performance reviews, optimisations, and roadmap updates","dqEffort":"medium","yourEffort":"low"}]}'::jsonb
FROM product_variants pv
WHERE pc.variant_id = pv.id
  AND pv.service_type_id = 'manage';

COMMIT;
