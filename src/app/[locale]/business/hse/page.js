'use client'; 

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import CTA from '@/components/CTA';
import { getHseData } from '@/components/hseData';

// ============================================================
// KOMPONEN CHATBOT LEGAL 
// ============================================================
function LegalChatbotWidget({ isOpen, setIsOpen, botData }) {
  const [step, setStep] = useState(1); 
  const [chatType, setChatType] = useState(''); 
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
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
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
          <div className="bg-brand-navy text-white p-4 flex items-center justify-between shadow-md z-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 border border-white/20 rounded-full flex items-center justify-center backdrop-blur-sm shadow-inner">
                <div 
                  className="w-5 h-5 bg-white shrink-0"
                  style={{
                    WebkitMaskImage: `url('/icons/ic_check-shield-outline.svg')`,
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskImage: `url('/icons/ic_check-shield-outline.svg')`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                  }}
                />
              </div>
              <div>
                <div className="font-semibold text-sm">{botData.header}</div>
                <div className="text-xs text-green-400 flex items-center gap-1 font-medium"><span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span> {botData.online}</div>
              </div>
            </div>
            
            <button onClick={closeChat} className="text-white/60 hover:text-white transition-colors bg-white/10 p-1.5 rounded-lg group">
              <div 
                className="w-5 h-5 bg-current shrink-0 transition-colors"
                style={{
                  WebkitMaskImage: `url('/icons/ic_x-mark.svg')`,
                  WebkitMaskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center',
                  maskImage: `url('/icons/ic_x-mark.svg')`,
                  maskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'center',
                }}
              />
            </button>
          </div>

          {/* Area Percakapan */}
          <div className="flex-1 p-4 bg-slate-50 overflow-y-auto custom-scrollbar flex flex-col gap-4">
            
            {/* Step 1: Pesan Pembuka & Pilih Jalur */}
            <div className="flex flex-col gap-2 w-[90%]">
              <div className="bg-white border border-slate-200 text-slate-700 p-3.5 rounded-2xl rounded-tl-sm text-sm shadow-sm leading-relaxed">
                {botData.welcome}
              </div>
              <div className="bg-white border border-slate-200 text-slate-700 p-3.5 rounded-2xl rounded-tl-sm text-sm shadow-sm leading-relaxed">
                {botData.prompt}
              </div>
              
              {/* Tombol Pilihan Step 1 */}
              {step === 1 && (
                <div className="flex flex-col gap-2 mt-2 animate-fade-slide-up">
                  <button onClick={() => handleSelectType('new')} className="bg-brand-navy text-white py-3 px-4 rounded-xl text-sm font-semibold hover:bg-brand-navy/90 transition-colors shadow-sm text-left flex items-center">
                    <div 
                      className="w-4 h-4 mr-2 bg-yellow-400 shrink-0"
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
                    {botData.btnNew}
                  </button>
                  
                  <button onClick={() => handleSelectType('topup')} className="bg-white text-brand-red border-2 border-brand-red py-2.5 px-4 rounded-xl text-sm font-semibold hover:bg-red-50 transition-colors shadow-sm text-left flex items-center">
                    <div 
                      className="w-4 h-4 mr-2 bg-brand-red shrink-0"
                      style={{
                        WebkitMaskImage: `url('/icons/ic_refresh.svg')`,
                        WebkitMaskSize: 'contain',
                        WebkitMaskRepeat: 'no-repeat',
                        WebkitMaskPosition: 'center',
                        maskImage: `url('/icons/ic_refresh.svg')`,
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
                        WebkitMaskImage: `url('/icons/ic_question-mark-circle-outline.svg')`,
                        WebkitMaskSize: 'contain',
                        WebkitMaskRepeat: 'no-repeat',
                        WebkitMaskPosition: 'center',
                        maskImage: `url('/icons/ic_question-mark-circle-outline.svg')`,
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
              <div className="bg-brand-red text-white p-3 rounded-2xl rounded-tr-sm text-sm shadow-sm max-w-[85%] self-end">
                {chatType === 'new' ? botData.userSelectionNew : chatType === 'topup' ? botData.userSelectionTopUp : botData.userSelectionFaq}
              </div>
            )}

            {/* Step 4: KHUSUS TAMPILAN FAQ */}
            {step === 4 && chatType === 'faq' && (
              <div className="bg-white border border-slate-200 text-slate-700 p-4 rounded-2xl rounded-tl-sm text-sm shadow-sm w-full animate-fade-slide-up">
                <div className="mb-3 font-semibold text-brand-navy">{botData.faqTitle}</div>
                
                <div className="space-y-2">
                  {botData.faqs.map((faq, index) => (
                    <details key={index} className="group bg-slate-50 border border-slate-200 rounded-xl overflow-hidden">
                      <summary className="text-xs font-semibold p-3 cursor-pointer text-brand-navy hover:text-brand-red flex justify-between items-center bg-white transition-colors">
                        <span className="pr-4">{faq.q}</span>
                        <div 
                          className="w-4 h-4 shrink-0 bg-slate-400 group-open:rotate-180 transition-transform"
                          style={{
                            WebkitMaskImage: `url('/icons/ic_arrow-short-down.svg')`,
                            WebkitMaskSize: 'contain',
                            WebkitMaskRepeat: 'no-repeat',
                            WebkitMaskPosition: 'center',
                            maskImage: `url('/icons/ic_arrow-short-down.svg')`,
                            maskSize: 'contain',
                            maskRepeat: 'no-repeat',
                            maskPosition: 'center',
                          }}
                        />
                      </summary>
                      <div className="p-3 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50">
                        {faq.a}
                      </div>
                    </details>
                  ))}
                </div>

                <div className="mt-4 mb-2 text-center text-xs text-slate-500">{botData.faqMore}</div>
                
                <button onClick={resetChat} className="w-full bg-brand-navy text-white py-2.5 rounded-xl text-xs font-semibold hover:bg-brand-navy/90 transition-colors flex items-center justify-center gap-2">
                  <div 
                    className="w-4 h-4 bg-current shrink-0 rotate-180"
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
                  {botData.btnBack}
                </button>
              </div>
            )}

            {/* Step 2: Form Pertanyaan */}
            {step === 2 && chatType !== 'faq' && (
              <div className="bg-white border border-slate-200 text-slate-700 p-3.5 rounded-2xl rounded-tl-sm text-sm shadow-sm w-[90%] animate-fade-slide-up">
                {chatType === 'new' ? botData.inputPromptNew : botData.inputPromptTopUp}
              </div>
            )}

            {/* Bubble Jawaban User di Step 2 */}
            {step >= 3 && chatType !== 'faq' && (
              <div className="bg-brand-red text-white p-3 rounded-2xl rounded-tr-sm text-sm shadow-sm max-w-[85%] self-end">
                {userMessage}
              </div>
            )}

            {/* Step 3: Pilih Paket Token */}
            {step === 3 && chatType !== 'faq' && (
              <div className="bg-white border border-slate-200 text-slate-700 p-4 rounded-2xl rounded-tl-sm text-sm shadow-sm w-full animate-fade-slide-up">
                <div className="mb-4">
                  {chatType === 'new' ? botData.packagePromptNew : botData.packagePromptTopUp}
                </div>
                
                <div className="space-y-2.5">
                  {botData.packages.map((pkg) => (
                    <button 
                      key={pkg.id}
                      onClick={() => handleSelectPackage(pkg)}
                      className="w-full text-left bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-brand-navy p-3.5 rounded-xl transition-all group shadow-sm"
                    >
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="font-semibold text-brand-navy text-sm">{pkg.title}</span>
                        <span className="text-xs bg-brand-navy/10 text-brand-navy px-2 py-0.5 rounded-full font-semibold">{pkg.token}</span>
                      </div>
                      <div className="text-xs text-slate-500 mb-2.5 leading-tight">{pkg.desc}</div>
                      <div className="text-sm font-semibold text-brand-red">{pkg.price}</div>
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
                className="flex-1 bg-slate-100 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy transition-all"
                autoFocus
              />
              <button type="submit" disabled={!inputText.trim()} className="bg-brand-navy hover:bg-brand-navy/90 text-white w-11 h-11 rounded-xl flex items-center justify-center disabled:opacity-50 transition-colors">
                <div 
                  className="w-5 h-5 bg-current shrink-0"
                  style={{
                    WebkitMaskImage: `url('/icons/ic_send-outline.svg')`,
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskImage: `url('/icons/ic_send-outline.svg')`,
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
          className="bg-brand-navy hover:bg-brand-navy/90 border border-white/10 text-white w-16 h-16 rounded-full shadow-[0_10px_25px_rgba(0,38,60,0.4)] flex items-center justify-center transition-transform hover:scale-110 animate-bounce"
          style={{ animationDuration: '3s' }}
        >
          <div 
            className="w-8 h-8 bg-green-500 shrink-0"
            style={{
              WebkitMaskImage: `url('/icons/ic_whatsapp-outline.svg')`,
              WebkitMaskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center',
              maskImage: `url('/icons/ic_whatsapp-outline.svg')`,
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
export default function HsePage() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  const locale = useLocale();
  const data = getHseData(locale);

  return (
    <main className="min-h-screen bg-white text-brand-navy selection:bg-brand-red selection:text-white overflow-hidden">
      
      {/* =========================================
          SECTION 1: HERO BANNER (HSE) 
          ========================================= */}
      <section className="relative min-h-[85vh] flex items-center bg-brand-navy overflow-hidden">
        
        {/* Background Image & Gradient */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image 
            src="https://images.unsplash.com/photo-1628147529780-36964fbb8d54?q=80&w=2000&auto=format&fit=crop" 
            alt="Safe and orderly industrial work environment in the morning" 
            fill
            unoptimized
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-transparent"></div>
          <div className="absolute inset-0 bg-brand-navy/50 md:hidden"></div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-10 flex flex-col justify-center text-left">
          
          <div className="max-w-3xl -mt-4 md:-mt-8">
            
            {/* Eyebrow Merah Bersih (Tanpa Background/Border) */}
            <div className="mb-4 md:mb-5">
              <span className="text-eyebrow-lg block drop-shadow-md">
                {data.hero.badge}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-white text-balance mb-6 md:mb-8">
              {data.hero.title1} <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">{data.hero.title2}</span> <br className="hidden md:block"/>
              {data.hero.title3}
            </h1>

            {/* Sub-headline - Diperlebar menjadi max-w-2xl */}
            <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mb-10 drop-shadow-md">
              {data.hero.description}
            </p>

            {/* Quick Highlights */}
            <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6 border-t border-white/20 pt-8">
              <div>
                <div className="text-3xl font-bold text-white mb-1">{data.hero.highlights[0].value}</div>
                <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">{data.hero.highlights[0].label}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">{data.hero.highlights[1].value}</div>
                <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">{data.hero.highlights[1].label}</div>
              </div>
              <div className="hidden md:block">
                <div className="text-3xl font-bold text-white mb-1">{data.hero.highlights[2].value}</div>
                <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">{data.hero.highlights[2].label}</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 2: CORE HSE PILLARS 
          ========================================= */}
      <section className="bg-white py-24 md:py-32 px-6 md:px-12 relative z-10 border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-eyebrow-lg block mb-4 md:mb-5">
              {data.pillars.badge}
            </span>
            <h2 className="text-brand-navy text-balance mb-6 md:mb-8">
              {data.pillars.title}
            </h2>
            <p className="text-slate-500 leading-relaxed text-lg">
              {data.pillars.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            
            <article className="group rounded-[1.75rem] bg-slate-50 p-8 md:p-10 border border-slate-100 transition-all duration-500 hover:shadow-xl hover:border-brand-red/20 hover:-translate-y-1.5 flex flex-col h-full">
              <div className="w-14 h-14 bg-brand-navy rounded-2xl flex items-center justify-center mb-6 shrink-0 transition-colors duration-300 group-hover:bg-brand-red shadow-sm">
                <div 
                  className="w-6 h-6 bg-white shrink-0"
                  style={{
                    WebkitMaskImage: `url('/icons/ic_check-shield-outline.svg')`,
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskImage: `url('/icons/ic_check-shield-outline.svg')`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                  }}
                />
              </div>
              <h3 className="text-brand-navy mb-3 group-hover:text-brand-red transition-colors duration-300">
                {data.pillars.cards[0].title}
              </h3>
              <p className="text-slate-500 leading-relaxed flex-grow text-sm md:text-base">
                {data.pillars.cards[0].desc}
              </p>
            </article>

            <article className="group rounded-[1.75rem] bg-slate-50 p-8 md:p-10 border border-slate-100 transition-all duration-500 hover:shadow-xl hover:border-brand-red/20 hover:-translate-y-1.5 flex flex-col h-full">
              <div className="w-14 h-14 bg-brand-navy rounded-2xl flex items-center justify-center mb-6 shrink-0 transition-colors duration-300 group-hover:bg-brand-red shadow-sm">
                <div 
                  className="w-6 h-6 bg-white shrink-0"
                  style={{
                    WebkitMaskImage: `url('/icons/ic_document-check-outline.svg')`,
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskImage: `url('/icons/ic_document-check-outline.svg')`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                  }}
                />
              </div>
              <h3 className="text-brand-navy mb-3 group-hover:text-brand-red transition-colors duration-300">
                {data.pillars.cards[1].title}
              </h3>
              <p className="text-slate-500 leading-relaxed flex-grow text-sm md:text-base">
                {data.pillars.cards[1].desc}
              </p>
            </article>

            <article className="group rounded-[1.75rem] bg-slate-50 p-8 md:p-10 border border-slate-100 transition-all duration-500 hover:shadow-xl hover:border-brand-red/20 hover:-translate-y-1.5 flex flex-col h-full">
              <div className="w-14 h-14 bg-brand-navy rounded-2xl flex items-center justify-center mb-6 shrink-0 transition-colors duration-300 group-hover:bg-brand-red shadow-sm">
                <div 
                  className="w-6 h-6 bg-white shrink-0"
                  style={{
                    WebkitMaskImage: `url('/icons/ic_globe-outline.svg')`,
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskImage: `url('/icons/ic_globe-outline.svg')`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                  }}
                />
              </div>
              <h3 className="text-brand-navy mb-3 group-hover:text-brand-red transition-colors duration-300">
                {data.pillars.cards[2].title}
              </h3>
              <p className="text-slate-500 leading-relaxed flex-grow text-sm md:text-base">
                {data.pillars.cards[2].desc}
              </p>
            </article>

          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 3: OUR EXTRA INITIATIVES
          ========================================= */}
      <section className="bg-white py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            
            <div className="order-1 relative z-10 text-left">
              <div className="mb-4 md:mb-5">
                <span className="text-eyebrow-lg block">
                  {data.initiatives.badge}
                </span>
              </div>
              
              <h2 className="text-brand-navy text-balance mb-6 md:mb-8">
                {data.initiatives.title}
              </h2>
              <p className="text-slate-500 leading-relaxed text-lg mb-10">
                {data.initiatives.description}
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div 
                    className="w-6 h-6 bg-brand-navy shrink-0 mt-0.5"
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
                    <h4 className="text-brand-navy mb-1">{data.initiatives.points[0].title}</h4>
                    <p className="text-slate-500 leading-relaxed text-sm">
                      {data.initiatives.points[0].desc}
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div 
                    className="w-6 h-6 bg-brand-red shrink-0 mt-0.5"
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
                    <h4 className="text-brand-navy mb-1">{data.initiatives.points[1].title}</h4>
                    <p className="text-slate-500 leading-relaxed text-sm">
                      {data.initiatives.points[1].desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-2 relative w-full mt-10 lg:mt-0">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-red/10 rounded-full blur-2xl z-0"></div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-brand-navy/10 rounded-full blur-2xl z-0"></div>
              
              <div className="rounded-[2rem] bg-slate-50 border border-slate-100 p-2 group relative z-10 shadow-sm">
                <div className="relative h-72 md:h-96 rounded-[calc(2rem-0.5rem)] overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1685483749753-0dab7e144794?q=80&w=1000&auto=format&fit=crop" 
                    alt="Industrial work environment that is neat, clean, and free of fire hazards" 
                    fill
                    unoptimized
                    className="object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-in-out"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent opacity-80"></div>

                  <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 bg-white/95 backdrop-blur-sm px-5 py-3 rounded-xl shadow-xl border border-white flex items-center gap-4">
                    <div className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </div>
                    <div className="flex flex-col">
                      <div className="text-brand-navy font-bold text-sm tracking-wide leading-tight">{data.initiatives.status.label}</div>
                      <div className="text-slate-500 text-xs uppercase tracking-wider font-semibold">{data.initiatives.status.desc}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 4: COMPLIANCE ROADMAP (TIMELINE)
          ========================================= */}
      <section className="bg-slate-50 py-24 md:py-32 px-6 md:px-12 relative overflow-hidden border-y border-slate-100">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
            <span className="text-eyebrow-lg block mb-4 md:mb-5">
              {data.roadmap.badge}
            </span>
            <h2 className="text-brand-navy text-balance mb-6 md:mb-8">
              {data.roadmap.title}
            </h2>
            <p className="text-slate-500 leading-relaxed text-lg">
              {data.roadmap.description}
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-slate-200 -translate-x-1/2"></div>
            <div className="lg:hidden absolute left-[27px] top-0 bottom-0 w-[2px] bg-slate-200"></div>

            <div className="space-y-16">
              
              {/* Step 1 */}
              <div className="relative flex flex-col lg:flex-row items-center justify-between group">
                <div className="hidden lg:block lg:w-[45%] text-right pr-12">
                  <h3 className="text-brand-navy mb-3">{data.roadmap.steps[0].title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                    {data.roadmap.steps[0].desc}
                  </p>
                </div>
                
                <div className="absolute left-0 lg:left-1/2 -translate-x-0 lg:-translate-x-1/2 w-14 h-14 bg-white border-4 border-brand-navy group-hover:border-brand-red rounded-full flex items-center justify-center shadow-lg transition-colors duration-300 z-10">
                  <span className="text-brand-navy group-hover:text-brand-red font-bold text-xl transition-colors duration-300">1</span>
                </div>
                
                <div className="pl-20 lg:pl-0 lg:w-[45%] lg:text-left lg:hidden">
                  <h3 className="text-brand-navy mb-3">{data.roadmap.steps[0].title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                    {data.roadmap.steps[0].desc}
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col lg:flex-row-reverse items-center justify-between group">
                <div className="hidden lg:block lg:w-[45%] text-left pl-12">
                  <h3 className="text-brand-navy mb-3">{data.roadmap.steps[1].title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                    {data.roadmap.steps[1].desc}
                  </p>
                </div>
                
                <div className="absolute left-0 lg:left-1/2 -translate-x-0 lg:-translate-x-1/2 w-14 h-14 bg-white border-4 border-brand-navy group-hover:border-brand-red rounded-full flex items-center justify-center shadow-lg transition-colors duration-300 z-10">
                  <span className="text-brand-navy group-hover:text-brand-red font-bold text-xl transition-colors duration-300">2</span>
                </div>
                
                <div className="pl-20 lg:pl-0 lg:w-[45%] lg:text-right lg:hidden">
                  <h3 className="text-brand-navy mb-3">{data.roadmap.steps[1].title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                    {data.roadmap.steps[1].desc}
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col lg:flex-row items-center justify-between group">
                <div className="hidden lg:block lg:w-[45%] text-right pr-12">
                  <h3 className="text-brand-navy mb-3">{data.roadmap.steps[2].title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                    {data.roadmap.steps[2].desc}
                  </p>
                </div>
                
                <div className="absolute left-0 lg:left-1/2 -translate-x-0 lg:-translate-x-1/2 w-14 h-14 bg-white border-4 border-brand-navy group-hover:border-brand-red rounded-full flex items-center justify-center shadow-lg transition-colors duration-300 z-10">
                  <span className="text-brand-navy group-hover:text-brand-red font-bold text-xl transition-colors duration-300">3</span>
                </div>
                
                <div className="pl-20 lg:pl-0 lg:w-[45%] lg:text-left lg:hidden">
                  <h3 className="text-brand-navy mb-3">{data.roadmap.steps[2].title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                    {data.roadmap.steps[2].desc}
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative flex flex-col lg:flex-row-reverse items-center justify-between group">
                <div className="hidden lg:block lg:w-[45%] text-left pl-12">
                  <h3 className="text-brand-navy mb-3">{data.roadmap.steps[3].title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                    {data.roadmap.steps[3].desc}
                  </p>
                </div>
                
                <div className="absolute left-0 lg:left-1/2 -translate-x-0 lg:-translate-x-1/2 w-14 h-14 bg-brand-navy border-4 border-brand-navy group-hover:bg-brand-red group-hover:border-brand-red rounded-full flex items-center justify-center shadow-lg transition-colors duration-300 z-10">
                  <div 
                    className="w-6 h-6 bg-white shrink-0"
                    style={{
                      WebkitMaskImage: `url('/icons/ic_check.svg')`,
                      WebkitMaskSize: 'contain',
                      WebkitMaskRepeat: 'no-repeat',
                      WebkitMaskPosition: 'center',
                      maskImage: `url('/icons/ic_check.svg')`,
                      maskSize: 'contain',
                      maskRepeat: 'no-repeat',
                      maskPosition: 'center',
                    }}
                  />
                </div>
                
                <div className="pl-20 lg:pl-0 lg:w-[45%] lg:text-right lg:hidden">
                  <h3 className="text-brand-navy mb-3">{data.roadmap.steps[3].title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                    {data.roadmap.steps[3].desc}
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =========================================
          SECTION 5: TRUST & CREDENTIALS
          ========================================= */}
      <section className="bg-white py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          
          <div className="mb-4 md:mb-5">
            <span className="text-eyebrow-lg block">
              {data.credentials.badge}
            </span>
          </div>
          <h2 className="text-brand-navy text-balance mb-12 md:mb-16">
            {data.credentials.title}
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            
            {/* Credential Card 1 */}
            <div className="bg-slate-50 border border-slate-100 p-6 rounded-[1.75rem] flex items-center gap-4 group hover:shadow-xl hover:border-brand-red/20 hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 border-2 border-brand-navy rounded-full flex items-center justify-center">
                <span className="text-brand-navy font-bold text-xs tracking-tighter">ISO</span>
              </div>
              <div className="text-left">
                <h4 className="text-brand-navy mb-1 leading-none">{data.credentials.items[0].title}</h4>
                <div className="text-slate-500 text-xs font-semibold uppercase tracking-widest">{data.credentials.items[0].subtitle}</div>
              </div>
            </div>

            {/* Credential Card 2 */}
            <div className="bg-slate-50 border border-slate-100 p-6 rounded-[1.75rem] flex items-center gap-4 group hover:shadow-xl hover:border-brand-red/20 hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 border-2 border-brand-navy rounded-full flex items-center justify-center">
                <span className="text-brand-navy font-bold text-xs tracking-tighter">ISO</span>
              </div>
              <div className="text-left">
                <h4 className="text-brand-navy mb-1 leading-none">{data.credentials.items[1].title}</h4>
                <div className="text-slate-500 text-xs font-semibold uppercase tracking-widest">{data.credentials.items[1].subtitle}</div>
              </div>
            </div>

            {/* Credential Card 3 */}
            <div className="bg-slate-50 border border-slate-100 p-6 rounded-[1.75rem] flex items-center gap-4 group hover:shadow-xl hover:border-brand-red/20 hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-brand-navy rounded-xl flex items-center justify-center group-hover:bg-brand-red transition-colors duration-300">
                <div 
                  className="w-6 h-6 bg-white shrink-0"
                  style={{
                    WebkitMaskImage: `url('/icons/ic_check-shield-outline.svg')`,
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskImage: `url('/icons/ic_check-shield-outline.svg')`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                  }}
                />
              </div>
              <div className="text-left">
                <h4 className="text-brand-navy mb-1 leading-none">{data.credentials.items[2].title}</h4>
                <div className="text-slate-500 text-xs font-semibold uppercase tracking-widest">{data.credentials.items[2].subtitle}</div>
              </div>
            </div>

            {/* Credential Card 4 */}
            <div className="bg-slate-50 border border-slate-100 p-6 rounded-[1.75rem] flex items-center gap-4 group hover:shadow-xl hover:border-brand-red/20 hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-brand-navy rounded-xl flex items-center justify-center group-hover:bg-brand-red transition-colors duration-300">
                <div 
                  className="w-6 h-6 bg-white shrink-0"
                  style={{
                    WebkitMaskImage: `url('/icons/ic_globe-outline.svg')`,
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskImage: `url('/icons/ic_globe-outline.svg')`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                  }}
                />
              </div>
              <div className="text-left">
                <h4 className="text-brand-navy mb-1 leading-none">{data.credentials.items[3].title}</h4>
                <div className="text-slate-500 text-xs font-semibold uppercase tracking-widest">{data.credentials.items[3].subtitle}</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 6: CALL TO ACTION
          ========================================= */}
      <CTA />

      {/* === WIDGET CHATBOT === */}
      <LegalChatbotWidget isOpen={isChatOpen} setIsOpen={setIsChatOpen} botData={data.chatbot} />

    </main>
  );
}