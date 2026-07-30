'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { useLocale } from 'next-intl';
import { getTipsData } from '@/components/tipsData';
import CTA from '@/components/CTA';

function TipRow({ tip, accent, index, isOpen, onToggle, isLast }) {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="relative w-full flex items-start gap-5 md:gap-7 text-left py-7 md:py-8 cursor-pointer group"
      >
        {/* Dot penanda di atas garis spine */}
        <span className="relative z-10 shrink-0 mt-2">
          <span
            className="block w-2.5 h-2.5 rounded-full ring-4 ring-white transition-colors duration-500"
            style={{ backgroundColor: isOpen ? accent : '#CBD5E1' }}
          />
        </span>

        <span
          className="text-base md:text-lg font-bold tabular-nums tracking-tight mt-1 shrink-0 transition-colors duration-500"
          style={{ color: isOpen ? accent : '#94a3b8' }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>

        <div className="flex-1">
          <h4
            className="tracking-tight transition-colors duration-500"
            style={{ color: isOpen ? accent : 'var(--color-brand-navy)' }}
          >
            {tip.title}
          </h4>
          <p className={`text-base md:text-lg leading-relaxed text-slate-500 mt-3 max-w-xl transition-all duration-500 ${isOpen ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
            {tip.teaser}
          </p>
        </div>

        <span
          className="shrink-0 mt-2 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
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
          <div className="pl-[3.25rem] md:pl-[3.75rem] pb-9 pr-4 max-w-3xl">
            <p>{tip.body}</p>
            <p
              className="mt-6 text-sm md:text-base font-bold uppercase tracking-wide"
              style={{ color: accent }}
            >
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
          <div className="flex items-center gap-3 mb-5">
          <span className="text-xl font-bold tracking-normal" style={{ color: cat.accent }}>
            {String(idx + 1).padStart(2, '0')}
          </span>
          <span className="text-eyebrow-lg" style={{ color: cat.accent }}>
            {cat.label}
          </span>
        </div>

        <h2 className="text-brand-navy text-balance tracking-tight">
          {cat.intro}
        </h2>

        {/* Timeline spine — garis vertikal tipis menyambung semua tips */}
        <div className="mt-14 relative">
          <div
            className="absolute left-[4px] top-4 bottom-4 w-px bg-slate-200"
            aria-hidden="true"
          />
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

      {/* HERO — tidak diubah */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-brand-navy px-6 md:px-12 overflow-hidden pt-20 md:pt-0">
        <div className="absolute inset-0">
          <Image
            src="/images/tthr-hero.jpg"
            alt="Calm, focused workplace"
            fill
            unoptimized={process.env.NODE_ENV === 'development'}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-brand-navy/80" />
        </div>

        <div className="max-w-3xl mx-auto text-center relative z-10 -mt-12 md:-mt-20">
          <span className="text-eyebrow-lg block mb-6 drop-shadow-md">
            {data.hero.eyebrow}
          </span>
          <h1 className="text-white text-balance mb-6">
            {data.hero.title1}{' '}
            <br className="hidden md:block" />
            <span className="text-gradient-red text-transparent bg-clip-text">
              First HR Indonesia
            </span>
            <br className="hidden md:block" />
            {data.hero.subtitle}
          </h1>
          <p className="text-slate-300 max-w-xl mx-auto">
            {data.hero.description}
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-4 text-slate-400 z-10">
          <h6>Scroll</h6>
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