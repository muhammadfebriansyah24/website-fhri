'use client';

import { useState, useEffect } from 'react';

const STATUS_BADGE = {
  pending: 'bg-amber-50 text-amber-600 border border-amber-100',
  active: 'bg-emerald-50 text-emerald-600 border border-emerald-100',
  rejected: 'bg-red-50 text-red-600 border border-red-100',
};

const ROLE_BADGE = {
  super_admin: 'bg-purple-50 text-purple-600 border border-purple-100',
  editor: 'bg-blue-50 text-blue-600 border border-blue-100',
};

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(null);

  async function fetchUsers() {
    const res = await fetch('/api/admin/users');
    if (res.ok) setUsers(await res.json());
    setLoading(false);
  }

  useEffect(() => {
    setTimeout(() => {
      fetchUsers();
    }, 0);
  }, []);

  async function handleAction(userId, action) {
    setActionLoading(userId);
    const res = await fetch('/api/admin/users', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, action }),
    });
    if (res.ok) await fetchUsers();
    else alert((await res.json()).error);
    setActionLoading(null);
  }

  if (loading) return <p className="p-6 text-slate-500 text-xs uppercase tracking-widest font-bold animate-pulse">Memuat data user...</p>;

  const pending = users.filter((u) => u.status === 'pending');
  const others = users.filter((u) => u.status !== 'pending');

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

      {/* Akun Menunggu Persetujuan */}
      {pending.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest pl-1">
            Menunggu Persetujuan ({pending.length})
          </h2>
          <div className="p-1.5 bg-amber-500/5 border border-amber-500/20 rounded-[2rem] shadow-sm overflow-hidden">
            <div className="bg-white border border-slate-100 rounded-[calc(2rem-0.375rem)] overflow-hidden overflow-x-auto w-full hide-scrollbar">
              <table className="w-full text-left border-collapse text-xs min-w-[700px]">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50">
                    <th className="px-6 py-4 text-[9px] font-bold uppercase tracking-wider text-slate-500">Nama</th>
                    <th className="px-6 py-4 text-[9px] font-bold uppercase tracking-wider text-slate-500">Email</th>
                    <th className="px-6 py-4 text-[9px] font-bold uppercase tracking-wider text-slate-500">Tanggal Daftar</th>
                    <th className="px-6 py-4 text-[9px] font-bold uppercase tracking-wider text-slate-500 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {pending.map((u) => (
                    <tr key={u.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4 text-xs font-bold text-brand-navy">{u.name}</td>
                      <td className="px-6 py-4 text-xs text-slate-500 font-mono">{u.email}</td>
                      <td className="px-6 py-4 text-xs text-slate-500">
                        {new Date(u.createdAt).toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' })}
                      </td>
                      <td className="px-6 py-4 text-right space-x-2 whitespace-nowrap">
                        <button
                          onClick={() => handleAction(u.id, 'approve')}
                          disabled={actionLoading === u.id}
                          className="rounded-lg border border-slate-200 hover:border-emerald-500/35 bg-white text-slate-500 hover:text-emerald-600 px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider transition-all duration-300 disabled:opacity-50"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleAction(u.id, 'reject')}
                          disabled={actionLoading === u.id}
                          className="rounded-lg border border-slate-200 hover:border-red-500/35 bg-white text-slate-500 hover:text-red-600 px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider transition-all duration-300 disabled:opacity-50"
                        >
                          Reject
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Semua Akun */}
      <section className="space-y-3">
        <h2 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest pl-1">
          Semua Akun ({others.length})
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
                  <th className="px-6 py-4 text-[9px] font-bold uppercase tracking-wider text-slate-500">Disetujui Oleh</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {others.map((u) => (
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
                        {u.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-xs text-slate-500 font-semibold">
                      {u.approvedBy?.name ?? '—'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
