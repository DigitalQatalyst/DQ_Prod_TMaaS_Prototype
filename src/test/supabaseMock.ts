import { vi } from "vitest";

export type QueryState = {
  table: string;
  filters: Record<string, unknown>;
  limit?: number;
};

export type SupabaseQueryResult = { data: unknown; error: unknown };

export type TableHandler =
  | SupabaseQueryResult
  | ((state: QueryState) => SupabaseQueryResult | Promise<SupabaseQueryResult>);

function resolveHandler(
  handler: TableHandler | undefined,
  state: QueryState
): SupabaseQueryResult | Promise<SupabaseQueryResult> {
  if (!handler) return { data: [], error: null };
  return typeof handler === "function" ? handler(state) : handler;
}

export function createSupabaseMock(handlers: Record<string, TableHandler>) {
  function createBuilder(table: string) {
    const state: QueryState = { table, filters: {} };

    const builder = {
      select: vi.fn(() => builder),
      order: vi.fn(() => builder),
      eq: vi.fn((column: string, value: unknown) => {
        state.filters[column] = value;
        return builder;
      }),
      is: vi.fn((column: string, value: unknown) => {
        state.filters[column] = value;
        return builder;
      }),
      in: vi.fn((column: string, values: unknown[]) => {
        state.filters[`${column}__in`] = values;
        return builder;
      }),
      limit: vi.fn((value: number) => {
        state.limit = value;
        return builder;
      }),
      maybeSingle: vi.fn(async () => resolveHandler(handlers[table], state)),
      then: (
        onFulfilled?: (value: SupabaseQueryResult) => unknown,
        onRejected?: (reason: unknown) => unknown
      ) => Promise.resolve(resolveHandler(handlers[table], state)).then(onFulfilled, onRejected),
    };

    return builder;
  }

  return {
    from: vi.fn((table: string) => createBuilder(table)),
  };
}

export const SAMPLE_LISTING_ROW = {
  listing_id: 11,
  variant_id: 103,
  display_title: "Enterprise Data Platform (High-Impact) - Assess",
  product_title: "Enterprise Data Platform (High-Impact)",
  variant_name: "Assess",
  collection_id: "ai",
  service_type_id: "advisory",
  short_description: "Assess your data platform readiness.",
  price_display: "Free",
  duration_display: "1 Week",
  popularity_score: 100,
  delivery_complexity: "medium",
  badge: "Advisory",
  audience: "Enterprise & Mid-Market",
  industry_relevance: "Cross-Industry",
  department: "IT & Transformation",
  business_impact: "Significant operational improvements.",
  implementation_model: "TMaaS Managed Delivery",
  positioning: "(High-Impact) Positioning Strategy",
  is_high_impact: true,
  product_id: 4,
};
