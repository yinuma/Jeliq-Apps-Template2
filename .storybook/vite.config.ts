import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

const rootDir = path.resolve(import.meta.dirname, "..");

export default defineConfig({
  plugins: [tailwindcss()],
  resolve: {
    alias: {
      "@": rootDir,
      log4js: path.resolve(rootDir, "app/lib/log4js-stub.ts"),
      "react-router": path.resolve(rootDir, "node_modules/react-router"),
    },
  },
  define: {
    "process.env": JSON.stringify({
      VITE_API_ENDPOINT: process.env.VITE_API_ENDPOINT ?? "http://localhost:6001",
    }),
  },
});
