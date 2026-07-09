'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Data untuk Section Our Values
const valuesData = [
  {
    title: 'Ownership',
    desc: 'We act with accountability, take initiative, and turn challenges into opportunities through proactive problem solving.',
    icon: (
      <svg className="w-6 h-6 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Excellence',
    desc: 'We pursue the highest standards, continuously improve, and deliver outstanding results with passion and purpose.',
    icon: (
      <svg className="w-6 h-6 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    ),
  },
  {
    title: 'Trust',
    desc: 'We build lasting relationships through trust, integrity, and accountability while honoring commitments and acting with respect.',
    icon: (
      <svg className="w-6 h-6 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    title: 'Driven to Grow',
    desc: 'We never stop learning, improving, and growing to become better every day.',
    icon: (
      <svg className="w-6 h-6 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
];

// Data Perjalanan Sejarah (The FHRI Indonesia Journey)
const journeyTimeline = [
  {
    year: '2017',
    title: 'Laying the Foundation',
    desc: 'FHRI began with a blog founded by Robby P. Tambunan, Heru, and Priadi to share insights on data-driven HR and better decision-making.',
  },
  {
    year: '2018',
    title: 'Releasing Our First Course',
    desc: 'FHRI launched its first online course, HR Analytics Leader, to help HR professionals adopt analytics within their organizations.',
  },
  {
    year: '2019-2024',
    title: 'Empowering HR Teams',
    desc: 'FHRI expanded its impact by partnering with leading organizations across industries to develop HR talent, build future-ready teams, and accelerate business transformation.',
  },
  {
    year: '2025',
    title: 'T-Shaped HR Model',
    desc: 'FHRI introduced the T-Shaped HR Competency Model to redefine HR development and empower professionals to create greater organizational impact.',
  },
  {
    year: '2026',
    title: 'Committed to Continuous Improvement',
    desc: 'FHRI expanded its impact by partnering with leading organizations across industries to develop HR talent, build future-ready teams, and accelerate business transformation.',
  },
];

// Data Tim Kepemimpinan
const leadershipTeam = [
  {
    name: 'Robby P. Tambunan',
    role: 'Founder & CEO',
    image: '/img-leader-1.jpg',
  },
  {
    name: 'Executive Leader 2',
    role: 'Co-Founder / Managing Director',
    image: '/img-leader-2.jpg',
  },
  {
    name: 'Executive Leader 3',
    role: 'Head of HR Solutions & Consulting',
    image: '/img-leader-3.jpg',
  },
  {
    name: 'Executive Leader 4',
    role: 'Head of Learning & Development',
    image: '/img-leader-4.jpg',
  },
];

// DATA GALERI SLIDER (Bisa ditambahkan sebanyak mungkin foto ke depannya)
const gallerySliderData = [
  {
    id: 1,
    title: 'Collaborative Brainstorming',
    image: '/gallery-1.jpg', // Ganti dengan foto asli di folder /public/
  },
  {
    id: 2,
    title: 'Expert Led Workshops',
    image: '/gallery-2.jpg',
  },
  {
    id: 3,
    title: 'HR Discussion Sessions',
    image: '/gallery-3.jpg',
  },
  {
    id: 4,
    title: 'Digital Analytics Dashboard',
    image: '/gallery-4.jpg',
  },
  {
    id: 5,
    title: 'Leadership Mentoring',
    image: '/gallery-5.jpg',
  },
  {
    id: 6,
    title: 'Team Building Activities',
    image: '/gallery-6.jpg',
  },
];

export default function AboutUsPage() {
  // State untuk melacak indeks halaman slider
  const [currentSlide, setCurrentSlide] = useState(0);

  // Fungsi navigasi geser kiri / kanan
  const handleNext = () => {
    setCurrentSlide((prev) => (prev === gallerySliderData.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? gallerySliderData.length - 1 : prev - 1));
  };

  return (
    <main className="bg-white text-gray-800 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#0B2A4A] text-white py-20 md:py-28 px-6 md:px-12">
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 30%, white 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="text-red-400 font-bold text-xs uppercase tracking-[0.25em] bg-red-950/40 px-3 py-1 rounded-full border border-red-500/30">
            About First HR Indonesia
          </span>
          <h1 className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Your Trusted Strategic <br className="hidden sm:inline" /> HR Development Partner
          </h1>
          <p className="mt-6 text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            First HR Indonesia (FHRI) is here to help organizations build HR management systems that are aligned with their business strategies. We empower HR professionals to unlock their potential, elevate their impact, and transform workplace practices through integrated, practical, and results-oriented HR services.
          </p>
        </div>
      </section>

      {/* 2. OUR PURSUIT OF EXCELLENCE (STORY + VISION & MISSION) */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-7 space-y-6 pr-0 lg:pr-6">
            <div className="inline-flex items-center gap-2 text-red-600 font-bold text-xs tracking-[0.2em] uppercase">
              <span className="w-2 h-2 rounded-full bg-red-600"></span>
              Our Pursuit of Excellence
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B2A4A] leading-tight">
              Driving HR Innovation & Development
            </h2>
            <div className="text-gray-600 space-y-4 text-base leading-relaxed">
              <p>
                Our people share our members&apos; drive to grow. What makes FHRI the home of HR innovation is our passion to challenge the status quo and empower HR to shape a better world of work.
              </p>
              <p>
                Founded by <strong className="text-[#0B2A4A]">Robby P. Tambunan</strong>, First HR Indonesia (FHRI) was built on a vision of continuous learning, innovation, and advancing the HR profession. Today, FHRI empowers HR professionals to unlock their potential, elevate their impact, and transform workplace practices.
              </p>
              <p>
                Through practical learning and innovation, we help HR leaders create better employee experiences and drive meaningful organizational success across Indonesia and beyond.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0B2A4A] text-white p-8 rounded-3xl shadow-xl relative overflow-hidden border border-blue-900">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-red-600/20 rounded-full blur-xl pointer-events-none"></div>
              <h3 className="text-xl font-bold tracking-wide mb-3 text-white border-b border-blue-800 pb-3">
                Our Vision
              </h3>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                To be the strategic partner for organizations in developing superior, professional, and competitive human resources through a culture of continuous learning and innovation.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 p-8 rounded-3xl shadow-sm relative overflow-hidden">
              <h3 className="text-xl font-bold text-[#0B2A4A] tracking-wide mb-3 border-b border-gray-200 pb-3">
                Our Mission
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                To help organizations build HR management systems aligned with their business strategies, empowering professionals through impactful solutions to drive sustainable business growth and shape a better world of work.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. THE FHRI INDONESIA JOURNEY (TIMELINE) */}
      <section className="bg-slate-900 text-white py-20 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-red-400 font-bold text-xs tracking-[0.2em] uppercase">
              The FHRI Indonesia Journey
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-white">
              9 Years. One Mission. Endless Innovation.
            </h2>
            <p className="mt-4 text-slate-400 text-base">
              A brief timeline of our milestone moments in advancing HR practices and continuous learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {journeyTimeline.map((item, idx) => (
              <div key={idx} className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl flex flex-col justify-between hover:border-red-500 transition duration-300 shadow-md">
                <div>
                  <span className="inline-block bg-red-600 text-white font-black text-sm px-3 py-1 rounded-md mb-4">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR VALUES SECTION */}
      <section className="bg-gray-50 py-20 px-6 md:px-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-red-600 font-bold text-xs tracking-[0.2em] uppercase">
              Our Values
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-[#0B2A4A]">
              Values Guide Our Actions
            </h2>
            <p className="mt-4 text-gray-600 text-base">
              Our values shape our culture, guide our decisions, and inspire us to make a meaningful impact every day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valuesData.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md hover:border-red-100 transition duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#0B2A4A] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-50 flex items-center gap-1 text-xs font-semibold text-red-600">
                  <span>First HR Indonesia</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. LEADERSHIP TEAM SECTION */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-red-600 font-bold text-xs tracking-[0.2em] uppercase">
            Our Leadership Team
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-[#0B2A4A]">
            Meet The FHRI Leadership Team
          </h2>
          <p className="mt-4 text-gray-600 text-base">
            Driven by experienced practitioners and thought leaders passionate about transforming the future of human resources.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {leadershipTeam.map((leader, idx) => (
            <div key={idx} className="group flex flex-col items-center text-center">
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-slate-100 mb-5 shadow-sm border border-gray-100">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#0B2A4A] to-blue-900 text-white p-6 -z-10">
                  <span className="text-5xl mb-2">👤</span>
                  <span className="text-xs text-blue-200 uppercase tracking-widest font-mono">FHRI Leader</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#0B2A4A] group-hover:text-red-600 transition-colors">
                {leader.name}
              </h3>
              <p className="text-xs font-medium text-gray-500 mt-1 uppercase tracking-wider">
                {leader.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. BEHIND THE SCENES & WORKSPACE SLIDER GALLERY (Sesuai Contoh Gambar) */}
      <section className="bg-white py-20 px-6 md:px-12 border-t border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Narasi Galeri */}
          <div className="text-center max-w-4xl mx-auto mb-14">
            <h2 className="text-3xl md:text-5xl font-black text-[#0B2A4A] tracking-tight">
              FHRI behind the scenes
            </h2>
            <p className="mt-5 text-gray-600 text-base md:text-lg leading-relaxed">
              Step into the vibrant world of First HR Indonesia. Our gallery captures the essence of our daily operations, from collaborative brainstorming sessions in our modern workspaces to engaging workshops and insightful discussions. We believe in fostering an environment where innovation meets professional excellence, driven by our dedicated team of HR professionals.
            </p>
          </div>

          {/* Wrapper Slider */}
          <div className="relative px-2 sm:px-12">
            
            {/* Tombol Panah Kiri */}
            <button 
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-[#0B2A4A] hover:bg-red-600 hover:text-white hover:border-red-600 transition-all focus:outline-none"
              aria-label="Previous Slide"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* Area Viewport Slider (Terbagi menjadi 4 Kolom Portrait di Desktop) */}
            <div className="overflow-hidden rounded-3xl p-1">
              <div 
                className="flex transition-transform duration-500 ease-out gap-4 sm:gap-6"
                style={{
                  // Menggeser kontainer sesuai indeks slide aktif
                  transform: `translateX(-${currentSlide * (100 / (typeof window !== 'undefined' && window.innerWidth < 640 ? 1 : 4))}%)`
                }}
              >
                {gallerySliderData.map((slide) => (
                  <div 
                    key={slide.id} 
                    className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)] shrink-0 aspect-[3/5] relative rounded-3xl overflow-hidden bg-slate-100 shadow-md border border-gray-100 group cursor-pointer"
                  >
                    {/* Gambar Slider dengan Efek Zoom on Hover */}
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-500"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    
                    {/* Placeholder Cadangan jika Gambar Belum Diunggah */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-[#0B2A4A] via-[#0B2A4A]/60 to-slate-800 text-white p-6 text-center -z-10">
                      <span className="text-4xl mb-3">📸</span>
                      <p className="text-sm font-bold text-blue-100 leading-snug">{slide.title}</p>
                      <span className="text-[10px] text-red-400 font-mono mt-1 uppercase tracking-widest">Photo #{slide.id}</span>
                    </div>

                    {/* Gradient Overlay & Judul saat di-Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A4A]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10">
                      <span className="text-red-400 text-[10px] font-bold uppercase tracking-widest mb-1">FHRI Gallery</span>
                      <h4 className="text-white font-bold text-sm leading-snug">{slide.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tombol Panah Kanan */}
            <button 
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-[#0B2A4A] hover:bg-red-600 hover:text-white hover:border-red-600 transition-all focus:outline-none"
              aria-label="Next Slide"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

          </div>

          {/* Titik Navigasi (Indicators / Dots) di Bagian Bawah */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {gallerySliderData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === idx ? 'w-8 bg-[#0B2A4A]' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* 7. CTA FOOTER SECTION */}
      <section className="bg-[#0B2A4A] text-white py-16 px-6 md:px-12 border-t border-blue-900/80">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-2xl font-bold text-white">Ready to transform your HR team?</h3>
            <p className="text-slate-300 text-sm md:text-base mt-1">Join thousands of HR professionals advancing their careers with FHRI.</p>
          </div>
          <Link 
            href="/pricing" 
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full transition duration-300 shadow-lg shrink-0 text-sm"
          >
            Join Our Community
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

    </main>
  );
}