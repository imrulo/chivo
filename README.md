# chivo.si

Landing de venta de dominio en español. Dirección creativa: «Instinto propio. Superinteligencia.». SI significa Superinteligencia en esta marca. Las aplicaciones mostradas son conceptos; no hay un producto de SI en funcionamiento.

## Desarrollo

Node.js >=22.12 y npm. Astro estático + TypeScript, CSS y SVG propios. Sin JavaScript de cliente ni fuentes externas.

```sh
npm ci
npm run dev
npm run check
npm run build
npm run preview
```

`npm run build` genera una preview con noindex en HTML y cabeceras. `npm run build:production` genera la versión indexable para https://chivo.si. Cada build convierte la imagen social SVG a PNG 1200 × 630 con Sharp.

## Configuración

Edita `src/config.ts` y recompila:

- Precio: `price: null` por defecto. Solo usar un precio confirmado y positivo; moneda en `currency`.
- Contacto: `contact.whatsapp`, sin + ni espacios. El enlace incluye el dominio automáticamente.
- Vendido: `saleStatus: 'sold'` retira CTAs y actualiza estado, FAQs, metadatos e imagen social.
- Textos: `content` en config para titular e introducción; el resto en `src/pages/index.astro`.
- Dominio: `domain`, `brandName`, `canonicalOrigin`; revisar textos propios, emblema, favicon y configuración Wrangler al adaptar otro nombre.
- Paleta: config para colores base; estilos de detalle en `src/styles/global.css` e imagen social en `src/pages/social.svg.ts`.

## GitHub y Cloudflare Workers Static Assets

Repositorio: https://github.com/imrulo/chivo, rama `main`. El código está en la raíz; dependencias, compilados, QA y credenciales se excluyen del repositorio. El lockfile está incluido.

Worker de producción: `chivo`; el nombre del panel debe coincidir con `name` en `wrangler.jsonc`.

Configuración de Workers Builds:

- Raíz: raíz del repositorio.
- Build: puede dejarse vacío, porque Wrangler compila automáticamente.
- Deploy: `npx wrangler deploy`.

El campo `build.command` ejecuta `npm run build:production` antes del deploy: no depende de que dist exista en Git. También puedes definir ese comando en el campo Build del panel, aunque entonces se compilará dos veces.

Despliegue manual:

```sh
npx wrangler login
npm run deploy:production
```

Para pruebas separadas:

```sh
npm run deploy:preview
```

La configuración de preview usa el Worker `chivo-preview` y añade noindex. Producción desactiva workers.dev y version previews; añade `chivo.si` como Custom Domain tras revisar la zona DNS y conservar correo, MX, SPF, DKIM y verificaciones. No se modifican rutas DNS automáticamente. Gestiona `www.chivo.si` con alojamiento y redirección permanente al dominio raíz conservando ruta y parámetros.

`assets.not_found_handling` está en `404-page`; no se usa fallback de SPA. `_headers` define CSP y otras cabeceras de seguridad.

Verifica tras publicar: HTTPS, respuesta 404, redirección www, canonical, robots, sitemap, social.png, cabeceras y WhatsApp. No se ha verificado ni publicado la web en producción.

Para volver atrás: revertir el commit o seleccionar la versión anterior del Worker. Evitar force push.

## Privacidad

Sin formularios, cookies propias ni analítica. WhatsApp es un servicio externo y el mensaje no se envía automáticamente. El alojamiento puede procesar datos técnicos de conexión. El activo ofrecido es el dominio; no se incluye por defecto código, empresa, marca registrada ni servicios.

## Entrega

El ZIP entregado incluye `dist/` compilado y `vista-previa.html` para ver la composición localmente. El repositorio contiene las fuentes; `npm run build:production` regenera los compilados. Consulta `ESTRATEGIA.md` y `VERIFICACION.md`.
