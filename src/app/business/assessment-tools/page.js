'use client'; 

import React, { useState } from 'react';

export default function AssessmentToolsPage() {
  // --- STATE FOR INTERACTIVE TABS (SECTION 2) ---
  const [activeTab, setActiveTab] = useState(0);

  // --- ASSESSMENT TOOLS CONTENT DATA ---
  const assessmentData = [
    {
      id: 'skill',
      title: 'Skill & Performance Appraisal',
      shortDesc: 'Evaluate technical readiness and work target achievements with measurable metrics.',
      focus: 'Measuring technical competency gaps & Key Performance Indicators (KPI) achievements.',
      methodology: 'Functional tests, practical simulations, and industry-specific case studies.',
      output: 'Quantitative scores of employee technical readiness and performance matrices.',
      // Gambar profesional perkantoran Asia yang sedang melakukan evaluasi/analisis kinerja
      image: 'https://images.unsplash.com/photo-1701980889802-55ff39e2e973?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: '360',
      title: '360-Degree Feedback',
      shortDesc: 'Gain a comprehensive view from the entire professional interaction structure.',
      focus: 'Evaluating collaboration effectiveness, communication styles, and leadership.',
      methodology: 'Calibrated anonymous questionnaires from superiors, peers, and subordinates.',
      output: 'Interpersonal blind spot mapping and collaboration effectiveness reports.',
      // Gambar tim profesional perkantoran Asia dalam sesi diskusi/feedback meeting
      image: 'https://images.unsplash.com/photo-1530099486328-e021101a494a?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'potential',
      title: 'Potential & Personality',
      shortDesc: 'Map the psychological DNA of your employees for future succession readiness.',
      focus: 'Succession readiness, learning agility, and working styles.',
      methodology: 'Psychometric tests, personality inventories, and cultural fit evaluations.',
      output: 'Comprehensive psychological profiles and precise career path recommendations.',
      // Gambar potret profesional perkantoran Asia untuk asesmen potensi
      image: 'https://images.unsplash.com/photo-1581065178047-8ee15951ede6?auto=format&fit=crop&w=800&q=80',
    }
  ];

  return (
    <main className="min-h-screen bg-[#FFFFFF]" style={{ fontFamily: "'Poppins', sans-serif" }}>
      
      {/* =========================================
          SECTION 1: HERO SECTION
          ========================================= */}
      <section className="relative bg-[#00263C] pt-16 pb-20 md:pt-24 md:pb-28 px-6 md:px-12 overflow-hidden min-h-[70vh] flex items-center">
        <div className="max-w-6xl mx-auto relative z-10 grid lg:grid-cols-2 gap-14 items-center w-full">
            
            {/* LEFT COLUMN: Copywriting */}
            <div className="flex flex-col justify-center relative z-10">
              <div className="mb-6">
                <span className="inline-flex items-center rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] bg-white/10 text-white border border-white/25">
                  Assessment Tools
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] text-balance mb-6">
                Measure Capabilities, <br className="hidden md:block" />
                Eliminate Assumptions in Your <span className="text-[#C92A2A]">HR Decisions</span>
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed max-w-lg mb-10">
                Bring precision to talent development. Objectively evaluate leadership potential, technical capabilities, and cultural fit through industry-standard assessment tools.
              </p>
              
              <div className="mt-9">
            <button
              type="button"
              className="group inline-flex items-center gap-2.5 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold text-xs md:text-sm uppercase tracking-widest px-7 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-[#DC2626]/30"
            >
              Consult Our Experts
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
            
            {/* RIGHT COLUMN: Visual Mockup */}
            <div className="relative w-full h-full min-h-[400px] lg:min-h-[550px] flex items-center justify-center mt-10 lg:mt-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-tr from-[#C92A2A]/30 to-white/5 rounded-[3rem] rotate-3 -z-10 blur-sm"></div>
              <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-[0_20px_60px_-12px_rgba(0,0,0,0.5)] overflow-hidden transform hover:-translate-y-2 transition-transform duration-500">
                <div className="bg-gray-100 p-3 flex items-center gap-2 border-b border-gray-200">
                  <div className="flex gap-1.5 ml-1">
                    <div className="w-3 h-3 rounded-full bg-[#C92A2A]"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="mx-auto text-[#00263C]/60 text-[10px] font-bold tracking-widest uppercase pr-6">
                    Assessment Analytics
                  </div>
                </div>
                <div className="p-1 bg-white aspect-[4/3] relative">
                  <img 
                    src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=1000&q=80" 
                    alt="Data Analytics Dashboard" 
                    className="absolute inset-0 w-full h-full object-cover opacity-90 rounded-b-xl" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-4 z-10">
                     <div className="w-12 h-12 bg-[#00263C]/5 rounded-full flex items-center justify-center shrink-0">
                       <svg className="w-6 h-6 text-[#C92A2A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                     </div>
                     <div>
                       <h4 className="text-sm font-extrabold text-[#00263C] mb-0.5">Leadership Potential</h4>
                       <p className="text-xs text-slate-500 font-medium">Candidate achieved a 92% score on execution strategy.</p>
                     </div>
                  </div>
                </div>
              </div>
            </div>

        </div>
      </section>

      {/* =========================================
          SECTION 2: CORE ASSESSMENT (INTERACTIVE TABS) 
          ========================================= */}
      <section className="bg-white py-24 md:py-32 px-6 md:px-12 relative border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] bg-[#C92A2A]/10 text-[#C92A2A] mb-5">
              Core Portfolio
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#00263C] leading-tight mb-6">
              Data-Driven Assessment Tools
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              We use a multidimensional approach to measure what truly impacts the performance and growth of your organization.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
            {assessmentData.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-4 rounded-xl font-bold text-sm md:text-base transition-all duration-300 ease-in-out border-2 cursor-pointer ${
                  activeTab === index 
                    ? 'bg-[#00263C] text-white border-[#00263C] shadow-lg shadow-[#00263C]/20 scale-105' 
                    : 'bg-white text-slate-500 border-gray-200 hover:border-[#C92A2A]/50 hover:text-[#00263C]'
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              
              <div className="space-y-8 animate-fadeIn">
                <div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-[#00263C] mb-4">
                    {assessmentData[activeTab].title}
                  </h3>
                  <p className="text-slate-500 text-lg leading-relaxed">
                    {assessmentData[activeTab].shortDesc}
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#C92A2A] flex items-center justify-center mt-0.5">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M20 6L9 17l-5-5"></path></svg>
                    </span>
                    <div>
                      <h4 className="font-bold text-[#00263C] text-[15px] mb-1">Evaluation Focus</h4>
                      <p className="text-[13px] text-slate-500 leading-relaxed">{assessmentData[activeTab].focus}</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#C92A2A] flex items-center justify-center mt-0.5">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M20 6L9 17l-5-5"></path></svg>
                    </span>
                    <div>
                      <h4 className="font-bold text-[#00263C] text-[15px] mb-1">Methodology</h4>
                      <p className="text-[13px] text-slate-500 leading-relaxed">{assessmentData[activeTab].methodology}</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#C92A2A] flex items-center justify-center mt-0.5">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M20 6L9 17l-5-5"></path></svg>
                    </span>
                    <div>
                      <h4 className="font-bold text-[#00263C] text-[15px] mb-1">Final Output</h4>
                      <p className="text-[13px] text-slate-500 leading-relaxed">{assessmentData[activeTab].output}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] bg-slate-50 ring-1 ring-slate-100 p-2 group">
                <div className="relative h-72 md:h-96 rounded-[calc(2rem-0.5rem)] overflow-hidden">
                  <div className="absolute inset-0 bg-[#00263C]/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img 
                    src={assessmentData[activeTab].image} 
                    alt={assessmentData[activeTab].title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 3: IDEAL USE CASES (IMPLEMENTASI) 
          ========================================= */}
      <section className="bg-[#00263C] py-24 md:py-32 px-6 md:px-12 relative">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] bg-white/10 text-white border border-white/20 mb-5">
              Implementation Context
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
              Strategic Implementation Scenarios
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              Our assessment tools are designed to support crucial decisions throughout the HR management lifecycle in your company.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <article className="group rounded-[1.75rem] bg-white p-7 md:p-9 shadow-lg hover:shadow-[0_30px_60px_-20px_rgba(201,42,42,0.18)] transition-all duration-300 hover:-translate-y-1.5">
              <div className="w-12 h-12 rounded-xl bg-[#00263C] group-hover:bg-[#C92A2A] flex items-center justify-center mb-6 transition-colors duration-300">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
              </div>
              <h3 className="font-bold text-[#00263C] text-lg leading-snug mb-3 transition-colors group-hover:text-[#C92A2A]">Promotion & Succession</h3>
              <p className="text-[13.5px] text-slate-500 leading-relaxed">Objectively identify future leaders and prepare top talent to fill key organizational positions.</p>
            </article>

            <article className="group rounded-[1.75rem] bg-white p-7 md:p-9 shadow-lg hover:shadow-[0_30px_60px_-20px_rgba(201,42,42,0.18)] transition-all duration-300 hover:-translate-y-1.5">
              <div className="w-12 h-12 rounded-xl bg-[#00263C] group-hover:bg-[#C92A2A] flex items-center justify-center mb-6 transition-colors duration-300">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
              </div>
              <h3 className="font-bold text-[#00263C] text-lg leading-snug mb-3 transition-colors group-hover:text-[#C92A2A]">Restructuring</h3>
              <p className="text-[13.5px] text-slate-500 leading-relaxed">Remap talent and capabilities during mergers, acquisitions, or corporate operational efficiency efforts.</p>
            </article>

            <article className="group rounded-[1.75rem] bg-white p-7 md:p-9 shadow-lg hover:shadow-[0_30px_60px_-20px_rgba(201,42,42,0.18)] transition-all duration-300 hover:-translate-y-1.5">
              <div className="w-12 h-12 rounded-xl bg-[#00263C] group-hover:bg-[#C92A2A] flex items-center justify-center mb-6 transition-colors duration-300">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              <h3 className="font-bold text-[#00263C] text-lg leading-snug mb-3 transition-colors group-hover:text-[#C92A2A]">Training Needs (TNA)</h3>
              <p className="text-[13.5px] text-slate-500 leading-relaxed">Precisely discover skill gaps to design effective training and development programs.</p>
            </article>

            <article className="group rounded-[1.75rem] bg-white p-7 md:p-9 shadow-lg hover:shadow-[0_30px_60px_-20px_rgba(201,42,42,0.18)] transition-all duration-300 hover:-translate-y-1.5">
              <div className="w-12 h-12 rounded-xl bg-[#00263C] group-hover:bg-[#C92A2A] flex items-center justify-center mb-6 transition-colors duration-300">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
              </div>
              <h3 className="font-bold text-[#00263C] text-lg leading-snug mb-3 transition-colors group-hover:text-[#C92A2A]">Performance Eval.</h3>
              <p className="text-[13.5px] text-slate-500 leading-relaxed">Provide valid and objective supporting data for compensation decisions, annual bonuses, and retention.</p>
            </article>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 4: METHODOLOGY & USER FLOW 
          ========================================= */}
      <section className="bg-white py-24 md:py-32 px-6 md:px-12 relative">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
            <span className="inline-flex items-center rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] bg-[#C92A2A]/10 text-[#C92A2A] mb-5">
              Assessment Methodology
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#00263C] leading-tight mb-6">
              Structured Process, Measurable Results
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              We ensure every assessment stage runs transparently, efficiently, and provides data that is truly relevant to your business objectives.
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-[27px] md:left-[39px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-[#C92A2A] via-[#C92A2A]/40 to-transparent"></div>

            <div className="space-y-12 md:space-y-16">
              
              <div className="relative pl-16 md:pl-24 group">
                <div className="absolute left-4 md:left-6 top-1 w-10 h-10 bg-white border-4 border-[#C92A2A] rounded-full flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-[#C92A2A] transition-all duration-300 z-10">
                   <span className="text-[#00263C] group-hover:text-white font-bold text-sm transition-colors">1</span>
                </div>
                
                <div className="bg-white p-7 md:p-9 rounded-[1.75rem] border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] group-hover:shadow-[0_10px_40px_-10px_rgba(0,38,60,0.1)] transition-all duration-300 relative">
                  <div className="absolute top-6 -left-3 w-3 h-3 bg-white border-b border-l border-slate-100 rotate-45 hidden md:block"></div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#00263C] mb-3">Discovery & Alignment</h3>
                  <p className="text-[14px] md:text-[15px] text-slate-500 leading-relaxed">
                    In-depth discussion sessions with stakeholders to determine competency indicators, success criteria, and success metrics aligned with your company's culture and strategic goals.
                  </p>
                </div>
              </div>

              <div className="relative pl-16 md:pl-24 group">
                <div className="absolute left-4 md:left-6 top-1 w-10 h-10 bg-white border-4 border-[#C92A2A] rounded-full flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-[#C92A2A] transition-all duration-300 z-10">
                   <span className="text-[#00263C] group-hover:text-white font-bold text-sm transition-colors">2</span>
                </div>
                
                <div className="bg-white p-7 md:p-9 rounded-[1.75rem] border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] group-hover:shadow-[0_10px_40px_-10px_rgba(0,38,60,0.1)] transition-all duration-300 relative">
                  <div className="absolute top-6 -left-3 w-3 h-3 bg-white border-b border-l border-slate-100 rotate-45 hidden md:block"></div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#00263C] mb-3">Secure Deployment</h3>
                  <p className="text-[14px] md:text-[15px] text-slate-500 leading-relaxed">
                    Distribution of test tools and questionnaires to all participants through a secure digital platform, minimizing technical issues, and equipped with clear instructions.
                  </p>
                </div>
              </div>

              <div className="relative pl-16 md:pl-24 group">
                <div className="absolute left-4 md:left-6 top-1 w-10 h-10 bg-white border-4 border-[#C92A2A] rounded-full flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-[#C92A2A] transition-all duration-300 z-10">
                   <span className="text-[#00263C] group-hover:text-white font-bold text-sm transition-colors">3</span>
                </div>
                
                <div className="bg-white p-7 md:p-9 rounded-[1.75rem] border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] group-hover:shadow-[0_10px_40px_-10px_rgba(0,38,60,0.1)] transition-all duration-300 relative">
                  <div className="absolute top-6 -left-3 w-3 h-3 bg-white border-b border-l border-slate-100 rotate-45 hidden md:block"></div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#00263C] mb-3">Multi-Dimensional Analysis</h3>
                  <p className="text-[14px] md:text-[15px] text-slate-500 leading-relaxed">
                    Processing raw data using calibrated analytical systems to minimize bias (maintaining 100% objectivity) and map competency patterns across individuals and teams.
                  </p>
                </div>
              </div>

              <div className="relative pl-16 md:pl-24 group">
                <div className="absolute left-4 md:left-6 top-1 w-10 h-10 bg-white border-4 border-[#C92A2A] rounded-full flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-[#C92A2A] transition-all duration-300 z-10">
                   <span className="text-[#00263C] group-hover:text-white font-bold text-sm transition-colors">4</span>
                </div>
                
                <div className="bg-white p-7 md:p-9 rounded-[1.75rem] border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] group-hover:shadow-[0_10px_40px_-10px_rgba(0,38,60,0.1)] transition-all duration-300 relative">
                  <div className="absolute top-6 -left-3 w-3 h-3 bg-white border-b border-l border-slate-100 rotate-45 hidden md:block"></div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#00263C] mb-3">Executive Reporting & Debriefing</h3>
                  <p className="text-[14px] md:text-[15px] text-slate-500 leading-relaxed">
                    Delivery of comprehensive visual reports (complete with charts and executive summaries), followed by presentation sessions with our expert consultants to discuss actionable insights.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =========================================
          SECTION 5: THE OUTPUT (DATA VISUALIZATION) 
          ========================================= */}
      <section className="bg-slate-50 py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
            
            <div className="relative w-full order-2 lg:order-1">
              <div className="absolute top-4 -left-4 w-full h-full bg-[#00263C] rounded-[2rem] transform -rotate-2 -z-10 opacity-10"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#C92A2A]/10 rounded-full blur-3xl -z-10"></div>

              <div className="relative rounded-[2rem] bg-white ring-1 ring-slate-200 p-2 group">
                <div className="relative h-72 md:h-96 rounded-[calc(2rem-0.5rem)] overflow-hidden">
                  {/* Gambar profesional perkantoran Asia untuk laporan eksekutif */}
                  <img 
                    src="https://images.unsplash.com/photo-1531493731235-b5c309dca387?auto=format&fit=crop&w=1000&q=80" 
                    alt="Executive Assessment Report Analysis" 
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#00263C]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center order-1 lg:order-2">
              <span className="inline-flex items-center rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] bg-[#C92A2A]/10 text-[#C92A2A] mb-5 w-max">
                Final Output
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#00263C] mb-6 leading-tight">
                Comprehensive Reports That Drive Decisions.
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed mb-10">
                We don't give you piles of confusing raw data. Every assessment process ends with sharp, structured visual reporting ready to be actioned by the executive team.
              </p>

              <div className="space-y-8">
                <div className="flex gap-5 items-start group">
                  <div className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center shrink-0 group-hover:border-[#C92A2A] group-hover:shadow-[#C92A2A]/20 transition-all duration-300">
                    <svg className="w-5 h-5 text-[#00263C] group-hover:text-[#C92A2A] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-[#00263C] mb-1.5">Actionable Insights</h4>
                    <p className="text-[13.5px] text-slate-500 leading-relaxed">
                      Reports are equipped with concrete action plans, not just a series of numerical scores without context.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5 items-start group">
                  <div className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center shrink-0 group-hover:border-[#C92A2A] group-hover:shadow-[#C92A2A]/20 transition-all duration-300">
                    <svg className="w-5 h-5 text-[#00263C] group-hover:text-[#C92A2A] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg>
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-[#00263C] mb-1.5">Clear Visualizations</h4>
                    <p className="text-[13.5px] text-slate-500 leading-relaxed">
                      Data presentation through radar charts, heat maps, and normative comparisons that are very easy to read at a glance.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5 items-start group">
                  <div className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center shrink-0 group-hover:border-[#C92A2A] group-hover:shadow-[#C92A2A]/20 transition-all duration-300">
                    <svg className="w-5 h-5 text-[#00263C] group-hover:text-[#C92A2A] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-[#00263C] mb-1.5">Confidential & Secure</h4>
                    <p className="text-[13.5px] text-slate-500 leading-relaxed">
                      Report distribution is guaranteed confidential with high-level encryption to comply with corporate data privacy regulations.
                    </p>
                  </div>
                </div>

              </div>
            </div>

        </div>
      </section>

    </main>
  );
}