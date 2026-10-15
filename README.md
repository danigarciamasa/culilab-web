# CuliLab · web

Web de CuliLab (proyecto de Marketing Digital, Business Analytics, UNIE 2026/2027).

**Web publicada:** https://danigarciamasa.github.io/culilab-web/

Hecha con [Astro](https://astro.build) y publicada gratis en GitHub Pages. Cada vez que se guarda un cambio en la rama `main`, la web se vuelve a publicar sola en uno o dos minutos (pestaña **Actions**).

## Cómo cambiar cosas desde la web de GitHub (sin instalar nada)

Abre el archivo, pulsa el icono del lápiz (✏️), edita y pulsa **Commit changes**.

| Quiero cambiar… | Archivo |
| --- | --- |
| Email, Instagram, TikTok, formularios de Brevo, Google Analytics | `src/config.ts` |
| Textos de la Home | `src/pages/index.astro` |
| Metodología, temario y preguntas frecuentes | `src/pages/metodologia.astro` |
| Quiénes somos (y fotos del equipo) | `src/pages/quienes-somos.astro` |
| Contacto | `src/pages/contacto.astro` |
| Landing de la guía gratuita | `src/pages/guia-gratuita.astro` |
| Landing de la clase de prueba (Google Ads) | `src/pages/clase-de-prueba.astro` |
| Colores y tipografías | `src/styles/global.css` |
| Entradas del blog | `src/content/blog/` |

## Publicar una entrada del blog

1. Entra en `src/content/blog/` y pulsa **Add file → Create new file**.
2. Ponle de nombre la URL que quieras, terminada en `.md`, por ejemplo `como-dorar-la-carne.md`.
3. Copia la cabecera de `por-que-se-corta-la-mayonesa.md` (lo que va entre las dos líneas `---`) y cambia los valores.
4. Escribe debajo el texto. `## Título` es un H2, `### Título` un H3, `**negrita**` y `[texto](url)` para enlaces.
5. Las imágenes van en `public/img/blog/` (mejor en `.webp` y de menos de 200 KB) y se indican en `image` e `imageAlt`.
6. **Commit changes**. Si pones `draft: true`, la entrada no se publica.

## Trabajar en local (opcional)

```bash
npm install
npm run dev      # http://localhost:4321/culilab-web/
npm run build    # genera la web en dist/
```
