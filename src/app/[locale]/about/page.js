'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import CTA from '@/components/CTA';
import { getAboutData } from '@/components/aboutData';

// 1. BAGIAN KOMPONEN (SECTIONS)

function CustomStyles() {
  return (
    <style dangerouslySetInnerHTML={{__html: `
      @keyframes float { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-15px) rotate(1.5deg); } }
      @keyframes float-reverse { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-10px) rotate(-1.5deg); } }
      @keyframes gradientShift { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
      @keyframes scaleIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
      @keyframes fadeSlideUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }

      .animate-float { animation: float 6s ease-in-out infinite; }
      .animate-float-reverse { animation: float-reverse 7s ease-in-out infinite; }
      .animate-gradient-shift { animation: gradientShift 12s ease infinite; background-size: 200% 200%; }
      .animate-scale-in { animation: scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
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
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProfileDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section className="relative bg-brand-navy text-white pt-20 pb-24 md:pt-28 md:pb-48 px-6 md:px-12 overflow-hidden flex items-center min-h-[85vh]">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-brand-navy/50 to-brand-navy z-10 pointer-events-none"></div>
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-brand-navy/20 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-brand-red/15 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-30 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <span className="text-eyebrow-lg text-brand-red block mb-6 lg:mb-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            {data.hero.eyebrow}
          </span>
          
          <h1 className="text-white mb-6 drop-shadow-2xl text-balance">
            {data.hero.title1} <br className="hidden lg:block" />
            <span className="text-gradient-red text-transparent bg-clip-text">{data.hero.title2}</span>
          </h1>
          
          <p className="text-slate-300 max-w-2xl mx-auto lg:mx-0 drop-shadow-md mb-8">
            {data.hero.description}
          </p>

          <div className="mt-8 flex flex-wrap lg:flex-nowrap justify-center lg:justify-start items-center gap-4 lg:gap-5">
            
            {/* 🚀 DROPDOWN BUTTON DENGAN LEBAR YANG SEJAJAR DENGAN TOMBOL */}
            <div className="relative inline-block text-left w-full sm:w-auto" ref={dropdownRef}>
              <button 
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                className="w-full sm:w-auto inline-flex items-center justify-between gap-3 bg-brand-red hover:bg-white hover:text-brand-navy text-white px-5 py-3 rounded-xl font-bold transition-all duration-300 shadow-lg hover:-translate-y-1 uppercase tracking-wider text-[12px] cursor-pointer group"
              >
                <div className="flex items-center gap-2">
                  <div 
                    className="w-4 h-4 bg-current group-hover:text-brand-navy transition-colors shrink-0"
                    style={{
                      WebkitMaskImage: `url('/icons/ic_download.svg')`,
                      WebkitMaskSize: 'contain',
                      WebkitMaskRepeat: 'no-repeat',
                      WebkitMaskPosition: 'center',
                      maskImage: `url('/icons/ic_download.svg')`,
                      maskSize: 'contain',
                      maskRepeat: 'no-repeat',
                      maskPosition: 'center',
                    }}
                  />
                  <span>{data.hero.downloadBtn}</span>
                </div>
                <svg 
                  className={`w-3.5 h-3.5 transition-transform duration-300 shrink-0 ${profileDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Menu Dropdown dengan w-full (persis sejajar dengan tombol) */}
              {profileDropdownOpen && (
                <div className="absolute left-0 top-full mt-2 w-full rounded-xl bg-white shadow-xl border border-slate-100 p-1 z-50 animate-fade-slide-up text-brand-navy">
                  <a 
                    href="/Comprof_FirstHRIndonesia_ID.pdf"
                    download="Company_Profile_First_HR_Indonesia_ID.pdf"
                    onClick={() => setProfileDropdownOpen(false)}
                    className="flex items-center justify-between w-full px-3 py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider hover:bg-slate-50 hover:text-brand-red transition-colors"
                  >
                    <span>ID (Bahasa)</span>
                    <span className="text-[9px] bg-slate-100 px-1.5 py-0.5 rounded text-slate-500">PDF</span>
                  </a>
                  <a 
                    href="/Comprof_FirstHRIndonesia_EN.pdf"
                    download="Company_Profile_First_HR_Indonesia_EN.pdf"
                    onClick={() => setProfileDropdownOpen(false)}
                    className="flex items-center justify-between w-full px-3 py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider hover:bg-slate-50 hover:text-brand-red transition-colors mt-0.5"
                  >
                    <span>EN (English)</span>
                    <span className="text-[9px] bg-slate-100 px-1.5 py-0.5 rounded text-slate-500">PDF</span>
                  </a>
                </div>
              )}
            </div>

            <div className="bg-gradient-to-br from-brand-navy to-brand-navy border border-slate-700/50 p-3.5 rounded-2xl flex items-center gap-4 shadow-xl">
              <div className="flex -space-x-3">
                <img className="w-10 h-10 rounded-full border-2 border-brand-navy object-cover" src="/images/1.png" alt="Team" onError={(e) => { e.target.style.display = 'none'; }} />
                <img className="w-10 h-10 rounded-full border-2 border-brand-navy object-cover" src="/images/2.png" alt="Team" onError={(e) => { e.target.style.display = 'none'; }} />
                <img className="w-10 h-10 rounded-full border-2 border-brand-navy object-cover" src="/images/3.png" alt="Team" onError={(e) => { e.target.style.display = 'none'; }} />
                <div className="w-10 h-10 rounded-full border-2 border-brand-navy bg-brand-red flex items-center justify-center text-xs font-bold text-white z-10">+11</div>
              </div>
              <div className="text-left pr-3">
                <p className="text-takeaway text-white">{data.hero.expertLeaders}</p>
                <small className="text-slate-400 mt-0.5 block">{data.hero.readyToAssist}</small>
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
        
        <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,38,60,0.1)] border border-slate-100 transform transition-transform hover:-translate-y-2 duration-500 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[100px] -z-10"></div>
          <div className="w-14 h-14 bg-brand-navy rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-brand-navy/20">
            <div 
              className="w-7 h-7 bg-white"
              style={{ WebkitMaskImage: `url('/icons/ic_eye-outline.svg')`, WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center', maskImage: `url('/icons/ic_eye-outline.svg')`, maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center' }}
            />
          </div>
          <span className="text-eyebrow-lg block mb-6">{data.visionMission.visionTitle}</span>
          <h3 className="text-brand-navy mb-6 text-balance">{data.visionMission.visionText}</h3>
        </div>

        <div className="bg-gradient-to-br from-brand-navy to-brand-navy text-white p-10 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,38,60,0.25)] border border-slate-700 relative overflow-hidden transform transition-transform hover:-translate-y-2 duration-500">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          <div className="w-14 h-14 bg-brand-red rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-brand-red/30 relative z-10">
            <div 
              className="w-7 h-7 bg-white"
              style={{ WebkitMaskImage: `url('/icons/ic_bolt-outline.svg')`, WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center', maskImage: `url('/icons/ic_bolt-outline.svg')`, maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center' }}
            />
          </div>
          <span className="text-eyebrow-lg text-slate-400 block mb-6 relative z-10">{data.visionMission.missionTitle}</span>
          <ul className="space-y-5 relative z-10">
            {data.visionMission.missions.map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <span className="text-brand-red mt-1 drop-shadow-md text-xl">✦</span>
                <p className="text-slate-100 m-0">{item}</p>
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
    <div key="1" className="w-6 h-6 bg-brand-red" style={{ WebkitMaskImage: `url('/icons/ic_check-shield-outline.svg')`, WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center', maskImage: `url('/icons/ic_check-shield-outline.svg')`, maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center' }} />,
    <div key="2" className="w-6 h-6 bg-brand-red" style={{ WebkitMaskImage: `url('/icons/ic_star-outline.svg')`, WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center', maskImage: `url('/icons/ic_star-outline.svg')`, maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center' }} />,
    <div key="3" className="w-6 h-6 bg-brand-red" style={{ WebkitMaskImage: `url('/icons/ic_users-outline.svg')`, WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center', maskImage: `url('/icons/ic_users-outline.svg')`, maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center' }} />,
    <div key="4" className="w-6 h-6 bg-brand-red" style={{ WebkitMaskImage: `url('/icons/ic_trending-up.svg')`, WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center', maskImage: `url('/icons/ic_trending-up.svg')`, maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center' }} />
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="gradient-gold text-eyebrow-lg text-white px-5 py-2 rounded-full inline-block shadow-sm mb-6">{data.coreValues.eyebrow}</span>
          <h2 className="text-brand-navy mb-6">{data.coreValues.title}</h2>
          <p>{data.coreValues.description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.coreValues.values.map((item, idx) => (
            <div key={idx} className={`group bg-white p-8 md:p-10 rounded-[2rem] border border-slate-100 hover:border-blue-100 hover:shadow-[0_20px_40px_-15px_rgba(0,38,60,0.12)] transition-all duration-500 relative ${idx % 2 === 0 ? 'lg:translate-y-4' : 'lg:-translate-y-4'}`}>
              <div className="w-16 h-16 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-brand-red/5 transition-all duration-500">
                {icons[idx]}
              </div>
              <h4 className="mb-3 group-hover:text-brand-red transition-colors text-brand-navy">{item.title}</h4>
              <p className="text-teaser">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExecutiveProfilesSection({ data }) {
  const categories = data.teamCategories;
  const [modalLeader, setModalLeader] = useState(null);

  useEffect(() => {
    if (modalLeader) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [modalLeader]);

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-20 md:mb-24">
          <span className="gradient-gold text-eyebrow-lg text-white px-5 py-2 rounded-full inline-block shadow-sm mb-6">
            {data.executive.eyebrow}
          </span>
          <h2 className="text-brand-navy mb-6">{data.executive.title}</h2>
          <p className="max-w-2xl mx-auto">{data.executive.subtitle}</p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {categories.map((cat) => (
            <div key={cat.id} id={cat.id} className="scroll-mt-32">
              
              <div className="flex flex-col items-center justify-center gap-3 mb-12 md:mb-16">
                <h3 className="text-2xl md:text-[28px] font-extrabold text-brand-navy text-center capitalize tracking-wide">{cat.title}</h3>
                <div className="w-16 h-[5px] bg-brand-red rounded-full"></div>
              </div>

              <div className="flex flex-wrap justify-center gap-x-6 gap-y-12 md:gap-x-8 md:gap-y-16">
                {cat.members.map((member, mIdx) => (
                  <div 
                    key={mIdx} 
                    onClick={() => setModalLeader(member)} 
                    className="group cursor-pointer flex flex-col items-start text-left w-full sm:w-[calc(50%-1.5rem)] md:w-[calc(33.333%-2rem)] lg:w-[calc(25%-2rem)] max-w-[280px] md:max-w-[230px] lg:max-w-[260px] xl:max-w-[280px]"
                  >
                    <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100 mb-5 shadow-[0_10px_20px_-10px_rgba(0,38,60,0.15)] transition-all duration-500 group-hover:shadow-[0_20px_40px_-15px_rgba(0,38,60,0.3)] group-hover:-translate-y-2">
                      <Image 
                        src={member.image} 
                        alt={member.name} 
                        fill 
                        className="object-cover transition-transform duration-700 group-hover:scale-105" 
                        onError={(e) => { e.target.style.display = 'none'; }} 
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A4A] via-[#0B2A4A]/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-5 lg:p-6 text-white">
                        <div className="w-full flex items-center justify-between transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
                          <span className="font-bold text-[13px] tracking-wide">{data.executive.summaryHeader || 'Lihat Profil'}</span>
                          <svg className="w-5 h-5 transform -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <h4 className="text-[16px] md:text-[15.5px] lg:text-[18px] xl:text-[19px] font-extrabold text-brand-navy leading-snug transition-colors group-hover:text-brand-red pr-2">{member.name}</h4>
                    <p className="text-[11px] md:text-[11px] lg:text-[12px] xl:text-[13px] font-bold text-slate-500 mt-1.5 uppercase tracking-wide opacity-90">{member.role}</p>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* --- MODAL POP-UP RESPONSIF --- */}
      {modalLeader && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8 bg-[#0B2A4A]/80 backdrop-blur-sm transition-opacity">
          
          <div className="absolute inset-0" onClick={() => setModalLeader(null)}></div>
          
          <div className="relative w-full max-w-5xl animate-scale-in z-10">
            
            <button 
              onClick={() => setModalLeader(null)} 
              className="absolute -top-3 -right-3 md:-top-5 md:-right-5 w-10 h-10 md:w-12 md:h-12 bg-[#DC0017] border-[3px] md:border-4 border-white rounded-full flex items-center justify-center text-white hover:bg-red-700 hover:scale-105 z-50 transition-all shadow-xl"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            <div className="bg-white rounded-[1.5rem] md:rounded-[2rem] w-full max-h-[85vh] md:max-h-[80vh] lg:h-[600px] overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-white/20">
              
              <div className="lg:hidden pt-8 pb-4 px-6 bg-slate-50/50 border-b border-slate-100 flex flex-col items-center justify-center relative shrink-0">
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#DC0017]/[0.04] rounded-full pointer-events-none"></div>
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-white shadow-[0_10px_25px_-5px_rgba(0,0,0,0.15)] overflow-hidden bg-white z-10">
                  <Image 
                    src={modalLeader.image} 
                    alt={modalLeader.name} 
                    fill 
                    className="object-cover object-top" 
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
              </div>

              <div className="hidden lg:block lg:w-[45%] h-full relative shrink-0 bg-slate-100 border-r border-slate-100">
                <Image 
                  src={modalLeader.image} 
                  alt={modalLeader.name} 
                  fill 
                  className="object-cover object-top" 
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>

              <div className="w-full lg:w-[55%] p-6 md:p-10 lg:p-12 overflow-y-auto custom-scrollbar bg-white flex flex-col">
                <h3 className="text-xl sm:text-2xl md:text-[32px] font-extrabold text-brand-navy leading-tight pr-6">{modalLeader.name}</h3>
                <p className="text-[#DC0017] mt-1.5 md:mt-2 text-xs sm:text-sm md:text-[14.5px] font-bold uppercase tracking-widest mb-4 md:mb-6">{modalLeader.role}</p>
                
                <div className="w-12 h-1 bg-slate-200 rounded-full mb-4 md:mb-6 shrink-0"></div>
                
                <div className="space-y-4 text-slate-600 text-[13.5px] md:text-[15.5px] leading-relaxed text-justify pb-4">
                  {modalLeader.summary.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
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
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-eyebrow-lg block mb-6">{data.journey.eyebrow}</span>
          <h2 className="text-brand-navy mb-6 text-balance">{data.journey.title1} <br className="hidden sm:block" /> {data.journey.title2}</h2>
          <p className="max-w-2xl mx-auto">{data.journey.subtitle}</p>
        </div>

       <div className="flex flex-col gap-y-16">
         {Array.from({ length: Math.ceil(journeyTimeline.length / 3) }, (_, rowIdx) =>
           journeyTimeline.slice(rowIdx * 3, rowIdx * 3 + 3)
         ).map((row, rowIdx) => {
           const isFullRow = row.length === 3;
           return (
             <div key={rowIdx} className={`flex flex-wrap items-start gap-y-14 justify-center ${isFullRow ? 'lg:flex-nowrap lg:justify-between' : 'lg:gap-x-16'}`}>
               {row.map((item, idx) => (
                 <React.Fragment key={idx}>
                   <div className="group flex flex-col items-center w-72 px-2 shrink-0">
                     <div className="w-[120px] h-[48px] rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-[14px] mb-7 shadow-[0_15px_35px_-10px_rgba(0,38,60,0.5)] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:bg-brand-red group-hover:scale-105">
                       <span className="text-center leading-tight whitespace-nowrap tracking-wide">{item.year}</span>
                     </div>
                      <h4 className="mb-3 text-center text-brand-navy group-hover:text-brand-red transition-colors duration-500">{item.title}</h4>
                      <p className="text-teaser text-justify">{item.desc}</p>
                   </div>
                   {idx < row.length - 1 && (
                     <div className={`hidden lg:flex border-t-2 border-dashed border-slate-300 mt-6 shrink-0 ${isFullRow ? 'flex-1 mx-2 min-w-[2rem]' : 'w-16'}`} />
                   )}
                 </React.Fragment>
               ))}
             </div>
           );
         })}
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
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 md:mb-20 gap-6 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-eyebrow-lg block mb-6">{data.gallery.eyebrow}</span>
            <h2 className="text-white mb-6">{data.gallery.title}</h2>
            <p className="text-slate-300">{data.gallery.subtitle}</p>
          </div>
          <div className="flex gap-4 justify-center md:justify-end">
            <button onClick={prevGallery} className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-brand-red hover:border-brand-red transition-all shadow-lg">
              <div className="w-6 h-6 bg-current" style={{ transform: 'rotate(90deg)', WebkitMaskImage: `url('/icons/ic_arrow-short-down.svg')`, WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center', maskImage: `url('/icons/ic_arrow-short-down.svg')`, maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center', }} />
            </button>
            <button onClick={nextGallery} className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-brand-red hover:border-brand-red transition-all shadow-lg">
              <div className="w-6 h-6 bg-current" style={{ transform: 'rotate(-90deg)', WebkitMaskImage: `url('/icons/ic_arrow-short-down.svg')`, WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center', maskImage: `url('/icons/ic_arrow-short-down.svg')`, maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center', }} />
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="overflow-hidden"> 
            <div className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] gap-6" style={{ transform: `translateX(-${gallerySlide * (100 / galleryViews)}%)` }}>
              {gallerySliderData.map((slide) => (
                <div key={slide.id} className="w-full sm:w-[calc(50%-0.75rem)] md:w-[calc(33.333%-1rem)] shrink-0 aspect-[4/3] md:aspect-[5/4] relative rounded-[2rem] overflow-hidden group border border-slate-700/50 shadow-xl">
                  <Image src={slide.image} alt={slide.title} fill className="object-cover group-hover:scale-110 transition duration-700" onError={(e) => { e.target.style.display = 'none'; }} />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0B2A4A] to-slate-900 flex flex-col items-center justify-center -z-10"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6 md:p-8 opacity-90 group-hover:opacity-100 transition-opacity">
                    <h5 className="text-brand-red block mb-2">{data.gallery.badge}</h5>
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

export default function AboutUsPage() {
  const [mounted, setMounted] = useState(false);
  const locale = useLocale();
  const aboutData = getAboutData(locale);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; 

  return (
    <main className="bg-white overflow-hidden selection:bg-brand-red selection:text-white">
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