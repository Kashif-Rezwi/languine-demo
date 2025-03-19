import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n/settings';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Skip for assets, API routes, etc.
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Handle direct invalid locales (e.g., /es)
  // Check if path is exactly '/<something>' and <something> is not a valid locale
  const segments = pathname.split('/').filter(Boolean);
  if (
    segments.length === 1 && 
    !locales.includes(segments[0] as (typeof locales)[number]) &&
    !/^_/.test(segments[0]) // Skip Next.js special routes
  ) {
    // Redirect to the default locale
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
  }

  // Handle nested invalid locales (e.g., /bn/es)
  for (const locale of locales) {
    if (pathname.startsWith(`/${locale}/`)) {
      const secondSegment = pathname.split('/')[2];
      
      if (
        secondSegment && 
        secondSegment.length >= 2 && 
        !locales.includes(secondSegment as (typeof locales)[number]) &&
        !/^_/.test(secondSegment) // Skip next.js special routes
      ) {
        return NextResponse.redirect(new URL(`/${locale}`, request.url));
      }
    }
  }
  
  // Use next-intl for regular locale handling
  const localeMiddleware = createMiddleware({
    defaultLocale,
    locales,
    localePrefix: 'as-needed'
  });
  
  return localeMiddleware(request);
}

export const config = {
  // Match all pathnames except for assets, API routes, etc.
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
