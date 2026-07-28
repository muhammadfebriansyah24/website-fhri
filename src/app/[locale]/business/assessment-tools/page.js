'use client'; 

import React, { useState } from 'react';
import Image from 'next/image';
import CTA from '@/components/CTA';

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
      image: 'https://images.unsplash.com/photo-1701980889802-55ff39e2e973?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: '360',
      title: '360-Degree Feedback',
      shortDesc: 'Gain a comprehensive view from the entire professional interaction structure.',
      focus: 'Evaluating collaboration effectiveness, communication styles, and leadership.',
      methodology: 'Calibrated anonymous questionnaires from superiors, peers, and subordinates.',
      output: 'Interpersonal blind spot mapping and collaboration effectiveness reports.',
      image: 'https://images.unsplash.com/photo-1530099486328-e021101a494a?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'potential',
      title: 'Potential & Personality',
      shortDesc: 'Map the psychological DNA of your employees for future succession readiness.',
      focus: 'Succession readiness, learning agility, and working styles.',
      methodology: 'Psychometric tests, personality inventories, and cultural fit evaluations.',
      output: 'Comprehensive psychological profiles and precise career path recommendations.',
      image: 'https://images.unsplash.com/photo-1581065178047-8ee15951ede6?auto=format&fit=crop&w=800&q=80',
    }
  ];

  return (
    <main className="min-h-screen bg-white text-brand-navy selection:bg-brand-red selection:text-white overflow-hidden">
      
      {/* =========================================
          SECTION 1: HERO SECTION
          ========================================= */}
      <section className="relative min-h-0 py-20 md:min-h-[85vh] md:py-0 flex items-center bg-brand-navy text-white overflow-hidden">
        
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-10 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            
            {/* LEFT COLUMN: Copywriting */}
            <div className="flex flex-col justify-center items-center lg:items-start relative z-10 text-center lg:text-left mt-0 lg:-mt-8">
              <div className="mb-4 md:mb-5">
                <span className="text-eyebrow-lg text-brand-red block drop-shadow-md">
                  Assessment Tools
                </span>
              </div>
              <h1 className="text-white text-balance mb-6 md:mb-8">
                Measure Capabilities, <br className="hidden md:block" />
                Eliminate Assumptions in Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-400">HR Decisions</span>
              </h1>
              <p className="text-slate-300 max-w-lg mx-auto lg:mx-0 mb-10 drop-shadow-md text-lg">
                Bring precision to talent development. Objectively evaluate leadership potential, technical capabilities, and cultural fit through industry-standard assessment tools.
              </p>
            </div>
            
            {/* RIGHT COLUMN: Visual Mockup */}
            <div className="relative w-full h-full min-h-[340px] sm:min-h-[400px] lg:min-h-[550px] flex items-center justify-center mt-6 lg:mt-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-tr from-brand-red/30 to-white/5 rounded-[3rem] rotate-3 -z-10 blur-sm"></div>
              <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-[0_20px_60px_-12px_rgba(0,0,0,0.5)] overflow-hidden transform hover:-translate-y-2 transition-transform duration-500">
                <div className="bg-slate-100 p-3 flex items-center gap-2 border-b border-slate-200">
                  <div className="flex gap-1.5 ml-1">
                    <div className="w-3 h-3 rounded-full bg-brand-red"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="mx-auto text-brand-navy/60 text-[10px] font-bold tracking-widest uppercase pr-6">
                    Assessment Analytics
                  </div>
                </div>
                <div className="p-1 bg-white aspect-[4/3] relative group">
                  <Image 
                    src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=1000&q=80" 
                    alt="Data Analytics Dashboard" 
                    fill
                    unoptimized
                    className="object-cover opacity-90 rounded-b-xl transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 bg-white p-3 sm:p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 sm:gap-4 z-10">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-navy/5 rounded-full flex items-center justify-center shrink-0">
                        <div 
                          className="w-5 h-5 sm:w-6 sm:h-6 bg-brand-red"
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
                      </div>
                      <div>
                        <h4 className="text-brand-navy mb-0.5">Leadership Potential</h4>
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
      <section className="bg-white py-24 md:py-32 px-6 md:px-12 relative border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-eyebrow-lg block mb-4">
              Core Portfolio
            </span>
            <h2 className="text-brand-navy mb-6 text-balance">
              Data-Driven Assessment Tools
            </h2>
            <p className="text-slate-500 leading-relaxed text-lg">
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
                    ? 'bg-brand-navy text-white border-brand-navy shadow-lg shadow-brand-navy/20 scale-105' 
                    : 'bg-white text-slate-500 border-slate-200 hover:border-brand-red/50 hover:text-brand-navy'
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
                  <h3 className="text-brand-navy mb-4">
                    {assessmentData[activeTab].title}
                  </h3>
                  <p className="text-slate-500 text-lg leading-relaxed">
                    {assessmentData[activeTab].shortDesc}
                  </p>
                </div>

                <div className="space-y-6">
                  
                  {/* ITEM 1: Evaluation Focus */}
                  <div className="flex gap-4">
                    <div 
                      className="flex-shrink-0 w-6 h-6 bg-brand-red mt-0.5"
                      style={{
                        WebkitMaskImage: `url('/ic_check-circle-solid.svg')`,
                        WebkitMaskSize: 'contain',
                        WebkitMaskRepeat: 'no-repeat',
                        WebkitMaskPosition: 'center',
                        maskImage: `url('/ic_check-circle-solid.svg')`,
                        maskSize: 'contain',
                        maskRepeat: 'no-repeat',
                        maskPosition: 'center',
                      }}
                    />
                    <div>
                      <h4 className="text-brand-navy mb-1">Evaluation Focus</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{assessmentData[activeTab].focus}</p>
                    </div>
                  </div>

                  {/* ITEM 2: Methodology */}
                  <div className="flex gap-4">
                    <div 
                      className="flex-shrink-0 w-6 h-6 bg-brand-red mt-0.5"
                      style={{
                        WebkitMaskImage: `url('/ic_check-circle-solid.svg')`,
                        WebkitMaskSize: 'contain',
                        WebkitMaskRepeat: 'no-repeat',
                        WebkitMaskPosition: 'center',
                        maskImage: `url('/ic_check-circle-solid.svg')`,
                        maskSize: 'contain',
                        maskRepeat: 'no-repeat',
                        maskPosition: 'center',
                      }}
                    />
                    <div>
                      <h4 className="text-brand-navy mb-1">Methodology</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{assessmentData[activeTab].methodology}</p>
                    </div>
                  </div>

                  {/* ITEM 3: Final Output */}
                  <div className="flex gap-4">
                    <div 
                      className="flex-shrink-0 w-6 h-6 bg-brand-red mt-0.5"
                      style={{
                        WebkitMaskImage: `url('/ic_check-circle-solid.svg')`,
                        WebkitMaskSize: 'contain',
                        WebkitMaskRepeat: 'no-repeat',
                        WebkitMaskPosition: 'center',
                        maskImage: `url('/ic_check-circle-solid.svg')`,
                        maskSize: 'contain',
                        maskRepeat: 'no-repeat',
                        maskPosition: 'center',
                      }}
                    />
                    <div>
                      <h4 className="text-brand-navy mb-1">Final Output</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{assessmentData[activeTab].output}</p>
                    </div>
                  </div>

                </div>
              </div>

              <div className="rounded-[2rem] bg-slate-50 ring-1 ring-slate-100 p-2 group shadow-sm">
                <div className="relative h-72 md:h-96 rounded-[calc(2rem-0.5rem)] overflow-hidden">
                  <Image 
                    src={assessmentData[activeTab].image} 
                    alt={assessmentData[activeTab].title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 3: IMPLEMENTATION CONTEXT 
          ========================================= */}
      <section className="bg-brand-navy py-24 md:py-32 px-6 md:px-12 relative">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-eyebrow-lg text-brand-red block mb-4 md:mb-5 drop-shadow-md">
              Implementation Context
            </span>
            <h2 className="text-white mb-6 text-balance">
              Strategic Implementation Scenarios
            </h2>
            <p className="text-slate-300 leading-relaxed text-lg">
              Our assessment tools are designed to support crucial decisions throughout the HR management lifecycle in your company.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            
            {/* 1. Promotion & Succession */}
            <article className="group rounded-[1.75rem] bg-white p-7 md:p-9 shadow-lg hover:shadow-[0_30px_60px_-20px_rgba(220,38,38,0.18)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-full">
              <div className="w-12 h-12 rounded-xl bg-brand-navy group-hover:bg-brand-red flex items-center justify-center mb-6 transition-colors duration-300">
                <div 
                  className="w-5 h-5 bg-white"
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
              </div>
              <h3 className="text-brand-navy mb-3 transition-colors group-hover:text-brand-red">Promotion & Succession</h3>
              <p className="text-slate-500 leading-relaxed flex-grow text-sm">Objectively identify future leaders and prepare top talent to fill key organizational positions.</p>
            </article>

            {/* 2. Restructuring */}
            <article className="group rounded-[1.75rem] bg-white p-7 md:p-9 shadow-lg hover:shadow-[0_30px_60px_-20px_rgba(220,38,38,0.18)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-full">
              <div className="w-12 h-12 rounded-xl bg-brand-navy group-hover:bg-brand-red flex items-center justify-center mb-6 transition-colors duration-300">
                <div 
                  className="w-5 h-5 bg-white"
                  style={{
                    WebkitMaskImage: `url('/ic_rectangle-group-outline.svg')`,
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskImage: `url('/ic_rectangle-group-outline.svg')`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                  }}
                />
              </div>
              <h3 className="text-brand-navy mb-3 transition-colors group-hover:text-brand-red">Restructuring</h3>
              <p className="text-slate-500 leading-relaxed flex-grow text-sm">Remap talent and capabilities during mergers, acquisitions, or corporate operational efficiency efforts.</p>
            </article>

            {/* 3. Training Needs (TNA) */}
            <article className="group rounded-[1.75rem] bg-white p-7 md:p-9 shadow-lg hover:shadow-[0_30px_60px_-20px_rgba(220,38,38,0.18)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-full">
              <div className="w-12 h-12 rounded-xl bg-brand-navy group-hover:bg-brand-red flex items-center justify-center mb-6 transition-colors duration-300">
                <div 
                  className="w-5 h-5 bg-white"
                  style={{
                    WebkitMaskImage: `url('/ic_search-outline.svg')`,
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskImage: `url('/ic_search-outline.svg')`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                  }}
                />
              </div>
              <h3 className="text-brand-navy mb-3 transition-colors group-hover:text-brand-red">Training Needs (TNA)</h3>
              <p className="text-slate-500 leading-relaxed flex-grow text-sm">Precisely discover skill gaps to design effective training and development programs.</p>
            </article>

            {/* 4. Performance Eval. */}
            <article className="group rounded-[1.75rem] bg-white p-7 md:p-9 shadow-lg hover:shadow-[0_30px_60px_-20px_rgba(220,38,38,0.18)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-full">
              <div className="w-12 h-12 rounded-xl bg-brand-navy group-hover:bg-brand-red flex items-center justify-center mb-6 transition-colors duration-300">
                <div 
                  className="w-5 h-5 bg-white"
                  style={{
                    WebkitMaskImage: `url('/ic_chart-bar-outline.svg')`,
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskImage: `url('/ic_chart-bar-outline.svg')`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                  }}
                />
              </div>
              <h3 className="text-brand-navy mb-3 transition-colors group-hover:text-brand-red">Performance Eval.</h3>
              <p className="text-slate-500 leading-relaxed flex-grow text-sm">Provide valid and objective supporting data for compensation decisions, annual bonuses, and retention.</p>
            </article>
            
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 4: ASSESSMENT METHODOLOGY
          ========================================= */}
      <section className="bg-white py-24 md:py-32 px-6 md:px-12 relative">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
            <span className="text-eyebrow-lg text-brand-red block mb-4">
              Assessment Methodology
            </span>
            <h2 className="text-brand-navy mb-6 text-balance">
              Structured Process, Measurable Results
            </h2>
            <p className="text-slate-500 leading-relaxed text-lg">
              We ensure every assessment stage runs transparently, efficiently, and provides data that is truly relevant to your business objectives.
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-[27px] md:left-[39px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-brand-red via-brand-red/40 to-transparent"></div>

            <div className="space-y-12 md:space-y-16">
              
              <div className="relative pl-16 md:pl-24 group">
                <div className="absolute left-4 md:left-6 top-1 w-10 h-10 bg-white border-4 border-brand-red rounded-full flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-brand-red transition-all duration-300 z-10">
                   <span className="text-brand-navy group-hover:text-white font-bold text-sm transition-colors">1</span>
                </div>
                
                <div className="bg-white p-7 md:p-9 rounded-[1.75rem] border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] group-hover:shadow-[0_10px_40px_-10px_rgba(0,38,60,0.1)] transition-all duration-300 relative">
                  <div className="absolute top-6 -left-3 w-3 h-3 bg-white border-b border-l border-slate-100 rotate-45 hidden md:block"></div>
                  <h3 className="text-brand-navy mb-3">Discovery & Alignment</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">
                    In-depth discussion sessions with stakeholders to determine competency indicators, success criteria, and success metrics aligned with your company's culture and strategic goals.
                  </p>
                </div>
              </div>

              <div className="relative pl-16 md:pl-24 group">
                <div className="absolute left-4 md:left-6 top-1 w-10 h-10 bg-white border-4 border-brand-red rounded-full flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-brand-red transition-all duration-300 z-10">
                   <span className="text-brand-navy group-hover:text-white font-bold text-sm transition-colors">2</span>
                </div>
                
                <div className="bg-white p-7 md:p-9 rounded-[1.75rem] border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] group-hover:shadow-[0_10px_40px_-10px_rgba(0,38,60,0.1)] transition-all duration-300 relative">
                  <div className="absolute top-6 -left-3 w-3 h-3 bg-white border-b border-l border-slate-100 rotate-45 hidden md:block"></div>
                  <h3 className="text-brand-navy mb-3">Secure Deployment</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">
                    Distribution of test tools and questionnaires to all participants through a secure digital platform, minimizing technical issues, and equipped with clear instructions.
                  </p>
                </div>
              </div>

              <div className="relative pl-16 md:pl-24 group">
                <div className="absolute left-4 md:left-6 top-1 w-10 h-10 bg-white border-4 border-brand-red rounded-full flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-brand-red transition-all duration-300 z-10">
                   <span className="text-brand-navy group-hover:text-white font-bold text-sm transition-colors">3</span>
                </div>
                
                <div className="bg-white p-7 md:p-9 rounded-[1.75rem] border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] group-hover:shadow-[0_10px_40px_-10px_rgba(0,38,60,0.1)] transition-all duration-300 relative">
                  <div className="absolute top-6 -left-3 w-3 h-3 bg-white border-b border-l border-slate-100 rotate-45 hidden md:block"></div>
                  <h3 className="text-brand-navy mb-3">Multi-Dimensional Analysis</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">
                    Processing raw data using calibrated analytical systems to minimize bias (maintaining 100% objectivity) and map competency patterns across individuals and teams.
                  </p>
                </div>
              </div>

              <div className="relative pl-16 md:pl-24 group">
                <div className="absolute left-4 md:left-6 top-1 w-10 h-10 bg-white border-4 border-brand-red rounded-full flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-brand-red transition-all duration-300 z-10">
                   <span className="text-brand-navy group-hover:text-white font-bold text-sm transition-colors">4</span>
                </div>
                
                <div className="bg-white p-7 md:p-9 rounded-[1.75rem] border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] group-hover:shadow-[0_10px_40px_-10px_rgba(0,38,60,0.1)] transition-all duration-300 relative">
                  <div className="absolute top-6 -left-3 w-3 h-3 bg-white border-b border-l border-slate-100 rotate-45 hidden md:block"></div>
                  <h3 className="text-brand-navy mb-3">Executive Reporting & Debriefing</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">
                    Delivery of comprehensive visual reports (complete with charts and executive summaries), followed by presentation sessions with our expert consultants to discuss actionable insights.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =========================================
          SECTION 5: FINAL OUTPUT
          ========================================= */}
      <section className="bg-slate-50 py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
            
          <div className="relative w-full order-2 lg:order-1">
            <div className="absolute top-4 -left-4 w-full h-full bg-brand-navy rounded-[2rem] transform -rotate-2 -z-10 opacity-10"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-red/10 rounded-full blur-3xl -z-10"></div>

            <div className="relative rounded-[2rem] bg-white ring-1 ring-slate-200 p-2 group shadow-sm">
              <div className="relative h-72 md:h-96 rounded-[calc(2rem-0.5rem)] overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1531493731235-b5c309dca387?auto=format&fit=crop&w=1000&q=80" 
                  alt="Executive Assessment Report Analysis" 
                  fill
                  unoptimized
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center order-1 lg:order-2">
            <span className="text-eyebrow-lg text-brand-red block mb-4">
              Final Output
            </span>
            
            <h2 className="text-brand-navy text-balance mb-6">
              Comprehensive Reports That Drive Decisions.
            </h2>

            <p className="text-slate-500 leading-relaxed mb-10 text-lg">
              We don't give you piles of confusing raw data. Every assessment process ends with sharp, structured visual reporting ready to be actioned by the executive team.
            </p>

            <div className="space-y-8">
              
              {/* ITEM 1: Actionable Insights */}
              <div className="flex gap-5 items-start group">
                <div className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center shrink-0 group-hover:border-brand-red group-hover:shadow-brand-red/20 transition-all duration-300">
                  <div 
                    className="w-5 h-5 bg-brand-navy group-hover:bg-brand-red transition-colors duration-300"
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
                <div>
                  <h4 className="text-brand-navy mb-1.5">Actionable Insights</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Reports are equipped with concrete action plans, not just a series of numerical scores without context.
                  </p>
                </div>
              </div>

              {/* ITEM 2: Clear Visualizations */}
              <div className="flex gap-5 items-start group">
                <div className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center shrink-0 group-hover:border-brand-red group-hover:shadow-brand-red/20 transition-all duration-300">
                  <div 
                    className="w-5 h-5 bg-brand-navy group-hover:bg-brand-red transition-colors duration-300"
                    style={{
                      WebkitMaskImage: `url('/ic_presentation-chart.svg')`,
                      WebkitMaskSize: 'contain',
                      WebkitMaskRepeat: 'no-repeat',
                      WebkitMaskPosition: 'center',
                      maskImage: `url('/ic_presentation-chart.svg')`,
                      maskSize: 'contain',
                      maskRepeat: 'no-repeat',
                      maskPosition: 'center',
                    }}
                  />
                </div>
                <div>
                  <h4 className="text-brand-navy mb-1.5">Clear Visualizations</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Data presentation through radar charts, heat maps, and normative comparisons that are very easy to read at a glance.
                  </p>
                </div>
              </div>

              {/* ITEM 3: Confidential & Secure */}
              <div className="flex gap-5 items-start group">
                <div className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center shrink-0 group-hover:border-brand-red group-hover:shadow-brand-red/20 transition-all duration-300">
                  <div 
                    className="w-5 h-5 bg-brand-navy group-hover:bg-brand-red transition-colors duration-300"
                    style={{
                      WebkitMaskImage: `url('/ic_lock-outline.svg')`,
                      WebkitMaskSize: 'contain',
                      WebkitMaskRepeat: 'no-repeat',
                      WebkitMaskPosition: 'center',
                      maskImage: `url('/ic_lock-outline.svg')`,
                      maskSize: 'contain',
                      maskRepeat: 'no-repeat',
                      maskPosition: 'center',
                    }}
                  />
                </div>
                <div>
                  <h4 className="text-brand-navy mb-1.5">Confidential & Secure</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Report distribution is guaranteed confidential with high-level encryption to comply with corporate data privacy regulations.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =========================================
          SECTION 6: CALL TO ACTION 
          ========================================= */}
      <CTA />

    </main>
  );
}