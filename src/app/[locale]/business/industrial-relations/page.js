'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import CTA from '@/components/CTA';
import { getLegalData } from '@/components/legalData';

// ============================================================
// REUSABLE UI COMPONENTS
// ============================================================
function Eyebrow({ children, tone = 'light' }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] ${
        tone === 'light' 
          ? 'bg-white/10 text-white border border-white/20' 
          : 'bg-brand-navy/10 text-brand-navy'
      }`}
    >
      {children}
    </span>
  );
}

// ============================================================
// KOMPONEN PORTAL KONSULTASI
// ============================================================
function ConsultationPortalSection() {
  return (
    <section className="py-24 px-6 md:px-12 bg-slate-50 relative flex justify-center items-center">
      
      {/* Container Card Premium */}
      <div className="relative w-full max-w-5xl bg-brand-navy rounded-[2.5rem] p-10 md:p-16 text-center shadow-[0_20px_50px_-15px_rgba(0,38,60,0.5)] overflow-hidden group">
        
        {/* Ornamen Latar Belakang (Glow Effects) */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-brand-red/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 group-hover:bg-brand-red/30 transition-colors duration-700 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
        
        {/* Pola Grid Tipis (Opsional untuk tekstur) */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

        {/* Konten Utama */}
        <div className="relative z-10 flex flex-col items-center">
          
          {/* Eyebrow Label */}
          <span className="inline-flex items-center rounded-full px-5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] bg-white/10 text-white border border-white/20 mb-6 backdrop-blur-sm shadow-sm">
            Direct Expert Access
          </span>
          
          {/* Headline Utama */}
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight max-w-3xl">
            Get Instant Clarity on Your <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-400">
              Legal & Industrial Relations
            </span>
          </h2>
          
          {/* Deskripsi */}
          <p className="text-slate-300 text-base md:text-lg mb-10 max-w-2xl leading-relaxed">
            Don't navigate complex labor regulations alone. Connect directly with our certified First HR Indonesia professionals for personalized, confidential, and actionable legal advisory.
          </p>
          
          {/* ==================================================== */}
          {/* CTA MENUJU SUBDOMAIN */}
          {/* ==================================================== */}
          <div className="relative mt-2">
            <div className="absolute -inset-1 bg-brand-red/30 rounded-full blur animate-pulse"></div>
            
            <a 
              href="https://legal.firsthrindonesia.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative flex items-center justify-center px-8 py-4 font-bold text-brand-navy bg-white rounded-full overflow-hidden group/btn shadow-[0_10px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_0_40px_rgba(220,38,38,0.4)] transition-all duration-300 hover:-translate-y-1"
            >
              {/* Animasi Background Hover Tombol (Berubah jadi Merah) */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-brand-red to-red-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
              
              {/* Konten Tombol */}
              <span className="relative flex items-center gap-3 group-hover/btn:text-white transition-colors duration-300">
                
                {/* 1. Ikon Chat (Kiri) - Menggunakan Masking agar warnanya responsif */}
                <div 
                  className="w-5 h-5 bg-brand-navy group-hover/btn:bg-white transition-colors duration-300 shrink-0"
                  style={{
                    WebkitMaskImage: `url('/icons/ic_chat-text-outline.svg')`,
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskImage: `url('/icons/ic_chat-text-outline.svg')`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                  }}
                />

                <span className="mt-0.5">Consult with an Expert</span>
                
                {/* 2. Ikon Panah Kanan (Tetap dipertahankan untuk indikasi link keluar) */}
                <svg 
                  className="w-5 h-5 group-hover/btn:translate-x-1.5 transition-transform duration-300" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </a>
          </div>
          
          <p className="mt-6 text-xs text-white/50 font-medium">
            Secure, confidential, and tailored to your corporate needs.
          </p>

        </div>
      </div>
    </section>
  );
}

// ============================================================
// MAIN PAGE COMPONENT
// ============================================================
export default function IndustrialRelationsPage() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  const locale = useLocale();
  const data = getLegalData(locale);

  return (
    <main className="min-h-screen bg-slate-50 text-brand-navy selection:bg-brand-red selection:text-white overflow-hidden">
      
      {/* =========================================
          SECTION 1: HERO SECTION
          ========================================= */}
      <section className="relative min-h-0 pt-32 pb-20 md:min-h-[85vh] md:py-0 flex items-center bg-brand-navy overflow-hidden">
        {/* Background Blur Effects */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-red/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>

        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-10 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: Copywriting */}
          <div className="flex flex-col justify-center items-center lg:items-start relative z-10 text-center lg:text-left mt-0 lg:-mt-8">
            <div className="mb-4 md:mb-5">
              <span className="text-eyebrow-lg block mb-2">{data.hero.eyebrow}</span>
            </div>
            
            <h1 className="text-white text-balance mb-6 md:mb-8">
              {data.hero.title1} <br className="hidden lg:block" /> <span className="text-white/70">{data.hero.title2}</span>
            </h1>
            <p className="text-slate-300 max-w-lg mx-auto lg:mx-0 mb-10 drop-shadow-md">
              {data.hero.description}
            </p>
          </div>

          {/* RIGHT COLUMN: Visual */}
          <div className="relative w-full max-w-sm mx-auto lg:max-w-none flex justify-center mt-6 lg:mt-0">
            {/* Responsif ukuran lingkaran visual di mobile agar badge tidak terpotong */}
            <div className="relative w-[300px] h-[300px] sm:w-[320px] sm:h-[320px] md:w-[450px] md:h-[450px]">
              <div className="absolute inset-0 border-[2px] border-white/20 rounded-full animate-[spin_20s_linear_infinite] border-dashed"></div>
              
              <div className="absolute inset-4 rounded-full overflow-hidden border-8 border-[#00263C] shadow-2xl">
                <Image src="/images/business-irla-hero.jpg" 
                alt="Person Reviewing Legal Document" 
                fill className="object-cover"
                unoptimized={process.env.NODE_ENV === 'development'}
                />
              </div>
              
              {/* Badge Status mengambang, diseimbangkan di mobile (p-3) */}
              <div className="absolute bottom-4 -left-4 sm:bottom-8 sm:-left-6 bg-white p-3 sm:p-4 rounded-2xl shadow-xl flex items-center gap-3 sm:gap-4 z-20">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <div 
                    className="w-5 h-5 sm:w-6 sm:h-6 bg-green-600 shrink-0"
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
                </div>
                <div className="text-left">
                  <div className="text-xs sm:text-xs text-slate-500 font-semibold uppercase tracking-wider">{data.hero.badgeStatus}</div>
                  <div className="text-xs sm:text-sm font-semibold text-brand-navy">{data.hero.badgeText}</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2 : AREA OF EXPERTISE */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <span className="text-eyebrow-lg block mb-2">
            {data.expertise.title}
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {data.expertise.services.map((service, idx) => (
            <div key={idx} className="group bg-white p-8 md:p-10 rounded-[2rem] shadow-sm hover:shadow-[0_20px_50px_-15px_rgba(220,38,38,0.15)] hover:-translate-y-1.5 transition-all duration-500 border border-slate-100 hover:border-brand-red/20 relative overflow-hidden flex flex-col h-full">
              
              {/* Floating ID Number */}
              <div className="absolute -right-4 -top-8 text-[120px] font-black text-slate-50 group-hover:text-brand-red/5 transition-colors duration-500 pointer-events-none select-none">
                {service.id}
              </div>
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Icon Wrapper dengan Efek Hover Merah Lembut */}
                <div className="w-16 h-16 bg-slate-50 border border-slate-100 group-hover:bg-brand-red/10 group-hover:border-brand-red/20 rounded-2xl flex items-center justify-center transition-all duration-500 mb-8 shadow-sm">
                  {/* Icon Dinamis, berubah dari Navy ke Merah saat Hover */}
                  <div 
                    className="w-8 h-8 bg-brand-navy group-hover:bg-brand-red transition-colors duration-500 shrink-0"
                    style={{
                      WebkitMaskImage: `url('/${service.icon}')`,
                      WebkitMaskSize: 'contain',
                      WebkitMaskRepeat: 'no-repeat',
                      WebkitMaskPosition: 'center',
                      maskImage: `url('/${service.icon}')`,
                      maskSize: 'contain',
                      maskRepeat: 'no-repeat',
                      maskPosition: 'center',
                    }}
                  />
                </div>
                
                {/* Title yang merespons Hover */}
                <h3 className="text-brand-navy group-hover:text-brand-red transition-colors duration-500 mb-4">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed mb-auto">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. WHY IT MATTERS */}
      <section className="bg-brand-navy py-24 px-6 md:px-12 text-white relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="flex flex-col text-left">
            <div className="mb-4 md:mb-5">
              <span className="text-eyebrow-lg block drop-shadow-md">
                {data.whyMatters.eyebrow}
              </span>
            </div>
            
            <h2 className="text-white leading-tight mb-6 md:mb-8">
              {data.whyMatters.title1} <br/>
              <span className="text-brand-red">{data.whyMatters.title2}</span>
            </h2>
            <p className="text-slate-300 leading-relaxed mb-8">
              {data.whyMatters.description}
            </p>
            
            <div className="space-y-6">
              {data.whyMatters.bullets.map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-8 h-8 shrink-0 rounded-full bg-brand-red flex items-center justify-center font-semibold text-sm text-white">
                    {i + 1}
                  </div>
                  <p className="text-slate-200 mt-1">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[600px] w-full rounded-[2.5rem] overflow-hidden">
            <Image src="/images/business-irla-mitigating.jpg" 
            alt="Professional Consultation" 
            fill className="object-cover opacity-90 hover:scale-105 transition-transform duration-700" 
            unoptimized={process.env.NODE_ENV === 'development'}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#00263C] via-transparent to-transparent"></div>
          </div>

        </div>
      </section>

      {/* 4. CHATBOT SECTION */}
      <ConsultationPortalSection />

      {/* 5. CALL TO ACTION */}
      <CTA />

    </main>
  );
}
