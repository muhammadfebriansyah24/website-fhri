'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

export default function NewsletterClient({ newsData }) {
  const locale = useLocale();
  const t = useTranslations('NewsletterPage');

  if (!newsData || newsData.length === 0) {
    return (
      <main className="bg-white min-h-screen flex items-center justify-center">
        <p className="text-slate-500">Belum ada berita.</p>
      </main>
    );
  }

  // PRD 6.2: featured article, fallback to latest
  const highlightedNews = newsData.find((n) => n.featured) || newsData[0];
  const latestNewsList = newsData.filter((n) => n !== highlightedNews);

  // Helper: locale-aware field access
  const t_ = (item, field) => locale === 'id' ? item[`${field}Id`] : item[`${field}En`];
  const fmtDate = (iso) => new Date(iso).toLocaleDateString(
    locale === 'id' ? 'id-ID' : 'en-US',
    { day: '2-digit', month: 'long', year: 'numeric' }
  );

  return (
    <main className="bg-white min-h-screen selection:bg-brand-red selection:text-white">
      {/* HERO SECTION - HIGHLIGHTED NEWS */}
      <section className="relative bg-brand-navy flex items-center px-6 md:px-12 overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-[1440px] w-full mx-auto relative z-10 px-0 lg:px-8">
          <span className="text-eyebrow-lg text-brand-red block mb-8">
            {t('featured')}
          </span>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* ⬆️ diganti dari items-center jadi items-start */}
            <div className="lg:col-span-5">
              <div className="text-eyebrow text-slate-400 mb-4 flex items-center">
                <div 
                  className="w-4 h-4 mr-2 bg-current shrink-0"
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
                {fmtDate(highlightedNews.publishedAt)}
              </div>
              <h1 className="text-white mb-6 text-balance text-4xl lg:text-5xl font-bold leading-tight">
                {t_(highlightedNews, 'title')}
              </h1>
              <p className="text-slate-300 mb-10 max-w-lg text-lg">
                {t_(highlightedNews, 'description')}
              </p>
              <Link 
                href={`/${locale}/newsletter/${highlightedNews.slug}`}
                className="inline-flex items-center justify-center bg-brand-red hover:bg-[#a82222] text-white font-bold px-8 py-3.5 rounded-full transition-all duration-300 shadow-[0_10px_25px_rgba(220,38,38,0.3)] hover:-translate-y-0.5 uppercase tracking-wide text-sm gap-2"
              >
                {t('readFullStory')}
                <div 
                  className="w-4 h-4 bg-current shrink-0"
                  style={{
                    WebkitMaskImage: `url('/icons/ic_arrow-right.svg')`,
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskImage: `url('/icons/ic_arrow-right.svg')`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                  }}
                />
              </Link>
            </div>

            <div className="lg:col-span-7 relative w-full aspect-[4/3] lg:aspect-[16/10] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group">
              <Image 
                src={highlightedNews.image} 
                alt={t_(highlightedNews, 'title')} 
                fill 
                unoptimized={process.env.NODE_ENV === 'development'}
                className="object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* LATEST NEWS GRID */}
      <section className="py-24 px-6 md:px-12 bg-slate-50 min-h-[50vh]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 border-b border-slate-200 pb-4 flex items-end justify-between">
            <h3 className="text-brand-navy mb-0 font-bold uppercase">{t('latestArticles')}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestNewsList.map((news) => (
              <div key={news.id} className="bg-white rounded-[1.5rem] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 flex flex-col group hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
                  <Image 
                    src={news.image} 
                    alt={t_(news, 'title')} 
                    fill 
                    unoptimized={process.env.NODE_ENV === 'development'}
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <time className="mb-3 block text-slate-400">
                    <h6 className="text-slate-400">{fmtDate(news.publishedAt)}</h6>
                  </time>
                  <h4 className="mb-3 line-clamp-2 group-hover:text-brand-red transition-colors text-brand-navy">
                    {t_(news, 'title')}
                  </h4>
                  <p className="text-teaser mb-6 flex-grow line-clamp-3">
                    {t_(news, 'description')}
                  </p>
                  <Link 
                    href={`/${locale}/newsletter/${news.slug}`} 
                    className="mt-auto inline-flex items-center text-brand-red text-sm font-bold uppercase tracking-widest hover:text-[#a82222] transition-colors gap-2"
                  >
                    {t('readMore')} 
                    <span className="group-hover:translate-x-1 transition-transform flex items-center justify-center">
                      <div 
                        className="w-4 h-4 bg-current shrink-0"
                        style={{
                          WebkitMaskImage: `url('/icons/ic_arrow-right.svg')`,
                          WebkitMaskSize: 'contain',
                          WebkitMaskRepeat: 'no-repeat',
                          WebkitMaskPosition: 'center',
                          maskImage: `url('/icons/ic_arrow-right.svg')`,
                          maskSize: 'contain',
                          maskRepeat: 'no-repeat',
                          maskPosition: 'center',
                        }}
                      />
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}