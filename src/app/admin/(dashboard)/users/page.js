import Link from 'next/link';
import { requireSuperAdmin } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import UserActions from './UserActions';

const TABS = {
  aktif: { label: 'Aktif & Menunggu', statuses: ['pending', 'active'] },
  riwayat: { label: 'Riwayat', statuses: ['inactive', 'rejected'] },
};

const STATUS_BADGE = {
  pending: 'bg-amber-50 text-amber-600 border border-amber-100',
  active: 'bg-emerald-50 text-emerald-600 border border-emerald-100',
  rejected: 'bg-red-50 text-red-600 border border-red-100',
  inactive: 'bg-slate-100 text-slate-500 border border-slate-200',
};

const STATUS_LABEL = {
  pending: 'Menunggu',
  active: 'Aktif',
  inactive: 'Nonaktif',
  rejected: 'Ditolak',
};

const ROLE_BADGE = {
  super_admin: 'bg-purple-50 text-purple-600 border border-purple-100',
  editor: 'bg-blue-50 text-blue-600 border border-blue-100',
};

export default async function UsersPage({ searchParams }) {
  const admin = await requireSuperAdmin();
  const params = await searchParams;
  const tabKey = params?.tab === 'riwayat' ? 'riwayat' : 'aktif';
  const tab = TABS[tabKey];

  const users = await prisma.user.findMany({
    where: { status: { in: tab.statuses } },
    select: { id: true, name: true, email: true, role: true, status: true, createdAt: true },
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div className="py-4 space-y-8">

      {/* Header */}
      <div>
        <span className="text-eyebrow block mb-2">
          Super Admin Only
        </span>
        <h1 className="text-2xl font-extrabold tracking-tight text-brand-navy mt-2 leading-none">Kelola Akun Admin</h1>
        <p className="text-xs text-slate-500 mt-1">Setujui pendaftaran editor baru atau kelola hak akses FHRI.</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 p-1 bg-slate-100/80 border border-slate-200/50 rounded-full w-fit">
        {Object.entries(TABS).map(([key, t]) => (
          <Link
            key={key}
            href={`/admin/users?tab=${key}`}
            className={`px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
              tabKey === key
                ? 'bg-white text-brand-navy shadow-sm border border-slate-100'
                : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            {t.label}
          </Link>
        ))}
      </div>

      {/* Users Table */}
      <section className="space-y-3">
        <h2 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest pl-1">
          {tab.label} ({users.length})
        </h2>
        <div className="p-1.5 bg-slate-100/50 border border-slate-200/50 rounded-[2rem] shadow-sm overflow-hidden">
          <div className="bg-white border border-slate-100 rounded-[calc(2rem-0.375rem)] overflow-hidden overflow-x-auto w-full hide-scrollbar">
            <table className="w-full text-left border-collapse text-xs min-w-[700px]">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50">
                  <th className="px-6 py-4 text-[9px] font-bold uppercase tracking-wider text-slate-500">Nama</th>
                  <th className="px-6 py-4 text-[9px] font-bold uppercase tracking-wider text-slate-500">Email</th>
                  <th className="px-6 py-4 text-[9px] font-bold uppercase tracking-wider text-slate-500">Role</th>
                  <th className="px-6 py-4 text-[9px] font-bold uppercase tracking-wider text-slate-500">Status</th>
                  <th className="px-6 py-4 text-[9px] font-bold uppercase tracking-wider text-slate-500 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {users.map((u) => (
                  <tr key={u.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4 text-xs font-bold text-brand-navy">{u.name}</td>
                    <td className="px-6 py-4 text-xs text-slate-500 font-mono">{u.email}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-block rounded-full px-2.5 py-0.5 text-[9px] uppercase tracking-wider font-bold ${ROLE_BADGE[u.role] || 'bg-slate-100 text-slate-500'}`}>
                        {u.role.replace('_', ' ')}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-block rounded-full px-2.5 py-0.5 text-[9px] uppercase tracking-wider font-bold ${STATUS_BADGE[u.status] || 'bg-slate-100 text-slate-500'}`}>
                        {STATUS_LABEL[u.status]}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <UserActions user={u} currentUserId={admin.id} />
                    </td>
                  </tr>
                ))}
                {users.length === 0 && (
                  <tr>
                    <td colSpan={5} className="py-8 text-center text-slate-400 text-xs">
                      Tidak ada user di tab ini.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
