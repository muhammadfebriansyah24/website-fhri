'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
    accentColor: 'border-red-500 text-[#DC0017] bg-red-50'
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
    <main className="bg-white min-h-screen pb-20">

      {/* HEADER UTAMA INSTITUT - NAVY BG + FOTO SEMINAR/TRAINING SEBAGAI GAMBAR LATAR */}
      {/* Foto: "crowd of people sitting on chairs inside room" (audiens seminar/training) oleh Headway, gratis & open-source dari Unsplash
          (https://unsplash.com/photos/crowd-of-people-sitting-on-chairs-inside-room-F2KRf_QfCqw) - sesuai tema sertifikasi & training HR.
          Tambahkan images.unsplash.com ke remotePatterns di next.config.js agar next/image bisa memuatnya. */}
      <section className="relative overflow-hidden bg-[#00263C]">
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?fm=jpg&q=80&w=2400&auto=format&fit=crop"
            alt="Audience attending a professional HR certification training seminar"
            fill
            priority
            className="object-cover"
          />
          {/* Overlay tint tunggal, bukan gradasi gelap total, supaya foto tetap terlihat jelas sebagai latar */}
          <div className="absolute inset-0 bg-[#00263C]/70" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#DC2626]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-72 h-72 bg-[#DC2626]/20 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* Konten teks diposisikan center vertikal & horizontal agar simetris, tidak menggantung ke bawah */}
        <div className="relative z-10 min-h-[480px] md:min-h-[560px] flex items-center justify-center px-6 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-[#DC0017] text-xs font-extrabold tracking-widest uppercase mb-4">
              Professional Certification Institute
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Validating Excellence & Elevating HR Competencies
            </h1>
            <p className="text-slate-300 mt-4 text-base md:text-lg leading-relaxed">
              Explore our comprehensive, world-class programs designed to benchmark skills, accredit training, and accelerate professional career paths.
            </p>
          </div>
        </div>
      </section>

      {/* DAFTAR PROGRAM PER SECTION (DILETAKKAN BERSELANG-SELING) */}
      <div>
        {lspCategories.map((item, index) => {
          // Menentukan posisi genap/ganjil untuk tata letak zig-zag yang dinamis
          const isEven = index % 2 === 1;

          return (
            <section
              key={item.id}
              id={item.id}
              className={`py-12 md:py-16 px-6 transition-colors duration-300 ${
                index % 2 === 0 ? 'bg-white' : 'bg-slate-50/70 border-y border-slate-100'
              }`}
            >
              <div className={`max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-14 ${
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
                      <span className="inline-block px-3.5 py-1 rounded-md bg-white/10 text-[#DC0017] text-xs font-bold uppercase tracking-wider mb-6">
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
                        <span className="text-[#DC0017]">FHRI Standard</span>
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
                        <div 
                          className="w-6 h-6 bg-[#DC0017] shrink-0 mt-0.5"
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
                        <span className="text-sm md:text-base text-gray-700 font-medium">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* BANNER BAWAH: CALL TO ACTION */}
      <section className="max-w-[1200px] mx-auto px-6 mt-4">
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
                href="/join-us"
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