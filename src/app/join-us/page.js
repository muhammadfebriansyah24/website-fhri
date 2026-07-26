'use client';

import React, { useState } from 'react';

export default function JoinUsPage() {
  // Nomor WhatsApp tujuan (gunakan format 628...)
  const ADMIN_WA_NUMBER = "628995722437"; 

  // State untuk menyimpan data form
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    company: '',
    email: '',
    service: 'Business Support Services', // Nilai default sesuai opsi pertama
  });

  // Handle perubahan input
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // Handle submit form (Redirect ke WhatsApp)
  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah reload halaman

    // Rangkai pesan WhatsApp
    const message = `Hello First HR Indonesia,%0A%0AI would like to inquire about a business consultation. Here are my details:%0A%0A*Full Name:* ${formData.fullName}%0A*Phone Number:* ${formData.phone}%0A*Company:* ${formData.company}%0A*Email:* ${formData.email}%0A*Inquired Service:* ${formData.service}%0A%0AI would like to consult regarding this matter. Thank you.`;

    // Arahkan ke link WhatsApp di tab baru
    window.open(`https://wa.me/${ADMIN_WA_NUMBER}?text=${message}`, '_blank');
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
            Consult Your <br />
            Business Needs <br />
            With <span className="text-[#DC2626]">First HR Indonesia</span>
          </h1>
          <p className="text-[#8B9CAE] text-sm md:text-base leading-relaxed max-w-md">
            Get strategic solutions for your HR challenges. We are here as a trusted partner to accelerate business growth through superior and measurable human capital management.
          </p>
        </div>

        {/* Right Section: Form Card */}
        <div className="w-full flex justify-center md:justify-end">
          <div className="bg-white rounded-[20px] p-8 md:p-10 shadow-2xl w-full max-w-[480px]">
            <h2 className="text-[22px] font-bold text-[#1E293B] mb-6">
              Business Consultation
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name Field */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="fullName" className="text-[11px] font-bold text-slate-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#081828] focus:ring-1 focus:ring-[#081828] transition-colors placeholder:text-slate-400"
                />
              </div>

              {/* Phone Number Field */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="phone" className="text-[11px] font-bold text-slate-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+62"
                  className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#081828] focus:ring-1 focus:ring-[#081828] transition-colors placeholder:text-slate-400"
                />
              </div>

              {/* Company Name Field */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="company" className="text-[11px] font-bold text-slate-700">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company"
                  className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#081828] focus:ring-1 focus:ring-[#081828] transition-colors placeholder:text-slate-400"
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-[11px] font-bold text-slate-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email@business.com"
                  className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#081828] focus:ring-1 focus:ring-[#081828] transition-colors placeholder:text-slate-400"
                />
              </div>

              {/* Inquired Service Field */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="service" className="text-[11px] font-bold text-slate-700">
                  Inquired Service
                </label>
                <div className="relative">
                  <select
                    id="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm appearance-none bg-white focus:outline-none focus:border-[#081828] focus:ring-1 focus:ring-[#081828] transition-colors text-slate-600"
                  >
                    <option value="Business Support Services">Business Support Services</option>
                    <option value="Human Capital Solutions">Human Capital Solutions</option>
                    <option value="Payroll & Outsourcing">Payroll & Outsourcing</option>
                    <option value="Assessment Tools">Assessment Tools</option>
                    <option value="HR Boot Camp">HR Boot Camp</option>
                    <option value="Industrial Relations & Legal Advisory">Industrial Relations & Legal Advisory</option>
                    <option value="Health, Safety, and Environment">Health, Safety, and Environment</option>
                    <option value="Corporate Culture & Events">Corporate Culture & Events</option>
                    <option value="Professional Certification Institute">Professional Certification Institute</option>
                  </select>
                  {/* Custom Dropdown Arrow */}
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                    <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#B91C1C] hover:bg-[#991B1B] text-white font-bold text-sm py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-md"
                >
                  Send Inquiry
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </main>
  );
}