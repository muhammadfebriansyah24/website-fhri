'use client'; // Wajib ditambahkan jika menggunakan useState di Next.js App Router

import Link from 'next/link';
import { useState } from 'react';

// FOTO PLACEHOLDER
const IMG = {
  hero: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop',
  executiveSearch: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop',
  recruitment: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop',
  assessment: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop',
  support: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
  corporate: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
  consultant: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
};

const coreSolutions = [
  {
    tag: 'Confidential Search',
    title: 'Executive Search & Headhunting',
    description: 'Targeted, discreet searches for leadership and C-suite roles where the wrong hire carries the highest cost.',
    meta: 'Avg. 6–10 weeks',
    image: IMG.executiveSearch,
  },
  {
    tag: 'End-to-End Hiring',
    title: 'Comprehensive Recruitment',
    description: 'Volume and specialist hiring managed by one team, built to move at the speed your business needs.',
    meta: 'Avg. 3–6 weeks',
    image: IMG.recruitment,
  },
  {
    tag: 'Evidence-Based',
    title: 'Talent Assessment',
    description: 'Structured evaluation of skill, potential, and cultural fit, so hiring decisions rest on evidence, not instinct.',
    meta: 'Delivered per hire',
    image: IMG.assessment,
  },
  {
    tag: 'Market Entry',
    title: 'Business Support Services',
    description: 'Company establishment and workforce support so entering the Indonesian market never stalls on paperwork.',
    meta: 'Ongoing engagement',
    image: IMG.support,
  },
];

const howWeWork = [
  {
    title: 'Dedicated Search Consultants',
    description: 'A named consultant runs your search end to end, not a rotating queue of recruiters.',
    icon: (
      <path
        d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
        stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"
      />
    ),
  },
  {
    title: 'Multi-Channel Sourcing',
    description: 'We combine our own network, referrals, and passive-talent outreach, not just job-board applicants.',
    icon: (
      <path
        d="M18 8a3 3 0 100-6 3 3 0 000 6zM6 15a3 3 0 100-6 3 3 0 000 6zM18 22a3 3 0 100-6 3 3 0 000 6zM8.6 13.5l6.8-3.9M8.6 10.5l6.8 3.9"
        stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"
      />
    ),
  },
  {
    title: 'Verified, Certified Process',
    description: 'Every candidate profile is reference-checked and documented before it reaches your desk.',
    icon: (
      <path
        d="M9 12l2 2 4-4M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"
      />
    ),
  },
  {
    title: 'Client Partner Network',
    description: 'Access to companies and hiring partners we work with across Indonesia.',
    icon: (
      <path
        d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m5-4.13a4 4 0 100-8 4 4 0 000 8zm6 0a4 4 0 10-1-7.87m-10 0A4 4 0 003 8.13"
        stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"
      />
    ),
  },
  {
    title: 'Structured Deliverables',
    description: 'Weekly pipeline reports and scorecards, so you always know where a search stands.',
    icon: (
      <path
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2M9 12h6M9 16h6"
        stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"
      />
    ),
  },
  {
    title: 'End-to-End Support',
    description: 'From first brief to onboarding, and beyond, with cultural training if the hire needs it.',
    icon: (
      <path
        d="M12 21c-4-3-8-6.5-8-11a5 5 0 019-3 5 5 0 019 3c0 4.5-4 8-8 11z"
        stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"
      />
    ),
  },
];

const beyondRecruiting = [
  {
    title: 'Company Establishment',
    description: 'Legal entity and workforce setup in Indonesia, handled end to end.',
    icon: (
      <path
        d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6"
        stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"
      />
    ),
  },
  {
    title: 'Cultural Training Programmes',
    description: 'Preparing global teams and local hires to work together fluently from day one.',
    icon: (
      <path
        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.42A12.02 12.02 0 0121 12c0 3.5-2.5 6.5-6 8-3.5-1.5-6-4.5-6-8 0-.63.07-1.24.2-1.83L12 14z"
        stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"
      />
    ),
  },
  {
    title: 'Hiring Partner Network',
    description: 'Ongoing access to a vetted candidate pool as your team keeps growing.',
    icon: (
      <path
        d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m5-4.13a4 4 0 100-8 4 4 0 000 8z"
        stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"
      />
    ),
  },
];

function CTAButton({ href, children, variant = 'solid' }) {
  const styles =
    variant === 'solid'
      ? 'bg-[#DC0017] hover:bg-[#B8000F] text-white'
      : 'bg-white/10 hover:bg-white/15 text-white ring-1 ring-white/15';
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2.5 ${styles} pl-6 pr-2 py-2 rounded-full font-semibold text-sm transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]`}
    >
      {children}
      <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white/15 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
          <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </Link>
  );
}

function Eyebrow({ children, tone = 'light' }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] ${
        tone === 'light' ? 'bg-white/10 text-white' : 'bg-[#153C56]/8 text-[#153C56]'
      }`}
    >
      {children}
    </span>
  );
}

