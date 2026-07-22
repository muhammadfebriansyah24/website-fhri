'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// MAIN NAVIGATION DATA
const navLinks = [
  { label: 'Business', dropdown: true, href: '/business' },
  { label: 'Tips and Trick HR', href: '/tips-and-trick' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Recruitment', href: '/recruitment' },
  { label: 'About Us', href: '/about' },
];

// LEFT MENU DATA (BUSINESS TABS) WITH ICON, SUBTITLE & SUBMENU
const businessTabs = [
  {
    id: 'Business Support Services',
    path: '/business/business-support',
    subtitle: 'Comprehensive support to strengthen your business operations and strategy.',
    icon: (
      <>
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      </>
    ),
    subMenus: [
      {
        title: 'Company Establishment',
        desc: 'Expert guidance through local regulatory compliance, licensing, and legal requirements for new market entrants.',
      },
      {
        title: 'Cultural Fit Solutions',
        desc: 'Workshops and coaching sessions designed to bridge cultural gaps and create harmonious team integration.',
      },
      {
        title: 'Licensing Procurement',
        desc: 'Expedited handling of all necessary operational and sector-specific permits for your business.',
      },
      {
        title: 'Entity Structuring',
        desc: 'Strategic advice on PMA (Foreign Direct Investment) setups and compliance frameworks.',
      },
      {
        title: 'Cross-Cultural Harmony',
        desc: 'Interactive workshops designed to foster mutual understanding and day-one harmony among teams.',
      },
      {
        title: 'Leadership Coaching',
        desc: 'Equipping expatriate and local leaders with strategies for cross-cultural team management.',
      },
    ]
  },
  {
    id: 'Human Capital Solutions',
    path: '/business/humancapital-solutions',
    subtitle: 'Strategic solutions to optimize and develop your human capital assets.',
    icon: (
      <>
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </>
    ),
    subMenus: [
      {
        title: 'Executive Search',
        desc: 'A proactive, targeted approach to recruiting passive C-suite talents and senior leaders.',
      },
      {
        title: 'Recruitment Services',
        desc: 'End-to-end recruitment process management for mid-level positions and specialists across industries.',
      },
      {
        title: 'Talent Assessment',
        desc: 'Rigorous psychometric evaluations, competency mapping, and culture compatibility tests.',
      },
      {
        title: 'Elite Talent Pool',
        desc: 'Exclusive access to a curated network of high-performing passive candidates in Indonesia.',
      },
      {
        title: 'Market Mapping',
        desc: 'Industry-wide analysis to identify prospective leaders who fit your exact structural objectives.',
      },
      {
        title: 'Candidate Calibration',
        desc: 'Structured behavioral testing and reference checks for full management-style alignment.',
      },
    ]
  },
  {
    id: 'Payroll & Outsourcing',
    path: '/business/payroll',
    subtitle: 'End-to-end payroll management and business process outsourcing solutions.',
    icon: (
      <>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </>
    ),
    subMenus: [
      {
        title: 'Payroll Processing',
        desc: 'Accurate, timely payroll processing aligned with Indonesian labor and PPh 21 tax regulations.',
      },
      {
        title: 'Staff Outsourcing',
        desc: 'Flexible workforce solutions that scale with your business and reduce administrative burden.',
      },
      {
        title: 'Statutory Compliance',
        desc: 'Complete social security (BPJS Kesehatan & Ketenagakerjaan) administration and compliance.',
      },
      {
        title: 'Transparent Reporting',
        desc: 'Structured reporting to provide clear financial and operational oversight for management.',
      },
      {
        title: 'Tax Administration',
        desc: 'Strict compliance with local tax obligations, withholding, and annual PPh 21 reporting.',
      },
      {
        title: 'HR Administration',
        desc: 'Streamlining employee documents, contracts, and manual calculations to reduce overhead.',
      },
    ]
  },
  {
    id: 'Assessment Tools',
    path: '/business/assessment-tools',
    subtitle: 'Advanced assessment tools to evaluate employee competencies and potential.',
    icon: (
      <>
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </>
    ),
    subMenus: [
      {
        title: 'Skill & Performance',
        desc: 'Evaluate technical readiness and work target achievements with measurable metrics.',
      },
      {
        title: '360-Degree Feedback',
        desc: 'Gain a comprehensive view from the entire professional interaction structure via anonymous feedback.',
      },
      {
        title: 'Potential & Personality',
        desc: 'Map the psychological DNA of your employees for future succession readiness.',
      },
      {
        title: 'Promotion & Succession',
        desc: 'Objectively identify future leaders and prepare top talent for key organizational positions.',
      },
      {
        title: 'Restructuring Support',
        desc: 'Remap talent and capabilities during corporate mergers, acquisitions, or efficiency drives.',
      },
      {
        title: 'Training Needs (TNA)',
        desc: 'Precisely discover skill gaps to design effective training and development programs.',
      },
    ]
  },
  {
    id: 'HR Boot Camp',
    path: '/business/hr-bootcamp',
    subtitle: 'Intensive training programs to build HR excellence and strategic capabilities.',
    icon: (
      <>
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </>
    ),
    subMenus: [
      {
        title: 'HRBP Boot Camp',
        desc: 'Intensive cohort-based program to transition traditional HR practitioners into strategic business partners.',
      },
      {
        title: 'Live Case Studies',
        desc: 'Practical case study analysis and real-world business resolution sessions with peer collaboration.',
      },
      {
        title: 'CHRO Mentorship',
        desc: 'Direct coaching and real-world guidance from experienced corporate human capital leaders.',
      },
      {
        title: 'People Analytics',
        desc: 'Learn to harness organizational data to predict turnover and quantify the business ROI of HR.',
      },
      {
        title: 'AI-Powered Decisions',
        desc: 'Integrate AI tools into your HR workflows to automate administration and boost execution velocity.',
      },
      {
        title: 'Stakeholder Management',
        desc: 'Master advanced frameworks for consulting, managing change, and influencing without authority.',
      },
    ]
  },
  {
    id: 'Industrial Relations & Legal Advisory',
    path: '/business/industrial-relations',
    subtitle: 'Expert guidance on labor relations, employment law, and dispute resolution.',
    icon: (
      <>
        <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11m16-11v11" />
      </>
    ),
    subMenus: [
      {
        title: 'Labor Law Compliance',
        desc: 'Development and review of Company Regulations (PP) and Collective Labor Agreements (PKB).',
      },
      {
        title: 'Risk Management',
        desc: 'Mitigate employment risks related to restructuring, contracts, and legally compliant termination.',
      },
      {
        title: 'Dispute Resolution',
        desc: 'Effective bipartite negotiations and professional mediation services for workplace conflicts.',
      },
      {
        title: 'Court Advocacy Guidance',
        desc: 'Expert guidance on preparing for mediation, conciliation, and Industrial Relations Court (PHI) cases.',
      },
      {
        title: 'Union Partnerships',
        desc: 'Build collaborative, constructive relationships with labor unions to foster workplace harmony.',
      },
      {
        title: 'IR Compliance Audits',
        desc: 'Proactive audits to ensure complete alignment with the latest Indonesian manpower regulations.',
      },
    ]
  },
  {
    id: 'Health, Safety, and Environment',
    path: '/business/hse',
    subtitle: 'Comprehensive HSE programs to ensure workplace safety and employee wellbeing.',
    icon: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
    subMenus: [
      {
        title: 'Risk Assessment',
        desc: 'Proactively identify workplace hazards, conduct incident investigations, and determine corrective actions.',
      },
      {
        title: 'Policy & SOP Creation',
        desc: 'Creation of safety manuals and guidance for implementing standard ISO 45001 management systems.',
      },
      {
        title: 'Environmental Compliance',
        desc: 'Processing environmental permits (UKL-UPL, AMDAL) and preparation for ministry PROPER audits.',
      },
      {
        title: '5S Culture',
        desc: 'Systematic field implementation to keep work areas Sorted, Organized, and Sustained.',
      },
      {
        title: 'Proactive Prevention',
        desc: 'Eliminate potential hazards early to prevent critical fire, electrical, or operational incidents.',
      },
      {
        title: 'Roadmap to Certification',
        desc: 'Guided steps from initial gap analysis to official safety and environmental compliance.',
      },
    ]
  },
  {
    id: 'Corporate Culture & Events',
    path: '/business/corporate-culture',
    subtitle: 'Build a thriving corporate culture through strategic programs and events.',
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87 M16 3.13a4 4 0 010 7.75" />
      </>
    ),
    subMenus: [
      {
        title: 'Professional Work Ethic',
        desc: 'Workshops instilling accountability, integrity, collaboration, and service excellence standards.',
      },
      {
        title: 'Corporate Event Organizing',
        desc: 'End-to-end planning of town halls and annual recognition events to strengthen cohesion.',
      },
      {
        title: 'Outbound Training',
        desc: 'Outdoor activities building trust, teamwork, and leadership through shared challenges.',
      },
      {
        title: 'Culture Assessment',
        desc: 'Diagnosing behavioral patterns and cultural gaps to identify development opportunities.',
      },
      {
        title: 'Curriculum Customization',
        desc: 'Tailoring custom culture transformation programs and event formats for alignment.',
      },
      {
        title: 'Dynamic Facilitation',
        desc: 'High-energy execution of interactive workshops and events to drive organizational change.',
      },
    ]
  },
  {
    id: 'Professional Certification Institute',
    path: '/business/lsp',
    subtitle: 'Professional certification programs to validate and enhance HR competencies.',
    icon: (
      <>
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </>
    ),
    subMenus: [
      {
        title: 'HR Certification',
        desc: 'Recognized professional certifications for HR specialists and practitioners.',
      },
      {
        title: 'Competency Standards',
        desc: 'Industry-standard competency frameworks and assessment criteria.',
      },
      {
        title: 'Training Accreditation',
        desc: 'Official accreditation of training programs and training providers.',
      },
      {
        title: 'Credential Verification',
        desc: 'Verification and validation of professional credentials and certifications.',
      },
      {
        title: 'Career Pathways',
        desc: 'Structured career progression paths with clear certification milestones.',
      },
      {
        title: 'Continuing Education',
        desc: 'Ongoing professional development programs for credential maintenance.',
      },
    ]
  }
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Business Support Services');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [expandedBizTab, setExpandedBizTab] = useState(null);
  const dropdownRef = useRef(null);

  // Close the Business dropdown when clicking outside the navbar/mega-menu area
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

  // Find the active tab data to dynamically get its path, icon, subtitle & subMenus
  const activeTabData = businessTabs.find((tab) => tab.id === activeTab) || businessTabs[0];

  return (
    <nav className="relative bg-white text-[#00263C] shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 md:px-12 relative">
        
        {/* COMPANY LOGO */}
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
              <div key={link.label} className="py-2" ref={dropdownRef}>
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
                  <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 md:p-8 flex gap-8 text-gray-800 w-full">
                    
                    {/* LEFT SECTION: TAB LIST (auto-mapped) */}
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

                    {/* RIGHT SECTION: DESCRIPTION & SUBMENU (now dynamic) */}
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
                              {activeTabData.subtitle}
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 xl:grid-cols-3 gap-3.5">
                          {activeTabData.subMenus.map((item, idx) => (
                            <div
                              key={idx}
                              className="group relative rounded-[1.25rem] bg-gradient-to-b from-slate-50 to-white p-1 ring-1 ring-black/[0.04] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-2 hover:ring-[#DC0017]/20 hover:shadow-[0_28px_48px_-18px_rgba(21,60,86,0.24)]"
                            >
                              <div className="relative h-full rounded-[calc(1.25rem-0.25rem)] bg-white p-4 overflow-hidden transition-colors duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-red-50/50">
                                <span className="absolute -right-1 -top-2 text-[2.75rem] font-bold text-slate-50 leading-none select-none transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:text-[#DC0017]/[0.07] group-hover:scale-110">
                                  {String(idx + 1).padStart(2, '0')}
                                </span>
                                <div className="relative flex items-start justify-between gap-2">
                                  <h4 className="text-[13px] font-bold text-[#0B2A4A] leading-snug pr-1 transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:text-[#DC0017]">
                                    {item.title}
                                  </h4>
                                </div>
                                <p className="relative text-[11.5px] text-gray-500 leading-relaxed mt-1.5 line-clamp-2">
                                  {item.desc}
                                </p>
                                <span className="absolute left-4 right-4 bottom-3 h-[2px] rounded-full bg-[#DC0017] origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-x-100" />
                              </div>
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
          <div className="border-b border-gray-100 pb-4 mb-3">
            <span className="block text-[10px] font-bold text-gray-400 mb-2.5 uppercase tracking-[0.15em]">Business Solutions</span>
            <div className="flex flex-col gap-2">
              {businessTabs.map((tab) => {
                const isOpen = expandedBizTab === tab.id;
                return (
                  <div
                    key={tab.id}
                    className="rounded-2xl bg-gradient-to-b from-slate-50 to-white p-1 ring-1 ring-black/[0.04] transition-colors duration-500"
                  >
                    <button
                      onClick={() => setExpandedBizTab(isOpen ? null : tab.id)}
                      className="w-full flex items-center justify-between rounded-[1rem] bg-white px-3.5 py-3 text-left"
                    >
                      <span className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-lg bg-[#0B2A4A]/5 flex items-center justify-center shrink-0">
                          <svg className="w-4 h-4 text-[#0B2A4A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            {tab.icon}
                          </svg>
                        </span>
                        <span className="text-[13px] font-bold text-[#0B2A4A]">{tab.id}</span>
                      </span>
                      <svg
                        className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] shrink-0 ${isOpen ? 'rotate-180' : ''}`}
                        viewBox="0 0 12 8"
                        fill="none"
                      >
                        <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <div
                      className={`grid transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="flex flex-col gap-0.5 px-2 pt-2 pb-1">
                          {tab.subMenus.map((item, i) => (
                            <Link
                              key={i}
                              href={tab.path}
                              onClick={() => setMobileOpen(false)}
                              className="flex items-center gap-2 text-xs text-gray-500 hover:text-[#DC0017] py-1.5 px-2"
                            >
                              <span className="w-1 h-1 rounded-full bg-[#DC0017]/40 shrink-0" />
                              {item.title}
                            </Link>
                          ))}
                          <Link
                            href={tab.path}
                            onClick={() => setMobileOpen(false)}
                            className="text-xs font-bold text-[#DC0017] py-2 px-2"
                          >
                            View All →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
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