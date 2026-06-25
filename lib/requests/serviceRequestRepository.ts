import type { SessionUser } from "@/lib/auth/session";
import { getSupabaseAdmin } from "@/lib/supabase/server";
import { mapCatalogServiceType } from "@/lib/requests/mapServiceType";
import { buildServiceRequestReferenceNo } from "@/lib/requests/referenceNo";
import type { CustomerRequest, RequestTimelineEntry } from "@/lib/types/requests";
import type { Database } from "@/lib/types/database.types";

type ServiceRequestInsert = Database["public"]["Tables"]["service_requests"]["Insert"];
type ServiceRequestUpdate = Database["public"]["Tables"]["service_requests"]["Update"];
type CustomerProfileInsert = Database["public"]["Tables"]["customer_profiles"]["Insert"];
type TimelineInsert = Database["public"]["Tables"]["service_request_timeline"]["Insert"];

export interface CreateServiceRequestInput {
  title: string;
  description: string;
  submitterEmail: string;
  serviceType?: string | undefined;
  variantId?: number | undefined;
  marketplaceSlug?: string | undefined;
  user?: SessionUser | null;
  organisation?: string | undefined;
}

export interface CreateServiceRequestResult {
  request: CustomerRequest;
}

type ServiceRequestRow = {
  id: string;
  reference_no: string;
  user_id: string | null;
  submitter_email: string;
  title: string;
  service_type: string;
  status: string;
  description: string;
  variant_id: number | null;
  marketplace_slug: string | null;
  delivery_lead: string | null;
  submitted_at: string;
  updated_at: string;
};

type TimelineRow = {
  id: string;
  request_id: string;
  kind: string;
  title: string;
  body: string;
  actor: string | null;
  from_status: string | null;
  to_status: string | null;
  created_at: string;
};

function mapTimelineRow(row: TimelineRow): RequestTimelineEntry {
  const entry: RequestTimelineEntry = {
    id: row.id,
    kind: row.kind as RequestTimelineEntry["kind"],
    title: row.title,
    body: row.body,
    createdAt: row.created_at,
  };
  if (row.actor) entry.actor = row.actor;
  if (row.from_status) {
    entry.fromStatus = row.from_status as NonNullable<RequestTimelineEntry["fromStatus"]>;
  }
  if (row.to_status) {
    entry.toStatus = row.to_status as NonNullable<RequestTimelineEntry["toStatus"]>;
  }
  return entry;
}

export function mapServiceRequestRow(
  row: ServiceRequestRow,
  timeline: TimelineRow[] = [],
): CustomerRequest {
  return {
    id: row.id,
    referenceNo: row.reference_no,
    title: row.title,
    serviceType: row.service_type as CustomerRequest["serviceType"],
    status: row.status as CustomerRequest["status"],
    submittedAt: row.submitted_at,
    updatedAt: row.updated_at,
    description: row.description,
    variantId: row.variant_id ?? 0,
    userId: row.user_id ?? row.submitter_email,
    ...(row.delivery_lead ? { deliveryLead: row.delivery_lead } : {}),
    ...(row.marketplace_slug ? { marketplaceSlug: row.marketplace_slug } : {}),
    timeline: timeline.map(mapTimelineRow),
  };
}

export async function upsertCustomerProfile(user: SessionUser, organisation?: string) {
  const supabase = getSupabaseAdmin();
  if (!supabase) return;

  const email = user.email.toLowerCase();

  await supabase.from("customer_profiles").upsert(
    {
      id: user.id,
      email,
      display_name: user.displayName,
      organisation: organisation ?? user.organisation ?? null,
      updated_at: new Date().toISOString(),
    } satisfies CustomerProfileInsert,
    { onConflict: "id" },
  );

  await supabase
    .from("service_requests")
    .update({
      user_id: user.id,
      updated_at: new Date().toISOString(),
    } satisfies ServiceRequestUpdate)
    .eq("submitter_email", email)
    .is("user_id", null);
}

