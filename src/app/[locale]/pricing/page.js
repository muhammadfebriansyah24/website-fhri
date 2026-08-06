'use client';

import React from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { getPricingData } from "@/components/pricingData";

export default function PricingPage() {
  const locale = useLocale();
  const data = getPricingData(locale);

  return (
    <main className="min-h-screen bg-[#00263C] selection:bg-brand-red selection:text-white flex flex-col">
      
      {/* SECTION 1: HERO / TAKEDOWN PLACEHOLDER */}
      <section id="pricing" className="relative text-white pt-32 pb-40 px-6 md:px-12 overflow-hidden flex-grow flex flex-col justify-center">
        
        {/* --- Background Ornaments --- */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#FFFFFF 2px, transparent 2px)', backgroundSize: '35px 35px' }}></div>
          <div className="absolute top-[15%] left-[5%] w-64 h-64 border border-white/5 rounded-full"></div>
          <div className="absolute top-[50%] -right-[5%] w-96 h-96 border border-white/10 rounded-full"></div>
          <div className="absolute bottom-[25%] left-[15%] w-12 h-12 border-2 border-white/10 rounded-full"></div>
          <div className="absolute top-[30%] right-[25%] w-20 h-20 border border-white/5 rounded-full"></div>
          <div className="absolute top-[10%] right-[30%] w-px h-64 bg-gradient-to-b from-white/10 to-transparent transform rotate-45"></div>
          <div className="absolute bottom-[20%] right-[10%] w-px h-48 bg-gradient-to-t from-white/10 to-transparent transform -rotate-45"></div>
        </div>

        {/* --- Main Content --- */}
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          
          <span className="text-eyebrow-lg gradient-gold text-white px-5 py-2 rounded-full inline-block shadow-md mb-6">
            {data.hero.eyebrow}
          </span>
          
          <h2 className="text-white mb-6 text-balance whitespace-pre-line">
            {data.hero.title}
          </h2>

          {/* Kotak Pengumuman Takedown dengan Tombol Konsultasi */}
          <div className="mt-12 p-8 md:p-12 bg-white/5 border border-white/10 rounded-[2rem] backdrop-blur-md shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-50"></div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {locale === 'id' ? 'Pembaruan Harga Sedang Berlangsung' : 'Pricing Update in Progress'}
            </h3>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              {locale === 'id' 
                ? 'Kami sedang menyesuaikan paket pelatihan kami untuk memberikan nilai terbaik bagi Anda. Silakan konsultasikan kebutuhan Anda terlebih dahulu dengan tim kami untuk mendapatkan penawaran khusus.' 
                : 'We are currently adjusting our training packages to provide you with the best value. Please consult your needs with our team first to get a custom quote.'}
            </p>

            {/* Tombol CTA Baru (Sesuai dengan style yang Anda minta) */}
            <Link 
              href={`/${locale}/join-us`} 
              className="inline-block bg-brand-red text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-brand-navy transition-all duration-500 shadow-[0_10px_20px_rgba(220,38,38,0.2)] hover:shadow-[0_10px_20px_rgba(255,255,255,0.2)] hover:-translate-y-1"
            >
              {locale === 'id' ? 'Konsultasikan Kebutuhan Anda' : 'Consult Your Needs'}
            </Link>
          </div>

        </div>

      </section>
      
    </main>
  );
}