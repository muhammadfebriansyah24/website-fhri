'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Testimonial from '@/components/Testimonial';
import CTA from '@/components/CTA';

// ==========================================
// 1. DATA & CONSTANTS
// ==========================================

const programsList = [
  { 
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80', 
    title: 'Business Support Services', 
    description: 'Operational support for market entry, covering company establishment, regulatory compliance, and cultural integration.',
    link: '/business/business-support'
  },
  { 
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80', 
    title: 'Human Capital Solutions', 
    description: 'End-to-end talent acquisition from entry-level to C-suite, including executive search and talent assessment.',
    link: '/business/humancapital-solutions'
  },
  { 
    image: 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?auto=format&fit=crop&w=800&q=80', 
    title: 'Payroll & Outsourcing', 
    description: 'Comprehensive HR administrative management, accurate payroll processing, and flexible workforce solutions.',
    link: '/business/payroll'
  },
  { 
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80', 
    title: 'Assessment Tools', 
    description: 'Evaluation tools including 360-degree feedback and personality assessments to identify capabilities and drive employee development.',
    link: '/business/assessment-tools'
  },
  { 
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80', 
    title: 'HR Boot Camp', 
    description: 'Intensive, results-oriented training programs designed to accelerate HR team development and strategic business partnering.',
    link: '/business/hr-bootcamp'
  },
  { 
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80', 
    title: 'Industrial Relations & Legal Advisory', 
    description: 'Expert labor law consulting, dispute management, and union partnership strategies to maintain a harmonious workplace.',
    link: '/business/industrial-relations'
  },
  { 
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80', 
    title: 'Health, Safety and Environment (HSE)', 
    description: 'Comprehensive solutions for a safe workplace, environmental compliance, risk assessment, and safety management systems.',
    link: '/business/hse'
  },
  { 
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80', 
    title: 'Professional Certification Institute', 
    description: 'Recognized certification programs designed to elevate professional standards and validate HR competencies.',
    link: '/business/lsp'
  },
];

const eventsList = [
  { 
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80', 
    title: 'Town Hall Meeting', 
    description: 'Quarterly company update and performance review sessions.',
    link: '/business/corporate-culture'
  },
  { 
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=800&q=80', 
    title: 'Corporate Social Responsibility', 
    description: 'Community outreach and environmental sustainability programs.',
    link: '/business/corporate-culture'
  },
  { 
    image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80', 
    title: 'Outbound Training (OBT)', 
    description: 'Team building and leadership development in outdoor settings.',
    link: '/business/corporate-culture'
  },
];

const newsList = [
  { 
    id: 'annual-hr-summit', 
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80', 
    title: 'Annual HR Summit', 
    description: 'Join industry leaders to discuss the future of work and HR transformation.',
    publishedAt: '12 August 2026 • 09:00 AM'
  },
  { 
    id: 'program-launch', 
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80', 
    title: 'Program Launch', 
    description: 'New certification programs available for mid-level HR professionals.',
    publishedAt: '18 August 2026 • 13:30 PM'
  },
  { 
    id: 'future-of-work', 
    image: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=800&q=80', 
    title: 'Future of Work', 
    description: 'Research findings on hybrid work models and employee engagement in 2026.',
    publishedAt: '24 August 2026 • 10:15 AM'
  },
  { 
    id: 'partnership-announcement', 
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80', 
    title: 'Partnership Announcement', 
    description: 'FHRI collaborates with top universities to expand learning modules.',
    publishedAt: '30 August 2026 • 15:45 PM'
  },
];

const NAVY_TAB_PATH =
  'M80 59.313 L195.047 59.313 C205.776 59.313 215.308 52.4674 218.736 42.3009 ' +
  'L227.264 17.012 C230.692 6.8456 240.224 0 250.953 0 H1189.05 ' +
  'C1199.78 0 1209.31 6.8456 1212.74 17.012 L1221.26 42.3009 ' +
  'C1224.69 52.4674 1234.22 59.313 1244.95 59.313 L1362 59.313 Z';

const WHITE_TAB_PATH =
  'M80 47.664 L196.378 47.664 C206.448 47.664 215.535 41.623 219.431 32.337 ' +
  'L226.569 15.327 C230.465 6.042 239.552 0 249.622 0 H1190.38 ' +
  'C1200.45 0 1209.54 6.041 1213.43 15.327 L1220.57 32.337 ' +
  'C1224.46 41.623 1233.55 47.664 1243.62 47.664 L1362 47.664 Z';


// ==========================================
// 2. SECTIONS 
// ==========================================

