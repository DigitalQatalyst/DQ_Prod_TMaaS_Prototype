"use client";

import Link from "next/link";
import { Minus, Plus, ShoppingBag, Trash2, ArrowRight } from "lucide-react";
import Navbar from "@/components/foundation/navigation/Navbar";
import Footer from "@/components/features/landing/Footer";
import { useCart } from "@/contexts/CartContext";
import { formatServicePrice } from "@/lib/serviceProductUtils";
import { Button } from "@/components/ui/button";

export default function CartPageClient() {
  const { resolvedItems, itemCount, subtotal, setQuantity, removeItem, clearCart } = useCart();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="mx-auto max-w-3xl px-6 pb-20 pt-28">
        <h1 className="text-2xl font-bold tracking-tight text-navy-950 md:text-3xl">Your cart</h1>
        <p className="mt-2 text-sm text-gray-600">
          {itemCount === 0
            ? "No services selected yet."
            : `${itemCount} ${itemCount === 1 ? "package" : "packages"} selected`}
        </p>

        {resolvedItems.length === 0 ? (
          <div className="mt-12 rounded-xl border border-navy-100 bg-white p-12 text-center shadow-sm">
            <ShoppingBag size={48} className="mx-auto text-gray-300" strokeWidth={1.25} />
            <p className="mt-4 text-sm text-gray-500">Browse the marketplace to add services.</p>
            <Button asChild className="mt-6 rounded-lg bg-navy-950 hover:bg-navy-900">
              <Link href="/marketplace">Browse marketplace</Link>
            </Button>
          </div>
        ) : (
          <div className="mt-8 space-y-8">
            <ul className="space-y-4">
              {resolvedItems.map(({ service, quantity, lineTotal }) => (
                <li
                  key={service.id}
                  className="rounded-xl border border-navy-100 bg-white p-5 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Link
                        href={`/marketplace/${service.slug}`}
                        className="text-base font-bold text-navy-950 hover:text-orange-600"
                      >
                        {service.standardName}
                      </Link>
                      <p className="mt-1 text-sm text-gray-500">
                        {service.price} each · {service.duration}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(service.id)}
                      className="rounded-md p-2 text-gray-400 hover:bg-slate-100 hover:text-red-600"
                      aria-label="Remove"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="inline-flex items-center rounded-lg border border-navy-100">
                      <button
                        type="button"
                        onClick={() => setQuantity(service.id, quantity - 1)}
                        className="flex h-9 w-9 items-center justify-center hover:bg-slate-50"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="min-w-[2.5rem] text-center text-sm font-semibold">
                        {quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => setQuantity(service.id, quantity + 1)}
                        className="flex h-9 w-9 items-center justify-center hover:bg-slate-50"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    <span className="text-base font-bold text-navy-950">
                      {formatServicePrice(lineTotal)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="rounded-xl border border-navy-100 bg-slate-50/80 p-6">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Estimated subtotal</span>
                <span className="text-xl font-bold text-navy-950">
                  {formatServicePrice(subtotal)}
                </span>
              </div>
              <p className="mt-2 text-xs text-gray-500">
                Pricing is confirmed during onboarding. You can adjust packages with your account
                team before work begins.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  className="h-11 flex-1 rounded-lg bg-navy-950 hover:bg-navy-900 gap-2"
                >
                  <Link href="/sign-in">
                    Proceed to checkout
                    <ArrowRight size={16} />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-11 flex-1 rounded-lg border-navy-200"
                >
                  <Link href="/marketplace">Continue shopping</Link>
                </Button>
              </div>
              <button
                type="button"
                onClick={clearCart}
                className="mt-4 w-full text-center text-xs text-gray-500 hover:text-red-600"
              >
                Clear cart
              </button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
