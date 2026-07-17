import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-[#00263C] pt-24 pb-36 md:pb-44 px-6 md:px-12 overflow-hidden">
      <div className="absolute -left-48 -top-48 w-[600px] h-[600px] rounded-full bg-[#DC2626]/10 blur-[130px] pointer-events-none" />
      <div className="absolute -right-48 -bottom-48 w-[600px] h-[600px] rounded-full bg-white/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">

        {/* Sisi Kiri: Teks */}
        <div className="md:w-1/2">
          <span className="text-xs md:text-sm font-black uppercase tracking-[0.3em] text-[#DC2626]">
            First HR Indonesia
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-black text-white leading-[1.05] tracking-tight text-balance">
            Strategic Partner for Outstanding Talent
          </h1>
          <p className="mt-6 text-base md:text-lg text-slate-300 leading-relaxed max-w-md font-medium">
            FHRI helps companies and HR professionals build capacity, accelerate
            careers, and transform HR practices through practical learning and innovation.
          </p>
          <button className="group mt-10 inline-flex items-center gap-4 bg-[#DC2626] text-white pl-7 pr-3 py-3 rounded-full font-bold text-sm transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white hover:text-[#00263C] active:scale-[0.97] shadow-[0_20px_48px_-12px_rgba(220,38,38,0.35)]">
            DISCOVER MORE
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white/15 group-hover:bg-[#00263C]/10 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
        </div>

        {/* Sisi Kanan: Gambar */}
        <div className="md:w-1/2 w-full relative">
          <div className="relative">
            <div className="bg-white/5 p-2.5 rounded-[2.5rem] border border-white/10">
              <div className="relative rounded-[2rem] overflow-hidden">
                <Image
                  src="/imgkonten1.png"
                  alt="Tim HR sedang berkolaborasi"
                  width={600}
                  height={420}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Decorative floating icon badges */}
            <div className="absolute -top-4 left-6 w-10 h-10 rounded-full bg-[#00263C] border border-white/10 shadow-[0_12px_30px_rgba(0,38,60,0.35)] flex items-center justify-center">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none">
                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" strokeWidth="2" />
                <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>
            <div className="absolute -top-4 right-6 w-10 h-10 rounded-full bg-[#DC2626] shadow-[0_12px_30px_rgba(220,38,38,0.35)] flex items-center justify-center">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none">
                <path d="M4 12v7a1 1 0 001 1h14a1 1 0 001-1v-7M16 6l-4-4-4 4M12 2v13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Stat card: Total employees */}
            <div className="absolute -bottom-6 -left-4 bg-white rounded-2xl border border-slate-100 shadow-[0_20px_50px_-15px_rgba(0,38,60,0.25)] px-5 py-4 flex items-center gap-3">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Total employees</p>
                <p className="text-lg font-black text-[#00263C] mt-0.5">2,409</p>
              </div>
              <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">+33%</span>
            </div>

            {/* Stat card: Active Learners */}
            <div className="absolute -bottom-8 right-2 bg-white rounded-2xl border border-slate-100 shadow-[0_20px_50px_-15px_rgba(0,38,60,0.25)] px-5 py-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#00263C]/5 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-[#00263C]" viewBox="0 0 36 24" fill="none">
                  <path d="M2 20 L10 12 L16 16 L24 6 L34 14" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Active Learners</p>
                <p className="text-lg font-black text-[#00263C] mt-0.5">6,208</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Curve divider into the next section (unchanged) */}
      <div className="absolute bottom-0 left-0 w-full leading-none pointer-events-none">
        <svg viewBox="0 0 1440 120" className="w-full h-[70px] md:h-[110px]" preserveAspectRatio="none">
          <path fill="#FFFFFF" d="M0,120 C400,0 1040,0 1440,120 L1440,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
}
