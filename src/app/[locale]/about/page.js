'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import CTA from '@/components/CTA';
import { getAboutData } from '@/components/aboutData';

// ==========================================
// 1. BAGIAN KOMPONEN (SECTIONS)
// ==========================================

function CustomStyles() {
  return (
    <style dangerouslySetInnerHTML={{__html: `
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-15px) rotate(1.5deg); }
      }
      @keyframes float-reverse {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-10px) rotate(-1.5deg); }
      }
      @keyframes gradientShift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      @keyframes scaleIn {
        from { opacity: 0; transform: scale(0.97); }
        to { opacity: 1; transform: scale(1); }
      }
      @keyframes fadeSlideUp {
        from { opacity: 0; transform: translateY(12px); }
        to { opacity: 1; transform: translateY(0); }
      }

      .animate-float { animation: float 6s ease-in-out infinite; }
      .animate-float-reverse { animation: float-reverse 7s ease-in-out infinite; }
      .animate-gradient-shift { animation: gradientShift 12s ease infinite; background-size: 200% 200%; }
      .animate-scale-in { animation: scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      .animate-fade-slide-up { animation: fadeSlideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      
      .custom-scrollbar::-webkit-scrollbar { width: 5px; height: 5px; }
      .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
      .custom-scrollbar::-webkit-scrollbar-thumb { background: #CBD5E1; border-radius: 10px; }
      .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #DC2626; }
      
      .hide-scroll-mobile::-webkit-scrollbar { display: none; }
      .hide-scroll-mobile { -ms-overflow-style: none; scrollbar-width: none; }
    `}} />
  );
}

