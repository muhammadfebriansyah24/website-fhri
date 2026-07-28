'use client'; 

import React from 'react';
import Image from 'next/image';
import CTA from '@/components/CTA';

export default function HRBootcampPage() {
  return (
    <main className="min-h-screen bg-white text-brand-navy selection:bg-brand-red selection:text-white overflow-hidden">
      
      {/* =========================================
          SECTION 1: HERO SECTION
          ========================================= */}
      <section className="relative min-h-0 py-20 md:min-h-[85vh] md:py-0 flex items-center bg-brand-navy text-white overflow-hidden">
        
        {/* Kontainer Konten - Standar Lebar & Padding */}
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-10 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            
            {/* LEFT COLUMN: Copywriting (Rata Kiri) */}
            <div className="flex flex-col justify-center items-center lg:items-start relative z-10 text-center lg:text-left mt-0 lg:-mt-8">
              <div className="mb-4 md:mb-5">
                <span className="text-eyebrow-lg text-brand-red block drop-shadow-md">
                  Executive Education Series
                </span>
              </div>
              <h1 className="text-white text-balance mb-6 md:mb-8">
                Accelerate Your HR Excellence with Intensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-400">Boot Camps</span>
              </h1>
              <p className="text-slate-300 max-w-lg mx-auto lg:mx-0 mb-10 drop-shadow-md text-lg leading-relaxed">
                Transform your career trajectory through our rigorous, result-oriented programs. Designed for forward-thinking professionals ready to master strategic HR methodologies and drive quantifiable business impact.
              </p>
            </div>

            {/* RIGHT COLUMN: Visual */}
            <div className="relative w-full max-w-sm mx-auto lg:max-w-none aspect-[4/3] flex items-center justify-center z-10 group mt-6 lg:mt-0">
              <div className="absolute inset-0 rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1200&auto=format&fit=crop" 
                  alt="Participants Seated in an Executive Training Room" 
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>
            </div>
            
        </div>
      </section>

      {/* =========================================
          SECTION 2: FLAGSHIP COHORT SECTION
          ========================================= */}
      <section className="bg-white py-24 md:py-32 px-6 md:px-12 relative border-b border-slate-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            <div className="col-span-2 rounded-2xl overflow-hidden aspect-video bg-slate-100 shadow-lg relative group">
              <Image 
                src="https://images.unsplash.com/photo-1531538512164-e6c51ea63d20?q=80&w=1000&auto=format&fit=crop" 
                alt="Asian HRBP Cohort Collaborating on Strategic Planning" 
                fill
                unoptimized
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square bg-slate-100 shadow-md relative group">
              <Image 
                src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=600&auto=format&fit=crop" 
                alt="Indonesian HR Professionals in Mentoring Discussion" 
                fill
                unoptimized
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square bg-slate-100 shadow-md relative group">
              <Image 
                src="https://images.unsplash.com/photo-1776512377708-6b4eb702505e?q=80&w=600&auto=format&fit=crop" 
                alt="Case Study Notes During Live Seminar Session" 
                fill
                unoptimized
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="flex flex-col justify-start space-y-6">
            <div>
              <span className="text-eyebrow-lg text-brand-red block mb-4">
                Flagship Cohort
              </span>
              <h2 className="text-brand-navy mb-4 text-balance">
                HRBP Boot Camp
              </h2>
            </div>
            
            <p className="text-slate-600 text-lg leading-relaxed">
              An intensive cohort-based program meticulously engineered to transition traditional HR practitioners into highly strategic HR Business Partners. Master the frameworks needed to align human capital initiatives directly with core business objectives.
            </p>
            
            <ul className="space-y-4 pt-2">
              <li className="flex items-center gap-3 text-slate-700 font-medium text-base">
                <div 
                  className="w-5 h-5 bg-brand-red shrink-0"
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
                <span>12-Week Immersive Curriculum</span>
              </li>
              
              <li className="flex items-center gap-3 text-slate-700 font-medium text-base">
                <div 
                  className="w-5 h-5 bg-brand-red shrink-0"
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
                <span>Live Case Study Analysis &amp; Resolution</span>
              </li>
              
              <li className="flex items-center gap-3 text-slate-700 font-medium text-base">
                <div 
                  className="w-5 h-5 bg-brand-red shrink-0"
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
                <span>Direct Mentorship from Industry CHROs</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* =========================================
          SECTION 3: CORE LEARNING PILLARS
          ========================================= */}
      <section className="bg-slate-50 py-24 md:py-32 px-6 md:px-12 relative border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-eyebrow-lg text-brand-red block mb-4">
              Core Pillars
            </span>
            <h2 className="text-brand-navy mb-4 text-balance">
              Core Learning Pillars
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Our methodology is built upon these foundational pillars that define the modern, high-impact HR executive.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <article className="group rounded-[1.75rem] bg-white p-8 md:p-10 border border-slate-100 shadow-sm hover:shadow-xl hover:border-brand-red/20 hover:-translate-y-1.5 transition-all duration-500 flex flex-col h-full">
              <div className="w-14 h-14 rounded-2xl bg-brand-navy group-hover:bg-brand-red flex items-center justify-center mb-6 shadow-md transition-colors duration-300">
                <div 
                  className="w-6 h-6 bg-white"
                  style={{
                    WebkitMaskImage: `url('/ic_chart-bar-outline.svg')`,
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskImage: `url('/ic_chart-bar-outline.svg')`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                  }}
                />
              </div>
              <h3 className="text-brand-navy mb-2 group-hover:text-brand-red transition-colors">
                Data-Driven Insights
              </h3>
              <div className="text-brand-red text-xs font-bold uppercase tracking-wider mb-4">
                PEOPLE ANALYTICS
              </div>
              <p className="text-slate-500 text-sm leading-relaxed flex-grow">
                Transcend intuition. Learn to harness organizational data to predict turnover, optimize workforce planning, and quantify the ROI of HR interventions.
              </p>
            </article>
            
            {/* Pillar 2 */}
            <article className="group rounded-[1.75rem] bg-white p-8 md:p-10 border border-slate-100 shadow-sm hover:shadow-xl hover:border-brand-red/20 hover:-translate-y-1.5 transition-all duration-500 flex flex-col h-full">
              <div className="w-14 h-14 rounded-2xl bg-brand-navy group-hover:bg-brand-red flex items-center justify-center mb-6 shadow-md transition-colors duration-300">
                <div 
                  className="w-6 h-6 bg-white"
                  style={{
                    WebkitMaskImage: `url('/ic_computer-outline.svg')`,
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskImage: `url('/ic_computer-outline.svg')`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                  }}
                />
              </div>
              <h3 className="text-brand-navy mb-2 group-hover:text-brand-red transition-colors">
                AI-Powered Decision Making
              </h3>
              <div className="text-brand-red text-xs font-bold uppercase tracking-wider mb-4">
                PROCESS AUGMENTATION
              </div>
              <p className="text-slate-500 text-sm leading-relaxed flex-grow">
                Integrate artificial intelligence into your HR tech stack safely and ethically. Automate administrative overhead to focus on high-value strategic initiatives.
              </p>
            </article>
            
            {/* Pillar 3 */}
            <article className="group rounded-[1.75rem] bg-white p-8 md:p-10 border border-slate-100 shadow-sm hover:shadow-xl hover:border-brand-red/20 hover:-translate-y-1.5 transition-all duration-500 flex flex-col h-full">
              <div className="w-14 h-14 rounded-2xl bg-brand-navy group-hover:bg-brand-red flex items-center justify-center mb-6 shadow-md transition-colors duration-300">
                <div 
                  className="w-6 h-6 bg-white"
                  style={{
                    WebkitMaskImage: `url('/ic_user-group-outline.svg')`,
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskImage: `url('/ic_user-group-outline.svg')`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                  }}
                />
              </div>
              <h3 className="text-brand-navy mb-2 group-hover:text-brand-red transition-colors">
                Strategic Stakeholder Management
              </h3>
              <div className="text-brand-red text-xs font-bold uppercase tracking-wider mb-4">
                INFLUENCE &amp; ALIGNMENT
              </div>
              <p className="text-slate-500 text-sm leading-relaxed flex-grow">
                Master the art of influence without authority. Learn advanced frameworks for consulting with business leaders, managing organizational change.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 4: RESULT-ORIENTED DEVELOPMENT
          ========================================= */}
      <section className="bg-brand-navy py-24 md:py-32 px-6 md:px-12 relative text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-eyebrow-lg text-brand-red block mb-4 drop-shadow-md">
              Measurable Outcomes
            </span>
            <h2 className="text-white mb-6 text-balance">
              Result-Oriented Development
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-lg">
              We don&apos;t just teach theory, we engineer transformations. Our boot camps are evaluated exclusively on the Verifiable Business Impact generated by our alumni post-graduation.
            </p>
            
            <div className="space-y-6">
              {/* COMMERCIAL ACUMEN */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-4 transition-all hover:bg-white/10">
                <div 
                  className="w-6 h-6 bg-brand-red shrink-0"
                  style={{
                    WebkitMaskImage: `url('/ic_trending-up.svg')`,
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskImage: `url('/ic_trending-up.svg')`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                  }}
                />
                <div>
                  <h4 className="text-white font-bold mb-1">COMMERCIAL ACUMEN</h4>
                  <p className="text-slate-400 text-sm">Graduates consistently demonstrate a 40% increase in ability to link HR metrics directly to P&amp;L outcomes.</p>
                </div>
              </div>
              
              {/* EXECUTION VELOCITY */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-4 transition-all hover:bg-white/10">
                <div 
                  className="w-6 h-6 bg-brand-red shrink-0"
                  style={{
                    WebkitMaskImage: `url('/ic_clock-outline.svg')`,
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskImage: `url('/ic_clock-outline.svg')`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                  }}
                />
                <div>
                  <h4 className="text-white font-bold mb-1">EXECUTION VELOCITY</h4>
                  <p className="text-slate-400 text-sm">Reduce time to implementation for major HR initiatives through agile methodologies learned.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
              <div className="w-full aspect-[16/9] bg-brand-navy relative">
                  <div className="absolute top-4 left-4 text-white text-xs font-bold tracking-widest uppercase z-10 drop-shadow-md">
                    HR BOOT CAMP PROGRAMS
                  </div>
                  <Image 
                    src="https://images.unsplash.com/photo-1543132220-3ec99c6094dc?q=80&w=800&auto=format&fit=crop" 
                    alt="Asian Business Leaders Shaking Hands After Strategic Alignment" 
                    fill
                    unoptimized
                    className="object-cover opacity-80"
                  />
              </div>
              <div className="bg-slate-800/80 backdrop-blur-md p-6 border-t border-slate-700/50">
                <p className="text-white text-lg font-medium italic mb-2">
                  &quot;The ROI was immediate. Within weeks, I restructured our talent pipeline.&quot;
                </p>
                <p className="text-slate-300 text-sm">— Sarah Jenkins, VP of HR</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 5: CALL TO ACTION
          ========================================= */}
      <CTA />

    </main>
  );
}