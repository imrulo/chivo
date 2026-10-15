# Verificación — 15 de octubre de 2026

Completado:

- `npm run check`: 0 errores, 0 warnings, 0 hints.
- `npm run build:production`: genera las tres páginas, robots, sitemap y social PNG.
- `npx wrangler deploy --dry-run`: compila automáticamente, reconoce 10 archivos estáticos y termina correctamente. No se realizó publicación.
- HTML de portada: un H1, canonical absoluto, robots de producción, OG/X específicos, JSON-LD parseable; sin scripts de cliente externos.
- Enlaces de adquisición con dominio correcto y mensaje codificado a WhatsApp del propietario; ningún mensaje enviado.
- Build vendido: retira los dos enlaces de adquisición y actualiza metadatos. Se restauró disponible.
- Build preview: noindex en meta y cabeceras. Se restauró build de producción.
- Imagen social PNG 1200 × 630 inspeccionada visualmente; dominio legible y sin recortes observados.
- Fuentes, configuración y HTML sin referencias a pericia o teorema.

Límites:

- No hubo navegador de QA disponible en el flujo actual. Las reglas responsive se implementaron en CSS, pero no se validaron visualmente las anchuras ni se ejecutó una auditoría de accesibilidad automatizada.
- No hay mediciones de Core Web Vitals, Lighthouse ni datos de campo.
- No se ha verificado HTTP real, Custom Domain, DNS, HTTPS, redirección www, cabeceras servidas o previews sociales de las plataformas.
- Dependencias conservadas del sistema Astro existente y lockfile ajustado al nombre del nuevo proyecto. Build validado con dependencias ya instaladas; no se ejecutó una instalación limpia independiente.
- No se pudo consultar la web actual de chivo.si; no se modificó.

El proyecto está construido y comprobado dentro de este alcance, preparado para imrulo/chivo en GitHub. La publicación en Cloudflare sigue pendiente.

## Evolución de identidad con el logo aprobado

- Logo aprobado integrado en la portada como WebP de 1000 × 1000; proporción reservada para limitar movimientos de layout.
- Fondo oscuro de portada, naranja en CTA y separadores, titulares de mayor peso y contraste. Estilos móviles específicos para la composición y el titular.
- Imagen social actualizada con el mismo logo; SVG autocontenido y PNG inspeccionado visualmente.
- Repetidas las comprobaciones de tipos y build, así como disponible/vendido, preview/producción, metadatos y enlaces de contacto: correctas.
- No se realizó inspección visual de la web en navegador; el límite de QA responsive sigue vigente.
