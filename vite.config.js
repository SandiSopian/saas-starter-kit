import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { createHtmlPlugin } from "vite-plugin-html";
import fs from "fs";

export default defineConfig({
  plugins: [
    tailwindcss(),
    createHtmlPlugin({
      inject: {
        data: {
          navbar: fs.readFileSync("./src/components/navbar.html", "utf-8"),
          footer: fs.readFileSync("./src/components/footer.html", "utf-8"),
        },
      },
    }),
  ],
});
