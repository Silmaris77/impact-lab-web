import type { Metadata } from 'next';
import '@fontsource-variable/manrope';
import './globals.css';

export const metadata: Metadata = {
  title: 'Impact Lab — Ludzie. Pomysły. Zmiana.',
  description: 'Diagnozujemy. Projektujemy. Rozwijamy. Łączymy doświadczenie, dane i odważne myślenie, aby uruchamiać realną zmianę w organizacjach.',
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pl"><body>{children}</body></html>;
}
