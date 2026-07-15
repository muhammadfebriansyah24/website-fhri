'use client'; // Wajib ditambahkan jika menggunakan useState di Next.js App Router

import Link from 'next/link';
import { useState } from 'react';

// ============================================================
// DATA & CONSTANTS (Di luar agar performa render optimal)
// ============================================================
const IMG = {
  structural: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop',
  cultural: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop',
  finalCta: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
};

const coreCapabilities = [
  {
    title: 'Company Establishment',
    description: 'Expert guidance through local regulatory compliance, licensing, and legal requirements for new market entrants. We ensure your foundational structures are sound and compliant from day one.',
    icon: <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2M9 12h6M9 16h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  },
  {
    title: 'Cultural Fit Solutions',
    description: 'Workshops and coaching sessions designed to bridge cultural gaps and create harmonious team integration. Build a cohesive corporate culture that respects local nuance while maintaining global standards.',
    icon: <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  },
];

const structuralList = [
  { title: 'Local Licensing Procurement', description: 'Expedited handling of all necessary operational and sector-specific permits.' },
  { title: 'Legal Entity Structuring', description: 'Strategic advice on PMA (Foreign Direct Investment) setups and compliance frameworks.' },
];

const culturalList = [
  { title: 'Bridging Cultural Differences', description: 'Interactive workshops designed to foster mutual understanding and day-one harmony.' },
  { title: 'Tailored Leadership Coaching', description: 'Equipping expatriate and local leaders with strategies for cross-cultural team management.' },
];

const teamSizeOptions = ['1-10', '11-50', '51-200', '201-500', '500+'];

// ============================================================
// REUSABLE COMPONENTS
// ============================================================
function CTAButton({ href, children, variant = 'solid' }) {
  const styles =
    variant === 'solid'
      ? 'bg-[#DC2626] hover:bg-[#B91C1C] text-white'
      : 'bg-white/10 hover:bg-white/15 text-white ring-1 ring-white/15';
      
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2.5 ${styles} pl-6 pr-2 py-2 rounded-full font-semibold text-sm transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]`}
    >
      {children}
      <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white/15 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
          <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </Link>
  );
}

function Eyebrow({ children, tone = 'light' }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] ${
        tone === 'light' ? 'bg-white/10 text-white' : 'bg-[#DC2626]/10 text-[#DC2626]'
      }`}
    >
      {children}
    </span>
  );
}

