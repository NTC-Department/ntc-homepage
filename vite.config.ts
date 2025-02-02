import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/common/components"),
      "@consts": path.resolve(__dirname, "./src/common/consts"),
      "@hooks": path.resolve(__dirname, "./src/common/hooks"),
      "@types": path.resolve(__dirname, "./src/common/types/index.ts"),
      "@utils": path.resolve(__dirname, "./src/common/utils"),
      "@contexts": path.resolve(__dirname, "./src/contexts"),
      "@pages": path.resolve(__dirname, "./src/pages"),
    },
  },
});
