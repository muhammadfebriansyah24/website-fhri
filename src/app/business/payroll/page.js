'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// ============================================================
// REUSABLE COMPONENTS
// ============================================================
function CTAButton({ href, children, variant = 'solid' }) {
  const styles =
    variant === 'solid'
      ? 'bg-[#DC2626] hover:bg-[#B91C1C] text-white'
      : 'bg-white/10 hover:bg-white/15 text-white ring-1 ring-white/15';
      
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2.5 ${styles} pl-6 pr-2 py-2 rounded-full font-semibold text-sm transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]`}
    >
      {children}
      <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white/15 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
          <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </Link>
  );
}

function Eyebrow({ children, tone = 'light' }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] ${
        tone === 'light' ? 'bg-white/10 text-white' : 'bg-[#DC2626]/10 text-[#DC2626]'
      }`}
    >
      {children}
    </span>
  );
}

// ============================================================
// MAIN COMPONENT
// ============================================================
export default function PayrollOutsourcingPage() {

  // --- DATA KONTEN PAYROLL ---
  const coreModules = [
    { 
      title: 'Payroll Management', 
      desc: 'Accurate, timely processing aligned with Indonesian labour regulations and tax requirements.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
    },
    { 
      title: 'Staff Outsourcing', 
      desc: 'Flexible workforce solutions that scale with your business needs and reduce administrative burden.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    },
    { 
      title: 'Full Compliance', 
      desc: 'Complete statutory compliance and comprehensive social security (BPJS) administration.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    },
    { 
      title: 'Transparent Reporting', 
      desc: 'Clear, accurate, and structured reporting to provide better financial oversight for your management.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    }
  ];

  const zigZagFeatures = [
    {
      eyebrow: "Precision & Timeliness",
      title: "Accurate Payroll Management",
      desc: "Accurate and timely payroll processing, perfectly aligned with Indonesian labor regulations and tax obligations (PPh 21).",
      bullets: [
        "Ensure on-time and error-free salary disbursements.",
        "Strict compliance with Indonesian tax laws (PPh 21).",
        "Minimize manual calculations and administrative errors."
      ],
      image: "/herokonten3.jpg"
    },
    {
      eyebrow: "Workforce Flexibility",
      title: "Flexible Staff Outsourcing",
      desc: "Flexible workforce solutions designed to scale with your specific business needs while significantly reducing your administrative burden.",
      bullets: [
        "Scale your workforce dynamically based on business demands.",
        "Reduce internal recruitment and administrative overhead.",
        "Gain immediate access to pre-screened, qualified talent."
      ],
      image: "/herokonten4.jpg"
    },
    {
      eyebrow: "Risk Mitigation",
      title: "Full Statutory Compliance",
      desc: "Comprehensive management of social security administration and full legal compliance to protect your corporate assets.",
      bullets: [
        "End-to-end management of BPJS and social securities.",
        "Guarantee full compliance with the latest labor laws.",
        "Mitigate legal risks associated with employment."
      ],
      image: "/herokonten5.jpg"
    },
    {
      eyebrow: "Data-Driven Insights",
      title: "Transparent Reporting",
      desc: "Clear, structured, and transparent reporting to provide your management team with the financial and operational insights they need.",
      bullets: [
        "Detailed breakdown of payroll and tax expenditures.",
        "Accessible reports for auditing and financial planning.",
        "Data-driven insights to monitor workforce efficiency."
      ],
      // Menggunakan gambar analytics/reporting baru yang relevan dengan data & insights
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  return (
    <main className="min-h-screen font-sans bg-white">
      
      {/* ============================================================
          SECTION 1 — HERO SECTION
          ============================================================ */}
      <section className="relative bg-[#00263C] pt-16 pb-16 md:pt-24 md:pb-24 px-6 md:px-12 overflow-hidden flex items-center min-h-[75vh]">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="absolute -left-32 -top-32 w-[480px] h-[480px] rounded-full bg-[#DC2626]/10 blur-3xl" />
        
        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-14 items-center w-full">
          
          {/* Left: Text */}
          <div>
            <Eyebrow tone="light">Payroll & Outsourcing</Eyebrow>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] text-balance">
              Focus on Growth, <br className="hidden md:block" />
              We Handle the Rest
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-lg">
              Comprehensive administrative and HR operational management. Empower your company to focus entirely on core business growth while we expertly manage the complexity.
            </p>
            
            {/* Penambahan Button Consult Our Experts */}
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

          {/* Right: Image */}
          <div className="relative w-full max-w-[600px] mx-auto lg:ml-auto">
            <div className="bg-white/5 p-2 md:p-3 rounded-[2rem] w-full shadow-2xl ring-1 ring-white/10 backdrop-blur-sm">
              <div className="relative w-full h-[320px] md:h-[420px] rounded-[1.5rem] overflow-hidden">
                <Image 
                  src="/herokonten6.jpg" 
                  alt="Payroll and Outsourcing Services" 
                  fill
                  className="object-cover" 
                  priority
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================
          SECTION 2 — CORE CAPABILITIES (MODULES)
          ============================================================ */}
      <section className="bg-white py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <Eyebrow tone="dark">Core Services</Eyebrow>
            <h2 className="mt-5 text-3xl md:text-5xl font-bold text-[#00263C] leading-tight">Structured Solutions for Peace of Mind</h2>
            <p className="mt-5 text-slate-500 text-lg">Let us manage the complexity so you can focus on growth. Our solutions ensure compliance, accuracy, and operational excellence.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {coreModules.map((item) => (
              <article key={item.title} className="group rounded-[1.75rem] bg-slate-50 p-7 md:p-9 ring-1 ring-slate-100 transition-all hover:shadow-[0_30px_60px_-20px_rgba(0,38,60,0.18)] hover:-translate-y-1.5 flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-[#00263C] flex items-center justify-center mb-6 shadow-md">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">{item.icon}</svg>
                </div>
                <h3 className="font-bold text-[#00263C] text-lg leading-snug group-hover:text-[#DC2626] transition-colors">{item.title}</h3>
                <p className="text-[13.5px] text-slate-500 leading-relaxed mt-3 flex-grow">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3 — ZIG-ZAG FEATURES
          ============================================================ */}
      <section className="bg-white pb-24 md:pb-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto space-y-24 md:space-y-32">
          
          {zigZagFeatures.map((feature, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className="grid lg:grid-cols-2 gap-14 items-center">
                
                {/* Image Side */}
                <div className={`rounded-[2rem] bg-slate-50 ring-1 ring-slate-100 p-2 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative h-72 md:h-[420px] rounded-[calc(2rem-0.5rem)] overflow-hidden">
                    <img 
                      src={feature.image} 
                      alt={feature.title} 
                      className="absolute inset-0 w-full h-full object-cover" 
                    />
                  </div>
                </div>

                {/* Text Side */}
                <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <Eyebrow tone="dark">{feature.eyebrow}</Eyebrow>
                  <h2 className="mt-5 text-3xl md:text-[2.5rem] font-bold text-[#00263C] leading-tight">{feature.title}</h2>
                  <p className="mt-6 text-slate-500 leading-relaxed text-[15px]">
                    {feature.desc}
                  </p>
                  
                  <div className="mt-8 space-y-5">
                    {feature.bullets.map((bullet, i) => (
                      <div key={i} className="flex gap-4">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#DC2626] flex items-center justify-center mt-0.5 shadow-sm">
                          <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </span>
                        <p className="text-[14px] font-medium text-[#00263C] leading-relaxed">{bullet}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}

        </div>
      </section>

    </main>
  );
}