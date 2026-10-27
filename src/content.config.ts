import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Cada entrada del blog es un archivo .md en src/content/blog/.
// El nombre del archivo es la URL: por-que-se-corta-la-mayonesa.md → /blog/por-que-se-corta-la-mayonesa/
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),                 // H1 de la entrada
    seoTitle: z.string().optional(),   // <title> (máx. ~60 caracteres); si falta se usa title
    description: z.string(),           // meta description (máx. ~155 caracteres)
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    pilar: z.enum(['Errores y soluciones', 'Ciencia de la técnica', 'Temperatura y precisión', 'Aprende con método']), // pilar de contenido (Misión 4, src/config.ts)
    fase: z.enum(['descubrimiento', 'consideración', 'conversión']),
    keyword: z.string(),               // keyword principal (Misión 3)
    cta: z.enum(['guia', 'clase']).default('guia'), // conversión al final: guía (Hugo, Carla) o clase de prueba (Alejandro)
    image: z.string().optional(),      // ruta dentro de public/, p. ej. img/blog/mayonesa.webp
    imageAlt: z.string().optional(),
    draft: z.boolean().default(false), // true = no se publica
  }),
});

export const collections = { blog };
