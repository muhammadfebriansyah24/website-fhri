'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

// Ultra-light 1.5px stroke icons (Awwwards/Linear-tier style)
const ICONS = {
  dashboard: (
    <svg className="w-4 h-4 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
      <rect x="3" y="3" width="7" height="9" rx="1.5" />
      <rect x="14" y="3" width="7" height="5" rx="1.5" />
      <rect x="14" y="12" width="7" height="9" rx="1.5" />
      <rect x="3" y="16" width="7" height="5" rx="1.5" />
    </svg>
  ),
  news: (
    <svg className="w-4 h-4 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h7.5M12 10.5h7.5M12 13.5h7.5M12 16.5h7.5M5.25 4.5h13.5A2.25 2.25 0 0121 6.75v10.5A2.25 2.25 0 0118.75 19.5H5.25a2.25 2.25 0 01-2.25-2.25V6.75A2.25 2.25 0 015.25 4.5z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 7.5h2.25v2.25H6V7.5zm0 4.5h2.25v2.25H6V12zm0 4.5h2.25v2.25H6v-2.25z" />
    </svg>
  ),
  wall: (
    <svg className="w-4 h-4 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499c.195-.39.73-.39.926 0l2.354 4.77 5.263.765c.43.063.602.589.291.896l-3.81 3.714 1.002 5.244c.08.416-.356.733-.732.537l-4.7-2.47-4.7 2.47c-.376.196-.812-.12-.732-.537l1.002-5.244-3.81-3.714c-.31-.307-.138-.833.291-.896l5.263-.765 2.354-4.77z" />
    </svg>
  ),
  recruitment: (
    <svg className="w-4 h-4 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 .621-.504 1.125-1.125 1.125H4.875A1.125 1.125 0 013.75 18.4V14.15m16.5 0c.621 0 1.125-.504 1.125-1.125V8.25c0-.621-.504-1.125-1.125-1.125H3.75c-.621 0-1.125.504-1.125 1.125v4.775c0 .621.504 1.125 1.125 1.125m16.5 0a9 9 0 00-16.5 0m11.25-3h.008v.008h-.008V10.5zm-3.75 0h.008v.008h-.008V10.5zm3.75 3h.008v.008h-.008v-.008zm-3.75 0h.008v.008h-.008v-.008z" />
    </svg>
  ),
  sponsor: (
    <svg className="w-4 h-4 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    </svg>
  ),
  users: (
    <svg className="w-4 h-4 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  )
};

const NAV_ITEMS = [
  { href: '/admin', label: 'Dashboard', icon: ICONS.dashboard },
  { href: '/admin/news', label: 'Berita', icon: ICONS.news },
  { href: '/admin/wall', label: 'Wall of Congrats', icon: ICONS.wall },
  { href: '/admin/recruitment', label: 'Lowongan', icon: ICONS.recruitment },
  { href: '/admin/sponsor', label: 'Sponsor', icon: ICONS.sponsor },
];

const SUPER_ADMIN_ITEMS = [
  { href: '/admin/users', label: 'Kelola Akun', icon: ICONS.users },
];

export default function AdminSidebar({ user }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const items = user.role === 'super_admin'
    ? [...NAV_ITEMS, ...SUPER_ADMIN_ITEMS]
    : NAV_ITEMS;

  async function handleLogout() {
    await fetch('/api/admin/auth/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  }

  // Close drawer on path change asynchronously to avoid linter error
  useEffect(() => {
    const handler = setTimeout(() => {
      setIsOpen(false);
    }, 0);
    return () => clearTimeout(handler);
  }, [pathname]);

  const initials = user.name
    ? user.name.split(' ').map((n) => n[0]).slice(0, 2).join('').toUpperCase()
    : 'AD';

  return (
    <>
      {/* MOBILE TOP BAR (Hidden on Desktop) */}
      <header className="md:hidden w-full h-16 bg-white border-b border-slate-200/80 flex items-center justify-between px-6 sticky top-0 z-30 shadow-sm">
        <Link href="/admin" className="font-extrabold text-sm text-brand-navy uppercase tracking-wider select-none">
          FHRI Admin
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="p-2 text-brand-navy hover:text-brand-red focus:outline-none cursor-pointer"
        >
          {isOpen ? (
            <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </header>

      {/* MOBILE DRAWER OVERLAY */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)}
          className="md:hidden fixed inset-0 bg-slate-900/30 backdrop-blur-sm z-40 transition-opacity duration-300"
        />
      )}

      {/* MOBILE SLIDE-OUT DRAWER */}
      <aside 
        className={`md:hidden fixed top-0 left-0 bottom-0 w-64 bg-white z-50 flex flex-col p-5 shadow-2xl border-r border-slate-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
          <span className="font-extrabold text-sm text-brand-navy uppercase tracking-wider">Menu FHRI</span>
          <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-brand-navy p-1">
            <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Profile Card inside drawer */}
        <div className="flex items-center gap-3 mb-6 p-3 bg-brand-offwhite rounded-2xl border border-slate-200/50">
          <div className="w-8 h-8 rounded-lg bg-brand-navy flex items-center justify-center text-[10px] font-bold text-white shrink-0">
            {initials}
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-bold text-xs text-brand-navy truncate leading-tight">{user.name}</p>
            <span className="text-[8px] uppercase tracking-wider font-semibold text-brand-red block mt-0.5">
              {user.role.replace('_', ' ')}
            </span>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto pr-1">
          <div className="flex flex-col gap-1 w-full">
            {items.map((item) => {
              const active = item.href === '/admin'
                ? pathname === '/admin'
                : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 border-l-2 ${
                    active
                      ? 'bg-brand-offwhite text-brand-navy border-brand-red font-semibold'
                      : 'border-transparent text-slate-500 hover:bg-slate-50 hover:text-brand-navy'
                  }`}
                >
                  <span className={`transition-all duration-300 ${active ? 'text-brand-red scale-110' : 'text-slate-400'}`}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="pt-4 border-t border-slate-100">
          <button
            onClick={handleLogout}
            className="w-full text-center rounded-full border border-slate-200 bg-white hover:bg-brand-red hover:text-white text-[10px] font-bold uppercase tracking-widest text-slate-500 py-3.5 transition-all duration-300"
          >
            Logout Admin
          </button>
        </div>
      </aside>

      {/* DESKTOP SIDEBAR (Static) */}
      <aside className="hidden md:flex w-64 bg-white border-r border-slate-200/80 flex-col shrink-0 relative z-20">
        
        {/* Profile Header */}
        <div className="p-6 border-b border-slate-100 flex items-center gap-3">
          <div className="p-0.5 bg-slate-100 border border-slate-200/60 rounded-xl">
            <div className="w-9 h-9 rounded-[calc(0.75rem-0.125rem)] bg-brand-navy flex items-center justify-center text-xs font-bold text-white shadow-sm">
              {initials}
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-bold text-sm text-brand-navy truncate leading-tight">{user.name}</p>
            <span className="inline-block rounded-full bg-brand-red/10 text-brand-red border border-brand-red/20 text-[9px] uppercase tracking-wider font-semibold px-2.5 py-0.5 mt-1.5">
              {user.role.replace('_', ' ')}
            </span>
          </div>
        </div>

        {/* Navigation list */}
        <nav className="flex-1 py-6 px-3 overflow-y-auto">
          <div className="flex flex-col gap-1 w-full">
            {items.map((item) => {
              const active = item.href === '/admin'
                ? pathname === '/admin'
                : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 border-l-2 ${
                    active
                      ? 'bg-brand-offwhite text-brand-navy border-brand-red font-semibold'
                      : 'border-transparent text-slate-500 hover:bg-slate-50 hover:text-brand-navy'
                  }`}
                >
                  <span className={`transition-all duration-300 ${active ? 'text-brand-red scale-110' : 'text-slate-400'}`}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Footer Section */}
        <div className="p-4 border-t border-slate-100">
          <button
            onClick={handleLogout}
            className="w-full text-center rounded-full border border-slate-200 bg-white hover:bg-brand-red hover:text-white hover:border-brand-red text-[10px] font-bold uppercase tracking-widest text-slate-500 py-3 transition-all duration-300 active:scale-[0.98]"
          >
            Logout Admin
          </button>
        </div>
      </aside>
    </>
  );
}
