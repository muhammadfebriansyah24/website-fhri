'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { getNavbarData } from '@/components/navbarData'; // 👇 Import Data

// Komponen template icon
const DynamicIcon = ({ name, className }) => (
  <div 
    className={`bg-current ${className}`}
    style={{
      WebkitMaskImage: `url('/${name}')`,
      WebkitMaskSize: 'contain',
      WebkitMaskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskImage: `url('/${name}')`,
      maskSize: 'contain',
      maskRepeat: 'no-repeat',
      maskPosition: 'center',
    }}
  />
);

export default function Navbar() {
  const locale = useLocale();
  const t = useTranslations('Navbar'); 
  const pathname = usePathname();
  const router = useRouter();
  
  // Ambil data navbar dinamis berdasarkan bahasa
  const data = getNavbarData(locale);
  const businessTabs = data.businessTabs;

  const [mobileOpen, setMobileOpen] = useState(false);
  // Gunakan 'support' sebagai ID default yang aman lintas bahasa
  const [activeTabId, setActiveTabId] = useState('support'); 
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [expandedBizTab, setExpandedBizTab] = useState(null);
  
  const dropdownRef = useRef(null);

  const navLinks = [
    { label: t('business'), dropdown: true, href: '/business' },
    { label: t('tips'), href: '/tips-and-trick' },
    { label: t('pricing'), href: '/pricing' },
    { label: t('recruitment'), href: '/recruitment' },
    { label: t('about'), href: '/about' },
    { label: t('news'), href: '/newsletter' },
  ];

  useEffect(() => {
    if (!dropdownOpen) return;
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownOpen]);

  const activeTabData = businessTabs.find((tab) => tab.id === activeTabId) || businessTabs[0];

  const handleLanguageChange = (newLocale) => {
    if (locale === newLocale) return;
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <nav className="sticky top-0 bg-white text-[#00263C] shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 md:px-12 relative">
        
        {/* COMPANY LOGO */}
        <Link href={`/${locale}`} className="flex items-center gap-2 select-none -ml-3">
          <div className="relative w-36 h-9 flex items-center">
            <Image
              src="/fhri-logo.png" 
              alt="First HR Indonesia Logo"
              width={140}
              height={36}
              className="object-contain"
              priority
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden lg:flex items-center gap-7 text-[#00263C]/90 font-medium text-sm">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.label} className="py-2" ref={dropdownRef}>
                <button 
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-1.5 text-[#00263C] hover:text-[#DC0017] font-semibold transition-colors focus:outline-none cursor-pointer"
                >
                  {link.label}
                  <svg 
                    className={`w-3.5 h-3.5 mt-0.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180 text-[#DC0017]' : ''}`} 
                    viewBox="0 0 12 8" fill="none"
                  >
                    <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {/* MEGA-MENU DROPDOWN */}
                <div className={`transition-all duration-300 absolute top-full left-6 right-6 lg:left-12 lg:right-12 mt-2 z-50 ${dropdownOpen ? 'visible opacity-100 translate-y-0' : 'invisible opacity-0 -translate-y-2 pointer-events-none'}`}>
                  <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 md:p-8 flex gap-8 text-gray-800 w-full">
                    
                    <div className="w-[35%] flex flex-col justify-between border-r border-gray-100 pr-6 shrink-0">
                      <div className="flex flex-col gap-1">
                        {businessTabs.map((tab) => (
                          <button 
                            key={tab.id}
                            onClick={() => setActiveTabId(tab.id)}
                            className={`flex items-center justify-between w-full px-3.5 py-2.5 rounded-xl text-left text-[13px] font-semibold transition ${activeTabId === tab.id ? 'bg-[#0B2A4A] text-white shadow-md' : 'text-gray-600 hover:bg-gray-50 hover:text-[#0B2A4A]'}`}
                          >
                            <span className="flex items-center gap-3">
                              <DynamicIcon name={tab.icon} className="w-4 h-4 shrink-0" />
                              <span className="truncate">{tab.title}</span> {/* Gunakan title */}
                            </span>
                            <span className="text-xs ml-2 shrink-0">›</span>
                          </button>
                        ))}
                      </div>

                      <div className="pt-4 mt-2 border-t border-gray-100">
                        <Link href={`/${locale}/business`} onClick={() => setDropdownOpen(false)} className="inline-flex items-center gap-1.5 text-red-600 hover:text-red-700 font-bold text-sm px-1 transition">
                          {data.ui.scheduleDemo}
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>

                    <div className="w-[65%] flex flex-col justify-between pl-2">
                      <div>
                        <div className="flex items-center gap-3.5 mb-5">
                          <div className="w-11 h-11 bg-[#0B2A4A] rounded-xl flex items-center justify-center text-white shadow-sm shrink-0">
                            <DynamicIcon name={activeTabData.icon} className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-[#0B2A4A] leading-tight">{activeTabData.title}</h3>
                            <p className="text-xs text-gray-500 mt-0.5">{activeTabData.subtitle}</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 xl:grid-cols-3 gap-3.5">
                          {activeTabData.subMenus.map((item, idx) => (
                            <div key={idx} className="group relative rounded-[1.25rem] bg-gradient-to-b from-slate-50 to-white p-1 ring-1 ring-black/[0.04] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-2 hover:ring-[#DC0017]/20 hover:shadow-[0_28px_48px_-18px_rgba(21,60,86,0.24)]">
                              <div className="relative h-full rounded-[calc(1.25rem-0.25rem)] bg-white p-4 overflow-hidden transition-colors duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-red-50/50">
                                <span className="absolute -right-1 -top-2 text-[2.75rem] font-bold text-slate-50 leading-none select-none transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:text-[#DC0017]/[0.07] group-hover:scale-110">
                                  {String(idx + 1).padStart(2, '0')}
                                </span>
                                <div className="relative flex items-start justify-between gap-2">
                                  <h4 className="text-[13px] font-bold text-[#0B2A4A] leading-snug pr-1 transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:text-[#DC0017]">{item.title}</h4>
                                </div>
                                <p className="relative text-[11.5px] text-gray-500 leading-relaxed mt-1.5 line-clamp-2">{item.desc}</p>
                                <span className="absolute left-4 right-4 bottom-3 h-[2px] rounded-full bg-[#DC0017] origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-x-100" />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6">
                        <Link 
                          href={`/${locale}${activeTabData.path}`} 
                          onClick={() => setDropdownOpen(false)}
                          className="inline-flex items-center gap-2 bg-[#0B2A4A] hover:bg-blue-950 text-white text-xs font-semibold px-5 py-2.5 rounded-full transition duration-200 shadow-sm"
                        >
                          {data.ui.learnMore}
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
              <Link key={link.label} href={`/${locale}${link.href}`} className="hover:text-[#DC0017] transition-colors py-2">
                {link.label}
              </Link>
            )
          )}
          
          <div className="flex items-center gap-6 ml-2">
            {/* BUTTON LANGUAGE SWITCHER */}
            <div className="flex items-center bg-slate-100/80 rounded-full p-1 border border-slate-200/60 shadow-inner">
              <button 
                onClick={() => handleLanguageChange('en')}
                className={`px-3.5 py-1.5 rounded-full text-[11px] uppercase tracking-wider font-bold transition-all duration-300 ${
                  locale === 'en' ? 'bg-white text-[#DC0017] shadow-[0_2px_8px_-2px_rgba(0,0,0,0.1)]' : 'text-slate-500 hover:text-[#00263C]'
                }`}
              >
                EN
              </button>
              <button 
                onClick={() => handleLanguageChange('id')}
                className={`px-3.5 py-1.5 rounded-full text-[11px] uppercase tracking-wider font-bold transition-all duration-300 ${
                  locale === 'id' ? 'bg-white text-[#DC0017] shadow-[0_2px_8px_-2px_rgba(0,0,0,0.1)]' : 'text-slate-500 hover:text-[#00263C]'
                }`}
              >
                ID
              </button>
            </div>

            <Link href={`/${locale}/join-us`} className="bg-[#E60000] hover:bg-red-700 text-white px-6 py-2.5 rounded-full font-bold shadow-md transition-all transform hover:-translate-y-0.5">
              {t('join')}
            </Link>
          </div>
        </div>

        {/* MOBILE HAMBURGER MENU */}
        <button
          className="lg:hidden text-[#00263C] hover:text-[#DC0017] focus:outline-none"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? <path d="M6 6L18 18M6 18L18 6" strokeLinecap="round" /> : <path d="M3 6H21M3 12H21M3 18H21" strokeLinecap="round" />}
          </svg>
        </button>
      </div>

      {/* MOBILE PANEL */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-blue-900/40 px-6 py-5 flex flex-col gap-4 text-[#00263C]/90 font-medium text-sm shadow-inner max-h-[70vh] overflow-y-auto">
          <div className="border-b border-gray-100 pb-4 mb-3">
            <span className="block text-[10px] font-bold text-gray-400 mb-2.5 uppercase tracking-[0.15em]">{t('business')}</span>
            <div className="flex flex-col gap-2">
              {businessTabs.map((tab) => {
                const isOpen = expandedBizTab === tab.id;
                return (
                  <div key={tab.id} className="rounded-2xl bg-gradient-to-b from-slate-50 to-white p-1 ring-1 ring-black/[0.04] transition-colors duration-500">
                    <button onClick={() => setExpandedBizTab(isOpen ? null : tab.id)} className="w-full flex items-center justify-between rounded-[1rem] bg-white px-3.5 py-3 text-left">
                      <span className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-lg bg-[#0B2A4A]/5 flex items-center justify-center shrink-0">
                          <DynamicIcon name={tab.icon} className="w-4 h-4 text-[#0B2A4A]" />
                        </span>
                        <span className="text-[13px] font-bold text-[#0B2A4A]">{tab.title}</span>
                      </span>
                      <svg className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] shrink-0 ${isOpen ? 'rotate-180' : ''}`} viewBox="0 0 12 8" fill="none">
                        <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <div className={`grid transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                      <div className="overflow-hidden">
                        <div className="flex flex-col gap-0.5 px-2 pt-2 pb-1">
                          {tab.subMenus.map((item, i) => (
                            <Link key={i} href={`/${locale}${tab.path}`} onClick={() => setMobileOpen(false)} className="flex items-center gap-2 text-xs text-gray-500 hover:text-[#DC0017] py-1.5 px-2">
                              <span className="w-1 h-1 rounded-full bg-[#DC0017]/40 shrink-0" />
                              {item.title}
                            </Link>
                          ))}
                          <Link href={`/${locale}${tab.path}`} onClick={() => setMobileOpen(false)} className="text-xs font-bold text-[#DC0017] py-2 px-2">
                            {data.ui.viewAll}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <Link href={`/${locale}/tips-and-trick`} onClick={() => setMobileOpen(false)} className="hover:text-[#DC0017] py-1 font-semibold">{t('tips')}</Link>
          <Link href={`/${locale}/pricing`} onClick={() => setMobileOpen(false)} className="hover:text-[#DC0017] py-1 font-semibold">{t('pricing')}</Link>
          <Link href={`/${locale}/recruitment`} onClick={() => setMobileOpen(false)} className="hover:text-[#DC0017] py-1 font-semibold">{t('recruitment')}</Link>
          <Link href={`/${locale}/about`} onClick={() => setMobileOpen(false)} className="hover:text-[#DC0017] py-1 font-semibold">{t('about')}</Link>
          <Link href={`/${locale}/newsletter`} onClick={() => setMobileOpen(false)} className="hover:text-[#DC0017] py-1 font-semibold">{t('news')}</Link>
          
          <div className="flex items-center justify-between pt-4 mt-2 border-t border-gray-100">
            <div className="flex items-center bg-slate-100/80 rounded-full p-1 border border-slate-200/60 shadow-inner">
              <button 
                onClick={() => handleLanguageChange('en')}
                className={`px-4 py-2 rounded-full text-[11px] uppercase tracking-wider font-bold transition-all duration-300 ${locale === 'en' ? 'bg-white text-[#DC0017] shadow-[0_2px_8px_-2px_rgba(0,0,0,0.1)]' : 'text-slate-500 hover:text-[#00263C]'}`}
              >
                EN
              </button>
              <button 
                onClick={() => handleLanguageChange('id')}
                className={`px-4 py-2 rounded-full text-[11px] uppercase tracking-wider font-bold transition-all duration-300 ${locale === 'id' ? 'bg-white text-[#DC0017] shadow-[0_2px_8px_-2px_rgba(0,0,0,0.1)]' : 'text-slate-500 hover:text-[#00263C]'}`}
              >
                ID
              </button>
            </div>

            <Link href={`/${locale}/join-us`} onClick={() => setMobileOpen(false)} className="bg-[#E60000] text-white px-5 py-2.5 rounded-full font-bold text-center shadow-md">
              {t('join')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}