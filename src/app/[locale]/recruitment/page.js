'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { getRecruitmentData } from '@/components/recruitmentData';

export default function RecruitmentPage() {
  const locale = useLocale();
  const data = getRecruitmentData(locale);
  const jobOpenings = data.jobOpenings;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: '',
    linkedin: '',
    coverLetter: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Job Application: ${formData.position} - ${formData.name}`);
    const body = encodeURIComponent(
      `Dear FHRI Recruitment Team,\n\n` +
      `I would like to apply for the ${formData.position} position at First HR Indonesia.\n\n` +
      `Here are my details:\n` +
      `- Full Name: ${formData.name}\n` +
      `- Email Address: ${formData.email}\n` +
      `- LinkedIn / Portfolio: ${formData.linkedin || 'Not provided'}\n\n` +
      `--- Cover Letter / Motivation ---\n` +
      `${formData.coverLetter}\n\n` +
      `Best regards,\n${formData.name}`
    );

    window.location.href = `mailto:info@firsthrindonesia.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="min-h-screen bg-white selection:bg-brand-red selection:text-white">
      
      {/* SECTION 1 — HERO AREA (DARK THEME) */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-brand-navy text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/recruitment-hero.jpg"
            alt="Job interview at First HR Indonesia"
            fill
            priority
            unoptimized={process.env.NODE_ENV === 'development'}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-brand-navy/75" />
        </div>

        <div className="max-w-3xl mx-auto text-center relative z-10 px-6 md:px-12">
          <span className="text-eyebrow-lg block mb-6 drop-shadow-md">
            {data.hero.eyebrow}
          </span>

          <h1 className="text-white text-balance mb-6">
            {data.hero.title1} <br className="hidden md:block" />
            <span className="text-gradient-red text-transparent bg-clip-text">{data.hero.title2}</span>
          </h1>

          <p className="text-slate-300 max-w-xl mx-auto mb-10">
            {data.hero.description}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="#open-positions" className="inline-flex items-center justify-center gap-3 bg-brand-red hover:bg-red-700 text-white px-8 py-3.5 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 shadow-[0_10px_25px_rgba(220,38,38,0.3)] hover:-translate-y-1">
              {data.hero.viewPositions}
            
              <div 
                className="w-4 h-4 bg-white rotate-90 transition-transform"
                style={{
                  WebkitMaskImage: `url('/icons/ic_arrow-right.svg')`,
                  WebkitMaskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center',
                  maskImage: `url('/icons/ic_arrow-right.svg')`,
                  maskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'center',
                }}
              />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2 — LIFE AT FHRI (PERKS & CULTURE) */}
      <section className="py-24 px-6 md:px-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-eyebrow-lg block mb-6">
              {data.perks.eyebrow}
            </span>
            <h2 className="text-brand-navy mb-6">
              {data.perks.title}
            </h2>
            <p>
              {data.perks.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {data.perks.cards.map((card, idx) => (
              <div key={idx} className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow">
                <div className={`w-14 h-14 ${idx === 1 ? 'bg-brand-red' : 'bg-brand-navy'} rounded-2xl flex items-center justify-center mb-6`}>
                  
                  {/* Ikon 1: Book Outline */}
                  {idx === 0 && (
                    <div 
                      className="w-7 h-7 bg-white"
                      style={{
                        WebkitMaskImage: `url('/icons/ic_book-outline.svg')`,
                        WebkitMaskSize: 'contain',
                        WebkitMaskRepeat: 'no-repeat',
                        WebkitMaskPosition: 'center',
                        maskImage: `url('/icons/ic_book-outline.svg')`,
                        maskSize: 'contain',
                        maskRepeat: 'no-repeat',
                        maskPosition: 'center',
                      }}
                    />
                  )}

                  {/* Ikon 2: Briefcase Outline */}
                  {idx === 1 && (
                    <div 
                      className="w-7 h-7 bg-white"
                      style={{
                        WebkitMaskImage: `url('/icons/ic_briefcase-outline.svg')`,
                        WebkitMaskSize: 'contain',
                        WebkitMaskRepeat: 'no-repeat',
                        WebkitMaskPosition: 'center',
                        maskImage: `url('/icons/ic_briefcase-outline.svg')`,
                        maskSize: 'contain',
                        maskRepeat: 'no-repeat',
                        maskPosition: 'center',
                      }}
                    />
                  )}

                  {/* Ikon 3: User Group Outline */}
                  {idx === 2 && (
                    <div 
                      className="w-7 h-7 bg-white"
                      style={{
                        WebkitMaskImage: `url('/icons/ic_user-group-outline.svg')`,
                        WebkitMaskSize: 'contain',
                        WebkitMaskRepeat: 'no-repeat',
                        WebkitMaskPosition: 'center',
                        maskImage: `url('/icons/ic_user-group-outline.svg')`,
                        maskSize: 'contain',
                        maskRepeat: 'no-repeat',
                        maskPosition: 'center',
                      }}
                    />
                  )}
                  
                </div>
                <h4 className="mb-3 text-brand-navy">{card.title}</h4>
                <p className="text-teaser">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — CURRENT OPENINGS */}
      <section id="open-positions" className="py-24 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-eyebrow-lg block mb-6">
                {data.jobsSection.eyebrow}
              </span>
              <h2 className="text-brand-navy mb-6">
                {data.jobsSection.title}
              </h2>
              <p>
                {data.jobsSection.subtitle}
              </p>
            </div>
            <div className="text-xs font-bold uppercase tracking-widest text-brand-navy bg-white px-6 py-3 rounded-full shadow-sm border border-slate-200">
              {data.jobsSection.showingText} <span className="text-brand-red">{jobOpenings.length}</span> {data.jobsSection.positionsText}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobOpenings.map((job) => (
              <div key={job.id} className="bg-white rounded-[1.5rem] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-xl hover:border-slate-200/60 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group">
                <div className="mb-5">
                  <h6 className="inline-flex px-3 py-1.5 text-brand-navy bg-brand-navy/5 rounded-md">
                    {job.department}
                  </h6>
                </div>
                
                <h4 className="mb-3 text-brand-navy group-hover:text-brand-red transition-colors">
                  {job.title}
                </h4>
                <p className="text-teaser mb-8 flex-grow">
                  {job.desc}
                </p>
                
                <div className="pt-6 border-t border-slate-100 flex items-center justify-between mt-auto">
                  <div className="flex flex-col gap-1.5">

                    <span className="text-sm font-semibold text-slate-400 flex items-center gap-1.5">
                      {/* Ikon Location */}
                      <div 
                        className="w-4 h-4 bg-current"
                        style={{
                          WebkitMaskImage: `url('/icons/ic_location-outline.svg')`,
                          WebkitMaskSize: 'contain',
                          WebkitMaskRepeat: 'no-repeat',
                          WebkitMaskPosition: 'center',
                          maskImage: `url('/icons/ic_location-outline.svg')`,
                          maskSize: 'contain',
                          maskRepeat: 'no-repeat',
                          maskPosition: 'center',
                        }}
                      />
                      {job.location}
                    </span>

                    <span className="text-sm font-bold text-slate-600 flex items-center gap-1.5">
                      {/* Ikon Clock */}
                      <div 
                        className="w-4 h-4 bg-current"
                        style={{
                          WebkitMaskImage: `url('/icons/ic_clock-outline.svg')`,
                          WebkitMaskSize: 'contain',
                          WebkitMaskRepeat: 'no-repeat',
                          WebkitMaskPosition: 'center',
                          maskImage: `url('/icons/ic_clock-outline.svg')`,
                          maskSize: 'contain',
                          maskRepeat: 'no-repeat',
                          maskPosition: 'center',
                        }}
                      />
                      {job.type}
                    </span>

                  </div>
                  <a href="#apply-form" className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-brand-red border border-slate-200/60 hover:bg-brand-red hover:text-white hover:border-brand-red transition-all duration-300">
                    {/* Ikon Arrow Right */}
                    <div 
                      className="w-5 h-5 bg-current transition-colors duration-300"
                      style={{
                        WebkitMaskImage: `url('/icons/ic_arrow-right.svg')`,
                        WebkitMaskSize: 'contain',
                        WebkitMaskRepeat: 'no-repeat',
                        WebkitMaskPosition: 'center',
                        maskImage: `url('/icons/ic_arrow-right.svg')`,
                        maskSize: 'contain',
                        maskRepeat: 'no-repeat',
                        maskPosition: 'center',
                      }}
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — APPLICATION FORM */}
      <section id="apply-form" className="py-24 px-6 md:px-12 bg-white pb-32">
        <div className="max-w-6xl mx-auto bg-brand-navy rounded-[2.5rem] md:rounded-[3.5rem] p-6 md:p-14 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-red/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 relative z-10 items-center">
            <div className="flex flex-col justify-center">
              <span className="text-eyebrow-lg block mb-6">
                {data.form.eyebrow}
              </span>
              <h2 className="text-white mb-6">
                {data.form.title}
              </h2>
              <p className="text-slate-300 mb-10">
                {data.form.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
                <div>
                  <h6 className="text-slate-400 mb-2">{data.form.officeLocation}</h6>
                  <p className="text-white">{data.form.officeLocationVal}</p>
                </div>
                <div>
                  <h6 className="text-slate-400 mb-2">{data.form.generalInquiry}</h6>
                  <p className="text-white">recruitment@firsthrindonesia.com</p>
                </div>
              </div>
            </div>

            <div className="bg-[#0B2A4A]/80 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="ml-1 block"><h6 className="text-slate-300">{data.form.nameLabel}</h6></label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={data.form.namePlaceholder} 
                      className="w-full bg-[#051C35] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-colors placeholder-slate-500"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="ml-1 block"><h6 className="text-slate-300">{data.form.emailLabel}</h6></label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={data.form.emailPlaceholder} 
                      className="w-full bg-[#051C35] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-colors placeholder-slate-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="ml-1 block"><h6 className="text-slate-300">{data.form.posLabel}</h6></label>
                    <select 
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      className="w-full bg-[#051C35] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-slate-300 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-colors appearance-none cursor-pointer"
                      required
                    >
                      <option value="" disabled>{data.form.posPlaceholder}</option>
                      {jobOpenings.map(job => (
                        <option key={job.id} value={job.title}>{job.title}</option>
                      ))}
                      <option value="General Application">{data.jobsSection.generalOption}</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="ml-1 block"><h6 className="text-slate-300">{data.form.linkedinLabel}</h6></label>
                    <input 
                      type="url" 
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleChange}
                      placeholder="https://linkedin.com/in/..." 
                      className="w-full bg-[#051C35] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-colors placeholder-slate-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="ml-1 block"><h6 className="text-slate-300">{data.form.coverLabel}</h6></label>
                  <textarea 
                    rows={4} 
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleChange}
                    placeholder={data.form.coverPlaceholder} 
                    className="w-full bg-[#051C35] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-colors resize-none placeholder-slate-500"
                  ></textarea>
                </div>

                <button 
                type="submit"
                className="w-full bg-brand-red hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-all shadow-[0_5px_15px_rgba(220,38,38,0.3)] hover:-translate-y-0.5 mt-4 uppercase tracking-widest text-sm flex items-center justify-center gap-3"
              >
                {data.form.submitBtn}
                
                <div 
                  className="w-5 h-5 bg-current"
                  style={{
                    WebkitMaskImage: `url('/icons/ic_arrow-right.svg')`,
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskImage: `url('/icons/ic_arrow-right.svg')`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                  }}
                />
              </button>

              </form>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}