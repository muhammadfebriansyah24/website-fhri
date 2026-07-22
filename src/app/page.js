'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// ==========================================
// 1. DATA & CONSTANTS
// ==========================================

const programsList = [
  { 
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80', 
    title: 'HR Analytics Leader', 
    description: 'Empower your HR decisions with advanced data analytics for strategic planning.' 
  },
  { 
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80', 
    title: 'Strategic HRBP', 
    description: 'Evolve into a strategic HRBP for business transformation and long-term growth.' 
  },
  { 
    image: 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?auto=format&fit=crop&w=800&q=80', 
    title: 'Talent Acquisition', 
    description: 'Modern recruitment strategies & effective employer branding to attract top talent.' 
  },
  { 
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80', 
    title: 'Digital HR Transformation', 
    description: 'Transform HR processes with modern technology & implementation of HRIS systems.' 
  },
  { 
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80', 
    title: 'People Management', 
    description: 'HR foundations and practical guidelines for effective team leaders and managers.' 
  },
  { 
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80', 
    title: 'Data-Driven Compensation', 
    description: 'Design competitive, data-driven compensation and benefit systems for your company.' 
  },
  { 
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80', 
    title: 'Employee Experience', 
    description: 'Create engaging employee experiences that boost retention and workplace satisfaction.' 
  },
  { 
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80', 
    title: 'HR Audit & Compliance', 
    description: 'Align HR practices with industry regulations to ensure comprehensive legal compliance.' 
  },
];

const eventsList = [
  { 
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80', 
    title: 'Town Hall Meeting', 
    description: 'Quarterly company update and performance review sessions.' 
  },
  { 
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=800&q=80', 
    title: 'Corporate Social Responsibility', 
    description: 'Community outreach and environmental sustainability programs.' 
  },
  { 
    image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80', 
    title: 'Outbound Training (OBT)', 
    description: 'Team building and leadership development in outdoor settings.' 
  },
];

const newsList = [
  { 
    id: 'annual-hr-summit', // <-- Tambahan ID
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80', 
    title: 'Annual HR Summit', 
    description: 'Join industry leaders to discuss the future of work and HR transformation.',
    publishedAt: '12 August 2026 • 09:00 AM'
  },
  { 
    id: 'program-launch', // <-- Tambahan ID
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80', 
    title: 'Program Launch', 
    description: 'New certification programs available for mid-level HR professionals.',
    publishedAt: '18 August 2026 • 13:30 PM'
  },
  { 
    id: 'future-of-work', // <-- Tambahan ID
    image: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=800&q=80', 
    title: 'Future of Work', 
    description: 'Research findings on hybrid work models and employee engagement in 2026.',
    publishedAt: '24 August 2026 • 10:15 AM'
  },
  { 
    id: 'partnership-announcement', // <-- Tambahan ID
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80', 
    title: 'Partnership Announcement', 
    description: 'FHRI collaborates with top universities to expand learning modules.',
    publishedAt: '30 August 2026 • 15:45 PM'
  },
];

