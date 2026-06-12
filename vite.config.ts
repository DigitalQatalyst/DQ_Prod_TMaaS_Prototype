import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { contactApiDevPlugin } from "./scripts/vite-contact-api-plugin";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;

          if (id.includes("framer-motion")) return "vendor-motion";
          if (id.includes("@supabase")) return "vendor-supabase";
          if (
            id.includes("react-dom") ||
            id.includes("react-router") ||
            id.includes("/react/")
          ) {
            return "vendor-react";
          }
          if (id.includes("@tanstack/react-query")) return "vendor-query";
        },
      },
    },
  },
  plugins: [
    react(),
    mode === "development" && contactApiDevPlugin(env),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
};
});
