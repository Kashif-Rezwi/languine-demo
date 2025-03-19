import { ReactNode } from 'react';
import { Providers } from './providers';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

// Define locale type
interface RootLayoutProps {
  children: ReactNode;
  params: { locale: string };
}

export default function LocaleLayout({ children, params }: RootLayoutProps) {
  return (
    <html lang={params.locale} suppressHydrationWarning>
      <body className={inter.className}>
        <Providers locale={params.locale}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
