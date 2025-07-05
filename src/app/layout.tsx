import type { Metadata } from 'next';
import { inter, primaryFont } from './fonts';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'VNSH Enhanced Laser Strike + Virtual Steel Target!',
  description: 'Enhanced Laser Strike + Virtual Steel Target!',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'VNSH Enhanced Laser Strike + Virtual Steel Target!',
    description: 'Enhanced Laser Strike + Virtual Steel Target!',
    type: 'website',
    images: [
      {
        url: '/favicon.png',
        width: 512,
        height: 512,
        alt: 'VNSH Enhanced Laser Strike + Virtual Steel Target!',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VNSH Enhanced Laser Strike + Virtual Steel Target!',
    description: 'Enhanced Laser Strike + Virtual Steel Target!',
    images: ['/favicon.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${primaryFont.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
