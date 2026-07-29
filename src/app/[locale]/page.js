'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// 1. Import hooks dan fungsi data berita multibahasa
import { useTranslations, useLocale } from 'next-intl';
import { getNewsData } from '@/components/newsData';

import Testimonial from '@/components/Testimonial';
import CTA from '@/components/CTA';

// ==========================================
// 1. DATA & CONSTANTS
// ==========================================

const programsKeys = [
  { key: 'support', image: '/images/home-bss.jpg', link: '/business/business-support' },
  { key: 'hc', image: '/images/home-hcs.jpg', link: '/business/humancapital-solutions' },
  { key: 'payroll', image: '/images/home-po.jpg', link: '/business/payroll' },
  { key: 'assessment', image: '/images/home-at.jpg', link: '/business/assessment-tools' },
  { key: 'bootcamp', image: '/images/home-hrbc.jpg', link: '/business/hr-bootcamp' },
  { key: 'ir', image: '/images/home-irla.jpg', link: '/business/industrial-relations' },
  { key: 'hse', image: '/images/home-hse.jpg', link: '/business/hse' },
  { key: 'certification', image: '/images/home-pci.jpg', link: '/business/lsp' },
];

const eventsKeys = [
  { key: 'townhall', image: '/images/home-thm.jpg', link: '/business/corporate-culture' },
  { key: 'csr', image: '/images/home-csr.jpg', link: '/business/corporate-culture' },
  { key: 'outbound', image: '/images/home-obt.jpg', link: '/business/corporate-culture' },
];

const NAVY_TAB_PATH = 'M80 59.313 L195.047 59.313 C205.776 59.313 215.308 52.4674 218.736 42.3009 L227.264 17.012 C230.692 6.8456 240.224 0 250.953 0 H1189.05 C1199.78 0 1209.31 6.8456 1212.74 17.012 L1221.26 42.3009 C1224.69 52.4674 1234.22 59.313 1244.95 59.313 L1362 59.313 Z';
const WHITE_TAB_PATH = 'M80 47.664 L196.378 47.664 C206.448 47.664 215.535 41.623 219.431 32.337 L226.569 15.327 C230.465 6.042 239.552 0 249.622 0 H1190.38 C1200.45 0 1209.54 6.041 1213.43 15.327 L1220.57 32.337 C1224.46 41.623 1233.55 47.664 1243.62 47.664 L1362 47.664 Z';

// ==========================================
// 2. SECTIONS 
// ==========================================

