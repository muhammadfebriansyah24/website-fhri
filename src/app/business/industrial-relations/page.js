'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
// KOMPONEN CHATBOT LEGAL (DENGAN FITUR TOP UP & FAQ - NO EMOJI)
// ============================================================
function LegalChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1); 
  // Step 1: Pilih Tipe (Baru / Top-Up / FAQ)
  // Step 2: Input Teks (Masalah / Nama Instansi)
  // Step 3: Pilih Paket Token
  // Step 4: Menampilkan Menu FAQ
  
  const [chatType, setChatType] = useState(''); // 'new' | 'topup' | 'faq'
  const [userMessage, setUserMessage] = useState('');
  const [inputText, setInputText] = useState('');
  const chatEndRef = useRef(null);

  // Nomor WA Admin FHRI
  const ADMIN_WA_NUMBER = "628995722437"; 

  // Daftar Paket Token
  const tokenPackages = [
    { id: 1, title: 'Quick Advice', token: '1 Token', desc: 'Konsultasi 1 pertanyaan spesifik.', price: 'Rp 250.000' },
    { id: 2, title: 'Deep Dive', token: '3 Tokens', desc: 'Bahas tuntas masalah kompleks.', price: 'Rp 600.000' },
    { id: 3, title: 'Doc Review', token: 'Unlimited (1 Jam)', desc: 'Review dokumen & konsultasi intensif.', price: 'Rp 1.500.000' },
  ];

  // Data FAQ 
  const faqList = [
    { 
      q: "Apa saja layanan legal yang disediakan FHRI?", 
      a: "Kami menangani pembuatan PKB, Peraturan Perusahaan (PP), pendampingan bipartit, audit kepatuhan ketenagakerjaan, hingga konsultasi penyelesaian sengketa." 
    },
    { 
      q: "Berapa lama proses pembuatan Peraturan Perusahaan (PP)?", 
      a: "Proses drafting hingga pengesahan biasanya memakan waktu 14 hingga 30 hari kerja, tergantung kelengkapan data dari perusahaan Anda." 
    },
    { 
      q: "Apakah FHRI bisa mendampingi ke Pengadilan (PHI)?", 
      a: "Tentu. Kami memiliki tim ahli yang akan mendampingi, memberikan arahan strategis, dan memediasi proses di Pengadilan Hubungan Industrial." 
    },
    { 
      q: "Bagaimana sistem penggunaan Token Konsultasi?", 
      a: "1 Token berlaku untuk 1 topik pertanyaan/sesi. Anda bebas menggunakannya kapan saja selama kuota paket Anda belum habis." 
    }
  ];

  // Auto-scroll ke bawah saat ada pesan baru
  useEffect(() => {
    if (chatEndRef.current) chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [step, isOpen]);

  // Handle Pilihan Step 1
  const handleSelectType = (type) => {
    setChatType(type);
    if (type === 'faq') {
      setStep(4); // Langsung lompat ke layar FAQ
    } else {
      setStep(2); // Lanjut ke input teks
    }
  };

  // Handle Input Step 2
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    
    setUserMessage(inputText);
    setInputText('');
    
    setTimeout(() => {
      setStep(3);
    }, 600);
  };

  // Handle Klik Paket & Redirect WA
  const handleSelectPackage = (selectedPackage) => {
    let waText = '';

    if (chatType === 'new') {
      waText = `Halo Admin Legal FHRI,%0A%0ASaya ingin *Konsultasi Baru* mengenai:%0A_"${userMessage}"_%0A%0ASaya ingin mengambil paket:%0A*${selectedPackage.title} (${selectedPackage.token}) - ${selectedPackage.price}*%0A%0AMohon panduannya untuk proses administrasi selanjutnya. Terima kasih.`;
    } else {
      waText = `Halo Admin Legal FHRI,%0A%0AToken konsultasi saya sudah habis. Saya ingin melakukan *Top-Up Token*.%0A%0ANama / Instansi terdaftar:%0A*${userMessage}*%0A%0APaket Top-Up yang dipilih:%0A*${selectedPackage.title} (${selectedPackage.token}) - ${selectedPackage.price}*%0A%0AMohon panduannya untuk pembayaran. Terima kasih.`;
    }
    
    window.open(`https://wa.me/${ADMIN_WA_NUMBER}?text=${waText}`, '_blank');
  };

  // Reset chat saat ditutup atau menekan tombol kembali
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
      
      {/* KOTAK ANIMASI INJECT */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeSlideUp { from { opacity: 0; transform: translateY(20px) scale(0.95); } to { opacity: 1; transform: translateY(0) scale(1); } }
        .animate-fade-slide-up { animation: fadeSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .custom-scrollbar::-webkit-scrollbar { width: 5px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
        
        /* Hilangkan panah default pada detail summary (Accordion) */
        details > summary { list-style: none; }
        details > summary::-webkit-details-marker { display: none; }
      `}} />

      {isOpen && (
        <div className="bg-white w-[350px] md:w-[400px] h-[550px] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-slate-200 mb-4 flex flex-col overflow-hidden animate-fade-slide-up origin-bottom-right">
          
          {/* Header Chat */}
          <div className="bg-[#00263C] text-white p-4 flex items-center justify-between shadow-md z-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 border border-white/20 rounded-full flex items-center justify-center backdrop-blur-sm shadow-inner">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-sm">FHRI Legal Bot</h3>
                <p className="text-[10px] text-green-400 flex items-center gap-1 font-medium"><span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span> Online</p>
              </div>
            </div>
            <button onClick={closeChat} className="text-white/60 hover:text-white transition-colors bg-white/10 p-1.5 rounded-lg">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          {/* Area Percakapan */}
          <div className="flex-1 p-4 bg-[#F8FAFC] overflow-y-auto custom-scrollbar flex flex-col gap-4">
            
            {/* Step 1: Pesan Pembuka & Pilih Jalur */}
            <div className="flex flex-col gap-2 w-[90%]">
              <div className="bg-white border border-slate-200 text-slate-700 p-3.5 rounded-2xl rounded-tl-sm text-[13.5px] shadow-sm leading-relaxed">
                Halo! Selamat datang di Layanan Bantuan Legal & Hubungan Industrial FHRI. 
              </div>
              <div className="bg-white border border-slate-200 text-slate-700 p-3.5 rounded-2xl rounded-tl-sm text-[13.5px] shadow-sm leading-relaxed">
                Ada yang bisa kami bantu hari ini? Silakan pilih menu di bawah:
              </div>
              
              {/* Tombol Pilihan Step 1 */}
              {step === 1 && (
                <div className="flex flex-col gap-2 mt-2 animate-fade-slide-up">
                  <button onClick={() => handleSelectType('new')} className="bg-[#00263C] text-white py-3 px-4 rounded-xl text-sm font-semibold hover:bg-blue-900 transition-colors shadow-sm text-left flex items-center">
                    <svg className="w-4 h-4 mr-2 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    Konsultasi Baru
                  </button>
                  <button onClick={() => handleSelectType('topup')} className="bg-white text-[#DC2626] border-2 border-[#DC2626] py-2.5 px-4 rounded-xl text-sm font-semibold hover:bg-red-50 transition-colors shadow-sm text-left flex items-center">
                    <svg className="w-4 h-4 mr-2 text-[#DC2626]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                    Top-Up Token (Beli Lagi)
                  </button>
                  <button onClick={() => handleSelectType('faq')} className="bg-white text-slate-600 border border-slate-300 py-2.5 px-4 rounded-xl text-sm font-semibold hover:bg-slate-100 transition-colors shadow-sm text-left flex items-center">
                    <svg className="w-4 h-4 mr-2 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    Tanya Jawab (FAQ)
                  </button>
                </div>
              )}
            </div>

            {/* Bubble Pilihan User Umum */}
            {step >= 2 && (
              <div className="bg-[#DC2626] text-white p-3 rounded-2xl rounded-tr-sm text-[13px] shadow-sm max-w-[85%] self-end">
                {chatType === 'new' ? 'Konsultasi Baru' : chatType === 'topup' ? 'Top-Up Token' : 'Tanya Jawab (FAQ)'}
              </div>
            )}

            {/* ==============================================
                STEP 4: KHUSUS TAMPILAN FAQ (ACCORDION)
                ============================================== */}
            {step === 4 && chatType === 'faq' && (
              <div className="bg-white border border-slate-200 text-slate-700 p-4 rounded-2xl rounded-tl-sm text-[13.5px] shadow-sm w-full animate-fade-slide-up">
                <p className="mb-3 font-semibold text-[#00263C]">Berikut adalah pertanyaan yang sering diajukan kepada kami:</p>
                
                {/* List FAQ Accordion */}
                <div className="space-y-2">
                  {faqList.map((faq, index) => (
                    <details key={index} className="group bg-slate-50 border border-slate-200 rounded-xl overflow-hidden">
                      <summary className="text-[12.5px] font-bold p-3 cursor-pointer text-[#00263C] hover:text-[#DC2626] flex justify-between items-center bg-white transition-colors">
                        <span className="pr-4">{faq.q}</span>
                        <svg className="w-4 h-4 shrink-0 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                      </summary>
                      <div className="p-3 pt-1 text-[12px] text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50">
                        {faq.a}
                      </div>
                    </details>
                  ))}
                </div>

                <p className="mt-4 mb-2 text-center text-[12px] text-slate-500">Punya pertanyaan lain atau ingin lanjut konsultasi?</p>
                <button onClick={resetChat} className="w-full bg-[#00263C] text-white py-2.5 rounded-xl text-[12px] font-bold hover:bg-blue-900 transition-colors flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                  Kembali ke Menu Utama
                </button>
              </div>
            )}

            {/* Step 2: Form Pertanyaan (Hanya untuk New & Topup) */}
            {step === 2 && chatType !== 'faq' && (
              <div className="bg-white border border-slate-200 text-slate-700 p-3.5 rounded-2xl rounded-tl-sm text-[13.5px] shadow-sm w-[90%] animate-fade-slide-up">
                {chatType === 'new' 
                  ? "Baik. Silakan ceritakan secara singkat masalah Anda (misal: Sengketa PHK, Pembuatan PKB, dll)." 
                  : "Siap membantu! Silakan ketik Nama Lengkap atau Nama Perusahaan Anda yang terdaftar sebelumnya."}
              </div>
            )}

            {/* Bubble Jawaban User di Step 2 */}
            {step >= 3 && chatType !== 'faq' && (
              <div className="bg-[#DC2626] text-white p-3 rounded-2xl rounded-tr-sm text-[13px] shadow-sm max-w-[85%] self-end">
                {userMessage}
              </div>
            )}

            {/* Step 3: Pilih Paket Token (Hanya untuk New & Topup) */}
            {step === 3 && chatType !== 'faq' && (
              <div className="bg-white border border-slate-200 text-slate-700 p-4 rounded-2xl rounded-tl-sm text-[13.5px] shadow-sm w-full animate-fade-slide-up">
                <p className="mb-4">
                  {chatType === 'new' 
                    ? "Masalah Anda membutuhkan penanganan presisi. Silakan pilih paket konsultasi di bawah ini untuk terhubung dengan pakar kami:" 
                    : "Terima kasih. Silakan pilih paket Top-Up Token yang Anda inginkan:"}
                </p>
                
                <div className="space-y-2.5">
                  {tokenPackages.map((pkg) => (
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

          {/* Area Input (Hanya muncul jika butuh diketik di Step 2 New/Topup) */}
          {step === 2 && chatType !== 'faq' && (
            <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-slate-200 flex gap-2">
              <input 
                type="text" 
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={chatType === 'new' ? "Ketik masalah..." : "Ketik nama/perusahaan..."}
                className="flex-1 bg-slate-100 rounded-xl px-4 py-2.5 text-[13px] focus:outline-none focus:ring-2 focus:ring-[#00263C] transition-all"
                autoFocus
              />
              <button type="submit" disabled={!inputText.trim()} className="bg-[#00263C] hover:bg-blue-900 text-white w-11 h-11 rounded-xl flex items-center justify-center disabled:opacity-50 transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
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
          <svg className="w-8 h-8 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.299 1.262.478 1.694.612.712.222 1.36.19 1.874.115.58-.084 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </button>
      )}
    </div>
  );
}

// ============================================================
// MAIN PAGE COMPONENT
// ============================================================
export default function IndustrialRelationsPage() {
  const services = [
    {
      id: "01",
      title: "Labor Law Compliance",
      desc: "Ensure compliance with the latest labor regulations through the development and review of Company Regulations (PP) and Collective Labor Agreements (PKB).",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    },
    {
      id: "02",
      title: "Risk Management",
      desc: "Mitigate employment risks related to organizational restructuring, employment status (fixed-term & permanent), and legally compliant termination processes.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    },
    {
      id: "03",
      title: "Dispute Resolution & Litigation",
      desc: "Strengthen capabilities through effective bipartite negotiations and guidance on mediation, conciliation, and Industrial Relations Court (PHI) proceedings.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
    },
    {
      id: "04",
      title: "Trade Union Partnership",
      desc: "Build constructive and collaborative relationships with labor unions to foster positive industrial relations and a productive work environment.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    }
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#00263C] pt-28 pb-32 px-6 md:px-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#DC2626]/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          <div className="md:w-1/2 flex flex-col items-start text-left">
            <Eyebrow tone="light">Legal & Compliance</Eyebrow>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.1] tracking-tight">
              Industrial Relations <br/> <span className="text-white/70">& Legal Advisory</span>
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-lg">
              Providing expert guidance on labor compliance, risk mitigation, and harmonized workplace relations to protect corporate assets while ensuring a fair working environment.
            </p>
            <div className="mt-10">
              <Link href="#contact" className="inline-flex items-center gap-3 bg-[#DC2626] hover:bg-[#B91C1C] text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_8px_20px_rgba(220,38,38,0.3)] hover:-translate-y-1">
                Consult with Our Experts
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="md:w-1/2 relative w-full flex justify-center lg:justify-end">
            <div className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px]">
              <div className="absolute inset-0 border-[2px] border-white/20 rounded-full animate-[spin_20s_linear_infinite] border-dashed"></div>
              <div className="absolute inset-4 rounded-full overflow-hidden border-8 border-[#00263C] shadow-2xl">
                <Image src="/herokonten2.jpg" alt="Legal Advisory Meeting" fill className="object-cover" />
              </div>
              <div className="absolute bottom-8 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Status</p>
                  <p className="text-sm font-black text-[#00263C]">100% Compliant</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. CORE EXPERTISE */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative -mt-16 z-20">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00263C] bg-white inline-block px-10 py-4 rounded-full shadow-md border border-slate-100">
            Our Area of Expertise
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="group bg-white p-8 md:p-10 rounded-[2rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-15px_rgba(0,38,60,0.15)] transition-all duration-300 border border-slate-100 relative overflow-hidden">
              <div className="absolute -right-4 -top-8 text-[120px] font-black text-slate-50/50 group-hover:text-blue-50/50 transition-colors pointer-events-none select-none">
                {service.id}
              </div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 bg-[#F1F5F6] group-hover:bg-[#00263C] rounded-2xl flex items-center justify-center text-[#00263C] group-hover:text-white transition-colors duration-300 mb-8">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">{service.icon}</svg>
                </div>
                <h3 className="text-2xl font-bold text-[#00263C] mb-4 leading-snug">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed">{service.desc}</p>
                <div className="mt-8 pt-6 border-t border-slate-100 mt-auto">
                  <Link href="#contact" className="inline-flex items-center gap-2 text-sm font-bold text-[#DC2626] group-hover:text-[#00263C] transition-colors">
                    Learn More 
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. WHY IT MATTERS */}
      <section className="bg-[#00263C] py-24 px-6 md:px-12 text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <Eyebrow tone="light">Why Partner With Us?</Eyebrow>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Mitigating Risks, <br/>
              <span className="text-[#DC2626]">Protecting Assets.</span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              In a dynamic regulatory environment, missteps in industrial relations can lead to costly disputes and reputational damage. We provide proactive strategies to ensure your business remains compliant and harmonious.
            </p>
            
            <div className="space-y-6 pt-4">
              {[
                "Proactive risk identification and mitigation.",
                "Expert representation in bipartit and PHI negotiations.",
                "Tailored compliance strategies for your specific industry.",
                "Fostering a productive, union-friendly environment."
              ].map((item, i) => (
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
            <Image src="/herokonten6.jpg" alt="Professional Consultation" fill className="object-cover opacity-90 hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#00263C] via-transparent to-transparent"></div>
          </div>

        </div>
      </section>

      {/* 4. CTA BANNER */}
      <section id="contact" className="py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#0B2A4A] to-[#00263C] rounded-[3rem] p-10 md:p-16 text-center shadow-2xl relative overflow-hidden border border-[#0B2A4A]/50">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Need Expert Legal Counsel?</h2>
            <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
              Secure your business operations and maintain a harmonious workplace. Contact our Industrial Relations experts today for a confidential consultation.
            </p>
            <Link href="/pricing" className="inline-flex items-center gap-3 bg-[#DC2626] text-white hover:bg-[#B91C1C] px-10 py-4 rounded-full font-extrabold transition-all hover:scale-105 shadow-lg uppercase tracking-wider text-sm">
              Contact Our Legal Team
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* === MEMANGGIL WIDGET CHATBOT === */}
      <LegalChatbotWidget />

    </main>
  );
}