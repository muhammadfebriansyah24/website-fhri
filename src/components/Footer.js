'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { getFooterData } from '@/components/footerData'; // 👇 Import data footer

const kontak = {
  email: 'info@firsthrindonesia.com',
  whatsapp: 'https://wa.me/628118101890',
};

export default function Footer() {
  const t = useTranslations('Footer');
  const locale = useLocale();
  
  // 👇 Ambil data layanan & navigasi sesuai bahasa
  const data = getFooterData(locale);

  return (
    <footer
      className="relative overflow-hidden text-white font-sans"
      style={{
        background: 'linear-gradient(135deg, #00263C 0%, #001824 55%, #00111a 100%)',
      }}
    >
      {/* Subtle diagonal texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, white 0px, white 1px, transparent 1px, transparent 60px)',
        }}
      />

      {/* Top accent line */}
      <div className="relative h-[2px] w-full bg-gradient-to-r from-transparent via-brand-red/60 to-transparent" />

      {/* Main content */}
      <div className="relative mx-auto max-w-7xl px-6 md:px-12 pt-16 pb-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* ── KOLOM 1: Logo + Tagline + Sosmed ── */}
          <div className="flex flex-col gap-6">
            <Link href={`/${locale}`}>
              <Image
                src="/images/fhri-logo.png"
                alt="First HR Indonesia"
                width={140}
                height={36}
                className="object-contain"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </Link>

            <p className="text-sm text-white/50 leading-relaxed max-w-[220px]">
              {t('tagline')}
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-3">
              {/* LINKEDIN */}
              <a
                href="#"
                aria-label="LinkedIn First HR Indonesia"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-brand-red transition-colors duration-300 flex items-center justify-center text-white"
              >
                <div 
                  className="w-3.5 h-3.5 bg-current shrink-0"
                  style={{
                    WebkitMaskImage: `url('/icons/ic_linkedin-solid.svg')`,
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskImage: `url('/icons/ic_linkedin-solid.svg')`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                  }}
                />
              </a>

              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/firsthrindonesia"
                target="_blank"
                aria-label="Instagram First HR Indonesia"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-brand-red transition-colors duration-300 flex items-center justify-center text-white"
              >
                <div 
                  className="w-3.5 h-3.5 bg-current shrink-0"
                  style={{
                    WebkitMaskImage: `url('/icons/ic_instagram-outline.svg')`,
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskImage: `url('/icons/ic_instagram-outline.svg')`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                  }}
                />
              </a>

              {/* WHATSAPP */}
              <a
                href={kontak.whatsapp}
                aria-label="WhatsApp First HR Indonesia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-brand-red transition-colors duration-300 flex items-center justify-center text-white"
              >
                <div 
                  className="w-3.5 h-3.5 bg-current shrink-0"
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
              </a>
            </div>
          </div>

          {/* ── KOLOM 2: Layanan ── */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-white/40">
              {t('servicesTitle')}
            </h4>
            <ul className="flex flex-col gap-2.5">
              {data.layanan.map((item) => (
                <li key={item.href}>
                  <Link
                    href={`/${locale}${item.href}`}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200 hover:translate-x-0.5 inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── KOLOM 3: Navigasi ── */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-white/40">
              {t('companyTitle')}
            </h4>
            <ul className="flex flex-col gap-2.5">
              {data.navigasi.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={`/${locale}${item.href === '/' ? '' : item.href}`}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200 hover:translate-x-0.5 inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── KOLOM 4: Kontak ── */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-white/40">
              {t('contactTitle')}
            </h4>

            <div className="flex flex-col gap-4">
              {/* LOKASI */}
              <div className="flex gap-3">
                <div className="mt-0.5 shrink-0">
                  <div 
                    className="w-4 h-4 bg-brand-red shrink-0"
                    style={{
                      WebkitMaskImage: `url('/icons/ic_location-outline.svg')`,
                      WebkitMaskSize: 'contain',
                      WebkitMaskRepeat: 'no-repeat',
                      WebkitMaskPosition: 'center',
                      maskImage: `url('/icons/ic_location-outline.svg')`,
                      maskSize: 'contain',
                      maskRepeat: 'no-repeat',
                      maskPosition: 'center',
                    }}
                  />
                </div>
                <p className="text-sm text-white/60 leading-relaxed">{t('address')}</p>
              </div>

              {/* EMAIL */}
              <div className="flex gap-3">
                <div className="mt-0.5 shrink-0">
                  <div 
                    className="w-4 h-4 bg-brand-red shrink-0"
                    style={{
                      WebkitMaskImage: `url('/icons/ic_mail-outline.svg')`,
                      WebkitMaskSize: 'contain',
                      WebkitMaskRepeat: 'no-repeat',
                      WebkitMaskPosition: 'center',
                      maskImage: `url('/icons/ic_mail-outline.svg')`,
                      maskSize: 'contain',
                      maskRepeat: 'no-repeat',
                      maskPosition: 'center',
                    }}
                  />
                </div>
                <a
                  href={`mailto:${kontak.email}`}
                  className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                >
                  {kontak.email}
                </a>
              </div>

              <a
                href={kontak.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 self-start rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 hover:bg-brand-red hover:border-brand-red hover:text-white transition-all duration-300"
              >
                <div 
                  className="w-3.5 h-3.5 bg-current shrink-0"
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
                {t('whatsappBtn')}
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-14 h-px w-full bg-white/[0.08]" />

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-white/30">
            &copy; {new Date().getFullYear()} First HR Indonesia. All rights reserved.
          </p>
          <div className="flex gap-5 text-sm text-white/30">
            <a href="#" className="hover:text-white/60 transition-colors duration-200">{t('privacy')}</a>
            <a href="#" className="hover:text-white/60 transition-colors duration-200">{t('terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}