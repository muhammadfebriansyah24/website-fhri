'use client'; 

import React from 'react';
import { useLocale } from 'next-intl';
import CTA from '@/components/CTA';
import { getHseData } from '@/components/hseData';

export default function HsePage() {
  const locale = useLocale();
  const data = getHseData(locale);

  return (
    <main className="min-h-screen font-sans bg-white selection:bg-brand-red selection:text-white">
      
      {/* =========================================
    SECTION 1: HERO BANNER (HSE) 
    ========================================= */}
      <section className="relative w-full min-h-[92vh] flex items-center bg-[#00263C] overflow-hidden">
        
        {/* Background Image & Gradient */}
        <div className="absolute inset-0 w-full h-full z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="https://images.unsplash.com/photo-1628147529780-36964fbb8d54?q=80&w=2000&auto=format&fit=crop" 
            alt="Safe and orderly industrial work environment in the morning" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00263C] via-[#00263C]/90 to-transparent"></div>
          <div className="absolute inset-0 bg-[#00263C]/50 md:hidden"></div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 py-16 md:py-20 relative z-10">
          
          <div className="max-w-2xl">
            
            {/* Glassmorphism Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 shadow-lg">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C92A2A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#C92A2A]"></span>
              </span>
              <span className="text-white text-[10px] font-bold uppercase tracking-[0.2em]">
                {data.hero.badge}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] text-balance mb-6">
              {data.hero.title1} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">{data.hero.title2}</span> <br/>
              {data.hero.title3}
            </h1>

            {/* Sub-headline */}
            <p className="text-base md:text-lg text-slate-300 leading-relaxed font-light">
              {data.hero.description}
            </p>

            {/* Quick Highlights */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-6 border-t border-white/20 pt-8">
              <div>
                <h4 className="text-2xl md:text-3xl font-black text-white mb-1">{data.hero.highlights[0].value}</h4>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{data.hero.highlights[0].label}</p>
              </div>
              <div>
                <h4 className="text-2xl md:text-3xl font-black text-white mb-1">{data.hero.highlights[1].value}</h4>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{data.hero.highlights[1].label}</p>
              </div>
              <div className="hidden md:block">
                <h4 className="text-2xl md:text-3xl font-black text-white mb-1">{data.hero.highlights[2].value}</h4>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{data.hero.highlights[2].label}</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 2: CORE HSE PILLARS 
          ========================================= */}
      <section className="bg-white py-24 md:py-32 px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] bg-[#C92A2A]/10 text-[#C92A2A] mb-5">
              {data.pillars.badge}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#00263C] leading-tight mb-6">
              {data.pillars.title}
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              {data.pillars.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            
            <article className="group rounded-[1.75rem] bg-slate-50 p-7 md:p-9 ring-1 ring-slate-100 transition-all hover:shadow-[0_30px_60px_-20px_rgba(0,38,60,0.18)] hover:-translate-y-1.5 flex flex-col h-full">
              <div className="w-12 h-12 bg-[#00263C] rounded-xl flex items-center justify-center mb-6 shrink-0 transition-colors duration-300 group-hover:bg-[#C92A2A]">
                <div 
                  className="w-5 h-5 bg-white shrink-0"
                  style={{
                    WebkitMaskImage: `url('/icons/ic_check-shield-outline.svg')`,
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskImage: `url('/icons/ic_check-shield-outline.svg')`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                  }}
                />
              </div>
              <h3 className="font-bold text-[#00263C] text-lg leading-snug mb-3 group-hover:text-[#C92A2A] transition-colors duration-300">
                {data.pillars.cards[0].title}
              </h3>
              <p className="text-[13.5px] text-slate-500 leading-relaxed flex-grow">
                {data.pillars.cards[0].desc}
              </p>
            </article>

            <article className="group rounded-[1.75rem] bg-slate-50 p-7 md:p-9 ring-1 ring-slate-100 transition-all hover:shadow-[0_30px_60px_-20px_rgba(0,38,60,0.18)] hover:-translate-y-1.5 flex flex-col h-full">
              <div className="w-12 h-12 bg-[#00263C] rounded-xl flex items-center justify-center mb-6 shrink-0 transition-colors duration-300 group-hover:bg-[#C92A2A]">
                <div 
                  className="w-5 h-5 bg-white shrink-0"
                  style={{
                    WebkitMaskImage: `url('/icons/ic_document-check-outline.svg')`,
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskImage: `url('/icons/ic_document-check-outline.svg')`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                  }}
                />
              </div>
              <h3 className="font-bold text-[#00263C] text-lg leading-snug mb-3 group-hover:text-[#C92A2A] transition-colors duration-300">
                {data.pillars.cards[1].title}
              </h3>
              <p className="text-[13.5px] text-slate-500 leading-relaxed flex-grow">
                {data.pillars.cards[1].desc}
              </p>
            </article>

            <article className="group rounded-[1.75rem] bg-slate-50 p-7 md:p-9 ring-1 ring-slate-100 transition-all hover:shadow-[0_30px_60px_-20px_rgba(0,38,60,0.18)] hover:-translate-y-1.5 flex flex-col h-full">
              <div className="w-12 h-12 bg-[#00263C] rounded-xl flex items-center justify-center mb-6 shrink-0 transition-colors duration-300 group-hover:bg-[#C92A2A]">
                <div 
                  className="w-5 h-5 bg-white shrink-0"
                  style={{
                    WebkitMaskImage: `url('/icons/ic_globe-outline.svg')`,
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskImage: `url('/icons/ic_globe-outline.svg')`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                  }}
                />
              </div>
              <h3 className="font-bold text-[#00263C] text-lg leading-snug mb-3 group-hover:text-[#C92A2A] transition-colors duration-300">
                {data.pillars.cards[2].title}
              </h3>
              <p className="text-[13.5px] text-slate-500 leading-relaxed flex-grow">
                {data.pillars.cards[2].desc}
              </p>
            </article>

          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 3: OUR EXTRA INITIATIVES
          ========================================= */}
      <section className="bg-white pb-24 md:pb-32 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            
            <div className="order-1 relative z-10">
              <span className="inline-flex items-center rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] bg-[#C92A2A]/10 text-[#C92A2A] mb-5">
                {data.initiatives.badge}
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#00263C] leading-tight mb-6">
                {data.initiatives.title}
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed mb-10">
                {data.initiatives.description}
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div 
                    className="w-6 h-6 bg-[#00263C] shrink-0 mt-0.5"
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
                  <div>
                    <h4 className="font-bold text-[#00263C] text-[15px] mb-1">{data.initiatives.points[0].title}</h4>
                    <p className="text-[13px] text-slate-500 leading-relaxed">
                      {data.initiatives.points[0].desc}
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div 
                    className="w-6 h-6 bg-[#C92A2A] shrink-0 mt-0.5"
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
                  <div>
                    <h4 className="font-bold text-[#00263C] text-[15px] mb-1">{data.initiatives.points[1].title}</h4>
                    <p className="text-[13px] text-slate-500 leading-relaxed">
                      {data.initiatives.points[1].desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-2 relative w-full mt-10 lg:mt-0">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#C92A2A]/10 rounded-full blur-2xl z-0"></div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#00263C]/10 rounded-full blur-2xl z-0"></div>
              
              <div className="rounded-[2rem] bg-slate-50 ring-1 ring-slate-100 p-2 group relative z-10">
                <div className="relative h-72 md:h-96 rounded-[calc(2rem-0.5rem)] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1685483749753-0dab7e144794?q=80&w=1000&auto=format&fit=crop" 
                    alt="Industrial work environment that is neat, clean, and free of fire hazards" 
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-in-out"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00263C]/60 via-transparent to-transparent opacity-80"></div>

                  <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 bg-white/95 backdrop-blur-sm px-5 py-3 rounded-xl shadow-xl border border-white flex items-center gap-4">
                    <div className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[#00263C] font-extrabold text-[13px] tracking-wide leading-tight">{data.initiatives.status.label}</span>
                      <span className="text-slate-500 text-[9px] uppercase tracking-wider font-bold">{data.initiatives.status.desc}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 4: COMPLIANCE ROADMAP (TIMELINE)
          ========================================= */}
      <section className="bg-slate-50 py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="inline-flex items-center rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] bg-[#C92A2A]/10 text-[#C92A2A] mb-5">
              {data.roadmap.badge}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#00263C] leading-tight mb-6">
              {data.roadmap.title}
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              {data.roadmap.description}
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-slate-200 -translate-x-1/2"></div>
            <div className="lg:hidden absolute left-[27px] top-0 bottom-0 w-[2px] bg-slate-200"></div>

            <div className="space-y-16">
              
              {/* Step 1 */}
              <div className="relative flex flex-col lg:flex-row items-center justify-between group">
                <div className="hidden lg:block lg:w-[45%] text-right pr-12">
                  <h3 className="text-xl md:text-2xl font-bold text-[#00263C] mb-3">{data.roadmap.steps[0].title}</h3>
                  <p className="text-[14px] md:text-[15px] text-slate-500 leading-relaxed">
                    {data.roadmap.steps[0].desc}
                  </p>
                </div>
                
                <div className="absolute left-0 lg:left-1/2 -translate-x-0 lg:-translate-x-1/2 w-14 h-14 bg-white border-4 border-[#00263C] group-hover:border-[#C92A2A] rounded-full flex items-center justify-center shadow-lg transition-colors duration-300 z-10">
                  <span className="text-[#00263C] group-hover:text-[#C92A2A] font-black text-xl transition-colors duration-300">1</span>
                </div>
                
                <div className="pl-20 lg:pl-0 lg:w-[45%] lg:text-left lg:hidden">
                  <h3 className="text-xl md:text-2xl font-bold text-[#00263C] mb-3">{data.roadmap.steps[0].title}</h3>
                  <p className="text-[14px] md:text-[15px] text-slate-500 leading-relaxed">
                    {data.roadmap.steps[0].desc}
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col lg:flex-row-reverse items-center justify-between group">
                <div className="hidden lg:block lg:w-[45%] text-left pl-12">
                  <h3 className="text-xl md:text-2xl font-bold text-[#00263C] mb-3">{data.roadmap.steps[1].title}</h3>
                  <p className="text-[14px] md:text-[15px] text-slate-500 leading-relaxed">
                    {data.roadmap.steps[1].desc}
                  </p>
                </div>
                
                <div className="absolute left-0 lg:left-1/2 -translate-x-0 lg:-translate-x-1/2 w-14 h-14 bg-white border-4 border-[#00263C] group-hover:border-[#C92A2A] rounded-full flex items-center justify-center shadow-lg transition-colors duration-300 z-10">
                  <span className="text-[#00263C] group-hover:text-[#C92A2A] font-black text-xl transition-colors duration-300">2</span>
                </div>
                
                <div className="pl-20 lg:pl-0 lg:w-[45%] lg:text-right lg:hidden">
                  <h3 className="text-xl md:text-2xl font-bold text-[#00263C] mb-3">{data.roadmap.steps[1].title}</h3>
                  <p className="text-[14px] md:text-[15px] text-slate-500 leading-relaxed">
                    {data.roadmap.steps[1].desc}
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col lg:flex-row items-center justify-between group">
                <div className="hidden lg:block lg:w-[45%] text-right pr-12">
                  <h3 className="text-xl md:text-2xl font-bold text-[#00263C] mb-3">{data.roadmap.steps[2].title}</h3>
                  <p className="text-[14px] md:text-[15px] text-slate-500 leading-relaxed">
                    {data.roadmap.steps[2].desc}
                  </p>
                </div>
                
                <div className="absolute left-0 lg:left-1/2 -translate-x-0 lg:-translate-x-1/2 w-14 h-14 bg-white border-4 border-[#00263C] group-hover:border-[#C92A2A] rounded-full flex items-center justify-center shadow-lg transition-colors duration-300 z-10">
                  <span className="text-[#00263C] group-hover:text-[#C92A2A] font-black text-xl transition-colors duration-300">3</span>
                </div>
                
                <div className="pl-20 lg:pl-0 lg:w-[45%] lg:text-left lg:hidden">
                  <h3 className="text-xl md:text-2xl font-bold text-[#00263C] mb-3">{data.roadmap.steps[2].title}</h3>
                  <p className="text-[14px] md:text-[15px] text-slate-500 leading-relaxed">
                    {data.roadmap.steps[2].desc}
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative flex flex-col lg:flex-row-reverse items-center justify-between group">
                <div className="hidden lg:block lg:w-[45%] text-left pl-12">
                  <h3 className="text-xl md:text-2xl font-bold text-[#00263C] mb-3">{data.roadmap.steps[3].title}</h3>
                  <p className="text-[14px] md:text-[15px] text-slate-500 leading-relaxed">
                    {data.roadmap.steps[3].desc}
                  </p>
                </div>
                
                <div className="absolute left-0 lg:left-1/2 -translate-x-0 lg:-translate-x-1/2 w-14 h-14 bg-[#00263C] border-4 border-[#00263C] group-hover:bg-[#C92A2A] group-hover:border-[#C92A2A] rounded-full flex items-center justify-center shadow-lg transition-colors duration-300 z-10">
                  <div 
                    className="w-6 h-6 bg-white shrink-0"
                    style={{
                      WebkitMaskImage: `url('/icons/ic_check.svg')`,
                      WebkitMaskSize: 'contain',
                      WebkitMaskRepeat: 'no-repeat',
                      WebkitMaskPosition: 'center',
                      maskImage: `url('/icons/ic_check.svg')`,
                      maskSize: 'contain',
                      maskRepeat: 'no-repeat',
                      maskPosition: 'center',
                    }}
                  />
                </div>
                
                <div className="pl-20 lg:pl-0 lg:w-[45%] lg:text-right lg:hidden">
                  <h3 className="text-xl md:text-2xl font-bold text-[#00263C] mb-3">{data.roadmap.steps[3].title}</h3>
                  <p className="text-[14px] md:text-[15px] text-slate-500 leading-relaxed">
                    {data.roadmap.steps[3].desc}
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =========================================
          SECTION 5: TRUST & CREDENTIALS
          ========================================= */}
      <section className="bg-white py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          
          <span className="inline-flex items-center rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] bg-[#C92A2A]/10 text-[#C92A2A] mb-5">
            {data.credentials.badge}
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-[#00263C] mb-12 md:mb-16">
            {data.credentials.title}
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            
            {/* Credential Card 1 */}
            <div className="bg-slate-50 ring-1 ring-slate-100 p-6 rounded-[1.75rem] flex items-center gap-4 group hover:shadow-[0_20px_40px_-15px_rgba(0,38,60,0.12)] hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 border-2 border-[#00263C] rounded-full flex items-center justify-center">
                <span className="text-[#00263C] font-black text-xs tracking-tighter">ISO</span>
              </div>
              <div className="text-left">
                <p className="text-[#00263C] font-black text-lg leading-none tracking-wider mb-1">{data.credentials.items[0].title}</p>
                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{data.credentials.items[0].subtitle}</p>
              </div>
            </div>

            {/* Credential Card 2 */}
            <div className="bg-slate-50 ring-1 ring-slate-100 p-6 rounded-[1.75rem] flex items-center gap-4 group hover:shadow-[0_20px_40px_-15px_rgba(0,38,60,0.12)] hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 border-2 border-[#00263C] rounded-full flex items-center justify-center">
                <span className="text-[#00263C] font-black text-xs tracking-tighter">ISO</span>
              </div>
              <div className="text-left">
                <p className="text-[#00263C] font-black text-lg leading-none tracking-wider mb-1">{data.credentials.items[1].title}</p>
                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{data.credentials.items[1].subtitle}</p>
              </div>
            </div>

            {/* Credential Card 3 */}
            <div className="bg-slate-50 ring-1 ring-slate-100 p-6 rounded-[1.75rem] flex items-center gap-4 group hover:shadow-[0_20px_40px_-15px_rgba(0,38,60,0.12)] hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-[#00263C] rounded-xl flex items-center justify-center group-hover:bg-[#C92A2A] transition-colors duration-300">
                <div 
                  className="w-6 h-6 bg-white shrink-0"
                  style={{
                    WebkitMaskImage: `url('/icons/ic_check-shield-outline.svg')`,
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskImage: `url('/icons/ic_check-shield-outline.svg')`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                  }}
                />
              </div>
              <div className="text-left">
                <p className="text-[#00263C] font-black text-lg leading-none tracking-wider mb-1">{data.credentials.items[2].title}</p>
                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{data.credentials.items[2].subtitle}</p>
              </div>
            </div>

            {/* Credential Card 4 */}
            <div className="bg-slate-50 ring-1 ring-slate-100 p-6 rounded-[1.75rem] flex items-center gap-4 group hover:shadow-[0_20px_40px_-15px_rgba(0,38,60,0.12)] hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-[#00263C] rounded-xl flex items-center justify-center group-hover:bg-[#C92A2A] transition-colors duration-300">
                <div 
                  className="w-6 h-6 bg-white shrink-0"
                  style={{
                    WebkitMaskImage: `url('/icons/ic_globe-outline.svg')`,
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskImage: `url('/icons/ic_globe-outline.svg')`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                  }}
                />
              </div>
              <div className="text-left">
                <p className="text-[#00263C] font-black text-lg leading-none tracking-wider mb-1">{data.credentials.items[3].title}</p>
                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{data.credentials.items[3].subtitle}</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 6: CALL TO ACTION
          ========================================= */}
      <CTA />

    </main>
  );
}