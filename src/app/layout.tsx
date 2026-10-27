import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-heading',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700']
});

const inter = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: 'Theeran P. | Computer Science Engineer & Creative Technologist',
  description:
    'Portfolio of Theeran P. — B.E. Computer Science Engineering student at Kumaraguru College of Technology (KCT), Forge ProtoSem Fellow, Lead Cinematographer, and IoT Builder.',
  keywords: [
    'Theeran P.',
    'Theeran Portfolio',
    'Kumaraguru College of Technology',
    'KCT',
    'Forge ProtoSem',
    'Embedded Systems',
    'ESP32',
    'FreeRTOS',
    'Cinematography',
    'Video Editor',
    'IoT Developer',
    'Coimbatore'
  ],
  authors: [{ name: 'Theeran P.' }],
  creator: 'Theeran P.',
  openGraph: {
    title: 'Theeran P. | Computer Science Engineer & Creative Technologist',
    description:
      'Bridging Hardware, Software & Cinematic Storytelling. Explore verified IoT projects, FreeRTOS systems, and Forge ProtoSem weekly journal records.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Theeran P. Portfolio'
  },
  icons: {
    icon: '/profile.png'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const storedTheme = localStorage.getItem('theeran-theme');
                  if (storedTheme) {
                    document.documentElement.setAttribute('data-theme', storedTheme);
                  } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
                    document.documentElement.setAttribute('data-theme', 'light');
                  } else {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch (e) {}
              })();
            `
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
