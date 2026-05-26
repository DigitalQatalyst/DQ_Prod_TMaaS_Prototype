import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";

const CartNavButton = ({ className }: { className?: string }) => {
  const { openCart, itemCount } = useCart();

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      onClick={openCart}
      className={className}
      aria-label={`Open cart, ${itemCount} items`}
    >
      <span className="relative">
        <ShoppingCart size={20} className="text-navy-950" />
        {itemCount > 0 && (
          <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-orange-500 px-1 text-[10px] font-bold text-white">
            {itemCount > 9 ? "9+" : itemCount}
          </span>
        )}
      </span>
    </Button>
  );
};

export default CartNavButton;
