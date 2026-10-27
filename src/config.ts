// ─────────────────────────────────────────────────────────────
// AJUSTES DE LA WEB: lo que más vais a tocar está aquí.
// Se puede editar desde la web de GitHub (icono del lápiz).
// Un campo vacío ('') oculta ese elemento o muestra «Próximamente».
// ─────────────────────────────────────────────────────────────

export const SITE = {
  name: 'CuliLab',
  claim: 'Ciencia y técnica culinaria',
  usp: 'Entiende el porqué. Aprende la técnica y libérate de la receta.',
  description:
    'Escuela online de cocina para aficionados: directos, retos y fichas técnicas que explican la ciencia de cada técnica para que cocines sin depender de la receta.',
  locale: 'es_ES',
};

// Pilares de contenido del blog (Misión 4). El nombre debe coincidir con el campo «pilar» de cada entrada.
export const PILARES = [
  {
    nombre: 'Errores y soluciones',
    texto: 'El porqué de los fallos de la cocina de casa y cómo arreglarlos: salsas cortadas, arroces pasados, carne dura.',
  },
  {
    nombre: 'Ciencia de la técnica',
    texto: 'Lo que pasa dentro de los alimentos cuando cocinas: dorado, emulsiones, almidones y fermentación.',
  },
  {
    nombre: 'Temperatura y precisión',
    texto: 'Tiempos, temperaturas y puntos exactos para que el resultado salga igual cada vez.',
  },
  {
    nombre: 'Aprende con método',
    texto: 'Cómo aprender a cocinar sin depender de recetas: retos, rutinas y en qué fijarte al elegir un curso.',
  },
] as const;

// Redes sociales (comprobad antes que el @ está libre: Misión 0, tarea 1).
export const SOCIAL = {
  instagram: '', // p. ej. 'https://www.instagram.com/culilab/'
  tiktok: '',    // p. ej. 'https://www.tiktok.com/@culilab'
};

// Email de contacto del equipo (una cuenta gratuita de Gmail vale).
export const CONTACT_EMAIL = 'culilab17@gmail.com';

// Formularios de Brevo (Misión 7). En Brevo: Contactos → Formularios →
// crear formulario → «Compartir» → copiar la URL que empieza por
// https://...sibforms.com/serve/... y pegarla aquí.
export const FORMS = {
  guia: '',         // lista «Guía gratuita» (Hugo y Carla)
  clasePrueba: '',  // lista «Clase de prueba» (Alejandro, Google Ads)
};

// Medición (Misión 8). Dejar vacío hasta tener el banner de cookies.
export const ANALYTICS = {
  ga4: '',                       // p. ej. 'G-XXXXXXXXXX'
  searchConsoleVerification: '', // código de la etiqueta meta de Search Console
};
