// eslint-disable-next-line @typescript-eslint/no-explicit-any
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? process.env.VITE_SUPABASE_URL;
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? process.env.VITE_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = (): boolean => Boolean(supabaseUrl && supabaseAnonKey);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let client: SupabaseClient<any> | null = null;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getSupabaseClient = (): SupabaseClient<any> | null => {
  if (!isSupabaseConfigured()) return null;
  if (!client) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    client = createClient<any>(supabaseUrl!, supabaseAnonKey!);
  }
  return client;
};
