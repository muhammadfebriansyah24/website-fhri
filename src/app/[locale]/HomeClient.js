'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// 1. Import hooks dan fungsi data berita multibahasa
import { useTranslations, useLocale } from 'next-intl';

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
    <section className="relative bg-brand-navy min-h-[85vh] flex items-center pt-24 pb-20 md:pb-44 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-16 relative z-10 w-full">
        <div className="md:w-1/2">
          <span className="text-eyebrow-lg block mb-6">
            {t('Hero.eyebrow')}
          </span>
          <h1 className="text-white text-balance mb-6">
            {t('Hero.title')}
          </h1>
          <p className="text-slate-300 max-w-md mb-8">
            {t('Hero.description')}
          </p>
          <Link 
            href={`/${locale}/about`} 
            className="inline-flex items-center justify-center bg-brand-red text-white px-8 py-3.5 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-700 hover:bg-white hover:text-brand-navy shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            {t('Hero.cta')}
          </Link>
        </div>
        <div className="md:w-1/2 w-full pb-10 md:pb-0">
          <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden relative border border-slate-700/50 group shadow-2xl">
            <Image 
              src="/images/home-hero.jpg" 
              alt="Modern HR Consulting Workspace" 
              fill 
              sizes="(max-width: 768px) 100vw, 50vw" 
              unoptimized={process.env.NODE_ENV === 'development'}
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

