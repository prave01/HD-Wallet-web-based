import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import serverActions from "vite-plugin-server-actions";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    serverActions({
      include: path.resolve(__dirname, "./src/Actions/**"),
    }),
    nodePolyfills(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

