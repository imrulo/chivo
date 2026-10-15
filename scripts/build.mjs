import { spawnSync } from 'node:child_process';
import { appendFileSync, readFileSync, writeFileSync } from 'node:fs';
import sharp from 'sharp';
const production = process.argv.includes('--production');
const build = spawnSync('node', ['node_modules/astro/bin/astro.mjs', 'build'], { stdio: 'inherit', env: { ...process.env, SITE_ENV: production ? 'production' : 'preview' } });
if (build.status !== 0) process.exit(build.status ?? 1);
// Embed the approved mark so the social SVG and its PNG are self-contained.
const logo = await sharp('public/brand/chivo-logo.webp').png().toBuffer();
const social = readFileSync('dist/social.svg', 'utf8').replace('href="/brand/chivo-logo.webp"', `href="data:image/png;base64,${logo.toString('base64')}"`);
writeFileSync('dist/social.svg', social);
await sharp(Buffer.from(social)).png().toFile('dist/social.png');
if (!production) appendFileSync('dist/_headers', '\n/*\n  X-Robots-Tag: noindex, follow\n');
console.log(production ? 'Producción: indexable; publicar únicamente en el dominio final.' : 'Preview: noindex en HTML y cabeceras.');