function Network({ t, sponsors }) {
  const duplicatedSponsors = [...sponsors, ...sponsors, ...sponsors, ...sponsors];
  const duration = sponsors.length * 5;

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
          animation: scroll ${duration}s linear infinite;
        }
        .marquee-container:hover .animate-scroll {
          animation-play-state: paused;
        }
      `}</style>
      
      <span className="text-eyebrow block mb-6">{t('Network.eyebrow')}</span>
      <h2 className="text-brand-navy mb-16">{t('Network.title')}</h2>
      
      <div className="marquee-container relative max-w-6xl mx-auto overflow-hidden">
        {/* Efek fade kiri & kanan */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        
        <div className="animate-scroll gap-6 py-4">
          {duplicatedSponsors.map((sponsor, index) => (
            <div 
              key={index} 
              className="w-52 h-24 shrink-0 bg-white border border-slate-200 rounded-xl flex items-center justify-center p-2 transition-transform duration-500 ease-out cursor-pointer hover:-translate-y-1"
            >
              <img 
                src={sponsor.logo} 
                alt={`Logo ${sponsor.name}`} 
                className="max-h-full max-w-[85%] object-contain scale-125 grayscale hover:grayscale-0 transition-all duration-300" 
              />
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
        <h2 className="text-white mb-16">{t('News.title')}</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsData.map((news, idx) => {
              const title = locale === 'id' ? news.titleId : news.titleEn;
              const description = locale === 'id' ? news.descriptionId : news.descriptionEn;
              const formattedDate = new Date(news.publishedAt).toLocaleDateString(
                locale === 'id' ? 'id-ID' : 'en-US',
                { day: '2-digit', month: 'long', year: 'numeric' }
              );
              return (
              <div key={idx} className="bg-white rounded-[1.5rem] overflow-hidden border border-gray-100 flex flex-col group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-[16/10] w-full bg-gray-100 overflow-hidden">
                  <Image 
                  src={news.image} 
                  alt={title} 
                  fill 
                  unoptimized 
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" 
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <time className="mb-3 block text-slate-400">
                    <h6 className="text-slate-400">{formattedDate}</h6>
                  </time>
                  <h4 className="text-brand-navy mb-3 line-clamp-2 group-hover:text-brand-red transition-colors">{title}</h4>
                  <p className="text-teaser text-slate-500 mb-6 flex-grow line-clamp-3">{description}</p>
                  
                  <Link href={`/${locale}/newsletter/${news.slug}`} className="text-brand-red text-sm font-bold uppercase tracking-widest hover:text-brand-red/80 transition-colors inline-flex items-center gap-2 mt-auto">
                    {t('News.viewMore')} <span className="transition-transform group-hover:translate-x-1">&gt;</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Programs({ t, locale }) {
  return (
    <section className="bg-white py-12 md:py-28 px-0 md:px-8 flex justify-center overflow-hidden">
      <div className="w-full max-w-[1440px]">
        
        {/* ===== HEADER AREA (Transparan di Mobile, Navy di Desktop) ===== */}
        <div className="relative w-full md:drop-shadow-2xl">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="hidden md:block w-full h-[60px] relative z-10" aria-hidden="true">
            <path d={NAVY_TAB_PATH} fill="#00263C" />
          </svg>
          <div className="bg-transparent md:bg-brand-navy mx-4 md:mx-[5.5%] rounded-none md:rounded-[2.5rem] px-2 md:px-12 pt-4 pb-12 md:pt-4 md:pb-44 text-center relative flex flex-col items-center md:-mt-[2px]">
            <span className="relative z-20 inline-flex items-center text-center px-6 md:px-10 py-2.5 md:py-3 text-[11px] sm:text-sm md:text-eyebrow-lg font-bold tracking-widest uppercase text-brand-red md:text-white rounded-full border-2 md:border-[3px] border-brand-red md:-mt-8 shadow-none md:shadow-sm mb-6 md:mb-6">
              {t('Programs.eyebrow')}
            </span>
            <h2 className="text-brand-navy md:text-white max-w-4xl text-balance mb-4 md:mb-5 px-0 leading-tight md:leading-tight text-3xl md:text-5xl font-bold">
              {t('Programs.title')}
            </h2>
            <p className="text-slate-500 md:text-slate-300 max-w-3xl mx-auto px-0 text-sm sm:text-base leading-relaxed md:leading-relaxed">
              {t('Programs.description')}
            </p>
          </div>
        </div>

        {/* ===== CONTENT AREA (Menyatu di Mobile, Putih di Desktop) ===== */}
        <div className="relative w-full mx-auto mt-0 md:-mt-36 z-10 drop-shadow-none md:drop-shadow-[0_20px_50px_rgba(21,60,86,0.15)]">
          <svg viewBox="0 0 1440 48" preserveAspectRatio="none" className="hidden md:block w-full h-12 relative z-10" aria-hidden="true">
            <path d={WHITE_TAB_PATH} fill="white" />
          </svg>
          <div className="bg-transparent md:bg-white mx-4 md:mx-[5.5%] rounded-none md:rounded-[2.5rem] p-0 md:p-10 shadow-none md:shadow-sm relative z-0 md:-mt-[2px]">
            
            {/* Grid Layanan */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6">
              {programsKeys.map((item, idx) => (
                <div key={idx} className="bg-brand-navy md:bg-white rounded-2xl overflow-hidden border border-transparent md:border-gray-100 flex flex-col group hover:-translate-y-1 shadow-[0_8px_30px_rgb(0,0,0,0.15)] md:shadow-none hover:shadow-2xl transition-all duration-300">
                  <div className="relative aspect-[16/10] w-full bg-gray-100 overflow-hidden">
                    <Image 
                    src={item.image} 
                    alt={t(`ProgramsList.${item.key}.title`)} 
                    fill 
                    unoptimized={process.env.NODE_ENV === 'development'} 
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" 
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-6 md:p-6 flex flex-col flex-grow">
                    <h4 className="mb-3 text-white md:text-brand-navy text-lg md:text-xl font-extrabold group-hover:text-brand-red transition-colors leading-snug">{t(`ProgramsList.${item.key}.title`)}</h4>
                    <p className="text-sm md:text-base text-slate-300 md:text-slate-500 mb-6 flex-grow line-clamp-3 leading-relaxed">{t(`ProgramsList.${item.key}.desc`)}</p>
                    <Link href={`/${locale}${item.link}`} className="text-brand-red text-xs md:text-sm font-bold uppercase tracking-widest hover:text-brand-red/80 transition-colors inline-flex items-center gap-2 mt-auto">
                      {t('Programs.readMore')} <span className="transition-transform group-hover:translate-x-1">&gt;</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Bagian Corporate Events */}
            <div className="mt-16 md:mt-24 text-center pb-8 md:pb-0">
              <h2 className="mb-4 md:mb-6 text-brand-navy px-0 text-2xl md:text-4xl font-bold">{t('CorporateEvents.title')}</h2>
              <p className="text-slate-500 mb-10 md:mb-16 max-w-2xl mx-auto text-sm md:text-base px-0 leading-relaxed">
                {t('CorporateEvents.description')}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6 text-left">
                {eventsKeys.map((event, idx) => (
                  <div key={idx} className="flex flex-col cursor-pointer bg-brand-navy md:bg-white rounded-2xl overflow-hidden border border-transparent md:border-gray-100 p-4 md:p-4 group hover:-translate-y-1 shadow-[0_8px_30px_rgb(0,0,0,0.15)] md:shadow-none hover:shadow-2xl transition-all duration-300">
                    <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden mb-5 bg-gray-100">
                      <Image 
                      src={event.image} 
                      alt={t(`EventsList.${event.key}.title`)} 
                      fill 
                      unoptimized={process.env.NODE_ENV === 'development'} 
                      sizes="(max-width: 768px) 100vw, 33vw" 
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="px-2 flex flex-col flex-grow">
                      <h4 className="mb-3 text-white md:text-brand-navy text-lg md:text-xl font-extrabold group-hover:text-brand-red transition-colors leading-snug">{t(`EventsList.${event.key}.title`)}</h4>
                      <p className="text-sm md:text-base text-slate-300 md:text-slate-500 mb-6 flex-grow line-clamp-2 leading-relaxed">{t(`EventsList.${event.key}.desc`)}</p>
                      <Link href={`/${locale}${event.link}`} className="text-brand-red text-xs md:text-sm font-bold uppercase tracking-widest hover:text-brand-red/80 transition-colors mt-auto inline-flex items-center gap-2">
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
// 3. MAIN CLIENT COMPONENT EXPORT
// ==========================================

export default function HomeClient({ newsData, sponsors, testimonials }) {
  const t = useTranslations('HomePage');
  const locale = useLocale();

  return (
    <main className="w-full overflow-hidden bg-white selection:bg-brand-red selection:text-white">
      <Hero t={t} locale={locale} />
      <Network t={t} sponsors={sponsors} />
      <Testimonial items={testimonials} />
      <News t={t} locale={locale} newsData={newsData} />
      <Programs t={t} locale={locale} />
      <CTA />
    </main>
  );
}