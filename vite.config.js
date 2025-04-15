import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    '@tailwindcss/line-clamp',
  ],
  server: {
    port: 3000,
    strictPort: false,
    open: true,
  },
});