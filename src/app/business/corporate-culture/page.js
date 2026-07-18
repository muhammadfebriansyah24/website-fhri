'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// ============================================================
// SHARED UI PRIMITIVES (consistent with Institutional Editorial theme)
// ============================================================

function ModernEyebrow({ children }) {
  return (
    <span className="text-xs md:text-sm font-black uppercase tracking-[0.3em] text-[#DC2626]">
      {children}
    </span>
  );
}

function PremiumCTAButton({ href, children }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-4 bg-[#00263C] text-white pl-7 pr-3 py-3 rounded-full font-bold text-sm transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#DC2626] active:scale-[0.97] shadow-[0_20px_48px_-12px_rgba(0,38,60,0.15)] hover:shadow-[0_20px_48px_-12px_rgba(220,38,38,0.3)]"
    >
      {children}
      <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-[1px]">
        <svg className="w-4.5 h-4.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </Link>
  );
}

// ============================================================
// MAIN PAGE
// ============================================================
export default function CorporateCultureEvents() {
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    {
      quote: '"The Professional Work Ethic workshop reshaped how our teams show up every day. Accountability and time management are no longer just values on a poster — they show up in our numbers."',
      name: 'Anita Kusuma',
      role: 'Head of People, Bintang Logistics',
    },
    {
      quote: '"FHRI ran our annual town hall from concept to execution. Flawless coordination, and the energy in the room was the best we\'ve had in years."',
      name: 'Farhan Ramadhan',
      role: 'HR Director, Cipta Semesta Group',
    },
    {
      quote: '"Our leadership outbound program broke down silos that had built up for years. Teams came back communicating in a completely different way."',
      name: 'Sarah Tan',
      role: 'VP People & Culture, Meridian Finance',
    },
  ];

  const nextSlide = () => setActiveSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setActiveSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  return (
    <main className="min-h-screen font-sans bg-[#F8F9FA] text-[#00263C] selection:bg-[#DC2626] selection:text-white">

      {/* SECTION 1 — HERO (Full-bleed) */}
      <section className="relative min-h-[92vh] flex items-end bg-[#00263C] text-white overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2400&auto=format&fit=crop"
            alt="Corporate team building and culture workshop"
            className="absolute inset-0 w-full h-full object-cover grayscale-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#00263C] via-[#00263C]/70 to-[#00263C]/20" />
        </div>

        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 pb-16 md:pb-20 pt-32 relative z-10">
          <ModernEyebrow>Corporate Culture &amp; Events</ModernEyebrow>
          <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.03] tracking-tight max-w-4xl text-balance">
            Building a Work Culture That Performs
          </h1>
          <p className="mt-7 text-base md:text-lg text-slate-200 leading-relaxed max-w-xl font-medium">
            From professional ethics workshops to corporate events and outbound training, we help organizations turn culture into a measurable advantage — not just a set of values on a wall.
          </p>
          <div className="mt-10">
            <PremiumCTAButton href="#cta">Consult Our Experts</PremiumCTAButton>
          </div>
        </div>

        <div className="hidden md:flex absolute bottom-8 right-8 md:right-12 items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-300 z-10">
          Scroll Down
          <span className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center animate-bounce">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 5v14M6 13l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </section>

      {/* SECTION 2 — CORE SERVICES */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <ModernEyebrow>What We Deliver</ModernEyebrow>
          <h2 className="mt-6 text-3xl md:text-5xl lg:text-6xl font-black text-[#00263C] leading-[1.02] tracking-tight">
            Culture, Events &amp; Team Development
          </h2>
          <p className="mt-6 text-slate-500 text-base md:text-lg leading-relaxed">
            Three connected programs designed to strengthen how your people work, gather, and grow together.
          </p>
        </div>

        <div className="flex flex-col gap-16 md:gap-20">
          {[
            {
              n: '01',
              tag: 'Workshop',
              accent: '#DC2626',
              title: 'Professional Work Ethic',
              desc: 'A workshop that instills accountability, integrity, discipline, collaboration, and time management — anchored by a customer-centric standard of service excellence.',
              tags: ['Accountability', 'Integrity', 'Discipline', 'Collaboration', 'Time Management', 'Customer-Centric Service'],
              meta: [
                { label: 'Format', value: 'In-house or On-site' },
                { label: 'Duration', value: '1–2 Day Intensive' },
                { label: 'Best For', value: 'Frontline & Mid-Management' },
              ],
              img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop',
              rotate: '-rotate-2',
            },
            {
              n: '02',
              tag: 'Events',
              accent: '#00263C',
              title: 'Corporate Event Organizer',
              desc: 'End-to-end planning and execution of corporate gatherings — from theme design and vendor logistics to run-of-show production — for town halls and annual recognition events that strengthen identity and cohesion.',
              tags: ['Concept & Theme Design', 'Vendor & Logistics', 'Run-of-Show Production', 'On-site Coordination'],
              meta: [
                { label: 'Format', value: 'Full-Service or Day-Of' },
                { label: 'Scale', value: '50–2,000+ Attendees' },
                { label: 'Best For', value: 'HR & Corporate Comms Teams' },
              ],
              img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1400&auto=format&fit=crop',
              rotate: 'rotate-2',
            },
            {
              n: '03',
              tag: 'Team Building',
              accent: '#DC2626',
              title: 'Outbound Training',
              desc: 'Activity-based outdoor programs that build trust, teamwork, and leadership through direct, shared experience — from wilderness challenges to structured debrief sessions linking every activity back to real workplace behavior.',
              tags: ['Trust & Team Exercises', 'Leadership Simulations', 'Structured Debrief', 'Custom Venue Scouting'],
              meta: [
                { label: 'Format', value: '1–3 Day Program' },
                { label: 'Location', value: 'Nationwide Venues' },
                { label: 'Best For', value: 'Cross-Functional & Leadership' },
              ],
              img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1400&auto=format&fit=crop',
              rotate: '-rotate-2',
            },
          ].map((row, idx) => (
            <div
              key={row.n}
              className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-16`}
            >
              {/* Image — double-bezel with offset color panel behind (Z-axis depth) */}
              <div className="w-full md:w-5/12 shrink-0">
                <div className="relative group">
                  {/* Offset color panel peeking from behind */}
                  <div
                    className={`hidden sm:block absolute -inset-3 rounded-[2.5rem] ${row.rotate} transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:rotate-0`}
                    style={{ backgroundColor: row.accent, opacity: 0.14 }}
                  />
                  {/* Double-bezel frame */}
                  <div className="relative bg-white p-2.5 rounded-[2.5rem] shadow-[0_30px_80px_-25px_rgba(0,38,60,0.35)] border border-slate-100">
                    <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] bg-slate-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={row.img}
                        alt={row.title}
                        className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1200ms] ease-[cubic-bezier(0.32,0.72,0,1)]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#00263C]/70 via-transparent to-transparent" />
                      <span
                        className="absolute bottom-5 left-5 text-[10px] font-black uppercase tracking-widest text-white px-4 py-2 rounded-full backdrop-blur-md border border-white/20"
                        style={{ backgroundColor: `${row.accent}CC` }}
                      >
                        {String(idx + 1).padStart(2, '0')} · {row.tag}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Copy */}
              <div className="w-full md:w-7/12 relative">
                <span
                  className="text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full border"
                  style={{ color: row.accent, borderColor: `${row.accent}30`, backgroundColor: `${row.accent}0D` }}
                >
                  {row.tag}
                </span>
                <h3 className="mt-5 text-2xl md:text-3xl lg:text-4xl font-black text-[#00263C] leading-tight tracking-tight">
                  {row.title}
                </h3>
                <p className="mt-4 text-slate-500 text-sm md:text-base leading-relaxed max-w-xl">
                  {row.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {row.tags.map((t) => (
                    <span key={t} className="text-xs font-semibold text-[#00263C] bg-white border border-slate-200 shadow-[0_6px_16px_-6px_rgba(0,38,60,0.15)] px-3.5 py-1.5 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-x-8 gap-y-4 mt-8 pt-8 border-t border-slate-100">
                  {row.meta.map((m, mi) => (
                    <div key={m.label} className={mi > 0 ? 'pl-8 border-l border-slate-100' : ''}>
                      <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest">{m.label}</span>
                      <span className="block text-sm font-bold text-[#00263C] mt-1">{m.value}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="#cta"
                  className="group/link inline-flex items-center gap-2 mt-8 text-xs font-bold uppercase tracking-widest transition-all"
                  style={{ color: row.accent }}
                >
                  Request Program Brief
                  <span className="w-6 h-6 rounded-full bg-current/10 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover/link:translate-x-1" style={{ backgroundColor: `${row.accent}1A` }}>
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3 — PROCESS (Icon-in-circle steps) */}
      <section className="bg-[#F8F9FA] py-20 md:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16 md:mb-20">
            <ModernEyebrow>Our Approach</ModernEyebrow>
            <h2 className="mt-5 text-3xl md:text-5xl font-black text-[#00263C] leading-[1.02] tracking-tight">
              A Program Built Around Your Culture
            </h2>
            <p className="mt-6 text-slate-500 text-base md:text-lg leading-relaxed">
              Every engagement starts with your organization&apos;s reality, not a generic template — so the outcome actually sticks.
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-stretch">
            {[
              {
                n: '01',
                title: 'Culture Needs Assessment',
                text: 'We diagnose current work culture gaps through interviews, surveys, and stakeholder alignment sessions.',
                dark: true,
                rotate: 'md:-rotate-2',
              },
              {
                n: '02',
                title: 'Program Design',
                text: 'A tailored curriculum or event concept is built around your team\'s size, industry, and specific behavioral goals.',
                dark: false,
                rotate: 'md:rotate-2',
              },
              {
                n: '03',
                title: 'Facilitation & Execution',
                text: 'Our facilitators run the workshop, event, or outbound program on-site, with measurable outcomes tracked post-engagement.',
                dark: true,
                rotate: 'md:-rotate-2',
              },
            ].map((step, idx) => (
              <div
                key={step.n}
                className={`group relative w-full md:w-1/3 ${idx > 0 ? 'md:-ml-8' : ''} mb-6 md:mb-0`}
                style={{ zIndex: idx + 1 }}
              >
                <div
                  className={`relative h-full rounded-[2rem] p-8 md:p-9 pt-10 shadow-[0_30px_60px_-20px_rgba(0,38,60,0.35)] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${step.rotate} group-hover:rotate-0 group-hover:-translate-y-3 group-hover:shadow-[0_40px_80px_-20px_rgba(0,38,60,0.45)] ${
                    step.dark ? 'bg-[#00263C] text-white' : 'bg-white text-[#00263C] border border-slate-100'
                  }`}
                >
                  {/* Watermark number */}
                  <span
                    className={`absolute top-4 right-6 text-8xl font-black leading-none select-none pointer-events-none ${
                      step.dark ? 'text-white/[0.06]' : 'text-[#00263C]/[0.05]'
                    }`}
                  >
                    {step.n}
                  </span>

                  <div className="relative z-10">
                    <span className={`inline-block w-8 h-1 rounded-full mb-6 ${step.dark ? 'bg-[#DC2626]' : 'bg-[#DC2626]'}`} />
                    <h3 className="text-xl font-extrabold leading-snug">{step.title}</h3>
                    <p className={`text-sm leading-relaxed mt-4 ${step.dark ? 'text-slate-300' : 'text-slate-500'}`}>
                      {step.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — TESTIMONIAL (Elevated Card Slider) */}
      <section className="bg-[#F8F9FA] py-20 md:py-28 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_40px_100px_-30px_rgba(0,38,60,0.15)] p-10 md:p-16 relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-48 h-48 rounded-full bg-[#DC2626]/5 blur-[60px] pointer-events-none" />

            <svg className="w-9 h-9 text-[#DC2626] relative z-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>

            <div className="overflow-hidden mt-8 relative z-10">
              <div
                className="flex transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {testimonials.map((testi, idx) => (
                  <div key={idx} className="w-full shrink-0">
                    <p className="text-xl md:text-2xl lg:text-3xl font-bold text-[#00263C] leading-tight tracking-tight text-balance">
                      {testi.quote}
                    </p>
                    <div className="mt-8 flex items-center gap-4">
                      <div className="w-11 h-11 rounded-full bg-[#00263C] text-white flex items-center justify-center font-black text-sm shrink-0">
                        {testi.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-[#00263C] font-extrabold text-sm">{testi.name}</h4>
                        <p className="text-slate-400 text-xs font-semibold mt-0.5">{testi.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between mt-10 pt-8 border-t border-slate-100 relative z-10">
              <div className="flex items-center gap-3">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    className={`h-1.5 rounded-full transition-all duration-500 ease-out cursor-pointer ${
                      activeSlide === idx ? 'w-8 bg-[#DC2626]' : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full border border-slate-200 hover:border-[#00263C] flex items-center justify-center text-[#00263C] transition-colors cursor-pointer"
                  aria-label="Previous Slide"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full border border-slate-200 hover:border-[#00263C] flex items-center justify-center text-[#00263C] transition-colors cursor-pointer"
                  aria-label="Next Slide"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — CALL TO ACTION */}
      <section id="cta" className="py-28 md:py-40 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row rounded-[2.5rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,38,60,0.15)] bg-[#00263C] text-white">
            
            {/* Left Side: Editorial & Detail */}
            <div className="lg:w-1/2 p-10 md:p-16 lg:p-20 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -left-16 -top-16 w-80 h-80 rounded-full bg-[#DC2626]/10 blur-[90px] pointer-events-none" />
              
              <div>
                <ModernEyebrow>Strategic Partnering</ModernEyebrow>
                <h2 className="text-3xl md:text-5xl font-black text-white mt-8 leading-tight tracking-tight">
                  Discuss Your <br />
                  Hiring Needs
                </h2>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed mt-6">
                  Tell us about the leadership profiles you need. Our team of executive search professionals will map the industry and deliver exceptional candidates matching your specific cultural and strategic goals.
                </p>
              </div>

              <div className="mt-12 flex items-center gap-6">
                <div>
                  <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest">Office Location</span>
                  <span className="block text-sm font-semibold text-white mt-1">Jakarta, Indonesia</span>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div>
                  <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest">Email Inquiry</span>
                  <span className="block text-sm font-semibold text-white mt-1">info@firsthr.co.id</span>
                </div>
              </div>
            </div>

            {/* Right Side: Form (Double-Bezel concentric design inside the dark section) */}
            <div className="lg:w-1/2 p-8 md:p-12 lg:p-16 bg-[#001E2F]">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
                <h3 className="text-lg font-bold text-white mb-6">Schedule a Talent Consultation</h3>
                
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Brief submitted successfully. Our lead consultant will connect with you via email."); }}>
                  <div>
                    <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Business Email *</label>
                    <input required type="email" placeholder="name@company.com" className="w-full bg-white/5 border border-white/10 text-white placeholder:text-slate-500 rounded-lg px-3.5 py-2.5 text-xs md:text-sm focus:outline-none focus:border-[#DC2626] transition-colors" />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Company Name *</label>
                      <input required type="text" placeholder="Company Ltd" className="w-full bg-white/5 border border-white/10 text-white placeholder:text-slate-500 rounded-lg px-3.5 py-2.5 text-xs md:text-sm focus:outline-none focus:border-[#DC2626] transition-colors" />
                    </div>
                    <div>
                      <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Target Position *</label>
                      <input required type="text" placeholder="e.g. VP of Operations" className="w-full bg-white/5 border border-white/10 text-white placeholder:text-slate-500 rounded-lg px-3.5 py-2.5 text-xs md:text-sm focus:outline-none focus:border-[#DC2626] transition-colors" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Brief description of the role</label>
                    <textarea rows="3" placeholder="Core challenges and requirements..." className="w-full bg-white/5 border border-white/10 text-white placeholder:text-slate-500 rounded-lg px-3.5 py-2.5 text-xs md:text-sm focus:outline-none focus:border-[#DC2626] transition-colors resize-none" />
                  </div>

                  <button type="submit" className="w-full bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold text-xs uppercase tracking-widest py-3.5 rounded-lg transition-colors duration-300 mt-2">
                    Submit Search Brief
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
