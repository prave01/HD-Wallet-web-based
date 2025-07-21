import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import serverActions from "vite-plugin-server-actions";
import { tanstackRouter } from "@tanstack/router-plugin/vite";

export default defineConfig({
	server: {
		host: "0.0.0.0",
		port: 5173,
	},

	plugins: [
		tanstackRouter({
			target: "react",
			autoCodeSplitting: true,
		}),
		react(),
		tailwindcss(),
		serverActions({
			include: path.resolve("./src/Actions/**/*"),
		}),
		nodePolyfills(),
	],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
});
