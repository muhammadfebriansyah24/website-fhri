'use client';

import React, { useState } from 'react';
import Head from 'next/head';

export default function HRBootcampPage() {
  const [activeSlide, setActiveSlide] = useState(0);

  // DATA TESTIMONIAL
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

  // FUNGSI ARROW SLIDER
  const nextSlide = () => {
    setActiveSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased overflow-x-hidden">
      <Head>
        <title>HR Boot Camp</title>
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
            
            <button className="mt-4 inline-flex items-center justify-center px-8 py-3.5 bg-[#DC2626] text-white font-semibold rounded-full hover:bg-red-700 transition-colors shadow-lg shadow-[#DC2626]/30">
              Explore Programs
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

          <div className="relative w-full aspect-[4/3] flex items-center justify-center z-10">
            <div className="absolute inset-0 rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl">
              {/* Gambar: Suasana HR Executive Workshop / Seminar */}
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop" 
                alt="HR Professionals in an executive workshop" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* SECTION 2: FLAGSHIP COHORT SECTION */}
        <section className="bg-white px-8 lg:px-20 py-24 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            <div className="col-span-2 rounded-2xl overflow-hidden aspect-video bg-slate-200 shadow-lg">
              {/* Gambar: Kelas/Cohort yang interaktif merepresentasikan 12-week curriculum */}
              <img 
                src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=1000&auto=format&fit=crop" 
                alt="HR Cohort and Immersive Curriculum" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square bg-slate-200 shadow-md">
              {/* Gambar: Mentoring dan Studi Kasus */}
              <img 
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=600&auto=format&fit=crop" 
                alt="Live Case Study Analysis" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square bg-slate-200 shadow-md">
              {/* Gambar: Profesional HR berdiskusi (HRBP) */}
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&auto=format&fit=crop" 
                alt="Direct Mentorship from Industry Leaders" 
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
            <div className="pt-4">
              <a href="#" className="inline-flex items-center text-[#DC2626] font-bold hover:text-red-700 transition-colors group">
                View Curriculum Outline
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
            </div>
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
                 {/* Gambar: Tim memetakan strategi di dinding kaca (mencerminkan agile execution & restructuring) */}
                 <img 
                   src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=800&auto=format&fit=crop" 
                   alt="HR team executing an agile talent strategy" 
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

        {/* SECTION 5: TESTIMONIAL SLIDER */}
        <section className="bg-white py-24 px-4 md:px-8 flex flex-col items-center justify-center text-center border-t border-gray-100">
          <div className="w-full max-w-6xl mx-auto flex items-center justify-between gap-4 md:gap-8">
            
            <button 
              onClick={prevSlide}
              className="shrink-0 w-12 h-12 md:w-14 md:h-14 bg-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex items-center justify-center text-[#00263C] hover:bg-gray-50 hover:text-[#DC2626] transition-all cursor-pointer focus:outline-none"
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
                      <svg className="w-12 h-12 text-[#DC2626] mx-auto opacity-90" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M116,72v88a48.05,48.05,0,0,1-48,48,8,8,0,0,1,0-16,32,32,0,0,0,32-32v-8H40a16,16,0,0,1-16-16V72A16,16,0,0,1,40,56h60A16,16,0,0,1,116,72ZM216,56H156a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,216,56Z"></path>
                      </svg>
                    </div>
                    
                    <p className="text-xl md:text-2xl font-medium text-[#00263C] max-w-3xl mb-8 leading-relaxed mx-auto">
                      {testi.quote}
                    </p>
                    <div className="mb-4">
                      <h4 className="text-[#00263C] font-extrabold text-sm mb-1">{testi.name}</h4>
                      <p className="text-gray-500 text-sm">{testi.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={nextSlide}
              className="shrink-0 w-12 h-12 md:w-14 md:h-14 bg-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex items-center justify-center text-[#00263C] hover:bg-gray-50 hover:text-[#DC2626] transition-all cursor-pointer focus:outline-none"
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
                  activeSlide === index ? 'w-8 bg-[#DC2626]' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </section>

        {/* SECTION 6: CALL TO ACTION CARD */}
        <section className="bg-white py-24 px-4 md:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-2xl bg-[#00263C]">
              
              <div className="md:w-5/12 min-h-[300px] md:min-h-[480px] bg-slate-200 relative">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" 
                  alt="HR Professional Call to Action" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              
              <div className="md:w-7/12 p-10 md:p-20 flex flex-col justify-center relative">
                
                <div className="absolute top-0 bottom-0 left-[60%] w-32 bg-white/5 skew-x-12 hidden md:block"></div>
                
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight relative z-10">
                  Find the Right Path <br className="hidden md:block"/>
                  for Your HR Team
                </h2>
                <p className="text-gray-300 text-sm md:text-lg mb-10 leading-relaxed relative z-10 max-w-lg">
                  Whether you want to provide continuous learning, close skill gaps, or build HR capabilities at scale, AIHR offers tailored solutions designed to support your goals.
                </p>
                
                <button className="bg-[#DC2626] hover:bg-red-700 transition text-white text-sm font-bold uppercase tracking-wider py-4 px-8 rounded-lg w-max flex items-center gap-2 relative z-10 shadow-lg shadow-[#DC2626]/30">
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
    </div>
  );
}