// HANYA ADA SATU EXPORT DEFAULT
export default function TalentAcquisitionPage() {
  // STATE DAN LOGIKA SLIDER DIPINDAHKAN KE SINI
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    {
      quote: '"FHRI membantu tim HR kami bertransformasi dari fungsi operasional menjadi mitra strategis. Dampaknya terasa langsung pada bisnis."',
      name: '[Full Name 1]',
      role: '[Job Title], [Company Name]',
    },
    {
      quote: '"Sangat direkomendasikan! Pelatihan ini memberikan insight yang luar biasa dan applicable untuk tantangan HR masa kini."',
      name: '[Full Name 2]',
      role: '[Job Title], [Company Name]',
    },
    {
      quote: '"Kurikulumnya komprehensif dan mentornya adalah praktisi ahli. Tim kami langsung mengimplementasikan ilmu yang didapat."',
      name: '[Full Name 3]',
      role: '[Job Title], [Company Name]',
    },
    {
      quote: '"Transformasi yang dibawa oleh program ini sangat signifikan dalam cara kami mengelola talenta dan performa karyawan."',
      name: '[Full Name 4]',
      role: '[Job Title], [Company Name]',
    }
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <main className="min-h-screen font-sans">
      {/* ============ HERO ============ */}
      <section className="relative bg-[#153C56] pt-20 pb-28 md:pb-36 px-6 md:px-12 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="absolute -right-32 -top-32 w-[480px] h-[480px] rounded-full bg-[#DC0017]/10 blur-3xl" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Eyebrow>Talent Acquisition</Eyebrow>
          <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.02] text-balance">
            Master Modern Talent Acquisition
          </h1>
          <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Empowering businesses through strategic human capital solutions, connecting world-class organizations with
            Indonesia&rsquo;s finest professionals.
          </p>
          <div className="mt-9 flex justify-center">
            <CTAButton href="#cta">Consult with Our Experts</CTAButton>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mt-16 relative z-10">
          <div className="rounded-[2rem] bg-white/5 ring-1 ring-white/10 p-2">
            <div className="relative rounded-[calc(2rem-0.5rem)] overflow-hidden aspect-[16/8] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
              <img
                src={IMG.hero}
                alt="First HR Indonesia consultants in a strategy session"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A40]/50 via-transparent to-transparent" />
              <span className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-sm text-[#153C56] text-[11px] font-bold px-3 py-1.5 rounded-full">
                Strategic: Talent Acquisition Panel
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CORE SOLUTIONS ============ */}
      <section className="bg-white py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <Eyebrow tone="dark">What We Do</Eyebrow>
            <h2 className="mt-5 text-3xl md:text-5xl font-bold text-[#153C56] leading-tight">Our Core Solutions</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreSolutions.map((item) => (
              <article
                key={item.title}
                className="group rounded-[1.75rem] bg-slate-50 p-2 ring-1 ring-slate-100 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-[0_30px_60px_-20px_rgba(21,60,86,0.22)] hover:-translate-y-1.5"
              >
                <div className="rounded-[calc(1.75rem-0.5rem)] bg-white overflow-hidden">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                    />
                    <svg className="absolute top-0 right-0" width="26" height="26" viewBox="0 0 26 26">
                      <path d="M26 0L0 0L26 26Z" fill="white" />
                    </svg>
                  </div>
                  <div className="flex flex-col p-5 gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{item.tag}</span>
                    <h3 className="font-bold text-[#153C56] text-[16px] leading-snug group-hover:text-[#DC0017] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-[13px] text-slate-500 leading-relaxed mt-1">{item.description}</p>
                    <div className="pt-4 mt-3 border-t border-slate-100">
                      <span className="text-[11px] font-semibold text-[#153C56]">{item.meta}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ MORE THAN JUST RECRUITMENT ============ */}
      <section className="bg-white pb-24 md:pb-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#153C56] leading-tight">More Than Just Recruitment</h2>
            <p className="mt-4 text-slate-500 leading-relaxed">
              First HR helps you fill the role, and build the process that fills the next one faster.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
            {howWeWork.map((item) => (
              <div key={item.title} className="flex flex-col">
                <div className="w-12 h-12 rounded-full bg-[#153C56]/8 flex items-center justify-center mb-5">
                  <svg className="w-5 h-5 text-[#153C56]" viewBox="0 0 24 24">
                    {item.icon}
                  </svg>
                </div>
                <h3 className="font-bold text-[#153C56] text-[15px] mb-2">{item.title}</h3>
                <p className="text-[13px] text-slate-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CORPORATE SOLUTIONS + CTA BANNER ============ */}
      <section className="bg-[#153C56]">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-32">
          <Eyebrow>Corporate Solutions</Eyebrow>
          <div className="grid lg:grid-cols-2 gap-14 items-center mt-7">
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-[1.05]">
                Talent Acquisition <span className="text-[#DC0017]">For Companies</span>
              </h2>
              <p className="mt-6 text-slate-300 leading-relaxed max-w-md">
                First HR helps companies reach candidates who aren&rsquo;t applying anywhere, and assess them with the
                same rigor whether it&rsquo;s one hire or fifty.
              </p>
              <div className="mt-9">
                <CTAButton href="#cta">Discuss Your Hiring Needs</CTAButton>
              </div>
            </div>

            <div className="rounded-[2rem] bg-white/5 ring-1 ring-white/10 p-2">
              <div className="relative h-64 md:h-80 rounded-[calc(2rem-0.5rem)] overflow-hidden">
                <img
                  src={IMG.corporate}
                  alt="Team briefing on a hiring search"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mt-16">
            {beyondRecruiting.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-7 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:shadow-[0_24px_48px_-16px_rgba(0,0,0,0.25)]"
              >
                <div className="w-10 h-10 rounded-xl bg-[#153C56]/8 flex items-center justify-center mb-5">
                  <svg className="w-[18px] h-[18px] text-[#153C56]" viewBox="0 0 24 24">
                    {item.icon}
                  </svg>
                </div>
                <h3 className="font-bold text-[#153C56] text-sm mb-2">{item.title}</h3>
                <p className="text-[12.5px] text-slate-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="cta" className="border-t border-white/10 py-24 md:py-32 px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Ready to <span className="text-[#DC0017]">Hire Smarter</span>
          </h2>
          <p className="mt-5 text-slate-300 max-w-xl mx-auto leading-relaxed">
            Tell us about the role, and the person who isn&rsquo;t looking for a job, but should be talking to you.
          </p>
          <div className="mt-9 flex justify-center">
            <CTAButton href="/about">Schedule a Confidential Consultation</CTAButton>
          </div>
        </div>
      </section>

      {/* SECTION 4: TESTIMONIAL SLIDER */}
      <section className="bg-white py-24 px-4 md:px-8 flex flex-col items-center justify-center text-center border-t border-gray-100">
        <div className="w-full max-w-6xl mx-auto flex items-center justify-between gap-4 md:gap-8">
          
          <button 
            onClick={prevSlide}
            className="shrink-0 w-12 h-12 md:w-14 md:h-14 bg-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex items-center justify-center text-[#0B2A4A] hover:bg-gray-50 hover:text-red-600 transition-all cursor-pointer focus:outline-none"
            aria-label="Previous Slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="w-full max-w-4xl mx-auto overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {testimonials.map((testi, index) => (
                <div key={index} className="w-full shrink-0 flex flex-col items-center justify-center px-2 md:px-6">
                  
                  <div className="mb-8">
                    <svg className="w-12 h-12 text-[#FF6B6B] mx-auto opacity-90" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M116,72v88a48.05,48.05,0,0,1-48,48,8,8,0,0,1,0-16,32,32,0,0,0,32-32v-8H40a16,16,0,0,1-16-16V72A16,16,0,0,1,40,56h60A16,16,0,0,1,116,72ZM216,56H156a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,216,56Z"></path>
                    </svg>
                  </div>
                  
                  <p className="text-xl md:text-2xl font-medium text-[#0B2A4A] max-w-3xl mb-8 leading-relaxed mx-auto">
                    {testi.quote}
                  </p>
                  <div className="mb-4">
                    <h4 className="text-[#0B2A4A] font-extrabold text-sm mb-1">{testi.name}</h4>
                    <p className="text-gray-500 text-sm">{testi.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={nextSlide}
            className="shrink-0 w-12 h-12 md:w-14 md:h-14 bg-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex items-center justify-center text-[#0B2A4A] hover:bg-gray-50 hover:text-red-600 transition-all cursor-pointer focus:outline-none"
            aria-label="Next Slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        <div className="flex items-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ease-in-out cursor-pointer focus:outline-none ${
                activeSlide === index ? 'w-8 bg-red-600' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ============ FINAL SPLIT CTA ============ */}
      <section className="bg-white py-24 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] bg-[#1a365d]">
            
            {/* Kiri: Gambar */}
            <div className="md:w-5/12 min-h-[300px] md:min-h-[480px] bg-slate-200 relative">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" 
                alt="HR Professional" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            
            {/* Kanan: Teks dan Tombol CTA */}
            <div className="md:w-7/12 p-10 md:p-20 flex flex-col justify-center relative">
              
              <div className="absolute top-0 bottom-0 left-[60%] w-32 bg-white/5 skew-x-12 hidden md:block"></div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight relative z-10">
                Find the Right Path <br className="hidden md:block"/>
                for Your HR Team
              </h2>
              <p className="text-gray-300 text-sm md:text-lg mb-10 leading-relaxed relative z-10 max-w-lg">
                Whether you want to provide continuous learning, close skill gaps, or build HR capabilities at scale, AIHR offers tailored solutions designed to support your goals.
              </p>
              
              <button className="bg-[#cc3333] hover:bg-[#b32b2b] transition text-white text-sm font-bold uppercase tracking-wider py-4 px-8 rounded-lg w-max flex items-center gap-2 relative z-10 shadow-lg">
                BOOK A CALL
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </button>
            </div>
            
          </div>
        </div>
      </section>
    </main>
  );
}