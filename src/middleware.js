import { NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { getIronSession } from 'iron-session';
import { sessionOptions } from './lib/session';

const intlMiddleware = createMiddleware({
  locales: ['en', 'id'],
  defaultLocale: 'en'
});

const PUBLIC_ADMIN_PATHS = ['/admin/login', '/admin/register', '/admin/forgot-password', '/admin/reset-password'];

export default async function middleware(request) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/admin')) {
    if (PUBLIC_ADMIN_PATHS.some((path) => pathname.startsWith(path))) {
      return NextResponse.next();
    }

    const response = NextResponse.next();
    const session = await getIronSession(request, response, sessionOptions);

    if (!session.user) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    return response;
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};