// ============================================================
// MAIN COMPONENT
// ============================================================
export default function BusinessSupportPage() {
  // --- STATE UNTUK FORM (Section 1) ---
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', company: '', teamSize: '1-10', phone: '' });
  const [submitted, setSubmitted] = useState(false);
  const inputClass = 'w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-[#00263C] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00263C]/15 focus:border-[#00263C] transition-colors';

  const handleChange = (e) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => { e.preventDefault(); console.log(formData); setSubmitted(true); };

  // --- STATE DAN LOGIKA SLIDER TESTIMONIAL ---
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    { quote: '"FHRI membantu tim HR kami bertransformasi dari fungsi operasional menjadi mitra strategis. Dampaknya terasa langsung pada bisnis."', name: '[Full Name 1]', role: '[Job Title], [Company Name]' },
    { quote: '"Sangat direkomendasikan! Pelatihan ini memberikan insight yang luar biasa dan applicable untuk tantangan HR masa kini."', name: '[Full Name 2]', role: '[Job Title], [Company Name]' },
    { quote: '"Kurikulumnya komprehensif dan mentornya adalah praktisi ahli. Tim kami langsung mengimplementasikan ilmu yang didapat."', name: '[Full Name 3]', role: '[Job Title], [Company Name]' },
    { quote: '"Transformasi yang dibawa oleh program ini sangat signifikan dalam cara kami mengelola talenta dan performa karyawan."', name: '[Full Name 4]', role: '[Job Title], [Company Name]' },
  ];

  // Fungsi Next & Prev 
  const nextSlide = () => {
    setActiveSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <main className="min-h-screen font-sans">
      
      {/* ============================================================
          SECTION 1 — HERO & REQUEST STRATEGIC CONSULTATION FORM
          ============================================================ */}
      <section className="relative bg-[#00263C] pt-16 pb-20 md:pt-24 md:pb-28 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="absolute -left-32 -top-32 w-[480px] h-[480px] rounded-full bg-[#DC2626]/10 blur-3xl" />
        
        <div className="max-w-6xl mx-auto relative z-10 grid lg:grid-cols-2 gap-14 items-center">
          
          {/* Kiri: Teks Hero */}
          <div>
            <Eyebrow tone="light">Business Support Services</Eyebrow>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] text-balance">
              Operational Excellence for Your Business Entry
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-lg">
              Navigating local regulations and cultural integration to ensure your company thrives from day one. Expert guidance for seamless market entry in Indonesia.
            </p>
            <div className="mt-9">
              <CTAButton href="#cta" variant="solid">
                Start Your Business Journey
              </CTAButton>
            </div>
          </div>

          {/* Kanan: Form Konsultasi */}
          <div className="bg-white rounded-[1.75rem] p-6 md:p-8 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.35)]">
            {submitted ? (
              <div className="py-10 text-center">
                <div className="w-14 h-14 rounded-full bg-[#DC2626]/10 flex items-center justify-center mx-auto mb-5">
                  <svg className="w-7 h-7 text-[#DC2626]" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <h3 className="font-bold text-[#00263C] text-lg mb-2">Terima kasih!</h3>
                <p className="text-sm text-slate-500">Tim kami akan segera menghubungi Anda untuk menjadwalkan konsultasi strategis.</p>
              </div>
            ) : (
              <>
                <h3 className="font-bold text-[#00263C] text-xl mb-6">Request a Strategic Consultation</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <label className="block">
                      <span className="block text-[11px] font-semibold text-slate-600 mb-1.5">First Name <span className="text-[#DC2626]">*</span></span>
                      <input required type="text" name="firstName" value={formData.firstName} onChange={handleChange} className={inputClass} />
                    </label>
                    <label className="block">
                      <span className="block text-[11px] font-semibold text-slate-600 mb-1.5">Last Name <span className="text-[#DC2626]">*</span></span>
                      <input required type="text" name="lastName" value={formData.lastName} onChange={handleChange} className={inputClass} />
                    </label>
                  </div>
                  <label className="block">
                    <span className="block text-[11px] font-semibold text-slate-600 mb-1.5">Business Email <span className="text-[#DC2626]">*</span></span>
                    <input required type="email" name="email" value={formData.email} onChange={handleChange} className={inputClass} />
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <label className="block">
                      <span className="block text-[11px] font-semibold text-slate-600 mb-1.5">Company <span className="text-[#DC2626]">*</span></span>
                      <input required type="text" name="company" value={formData.company} onChange={handleChange} className={inputClass} />
                    </label>
                    <label className="block">
                      <span className="block text-[11px] font-semibold text-slate-600 mb-1.5">Team Size</span>
                      <select name="teamSize" value={formData.teamSize} onChange={handleChange} className={`${inputClass} bg-white`}>
                        {teamSizeOptions.map((size) => <option key={size} value={size}>{size}</option>)}
                      </select>
                    </label>
                  </div>
                  <label className="block">
                    <span className="block text-[11px] font-semibold text-slate-600 mb-1.5">Phone Number <span className="text-[#DC2626]">*</span></span>
                    <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+62 8123456789" className={inputClass} />
                  </label>
                  <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-[#00263C] hover:bg-[#001B2B] text-white font-semibold text-sm py-3.5 rounded-lg transition-colors duration-300 mt-2">
                    Talk to an Expert
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 2 — CORE CAPABILITIES
          ============================================================ */}
      <section className="bg-white py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <Eyebrow tone="dark">Core Capabilities</Eyebrow>
            <h2 className="mt-5 text-3xl md:text-5xl font-bold text-[#00263C] leading-tight">Foundational Services for Market Success</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {coreCapabilities.map((item) => (
              <article key={item.title} className="group rounded-[1.75rem] bg-slate-50 p-7 md:p-9 ring-1 ring-slate-100 transition-all hover:shadow-[0_30px_60px_-20px_rgba(0,38,60,0.18)] hover:-translate-y-1.5">
                <div className="w-12 h-12 rounded-xl bg-[#00263C] flex items-center justify-center mb-6">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24">{item.icon}</svg>
                </div>
                <h3 className="font-bold text-[#00263C] text-lg leading-snug group-hover:text-[#DC2626] transition-colors">{item.title}</h3>
                <p className="text-[13.5px] text-slate-500 leading-relaxed mt-3">{item.description}</p>
                <div className="pt-6 mt-6 border-t border-slate-200">
                  <Link href="#" className="group/link inline-flex items-center gap-1.5 text-[12px] font-bold text-[#DC2626] hover:text-[#B91C1C] transition-colors">
                    Explore Details
                    <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3 — STRUCTURAL INTEGRITY
          ============================================================ */}
      <section className="bg-white pb-24 md:pb-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          {/* Sisi Gambar */}
          <div className="rounded-[2rem] bg-slate-50 ring-1 ring-slate-100 p-2 order-2 lg:order-1">
            <div className="relative h-72 md:h-96 rounded-[calc(2rem-0.5rem)] overflow-hidden">
              <img src={IMG.structural} alt="Tim FHRI menangani legalitas" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
          {/* Sisi Teks */}
          <div className="order-1 lg:order-2">
            <Eyebrow tone="dark">Structural Integrity</Eyebrow>
            <h2 className="mt-5 text-3xl md:text-5xl font-bold text-[#00263C] leading-tight">Flawless Company Establishment</h2>
            <p className="mt-6 text-slate-500 leading-relaxed">
              Entering a new market requires meticulous attention to detail. Our dedicated team navigates the complexities of Indonesian corporate law, ensuring your entity is structured optimally for operational efficiency and full regulatory compliance.
            </p>
            <div className="mt-9 space-y-6">
              {structuralList.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#DC2626] flex items-center justify-center mt-0.5">
                    <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                  <div>
                    <h4 className="font-bold text-[#00263C] text-[15px] mb-1">{item.title}</h4>
                    <p className="text-[13px] text-slate-500 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4 — CULTURAL FIT CHALLENGE
          ============================================================ */}
      <section className="bg-white pb-24 md:pb-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          {/* Sisi Teks */}
          <div className="order-1">
            <Eyebrow tone="dark">Organizational Harmony</Eyebrow>
            <h2 className="mt-5 text-3xl md:text-5xl font-bold text-[#00263C] leading-tight">The Cultural Fit Challenge</h2>
            <p className="mt-6 text-slate-500 leading-relaxed">
              A successful business entry is as much about people as it is about paperwork. We specialize in aligning global corporate culture with local Indonesian professional dynamics, ensuring your team operates synergistically from the moment doors open.
            </p>
            <div className="mt-9 space-y-6">
              {culturalList.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#DC2626] flex items-center justify-center mt-0.5">
                    <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                  <div>
                    <h4 className="font-bold text-[#00263C] text-[15px] mb-1">{item.title}</h4>
                    <p className="text-[13px] text-slate-500 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Sisi Gambar */}
          <div className="rounded-[2rem] bg-slate-50 ring-1 ring-slate-100 p-2 order-2">
            <div className="relative h-72 md:h-96 rounded-[calc(2rem-0.5rem)] overflow-hidden">
              <img src={IMG.cultural} alt="Workshop cultural fit" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 5 — CTA BANNER
          ============================================================ */}
      <section id="cta" className="bg-[#00263C] py-24 md:py-32 px-6 md:px-12 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-7">
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none"><path d="M12 2l2.4 5.5L20 9l-4.5 3.9L17 19l-5-3.4L7 19l1.5-6.1L4 9l5.6-1.5L12 2z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Ready to <span className="text-[#DC2626]">Launch Your Business</span> in Indonesia?
          </h2>
          <p className="mt-5 text-slate-300 leading-relaxed">
            Partner with First HR Indonesia for a secure, compliant, and culturally integrated market entry. Let our experts handle the complexities while you focus on growth.
          </p>
          <div className="mt-9 flex justify-center">
            <CTAButton href="#cta" variant="solid">
              Book a Consultation
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 6 — TESTIMONIAL SLIDER (UPDATED MARGIN & HOVER EFFECT)
          ============================================================ */}
      <section className="bg-[#F1F5F6] mt-16 md:mt-24 py-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center relative">
          <svg className="w-11 h-11 text-[#DC2626]/80 mx-auto mb-8" fill="currentColor" viewBox="0 0 256 256">
            <path d="M116,72v88a48.05,48.05,0,0,1-48,48,8,8,0,0,1,0-16,32,32,0,0,0,32-32v-8H40a16,16,0,0,1-16-16V72A16,16,0,0,1,40,56h60A16,16,0,0,1,116,72ZM216,56H156a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,216,56Z" />
          </svg>
          
          <div className="relative group">
            {/* Navigasi Prev */}
            <button 
              onClick={prevSlide} 
              className="hidden md:flex absolute -left-12 lg:-left-16 top-1/2 -translate-y-1/2 w-11 h-11 items-center justify-center rounded-full bg-white text-[#00263C] shadow-[0_4px_14px_rgba(0,0,0,0.05)] hover:text-[#DC2626] hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition-all duration-300 z-10"
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
            </button>

            {/* Slider Konten */}
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
                {testimonials.map((testi, index) => (
                  <div key={index} className="w-full shrink-0 px-4 md:px-12">
                    <p className="text-lg md:text-2xl font-medium text-[#00263C] leading-relaxed">
                      {testi.quote}
                    </p>
                    <div className="mt-7">
                      <h4 className="text-[#00263C] font-extrabold text-sm mb-1">{testi.name}</h4>
                      <p className="text-slate-500 text-sm">{testi.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigasi Next */}
            <button 
              onClick={nextSlide} 
              className="hidden md:flex absolute -right-12 lg:-right-16 top-1/2 -translate-y-1/2 w-11 h-11 items-center justify-center rounded-full bg-white text-[#00263C] shadow-[0_4px_14px_rgba(0,0,0,0.05)] hover:text-[#DC2626] hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition-all duration-300 z-10"
              aria-label="Next slide"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>

          {/* Indikator Dots */}
          <div className="flex items-center justify-center gap-2 mt-9">
            {testimonials.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setActiveSlide(i)} 
                className={`h-2.5 rounded-full transition-all duration-300 ${activeSlide === i ? 'w-8 bg-[#DC2626]' : 'w-2.5 bg-slate-300 hover:bg-slate-400'}`} 
                aria-label={`Go to slide ${i + 1}`} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 7 — FINAL SPLIT CTA
          ============================================================ */}
      <section className="bg-white py-24 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] bg-[#00263C]">
            <div className="md:w-5/12 min-h-[300px] md:min-h-[480px] bg-slate-200 relative">
              <img src={IMG.finalCta} alt="HR Professional" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="md:w-7/12 p-10 md:p-20 flex flex-col justify-center relative">
              <div className="absolute top-0 bottom-0 left-[60%] w-32 bg-white/5 skew-x-12 hidden md:block" />
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight relative z-10">
                Find the Right Path <br className="hidden md:block" /> for Your HR Team
              </h2>
              <p className="text-gray-300 text-sm md:text-lg mb-10 leading-relaxed relative z-10 max-w-lg">
                Whether you want to provide continuous learning, close skill gaps, or build HR capabilities at scale, AIHR offers tailored solutions designed to support your goals.
              </p>
              {/* Note: Button khusus di section ini dipertahankan desain custom-nya */}
              <Link href="#cta" className="bg-[#DC2626] hover:bg-[#B91C1C] transition text-white text-sm font-bold uppercase tracking-wider py-4 px-8 rounded-lg w-max flex items-center gap-2 relative z-10 shadow-lg">
                BOOK A CALL
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}