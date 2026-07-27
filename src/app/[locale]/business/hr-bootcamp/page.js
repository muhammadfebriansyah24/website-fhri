'use client';

import React from 'react';
import Head from 'next/head';
import CTA from '@/components/CTA';

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
              <span className="mr-2 text-white">EXECUTIVE EDUCATION SERIES</span>
            </div>
            
            <h1 className="text-[2.5rem] lg:text-[3.5rem] leading-[1.2] font-bold text-white tracking-tight">
              Accelerate Your HR Excellence with Intensive Boot Camps
            </h1>
            
            <p className="text-gray-300 text-[1rem] leading-relaxed max-w-[90%]">
              Transform your career trajectory through our rigorous, result-oriented programs. Designed for forward-thinking professionals ready to master strategic HR methodologies and drive quantifiable business impact.
            </p>
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
              
              <li className="flex items-center gap-3 text-gray-700 font-medium text-[15px]">
                <div 
                  className="w-5 h-5 bg-[#DC2626] shrink-0"
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
              
              <li className="flex items-center gap-3 text-gray-700 font-medium text-[15px]">
                <div 
                  className="w-5 h-5 bg-[#DC2626] shrink-0"
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
              
              <li className="flex items-center gap-3 text-gray-700 font-medium text-[15px]">
                <div 
                  className="w-5 h-5 bg-[#DC2626] shrink-0"
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
            {/* Pillar 1 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#00263C] rounded-full flex items-center justify-center mb-6">
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
              <h3 className="text-xl font-bold text-[#00263C] mb-2">Data-Driven Insights</h3>
              <div className="text-[#DC2626] text-xs font-bold uppercase tracking-wider mb-4">PEOPLE ANALYTICS</div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Transcend intuition. Learn to harness organizational data to predict turnover, optimize workforce planning, and quantify the ROI of HR interventions.
              </p>
            </div>
            
            {/* Pillar 2 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#00263C] rounded-full flex items-center justify-center mb-6">
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
              <h3 className="text-xl font-bold text-[#00263C] mb-2">AI-Powered Decision Making</h3>
              <div className="text-[#DC2626] text-xs font-bold uppercase tracking-wider mb-4">PROCESS AUGMENTATION</div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Integrate artificial intelligence into your HR tech stack safely and ethically. Automate administrative overhead to focus on high-value strategic initiatives.
              </p>
            </div>
            
            {/* Pillar 3 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#00263C] rounded-full flex items-center justify-center mb-6">
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
              We don&apos;t just teach theory, we engineer transformations. Our boot camps are evaluated exclusively on the Verifiable Business Impact generated by our alumni post-graduation.
            </p>
            <div className="space-y-6">
              
              {/* COMMERCIAL ACUMEN */}
              {/* Tambahkan items-center di sini */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-center gap-4">
                <div 
                  className="w-6 h-6 bg-[#DC2626] shrink-0"
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
                  <p className="text-gray-400 text-sm">Graduates consistently demonstrate a 40% increase in ability to link HR metrics directly to P&amp;L outcomes.</p>
                </div>
              </div>
              
              {/* EXECUTION VELOCITY */}
              {/* Tambahkan items-center di sini */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-center gap-4">
                <div 
                  className="w-6 h-6 bg-[#DC2626] shrink-0"
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
                  <p className="text-gray-400 text-sm">Reduce time to implementation for major HR initiatives through agile methodologies learned.</p>
                </div>
              </div>
              
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
              <div className="w-full aspect-[16/9] bg-[#001b2a] relative">
                  <div className="absolute top-4 left-4 text-white text-xs font-bold tracking-widest uppercase z-10 drop-shadow-md">HR BOOT CAMP PROGRAMS</div>
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

        {/* SECTION 5: CALL TO ACTION */}
        <CTA />

      </main>
    </div>
  );
}