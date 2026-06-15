import type { Metadata } from "next";
import CartPageClient from "./_client";

export const metadata: Metadata = {
  title: "Cart | TMaaS",
  description: "Review and manage your selected TMaaS services.",
};

export default function CartPage() {
  return <CartPageClient />;
}
