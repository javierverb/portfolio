import handlebars from "vite-plugin-handlebars";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  root: path.resolve(__dirname, "src"),
  plugins: [
    tailwindcss(),
    handlebars({
      partialDirectory: path.resolve(__dirname, "src/partials"),
    }),
  ],
  build: {
    outDir: "../docs",
    emptyOutDir: true,
    cssCodeSplit: true,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  server: {
    port: 5000,
  },
};
