import '@/app/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Poppins } from 'next/font/google';

// 1. MENGATUR TIPOGRAFI
const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
});

// 2. MENAMBAHKAN SEO METADATA
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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans antialiased bg-white text-[#00263C] min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}