'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { getNavbarData } from '@/components/navbarData';

const DynamicIcon = ({ name, className }) => (
  <div 
    className={`bg-current ${className}`}
    style={{
      WebkitMaskImage: `url('/icons/${name}')`,
      WebkitMaskSize: 'contain',
      WebkitMaskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskImage: `url('/icons/${name}')`,
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
  
  const data = getNavbarData(locale);
  const businessTabs = data.businessTabs;
  // Menambahkan data aboutTabs yang sudah ada di navbarData.js
  const aboutTabs = data.aboutTabs;

  const [mobileOpen, setMobileOpen] = useState(false);
  
  // State untuk Tab Aktif
  const [activeTabId, setActiveTabId] = useState('support'); 
  const [activeAboutTabId, setActiveAboutTabId] = useState('commissioners'); 
  
  // PERBAIKAN: Mengubah boolean menjadi string agar bisa mendeteksi menu mana yang terbuka ('business' atau 'about')
  const [openDropdown, setOpenDropdown] = useState(null); 
  const [expandedBizTab, setExpandedBizTab] = useState(null);
  const [expandedAboutTab, setExpandedAboutTab] = useState(null);
  
  const dropdownRef = useRef(null);

  // PERBAIKAN: Memetakan dropdown sebagai string id
  const navLinks = [
    { label: t('business'), dropdown: 'business', href: '/business' },
    { label: t('tips'), href: '/tips-and-trick' },
    { label: t('pricing'), href: '/pricing' },
    { label: t('recruitment'), href: '/recruitment' },
    { label: t('about'), dropdown: 'about', href: '/about' },
    { label: t('news'), href: '/newsletter' },
  ];

  useEffect(() => {
    if (!openDropdown) return;
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openDropdown]);

  const activeTabData = businessTabs.find((tab) => tab.id === activeTabId) || businessTabs[0];
  const activeAboutTabData = aboutTabs?.find((tab) => tab.id === activeAboutTabId) || aboutTabs[0];

  const handleLanguageChange = (newLocale) => {
    if (locale === newLocale) return;
    const newPath = pathname.replace(new RegExp(`^/${locale}`), `/${newLocale}`);
    router.push(newPath);
  };

  // Fungsi toggle baru
  const toggleDropdown = (menuName) => {
    setOpenDropdown(openDropdown === menuName ? null : menuName);
  };

  return (
    <nav className="sticky top-0 bg-white text-brand-navy shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 lg:px-6 xl:px-12 relative">
        
        {/* COMPANY LOGO */}
        <Link href={`/${locale}`} className="flex items-center gap-2 select-none -ml-3 shrink-0">
          <div className="relative w-32 xl:w-36 h-8 xl:h-9 flex items-center">
            <Image
              src="/images/fhri-logo.png" 
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
        <div className="hidden lg:flex items-center gap-3 xl:gap-7 text-brand-navy/90 font-medium text-xs xl:text-sm" ref={dropdownRef}>
          {navLinks.map((link) =>
            link.dropdown ? (
              // PERBAIKAN: Menambahkan 'relative' HANYA pada dropdown about agar posisinya mengikuti tombol About Us
              <div key={link.label} className={`py-2 ${link.dropdown === 'about' ? 'relative' : ''}`}>
                <button 
                  onClick={() => toggleDropdown(link.dropdown)}
                  className="flex items-center gap-1 xl:gap-1.5 text-brand-navy hover:text-brand-red font-semibold transition-colors focus:outline-none cursor-pointer whitespace-nowrap"
                >
                  {link.label}
                  <div 
                    className={`w-3.5 h-3.5 mt-0.5 bg-current shrink-0 transition-transform duration-200 ${openDropdown === link.dropdown ? 'rotate-180 text-brand-red' : ''}`}
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
                </button>

                {/* 1. MEGA-MENU DROPDOWN: BUSINESS (TIDAK ADA YANG DIUBAH SAMA SEKALI) */}
                {link.dropdown === 'business' && (
                  <div className={`transition-all duration-300 absolute top-full left-6 right-6 lg:left-6 lg:right-6 xl:left-12 xl:right-12 mt-2 z-50 ${openDropdown === 'business' ? 'visible opacity-100 translate-y-0' : 'invisible opacity-0 -translate-y-2 pointer-events-none'}`}>
                    <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 md:p-8 flex gap-8 text-gray-800 w-full">
                      
                      <div className="w-[35%] flex flex-col justify-between border-r border-gray-100 pr-6 shrink-0">
                        <div className="flex flex-col gap-1">
                          {businessTabs.map((tab) => (
                            <button 
                              key={tab.id}
                              onClick={() => setActiveTabId(tab.id)}
                              className={`flex items-center justify-between w-full px-3.5 py-2.5 rounded-xl text-left text-sm font-semibold transition ${activeTabId === tab.id ? 'bg-brand-navy text-white shadow-md' : 'text-slate-600 hover:bg-slate-50 hover:text-brand-navy'}`}
                            >
                              <span className="flex items-center gap-3">
                                <DynamicIcon name={tab.icon} className="w-4 h-4 shrink-0" />
                                <span className="truncate">{tab.title}</span> 
                              </span>
                              <span className="text-xs ml-2 shrink-0">›</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="w-[65%] flex flex-col justify-between pl-2">
                        <div>
                          <div className="flex items-center gap-3.5 mb-5">
                            <div className="w-11 h-11 bg-brand-navy rounded-xl flex items-center justify-center text-white shadow-sm shrink-0">
                              <DynamicIcon name={activeTabData.icon} className="w-6 h-6" />
                            </div>
                            <div>
                              <h3 className="text-base font-bold text-brand-navy leading-tight">{activeTabData.title}</h3>
                              <p className="text-xs text-slate-500 mt-0.5">{activeTabData.subtitle}</p>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 xl:grid-cols-3 gap-3.5">
                            {activeTabData.subMenus.map((item, idx) => (
                              <div key={idx} className="group relative rounded-[1.25rem] bg-gradient-to-b from-slate-50 to-white p-1 ring-1 ring-black/[0.04] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-2 hover:ring-[#DC0017]/20 hover:shadow-[0_28px_48px_-18px_rgba(21,60,86,0.24)]">
                                <div className="relative h-full rounded-[calc(1.25rem-0.25rem)] bg-white p-4 overflow-hidden transition-colors duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-red-50/50">
                                  <span className="absolute -right-1 -top-2 text-[2.75rem] font-bold text-slate-50 leading-none select-none transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:text-brand-red/[0.07] group-hover:scale-110">
                                    {String(idx + 1).padStart(2, '0')}
                                  </span>
                                  <div className="relative flex items-start justify-between gap-2">
                                    <h4 className="text-sm font-bold text-brand-navy leading-snug pr-1 transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:text-brand-red">{item.title}</h4>
                                  </div>
                                  <p className="relative text-xs text-slate-500 leading-relaxed mt-1.5 line-clamp-2">{item.desc}</p>
                                  <span className="absolute left-4 right-4 bottom-3 h-[2px] rounded-full bg-[#DC0017] origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-x-100" />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mt-6">
                          <Link 
                            href={`/${locale}${activeTabData.path}`} 
                            onClick={() => setOpenDropdown(null)}
                            className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-navy/80 text-white text-xs font-semibold px-5 py-2.5 rounded-full transition duration-200 shadow-sm"
                          >
                            {data.ui.learnMore}
                            <div 
                              className="w-3.5 h-3.5 bg-current shrink-0"
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
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. DROPDOWN ABOUT US: (SEKARANG TAMPILAN TAB SAJA, POSISI TURUN & RATA TENGAH DARI TOMBOL) */}
                {link.dropdown === 'about' && (
                  <div className={`transition-all duration-300 absolute top-[calc(100%+24px)] left-1/2 -translate-x-1/2 w-[340px] z-50 origin-top ${openDropdown === 'about' ? 'visible opacity-100 translate-y-0 scale-100' : 'invisible opacity-0 -translate-y-3 scale-95 pointer-events-none'}`}>
                    
                    {/* Kotak Putih Dropdown */}
                    <div className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,38,60,0.15)] border border-slate-100 p-3 flex flex-col gap-1 relative">
                      
                      {/* Panah Atas Transparan (Pemanis Desain) */}
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-t border-l border-slate-100 transform rotate-45 pointer-events-none"></div>

                      <div className="relative z-10 bg-white rounded-2xl">
                        {/* Tautan ke Halaman Utama About */}
                        <Link 
                          href={`/${locale}/about`} 
                          onClick={() => setOpenDropdown(null)}
                          className="flex items-center gap-3.5 w-full px-5 py-4 mb-2 rounded-xl text-left text-[14.5px] font-bold text-brand-navy hover:bg-slate-50 transition shadow-sm border border-slate-100"
                        >
                          <DynamicIcon name="ic_users-outline.svg" className="w-[18px] h-[18px] shrink-0 text-brand-red" />
                          <span className="truncate">{locale === 'id' ? 'Profil Perusahaan Lengkap' : 'Full Company Profile'}</span> 
                        </Link>
                        
                        <div className="w-full h-px bg-slate-100 my-1"></div>
                        
                        {/* Tautan ke Sub-Kategori Profil */}
                        {aboutTabs?.map((tab) => (
                          <Link 
                            key={tab.id}
                            href={`/${locale}${tab.path}`}
                            onClick={() => setOpenDropdown(null)}
                            className="group flex items-center justify-between w-full px-5 py-3.5 rounded-xl text-left text-[14.5px] font-semibold transition-all hover:bg-brand-navy hover:text-white text-slate-600"
                          >
                            <span className="flex items-center gap-3.5">
                              <DynamicIcon name={tab.icon} className="w-[18px] h-[18px] shrink-0 group-hover:text-white" />
                              <span className="truncate">{tab.title}</span> 
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link key={link.label} href={`/${locale}${link.href}`} className="hover:text-brand-red transition-colors py-2 whitespace-nowrap">
                {link.label}
              </Link>
            )
          )}
          
          <div className="flex items-center gap-2 xl:gap-6 ml-2 shrink-0">
            {/* BUTTON LANGUAGE SWITCHER */}
            <div className="flex items-center bg-slate-100/80 rounded-full p-1 border border-slate-200/60 shadow-inner">
              <button 
                onClick={() => handleLanguageChange('en')}
                className={`px-3 py-1 xl:px-3.5 xl:py-1.5 rounded-full text-[10px] xl:text-xs uppercase tracking-wider font-bold transition-all duration-300 ${
                  locale === 'en' ? 'bg-white text-brand-red shadow-[0_2px_8px_-2px_rgba(0,0,0,0.1)]' : 'text-slate-500 hover:text-brand-navy'
                }`}
              >
                EN
              </button>
              <button 
                onClick={() => handleLanguageChange('id')}
                className={`px-3 py-1 xl:px-3.5 xl:py-1.5 rounded-full text-[10px] xl:text-xs uppercase tracking-wider font-bold transition-all duration-300 ${
                  locale === 'id' ? 'bg-white text-brand-red shadow-[0_2px_8px_-2px_rgba(0,0,0,0.1)]' : 'text-slate-500 hover:text-brand-navy'
                }`}
              >
                ID
              </button>
            </div>

            {/* Tambahkan whitespace-nowrap dan shrink-0 pada tombol */}
            <Link href={`/${locale}/join-us`} className="bg-brand-red hover:bg-red-700 text-white px-5 py-2 xl:px-6 xl:py-2.5 rounded-full font-bold shadow-md transition-all transform hover:-translate-y-0.5 whitespace-nowrap shrink-0 text-xs xl:text-sm">
              {t('join')}
            </Link>
          </div>
        </div>

        {/* MOBILE HAMBURGER MENU */}
        <button
          className="lg:hidden text-brand-navy hover:text-brand-red focus:outline-none"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <div 
            className="w-7 h-7 bg-current shrink-0 transition-all duration-300"
            style={{
              WebkitMaskImage: `url('/icons/${mobileOpen ? 'ic_x-mark.svg' : 'ic_more.svg'}')`,
              WebkitMaskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center',
              maskImage: `url('/icons/${mobileOpen ? 'ic_x-mark.svg' : 'ic_more.svg'}')`,
              maskSize: 'contain',
              maskRepeat: 'no-repeat',
              maskPosition: 'center',
            }}
          />
        </button>
      </div>

      {/* MOBILE PANEL (Tetap Sama) */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-blue-900/40 px-6 py-5 flex flex-col gap-4 text-brand-navy/90 font-medium text-sm shadow-inner max-h-[70vh] overflow-y-auto">
          
          {/* Business Mobile Tab */}
          <div className="border-b border-gray-100 pb-4 mb-3">
            <span className="block text-xs font-bold text-slate-400 mb-2.5 uppercase tracking-[0.15em]">{t('business')}</span>
            <div className="flex flex-col gap-2">
              {businessTabs.map((tab) => {
                const isOpen = expandedBizTab === tab.id;
                return (
                  <div key={tab.id} className="rounded-2xl bg-gradient-to-b from-slate-50 to-white p-1 ring-1 ring-black/[0.04] transition-colors duration-500">
                    <button onClick={() => setExpandedBizTab(isOpen ? null : tab.id)} className="w-full flex items-center justify-between rounded-[1rem] bg-white px-3.5 py-3 text-left">
                      <span className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-lg bg-brand-navy/5 flex items-center justify-center shrink-0">
                          <DynamicIcon name={tab.icon} className="w-4 h-4 text-brand-navy" />
                        </span>
                        <span className="text-sm font-bold text-brand-navy">{tab.title}</span>
                      </span>
                      
                      <div 
                        className={`w-3.5 h-3.5 bg-gray-400 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] shrink-0 ${isOpen ? 'rotate-180' : ''}`}
                        style={{ WebkitMaskImage: `url('/icons/ic_arrow-short-down.svg')`, WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center', maskImage: `url('/icons/ic_arrow-short-down.svg')`, maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center' }}
                      />
                    </button>
                    <div className={`grid transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                      <div className="overflow-hidden">
                        <div className="flex flex-col gap-0.5 px-2 pt-2 pb-1">
                          {tab.subMenus.map((item, i) => (
                            <Link key={i} href={`/${locale}${tab.path}`} onClick={() => setMobileOpen(false)} className="flex items-center gap-2 text-xs text-slate-500 hover:text-brand-red py-1.5 px-2">
                              <span className="w-1 h-1 rounded-full bg-brand-red/40 shrink-0" />
                              {item.title}
                            </Link>
                          ))}
                          <Link href={`/${locale}${tab.path}`} onClick={() => setMobileOpen(false)} className="text-xs font-bold text-brand-red py-2 px-2">
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

          <Link href={`/${locale}/tips-and-trick`} onClick={() => setMobileOpen(false)} className="hover:text-brand-red py-1 font-semibold">{t('tips')}</Link>
          <Link href={`/${locale}/pricing`} onClick={() => setMobileOpen(false)} className="hover:text-brand-red py-1 font-semibold">{t('pricing')}</Link>
          <Link href={`/${locale}/recruitment`} onClick={() => setMobileOpen(false)} className="hover:text-brand-red py-1 font-semibold">{t('recruitment')}</Link>
          
          {/* About Us Mobile Tab */}
          <div className="border-t border-b border-gray-100 py-4 my-1">
            <span className="block text-xs font-bold text-slate-400 mb-2.5 uppercase tracking-[0.15em]">{t('about')}</span>
            <div className="flex flex-col gap-2">
              <Link href={`/${locale}/about`} onClick={() => setMobileOpen(false)} className="rounded-2xl bg-gradient-to-b from-slate-50 to-white p-1 ring-1 ring-black/[0.04] mb-1">
                <div className="w-full flex items-center gap-3 rounded-[1rem] bg-white px-3.5 py-3">
                  <span className="w-8 h-8 rounded-lg bg-brand-red/10 flex items-center justify-center shrink-0">
                    <DynamicIcon name="ic_users-outline.svg" className="w-4 h-4 text-brand-red" />
                  </span>
                  <span className="text-sm font-bold text-brand-navy">{locale === 'id' ? 'Profil Perusahaan Lengkap' : 'Full Company Profile'}</span>
                </div>
              </Link>
              {aboutTabs?.map((tab) => {
                const isOpen = expandedAboutTab === tab.id;
                return (
                  <div key={tab.id} className="rounded-2xl bg-gradient-to-b from-slate-50 to-white p-1 ring-1 ring-black/[0.04] transition-colors duration-500">
                    <button onClick={() => setExpandedAboutTab(isOpen ? null : tab.id)} className="w-full flex items-center justify-between rounded-[1rem] bg-white px-3.5 py-3 text-left">
                      <span className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-lg bg-brand-navy/5 flex items-center justify-center shrink-0">
                          <DynamicIcon name={tab.icon} className="w-4 h-4 text-brand-navy" />
                        </span>
                        <span className="text-sm font-bold text-brand-navy">{tab.title}</span>
                      </span>
                      
                      <div 
                        className={`w-3.5 h-3.5 bg-gray-400 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] shrink-0 ${isOpen ? 'rotate-180' : ''}`}
                        style={{ WebkitMaskImage: `url('/icons/ic_arrow-short-down.svg')`, WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center', maskImage: `url('/icons/ic_arrow-short-down.svg')`, maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center' }}
                      />
                    </button>
                    <div className={`grid transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                      <div className="overflow-hidden">
                        <div className="flex flex-col gap-0.5 px-2 pt-2 pb-1">
                          {tab.subMenus.map((item, i) => (
                            <Link key={i} href={`/${locale}${tab.path}`} onClick={() => setMobileOpen(false)} className="flex items-center gap-2 text-xs text-slate-500 hover:text-brand-red py-1.5 px-2">
                              <span className="w-1 h-1 rounded-full bg-brand-red/40 shrink-0" />
                              {item.title}
                            </Link>
                          ))}
                          <Link href={`/${locale}${tab.path}`} onClick={() => setMobileOpen(false)} className="text-xs font-bold text-brand-red py-2 px-2">
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

          <Link href={`/${locale}/newsletter`} onClick={() => setMobileOpen(false)} className="hover:text-brand-red py-1 font-semibold">{t('news')}</Link>
          
          <div className="flex items-center justify-between pt-4 mt-2 border-t border-gray-100">
            <div className="flex items-center bg-slate-100/80 rounded-full p-1 border border-slate-200/60 shadow-inner">
              <button 
                onClick={() => handleLanguageChange('en')}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-bold transition-all duration-300 ${locale === 'en' ? 'bg-white text-brand-red shadow-[0_2px_8px_-2px_rgba(0,0,0,0.1)]' : 'text-slate-500 hover:text-brand-navy'}`}
              >
                EN
              </button>
              <button 
                onClick={() => handleLanguageChange('id')}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-bold transition-all duration-300 ${locale === 'id' ? 'bg-white text-brand-red shadow-[0_2px_8px_-2px_rgba(0,0,0,0.1)]' : 'text-slate-500 hover:text-brand-navy'}`}
              >
                ID
              </button>
            </div>

            <Link href={`/${locale}/join-us`} onClick={() => setMobileOpen(false)} className="bg-brand-red text-white px-5 py-2.5 rounded-full font-bold text-center shadow-md">
              {t('join')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}