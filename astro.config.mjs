// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  // Served as a GitHub Pages project site at /stillnot.ai/. When moving to the
  // apex domain later, set `site: 'https://stillnot.ai'`, drop `base`, and
  // re-add public/CNAME — all internal URLs go through import.meta.env.BASE_URL
  // so they update automatically.
  site: 'https://awinogradov.github.io',
  base: '/stillnot.ai',
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
