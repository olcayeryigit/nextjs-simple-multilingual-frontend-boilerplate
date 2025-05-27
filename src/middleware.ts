import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const locales = ['en', 'tr'] as const;
  const defaultLocale = 'en';

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!pathnameHasLocale) {
    const locale =
      request.headers.get('accept-language')?.split(',')[0].split('-')[0] ||
      defaultLocale;
    const validLocale = locales.includes(locale as (typeof locales)[number])
      ? locale
      : defaultLocale;
    const newPath = `/${validLocale}${pathname === '/' ? '' : pathname}`;
    return NextResponse.redirect(new URL(newPath, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
