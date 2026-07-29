'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { useLocale } from 'next-intl';
import { getTipsData } from '@/components/tipsData';
import CTA from '@/components/CTA';

function TipRow({ tip, accent, index, isOpen, onToggle }) {
  return (
    <div className="border-b border-slate-200/80 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-start gap-5 md:gap-7 text-left py-6 md:py-7 cursor-pointer group"
      >
        <span
          className="font-bold text-xl md:text-2xl mt-1 shrink-0 transition-colors duration-500"
          style={{ color: isOpen ? accent : '#94a3b8' }} // #94a3b8 adalah warna bawaan slate-400
        >
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="flex-1">
          <h4 className="transition-colors duration-500 text-brand-navy group-hover:text-opacity-80">
            {tip.title}
          </h4>
          <p className={`text-slate-500 mt-2 max-w-xl transition-all duration-500 ${isOpen ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
            {tip.teaser}
          </p>
        </div>
        
        <span
          className="shrink-0 mt-1 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
          style={{ color: isOpen ? accent : '#94a3b8', transform: isOpen ? 'rotate(135deg)' : 'rotate(0deg)' }}
        >

          <div 
            className="w-5 h-5 md:w-6 md:h-6 bg-current"
            style={{
              WebkitMaskImage: `url('/icons/ic_plus.svg')`,
              WebkitMaskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center',
              maskImage: `url('/icons/ic_plus.svg')`,
              maskSize: 'contain',
              maskRepeat: 'no-repeat',
              maskPosition: 'center',
            }}
          />

        </span>
      </button>

      <div className={`grid transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <div className="pl-[3.25rem] md:pl-[4.25rem] pb-7 pr-4 max-w-3xl">
            <p className="text-slate-600">{tip.body}</p>
            <p className="text-sm font-bold uppercase tracking-widest mt-6" style={{ color: accent }}>
              {tip.takeaway}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CategoryBlock({ cat, idx, openKey, toggle }) {
  const reverse = idx % 2 === 1;
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-16 items-start`}>
  <div className="w-full md:w-2/5 md:sticky md:top-24">
    <div className="relative rounded-2xl overflow-hidden aspect-[4/5] group shadow-xl">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={cat.img}
        alt={cat.label}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, transparent 40%, ${cat.accent}40 100%)` }} />
    </div>
  </div>

  <div className="w-full md:w-3/5">
    <h3 className="mb-4" style={{ color: cat.accent }}>
      {String(idx + 1).padStart(2, '0')}. {cat.label}
    </h3>
    
    <h2 className="text-brand-navy text-balance font-semibold">
      {cat.intro}
    </h2>

    <div className="mt-8 md:mt-10 border-t border-slate-200/80">
      {cat.tips.map((tip, i) => {
        const key = `${cat.key}-${i}`;
        return (
          <TipRow
            key={key}
            tip={tip}
            accent={cat.accent}
            index={i}
            isOpen={openKey === key}
            onToggle={() => toggle(key)}
          />
        );
      })}
    </div>
  </div>
</div>
  );
}

export default function TipsAndTricks() {
  const locale = useLocale();
  const data = getTipsData(locale);
  const categories = data.categories;

  const [openKey, setOpenKey] = useState('recruitment-0');
  const toggle = (key) => setOpenKey((prev) => (prev === key ? null : key));

  return (
    <main className="min-h-screen bg-white selection:bg-brand-red selection:text-white">

      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-brand-navy px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/tthr-hero.jpg"
            alt="Calm, focused workplace"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-brand-navy/80" />
        </div>

        <div className="max-w-3xl mx-auto text-center relative z-10 -mt-12 md:-mt-20">
          <span className="text-eyebrow-lg text-brand-red block mb-4 md:mb-5 drop-shadow-md">
            {data.hero.eyebrow}
          </span>
          <h1 className="text-white text-balance">
            {data.hero.title1}{' '}
            <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-400">
              First HR Indonesia
            </span>
            <br className="hidden md:block" />
            {data.hero.subtitle}
          </h1>
          <p className="mt-6 md:mt-8 text-slate-300 max-w-xl mx-auto">
            {data.hero.description}
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-4 text-xs font-bold uppercase tracking-widest text-slate-400 z-10">
          Scroll
          <span className="w-px h-12 bg-white/20 animate-pulse" />
        </div>
      </section>

      {/* CATEGORY BLOCKS */}
      <section className="px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col divide-y divide-slate-100">
          {categories.map((cat, idx) => (
            <div key={cat.key} className="py-20 md:py-28">
              <CategoryBlock cat={cat} idx={idx} openKey={openKey} toggle={toggle} />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Komponen Global */}
      <CTA />

    </main>
  );
}