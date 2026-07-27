import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

const locales = ['en', 'id'];

export default getRequestConfig(async ({ requestLocale }) => {
  // 1. Tangkap 'requestLocale' dan gunakan 'await' (Aturan wajib Next.js 15)
  const locale = await requestLocale;

  // 2. Cek apakah bahasanya ada di daftar (en/id)
  if (!locales.includes(locale)) {
    notFound();
  }

  // 3. Kembalikan pengaturan bahasa dan kamusnya
  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});