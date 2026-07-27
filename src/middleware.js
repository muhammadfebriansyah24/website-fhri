import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'id'],
  defaultLocale: 'en'
});

export const config = {
  // Pola matcher standar industri: 
  // Cocokkan SEMUA rute, KECUALI file sistem (api, _next) dan file ber-ekstensi (seperti .jpg, .css)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};