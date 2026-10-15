import { spawnSync } from 'node:child_process';
import { appendFileSync } from 'node:fs';
import sharp from 'sharp';
const production = process.argv.includes('--production');
const build = spawnSync('node', ['node_modules/astro/bin/astro.mjs', 'build'], { stdio: 'inherit', env: { ...process.env, SITE_ENV: production ? 'production' : 'preview' } });
if (build.status !== 0) process.exit(build.status ?? 1);
await sharp('dist/social.svg').png().toFile('dist/social.png');
if (!production) appendFileSync('dist/_headers', '\n/*\n  X-Robots-Tag: noindex, follow\n');
console.log(production ? 'Producción: indexable; publicar únicamente en el dominio final.' : 'Preview: noindex en HTML y cabeceras.');
