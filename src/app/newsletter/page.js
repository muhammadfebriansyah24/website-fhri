'use client';

import React, { Suspense, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

// ==========================================
// 1. IMPORT NEWS DATA DARI FILE GLOBAL
// ==========================================
// Memanggil data dari file yang sudah kita buat agar sinkron dengan halaman Home
import { newsData } from '@/components/newsData';

// ==========================================
// 2. SUB-COMPONENTS
// ==========================================

// Komponen Pembaca Artikel (Mode Detail)
function ArticleReader({ article }) {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000); // Hilang setelah 2 detik
  };

  return (
    <article className="max-w-4xl mx-auto px-6 pt-6 pb-20 md:pt-10 md:pb-32 min-h-[70vh]">
      {/* Back Button */}
      <Link href="/newsletter" className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-brand-red transition mb-10 group">
        <svg className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
        Back to News Hub
      </Link>

      {/* Article Header */}
      <header className="mb-10 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start text-slate-400 text-sm font-semibold uppercase tracking-widest mb-4">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
          {article.publishedAt}
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-brand-navy leading-tight mb-6">
          {article.title}
        </h1>
      </header>

      {/* Main Cover Image */}
      <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden mb-12 shadow-xl border border-slate-100">
        <Image 
          src={article.image} 
          alt={article.title} 
          fill
          unoptimized
          className="object-cover object-center"
        />
      </div>

      {/* Text Content */}
      <div 
        className="prose prose-lg max-w-none text-slate-600 leading-relaxed prose-p:mb-6 prose-strong:text-brand-navy prose-a:text-brand-red"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
      
      {/* ======================================================== */}
      {/* INSTAGRAM REEL EMBED DI DALAM ARTIKEL */}
      {/* ======================================================== */}
      <div className="my-16 p-8 md:p-12 bg-slate-50 rounded-[2.5rem] border border-slate-100 flex flex-col items-center text-center">
        <h4 className="text-brand-navy font-bold text-2xl mb-2">See It In Action</h4>
        <p className="text-slate-500 mb-8 max-w-md text-[15px] leading-relaxed">Watch this short highlight reel from our Instagram to dive deeper into the experience.</p>
        
        {/* Iframe Instagram Reels */}
        <div className="w-full max-w-[320px] aspect-[9/16] bg-white rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
          <iframe 
            className="w-full h-full" 
            src="https://www.instagram.com/reel/DakiZyCxcAh/embed" 
            frameBorder="0" 
            scrolling="no" 
            allowTransparency="true"
          ></iframe>
        </div>
      </div>
      
      {/* Article Footer & Share Button */}
      <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm font-bold text-brand-navy uppercase tracking-widest">
          Published by FHRI Editorial Team
        </div>
        <button 
          onClick={handleShare}
          className={`px-8 py-3 font-bold text-sm rounded-full transition-all shadow-md ${copySuccess ? 'bg-green-500 text-white shadow-green-500/30' : 'bg-slate-100 text-brand-navy hover:bg-brand-red hover:text-white hover:shadow-brand-red/30'}`}
        >
          {copySuccess ? 'Link Copied!' : 'Share Article'}
        </button>
      </div>
    </article>
  );
}


// ==========================================
// 3. MAIN PAGE HANDLER
// ==========================================
function NewsContentWrapper() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  // Jika ada parameter ID di URL, tampilkan mode Baca Artikel
  if (id) {
    const article = newsData.find((item) => item.id === id);
    if (article) {
      return <ArticleReader article={article} />;
    }
  }

  // JIKA TIDAK ADA ID, TAMPILKAN HALAMAN UTAMA (NEWS HUB)
  const highlightedNews = newsData[0]; // Ambil berita pertama sebagai highlight
  const latestNewsList = newsData.slice(1); // Sisanya masuk ke daftar berita bawah

  return (
    <>
      {/* HERO SECTION - HIGHLIGHTED NEWS */}
      <section className="relative bg-brand-navy pt-32 pb-24 md:pt-40 md:pb-32 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-eyebrow text-brand-red inline-block mb-6 uppercase tracking-widest font-bold text-sm">
            Featured Highlight
          </span>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Kiri: Teks Highlight */}
            <div>
              <div className="flex items-center text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                {highlightedNews.publishedAt}
              </div>
              <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-6">
                {highlightedNews.title}
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-lg">
                {highlightedNews.description}
              </p>
              <Link 
                href={`/newsletter?id=${highlightedNews.id}`}
                className="inline-flex items-center justify-center bg-brand-red hover:bg-[#a82222] text-white font-bold px-8 py-3.5 rounded-full transition-all duration-300 shadow-[0_10px_25px_rgba(220,38,38,0.3)] hover:-translate-y-0.5 uppercase tracking-wide text-sm gap-2"
              >
                Read Full Story
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>

            {/* Kanan: Gambar Highlight */}
            <div className="relative w-full aspect-[4/3] lg:aspect-video rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group">
              <Image 
                src={highlightedNews.image} 
                alt={highlightedNews.title} 
                fill 
                unoptimized
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
          <div className="mb-12 border-b border-slate-200 pb-6 flex items-end justify-between">
            <h2 className="text-3xl font-bold text-brand-navy">Latest Articles</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestNewsList.map((news) => (
              <div key={news.id} className="bg-white rounded-[1.5rem] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 flex flex-col group hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
                  <Image 
                    src={news.image} 
                    alt={news.title} 
                    fill 
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="flex items-center text-slate-400 text-xs font-bold uppercase tracking-widest mb-3">
                    {news.publishedAt.split('•')[0].trim()} {/* Hanya ambil tanggal */}
                  </div>
                  <h3 className="font-bold text-brand-navy text-xl mb-3 line-clamp-2 group-hover:text-brand-red transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                    {news.description}
                  </p>
                  <Link 
                    href={`/newsletter?id=${news.id}`} 
                    className="mt-auto inline-flex items-center text-brand-red text-sm font-bold uppercase tracking-widest hover:text-[#a82222] transition-colors gap-2"
                  >
                    Read More 
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
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

// Komponen Export Utama
export default function NewsletterPage() {
  return (
    <main className="bg-white min-h-screen">
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