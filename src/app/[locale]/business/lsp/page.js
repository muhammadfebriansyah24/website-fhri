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
    <main className="bg-white min-h-screen pb-20 font-sans">

      {/* SECTION 1 : HEADER UTAMA INSTITUT */}
      <section className="relative min-h-[92vh] flex items-center justify-center bg-[#00263C] overflow-hidden">
        
        {/* Background Image & Effects */}
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?fm=jpg&q=80&w=2400&auto=format&fit=crop"
            alt="Audience attending a professional HR certification training seminar"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#00263C]/70" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#DC2626]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-72 h-72 bg-[#DC2626]/20 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* Kontainer Konten Utama */}
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 py-16 md:py-20 relative z-10 flex justify-center">
          <div className="max-w-3xl text-center flex flex-col items-center">
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-[#DC0017] text-xs font-extrabold tracking-widest uppercase mb-6">
              {data.hero.badge}
            </div>
            
            <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {data.hero.title}
            </h1>
            
            <p className="text-slate-300 mt-6 text-base md:text-lg leading-relaxed">
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
              className={`py-12 md:py-16 px-6 transition-colors duration-300 ${
                index % 2 === 0 ? 'bg-white' : 'bg-slate-50/70 border-y border-slate-100'
              }`}
            >
              <div className={`max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-14 ${
                isEven ? 'lg:flex-row-reverse' : ''
              }`}>

                {/* SISI KIRI / KANAN: KARTU VISUAL / WATERMARK BESAR */}
                <div className="w-full lg:w-1/2">
                  <div className="relative bg-[#00263C] rounded-[2rem] p-8 md:p-12 text-white shadow-xl overflow-hidden group">

                    <div className="absolute -right-10 -bottom-10 text-[180px] font-black text-white/5 select-none leading-none z-0 group-hover:scale-105 transition-transform duration-500">
                      {item.number}
                    </div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#DC2626]/10 rounded-full blur-3xl pointer-events-none"></div>

                    <div className="relative z-10">
                      <span className="inline-block px-3.5 py-1 rounded-md bg-white/10 text-[#DC0017] text-xs font-bold uppercase tracking-wider mb-6">
                        {data.labels.category} {item.number}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8">
                        {item.description}
                      </p>

                      <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-semibold tracking-wider uppercase text-slate-400">
                        <span>{data.labels.status}</span>
                        <span className="text-[#DC0017]">{data.labels.standard}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SISI SEBALIKNYA: DETAIL INFORMASI & FITUR */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <span className={`self-start text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-md mb-4 border ${item.accentColor}`}>
                    {item.badge}
                  </span>

                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#00263C] tracking-tight mb-4">
                    {item.subtitle}
                  </h2>

                  <p className="text-gray-600 text-base leading-relaxed mb-8">
                    {item.description}
                  </p>

                  <div className="space-y-4 mb-8">
                    {item.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div 
                          className="w-6 h-6 bg-[#DC0017] shrink-0 mt-0.5"
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
                        <span className="text-sm md:text-base text-gray-700 font-medium">
                          {feat}
                        </span>
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
      <section className="max-w-[1200px] mx-auto px-6 mt-4">
        <div className="bg-gradient-to-r from-[#00263C] to-[#153C56] rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"></div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-4">
              {data.ctaBanner.title}
            </h2>
            <p className="text-slate-300 text-sm md:text-base mb-8 leading-relaxed">
              {data.ctaBanner.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={`/${locale}/join-us`}
                className="bg-[#DC2626] text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-white hover:text-[#00263C] transition-all shadow-lg"
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