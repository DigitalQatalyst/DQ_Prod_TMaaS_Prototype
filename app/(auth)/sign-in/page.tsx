import type { Metadata } from "next";
import SignInPageClient from "./_client";

export const metadata: Metadata = {
  title: "Sign In | TMaaS",
  description: "Sign in to your TMaaS account.",
};

export default function SignInPage() {
  return <SignInPageClient />;
}