function HeroSection({ data }) {
  return (
    <section className="relative bg-brand-navy text-white pt-32 pb-44 md:pt-44 md:pb-48 px-6 md:px-12 overflow-hidden flex items-center min-h-[90vh]">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-brand-navy/50 to-brand-navy z-10 pointer-events-none"></div>
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-brand-red/15 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-30 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full">
        <div className="w-full lg:w-1/2 text-center lg:text-left pt-10">
          <span className="text-eyebrow-lg text-brand-red block mb-6 lg:mb-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            {data.hero.eyebrow}
          </span>
          
          <h1 className="text-white mb-6 drop-shadow-2xl text-balance">
            {data.hero.title1} <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-400">{data.hero.title2}</span>
          </h1>
          
          <p className="text-slate-300 text-lg max-w-2xl mx-auto lg:mx-0 drop-shadow-md mb-8">
            {data.hero.description}
          </p>

          <div className="mt-8 flex flex-wrap justify-center lg:justify-start items-center gap-6">
            <a 
              href="/company-profile.pptx" 
              download="FHRI-Company-Profile.pptx"
              className="inline-flex items-center gap-3 bg-brand-red hover:bg-red-700 text-white px-7 py-4 rounded-2xl font-bold transition-all duration-300 shadow-[0_10px_25px_rgba(220,38,38,0.4)] hover:-translate-y-1 uppercase tracking-widest text-sm"
            >
              <div 
                className="w-5 h-5 bg-current"
                style={{
                  WebkitMaskImage: `url('/ic_download.svg')`,
                  WebkitMaskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center',
                  maskImage: `url('/ic_download.svg')`,
                  maskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'center',
                }}
              />
              {data.hero.downloadBtn}
            </a>

            <div className="bg-gradient-to-br from-[#0B2A4A] to-brand-navy border border-slate-700/50 p-3.5 rounded-2xl flex items-center gap-4 shadow-xl">
              <div className="flex -space-x-3">
                <img className="w-10 h-10 rounded-full border-2 border-[#0B2A4A] object-cover" src="/1.png" alt="Team" onError={(e) => { e.target.style.display = 'none'; }} />
                <img className="w-10 h-10 rounded-full border-2 border-[#0B2A4A] object-cover" src="/2.png" alt="Team" onError={(e) => { e.target.style.display = 'none'; }} />
                <img className="w-10 h-10 rounded-full border-2 border-[#0B2A4A] object-cover" src="/3.png" alt="Team" onError={(e) => { e.target.style.display = 'none'; }} />
                <div className="w-10 h-10 rounded-full border-2 border-[#0B2A4A] bg-brand-red flex items-center justify-center text-[11px] font-bold text-white z-10">+11</div>
              </div>
              <div className="text-left pr-3">
                <p className="text-white font-bold text-sm">{data.hero.expertLeaders}</p>
                <p className="text-xs text-slate-400 mt-0.5">{data.hero.readyToAssist}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 relative group mt-8 lg:mt-0">
          <div className="absolute inset-0 bg-brand-red/20 blur-3xl rounded-full scale-105 pointer-events-none transition-colors duration-700"></div>
          <div className="relative rounded-[2rem] overflow-hidden border-[6px] border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.6)] aspect-[4/3] lg:aspect-video bg-black z-10">
            <video className="w-full h-full object-cover" autoPlay loop muted playsInline controls src="/company-profile.mp4">
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}

function VisionMissionSection({ data }) {
  return (
    <section className="relative px-6 md:px-12 -mt-20 md:-mt-24 z-40 pb-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        
        {/* VISION CARD */}
        <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,38,60,0.1)] border border-slate-100 transform transition-transform hover:-translate-y-2 duration-500 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[100px] -z-10"></div>
          <div className="w-14 h-14 bg-brand-navy rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-brand-navy/20">
            
            <div 
              className="w-7 h-7 bg-white"
              style={{
                WebkitMaskImage: `url('/ic_eye-outline.svg')`,
                WebkitMaskSize: 'contain',
                WebkitMaskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center',
                maskImage: `url('/ic_eye-outline.svg')`,
                maskSize: 'contain',
                maskRepeat: 'no-repeat',
                maskPosition: 'center',
              }}
            />

          </div>
          <span className="text-eyebrow block mb-4">{data.visionMission.visionTitle}</span>
          <h2 className="text-brand-navy mb-4 text-balance">
            {data.visionMission.visionText}
          </h2>
        </div>

        {/* MISSION CARD */}
        <div className="bg-gradient-to-br from-[#0B2A4A] to-brand-navy text-white p-10 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,38,60,0.25)] border border-slate-700 relative overflow-hidden transform transition-transform hover:-translate-y-2 duration-500">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          <div className="w-14 h-14 bg-brand-red rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-brand-red/30 relative z-10">
            
            <div 
              className="w-7 h-7 bg-white"
              style={{
                WebkitMaskImage: `url('/ic_bolt-outline.svg')`,
                WebkitMaskSize: 'contain',
                WebkitMaskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center',
                maskImage: `url('/ic_bolt-outline.svg')`,
                maskSize: 'contain',
                maskRepeat: 'no-repeat',
                maskPosition: 'center',
              }}
            />

          </div>
          <span className="text-eyebrow text-slate-400 block mb-6 relative z-10">{data.visionMission.missionTitle}</span>
          <ul className="space-y-5 relative z-10">
            {data.visionMission.missions.map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <span className="text-brand-red mt-1 drop-shadow-md text-xl">✦</span>
                <span className="text-slate-100 text-lg font-normal">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
      </div>
    </section>
  );
}

