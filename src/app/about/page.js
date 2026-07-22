'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// ==========================================
// DATA KONTEN ABOUT US
// ==========================================

const valuesData = [
  {
    title: 'Ownership',
    desc: 'We act with accountability, take initiative, and turn challenges into opportunities through proactive problem solving.',
    icon: <svg className="w-6 h-6 text-[#DC2626]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
  },
  {
    title: 'Excellence',
    desc: 'We pursue the highest standards, continuously improve, and deliver outstanding results with passion and purpose.',
    icon: <svg className="w-6 h-6 text-[#DC2626]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg>,
  },
  {
    title: 'Trust',
    desc: 'We build lasting relationships through trust, integrity, and accountability while honoring commitments.',
    icon: <svg className="w-6 h-6 text-[#DC2626]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>,
  },
  {
    title: 'Driven to Grow',
    desc: 'We never stop learning, improving, and growing to become better every day in a dynamic landscape.',
    icon: <svg className="w-6 h-6 text-[#DC2626]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>,
  },
];

const journeyTimeline = [
  { year: '2017', title: 'Laying the Foundation', desc: 'FHRI began with a blog founded by Robby P. Tambunan, Heru, and Priadi to share insights on data-driven HR and better decision-making.' },
  { year: '2018', title: 'Releasing Our First Course', desc: 'FHRI launched its first online course, HR Analytics Leader, to help HR professionals adopt analytics within their organizations.' },
  { year: '2019-2024', title: 'Empowering HR Teams', desc: 'FHRI expanded its impact by partnering with leading organizations across industries to develop HR talent and accelerate business transformation.' },
  { year: '2025', title: 'T-Shaped HR Model', desc: 'FHRI introduced the T-Shaped HR Competency Model to redefine HR development and empower professionals.' },
  { year: '2026', title: 'Continuous Improvement', desc: 'Expanded impact by partnering with leading organizations across industries to build future-ready teams and accelerate business transformation.' },
];

const leadershipTeam = [
  { name: 'Robby P. Tambunan', role: 'Chief Executive Officer', image: '/1.png' },
  { name: 'Charles Gatan', role: 'Chief Operating Officer', image: '/2.png' },
  { name: 'Yopie B. Halomoan', role: 'Chief Financial Officer', image: '/3.png' },
  { name: 'Hana Tiranda', role: 'GM - Operation', image: '/4.png' },
  { name: 'Paulus Sebastian', role: 'Sales & Digital Marketing', image: '/5.png' },
  { name: 'Adriel Tambunan', role: 'Sales & Digital Marketing', image: '/6.png' },
  { name: 'Saut Sitompul', role: 'Executive Coach & Senior Facilitator', image: '/7.png' },
  { name: 'Miftakhul Ikhsan', role: 'Senior Trainer & Facilitator', image: '/8.png' },
  { name: 'Priadi Gunanto', role: 'Senior Trainer & Facilitator', image: '/9.png' },
  { name: 'Martha Nurlia', role: 'Senior Trainer & Facilitator', image: '/10.png' },
  { name: 'Abelard S. Simanjuntak', role: 'Industrial Relation Advisory', image: '/11.png' },
  { name: 'Laura Milka Valencia', role: 'Talent Acquisition', image: '/12.png' },
  { name: 'Wawan Kurniawan', role: 'Senior Trainer & Facilitator', image: '/13.png' },
  { name: 'Muhammad Febriansyah', role: 'Web Developer', image: '/14.png' },
];

const gallerySliderData = [
  { id: 1, title: 'Collaborative Brainstorming', image: '/herokonten2.jpg' },
  { id: 2, title: 'Expert Led Workshops', image: '/herokonten3.jpg' },
  { id: 3, title: 'HR Discussion Sessions', image: '/herokonten4.jpg' },
  { id: 4, title: 'Digital Analytics Dashboard', image: '/herokonten5.jpg' },
  { id: 5, title: 'Leadership Mentoring', image: '/herokonten6.jpg' },
  { id: 6, title: 'Team Building Activities', image: '/herokonten8.jpg' },
];

