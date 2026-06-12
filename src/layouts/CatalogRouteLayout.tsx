import { Outlet } from "react-router-dom";
import { CatalogProvider } from "@/contexts/CatalogContext";

export default function CatalogRouteLayout() {
  return (
    <CatalogProvider>
      <Outlet />
    </CatalogProvider>
  );
}