function Hero({ t, locale }) {
  return (
    <section className="relative bg-brand-navy min-h-[85vh] flex items-center pt-24 pb-36 md:pb-44 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-16 relative z-10 w-full">
        <div className="md:w-1/2">
          <span className="text-eyebrow-lg text-brand-red block mb-4 md:mb-5">
            {t('Hero.eyebrow')}
          </span>
          <h1 className="text-white text-balance">
            {t('Hero.title')}
          </h1>
          <p className="mt-6 md:mt-8 text-slate-300 max-w-md">
            {t('Hero.description')}
          </p>
          <Link 
            href={`/${locale}/about`} 
            className="mt-8 inline-flex items-center justify-center bg-brand-red text-white px-8 py-3.5 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-700 hover:bg-white hover:text-brand-navy shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            {t('Hero.cta')}
          </Link>
        </div>
        <div className="md:w-1/2 w-full">
          <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden relative border border-slate-700/50 group shadow-2xl">
            <Image 
              src="/images/home-hero.jpg" 
              alt="Modern HR Consulting Workspace" 
              fill 
              sizes="(max-width: 768px) 100vw, 50vw" 
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105" 
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full leading-none pointer-events-none">
        <svg viewBox="0 0 1440 120" className="w-full h-[70px] md:h-[110px]" preserveAspectRatio="none">
          <path fill="#FFFFFF" d="M0,120 C400,0 1040,0 1440,120 L1440,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
}

function Network({ t }) {
  const partnerLogos = [
    { name: 'NEXUS CORP', svg: <svg className="h-7 w-auto fill-current" viewBox="0 0 140 30" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="15" r="10" fill="#00263C" /><path d="M10 15 L15 10 L20 15 L15 20 Z" fill="#DC2626" /><text x="32" y="21" fontFamily="sans-serif" fontSize="15" fontWeight="bold" fill="#00263C">NEXUS</text></svg> },
    { name: 'VERTEX', svg: <svg className="h-7 w-auto fill-current" viewBox="0 0 140 30" xmlns="http://www.w3.org/2000/svg"><polygon points="15,5 25,25 5,25" fill="#DC2626" /><polygon points="15,12 21,23 9,23" fill="#ffffff" /><text x="32" y="21" fontFamily="sans-serif" fontSize="15" fontWeight="bold" fill="#00263C">VERTEX</text></svg> },
    { name: 'GLOBAL HR', svg: <svg className="h-7 w-auto fill-current" viewBox="0 0 150 30" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="15" r="11" stroke="#00263C" strokeWidth="3" fill="none" /><path d="M4 15 H26 M15 4 A11 11 0 0 0 15 26" stroke="#DC2626" strokeWidth="2" fill="none" /><text x="32" y="21" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill="#00263C">GLOBAL HR</text></svg> },
    { name: 'APEX GROUP', svg: <svg className="h-7 w-auto fill-current" viewBox="0 0 140 30" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="15" width="6" height="10" fill="#00263C" /><rect x="13" y="10" width="6" height="15" fill="#00263C" /><rect x="21" y="5" width="6" height="20" fill="#DC2626" /><text x="34" y="21" fontFamily="sans-serif" fontSize="15" fontWeight="bold" fill="#00263C">APEX</text></svg> },
    { name: 'ELEVATE', svg: <svg className="h-7 w-auto fill-current" viewBox="0 0 150 30" xmlns="http://www.w3.org/2000/svg"><path d="M5 22 L15 8 L25 22 Z" fill="#DC2626" /><path d="M11 22 L15 15 L19 22 Z" fill="#00263C" /><text x="32" y="21" fontFamily="sans-serif" fontSize="15" fontWeight="bold" fill="#00263C">ELEVATE</text></svg> },
    { name: 'SYNERGY', svg: <svg className="h-7 w-auto fill-current" viewBox="0 0 150 30" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="15" r="6" fill="#00263C" /><circle cx="22" cy="15" r="6" fill="#DC2626" opacity="0.8" /><text x="34" y="21" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill="#00263C">SYNERGY</text></svg> }
  ];
  const duplicatedPartners = [...partnerLogos, ...partnerLogos];

  return (
    <section className="bg-white py-20 md:py-28 px-6 md:px-12 text-center overflow-hidden">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 25s linear infinite;
        }
        .marquee-container:hover .animate-scroll {
          animation-play-state: paused;
        }
      `}</style>
      <span className="text-eyebrow block mb-5 md:mb-6">{t('Network.eyebrow')}</span>
      <h2 className="text-brand-navy">{t('Network.title')}</h2>
      
      <div className="marquee-container relative max-w-6xl mx-auto mt-8 md:mt-10 overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        <div className="animate-scroll gap-6 py-4">
          {duplicatedPartners.map((partner, index) => (
            <div key={index} className="w-48 h-20 shrink-0 bg-white border border-gray-200 rounded-xl flex items-center justify-center p-4 transition-transform duration-500 ease-out cursor-pointer hover:-translate-y-1">
              {partner.svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function News({ t, locale, newsData }) {
  return (
    <section className="bg-brand-navy py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white mb-8 md:mb-10">{t('News.title')}</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsData.map((news, idx) => (
            <div key={idx} className="bg-white rounded-[1.5rem] overflow-hidden border border-gray-100 flex flex-col group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="relative aspect-[16/10] w-full bg-gray-100 overflow-hidden">
                <Image src={news.image} alt={news.title} fill unoptimized sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover object-center transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3 flex items-center">
                  <div 
                    className="w-4 h-4 mr-1.5 bg-current shrink-0"
                    style={{
                      WebkitMaskImage: `url('/icons/ic_calendar-outline.svg')`,
                      WebkitMaskSize: 'contain',
                      WebkitMaskRepeat: 'no-repeat',
                      WebkitMaskPosition: 'center',
                      maskImage: `url('/icons/ic_calendar-outline.svg')`,
                      maskSize: 'contain',
                      maskRepeat: 'no-repeat',
                      maskPosition: 'center',
                    }}
                  />
                  {news.publishedAt}
                </div>
                <h4 className="text-brand-navy mb-3 line-clamp-2 group-hover:text-brand-red transition-colors">{news.title}</h4>
                <p className="text-slate-500 mb-6 flex-grow line-clamp-3 leading-relaxed">{news.description}</p>
                
                <Link href={`/${locale}/newsletter?id=${news.id}`} className="text-brand-red text-sm font-bold uppercase tracking-widest hover:text-[#a82222] transition-colors inline-flex items-center gap-2 mt-auto">
                  {t('News.viewMore')} <span className="transition-transform group-hover:translate-x-1">&gt;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Programs({ t, locale }) {
  return (
    <section className="bg-white py-20 md:py-28 px-2 md:px-8 flex justify-center overflow-hidden">
      <div className="w-full max-w-[1440px]">
        {/* ===== FOLDER NAVY (luar) ===== */}
        <div className="relative w-full drop-shadow-xl md:drop-shadow-2xl">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="hidden md:block w-full h-[60px] relative z-10" aria-hidden="true">
            <path d={NAVY_TAB_PATH} fill="#00263C" />
          </svg>
          <div className="bg-brand-navy mx-4 md:mx-[5.5%] rounded-[2rem] md:rounded-[2.5rem] px-5 md:px-12 pt-10 pb-32 md:pt-4 md:pb-44 text-center relative flex flex-col items-center md:-mt-[2px]">
            {/* Pill Eyebrow sesuai request pertama Anda */}
            <span className="relative z-20 inline-flex items-center px-6 md:px-10 py-2 md:py-3 text-eyebrow-lg text-white rounded-full border-2 md:border-[3px] border-brand-red md:-mt-8 shadow-sm">
              {t('Programs.eyebrow')}
            </span>
            <h2 className="mt-6 text-white max-w-4xl text-balance">
              {t('Programs.title')}
            </h2>
            <p className="mt-6 md:mt-8 text-slate-300 max-w-4xl mx-auto">
              {t('Programs.description')}
            </p>
          </div>
        </div>

        {/* ===== FOLDER PUTIH (dalam) ===== */}
        <div className="relative w-full mx-auto -mt-20 md:-mt-36 z-10 drop-shadow-[0_15px_40px_rgba(21,60,86,0.12)] md:drop-shadow-[0_20px_50px_rgba(21,60,86,0.15)]">
          <svg viewBox="0 0 1440 48" preserveAspectRatio="none" className="hidden md:block w-full h-12 relative z-10" aria-hidden="true">
            <path d={WHITE_TAB_PATH} fill="white" />
          </svg>
          <div className="bg-white mx-4 md:mx-[5.5%] rounded-[2rem] md:rounded-[2.5rem] p-5 md:p-10 shadow-sm relative z-0 md:-mt-[2px]">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {programsKeys.map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-gray-100 flex flex-col group hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                  <div className="relative aspect-[16/10] w-full bg-gray-100 overflow-hidden">
                    <Image src={item.image} alt={t(`ProgramsList.${item.key}.title`)} fill unoptimized sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover object-center transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h4 className="mb-2 text-brand-navy group-hover:text-brand-red transition-colors">{t(`ProgramsList.${item.key}.title`)}</h4>
                    <p className="text-slate-500 mb-6 flex-grow">{t(`ProgramsList.${item.key}.desc`)}</p>
                    <Link href={`/${locale}${item.link}`} className="text-brand-red text-sm font-bold uppercase tracking-widest hover:text-[#a82222] transition-colors inline-flex items-center gap-2 mt-auto">
                      {t('Programs.readMore')} <span className="transition-transform group-hover:translate-x-1">&gt;</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-24 text-center">
              <h2 className="mb-6 text-brand-navy">{t('CorporateEvents.title')}</h2>
              <p className="text-slate-500 mb-10 max-w-2xl mx-auto">
                {t('CorporateEvents.description')}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                {eventsKeys.map((event, idx) => (
                  <div key={idx} className="flex flex-col cursor-pointer bg-white rounded-2xl overflow-hidden border border-gray-100 p-4 group hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                    <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden mb-5 bg-gray-100">
                      <Image src={event.image} alt={t(`EventsList.${event.key}.title`)} fill unoptimized sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-center transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="px-2 flex flex-col flex-grow">
                      <h4 className="mb-2 text-brand-navy group-hover:text-brand-red transition-colors">{t(`EventsList.${event.key}.title`)}</h4>
                      <p className="text-slate-500 mb-5 flex-grow">{t(`EventsList.${event.key}.desc`)}</p>
                      <Link href={`/${locale}${event.link}`} className="text-brand-red text-sm font-bold uppercase tracking-widest hover:text-[#a82222] transition-colors mt-auto inline-flex items-center gap-2">
                        {t('Programs.readMore')} <span className="transition-transform group-hover:translate-x-1">&gt;</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 3. MAIN PAGE EXPORT
// ==========================================

export default function Home() {
  const t = useTranslations('HomePage');
  const locale = useLocale();

  // Ambil data berita dinamis sesuai bahasa aktif (en atau id)
  const newsData = getNewsData(locale);

  return (
    <main className="w-full overflow-hidden bg-white selection:bg-brand-red selection:text-white">
      <Hero t={t} locale={locale} />
      <Network t={t} />
      <Testimonial />
      <News t={t} locale={locale} newsData={newsData} />
      <Programs t={t} locale={locale} />
      <CTA />
    </main>
  );
}