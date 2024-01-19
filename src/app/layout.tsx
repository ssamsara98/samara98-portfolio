import type { Metadata } from 'next';
import 'swiper/css/bundle';
import './globals.scss';
import { Providers } from './providers';
import { open_sans, playfair_display, roboto } from './fonts';

export const metadata: Metadata = {
  title: 'Sulthon AbdulMalik',
  description: "Sulthon's portfolio website",
};

type RootLayoutProps = { children: React.ReactNode };

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${roboto.className} ${open_sans.variable} ${playfair_display.variable}`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
