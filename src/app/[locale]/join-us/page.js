'use client';

import React, { useState } from 'react';
import { useLocale } from 'next-intl';
import { getJoinData } from '@/components/joinData';

export default function JoinUsPage() {
  const locale = useLocale();
  const data = getJoinData(locale);

  // Nomor WhatsApp tujuan (gunakan format 628...)
  const ADMIN_WA_NUMBER = "628995722437"; 

  // State untuk menyimpan data form
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    company: '',
    email: '',
    service: data.services[0], // Nilai default sesuai opsi pertama
  });

  // State untuk menampilkan notifikasi sukses
  const [showSuccess, setShowSuccess] = useState(false);

  // Handle perubahan input
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // Handle submit form (Tampilkan notifikasi lalu Redirect ke WhatsApp)
  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah reload halaman

    // Munculkan notifikasi sukses
    setShowSuccess(true);

    // Rangkai pesan WhatsApp
    const message = locale === 'id' 
      ? `Halo First HR Indonesia,%0A%0ASaya ingin berkonsultasi mengenai kebutuhan bisnis. Berikut detail saya:%0A%0A*Nama Lengkap:* ${formData.fullName}%0A*Nomor Telepon:* ${formData.phone}%0A*Perusahaan:* ${formData.company}%0A*Email:* ${formData.email}%0A*Layanan yang Diminati:* ${formData.service}%0A%0ASaya ingin berkonsultasi terkait hal ini. Terima kasih.`
      : `Hello First HR Indonesia,%0A%0AI would like to inquire about a business consultation. Here are my details:%0A%0A*Full Name:* ${formData.fullName}%0A*Phone Number:* ${formData.phone}%0A*Company:* ${formData.company}%0A*Email:* ${formData.email}%0A*Inquired Service:* ${formData.service}%0A%0AI would like to consult regarding this matter. Thank you.`;

    // Beri jeda sedikit (1.2 detik) agar user sempat melihat notifikasi sukses sebelum tab WA terbuka
    setTimeout(() => {
      window.open(`https://wa.me/${ADMIN_WA_NUMBER}?text=${message}`, '_blank');
    }, 1200);
  };

  return (
    <main className="min-h-screen bg-[#081828] relative flex items-center justify-center p-6 md:p-12 overflow-hidden font-sans">
      
      {/* Background Decorator (Abstract Shapes on the right) */}
      <div className="absolute -right-32 -bottom-32 w-[800px] h-[800px] bg-[#122c42] rounded-full opacity-60 pointer-events-none blur-3xl"></div>
      <div className="absolute right-0 bottom-0 w-1/3 h-2/3 bg-[#11293e] rounded-tl-[100%] pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Left Section: Text Content */}
        <div className="flex flex-col text-left">
          <h1 className="text-4xl md:text-[2.75rem] font-bold text-white leading-[1.2] mb-6">
            {data.hero.title1} <br />
            {data.hero.title2} <br />
            {locale === 'id' ? 'Bersama' : 'With'} <span className="text-[#DC2626]">First HR Indonesia</span>
          </h1>
          <p className="text-[#8B9CAE] text-sm md:text-base leading-relaxed max-w-md">
            {data.hero.description}
          </p>
        </div>

        {/* Right Section: Form Card */}
        <div className="w-full flex justify-center md:justify-end">
          <div className="bg-white rounded-[20px] p-8 md:p-10 shadow-2xl w-full max-w-[480px] relative overflow-hidden">
            
            {/* NOTIFIKASI SUKSES (Muncul ketika form disubmit) */}
            {showSuccess && (
              <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-30 flex flex-col items-center justify-center text-center p-6 animate-fade-slide-up">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4 shadow-inner">
                  <div 
                    className="w-8 h-8 bg-current shrink-0"
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
                <h3 className="text-xl font-bold text-slate-800 mb-2">{data.form.successTitle}</h3>
                <p className="text-slate-600 text-sm">{data.form.successDesc}</p>
              </div>
            )}

            <h2 className="text-[22px] font-bold text-[#1E293B] mb-6">
              {data.form.cardTitle}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name Field */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="fullName" className="text-[11px] font-bold text-slate-700">
                  {data.form.nameLabel}
                </label>
                <input
                  type="text"
                  id="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder={data.form.namePlaceholder}
                  className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#081828] focus:ring-1 focus:ring-[#081828] transition-colors placeholder:text-slate-400 text-slate-800"
                />
              </div>

              {/* Phone Number Field */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="phone" className="text-[11px] font-bold text-slate-700">
                  {data.form.phoneLabel}
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+62"
                  className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#081828] focus:ring-1 focus:ring-[#081828] transition-colors placeholder:text-slate-400 text-slate-800"
                />
              </div>

              {/* Company Name Field */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="company" className="text-[11px] font-bold text-slate-700">
                  {data.form.companyLabel}
                </label>
                <input
                  type="text"
                  id="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  placeholder={data.form.companyPlaceholder}
                  className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#081828] focus:ring-1 focus:ring-[#081828] transition-colors placeholder:text-slate-400 text-slate-800"
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-[11px] font-bold text-slate-700">
                  {data.form.emailLabel}
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email@business.com"
                  className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#081828] focus:ring-1 focus:ring-[#081828] transition-colors placeholder:text-slate-400 text-slate-800"
                />
              </div>

              {/* Inquired Service Field */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="service" className="text-[11px] font-bold text-slate-700">
                  {data.form.serviceLabel}
                </label>
                <div className="relative">
                  <select
                    id="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm appearance-none bg-white focus:outline-none focus:border-[#081828] focus:ring-1 focus:ring-[#081828] transition-colors text-slate-800 cursor-pointer"
                  >
                    {data.services.map((srv, idx) => (
                      <option key={idx} value={srv}>{srv}</option>
                    ))}
                  </select>
                  {/* Custom Dropdown Arrow */}
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                    <div 
                      className="w-4 h-4 text-slate-500 bg-current shrink-0"
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
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#B91C1C] hover:bg-[#991B1B] text-white font-bold text-sm py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-md cursor-pointer"
                >
                  {data.form.submitBtn}
                  <div 
                    className="w-4 h-4 bg-current shrink-0"
                    style={{
                      WebkitMaskImage: `url('/ic_send-solid.svg')`,
                      WebkitMaskSize: 'contain',
                      WebkitMaskRepeat: 'no-repeat',
                      WebkitMaskPosition: 'center',
                      maskImage: `url('/ic_send-solid.svg')`,
                      maskSize: 'contain',
                      maskRepeat: 'no-repeat',
                      maskPosition: 'center',
                    }}
                  />
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </main>
  );
}