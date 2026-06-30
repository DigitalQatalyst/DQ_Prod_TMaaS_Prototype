import { redirect } from "next/navigation";

export default function DqRootPage() {
  redirect("/dashboard/dq/overview");
}

