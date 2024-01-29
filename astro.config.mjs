import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  base: "/my-resume",
  site: "https://kaibyao.github.io",
  integrations: [react(), mdx()],
});