export async function createServiceRequest(
  input: CreateServiceRequestInput,
): Promise<CreateServiceRequestResult | null> {
  const supabase = getSupabaseAdmin();
  if (!supabase) return null;

  const now = new Date().toISOString();
  const serviceType = mapCatalogServiceType(input.serviceType);
  const userId = input.user?.id ?? null;

  if (input.user) {
    await upsertCustomerProfile(input.user, input.organisation);
  }

  const insertPayload: ServiceRequestInsert = {
    reference_no: buildServiceRequestReferenceNo(),
    user_id: userId,
    submitter_email: input.submitterEmail.toLowerCase(),
    title: input.title,
    service_type: serviceType,
    status: "submitted",
    description: input.description,
    variant_id: input.variantId ?? null,
    marketplace_slug: input.marketplaceSlug ?? null,
    submitted_at: now,
    updated_at: now,
  };

  const { data: requestRow, error: requestError } = await supabase
    .from("service_requests")
    .insert(insertPayload)
    .select("*")
    .single();

  if (requestError || !requestRow) {
    console.error("[service_requests] insert failed:", requestError);
    return null;
  }

  const timelineEntry: TimelineInsert = {
    request_id: requestRow.id,
    kind: "created",
    title: "Submitted",
    body: "Your request has been submitted successfully.",
    created_at: now,
  };

  const { data: timelineRows, error: timelineError } = await supabase
    .from("service_request_timeline")
    .insert(timelineEntry)
    .select("*");

  if (timelineError) {
    console.error("[service_requests] timeline insert failed:", timelineError);
  }

  return {
    request: mapServiceRequestRow(
      requestRow as ServiceRequestRow,
      (timelineRows ?? []) as TimelineRow[],
    ),
  };
}

export async function listServiceRequestsForUser(
  user: SessionUser,
): Promise<CustomerRequest[]> {
  const supabase = getSupabaseAdmin();
  if (!supabase) return [];

  const email = user.email.toLowerCase();

  const { data: rows, error } = await supabase
    .from("service_requests")
    .select("*")
    .or(`user_id.eq."${user.id}",submitter_email.eq."${email}"`)
    .order("submitted_at", { ascending: false });

  if (error || !rows?.length) {
    if (error) console.error("[service_requests] list failed:", error);
    return [];
  }

  const ids = rows.map((row) => row.id);
  const { data: timelineRows, error: timelineError } = await supabase
    .from("service_request_timeline")
    .select("*")
    .in("request_id", ids)
    .order("created_at", { ascending: true });

  if (timelineError) {
    console.error("[service_requests] timeline list failed:", timelineError);
  }

  const timelineByRequest = new Map<string, TimelineRow[]>();
  for (const row of (timelineRows ?? []) as TimelineRow[]) {
    const existing = timelineByRequest.get(row.request_id) ?? [];
    existing.push(row);
    timelineByRequest.set(row.request_id, existing);
  }

  return (rows as ServiceRequestRow[]).map((row) =>
    mapServiceRequestRow(row, timelineByRequest.get(row.id) ?? []),
  );
}

export async function getServiceRequestById(
  id: string,
  user: SessionUser,
): Promise<CustomerRequest | null> {
  const supabase = getSupabaseAdmin();
  if (!supabase) return null;

  const email = user.email.toLowerCase();
  const { data: row, error } = await supabase
    .from("service_requests")
    .select("*")
    .eq("id", id)
    .or(`user_id.eq."${user.id}",submitter_email.eq."${email}"`)
    .maybeSingle();

  if (error || !row) return null;

  const { data: timelineRows } = await supabase
    .from("service_request_timeline")
    .select("*")
    .eq("request_id", id)
    .order("created_at", { ascending: true });

  return mapServiceRequestRow(row as ServiceRequestRow, (timelineRows ?? []) as TimelineRow[]);
}
