'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const testimonialKeys = [
  {
    key: 'item1',
    image: '/images/home-congrats-monang.png',
  },
  {
    key: 'item2',
    image: '/images/home-congrats-devi.png',
  },
  {
    key: 'item3',
    image: '/images/home-congrats-dunamis.png',
  },
  {
    key: 'item4',
    image: '/images/home-congrats-kimsooil.png',
  },
  {
    key: 'item5',
    image: '/images/home-congrats-lucia.png',
  },
  {
    key: 'item6',
    image: '/images/home-congrats-ibnu.png',
  },
  {
    key: 'item7',
    image: '/images/home-congrats-saringin.png',
  },
  {
    key: 'item8',
    image: '/images/home-congrats-reza.png',
  },
  {
    key: 'item9',
    image: '/images/home-congrats-rudy.png',
  },
  {
    key: 'item10',
    image: '/images/home-congrats-linan.png',
  },
  {
    key: 'item11',
    image: '/images/home-congrats-erik.png',
  },
  {
    key: 'item12',
    image: '/images/home-congrats-robby.png',
  },
  {
    key: 'item13',
    image: '/images/home-congrats-dina.png',
  },
  {
    key: 'item14',
    image: '/images/home-congrats-inyoman.png',
  },
  {
    key: 'item15',
    image: '/images/home-congrats-wahyono.png',
  }
];

export default function Testimonial() {
  const t = useTranslations('Testimonial');
  const [active, setActive] = useState(0);

  // Fungsi untuk maju & mundur
  const nextTestimonial = () => {
    setActive((prev) => (prev + 1) % testimonialKeys.length);
  };

  const prevTestimonial = () => {
    setActive((prev) => (prev === 0 ? testimonialKeys.length - 1 : prev - 1));
  };

  // Efek Auto-Slide (Ganti setiap 6 detik)
  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextTestimonial();
    }, 6000);

    return () => clearInterval(slideInterval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const currentItem = testimonialKeys[active];

  return (
    <section className="bg-slate-50 py-20 md:py-28 px-6 md:px-12 overflow-hidden">
      
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
        
        {/* Kolom Kiri: Gambar */}
        <div key={`img-${active}`} className="w-full md:w-2/5 aspect-square relative rounded-[2rem] overflow-hidden bg-slate-100 shadow-[0_20px_50px_-15px_rgba(0,38,60,0.2)] group animate-fade-slide md:-translate-y-10">
          <Image
            src={currentItem.image}
            alt={t(`list.${currentItem.key}.name`)}
            fill
            unoptimized={process.env.NODE_ENV === 'development'}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Kolom Kanan: Teks Testimonial */}
        <div className="w-full md:w-2/3 relative flex flex-col justify-center">
          
          {/* Ikon Quote */}
          <div 
            className="absolute -top-8 -left-2 w-16 h-16 bg-brand-red pointer-events-none select-none"
            aria-hidden="true"
            style={{
              WebkitMaskImage: `url('/icons/ic_quote.svg')`,
              WebkitMaskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center',
              maskImage: `url('/icons/ic_quote.svg')`,
              maskSize: 'contain',
              maskRepeat: 'no-repeat',
              maskPosition: 'center',
            }}
          />
          
          <div key={`text-${active}`} className="relative z-10 pt-16 md:pt-16 animate-fade-slide">
            <div className="min-h-[140px] relative z-10">
              {/* Ucapan */}
              <p className="text-brand-navy leading-relaxed text-balance">
                {t(`list.${currentItem.key}.quote`)}
              </p>
            </div>
            
            <div className="mt-6 md:mt-8 border-l-4 border-brand-red pl-4">
              {/* Nama */}
              <h4 className="text-brand-navy mb-1">{t(`list.${currentItem.key}.name`)}</h4>
              
              {/* Title */}
              <small className="text-slate-500 mt-1 block">{t(`list.${currentItem.key}.role`)}</small>
            </div>
          </div>

          {/* Tombol Navigasi */}
          <div className="flex gap-3 mt-10 md:mt-12">
            
            {/* Tombol Previous */}
            <button 
              onClick={prevTestimonial} 
              aria-label="Previous Testimonial"
              className="w-12 h-12 rounded-full border-2 border-brand-red text-brand-red flex items-center justify-center hover:bg-brand-red hover:text-white transition-all duration-300 shadow-sm hover:shadow-[0_5px_15px_rgba(220,38,38,0.3)] group"
            >
              <div 
                className="w-5 h-5 bg-current shrink-0 rotate-90"
                style={{
                  WebkitMaskImage: `url('/icons/ic_arrow-short-down.svg')`,
                  WebkitMaskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center',
                  maskImage: `url('/icons/ic_arrow-short-down.svg')`,
                  maskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'center',
                }}
              />
            </button>
            
            {/* Tombol Next */}
            <button 
              onClick={nextTestimonial} 
              aria-label="Next Testimonial"
              className="w-12 h-12 rounded-full border-2 border-brand-red text-brand-red flex items-center justify-center hover:bg-brand-red hover:text-white transition-all duration-300 shadow-sm hover:shadow-[0_5px_15px_rgba(220,38,38,0.3)] group"
            >
              <div 
                className="w-5 h-5 bg-current shrink-0 -rotate-90"
                style={{
                  WebkitMaskImage: `url('/icons/ic_arrow-short-down.svg')`,
                  WebkitMaskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center',
                  maskImage: `url('/icons/ic_arrow-short-down.svg')`,
                  maskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'center',
                }}
              />
            </button>
    
          </div>

        </div>
      </div>
    </section>
  );
}