const testimonials = [
  {
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&h=600&crop=faces&q=80',
    quote: 'FHRI helped our HR team transform from an operational function to a strategic partner. The impact on our business has been immediate and profound.',
    name: 'Sarah Rahman',
    role: 'HR Director, TechVision Inc',
  },
  {
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&h=600&crop=faces&q=80',
    quote: 'The programs from FHRI are incredibly practical. Our team was able to implement new recruitment strategies within just a few weeks.',
    name: 'Budi Santoso',
    role: 'Talent Acquisition Lead, Kencana Group',
  },
  {
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&h=600&crop=faces&q=80',
    quote: 'The audit and compliance materials provided are extremely comprehensive, giving our company peace of mind and confidence in our decision-making.',
    name: 'Anita Wijaya',
    role: 'HR Manager, Global Logistics',
  }
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
    <section className="relative bg-[#00263C] pt-24 pb-36 md:pb-44 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-16 relative z-10">
        
        <div className="md:w-1/2">
          <span className="text-base font-extrabold text-[#DC2626] tracking-widest uppercase">
            First HR Indonesia
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
            Strategic Partner for Outstanding Talent
          </h1>
          <p className="mt-6 text-sm text-slate-300 leading-relaxed max-w-md">
            FHRI helps companies and HR professionals build capacity, accelerate careers, and transform HR practices through practical learning and innovation.
          </p>
          <button className="mt-8 bg-[#DC2626] text-white px-8 py-3 rounded-full font-semibold text-sm transition hover:bg-white hover:text-[#00263C]">
            DISCOVER MORE
          </button>
        </div>

        <div className="md:w-1/2 w-full">
          <div className="w-full aspect-[16/10] rounded-xl overflow-hidden shadow-2xl relative border border-slate-700/50">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
              alt="HR Team Collaboration"
              fill
              unoptimized
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
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
    <section className="bg-white py-16 px-6 md:px-12 text-center overflow-hidden">
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

      <h3 className="text-[#DC2626] font-extrabold text-xl tracking-widest uppercase">Our Network</h3>
      <h2 className="text-3xl font-bold text-[#00263C] mt-2">Strategic Partners</h2>
      
      <div className="marquee-container relative max-w-6xl mx-auto mt-10 overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div className="animate-scroll gap-6 py-4">
          {duplicatedPartners.map((partner, index) => (
            <div 
              key={index} 
              className="w-48 h-20 shrink-0 bg-white border border-gray-200 rounded-xl flex items-center justify-center p-4 transition-all duration-300 ease-out cursor-pointer hover:shadow-lg hover:border-[#DC2626] hover:scale-105"
            >
              {partner.svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonial() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  const nextTestimonial = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="bg-white py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        <div className="w-full md:w-1/2 aspect-[4/3] relative rounded-xl overflow-hidden bg-gray-100 shadow-md">
          <Image
            key={current.image}
            src={current.image}
            alt={current.name}
            fill
            unoptimized
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center transition-all duration-500 ease-in-out"
          />
        </div>

        <div className="w-full md:w-1/2">
          <svg className="w-12 h-12 text-[#DC2626] opacity-30 mb-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1.5.5 1.5 1.5L5 15c0 2-1 4-2 6zm14 0c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1.5.5 1.5 1.5L19 15c0 2-1 4-2 6z" fill="currentColor"/>
          </svg>
          
          <div className="min-h-[120px]">
            <p className="text-xl md:text-2xl font-bold text-[#00263C] leading-snug">
              &quot;{current.quote}&quot;
            </p>
          </div>
          
          <div className="mt-8">
            <p className="font-bold text-[#00263C]">{current.name}</p>
            <p className="text-gray-500 text-sm mt-1">{current.role}</p>
          </div>

          <div className="flex gap-4 mt-10">
            <button onClick={prevTestimonial} className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-[#DC2626] hover:text-[#DC2626] transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            </button>
            <button onClick={nextTestimonial} className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-[#DC2626] hover:text-[#DC2626] transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function News() {
  return (
    <section className="bg-[#00263C] py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-3xl font-bold mb-10">FHRI News</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsList.map((news, idx) => (
            <div key={idx} className="bg-white rounded-xl overflow-hidden flex flex-col shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative aspect-[16/10] w-full bg-gray-100">
                <Image 
                  src={news.image} 
                  alt={news.title} 
                  fill 
                  unoptimized 
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
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
  );
}

function Programs() {
  return (
    <section className="bg-[#ffffff] pt-16 pb-24 px-4 md:px-8 flex justify-center">
      <div className="w-full max-w-[1440px]">
        {/* FOLDER NAVY (luar) */}
        <div className="relative w-full drop-shadow-xl">
          <svg
            viewBox="0 0 1440 60"
            preserveAspectRatio="none"
            className="w-full h-11 md:h-[60px] block relative z-10"
            aria-hidden="true"
          >
            <path d={NAVY_TAB_PATH} fill="#00263C" />
          </svg>

          <div
            className="bg-[#00263C] mx-[5.5%] rounded-[2rem] md:rounded-[2.5rem] px-6 pt-6 pb-36 md:pb-44 text-center relative flex flex-col items-center"
            style={{ marginTop: '-2px' }}
          >
            <span className="relative z-20 text-base font-extrabold text-[#DC2626] tracking-widest uppercase mb-4">
              Our Programs
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Explore HR Development Programs
            </h2>
            <p className="text-slate-300 text-sm max-w-2xl mx-auto">
              A wide range of courses designed to help HR professionals build capacity and accelerate their careers.
            </p>
          </div>
        </div>

        {/* FOLDER PUTIH (dalam) */}
        <div className="relative w-full mx-auto -mt-28 md:-mt-36 z-10">
          <svg
            viewBox="0 0 1440 48"
            preserveAspectRatio="none"
            className="w-full h-9 md:h-12 block relative z-10 drop-shadow-[0_-5px_15px_rgba(0,0,0,0.05)]"
            aria-hidden="true"
          >
            <path d={WHITE_TAB_PATH} fill="white" />
          </svg>

          <div
            className="bg-white mx-[5.5%] rounded-b-[2rem] md:rounded-b-[2.5rem] p-5 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative z-0"
            style={{ marginTop: '-2px' }}
          >
            {/* Grid Kartu Program */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {programsList.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl overflow-hidden border border-gray-100 flex flex-col shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative aspect-[16/10] w-full bg-gray-100">
                    <Image 
                      src={item.image} 
                      alt={item.title} 
                      fill 
                      unoptimized 
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-center" 
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="font-bold text-[#00263C] mb-2">{item.title}</h3>
                    <p className="text-[13px] text-gray-500 mb-4 flex-grow leading-relaxed">{item.description}</p>
                    <Link href="#" className="text-[#DC2626] text-[13px] font-bold hover:underline inline-flex items-center gap-1">
                      Read More <span>&gt;</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Corporate & Culture Events Section */}
            <div className="mt-24 text-center">
              <h2 className="text-2xl font-bold text-[#00263C] mb-2">Corporate & Culture Events</h2>
              <p className="text-gray-500 text-sm mb-10 max-w-2xl mx-auto">
                Discover various internal events and cultural activities designed to foster team building, engagement, and alignment with our core values.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                {eventsList.map((event, idx) => (
                  <div key={idx} className="flex flex-col group cursor-pointer bg-white rounded-xl overflow-hidden border border-gray-100 p-3 shadow-xs hover:shadow-md transition">
                    <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden mb-4 bg-gray-100">
                      <Image 
                        src={event.image} 
                        alt={event.title} 
                        fill 
                        unoptimized 
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover object-center group-hover:scale-105 transition duration-500" 
                      />
                    </div>
                    <div className="px-1 flex flex-col flex-grow">
                      <h3 className="font-bold text-[#00263C] mb-1">{event.title}</h3>
                      <p className="text-[13px] text-gray-500 mb-3 flex-grow">{event.description}</p>
                      <Link href="#" className="text-[#DC2626] text-[13px] font-bold hover:underline mt-auto inline-flex items-center gap-1">
                        Read More <span>&gt;</span>
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

function CTA() {
  return (
    <section className="relative py-28 px-6 md:px-12 text-center bg-[#00263C] overflow-hidden">
      {/* Background Image / Logo & Overlay */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-15">
        <Image 
          src="/fhri-logo.png" 
          alt="FHRI Logo Background" 
          fill 
          unoptimized
          priority
          /* object-contain digunakan agar logo pas ukurannya dan tidak terpotong */
          className="object-contain object-center p-4 md:p-16"
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <p className="text-white text-sm font-extrabold tracking-widest uppercase mb-4 opacity-90">
          READY TO TAKE THE NEXT STEP?
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
          Elevate Your Career: Grow Alongside Leading HR Professionals
        </h2>
        <p className="text-slate-300 mb-8 max-w-xl mx-auto">
          Become a part of FHRI and elevate your HR capabilities alongside the largest professional community in Indonesia.
        </p>
        <button className="bg-[#DC2626] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-white hover:text-[#00263C] transition shadow-lg">
          Start Your Journey
        </button>
      </div>
    </section>
  );
}

function BottomCTA() {
  return (
    <section className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl border border-gray-100 bg-white">
        
        {/* Gambar logo agar tidak terpotong (object-contain + p-8) */}
        <div className="w-full md:w-1/3 relative aspect-square md:aspect-auto min-h-[280px] flex items-center justify-center p-8">
          <Image 
            src="/fhri-logo.png"
            alt="HR Consultation Logo" 
            fill 
            unoptimized
            sizes="(max-width: 768px) 100vw, 33vw"
            /* Class diubah dari object-cover menjadi object-contain beserta tambahan padding */
            className="object-contain object-center p-8 md:p-12"
          />
        </div>
        
        <div className="w-full md:w-2/3 bg-[#00263C] p-10 md:p-16 flex flex-col justify-center items-start">
          <h2 className="text-3xl font-bold text-white mb-4">
            Find the Right Path<br/>for Your HR Team
          </h2>
          <p className="text-slate-300 text-sm mb-8 max-w-md leading-relaxed">
            Talking to our experts helps you uncover strategies that improve productivity, retention, and HR performance across the board.
          </p>
          <button className="bg-[#DC2626] text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-white hover:text-[#00263C] transition">
            Find out more
          </button>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 3. MAIN PAGE EXPORT
// ==========================================

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <Hero />
      <Network />
      <Testimonial />
      <News />
      <Programs />
      <CTA />
      <BottomCTA />
    </main>
  );
}