import { getSession } from '@/lib/session';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';

export default async function AdminDashboard() {
  const session = await getSession();

  const [pendingCount, newsCount, wallCount, recruitmentCount, sponsorCount] =
    await Promise.all([
      prisma.user.count({ where: { status: 'pending' } }),
      prisma.news.count(),
      prisma.wallOfCongratulations.count(),
      prisma.recruitment.count(),
      prisma.sponsor.count(),
    ]);

  const stats = [
    { 
      label: 'Berita & Artikel', 
      count: newsCount, 
      href: '/admin/news', 
      desc: 'Kelola rilis berita resmi dan buletin FHRI.',
      icon: (
        <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h7.5M12 10.5h7.5M12 13.5h7.5M12 16.5h7.5M5.25 4.5h13.5A2.25 2.25 0 0121 6.75v10.5A2.25 2.25 0 0118.75 19.5H5.25a2.25 2.25 0 01-2.25-2.25V6.75A2.25 2.25 0 015.25 4.5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 7.5h2.25v2.25H6V7.5zm0 4.5h2.25v2.25H6V12zm0 4.5h2.25v2.25H6v-2.25z" />
        </svg>
      )
    },
    { 
      label: 'Wall of Congrats', 
      count: wallCount, 
      href: '/admin/wall', 
      desc: 'Kelola testimoni dan ucapan selamat dari mitra.',
      icon: (
        <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499c.195-.39.73-.39.926 0l2.354 4.77 5.263.765c.43.063.602.589.291.896l-3.81 3.714 1.002 5.244c.08.416-.356.733-.732.537l-4.7-2.47-4.7 2.47c-.376.196-.812-.12-.732-.537l1.002-5.244-3.81-3.714c-.31-.307-.138-.833.291-.896l5.263-.765 2.354-4.77z" />
        </svg>
      )
    },
    { 
      label: 'Lowongan Kerja', 
      count: recruitmentCount, 
      href: '/admin/recruitment', 
      desc: 'Kelola posting rekrutmen aktif dan arsip.',
      icon: (
        <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 .621-.504 1.125-1.125 1.125H4.875A1.125 1.125 0 013.75 18.4V14.15m16.5 0c.621 0 1.125-.504 1.125-1.125V8.25c0-.621-.504-1.125-1.125-1.125H3.75c-.621 0-1.125.504-1.125 1.125v4.775c0 .621.504 1.125 1.125 1.125m16.5 0a9 9 0 00-16.5 0m11.25-3h.008v.008h-.008V10.5zm-3.75 0h.008v.008h-.008V10.5zm3.75 3h.008v.008h-.008v-.008zm-3.75 0h.008v.008h-.008v-.008z" />
        </svg>
      )
    },
    { 
      label: 'Sponsor & Partner', 
      count: sponsorCount, 
      href: '/admin/sponsor', 
      desc: 'Kelola daftar logo perusahaan sponsor aktif.',
      icon: (
        <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      )
    },
  ];

  return (
    <div className="py-4 space-y-8">
      
      {/* Welcome Header */}
      <div>
        <span className="text-eyebrow block mb-3">
          Overview
        </span>
        <h1 className="text-3xl font-extrabold tracking-tight text-brand-navy mt-3 leading-none">
          Halo, {session.user.name}
        </h1>
        <p className="text-xs text-slate-500 mt-2 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
          Akses aktif sebagai <strong className="text-brand-navy font-bold">{session.user.role.replace('_', ' ').toUpperCase()}</strong>
        </p>
      </div>

      {/* Pending Account Alert */}
      {session.user.role === 'super_admin' && pendingCount > 0 && (
        <Link href="/admin/users" className="block group">
          <div className="p-1.5 bg-amber-500/5 hover:bg-amber-500/10 border border-amber-500/20 rounded-2xl transition-all duration-300">
            <div className="bg-white border border-slate-100 p-4 rounded-[calc(1rem-0.125rem)] flex items-center justify-between gap-4 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-600 animate-pulse">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </span>
                <div>
                  <h4 className="text-sm font-bold text-brand-navy">Persetujuan Akun Diperlukan</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Terdapat <strong className="text-amber-600 font-bold">{pendingCount} akun baru</strong> yang menunggu verifikasi Anda.</p>
                </div>
              </div>
              <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest flex items-center gap-1 group-hover:translate-x-1 transition-transform duration-300">
                Tinjau Akun &rarr;
              </span>
            </div>
          </div>
        </Link>
      )}

      {/* Bento Grid Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s) => (
          <Link key={s.label} href={s.href} className="group block">
            {/* Soft Double-Bezel Card */}
            <div className="p-1.5 bg-slate-100/50 hover:bg-slate-100/80 border border-slate-200/50 hover:border-brand-red/30 rounded-[2rem] shadow-sm transition-all duration-500 hover:-translate-y-1">
              <div className="bg-white border border-slate-100 p-6 rounded-[calc(2rem-0.375rem)] min-h-[170px] flex flex-col justify-between">
                
                <div className="flex justify-between items-start">
                  <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 text-slate-400 group-hover:text-brand-red group-hover:bg-brand-red/5 transition-all duration-300 flex items-center justify-center">
                    {s.icon}
                  </div>
                  <span className="text-3xl font-extrabold tracking-tight text-brand-navy">
                    {s.count}
                  </span>
                </div>

                <div className="mt-6">
                  <h3 className="text-xs font-bold text-brand-navy uppercase tracking-wider group-hover:text-brand-red transition-colors duration-300">
                    {s.label}
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                    {s.desc}
                  </p>
                </div>

              </div>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}
