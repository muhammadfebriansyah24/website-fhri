"use client";
import React, { useState } from "react";

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(true);

  // Data array untuk Section 2 (Compare Plans)
  const groupedFeatures = [
    {
      category: "Program & Learning Experience",
      items: [
        { name: "Curriculum", c1: "1 Certificate program", c2: "16 Certificate Programs", c3: "16 Certificate Programs", info: false },
        { name: "Access period", c1: "12 months", c2: "12 months", c3: "12 months", info: false },
        { name: "Fully self-paced", c1: true, c2: true, c3: true, info: true },
        { name: "Real-world projects", c1: true, c2: true, c3: true, info: true },
        { name: "Smartphone app", c1: true, c2: true, c3: true, info: true },
      ]
    },
    {
      category: "Tools, Resources & Analytics",
      items: [
        { name: "300+ Downloadable templates", c1: false, c2: true, c3: true, info: true },
        { name: "FHRI Copilot", c1: false, c2: true, c3: true, info: true },
        { name: "Soft Skills Hub", c1: false, c2: true, c3: true, info: false },
        { name: "Content upgrades", c1: false, c2: true, c3: true, info: true },
        { name: "Reporting & analytics", c1: false, c2: false, c3: true, info: true },
      ]
    },
    {
      category: "Support & Community",
      items: [
        { name: "Amazing support", c1: true, c2: true, c3: true, info: true },
        { name: "Expert community & support", c1: true, c2: true, c3: true, info: true },
        { name: "Weekly Webinars with HR experts", c1: false, c2: true, c3: true, info: false },
        { name: "Personal coaching", c1: false, c2: true, c3: true, info: true },
        { name: "Dedicated Learning Consultant*", c1: false, c2: false, c3: true, info: true },
      ]
    },
    {
      category: "Certification & Assurance",
      items: [
        { name: "Digital certificate(s)", c1: true, c2: true, c3: true, info: true },
        { name: "Recertification credits", c1: true, c2: true, c3: true, info: true },
        { name: "Money-back guarantee", c1: "30 days", c2: "60 days (annual)\n30 days (monthly)", c3: "60 days", info: true },
      ]
    }
  ];

  return (
    <>
      {/* ========================================== */}
      {/* SECTION 1: PRICING (Sama seperti sebelumnya) */}
      {/* ========================================== */}
      <section id="pricing" className="relative min-h-screen bg-[#00263C] text-[#FFFFFF] pt-20 pb-32 px-4 font-sans overflow-hidden">
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
          <div className="text-center mb-10">
            <p className="text-sm font-bold tracking-widest text-[#C92A2A] uppercase mb-3">FHRI Pricing</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Maximize Your Career Growth <br className="hidden md:block" /> with Industry-Leading HR Training
            </h1>

            <div className="flex items-center justify-center gap-4 mt-8">
              <span className={`font-semibold ${isYearly ? "text-white" : "text-gray-400"}`}>Billed Yearly</span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className="w-14 h-8 bg-white rounded-full flex items-center px-1 transition-colors duration-300 relative focus:outline-none"
              >
                <div className={`w-6 h-6 bg-[#00263C] rounded-full shadow-md transform transition-transform duration-300 ${isYearly ? "translate-x-0" : "translate-x-6"}`}></div>
              </button>
              <span className={`font-semibold ${!isYearly ? "text-white" : "text-gray-400"}`}>Billed Monthly</span>
            </div>
            <p className="text-[#C92A2A] text-sm font-bold my-6 italic tracking-wide">SAVE 20% WITH ANNUAL BILLING</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Card 1: HR Boot Camp */}
            <div className="flex flex-col w-full mt-5">
              <div className="bg-[#FFFFFF] text-[#00263C] rounded-xl p-8 text-center shadow-lg h-[360px] flex flex-col justify-between">
                <div className="min-h-[90px]">
                  <h3 className="text-2xl font-bold mb-2">HR Boot Camp</h3>
                  <p className="text-sm text-gray-500 leading-snug px-2">Land a promotion by learning a new skill and earning a certificate</p>
                </div>
                <div className="min-h-[100px] flex flex-col justify-center">
                  <div className="text-3xl font-light mb-1"><span className="text-lg mr-1">Rp</span>{isYearly ? "8,850,000" : "850,000"}</div>
                  <p className="text-sm font-bold text-[#00263C] h-5">{isYearly ? "1 Certificate Program" : "/ per month"}</p>
                </div>
                <button className="w-full py-3 mt-4 border-2 border-[#C92A2A] text-[#C92A2A] font-bold rounded hover:bg-[#C92A2A] hover:text-white transition-colors uppercase text-sm">Select Program</button>
              </div>
              <div className="mt-8 space-y-4 px-4">
                <FeatureItem text="1 Certificate Program" />
                <FeatureItem text="12 months access" />
                <FeatureItem text="Expert community & support" />
                <FeatureItem text="30-day money-back guarantee" />
              </div>
            </div>

            {/* Card 2: Full Academy Access */}
            <div className="flex flex-col w-full relative z-20">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#C92A2A] text-white px-8 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-md whitespace-nowrap text-center">Best Investment</div>
              <div className="bg-[#FFFFFF] text-[#00263C] rounded-xl p-8 text-center shadow-2xl border-4 border-[#C92A2A] h-[400px] flex flex-col justify-between">
                <div className="min-h-[90px]">
                  <h3 className="text-2xl font-bold mb-2">Full Academy Access</h3>
                  <p className="text-sm text-gray-500 leading-snug px-2">Become a continuous learner and stay up-to-date with in-demand HR skills</p>
                </div>
                <div className="min-h-[100px] flex flex-col justify-center">
                  {isYearly && <span className="line-through text-gray-400 text-sm block mb-1">Rp 18,200,000</span>}
                  <div className="text-4xl font-bold text-[#C92A2A] mb-1"><span className="text-xl mr-1 text-[#00263C]">Rp</span>{isYearly ? "14,560,000" : "1,456,000"}</div>
                  <p className="text-sm text-gray-500 mb-1">{isYearly ? "/ per year" : "/ per month"}</p>
                  <p className="text-sm font-bold text-[#C92A2A] h-5">{isYearly ? "All 16 Certificate Programs" : ""}</p>
                </div>
                <button className="w-full py-3 mt-4 bg-[#C92A2A] text-white font-bold rounded hover:bg-red-800 transition-colors uppercase text-sm shadow-lg">Enroll Now</button>
              </div>
              <div className="mt-8 space-y-4 px-4">
                <FeatureItem text="All 16 Certificate Programs" active />
                <FeatureItem text="12 months access" active />
                <FeatureItem text="Expert community & support" active />
                <FeatureItem text="60-day money-back guarantee" active />
                <FeatureItem text="85+ (mini) courses" active />
                <FeatureItem text="300+ Downloadable templates" active />
                <FeatureItem text="Weekly Webinars" active />
                <FeatureItem text="FHRI Copilot" active />
                <FeatureItem text="Soft Skills Hub" active />
                <FeatureItem text="Personal coaching" active />
              </div>
            </div>

            {/* Card 3: Team License */}
            <div className="flex flex-col w-full mt-5">
              <div className="bg-[#FFFFFF] text-[#00263C] rounded-xl p-8 text-center shadow-lg h-[360px] flex flex-col justify-between">
                <div className="min-h-[90px]">
                  <h3 className="text-2xl font-bold mb-2">Team License</h3>
                  <p className="text-sm text-gray-500 leading-snug px-2">Empower teams of 2+ with world-class HR skills and assessments</p>
                </div>
                <div className="min-h-[100px] flex flex-col justify-center">
                  <div className="text-sm text-gray-400 mb-1">from</div>
                  <div className="text-3xl font-light mb-1"><span className="text-lg mr-1">Rp</span>23,690,000</div>
                  <p className="text-sm font-bold text-[#00263C] h-5">All 16 Certificate Programs</p>
                </div>
                <button className="w-full py-3 mt-4 border-2 border-[#C92A2A] text-[#C92A2A] font-bold rounded hover:bg-[#C92A2A] hover:text-white transition-colors uppercase text-sm">Learn More</button>
              </div>
              <div className="mt-8 space-y-4 px-4">
                <FeatureItem text="All 16 Certificate Programs (per user)" />
                <FeatureItem text="12 months access" />
                <FeatureItem text="Expert community & support" />
                <FeatureItem text="60-day money-back guarantee" />
                <FeatureItem text="85+ (mini) courses" />
                <FeatureItem text="300+ Downloadable templates" />
                <FeatureItem text="Weekly Webinars" />
                <FeatureItem text="FHRI Copilot" />
                <FeatureItem text="Soft Skills Hub" />
                <FeatureItem text="Personal coaching" />
                <FeatureItem text="Learning Consultant*" />
                <FeatureItem text="Team reporting & analytics*" />
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

      {/* ========================================== */}
      {/* SECTION 2: COMPARE PLANS (REDESIGNED)      */}
      {/* ========================================== */}
      <section id="compare" className="py-24 bg-[#FFFFFF] text-[#00263C] font-sans">
        <div className="max-w-6xl mx-auto px-4">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#00263C] mb-4">Detailed Plan Comparison</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Find out exactly what is included in each of our training plans and choose the one that perfectly aligns with your career goals.</p>
          </div>

          <div className="w-full overflow-x-auto shadow-sm rounded-xl border border-gray-100">
            <div className="min-w-[850px] bg-white rounded-xl">
              
              {/* Sticky Header untuk Tabel */}
              <div className="grid grid-cols-4 border-b-2 border-gray-100 bg-white sticky top-0 z-10">
                <div className="p-6"></div>
                <div className="p-6 text-center">
                  <h4 className="font-bold text-lg text-[#00263C]">HR Boot Camp</h4>
                  <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">Single Skill</p>
                </div>
                {/* Kolom Tengah Di-Highlight */}
                <div className="p-6 text-center bg-[#FFF5F5] border-t-4 border-[#C92A2A]">
                  <h4 className="font-bold text-lg text-[#C92A2A]">Full Academy</h4>
                  <p className="text-xs text-[#C92A2A]/70 mt-1 uppercase tracking-wider">Best Value</p>
                </div>
                <div className="p-6 text-center">
                  <h4 className="font-bold text-lg text-[#00263C]">Team License</h4>
                  <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">For Business</p>
                </div>
              </div>

              {/* Looping Group Kategori */}
              {groupedFeatures.map((group, groupIdx) => (
                <div key={groupIdx} className="mb-2">
                  {/* Category Header */}
                  <div className="grid grid-cols-4 bg-gray-50 border-b border-gray-200">
                    <div className="col-span-4 p-4 pl-6 text-sm font-bold text-[#00263C] uppercase tracking-wide">
                      {group.category}
                    </div>
                  </div>

                  {/* Items dalam Kategori */}
                  {group.items.map((feature, featureIdx) => (
                    <div 
                      key={featureIdx} 
                      className="grid grid-cols-4 items-center border-b border-gray-100 transition-colors hover:bg-gray-50/50"
                    >
                      {/* Nama Fitur */}
                      <div className="p-4 pl-6 font-medium text-sm text-gray-700 flex items-center gap-2">
                        {feature.name}
                        {feature.info && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 cursor-help" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      
                      {/* Column 1 */}
                      <div className="p-4 text-center text-sm font-medium text-gray-600">
                        {typeof feature.c1 === 'boolean' ? (
                          feature.c1 ? <SolidCheckIcon color="#00263C" /> : <MinusIcon />
                        ) : (
                          feature.c1
                        )}
                      </div>

                      {/* Column 2 (Highlighted) */}
                      <div className="p-4 text-center text-sm font-bold text-[#C92A2A] bg-[#FFF5F5] whitespace-pre-line leading-relaxed">
                        {typeof feature.c2 === 'boolean' ? (
                          feature.c2 ? <SolidCheckIcon color="#C92A2A" /> : <MinusIcon />
                        ) : (
                          feature.c2
                        )}
                      </div>

                      {/* Column 3 */}
                      <div className="p-4 text-center text-sm font-medium text-gray-600">
                        {typeof feature.c3 === 'boolean' ? (
                          feature.c3 ? <SolidCheckIcon color="#00263C" /> : <MinusIcon />
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

      {/* ========================================== */}
      {/* SECTION 3: CALL TO ACTION (CTA)            */}
      {/* ========================================== */}
      <section className="relative bg-[#00263C] py-28 overflow-hidden text-center flex flex-col items-center justify-center font-sans">

        {/* --- Background Decorative Elements --- */}
        {/* Faded Circles & Dots */}
        <div className="absolute top-10 left-[15%] w-32 h-32 rounded-full bg-white/[0.03]"></div>
        <div className="absolute bottom-10 left-[30%] w-16 h-16 rounded-full border border-white/10"></div>
        <div className="absolute top-20 right-[15%] w-48 h-48 rounded-full bg-white/[0.02]"></div>
        <div className="absolute bottom-16 right-[10%] w-24 h-24 rounded-full border border-white/5"></div>

        {/* Scattered Profile Pictures (Using Placeholders) */}
        <img 
          src="https://i.pravatar.cc/150?img=11" 
          alt="Student Avatar" 
          className="absolute top-[-20px] left-[10%] w-20 h-20 rounded-full border-4 border-white object-cover shadow-lg hidden md:block" 
        />
        <img 
          src="https://i.pravatar.cc/150?img=5" 
          alt="Student Avatar" 
          className="absolute bottom-[20%] left-[15%] w-24 h-24 rounded-full border-4 border-white object-cover shadow-lg" 
        />
        <img 
          src="https://i.pravatar.cc/150?img=12" 
          alt="Student Avatar" 
          className="absolute top-[15%] right-[10%] w-20 h-20 rounded-full border-4 border-[#FFD54F] object-cover shadow-lg hidden md:block" 
        />
        <img 
          src="https://i.pravatar.cc/150?img=33" 
          alt="Student Avatar" 
          className="absolute bottom-[15%] right-[15%] w-20 h-20 rounded-full border-4 border-white object-cover shadow-lg" 
        />

        {/* --- Main Content --- */}
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 tracking-tight relative z-20">
            Are you ready to transform your career?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-10 font-light relative z-20">
            Enroll and start developing in-demand HR skills today!
          </p>
          
          {/* Button with smooth scroll function */}
          <button
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className="relative z-20 bg-[#C92A2A] text-white font-bold py-4 px-10 rounded hover:bg-red-800 transition-colors duration-300 uppercase tracking-widest text-sm shadow-xl"
          >
            Enroll Now
          </button>
        </div>
        
      </section>
      
    </>
  );
}

// Sub-components untuk UI elements
function FeatureItem({ text, active = false }) {
  return (
    <div className="flex items-start gap-3">
      <div className={`mt-[2px] flex-shrink-0 w-[18px] h-[18px] rounded-full flex items-center justify-center ${active ? 'bg-[#C92A2A]' : 'bg-[#1E88E5]'}`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </div>
      <span className="text-sm leading-tight text-white/90">{text}</span>
    </div>
  );
}

// Icon Solid Checkmark untuk desain baru
function SolidCheckIcon({ color }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto" viewBox="0 0 20 20" fill={color}>
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  );
}

// Icon Minus (jika fitur tidak tersedia)
function MinusIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-gray-300" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
    </svg>
  );
}