'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&h=600&crop=faces&q=80',
    quote: 'FHRI helped our HR team transform from an operational function to a strategic partner. The impact on our business has been immediate and profound.',
    name: 'Sarah Rahman',
    role: 'HR Director, TechVision Inc',
  },
  {
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&h=600&crop=faces&q=80',
    quote: 'The programs from FHRI are incredibly practical. Our team was able to implement new recruitment strategies within just a few weeks.',
    name: 'Budi Santoso',
    role: 'Talent Acquisition Lead, Kencana Group',
  },
  {
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&h=600&crop=faces&q=80',
    quote: 'The audit and compliance materials provided are extremely comprehensive, giving our company peace of mind and confidence in our decision-making.',
    name: 'Anita Wijaya',
    role: 'HR Manager, Global Logistics',
  }
];

export default function Testimonial() {
  const [active, setActive] = useState(0);

  // Fungsi untuk maju & mundur
  const nextTestimonial = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Efek Auto-Slide (Ganti setiap 6 detik)
  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextTestimonial();
    }, 6000);

    // Membersihkan interval jika komponen di-unmount atau user mengklik manual
    return () => clearInterval(slideInterval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const current = testimonials[active];

  return (
    <section className="bg-[#F8FAFC] py-20 md:py-28 px-6 md:px-12 overflow-hidden">
      
      {/* Inject Custom CSS Animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-slide {
          animation: fadeSlideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}} />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
        
        {/* Kolom Kiri: Gambar (Diberi key agar animasi ter-trigger ulang saat state berubah) */}
        <div key={`img-${active}`} className="w-full md:w-1/2 aspect-[4/3] relative rounded-[2rem] overflow-hidden bg-gray-100 shadow-[0_20px_50px_-15px_rgba(0,38,60,0.2)] group animate-fade-slide">
          <Image
            src={current.image}
            alt={current.name}
            fill
            unoptimized
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
          {/* Aksen Gradien Lembut di Bawah Gambar */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#00263C]/30 to-transparent pointer-events-none"></div>
        </div>

        {/* Kolom Kanan: Teks Testimonial */}
        <div className="w-full md:w-1/2 relative flex flex-col justify-center">
          
          {/* Ikon Kutip Raksasa di Latar Belakang */}
          <svg className="absolute -top-10 -left-6 w-24 h-24 text-brand-red opacity-10" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1.5.5 1.5 1.5L5 15c0 2-1 4-2 6zm14 0c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1.5.5 1.5 1.5L19 15c0 2-1 4-2 6z"/>
          </svg>

          <svg className="w-10 h-10 text-brand-red mb-6 relative z-10" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1.5.5 1.5 1.5L5 15c0 2-1 4-2 6zm14 0c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1.5.5 1.5 1.5L19 15c0 2-1 4-2 6z"/>
          </svg>
          
          {/* Konten Teks yang Teranimasi */}
          <div key={`text-${active}`} className="animate-fade-slide">
            <div className="min-h-[140px] relative z-10">
              {/* PENAMBAHAN 'font-sans' AGAR MENGGUNAKAN POPPINS */}
              <p className="text-2xl md:text-3xl font-sans font-normal leading-relaxed text-brand-navy">
                {current.quote}
              </p>
            </div>
            
            <div className="mt-6 md:mt-8 border-l-4 border-brand-red pl-4">
              {/* PENAMBAHAN 'font-sans' */}
              <h3 className="text-xl font-sans font-bold text-brand-navy">{current.name}</h3>
              {/* PENAMBAHAN 'font-sans' */}
              <p className="text-sm font-sans text-slate-500 font-medium mt-1">{current.role}</p>
            </div>
          </div>

          {/* Tombol Navigasi dengan Brand Colors */}
          <div className="flex gap-3 mt-10 md:mt-12">
            <button 
              onClick={prevTestimonial} 
              aria-label="Previous Testimonial"
              className="w-12 h-12 rounded-full border-2 border-brand-red text-brand-red flex items-center justify-center hover:bg-brand-red hover:text-white transition-all duration-300 shadow-sm hover:shadow-[0_5px_15px_rgba(220,38,38,0.3)]"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path></svg>
            </button>
            <button 
              onClick={nextTestimonial} 
              aria-label="Next Testimonial"
              className="w-12 h-12 rounded-full border-2 border-brand-red text-brand-red flex items-center justify-center hover:bg-brand-red hover:text-white transition-all duration-300 shadow-sm hover:shadow-[0_5px_15px_rgba(220,38,38,0.3)]"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path></svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}