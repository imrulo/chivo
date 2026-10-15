import { defineConfig } from 'astro/config';
import { config } from './src/config.ts';
export default defineConfig({ site: config.canonicalOrigin, output: 'static', build: { inlineStylesheets: 'always' } });
