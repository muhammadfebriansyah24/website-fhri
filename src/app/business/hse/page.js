'use client'; 

import React from 'react';

export default function HsePage() {
  return (
    <main className="min-h-screen font-sans bg-[#FFFFFF]">
      
      {/* =========================================
          SECTION 1: HERO BANNER (HSE) 
          Desain: Full-Bleed Image dengan Navy Gradient (Potongan Rata)
          ========================================= */}
      <section className="relative w-full min-h-[90vh] flex items-center pt-20 pb-24 overflow-hidden">
        
        {/* Latar Belakang Gambar & Gradien */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop" 
            alt="Lingkungan kerja industri yang aman dan tertib di pagi hari" 
            className="w-full h-full object-cover"
          />
          {/* Overlay Gradient: Navy pekat di kiri agar teks terbaca, transparan di kanan */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#00263C] via-[#00263C]/90 to-transparent"></div>
          {/* Overlay warna gelap tambahan untuk layar mobile agar teks tetap kontras */}
          <div className="absolute inset-0 bg-[#00263C]/50 md:hidden"></div>
        </div>

        {/* Konten Utama (Berada di atas latar belakang) */}
        <div className="container mx-auto max-w-7xl px-6 md:px-12 relative z-10">
          <div className="max-w-3xl">
            
            {/* Badge Glassmorphism */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 shadow-lg">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C92A2A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#C92A2A]"></span>
              </span>
              <span className="text-white text-xs font-bold uppercase tracking-widest">
                Health, Safety & Environment
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6">
              Lindungi Pekerja, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Patuhi Regulasi,</span> <br/>
              Lestarikan Lingkungan.
            </h1>

            {/* Sub-headline */}
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl font-light">
              Solusi HSE komprehensif dari investigasi insiden hingga kepatuhan AMDAL. Kami memastikan operasional bisnis Anda berjalan dengan aman, tertib, dan berkelanjutan.
            </p>

            {/* Indikator/Highlight Singkat (Jarak diperbesar dengan mt-24 dan pt-10) */}
            <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6 border-t border-white/20 pt-10">
              <div>
                <h4 className="text-3xl font-black text-white mb-1">ISO 45001</h4>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Standar K3 Global</p>
              </div>
              <div>
                <h4 className="text-3xl font-black text-white mb-1">PROPER</h4>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Kepatuhan KLHK</p>
              </div>
              <div className="hidden md:block">
                <h4 className="text-3xl font-black text-white mb-1">Zero</h4>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Incident Target</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 2: CORE HSE PILLARS 
          ========================================= */}
      <section className="bg-[#FFFFFF] py-24 px-6 md:px-12 relative z-10">
        <div className="container mx-auto max-w-7xl">
          
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#C92A2A] text-xs font-bold uppercase tracking-widest mb-3 block">
              Layanan Inti
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#00263C] mb-6">
              Tiga Pilar Utama HSE
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Pendekatan menyeluruh kami memastikan setiap aspek keselamatan kerja dan keberlanjutan lingkungan di perusahaan Anda terkelola dengan standar tertinggi.
            </p>
          </div>

          {/* Grid 3 Kolom */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Pillar 1: Risk Assessment & Incident */}
            <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl hover:shadow-[#00263C]/10 transition-all duration-300 group flex flex-col h-full">
              <div className="w-16 h-16 bg-[#00263C]/5 group-hover:bg-[#00263C] rounded-2xl flex items-center justify-center mb-8 transition-colors duration-300 shrink-0">
                {/* Ikon Perisai (Shield) */}
                <svg className="w-8 h-8 text-[#00263C] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#00263C] mb-4 group-hover:text-[#C92A2A] transition-colors duration-300">
                Risk Assessment & Investigation
              </h3>
              <p className="text-gray-500 leading-relaxed flex-grow">
                Identifikasi bahaya kerja secara proaktif, investigasi insiden mendalam, dan penentuan tindakan korektif yang tepat sasaran untuk mencegah kecelakaan berulang.
              </p>
            </div>

            {/* Pillar 2: Policy & Management Systems */}
            <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl hover:shadow-[#00263C]/10 transition-all duration-300 group flex flex-col h-full">
              <div className="w-16 h-16 bg-[#00263C]/5 group-hover:bg-[#00263C] rounded-2xl flex items-center justify-center mb-8 transition-colors duration-300 shrink-0">
                {/* Ikon Dokumen Standar (Clipboard Check) */}
                <svg className="w-8 h-8 text-[#00263C] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#00263C] mb-4 group-hover:text-[#C92A2A] transition-colors duration-300">
                Policy & Management Systems
              </h3>
              <p className="text-gray-500 leading-relaxed flex-grow">
                Pembuatan prosedur standar keselamatan (SOP) dan pendampingan implementasi sistem manajemen berstandar internasional seperti ISO 45001.
              </p>
            </div>

            {/* Pillar 3: Environmental Compliance */}
            <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl hover:shadow-[#00263C]/10 transition-all duration-300 group flex flex-col h-full">
              <div className="w-16 h-16 bg-[#00263C]/5 group-hover:bg-[#00263C] rounded-2xl flex items-center justify-center mb-8 transition-colors duration-300 shrink-0">
                {/* Ikon Lingkungan (Earth/Globe) */}
                <svg className="w-8 h-8 text-[#00263C] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#00263C] mb-4 group-hover:text-[#C92A2A] transition-colors duration-300">
                Environmental Compliance
              </h3>
              <p className="text-gray-500 leading-relaxed flex-grow">
                Dukungan penuh dalam pengurusan izin lingkungan (UKL-UPL, AMDAL) serta persiapan menyeluruh untuk menghadapi audit PROPER dari Kementerian Lingkungan Hidup.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 3: CLEAN & SAFE ENVIRONMENT INITIATIVE 
          ========================================= */}
      <section className="bg-gray-50 py-24 px-6 md:px-12 relative overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* KOLOM KIRI: Teks & Nilai Tambah */}
            <div className="lg:w-1/2 relative z-10">
              <span className="text-[#C92A2A] text-xs font-bold uppercase tracking-widest mb-3 block">
                Inisiatif Ekstra Kami
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#00263C] mb-6 leading-tight">
                Lebih dari Sekadar Kepatuhan Dokumen.
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-10">
                Kesehatan dan keselamatan kerja tidak hanya diukur dari tumpukan sertifikat di atas meja. Kami percaya bahwa keamanan operasional yang sejati dimulai dari membangun budaya kerja yang bersih, tertib, dan teratur di lapangan.
              </p>
              
              <div className="space-y-8">
                {/* Point 1: Budaya 5R */}
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center shrink-0 group-hover:border-[#00263C] transition-colors duration-300">
                    <svg className="w-5 h-5 text-[#00263C]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#00263C] mb-2">Penerapan Budaya 5R (5S)</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Implementasi sistematis untuk menjaga area kerja tetap Ringkas, Rapi, Resik, Rawat, dan Rajin. Lingkungan pemukiman atau area kerja yang normal dan tertata adalah garis pertahanan pertama K3.
                    </p>
                  </div>
                </div>
                
                {/* Point 2: Pencegahan Proaktif */}
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center shrink-0 group-hover:border-[#C92A2A] transition-colors duration-300">
                    <svg className="w-5 h-5 text-[#00263C] group-hover:text-[#C92A2A] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#00263C] mb-2">Pencegahan Bahaya Proaktif</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Lingkungan yang terawat secara signifikan meminimalisir anomali. Kami menyingkirkan potensi bahaya sejak dini untuk mencegah insiden kritis seperti korsleting, percikan api, atau bahaya kebakaran.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* KOLOM KANAN: Gambar Lingkungan Aman & Bersih */}
            <div className="lg:w-1/2 relative w-full mt-10 lg:mt-0">
              {/* Dekorasi Latar Belakang Abstrak */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#C92A2A]/5 rounded-full blur-2xl z-0"></div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#00263C]/5 rounded-full blur-2xl z-0"></div>
              
              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,38,60,0.15)] group">
                <img 
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop" 
                  alt="Lingkungan kerja industri yang rapi, bersih, dan bebas bahaya kebakaran" 
                  className="w-full h-[400px] md:h-[550px] object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-in-out"
                />
                
                {/* Overlay Gradien Halus */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#00263C]/60 via-transparent to-transparent opacity-80"></div>

                {/* Floating Status Badge di atas gambar */}
                <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 bg-white/95 backdrop-blur-sm px-6 py-4 rounded-xl shadow-xl border border-white flex items-center gap-4">
                  <div className="relative flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#00263C] font-extrabold text-sm tracking-wide">Status: Aman & Terkendali</span>
                    <span className="text-gray-500 text-[10px] uppercase tracking-wider font-bold">Bebas Potensi Insiden</span>
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
      <section className="bg-[#FFFFFF] py-24 px-6 md:px-12 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#C92A2A] text-xs font-bold uppercase tracking-widest mb-3 block">
              Alur Sertifikasi
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#00263C] mb-6">
              Peta Jalan Menuju Kepatuhan Total
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Kami mendampingi perusahaan Anda langkah demi langkah. Dari titik nol hingga Anda memegang sertifikasi kelayakan dan kepatuhan lingkungan secara resmi.
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            
            {/* Garis Tengah (Hanya terlihat di layar besar) */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-100 -translate-x-1/2"></div>
            {/* Garis Kiri (Untuk layar mobile) */}
            <div className="lg:hidden absolute left-[27px] top-0 bottom-0 w-[2px] bg-gray-100"></div>

            <div className="space-y-16">
              
              {/* Step 1 */}
              <div className="relative flex flex-col lg:flex-row items-center justify-between group">
                {/* Konten Kiri (Kosong di desktop, terisi di mobile) */}
                <div className="hidden lg:block lg:w-[45%] text-right pr-12">
                  <h3 className="text-2xl font-bold text-[#00263C] mb-3">Audit Awal & Gap Analysis</h3>
                  <p className="text-gray-500 leading-relaxed">
                    Evaluasi komprehensif terhadap kondisi fasilitas dan dokumen saat ini. Kami membandingkannya dengan standar regulasi (ISO/PROPER) untuk memetakan celah kepatuhan yang harus segera ditutup.
                  </p>
                </div>
                
                {/* Timeline Dot (Tengah di desktop, Kiri di mobile) */}
                <div className="absolute left-0 lg:left-1/2 -translate-x-0 lg:-translate-x-1/2 w-14 h-14 bg-white border-4 border-[#00263C] group-hover:border-[#C92A2A] rounded-full flex items-center justify-center shadow-lg transition-colors duration-300 z-10">
                  <span className="text-[#00263C] group-hover:text-[#C92A2A] font-black text-xl transition-colors duration-300">1</span>
                </div>
                
                {/* Konten Kanan */}
                <div className="pl-20 lg:pl-0 lg:w-[45%] lg:text-left lg:hidden">
                  <h3 className="text-xl md:text-2xl font-bold text-[#00263C] mb-3">Audit Awal & Gap Analysis</h3>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                    Evaluasi komprehensif terhadap kondisi fasilitas dan dokumen saat ini. Kami membandingkannya dengan standar regulasi (ISO/PROPER) untuk memetakan celah kepatuhan yang harus segera ditutup.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col lg:flex-row-reverse items-center justify-between group">
                <div className="hidden lg:block lg:w-[45%] text-left pl-12">
                  <h3 className="text-2xl font-bold text-[#00263C] mb-3">Penyusunan Kebijakan</h3>
                  <p className="text-gray-500 leading-relaxed">
                    Pembuatan Standar Operasional Prosedur (SOP), manual K3, dan penyiapan dokumen lingkungan (UKL-UPL/AMDAL) yang disesuaikan secara spesifik dengan karakteristik operasional bisnis Anda.
                  </p>
                </div>
                
                <div className="absolute left-0 lg:left-1/2 -translate-x-0 lg:-translate-x-1/2 w-14 h-14 bg-white border-4 border-[#00263C] group-hover:border-[#C92A2A] rounded-full flex items-center justify-center shadow-lg transition-colors duration-300 z-10">
                  <span className="text-[#00263C] group-hover:text-[#C92A2A] font-black text-xl transition-colors duration-300">2</span>
                </div>
                
                <div className="pl-20 lg:pl-0 lg:w-[45%] lg:text-right lg:hidden">
                  <h3 className="text-xl md:text-2xl font-bold text-[#00263C] mb-3">Penyusunan Kebijakan</h3>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                    Pembuatan Standar Operasional Prosedur (SOP), manual K3, dan penyiapan dokumen lingkungan (UKL-UPL/AMDAL) yang disesuaikan secara spesifik dengan karakteristik operasional bisnis Anda.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col lg:flex-row items-center justify-between group">
                <div className="hidden lg:block lg:w-[45%] text-right pr-12">
                  <h3 className="text-2xl font-bold text-[#00263C] mb-3">Implementasi & Pelatihan</h3>
                  <p className="text-gray-500 leading-relaxed">
                    Pendampingan turun ke lapangan untuk penerapan budaya tertib, pelatihan karyawan terkait prosedur keselamatan, dan eksekusi mitigasi risiko secara nyata.
                  </p>
                </div>
                
                <div className="absolute left-0 lg:left-1/2 -translate-x-0 lg:-translate-x-1/2 w-14 h-14 bg-white border-4 border-[#00263C] group-hover:border-[#C92A2A] rounded-full flex items-center justify-center shadow-lg transition-colors duration-300 z-10">
                  <span className="text-[#00263C] group-hover:text-[#C92A2A] font-black text-xl transition-colors duration-300">3</span>
                </div>
                
                <div className="pl-20 lg:pl-0 lg:w-[45%] lg:text-left lg:hidden">
                  <h3 className="text-xl md:text-2xl font-bold text-[#00263C] mb-3">Implementasi & Pelatihan</h3>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                    Pendampingan turun ke lapangan untuk penerapan budaya tertib, pelatihan karyawan terkait prosedur keselamatan, dan eksekusi mitigasi risiko secara nyata.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative flex flex-col lg:flex-row-reverse items-center justify-between group">
                <div className="hidden lg:block lg:w-[45%] text-left pl-12">
                  <h3 className="text-2xl font-bold text-[#00263C] mb-3">Sertifikasi & Audit Resmi</h3>
                  <p className="text-gray-500 leading-relaxed">
                    Pelaksanaan simulasi audit internal (*Mock Audit*), perbaikan akhir, hingga pendampingan penuh saat badan sertifikasi atau kementerian melakukan audit kelayakan resmi.
                  </p>
                </div>
                
                <div className="absolute left-0 lg:left-1/2 -translate-x-0 lg:-translate-x-1/2 w-14 h-14 bg-[#00263C] border-4 border-[#00263C] group-hover:bg-[#C92A2A] group-hover:border-[#C92A2A] rounded-full flex items-center justify-center shadow-lg transition-colors duration-300 z-10">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                
                <div className="pl-20 lg:pl-0 lg:w-[45%] lg:text-right lg:hidden">
                  <h3 className="text-xl md:text-2xl font-bold text-[#00263C] mb-3">Sertifikasi & Audit Resmi</h3>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                    Pelaksanaan simulasi audit internal (*Mock Audit*), perbaikan akhir, hingga pendampingan penuh saat badan sertifikasi atau kementerian melakukan audit kelayakan resmi.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =========================================
          SECTION 5: TRUST & CREDENTIALS (REVISI WARNA)
          ========================================= */}
      <section className="bg-white py-20 px-6 md:px-12 relative overflow-hidden">
        
        <div className="container mx-auto max-w-7xl text-center relative z-10">
          
          <span className="text-[#C92A2A] text-xs font-bold uppercase tracking-widest mb-3 block">
            Standar Kepatuhan
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#00263C] mb-12 md:mb-16">
            Sistem Kami Mengacu pada Standar Nasional & Internasional
          </h2>

          {/* Grid/Flexbox untuk Logo Sertifikasi dengan background Navy/5 */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            
            {/* Card Kredensial 1 */}
            <div className="bg-[#00263C]/3 p-6 rounded-2xl flex items-center gap-4 group hover:bg-[#00263C]/6 transition-colors duration-300">
              <div className="w-12 h-12 border-2 border-[#00263C] rounded-full flex items-center justify-center">
                <span className="text-[#00263C] font-black text-xs tracking-tighter">ISO</span>
              </div>
              <div className="text-left">
                <p className="text-[#00263C] font-black text-lg leading-none tracking-wider mb-1">45001</p>
                <p className="text-[#00263C]/60 text-[10px] font-bold uppercase tracking-widest">Safety Standard</p>
              </div>
            </div>

            {/* Card Kredensial 2 */}
            <div className="bg-[#00263C]/3 p-6 rounded-2xl flex items-center gap-4 group hover:bg-[#00263C]/6 transition-colors duration-300">
              <div className="w-12 h-12 border-2 border-[#00263C] rounded-full flex items-center justify-center">
                <span className="text-[#00263C] font-black text-xs tracking-tighter">ISO</span>
              </div>
              <div className="text-left">
                <p className="text-[#00263C] font-black text-lg leading-none tracking-wider mb-1">14001</p>
                <p className="text-[#00263C]/60 text-[10px] font-bold uppercase tracking-widest">Environment</p>
              </div>
            </div>

            {/* Card Kredensial 3 */}
            <div className="bg-[#00263C]/3 p-6 rounded-2xl flex items-center gap-4 group hover:bg-[#00263C]/6 transition-colors duration-300">
              <div className="w-12 h-12 bg-[#00263C] rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <div className="text-left">
                <p className="text-[#00263C] font-black text-lg leading-none tracking-wider mb-1">SMK3</p>
                <p className="text-[#00263C]/60 text-[10px] font-bold uppercase tracking-widest">Kemenaker RI</p>
              </div>
            </div>

            {/* Card Kredensial 4 */}
            <div className="bg-[#00263C]/3 p-6 rounded-2xl flex items-center gap-4 group hover:bg-[#00263C]/6 transition-colors duration-300">
              <div className="w-12 h-12 bg-[#00263C] rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div className="text-left">
                <p className="text-[#00263C] font-black text-lg leading-none tracking-wider mb-1">PROPER</p>
                <p className="text-[#00263C]/60 text-[10px] font-bold uppercase tracking-widest">KLHK RI</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 6: FINAL CTA (HSE THEME + DESAIN REFERENSI)
          ========================================= */}
      <section className="relative bg-[#00263C] py-32 px-6 md:px-12 overflow-hidden flex items-center justify-center min-h-[500px]">
        
        {/* Latar Belakang Lingkaran Halus (Subtle Bubbles) */}
        <div className="absolute top-10 left-[15%] w-32 h-32 bg-white/5 rounded-full blur-xl pointer-events-none"></div>
        <div className="absolute bottom-10 right-[20%] w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>
        <div className="absolute top-1/2 left-[40%] w-16 h-16 bg-white/5 rounded-full blur-md pointer-events-none"></div>

        {/* --- DEKORASI KIRI (Floating Avatar 1: Safety Inspector) --- */}
        <div className="hidden lg:block absolute left-0 top-[25%] -translate-x-4">
          <div className="relative">
            {/* Latar belakang bentuk pil */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-48 h-20 bg-white/5 rounded-full -z-10"></div>
            
            <div className="flex items-center gap-6 pl-10 pr-2">
              {/* Gelembung Chat (Warna Hijau Aman) */}
              <div className="bg-[#b7e4d8] px-4 py-2 rounded-full flex gap-1.5 shadow-lg relative -bottom-6">
                <span className="w-2.5 h-2.5 bg-gray-400 rounded-full"></span>
                <span className="w-2.5 h-2.5 bg-teal-600 rounded-full"></span>
                <span className="w-2.5 h-2.5 bg-gray-400 rounded-full"></span>
              </div>
              
              {/* Foto Profil Avatar (Auditor/HSE Expert) */}
              <img 
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=200&auto=format&fit=crop" 
                alt="HSE Inspector" 
                className="w-20 h-20 rounded-full object-cover border-4 border-[#00263C] shadow-lg relative z-10"
              />
              
              {/* Kursor Panah (Kuning Peringatan) */}
              <svg className="w-8 h-8 text-yellow-500 absolute -bottom-8 right-6 transform rotate-[-20deg]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" stroke="white" strokeWidth="1" />
              </svg>
            </div>
          </div>
        </div>

        {/* --- DEKORASI KANAN (Floating Avatar 2: Environmental Expert) --- */}
        <div className="hidden lg:block absolute right-0 bottom-[25%] translate-x-4">
          <div className="relative">
            {/* Latar belakang bentuk pil */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-48 h-20 bg-white/5 rounded-full -z-10"></div>
            
            <div className="flex items-center flex-row-reverse gap-6 pr-10 pl-2">
              {/* Gelembung Chat (Warna Biru Kredibel) */}
              <div className="bg-[#e0e7ff] px-4 py-2 rounded-full flex gap-1.5 shadow-lg relative -bottom-6">
                <span className="w-2.5 h-2.5 bg-indigo-500 rounded-full"></span>
                <span className="w-2.5 h-2.5 bg-gray-400 rounded-full"></span>
                <span className="w-2.5 h-2.5 bg-gray-400 rounded-full"></span>
              </div>
              
              {/* Foto Profil Avatar (HSE Consultant) */}
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" 
                alt="Environmental Consultant" 
                className="w-20 h-20 rounded-full object-cover border-4 border-[#00263C] shadow-lg relative z-10"
              />
              
              {/* Kursor Panah (Merah Aksen) */}
              <svg className="w-8 h-8 text-[#C92A2A] absolute top-0 left-0 transform rotate-[160deg]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" stroke="white" strokeWidth="1" />
              </svg>
            </div>
          </div>
        </div>

        {/* --- KONTEN TENGAH (Copywriting Spesifik HSE) --- */}
        <div className="relative z-10 text-center max-w-3xl mx-auto w-full">
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-snug">
            Wujudkan Lingkungan Kerja <br className="hidden md:block" /> Nol Kecelakaan <span className="italic font-light">(Zero Accident)</span>
          </h2>
          
          <p className="text-base md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Dapatkan pendampingan komprehensif untuk implementasi sistem K3, kepatuhan standar ISO 45001, dan persiapan audit lingkungan.
          </p>
          
          {/* Container Tombol */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            
            {/* Tombol Utama */}
            <button className="w-full sm:w-auto px-8 py-4 bg-[#C92A2A] hover:bg-[#a82222] text-white font-bold rounded shadow-lg transition-colors duration-300 uppercase tracking-wide text-sm">
              JADWALKAN AUDIT AWAL
            </button>
            
            {/* Tombol Sekunder */}
            <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-gray-400 hover:border-white text-gray-200 hover:text-white font-bold rounded transition-colors duration-300 uppercase tracking-wide text-sm">
              KONSULTASI TIM AHLI
            </button>
            
          </div>
          
        </div>

      </section>

    </main>
  );
}