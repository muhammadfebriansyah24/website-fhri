'use client';

import React, { Suspense, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { getNewsData } from '@/components/newsData';

// ==========================================
// 2. SUB-COMPONENTS
// ==========================================

function ArticleReader({ article, locale, t }) {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <article className="max-w-4xl mx-auto px-6 pt-6 pb-20 md:pt-10 md:pb-32 min-h-[70vh]">
      {/* 1. BACK TO NEWS*/}
      <Link href={`/${locale}/newsletter`} className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-brand-red transition mb-10 group">
        <div 
          className="w-4 h-4 mr-2 bg-current shrink-0 transform rotate-180 group-hover:-translate-x-1 transition-transform"
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
        {t('backToNews')}
      </Link>

      <header className="mb-10 text-center md:text-left">
        {/* 2. IKON KALENDER */}
        <time className="mb-4 flex items-center justify-center md:justify-start text-slate-400">
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
          <h6 className="text-slate-400">{article.publishedAt}</h6>
        </time>
        <h2 className="text-brand-navy mb-6 text-balance">
          {article.title}
        </h2>
      </header>

      <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden mb-12 shadow-xl border border-slate-100">
        <Image 
          src={article.image} 
          alt={article.title} 
          fill
          unoptimized={process.env.NODE_ENV === 'development'}
          className="object-cover object-center"
        />
      </div>

      <blockquote 
        className="prose prose-lg max-w-none text-slate-600 leading-relaxed prose-p:mb-6 prose-strong:text-brand-navy prose-a:text-brand-red"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
      
      {/* INSTAGRAM REEL EMBED */}
      <div className="my-16 relative p-8 md:p-14 bg-brand-navy rounded-[2.5rem] overflow-hidden flex flex-col items-center text-center">
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-brand-navy/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-brand-red/10 blur-3xl pointer-events-none" />

        {/* 3. IKON INSTAGRAM */}
        <span className="relative z-10 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest bg-white/10 border border-white/10 backdrop-blur-md text-white mb-6">
          <div 
            className="w-3 h-3 bg-current shrink-0"
            style={{
              WebkitMaskImage: `url('/icons/ic_instagram-outline.svg')`,
              WebkitMaskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center',
              maskImage: `url('/icons/ic_instagram-outline.svg')`,
              maskSize: 'contain',
              maskRepeat: 'no-repeat',
              maskPosition: 'center',
            }}
          />
          {t('fromInstagram')}
        </span>

        <h4 className="relative z-10 text-white mb-3">{t('seeInAction')}</h4>
        <p className="text-slate-300 relative z-10 mb-10 max-w-md">
          {t('watchReelDesc')}
        </p>

        <div className="relative z-10 group">
          <div className="absolute -inset-1.5 rounded-[2.25rem] bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 opacity-80 blur-[2px] transition-opacity duration-700 group-hover:opacity-100" />
          <div className="relative w-full max-w-[300px] aspect-[9/16] bg-white rounded-[2rem] overflow-hidden shadow-[0_30px_70px_-20px_rgba(0,0,0,0.5)] border-4 border-white">
            <iframe
              className="w-full h-full"
              src="https://www.instagram.com/reel/DakiZyCxcAh/embed"
              frameBorder="0"
              scrolling="no"
            ></iframe>
          </div>
        </div>

        {/* 4. FOLLOW US ON INSTAGRAM */}
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 group/link inline-flex items-center gap-2 mt-8 text-sm font-bold text-white transition-colors duration-500 hover:text-brand-red"
        >
          {t('followInstagram')}
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover/link:translate-x-1">
            <div 
              className="w-3 h-3 bg-current shrink-0"
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
        </a>
      </div>

      <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
        <h6 className="text-brand-navy">
          {t('publishedBy')}
        </h6>
        
        {/* 5. SHARE*/}
        <button
          onClick={handleShare}
          className={`group inline-flex items-center gap-3 pl-8 pr-2 py-2 font-bold text-sm rounded-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] uppercase tracking-wide ${
            copySuccess
              ? 'bg-green-500 text-white shadow-[0_10px_25px_rgba(34,197,94,0.3)]'
              : 'bg-slate-100 text-brand-navy hover:bg-brand-red hover:text-white shadow-[0_10px_25px_rgba(0,0,0,0.06)]'
          }`}
        >
          {copySuccess ? t('linkCopied') : t('shareArticle')}
          <span className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${copySuccess ? 'bg-white/20' : 'bg-brand-navy/5 group-hover:bg-white/15'}`}>
            {copySuccess ? (
              // Ikon Check
              <div 
                className="w-4 h-4 bg-current shrink-0"
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
            ) : (
              // Ikon Share
              <div 
                className="w-4 h-4 bg-current shrink-0"
                style={{
                  WebkitMaskImage: `url('/icons/ic_share-outline.svg')`,
                  WebkitMaskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center',
                  maskImage: `url('/icons/ic_share-outline.svg')`,
                  maskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'center',
                }}
              />
            )}
          </span>
        </button>
      </div>
    </article>
  );
}

// ==========================================
// 3. MAIN PAGE HANDLER
// ==========================================
function NewsContentWrapper() {
  const locale = useLocale();
  const t = useTranslations('NewsletterPage');
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  const newsData = getNewsData(locale);

  if (id) {
    const article = newsData.find((item) => item.id === id);
    if (article) {
      return <ArticleReader article={article} locale={locale} t={t} />;
    }
  }

  const highlightedNews = newsData[0]; 
  const latestNewsList = newsData.slice(1); 

  return (
    <>
      {/* HERO SECTION - HIGHLIGHTED NEWS */}
      <section className="relative bg-brand-navy min-h-[85vh] flex items-center px-6 md:px-12 overflow-hidden py-16 md:py-0">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10 -translate-y-8 md:-translate-y-10">
          <span className="text-eyebrow-lg text-brand-red block mb-8">
            {t('featured')}
          </span>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
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
                {highlightedNews.publishedAt}
              </div>
              <h1 className="text-white mb-6 text-balance">
                {highlightedNews.title}
              </h1>
              <p className="text-slate-300 mb-10 max-w-lg">
                {highlightedNews.description}
              </p>
              <Link 
                href={`/${locale}/newsletter?id=${highlightedNews.id}`}
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

            <div className="relative w-full aspect-[4/3] lg:aspect-video rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group">
              <Image 
                src={highlightedNews.image} 
                alt={highlightedNews.title} 
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
                    alt={news.title} 
                    fill 
                    unoptimized={process.env.NODE_ENV === 'development'}
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <time className="mb-3 block text-slate-400">
                    <h6 className="text-slate-400">{news.publishedAt.split('•')[0].trim()}</h6>
                  </time>
                  <h4 className="mb-3 line-clamp-2 group-hover:text-brand-red transition-colors text-brand-navy">
                    {news.title}
                  </h4>
                  <p className="text-teaser  mb-6 flex-grow line-clamp-3">
                    {news.description}
                  </p>
                  <Link 
                    href={`/${locale}/newsletter?id=${news.id}`} 
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
    </>
  );
}

export default function NewsletterPage() {
  return (
    <main className="bg-white min-h-screen selection:bg-brand-red selection:text-white">
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center text-brand-navy font-bold text-xl uppercase tracking-widest">
          <div className="flex flex-col items-center gap-4">
             <div className="w-8 h-8 border-4 border-brand-red border-t-transparent rounded-full animate-spin"></div>
             Loading Content...
          </div>
        </div>
      }>
        <NewsContentWrapper />
      </Suspense>
    </main>
  );
}