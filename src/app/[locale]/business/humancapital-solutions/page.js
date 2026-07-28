'use client';

import React from 'react';
import Image from 'next/image';
import CTA from '@/components/CTA';

export default function HumanCapitalSolutions() {
  return (
    <main className="min-h-screen bg-slate-50 text-brand-navy selection:bg-brand-red selection:text-white overflow-hidden">
      
      {/* SECTION 1 — HERO SECTION (RATA KIRI) */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-brand-navy text-white overflow-hidden">
        
        {/* Latar Belakang: Tim Profesional Indonesia di Kantor Modern */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1530099486328-e021101a494a?q=80&w=2400&auto=format&fit=crop"
            alt="Indonesian Business Team Meeting in Modern Office"
            fill
            unoptimized
            priority
            className="object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/85 to-brand-navy/40" />
        </div>

        {/* Teks diubah menjadi text-left dan menghapus items-center */}
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-10 text-left -mt-4 md:-mt-8">
          
          <span className="text-eyebrow-lg text-brand-red block mb-4 md:mb-5 drop-shadow-md">
            Human Capital Solutions
          </span>

          <h1 className="text-white max-w-4xl text-balance mb-6 md:mb-8">
            Connecting Your Business with Exceptional Talent
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl drop-shadow-md mb-10">
            Fulfilling human resource needs from entry-level to top executives. We deliver strategic talent solutions designed to support your company's growth and operational stability.
          </p>
          
        </div>
      </section>

      {/* SECTION 2 — BENTO GRID MODERN (Core Pillars) */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto relative">
        {/* Latar Ambient Soft Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-red/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-3xl mb-16 md:mb-20 relative z-10">
          <span className="text-eyebrow-lg text-brand-red block mb-4">
            Core Pillars
          </span>
          <h2 className="text-brand-navy mt-6 mb-4 text-balance">
            Comprehensive Talent Infrastructure
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Aligning leadership capabilities and corporate values at every level. Our three focused pillars eliminate hiring risks and drive long-term organizational retention.
          </p>
        </div>

        {/* Layout Bento Grid 12-Kolom */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 relative z-10">

          {/* CARD 1: Executive Search & Headhunting (Span 7) */}
          <div className="lg:col-span-7 group bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-md hover:shadow-2xl hover:shadow-brand-red/10 hover:border-brand-red/30 hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-sm font-bold tracking-widest uppercase text-slate-400">Pillar 01</span>
                {/* Disesuaikan: tanpa background dan border */}
                <span className="text-sm font-bold uppercase tracking-widest text-brand-red">
                  Confidential Search
                </span>
              </div>

              <div className="grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-7">
                  <h3 className="text-brand-navy mb-4 group-hover:text-brand-red transition-colors">
                    Executive Search &amp; Headhunting
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    A proactive, highly targeted approach to recruiting passive C-suite talents and senior leaders who possess a proven track record of steering organizations to success.
                  </p>

                  <ul className="space-y-4">
                    {[
                      'Targeted mapping of inactive, elite market leaders',
                      'Discrete multi-tier background verification',
                      'Cultural & leadership alignment checks'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm font-semibold text-brand-navy">
                        <div 
                          className="shrink-0 w-5 h-5 bg-brand-red mt-0.5"
                          style={{
                            WebkitMaskImage: `url('/ic_check-circle-solid.svg')`,
                            WebkitMaskSize: 'contain',
                            WebkitMaskRepeat: 'no-repeat',
                            WebkitMaskPosition: 'center',
                            maskImage: `url('/ic_check-circle-solid.svg')`,
                            maskSize: 'contain',
                            maskRepeat: 'no-repeat',
                            maskPosition: 'center',
                          }}
                        />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* GAMBAR CARD 1: Kesepakatan Eksekutif / Jabat Tangan */}
                <div className="md:col-span-5 aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100 relative shadow-inner">
                  {/* Disesuaikan: menghapus grayscale */}
                  <Image
                    src="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?q=80&w=1200&auto=format&fit=crop"
                    alt="Asian Business Executives Shaking Hands in Conference Room"
                    fill
                    unoptimized
                    className="object-cover object-center group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 group-hover:border-brand-red/20 transition-colors duration-500 flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-widest">
              <span>Focus Area</span>
              <span className="text-brand-navy group-hover:text-brand-red transition-colors duration-500">C-Suite &amp; Board Directors</span>
            </div>
          </div>

          {/* CARD 2: Comprehensive Recruitment (Span 5) */}
          <div className="lg:col-span-5 group bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-md hover:shadow-2xl hover:shadow-brand-navy/10 hover:border-brand-navy/30 hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-sm font-bold tracking-widest uppercase text-slate-400">Pillar 02</span>
                {/* Disesuaikan: tanpa background dan border */}
                <span className="text-sm font-bold uppercase tracking-widest text-brand-navy">
                  End-To-End
                </span>
              </div>

              {/* GAMBAR CARD 2: Tim Rekrutmen Meninjau Kandidat */}
              <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-slate-100 relative mb-8">
                {/* Disesuaikan: menghapus grayscale */}
                <Image
                  src="https://images.unsplash.com/photo-1531498352491-042fbae4cf57?q=80&w=1200&auto=format&fit=crop"
                  alt="Asian Recruitment Team Reviewing Candidate Profiles on Computer"
                  fill
                  unoptimized
                  className="object-cover object-center group-hover:scale-105 transition-all duration-700"
                />
              </div>

              <h3 className="text-brand-navy mb-4 group-hover:text-brand-red transition-colors">
                Comprehensive Recruitment
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                End-to-end recruitment process management tailored for mid-level managers, key specialists, and operational roles across multiple sectors.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 group-hover:border-brand-navy/20 transition-colors duration-500 flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-widest">
              <span>Estimated Timeline</span>
              <span className="text-brand-navy">3–6 Weeks Placement</span>
            </div>
          </div>

          {/* CARD 3: Talent Assessment (Span 5) */}
          <div className="lg:col-span-5 group bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-md hover:shadow-2xl hover:shadow-brand-navy/10 hover:border-brand-navy/30 hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-sm font-bold tracking-widest uppercase text-slate-400">Pillar 03</span>
                {/* Disesuaikan: tanpa background dan border */}
                <span className="text-sm font-bold uppercase tracking-widest text-brand-navy">
                  Data-Driven
                </span>
              </div>

              {/* GAMBAR CARD 3: Tinjauan Hasil Asesmen Talenta */}
              <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-slate-100 relative mb-8">
                {/* Disesuaikan: menghapus grayscale */}
                <Image
                  src="https://images.unsplash.com/photo-1681569685386-b7bda397672e?q=80&w=1200&auto=format&fit=crop"
                  alt="Asian HR Professionals Reviewing Talent Assessment Data on Laptop"
                  fill
                  unoptimized
                  className="object-cover object-center group-hover:scale-105 transition-all duration-700"
                />
              </div>

              <h3 className="text-brand-navy mb-4 group-hover:text-brand-red transition-colors">
                Talent Assessment
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Psychometric testing, technical competency mapping, and culture compatibility benchmarks to guarantee long-term retention.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 group-hover:border-brand-navy/20 transition-colors duration-500 flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-widest">
              <span>Methodology</span>
              <span className="text-brand-navy">Evidence-Based Testing</span>
            </div>
          </div>

          {/* CARD 4: Executive Network Showcase */}
          <div className="lg:col-span-7 group bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-md hover:shadow-2xl hover:shadow-brand-red/10 hover:border-brand-red/30 hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-sm font-bold tracking-widest uppercase text-slate-400">Pillar 04</span>
                {/* Disesuaikan: tanpa background dan border */}
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-red">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
                  Exclusive Network
                </div>
              </div>

              <h3 className="text-brand-navy mb-4 group-hover:text-brand-red transition-colors text-balance">
                Access Indonesia&apos;s Elite Passive Talent Pool
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xl">
                By partnering with First HR Indonesia, you step into an exclusive, confidential network built over years of trusted relationships, bypassing standard recruitment friction.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-4 md:gap-6 relative z-10">
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 group-hover:border-brand-red/20 group-hover:-translate-y-1 group-hover:shadow-md transition-all duration-500">
                  <span className="block text-3xl md:text-5xl font-bold text-brand-red mb-2">94%</span>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">Placement Success Rate</span>
                </div>
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 group-hover:border-brand-navy/20 group-hover:-translate-y-1 group-hover:shadow-md transition-all duration-500">
                  <span className="block text-3xl md:text-5xl font-bold text-brand-navy mb-2">&lt;45 Days</span>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">Average Time-to-Fill</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 group-hover:border-brand-red/20 transition-colors duration-500 flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-widest">
              <span>Strategic Advantage</span>
              <span className="text-brand-navy group-hover:text-brand-red transition-colors duration-500">FHRI Premium Network</span>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3 — METHODOLOGY (UPDATED HOVER CARDS) */}
      <section className="bg-white border-y border-slate-200/60 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="max-w-3xl mb-16 md:mb-24 relative z-10">
            <span className="text-eyebrow-lg text-brand-red block mb-4">
              Our Process
            </span>
            <h2 className="text-brand-navy mt-6 mb-4 text-balance">
              Rigorous, Structured Methodology
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We don&apos;t just match resumes; we analyze structures. Every search consultant works exclusively within their vertical to guarantee domain expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                n: '01',
                title: 'Targeted Market Mapping',
                text: 'Mapping the industry to identify prospective leaders who fit your exact structural objectives.',
                icon: '/ic_trending-up.svg', 
              },
              {
                n: '02',
                title: 'Discreet Outreach & Pitching',
                text: 'Personal, highly confidential conversations presenting your value proposition directly to leaders.',
                icon: '/ic_chat-text-outline.svg', 
              },
              {
                n: '03',
                title: 'Rigorous Calibration',
                text: 'Behavioral testing, reference checks, and cultural calibration for full management-style alignment.',
                icon: '/ic_check-shield-outline.svg', 
              },
            ].map((step) => (
              <div key={step.n} className="flex flex-col items-start group bg-white p-8 md:p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-brand-red/20 hover:-translate-y-2 transition-all duration-500">
                
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 border border-slate-100 group-hover:bg-brand-red group-hover:border-brand-red group-hover:shadow-lg group-hover:shadow-brand-red/20 transition-all duration-500">
                  <div 
                    className="w-8 h-8 md:w-9 md:h-9 bg-brand-navy group-hover:bg-white transition-colors duration-500" 
                    style={{
                      WebkitMaskImage: `url('${step.icon}')`,
                      WebkitMaskSize: 'contain',
                      WebkitMaskRepeat: 'no-repeat',
                      WebkitMaskPosition: 'center',
                      maskImage: `url('${step.icon}')`,
                      maskSize: 'contain',
                      maskRepeat: 'no-repeat',
                      maskPosition: 'center',
                    }}
                  />
                </div>

                <span className="text-sm font-bold text-brand-red uppercase tracking-widest mb-3">Step {step.n}</span>
                <h3 className="text-brand-navy mb-4 group-hover:text-brand-red transition-colors">{step.title}</h3>
                <p className="text-slate-600 text-base leading-relaxed">{step.text}</p>
                
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