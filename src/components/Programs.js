import React from 'react';

const programsList = [
  {
    tag: 'People Analytics',
    tagColor: 'bg-cyan-500',
    gradient: 'from-cyan-600 to-blue-800',
    title: 'HR Analytics Leader',
    description: 'Kuasai analitik HR untuk pengambilan keputusan berbasis data yang berdampak.',
    level: 'Intermediate',
    duration: '8 minggu',
  },
  {
    tag: 'HR Strategy',
    tagColor: 'bg-indigo-500',
    gradient: 'from-indigo-600 to-blue-900',
    title: 'Strategic Business Partner',
    description: 'Berkembang menjadi HRBP strategis yang mampu menggerakkan transformasi bisnis.',
    level: 'Advanced',
    duration: '10 minggu',
  },
  {
    tag: 'Recruitment',
    tagColor: 'bg-fuchsia-500',
    gradient: 'from-fuchsia-600 to-purple-900',
    title: 'Talent Acquisition Specialist',
    description: 'Pelajari strategi rekrutmen modern dan employer branding yang efektif.',
    level: 'Beginner',
    duration: '6 minggu',
  },
  {
    tag: 'HR Technology',
    tagColor: 'bg-orange-500',
    gradient: 'from-orange-500 to-amber-800',
    title: 'Digital HR Transformation',
    description: 'Transformasi proses HR dengan teknologi digital dan HRIS modern.',
    level: 'Intermediate',
    duration: '8 minggu',
  },
  {
    tag: 'Leadership',
    tagColor: 'bg-emerald-500',
    gradient: 'from-emerald-600 to-teal-900',
    title: 'People Management Essentials',
    description: 'Fondasi manajemen SDM untuk pemimpin tim yang efektif dan adaptif.',
    level: 'Beginner',
    duration: '5 minggu',
  },
  {
    tag: 'Compensation',
    tagColor: 'bg-amber-500',
    gradient: 'from-amber-600 to-orange-900',
    title: 'Data-Driven Compensation & Benefits',
    description: 'Rancang sistem kompensasi berbasis data yang kompetitif dan adil.',
    level: 'Advanced',
    duration: '7 minggu',
  },
  {
    tag: 'Engagement',
    tagColor: 'bg-pink-500',
    gradient: 'from-pink-600 to-rose-900',
    title: 'Employee Experience Design',
    description: 'Ciptakan pengalaman karyawan yang membangun engagement dan retensi.',
    level: 'Intermediate',
    duration: '6 minggu',
  },
  {
    tag: 'Compliance',
    tagColor: 'bg-slate-500',
    gradient: 'from-slate-600 to-slate-900',
    title: 'HR Audit & Compliance',
    description: 'Pastikan praktik HR selaras dengan regulasi dan standar industri.',
    level: 'Advanced',
    duration: '5 minggu',
  },
];

function LevelIcon() {
  return (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
      <path d="M4 20V10M10 20V4M16 20V14M22 20V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Programs() {
  return (
    <section className="px-6 md:px-12 pb-20">
      <div className="max-w-6xl mx-auto relative">
        {/* decorative tabs */}
        <div className="hidden md:block absolute -top-3 left-10 w-24 h-6 bg-[#0B2A4A] rounded-t-xl" />
        <div className="hidden md:block absolute -top-3 right-10 w-24 h-6 bg-[#0B2A4A] rounded-t-xl" />

        {/* Navy container */}
        <div className="relative bg-[#0B2A4A] rounded-3xl pt-12 pb-40 px-6 md:px-12 text-center">
          <span className="inline-block bg-red-600 text-white text-xs font-semibold tracking-wide px-4 py-1.5 rounded-full">
            OUR PROGRAMS
          </span>
          <h2 className="mt-5 text-3xl md:text-4xl font-extrabold text-white">
            Explore HR Development Programs
          </h2>
          <p className="mt-3 text-slate-300 max-w-xl mx-auto">
            A wide range of courses designed to help HR professionals build capacity
            and accelerate their careers.
          </p>
        </div>

        {/* White card overlapping the navy container */}
        <div className="relative -mt-32 bg-white rounded-3xl shadow-xl px-5 md:px-8 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programsList.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition"
              >
                <div className={`relative h-28 bg-gradient-to-br ${item.gradient}`}>
                  <span className={`absolute top-3 left-3 ${item.tagColor} text-white text-[10px] font-semibold px-2.5 py-1 rounded-full`}>
                    {item.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-blue-950 leading-snug">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">{item.description}</p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <LevelIcon /> {item.level}
                    </span>
                    <span className="flex items-center gap-1">
                      <ClockIcon /> {item.duration}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
