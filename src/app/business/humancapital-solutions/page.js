'use client';

import React, { useState } from 'react';
import Link from 'next/link';

function ModernEyebrow({ children }) {
  return (
    <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-[#DC2626]">
      {children}
    </span>
  );
}

function PremiumCTAButton({ href, children }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-4 bg-[#00263C] text-white pl-7 pr-3 py-3 rounded-full font-bold text-sm transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#DC2626] active:scale-[0.97] shadow-[0_20px_48px_-12px_rgba(0,38,60,0.15)] hover:shadow-[0_20px_48px_-12px_rgba(220,38,38,0.3)]"
    >
      {children}
      <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-[1px]">
        <svg className="w-4.5 h-4.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </Link>
  );
}

function PremiumSecondaryCTA({ href, children }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-3 bg-white text-[#00263C] pl-6 pr-2.5 py-2.5 rounded-full font-bold text-sm transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-[#00263C]/80 active:scale-[0.97] shadow-[0_10px_30px_rgba(0,38,60,0.02)] border border-slate-200/80"
    >
      {children}
      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#00263C]/5 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-[1px]">
        <svg className="w-4 h-4 text-[#00263C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </Link>
  );
}

export default function HumanCapitalSolutions() {
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    {
      quote: '"First HR Indonesia transformed our senior leadership search. Their target-focused, discreet methodology delivered a match for our C-suite vacancy within weeks, saving us immense time and ensuring alignment."',
      name: 'Michael Wijaya',
      role: 'Chief Executive Officer, AstraTech Group',
    },
    {
      quote: '"The psychometric profiling and cultural fit alignment in FHRI\'s assessment tools removed the guesswork from our specialist recruitment drive. High retention, perfect alignment."',
      name: 'Dewi Lestari',
      role: 'Director of Human Resources, Nusantara Capital',
    },
    {
      quote: '"Scale and speed. Their end-to-end recruitment process allowed us to onboard 15 senior developers across three offices with absolute compliance and zero quality dilution."',
      name: 'Rian Hidayat',
      role: 'VP of Engineering, Mandiri Digital Lab',
    }
  ];

  const nextSlide = () => setActiveSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setActiveSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  return (
    <main className="min-h-screen font-sans bg-[#F8F9FA] text-[#00263C] selection:bg-[#DC2626] selection:text-white">
      
      {/* SECTION 1 — HERO SECTION (Airy Layout & Massive Typography) */}
      <section className="relative min-h-[92vh] flex items-end bg-[#00263C] text-white overflow-hidden">
        {/* Full-bleed background image */}
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2400&auto=format&fit=crop"
            alt="Strategic Business Collaboration"
            className="absolute inset-0 w-full h-full object-cover grayscale-[0.3]"
          />
          {/* Readability gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#00263C] via-[#00263C]/70 to-[#00263C]/20" />
        </div>

        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 pb-20 md:pb-28 pt-40 relative z-10">
          <span className="text-xs md:text-sm font-black uppercase tracking-[0.3em] text-[#DC2626]">
            Human Capital Solutions
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.03] tracking-tight max-w-4xl text-balance">
            Connecting Your Business with Exceptional Talent
          </h1>
          <p className="mt-7 text-base md:text-lg text-slate-200 leading-relaxed max-w-xl font-medium">
            Fulfilling human resource needs from entry-level to top executives. We deliver strategic talent solutions designed to support your company&apos;s growth and operational stability.
          </p>
          <div className="mt-10">
            <PremiumCTAButton href="#cta">Consult Our Experts</PremiumCTAButton>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="hidden md:flex absolute bottom-8 right-8 md:right-12 items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-300 z-10">
          Scroll Down
          <span className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center animate-bounce">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 5v14M6 13l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </section>

      {/* SECTION 2 — THE ASYMMETRICAL BENTO GRID (Concentric Cards & No Heavy Borders) */}
      <section className="py-28 md:py-40 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="max-w-3xl mb-20">
          <ModernEyebrow>Core Pillars</ModernEyebrow>
          <h2 className="mt-6 text-3xl md:text-5xl lg:text-6xl font-black text-[#00263C] leading-[1.02] tracking-tight">
            Comprehensive Talent Infrastructure
          </h2>
          <p className="mt-6 text-slate-500 text-base md:text-lg leading-relaxed">
            Aligning leadership capabilities and corporate values at every level. Our three focused pillars eliminate hiring risks and drive long-term organizational retention.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">

          {/* Card 1: Executive Search & Headhunting (Large Card) */}
          <div className="lg:col-span-2 group bg-white rounded-[2rem] border border-slate-100 shadow-[0_30px_70px_-30px_rgba(0,38,60,0.12)] hover:shadow-[0_40px_90px_-30px_rgba(0,38,60,0.18)] hover:-translate-y-1.5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] overflow-hidden">
            <div className="p-8 md:p-12 flex flex-col h-full">
              <div className="flex items-start justify-between mb-8">
                <span className="text-6xl md:text-7xl font-black text-slate-100 leading-none select-none">01</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#DC2626] bg-[#DC2626]/5 px-4 py-1.5 rounded-full mt-2">
                  Confidential Search
                </span>
              </div>

              <div className="grid md:grid-cols-12 gap-8 items-start flex-1">
                <div className="md:col-span-7">
                  <h3 className="text-2xl md:text-3xl font-black text-[#00263C] leading-tight">
                    Executive Search &amp; Headhunting
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mt-4">
                    A proactive, highly targeted approach to recruiting passive C-suite talents and senior leaders. We engage top-tier executives who are not actively seeking employment but possess a proven track record of steering organizations to success.
                  </p>

                  <ul className="mt-8 space-y-4">
                    {[
                      'Targeted mapping of inactive, elite market leaders',
                      'Rigorous, multi-tier discrete screening & background verification',
                      'Strategic cultural and operational goal alignment checks'
                    ].map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs md:text-sm font-semibold text-[#00263C]/80">
                        <svg className="w-5 h-5 text-[#DC2626] shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="md:col-span-5 rounded-2xl overflow-hidden aspect-[4/5] bg-slate-100 relative">
                  <img
                    src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop"
                    alt="C-Suite Executive Professional Portrait"
                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>

              <div className="pt-8 border-t border-slate-100 mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Focus: C-Suite &amp; Board Directors</span>
                <Link href="#cta" className="text-[#DC2626] text-xs font-bold uppercase tracking-widest hover:text-[#B91C1C] transition-all flex items-center gap-1.5">
                  Request Briefing <span className="text-sm">→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Comprehensive Recruitment */}
          <div className="group bg-white rounded-[2rem] border border-slate-100 shadow-[0_30px_70px_-30px_rgba(0,38,60,0.12)] hover:shadow-[0_40px_90px_-30px_rgba(0,38,60,0.18)] hover:-translate-y-1.5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] overflow-hidden">
            <div className="p-8 md:p-10 flex flex-col h-full">
              <div className="flex items-start justify-between mb-6">
                <span className="text-6xl font-black text-slate-100 leading-none select-none">02</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#00263C] bg-[#00263C]/5 px-4 py-1.5 rounded-full mt-2">
                  End-To-End
                </span>
              </div>

              <div className="rounded-2xl overflow-hidden aspect-[16/10] bg-slate-100 relative mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop"
                  alt="Mid Management Team Collaboration"
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>

              <h3 className="text-xl font-extrabold text-[#00263C] leading-snug">
                Comprehensive Recruitment
              </h3>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed mt-4 flex-1">
                End-to-end recruitment process management for mid-level positions and specialists across industries.
              </p>

              <div className="pt-6 border-t border-slate-100 mt-8">
                <span className="block text-[10px] font-black text-[#00263C] uppercase tracking-wider">Est. 3–6 Weeks</span>
              </div>
            </div>
          </div>

          {/* Card 3: Talent Assessment */}
          <div className="group bg-white rounded-[2rem] border border-slate-100 shadow-[0_30px_70px_-30px_rgba(0,38,60,0.12)] hover:shadow-[0_40px_90px_-30px_rgba(0,38,60,0.18)] hover:-translate-y-1.5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] overflow-hidden">
            <div className="p-8 md:p-10 flex flex-col h-full">
              <div className="flex items-start justify-between mb-6">
                <span className="text-6xl font-black text-slate-100 leading-none select-none">03</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#00263C] bg-[#00263C]/5 px-4 py-1.5 rounded-full mt-2">
                  Evidence-Based
                </span>
              </div>

              <div className="rounded-2xl overflow-hidden aspect-[16/10] bg-slate-100 relative mb-6">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop"
                  alt="Cognitive Assessment and Testing Metrics"
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>

              <h3 className="text-xl font-extrabold text-[#00263C] leading-snug">
                Talent Assessment
              </h3>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed mt-4 flex-1">
                Rigorous psychometric evaluations, competency mapping, and culture compatibility tests to ensure long-term alignment.
              </p>

              <div className="pt-6 border-t border-slate-100 mt-8">
                <span className="block text-[10px] font-black text-[#00263C] uppercase tracking-wider">Custom Delivery</span>
              </div>
            </div>
          </div>

          {/* Card 4: Executive Network Showcase */}
          <div className="lg:col-span-2 bg-[#00263C] rounded-[2rem] relative overflow-hidden group hover:-translate-y-1.5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
            <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-[#DC2626]/10 blur-[90px] pointer-events-none" />
            <div className="p-8 md:p-12 h-full flex flex-col justify-between relative z-10">
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#DC2626]">FHRI Network Asset</span>
                <h3 className="text-3xl md:text-4xl font-extrabold text-white mt-5 leading-tight tracking-tight">
                  Access Indonesia&apos;s Elite Passive Talent Pool
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mt-4 max-w-xl">
                  By partnering with First HR Indonesia, you step into an exclusive network built over years of trusted relationships, bypassing standard recruitment friction.
                </p>
              </div>

              <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-2 sm:flex sm:items-center gap-8 sm:gap-12 justify-between">
                <div>
                  <span className="block text-3xl font-black text-[#DC2626]">94%</span>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Placement Success</span>
                </div>
                <div>
                  <span className="block text-3xl font-black text-[#DC2626]">&lt;45 Days</span>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Avg Fill Time</span>
                </div>
                <div className="col-span-2 sm:ml-auto">
                  <PremiumSecondaryCTA href="#cta">Request Talent Pipeline</PremiumSecondaryCTA>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3 — METHODOLOGY (Connected Timeline) */}
      <section className="bg-white border-y border-slate-100 py-28 md:py-40">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-20 md:mb-24">
            <ModernEyebrow>Our Process</ModernEyebrow>
            <h2 className="mt-5 text-3xl md:text-5xl font-black text-[#00263C] leading-[1.02] tracking-tight">
              Rigorous, Structured Methodology
            </h2>
            <p className="mt-6 text-slate-500 text-base md:text-lg leading-relaxed">
              We don&apos;t just match resumes; we analyze structures. Every search consultant works exclusively within their vertical to guarantee domain expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-16">
            {[
              {
                n: '01',
                title: 'Targeted Market Mapping',
                text: 'Mapping the industry to identify prospective leaders who fit your exact structural objectives.',
                icon: (
                  <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9 md:w-10 md:h-10">
                    <path d="M8 30 L18 22 L26 27 L40 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M40 12 L40 20 M40 12 L32 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="18" cy="22" r="2" fill="currentColor" />
                    <circle cx="26" cy="27" r="2" fill="currentColor" />
                    <path d="M6 38h36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                n: '02',
                title: 'Discreet Outreach & Pitching',
                text: 'Personal, highly confidential conversations presenting your value proposition directly to leaders.',
                icon: (
                  <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9 md:w-10 md:h-10">
                    <path d="M8 20v14a2 2 0 0 0 2 2h9l7 7v-7h14a2 2 0 0 0 2-2V20a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
                    <path d="M15 26h18M15 32h11" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                n: '03',
                title: 'Rigorous Calibration',
                text: 'Behavioral testing, reference checks, and cultural calibration for full management-style alignment.',
                icon: (
                  <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9 md:w-10 md:h-10">
                    <path d="M24 5 L40 11 V22 C40 32 33 39 24 43 C15 39 8 32 8 22 V11 Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
                    <path d="M17 23 L22 28 L31 17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
            ].map((step) => (
              <div key={step.n} className="flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#00263C]/5 text-[#00263C] flex items-center justify-center mb-7">
                  {step.icon}
                </div>
                <span className="text-xs font-black text-[#DC2626] uppercase tracking-[0.2em] mb-3">Step {step.n}</span>
                <h3 className="text-xl font-extrabold text-[#00263C] mb-3">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-xs">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — TESTIMONIAL (Elevated Card Slider) */}
      <section className="bg-[#F8F9FA] py-28 md:py-40 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_40px_100px_-30px_rgba(0,38,60,0.15)] p-10 md:p-16 relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-48 h-48 rounded-full bg-[#DC2626]/5 blur-[60px] pointer-events-none" />

            <svg className="w-9 h-9 text-[#DC2626] relative z-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>

            <div className="overflow-hidden mt-8 relative z-10">
              <div
                className="flex transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {testimonials.map((testi, idx) => (
                  <div key={idx} className="w-full shrink-0">
                    <p className="text-xl md:text-2xl lg:text-3xl font-bold text-[#00263C] leading-tight tracking-tight text-balance">
                      {testi.quote}
                    </p>
                    <div className="mt-8 flex items-center gap-4">
                      <div className="w-11 h-11 rounded-full bg-[#00263C] text-white flex items-center justify-center font-black text-sm shrink-0">
                        {testi.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-[#00263C] font-extrabold text-sm">{testi.name}</h4>
                        <p className="text-slate-400 text-xs font-semibold mt-0.5">{testi.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between mt-10 pt-8 border-t border-slate-100 relative z-10">
              <div className="flex items-center gap-3">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    className={`h-1.5 rounded-full transition-all duration-500 ease-out cursor-pointer ${
                      activeSlide === idx ? 'w-8 bg-[#DC2626]' : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full border border-slate-200 hover:border-[#00263C] flex items-center justify-center text-[#00263C] transition-colors cursor-pointer"
                  aria-label="Previous Slide"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full border border-slate-200 hover:border-[#00263C] flex items-center justify-center text-[#00263C] transition-colors cursor-pointer"
                  aria-label="Next Slide"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — CALL TO ACTION (Strategic Consulting Form) */}
      <section id="cta" className="py-28 md:py-40 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row rounded-[2.5rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,38,60,0.15)] bg-[#00263C] text-white">
            
            {/* Left Side: Editorial & Detail */}
            <div className="lg:w-1/2 p-10 md:p-16 lg:p-20 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -left-16 -top-16 w-80 h-80 rounded-full bg-[#DC2626]/10 blur-[90px] pointer-events-none" />
              
              <div>
                <ModernEyebrow>Strategic Partnering</ModernEyebrow>
                <h2 className="text-3xl md:text-5xl font-black text-white mt-8 leading-tight tracking-tight">
                  Discuss Your <br />
                  Hiring Needs
                </h2>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed mt-6">
                  Tell us about the leadership profiles you need. Our team of executive search professionals will map the industry and deliver exceptional candidates matching your specific cultural and strategic goals.
                </p>
              </div>

              <div className="mt-12 flex items-center gap-6">
                <div>
                  <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest">Office Location</span>
                  <span className="block text-sm font-semibold text-white mt-1">Jakarta, Indonesia</span>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div>
                  <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest">Email Inquiry</span>
                  <span className="block text-sm font-semibold text-white mt-1">info@firsthr.co.id</span>
                </div>
              </div>
            </div>

            {/* Right Side: Form (Double-Bezel concentric design inside the dark section) */}
            <div className="lg:w-1/2 p-8 md:p-12 lg:p-16 bg-[#001E2F]">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
                <h3 className="text-lg font-bold text-white mb-6">Schedule a Talent Consultation</h3>
                
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Brief submitted successfully. Our lead consultant will connect with you via email."); }}>
                  <div>
                    <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Business Email *</label>
                    <input required type="email" placeholder="name@company.com" className="w-full bg-white/5 border border-white/10 text-white placeholder:text-slate-500 rounded-lg px-3.5 py-2.5 text-xs md:text-sm focus:outline-none focus:border-[#DC2626] transition-colors" />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Company Name *</label>
                      <input required type="text" placeholder="Company Ltd" className="w-full bg-white/5 border border-white/10 text-white placeholder:text-slate-500 rounded-lg px-3.5 py-2.5 text-xs md:text-sm focus:outline-none focus:border-[#DC2626] transition-colors" />
                    </div>
                    <div>
                      <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Target Position *</label>
                      <input required type="text" placeholder="e.g. VP of Operations" className="w-full bg-white/5 border border-white/10 text-white placeholder:text-slate-500 rounded-lg px-3.5 py-2.5 text-xs md:text-sm focus:outline-none focus:border-[#DC2626] transition-colors" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Brief description of the role</label>
                    <textarea rows="3" placeholder="Core challenges and requirements..." className="w-full bg-white/5 border border-white/10 text-white placeholder:text-slate-500 rounded-lg px-3.5 py-2.5 text-xs md:text-sm focus:outline-none focus:border-[#DC2626] transition-colors resize-none" />
                  </div>

                  <button type="submit" className="w-full bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold text-xs uppercase tracking-widest py-3.5 rounded-lg transition-colors duration-300 mt-2">
                    Submit Search Brief
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
