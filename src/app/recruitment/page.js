'use client';

import React from 'react';

// ==========================================
// DATA DUMMY LOWONGAN PEKERJAAN
// ==========================================
const jobOpenings = [
  {
    id: 1,
    title: "Senior HR Consultant",
    department: "Human Capital Solutions",
    location: "Jakarta, Indonesia",
    type: "Full-time",
    desc: "Lead strategic HR transformation projects, design competency frameworks, and provide expert mentoring to our enterprise clients."
  },
  {
    id: 2,
    title: "Industrial Relations Specialist",
    department: "Legal Advisory",
    location: "Jakarta, Indonesia",
    type: "Full-time",
    desc: "Provide expert counsel on labor law compliance, manage dispute resolutions, and draft collective labor agreements (PKB)."
  },
  {
    id: 3,
    title: "Talent Acquisition Associate",
    department: "Executive Search",
    location: "Jakarta, Indonesia",
    type: "Full-time",
    desc: "Drive end-to-end recruitment processes, conduct headhunting for executive roles, and ensure a seamless candidate experience."
  },
  {
    id: 4,
    title: "HSE Corporate Trainer",
    department: "Health & Safety",
    location: "Jakarta, Indonesia",
    type: "Contract / Project-based",
    desc: "Design and deliver impactful Health, Safety, and Environment (HSE) training programs for manufacturing and corporate clients."
  },
  {
    id: 5,
    title: "Digital Marketing Executive",
    department: "Marketing & Sales",
    location: "Jakarta, Indonesia",
    type: "Full-time",
    desc: "Manage social media campaigns, create engaging content, and drive lead generation for our HR Bootcamps and Corporate Events."
  },
  {
    id: 6,
    title: "Payroll Processing Officer",
    department: "Payroll & Outsourcing",
    location: "Jakarta, Indonesia",
    type: "Full-time",
    desc: "Ensure accurate and timely payroll execution, manage BPJS administration, and maintain full compliance with PPh 21 regulations."
  }
];

