// @ts-check
import { defineConfig, fontProviders } from "astro/config";
export default defineConfig({
  site: "https://mannireis.com",
  prefetch: {
    defaultStrategy: "viewport",
  },
  experimental: {
    fonts: true,
  },
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Lexend",
      cssVariable: "--font-lexend",
    },
  ],
});
