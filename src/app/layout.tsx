import type { Metadata } from 'next';
import { Inter, Lora } from 'next/font/google';
import './globals.css';
import ThemeRegistry from '@/components/ThemeRegistry';
import Navbar from '@/components/Navbar';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-inter',
});

const lora = Lora({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--font-lora',
});

export const metadata: Metadata = {
  title: 'Håkons Korarrangementer',
  description: 'Portfolio av korarrangementer av Håkon Teigen Lund',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no" className={`${inter.variable} ${lora.variable}`}>
      <body>
        <ThemeRegistry>
          <Navbar />
          <main className="content">
            {children}
          </main>
        </ThemeRegistry>
      </body>
    </html>
  );
}
