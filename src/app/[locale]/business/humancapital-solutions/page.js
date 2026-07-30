'use client';

import React from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import CTA from '@/components/CTA';
import { getHumanCapitalData } from '@/components/humanCapitalData';

export default function HumanCapitalSolutions() {
  const locale = useLocale();
  const data = getHumanCapitalData(locale);

  return (
    <main className="min-h-screen bg-slate-50 text-brand-navy selection:bg-brand-red selection:text-white overflow-hidden">
      
      {/* SECTION 1 — HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-brand-navy text-white overflow-hidden pt-20 md:pt-0">
        <div className="absolute inset-0">
          <Image
            src="/images/business-hcs-hero.jpg"
            alt="Team High Five"
            fill
            priority
            unoptimized={process.env.NODE_ENV === 'development'} 
            className="object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/85 to-brand-navy/40" />
        </div>

        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-10 text-left -mt-4 md:-mt-8">
          <span className="text-eyebrow-lg text-brand-red block mb-4 md:mb-5 drop-shadow-md">
            {data.hero.eyebrow}
          </span>
          <h1 className="text-white max-w-4xl text-balance mb-6 md:mb-8">
            {data.hero.title}
          </h1>
          <p className="text-slate-300 max-w-2xl drop-shadow-md mb-10">
            {data.hero.description}
          </p>
        </div>
      </section>

      {/* SECTION 2 — BENTO GRID MODERN (Core Pillars) */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-red/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-3xl mb-16 md:mb-20 relative z-10">
          <span className="text-eyebrow-lg text-brand-red block mb-4">
            {data.pillars.eyebrow}
          </span>
          <h2 className="text-brand-navy mt-6 mb-4 text-balance">
            {data.pillars.title}
          </h2>
          <p className="text-slate-600">
            {data.pillars.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 relative z-10">

          {/* CARD 1: Executive Search & Headhunting (Span 7) */}
          <div className="lg:col-span-7 group bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-md hover:shadow-2xl hover:shadow-brand-red/10 hover:border-brand-red/30 hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-eyebrow text-slate-400">{data.pillars.card1.pillar}</span>
                <span className="text-eyebrow">
                  {data.pillars.card1.badge}
                </span>
              </div>

              <div className="grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-7">
                  <h3 className="text-brand-navy mb-4 group-hover:text-brand-red transition-colors">
                    {data.pillars.card1.title}
                  </h3>
                  <small className="text-slate-500 mb-6 block">
                    {data.pillars.card1.desc}
                  </small>

                  <ul className="space-y-4">
                    {data.pillars.card1.bullets.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm font-semibold text-brand-navy">
                        <div 
                          className="shrink-0 w-5 h-5 bg-brand-red mt-0.5"
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
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="md:col-span-5 aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100 relative shadow-inner">
                  <Image
                    src="/images/business-hcs-pillar1.jpg"
                    alt="Business Executives Meeting"
                    fill
                    unoptimized={process.env.NODE_ENV === 'development'}
                    className="object-cover object-center group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 group-hover:border-brand-red/20 transition-colors duration-500 flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-widest">
              <span>{data.pillars.card1.footerLabel}</span>
              <span className="text-brand-navy group-hover:text-brand-red transition-colors duration-500">{data.pillars.card1.footerValue}</span>
            </div>
          </div>

          {/* CARD 2: Comprehensive Recruitment (Span 5) */}
          <div className="lg:col-span-5 group bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-md hover:shadow-2xl hover:shadow-brand-navy/10 hover:border-brand-navy/30 hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-eyebrow text-slate-400">{data.pillars.card2.pillar}</span>
                <span className="text-eyebrow">
                  {data.pillars.card2.badge}
                </span>
              </div>

              <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-slate-100 relative mb-8">
                <Image
                  src="/images/business-hcs-pillar2.jpg"
                  alt="Recruitment Team Reviewing Candidate"
                  fill
                  unoptimized={process.env.NODE_ENV === 'development'}
                  className="object-cover object-center group-hover:scale-105 transition-all duration-700"
                />
              </div>

              <h3 className="text-brand-navy mb-4 group-hover:text-brand-red transition-colors">
                {data.pillars.card2.title}
              </h3>
              <small className="text-slate-500 block leading-relaxed">
                {data.pillars.card2.desc}
              </small>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 group-hover:border-brand-navy/20 transition-colors duration-500 flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-widest">
              <span>{data.pillars.card2.footerLabel}</span>
              <span className="text-brand-navy">{data.pillars.card2.footerValue}</span>
            </div>
          </div>

          {/* CARD 3: Talent Assessment (Span 5) */}
          <div className="lg:col-span-5 group bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-md hover:shadow-2xl hover:shadow-brand-navy/10 hover:border-brand-navy/30 hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-eyebrow text-slate-400">{data.pillars.card3.pillar}</span>
                <span className="text-eyebrow">
                  {data.pillars.card3.badge}
                </span>
              </div>

              <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-slate-100 relative mb-8">
                <Image
                  src="/images/business-hcs-pillar3.jpg"
                  alt="HR Professionals Reviewing Talent Assessment Data"
                  fill
                  unoptimized={process.env.NODE_ENV === 'development'}
                  className="object-cover object-center group-hover:scale-105 transition-all duration-700"
                />
              </div>

              <h3 className="text-brand-navy mb-4 group-hover:text-brand-red transition-colors">
                {data.pillars.card3.title}
              </h3>
              <small className="text-slate-500 block leading-relaxed">
                {data.pillars.card3.desc}
              </small>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 group-hover:border-brand-navy/20 transition-colors duration-500 flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-widest">
              <span>{data.pillars.card3.footerLabel}</span>
              <span className="text-brand-navy">{data.pillars.card3.footerValue}</span>
            </div>
          </div>

          {/* CARD 4: Executive Network Showcase (Span 7) */}
          <div className="lg:col-span-7 group bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-md hover:shadow-2xl hover:shadow-brand-red/10 hover:border-brand-red/30 hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-eyebrow text-slate-400">{data.pillars.card4.pillar}</span>
                <div className="flex items-center gap-2 text-brand-red">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
                  <span className="text-eyebrow">{data.pillars.card4.badge}</span>
                </div>
              </div>

              <h3 className="text-brand-navy mb-4 group-hover:text-brand-red transition-colors text-balance">
                {data.pillars.card4.title}
              </h3>
              <small className="text-slate-500 max-w-xl block leading-relaxed">
                {data.pillars.card4.desc}
              </small>

              <div className="mt-10 grid grid-cols-2 gap-4 md:gap-6 relative z-10">
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 group-hover:border-brand-red/20 group-hover:-translate-y-1 group-hover:shadow-md transition-all duration-500">
                  <span className="block text-3xl md:text-5xl font-bold text-brand-red mb-2">94%</span>
                  <h6 className="text-slate-400">{data.pillars.card4.stat1Label}</h6>
                </div>
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 group-hover:border-brand-navy/20 group-hover:-translate-y-1 group-hover:shadow-md transition-all duration-500">
                  <span className="block text-3xl md:text-5xl font-bold text-brand-navy mb-2">&lt;45 {locale === 'id' ? 'Hari' : 'Days'}</span>
                  <h6 className="text-slate-400">{data.pillars.card4.stat2Label}</h6>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 group-hover:border-brand-red/20 transition-colors duration-500 flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-widest">
              <span>{data.pillars.card4.footerLabel}</span>
              <span className="text-brand-navy group-hover:text-brand-red transition-colors duration-500">{data.pillars.card4.footerValue}</span>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3 — METHODOLOGY */}
      <section className="bg-white border-y border-slate-200/60 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="max-w-3xl mb-16 md:mb-24 relative z-10">
            <span className="text-eyebrow-lg text-brand-red block mb-4">
              {data.process.eyebrow}
            </span>
            <h2 className="text-brand-navy mt-6 mb-4 text-balance">
              {data.process.title}
            </h2>
            <p className="text-slate-600">
              {data.process.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {data.process.steps.map((step) => (
              <div key={step.n} className="flex flex-col items-start group bg-white p-8 md:p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-brand-red/20 hover:-translate-y-2 transition-all duration-500">
                
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 border border-slate-100 group-hover:bg-brand-red group-hover:border-brand-red group-hover:shadow-lg group-hover:shadow-brand-red/20 transition-all duration-500">
                  <div 
                    className="w-8 h-8 md:w-9 md:h-9 bg-brand-navy group-hover:bg-white transition-colors duration-500" 
                    style={{
                      WebkitMaskImage: `url('${step.icon}')`,
                      WebkitMaskSize: 'contain',
                      WebkitMaskRepeat: 'no-repeat',
                      WebkitMaskPosition: 'center',
                      maskImage: `url('${step.icon}')`,
                      maskSize: 'contain',
                      maskRepeat: 'no-repeat',
                      maskPosition: 'center',
                    }}
                  />
                </div>

                <h5 className="text-brand-red mb-3 font-bold">{step.stepLabel}</h5>
                <h4 className="text-brand-navy mb-4 group-hover:text-brand-red transition-colors">{step.title}</h4>
                <p className="text-slate-600">{step.text}</p>
                
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