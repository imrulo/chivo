import type { APIRoute } from 'astro';
import { config } from '../config';
export const GET: APIRoute = () => new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${config.canonicalOrigin}/</loc></url><url><loc>${config.canonicalOrigin}/privacidad/</loc></url></urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
