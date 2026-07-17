'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// ============================================================
// REUSABLE UI COMPONENTS (Sesuai Referensi Desain)
// ============================================================
function Eyebrow({ children, tone = 'light' }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] ${
        tone === 'light' 
          ? 'bg-white/10 text-white border border-white/20' 
          : 'bg-[#00263C]/10 text-[#00263C]'
      }`}
    >
      {children}
    </span>
  );
}

export default function IndustrialRelationsPage() {
  // DATA SERVICES DARI PPT
  const services = [
    {
      id: "01",
      title: "Labor Law Compliance",
      desc: "Ensure compliance with the latest labor regulations through the development and review of Company Regulations (PP) and Collective Labor Agreements (PKB).",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      )
    },
    {
      id: "02",
      title: "Risk Management",
      desc: "Mitigate employment risks related to organizational restructuring, employment status (fixed-term & permanent), and legally compliant termination processes.",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      )
    },
    {
      id: "03",
      title: "Dispute Resolution & Litigation",
      desc: "Strengthen capabilities through effective bipartite negotiations and guidance on mediation, conciliation, and Industrial Relations Court (PHI) proceedings.",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      )
    },
    {
      id: "04",
      title: "Trade Union Partnership",
      desc: "Build constructive and collaborative relationships with labor unions to foster positive industrial relations and a productive work environment.",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      )
    }
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] font-sans">
      
      {/* ============================================================
          1. HERO SECTION (Terinspirasi desain bersih & modern)
          ============================================================ */}
      <section className="relative bg-[#00263C] pt-28 pb-32 px-6 md:px-12 overflow-hidden">
        {/* Dekorasi Latar Belakang */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#DC2626]/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Teks Hero */}
          <div className="md:w-1/2 flex flex-col items-start text-left">
            <Eyebrow tone="light">Legal & Compliance</Eyebrow>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.1] tracking-tight">
              Industrial Relations <br/> <span className="text-white/70">& Legal Advisory</span>
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-lg">
              Providing expert guidance on labor compliance, risk mitigation, and harmonized workplace relations to protect corporate assets while ensuring a fair working environment.
            </p>
            <div className="mt-10">
              <Link href="#contact" className="inline-flex items-center gap-3 bg-[#DC2626] hover:bg-[#B91C1C] text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_8px_20px_rgba(220,38,38,0.3)] hover:-translate-y-1">
                Consult with Our Experts
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Gambar Hero dengan Frame Melingkar (Sesuai Referensi image_57bae3) */}
          <div className="md:w-1/2 relative w-full flex justify-center lg:justify-end">
            <div className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px]">
              {/* Lingkaran Luar */}
              <div className="absolute inset-0 border-[2px] border-white/20 rounded-full animate-[spin_20s_linear_infinite] border-dashed"></div>
              {/* Lingkaran Gambar */}
              <div className="absolute inset-4 rounded-full overflow-hidden border-8 border-[#00263C] shadow-2xl">
                <Image 
                  src="/herokonten2.jpg" // Ganti dengan gambar meeting legal/HR yang sesuai
                  alt="Legal Advisory Meeting" 
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute bottom-8 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Status</p>
                  <p className="text-sm font-black text-[#00263C]">100% Compliant</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================
          2. CORE EXPERTISE (Desain Bento Grid / Kartu Melayang)
          ============================================================ */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative -mt-16 z-20">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00263C] bg-white inline-block px-10 py-4 rounded-full shadow-md">
            Our Area of Expertise
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="group bg-white p-8 md:p-10 rounded-[2rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-15px_rgba(0,38,60,0.15)] transition-all duration-300 border border-slate-100 relative overflow-hidden"
            >
              {/* Angka Latar (Watermark) */}
              <div className="absolute -right-4 -top-8 text-[120px] font-black text-slate-50/50 group-hover:text-blue-50/50 transition-colors pointer-events-none select-none">
                {service.id}
              </div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 bg-[#F1F5F6] group-hover:bg-[#00263C] rounded-2xl flex items-center justify-center text-[#00263C] group-hover:text-white transition-colors duration-300 mb-8">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    {service.icon}
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold text-[#00263C] mb-4 leading-snug">
                  {service.title}
                </h3>
                
                <p className="text-slate-500 leading-relaxed">
                  {service.desc}
                </p>

                <div className="mt-8 pt-6 border-t border-slate-100 mt-auto">
                  <Link href="#contact" className="inline-flex items-center gap-2 text-sm font-bold text-[#DC2626] group-hover:text-[#00263C] transition-colors">
                    Learn More 
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          3. WHY IT MATTERS (Numbered Layout seperti di referensi 3)
          ============================================================ */}
      <section className="bg-[#00263C] py-24 px-6 md:px-12 text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <Eyebrow tone="light">Why Partner With Us?</Eyebrow>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Mitigating Risks, <br/>
              <span className="text-[#DC2626]">Protecting Assets.</span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              In a dynamic regulatory environment, missteps in industrial relations can lead to costly disputes and reputational damage. We provide proactive strategies to ensure your business remains compliant and harmonious.
            </p>
            
            <div className="space-y-6 pt-4">
              {[
                "Proactive risk identification and mitigation.",
                "Expert representation in bipartit and PHI negotiations.",
                "Tailored compliance strategies for your specific industry.",
                "Fostering a productive, union-friendly environment."
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-8 h-8 shrink-0 rounded-full bg-[#DC2626] flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </div>
                  <p className="text-slate-200 mt-1">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[600px] w-full rounded-[2.5rem] overflow-hidden">
            <Image 
              src="/herokonten6.jpg" // Ganti dengan gambar yang sesuai
              alt="Professional Consultation" 
              fill 
              className="object-cover opacity-90 hover:scale-105 transition-transform duration-700" 
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#00263C] via-transparent to-transparent"></div>
          </div>

        </div>
      </section>

      {/* ============================================================
          4. CTA BANNER
          ============================================================ */}
      <section id="contact" className="py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#0B2A4A] to-[#00263C] rounded-[3rem] p-10 md:p-16 text-center shadow-2xl relative overflow-hidden border border-[#0B2A4A]/50">
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Need Expert Legal Counsel?
            </h2>
            <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
              Secure your business operations and maintain a harmonious workplace. Contact our Industrial Relations experts today for a confidential consultation.
            </p>
            
            <Link href="/contact" className="inline-flex items-center gap-3 bg-white text-[#00263C] hover:bg-slate-100 px-10 py-4 rounded-full font-extrabold transition-all hover:scale-105 shadow-lg">
              Contact Our Legal Team
              <svg className="w-5 h-5 text-[#DC2626]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}