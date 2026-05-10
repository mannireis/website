// @ts-check
import { defineConfig } from "astro/config";
export default defineConfig({
  site: "https://mannireis.com",
  prefetch: {
    defaultStrategy: "viewport",
  },
});