export default function AboutUsPage() {
  const [leaderSlide, setLeaderSlide] = useState(0);
  const [gallerySlide, setGallerySlide] = useState(0);
  const [views, setViews] = useState({ leader: 4, gallery: 3 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateViews = () => {
      const width = window.innerWidth;
      setViews({
        leader: width >= 1024 ? 4 : width >= 640 ? 2 : 1,
        gallery: width >= 1024 ? 3 : width >= 640 ? 2 : 1,
      });
    };
    updateViews();
    window.addEventListener('resize', updateViews);
    return () => window.removeEventListener('resize', updateViews);
  }, []);

  const maxLeaderSlide = Math.max(0, leadershipTeam.length - views.leader);
  const maxGallerySlide = Math.max(0, gallerySliderData.length - views.gallery);

  const nextLeader = () => setLeaderSlide(prev => (prev >= maxLeaderSlide ? 0 : prev + 1));
  const prevLeader = () => setLeaderSlide(prev => (prev <= 0 ? maxLeaderSlide : prev - 1));

  const nextGallery = () => setGallerySlide(prev => (prev >= maxGallerySlide ? 0 : prev + 1));
  const prevGallery = () => setGallerySlide(prev => (prev <= 0 ? maxGallerySlide : prev - 1));

  if (!mounted) return null; 

  return (
    <main className="bg-[#F8FAFC] text-gray-800 overflow-hidden font-sans">
      
      {/* Animasi Tambahan */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-2deg); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-reverse { animation: float-reverse 7s ease-in-out infinite; }
      `}} />

      {/* ============================================================
          1. HERO SECTION
          ============================================================ */}
      <section className="relative bg-[#00263C] text-white pt-36 pb-48 md:pt-48 md:pb-56 px-6 md:px-12 overflow-hidden flex items-center justify-center min-h-[90vh]">
        
        {/* Layer 1: Pola Titik & Garis Abstrak */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        
        {/* Layer 2: Cahaya Warna-Warni (Glow) */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[120px] animate-pulse pointer-events-none" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#DC2626]/20 rounded-full blur-[120px] animate-pulse pointer-events-none" style={{ animationDuration: '6s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-96 bg-[#00263C] rounded-full blur-[100px] pointer-events-none"></div>

        {/* Elemen Melayang (Kiri & Kanan) */}
        {/* Badge Kiri Atas (Emoji Diganti Ikon SVG) */}
        <div className="hidden lg:flex absolute top-40 left-[10%] bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl animate-float items-center gap-4 shadow-2xl z-20">
          <div className="w-12 h-12 bg-blue-500/40 rounded-full flex items-center justify-center">
            {/* SVG Ikon Shield Check (Trust/Partner) */}
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div>
            <p className="text-xs text-blue-200 font-bold uppercase tracking-wider">Trusted Partner</p>
            <p className="text-white font-extrabold text-lg">500+ Companies</p>
          </div>
        </div>

        <div className="hidden lg:flex absolute bottom-48 right-[10%] bg-gradient-to-br from-[#0B2A4A] to-[#00263C] border border-slate-700 p-4 rounded-2xl animate-float-reverse items-center gap-4 shadow-2xl z-20">
          <div className="flex -space-x-4">
            <img className="w-10 h-10 rounded-full border-2 border-[#0B2A4A] object-cover" src="/1.png" alt="Team" onError={(e) => { e.target.style.display = 'none'; }} />
            <img className="w-10 h-10 rounded-full border-2 border-[#0B2A4A] object-cover" src="/2.png" alt="Team" onError={(e) => { e.target.style.display = 'none'; }} />
            <img className="w-10 h-10 rounded-full border-2 border-[#0B2A4A] object-cover" src="/3.png" alt="Team" onError={(e) => { e.target.style.display = 'none'; }} />
            <div className="w-10 h-10 rounded-full border-2 border-[#0B2A4A] bg-[#DC2626] flex items-center justify-center text-xs font-bold text-white z-10">+11</div>
          </div>
          <div>
            <p className="text-white font-bold text-sm">Expert Leaders</p>
            <p className="text-xs text-slate-400">Ready to assist you</p>
          </div>
        </div>

        <div className="hidden md:block absolute top-1/4 right-[20%] text-[#DC2626]/50 animate-float" style={{ animationDelay: '1s' }}>
          <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>
        </div>

        {/* Konten Utama Tengah */}
        <div className="max-w-5xl mx-auto text-center relative z-30">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#00263C] border border-slate-700 shadow-xl mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626] animate-pulse"></span>
            <span className="text-xs font-bold text-slate-300 tracking-[0.25em] uppercase">About First HR Indonesia</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-black text-white leading-[1.1] mb-8 drop-shadow-2xl">
            One Mission, <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DC2626] to-red-400">Endless Innovation</span>
          </h1>
          
          <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light drop-shadow-md">
            Empowering organizations through strategic human capital solutions. We connect world-class strategies with Indonesia's finest professionals to shape a better world of work.
          </p>
        </div>
      </section>

      {/* ============================================================
          2. VISION & MISSION
          ============================================================ */}
      <section className="relative px-6 md:px-12 -mt-32 md:-mt-40 z-40 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          
          <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,38,60,0.15)] border border-slate-100 transform transition-transform hover:-translate-y-2 duration-500 flex flex-col justify-center">
            <div className="w-14 h-14 bg-[#00263C] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
            </div>
            <h2 className="text-sm text-[#DC2626] font-bold uppercase tracking-widest mb-4">Our Vision</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-[#00263C] leading-tight">
              To be the most trusted Strategic Human Capital Partner.
            </h3>
          </div>

          <div className="bg-gradient-to-br from-[#0B2A4A] to-[#00263C] text-white p-10 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,38,60,0.25)] border border-slate-700 relative overflow-hidden transform transition-transform hover:-translate-y-2 duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="w-14 h-14 bg-[#DC2626] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-red-500/30">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h2 className="text-sm text-slate-400 font-bold uppercase tracking-widest mb-6">Our Mission</h2>
            <ul className="space-y-5">
              {[
                "Deliver strategic Human Capital solutions.",
                "Develop people and leadership.",
                "Build high-performing organizations.",
                "Partner with integrity and excellence."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="text-[#DC2626] mt-1 drop-shadow-md">✦</span>
                  <span className="text-slate-100 text-lg md:text-xl font-medium leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* ============================================================
          3. OUR VALUES 
          ============================================================ */}
      <section className="py-24 px-6 md:px-12 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#DC2626] font-bold text-xs tracking-[0.2em] uppercase bg-red-50 px-3 py-1.5 rounded-full inline-block">Our Core Values</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-[#00263C]">Values That Guide Us</h2>
            <p className="mt-4 text-slate-500 text-lg">The four pillars that define how we work, how we treat each other, and how we deliver impact.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valuesData.map((item, idx) => (
              <div key={idx} className={`group bg-white p-8 rounded-[2rem] border border-slate-100 hover:border-blue-100 hover:shadow-[0_20px_40px_-15px_rgba(0,38,60,0.12)] transition-all duration-500 relative ${idx % 2 === 0 ? 'lg:translate-y-4' : 'lg:-translate-y-4'}`}>
                <div className="w-14 h-14 bg-[#F8FAFC] rounded-2xl border border-slate-100 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#00263C] mb-3 group-hover:text-[#DC2626] transition-colors">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          4. LEADERSHIP TEAM 
          ============================================================ */}
      <section className="py-24 px-6 md:px-12 bg-white relative overflow-hidden border-t border-slate-100">
        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-16 gap-6 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start">
              <span className="text-[#DC2626] font-bold text-xs tracking-[0.2em] uppercase bg-red-50 px-3 py-1.5 rounded-full inline-block">Leadership Team</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-[#00263C]">Meet The Experts</h2>
            </div>
            <div className="flex gap-3 justify-center md:justify-end">
              <button onClick={prevLeader} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-[#00263C] hover:bg-[#DC2626] hover:text-white hover:border-[#DC2626] transition-all">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" /></svg>
              </button>
              <button onClick={nextLeader} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-[#00263C] hover:bg-[#DC2626] hover:text-white hover:border-[#DC2626] transition-all">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" /></svg>
              </button>
            </div>
          </div>

          <div className="overflow-hidden p-2 -m-2">
            <div 
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
              style={{ transform: `translateX(-${leaderSlide * (100 / views.leader)}%)` }}
            >
              {leadershipTeam.map((leader, idx) => (
                <div key={idx} className="w-full sm:w-1/2 lg:w-1/4 shrink-0 px-3">
                  <div className="group bg-[#F8FAFC] rounded-[2rem] p-4 pb-6 border border-slate-100 hover:shadow-xl transition-all duration-300">
                    <div className="relative w-full aspect-[4/5] rounded-[1.5rem] overflow-hidden bg-slate-200 mb-5">
                      <Image src={leader.image} alt={leader.name} fill className="object-cover group-hover:scale-105 transition duration-500" onError={(e) => { e.target.style.display = 'none'; }} />
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#00263C] to-slate-400 flex items-center justify-center -z-10">
                        <svg className="w-16 h-16 text-white/30" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                      </div>
                    </div>
                    <div className="px-2 text-center">
                      <h3 className="text-[17px] font-bold text-[#00263C] line-clamp-1">{leader.name}</h3>
                      <p className="text-xs font-semibold text-[#DC2626] mt-1 uppercase tracking-wider line-clamp-2 min-h-[32px] flex items-center justify-center">{leader.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full h-1 bg-slate-100 mt-10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#DC2626] transition-all duration-700" 
              style={{ width: `${((leaderSlide + 1) / (maxLeaderSlide + 1)) * 100}%` }}
            ></div>
          </div>

        </div>
      </section>

      {/* ============================================================
          5. THE FHRI JOURNEY (Timeline)
          ============================================================ */}
      <section className="bg-[#F8FAFC] py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#00263C] leading-tight">Our Journey</h2>
            <p className="mt-4 text-slate-500 text-lg">9 Years. One Mission. Endless Innovation.</p>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {journeyTimeline.map((item, idx) => (
              <div key={idx} className="group bg-white border border-slate-200 p-6 rounded-[2rem] hover:bg-[#00263C] transition-colors duration-500 flex flex-col shadow-sm">
                <h3 className="text-4xl font-black text-slate-200 group-hover:text-[#DC2626] transition-colors duration-500 mb-4">{item.year}</h3>
                <h4 className="text-lg font-bold text-[#00263C] group-hover:text-white mb-2">{item.title}</h4>
                <p className="text-sm text-slate-500 group-hover:text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          6. BEHIND THE SCENES GALLERY
          ============================================================ */}
      <section className="bg-[#00263C] py-24 px-6 md:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-16 gap-6 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start">
              <span className="text-[#DC2626] font-bold text-xs tracking-[0.2em] uppercase inline-block">Gallery</span>
              <h2 className="mt-2 text-3xl md:text-5xl font-extrabold text-white tracking-tight">Behind The Scenes</h2>
              <p className="mt-4 text-slate-300 text-lg">Step into the vibrant world of First HR Indonesia.</p>
            </div>
            <div className="flex gap-3 justify-center md:justify-end">
              <button onClick={prevGallery} className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white hover:bg-[#DC2626] hover:border-[#DC2626] transition-all">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" /></svg>
              </button>
              <button onClick={nextGallery} className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white hover:bg-[#DC2626] hover:border-[#DC2626] transition-all">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" /></svg>
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-2xl">
              <div 
                className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] gap-4 md:gap-6"
                style={{ transform: `translateX(-${gallerySlide * (100 / views.gallery)}%)` }}
              >
                {gallerySliderData.map((slide) => (
                  <div key={slide.id} className="w-full sm:w-[calc(50%-0.75rem)] md:w-[calc(33.333%-1rem)] shrink-0 aspect-[4/3] md:aspect-[16/10] relative rounded-[2rem] overflow-hidden group">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-700"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0B2A4A] to-slate-900 flex flex-col items-center justify-center -z-10">
                      <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-3">
                         <svg className="w-8 h-8 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                      </div>
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-8">
                      <span className="text-[#DC2626] text-[10px] font-black uppercase tracking-widest mb-2">FHRI Moment</span>
                      <h4 className="text-white font-bold text-lg md:text-xl leading-snug">{slide.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================
          7. CTA FOOTER
          ============================================================ */}
      <section className="bg-[#DC2626] text-white py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Partner With The Best</h2>
          <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">Discover how First HR Indonesia can elevate your organizational capability and drive sustainable business growth.</p>
          <Link href="/pricing" className="inline-flex items-center gap-2 bg-white text-[#DC2626] font-extrabold px-10 py-4 rounded-full transition-transform hover:scale-105 shadow-xl uppercase tracking-wider text-sm">
            Join Us
          </Link>
        </div>
      </section>

    </main>
  );
}