import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    target: "esnext",
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: "react-vendor",
              test: /node_modules[\\/]react/,
              priority: 20,
            },
            {
              name: "ui-vendor",
              test: /node_modules[\\/]antd/,
              priority: 15,
            },
            {
              name: "vendor",
              test: /node_modules/,
              priority: 10,
            },
            {
              name: "common",
              minShareCount: 2,
              minSize: 10000,
              priority: 5,
            },
            {
              name: "large-libs",
              test: /node_modules/,
              minSize: 100000, // 100KB
              maxSize: 250000, // 250KB
              priority: 10,
            },
          ],
        },
      },
    },
  },
});
