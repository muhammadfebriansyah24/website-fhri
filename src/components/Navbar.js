'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// ============================================================
// DATA NAVIGASI UTAMA
// ============================================================
const navLinks = [
  { label: 'Business', dropdown: true, href: '/business' },
  { label: 'Tips and Trick HR', href: '/tips-and-trick' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Recruitment', href: '/recruitment' },
  { label: 'About Us', href: '/about' },
];

// ============================================================
// DATA MENU KIRI (BUSINESS TABS) DENGAN ICON
// ============================================================
const businessTabs = [
  {
    id: 'Business Support Services',
    path: '/business/business-support',
    icon: (
      <>
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      </>
    )
  },
  {
    id: 'Human Capital Solutions',
    path: '/business/humancapital-solutions',
    icon: (
      <>
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </>
    )
  },
  {
    id: 'Payroll & Outsourcing',
    path: '/business/payroll',
    icon: (
      <>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </>
    )
  },
  {
    id: 'Assessment Tools',
    path: '/business/assessment-tools',
    icon: (
      <>
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </>
    )
  },
  {
    id: 'HR Boot Camp',
    path: '/business/hr-bootcamp',
    icon: (
      <>
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </>
    )
  },
  {
    id: 'Industrial Relations & Legal Advisory',
    path: '/business/industrial-relations',
    icon: (
      <>
        <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11m16-11v11" />
      </>
    )
  },
  {
    id: 'Health, Safety, and Environment',
    path: '/business/hse',
    icon: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </>
    )
  },
  {
    id: 'Corporate Culture & Events',
    path: '/business/corporate-culture',
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87 M16 3.13a4 4 0 010 7.75" />
      </>
    )
  },
  {
    id: 'Lembaga Sertifikasi Profesi',
    path: '/business/lsp',
    icon: (
      <>
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </>
    )
  }
];

