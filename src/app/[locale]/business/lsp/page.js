'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { getLspData } from '@/components/lspData';

// ==========================================
// HALAMAN UTAMA LSP
// ==========================================
export default function LSPPage() {
  const locale = useLocale();
  const data = getLspData(locale);

  return (
    <main className="min-h-screen bg-slate-50 text-brand-navy selection:bg-brand-red selection:text-white overflow-hidden">

      {/* SECTION 1 : HEADER UTAMA INSTITUT */}
      <section className="relative min-h-[85vh] flex items-center bg-brand-navy overflow-hidden pt-20 md:pt-0">
        
        {/* Background Image & Effects */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/business-pci-hero.jpg"
            alt="Team Reviewing on Laptop"
            fill
            priority
            unoptimized={process.env.NODE_ENV === 'development'}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-brand-navy/70" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-72 h-72 bg-brand-red/20 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* Kontainer Konten Utama */}
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-10 flex flex-col items-center text-center -mt-4 md:-mt-8">
          <div className="max-w-2xl">
            
            <div className="mb-4 md:mb-5">
              <span className="text-eyebrow-lg text-brand-red drop-shadow-md block">
                {data.hero.badge}
              </span>
            </div>
            
            <h1 className="text-white text-balance mb-6 md:mb-8">
              {data.hero.title}
            </h1>
            
            <p className="text-slate-300 text-lg leading-relaxed mb-10 drop-shadow-md">
              {data.hero.description}
            </p>
            
          </div>
        </div>
      </section>

      {/* DAFTAR PROGRAM PER SECTION (DILETAKKAN BERSELANG-SELING) */}
      <div>
        {data.categories.map((item, index) => {
          const isEven = index % 2 === 1;

          return (
            <section
              key={item.id}
              id={item.id}
              className={`py-24 md:py-32 px-6 md:px-12 transition-colors duration-300 ${
                index % 2 === 0 ? 'bg-white' : 'bg-slate-50 border-y border-slate-100'
              }`}
            >
              <div className={`max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14 ${
                isEven ? 'lg:flex-row-reverse' : ''
              }`}>

                {/* SISI KIRI / KANAN: KARTU VISUAL / WATERMARK BESAR */}
                <div className="w-full lg:w-1/2">
                  <div className="relative bg-brand-navy rounded-[2rem] p-8 md:p-12 shadow-2xl overflow-hidden group">

                    <div className="absolute -right-10 -bottom-10 text-[180px] font-black text-white/5 select-none leading-none z-0 group-hover:scale-105 transition-transform duration-500">
                      {item.number}
                    </div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/10 rounded-full blur-3xl pointer-events-none"></div>

                    <div className="relative z-10">
                      <div className="mb-4 md:mb-5">
                        <h6 className="text-brand-red">
                          {data.labels.category} {item.number}
                        </h6>
                      </div>
                      
                      <h3 className="text-white mb-4">
                        {item.title}
                      </h3>
                      <p className="text-slate-300 leading-relaxed mb-8">
                        {item.description}
                      </p>

                      <div className="pt-6 border-t border-white/10 flex items-center justify-between text-slate-400">
                        <h6>{data.labels.status}</h6>
                        <h6 className="text-brand-red">{data.labels.standard}</h6>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SISI SEBALIKNYA: DETAIL INFORMASI & FITUR */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center text-left">
                  <div className="mb-4 md:mb-5">
                    <h6 className="text-brand-red">
                      {item.badge}
                    </h6>
                  </div>

                  <h2 className="text-brand-navy text-balance mb-6 md:mb-8">
                    {item.subtitle}
                  </h2>

                  <p className="text-slate-500 text-lg leading-relaxed mb-8">
                    {item.description}
                  </p>

                  <div className="space-y-4 mb-8">
                    {item.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        <div 
                          className="w-6 h-6 bg-brand-red shrink-0 mt-0.5"
                          style={{
                            WebkitMaskImage: `url('/icons/ic_check-circle-solid.svg')`,
                            WebkitMaskSize: 'contain',
                            WebkitMaskRepeat: 'no-repeat',
                            WebkitMaskPosition: 'center',
                            maskImage: `url('/icons/ic_check-circle-solid.svg')`,
                            maskSize: 'contain',
                            maskRepeat: 'no-repeat',
                            maskPosition: 'center',
                          }}
                        />
                        <div className="text-brand-navy font-medium leading-relaxed">
                          {feat}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* BANNER BAWAH: CALL TO ACTION */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-brand-navy rounded-[2.5rem] p-6 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-red/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <h2 className="text-white text-balance mb-6">
              {data.ctaBanner.title}
            </h2>
            <p className="text-slate-300 text-lg mb-10 leading-relaxed max-w-xl">
              {data.ctaBanner.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={`/${locale}/join-us`}
                className="bg-brand-red text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-white hover:text-brand-navy transition-all shadow-lg"
              >
                {data.ctaBanner.btnPrimary}
              </Link>
              <Link
                href={`/${locale}`}
                className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-bold text-sm hover:bg-white/20 transition-all"
              >
                {data.ctaBanner.btnSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}