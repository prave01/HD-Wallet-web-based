import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import serverActions from "vite-plugin-server-actions";

export default defineConfig({
	server: {
		host: "0.0.0.0",
		port: 5173,
	},
	plugins: [
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
