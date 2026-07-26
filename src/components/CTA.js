import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function CTA() {
  return (
    <section className="relative py-24 md:py-36 px-6 md:px-12 text-center overflow-hidden">
      
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80" 
          alt="Professional HR Team Collaboration" 
          fill 
          unoptimized
          priority
          className="object-cover object-center"
        />
        {/* Overlay Gelap (Navy) agar teks putih di atasnya tetap kontras dan terbaca jelas */}
        <div className="absolute inset-0 bg-brand-navy/85"></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <p className="text-eyebrow mb-5 opacity-90 text-brand-red">
          READY TO TAKE THE NEXT STEP?
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8 leading-tight">
          Elevate Your Career : 
          <br/>Grow Alongside Leading HR Professionals
        </h2>
        <p className="text-slate-300 mb-10 max-w-xl mx-auto leading-relaxed">
          Become a part of FHRI and elevate your HR capabilities alongside the largest professional community in Indonesia.
        </p>
        
        {/* Link diubah ke /pricing sesuai alur bisnis yang baru */}
        <Link 
          href="/pricing" 
          className="inline-block bg-brand-red text-white px-10 py-4 rounded-full font-bold tracking-wide hover:bg-white hover:text-brand-navy transition-all duration-500 shadow-[0_10px_20px_rgba(220,38,38,0.2)] hover:shadow-[0_10px_20px_rgba(255,255,255,0.2)] hover:-translate-y-1"
        >
          Start Your Journey
        </Link>
      </div>
    </section>
  );
}