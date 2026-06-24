import ProductChromeState from "@/components/foundation/ProductChromeState";

export default function GlobalLoading() {
  return (
    <ProductChromeState className="min-h-screen">
      <div
        className="h-8 w-8 animate-spin rounded-full border-4 border-dq-orange border-t-transparent"
        role="status"
        aria-label="Loading"
      />
    </ProductChromeState>
  );
}
