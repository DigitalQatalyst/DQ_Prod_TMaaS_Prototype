import Link from "next/link";
import ProductChromeState from "@/components/foundation/ProductChromeState";

export default function NotFound() {
  return (
    <ProductChromeState className="min-h-screen">
      <h1 className="text-4xl font-semibold text-dq-navy">404</h1>
      <p className="text-gray-600">Page not found.</p>
      <Link href="/" className="text-sm font-medium text-dq-orange underline-offset-4 hover:underline">
        Go home
      </Link>
    </ProductChromeState>
  );
}