export default function RecruitmentPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] font-sans selection:bg-[#DC2626] selection:text-white">
      
      {/* ============================================================
          SECTION 1 — HERO AREA (DARK THEME)
          ============================================================ */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden bg-[#00263C]">
        {/* Dekorasi Background */}
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="absolute -right-32 -top-32 w-[600px] h-[600px] rounded-full bg-[#DC2626]/10 blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Teks Hero */}
            <div>
              <span className="inline-flex items-center rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] bg-white/10 text-white border border-white/20 mb-6">
                Careers at FHRI
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.1] mb-6">
                Build Your Future with <br className="hidden md:block" />
                <span className="text-[#DC2626]">First HR Indonesia</span>
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-lg">
                We are more than a consulting firm — we are a community of innovators united by a shared drive to grow, lead, and transform the HR landscape in Indonesia.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#open-positions" 
                  className="inline-flex items-center gap-2.5 bg-[#DC2626] hover:bg-[#B91C1C] text-white px-8 py-3.5 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-red-500/30 hover:-translate-y-0.5"
                >
                  View Open Positions
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Gambar Hero - EFEK GELAP DIHAPUS, GAMBAR NATURAL */}
            <div className="relative w-full h-[400px] lg:h-[500px]">
              <div className="absolute inset-4 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl z-10 bg-white">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                  alt="First HR Team Collaboration" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Badge Dekoratif */}
              <div className="absolute bottom-12 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 z-20 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#0B2A4A]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Hiring Now</p>
                  <p className="text-sm font-black text-[#00263C]">Multiple Roles</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 2 — LIFE AT FHRI (PERKS & CULTURE)
          ============================================================ */}
      <section className="py-20 px-6 md:px-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#DC2626] text-sm font-bold tracking-widest uppercase mb-2 block">Why Join Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#00263C]">More Than Just a Workplace</h2>
            <p className="mt-4 text-slate-500 text-lg">
              We invest heavily in our people because we believe that organizational excellence starts from within.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#0B2A4A] text-white rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              </div>
              <h3 className="text-xl font-bold text-[#00263C] mb-3">Continuous Learning</h3>
              <p className="text-slate-600 leading-relaxed text-sm">Access to premium HR training, certifications, and mentorship from industry veterans to accelerate your professional growth.</p>
            </div>
            <div className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#DC2626] text-white rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-[#00263C] mb-3">Impactful Work</h3>
              <p className="text-slate-600 leading-relaxed text-sm">Work on strategic projects that directly influence the organizational culture and business performance of top companies in Indonesia.</p>
            </div>
            <div className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#0B2A4A] text-white rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-[#00263C] mb-3">Collaborative Culture</h3>
              <p className="text-slate-600 leading-relaxed text-sm">Join a supportive, agile team where transparency, trust, and proactive problem-solving are celebrated daily.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3 — CURRENT OPENINGS (KARTU LOWONGAN)
          ============================================================ */}
      <section id="open-positions" className="py-24 px-6 md:px-12 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#00263C]">Current Openings</h2>
              <p className="mt-4 text-slate-500 text-lg">Discover your next career move with First HR Indonesia.</p>
            </div>
            <div className="text-sm font-semibold text-slate-500 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200">
              Showing {jobOpenings.length} positions
            </div>
          </div>

          {/* Grid Kartu Lowongan */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobOpenings.map((job) => (
              <div key={job.id} className="bg-white rounded-[1.5rem] p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-xl hover:border-blue-100 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group">
                
                {/* Department Badge */}
                <div className="mb-5">
                  <span className="inline-flex px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#0B2A4A] bg-[#0B2A4A]/10 rounded-md">
                    {job.department}
                  </span>
                </div>
                
                {/* Job Title & Desc */}
                <h3 className="text-xl font-bold text-[#00263C] mb-3 group-hover:text-[#DC2626] transition-colors">
                  {job.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                  {job.desc}
                </p>
                
                {/* Footer Card: Location, Type & Apply Btn */}
                <div className="pt-5 border-t border-slate-100 flex items-center justify-between mt-auto">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-medium text-slate-400 flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      {job.location}
                    </span>
                    <span className="text-xs font-semibold text-slate-600 flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      {job.type}
                    </span>
                  </div>
                  <a href="#apply-form" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-[#DC2626] group-hover:bg-[#DC2626] group-hover:text-white transition-colors duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4 — FORM PENDAFTARAN 
          ============================================================ */}
      <section id="apply-form" className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto bg-[#00263C] rounded-[2.5rem] p-8 md:p-14 shadow-2xl relative overflow-hidden">
          
          {/* Elemen Dekorasi Background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#DC2626]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 relative z-10">
            
            {/* Bagian Kiri: Teks */}
            <div className="flex flex-col justify-center">
              <span className="text-[#DC2626] text-sm font-bold tracking-widest uppercase mb-4">
                Ready to Apply?
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
                Submit Your <br/> Application
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-10">
                Tell us about your professional background and aspirations. Select the role you are applying for, and our recruitment team will get back to you shortly.
              </p>
              
              <div className="flex gap-12">
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">Office Location</p>
                  <p className="text-white font-medium">Jakarta, Indonesia</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">General Inquiry</p>
                  <p className="text-white font-medium">recruitment@firsthr.co.id</p>
                </div>
              </div>
            </div>

            {/* Bagian Kanan: Form */}
            <div className="bg-[#0B2A4A]/80 backdrop-blur-sm border border-white/10 rounded-3xl p-8 shadow-xl">
              <form className="space-y-5">
                {/* Full Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[11px] text-slate-300 font-semibold uppercase tracking-wider ml-1">Full Name *</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full bg-[#051C35] border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#DC2626] focus:ring-1 focus:ring-[#DC2626] transition-colors placeholder-slate-500"
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] text-slate-300 font-semibold uppercase tracking-wider ml-1">Email Address *</label>
                    <input 
                      type="email" 
                      placeholder="name@email.com" 
                      className="w-full bg-[#051C35] border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#DC2626] focus:ring-1 focus:ring-[#DC2626] transition-colors placeholder-slate-500"
                      required
                    />
                  </div>
                </div>

                {/* Position Dropdown & LinkedIn */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[11px] text-slate-300 font-semibold uppercase tracking-wider ml-1">Select Position *</label>
                    <select 
                      defaultValue=""
                      className="w-full bg-[#051C35] border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#DC2626] focus:ring-1 focus:ring-[#DC2626] transition-colors appearance-none cursor-pointer"
                      required
                    >
                      <option value="" disabled>Choose a role...</option>
                      {jobOpenings.map(job => (
                        <option key={job.id} value={job.title}>{job.title}</option>
                      ))}
                      <option value="other">Other (General Application)</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] text-slate-300 font-semibold uppercase tracking-wider ml-1">LinkedIn URL / Portfolio</label>
                    <input 
                      type="url" 
                      placeholder="https://linkedin.com/in/..." 
                      className="w-full bg-[#051C35] border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#DC2626] focus:ring-1 focus:ring-[#DC2626] transition-colors placeholder-slate-500"
                    />
                  </div>
                </div>

                {/* Cover Letter / Motivation */}
                <div className="space-y-1.5">
                  <label className="text-[11px] text-slate-300 font-semibold uppercase tracking-wider ml-1">Brief Cover Letter</label>
                  <textarea 
                    rows="4" 
                    placeholder="Tell us why you are a great fit for this role..." 
                    className="w-full bg-[#051C35] border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#DC2626] focus:ring-1 focus:ring-[#DC2626] transition-colors resize-none placeholder-slate-500"
                  ></textarea>
                </div>

                {/* Tombol Submit */}
                <button 
                  type="button" 
                  className="w-full bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold py-3.5 rounded-xl transition-colors mt-2 uppercase tracking-wide text-sm flex items-center justify-center gap-2"
                >
                  Submit Application
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
              </form>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
}