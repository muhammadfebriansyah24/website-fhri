'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const TYPE_LABELS = { full_time: 'Full-time', contract: 'Kontrak', internship: 'Magang' };

const TYPE_BADGES = {
  full_time: 'bg-blue-50 text-blue-600 border border-blue-100',
  contract: 'bg-amber-50 text-amber-600 border border-amber-100',
  internship: 'bg-purple-50 text-purple-600 border border-purple-100',
};

export default function RecruitmentListPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    const res = await fetch('/api/admin/recruitment');
    if (res.ok) setItems(await res.json());
    setLoading(false);
  }

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 0);
  }, []);

  async function handleDelete(id, title) {
    if (!confirm(`Hapus lowongan "${title}"?`)) return;
    const res = await fetch(`/api/admin/recruitment/${id}`, { method: 'DELETE' });
    if (res.ok) fetchData();
    else alert((await res.json()).error);
  }

  if (loading) return <p className="p-6 text-slate-500 text-xs uppercase tracking-widest font-bold animate-pulse">Memuat data lowongan...</p>;

  return (
    <div className="py-4 space-y-6">
      
      {/* Header and Action Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-eyebrow block mb-2">
            Database
          </span>
          <h1 className="text-2xl font-extrabold tracking-tight text-brand-navy mt-2 leading-none">Kelola Lowongan</h1>
          <p className="text-xs text-slate-500 mt-1">Daftar lowongan pekerjaan dan magang aktif FHRI.</p>
        </div>
        <Link href="/admin/recruitment/new" className="group shrink-0">
          <div className="p-1 bg-slate-100/80 border border-slate-200/50 rounded-full transition-all duration-300 hover:-translate-y-0.5">
            <span className="rounded-full bg-brand-red text-white py-2.5 pl-5 pr-3.5 font-bold uppercase tracking-widest text-[9px] flex items-center justify-between gap-3 transition-all duration-300 hover:bg-brand-navy">
              Tambah Lowongan
              <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <svg className="w-2.5 h-2.5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/></svg>
              </span>
            </span>
          </div>
        </Link>
      </div>

      {/* Clean Table Container */}
      <div className="p-1.5 bg-slate-100/50 border border-slate-200/50 rounded-[2rem] shadow-sm overflow-hidden">
        <div className="bg-white border border-slate-100 rounded-[calc(2rem-0.375rem)] overflow-hidden overflow-x-auto w-full hide-scrollbar">
          <table className="w-full text-left border-collapse text-xs min-w-[700px]">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50">
                <th className="px-6 py-4 text-[9px] font-bold uppercase tracking-wider text-slate-500">Judul</th>
                <th className="px-6 py-4 text-[9px] font-bold uppercase tracking-wider text-slate-500">Department</th>
                <th className="px-6 py-4 text-[9px] font-bold uppercase tracking-wider text-slate-500">Lokasi</th>
                <th className="px-6 py-4 text-[9px] font-bold uppercase tracking-wider text-slate-500">Tipe</th>
                <th className="px-6 py-4 text-[9px] font-bold uppercase tracking-wider text-slate-500">Status</th>
                <th className="px-6 py-4 text-[9px] font-bold uppercase tracking-wider text-slate-500 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {items.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-slate-400 font-semibold uppercase tracking-wider">
                    Belum ada data lowongan.
                  </td>
                </tr>
              )}
              {items.map((item) => (
                <tr key={item.id} className="group/row hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 text-xs font-bold text-brand-navy max-w-xs truncate">{item.titleId}</td>
                  <td className="px-6 py-4 text-xs text-slate-500">{item.department}</td>
                  <td className="px-6 py-4 text-xs text-slate-500">{item.location}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-block rounded-full px-2.5 py-0.5 text-[9px] uppercase tracking-wider font-bold ${TYPE_BADGES[item.employmentType] || 'bg-slate-100 text-slate-500'}`}>
                      {TYPE_LABELS[item.employmentType] || item.employmentType}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    {item.status === 'open' ? (
                      <span className="inline-block rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 text-[9px] uppercase tracking-wider font-bold px-2.5 py-0.5">Open</span>
                    ) : (
                      <span className="inline-block rounded-full bg-red-50 text-red-600 border border-red-100 text-[9px] uppercase tracking-wider font-bold px-2.5 py-0.5">Closed</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right space-x-2 whitespace-nowrap">
                    <Link
                      href={`/admin/recruitment/${item.id}/edit`}
                      className="inline-block rounded-lg border border-slate-200 hover:border-brand-red/30 bg-white text-slate-500 hover:text-brand-red px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider transition-all duration-300"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(item.id, item.titleId)}
                      className="inline-block rounded-lg border border-slate-200 hover:border-brand-red/30 bg-white text-slate-500 hover:text-brand-red px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider transition-all duration-300"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
