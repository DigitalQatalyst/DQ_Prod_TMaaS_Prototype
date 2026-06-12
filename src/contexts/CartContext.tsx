import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { parseServicePrice } from "@/lib/serviceProductUtils";
import { useCatalogData } from "@/contexts/CatalogContext";
import { fetchServiceById, shouldUseSupabaseCatalog } from "@/services/catalogService";
import type { ServiceProduct } from "@/types/serviceProduct";

const STORAGE_KEY = "tmaas-cart-v1";

export type CartLine = {
  serviceId: number;
  quantity: number;
};

export type ResolvedCartLine = {
  service: ServiceProduct;
  quantity: number;
  lineTotal: number;
};

type CartContextValue = {
  items: CartLine[];
  resolvedItems: ResolvedCartLine[];
  itemCount: number;
  subtotal: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  setIsOpen: (open: boolean) => void;
  addItem: (serviceId: number) => void;
  removeItem: (serviceId: number) => void;
  setQuantity: (serviceId: number, quantity: number) => void;
  clearCart: () => void;
  hasItem: (serviceId: number) => boolean;
  getQuantity: (serviceId: number) => number;
};

const CartContext = createContext<CartContextValue | null>(null);

function readStoredCart(): CartLine[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as CartLine[];
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (line) =>
        typeof line.serviceId === "number" &&
        typeof line.quantity === "number" &&
        line.quantity > 0
    );
  } catch {
    return [];
  }
}

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const catalog = useCatalogData();
  const [items, setItems] = useState<CartLine[]>(() => readStoredCart());
  const [isOpen, setIsOpen] = useState(false);
  const [resolvedCache, setResolvedCache] = useState<Map<number, ServiceProduct>>(
    () => new Map()
  );

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const resolveService = useCallback(
    (serviceId: number): ServiceProduct | undefined => {
      const cached = resolvedCache.get(serviceId);
      if (cached) return cached;
      return catalog.find((s) => s.id === serviceId);
    },
    [catalog, resolvedCache]
  );

  useEffect(() => {
    if (!shouldUseSupabaseCatalog()) return;

    const missingIds = items
      .map((line) => line.serviceId)
      .filter((id) => !catalog.find((s) => s.id === id) && !resolvedCache.has(id));

    if (missingIds.length === 0) return;

    void Promise.all(missingIds.map((id) => fetchServiceById(id))).then((results) => {
      setResolvedCache((prev) => {
        const next = new Map(prev);
        results.forEach((service) => {
          if (service) next.set(service.id, service);
        });
        return next;
      });
    });
  }, [items, catalog, resolvedCache]);

  const addItem = useCallback(
    (serviceId: number) => {
      if (!resolveService(serviceId)) return;
      setItems((prev) => {
        const existing = prev.find((l) => l.serviceId === serviceId);
        if (existing) {
          return prev.map((l) =>
            l.serviceId === serviceId
              ? { ...l, quantity: l.quantity + 1 }
              : l
          );
        }
        return [...prev, { serviceId, quantity: 1 }];
      });
    },
    [resolveService]
  );

  const removeItem = useCallback((serviceId: number) => {
    setItems((prev) => prev.filter((l) => l.serviceId !== serviceId));
  }, []);

  const setQuantity = useCallback((serviceId: number, quantity: number) => {
    if (quantity < 1) {
      setItems((prev) => prev.filter((l) => l.serviceId !== serviceId));
      return;
    }
    setItems((prev) =>
      prev.map((l) =>
        l.serviceId === serviceId ? { ...l, quantity } : l
      )
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const hasItem = useCallback(
    (serviceId: number) => items.some((l) => l.serviceId === serviceId),
    [items]
  );

  const getQuantity = useCallback(
    (serviceId: number) =>
      items.find((l) => l.serviceId === serviceId)?.quantity ?? 0,
    [items]
  );

  const resolvedItems = useMemo(() => {
    return items
      .map((line) => {
        const service = resolveService(line.serviceId);
        if (!service) return null;
        const unit = parseServicePrice(service.price);
        return {
          service,
          quantity: line.quantity,
          lineTotal: unit * line.quantity,
        };
      })
      .filter((line): line is ResolvedCartLine => line !== null);
  }, [items, resolveService]);

  const itemCount = useMemo(
    () => items.reduce((sum, l) => sum + l.quantity, 0),
    [items]
  );

  const subtotal = useMemo(
    () => resolvedItems.reduce((sum, l) => sum + l.lineTotal, 0),
    [resolvedItems]
  );

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      resolvedItems,
      itemCount,
      subtotal,
      isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      setIsOpen,
      addItem,
      removeItem,
      setQuantity,
      clearCart,
      hasItem,
      getQuantity,
    }),
    [
      items,
      resolvedItems,
      itemCount,
      subtotal,
      isOpen,
      addItem,
      removeItem,
      setQuantity,
      clearCart,
      hasItem,
      getQuantity,
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within CartProvider");
  }
  return ctx;
};
