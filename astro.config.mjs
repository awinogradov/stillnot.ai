// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://stillnot.ai',
  vite: {
    plugins: [tailwindcss()],
    // Use Lightning CSS to transform and minify CSS — the same engine the
    // original site used via postcss-lightningcss. Native to Vite, no extra
    // PostCSS pass. https://docs.astro.build/en/guides/styling/#lightningcss
    css: {
      transformer: 'lightningcss',
    },
    build: {
      cssMinify: 'lightningcss',
    },
  },
});
