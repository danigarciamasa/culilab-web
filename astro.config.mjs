// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// La web se publica en GitHub Pages: https://danigarciamasa.github.io/culilab-web/
// Si algún día compráis un dominio propio, cambiad `site` y quitad `base`.
export default defineConfig({
  site: 'https://danigarciamasa.github.io',
  base: '/culilab-web',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
