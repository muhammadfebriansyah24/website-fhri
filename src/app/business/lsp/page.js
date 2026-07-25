'use client';

import React from 'react';
import Link from 'next/link';

// ==========================================
// 1. DATA KATEGORI PROGRAM LENGKAP PER SECTION
// ==========================================
const lspCategories = [
  {
    id: 'hr-certification',
    number: '01',
    badge: 'Core Certification',
    title: 'HR Certification Programs',
    subtitle: 'Validate and elevate your professional credibility with globally recognized standards.',
    description: 'Our certification tracks are meticulously designed for HR practitioners at all levels. Whether you are stepping into a specialist role or managing enterprise-wide human capital, our credentials prove your mastery in modern HR frameworks.',
    features: [
      'Comprehensive curriculum covering strategic HR management.',
      'Rigorous assessment aligned with current industry competencies.',
      'Digital badge and official certificate for professional profiles.'
    ],
    accentColor: 'border-red-500 text-red-600 bg-red-50'
  },
  {
    id: 'competency-standards',
    number: '02',
    badge: 'Framework & Quality',
    title: 'Competency Standards',
    subtitle: 'Industry-standard capability frameworks and operational guidelines.',
    description: 'Establish clear benchmarks for performance within your organization. We provide structured competency models that measure skills accurately and foster a culture of continuous improvement.',
    features: [
      'Tailored competency matrices for diverse corporate sectors.',
      'Protocols for maintaining clean, safe, and organized workspaces.',
      'Performance evaluation toolkits for team leaders.'
    ],
    accentColor: 'border-blue-500 text-blue-600 bg-blue-50'
  },
  {
    id: 'training-accreditation',
    number: '03',
    badge: 'Institutional Growth',
    title: 'Training Accreditation',
    subtitle: 'Official validation of corporate training programs and learning modules.',
    description: 'Ensure your internal corporate academy or training modules meet elite professional standards. Accreditation boosts the credibility of your educational content and maximizes employee learning outcomes.',
    features: [
      'Independent quality audit of learning materials.',
      'Endorsement from recognized human resource institutes.',
      'Continuous quality assurance and feedback loops.'
    ],
    accentColor: 'border-emerald-500 text-emerald-600 bg-emerald-50'
  },
  {
    id: 'credential-verification',
    number: '04',
    badge: 'Trust & Security',
    title: 'Credential Verification',
    subtitle: 'Transparent validation and authentication of professional credentials.',
    description: 'Eliminate friction and risk during the talent acquisition process. Our verification system offers instant, secure validation of candidate certificates, past employment records, and professional background checks.',
    features: [
      'Secure blockchain-backed digital certificate registry.',
      'Instant verification portal for corporate recruiters.',
      'Fraud prevention and absolute data transparency.'
    ],
    accentColor: 'border-amber-500 text-amber-600 bg-amber-50'
  },
  {
    id: 'career-pathways',
    number: '05',
    badge: 'Future Readiness',
    title: 'Career Pathways',
    subtitle: 'Structured progression maps with clear milestones for professional growth.',
    description: 'Empower your workforce with transparent career maps. Employees can visualize their growth trajectory within the organization, linking skill development directly to promotions and leadership opportunities.',
    features: [
      'Step-by-step career mapping for HR specialists.',
      'Milestone tracking for executive leadership pipelines.',
      'Skill gap analysis and recommended developmental steps.'
    ],
    accentColor: 'border-purple-500 text-purple-600 bg-purple-50'
  },
  {
    id: 'continuing-education',
    number: '06',
    badge: 'Lifelong Learning',
    title: 'Continuing Education',
    subtitle: 'Ongoing professional development programs for certified practitioners.',
    description: 'The HR landscape evolves rapidly. Our continuing education units (CEUs) ensure certified professionals stay ahead of new compliance laws, workplace technologies, and shifting employee engagement trends.',
    features: [
      'Exclusive masterclasses and expert-led webinars.',
      'Quarterly updates on employment regulations and labor laws.',
      'Networking forums with top-tier industry executives.'
    ],
    accentColor: 'border-indigo-500 text-indigo-600 bg-indigo-50'
  }
];

