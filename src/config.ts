export interface DomainConfig {
  domain: string; brandName: string; locale: string; secondaryLocales: string[];
  positioning: string; audience: string; saleMode: 'inquiry' | 'fixed';
  price: number | null; currency: string; contact: { whatsapp: string };
  marketplaceUrl: string | null; canonicalOrigin: string;
  theme: { background: string; ink: string; accent: string }; typography: { serif: string; sans: string };
  content: { headline: string; intro: string }; socialImage: string;
  analytics: null; saleStatus: 'available' | 'sold';
}
export const config: DomainConfig = {
  domain: 'chivo.si', brandName: 'Chivo', locale: 'es', secondaryLocales: [],
  positioning: 'Instinto propio. Superinteligencia.', audience: 'Creadores de herramientas, agentes y comunidades de superinteligencia en español',
  saleMode: 'inquiry', price: null, currency: 'EUR', contact: { whatsapp: '381641409093' },
  marketplaceUrl: null, canonicalOrigin: 'https://chivo.si',
  theme: { background: '#f4f0e6', ink: '#171915', accent: '#ff6b35' },
  typography: { serif: 'Georgia, Times New Roman, serif', sans: 'Arial, Helvetica, sans-serif' },
  content: { headline: 'Instinto propio. Superinteligencia.', intro: 'Un nombre corto y con carácter para una nueva generación de proyectos de superinteligencia.' },
  socialImage: '/social.png', analytics: null, saleStatus: 'available',
};
if (config.saleMode === 'fixed' && (config.price === null || config.price <= 0)) throw new Error('El precio fijo debe ser positivo y confirmado.');
export const sold = config.saleStatus === 'sold';
export const contactHref = config.marketplaceUrl ?? `https://wa.me/${config.contact.whatsapp}?text=${encodeURIComponent(`Hola, me interesa adquirir ${config.domain}. ¿Podrías indicarme el precio y las condiciones?`)}`;
export const priceLabel = config.price !== null ? new Intl.NumberFormat(config.locale, { style: 'currency', currency: config.currency, maximumFractionDigits: 0 }).format(config.price) : 'Precio bajo consulta';
