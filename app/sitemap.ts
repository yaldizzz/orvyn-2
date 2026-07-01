import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://orvyn.com.tr';
  return [
    '', '#hizmetler', '#urunler', '#karbon', '#teklif', '#iletisim'
  ].map((p) => ({ url: `${base}/${p}`, lastModified: new Date(), changeFrequency: 'weekly', priority: p === '' ? 1 : 0.7 }));
}
