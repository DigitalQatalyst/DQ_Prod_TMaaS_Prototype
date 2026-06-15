"use client";

import Link from "next/link";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "@/contexts/CartContext"; // TODO: Task 9 — wire up context;
import { formatServicePrice } from "@/lib/serviceProductUtils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const CartDrawer = () => {
  const {
    isOpen,
    setIsOpen,
    resolvedItems,
    itemCount,
    subtotal,
    setQuantity,
    removeItem,
    clearCart,
  } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="flex w-full flex-col sm:max-w-md">
        <SheetHeader className="text-left">
          <SheetTitle className="flex items-center gap-2 text-navy-950">
            <ShoppingBag size={20} />
            Your cart
            {itemCount > 0 && (
              <span className="rounded-full bg-orange-500 px-2 py-0.5 text-xs font-bold text-white">
                {itemCount}
              </span>
            )}
          </SheetTitle>
          <SheetDescription>
            Review selected transformation packages before checkout.
          </SheetDescription>
        </SheetHeader>

        {resolvedItems.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 py-12 text-center">
            <ShoppingBag size={40} className="text-gray-300" strokeWidth={1.25} />
            <p className="text-sm text-gray-500">Your cart is empty.</p>
            <Button asChild variant="outline" className="rounded-lg">
              <Link href="/marketplace" onClick={() => setIsOpen(false)}>
                Browse marketplace
              </Link>
            </Button>
          </div>
        ) : (
          <>
            <ul className="flex-1 space-y-4 overflow-y-auto py-4 pr-1">
              {resolvedItems.map(({ service, quantity, lineTotal }) => (
                <li
                  key={service.id}
                  className="rounded-xl border border-navy-100 bg-white p-4 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <Link
                        href={`/service/${service.id}`}
                        onClick={() => setIsOpen(false)}
                        className="text-sm font-bold text-navy-950 hover:text-orange-600 line-clamp-2"
                      >
                        {service.standardName}
                      </Link>
                      <p className="mt-1 text-xs text-gray-500">
                        {service.price} · {service.duration}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(service.id)}
                      className="shrink-0 rounded-md p-1 text-gray-400 transition hover:bg-slate-100 hover:text-red-600"
                      aria-label={`Remove ${service.standardName}`}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <div className="inline-flex items-center rounded-lg border border-navy-100">
                      <button
                        type="button"
                        onClick={() => setQuantity(service.id, quantity - 1)}
                        className="flex h-8 w-8 items-center justify-center text-navy-950 hover:bg-slate-50"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="min-w-[2rem] text-center text-sm font-semibold tabular-nums">
                        {quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => setQuantity(service.id, quantity + 1)}
                        className="flex h-8 w-8 items-center justify-center text-navy-950 hover:bg-slate-50"
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <span className="text-sm font-bold text-navy-950">
                      {formatServicePrice(lineTotal)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t border-navy-100 pt-4 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Estimated subtotal</span>
                <span className="text-lg font-bold text-navy-950">
                  {formatServicePrice(subtotal)}
                </span>
              </div>
              <p className="text-[11px] text-gray-400">
                Final pricing confirmed at onboarding. Services are fixed-scope packages.
              </p>
              <Button asChild className="w-full h-11 rounded-lg bg-navy-950 hover:bg-navy-900">
                <Link href="/cart" onClick={() => setIsOpen(false)}>
                  View cart &amp; checkout
                </Link>
              </Button>
              <Button
                type="button"
                variant="ghost"
                className="w-full text-xs text-gray-500"
                onClick={clearCart}
              >
                Clear cart
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
