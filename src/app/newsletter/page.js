'use client';

import React, { Suspense, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

// ==========================================
// 1. NEWS DATA (Added more items to show slider effect)
// ==========================================
const newsData = [
  { 
    id: 'annual-hr-summit',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80', 
    title: 'Annual HR Summit', 
    description: 'Join industry leaders to discuss the future of work and HR transformation.',
    publishedAt: '12 August 2026 • 09:00 AM',
    content: `
      <p>The annual HR Summit conference is back this year, bringing together industry leaders from various sectors. This event aims to redefine human resource strategies in the era of rapidly moving digital transformation.</p>
      <br/>
      <p>Besides focusing on technological adaptation and automation, one of the main messages and agendas highlighted specifically in this summit is <strong>maintaining the cleanliness of our surrounding environment to always be clean</strong>. The green workspace initiative is believed to not only have a positive impact on ecosystem sustainability but also directly affect overall employee well-being and productivity.</p>
      <br/>
      <p>Participants will have the opportunity to join various interactive workshops, panel discussion sessions with global HR experts, and build strategic networks that can strengthen their company's foundation in the future.</p>
    `
  },
  { 
    id: 'program-launch',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80', 
    title: 'Program Launch', 
    description: 'New certification programs available for mid-level HR professionals.',
    publishedAt: '18 August 2026 • 13:30 PM',
    content: `
      <p>First HR Indonesia proudly announces the launch of our latest certification module designed specifically for mid-level HR professionals. This program was created to bridge the skills gap in facing modern talent management challenges.</p>
      <br/>
      <p>This module covers various crucial topics, ranging from HR data analysis (People Analytics), top talent retention strategies, to the implementation of diversity and inclusion policies. We designed this curriculum through a rigorous curation process and extensive literature study.</p>
      <br/>
      <p>Program registration is now open through the official FHRI portal. Join hundreds of other professionals to take a major step in your career escalation.</p>
    `
  },
  { 
    id: 'future-of-work',
    image: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=1200&q=80', 
    title: 'Future of Work', 
    description: 'Research findings on hybrid work models and employee engagement in 2026.',
    publishedAt: '24 August 2026 • 10:15 AM',
    content: `
      <p>Based on the latest research report released by the FHRI internal research team, the hybrid work model has now shifted from just a temporary trend to a long-term operational standard for most multinational companies.</p>
      <br/>
      <p>The research shows that organizations that successfully balance remote work flexibility with meaningful face-to-face interactions experience an increase in employee engagement by up to 45%. However, the biggest challenge today is how to maintain company culture amidst distributed teams.</p>
      <br/>
      <p>Further findings detail effective communication strategies, the use of virtual collaboration platforms, and the importance of redesigning performance appraisal metrics that focus on final results (output) rather than solely on working hours.</p>
    `
  },
  { 
    id: 'partnership-announcement',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80', 
    title: 'Partnership Announcement', 
    description: 'FHRI collaborates with top universities to expand learning modules.',
    publishedAt: '30 August 2026 • 15:45 PM',
    content: `
      <p>In a continuous effort to provide world-class human resource education standards, First HR Indonesia has officially signed a strategic memorandum of understanding (MoU) with three leading universities in the country.</p>
      <br/>
      <p>This collaboration will result in the development of hybrid learning modules that combine the sharpness of academic theory and practical case studies from the industry. Students taking the Human Resource Management specialization can now accumulate their credits with an official certification from FHRI.</p>
      <br/>
      <p>This initiative is expected to produce excellent graduates who are more job-ready, possess a deep understanding of the digital HR ecosystem, and are capable of solving employment problems comprehensively immediately after entering the professional world.</p>
    `
  },
  { 
    id: 'leadership-training',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80', 
    title: 'Executive Leadership Training', 
    description: 'A new intensive bootcamp for senior HR managers focusing on strategic decision making.',
    publishedAt: '05 September 2026 • 08:00 AM',
    content: `
      <p>First HR Indonesia is thrilled to announce a new Executive Leadership Training bootcamp designed exclusively for senior HR managers and directors.</p>
      <br/>
      <p>This intensive 3-day program will focus heavily on strategic decision making, crisis management, and aligning HR goals with broader corporate objectives. Participants will engage in high-level simulations and peer-to-peer mentoring sessions.</p>
    `
  },
  { 
    id: 'digital-hris',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80', 
    title: 'Mastering Digital HRIS', 
    description: 'Learn how to seamlessly integrate new HRIS tools into your daily operations.',
    publishedAt: '12 September 2026 • 14:00 PM',
    content: `
      <p>As technology continues to evolve, mastering digital Human Resources Information Systems (HRIS) is no longer optional—it is a necessity.</p>
      <br/>
      <p>Our latest workshop provides a deep dive into the most popular HRIS platforms available today. You will learn best practices for data migration, system integration, and how to utilize analytics dashboards to track real-time employee performance and satisfaction.</p>
    `
  },
];

// ==========================================
// 2. ARTICLE CONTENT COMPONENT
// ==========================================
function NewsArticleContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const scrollContainerRef = useRef(null);
  
  const article = newsData.find((item) => item.id === id) || newsData[0];

  // Fungsi untuk menggeser slider berita
  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      // Menggeser sejauh lebar kartu + gap (sekitar 350px)
      const scrollAmount = direction === 'left' ? -350 : 350;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <>
      <style>{`
        /* Menyembunyikan scrollbar untuk slider berita */
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Article Content Section */}
      <article className="max-w-4xl mx-auto px-6 pt-4 pb-12 md:pt-8 md:pb-20 min-h-[70vh]">
        
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-[#DC2626] transition mb-8 group">
          <svg className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Back to Home
        </Link>

        {/* Article Header */}
        <header className="mb-10 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start text-gray-400 text-sm font-medium mb-4">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            {article.publishedAt}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-[#00263C] leading-tight mb-6">
            {article.title}
          </h1>
        </header>

        {/* Main Cover Image */}
        <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden mb-12 shadow-xl bg-gray-100">
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
          className="prose prose-lg max-w-none text-gray-600 leading-relaxed prose-p:mb-6 prose-a:text-[#DC2626]"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
        
        {/* Article Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm font-bold text-[#00263C]">
            Published by FHRI Editorial Team
          </div>
          <button className="px-6 py-2 bg-gray-100 text-[#00263C] font-bold text-sm rounded-full hover:bg-[#00263C] hover:text-white transition">
            Share Article
          </button>
        </div>
      </article>

      {/* ==========================================
          FHRI NEWS SECTION (Below article with Slider)
      ========================================== */}
      <section className="bg-[#00263C] py-20 px-6 md:px-12 mt-10 overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          
          {/* Header & Navigation Arrows */}
          <div className="flex justify-between items-end mb-10">
            <h2 className="text-white text-3xl font-bold">More FHRI News</h2>
            
            <div className="flex gap-3">
              <button 
                onClick={() => scroll('left')} 
                className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center text-white hover:bg-[#DC2626] hover:border-[#DC2626] transition-all"
                aria-label="Scroll left"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
              </button>
              <button 
                onClick={() => scroll('right')} 
                className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center text-white hover:bg-[#DC2626] hover:border-[#DC2626] transition-all"
                aria-label="Scroll right"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </button>
            </div>
          </div>
          
          {/* Slider Container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-6"
          >
            {newsData.map((news, idx) => (
              <div 
                key={idx} 
                className="shrink-0 snap-start w-[85vw] sm:w-[350px] lg:w-[300px] bg-white rounded-xl overflow-hidden flex flex-col shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-[16/10] w-full bg-gray-100">
                  <Image 
                    src={news.image} 
                    alt={news.title} 
                    fill 
                    unoptimized 
                    sizes="(max-width: 640px) 100vw, 350px"
                    className="object-cover object-center" 
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-center text-gray-400 text-xs font-medium mb-2">
                    <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    {news.publishedAt}
                  </div>
                  
                  <h3 className="font-bold text-[#DC2626] text-lg mb-2 line-clamp-1">{news.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow leading-relaxed line-clamp-3">{news.description}</p>
                  
                  <Link href={`/newsletter?id=${news.id}`} className="text-[#DC2626] text-sm font-bold hover:underline inline-flex items-center gap-1">
                    View More <span>&gt;</span>
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

// ==========================================
// 3. MAIN PAGE EXPORT (With Suspense)
// ==========================================
export default function NewsletterPage() {
  return (
    <main className="bg-white pt-20 md:pt-24">
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center text-[#00263C] font-bold text-xl">
          Loading article...
        </div>
      }>
        <NewsArticleContent />
      </Suspense>
    </main>
  );
}