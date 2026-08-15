'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function SponsorListPage() {
  const [sponsors, setSponsors] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchSponsors() {
    const res = await fetch('/api/admin/sponsor');
    if (res.ok) setSponsors(await res.json());
    setLoading(false);
  }

  useEffect(() => {
    setTimeout(() => {
      fetchSponsors();
    }, 0);
  }, []);

  async function handleDelete(id, name) {
    if (!confirm(`Hapus sponsor "${name}"?`)) return;
    const res = await fetch(`/api/admin/sponsor/${id}`, { method: 'DELETE' });
    if (res.ok) fetchSponsors();
    else alert((await res.json()).error);
  }

  if (loading) return <p className="p-6 text-slate-500 text-xs uppercase tracking-widest font-bold animate-pulse">Memuat data sponsor...</p>;

  return (
    <div className="py-4 space-y-6">
      
      {/* Header and Action Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-eyebrow block mb-2">
            Database
          </span>
          <h1 className="text-2xl font-extrabold tracking-tight text-brand-navy mt-2 leading-none">Kelola Sponsor</h1>
          <p className="text-xs text-slate-500 mt-1">Daftar logo sponsor dan mitra partner FHRI.</p>
        </div>
        <Link href="/admin/sponsor/new" className="group shrink-0">
          <div className="p-1 bg-slate-100/80 border border-slate-200/50 rounded-full transition-all duration-300 hover:-translate-y-0.5">
            <span className="rounded-full bg-brand-red text-white py-2.5 pl-5 pr-3.5 font-bold uppercase tracking-widest text-[9px] flex items-center justify-between gap-3 transition-all duration-300 hover:bg-brand-navy">
              Tambah Sponsor
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
          <table className="w-full text-left border-collapse text-xs min-w-[600px]">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50">
                <th className="px-6 py-4 text-[9px] font-bold uppercase tracking-wider text-slate-500">Logo</th>
                <th className="px-6 py-4 text-[9px] font-bold uppercase tracking-wider text-slate-500">Nama</th>
                <th className="px-6 py-4 text-[9px] font-bold uppercase tracking-wider text-slate-500">Urutan</th>
                <th className="px-6 py-4 text-[9px] font-bold uppercase tracking-wider text-slate-500">Status</th>
                <th className="px-6 py-4 text-[9px] font-bold uppercase tracking-wider text-slate-500 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {sponsors.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-slate-400 font-semibold uppercase tracking-wider">
                    Belum ada data sponsor.
                  </td>
                </tr>
              )}
              {sponsors.map((item) => (
                <tr key={item.id} className="group/row hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="p-1.5 bg-slate-50 border border-slate-200/60 rounded-xl inline-flex min-w-[70px] min-h-[35px] max-w-[100px] items-center justify-center">
                      {item.logo ? (
                        <img src={item.logo} alt={item.name} className="h-5 w-auto object-contain" />
                      ) : (
                        <span className="text-[8px] text-slate-400 font-bold uppercase tracking-wider">No Logo</span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-xs font-bold text-brand-navy">{item.name}</td>
                  <td className="px-6 py-4 text-xs text-slate-500 font-mono">{item.order}</td>
                  <td className="px-6 py-4">
                    {item.active ? (
                      <span className="inline-block rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 text-[9px] uppercase tracking-wider font-bold px-2.5 py-0.5">Aktif</span>
                    ) : (
                      <span className="inline-block rounded-full bg-slate-100 text-slate-500 text-[9px] uppercase tracking-wider font-bold px-2.5 py-0.5">Nonaktif</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right space-x-2 whitespace-nowrap">
                    <Link
                      href={`/admin/sponsor/${item.id}/edit`}
                      className="inline-block rounded-lg border border-slate-200 hover:border-brand-red/30 bg-white text-slate-500 hover:text-brand-red px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider transition-all duration-300"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(item.id, item.name)}
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
