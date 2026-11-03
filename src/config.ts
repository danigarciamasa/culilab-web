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
export const CONTACT_EMAIL = 'culilab8@gmail.com';

// Formularios de Brevo (Misión 7), creados el 03/11/2026 en la cuenta culilab8@gmail.com
// (Marketing → Formularios). Es el «action» del código HTML de cada formulario.
// Campos de Brevo: EMAIL, NOMBRE, OPT_IN, email_address_check (trampa) y locale.
export const FORMS = {
  // lista «Guía gratuita» (Hugo y Carla)
  guia: 'https://ef07bd4d.sibforms.com/serve/MUIFAKkZzPaCZL3R44ka_HO9CjoLi18IVP1UASiFwUq5dSiWeCDX5TsGRnvvZ8PPXyltrtctngvGbs3yoqoFIHEbnrcFdLXNNI0qVDE6dNrRLKNVYu5rEGBb9-90dCc_SXaVbxdt6WVWIBVncr1hhvDlaRTmoKG8yDmOOp7qw4eCb4IU5Pvn1L-BmWU3lPr6IUzDS82ahYgydrXrrw==',
  // lista «Clase de prueba» (Alejandro, Google Ads)
  clasePrueba: 'https://ef07bd4d.sibforms.com/serve/MUIFAJBWDICClJkdOl6CthG4epDOlV7j8VEZgwDOGhpcbAQIjOwUhY59TNJLvB91jXd6PAeAgPlPzDMc53oO0Sdf33CrBO80lFFZFR1WFZ-z8L3M7disBucbmrl12kQeEsK0NXez3Qo2HS4KlM_JfMYyPcnactBncv8Vzomof-gRbrukqGU6CNrFaumclj61gje_aOsheb5ovugKBw==',
};

// Medición (Misión 8). GA4 solo se carga si el visitante acepta la analítica en el aviso de cookies.
export const ANALYTICS = {
  ga4: 'G-CWEMV82NR6',            // propiedad «CuliLab web», flujo «Web CuliLab» (03/11/2026)
  searchConsoleVerification: '', // código de la etiqueta meta de Search Console
};
