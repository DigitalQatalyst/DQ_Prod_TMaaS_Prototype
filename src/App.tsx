import { Suspense, type ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import {
  Index,
  IndexTraditional,
  IndexProductLanding,
  Explore,
  Marketplace,
  ServiceDetail,
  Contact,
  ButlerDemo,
  ChatButton,
  Overview,
  ActiveServices,
  OrganisationProfile,
  EngagementDetail,
  ServiceOrders,
  ServiceOrderDetail,
  CustomerServiceOrders,
  CustomerServiceOrderDetail,
  Inbox,
  Notifications,
  OrganisationAdmin,
  Calendar,
  Documents,
  Settings,
  Support,
  HelpCentre,
  Organisations,
  Users,
  Catalogue,
  HelpContent,
  DqPortfolio,
  DqFinance,
  DqSupportOps,
  DqQueue,
  DqInvoices,
  DqOnboarding,
  SignIn,
  ProfileSetup,
  OrganisationAccess,
  OrganisationSetup,
  Complete,
  Legal,
  Terms,
  Privacy,
  FAQ,
  Cart,
  CatalogRouteLayout,
  CartDrawer,
  NotFound,
} from "@/routes/lazyPages";
import CatalogPrefetch from "@/components/CatalogPrefetch";
import { AuthProvider } from "@/contexts/AuthContext";
import { CartProvider } from "@/contexts/CartContext";
import { FeatureFlagAdmin } from "@/components/FeatureFlagAdmin";
import { featureFlags, getFirstEnabledRoute } from "@/lib/featureFlags";

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="flex min-h-screen items-center justify-center bg-background">
    <p className="text-gray-500">Loading…</p>
  </div>
);

const ConditionalChatButton = () => {
  const location = useLocation();

  if (!featureFlags.isEnabled("chatAssistant")) return null;

  const showChatButton =
    !location.pathname.startsWith("/dashboard") &&
    !location.pathname.startsWith("/onboarding");

  return showChatButton ? (
    <Suspense fallback={null}>
      <ChatButton />
    </Suspense>
  ) : null;
};

const ConditionalCartDrawer = () => {
  if (!featureFlags.isEnabled("cart")) return null;
  return (
    <Suspense fallback={null}>
      <CartDrawer />
    </Suspense>
  );
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
    <CatalogPrefetch />
    <AuthProvider>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route
                  path="/"
                  element={<FlaggedRoute flag="homepage" element={<IndexProductLanding />} />}
                />
                <Route path="/landing-v2" element={<Navigate to="/" replace />} />
                <Route
                  path="/landing-v1"
                  element={<FlaggedRoute flag="landingV1" element={<IndexTraditional />} />}
                />
                <Route
                  path="/home"
                  element={<FlaggedRoute flag="alternateLanding" element={<Index />} />}
                />
                <Route path="/explore" element={<FlaggedRoute flag="explore" element={<Explore />} />} />
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

                <Route element={<CatalogRouteLayout />}>
                  <Route
                    path="/marketplace"
                    element={<FlaggedRoute flag="marketplace" element={<Marketplace />} />}
                  />
                  <Route
                    path="/service/:id"
                    element={<FlaggedRoute flag="serviceDetail" element={<ServiceDetail />} />}
                  />
                  <Route path="/cart" element={<FlaggedRoute flag="cart" element={<Cart />} />} />
                </Route>

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

                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
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
