'use client';

import React from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import CTA from '@/components/CTA';
import { getCorporateCultureData } from '@/components/corporateCultureData';

// ============================================================
// SHARED UI PRIMITIVES
// ============================================================
function ModernEyebrow({ children }) {
  return (
    <span className="text-xs md:text-sm font-black uppercase tracking-[0.3em] text-[#DC2626]">
      {children}
    </span>
  );
}

// ============================================================
// MAIN PAGE
// ============================================================
export default function CorporateCultureEvents() {
  const locale = useLocale();
  const data = getCorporateCultureData(locale);

  return (
    <main className="min-h-screen font-sans bg-[#F8F9FA] text-[#00263C] selection:bg-[#DC2626] selection:text-white">

      {/* SECTION 1 — HERO (Full-bleed) */}
      <section className="relative min-h-[92vh] flex items-end bg-[#00263C] text-white overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1531547977107-a5f0f32d6d87?q=80&w=2400&auto=format&fit=crop"
            alt="Indonesian Professionals Collaborating in a Relaxed Office Culture Setting"
            className="absolute inset-0 w-full h-full object-cover grayscale-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#00263C] via-[#00263C]/70 to-[#00263C]/20" />
        </div>

        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 pb-16 md:pb-20 pt-32 relative z-10">
          <ModernEyebrow>{data.hero.eyebrow}</ModernEyebrow>
          <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.03] tracking-tight max-w-4xl text-balance">
            {data.hero.title}
          </h1>
          <p className="mt-7 text-base md:text-lg text-slate-200 leading-relaxed max-w-xl font-medium">
            {data.hero.description}
          </p>
        </div>
      </section>

      {/* SECTION 2 — CORE SERVICES */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <ModernEyebrow>{data.services.eyebrow}</ModernEyebrow>
          <h2 className="mt-6 text-3xl md:text-5xl lg:text-6xl font-black text-[#00263C] leading-[1.02] tracking-tight">
            {data.services.title}
          </h2>
          <p className="mt-6 text-slate-500 text-base md:text-lg leading-relaxed">
            {data.services.description}
          </p>
        </div>

        <div className="flex flex-col gap-16 md:gap-20">
          {data.services.items.map((row, idx) => (
            <div
              key={row.n}
              className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-16`}
            >
              {/* Image */}
              <div className="w-full md:w-5/12 shrink-0">
                <div className="relative group">
                  <div
                    className={`hidden sm:block absolute -inset-3 rounded-[2.5rem] ${row.rotate} transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:rotate-0`}
                    style={{ backgroundColor: row.accent, opacity: 0.14 }}
                  />
                  <div className="relative bg-white p-2.5 rounded-[2.5rem] shadow-[0_30px_80px_-25px_rgba(0,38,60,0.35)] border border-slate-100">
                    <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] bg-slate-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={row.img}
                        alt={row.title}
                        className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1200ms] ease-[cubic-bezier(0.32,0.72,0,1)]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#00263C]/70 via-transparent to-transparent" />
                      <span
                        className="absolute bottom-5 left-5 text-[10px] font-black uppercase tracking-widest text-white px-4 py-2 rounded-full backdrop-blur-md border border-white/20"
                        style={{ backgroundColor: `${row.accent}CC` }}
                      >
                        {row.n} · {row.tag}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Copy */}
              <div className="w-full md:w-7/12 relative">
                <span
                  className="text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full border"
                  style={{ color: row.accent, borderColor: `${row.accent}30`, backgroundColor: `${row.accent}0D` }}
                >
                  {row.tag}
                </span>
                <h3 className="mt-5 text-2xl md:text-3xl lg:text-4xl font-black text-[#00263C] leading-tight tracking-tight">
                  {row.title}
                </h3>
                <p className="mt-4 text-slate-500 text-sm md:text-base leading-relaxed max-w-xl">
                  {row.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {row.tags.map((t) => (
                    <span key={t} className="text-xs font-semibold text-[#00263C] bg-white border border-slate-200 shadow-[0_6px_16px_-6px_rgba(0,38,60,0.15)] px-3.5 py-1.5 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-y-4 sm:gap-x-4 lg:gap-x-6 mt-8 pt-8 border-t border-slate-100 w-full">
                  {row.meta.map((m, mi) => (
                    <div key={m.label} className={`flex-1 ${mi > 0 ? 'sm:pl-4 lg:pl-6 sm:border-l border-slate-100' : ''}`}>
                      <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-tight">{m.label}</span>
                      <span className="block text-sm font-bold text-[#00263C] mt-1 leading-snug">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3 — PROCESS */}
      <section className="bg-[#F8F9FA] py-20 md:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16 md:mb-20">
            <ModernEyebrow>{data.approach.eyebrow}</ModernEyebrow>
            <h2 className="mt-5 text-3xl md:text-5xl font-black text-[#00263C] leading-[1.02] tracking-tight">
              {data.approach.title}
            </h2>
            <p className="mt-6 text-slate-500 text-base md:text-lg leading-relaxed">
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
                  className={`relative h-full rounded-[2rem] p-8 md:p-9 pt-10 shadow-[0_30px_60px_-20px_rgba(0,38,60,0.35)] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${step.rotate} group-hover:rotate-0 group-hover:-translate-y-3 group-hover:shadow-[0_40px_80px_-20px_rgba(0,38,60,0.45)] ${
                    step.dark ? 'bg-[#00263C] text-white' : 'bg-white text-[#00263C] border border-slate-100'
                  }`}
                >
                  <span
                    className={`absolute top-4 right-6 text-8xl font-black leading-none select-none pointer-events-none ${
                      step.dark ? 'text-white/[0.06]' : 'text-[#00263C]/[0.05]'
                    }`}
                  >
                    {step.n}
                  </span>

                  <div className="relative z-10">
                    <span className={`inline-block w-8 h-1 rounded-full mb-6 ${step.dark ? 'bg-[#DC2626]' : 'bg-[#DC2626]'}`} />
                    <h3 className="text-xl font-extrabold leading-snug">{step.title}</h3>
                    <p className={`text-sm leading-relaxed mt-4 ${step.dark ? 'text-slate-300' : 'text-slate-500'}`}>
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