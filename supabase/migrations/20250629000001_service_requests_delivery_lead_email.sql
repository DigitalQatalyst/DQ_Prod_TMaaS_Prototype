-- Store DQ assignee email alongside display name for reliable My Assignments matching.

BEGIN;

ALTER TABLE service_requests
  ADD COLUMN IF NOT EXISTS delivery_lead_email TEXT;

CREATE INDEX IF NOT EXISTS service_requests_delivery_lead_email_idx
  ON service_requests (delivery_lead_email);

COMMIT;
