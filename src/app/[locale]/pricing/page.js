'use client';

import React, { useState } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { getPricingData } from "@/components/pricingData";

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(true);
  const locale = useLocale();
  const data = getPricingData(locale);

  return (
    <main className="min-h-screen bg-white selection:bg-brand-red selection:text-white">
      
      {/* SECTION 1: PRICING */}

      <section id="pricing" className="relative bg-brand-navy text-white pt-24 pb-32 md:pt-32 md:pb-40 px-6 md:px-12 overflow-hidden">
        {/* --- Background Ornaments --- */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#FFFFFF 2px, transparent 2px)', backgroundSize: '35px 35px' }}></div>
          <div className="absolute top-[15%] left-[5%] w-64 h-64 border border-white/5 rounded-full"></div>
          <div className="absolute top-[50%] -right-[5%] w-96 h-96 border border-white/10 rounded-full"></div>
          <div className="absolute bottom-[25%] left-[15%] w-12 h-12 border-2 border-white/10 rounded-full"></div>
          <div className="absolute top-[30%] right-[25%] w-20 h-20 border border-white/5 rounded-full"></div>
          <div className="absolute top-[10%] right-[30%] w-px h-64 bg-gradient-to-b from-white/10 to-transparent transform rotate-45"></div>
          <div className="absolute bottom-[20%] right-[10%] w-px h-48 bg-gradient-to-t from-white/10 to-transparent transform -rotate-45"></div>
        </div>

        {/* --- Main Content --- */}
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            
            <span className="text-eyebrow-lg gradient-gold text-white px-5 py-2 rounded-full inline-block shadow-md mb-6">
              {data.hero.eyebrow}
            </span>
            
            <h2 className="text-white mb-6 text-balance whitespace-pre-line">
              {data.hero.title}
            </h2>

            <div className="flex items-center justify-center gap-4 mt-8">
              <span className={`font-bold text-sm ${isYearly ? "text-white" : "text-slate-400"}`}>{data.hero.billedYearly}</span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className="w-14 h-8 bg-white rounded-full flex items-center px-1 transition-colors duration-300 relative focus:outline-none shadow-inner"
              >
                <div className={`w-6 h-6 bg-brand-navy rounded-full shadow-md transform transition-transform duration-300 ${isYearly ? "translate-x-0" : "translate-x-6"}`}></div>
              </button>
              <span className={`font-bold text-sm ${!isYearly ? "text-white" : "text-slate-400"}`}>{data.hero.billedMonthly}</span>
            </div>
            
            <p className="text-brand-red text-xs font-bold mt-5 italic tracking-widest bg-brand-red/10 inline-block px-4 py-1.5 rounded-full border border-brand-red/20">
              {data.hero.saveBadge}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* Card 1: HR Boot Camp */}
            <div className="flex flex-col w-full lg:mt-5">
              <div className="bg-white text-brand-navy rounded-[1.75rem] p-7 md:p-8 shadow-lg h-[280px] flex flex-col relative z-10 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div>
                  <h3 className="mb-3">{data.plans.bootcamp.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{data.plans.bootcamp.desc}</p>
                </div>
                <div className="flex-grow flex flex-col justify-center mt-2">
                  <div className="text-4xl font-extrabold mb-1 tracking-tight"><span className="text-xl mr-1 font-bold text-slate-400">Rp</span>{isYearly ? data.plans.bootcamp.priceYearly : data.plans.bootcamp.priceMonthly}</div>
                  <p className="text-sm font-bold text-slate-500">{isYearly ? data.plans.bootcamp.periodYearly : data.plans.bootcamp.periodMonthly}</p>
                </div>
              </div>
              
              <div className="mt-8 space-y-4 px-4">
                {data.plans.bootcamp.features.map((feat, idx) => (
                  <FeatureItem key={idx} text={feat} />
                ))}
              </div>
            </div>

            {/* Card 2: Full Academy Access (Highlighted) */}
            <div className="flex flex-col w-full relative z-20">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand-red text-white px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-md whitespace-nowrap text-center z-30">
                {data.plans.academy.badge}
              </div>
              <div className="bg-white text-brand-navy rounded-[1.75rem] p-7 md:p-8 shadow-2xl ring-4 ring-brand-red h-[320px] flex flex-col relative z-10 transition-transform duration-300 hover:-translate-y-2">
                <div>
                  <h3 className="mb-3">{data.plans.academy.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{data.plans.academy.desc}</p>
                </div>
                <div className="flex-grow flex flex-col justify-center mt-2">
                  {isYearly && <span className="line-through text-slate-400 text-sm block mb-1 font-bold">{data.plans.academy.originalPriceYearly}</span>}
                  <div className="text-4xl font-extrabold text-brand-red mb-1 tracking-tight"><span className="text-xl mr-1 font-bold text-brand-navy">Rp</span>{isYearly ? data.plans.academy.priceYearly : data.plans.academy.priceMonthly}</div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm text-slate-500 font-bold">{isYearly ? data.plans.academy.periodYearly : data.plans.academy.periodMonthly}</p>
                    {isYearly && <span className="text-sm font-bold text-brand-red">{data.plans.academy.highlightText}</span>}
                  </div>
                </div>
              </div>
              
              <div className="mt-8 space-y-4 px-4">
                {data.plans.academy.features.map((feat, idx) => (
                  <FeatureItem key={idx} text={feat} active />
                ))}
              </div>
            </div>

            {/* Card 3: Team License */}
            <div className="flex flex-col w-full lg:mt-5">
              <div className="bg-white text-brand-navy rounded-[1.75rem] p-7 md:p-8 shadow-lg h-[280px] flex flex-col relative z-10 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div>
                  <h3 className="mb-3">{data.plans.team.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{data.plans.team.desc}</p>
                </div>
                <div className="flex-grow flex flex-col justify-center mt-2">
                  <div className="text-sm text-slate-400 mb-1 font-bold">{data.plans.team.startingFrom}</div>
                  <div className="text-4xl font-extrabold mb-1 tracking-tight"><span className="text-xl mr-1 font-bold text-slate-400">Rp</span>{data.plans.team.price}</div>
                  <p className="text-sm font-bold text-slate-500">{data.plans.team.period}</p>
                </div>
              </div>
              
              <div className="mt-8 space-y-4 px-4">
                {data.plans.team.features.map((feat, idx) => (
                  <FeatureItem key={idx} text={feat} />
                ))}
              </div>
            </div>
            
          </div>
        </div>

        {/* --- Slanted Divider Bottom --- */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="block w-full h-[60px] md:h-[100px]">
            <path d="M0,0 L1200,120 L0,120 Z" fill="#FFFFFF"></path>
          </svg>
        </div>
      </section>



      {/* SECTION 2: COMPARE PLANS */}
      <section id="compare" className="py-24 md:py-32 bg-white text-brand-navy px-6 md:px-12 relative pb-40">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-eyebrow-lg text-brand-red block mb-5">
              {data.compare.eyebrow}
            </span>
            <h2 className="text-brand-navy mb-5">{data.compare.title}</h2>
            <p className="text-lg text-slate-600">{data.compare.subtitle}</p>
          </div>

          <div className="w-full overflow-x-auto shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[1.75rem] ring-1 ring-slate-100">
            <div className="min-w-[850px] bg-white rounded-[1.75rem] overflow-hidden">
              
              {/* Sticky Header untuk Tabel */}
              <div className="grid grid-cols-4 border-b border-slate-100 bg-white sticky top-0 z-10">
                <div className="p-6"></div>
                <div className="p-6 text-center">
                  <h4 className="text-brand-navy mb-1.5">{data.compare.col1Title}</h4>
                  <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">{data.compare.col1Sub}</p>
                </div>
                <div className="p-6 text-center bg-red-50 border-t-4 border-brand-red">
                  <h4 className="text-brand-red mb-1.5">{data.compare.col2Title}</h4>
                  <p className="text-xs text-brand-red/70 uppercase tracking-widest font-bold">{data.compare.col2Sub}</p>
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-brand-navy mb-1.5">{data.compare.col3Title}</h4>
                  <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">{data.compare.col3Sub}</p>
                </div>
              </div>

              {/* Looping Group Kategori */}
              {data.compare.groupedFeatures.map((group, groupIdx) => (
                <div key={groupIdx}>
                  <div className="grid grid-cols-4 bg-slate-50 border-b border-slate-100">
                    <div className="col-span-4 p-4 pl-8 text-sm font-bold text-brand-navy uppercase tracking-widest">
                      {group.category}
                    </div>
                  </div>

                  {group.items.map((feature, featureIdx) => (
                    <div 
                      key={featureIdx} 
                      className="grid grid-cols-4 items-center border-b border-slate-100 transition-colors hover:bg-slate-50/50"
                    >
                      <div className="p-4 pl-8 font-bold text-sm text-slate-600 flex items-center gap-2">
                        {feature.name}
                        {feature.info && (
                          <div 
                            className="w-4 h-4 bg-slate-400 shrink-0 cursor-help"
                            title={feature.info} /* Menampilkan teks info saat di-hover */
                            style={{
                              WebkitMaskImage: `url('/icons/ic_information-outline.svg')`,
                              WebkitMaskSize: 'contain',
                              WebkitMaskRepeat: 'no-repeat',
                              WebkitMaskPosition: 'center',
                              maskImage: `url('/icons/ic_information-outline.svg')`,
                              maskSize: 'contain',
                              maskRepeat: 'no-repeat',
                              maskPosition: 'center',
                            }}
                          />
                        )}
                      </div>
                      
                      <div className="p-4 text-center text-sm font-bold text-slate-500">
                        {typeof feature.c1 === 'boolean' ? (
                          feature.c1 ? <SolidCheckIcon color="var(--color-brand-navy)" /> : <MinusIcon />
                        ) : (
                          feature.c1
                        )}
                      </div>
                      
                      <div className="p-4 text-center text-sm font-bold text-brand-red bg-red-50 whitespace-pre-line">
                        {typeof feature.c2 === 'boolean' ? (
                          feature.c2 ? <SolidCheckIcon color="var(--color-brand-red)" /> : <MinusIcon />
                        ) : (
                          feature.c2
                        )}
                      </div>
                      
                      <div className="p-4 text-center text-sm font-bold text-slate-500">
                        {typeof feature.c3 === 'boolean' ? (
                          feature.c3 ? <SolidCheckIcon color="var(--color-brand-navy)" /> : <MinusIcon />
                        ) : (
                          feature.c3
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ))}

            </div>
          </div>
        </div>
      </section>


      {/* SECTION 3: INLINE CTA */}

      <section className="bg-white relative py-12 md:py-24 px-6 md:px-12 -mt-16 z-20">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-brand-navy to-[#0B2A4A] rounded-[2.5rem] md:rounded-[3rem] text-white py-16 md:py-20 px-6 md:px-12 relative overflow-hidden shadow-2xl border border-slate-800">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-red/30 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-3xl mx-auto text-center relative z-10">
            <span className="text-eyebrow-lg text-brand-red block mb-4">{data.ctaBanner.eyebrow}</span>
            <h2 className="text-white mb-6 text-balance">{data.ctaBanner.title}</h2>
            <p className="text-slate-300 text-lg mb-10">
              {data.ctaBanner.description}
            </p>
            <Link href={`/${locale}/join-us`} className="inline-flex items-center justify-center bg-brand-red text-white px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:bg-[#a82222] shadow-[0_10px_25px_rgba(201,42,42,0.4)] text-sm font-bold uppercase tracking-widest">
              {data.ctaBanner.button}
            </Link>
          </div>
        </div>
      </section>
      
    </main>
  );
}

function FeatureItem({ text, active = false }) {
  return (
    <div className="flex items-start gap-3">
      
      <div className="mt-[3px] flex-shrink-0 w-4 h-4 relative flex items-center justify-center">
        
        {active && (
          <div className="absolute w-2.5 h-2.5 bg-white rounded-full z-0"></div>
        )}
        
        <div 
          className={`absolute inset-0 z-10 ${active ? 'bg-brand-red' : 'bg-slate-300'}`}
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
      </div>

      <span className={`text-[13.5px] leading-relaxed ${active ? 'text-white' : 'text-slate-400'}`}>
        {text}
      </span>

    </div>
  );
}

function SolidCheckIcon({ color }) {
  return (
    <div 
      className="h-5 w-5 mx-auto"
      style={{
        backgroundColor: color,
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
  );
}

function MinusIcon() {
  return (
    <div 
      className="h-5 w-5 mx-auto bg-slate-300"
      style={{
        WebkitMaskImage: `url('/icons/ic_minus.svg')`,
        WebkitMaskSize: 'contain',
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskImage: `url('/icons/ic_minus.svg')`,
        maskSize: 'contain',
        maskRepeat: 'no-repeat',
        maskPosition: 'center',
      }}
    />
  );
}