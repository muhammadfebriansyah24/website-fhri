export const getFooterData = (locale) => {
  if (locale === 'id') {
    return {
      layanan: [
        { label: 'Layanan Dukungan Bisnis', href: '/business/business-support' },
        { label: 'Solusi Human Capital', href: '/business/humancapital-solutions' },
        { label: 'Penggajian & Alih Daya', href: '/business/payroll' },
        { label: 'Alat Asesmen', href: '/business/assessment-tools' },
        { label: 'Boot Camp HR', href: '/business/hr-bootcamp' },
        { label: 'Hubungan Industrial & Hukum', href: '/business/industrial-relations' },
        { label: 'Kesehatan, Keselamatan & Lingkungan', href: '/business/hse' },
        { label: 'Budaya & Acara Perusahaan', href: '/business/corporate-culture' },
        { label: 'Lembaga Sertifikasi Profesi', href: '/business/lsp' },
      ],
      navigasi: [
        { label: 'Beranda', href: '/' },
        { label: 'Tips & Trik HR', href: '/tips-and-trick' },
        { label: 'Harga', href: '/pricing' },
        { label: 'Rekrutmen', href: '/recruitment' },
        { label: 'Tentang Kami', href: '/about' },
      ]
    };
  }

  // DEFAULT / ENGLISH (en)
  return {
    layanan: [
      { label: 'Business Support Services', href: '/business/business-support' },
      { label: 'Human Capital Solutions', href: '/business/humancapital-solutions' },
      { label: 'Payroll & Outsourcing', href: '/business/payroll' },
      { label: 'Assessment Tools', href: '/business/assessment-tools' },
      { label: 'HR Boot Camp', href: '/business/hr-bootcamp' },
      { label: 'Industrial Relations & Legal', href: '/business/industrial-relations' },
      { label: 'Health, Safety & Environment', href: '/business/hse' },
      { label: 'Corporate Culture & Events', href: '/business/corporate-culture' },
      { label: 'Professional Certification (LSP)', href: '/business/lsp' },
    ],
    navigasi: [
      { label: 'Home', href: '/' },
      { label: 'Tips & Tricks', href: '/tips-and-trick' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Recruitment', href: '/recruitment' },
      { label: 'About Us', href: '/about' },
    ]
  };
};