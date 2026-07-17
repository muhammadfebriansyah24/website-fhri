'use client'; 

import React, { useState } from 'react';

export default function AssessmentToolsPage() {
  // --- STATE UNTUK INTERACTIVE TABS (SECTION 2) ---
  const [activeTab, setActiveTab] = useState(0);

  // --- DATA KONTEN ASSESSMENT TOOLS ---
  const assessmentData = [
    {
      id: 'skill',
      title: 'Skill & Performance Appraisal',
      shortDesc: 'Evaluasi kesiapan teknis dan pencapaian target kerja secara terukur.',
      focus: 'Mengukur gap kompetensi teknis & pencapaian Key Performance Indicators (KPI).',
      methodology: 'Tes fungsional, simulasi praktik, dan studi kasus industri spesifik.',
      output: 'Skor kuantitatif kesiapan teknis karyawan dan matriks kinerja.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: '360',
      title: '360-Degree Feedback',
      shortDesc: 'Dapatkan pandangan komprehensif dari seluruh struktur interaksi kerja.',
      focus: 'Evaluasi efektivitas kolaborasi, gaya komunikasi, dan kepemimpinan.',
      methodology: 'Kuesioner anonim terkalibrasi dari atasan, rekan sejawat (peer), dan bawahan.',
      output: 'Peta buta (blind spot) interpersonal dan laporan efektivitas kolaborasi.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'potential',
      title: 'Potential & Personality',
      shortDesc: 'Petakan DNA psikologis karyawan untuk kesiapan suksesi masa depan.',
      focus: 'Kesiapan suksesi, kelincahan belajar (learning agility), dan gaya kerja.',
      methodology: 'Tes psikometrik, inventory kepribadian, dan evaluasi keselarasan budaya (cultural fit).',
      output: 'Profil psikologis lengkap dan rekomendasi presisi untuk jalur karir.',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop',
    }
  ];

  return (
    <main className="min-h-screen font-sans bg-[#FFFFFF]">
      
      {/* =========================================
          SECTION 1: HERO SECTION (NAVY BACKGROUND) 
          ========================================= */}
      <section className="relative pt-24 pb-16 px-6 md:px-12 lg:pt-32 lg:pb-24 overflow-hidden bg-[#00263C]">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* KOLOM KIRI: Copywriting */}
            <div className="flex flex-col justify-center max-w-2xl relative z-10">
              <div className="mb-6">
                <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-widest border border-white/20">
                  Assessment Tools
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] mb-6 tracking-tight">
                Ukur Kapabilitas, <br className="hidden md:block" />
                Eliminasi Asumsi dalam <span className="text-[#C92A2A]">Keputusan SDM</span> Anda.
              </h1>
              <p className="text-lg text-gray-300 mb-10 leading-relaxed max-w-lg">
                Hadirkan presisi dalam pengembangan talenta. Evaluasi objektif untuk mengidentifikasi potensi kepemimpinan, kapabilitas teknis, dan keselarasan budaya melalui alat ukur berstandar industri.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
                <button className="w-full sm:w-auto px-8 py-4 bg-[#C92A2A] hover:bg-[#a82222] text-white font-bold rounded-lg transition-colors shadow-lg shadow-[#C92A2A]/20 flex justify-center items-center gap-2">
                  Jadwalkan Konsultasi Asesmen
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
                <button className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white/70 text-white hover:bg-white hover:text-[#00263C] font-bold rounded-lg transition-colors flex justify-center items-center gap-2">
                  Lihat Contoh Laporan
                </button>
              </div>
              
              <div className="pt-8 border-t border-white/10">
                <p className="text-xs font-bold text-gray-400 mb-4 uppercase tracking-wider">
                  Dipercaya oleh +50 Perusahaan Nasional
                </p>
                <div className="flex items-center gap-8 text-white/40">
                  <div className="text-2xl font-extrabold italic tracking-tighter">COMPANY <span className="text-white/20">A</span></div>
                  <div className="text-2xl font-black uppercase tracking-widest border-2 border-white/20 px-2 rounded-md">BRAND</div>
                  <div className="text-2xl font-bold lowercase">enterprise</div>
                </div>
              </div>
            </div>
            
            {/* KOLOM KANAN: Visual Mockup */}
            <div className="relative w-full h-full min-h-[400px] lg:min-h-[550px] flex items-center justify-center mt-10 lg:mt-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-tr from-[#C92A2A]/30 to-white/5 rounded-[3rem] rotate-3 -z-10 blur-sm"></div>
              <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-[0_20px_60px_-12px_rgba(0,0,0,0.5)] overflow-hidden transform hover:-translate-y-2 transition-transform duration-500">
                <div className="bg-gray-100 p-3 flex items-center gap-2 border-b border-gray-200">
                  <div className="flex gap-1.5 ml-1">
                    <div className="w-3 h-3 rounded-full bg-[#C92A2A]"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="mx-auto text-[#00263C]/60 text-[10px] font-bold tracking-widest uppercase pr-6">
                    Assessment Analytics
                  </div>
                </div>
                <div className="p-1 bg-white aspect-[4/3] relative">
                  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" alt="Data Analytics Dashboard" className="absolute inset-0 w-full h-full object-cover opacity-90 rounded-b-xl" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-4">
                     <div className="w-12 h-12 bg-[#00263C]/5 rounded-full flex items-center justify-center shrink-0">
                       <svg className="w-6 h-6 text-[#C92A2A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                     </div>
                     <div>
                       <h4 className="text-sm font-extrabold text-[#00263C] mb-0.5">Potensi Kepemimpinan</h4>
                       <p className="text-xs text-gray-500 font-medium">Kandidat mencapai skor 92% pada pilar strategi eksekusi.</p>
                     </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 2: CORE ASSESSMENT (INTERACTIVE TABS) 
          ========================================= */}
      <section className="bg-[#FFFFFF] py-24 px-6 md:px-12 relative border-b border-gray-100">
        <div className="container mx-auto max-w-7xl">
          
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#C92A2A] text-xs font-bold uppercase tracking-widest mb-3 block">
              Core Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#00263C] mb-6">
              Alat Ukur Berbasis Data
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Kami menggunakan pendekatan multidimensi untuk mengukur apa yang benar-benar memengaruhi kinerja dan pertumbuhan organisasi Anda.
            </p>
          </div>

          {/* Interactive Tabs Navigation */}
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
            {assessmentData.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-4 rounded-xl font-bold text-sm md:text-base transition-all duration-300 ease-in-out border-2 ${
                  activeTab === index 
                    ? 'bg-[#00263C] text-white border-[#00263C] shadow-lg shadow-[#00263C]/20 scale-105' 
                    : 'bg-white text-gray-500 border-gray-200 hover:border-[#C92A2A]/50 hover:text-[#00263C]'
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Tab Content Area */}
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              
              {/* Kiri: Teks Detail */}
              <div className="space-y-8 animate-fadeIn">
                <div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-[#00263C] mb-4">
                    {assessmentData[activeTab].title}
                  </h3>
                  <p className="text-gray-500 text-lg leading-relaxed">
                    {assessmentData[activeTab].shortDesc}
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Poin 1: Fokus */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#C92A2A]/10 flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-[#C92A2A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#00263C] text-sm uppercase tracking-wider mb-1">Fokus Evaluasi</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{assessmentData[activeTab].focus}</p>
                    </div>
                  </div>

                  {/* Poin 2: Metodologi */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#00263C]/5 flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-[#00263C]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#00263C] text-sm uppercase tracking-wider mb-1">Metodologi</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{assessmentData[activeTab].methodology}</p>
                    </div>
                  </div>

                  {/* Poin 3: Output */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#00263C] text-sm uppercase tracking-wider mb-1">Hasil Akhir (Output)</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{assessmentData[activeTab].output}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Kanan: Gambar Dinamis */}
              <div className="relative w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden group">
                {/* Overlay Warna Sedikit untuk Estetika */}
                <div className="absolute inset-0 bg-[#00263C]/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={assessmentData[activeTab].image} 
                  alt={assessmentData[activeTab].title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =========================================
          SECTION 3: IDEAL USE CASES (IMPLEMENTASI) 
          ========================================= */}
      <section className="bg-[#00263C] py-24 px-6 md:px-12 relative">
        <div className="container mx-auto max-w-7xl">
          
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#C92A2A] text-xs font-bold uppercase tracking-widest mb-3 block">
              Konteks Implementasi
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
              Skenario Implementasi Strategis
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Alat ukur kami dirancang untuk mendukung berbagai keputusan krusial dalam siklus hidup pengelolaan SDM di perusahaan Anda.
            </p>
          </div>

          {/* Grid 4 Kolom untuk Use Cases */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            
            {/* Card 1: Promosi & Suksesi */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-[#C92A2A]/10 hover:-translate-y-2 transition-all duration-300 group">
              {/* Latar Belakang Ikon Navy, Hover menjadi Merah */}
              <div className="w-14 h-14 bg-[#00263C] group-hover:bg-[#C92A2A] rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                {/* Ikon berwarna Putih */}
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#00263C] mb-3">Promosi & Suksesi</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Mengidentifikasi pemimpin masa depan secara objektif dan mempersiapkan talenta terbaik untuk menduduki posisi kunci organisasi.
              </p>
            </div>

            {/* Card 2: Restrukturisasi Organisasi */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-[#C92A2A]/10 hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-14 h-14 bg-[#00263C] group-hover:bg-[#C92A2A] rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#00263C] mb-3">Restrukturisasi</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Memetakan ulang talenta dan kapabilitas saat terjadi merger, akuisisi, atau upaya efisiensi operasional perusahaan.
              </p>
            </div>

            {/* Card 3: Identifikasi Kebutuhan Training (TNA) */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-[#C92A2A]/10 hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-14 h-14 bg-[#00263C] group-hover:bg-[#C92A2A] rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#00263C] mb-3">Kebutuhan Training (TNA)</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Menemukan celah keterampilan (<span className="italic">skill gap</span>) secara presisi untuk merancang program pelatihan yang efektif.
              </p>
            </div>

            {/* Card 4: Evaluasi Kinerja Tahunan */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-[#C92A2A]/10 hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-14 h-14 bg-[#00263C] group-hover:bg-[#C92A2A] rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#00263C] mb-3">Evaluasi Kinerja</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Menyediakan data pendukung yang valid dan objektif untuk keputusan kompensasi, bonus tahunan, dan retensi.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 4: METHODOLOGY & USER FLOW 
          ========================================= */}
      <section className="bg-[#FFFFFF] py-24 px-6 md:px-12 relative">
        <div className="container mx-auto max-w-5xl">
          
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <span className="text-[#C92A2A] text-xs font-bold uppercase tracking-widest mb-3 block">
              Metodologi Asesmen
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#00263C] mb-6">
              Proses Terstruktur, Hasil Terukur
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Kami memastikan setiap tahap asesmen berjalan transparan, efisien, dan memberikan data yang benar-benar relevan untuk objektif bisnis Anda.
            </p>
          </div>

          {/* Vertical Timeline Container */}
          <div className="max-w-4xl mx-auto relative">
            
            {/* Garis Vertikal Latar Belakang */}
            <div className="absolute left-[27px] md:left-[39px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-[#C92A2A] via-[#C92A2A]/40 to-transparent"></div>

            <div className="space-y-12 md:space-y-16">
              
              {/* Step 1: Discovery & Alignment */}
              <div className="relative pl-16 md:pl-24 group">
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-6 top-1 w-10 h-10 bg-white border-4 border-[#C92A2A] rounded-full flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-[#C92A2A] transition-all duration-300 z-10">
                   <span className="text-[#00263C] group-hover:text-white font-bold text-sm transition-colors">1</span>
                </div>
                
                {/* Content Card */}
                <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] group-hover:shadow-[0_10px_40px_-10px_rgba(0,38,60,0.1)] transition-all duration-300 relative">
                  {/* Panah penunjuk ke garis timeline (opsional estetika) */}
                  <div className="absolute top-6 -left-3 w-3 h-3 bg-white border-b border-l border-gray-100 rotate-45 hidden md:block"></div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-[#00263C] mb-3">
                    Discovery & Alignment
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                    Sesi diskusi mendalam bersama pemangku kepentingan untuk menentukan indikator kompetensi, kriteria sukses, dan matriks keberhasilan yang selaras dengan budaya serta tujuan strategis perusahaan Anda.
                  </p>
                </div>
              </div>

              {/* Step 2: Deployment */}
              <div className="relative pl-16 md:pl-24 group">
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-6 top-1 w-10 h-10 bg-white border-4 border-[#C92A2A] rounded-full flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-[#C92A2A] transition-all duration-300 z-10">
                   <span className="text-[#00263C] group-hover:text-white font-bold text-sm transition-colors">2</span>
                </div>
                
                {/* Content Card */}
                <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] group-hover:shadow-[0_10px_40px_-10px_rgba(0,38,60,0.1)] transition-all duration-300 relative">
                  <div className="absolute top-6 -left-3 w-3 h-3 bg-white border-b border-l border-gray-100 rotate-45 hidden md:block"></div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-[#00263C] mb-3">
                    Secure Deployment
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                    Distribusi alat tes dan kuesioner kepada seluruh partisipan melalui platform digital yang aman, minim kendala teknis, dan dilengkapi dengan panduan pengerjaan yang jelas.
                  </p>
                </div>
              </div>

              {/* Step 3: Data Processing */}
              <div className="relative pl-16 md:pl-24 group">
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-6 top-1 w-10 h-10 bg-white border-4 border-[#C92A2A] rounded-full flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-[#C92A2A] transition-all duration-300 z-10">
                   <span className="text-[#00263C] group-hover:text-white font-bold text-sm transition-colors">3</span>
                </div>
                
                {/* Content Card */}
                <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] group-hover:shadow-[0_10px_40px_-10px_rgba(0,38,60,0.1)] transition-all duration-300 relative">
                  <div className="absolute top-6 -left-3 w-3 h-3 bg-white border-b border-l border-gray-100 rotate-45 hidden md:block"></div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-[#00263C] mb-3">
                    Multi-Dimensional Analysis
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                    Pemrosesan data mentah menggunakan sistem analitik terkalibrasi untuk meminimalisir bias (menjaga objektivitas 100%) dan memetakan pola kompetensi antar individu maupun tim.
                  </p>
                </div>
              </div>

              {/* Step 4: Executive Reporting */}
              <div className="relative pl-16 md:pl-24 group">
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-6 top-1 w-10 h-10 bg-white border-4 border-[#C92A2A] rounded-full flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-[#C92A2A] transition-all duration-300 z-10">
                   <span className="text-[#00263C] group-hover:text-white font-bold text-sm transition-colors">4</span>
                </div>
                
                {/* Content Card */}
                <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] group-hover:shadow-[0_10px_40px_-10px_rgba(0,38,60,0.1)] transition-all duration-300 relative">
                  <div className="absolute top-6 -left-3 w-3 h-3 bg-white border-b border-l border-gray-100 rotate-45 hidden md:block"></div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-[#00263C] mb-3">
                    Executive Reporting & Debriefing
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                    Penyerahan laporan visual yang komprehensif (dilengkapi grafik dan ringkasan eksekutif), dilanjutkan dengan sesi presentasi bersama konsultan ahli kami untuk mendiskusikan *actionable insights*.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =========================================
          SECTION 5: THE OUTPUT (DATA VISUALIZATION) 
          ========================================= */}
      <section className="bg-gray-50 py-24 px-6 md:px-12 relative overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* KOLOM KIRI: Visual/Mockup Laporan */}
            <div className="relative w-full order-2 lg:order-1">
              {/* Latar Belakang Dekoratif Laporan */}
              <div className="absolute top-4 -left-4 w-full h-full bg-[#00263C] rounded-2xl transform -rotate-2 -z-10 opacity-10"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#C92A2A]/10 rounded-full blur-3xl -z-10"></div>

              {/* Main Image (Dashboard / Report Mockup) */}
              <div className="relative bg-white rounded-2xl p-2 border border-gray-200 shadow-[0_20px_50px_-12px_rgba(0,38,60,0.15)] group">
                <div className="overflow-hidden rounded-xl relative aspect-[4/3]">
                  <img 
                    src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1000&auto=format&fit=crop" 
                    alt="Executive Assessment Report" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                  {/* Overlay Gradien Halus */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#00263C]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>

            {/* KOLOM KANAN: Teks Penjelasan Output */}
            <div className="flex flex-col justify-center order-1 lg:order-2">
              <span className="text-[#C92A2A] text-xs font-bold uppercase tracking-widest mb-3 block">
                Hasil Akhir (Output)
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#00263C] mb-6 leading-tight">
                Laporan Komprehensif yang Menggerakkan Keputusan.
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-10">
                Kami tidak memberikan Anda tumpukan data mentah yang membingungkan. Setiap proses asesmen diakhiri dengan pelaporan visual yang tajam, terstruktur, dan siap ditindaklanjuti oleh jajaran eksekutif.
              </p>

              {/* Daftar Fitur Laporan */}
              <div className="space-y-8">
                
                {/* Fitur 1 */}
                <div className="flex gap-5 items-start group">
                  <div className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center shrink-0 group-hover:border-[#C92A2A] group-hover:shadow-[#C92A2A]/20 transition-all duration-300">
                    <svg className="w-5 h-5 text-[#00263C] group-hover:text-[#C92A2A] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#00263C] mb-2">Actionable Insights</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Laporan dilengkapi dengan rekomendasi tindakan nyata (action plan), bukan sekadar deretan skor numerik tanpa konteks.
                    </p>
                  </div>
                </div>

                {/* Fitur 2 */}
                <div className="flex gap-5 items-start group">
                  <div className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center shrink-0 group-hover:border-[#C92A2A] group-hover:shadow-[#C92A2A]/20 transition-all duration-300">
                    <svg className="w-5 h-5 text-[#00263C] group-hover:text-[#C92A2A] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#00263C] mb-2">Clear Visualizations</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Penyajian data melalui grafik radar, peta panas (<span className="italic">heat map</span>), dan perbandingan normatif yang sangat mudah dibaca secara sekilas.
                    </p>
                  </div>
                </div>

                {/* Fitur 3 */}
                <div className="flex gap-5 items-start group">
                  <div className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center shrink-0 group-hover:border-[#C92A2A] group-hover:shadow-[#C92A2A]/20 transition-all duration-300">
                    <svg className="w-5 h-5 text-[#00263C] group-hover:text-[#C92A2A] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#00263C] mb-2">Confidential & Secure</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Distribusi hasil laporan dijamin kerahasiaannya dengan enkripsi tingkat tinggi untuk mematuhi regulasi privasi data perusahaan.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 6: FINAL CONVERSION (CTA) 
          ========================================= */}
      <section className="relative py-24 px-6 md:px-12 bg-[#00263C] overflow-hidden">
        
        {/* Elemen Dekoratif Latar Belakang */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Pola Grid Halus */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
          {/* Cahaya Aksentuasi Merah */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C92A2A] rounded-full blur-[100px] opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
          {/* Cahaya Aksentuasi Putih/Biru Terang */}
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00426b] rounded-full blur-[100px] opacity-40 transform -translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Siap Membangun Tim Berbasis Data?
          </h2>
          
          <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Diskusikan kebutuhan spesifik organisasi Anda bersama konsultan ahli kami, atau pelajari lebih dalam melalui sampel laporan nyata yang kami hasilkan.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
            
            {/* Tombol Aksi 1: Hubungi Kami (Primary Red) */}
            <button className="w-full sm:w-auto px-8 py-4 bg-[#C92A2A] hover:bg-[#a82222] text-white font-bold rounded-lg transition-all duration-300 shadow-[0_4px_20px_rgba(201,42,42,0.4)] hover:shadow-[0_6px_25px_rgba(201,42,42,0.6)] hover:-translate-y-1 flex justify-center items-center gap-2">
              Hubungi Tim Ahli Kami
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
            
            {/* Tombol Aksi 2: Unduh Sampel (Outline White) */}
            <button className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white/60 text-white hover:bg-white hover:border-white hover:text-[#00263C] font-bold rounded-lg transition-all duration-300 flex justify-center items-center gap-2">
              Unduh Sampel Laporan (.PDF)
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
            </button>
            
          </div>
          
          <p className="text-gray-400 text-xs mt-8 font-medium">
            *Kerahasiaan data Anda adalah prioritas utama kami.
          </p>

        </div>
      </section>

    </main>
  );
}