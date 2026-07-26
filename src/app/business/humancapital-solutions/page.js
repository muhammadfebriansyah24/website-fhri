'use client';

import React from 'react';
import CTA from '@/components/CTA';

function ModernEyebrow({ children }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DC2626]/10 border border-[#DC2626]/20">
      <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] animate-pulse" />
      <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.25em] text-[#DC2626]">
        {children}
      </span>
    </div>
  );
}

export default function HumanCapitalSolutions() {
  return (
    <main className="min-h-screen font-sans bg-[#F8F9FA] text-[#00263C] selection:bg-[#DC2626] selection:text-white">
      
      {/* SECTION 1 — HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-end bg-[#00263C] text-white overflow-hidden">
        {/* Latar Belakang: Tim Profesional Indonesia di Kantor Modern */}
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1530099486328-e021101a494a?q=80&w=2400&auto=format&fit=crop"
            alt="Indonesian Business Team Meeting in Modern Office"
            className="absolute inset-0 w-full h-full object-cover grayscale-[0.25] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#00263C] via-[#00263C]/85 to-[#00263C]/40" />
        </div>

        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 pt-36 pb-20 md:pb-28 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              Human Capital Solutions
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight max-w-4xl text-balance">
            Connecting Your Business with Exceptional Talent
          </h1>
          <p className="mt-6 text-base md:text-lg text-slate-300 leading-relaxed max-w-xl font-medium">
            Fulfilling human resource needs from entry-level to top executives. We deliver strategic talent solutions designed to support your company's growth and operational stability.
          </p>
        </div>

        {/* Scroll Cue */}
        <div className="hidden md:flex absolute bottom-8 right-8 md:right-12 items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-300/80 z-10">
          Scroll Down
          <span className="w-9 h-9 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm flex items-center justify-center animate-bounce">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 5v14M6 13l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </section>

      {/* SECTION 2 — BENTO GRID MODERN (Core Pillars) */}
      <section className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto relative">
        {/* Latar Ambient Soft Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#DC2626]/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-3xl mb-14 md:mb-20">
          <ModernEyebrow>Core Pillars</ModernEyebrow>
          <h2 className="mt-5 text-3xl md:text-5xl font-black text-[#00263C] leading-[1.08] tracking-tight">
            Comprehensive Talent Infrastructure
          </h2>
          <p className="mt-4 text-slate-500 text-base md:text-lg leading-relaxed">
            Aligning leadership capabilities and corporate values at every level. Our three focused pillars eliminate hiring risks and drive long-term organizational retention.
          </p>
        </div>

        {/* Layout Bento Grid 12-Kolom */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 relative z-10">

          {/* CARD 1: Executive Search & Headhunting (Span 7) */}
          <div className="lg:col-span-7 group bg-white rounded-3xl p-8 md:p-10 border border-slate-200/80 shadow-[0_20px_50px_-20px_rgba(0,38,60,0.08)] hover:shadow-[0_30px_70px_-20px_rgba(0,38,60,0.15)] hover:border-[#DC2626]/30 transition-all duration-500 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-black tracking-[0.2em] uppercase text-slate-400">Pillar 01</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#DC2626] bg-[#DC2626]/10 px-3.5 py-1.5 rounded-full">
                  Confidential Search
                </span>
              </div>

              <div className="grid md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-7">
                  <h3 className="text-2xl md:text-3xl font-black text-[#00263C] tracking-tight leading-tight">
                    Executive Search &amp; Headhunting
                  </h3>
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed mt-4">
                    A proactive, highly targeted approach to recruiting passive C-suite talents and senior leaders who possess a proven track record of steering organizations to success.
                  </p>

                  <ul className="mt-6 space-y-3">
                    {[
                      'Targeted mapping of inactive, elite market leaders',
                      'Discrete multi-tier background verification',
                      'Cultural & leadership alignment checks'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs font-semibold text-[#00263C]/90">
                        <span className="w-4 h-4 rounded-full bg-[#DC2626]/10 text-[#DC2626] flex items-center justify-center shrink-0 mt-0.5">
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* GAMBAR CARD 1: Kesepakatan Eksekutif / Jabat Tangan */}
                <div className="md:col-span-5 aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100 relative shadow-inner">
                  <img
                    src="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?q=80&w=1200&auto=format&fit=crop"
                    alt="Asian Business Executives Shaking Hands in Conference Room"
                    className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00263C]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              <span>Focus Area</span>
              <span className="text-[#00263C]">C-Suite &amp; Board Directors</span>
            </div>
          </div>

          {/* CARD 2: Comprehensive Recruitment (Span 5) */}
          <div className="lg:col-span-5 group bg-white rounded-3xl p-8 md:p-10 border border-slate-200/80 shadow-[0_20px_50px_-20px_rgba(0,38,60,0.08)] hover:shadow-[0_30px_70px_-20px_rgba(0,38,60,0.15)] hover:border-[#00263C]/30 transition-all duration-500 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-black tracking-[0.2em] uppercase text-slate-400">Pillar 02</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#00263C] bg-[#00263C]/5 px-3.5 py-1.5 rounded-full">
                  End-To-End
                </span>
              </div>

              {/* GAMBAR CARD 2: Tim Rekrutmen Meninjau Kandidat */}
              <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-slate-100 relative mb-6">
                <img
                  src="https://images.unsplash.com/photo-1531498352491-042fbae4cf57?q=80&w=1200&auto=format&fit=crop"
                  alt="Asian Recruitment Team Reviewing Candidate Profiles on Computer"
                  className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>

              <h3 className="text-xl md:text-2xl font-black text-[#00263C] tracking-tight">
                Comprehensive Recruitment
              </h3>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed mt-3">
                End-to-end recruitment process management tailored for mid-level managers, key specialists, and operational roles across multiple sectors.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              <span>Estimated Timeline</span>
              <span className="text-[#00263C]">3–6 Weeks Placement</span>
            </div>
          </div>

          {/* CARD 3: Talent Assessment (Span 5) */}
          <div className="lg:col-span-5 group bg-white rounded-3xl p-8 md:p-10 border border-slate-200/80 shadow-[0_20px_50px_-20px_rgba(0,38,60,0.08)] hover:shadow-[0_30px_70px_-20px_rgba(0,38,60,0.15)] hover:border-[#00263C]/30 transition-all duration-500 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-black tracking-[0.2em] uppercase text-slate-400">Pillar 03</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#00263C] bg-[#00263C]/5 px-3.5 py-1.5 rounded-full">
                  Data-Driven
                </span>
              </div>

              {/* GAMBAR CARD 3: Tinjauan Hasil Asesmen Talenta */}
              <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-slate-100 relative mb-6">
                <img
                  src="https://images.unsplash.com/photo-1681569685386-b7bda397672e?q=80&w=1200&auto=format&fit=crop"
                  alt="Asian HR Professionals Reviewing Talent Assessment Data on Laptop"
                  className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>

              <h3 className="text-xl md:text-2xl font-black text-[#00263C] tracking-tight">
                Talent Assessment
              </h3>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed mt-3">
                Psychometric testing, technical competency mapping, and culture compatibility benchmarks to guarantee long-term retention.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              <span>Methodology</span>
              <span className="text-[#00263C]">Evidence-Based Testing</span>
            </div>
          </div>

          {/* CARD 4: Executive Network Showcase */}
          <div className="lg:col-span-7 group bg-white rounded-3xl p-8 md:p-10 border border-slate-200/80 shadow-[0_20px_50px_-20px_rgba(0,38,60,0.08)] hover:shadow-[0_30px_70px_-20px_rgba(0,38,60,0.15)] hover:border-[#DC2626]/30 transition-all duration-500 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-black tracking-[0.2em] uppercase text-slate-400">Pillar 04</span>
                <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.15em] text-[#DC2626] bg-[#DC2626]/10 px-3.5 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] animate-pulse" />
                  Exclusive Network
                </span>
              </div>

              <h3 className="text-2xl md:text-4xl font-black text-[#00263C] leading-tight tracking-tight max-w-lg">
                Access Indonesia&apos;s Elite Passive Talent Pool
              </h3>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed mt-4 max-w-xl">
                By partnering with First HR Indonesia, you step into an exclusive, confidential network built over years of trusted relationships, bypassing standard recruitment friction.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 md:gap-6 relative z-10">
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 group-hover:border-[#DC2626]/20 transition-colors duration-500">
                  <span className="block text-3xl md:text-4xl font-black text-[#DC2626]">94%</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1.5 block">Placement Success Rate</span>
                </div>
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 group-hover:border-[#00263C]/20 transition-colors duration-500">
                  <span className="block text-3xl md:text-4xl font-black text-[#00263C]">&lt;45 Days</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1.5 block">Average Time-to-Fill</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              <span>Strategic Advantage</span>
              <span className="text-[#00263C]">FHRI Premium Network</span>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3 — METHODOLOGY */}
      <section className="bg-white border-y border-slate-200/60 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16 md:mb-20">
            <ModernEyebrow>Our Process</ModernEyebrow>
            <h2 className="mt-5 text-3xl md:text-5xl font-black text-[#00263C] leading-[1.08] tracking-tight">
              Rigorous, Structured Methodology
            </h2>
            <p className="mt-4 text-slate-500 text-base md:text-lg leading-relaxed">
              We don&apos;t just match resumes; we analyze structures. Every search consultant works exclusively within their vertical to guarantee domain expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                n: '01',
                title: 'Targeted Market Mapping',
                text: 'Mapping the industry to identify prospective leaders who fit your exact structural objectives.',
                icon: (
                  <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8 md:w-9 md:h-9">
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
                  <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8 md:w-9 md:h-9">
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
                  <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8 md:w-9 md:h-9">
                    <path d="M24 5 L40 11 V22 C40 32 33 39 24 43 C15 39 8 32 8 22 V11 Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
                    <path d="M17 23 L22 28 L31 17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
            ].map((step) => (
              <div key={step.n} className="flex flex-col items-start">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#00263C]/5 text-[#00263C] flex items-center justify-center mb-6 border border-[#00263C]/10">
                  {step.icon}
                </div>
                <span className="text-[11px] font-black text-[#DC2626] uppercase tracking-[0.2em] mb-2">Step {step.n}</span>
                <h3 className="text-xl font-extrabold text-[#00263C] mb-2">{step.title}</h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed max-w-xs">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — CALL TO ACTION */}
      <CTA />

    </main>
  );
}