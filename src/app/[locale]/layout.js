import '@/app/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Poppins } from 'next/font/google';

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata = {
  title: 'First HR Indonesia | Strategic Partner for Outstanding Talent',
  description: 'First HR Indonesia (FHRI) membantu perusahaan dan profesional HR membangun kapasitas, mengakselerasi karir, dan bertransformasi melalui pembelajaran praktis.',
  keywords: ['HR Indonesia', 'Pelatihan HR', 'Konsultan HR', 'First HR Indonesia', 'HRBP', 'Komunitas HR'],
  openGraph: {
    title: 'First HR Indonesia | Strategic Partner for Outstanding Talent',
    description: 'Tingkatkan kapasitas HR dan akselerasi karir Anda bersama komunitas HR terbesar di Indonesia.',
    siteName: 'First HR Indonesia',
    locale: 'id_ID',
    type: 'website',
  },
};

export default async function RootLayout({ children, params }) {
  // Wajib menggunakan await di Next.js 15
  const { locale } = await params;
  
  // Mengambil data teks dari file en.json atau id.json
  const messages = await getMessages();

  return (
    <html lang={locale} className={poppins.variable}>
      <body className="font-sans antialiased bg-white text-brand-navy min-h-screen flex flex-col">
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}