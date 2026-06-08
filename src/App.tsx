import type { ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import IndexTraditional from "./pages/IndexTraditional";
import Explore from "./pages/Explore";
import Marketplace from "./pages/Marketplace";
import ServiceDetail from "./pages/ServiceDetail";
import Contact from "./pages/Contact";
import ButlerDemo from "./pages/ButlerDemo";
import ChatButton from "./components/ChatButton";
import Overview from "./pages/dashboard/Overview";
import ActiveServices from "./pages/dashboard/ActiveServices";
import OrganisationProfile from "./pages/dashboard/OrganisationProfile";
import EngagementDetail from "./pages/dashboard/EngagementDetail";
import ServiceOrders from "./pages/dashboard/ServiceOrders";
import ServiceOrderDetail from "./pages/dashboard/ServiceOrderDetail";
import CustomerServiceOrders from "./pages/dashboard/customer/ServiceOrders";
import CustomerServiceOrderDetail from "./pages/dashboard/customer/ServiceOrderDetail";
import Inbox from "./pages/dashboard/Inbox";
import Notifications from "./pages/dashboard/Notifications";
import OrganisationAdmin from "./pages/dashboard/OrganisationAdmin";
import Calendar from "./pages/dashboard/Calendar";
import Documents from "./pages/dashboard/Documents";
import Settings from "./pages/dashboard/Settings";
import Support from "./pages/dashboard/Support";
import HelpCentre from "./pages/dashboard/HelpCentre";
import Organisations from "./pages/dashboard/Organisations";
import Users from "./pages/dashboard/Users";
import Catalogue from "./pages/dashboard/Catalogue";
import HelpContent from "./pages/dashboard/HelpContent";
import DqPortfolio from "./pages/dashboard/dq/Portfolio";
import DqFinance from "./pages/dashboard/dq/Finance";
import DqSupportOps from "./pages/dashboard/dq/SupportOps";
import DqQueue from "./pages/dashboard/dq/Queue";
import DqInvoices from "./pages/dashboard/dq/Invoices";
import DqOnboarding from "./pages/dashboard/dq/Onboarding";
import SignIn from "./pages/auth/SignIn";
import ProfileSetup from "./pages/onboarding/ProfileSetup";
import OrganisationAccess from "./pages/onboarding/OrganisationAccess";
import OrganisationSetup from "./pages/onboarding/OrganisationSetup";
import Complete from "./pages/onboarding/Complete";
import Legal from "./pages/legal/Legal";
import Terms from "./pages/legal/Terms";
import Privacy from "./pages/legal/Privacy";
import FAQ from "./pages/legal/FAQ";
import Cart from "./pages/Cart";

import { AuthProvider } from "@/contexts/AuthContext";
import { CartProvider } from "@/contexts/CartContext";
import CartDrawer from "@/components/cart/CartDrawer";
import { FeatureFlagAdmin } from "@/components/FeatureFlagAdmin";
import { featureFlags, getFirstEnabledRoute } from "@/lib/featureFlags";

const queryClient = new QueryClient();

const ConditionalChatButton = () => {
  const location = useLocation();

  if (!featureFlags.isEnabled("chatAssistant")) return null;

  const showChatButton =
    !location.pathname.startsWith("/dashboard") &&
    !location.pathname.startsWith("/onboarding");

  return showChatButton ? <ChatButton /> : null;
};

const ConditionalCartDrawer = () => {
  if (!featureFlags.isEnabled("cart")) return null;
  return <CartDrawer />;
};

const FlaggedRoute = ({
  flag,
  element,
}: {
  flag: Parameters<typeof featureFlags.isEnabled>[0];
  element: ReactNode;
}) => {
  return featureFlags.isEnabled(flag) ? (
    <>{element}</>
  ) : (
    <Navigate to={getFirstEnabledRoute()} replace />
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<FlaggedRoute flag="homepage" element={<Index />} />} />
              <Route
                path="/home"
                element={<FlaggedRoute flag="alternateLanding" element={<IndexTraditional />} />}
              />
              <Route path="/explore" element={<FlaggedRoute flag="explore" element={<Explore />} />} />
              <Route
                path="/marketplace"
                element={<FlaggedRoute flag="marketplace" element={<Marketplace />} />}
              />
              <Route path="/cart" element={<FlaggedRoute flag="cart" element={<Cart />} />} />
              <Route
                path="/service/:id"
                element={<FlaggedRoute flag="serviceDetail" element={<ServiceDetail />} />}
              />
              <Route
                path="/contact"
                element={<FlaggedRoute flag="contactUs" element={<Contact />} />}
              />
              <Route
                path="/butler-demo"
                element={<FlaggedRoute flag="butlerDemo" element={<ButlerDemo />} />}
              />

              <Route path="/sign-in" element={<FlaggedRoute flag="auth" element={<SignIn />} />} />

              <Route
                path="/onboarding/profile"
                element={<FlaggedRoute flag="onboarding" element={<ProfileSetup />} />}
              />
              <Route
                path="/onboarding/organisation-access"
                element={<FlaggedRoute flag="onboarding" element={<OrganisationAccess />} />}
              />
              <Route
                path="/onboarding/organisation-setup"
                element={<FlaggedRoute flag="onboarding" element={<OrganisationSetup />} />}
              />
              <Route
                path="/onboarding/complete"
                element={<FlaggedRoute flag="onboarding" element={<Complete />} />}
              />

              <Route
                path="/dashboard/overview"
                element={<FlaggedRoute flag="dashboard" element={<Overview />} />}
              />
              <Route
                path="/dashboard/services"
                element={<FlaggedRoute flag="dashboard" element={<ActiveServices />} />}
              />
              <Route
                path="/dashboard/engagement/:id"
                element={<FlaggedRoute flag="dashboard" element={<EngagementDetail />} />}
              />
              <Route
                path="/dashboard/orders"
                element={<FlaggedRoute flag="dashboard" element={<ServiceOrders />} />}
              />
              <Route
                path="/dashboard/orders/:id"
                element={<FlaggedRoute flag="dashboard" element={<ServiceOrderDetail />} />}
              />
              <Route
                path="/dashboard/profile"
                element={<FlaggedRoute flag="dashboard" element={<OrganisationProfile />} />}
              />
              <Route
                path="/dashboard/org-admin"
                element={<FlaggedRoute flag="dashboard" element={<OrganisationAdmin />} />}
              />
              <Route
                path="/dashboard/inbox"
                element={<FlaggedRoute flag="dashboard" element={<Inbox />} />}
              />
              <Route
                path="/dashboard/notifications"
                element={<FlaggedRoute flag="dashboard" element={<Notifications />} />}
              />
              <Route
                path="/dashboard/calendar"
                element={<FlaggedRoute flag="dashboard" element={<Calendar />} />}
              />
              <Route
                path="/dashboard/documents"
                element={<FlaggedRoute flag="dashboard" element={<Documents />} />}
              />
              <Route
                path="/dashboard/settings"
                element={<FlaggedRoute flag="dashboard" element={<Settings />} />}
              />
              <Route
                path="/dashboard/support"
                element={<FlaggedRoute flag="dashboard" element={<Support />} />}
              />
              <Route
                path="/dashboard/help"
                element={<FlaggedRoute flag="dashboard" element={<HelpCentre />} />}
              />
              <Route
                path="/dashboard/organisations"
                element={<FlaggedRoute flag="dashboard" element={<Organisations />} />}
              />
              <Route
                path="/dashboard/users"
                element={<FlaggedRoute flag="dashboard" element={<Users />} />}
              />
              <Route
                path="/dashboard/catalogue"
                element={<FlaggedRoute flag="dashboard" element={<Catalogue />} />}
              />
              <Route
                path="/dashboard/help-content"
                element={<FlaggedRoute flag="dashboard" element={<HelpContent />} />}
              />

              <Route
                path="/dashboard/dq/portfolio"
                element={<FlaggedRoute flag="dashboard" element={<DqPortfolio />} />}
              />
              <Route
                path="/dashboard/dq/finance"
                element={<FlaggedRoute flag="dashboard" element={<DqFinance />} />}
              />
              <Route
                path="/dashboard/dq/support"
                element={<FlaggedRoute flag="dashboard" element={<DqSupportOps />} />}
              />
              <Route
                path="/dashboard/dq/queue"
                element={<FlaggedRoute flag="dashboard" element={<DqQueue />} />}
              />
              <Route
                path="/dashboard/dq/invoices"
                element={<FlaggedRoute flag="dashboard" element={<DqInvoices />} />}
              />
              <Route
                path="/dashboard/dq/onboarding"
                element={<FlaggedRoute flag="dashboard" element={<DqOnboarding />} />}
              />

              <Route
                path="/dashboard/customer/orders"
                element={<FlaggedRoute flag="dashboard" element={<CustomerServiceOrders />} />}
              />
              <Route
                path="/dashboard/customer/orders/:id"
                element={<FlaggedRoute flag="dashboard" element={<CustomerServiceOrderDetail />} />}
              />

              <Route path="/legal" element={<FlaggedRoute flag="legal" element={<Legal />} />} />
              <Route path="/legal/terms" element={<FlaggedRoute flag="legal" element={<Terms />} />} />
              <Route
                path="/legal/privacy"
                element={<FlaggedRoute flag="legal" element={<Privacy />} />}
              />
              <Route path="/legal/faq" element={<FlaggedRoute flag="legal" element={<FAQ />} />} />

              <Route path="*" element={<Navigate to={getFirstEnabledRoute()} replace />} />
            </Routes>
            <ConditionalChatButton />
            <ConditionalCartDrawer />
          </BrowserRouter>
          {import.meta.env.DEV && <FeatureFlagAdmin />}
        </TooltipProvider>
      </CartProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
