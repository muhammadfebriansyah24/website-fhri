import Link from 'next/link';
import CTA from '@/components/CTA';

// ============================================================
// DATA & CONSTANTS (Di luar agar performa render optimal)
// ============================================================
const IMG = {
  // Gambar fokus pada tangan yang sedang menandatangani dokumen (tanpa wajah)
  structural: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop',
  // Gambar tim profesional berwajah Asia/Indonesia sedang berkolaborasi positif
  cultural: 'https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1200&auto=format&fit=crop',
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

// ============================================================
// REUSABLE COMPONENTS
// ============================================================
function Eyebrow({ children, tone = 'light' }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] ${
        tone === 'light' ? 'bg-white/10 text-white backdrop-blur-sm' : 'bg-[#DC2626]/10 text-[#DC2626]'
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
  return (
    <main className="min-h-screen font-sans bg-white">
      
      {/* ============================================================
          SECTION 1 — HERO 
          ============================================================ */}
      <section className="relative bg-[#00263C] pt-24 pb-28 md:pt-32 md:pb-40 px-6 md:px-12 overflow-hidden flex items-center justify-center min-h-[60vh]">
        
        {/* Latar Belakang Gambar & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2000&auto=format&fit=crop" 
            alt="Modern Corporate Office Environment" 
            className="w-full h-full object-cover"
          />
          {/* Solid color overlay untuk memastikan teks tetap terbaca */}
          <div className="absolute inset-0 bg-[#00263C]/85"></div>
        </div>

        {/* Background Patterns & Glow (opsional untuk menambah estetika) */}
        <div className="absolute inset-0 opacity-[0.07] z-0" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#DC2626]/20 blur-[100px] pointer-events-none z-0" />
        
        <div className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center">
          <Eyebrow tone="light">Business Support Services</Eyebrow>
          <h1 className="mt-8 text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] text-balance">
            Operational Excellence for Your Business Entry
          </h1>
          <p className="mt-8 text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
            Navigating local regulations and cultural integration to ensure your company thrives from day one. Expert guidance for seamless market entry in Indonesia.
          </p>
        </div>
      </section>

      {/* ============================================================
          SECTION 2 — CORE CAPABILITIES
          ============================================================ */}
      <section className="bg-white py-24 md:py-32 px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <Eyebrow tone="dark">Core Capabilities</Eyebrow>
            <h2 className="mt-5 text-3xl md:text-5xl font-bold text-[#00263C] leading-tight">Foundational Services for Market Success</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {coreCapabilities.map((item) => (
              <article key={item.title} className="group rounded-[1.75rem] bg-slate-50 p-7 md:p-9 ring-1 ring-slate-100 transition-all hover:shadow-[0_30px_60px_-20px_rgba(0,38,60,0.18)] hover:-translate-y-1.5 flex flex-col items-start">
                <div className="w-12 h-12 rounded-xl bg-[#00263C] flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-[#DC2626]">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24">{item.icon}</svg>
                </div>
                <h3 className="font-bold text-[#00263C] text-lg leading-snug group-hover:text-[#DC2626] transition-colors">{item.title}</h3>
                <p className="text-[13.5px] text-slate-500 leading-relaxed mt-3">{item.description}</p>
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
            <div className="relative h-72 md:h-96 rounded-[calc(2rem-0.5rem)] overflow-hidden group">
              <img 
                src={IMG.structural} 
                alt="Hands signing a corporate legal document" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00263C]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
            <div className="relative h-72 md:h-96 rounded-[calc(2rem-0.5rem)] overflow-hidden group">
              <img 
                src={IMG.cultural} 
                alt="Asian professional team collaborating in a modern office" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00263C]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 5 — CALL TO ACTION
          ============================================================ */}
      <CTA />

    </main>
  );
}