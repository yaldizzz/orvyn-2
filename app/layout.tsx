import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://orvyn.com.tr'),
  title: 'ORVYN Teknoloji | Yangın Mühendisliği, Ürünler ve Karbon Yönetimi',
  description: 'ORVYN Teknoloji; yangın mühendisliği, yangın danışmanlığı, periyodik kontroller, acil tahliye planı, yangın ürünleri ve karbon yönetimi çözümleri sunar.',
  keywords: ['yangın mühendisliği','yangın danışmanlığı','yangın ürünleri','yangın tüpü','yangın dolabı','sprinkler','acil tahliye planı','karbon yönetimi','ORVYN'],
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
