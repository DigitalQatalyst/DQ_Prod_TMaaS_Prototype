"use client";
import * as React from "react";
import { PageHeader, Grid, Col, SectionCard, RailSection, Badge, Button } from "@dbp/ui";
import { toast } from "@dbp/ui";
import type { DetailConfig } from "../../types";

// ---------------------------------------------------------------------------
// Assignee picker — searches /api/requests/assignees?q=…
// ---------------------------------------------------------------------------

interface AssigneeOption {
  id: string;
  displayName: string;
  email: string;
}

function AssigneePicker({
  value,
  displayName,
  onChange,
}: {
  value: string;
  displayName: string;
  onChange: (id: string, name: string) => void;
}) {
  const [query, setQuery] = React.useState(displayName || "");
  const [results, setResults] = React.useState<AssigneeOption[]>([]);
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const debounceRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  // When a selection is cleared externally, reset local display
  React.useEffect(() => {
    if (!value) { setQuery(""); setResults([]); setOpen(false); }
  }, [value]);

  function search(q: string) {
    setQuery(q);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (!q.trim()) { setResults([]); setOpen(false); return; }
    debounceRef.current = setTimeout(async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/requests/assignees?q=${encodeURIComponent(q.trim())}`, {
          credentials: "same-origin",
        });
        if (!res.ok) { setResults([]); return; }
        const j = (await res.json()) as { assignees: AssigneeOption[] };
        setResults(j.assignees);
        setOpen(true);
      } finally {
        setLoading(false);
      }
    }, 300);
  }

  function select(opt: AssigneeOption) {
    setQuery(opt.displayName);
    setResults([]);
    setOpen(false);
    onChange(opt.id, opt.displayName);
  }

  return (
    <div style={{ position: "relative" }}>
      <input
        type="text"
        value={query}
        onChange={(e) => { search(e.target.value); if (!e.target.value) onChange("", ""); }}
        placeholder="Search by name or email…"
        autoComplete="off"
        className="rounded-input border border-[var(--color-border-default)] bg-white px-3 py-2 text-sm w-full focus:outline-none"
      />
      {loading && (
        <p className="mt-1 text-[10px] text-gray-400">Searching…</p>
      )}
      {open && results.length > 0 && (
        <ul
          className="absolute z-50 mt-1 max-h-48 w-full overflow-auto rounded-[var(--radius-card)] border border-[var(--color-border-default)] bg-white py-1 shadow-md"
        >
          {results.map((r) => (
            <li key={r.id}>
              <button
                type="button"
                className="flex w-full flex-col px-3 py-2 text-left hover:bg-[var(--color-surface)]"
                onClick={() => select(r)}
              >
                <span className="text-sm font-medium text-[var(--color-text-primary)]">{r.displayName}</span>
                <span className="text-[10px] text-gray-400">{r.email}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
      {open && results.length === 0 && !loading && (
        <p className="mt-1 text-[10px] text-gray-400">No users found.</p>
      )}
    </div>
  );
}

interface TimelineRow {
  kind: string;
  body: string | null;
  from_status: string | null;
  to_status: string | null;
  created_at: string;
  actor: string | null;
}

interface RequestDetail {
  id: string;
  reference_no: string;
  service_name: string;
  title: string;
  status: string;
  priority: string;
  department_name: string | null;
  target_due: string | null;
  created_at: string;
  summary: string | null;
  form: Record<string, unknown>;
  timeline: TimelineRow[];
  version: number;
  assignee_id: string | null;
  assignee_name: string | null;
}

type BadgeTone = "success" | "warning" | "info" | "danger" | "gray" | "orange" | "navy" | "default";

function statusTone(status: string): BadgeTone {
  const m: Record<string, BadgeTone> = {
    submitted: "info", in_review: "warning", in_fulfilment: "orange",
    returned_for_information: "gray", closed: "success", cancelled: "gray",
  };
  return m[status] ?? "default";
}

function shortDate(iso: string | null): string {
  if (!iso) return "—";
  try { return new Date(iso).toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" }); }
  catch { return iso; }
}

function relTime(iso: string): string {
  try {
    const diff = Date.now() - new Date(iso).getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 1) return "just now";
    if (mins < 60) return `${mins}m ago`;
    const hrs = Math.floor(mins / 60);
    if (hrs < 24) return `${hrs}h ago`;
    return shortDate(iso);
  } catch { return iso; }
}

function TimelineEntry({ entry }: { entry: TimelineRow }) {
  let text = entry.body ?? "";
  if (entry.kind === "status_change" && entry.from_status && entry.to_status) {
    text = text || `Status: ${entry.from_status.replace(/_/g," ")} → ${entry.to_status.replace(/_/g," ")}`;
  }
  if (entry.kind === "assignment") text = text || "Assigned to fulfiller";
  if (entry.kind === "created") text = text || "Request submitted";
  return (
    <li className="flex gap-3 py-3">
      <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--color-secondary)] opacity-60" />
      <div className="min-w-0 flex-1">
        <p className="text-sm text-[var(--color-text-secondary)]">{text}</p>
        <p className="mt-0.5 text-[10px] text-gray-400">
          {entry.actor ?? "System"} · {relTime(entry.created_at)}
        </p>
      </div>
    </li>
  );
}

export function RequestWorkspace({ config, requestRef }: { config: DetailConfig; requestRef: string }) {
  const isOperational = config.context === "operational";
  const [detail, setDetail] = React.useState<RequestDetail | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [note, setNote] = React.useState("");
  const [submittingNote, setSubmittingNote] = React.useState(false);
  const [actioning, setActioning] = React.useState<string | null>(null);
  const [showAssign, setShowAssign] = React.useState(false);
  const [assigneeId, setAssigneeId] = React.useState("");
  const [assigneeName, setAssigneeName] = React.useState("");

  const load = React.useCallback(() => {
    fetch(`/api/requests/${encodeURIComponent(requestRef)}`, { credentials: "same-origin" })
      .then((r) => {
        if (r.status === 404) throw new Error("not found");
        if (!r.ok) throw new Error("failed");
        return r.json() as Promise<{ request: RequestDetail }>;
      })
      .then((d) => setDetail(d.request))
      .catch((e) => setError(e instanceof Error ? e.message : "Could not load request."));
  }, [requestRef]);

  React.useEffect(() => { load(); }, [load]);

  async function patchAction(payload: Record<string, unknown>) {
    const action = String(payload.action);
    setActioning(action);
    try {
      const res = await fetch(`/api/requests/${encodeURIComponent(requestRef)}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const j = (await res.json().catch(() => ({}))) as { error?: string; code?: string };
      if (!res.ok) {
        if (j.code === "CONFLICT") {
          toast({ title: "Assignment conflict", description: "Someone else just assigned this request. Refreshing…", tone: "warning" });
          load();
          return;
        }
        toast({ title: "Action failed", description: j.error ?? "Please try again.", tone: "danger" });
        return;
      }
      toast({ title: "Done", tone: "success" });
      load();
    } finally {
      setActioning(null);
    }
  }

  async function submitNote(e: React.FormEvent) {
    e.preventDefault();
    if (!note.trim()) return;
    setSubmittingNote(true);
    try {
      const res = await fetch(`/api/requests/${encodeURIComponent(requestRef)}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "note", body: note.trim() }),
      });
      if (!res.ok) {
        const j = (await res.json().catch(() => ({}))) as { error?: string };
        toast({ title: "Note failed", description: j.error ?? "Please try again.", tone: "danger" });
        return;
      }
      setNote("");
      toast({ title: "Note added", tone: "success" });
      load();
    } finally {
      setSubmittingNote(false);
    }
  }

  if (error) {
    return (
      <p className="p-8 text-sm text-[var(--color-danger-text)]">
        {error === "not found" ? "Request not found." : "Could not load request."}
      </p>
    );
  }
  if (!detail) {
    return <p className="p-8 text-sm text-[var(--color-text-muted)]">Loading…</p>;
  }

  const formEntries = Object.entries(detail.form).filter(([k]) => !["schema_key"].includes(k));

  return (
    <div>
      <PageHeader
        title={detail.reference_no}
        titleSpan={2}
        breadcrumb={config.breadcrumb}
        aside={
          <Badge tone={statusTone(detail.status)} dot>
            {detail.status.replace(/_/g, " ")}
          </Badge>
        }
      />

      <p className="mt-1 text-sm text-[var(--color-text-muted)]">
        {detail.service_name} · {detail.department_name ?? "No department"} · Due {shortDate(detail.target_due)}
      </p>

      <Grid className="mt-6 items-start">
        {/* Main: form answers + timeline */}
        <Col span={8} className="min-w-0 space-y-4">
          <SectionCard title="Request details">
            <div className="space-y-3">
              <div>
                <p className="text-[10px] uppercase tracking-wide text-gray-400">Title</p>
                <p className="mt-0.5 text-sm text-[var(--color-text-primary)]">{detail.title}</p>
              </div>
              {detail.summary && (
                <div>
                  <p className="text-[10px] uppercase tracking-wide text-gray-400">Description</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-[var(--color-text-secondary)]">{detail.summary}</p>
                </div>
              )}
              {formEntries.map(([k, v]) => (
                <div key={k}>
                  <p className="text-[10px] uppercase tracking-wide text-gray-400">{k.replace(/_/g, " ")}</p>
                  <p className="mt-0.5 text-sm text-[var(--color-text-secondary)]">{String(v)}</p>
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="Activity">
            <ul className="divide-y divide-gray-100">
              {detail.timeline.map((t, i) => (
                <TimelineEntry key={`${t.created_at}-${i}`} entry={t} />
              ))}
            </ul>

            {/* Note input */}
            <form onSubmit={submitNote} className="mt-4 border-t border-gray-100 pt-4">
              <label htmlFor="req-note" className="text-sm font-medium text-[var(--color-text-primary)]">
                Add a note
              </label>
              <textarea
                id="req-note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                rows={3}
                placeholder="Add a note or update…"
                disabled={submittingNote}
                className="mt-1.5 flex w-full rounded-input border-[1.5px] border-[var(--color-border-default)] bg-white px-3 py-2 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-disabled)] hover:border-[var(--color-border-strong)] focus-visible:border-primary focus-visible:outline-none focus-visible:[box-shadow:var(--focus-ring-navy)] disabled:opacity-50"
              />
              <div className="mt-2 flex gap-2">
                <Button type="submit" size="sm" disabled={submittingNote || !note.trim()}>
                  {submittingNote ? "Adding…" : "Add note"}
                </Button>
              </div>
            </form>
          </SectionCard>
        </Col>

        {/* Rail: status actions (operational) + details */}
        <Col span={4} className="min-w-0 space-y-4">
          {isOperational && (
            <RailSection title="Status & actions">
              <div className="space-y-2">
                {detail.status === "submitted" && (
                  <button
                    type="button"
                    disabled={actioning === "triage"}
                    onClick={() => patchAction({ action: "triage" })}
                    className="w-full rounded-[var(--radius-button)] border border-[var(--color-border)] bg-white px-3 py-2 text-left text-sm font-medium text-[var(--color-text-primary)] transition hover:bg-[var(--color-surface-2)] disabled:opacity-60"
                  >
                    {actioning === "triage" ? "Triaging…" : "→ Triage (move to In Review)"}
                  </button>
                )}

                {detail.status === "in_review" && (
                  <>
                    <button
                      type="button"
                      onClick={() => { setAssigneeId(""); setAssigneeName(""); setShowAssign(true); }}
                      disabled={!!actioning}
                      className="w-full rounded-[var(--radius-button)] border border-[var(--color-border)] bg-white px-3 py-2 text-left text-sm font-medium text-[var(--color-text-primary)] transition hover:bg-[var(--color-surface-2)] disabled:opacity-60"
                    >
                      → Assign & move to In Fulfilment
                    </button>
                    <button
                      type="button"
                      disabled={actioning === "transition-return"}
                      onClick={() => patchAction({ action: "transition", toStatus: "returned_for_information" })}
                      className="w-full rounded-[var(--radius-button)] border border-[var(--color-border)] bg-white px-3 py-2 text-left text-sm text-[var(--color-text-muted)] transition hover:bg-[var(--color-surface-2)] disabled:opacity-60"
                    >
                      Return for information
                    </button>
                    <button
                      type="button"
                      disabled={actioning === "transition-cancel"}
                      onClick={() => patchAction({ action: "transition", toStatus: "cancelled" })}
                      className="w-full rounded-[var(--radius-button)] border border-[var(--color-border)] bg-white px-3 py-2 text-left text-sm text-[var(--color-danger-text)] transition hover:bg-[var(--color-surface-2)] disabled:opacity-60"
                    >
                      Cancel request
                    </button>
                  </>
                )}

                {detail.status === "in_fulfilment" && (
                  <>
                    <button
                      type="button"
                      disabled={actioning === "transition-close"}
                      onClick={() => patchAction({ action: "transition", toStatus: "closed" })}
                      className="w-full rounded-[var(--radius-button)] bg-[var(--color-secondary)] px-3 py-2 text-left text-sm font-medium text-white transition hover:opacity-90 disabled:opacity-60"
                    >
                      {actioning === "transition-close" ? "Closing…" : "→ Close (mark complete)"}
                    </button>
                    {/* Reassign owner — available in_fulfilment for operational users */}
                    <button
                      type="button"
                      onClick={() => { setAssigneeId(detail.assignee_id ?? ""); setAssigneeName(detail.assignee_name ?? ""); setShowAssign(true); }}
                      disabled={!!actioning}
                      className="w-full rounded-[var(--radius-button)] border border-[var(--color-border)] bg-white px-3 py-2 text-left text-sm text-[var(--color-text-muted)] transition hover:bg-[var(--color-surface-2)] disabled:opacity-60"
                    >
                      {detail.assignee_name
                        ? `Reassign (currently: ${detail.assignee_name})`
                        : "Assign owner"}
                    </button>
                    <button
                      type="button"
                      disabled={actioning === "transition-return"}
                      onClick={() => patchAction({ action: "transition", toStatus: "returned_for_information" })}
                      className="w-full rounded-[var(--radius-button)] border border-[var(--color-border)] bg-white px-3 py-2 text-left text-sm text-[var(--color-text-muted)] transition hover:bg-[var(--color-surface-2)] disabled:opacity-60"
                    >
                      Return for information
                    </button>
                  </>
                )}

                {["closed", "cancelled"].includes(detail.status) && (
                  <p className="text-xs text-gray-400">This request is {detail.status.replace(/_/g, " ")}.</p>
                )}
              </div>
            </RailSection>
          )}

          {/* Assign modal inline */}
          {isOperational && showAssign && (
            <div className="rounded-[var(--radius-card)] border border-[var(--color-secondary)] bg-[var(--color-surface-2)] p-4">
              <p className="mb-2 text-sm font-medium text-[var(--color-text-primary)]">
                {detail.status === "in_fulfilment" ? "Reassign owner" : "Assign fulfiller"}
              </p>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-gray-400">Search by name or email</label>
                <AssigneePicker
                  value={assigneeId}
                  displayName={assigneeName}
                  onChange={(id, name) => { setAssigneeId(id); setAssigneeName(name); }}
                />
                {assigneeName && (
                  <p className="text-[10px] text-[var(--color-text-secondary)]">
                    Selected: <strong>{assigneeName}</strong>
                  </p>
                )}
              </div>
              <div className="mt-3 flex gap-2">
                <Button
                  size="sm"
                  disabled={!assigneeId.trim() || !!actioning}
                  onClick={() => {
                    setShowAssign(false);
                    const action = detail.status === "in_fulfilment" ? "reassign" : "assign";
                    patchAction({ action, assigneeId: assigneeId.trim(), expectedVersion: detail.version });
                  }}
                >
                  {actioning === "assign" || actioning === "reassign" ? "Assigning…" : "Confirm assign"}
                </Button>
                <button
                  type="button"
                  onClick={() => { setShowAssign(false); setAssigneeId(""); setAssigneeName(""); }}
                  className="text-sm text-gray-400 hover:underline"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          <RailSection title="Details">
            <div className="space-y-0 divide-y divide-gray-100">
              {([
                ["Priority", <Badge key="p" tone={detail.priority === "high" ? "danger" : detail.priority === "low" ? "gray" : "default"} size="sm">{detail.priority}</Badge>],
                ["Raised", shortDate(detail.created_at)],
                ["Department", detail.department_name ?? "—"],
                ["Due", shortDate(detail.target_due)],
                ["Owner", detail.assignee_name ?? "—"],
              ] as [string, React.ReactNode][]).map(([label, value]) => (
                <div key={label} className="flex items-center justify-between py-2.5">
                  <p className="text-xs text-gray-400">{label}</p>
                  <div className="text-xs font-medium text-[var(--color-text-primary)]">{value}</div>
                </div>
              ))}
            </div>
          </RailSection>
        </Col>
      </Grid>
    </div>
  );
}
