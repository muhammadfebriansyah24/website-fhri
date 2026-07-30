'use client'; 

import React from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import CTA from '@/components/CTA';
import { getHRBootcampData } from '@/components/hrBootcampData';

export default function HRBootcampPage() {
  const locale = useLocale();
  const data = getHRBootcampData(locale);

  return (
    <main className="min-h-screen bg-white text-brand-navy selection:bg-brand-red selection:text-white overflow-hidden">
      
      {/* =========================================
          SECTION 1: HERO SECTION
          ========================================= */}
      <section className="relative min-h-[85vh] flex items-center bg-brand-navy text-white overflow-hidden pt-20 md:pt-0">
        
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-10 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            
            {/* LEFT COLUMN: Copywriting */}
            <div className="flex flex-col justify-center items-center lg:items-start relative z-10 text-center lg:text-left mt-0 lg:-mt-8">
              <div className="mb-4 md:mb-5">
                <span className="text-eyebrow-lg text-brand-red block drop-shadow-md">
                  {data.hero.eyebrow}
                </span>
              </div>
              <h1 className="text-white text-balance mb-6 md:mb-8">
                {data.hero.title1}<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-400">{data.hero.titleHighlight}</span>
              </h1>
              <p className="text-slate-300 max-w-lg mx-auto lg:mx-0 mb-10 drop-shadow-md text-lg leading-relaxed">
                {data.hero.description}
              </p>
            </div>

            {/* RIGHT COLUMN: Visual */}
            <div className="relative w-full max-w-sm mx-auto lg:max-w-none aspect-[4/3] flex items-center justify-center z-10 group mt-6 lg:mt-0">
              <div className="absolute inset-0 rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl">
                <Image 
                  src="/images/business-hrbc-hero.jpg" 
                  alt="Executive Education Series" 
                  fill
                  unoptimized={process.env.NODE_ENV === 'development'}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>
            </div>
            
        </div>
      </section>

      {/* =========================================
          SECTION 2: FLAGSHIP COHORT SECTION
          ========================================= */}
      <section className="bg-white py-24 md:py-32 px-6 md:px-12 relative border-b border-slate-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            <div className="col-span-2 rounded-2xl overflow-hidden aspect-video bg-slate-100 shadow-lg relative group">
              <Image 
                src="/images/business-hrbc-flagship1.jpg" 
                alt="HRBP Boot Camp 1" 
                fill
                unoptimized={process.env.NODE_ENV === 'development'}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square bg-slate-100 shadow-md relative group">
              <Image 
                src="/images/business-hrbc-flagship2.jpg" 
                alt="HRBP Boot Camp 2" 
                fill
                unoptimized={process.env.NODE_ENV === 'development'}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square bg-slate-100 shadow-md relative group">
              <Image 
                src="/images/business-hrbc-flagship3.jpg" 
                alt="HRBP Boot Camp 3" 
                fill
                unoptimized={process.env.NODE_ENV === 'development'}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="flex flex-col justify-start space-y-6">
            <div>
              <span className="text-eyebrow-lg text-brand-red block mb-4">
                {data.flagship.eyebrow}
              </span>
              <h2 className="text-brand-navy mb-4 text-balance">
                {data.flagship.title}
              </h2>
            </div>
            
            <p className="text-slate-600 text-lg leading-relaxed">
              {data.flagship.description}
            </p>
            
            <ul className="space-y-4 pt-2">
              {data.flagship.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium text-base">
                  <div 
                    className="w-5 h-5 bg-brand-red shrink-0"
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
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* =========================================
          SECTION 3: CORE LEARNING PILLARS
          ========================================= */}
      <section className="bg-slate-50 py-24 md:py-32 px-6 md:px-12 relative border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-eyebrow-lg text-brand-red block mb-4">
              {data.pillars.eyebrow}
            </span>
            <h2 className="text-brand-navy mb-4 text-balance">
              {data.pillars.title}
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              {data.pillars.description}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Pillar 1 */}
            <article className="group rounded-[1.75rem] bg-white p-8 md:p-10 border border-slate-100 shadow-sm hover:shadow-xl hover:border-brand-red/20 hover:-translate-y-1.5 transition-all duration-500 flex flex-col h-full">
              <div className="w-14 h-14 rounded-2xl bg-brand-navy group-hover:bg-brand-red flex items-center justify-center mb-6 shadow-md transition-colors duration-300">
                <div 
                  className="w-6 h-6 bg-white"
                  style={{
                    WebkitMaskImage: `url('/icons/ic_chart-bar-outline.svg')`,
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskImage: `url('/icons/ic_chart-bar-outline.svg')`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                  }}
                />
              </div>
              <h3 className="text-brand-navy mb-2 group-hover:text-brand-red transition-colors">
                {data.pillars.cards[0].title}
              </h3>
              <h6 className="text-brand-red mb-4">
                {data.pillars.cards[0].badge}
              </h6>
              <p className="text-slate-500 text-sm leading-relaxed flex-grow">
                {data.pillars.cards[0].desc}
              </p>
            </article>
            
            {/* Pillar 2 */}
            <article className="group rounded-[1.75rem] bg-white p-8 md:p-10 border border-slate-100 shadow-sm hover:shadow-xl hover:border-brand-red/20 hover:-translate-y-1.5 transition-all duration-500 flex flex-col h-full">
              <div className="w-14 h-14 rounded-2xl bg-brand-navy group-hover:bg-brand-red flex items-center justify-center mb-6 shadow-md transition-colors duration-300">
                <div 
                  className="w-6 h-6 bg-white"
                  style={{
                    WebkitMaskImage: `url('/icons/ic_computer-outline.svg')`,
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskImage: `url('/icons/ic_computer-outline.svg')`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                  }}
                />
              </div>
              <h3 className="text-brand-navy mb-2 group-hover:text-brand-red transition-colors">
                {data.pillars.cards[1].title}
              </h3>
              <h6 className="text-brand-red mb-4">
                {data.pillars.cards[1].badge}
              </h6>
              <p className="text-slate-500 text-sm leading-relaxed flex-grow">
                {data.pillars.cards[1].desc}
              </p>
            </article>
            
            {/* Pillar 3 */}
            <article className="group rounded-[1.75rem] bg-white p-8 md:p-10 border border-slate-100 shadow-sm hover:shadow-xl hover:border-brand-red/20 hover:-translate-y-1.5 transition-all duration-500 flex flex-col h-full">
              <div className="w-14 h-14 rounded-2xl bg-brand-navy group-hover:bg-brand-red flex items-center justify-center mb-6 shadow-md transition-colors duration-300">
                <div 
                  className="w-6 h-6 bg-white"
                  style={{
                    WebkitMaskImage: `url('/icons/ic_user-group-outline.svg')`,
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskImage: `url('/icons/ic_user-group-outline.svg')`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                  }}
                />
              </div>
              <h3 className="text-brand-navy mb-2 group-hover:text-brand-red transition-colors">
                {data.pillars.cards[2].title}
              </h3>
              <h6 className="text-brand-red mb-4">
                {data.pillars.cards[2].badge}
              </h6>
              <p className="text-slate-500 text-sm leading-relaxed flex-grow">
                {data.pillars.cards[2].desc}
              </p>
            </article>

          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 4: RESULT-ORIENTED DEVELOPMENT
          ========================================= */}
      <section className="bg-brand-navy py-24 md:py-32 px-6 md:px-12 relative text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-eyebrow-lg text-brand-red block mb-4 drop-shadow-md">
              {data.outcomes.eyebrow}
            </span>
            <h2 className="text-white mb-6 text-balance">
              {data.outcomes.title}
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-lg">
              {data.outcomes.description}
            </p>
            
            <div className="space-y-6">
              {/* COMMERCIAL ACUMEN */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-4 transition-all hover:bg-white/10">
                <div 
                  className="w-6 h-6 bg-brand-red shrink-0"
                  style={{
                    WebkitMaskImage: `url('/icons/ic_trending-up.svg')`,
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskImage: `url('/icons/ic_trending-up.svg')`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                  }}
                />
                <div>
                  <h4 className="text-white font-bold mb-1">{data.outcomes.features[0].title}</h4>
                  <p className="text-slate-400 text-sm">{data.outcomes.features[0].desc}</p>
                </div>
              </div>
              
              {/* EXECUTION VELOCITY */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-4 transition-all hover:bg-white/10">
                <div 
                  className="w-6 h-6 bg-brand-red shrink-0"
                  style={{
                    WebkitMaskImage: `url('/icons/ic_clock-outline.svg')`,
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskImage: `url('/icons/ic_clock-outline.svg')`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                  }}
                />
                <div>
                  <h4 className="text-white font-bold mb-1">{data.outcomes.features[1].title}</h4>
                  <p className="text-slate-400 text-sm">{data.outcomes.features[1].desc}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
              <div className="bg-brand-navy rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
              <div className="w-full aspect-[16/9] bg-brand-navy relative">
                  <div className="absolute top-4 left-4 text-white text-xs font-bold tracking-widest uppercase z-10 drop-shadow-md">
                    {data.outcomes.testimonial.badge}
                  </div>
                  <Image 
                    src="/images/business-hrbc-result.jpg" 
                    alt="Result-Oriented Development" 
                    fill
                    unoptimized={process.env.NODE_ENV === 'development'}
                    className="object-cover opacity-80"
                  />
              </div>
              <div className="bg-brand-navy/80 backdrop-blur-md p-6 border-t border-slate-700/50">
                <p className="text-white text-lg font-medium italic mb-2">
                  {data.outcomes.testimonial.quote}
                </p>
                <small className="text-slate-400">{data.outcomes.testimonial.author}</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 5: CALL TO ACTION
          ========================================= */}
      <CTA />

    </main>
  );
}