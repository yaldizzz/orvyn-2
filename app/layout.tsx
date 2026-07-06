import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://orvyn.com.tr'),
  title: 'ORVYN Teknoloji | Yangın Mühendisliği, Ürünler ve Karbon Yönetimi',
  description: 'ORVYN Teknoloji; yangın risk analizi, acil durum tahliye planı, yangından korunma ekipmanları, yangın mühendisliği, TS EN, NFPA ve karbon yönetimi çözümleri sunar.',
  keywords: ['yangın risk analizi','acil durum tahliye planı','yangından korunma ekipmanları','yangın mühendisliği','yangın danışmanlığı','TS EN 671','TS EN 54','TS EN 12845','NFPA','FM Global','sprinkler','yangın tüpü','yangın dolabı','karbon yönetimi','ORVYN'],
  openGraph: {
    title: 'ORVYN Teknoloji',
    description: 'Yangın güvenliği, mühendislik ve karbon yönetimi tek platformda.',
    url: 'https://orvyn.com.tr',
    siteName: 'ORVYN Teknoloji',
    locale: 'tr_TR',
    type: 'website'
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="tr"><body>{children}</body></html>;
}
