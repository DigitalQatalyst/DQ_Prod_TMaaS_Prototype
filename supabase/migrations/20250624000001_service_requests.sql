-- Customer service requests (MVP02) — persisted enquiries linked to Entra identities.

BEGIN;

CREATE TABLE IF NOT EXISTS customer_profiles (
  id TEXT PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  display_name TEXT,
  organisation TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS service_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  reference_no TEXT NOT NULL UNIQUE,
  user_id TEXT REFERENCES customer_profiles(id) ON DELETE SET NULL,
  submitter_email TEXT NOT NULL,
  title TEXT NOT NULL,
  service_type TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'submitted',
  description TEXT NOT NULL,
  variant_id INTEGER,
  marketplace_slug TEXT,
  delivery_lead TEXT,
  submitted_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT service_requests_status_check CHECK (
    status IN ('submitted', 'under_review', 'in_progress', 'closed', 'cancelled')
  ),
  CONSTRAINT service_requests_service_type_check CHECK (
    service_type IN ('design', 'deploy', 'assess', 'ai_design', 'ai_deploy')
  )
);

CREATE INDEX IF NOT EXISTS service_requests_user_id_idx ON service_requests (user_id);
CREATE INDEX IF NOT EXISTS service_requests_submitter_email_idx ON service_requests (submitter_email);
CREATE INDEX IF NOT EXISTS service_requests_submitted_at_idx ON service_requests (submitted_at DESC);

CREATE TABLE IF NOT EXISTS service_request_timeline (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  request_id UUID NOT NULL REFERENCES service_requests(id) ON DELETE CASCADE,
  kind TEXT NOT NULL,
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  actor TEXT,
  from_status TEXT,
  to_status TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT service_request_timeline_kind_check CHECK (
    kind IN ('status_change', 'assignment', 'note', 'created')
  )
);

CREATE INDEX IF NOT EXISTS service_request_timeline_request_id_idx
  ON service_request_timeline (request_id, created_at ASC);

COMMIT;
