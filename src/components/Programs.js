'use client';

import React from 'react';

const programsList = [
  { tag: 'People Analytics', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop', title: 'HR Analytics Leader', description: 'Empower your HR decisions with advanced data analytics.', level: 'Intermediate', duration: '8 weeks' },
  { tag: 'HR Strategy', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop', title: 'Strategic HRBP', description: 'Evolve into a strategic HRBP for business transformation.', level: 'Advanced', duration: '10 weeks' },
  { tag: 'Recruitment', image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop', title: 'Talent Acquisition', description: 'Modern recruitment strategies & effective employer branding.', level: 'Beginner', duration: '6 weeks' },
  { tag: 'HR Technology', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop', title: 'Digital HR Transformation', description: 'Transform HR processes with modern technology & HRIS.', level: 'Intermediate', duration: '8 weeks' },
  { tag: 'Leadership', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop', title: 'People Management', description: 'HR foundations for effective team leaders.', level: 'Beginner', duration: '5 weeks' },
  { tag: 'Compensation', image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop', title: 'Data-Driven Compensation', description: 'Design competitive, data-driven compensation systems.', level: 'Advanced', duration: '7 weeks' },
  { tag: 'Engagement', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop', title: 'Employee Experience', description: 'Create engaging employee experiences.', level: 'Intermediate', duration: '6 weeks' },
  { tag: 'Compliance', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop', title: 'HR Audit & Compliance', description: 'Align HR practices with industry regulations.', level: 'Advanced', duration: '5 weeks' },
];

function LevelBadge({ level }) {
  const map = { Beginner: '#22c55e', Intermediate: '#f59e0b', Advanced: '#ef4444' };
  return (
    <span
      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider"
      style={{ background: map[level] + '15', color: map[level] }}
    >
      {level}
    </span>
  );
}

const NAVY_TAB_PATH =
  'M80 59.313 L195.047 59.313 C205.776 59.313 215.308 52.4674 218.736 42.3009 ' +
  'L227.264 17.012 C230.692 6.8456 240.224 0 250.953 0 H1189.05 ' +
  'C1199.78 0 1209.31 6.8456 1212.74 17.012 L1221.26 42.3009 ' +
  'C1224.69 52.4674 1234.22 59.313 1244.95 59.313 L1362 59.313 Z';

const WHITE_TAB_PATH =
  'M80 47.664 L196.378 47.664 C206.448 47.664 215.535 41.623 219.431 32.337 ' +
  'L226.569 15.327 C230.465 6.042 239.552 0 249.622 0 H1190.38 ' +
  'C1200.45 0 1209.54 6.041 1213.43 15.327 L1220.57 32.337 ' +
  'C1224.46 41.623 1233.55 47.664 1243.62 47.664 L1362 47.664 Z';

export default function Programs() {
  return (
    <section className="bg-[#ffffff] py-16 px-4 md:px-8 font-sans flex justify-center">
      <div className="w-full max-w-[1440px]">

        {/* ===== FOLDER NAVY (luar) ===== */}
        <div className="relative w-full drop-shadow-2xl">
          <svg
            viewBox="0 0 1440 60"
            preserveAspectRatio="none"
            className="w-full h-11 md:h-[60px] block relative z-10"
            aria-hidden="true"
          >
            <path d={NAVY_TAB_PATH} fill="#00263C" />
          </svg>

          <div
            className="bg-[#00263C] mx-[5.5%] rounded-[2rem] md:rounded-[2.5rem] px-6 md:px-12 pt-2 md:pt-4 pb-36 md:pb-44 text-center relative flex flex-col items-center"
            style={{ marginTop: '-2px' }}
          >

            <span className="relative z-20 inline-flex items-center px-8 md:px-10 py-2.5 md:py-3 text-[15px] md:text-[17px] font-semibold uppercase tracking-[0.2em] text-white rounded-full mb-6 md:mb-8 border-3 border-[#DC0017] -mt-5 md:-mt-8 shadow-sm">
              Our Programs
            </span>

            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight tracking-tight max-w-4xl text-balance">
              Explore HR Development Programs
            </h2>
            <p className="mt-5 text-slate-300/90 text-[15px] md:text-lg max-w-2xl mx-auto leading-relaxed text-balance">
              A wide range of courses designed to help HR professionals build capacity and accelerate their careers.
            </p>
          </div>
        </div>

        {/* ===== FOLDER PUTIH (dalam) ===== */}
        <div className="relative w-full mx-auto -mt-28 md:-mt-36 z-10 drop-shadow-[0_20px_50px_rgba(21,60,86,0.15)]">
          <svg
            viewBox="0 0 1440 48"
            preserveAspectRatio="none"
            className="w-full h-9 md:h-12 block relative z-10"
            aria-hidden="true"
          >
            <path d={WHITE_TAB_PATH} fill="white" />
          </svg>

          <div
            className="bg-white mx-[5.5%] rounded-[2rem] md:rounded-[2.5rem] p-5 md:p-8 relative z-0"
            style={{ marginTop: '-2px' }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 relative z-10">
              {programsList.map((item) => (
                <div
                  key={item.title}
                  className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100
                             hover:shadow-[0_15px_35px_-10px_rgba(21,60,86,0.15)] hover:-translate-y-1.5 hover:border-slate-200
                             transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-50">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
                    />
                    <span className="absolute top-3 left-3 bg-[#153C56] text-white text-[9px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm">
                      {item.tag}
                    </span>
                  </div>

                  <div className="flex flex-col flex-grow p-5 gap-2">
                    <h3 className="font-bold text-[#153C56] text-[15px] leading-snug group-hover:text-[#DC0017] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[12px] text-slate-500 leading-relaxed flex-grow mt-1">
                      {item.description}
                    </p>
                    <div className="pt-4 mt-3 border-t border-slate-50 flex items-center justify-between">
                      <LevelBadge level={item.level} />
                      <span className="text-[11px] text-slate-400 font-medium flex items-center gap-1.5">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 7v5l3 3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {item.duration}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-center pb-4 relative z-10">
              <button className="group flex items-center gap-3 text-white text-[13px] font-bold tracking-wide px-8 py-4 rounded-full bg-[#00263C] hover:bg-[#DC0017] shadow-md hover:shadow-lg transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                BROWSE ALL PROGRAMS
                <span className="w-7 h-7 rounded-full flex items-center justify-center bg-white/10 group-hover:bg-white/20 group-hover:translate-x-1 transition-transform">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}