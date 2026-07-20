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
    <main className="min-h-screen font-sans bg-white">
      
      {/* ========================================== */}
      {/* SECTION 1: PRICING                         */}
      {/* ========================================== */}
      <section id="pricing" className="relative bg-[#00263C] text-[#FFFFFF] pt-24 pb-32 md:pt-32 md:pb-40 px-6 md:px-12 overflow-hidden">
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
          <div className="text-center mb-8">
            <span className="inline-flex items-center rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] bg-white/10 text-white border border-white/20 mb-5">
              FHRI Pricing
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] text-balance mb-6">
              Maximize Your Career Growth <br className="hidden md:block" /> with Industry-Leading HR Training
            </h1>

            <div className="flex items-center justify-center gap-4 mt-8">
              <span className={`font-semibold text-sm ${isYearly ? "text-white" : "text-slate-400"}`}>Billed Yearly</span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className="w-14 h-8 bg-white rounded-full flex items-center px-1 transition-colors duration-300 relative focus:outline-none shadow-inner"
              >
                <div className={`w-6 h-6 bg-[#00263C] rounded-full shadow-md transform transition-transform duration-300 ${isYearly ? "translate-x-0" : "translate-x-6"}`}></div>
              </button>
              <span className={`font-semibold text-sm ${!isYearly ? "text-white" : "text-slate-400"}`}>Billed Monthly</span>
            </div>
            
            {/* Gap label Save 20% diperkecil dengan margin (mt-5 mb-0) */}
            <p className="text-[#C92A2A] text-xs font-bold mt-5 mb-0 italic tracking-widest bg-[#C92A2A]/10 inline-block px-4 py-1.5 rounded-full border border-[#C92A2A]/20">
              SAVE 20% WITH ANNUAL BILLING
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* Card 1: HR Boot Camp */}
            {/* Ditambahkan lg:mt-5 agar card sedikit turun, memastikan card tengah jadi yang paling tinggi posisinya */}
            <div className="flex flex-col w-full lg:mt-5">
              {/* Tinggi dipatok persis di h-[380px] */}
              <div className="bg-white text-[#00263C] rounded-[1.75rem] p-7 md:p-8 shadow-lg h-[380px] flex flex-col relative z-10">
                <div>
                  <h3 className="text-2xl font-bold mb-3">HR Boot Camp</h3>
                  <p className="text-[13.5px] text-slate-500 leading-relaxed">Land a promotion by learning a new skill and earning a certificate</p>
                </div>
                {/* Flex-grow menempatkan harga persis di tengah ruang yang tersisa */}
                <div className="flex-grow flex flex-col justify-center my-2">
                  <div className="text-4xl font-extrabold mb-1 tracking-tight"><span className="text-xl mr-1 font-bold text-slate-400">Rp</span>{isYearly ? "8,850,000" : "850,000"}</div>
                  <p className="text-[13px] font-bold text-slate-500">{isYearly ? "1 Certificate Program" : "/ per month"}</p>
                </div>
                {/* Mt-auto menekan tombol selalu rata di paling bawah */}
                <button className="mt-auto w-full py-3.5 border-2 border-[#C92A2A] text-[#C92A2A] font-bold rounded-lg hover:bg-[#C92A2A] hover:text-white transition-colors duration-300 uppercase tracking-wide text-sm">
                  Select Program
                </button>
              </div>
              
              <div className="mt-8 space-y-4 px-4">
                <FeatureItem text="1 Certificate Program" />
                <FeatureItem text="12 months access" />
                <FeatureItem text="Expert community & support" />
                <FeatureItem text="30-day money-back guarantee" />
              </div>
            </div>

            {/* Card 2: Full Academy Access (Highlighted) */}
            <div className="flex flex-col w-full relative z-20">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#C92A2A] text-white px-6 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest shadow-md whitespace-nowrap text-center z-30">
                Best Investment
              </div>
              {/* Tinggi dipatok h-[420px] agar lebih panjang dari card kiri & kanan */}
              <div className="bg-white text-[#00263C] rounded-[1.75rem] p-7 md:p-8 shadow-2xl ring-4 ring-[#C92A2A] h-[420px] flex flex-col relative z-10">
                <div>
                  <h3 className="text-2xl font-bold mb-3">Full Academy Access</h3>
                  <p className="text-[13.5px] text-slate-500 leading-relaxed">Become a continuous learner and stay up-to-date with in-demand HR skills</p>
                </div>
                <div className="flex-grow flex flex-col justify-center my-2">
                  {isYearly && <span className="line-through text-slate-400 text-sm block mb-1 font-medium">Rp 18,200,000</span>}
                  <div className="text-4xl font-extrabold text-[#C92A2A] mb-1 tracking-tight"><span className="text-xl mr-1 font-bold text-[#00263C]">Rp</span>{isYearly ? "14,560,000" : "1,456,000"}</div>
                  <div className="flex items-center gap-2">
                    <p className="text-[13px] text-slate-500 font-medium">{isYearly ? "/ per year" : "/ per month"}</p>
                    {isYearly && <span className="text-[13px] font-bold text-[#C92A2A]">• All 16 Programs</span>}
                  </div>
                </div>
                <button className="mt-auto w-full py-3.5 bg-[#C92A2A] text-white font-bold rounded-lg hover:bg-[#a82222] transition-colors duration-300 uppercase tracking-wide text-sm shadow-[0_4px_14px_rgba(201,42,42,0.4)]">
                  Enroll Now
                </button>
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
            {/* Ditambahkan lg:mt-5, persis seperti card paling kiri */}
            <div className="flex flex-col w-full lg:mt-5">
              {/* Tinggi dipatok persis di h-[380px] */}
              <div className="bg-white text-[#00263C] rounded-[1.75rem] p-7 md:p-8 shadow-lg h-[380px] flex flex-col relative z-10">
                <div>
                  <h3 className="text-2xl font-bold mb-3">Team License</h3>
                  <p className="text-[13.5px] text-slate-500 leading-relaxed">Empower teams of 2+ with world-class HR skills and assessments</p>
                </div>
                <div className="flex-grow flex flex-col justify-center my-2">
                  <div className="text-sm text-slate-400 mb-1 font-medium">Starting from</div>
                  <div className="text-4xl font-extrabold mb-1 tracking-tight"><span className="text-xl mr-1 font-bold text-slate-400">Rp</span>23,690,000</div>
                  <p className="text-[13px] font-bold text-slate-500">All 16 Certificate Programs</p>
                </div>
                <button className="mt-auto w-full py-3.5 border-2 border-[#C92A2A] text-[#C92A2A] font-bold rounded-lg hover:bg-[#C92A2A] hover:text-white transition-colors duration-300 uppercase tracking-wide text-sm">
                  Learn More
                </button>
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
      {/* SECTION 2: COMPARE PLANS                   */}
      {/* ========================================== */}
      <section id="compare" className="py-24 md:py-32 bg-white text-[#00263C] px-6 md:px-12 relative">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] bg-[#C92A2A]/10 text-[#C92A2A] mb-5">
              Plan Comparison
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#00263C] leading-tight mb-6">Detailed Feature Breakdown</h2>
            <p className="text-lg text-slate-500 leading-relaxed">Find out exactly what is included in each of our training plans and choose the one that perfectly aligns with your career goals.</p>
          </div>

          <div className="w-full overflow-x-auto shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[1.75rem] ring-1 ring-slate-100">
            <div className="min-w-[850px] bg-white rounded-[1.75rem] overflow-hidden">
              
              {/* Sticky Header untuk Tabel */}
              <div className="grid grid-cols-4 border-b border-slate-100 bg-white sticky top-0 z-10">
                <div className="p-6"></div>
                <div className="p-6 text-center">
                  <h4 className="font-bold text-lg text-[#00263C]">HR Boot Camp</h4>
                  <p className="text-[11px] text-slate-400 mt-1.5 uppercase tracking-widest font-bold">Single Skill</p>
                </div>
                {/* Kolom Tengah Di-Highlight */}
                <div className="p-6 text-center bg-[#FFF5F5] border-t-4 border-[#C92A2A]">
                  <h4 className="font-bold text-lg text-[#C92A2A]">Full Academy</h4>
                  <p className="text-[11px] text-[#C92A2A]/70 mt-1.5 uppercase tracking-widest font-bold">Best Value</p>
                </div>
                <div className="p-6 text-center">
                  <h4 className="font-bold text-lg text-[#00263C]">Team License</h4>
                  <p className="text-[11px] text-slate-400 mt-1.5 uppercase tracking-widest font-bold">For Business</p>
                </div>
              </div>

              {/* Looping Group Kategori */}
              {groupedFeatures.map((group, groupIdx) => (
                <div key={groupIdx} className="mb-0">
                  {/* Category Header */}
                  <div className="grid grid-cols-4 bg-slate-50 border-b border-slate-100">
                    <div className="col-span-4 p-4 pl-8 text-sm font-bold text-[#00263C] uppercase tracking-[0.15em]">
                      {group.category}
                    </div>
                  </div>

                  {/* Items dalam Kategori */}
                  {group.items.map((feature, featureIdx) => (
                    <div 
                      key={featureIdx} 
                      className="grid grid-cols-4 items-center border-b border-slate-100 transition-colors hover:bg-slate-50/50"
                    >
                      {/* Nama Fitur */}
                      <div className="p-4 pl-8 font-medium text-[14px] text-slate-600 flex items-center gap-2">
                        {feature.name}
                        {feature.info && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-400 cursor-help" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      
                      {/* Column 1 */}
                      <div className="p-4 text-center text-[13.5px] font-medium text-slate-500">
                        {typeof feature.c1 === 'boolean' ? (
                          feature.c1 ? <SolidCheckIcon color="#00263C" /> : <MinusIcon />
                        ) : (
                          feature.c1
                        )}
                      </div>

                      {/* Column 2 (Highlighted) */}
                      <div className="p-4 text-center text-[13.5px] font-bold text-[#C92A2A] bg-[#FFF5F5] whitespace-pre-line leading-relaxed">
                        {typeof feature.c2 === 'boolean' ? (
                          feature.c2 ? <SolidCheckIcon color="#C92A2A" /> : <MinusIcon />
                        ) : (
                          feature.c2
                        )}
                      </div>

                      {/* Column 3 */}
                      <div className="p-4 text-center text-[13.5px] font-medium text-slate-500">
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
      <section className="relative bg-[#00263C] py-24 md:py-32 px-6 md:px-12 overflow-hidden text-center flex flex-col items-center justify-center">

        {/* --- Background Decorative Elements --- */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-[15%] w-32 h-32 rounded-full bg-white/[0.03]"></div>
          <div className="absolute bottom-10 left-[30%] w-16 h-16 rounded-full border border-white/10"></div>
          <div className="absolute top-20 right-[15%] w-48 h-48 rounded-full bg-white/[0.02]"></div>
          <div className="absolute bottom-16 right-[10%] w-24 h-24 rounded-full border border-white/5"></div>
        </div>

        {/* Scattered Profile Pictures (Avatars) */}
        <img 
          src="https://i.pravatar.cc/150?img=11" 
          alt="Student Avatar" 
          className="absolute top-10 left-[10%] w-20 h-20 rounded-full border-4 border-[#00263C] shadow-lg hidden md:block opacity-80" 
        />
        <img 
          src="https://i.pravatar.cc/150?img=5" 
          alt="Student Avatar" 
          className="absolute bottom-[20%] left-[15%] w-24 h-24 rounded-full border-4 border-[#00263C] shadow-lg opacity-80" 
        />
        {/* Border merah dihapus, diganti menjadi biru navy agar konsisten */}
        <img 
          src="https://i.pravatar.cc/150?img=12" 
          alt="Student Avatar" 
          className="absolute top-[15%] right-[10%] w-20 h-20 rounded-full border-4 border-[#00263C] shadow-lg hidden md:block opacity-80" 
        />
        <img 
          src="https://i.pravatar.cc/150?img=33" 
          alt="Student Avatar" 
          className="absolute bottom-[15%] right-[15%] w-20 h-20 rounded-full border-4 border-[#00263C] shadow-lg opacity-80" 
        />

        {/* --- Main Content --- */}
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Are you ready to transform your career?
          </h2>
          <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
            Enroll and start developing in-demand HR skills today!
          </p>
          
          <button
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className="relative z-20 bg-[#C92A2A] hover:bg-[#a82222] text-white font-bold px-8 py-4 rounded-lg shadow-[0_4px_20px_rgba(201,42,42,0.4)] hover:shadow-[0_6px_25px_rgba(201,42,42,0.6)] hover:-translate-y-1 transition-all duration-300 uppercase tracking-wide text-sm"
          >
            Enroll Now
          </button>
        </div>
        
      </section>
      
    </main>
  );
}

// Sub-components untuk UI elements
function FeatureItem({ text, active = false }) {
  return (
    <div className="flex items-start gap-3">
      <div className={`mt-[3px] flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${active ? 'bg-[#C92A2A]' : 'bg-slate-500'}`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-[10px] w-[10px] text-white" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </div>
      <span className={`text-[13.5px] leading-relaxed ${active ? 'text-white' : 'text-slate-300'}`}>{text}</span>
    </div>
  );
}

// Icon Solid Checkmark untuk desain tabel
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
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-slate-300" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
    </svg>
  );
}