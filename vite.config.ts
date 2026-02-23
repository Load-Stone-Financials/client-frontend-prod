import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import path from "path"

export default defineConfig({
  plugins: [tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      // Avoid CORS in dev: browser calls same origin (localhost:5173/api/v1), Vite forwards to API
      "/api/v1": {
        target: "https://vault.loadstonefinancials.com",
        changeOrigin: true,
      },
    },
  },
})