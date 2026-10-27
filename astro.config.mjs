// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// La web se publica en GitHub Pages: https://danigarciamasa.github.io/culilab-web/
// Si algún día compráis un dominio propio, cambiad `site` y quitad `base`.
export default defineConfig({
  site: 'https://danigarciamasa.github.io',
  base: '/culilab-web',
  trailingSlash: 'always',
  integrations: [sitemap()],
  // CSS dentro del HTML: sin petición que bloquee el renderizado (PageSpeed, Misión 3).
  build: { inlineStylesheets: 'always' },
  // Fuentes servidas desde la propia web (solo latín) con fuentes de reserva ajustadas a sus medidas:
  // el texto se pinta al instante con Arial ajustada y no salta al cargar Poppins/Nunito (CLS),
  // sin precargas que compitan con el HTML y retrasen el primer pintado (LCP). Misión 3, PageSpeed.
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Poppins',
      cssVariable: '--font-poppins',
      fallbacks: ['Arial', 'sans-serif'],
      options: {
        variants: [
          { src: ['@fontsource/poppins/files/poppins-latin-600-normal.woff2'], weight: 600, style: 'normal' },
          { src: ['@fontsource/poppins/files/poppins-latin-700-normal.woff2'], weight: 700, style: 'normal' },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'Nunito',
      cssVariable: '--font-nunito',
      fallbacks: ['Arial', 'sans-serif'],
      options: {
        variants: [
          { src: ['@fontsource/nunito/files/nunito-latin-400-normal.woff2'], weight: 400, style: 'normal' },
          { src: ['@fontsource/nunito/files/nunito-latin-700-normal.woff2'], weight: 700, style: 'normal' },
        ],
      },
    },
  ],
});
