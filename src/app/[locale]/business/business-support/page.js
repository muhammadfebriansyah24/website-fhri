'use client';

import React from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import CTA from '@/components/CTA';
import { getBusinessSupportData } from '@/components/businessSupportData';

// CONSTANTS (Images remain static)
const IMG = {
  structural: '/images/business-bss-structural.jpg',
  cultural: '/images/business-bss-cultural.jpg',
};

// MAIN COMPONENT
export default function BusinessSupportPage() {
  const locale = useLocale();
  const data = getBusinessSupportData(locale);

  return (
    <main className="min-h-screen bg-white selection:bg-brand-red selection:text-white overflow-hidden">
      
      {/* SECTION 1 — HERO */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-brand-navy overflow-hidden">
        
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/business-bss-hero.jpg" 
            alt="Modern Corporate Office Environment" 
            fill
            priority
            unoptimized={process.env.NODE_ENV === 'development'}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-brand-navy/85"></div>
        </div>

        <div className="absolute inset-0 opacity-[0.07] z-0" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-red/20 blur-[100px] pointer-events-none z-0" />
        
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-10 text-left -mt-4 md:-mt-8">
          
          <span className="text-eyebrow-lg text-brand-red block mb-4 md:mb-5 drop-shadow-md">
            {data.hero.eyebrow}
          </span>
          
          <h1 className="text-white max-w-4xl text-balance mb-6 md:mb-8">
            {data.hero.title}
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl drop-shadow-md mb-10">
            {data.hero.description}
          </p>

        </div>
      </section>

      {/* SECTION 2 — CORE CAPABILITIES */}
      <section className="bg-slate-50 py-24 md:py-32 px-6 md:px-12 relative z-10 border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-eyebrow-lg text-brand-red block mb-4">
              {data.core.eyebrow}
            </span>
            <h2 className="text-brand-navy text-balance">
              {data.core.title}
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {data.core.capabilities.map((item) => (
              <article key={item.title} className="group rounded-[1.75rem] bg-white p-8 md:p-10 border border-slate-100 transition-all duration-300 hover:shadow-xl hover:border-brand-red/20 hover:-translate-y-1.5 flex flex-col items-start">
                <div className="w-14 h-14 rounded-xl bg-brand-navy flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-brand-red">
                  <div 
                    className="w-6 h-6 bg-white"
                    style={{
                      WebkitMaskImage: `url(${item.icon})`,
                      WebkitMaskSize: 'contain',
                      WebkitMaskRepeat: 'no-repeat',
                      WebkitMaskPosition: 'center',
                      maskImage: `url(${item.icon})`,
                      maskSize: 'contain',
                      maskRepeat: 'no-repeat',
                      maskPosition: 'center',
                    }}
                  />
                </div>
                <h4 className="text-brand-navy mb-3 group-hover:text-brand-red transition-colors">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — STRUCTURAL INTEGRITY */}
      <section className="bg-white py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          
          <div className="rounded-[2rem] bg-slate-50 border border-slate-100 p-2 order-2 lg:order-1">
            <div className="relative h-72 md:h-96 rounded-[calc(2rem-0.5rem)] overflow-hidden group shadow-md">
              <Image 
                src={IMG.structural} 
                alt="Hands signing a corporate legal document" 
                fill
                unoptimized={process.env.NODE_ENV === 'development'}
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <span className="text-eyebrow-lg text-brand-red block mb-4">
              {data.structural.eyebrow}
            </span>
            <h2 className="text-brand-navy mb-6 text-balance">
              {data.structural.title}
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              {data.structural.description}
            </p>
            
            <div className="space-y-6">
              {data.structural.list.map((item) => (
                <div key={item.title} className="flex gap-4 items-start">
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
                  <div>
                    <h4 className="font-bold text-brand-navy mb-1.5">{item.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4 — CULTURAL FIT CHALLENGE */}
      <section className="bg-slate-50 py-24 md:py-32 px-6 md:px-12 border-t border-slate-100">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          
          <div className="order-1">
            <span className="text-eyebrow-lg text-brand-red block mb-4">
              {data.cultural.eyebrow}
            </span>
            <h2 className="text-brand-navy mb-6 text-balance">
              {data.cultural.title}
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              {data.cultural.description}
            </p>
            
            <div className="space-y-6">
              {data.cultural.list.map((item) => (
                <div key={item.title} className="flex gap-4 items-start">
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
                  <div>
                    <h4 className="font-bold text-brand-navy mb-1.5">{item.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="rounded-[2rem] bg-white border border-slate-100 p-2 order-2 shadow-sm">
            <div className="relative h-72 md:h-96 rounded-[calc(2rem-0.5rem)] overflow-hidden group shadow-md">
              <Image 
                src={IMG.cultural} 
                alt="Asian professional team collaborating in a modern office" 
                fill
                unoptimized={process.env.NODE_ENV === 'development'}
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5 — CALL TO ACTION */}
      <CTA />

    </main>
  );
}