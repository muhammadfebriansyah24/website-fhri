'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import CTA from '@/components/CTA';
import { getLegalData } from '@/components/legalData';

// ============================================================
// REUSABLE UI COMPONENTS
// ============================================================
function Eyebrow({ children, tone = 'light' }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] ${
        tone === 'light' 
          ? 'bg-white/10 text-white border border-white/20' 
          : 'bg-[#00263C]/10 text-[#00263C]'
      }`}
    >
      {children}
    </span>
  );
}

// ============================================================
// KOMPONEN CHATBOT LEGAL 
// ============================================================
function LegalChatbotWidget({ isOpen, setIsOpen, botData }) {
  const [step, setStep] = useState(1); 
  const [chatType, setChatType] = useState(''); // 'new' | 'topup' | 'faq'
  const [userMessage, setUserMessage] = useState('');
  const [inputText, setInputText] = useState('');
  const chatEndRef = useRef(null);

  const ADMIN_WA_NUMBER = "628995722437"; 

  useEffect(() => {
    if (chatEndRef.current) chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [step, isOpen]);

  const handleSelectType = (type) => {
    setChatType(type);
    if (type === 'faq') {
      setStep(4);
    } else {
      setStep(2);
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    
    setUserMessage(inputText);
    setInputText('');
    
    setTimeout(() => {
      setStep(3);
    }, 600);
  };

  const handleSelectPackage = (selectedPackage) => {
    let waText = '';

    if (chatType === 'new') {
      waText = `${botData.waNewIntro}%0A_"${userMessage}"_%0A%0A${botData.waPackageSelect}%0A*${selectedPackage.title} (${selectedPackage.token}) - ${selectedPackage.price}*%0A%0A${botData.waClosingNew}`;
    } else {
      waText = `${botData.waTopUpIntro}%0A*${userMessage}*%0A%0A${botData.waPackageSelectTopUp}%0A*${selectedPackage.title} (${selectedPackage.token}) - ${selectedPackage.price}*%0A%0A${botData.waClosingTopUp}`;
    }
    
    window.open(`https://wa.me/${ADMIN_WA_NUMBER}?text=${waText}`, '_blank');
  };

  const resetChat = () => {
    setStep(1);
    setChatType('');
    setUserMessage('');
    setInputText('');
  };

  const closeChat = () => {
    setIsOpen(false);
    setTimeout(resetChat, 300);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeSlideUp { from { opacity: 0; transform: translateY(20px) scale(0.95); } to { opacity: 1; transform: translateY(0) scale(1); } }
        .animate-fade-slide-up { animation: fadeSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .custom-scrollbar::-webkit-scrollbar { width: 5px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
        details > summary { list-style: none; }
        details > summary::-webkit-details-marker { display: none; }
      `}} />

      {isOpen && (
        <div className="bg-white w-[350px] md:w-[400px] h-[550px] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-slate-200 mb-4 flex flex-col overflow-hidden animate-fade-slide-up origin-bottom-right">
          
          {/* Header Chat */}
          <div className="bg-[#00263C] text-white p-4 flex items-center justify-between shadow-md z-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 border border-white/20 rounded-full flex items-center justify-center backdrop-blur-sm shadow-inner">
                <div 
                  className="w-5 h-5 bg-white shrink-0"
                  style={{
                    WebkitMaskImage: `url('/ic_check-shield-outline.svg')`,
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskImage: `url('/ic_check-shield-outline.svg')`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                  }}
                />
              </div>
              <div>
                <h3 className="font-bold text-sm">{botData.header}</h3>
                <p className="text-[10px] text-green-400 flex items-center gap-1 font-medium"><span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span> {botData.online}</p>
              </div>
            </div>
            
            <button onClick={closeChat} className="text-white/60 hover:text-white transition-colors bg-white/10 p-1.5 rounded-lg group">
              <div 
                className="w-5 h-5 bg-current shrink-0 transition-colors"
                style={{
                  WebkitMaskImage: `url('/ic_x-mark.svg')`,
                  WebkitMaskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center',
                  maskImage: `url('/ic_x-mark.svg')`,
                  maskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'center',
                }}
              />
            </button>
          </div>

          {/* Area Percakapan */}
          <div className="flex-1 p-4 bg-[#F8FAFC] overflow-y-auto custom-scrollbar flex flex-col gap-4">
            
            {/* Step 1: Pesan Pembuka & Pilih Jalur */}
            <div className="flex flex-col gap-2 w-[90%]">
              <div className="bg-white border border-slate-200 text-slate-700 p-3.5 rounded-2xl rounded-tl-sm text-[13.5px] shadow-sm leading-relaxed">
                {botData.welcome}
              </div>
              <div className="bg-white border border-slate-200 text-slate-700 p-3.5 rounded-2xl rounded-tl-sm text-[13.5px] shadow-sm leading-relaxed">
                {botData.prompt}
              </div>
              
              {/* Tombol Pilihan Step 1 */}
              {step === 1 && (
                <div className="flex flex-col gap-2 mt-2 animate-fade-slide-up">
                  <button onClick={() => handleSelectType('new')} className="bg-[#00263C] text-white py-3 px-4 rounded-xl text-sm font-semibold hover:bg-blue-900 transition-colors shadow-sm text-left flex items-center">
                    <div 
                      className="w-4 h-4 mr-2 bg-yellow-400 shrink-0"
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
                    {botData.btnNew}
                  </button>
                  
                  <button onClick={() => handleSelectType('topup')} className="bg-white text-[#DC2626] border-2 border-[#DC2626] py-2.5 px-4 rounded-xl text-sm font-semibold hover:bg-red-50 transition-colors shadow-sm text-left flex items-center">
                    <div 
                      className="w-4 h-4 mr-2 bg-[#DC2626] shrink-0"
                      style={{
                        WebkitMaskImage: `url('/ic_refresh.svg')`,
                        WebkitMaskSize: 'contain',
                        WebkitMaskRepeat: 'no-repeat',
                        WebkitMaskPosition: 'center',
                        maskImage: `url('/ic_refresh.svg')`,
                        maskSize: 'contain',
                        maskRepeat: 'no-repeat',
                        maskPosition: 'center',
                      }}
                    />
                    {botData.btnTopUp}
                  </button>
                  
                  <button onClick={() => handleSelectType('faq')} className="bg-white text-slate-600 border border-slate-300 py-2.5 px-4 rounded-xl text-sm font-semibold hover:bg-slate-100 transition-colors shadow-sm text-left flex items-center">
                    <div 
                      className="w-4 h-4 mr-2 bg-slate-500 shrink-0"
                      style={{
                        WebkitMaskImage: `url('/ic_question-mark-circle-outline.svg')`,
                        WebkitMaskSize: 'contain',
                        WebkitMaskRepeat: 'no-repeat',
                        WebkitMaskPosition: 'center',
                        maskImage: `url('/ic_question-mark-circle-outline.svg')`,
                        maskSize: 'contain',
                        maskRepeat: 'no-repeat',
                        maskPosition: 'center',
                      }}
                    />
                    {botData.btnFaq}
                  </button>
                </div>
              )}
            </div>

            {/* Bubble Pilihan User Umum */}
            {step >= 2 && (
              <div className="bg-[#DC2626] text-white p-3 rounded-2xl rounded-tr-sm text-[13px] shadow-sm max-w-[85%] self-end">
                {chatType === 'new' ? botData.userSelectionNew : chatType === 'topup' ? botData.userSelectionTopUp : botData.userSelectionFaq}
              </div>
            )}

            {/* Step 4: KHUSUS TAMPILAN FAQ */}
            {step === 4 && chatType === 'faq' && (
              <div className="bg-white border border-slate-200 text-slate-700 p-4 rounded-2xl rounded-tl-sm text-[13.5px] shadow-sm w-full animate-fade-slide-up">
                <p className="mb-3 font-semibold text-[#00263C]">{botData.faqTitle}</p>
                
                <div className="space-y-2">
                  {botData.faqs.map((faq, index) => (
                    <details key={index} className="group bg-slate-50 border border-slate-200 rounded-xl overflow-hidden">
                      <summary className="text-[12.5px] font-bold p-3 cursor-pointer text-[#00263C] hover:text-[#DC2626] flex justify-between items-center bg-white transition-colors">
                        <span className="pr-4">{faq.q}</span>
                        <div 
                          className="w-4 h-4 shrink-0 bg-slate-400 group-open:rotate-180 transition-transform"
                          style={{
                            WebkitMaskImage: `url('/ic_arrow-short-down.svg')`,
                            WebkitMaskSize: 'contain',
                            WebkitMaskRepeat: 'no-repeat',
                            WebkitMaskPosition: 'center',
                            maskImage: `url('/ic_arrow-short-down.svg')`,
                            maskSize: 'contain',
                            maskRepeat: 'no-repeat',
                            maskPosition: 'center',
                          }}
                        />
                      </summary>
                      <div className="p-3 pt-1 text-[12px] text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50">
                        {faq.a}
                      </div>
                    </details>
                  ))}
                </div>

                <p className="mt-4 mb-2 text-center text-[12px] text-slate-500">{botData.faqMore}</p>
                
                <button onClick={resetChat} className="w-full bg-[#00263C] text-white py-2.5 rounded-xl text-[12px] font-bold hover:bg-blue-900 transition-colors flex items-center justify-center gap-2">
                  <div 
                    className="w-4 h-4 bg-current shrink-0 rotate-180"
                    style={{
                      WebkitMaskImage: `url('/ic_arrow-right.svg')`,
                      WebkitMaskSize: 'contain',
                      WebkitMaskRepeat: 'no-repeat',
                      WebkitMaskPosition: 'center',
                      maskImage: `url('/ic_arrow-right.svg')`,
                      maskSize: 'contain',
                      maskRepeat: 'no-repeat',
                      maskPosition: 'center',
                    }}
                  />
                  {botData.btnBack}
                </button>
              </div>
            )}

            {/* Step 2: Form Pertanyaan */}
            {step === 2 && chatType !== 'faq' && (
              <div className="bg-white border border-slate-200 text-slate-700 p-3.5 rounded-2xl rounded-tl-sm text-[13.5px] shadow-sm w-[90%] animate-fade-slide-up">
                {chatType === 'new' ? botData.inputPromptNew : botData.inputPromptTopUp}
              </div>
            )}

            {/* Bubble Jawaban User di Step 2 */}
            {step >= 3 && chatType !== 'faq' && (
              <div className="bg-[#DC2626] text-white p-3 rounded-2xl rounded-tr-sm text-[13px] shadow-sm max-w-[85%] self-end">
                {userMessage}
              </div>
            )}

            {/* Step 3: Pilih Paket Token */}
            {step === 3 && chatType !== 'faq' && (
              <div className="bg-white border border-slate-200 text-slate-700 p-4 rounded-2xl rounded-tl-sm text-[13.5px] shadow-sm w-full animate-fade-slide-up">
                <p className="mb-4">
                  {chatType === 'new' ? botData.packagePromptNew : botData.packagePromptTopUp}
                </p>
                
                <div className="space-y-2.5">
                  {botData.packages.map((pkg) => (
                    <button 
                      key={pkg.id}
                      onClick={() => handleSelectPackage(pkg)}
                      className="w-full text-left bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-[#00263C] p-3.5 rounded-xl transition-all group shadow-sm"
                    >
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="font-bold text-[#00263C] text-[14px]">{pkg.title}</span>
                        <span className="text-[11px] bg-[#00263C]/10 text-[#00263C] px-2 py-0.5 rounded-full font-extrabold">{pkg.token}</span>
                      </div>
                      <p className="text-[11.5px] text-slate-500 mb-2.5 leading-tight">{pkg.desc}</p>
                      <p className="text-sm font-black text-[#DC2626]">{pkg.price}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            <div ref={chatEndRef} />
          </div>

          {/* Area Input */}
          {step === 2 && chatType !== 'faq' && (
            <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-slate-200 flex gap-2">
              <input 
                type="text" 
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={chatType === 'new' ? botData.inputPlaceholderNew : botData.inputPlaceholderTopUp}
                className="flex-1 bg-slate-100 rounded-xl px-4 py-2.5 text-[13px] focus:outline-none focus:ring-2 focus:ring-[#00263C] transition-all"
                autoFocus
              />
              <button type="submit" disabled={!inputText.trim()} className="bg-[#00263C] hover:bg-blue-900 text-white w-11 h-11 rounded-xl flex items-center justify-center disabled:opacity-50 transition-colors">
                <div 
                  className="w-5 h-5 bg-current shrink-0"
                  style={{
                    WebkitMaskImage: `url('/ic_send-outline.svg')`,
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskImage: `url('/ic_send-outline.svg')`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                  }}
                />
              </button>
            </form>
          )}
        </div>
      )}

      {/* TOMBOL FLOATING WHATSAPP */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-[#00263C] hover:bg-[#0B2A4A] border border-white/10 text-white w-16 h-16 rounded-full shadow-[0_10px_25px_rgba(0,38,60,0.4)] flex items-center justify-center transition-transform hover:scale-110 animate-bounce"
          style={{ animationDuration: '3s' }}
        >
          <div 
            className="w-8 h-8 bg-[#25D366] shrink-0"
            style={{
              WebkitMaskImage: `url('/ic_whatsapp-outline.svg')`,
              WebkitMaskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center',
              maskImage: `url('/ic_whatsapp-outline.svg')`,
              maskSize: 'contain',
              maskRepeat: 'no-repeat',
              maskPosition: 'center',
            }}
          />
        </button>
      )}
    </div>
  );
}

// ============================================================
// MAIN PAGE COMPONENT
// ============================================================
export default function IndustrialRelationsPage() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  const locale = useLocale();
  const data = getLegalData(locale);

  return (
    <main className="min-h-screen bg-[#F8FAFC] font-sans">
      
      {/* SECTION 1 : HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center bg-[#00263C] overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#DC2626]/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>

        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 py-16 md:py-20 relative z-10 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          <div className="md:w-1/2 flex flex-col items-start text-left">
            <Eyebrow tone="light">{data.hero.eyebrow}</Eyebrow>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.1] tracking-tight">
              {data.hero.title1} <br/> <span className="text-white/70">{data.hero.title2}</span>
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-lg">
              {data.hero.description}
            </p>
          </div>

          <div className="md:w-1/2 relative w-full flex justify-center lg:justify-end">
            <div className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px]">
              <div className="absolute inset-0 border-[2px] border-white/20 rounded-full animate-[spin_20s_linear_infinite] border-dashed"></div>
              
              <div className="absolute inset-4 rounded-full overflow-hidden border-8 border-[#00263C] shadow-2xl">
                <Image src="/herokonten2.jpg" alt="Legal Advisory Meeting" fill className="object-cover" unoptimized />
              </div>
              
              <div className="absolute bottom-8 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <div 
                    className="w-6 h-6 bg-green-600 shrink-0"
                    style={{
                      WebkitMaskImage: `url('/ic_check.svg')`,
                      WebkitMaskSize: 'contain',
                      WebkitMaskRepeat: 'no-repeat',
                      WebkitMaskPosition: 'center',
                      maskImage: `url('/ic_check.svg')`,
                      maskSize: 'contain',
                      maskRepeat: 'no-repeat',
                      maskPosition: 'center',
                    }}
                  />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{data.hero.badgeStatus}</p>
                  <p className="text-sm font-black text-[#00263C]">{data.hero.badgeText}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2 : AREA OF EXPERTISE */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative -mt-16 z-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00263C] bg-white inline-block px-10 py-4 rounded-full shadow-md border border-slate-100">
            {data.expertise.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {data.expertise.services.map((service, idx) => (
            <div key={idx} className="group bg-white p-8 md:p-10 rounded-[2rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-15px_rgba(0,38,60,0.15)] transition-all duration-300 border border-slate-100 relative overflow-hidden">
              <div className="absolute -right-4 -top-8 text-[120px] font-black text-slate-50/50 group-hover:text-blue-50/50 transition-colors pointer-events-none select-none">
                {service.id}
              </div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 bg-[#F1F5F6] group-hover:bg-[#00263C] rounded-2xl flex items-center justify-center transition-colors duration-300 mb-8">
                  <div 
                    className="w-8 h-8 bg-[#00263C] group-hover:bg-white transition-colors duration-300 shrink-0"
                    style={{
                      WebkitMaskImage: `url('/${service.icon}')`,
                      WebkitMaskSize: 'contain',
                      WebkitMaskRepeat: 'no-repeat',
                      WebkitMaskPosition: 'center',
                      maskImage: `url('/${service.icon}')`,
                      maskSize: 'contain',
                      maskRepeat: 'no-repeat',
                      maskPosition: 'center',
                    }}
                  />
                </div>
                <h3 className="text-2xl font-bold text-[#00263C] mb-4 leading-snug">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed mb-auto">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. WHY IT MATTERS */}
      <section className="bg-[#00263C] py-24 px-6 md:px-12 text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <Eyebrow tone="light">{data.whyMatters.eyebrow}</Eyebrow>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              {data.whyMatters.title1} <br/>
              <span className="text-[#DC2626]">{data.whyMatters.title2}</span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              {data.whyMatters.description}
            </p>
            
            <div className="space-y-6 pt-4">
              {data.whyMatters.bullets.map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-8 h-8 shrink-0 rounded-full bg-[#DC2626] flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </div>
                  <p className="text-slate-200 mt-1">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[600px] w-full rounded-[2.5rem] overflow-hidden">
            <Image src="/herokonten6.jpg" alt="Professional Consultation" fill className="object-cover opacity-90 hover:scale-105 transition-transform duration-700" unoptimized />
            <div className="absolute inset-0 bg-gradient-to-t from-[#00263C] via-transparent to-transparent"></div>
          </div>

        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <CTA />

      {/* === WIDGET CHATBOT === */}
      <LegalChatbotWidget isOpen={isChatOpen} setIsOpen={setIsChatOpen} botData={data.chatbot} />

    </main>
  );
}