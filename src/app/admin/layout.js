import '@/app/globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata = {
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="bg-brand-offwhite text-brand-navy min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}
