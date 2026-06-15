"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Building2, Key, Plus, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function OnboardingAccessPage() {
  const [selectedOption, setSelectedOption] = useState<"join" | "create" | null>(null);
  const [inviteCode, setInviteCode] = useState("");
  const router = useRouter();

  const handleJoinOrganisation = (e: React.FormEvent) => {
    e.preventDefault();
    if (inviteCode.toUpperCase() === "STC2024") {
      setTimeout(() => router.push("/dashboard/overview"), 1000);
    } else {
      alert("Invalid invite code. Try: STC2024");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-accent/30 to-background px-6">
      <div className="w-full max-w-2xl">
        <div className="mb-8">
          <div className="flex items-center justify-center gap-2">
            <div className="h-2 w-2 rounded-full bg-primary"></div>
            <div className="h-1 w-12 bg-primary"></div>
            <div className="h-2 w-2 rounded-full bg-primary"></div>
            <div className="h-1 w-12 bg-border"></div>
            <div className="h-2 w-2 rounded-full bg-border"></div>
          </div>
          <p className="mt-4 text-center text-sm text-muted-foreground">Step 2 of 3</p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold text-foreground">Organisation Access</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Join an existing organisation or create a new one
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div
              onClick={() => setSelectedOption("join")}
              className={`cursor-pointer rounded-xl border-2 p-6 transition-all ${
                selectedOption === "join"
                  ? "border-primary bg-primary/5"
                  : "border-border bg-accent/30 hover:border-primary/50"
              }`}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
                <Key size={24} className="text-blue-600" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                Join Existing Organisation
              </h3>
              <p className="text-sm text-muted-foreground">
                Use an invite code to join your team&apos;s organisation
              </p>
            </div>

            <div
              onClick={() => setSelectedOption("create")}
              className={`cursor-pointer rounded-xl border-2 p-6 transition-all ${
                selectedOption === "create"
                  ? "border-primary bg-primary/5"
                  : "border-border bg-accent/30 hover:border-primary/50"
              }`}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10">
                <Plus size={24} className="text-purple-600" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                Create New Organisation
              </h3>
              <p className="text-sm text-muted-foreground">
                Set up a new organisation and become the admin
              </p>
            </div>
          </div>

          {selectedOption === "join" && (
            <form
              onSubmit={handleJoinOrganisation}
              className="mt-6 space-y-4 border-t border-border pt-6"
            >
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Organisation Invite Code <span className="text-destructive">*</span>
                </label>
                <div className="relative">
                  <Key
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                  />
                  <Input
                    type="text"
                    placeholder="Enter invite code (e.g., STC2024)"
                    value={inviteCode}
                    onChange={(e) => setInviteCode(e.target.value)}
                    className="pl-10 font-mono uppercase"
                    required
                  />
                </div>
              </div>
              <Button
                type="submit"
                className="w-full gap-2 bg-gradient-brand shadow-brand"
                size="lg"
              >
                Join Organisation <ArrowRight size={18} />
              </Button>
            </form>
          )}

          {selectedOption === "create" && (
            <div className="mt-6 border-t border-border pt-6">
              <Button
                onClick={() => router.push("/onboarding/organisation")}
                className="w-full gap-2 bg-gradient-brand shadow-brand"
                size="lg"
              >
                Create Organisation <ArrowRight size={18} />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