function CoreValuesSection({ data }) {
  const icons = [
    
    <div 
      key="1" 
      className="w-6 h-6 bg-brand-red"
      style={{
        WebkitMaskImage: `url('/ic_check-shield-outline.svg')`,
        WebkitMaskSize: 'contain',
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskImage: `url('/ic_check-shield-outline.svg')`,
        maskSize: 'contain',
        maskRepeat: 'no-repeat',
        maskPosition: 'center',
      }}
    />,
    
    <div 
      key="2" 
      className="w-6 h-6 bg-brand-red"
      style={{
        WebkitMaskImage: `url('/ic_star-outline.svg')`,
        WebkitMaskSize: 'contain',
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskImage: `url('/ic_star-outline.svg')`,
        maskSize: 'contain',
        maskRepeat: 'no-repeat',
        maskPosition: 'center',
      }}
    />,

    <div 
      key="3" 
      className="w-6 h-6 bg-brand-red"
      style={{
        WebkitMaskImage: `url('/ic_users-outline.svg')`,
        WebkitMaskSize: 'contain',
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskImage: `url('/ic_users-outline.svg')`,
        maskSize: 'contain',
        maskRepeat: 'no-repeat',
        maskPosition: 'center',
      }}
    />,

    <div 
      key="4" 
      className="w-6 h-6 bg-brand-red"
      style={{
        WebkitMaskImage: `url('/ic_trending-up.svg')`,
        WebkitMaskSize: 'contain',
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskImage: `url('/ic_trending-up.svg')`,
        maskSize: 'contain',
        maskRepeat: 'no-repeat',
        maskPosition: 'center',
      }}
    />
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-eyebrow gradient-gold text-white px-5 py-2 rounded-full inline-block shadow-sm mb-6">
            {data.coreValues.eyebrow}
          </span>
          <h2 className="text-brand-navy mb-4">{data.coreValues.title}</h2>
          <p className="text-slate-600 text-lg">{data.coreValues.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.coreValues.values.map((item, idx) => (
            <div key={idx} className={`group bg-white p-8 md:p-10 rounded-[2rem] border border-slate-100 hover:border-blue-100 hover:shadow-[0_20px_40px_-15px_rgba(0,38,60,0.12)] transition-all duration-500 relative ${idx % 2 === 0 ? 'lg:translate-y-4' : 'lg:-translate-y-4'}`}>
              <div className="w-16 h-16 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-brand-red/5 transition-all duration-500">
                {icons[idx]}
              </div>
              <h4 className="mb-3 group-hover:text-brand-red transition-colors text-brand-navy">{item.title}</h4>
              <p className="text-slate-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExecutiveProfilesSection({ data }) {
  const [activeLeaderIndex, setActiveLeaderIndex] = useState(0);
  const thumbnailContainerRef = useRef(null);
  const leadershipTeam = data.leadershipTeam;
  const activeLeader = leadershipTeam[activeLeaderIndex];

  useEffect(() => {
    if (thumbnailContainerRef.current) {
      const container = thumbnailContainerRef.current;
      const activeThumbnail = container.children[activeLeaderIndex];
      if (activeThumbnail) {
        const scrollPos = activeThumbnail.offsetLeft - (container.clientWidth / 2) + (activeThumbnail.clientWidth / 2);
        container.scrollTo({ left: scrollPos, behavior: 'smooth' });
      }
    }
  }, [activeLeaderIndex]);

  const nextLeader = () => setActiveLeaderIndex((prev) => (prev === leadershipTeam.length - 1 ? 0 : prev + 1));
  const prevLeader = () => setActiveLeaderIndex((prev) => (prev === 0 ? leadershipTeam.length - 1 : prev - 1));

  return (
    <section className="py-28 px-6 md:px-12 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="text-center mb-16 md:mb-20">
          <span className="text-eyebrow gradient-gold text-white px-5 py-2 rounded-full inline-block shadow-sm mb-6">
            {data.executive.eyebrow}
          </span>
          <h2 className="text-brand-navy mb-4">{data.executive.title}</h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-600 text-lg">{data.executive.subtitle}</p>
        </div>

        <div className="bg-gradient-to-br from-slate-50 via-white to-slate-50 animate-gradient-shift border border-slate-200/80 rounded-[3rem] p-8 md:p-12 lg:p-14 shadow-[0_20px_60px_-15px_rgba(0,38,60,0.08)] transition-all duration-500 ease-in-out relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start relative z-10">
            <div key={`img-${activeLeaderIndex}`} className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left animate-scale-in">
              <div className="relative w-full max-w-[260px] lg:max-w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-brand-navy/10 border-[6px] border-white mb-8">
                <Image src={activeLeader.image} alt={activeLeader.name} fill className="object-cover transition-opacity duration-500" onError={(e) => { e.target.style.display = 'none'; }} />
              </div>
              <h3 className="text-brand-navy">{activeLeader.name}</h3>
              <p className="text-brand-red font-bold uppercase tracking-widest text-xs mt-3">{activeLeader.role}</p>
              <div className="w-12 h-1 bg-slate-200 mt-6 rounded-full mx-auto lg:mx-0"></div>
            </div>

            <div key={`txt-${activeLeaderIndex}`} className="lg:col-span-8 animate-fade-slide-up">
              <h4 className="text-brand-navy mb-6 flex items-center gap-3 justify-center lg:justify-start">
                <svg className="w-6 h-6 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                {data.executive.summaryHeader}
              </h4>
              <div className="h-[340px] md:h-[400px] overflow-y-auto pr-3 md:pr-6 custom-scrollbar text-justify space-y-5">
                {activeLeader.summary.map((paragraph, index) => (
                  <p key={index} className="animate-fade-slide-up opacity-0 text-slate-600 md:text-base" style={{ animationDelay: `${index * 0.12}s` }}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col lg:flex-row items-center justify-between gap-6 px-4">
          <div className="flex items-center gap-3 md:gap-5 w-full justify-center">
            <button onClick={prevLeader} className="shrink-0 w-12 h-12 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center text-slate-500 hover:bg-brand-red hover:text-white hover:border-brand-red transition-all">
              <div 
                className="w-5 h-5 bg-current"
                style={{
                  transform: 'rotate(90deg)',
                  WebkitMaskImage: `url('/ic_arrow-short-down.svg')`,
                  WebkitMaskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center',
                  maskImage: `url('/ic_arrow-short-down.svg')`,
                  maskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'center',
                }}
              />
            </button>

            <div ref={thumbnailContainerRef} className="flex overflow-x-auto gap-4 py-4 px-2 max-w-[250px] sm:max-w-[450px] md:max-w-xl custom-scrollbar hide-scroll-mobile scroll-smooth">
              {leadershipTeam.map((leader, index) => (
                <button 
                  key={index} onClick={() => setActiveLeaderIndex(index)} 
                  className={`relative w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-full overflow-hidden border-[3px] transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] ${index === activeLeaderIndex ? 'border-brand-red scale-110 shadow-md' : 'border-transparent opacity-50 hover:opacity-100 hover:scale-105'}`}
                >
                  <Image src={leader.image} alt={leader.name} fill className="object-cover" onError={(e) => { e.target.style.display = 'none'; }} />
                </button>
              ))}
            </div>

            <button onClick={nextLeader} className="shrink-0 w-12 h-12 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center text-slate-500 hover:bg-brand-red hover:text-white hover:border-brand-red transition-all">
              <div 
                className="w-5 h-5 bg-current"
                style={{
                  transform: 'rotate(-90deg)',
                  WebkitMaskImage: `url('/ic_arrow-short-down.svg')`,
                  WebkitMaskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center',
                  maskImage: `url('/ic_arrow-short-down.svg')`,
                  maskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'center',
                }}
              />
            </button>
          </div>
          <div className="text-xs font-bold text-slate-400 tracking-widest uppercase lg:shrink-0 hidden lg:block">
            {activeLeaderIndex + 1} / {leadershipTeam.length}
          </div>
        </div>
      </div>
    </section>
  );
}

function JourneyTimelineSection({ data }) {
  const journeyTimeline = data.journey.timeline;

  return (
   <section className="bg-slate-50 py-24 px-6 md:px-12 relative overflow-hidden pb-32">
     <div className="absolute -left-32 top-0 w-96 h-96 rounded-full bg-brand-red/5 blur-3xl pointer-events-none" />
     <div className="absolute -right-32 bottom-0 w-96 h-96 rounded-full bg-brand-navy/5 blur-3xl pointer-events-none" />

     <div className="max-w-7xl mx-auto relative z-10">
       <div className="text-center max-w-3xl mx-auto mb-20 md:mb-24">
         <span className="text-eyebrow-lg text-brand-red block mb-6">
           {data.journey.eyebrow}
         </span>
         <h2 className="text-brand-navy mb-6 text-balance">
           {data.journey.title1} <br className="hidden sm:block" /> {data.journey.title2}
         </h2>
         <p className="text-slate-600 text-lg max-w-2xl mx-auto">
           {data.journey.subtitle}
         </p>
       </div>

       <div className="flex flex-col gap-y-14">
         {Array.from({ length: Math.ceil(journeyTimeline.length / 3) }, (_, rowIdx) =>
           journeyTimeline.slice(rowIdx * 3, rowIdx * 3 + 3)
         ).map((row, rowIdx) => (
           <div key={rowIdx} className="flex flex-wrap justify-center items-start gap-y-14">
             {row.map((item, idx) => (
               <React.Fragment key={idx}>
                 <div className="group flex flex-col items-center w-[240px] px-4">
                   <div className="w-[72px] h-[72px] rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-sm mb-7 shadow-[0_15px_35px_-10px_rgba(0,38,60,0.5)] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:bg-brand-red group-hover:scale-105">
                     <span className="text-center leading-tight">{item.year}</span>
                   </div>
                   <h3 className="mb-3 text-center text-brand-navy group-hover:text-brand-red transition-colors duration-500">
                     {item.title}
                   </h3>
                   <p className="text-justify text-slate-600">
                     {item.desc}
                   </p>
                 </div>
                 {idx < row.length - 1 && (
                   <div className="hidden lg:block w-16 border-t-2 border-dashed border-slate-300 mt-9 shrink-0" />
                 )}
               </React.Fragment>
             ))}
           </div>
         ))}
       </div>
     </div>
   </section>
  );
}

function GallerySection({ data }) {
  const gallerySliderData = data.gallery.slides;
  const [gallerySlide, setGallerySlide] = useState(0);
  const [galleryViews, setGalleryViews] = useState(3);
  
  useEffect(() => {
    const updateViews = () => {
      const width = window.innerWidth;
      setGalleryViews(width >= 1024 ? 3 : width >= 640 ? 2 : 1);
    };
    updateViews();
    window.addEventListener('resize', updateViews);
    return () => window.removeEventListener('resize', updateViews);
  }, []);

  const maxGallerySlide = Math.max(0, gallerySliderData.length - galleryViews);
  const nextGallery = () => setGallerySlide(prev => (prev >= maxGallerySlide ? 0 : prev + 1));
  const prevGallery = () => setGallerySlide(prev => (prev <= 0 ? maxGallerySlide : prev - 1));

  return (
    <section className="bg-brand-navy pt-24 pb-12 md:pt-32 md:pb-16 px-6 md:px-12 overflow-hidden rounded-t-[3rem] lg:rounded-t-[5rem] -mt-16 relative z-20 shadow-[0_-20px_50px_rgba(0,38,60,0.15)]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-10 md:mb-14 gap-6 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-eyebrow-lg text-brand-red block mb-3">{data.gallery.eyebrow}</span>
            <h2 className="text-white mb-4">{data.gallery.title}</h2>
            <p className="mt-4 text-slate-400 text-lg">{data.gallery.subtitle}</p>
          </div>
          <div className="flex gap-4 justify-center md:justify-end">
            
            {/* Tombol Previous */}
            <button onClick={prevGallery} className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-brand-red hover:border-brand-red transition-all shadow-lg">
              <div 
                className="w-6 h-6 bg-current"
                style={{
                  transform: 'rotate(90deg)',
                  WebkitMaskImage: `url('/ic_arrow-short-down.svg')`,
                  WebkitMaskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center',
                  maskImage: `url('/ic_arrow-short-down.svg')`,
                  maskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'center',
                }}
              />
            </button>

            {/* Tombol Next */}
            <button onClick={nextGallery} className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-brand-red hover:border-brand-red transition-all shadow-lg">
              <div 
                className="w-6 h-6 bg-current"
                style={{
                  transform: 'rotate(-90deg)',
                  WebkitMaskImage: `url('/ic_arrow-short-down.svg')`,
                  WebkitMaskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center',
                  maskImage: `url('/ic_arrow-short-down.svg')`,
                  maskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'center',
                }}
              />
            </button>

          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden"> 
            <div className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] gap-6" style={{ transform: `translateX(-${gallerySlide * (100 / galleryViews)}%)` }}>
              {gallerySliderData.map((slide) => (
                <div key={slide.id} className="w-full sm:w-[calc(50%-0.75rem)] md:w-[calc(33.333%-1rem)] shrink-0 aspect-[4/3] md:aspect-[5/4] relative rounded-[2rem] overflow-hidden group border border-slate-700/50 shadow-xl">
                  <Image src={slide.image} alt={slide.title} fill className="object-cover group-hover:scale-110 transition duration-700" onError={(e) => { e.target.style.display = 'none'; }} />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0B2A4A] to-slate-900 flex flex-col items-center justify-center -z-10">
                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-3">
                       <svg className="w-8 h-8 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6 md:p-8 opacity-90 group-hover:opacity-100 transition-opacity">
                    <span className="text-brand-red text-xs font-bold uppercase tracking-widest block mb-2">{data.gallery.badge}</span>
                    <h4 className="text-white">{slide.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 2. MAIN PAGE EXPORT
// ==========================================

export default function AboutUsPage() {
  const [mounted, setMounted] = useState(false);
  const locale = useLocale();
  const aboutData = getAboutData(locale);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; 

  return (
    <main className="bg-slate-50 overflow-hidden selection:bg-brand-red selection:text-white">
      <CustomStyles />
      <HeroSection data={aboutData} />
      <VisionMissionSection data={aboutData} />
      <CoreValuesSection data={aboutData} />
      <ExecutiveProfilesSection data={aboutData} />
      <JourneyTimelineSection data={aboutData} />
      <GallerySection data={aboutData} />
      <CTA />
    </main>
  );
}