function Hero() {
  return (
    <section className="relative bg-brand-navy min-h-[85vh] flex items-center pt-24 pb-36 md:pb-44 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-16 relative z-10 w-full">
        
        <div className="md:w-1/2">
          <span className="text-eyebrow text-brand-red">
            First HR Indonesia
          </span>
          <h1 className="mt-5 md:mt-6 text-white">
            Strategic Partner for Outstanding Talent
          </h1>
          <p className="mt-8 text-slate-300 max-w-md">
            FHRI helps companies and HR professionals build capacity, accelerate careers, and transform HR practices through practical learning and innovation.
          </p>
          <Link 
            href="/about" 
            className="mt-8 inline-block bg-brand-red text-white px-8 py-3 rounded-full font-semibold text-sm transition duration-700 hover:bg-white hover:text-brand-navy"
          >
            DISCOVER MORE
          </Link>
        </div>

        <div className="md:w-1/2 w-full">
          <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden relative border border-slate-700/50 group">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
              alt="HR Team Collaboration"
              fill
              unoptimized
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

function Network() {
  const partnerLogos = [
    {
      name: 'NEXUS CORP',
      svg: (
        <svg className="h-7 w-auto fill-current" viewBox="0 0 140 30" xmlns="http://www.w3.org/2000/svg">
          <circle cx="15" cy="15" r="10" fill="#00263C" />
          <path d="M10 15 L15 10 L20 15 L15 20 Z" fill="#DC2626" />
          <text x="32" y="21" fontFamily="sans-serif" fontSize="15" fontWeight="bold" fill="#00263C">NEXUS</text>
        </svg>
      )
    },
    {
      name: 'VERTEX',
      svg: (
        <svg className="h-7 w-auto fill-current" viewBox="0 0 140 30" xmlns="http://www.w3.org/2000/svg">
          <polygon points="15,5 25,25 5,25" fill="#DC2626" />
          <polygon points="15,12 21,23 9,23" fill="#ffffff" />
          <text x="32" y="21" fontFamily="sans-serif" fontSize="15" fontWeight="bold" fill="#00263C">VERTEX</text>
        </svg>
      )
    },
    {
      name: 'GLOBAL HR',
      svg: (
        <svg className="h-7 w-auto fill-current" viewBox="0 0 150 30" xmlns="http://www.w3.org/2000/svg">
          <circle cx="15" cy="15" r="11" stroke="#00263C" strokeWidth="3" fill="none" />
          <path d="M4 15 H26 M15 4 A11 11 0 0 0 15 26" stroke="#DC2626" strokeWidth="2" fill="none" />
          <text x="32" y="21" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill="#00263C">GLOBAL HR</text>
        </svg>
      )
    },
    {
      name: 'APEX GROUP',
      svg: (
        <svg className="h-7 w-auto fill-current" viewBox="0 0 140 30" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="15" width="6" height="10" fill="#00263C" />
          <rect x="13" y="10" width="6" height="15" fill="#00263C" />
          <rect x="21" y="5" width="6" height="20" fill="#DC2626" />
          <text x="34" y="21" fontFamily="sans-serif" fontSize="15" fontWeight="bold" fill="#00263C">APEX</text>
        </svg>
      )
    },
    {
      name: 'ELEVATE',
      svg: (
        <svg className="h-7 w-auto fill-current" viewBox="0 0 150 30" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 22 L15 8 L25 22 Z" fill="#DC2626" />
          <path d="M11 22 L15 15 L19 22 Z" fill="#00263C" />
          <text x="32" y="21" fontFamily="sans-serif" fontSize="15" fontWeight="bold" fill="#00263C">ELEVATE</text>
        </svg>
      )
    },
    {
      name: 'SYNERGY',
      svg: (
        <svg className="h-7 w-auto fill-current" viewBox="0 0 150 30" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="15" r="6" fill="#00263C" />
          <circle cx="22" cy="15" r="6" fill="#DC2626" opacity="0.8" />
          <text x="34" y="21" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill="#00263C">SYNERGY</text>
        </svg>
      )
    }
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

      <span className="text-eyebrow block mb-5 md:mb-6">Our Network</span>
      <h2>Strategic Partners</h2>
      
      <div className="marquee-container relative max-w-6xl mx-auto mt-8 md:mt-10 overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div className="animate-scroll gap-6 py-4">
          {duplicatedPartners.map((partner, index) => (
            <div 
              key={index} 
              className="w-48 h-20 shrink-0 bg-white border border-gray-200 rounded-xl flex items-center justify-center p-4 transition-transform duration-500 ease-out cursor-pointer hover:-translate-y-1"
            >
              {partner.svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function News() {
  return (
    <section className="bg-brand-navy py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white mb-8 md:mb-10">FHRI News</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsList.map((news, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-gray-100 flex flex-col group">
              <div className="relative aspect-[16/10] w-full bg-gray-100 overflow-hidden">
                <Image 
                  src={news.image} 
                  alt={news.title} 
                  fill 
                  unoptimized 
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-center text-slate-400 text-xs font-normal mb-2">
                  <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  {news.publishedAt}
                </div>
                
                <h4 className="text-brand-red mb-2 line-clamp-1">{news.title}</h4>
                <p className="text-sm text-slate-500 mb-4 flex-grow line-clamp-3">{news.description}</p>
                <Link href={`/newsletter?id=${news.id}`} className="text-brand-red text-sm font-bold hover:underline inline-flex items-center gap-1">
                  View More <span className="transition-transform group-hover:translate-x-1">&gt;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Programs() {
  return (
    <section className="bg-white py-20 md:py-28 px-2 md:px-8 flex justify-center overflow-hidden">
      <div className="w-full max-w-[1440px]">
        {/* ===== FOLDER NAVY (luar) ===== */}
        <div className="relative w-full drop-shadow-xl md:drop-shadow-2xl">
          <svg
            viewBox="0 0 1440 60"
            preserveAspectRatio="none"
            className="hidden md:block w-full h-[60px] relative z-10"
            aria-hidden="true"
          >
            <path d={NAVY_TAB_PATH} fill="#00263C" />
          </svg>

          <div
            className="bg-brand-navy mx-4 md:mx-[5.5%] rounded-[2rem] md:rounded-[2.5rem] px-5 md:px-12 pt-10 pb-32 md:pt-4 md:pb-44 text-center relative flex flex-col items-center md:-mt-[2px]"
          >
            <span className="relative z-20 inline-flex items-center px-6 md:px-10 py-2 md:py-3 text-eyebrow text-white rounded-full border-2 md:border-3 border-brand-red md:-mt-8 shadow-sm uppercase tracking-widest">
              Our Business Services
            </span>

            <h2 className="mt-5 md:mt-6 text-white max-w-4xl text-balance">
              Explore Our Comprehensive HR & Business Solutions
            </h2>
            
            <p className="mt-8 md:mt-10 text-slate-300 max-w-2xl mx-auto text-balance leading-relaxed">
              A complete suite of professional services designed to optimize your HR operations, ensure regulatory compliance, and drive long-term organizational growth.
            </p>
          </div>
        </div>

        {/* ===== FOLDER PUTIH (dalam) ===== */}
        <div className="relative w-full mx-auto -mt-20 md:-mt-36 z-10 drop-shadow-[0_15px_40px_rgba(21,60,86,0.12)] md:drop-shadow-[0_20px_50px_rgba(21,60,86,0.15)]">
          <svg
            viewBox="0 0 1440 48"
            preserveAspectRatio="none"
            className="hidden md:block w-full h-12 relative z-10"
            aria-hidden="true"
          >
            <path d={WHITE_TAB_PATH} fill="white" />
          </svg>

          <div
            className="bg-white mx-4 md:mx-[5.5%] rounded-[2rem] md:rounded-[2.5rem] p-5 md:p-10 shadow-sm relative z-0 md:-mt-[2px]"
          >
            {/* Grid Kartu Program */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {programsList.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-100 flex flex-col group"
                >
                  <div className="relative aspect-[16/10] w-full bg-gray-100 overflow-hidden">
                    <Image 
                      src={item.image} 
                      alt={item.title} 
                      fill 
                      unoptimized 
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105" 
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <h4 className="mb-2">{item.title}</h4>
                    <p className="text-sm text-slate-500 mb-4 flex-grow">{item.description}</p>
                    {/* 👇 Menggunakan item.link yang ditambahkan di atas */}
                    <Link href={item.link} className="text-brand-red text-sm font-bold hover:underline inline-flex items-center gap-1">
                      Read More <span className="transition-transform group-hover:translate-x-1">&gt;</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Corporate & Culture Events Section */}
            <div className="mt-24 text-center">
              <h2 className="mb-8">Corporate & Culture Events</h2>
              <p className="text-slate-500 mb-10 max-w-2xl mx-auto">
                Discover various internal events and cultural activities designed to foster team building, engagement, and alignment with our core values.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                {eventsList.map((event, idx) => (
                  <div key={idx} className="flex flex-col cursor-pointer bg-white rounded-2xl overflow-hidden border border-gray-100 p-3 group">
                    <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden mb-4 bg-gray-100">
                      <Image 
                        src={event.image} 
                        alt={event.title} 
                        fill 
                        unoptimized 
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105" 
                      />
                    </div>
                    <div className="px-1 flex flex-col flex-grow">
                      <h4 className="mb-1">{event.title}</h4>
                      <p className="text-sm text-slate-500 mb-3 flex-grow">{event.description}</p>
                      <Link href={event.link} className="text-brand-red text-sm font-bold hover:underline mt-auto inline-flex items-center gap-1">
                        Read More <span className="transition-transform group-hover:translate-x-1">&gt;</span>
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

// 3. MAIN PAGE EXPORT

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <Hero />
      <Network />
      <Testimonial />
      <News />
      <Programs />
      <CTA />
      </main>
  );
}