// ============================================================
// DATA MENU KANAN (SUBMENU DESKRIPSI)
// ============================================================
const businessSubMenu = [
  {
    title: 'HR Team Development',
    desc: "Custom programs to enhance your HR team's capabilities aligned with organizational needs.",
  },
  {
    title: 'Competency Assessment',
    desc: 'Identify competency gaps and develop a targeted development plan.',
  },
  {
    title: 'Expert Mentoring',
    desc: 'Guidance from experienced HR practitioners for successful implementation.',
  },
  {
    title: 'Measurement & Impact',
    desc: 'Clear impact measurement to ensure ROI from every program.',
  },
  {
    title: 'HR Transformation',
    desc: 'Transform your HR operating model and organizational culture to drive business value.',
  },
  {
    title: 'Digital HR Strategy',
    desc: 'Leverage modern HR technology and data analytics to streamline operations effectively.',
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Business Support Services');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Mencari data tab yang sedang aktif untuk mengambil path & icon-nya secara dinamis
  const activeTabData = businessTabs.find((tab) => tab.id === activeTab) || businessTabs[0];

  return (
    <nav className="relative bg-white text-[#00263C] shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 md:px-12 relative">
        
        {/* LOGO PERUSAHAAN */}
        <Link href="/" className="flex items-center gap-2 select-none -ml-3">
          <div className="relative w-36 h-9 flex items-center">
            <Image
              src="/fhri-logo.png" 
              alt="First HR Indonesia Logo"
              width={140}
              height={36}
              className="object-contain"
              priority
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden lg:flex items-center gap-8 text-[#00263C]/90 font-medium text-sm">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.label} className="py-2">
                <button 
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-1.5 text-[#00263C] hover:text-[#DC0017] font-semibold transition-colors focus:outline-none cursor-pointer"
                >
                  {link.label}
                  <svg 
                    className={`w-3.5 h-3.5 mt-0.5 transition-transform duration-200 ${
                      dropdownOpen ? 'rotate-180 text-[#DC0017]' : ''
                    }`} 
                    viewBox="0 0 12 8" 
                    fill="none"
                  >
                    <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {/* MEGA-MENU DROPDOWN */}
                <div 
                  className={`transition-all duration-300 absolute top-full left-6 right-6 lg:left-12 lg:right-12 mt-2 z-50 ${
                    dropdownOpen 
                      ? 'visible opacity-100 translate-y-0' 
                      : 'invisible opacity-0 -translate-y-2 pointer-events-none'
                  }`}
                >
                  {/* Diperlebar layoutnya: w-1/3 untuk menu kiri, w-2/3 untuk kanan */}
                  <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 md:p-8 flex gap-8 text-gray-800 w-full">
                    
                    {/* BAGIAN KIRI: DAFTAR TAB (Di-Map secara otomatis) */}
                    <div className="w-[35%] flex flex-col justify-between border-r border-gray-100 pr-6 shrink-0">
                      <div className="flex flex-col gap-1">
                        {businessTabs.map((tab) => (
                          <button 
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center justify-between w-full px-3.5 py-2.5 rounded-xl text-left text-[13px] font-semibold transition ${
                              activeTab === tab.id 
                                ? 'bg-[#0B2A4A] text-white shadow-md' 
                                : 'text-gray-600 hover:bg-gray-50 hover:text-[#0B2A4A]'
                            }`}
                          >
                            <span className="flex items-center gap-3">
                              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                {tab.icon}
                              </svg>
                              <span className="truncate">{tab.id}</span>
                            </span>
                            <span className="text-xs ml-2 shrink-0">›</span>
                          </button>
                        ))}
                      </div>

                      <div className="pt-4 mt-2 border-t border-gray-100">
                        <Link href="/business" onClick={() => setDropdownOpen(false)} className="inline-flex items-center gap-1.5 text-red-600 hover:text-red-700 font-bold text-sm px-1 transition">
                          Schedule Demo
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>

                    {/* BAGIAN KANAN: DESKRIPSI & SUBMENU */}
                    <div className="w-[65%] flex flex-col justify-between pl-2">
                      <div>
                        <div className="flex items-center gap-3.5 mb-5">
                          <div className="w-11 h-11 bg-[#0B2A4A] rounded-xl flex items-center justify-center text-white shadow-sm shrink-0">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              {activeTabData.icon}
                            </svg>
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-[#0B2A4A] leading-tight">
                              {activeTabData.id}
                            </h3>
                            <p className="text-xs text-gray-500 mt-0.5">
                              Build a future-ready HR Team with expert-led training.
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 xl:grid-cols-3 gap-4">
                          {businessSubMenu.map((item, idx) => (
                            <div 
                              key={idx} 
                              className="bg-white border border-gray-100 hover:border-blue-200 rounded-2xl p-4 transition-all duration-200 hover:shadow-md flex flex-col justify-start"
                            >
                              <h4 className="text-[13px] font-bold text-[#0B2A4A] mb-1.5 leading-snug">
                                {item.title}
                              </h4>
                              <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
                                {item.desc}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6">
                        <Link 
                          href={activeTabData.path} 
                          onClick={() => setDropdownOpen(false)}
                          className="inline-flex items-center gap-2 bg-[#0B2A4A] hover:bg-blue-950 text-white text-xs font-semibold px-5 py-2.5 rounded-full transition duration-200 shadow-sm"
                        >
                          Learn More
                          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
            ) : (
              <Link 
                key={link.label} 
                href={link.href} 
                className="hover:text-[#DC0017] transition-colors py-2"
              >
                {link.label}
              </Link>
            )
          )}
          
          <Link href="/pricing" className="bg-[#E60000] hover:bg-red-700 text-white px-6 py-2.5 rounded-full font-bold shadow-md transition-all transform hover:-translate-y-0.5">
            Join Us
          </Link>
        </div>

        {/* MOBILE HAMBURGER MENU */}
        <button
          className="lg:hidden text-[#00263C] hover:text-[#DC0017] focus:outline-none"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M6 6L18 18M6 18L18 6" strokeLinecap="round" />
            ) : (
              <path d="M3 6H21M3 12H21M3 18H21" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE PANEL */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-blue-900/40 px-6 py-5 flex flex-col gap-4 text-[#00263C]/90 font-medium text-sm shadow-inner max-h-[70vh] overflow-y-auto">
          <div className="border-b border-gray-100 pb-3 mb-2">
            <span className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider">Business Solutions</span>
            {businessTabs.map((tab) => (
              <Link 
                key={tab.id} 
                href={tab.path} 
                onClick={() => setMobileOpen(false)} 
                className="block hover:text-[#DC0017] py-2 text-sm pl-2 border-l-2 border-transparent hover:border-[#DC0017]"
              >
                {tab.id}
              </Link>
            ))}
          </div>
          <Link href="/tips-and-trick" onClick={() => setMobileOpen(false)} className="hover:text-[#DC0017] py-1 font-semibold">Tips and Trick HR</Link>
          <Link href="/pricing" onClick={() => setMobileOpen(false)} className="hover:text-[#DC0017] py-1 font-semibold">Pricing</Link>
          <Link href="/recruitment" onClick={() => setMobileOpen(false)} className="hover:text-[#DC0017] py-1 font-semibold">Recruitment</Link>
          <Link href="/about" onClick={() => setMobileOpen(false)} className="hover:text-[#DC0017] py-1 font-semibold">About Us</Link>
          <div className="pt-4 mt-2">
            <Link href="/pricing" onClick={() => setMobileOpen(false)} className="block bg-[#E60000] text-white px-5 py-3 rounded-full font-bold text-center shadow-md">
              Join Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}