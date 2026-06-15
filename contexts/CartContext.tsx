"use client";

// TODO: Task 9 — replace stubs with full CartContext implementation
import { createContext, useContext, useState, ReactNode } from "react";

export type CartLine = {
  serviceId: number;
  quantity: number;
};

export type ResolvedCartLine = {
  service: { id: number; standardName: string; price: string; duration: string };
  quantity: number;
  lineTotal: number;
};

interface CartContextValue {
  items: CartLine[];
  resolvedItems: ResolvedCartLine[];
  itemCount: number;
  subtotal: number;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  openCart: () => void;
  closeCart: () => void;
  addItem: (serviceId: number, quantity?: number) => void;
  removeItem: (serviceId: number) => void;
  setQuantity: (serviceId: number, quantity: number) => void;
  clearCart: () => void;
  hasItem: (serviceId: number) => boolean;
}

const CartContext = createContext<CartContextValue>({
  items: [],
  resolvedItems: [],
  itemCount: 0,
  subtotal: 0,
  isOpen: false,
  setIsOpen: () => {},
  openCart: () => {},
  closeCart: () => {},
  addItem: () => {},
  removeItem: () => {},
  setQuantity: () => {},
  clearCart: () => {},
  hasItem: () => false,
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartLine[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const itemCount = items.reduce((n, i) => n + i.quantity, 0);

  const addItem = (serviceId: number, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.serviceId === serviceId);
      if (existing) {
        return prev.map((i) =>
          i.serviceId === serviceId ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prev, { serviceId, quantity }];
    });
  };

  const removeItem = (serviceId: number) =>
    setItems((prev) => prev.filter((i) => i.serviceId !== serviceId));

  const setQuantity = (serviceId: number, quantity: number) => {
    if (quantity <= 0) return removeItem(serviceId);
    setItems((prev) =>
      prev.map((i) => (i.serviceId === serviceId ? { ...i, quantity } : i))
    );
  };

  const clearCart = () => setItems([]);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  const hasItem = (serviceId: number) => items.some((i) => i.serviceId === serviceId);

  return (
    <CartContext.Provider
      value={{
        items,
        resolvedItems: [],
        itemCount,
        subtotal: 0,
        isOpen,
        setIsOpen,
        openCart,
        closeCart,
        addItem,
        removeItem,
        setQuantity,
        clearCart,
        hasItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