// ==========================================
// 2. HALAMAN UTAMA LSP (MODERN PER SECTION)
// ==========================================
export default function LSPPage() {
  return (
    <main className="bg-white min-h-screen pt-24 md:pt-32 pb-24">
      
      {/* HEADER UTAMA INSTITUT */}
      <section className="max-w-[1200px] mx-auto px-6 mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-[#DC2626] text-xs font-extrabold tracking-widest uppercase mb-4">
          Professional Certification Institute
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#00263C] tracking-tight max-w-3xl mx-auto leading-tight">
          Validating Excellence & Elevating HR Competencies
        </h1>
        <p className="text-gray-500 mt-4 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Explore our comprehensive, world-class programs designed to benchmark skills, accredit training, and accelerate professional career paths.
        </p>
      </section>

      {/* DAFTAR PROGRAM PER SECTION (DILETAKKAN BERSELANG-SELING) */}
      <div className="space-y-24">
        {lspCategories.map((item, index) => {
          // Menentukan posisi genap/ganjil untuk tata letak zig-zag yang dinamis
          const isEven = index % 2 === 1;

          return (
            <section 
              key={item.id} 
              id={item.id}
              className={`py-16 md:py-24 px-6 transition-colors duration-300 ${
                index % 2 === 0 ? 'bg-white' : 'bg-slate-50/70 border-y border-slate-100'
              }`}
            >
              <div className={`max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${
                isEven ? 'lg:flex-row-reverse' : ''
              }`}>
                
                {/* SISI KIRI / KANAN: KARTU VISUAL / WATERMARK BESAR */}
                <div className="w-full lg:w-1/2">
                  <div className="relative bg-[#00263C] rounded-[2rem] p-8 md:p-12 text-white shadow-xl overflow-hidden group">
                    
                    {/* Background Glow & Watermark Number */}
                    <div className="absolute -right-10 -bottom-10 text-[180px] font-black text-white/5 select-none leading-none z-0 group-hover:scale-105 transition-transform duration-500">
                      {item.number}
                    </div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#DC2626]/10 rounded-full blur-3xl pointer-events-none"></div>

                    <div className="relative z-10">
                      <span className="inline-block px-3.5 py-1 rounded-md bg-white/10 text-red-400 text-xs font-bold uppercase tracking-wider mb-6">
                        Category {item.number}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8">
                        {item.description}
                      </p>
                      
                      <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-semibold tracking-wider uppercase text-slate-400">
                        <span>Status: Active & Open</span>
                        <span className="text-red-400">FHRI Standard</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SISI SEBALIKNYA: DETAIL INFORMASI & FITUR */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <span className={`self-start text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-md mb-4 border ${item.accentColor}`}>
                    {item.badge}
                  </span>
                  
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#00263C] tracking-tight mb-4">
                    {item.subtitle}
                  </h2>
                  
                  <p className="text-gray-600 text-base leading-relaxed mb-8">
                    {item.description}
                  </p>

                  {/* List Keunggulan / Poin-Poin */}
                  <div className="space-y-4 mb-8">
                    {item.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-red-50 text-[#DC2626] flex items-center justify-center shrink-0 mt-0.5">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span className="text-sm md:text-base text-gray-700 font-medium">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tombol Aksi per Section */}
                  <div>
                    <Link 
                      href="/contact" 
                      className="inline-flex items-center gap-3 bg-[#00263C] text-white px-7 py-3.5 rounded-full font-bold text-sm hover:bg-[#DC2626] transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      Enquire About This Program
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </Link>
                  </div>

                </div>

              </div>
            </section>
          );
        })}
      </div>

      {/* BANNER BAWAH: CALL TO ACTION */}
      <section className="max-w-[1200px] mx-auto px-6 mt-24">
        <div className="bg-gradient-to-r from-[#00263C] to-[#153C56] rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-4">
              Ready to Validate Your HR Expertise?
            </h2>
            <p className="text-slate-300 text-sm md:text-base mb-8 leading-relaxed">
              Join thousands of certified professionals who have transformed their careers and organizations through First HR Indonesia Institute.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact" 
                className="bg-[#DC2626] text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-white hover:text-[#00263C] transition-all shadow-lg"
              >
                Register for Certification
              </Link>
              <Link 
                href="/" 
                className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-bold text-sm hover:bg-white/20 transition-all"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}