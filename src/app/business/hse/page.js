'use client'; 

import React from 'react';

export default function HsePage() {
  return (
    <main className="min-h-screen font-sans bg-white">
      
      {/* =========================================
          SECTION 1: HERO BANNER (HSE) 
          Desain: Full-Bleed Image dengan Navy Gradient (Potongan Rata)
          ========================================= */}
      <section className="relative w-full min-h-[90vh] flex items-center pt-20 pb-24 overflow-hidden">
        
        {/* Background Image & Gradient */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop" 
            alt="Safe and orderly industrial work environment in the morning" 
            className="w-full h-full object-cover"
          />
          {/* Overlay Gradient: Solid Navy on the left for text readability, transparent on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#00263C] via-[#00263C]/90 to-transparent"></div>
          {/* Additional dark overlay for mobile devices to maintain text contrast */}
          <div className="absolute inset-0 bg-[#00263C]/50 md:hidden"></div>
        </div>

        {/* Main Content (Above background) */}
        {/* Pengecualian: Padding diperkecil (px-4 md:px-8) & max-width diperlebar ke 7xl */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            
            {/* Glassmorphism Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 shadow-lg">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C92A2A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#C92A2A]"></span>
              </span>
              <span className="text-white text-[10px] font-bold uppercase tracking-[0.2em]">
                Health, Safety & Environment
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-[1.05] text-balance mb-6">
              Protect Workers, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Comply with Regulations,</span> <br/>
              Preserve the Environment.
            </h1>

            {/* Sub-headline */}
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl font-light">
              Comprehensive HSE solutions from incident investigation to environmental compliance. We ensure your business operations run safely, orderly, and sustainably.
            </p>

            {/* Quick Highlights */}
            <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6 border-t border-white/20 pt-10">
              <div>
                <h4 className="text-3xl font-black text-white mb-1">ISO 45001</h4>
                <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Global Safety Standards</p>
              </div>
              <div>
                <h4 className="text-3xl font-black text-white mb-1">PROPER</h4>
                <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Environmental Compliance</p>
              </div>
              <div className="hidden md:block">
                <h4 className="text-3xl font-black text-white mb-1">Zero</h4>
                <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Incident Target</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 2: CORE HSE PILLARS 
          ========================================= */}
      <section className="bg-white py-24 md:py-32 px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] bg-[#C92A2A]/10 text-[#C92A2A] mb-5">
              Core Services
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#00263C] leading-tight mb-6">
              Three Main HSE Pillars
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              Our comprehensive approach ensures every aspect of occupational safety and environmental sustainability in your company is managed to the highest standards.
            </p>
          </div>

          {/* 3 Column Grid (Cards sized consistently with Code 1) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            
            {/* Pillar 1: Risk Assessment & Incident */}
            <article className="group rounded-[1.75rem] bg-slate-50 p-7 md:p-9 ring-1 ring-slate-100 transition-all hover:shadow-[0_30px_60px_-20px_rgba(0,38,60,0.18)] hover:-translate-y-1.5 flex flex-col h-full">
              <div className="w-12 h-12 bg-[#00263C] rounded-xl flex items-center justify-center mb-6 shrink-0 transition-colors duration-300 group-hover:bg-[#C92A2A]">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="font-bold text-[#00263C] text-lg leading-snug mb-3 group-hover:text-[#C92A2A] transition-colors duration-300">
                Risk Assessment & Investigation
              </h3>
              <p className="text-[13.5px] text-slate-500 leading-relaxed flex-grow">
                Proactively identify workplace hazards, conduct in-depth incident investigations, and determine targeted corrective actions to prevent recurring accidents.
              </p>
            </article>

            {/* Pillar 2: Policy & Management Systems */}
            <article className="group rounded-[1.75rem] bg-slate-50 p-7 md:p-9 ring-1 ring-slate-100 transition-all hover:shadow-[0_30px_60px_-20px_rgba(0,38,60,0.18)] hover:-translate-y-1.5 flex flex-col h-full">
              <div className="w-12 h-12 bg-[#00263C] rounded-xl flex items-center justify-center mb-6 shrink-0 transition-colors duration-300 group-hover:bg-[#C92A2A]">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
                </svg>
              </div>
              <h3 className="font-bold text-[#00263C] text-lg leading-snug mb-3 group-hover:text-[#C92A2A] transition-colors duration-300">
                Policy & Management Systems
              </h3>
              <p className="text-[13.5px] text-slate-500 leading-relaxed flex-grow">
                Creation of standard operating procedures (SOP) for safety and assistance in implementing international standard management systems such as ISO 45001.
              </p>
            </article>

            {/* Pillar 3: Environmental Compliance */}
            <article className="group rounded-[1.75rem] bg-slate-50 p-7 md:p-9 ring-1 ring-slate-100 transition-all hover:shadow-[0_30px_60px_-20px_rgba(0,38,60,0.18)] hover:-translate-y-1.5 flex flex-col h-full">
              <div className="w-12 h-12 bg-[#00263C] rounded-xl flex items-center justify-center mb-6 shrink-0 transition-colors duration-300 group-hover:bg-[#C92A2A]">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="font-bold text-[#00263C] text-lg leading-snug mb-3 group-hover:text-[#C92A2A] transition-colors duration-300">
                Environmental Compliance
              </h3>
              <p className="text-[13.5px] text-slate-500 leading-relaxed flex-grow">
                Full support in processing environmental permits (UKL-UPL, AMDAL) and thorough preparation for facing PROPER audits from the Ministry of Environment.
              </p>
            </article>

          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 3: CLEAN & SAFE ENVIRONMENT INITIATIVE 
          ========================================= */}
      <section className="bg-white pb-24 md:pb-32 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            
            {/* LEFT COLUMN: Text & Value Adds */}
            <div className="order-1 relative z-10">
              <span className="inline-flex items-center rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] bg-[#C92A2A]/10 text-[#C92A2A] mb-5">
                Our Extra Initiatives
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#00263C] leading-tight mb-6">
                More Than Just Document Compliance.
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed mb-10">
                Occupational health and safety is not only measured by stacks of certificates on a desk. We believe that true operational safety starts from building a clean, disciplined, and organized work culture in the field.
              </p>
              
              <div className="space-y-6">
                {/* Point 1: 5S Culture */}
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#00263C] flex items-center justify-center mt-0.5">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M20 6L9 17l-5-5"></path></svg>
                  </span>
                  <div>
                    <h4 className="font-bold text-[#00263C] text-[15px] mb-1">5S Culture Implementation</h4>
                    <p className="text-[13px] text-slate-500 leading-relaxed">
                      Systematic implementation to keep the work area Sorted, Set in order, Shining, Standardized, and Sustained. A normal and well-organized residential or work environment is the first line of defense in OHS.
                    </p>
                  </div>
                </div>
                
                {/* Point 2: Proactive Prevention */}
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#C92A2A] flex items-center justify-center mt-0.5">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M20 6L9 17l-5-5"></path></svg>
                  </span>
                  <div>
                    <h4 className="font-bold text-[#00263C] text-[15px] mb-1">Proactive Hazard Prevention</h4>
                    <p className="text-[13px] text-slate-500 leading-relaxed">
                      A well-maintained environment significantly minimizes anomalies. We eliminate potential hazards early to prevent critical incidents like short circuits, sparks, or fire hazards.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Safe & Clean Environment Image (Adjusted to Code 1 Standard) */}
            <div className="order-2 relative w-full mt-10 lg:mt-0">
              {/* Abstract Background Decoration */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#C92A2A]/10 rounded-full blur-2xl z-0"></div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#00263C]/10 rounded-full blur-2xl z-0"></div>
              
              {/* Main Image Container */}
              <div className="rounded-[2rem] bg-slate-50 ring-1 ring-slate-100 p-2 group relative z-10">
                <div className="relative h-72 md:h-96 rounded-[calc(2rem-0.5rem)] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop" 
                    alt="Industrial work environment that is neat, clean, and free of fire hazards" 
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-in-out"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00263C]/60 via-transparent to-transparent opacity-80"></div>

                  {/* Floating Status Badge above the image */}
                  <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 bg-white/95 backdrop-blur-sm px-5 py-3 rounded-xl shadow-xl border border-white flex items-center gap-4">
                    <div className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[#00263C] font-extrabold text-[13px] tracking-wide leading-tight">Status: Safe & Controlled</span>
                      <span className="text-slate-500 text-[9px] uppercase tracking-wider font-bold">Zero Incident Potential</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 4: COMPLIANCE ROADMAP (TIMELINE)
          ========================================= */}
      <section className="bg-slate-50 py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="inline-flex items-center rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] bg-[#C92A2A]/10 text-[#C92A2A] mb-5">
              Certification Flow
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#00263C] leading-tight mb-6">
              Roadmap to Total Compliance
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              We guide your company step by step. From ground zero until you officially hold environmental feasibility and compliance certifications.
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            
            {/* Center Line (Visible on large screens only) */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-slate-200 -translate-x-1/2"></div>
            {/* Left Line (For mobile screens) */}
            <div className="lg:hidden absolute left-[27px] top-0 bottom-0 w-[2px] bg-slate-200"></div>

            <div className="space-y-16">
              
              {/* Step 1 */}
              <div className="relative flex flex-col lg:flex-row items-center justify-between group">
                {/* Left Content (Empty on desktop, filled on mobile) */}
                <div className="hidden lg:block lg:w-[45%] text-right pr-12">
                  <h3 className="text-xl md:text-2xl font-bold text-[#00263C] mb-3">Initial Audit & Gap Analysis</h3>
                  <p className="text-[14px] md:text-[15px] text-slate-500 leading-relaxed">
                    Comprehensive evaluation of current facility conditions and documents. We compare them against regulatory standards (ISO/PROPER) to map compliance gaps that must be closed immediately.
                  </p>
                </div>
                
                {/* Timeline Dot (Center on desktop, Left on mobile) */}
                <div className="absolute left-0 lg:left-1/2 -translate-x-0 lg:-translate-x-1/2 w-14 h-14 bg-white border-4 border-[#00263C] group-hover:border-[#C92A2A] rounded-full flex items-center justify-center shadow-lg transition-colors duration-300 z-10">
                  <span className="text-[#00263C] group-hover:text-[#C92A2A] font-black text-xl transition-colors duration-300">1</span>
                </div>
                
                {/* Right Content */}
                <div className="pl-20 lg:pl-0 lg:w-[45%] lg:text-left lg:hidden">
                  <h3 className="text-xl md:text-2xl font-bold text-[#00263C] mb-3">Initial Audit & Gap Analysis</h3>
                  <p className="text-[14px] md:text-[15px] text-slate-500 leading-relaxed">
                    Comprehensive evaluation of current facility conditions and documents. We compare them against regulatory standards (ISO/PROPER) to map compliance gaps that must be closed immediately.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col lg:flex-row-reverse items-center justify-between group">
                <div className="hidden lg:block lg:w-[45%] text-left pl-12">
                  <h3 className="text-xl md:text-2xl font-bold text-[#00263C] mb-3">Policy Development</h3>
                  <p className="text-[14px] md:text-[15px] text-slate-500 leading-relaxed">
                    Creation of Standard Operating Procedures (SOP), safety manuals, and preparation of environmental documents (UKL-UPL/AMDAL) specifically tailored to your business operational characteristics.
                  </p>
                </div>
                
                <div className="absolute left-0 lg:left-1/2 -translate-x-0 lg:-translate-x-1/2 w-14 h-14 bg-white border-4 border-[#00263C] group-hover:border-[#C92A2A] rounded-full flex items-center justify-center shadow-lg transition-colors duration-300 z-10">
                  <span className="text-[#00263C] group-hover:text-[#C92A2A] font-black text-xl transition-colors duration-300">2</span>
                </div>
                
                <div className="pl-20 lg:pl-0 lg:w-[45%] lg:text-right lg:hidden">
                  <h3 className="text-xl md:text-2xl font-bold text-[#00263C] mb-3">Policy Development</h3>
                  <p className="text-[14px] md:text-[15px] text-slate-500 leading-relaxed">
                    Creation of Standard Operating Procedures (SOP), safety manuals, and preparation of environmental documents (UKL-UPL/AMDAL) specifically tailored to your business operational characteristics.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col lg:flex-row items-center justify-between group">
                <div className="hidden lg:block lg:w-[45%] text-right pr-12">
                  <h3 className="text-xl md:text-2xl font-bold text-[#00263C] mb-3">Implementation & Training</h3>
                  <p className="text-[14px] md:text-[15px] text-slate-500 leading-relaxed">
                    On-site assistance for applying a disciplined culture, employee training regarding safety procedures, and execution of real risk mitigation measures.
                  </p>
                </div>
                
                <div className="absolute left-0 lg:left-1/2 -translate-x-0 lg:-translate-x-1/2 w-14 h-14 bg-white border-4 border-[#00263C] group-hover:border-[#C92A2A] rounded-full flex items-center justify-center shadow-lg transition-colors duration-300 z-10">
                  <span className="text-[#00263C] group-hover:text-[#C92A2A] font-black text-xl transition-colors duration-300">3</span>
                </div>
                
                <div className="pl-20 lg:pl-0 lg:w-[45%] lg:text-left lg:hidden">
                  <h3 className="text-xl md:text-2xl font-bold text-[#00263C] mb-3">Implementation & Training</h3>
                  <p className="text-[14px] md:text-[15px] text-slate-500 leading-relaxed">
                    On-site assistance for applying a disciplined culture, employee training regarding safety procedures, and execution of real risk mitigation measures.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative flex flex-col lg:flex-row-reverse items-center justify-between group">
                <div className="hidden lg:block lg:w-[45%] text-left pl-12">
                  <h3 className="text-xl md:text-2xl font-bold text-[#00263C] mb-3">Certification & Official Audit</h3>
                  <p className="text-[14px] md:text-[15px] text-slate-500 leading-relaxed">
                    Execution of internal audit simulations (Mock Audit), final improvements, to full support when certification bodies or ministries conduct official feasibility audits.
                  </p>
                </div>
                
                <div className="absolute left-0 lg:left-1/2 -translate-x-0 lg:-translate-x-1/2 w-14 h-14 bg-[#00263C] border-4 border-[#00263C] group-hover:bg-[#C92A2A] group-hover:border-[#C92A2A] rounded-full flex items-center justify-center shadow-lg transition-colors duration-300 z-10">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                
                <div className="pl-20 lg:pl-0 lg:w-[45%] lg:text-right lg:hidden">
                  <h3 className="text-xl md:text-2xl font-bold text-[#00263C] mb-3">Certification & Official Audit</h3>
                  <p className="text-[14px] md:text-[15px] text-slate-500 leading-relaxed">
                    Execution of internal audit simulations (Mock Audit), final improvements, to full support when certification bodies or ministries conduct official feasibility audits.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =========================================
          SECTION 5: TRUST & CREDENTIALS
          ========================================= */}
      <section className="bg-white py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          
          <span className="inline-flex items-center rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] bg-[#C92A2A]/10 text-[#C92A2A] mb-5">
            Compliance Standards
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-[#00263C] mb-12 md:mb-16">
            Our Systems Refer to National & International Standards
          </h2>

          {/* Flexbox for Certification Logos */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            
            {/* Credential Card 1 */}
            <div className="bg-slate-50 ring-1 ring-slate-100 p-6 rounded-[1.75rem] flex items-center gap-4 group hover:shadow-[0_20px_40px_-15px_rgba(0,38,60,0.12)] hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 border-2 border-[#00263C] rounded-full flex items-center justify-center">
                <span className="text-[#00263C] font-black text-xs tracking-tighter">ISO</span>
              </div>
              <div className="text-left">
                <p className="text-[#00263C] font-black text-lg leading-none tracking-wider mb-1">45001</p>
                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Safety Standard</p>
              </div>
            </div>

            {/* Credential Card 2 */}
            <div className="bg-slate-50 ring-1 ring-slate-100 p-6 rounded-[1.75rem] flex items-center gap-4 group hover:shadow-[0_20px_40px_-15px_rgba(0,38,60,0.12)] hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 border-2 border-[#00263C] rounded-full flex items-center justify-center">
                <span className="text-[#00263C] font-black text-xs tracking-tighter">ISO</span>
              </div>
              <div className="text-left">
                <p className="text-[#00263C] font-black text-lg leading-none tracking-wider mb-1">14001</p>
                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Environment</p>
              </div>
            </div>

            {/* Credential Card 3 */}
            <div className="bg-slate-50 ring-1 ring-slate-100 p-6 rounded-[1.75rem] flex items-center gap-4 group hover:shadow-[0_20px_40px_-15px_rgba(0,38,60,0.12)] hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-[#00263C] rounded-xl flex items-center justify-center group-hover:bg-[#C92A2A] transition-colors duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <div className="text-left">
                <p className="text-[#00263C] font-black text-lg leading-none tracking-wider mb-1">SMK3</p>
                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Ministry of Manpower</p>
              </div>
            </div>

            {/* Credential Card 4 */}
            <div className="bg-slate-50 ring-1 ring-slate-100 p-6 rounded-[1.75rem] flex items-center gap-4 group hover:shadow-[0_20px_40px_-15px_rgba(0,38,60,0.12)] hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-[#00263C] rounded-xl flex items-center justify-center group-hover:bg-[#C92A2A] transition-colors duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div className="text-left">
                <p className="text-[#00263C] font-black text-lg leading-none tracking-wider mb-1">PROPER</p>
                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Ministry of Env.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 6: FINAL CTA (HSE THEME + DESAIN REFERENSI)
          ========================================= */}
      <section className="relative bg-[#00263C] py-24 md:py-32 px-6 md:px-12 overflow-hidden flex items-center justify-center min-h-[500px]">
        
        {/* Subtle Bubbles Background */}
        <div className="absolute top-10 left-[15%] w-32 h-32 bg-white/5 rounded-full blur-xl pointer-events-none"></div>
        <div className="absolute bottom-10 right-[20%] w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>
        <div className="absolute top-1/2 left-[40%] w-16 h-16 bg-white/5 rounded-full blur-md pointer-events-none"></div>

        {/* --- LEFT DECORATION (Floating Avatar 1: Safety Inspector) --- */}
        <div className="hidden lg:block absolute left-0 top-[25%] -translate-x-4">
          <div className="relative">
            {/* Pill background */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-48 h-20 bg-white/5 rounded-full -z-10"></div>
            
            <div className="flex items-center gap-6 pl-10 pr-2">
              {/* Chat Bubble (Safe Green) */}
              <div className="bg-[#b7e4d8] px-4 py-2 rounded-full flex gap-1.5 shadow-lg relative -bottom-6">
                <span className="w-2.5 h-2.5 bg-slate-400 rounded-full"></span>
                <span className="w-2.5 h-2.5 bg-teal-600 rounded-full"></span>
                <span className="w-2.5 h-2.5 bg-slate-400 rounded-full"></span>
              </div>
              
              {/* Profile Avatar */}
              <img 
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=200&auto=format&fit=crop" 
                alt="HSE Inspector" 
                className="w-20 h-20 rounded-full object-cover border-4 border-[#00263C] shadow-lg relative z-10"
              />
              
              {/* Cursor Arrow (Warning Yellow) */}
              <svg className="w-8 h-8 text-yellow-500 absolute -bottom-8 right-6 transform rotate-[-20deg]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" stroke="white" strokeWidth="1" />
              </svg>
            </div>
          </div>
        </div>

        {/* --- RIGHT DECORATION (Floating Avatar 2: Environmental Expert) --- */}
        <div className="hidden lg:block absolute right-0 bottom-[25%] translate-x-4">
          <div className="relative">
            {/* Pill background */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-48 h-20 bg-white/5 rounded-full -z-10"></div>
            
            <div className="flex items-center flex-row-reverse gap-6 pr-10 pl-2">
              {/* Chat Bubble (Credible Blue) */}
              <div className="bg-[#e0e7ff] px-4 py-2 rounded-full flex gap-1.5 shadow-lg relative -bottom-6">
                <span className="w-2.5 h-2.5 bg-indigo-500 rounded-full"></span>
                <span className="w-2.5 h-2.5 bg-slate-400 rounded-full"></span>
                <span className="w-2.5 h-2.5 bg-slate-400 rounded-full"></span>
              </div>
              
              {/* Profile Avatar */}
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" 
                alt="Environmental Consultant" 
                className="w-20 h-20 rounded-full object-cover border-4 border-[#00263C] shadow-lg relative z-10"
              />
              
              {/* Cursor Arrow (Accent Red) */}
              <svg className="w-8 h-8 text-[#C92A2A] absolute top-0 left-0 transform rotate-[160deg]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" stroke="white" strokeWidth="1" />
              </svg>
            </div>
          </div>
        </div>

        {/* --- CENTER CONTENT (HSE Specific Copywriting) --- */}
        <div className="relative z-10 text-center max-w-3xl mx-auto w-full">
          
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight text-balance">
            Create a Zero Accident <br className="hidden md:block" /> Work Environment
          </h2>
          
          <p className="text-base md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Get comprehensive guidance for OHS system implementation, ISO 45001 standard compliance, and environmental audit preparation.
          </p>
          
          {/* Button Container */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            
            {/* Primary Button */}
            <button className="w-full sm:w-auto px-8 py-4 bg-[#C92A2A] hover:bg-[#a82222] text-white font-bold rounded-lg shadow-[0_4px_20px_rgba(201,42,42,0.4)] hover:shadow-[0_6px_25px_rgba(201,42,42,0.6)] hover:-translate-y-1 transition-all duration-300 uppercase tracking-wide text-sm flex justify-center items-center gap-2">
              SCHEDULE INITIAL AUDIT
            </button>
            
            {/* Secondary Button */}
            <button className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white/60 text-white hover:bg-white hover:border-white hover:text-[#00263C] font-bold rounded-lg transition-all duration-300 uppercase tracking-wide text-sm flex justify-center items-center gap-2">
              CONSULT EXPERT TEAM
            </button>
            
          </div>
          
        </div>

      </section>

    </main>
  );
}