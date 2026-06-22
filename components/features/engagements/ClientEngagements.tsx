"use client";

import DashboardLayout from "@/components/foundation/layouts/DashboardLayout";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Filter, SearchX, Activity, Package } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext"; // TODO: Task 9 — wire up context;
import { mockPortfolioEngagements } from "@/data/mockPortfolioEngagements"; // TODO: Task 9 — wire up data;

const ClientEngagements = () => {
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Statuses");

  // Filter services by organization first
  const organizationServices = mockPortfolioEngagements.filter(
    (service) => service.organization === user.organization
  );

  const filteredServices = organizationServices.filter((service) => {
    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "All Statuses" || service.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const hasFilters = searchQuery !== "" || statusFilter !== "All Statuses";

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Delivery":
        return "default";
      case "Awaiting Client Input":
        return "secondary";
      case "Awaiting Payment":
        return "secondary";
      case "Delivered":
        return "outline";
      default:
        return "default";
    }
  };

  const getHealthColor = (healthLabel: string) => {
    switch (healthLabel) {
      case "On Track":
        return "bg-green-500";
      case "At Risk":
        return "bg-orange-500";
      case "Critical":
        return "bg-red-500";
      case "Pending":
        return "bg-gray-400";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Active Projects</h1>
          <p className="mt-1 text-muted-foreground">
            Track and manage your requested services and delivery progress.
          </p>
        </div>

        {/* Toolbar: Search and Filters */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by name or reference..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-md border border-input bg-transparent px-3 py-1 shadow-sm">
              <Activity className="h-4 w-4 text-muted-foreground" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="bg-transparent text-sm font-medium outline-none text-foreground"
              >
                <option value="All Statuses">All Statuses</option>
                <option value="Requested">Requested</option>
                <option value="Awaiting Payment">Awaiting Payment</option>
                <option value="In Delivery">In Delivery</option>
                <option value="Awaiting Client Input">Awaiting Client Input</option>
                <option value="Delivered">Delivered</option>
                <option value="Closed">Closed</option>
              </select>
            </div>
          </div>
        </div>

        {/* Projects List */}
        <div className="space-y-4">
          {organizationServices.length === 0 ? (
            // Empty state for organizations with no active projects (e.g., DEWA)
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border py-16 text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-muted-foreground">
                <Package size={24} />
              </div>
              <h3 className="mb-1 text-lg font-semibold text-foreground">No active projects</h3>
              <p className="text-sm text-muted-foreground max-w-md">
                You don&apos;t have any active projects at the moment. Check Service Orders for your
                current projects.
              </p>
              <Link href="/dashboard/customer/orders">
                <Button className="mt-6 gap-2">
                  View Service Orders
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
          ) : filteredServices.length === 0 ? (
            // Empty state when filters don't match
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border py-16 text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-muted-foreground">
                <SearchX size={24} />
              </div>
              <h3 className="mb-1 text-lg font-semibold text-foreground">No projects found</h3>
              <p className="text-sm text-muted-foreground">
                We couldn&apos;t find any services matching your current filters.
              </p>
              <Button
                variant="outline"
                className="mt-6"
                onClick={() => {
                  setSearchQuery("");
                  setStatusFilter("All Statuses");
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            filteredServices.map((service) => {
              return (
                <Link
                  key={service.id}
                  href={`/dashboard/engagement/${service.id}`}
                  className="block"
                >
                  <Card className="transition-all hover:border-primary/50 hover:shadow-md cursor-pointer">
                    <CardContent className="p-5">
                      <div className="flex flex-col flex-wrap gap-4 sm:flex-row sm:items-center sm:justify-between">
                        {/* Identity Module */}
                        <div className="flex items-start gap-4 flex-1">
                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <h3 className="text-base font-semibold text-foreground">
                                {service.name}
                              </h3>
                              <span className="text-xs font-mono text-muted-foreground bg-accent px-2 py-0.5 rounded-full">
                                {service.id}
                              </span>
                            </div>
                            <div className="mt-1.5 flex items-center gap-2 text-sm text-muted-foreground">
                              <span>Lead: {service.lead}</span>
                              <span className="h-1 w-1 rounded-full bg-border" />
                              <span
                                className={
                                  service.blockedItems > 0 ? "text-red-500 font-medium" : ""
                                }
                              >
                                Blocked Items: {service.blockedItems}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Status & Health Module */}
                        <div className="flex items-center gap-6 sm:justify-end">
                          <div className="flex items-center gap-3">
                            <span className="flex items-center gap-1.5 text-xs font-medium">
                              Health:
                              <div
                                className={`h-2 w-2 rounded-full ${getHealthColor(service.healthLabel)}`}
                              />
                              <span className="text-muted-foreground">{service.healthLabel}</span>
                            </span>
                            <Badge variant={getStatusColor(service.status)}>{service.status}</Badge>
                          </div>
                          <div className="hidden sm:flex h-8 w-8 items-center justify-center rounded-full bg-accent/50 text-muted-foreground">
                            <ArrowRight size={16} />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ClientEngagements;
