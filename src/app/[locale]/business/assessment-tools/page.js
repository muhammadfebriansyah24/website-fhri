'use client'; 

import React, { useState } from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import CTA from '@/components/CTA';
import { getAssessmentData } from '@/components/assessmentData';

export default function AssessmentToolsPage() {
  const locale = useLocale();
  const data = getAssessmentData(locale);

  // --- STATE FOR INTERACTIVE TABS (SECTION 2) ---
  const [activeTab, setActiveTab] = useState(0);

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
                  {data.hero.eyebrow}
                </span>
              </div>
              <h1 className="text-white text-balance mb-6 md:mb-8">
                {data.hero.title1} <br className="hidden md:block" />
                {data.hero.title2} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-400">{data.hero.titleHighlight}</span>
              </h1>
              <p className="text-slate-300 max-w-lg mx-auto lg:mx-0 mb-10 drop-shadow-md text-lg">
                {data.hero.description}
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
                    {data.hero.badge}
                  </div>
                </div>
                <div className="p-1 bg-white aspect-[4/3] relative group">
                  <Image 
                    src="/images/business-at-hero.jpg" 
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
                            WebkitMaskImage: `url('/icons/ic_trending-up.svg')`,
                            WebkitMaskSize: 'contain',
                            WebkitMaskRepeat: 'no-repeat',
                            WebkitMaskPosition: 'center',
                            maskImage: `url('/icons/ic_trending-up.svg')`,
                            maskSize: 'contain',
                            maskRepeat: 'no-repeat',
                            maskPosition: 'center',
                          }}
                        />
                      </div>
                      <div>
                        <h4 className="text-brand-navy mb-0.5">{data.hero.mockupTitle}</h4>
                        <p className="text-xs text-slate-500 font-medium">{data.hero.mockupDesc}</p>
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
              {data.portfolio.eyebrow}
            </span>
            <h2 className="text-brand-navy mb-6 text-balance">
              {data.portfolio.title}
            </h2>
            <p className="text-slate-500 leading-relaxed text-lg">
              {data.portfolio.description}
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
            {data.portfolio.tabs.map((tab, index) => (
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
                    {data.portfolio.tabs[activeTab].title}
                  </h3>
                  <p className="text-slate-500 text-lg leading-relaxed">
                    {data.portfolio.tabs[activeTab].shortDesc}
                  </p>
                </div>

                <div className="space-y-6">
                  
                  {/* ITEM 1: Evaluation Focus */}
                  <div className="flex gap-4">
                    <div 
                      className="flex-shrink-0 w-6 h-6 bg-brand-red mt-0.5"
                      style={{
                        WebkitMaskImage: `url('/icons/ic_check-circle-solid.svg')`,
                        WebkitMaskSize: 'contain',
                        WebkitMaskRepeat: 'no-repeat',
                        WebkitMaskPosition: 'center',
                        maskImage: `url('/icons/ic_check-circle-solid.svg')`,
                        maskSize: 'contain',
                        maskRepeat: 'no-repeat',
                        maskPosition: 'center',
                      }}
                    />
                    <div>
                      <h4 className="text-brand-navy mb-1">{data.portfolio.labels.focus}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{data.portfolio.tabs[activeTab].focus}</p>
                    </div>
                  </div>

                  {/* ITEM 2: Methodology */}
                  <div className="flex gap-4">
                    <div 
                      className="flex-shrink-0 w-6 h-6 bg-brand-red mt-0.5"
                      style={{
                        WebkitMaskImage: `url('/icons/ic_check-circle-solid.svg')`,
                        WebkitMaskSize: 'contain',
                        WebkitMaskRepeat: 'no-repeat',
                        WebkitMaskPosition: 'center',
                        maskImage: `url('/icons/ic_check-circle-solid.svg')`,
                        maskSize: 'contain',
                        maskRepeat: 'no-repeat',
                        maskPosition: 'center',
                      }}
                    />
                    <div>
                      <h4 className="text-brand-navy mb-1">{data.portfolio.labels.methodology}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{data.portfolio.tabs[activeTab].methodology}</p>
                    </div>
                  </div>

                  {/* ITEM 3: Final Output */}
                  <div className="flex gap-4">
                    <div 
                      className="flex-shrink-0 w-6 h-6 bg-brand-red mt-0.5"
                      style={{
                        WebkitMaskImage: `url('/icons/ic_check-circle-solid.svg')`,
                        WebkitMaskSize: 'contain',
                        WebkitMaskRepeat: 'no-repeat',
                        WebkitMaskPosition: 'center',
                        maskImage: `url('/icons/ic_check-circle-solid.svg')`,
                        maskSize: 'contain',
                        maskRepeat: 'no-repeat',
                        maskPosition: 'center',
                      }}
                    />
                    <div>
                      <h4 className="text-brand-navy mb-1">{data.portfolio.labels.output}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{data.portfolio.tabs[activeTab].output}</p>
                    </div>
                  </div>

                </div>
              </div>

              <div className="rounded-[2rem] bg-slate-50 ring-1 ring-slate-100 p-2 group shadow-sm">
                <div className="relative h-72 md:h-96 rounded-[calc(2rem-0.5rem)] overflow-hidden">
                  <Image 
                    src={data.portfolio.tabs[activeTab].image} 
                    alt={data.portfolio.tabs[activeTab].title}
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
              {data.context.eyebrow}
            </span>
            <h2 className="text-white mb-6 text-balance">
              {data.context.title}
            </h2>
            <p className="text-slate-300 leading-relaxed text-lg">
              {data.context.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            
            <article className="group rounded-[1.75rem] bg-white p-7 md:p-9 shadow-lg hover:shadow-[0_30px_60px_-20px_rgba(220,38,38,0.18)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-full">
              <div className="w-12 h-12 rounded-xl bg-brand-navy group-hover:bg-brand-red flex items-center justify-center mb-6 transition-colors duration-300">
                <div 
                  className="w-5 h-5 bg-white"
                  style={{
                    WebkitMaskImage: `url('/icons/ic_trending-up.svg')`,
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskImage: `url('/icons/ic_trending-up.svg')`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                  }}
                />
              </div>
              <h3 className="text-brand-navy mb-3 transition-colors group-hover:text-brand-red">{data.context.cards[0].title}</h3>
              <p className="text-slate-500 leading-relaxed flex-grow text-sm">{data.context.cards[0].desc}</p>
            </article>

            <article className="group rounded-[1.75rem] bg-white p-7 md:p-9 shadow-lg hover:shadow-[0_30px_60px_-20px_rgba(220,38,38,0.18)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-full">
              <div className="w-12 h-12 rounded-xl bg-brand-navy group-hover:bg-brand-red flex items-center justify-center mb-6 transition-colors duration-300">
                <div 
                  className="w-5 h-5 bg-white"
                  style={{
                    WebkitMaskImage: `url('/icons/ic_rectangle-group-outline.svg')`,
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskImage: `url('/icons/ic_rectangle-group-outline.svg')`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                  }}
                />
              </div>
              <h3 className="text-brand-navy mb-3 transition-colors group-hover:text-brand-red">{data.context.cards[1].title}</h3>
              <p className="text-slate-500 leading-relaxed flex-grow text-sm">{data.context.cards[1].desc}</p>
            </article>

            <article className="group rounded-[1.75rem] bg-white p-7 md:p-9 shadow-lg hover:shadow-[0_30px_60px_-20px_rgba(220,38,38,0.18)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-full">
              <div className="w-12 h-12 rounded-xl bg-brand-navy group-hover:bg-brand-red flex items-center justify-center mb-6 transition-colors duration-300">
                <div 
                  className="w-5 h-5 bg-white"
                  style={{
                    WebkitMaskImage: `url('/icons/ic_search-outline.svg')`,
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskImage: `url('/icons/ic_search-outline.svg')`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                  }}
                />
              </div>
              <h3 className="text-brand-navy mb-3 transition-colors group-hover:text-brand-red">{data.context.cards[2].title}</h3>
              <p className="text-slate-500 leading-relaxed flex-grow text-sm">{data.context.cards[2].desc}</p>
            </article>

            <article className="group rounded-[1.75rem] bg-white p-7 md:p-9 shadow-lg hover:shadow-[0_30px_60px_-20px_rgba(220,38,38,0.18)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-full">
              <div className="w-12 h-12 rounded-xl bg-brand-navy group-hover:bg-brand-red flex items-center justify-center mb-6 transition-colors duration-300">
                <div 
                  className="w-5 h-5 bg-white"
                  style={{
                    WebkitMaskImage: `url('/icons/ic_chart-bar-outline.svg')`,
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskImage: `url('/icons/ic_chart-bar-outline.svg')`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                  }}
                />
              </div>
              <h3 className="text-brand-navy mb-3 transition-colors group-hover:text-brand-red">{data.context.cards[3].title}</h3>
              <p className="text-slate-500 leading-relaxed flex-grow text-sm">{data.context.cards[3].desc}</p>
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
              {data.methodology.eyebrow}
            </span>
            <h2 className="text-brand-navy mb-6 text-balance">
              {data.methodology.title}
            </h2>
            <p className="text-slate-500 leading-relaxed text-lg">
              {data.methodology.description}
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-[27px] md:left-[39px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-brand-red via-brand-red/40 to-transparent"></div>

            <div className="space-y-12 md:space-y-16">
              
              {data.methodology.steps.map((step, index) => (
                <div key={index} className="relative pl-16 md:pl-24 group">
                  <div className="absolute left-4 md:left-6 top-1 w-10 h-10 bg-white border-4 border-brand-red rounded-full flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-brand-red transition-all duration-300 z-10">
                     <span className="text-brand-navy group-hover:text-white font-bold text-sm transition-colors">{index + 1}</span>
                  </div>
                  
                  <div className="bg-white p-7 md:p-9 rounded-[1.75rem] border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] group-hover:shadow-[0_10px_40px_-10px_rgba(0,38,60,0.1)] transition-all duration-300 relative">
                    <div className="absolute top-6 -left-3 w-3 h-3 bg-white border-b border-l border-slate-100 rotate-45 hidden md:block"></div>
                    <h3 className="text-brand-navy mb-3">{step.title}</h3>
                    <p className="text-slate-500 leading-relaxed text-sm">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}

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
                  src="/images/business-at-final.jpg" 
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
              {data.output.eyebrow}
            </span>
            
            <h2 className="text-brand-navy text-balance mb-6">
              {data.output.title}
            </h2>

            <p className="text-slate-500 leading-relaxed mb-10 text-lg">
              {data.output.description}
            </p>

            <div className="space-y-8">
              
              <div className="flex gap-5 items-start group">
                <div className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center shrink-0 group-hover:border-brand-red group-hover:shadow-brand-red/20 transition-all duration-300">
                  <div 
                    className="w-5 h-5 bg-brand-navy group-hover:bg-brand-red transition-colors duration-300"
                    style={{
                      WebkitMaskImage: `url('/icons/ic_bolt-outline.svg')`,
                      WebkitMaskSize: 'contain',
                      WebkitMaskRepeat: 'no-repeat',
                      WebkitMaskPosition: 'center',
                      maskImage: `url('/icons/ic_bolt-outline.svg')`,
                      maskSize: 'contain',
                      maskRepeat: 'no-repeat',
                      maskPosition: 'center',
                    }}
                  />
                </div>
                <div>
                  <h4 className="text-brand-navy mb-1.5">{data.output.items[0].title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {data.output.items[0].desc}
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-start group">
                <div className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center shrink-0 group-hover:border-brand-red group-hover:shadow-brand-red/20 transition-all duration-300">
                  <div 
                    className="w-5 h-5 bg-brand-navy group-hover:bg-brand-red transition-colors duration-300"
                    style={{
                      WebkitMaskImage: `url('/icons/ic_presentation-chart.svg')`,
                      WebkitMaskSize: 'contain',
                      WebkitMaskRepeat: 'no-repeat',
                      WebkitMaskPosition: 'center',
                      maskImage: `url('/icons/ic_presentation-chart.svg')`,
                      maskSize: 'contain',
                      maskRepeat: 'no-repeat',
                      maskPosition: 'center',
                    }}
                  />
                </div>
                <div>
                  <h4 className="text-brand-navy mb-1.5">{data.output.items[1].title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {data.output.items[1].desc}
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-start group">
                <div className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center shrink-0 group-hover:border-brand-red group-hover:shadow-brand-red/20 transition-all duration-300">
                  <div 
                    className="w-5 h-5 bg-brand-navy group-hover:bg-brand-red transition-colors duration-300"
                    style={{
                      WebkitMaskImage: `url('/icons/ic_lock-outline.svg')`,
                      WebkitMaskSize: 'contain',
                      WebkitMaskRepeat: 'no-repeat',
                      WebkitMaskPosition: 'center',
                      maskImage: `url('/icons/ic_lock-outline.svg')`,
                      maskSize: 'contain',
                      maskRepeat: 'no-repeat',
                      maskPosition: 'center',
                    }}
                  />
                </div>
                <div>
                  <h4 className="text-brand-navy mb-1.5">{data.output.items[2].title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {data.output.items[2].desc}
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