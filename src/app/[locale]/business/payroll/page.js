'use client';

import React from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import CTA from '@/components/CTA';
import { getPayrollData } from '@/components/payrollData';

// MAIN COMPONENT
export default function PayrollOutsourcingPage() {
  const locale = useLocale();
  const data = getPayrollData(locale);

  return (
    <main className="min-h-screen bg-white selection:bg-brand-red selection:text-white overflow-hidden">
      
      {/* SECTION 1 — HERO SECTION */}
      <section className="relative min-h-0 py-20 md:min-h-[85vh] md:py-0 flex items-center bg-brand-navy text-white overflow-hidden">
        
        {/*  BACKGROUND TEXTURES & EFFECTS  */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="absolute -left-32 -top-32 w-[600px] h-[600px] rounded-full bg-brand-red/10 blur-[120px] pointer-events-none z-0" />
        <div className="absolute -right-32 -bottom-32 w-[600px] h-[600px] rounded-full bg-brand-navy/10 blur-[120px] pointer-events-none z-0" />
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy via-transparent to-brand-navy/80 pointer-events-none z-0" />

        {/* Kontainer Konten */}
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-10 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          
          {/* Left: Text */}
          <div className="text-center lg:text-left">
            <span className="text-eyebrow-lg text-brand-red block mb-4 md:mb-5 drop-shadow-md">
              {data.hero.eyebrow}
            </span>
            <h1 className="text-white text-balance mb-6 md:mb-8">
              {data.hero.title1} <br className="hidden md:block" />
              {data.hero.title2}
            </h1>
            <p className="text-slate-300 mb-10 drop-shadow-md">
              {data.hero.description}
            </p>
          </div>

          {/* Right: Image */}
          <div className="relative w-full max-w-[600px] mx-auto lg:ml-auto">
            <div className="bg-white/5 p-2 md:p-3 rounded-[2rem] w-full shadow-2xl border border-white/10 backdrop-blur-sm group">
              <div className="relative w-full h-[240px] sm:h-[320px] md:h-[420px] rounded-[1.5rem] overflow-hidden">
                <Image 
                  src="/images/business-po-hero.jpg" 
                  alt="Payroll and Outsourcing Services" 
                  fill
                  unoptimized={process.env.NODE_ENV === 'development'}
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  priority
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2 — CORE CAPABILITIES (MODULES) */}
      <section className="bg-slate-50 py-24 md:py-32 px-6 md:px-12 relative z-10 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          
          <div className="max-w-2xl mx-auto text-center mb-16 md:mb-20">
            <span className="text-eyebrow-lg text-brand-red block mb-4">
              {data.core.eyebrow}
            </span>
            <h2 className="text-brand-navy mb-6 text-balance">
              {data.core.title}
            </h2>
            <p>
              {data.core.description}
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {data.core.modules.map((item) => (
              <article key={item.title} className="group rounded-[2rem] bg-white p-8 md:p-10 border border-slate-100 shadow-sm hover:shadow-xl hover:border-brand-red/20 hover:-translate-y-2 transition-all duration-500 flex flex-col h-full">
                
                <div className="w-14 h-14 rounded-2xl bg-brand-navy flex items-center justify-center mb-6 shadow-md transition-colors duration-300 group-hover:bg-brand-red">
                  <div 
                    className="w-6 h-6 bg-white" 
                    style={{
                      WebkitMaskImage: `url('${item.icon}')`,
                      WebkitMaskSize: 'contain',
                      WebkitMaskRepeat: 'no-repeat',
                      WebkitMaskPosition: 'center',
                      maskImage: `url('${item.icon}')`,
                      maskSize: 'contain',
                      maskRepeat: 'no-repeat',
                      maskPosition: 'center',
                    }}
                  />
                </div>
                
                <h4 className="text-brand-navy mb-3 group-hover:text-brand-red transition-colors">{item.title}</h4>
                <p className="text-teaser flex-grow">{item.desc}</p>
                
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 3 — ZIG-ZAG FEATURES */}
      <section className="bg-white py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-24 md:space-y-32">
          
          {data.zigZag.map((feature, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className="grid lg:grid-cols-2 gap-14 items-center">
                
                {/* Image Side */}
                <div className={`rounded-[2rem] bg-slate-50 border border-slate-100 p-2 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative h-72 md:h-96 rounded-[calc(2rem-0.5rem)] overflow-hidden group shadow-md">
                    <Image 
                      src={feature.image} 
                      alt={feature.title} 
                      fill
                      unoptimized={process.env.NODE_ENV === 'development'}
                      className="object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>

                {/* Text Side */}
                <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <span className="text-eyebrow-lg text-brand-red block mb-4">
                    {feature.eyebrow}
                  </span>
                  <h2 className="text-brand-navy mb-6 text-balance">
                    {feature.title}
                  </h2>
                  <p className="text-slate-600 mb-10">
                    {feature.desc}
                  </p>
                  
                  <div className="space-y-6">
                    {feature.bullets.map((bullet, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div 
                          className="flex-shrink-0 w-6 h-6 bg-brand-red mt-0.5"
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
                        <p className="text-takeaway text-brand-navy leading-relaxed">{bullet}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}

        </div>
      </section>

      {/* SECTION 4 — CALL TO ACTION */}
      <CTA />

    </main>
  );
}