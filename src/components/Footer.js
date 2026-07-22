import Image from 'next/image';
import Link from 'next/link';

const layanan = [
  { label: 'Business Support Services', href: '/business/business-support' },
  { label: 'Human Capital Solutions', href: '/business/humancapital-solutions' },
  { label: 'Payroll & Outsourcing', href: '/business/payroll' },
  { label: 'Assessment Tools', href: '/business/assessment-tools' },
  { label: 'HR Boot Camp', href: '/business/hr-bootcamp' },
  { label: 'Industrial Relations & Legal', href: '/business/industrial-relations' },
  { label: 'Health, Safety & Environment', href: '/business/hse' },
  { label: 'Corporate Culture & Events', href: '/business/corporate-culture' },
  { label: 'Professional Certification (LSP)', href: '/business/lsp' },
];

const navigasi = [
  { label: 'Beranda', href: '/' },
  { label: 'Tips & Trick HR', href: '/tips-and-trick' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Recruitment', href: '/recruitment' },
  { label: 'About Us', href: '/about' },
];


const kontak = {
  alamat: 'Jakarta, Indonesia',
  email: 'info@firsthrindonesia.com',
  whatsapp: 'https://wa.me/62xxxxxxxxxx', // Ganti dengan nomor WhatsApp yang valid
};

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden text-white"
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
      <div className="relative h-[2px] w-full bg-gradient-to-r from-transparent via-[#DC0017]/60 to-transparent" />

      {/* Main content */}
      <div className="relative mx-auto max-w-7xl px-6 md:px-12 pt-16 pb-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* ── KOLOM 1: Logo + Tagline + Sosmed ── */}
          <div className="flex flex-col gap-6">
            <Link href="/">
              <Image
                src="/fhri-logo.png"
                alt="First HR Indonesia"
                width={140}
                height={36}
                className="object-contain"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </Link>

            <p className="text-sm text-white/50 leading-relaxed max-w-[220px]">
              Mitra terpercaya untuk solusi HR dan pengembangan sumber daya manusia di Indonesia.
            </p>

            {/* Social Media Icons — inline SVG */}
            <div className="flex gap-3">
              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn First HR Indonesia"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#DC0017] transition-colors duration-300 flex items-center justify-center"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram First HR Indonesia"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#DC0017] transition-colors duration-300 flex items-center justify-center"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>
              {/* WhatsApp */}
              <a
                href={kontak.whatsapp}
                aria-label="WhatsApp First HR Indonesia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#DC0017] transition-colors duration-300 flex items-center justify-center"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* ── KOLOM 2: Layanan ── */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-white/40">
              Layanan
            </h4>
            <ul className="flex flex-col gap-2.5">
              {layanan.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
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
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-white/40">
              Perusahaan
            </h4>
            <ul className="flex flex-col gap-2.5">
              {navigasi.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
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
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-white/40">
              Kontak
            </h4>

            <div className="flex flex-col gap-4">
              {/* Alamat */}
              <div className="flex gap-3">
                <div className="mt-0.5 shrink-0">
                  <svg className="w-4 h-4 text-[#DC0017]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <p className="text-sm text-white/60 leading-relaxed">{kontak.alamat}</p>
              </div>

              {/* Email */}
              <div className="flex gap-3">
                <div className="mt-0.5 shrink-0">
                  <svg className="w-4 h-4 text-[#DC0017]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <a
                  href={`mailto:${kontak.email}`}
                  className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                >
                  {kontak.email}
                </a>
              </div>

              {/* CTA WhatsApp */}
              <a
                href={kontak.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 self-start rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 hover:bg-[#DC0017] hover:border-[#DC0017] hover:text-white transition-all duration-300"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
                Hubungi Kami
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-14 h-px w-full bg-white/[0.08]" />

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-[12px] text-white/30">
            &copy; {new Date().getFullYear()} First HR Indonesia. All rights reserved.
          </p>
          <div className="flex gap-5 text-[12px] text-white/30">
            {/* Ceiling: buat /privacy dan /terms lalu ganti '#' dengan path nyata. */}
            <a href="#" className="hover:text-white/60 transition-colors duration-200">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white/60 transition-colors duration-200">Syarat Layanan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
