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
  const [isShareOpen, setIsShareOpen] = useState(false);

  const handleShareAction = (platform) => {
    const url = window.location.href;
    
    if (platform === 'whatsapp') {
      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(article.title + ' - ' + url)}`, '_blank');
    } else if (platform === 'linkedin') {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
    } else if (platform === 'instagram') {
      // Instagram tidak punya Web Share API URL, jadi kita salin link lalu buka IG
      navigator.clipboard.writeText(url);
      alert(locale === 'id' ? 'Tautan berhasil disalin! Silakan buka Instagram untuk membagikannya.' : 'Link copied successfully! Open Instagram to share it.');
      window.open('https://www.instagram.com/', '_blank');
    }
    setIsShareOpen(false);
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
            {/* PERBAIKAN: Komentar dipindah ke luar tag iframe */}
            <iframe
              className="w-full h-full"
              src="https://www.instagram.com/reel/DbfDvZ_TK3h/embed/"
              frameBorder="0"
              scrolling="no"
              allowTransparency="true"
              allow="encrypted-media"
            ></iframe>
          </div>
        </div>

        {/* 4. FOLLOW US ON INSTAGRAM */}
        <a
          href="https://www.instagram.com/firsthrindonesia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
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

      <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 relative">
        <h6 className="text-brand-navy">
          {t('publishedBy')}
        </h6>
        
        {/* 5. SHARE BUTTON */}
        <button
          onClick={() => setIsShareOpen(true)}
          className="group inline-flex items-center gap-3 pl-8 pr-2 py-2 font-bold text-sm rounded-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] uppercase tracking-wide bg-slate-100 text-brand-navy hover:bg-brand-red hover:text-white shadow-[0_10px_25px_rgba(0,0,0,0.06)]"
        >
          {t('shareArticle')}
          <span className="flex items-center justify-center w-8 h-8 rounded-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] bg-brand-navy/5 group-hover:bg-white/15">
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
          </span>
        </button>

        {/* MODAL SHARE POPUP */}
        {isShareOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm transition-opacity">
            <div className="bg-white w-full max-w-sm rounded-[2rem] p-6 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
              <button 
                onClick={() => setIsShareOpen(false)}
                className="absolute top-5 right-5 text-slate-400 hover:text-brand-red transition-colors w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-red-50"
              >
                ✕
              </button>
              
              <h3 className="text-xl font-bold text-brand-navy mb-6 text-center">
                {locale === 'id' ? 'Bagikan Artikel' : 'Share Article'}
              </h3>
              
              <div className="flex flex-col gap-3">
                {/* WhatsApp */}
                <button 
                  onClick={() => handleShareAction('whatsapp')}
                  className="flex items-center justify-between w-full p-4 rounded-2xl bg-[#E8FADF] hover:bg-[#D1F4C3] text-[#128C7E] font-bold transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                    WhatsApp
                  </span>
                </button>
                
                {/* LinkedIn */}
                <button 
                  onClick={() => handleShareAction('linkedin')}
                  className="flex items-center justify-between w-full p-4 rounded-2xl bg-[#EBF4FA] hover:bg-[#D5E8F5] text-[#0A66C2] font-bold transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    LinkedIn
                  </span>
                </button>

                {/* Instagram (Copy Link & Redirect) */}
                <button 
                  onClick={() => handleShareAction('instagram')}
                  className="flex items-center justify-between w-full p-4 rounded-2xl bg-[#FDE8F3] hover:bg-[#FAD1E6] text-[#E1306C] font-bold transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                    Instagram
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
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
      <section className="relative bg-brand-navy flex items-center px-6 md:px-12 overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-[1440px] w-full mx-auto relative z-10 px-0 lg:px-8">
          <span className="text-eyebrow-lg text-brand-red block mb-8">
            {t('featured')}
          </span>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
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
                {highlightedNews.publishedAt}
              </div>
              <h1 className="text-white mb-6 text-balance text-4xl lg:text-5xl font-bold leading-tight">
                {highlightedNews.title}
              </h1>
              <p className="text-slate-300 mb-10 max-w-lg text-lg">
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

            <div className="lg:col-span-7 relative w-full aspect-[4/3] lg:aspect-[16/10] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group">
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
                  <p className="text-teaser mb-6 flex-grow line-clamp-3">
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