import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-[#0B2A4A] pt-16 pb-32 md:pb-40 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">

        {/* Sisi Kiri: Teks */}
        <div className="md:w-1/2">
          <p className="text-red-500 font-semibold tracking-wide mb-4">First HR Indonesia</p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Strategic Partner for Outstanding Talent
          </h1>
          <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-md">
            FHRI helps companies and HR professionals build capacity, accelerate
            careers, and transform HR practices through practical learning and innovation.
          </p>
          <button className="mt-8 bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition duration-300">
            DISCOVER MORE
          </button>
        </div>

        {/* Sisi Kanan: Gambar */}
        <div className="md:w-1/2 w-full relative">
          <div className="relative">
            <Image
              src="/imgkonten1.png"
              alt="Tim HR sedang berkolaborasi"
              width={600}
              height={420}
              className="rounded-2xl shadow-xl w-full h-auto object-cover"
            />

            {/* Decorative floating icon badges */}
            <div className="absolute -top-4 left-6 w-9 h-9 rounded-full bg-blue-500 shadow-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none">
                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" strokeWidth="2" />
                <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>
            <div className="absolute -top-4 right-6 w-9 h-9 rounded-full bg-red-500 shadow-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none">
                <path d="M4 12v7a1 1 0 001 1h14a1 1 0 001-1v-7M16 6l-4-4-4 4M12 2v13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Stat card: Total employees */}
            <div className="absolute -bottom-6 -left-4 bg-white rounded-xl shadow-xl px-4 py-3 flex items-center gap-3">
              <div>
                <p className="text-[11px] text-gray-400">Total employees</p>
                <p className="text-lg font-bold text-blue-950">2,409</p>
              </div>
              <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-md">+33%</span>
            </div>

            {/* Stat card: Active Learners */}
            <div className="absolute -bottom-8 right-2 bg-white rounded-xl shadow-xl px-4 py-3 flex items-center gap-3">
              <svg className="w-8 h-8 text-blue-500" viewBox="0 0 36 24" fill="none">
                <path d="M2 20 L10 12 L16 16 L24 6 L34 14" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div>
                <p className="text-[11px] text-gray-400">Active Learners</p>
                <p className="text-lg font-bold text-blue-950">6,208</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Curve divider into the next section */}
      <div className="absolute bottom-0 left-0 w-full leading-none pointer-events-none">
        <svg viewBox="0 0 1440 120" className="w-full h-[70px] md:h-[110px]" preserveAspectRatio="none">
          <path fill="#FFFFFF" d="M0,120 C400,0 1040,0 1440,120 L1440,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
}
