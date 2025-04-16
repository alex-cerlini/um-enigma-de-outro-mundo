import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Um enigma de outro mundo',
  description: 'Feliz aniversário',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
