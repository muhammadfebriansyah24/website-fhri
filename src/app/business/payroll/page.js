'use client';

import React, { useState } from 'react';
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
  const [activeSlide, setActiveSlide] = useState(0);

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
      image: "/herokonten6.jpg"
    }
  ];

  const testimonials = [
    { quote: '"FHRI\'s Payroll & Outsourcing services removed our administrative burden completely. Now, our team can finally focus on strategic business growth."', name: 'Jane Doe', role: 'Operations Director, Tech Innovators' },
    { quote: '"Highly recommended! Their payroll processing is remarkably accurate, timely, and fully compliant with the latest Indonesian tax regulations."', name: 'John Smith', role: 'Head of Finance, GrowthCorp' },
    { quote: '"The outsourcing solutions provided incredible flexibility for our scaling business while significantly reducing our HR administrative overhead."', name: 'Sarah Williams', role: 'VP of Human Resources, Nexus Inc' },
    { quote: '"Transparent reporting and seamless social security management have given our executive team complete peace of mind and operational clarity."', name: 'Michael Chen', role: 'General Manager, Synergy' },
  ];

  const nextSlide = () => setActiveSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setActiveSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  return (
    <main className="min-h-screen font-sans bg-white">
      
      {/* ============================================================
          SECTION 1 — HERO SECTION
          ============================================================ */}
      <section className="relative bg-[#00263C] pt-16 pb-20 md:pt-24 md:pb-28 px-6 md:px-12 overflow-hidden flex items-center min-h-[85vh]">
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
            <div className="mt-9 flex gap-4">
              <CTAButton href="#cta" variant="solid">
                Request a Consultation
              </CTAButton>
            </div>
          </div>

          {/* Right: Image with Badge */}
          <div className="relative w-full max-w-[600px] mx-auto lg:ml-auto">
            <div className="bg-white/5 p-2 md:p-3.5 rounded-[2rem] w-full shadow-2xl ring-1 ring-white/10 backdrop-blur-sm">
              <div className="relative w-full h-[280px] md:h-[380px] rounded-[1.5rem] overflow-hidden">
                <Image 
                  src="/herokonten6.jpg" 
                  alt="Payroll and Outsourcing Services" 
                  fill
                  className="object-cover" 
                  priority
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute top-1/2 -left-4 md:-left-8 transform -translate-y-1/2 bg-white/95 backdrop-blur shadow-[0_10px_40px_rgba(0,0,0,0.2)] rounded-2xl p-4 flex items-center gap-4 border border-slate-100">
                <div className="bg-[#00263C] text-white w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">Admin Burden</p>
                  <p className="text-xl font-black text-[#00263C] leading-none mt-1">Reduced by 80%</p>
                </div>
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
                  {/* PENAMBAHAN stroke="currentColor" AGAR IKON MUNCUL WARNA PUTIH */}
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
                    <Image 
                      src={feature.image} 
                      alt={feature.title} 
                      fill 
                      className="object-cover" 
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

                  <div className="mt-10">
                    <Link href="#cta" className="group/link inline-flex items-center gap-1.5 text-[13px] font-bold text-[#DC2626] hover:text-[#B91C1C] transition-colors">
                      Learn More About {feature.title.split(' ')[1]}
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </Link>
                  </div>
                </div>

              </div>
            );
          })}

        </div>
      </section>

      {/* ============================================================
      SECTION 4 — CTA BANNER
      ============================================================ */}
      <section id="cta" className="bg-[#00263C] py-24 md:py-32 px-6 md:px-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="max-w-3xl mx-auto relative z-10">
          
          <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-7 backdrop-blur-sm ring-1 ring-white/20">
            {/* ICON BARU: Petir (Lightning Bolt) melambangkan efisiensi dan optimasi */}
            <svg className="w-7 h-7 text-white drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Ready to <span className="text-[#DC2626]">Optimize Your HR</span> Operations?
          </h2>
          <p className="mt-5 text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
            Partner with First HR Indonesia for secure, compliant, and efficient payroll management. Let our experts handle the complexities while you focus on scaling your business.
          </p>
          <div className="mt-10 flex justify-center">
            <CTAButton href="#cta" variant="solid">
              Explore Enterprise Solutions
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 5 — TESTIMONIAL SLIDER 
          ============================================================ */}
      <section className="bg-[#F1F5F6] py-24 px-4 md:px-8 relative">
        <div className="max-w-5xl mx-auto text-center relative">
          
          <svg className="w-12 h-12 text-[#DC2626] opacity-80 mx-auto mb-10" fill="currentColor" viewBox="0 0 256 256">
            <path d="M116,72v88a48.05,48.05,0,0,1-48,48,8,8,0,0,1,0-16,32,32,0,0,0,32-32v-8H40a16,16,0,0,1-16-16V72A16,16,0,0,1,40,56h60A16,16,0,0,1,116,72ZM216,56H156a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,216,56Z" />
          </svg>
          
          <div className="relative group">
            {/* Navigasi Prev */}
            <button 
              onClick={prevSlide} 
              className="hidden md:flex absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full bg-white text-[#00263C] shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:text-[#DC2626] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 z-10"
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
            </button>

            {/* Slider Konten */}
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
                {testimonials.map((testi, index) => (
                  <div key={index} className="w-full shrink-0 px-6 md:px-16">
                    <p className="text-xl md:text-3xl font-bold text-[#00263C] leading-snug">
                      {testi.quote}
                    </p>
                    <div className="mt-10">
                      <h4 className="text-[#00263C] font-extrabold text-sm uppercase tracking-wide mb-1">{testi.name}</h4>
                      <p className="text-slate-500 text-sm font-medium">{testi.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigasi Next */}
            <button 
              onClick={nextSlide} 
              className="hidden md:flex absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full bg-white text-[#00263C] shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:text-[#DC2626] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 z-10"
              aria-label="Next slide"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>

          {/* Indikator Dots */}
          <div className="flex items-center justify-center gap-2.5 mt-12">
            {testimonials.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setActiveSlide(i)} 
                className={`h-2.5 rounded-full transition-all duration-300 ${activeSlide === i ? 'w-10 bg-[#DC2626]' : 'w-2.5 bg-slate-300 hover:bg-slate-400'}`} 
                aria-label={`Go to slide ${i + 1}`} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 6 — FINAL SPLIT CTA
          ============================================================ */}
      <section className="bg-white py-24 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row rounded-[2rem] overflow-hidden shadow-[0_20px_50px_-10px_rgba(0,38,60,0.3)] bg-[#00263C]">
            <div className="md:w-5/12 min-h-[300px] md:min-h-[480px] bg-slate-200 relative">
              <Image src="/herokonten2.jpg" alt="HR Professional" fill className="object-cover" />
            </div>
            <div className="md:w-7/12 p-10 md:p-20 flex flex-col justify-center relative">
              <div className="absolute top-0 bottom-0 left-[60%] w-32 bg-white/5 skew-x-12 hidden md:block" />
              <Eyebrow tone="light">Let's Connect</Eyebrow>
              <h2 className="mt-5 text-3xl md:text-5xl font-bold text-white mb-6 leading-tight relative z-10">
                Find the Right Path <br className="hidden md:block" /> for Your Business
              </h2>
              <p className="text-gray-300 text-sm md:text-lg mb-10 leading-relaxed relative z-10 max-w-lg">
                Let us manage the complexity so you can focus on growth. FHRI offers payroll and outsourcing solutions designed to support your company's efficiency and legal compliance.
              </p>
              
              <Link href="#cta" className="bg-[#DC2626] hover:bg-[#B91C1C] transition-all text-white text-sm font-bold uppercase tracking-wider py-4 px-8 rounded-xl w-max flex items-center gap-2 relative z-10 shadow-lg active:scale-95">
                BOOK A CALL
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}