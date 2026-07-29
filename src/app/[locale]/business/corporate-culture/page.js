'use client';

import React from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import CTA from '@/components/CTA';
import { getCorporateCultureData } from '@/components/corporateCultureData';

// ============================================================
// MAIN PAGE
// ============================================================
export default function CorporateCultureEvents() {
  const locale = useLocale();
  const data = getCorporateCultureData(locale);

  return (
    <main className="min-h-screen bg-slate-50 text-brand-navy selection:bg-brand-red selection:text-white overflow-hidden">

      {/* SECTION 1 — HERO */}
      <section className="relative min-h-[85vh] flex items-center bg-brand-navy overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1531547977107-a5f0f32d6d87?q=80&w=2400&auto=format&fit=crop"
            alt="Indonesian Professionals Collaborating in a Relaxed Office Culture Setting"
            fill
            className="object-cover grayscale-[0.3]"
            unoptimized
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/70 to-brand-navy/20" />
        </div>

        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-10 flex flex-col justify-center text-left -mt-4 md:-mt-8">
          <div className="mb-4 md:mb-5">
            <span className="text-eyebrow-lg block drop-shadow-md">
              {data.hero.eyebrow}
            </span>
          </div>
          <h1 className="text-white text-balance mb-6 md:mb-8">
            {data.hero.title}
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-xl mb-10 drop-shadow-md">
            {data.hero.description}
          </p>
        </div>
      </section>

      {/* SECTION 2 — CORE SERVICES */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="text-eyebrow-lg block mb-4 md:mb-5">
            {data.services.eyebrow}
          </span>
          <h2 className="text-brand-navy text-balance mb-6 md:mb-8">
            {data.services.title}
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            {data.services.description}
          </p>
        </div>

        <div className="flex flex-col gap-16 md:gap-24">
          {data.services.items.map((row, idx) => (
            <div
              key={row.n}
              className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-16`}
            >
              {/* Image */}
              <div className="w-full md:w-5/12 shrink-0">
                <div className="relative group">
                  <div
                    className={`hidden sm:block absolute -inset-3 rounded-[2.5rem] bg-slate-200 ${row.rotate} transition-transform duration-700 ease-in-out group-hover:rotate-0`}
                  />
                  <div className="relative bg-white p-2.5 rounded-[2.5rem] shadow-[0_30px_80px_-25px_rgba(0,38,60,0.15)] border border-slate-100">
                    <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] bg-slate-100">
                      <Image
                        src={row.img}
                        alt={row.title}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-transparent to-transparent" />
                      <div className="absolute bottom-5 left-5 text-[10px] font-bold uppercase tracking-widest text-white px-4 py-2 rounded-full backdrop-blur-md bg-brand-navy/80 border border-white/20">
                        {row.n} · {row.tag}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Copy */}
              <div className="w-full md:w-7/12 relative text-left">
                
                {/* 1. Label Eyebrow di atas Judul */}
                <div className="mb-4 md:mb-5">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-red block drop-shadow-sm">
                    {row.tag}
                  </span>
                </div>
                
                <h3 className="text-brand-navy mb-4">
                  {row.title}
                </h3>
                <p className="text-slate-500 leading-relaxed max-w-xl mb-6">
                  {row.desc}
                </p>

                {/* 2. Daftar Tag dikembalikan ke model badge/pill sebelumnya */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {row.tags.map((t) => (
                    <span key={t} className="text-xs font-semibold text-brand-navy bg-white border border-slate-200 shadow-sm px-3.5 py-1.5 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-y-4 sm:gap-x-4 lg:gap-x-6 pt-8 border-t border-slate-200 w-full">
                  {row.meta.map((m, mi) => (
                    <div key={m.label} className={`flex-1 ${mi > 0 ? 'sm:pl-4 lg:pl-6 sm:border-l border-slate-200' : ''}`}>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-tight mb-1">{m.label}</div>
                      <div className="text-sm font-bold text-brand-navy leading-snug">{m.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3 — PROCESS */}
      <section className="bg-slate-50 py-24 md:py-32 overflow-hidden border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="max-w-3xl mb-16 md:mb-20 text-left">
            <span className="text-eyebrow-lg block mb-4 md:mb-5">
              {data.approach.eyebrow}
            </span>
            <h2 className="text-brand-navy text-balance mb-6 md:mb-8">
              {data.approach.title}
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              {data.approach.description}
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-stretch">
            {data.approach.steps.map((step, idx) => (
              <div
                key={step.n}
                className={`group relative w-full md:w-1/3 ${idx > 0 ? 'md:-ml-8' : ''} mb-6 md:mb-0`}
                style={{ zIndex: idx + 1 }}
              >
                <div
                  className={`relative h-full rounded-[2rem] p-8 md:p-10 shadow-lg transition-all duration-700 ease-in-out ${step.rotate} group-hover:rotate-0 group-hover:-translate-y-2 group-hover:shadow-xl ${
                    step.dark ? 'bg-brand-navy' : 'bg-white border border-slate-100'
                  }`}
                >
                  {/* Background Watermark Number */}
                  <div
                    className={`absolute top-4 right-6 text-8xl font-black leading-none select-none pointer-events-none transition-colors duration-500 ${
                      step.dark ? 'text-white/5 group-hover:text-white/10' : 'text-brand-navy/5 group-hover:text-brand-red/5'
                    }`}
                  >
                    {step.n}
                  </div>

                  <div className="relative z-10">
                    <div className="w-8 h-1 rounded-full mb-6 bg-brand-red" />
                    <h3 className={`mb-4 ${step.dark ? 'text-white' : 'text-brand-navy group-hover:text-brand-red transition-colors duration-300'}`}>
                      {step.title}
                    </h3>
                    <p className={`leading-relaxed text-sm md:text-base ${step.dark ? 'text-slate-300' : 'text-slate-500'}`}>
                      {step.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — CALL TO ACTION */}
      <CTA />

    </main>
  );
}