import React from 'react';

export default function CTA() {
  return (
    <section className="relative bg-[#0B2A4A] py-24 px-6 md:px-12 overflow-hidden">
      {/* subtle decorative pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, white 1px, transparent 1px), radial-gradient(circle at 70% 70%, white 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div className="relative max-w-2xl mx-auto text-center">
        <p className="text-red-400 text-xs font-semibold tracking-[0.2em]">
          READY TO TAKE THE NEXT STEP?
        </p>
        <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-white leading-tight">
          Elevate Your Career: Grow Alongside Leading HR Professionals
        </h2>
        <p className="mt-4 text-slate-300">
          Become a part of FHRI and elevate your HR capabilities alongside the
          largest professional community in Indonesia.
        </p>
        <button className="mt-8 inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition duration-300">
          Start Your Journey
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  );
}
