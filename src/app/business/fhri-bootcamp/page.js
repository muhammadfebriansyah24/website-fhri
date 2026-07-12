'use client'; 

import React, { useState } from 'react';

// SLIDER TESTIMONIAL (SECTION 5)
export default function FhriBootcamp() {
  const [activeSlide, setActiveSlide] = useState(0);

  // DATA TESTIMONIAL (SECTION 5)
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

  // FUNGSI ARROW (SECTION 5)
  const nextSlide = () => {
    setActiveSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <main className="min-h-screen font-sans">
      
      {/* SECTION 1: Hero & Form */}
      <section className="bg-[#1a365d] text-white py-16 px-8">
        <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Kolom Kiri: Teks */}
          <div className="max-w-xl">
            <span className="bg-white/10 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider border border-white/20 inline-block">
              Leading HR Academy in Indonesia
            </span>
            <h1 className="text-[3.5rem] md:text-6xl font-extrabold mt-6 mb-6 leading-[1.1] tracking-tight">
              Elevate Your HR Career with Strategic Expertise
            </h1>
            <p className="mb-8 text-gray-300 text-lg leading-relaxed">
              We help organizations build high-impact HR teams at scale, through targeted upskilling, structured capability development, and hands-on learning.
            </p>
            <button className="bg-[#e52525] hover:bg-red-700 transition-colors text-white px-8 py-3.5 rounded-full font-bold flex items-center gap-2 w-max">
              Start Now 
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
          </div>

          {/* Kolom Kanan: Form */}
          <div className="bg-white rounded-[2rem] p-8 md:p-10 text-gray-800 shadow-2xl lg:ml-auto w-full max-w-md">
            <h2 className="text-2xl font-bold mb-2 text-[#1a365d]">Schedule a Team Demo</h2>
            <p className="text-sm text-gray-500 mb-8">Register up to 10 team members for measurable HR transformation.</p>
            
            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-1.5">First Name *</label>
                  <input type="text" className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-blue-500 text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-1.5">Last Name *</label>
                  <input type="text" className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-blue-500 text-sm" />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-bold text-gray-500 mb-1.5">Business Email *</label>
                <input type="email" className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-blue-500 text-sm" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-1.5">Company *</label>
                  <input type="text" className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-blue-500 text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-1.5">Team Size *</label>
                  <select className="w-full border border-gray-200 rounded-lg p-3 bg-white focus:outline-none focus:border-blue-500 text-sm text-gray-700">
                    <option>Choose...</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-bold text-gray-500 mb-1.5">Phone Number *</label>
                <input type="tel" placeholder="+62 ..." className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-blue-500 text-sm" />
              </div>
              
              <button type="button" className="w-full bg-[#1a365d] text-white font-bold py-3.5 rounded-lg mt-4 hover:bg-blue-900 transition flex justify-center items-center gap-2 text-sm">
                Talk to an Expert 
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
              </button>
              
              <p className="text-[11px] text-center text-gray-400 mt-4">
                By registering, you agree to our Terms & Conditions.
              </p>
            </form>
          </div>

        </div>
      </section>

      {/* SECTION 2: Business Impact */}
      <section className="bg-white py-24 px-8 text-gray-800">
        <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Kolom Kiri: Teks Penjelasan */}
          <div className="max-w-lg">
            <span className="text-xs font-bold text-gray-600 uppercase tracking-wider bg-gray-100 px-4 py-2 rounded-full inline-block">
              BUILD A FUTURE-READY HR TEAM
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mt-6 mb-6 leading-[1.2] text-[#1a365d]">
              Elevate HR: From Operations to Business Impact
            </h2>
            <p className="text-gray-500 leading-relaxed text-lg">
              HR is becoming more global, technology-enabled, and data-driven, with AI accelerating the shift. To keep up, HR teams need new capabilities that move them beyond administration and toward real business impact. AIHR helps organizations close critical skill gaps and build future-ready HR teams.
            </p>
          </div>

          {/* Kolom Kanan: Daftar Keunggulan */}
          <div className="space-y-12 lg:mt-4">
            
            <div className="flex gap-6">
              <div className="w-14 h-14 bg-[#234365] rounded-xl shrink-0 flex items-center justify-center text-white shadow-md">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.01-.146 2.008-.415 2.981m-6.425.864c.238.163.488.314.75.452M12 11h.01"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-[#1a365d]">Build a Strategic HR Function</h3>
                <p className="text-gray-500 leading-relaxed">Equip your HR teams with the skills and frameworks to contribute to strategic decisions and drive measurable business impact.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-14 h-14 bg-[#234365] rounded-xl shrink-0 flex items-center justify-center text-white shadow-md">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-[#1a365d]">Enable Data-Driven & AI-Smart HR Teams</h3>
                <p className="text-gray-500 leading-relaxed">Develop the capabilities to leverage data and AI, enabling smarter workforce decisions and stronger organizational performance.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-14 h-14 bg-[#234365] rounded-xl shrink-0 flex items-center justify-center text-white shadow-md">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-[#1a365d]">Develop Excellence Across Every HR Function</h3>
                <p className="text-gray-500 leading-relaxed">Close critical skill gaps across your entire HR team and build consistent expertise in every core HR domain.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: Goals & Solutions Grid */}
      <section className="bg-[#fcfcfd] py-24 px-8 font-sans text-gray-800">
        <div className="container mx-auto max-w-6xl">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-red-500 text-xs font-bold uppercase tracking-widest">
              FIRST HR FOR TEAMS
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold mt-4 mb-6 leading-tight text-[#0f2845]">
              Whatever Your HR Goals,<br className="hidden lg:block"/> the Next Step Starts Here
            </h2>
            <p className="text-gray-500 text-lg">
              Explore solutions designed to help you build the HR capabilities your organization needs and empower your HR team to perform at its best.
            </p>
          </div>

          {/* Solutions Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Card 1: Team License */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <span className="bg-[#0f2845] text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                  Team License
                </span>
                <div className="w-10 h-10 bg-[#0f2845] rounded-full flex items-center justify-center text-white shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path></svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#0f2845] mb-6 leading-snug">
                Provide Your HR Team with Continuous Learning
              </h3>
              <ul className="space-y-4 mb-8 flex-grow">
                {['400+ Hours of Training', 'Covering All HR Domains', 'On-Demand & Self-Paced'].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-500 text-sm">
                    <svg className="w-4 h-4 text-red-500 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-gray-100 mt-auto">
                <a href="#" className="text-red-500 text-xs font-bold uppercase tracking-wider hover:text-red-700 transition flex items-center gap-2">
                  EXPLORE TEAM LICENSES <span>→</span>
                </a>
              </div>
            </div>

            {/* Card 2: HR Boot Camps */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <span className="bg-[#0f2845] text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                  HR Boot Camps
                </span>
                <div className="w-10 h-10 bg-[#0f2845] rounded-full flex items-center justify-center text-white shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#0f2845] mb-6 leading-snug">
                Close HR Skill Gaps
              </h3>
              <ul className="space-y-4 mb-8 flex-grow">
                {['Cohort-Based Learning', 'Live Sessions', 'Direct Impact & ROI'].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-500 text-sm">
                    <svg className="w-4 h-4 text-red-500 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-gray-100 mt-auto">
                <a href="#" className="text-red-500 text-xs font-bold uppercase tracking-wider hover:text-red-700 transition flex items-center gap-2">
                  EXPLORE ALL HR BOOT CAMPS <span>→</span>
                </a>
              </div>
            </div>

            {/* Card 3: Tailored HR Academy */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <span className="bg-[#0f2845] text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                  Tailored HR Academy
                </span>
                <div className="w-10 h-10 bg-[#0f2845] rounded-full flex items-center justify-center text-white shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#0f2845] mb-6 leading-snug">
                Build HR Capabilities at Scale
              </h3>
              <ul className="space-y-4 mb-8 flex-grow">
                {['Capability Model Mapping', 'Tailored Learning Journeys', 'Dedicated Delivery Support'].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-500 text-sm">
                    <svg className="w-4 h-4 text-red-500 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-gray-100 mt-auto">
                <a href="#" className="text-red-500 text-xs font-bold uppercase tracking-wider hover:text-red-700 transition flex items-center gap-2">
                  EXPLORE ENTERPRISE SOLUTIONS <span>→</span>
                </a>
              </div>
            </div>

            {/* Card 4: HR Advisory Services */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <span className="bg-[#0f2845] text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                  HR Advisory Services
                </span>
                <div className="w-10 h-10 bg-[#0f2845] rounded-full flex items-center justify-center text-white shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#0f2845] mb-6 leading-snug">
                HR Audit, Advisory, and Transformation
              </h3>
              <ul className="space-y-4 mb-8 flex-grow">
                {['Independent HR Audits', 'HR Transformation', 'Implementation Partner'].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-500 text-sm">
                    <svg className="w-4 h-4 text-red-500 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-gray-100 mt-auto">
                <a href="#" className="text-red-500 text-xs font-bold uppercase tracking-wider hover:text-red-700 transition flex items-center gap-2">
                  EXPLORE HR ADVISORY SOLUTIONS <span>→</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: High-Performance Culture (Split Layout) */}
      <section className="bg-[#0f2845] text-white flex flex-col md:flex-row w-full">
        {/* Kolom Kiri: Gambar */}
        <div className="md:w-1/2 w-full min-h-[300px] md:min-h-[500px] relative bg-slate-300">
          <img 
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop" 
            alt="HR Team Meeting" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        
        {/* Kolom Kanan: Teks Penjelasan */}
        <div className="md:w-1/2 w-full py-16 px-8 lg:p-20 flex flex-col justify-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Build a <br />
            <span className="text-[#e23e3e]">High-Performance</span> <br />
            Culture
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-lg leading-relaxed">
            Modern work environments demand a new approach to talent management. Equip your team with data-driven insights and innovative strategies to navigate the future of work.
          </p>
          
          <ul className="space-y-4">
            {[
              'Internationally Recognized Certification',
              'Lifetime Access to Materials',
              'Professional Community Support'
            ].map((item, index) => (
              <li key={index} className="flex items-center text-sm font-medium text-gray-200">
                <svg className="w-5 h-5 text-[#e23e3e] mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTION 5: Testimonial Slider */}
      <section className="bg-[#f8f9fa] py-24 px-4 md:px-8 flex flex-col items-center justify-center text-center">
        
        {/* Wrapper luar menggunakan Flexbox agar tombol aman di pinggir */}
        <div className="w-full max-w-6xl mx-auto flex items-center justify-between gap-4 md:gap-8">
          
          {/* Tombol Panah Kiri */}
          <button 
            onClick={prevSlide}
            className="shrink-0 w-12 h-12 md:w-14 md:h-14 bg-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex items-center justify-center text-[#0f2845] hover:bg-gray-50 hover:text-[#e23e3e] transition-all cursor-pointer focus:outline-none"
            aria-label="Previous Slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Kontainer Slider Utama - Strict Overflow Hidden */}
          <div className="w-full max-w-4xl mx-auto overflow-hidden rounded-xl">
            
            {/* Inner Track (Yang bergeser ke kiri/kanan) */}
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {testimonials.map((testi, index) => (
                <div key={index} className="w-full shrink-0 flex flex-col items-center justify-center px-2 md:px-6">
                  
                  {/* Ikon Kutipan (Quote) */}
                  <div className="mb-6">
                    <svg className="w-10 h-10 text-pink-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11.25v.75c0 1.657-1.343 3-3 3H6.75A1.5 1.5 0 015.25 13.5v-3a1.5 1.5 0 011.5-1.5h1.5c.828 0 1.5-.672 1.5-1.5V6.75A1.5 1.5 0 0111.25 5.25h.75A1.5 1.5 0 0113.5 6.75v4.5A1.5 1.5 0 0112 12.75h-.75c-.414 0-.75-.336-.75-.75v-.75zm8.25 0v.75c0 1.657-1.343 3-3 3h-.25A1.5 1.5 0 0113.5 13.5v-3a1.5 1.5 0 011.5-1.5h1.5c.828 0 1.5-.672 1.5-1.5V6.75A1.5 1.5 0 0119.5 5.25h.75A1.5 1.5 0 0121.75 6.75v4.5a1.5 1.5 0 01-1.5 1.5h-.75c-.414 0-.75-.336-.75-.75v-.75z" />
                    </svg>
                  </div>
                  
                  {/* Teks Kutipan */}
                  <p className="text-xl md:text-2xl font-medium text-[#0f2845] max-w-3xl mb-8 leading-relaxed mx-auto">
                    {testi.quote}
                  </p>
                  
                  {/* Identitas Pembuat Kutipan */}
                  <div className="mb-4">
                    <h4 className="text-[#0f2845] font-extrabold text-sm mb-1">{testi.name}</h4>
                    <p className="text-gray-500 text-sm">{testi.role}</p>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Tombol Panah Kanan */}
          <button 
            onClick={nextSlide}
            className="shrink-0 w-12 h-12 md:w-14 md:h-14 bg-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex items-center justify-center text-[#0f2845] hover:bg-gray-50 hover:text-[#e23e3e] transition-all cursor-pointer focus:outline-none"
            aria-label="Next Slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>

        </div>
        
        {/* Pagination Dots */}
        <div className="flex items-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ease-in-out cursor-pointer focus:outline-none ${
                activeSlide === index ? 'w-8 bg-[#e23e3e]' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </section>

      {/* SECTION 6: Call to Action (CTA) Card */}
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