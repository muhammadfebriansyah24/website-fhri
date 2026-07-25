'use client';

import React from 'react';
import Head from 'next/head';

export default function HRBootcampPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased overflow-x-hidden">
      <Head>
        <title>HR Boot Camp | Executive Education Series</title>
      </Head>

      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
        * { font-family: 'Poppins', sans-serif !important; }
      `}} />

      <main className="w-full">
        
        {/* SECTION 1: HERO SECTION */}
        <section className="bg-[#00263C] px-8 lg:px-20 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center relative">
          <div className="flex flex-col items-start gap-6 z-10">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-gray-500/40 bg-white/5 text-gray-200 text-xs font-medium tracking-wide">
              <span className="mr-2 text-white">Executive Education Series</span>
            </div>
            
            <h1 className="text-[2.5rem] lg:text-[3.5rem] leading-[1.2] font-bold text-white tracking-tight">
              Accelerate Your HR Excellence with Intensive Boot Camps
            </h1>
            
            <p className="text-gray-300 text-[1rem] leading-relaxed max-w-[90%]">
              Transform your career trajectory through our rigorous, result-oriented programs. Designed for forward-thinking professionals ready to master strategic HR methodologies and drive quantifiable business impact.
            </p>
            
            <div className="mt-9">
            <button
              type="button"
              className="group inline-flex items-center gap-2.5 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold text-xs md:text-sm uppercase tracking-widest px-7 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-[#DC2626]/30"
            >
              Consult Our Experts
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

          <div className="relative w-full aspect-[4/3] flex items-center justify-center z-10">
            <div className="absolute inset-0 rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl">
              {/* Gambar Hero: Peserta Duduk di Ruang Pelatihan Eksekutif (Relevan dengan "Intensive Boot Camps") */}
              <img 
                src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1200&auto=format&fit=crop" 
                alt="Participants Seated in an Executive Training Room" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* SECTION 2: FLAGSHIP COHORT SECTION */}
        <section className="bg-white px-8 lg:px-20 py-24 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            <div className="col-span-2 rounded-2xl overflow-hidden aspect-video bg-slate-200 shadow-lg">
              {/* Gambar 1 (Besar): Kolaborasi Kohort HRBP (Relevan dengan target strategis HRBP di lingkup korporat) */}
              <img 
                src="https://images.unsplash.com/photo-1531538512164-e6c51ea63d20?q=80&w=1000&auto=format&fit=crop" 
                alt="Asian HRBP Cohort Collaborating on Strategic Planning" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square bg-slate-200 shadow-md">
              {/* Gambar 2 (Kecil): Diskusi Mentoring (Relevan dengan "12-Week Immersive Curriculum") */}
              <img 
                src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=600&auto=format&fit=crop" 
                alt="Indonesian HR Professionals in Mentoring Discussion" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square bg-slate-200 shadow-md">
              {/* Gambar 3 (Kecil): Catatan Studi Kasus di Ruang Seminar (Relevan dengan "Live Case Study Analysis") */}
              <img 
                src="https://images.unsplash.com/photo-1776512377708-6b4eb702505e?q=80&w=600&auto=format&fit=crop" 
                alt="Case Study Notes During Live Seminar Session" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="flex flex-col justify-start space-y-6">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-[#00263C] text-xs font-bold tracking-wider uppercase border border-blue-100 mb-4">
                Flagship Cohort
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#00263C]">HRBP Boot Camp</h2>
            </div>
            <p className="text-gray-600 text-base leading-relaxed">
              An intensive cohort-based program meticulously engineered to transition traditional HR practitioners into highly strategic HR Business Partners. Master the frameworks needed to align human capital initiatives directly with core business objectives.
            </p>
            <ul className="space-y-4 pt-2">
              <li className="flex items-start gap-3 text-gray-700 font-medium text-[15px]">
                <svg className="w-5 h-5 text-[#DC2626] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                12-Week Immersive Curriculum
              </li>
              <li className="flex items-start gap-3 text-gray-700 font-medium text-[15px]">
                <svg className="w-5 h-5 text-[#DC2626] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                Live Case Study Analysis &amp; Resolution
              </li>
              <li className="flex items-start gap-3 text-gray-700 font-medium text-[15px]">
                <svg className="w-5 h-5 text-[#DC2626] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                Direct Mentorship from Industry CHROs
              </li>
            </ul>
          </div>
        </section>

        {/* SECTION 3: CORE LEARNING PILLARS */}
        <section className="bg-gray-50 px-8 lg:px-20 py-20 border-y border-gray-100">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-[#00263C] mb-4">Core Learning Pillars</h2>
            <p className="text-gray-500 text-sm">
              Our methodology is built upon these foundational pillars that define the modern, high-impact HR executive.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#00263C] rounded-full flex items-center justify-center mb-6 text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-[#00263C] mb-2">Data-Driven Insights</h3>
              <div className="text-[#DC2626] text-xs font-bold uppercase tracking-wider mb-4">PEOPLE ANALYTICS</div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Transcend intuition. Learn to harness organizational data to predict turnover, optimize workforce planning, and quantify the ROI of HR interventions.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#00263C] rounded-full flex items-center justify-center mb-6 text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-[#00263C] mb-2">AI-Powered Decision Making</h3>
              <div className="text-[#DC2626] text-xs font-bold uppercase tracking-wider mb-4">PROCESS AUGMENTATION</div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Integrate artificial intelligence into your HR tech stack safely and ethically. Automate administrative overhead to focus on high-value strategic initiatives.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#00263C] rounded-full flex items-center justify-center mb-6 text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-[#00263C] mb-2">Strategic Stakeholder Management</h3>
              <div className="text-[#DC2626] text-xs font-bold uppercase tracking-wider mb-4">INFLUENCE &amp; ALIGNMENT</div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Master the art of influence without authority. Learn advanced frameworks for consulting with business leaders, managing organizational change.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: RESULT-ORIENTED DEVELOPMENT */}
        <section className="bg-[#00263C] px-8 lg:px-20 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Result-Oriented Development</h2>
            <p className="text-gray-300 text-[15px] mb-10 leading-relaxed max-w-md">
              We don&apos;t just teach theory; we engineer transformations. Our boot camps are evaluated exclusively on the Verifiable Business Impact generated by our alumni post-graduation.
            </p>
            <div className="space-y-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex gap-4">
                <svg className="w-6 h-6 text-[#DC2626] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                <div>
                  <h4 className="text-white font-bold mb-1">COMMERCIAL ACUMEN</h4>
                  <p className="text-gray-400 text-sm">Graduates consistently demonstrate a 40% increase in ability to link HR metrics directly to P&amp;L outcomes.</p>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex gap-4">
                <svg className="w-6 h-6 text-[#DC2626] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <div>
                  <h4 className="text-white font-bold mb-1">EXECUTION VELOCITY</h4>
                  <p className="text-gray-400 text-sm">Reduce time to implementation for major HR initiatives through agile methodologies learned.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
              <div className="w-full aspect-[16/9] bg-[#001b2a] relative">
                 <div className="absolute top-4 left-4 text-white text-xs font-bold tracking-widest uppercase z-10 drop-shadow-md">HR BOOT CAMP PROGRAMS</div>
                 {/* Gambar Section 4: Kesepakatan Bisnis Pasca-Program (Relevan dengan "Commercial Acumen", "ROI", dan "P&L Outcomes") */}
                 <img 
                   src="https://images.unsplash.com/photo-1543132220-3ec99c6094dc?q=80&w=800&auto=format&fit=crop" 
                   alt="Asian Business Leaders Shaking Hands After Strategic Alignment" 
                   className="w-full h-full object-cover opacity-80"
                 />
              </div>
              <div className="bg-slate-700/50 backdrop-blur-md p-6">
                <p className="text-white text-lg font-medium italic mb-2">
                  &quot;The ROI was immediate. Within weeks, I restructured our talent pipeline.&quot;
                </p>
                <p className="text-slate-300 text-sm">— Sarah Jenkins, VP of HR</p>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}