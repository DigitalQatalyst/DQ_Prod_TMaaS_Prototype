import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Send, Search, MessageSquare } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";

type Thread = {
  id: string;
  title: string;
  participants: string[];
  unread: number;
  lastMessageAt: string;
  messages: Array<{ id: string; from: string; body: string; at: string }>;
};

const MOCK_THREADS: Thread[] = [
  {
    id: "th-001",
    title: "ENG-2024-001 · IT.GPRC",
    participants: ["Rayyan Basha", "Mohammed Al-Rashid"],
    unread: 2,
    lastMessageAt: "Today · 10:12",
    messages: [
      { id: "m1", from: "Rayyan Basha", body: "Sharing the draft architecture pack for review.", at: "09:40" },
      { id: "m2", from: "Mohammed Al-Rashid", body: "Thanks, can we align on the risk items before Thursday?", at: "10:12" },
    ],
  },
  {
    id: "th-002",
    title: "Invoice · INV-ORD-2219",
    participants: ["Finance Ops", "Client Billing"],
    unread: 0,
    lastMessageAt: "Yesterday · 16:02",
    messages: [
      { id: "m1", from: "Finance Ops", body: "Invoice issued. Please confirm the billing email.", at: "15:20" },
      { id: "m2", from: "Client Billing", body: "Confirmed. Payment scheduled for next week.", at: "16:02" },
    ],
  },
  {
    id: "th-003",
    title: "Support · Onboarding access",
    participants: ["Support Ops", "Client Admin"],
    unread: 1,
    lastMessageAt: "Mon · 11:31",
    messages: [{ id: "m1", from: "Client Admin", body: "New member can’t see Engagement workspace.", at: "11:31" }],
  },
];

export default function Inbox() {
  const { user } = useAuth();
  const [query, setQuery] = useState("");
  const [activeId, setActiveId] = useState(MOCK_THREADS[0].id);
  const [draft, setDraft] = useState("");

  const threads = useMemo(() => {
    if (!query.trim()) return MOCK_THREADS;
    const q = query.toLowerCase();
    return MOCK_THREADS.filter(
      (t) =>
        t.title.toLowerCase().includes(q) ||
        t.participants.some((p) => p.toLowerCase().includes(q))
    );
  }, [query]);

  const active = threads.find((t) => t.id === activeId) ?? threads[0];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Inbox</h1>
          <p className="mt-1 text-muted-foreground">
            Mock chat & communications for the prototype.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[360px_1fr]">
          <div className="rounded-3xl border border-border bg-card p-4 shadow-card">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search threads..."
                className="pl-9"
              />
            </div>

            <div className="mt-4 space-y-2">
              {threads.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActiveId(t.id)}
                  className={cn(
                    "w-full rounded-2xl border border-border bg-background/50 p-3 text-left transition hover:bg-accent/40",
                    t.id === active?.id && "border-primary/30 bg-primary/5"
                  )}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-sm font-semibold text-foreground">{t.title}</div>
                      <div className="mt-1 text-xs text-muted-foreground">
                        {t.participants.join(" · ")}
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className="text-[11px] text-muted-foreground">{t.lastMessageAt}</div>
                      {t.unread > 0 ? (
                        <Badge variant="secondary" className="h-5 px-2 text-xs">
                          {t.unread}
                        </Badge>
                      ) : null}
                    </div>
                  </div>
                </button>
              ))}

              {threads.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-border p-6 text-center text-sm text-muted-foreground">
                  No matching threads.
                </div>
              ) : null}
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card shadow-card">
            <div className="flex items-center justify-between border-b border-border p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent">
                  <MessageSquare size={18} className="text-muted-foreground" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{active.title}</div>
                  <div className="text-xs text-muted-foreground">
                    {active.participants.join(" · ")}
                  </div>
                </div>
              </div>
              <Badge variant="outline" className="text-xs">
                Prototype
              </Badge>
            </div>

            <div className="h-[420px] overflow-y-auto p-4 space-y-3">
              {active.messages.map((m) => {
                const mine = m.from === user.name;
                return (
                  <motion.div
                    key={m.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={cn("flex", mine ? "justify-end" : "justify-start")}
                  >
                    <div
                      className={cn(
                        "max-w-[80%] rounded-2xl border px-4 py-3 text-sm leading-relaxed",
                        mine
                          ? "border-primary/20 bg-primary/10 text-foreground"
                          : "border-border bg-background/50 text-foreground"
                      )}
                    >
                      <div className="mb-1 flex items-center gap-2 text-[11px] text-muted-foreground">
                        {!mine ? (
                          <Avatar className="h-5 w-5">
                            <AvatarFallback className="text-[10px]">
                              {m.from
                                .split(" ")
                                .slice(0, 2)
                                .map((p) => p[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                        ) : null}
                        <span className="font-medium">{m.from}</span>
                        <span>·</span>
                        <span>{m.at}</span>
                      </div>
                      {m.body}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="border-t border-border p-4">
              <div className="flex gap-2">
                <Input
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  placeholder="Write a message…"
                />
                <Button
                  onClick={() => setDraft("")}
                  disabled={!draft.trim()}
                  className="rounded-2xl"
                >
                  <Send size={16} className="mr-2" />
                  Send
                </Button>
              </div>
              <div className="mt-2 text-xs text-muted-foreground">
                Messages are mock-only and are not persisted.
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

