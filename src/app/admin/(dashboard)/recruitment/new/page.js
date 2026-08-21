'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const inputClass = "mt-1.5 w-full bg-white border border-slate-200/80 focus:border-brand-red/40 rounded-xl px-4 py-3 text-xs text-brand-navy placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-brand-red/20 transition-all duration-300";
const labelClass = "text-[10px] uppercase tracking-wider font-bold text-slate-500 pl-1";

export default function NewRecruitmentPage() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    titleId: '',
    titleEn: '',
    department: '',
    location: '',
    employmentType: 'full_time',
    descId: '',
    descEn: '',
    postedAt: '',
    deadline: '',
    status: 'open',
  });

  function set(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    const res = await fetch('/api/admin/recruitment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      router.push('/admin/recruitment');
    } else {
      alert((await res.json()).error || 'Gagal menyimpan.');
      setSubmitting(false);
    }
  }

  return (
    <div className="py-4 space-y-6">
      
      {/* Header */}
      <div>
        <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[9px] uppercase tracking-[0.2em] font-bold bg-brand-navy/5 text-brand-navy border border-brand-navy/10">
          Formulir
        </span>
        <h1 className="text-2xl font-extrabold tracking-tight text-brand-navy mt-2 leading-none">Tambah Lowongan</h1>
        <p className="text-xs text-slate-500 mt-1">Buat lowongan pekerjaan atau program magang baru di FHRI.</p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-4xl space-y-6">
        
        {/* Basic Details Card (Double Bezel) */}
        <div className="p-1.5 bg-slate-100/50 border border-slate-200/50 rounded-[2rem] shadow-sm">
          <div className="bg-white border border-slate-100 p-6 md:p-8 rounded-[calc(2rem-0.25rem)] space-y-5">
            <h3 className="text-xs font-bold text-brand-navy uppercase tracking-wider border-b border-slate-100 pb-3">Detail Posisi</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col">
                <label className={labelClass}>Nama Jabatan / Judul (ID) *</label>
                <input type="text" required value={form.titleId} onChange={(e) => set('titleId', e.target.value)} placeholder="Contoh: HR Specialist" className={inputClass} />
              </div>
              <div className="flex flex-col">
                <label className={labelClass}>Nama Jabatan / Judul (EN) *</label>
                <input type="text" required value={form.titleEn} onChange={(e) => set('titleEn', e.target.value)} placeholder="Contoh: HR Specialist" className={inputClass} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col">
                <label className={labelClass}>Departemen / Divisi *</label>
                <input type="text" required value={form.department} onChange={(e) => set('department', e.target.value)} placeholder="Contoh: Human Resources" className={inputClass} />
              </div>
              <div className="flex flex-col">
                <label className={labelClass}>Lokasi Kerja *</label>
                <input type="text" required value={form.location} onChange={(e) => set('location', e.target.value)} placeholder="Contoh: Jakarta (Hybrid)" className={inputClass} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col">
                <label className={labelClass}>Tipe Pekerjaan *</label>
                <select value={form.employmentType} onChange={(e) => set('employmentType', e.target.value)} className={`${inputClass} bg-white cursor-pointer`}>
                  <option value="full_time">Full-time</option>
                  <option value="contract">Kontrak</option>
                  <option value="internship">Magang</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className={labelClass}>Status Lowongan</label>
                <select value={form.status} onChange={(e) => set('status', e.target.value)} className={`${inputClass} bg-white cursor-pointer`}>
                  <option value="open">Open</option>
                  <option value="closed">Closed</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Description Details Card (Double Bezel) */}
        <div className="p-1.5 bg-slate-100/50 border border-slate-200/50 rounded-[2rem] shadow-sm">
          <div className="bg-white border border-slate-100 p-6 md:p-8 rounded-[calc(2rem-0.25rem)] space-y-5">
            <h3 className="text-xs font-bold text-brand-navy uppercase tracking-wider border-b border-slate-100 pb-3">Deskripsi & Kualifikasi</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col">
                <label className={labelClass}>Kualifikasi (Bahasa Indonesia) *</label>
                <textarea required rows={5} value={form.descId} onChange={(e) => set('descId', e.target.value)} placeholder="Tulis deskripsi tugas & kualifikasi ID..." className={inputClass} />
              </div>
              <div className="flex flex-col">
                <label className={labelClass}>Kualifikasi (English) *</label>
                <textarea required rows={5} value={form.descEn} onChange={(e) => set('descEn', e.target.value)} placeholder="Tulis deskripsi tugas & kualifikasi EN..." className={inputClass} />
              </div>
            </div>
          </div>
        </div>

        {/* Date configurations Card (Double Bezel) */}
        <div className="p-1.5 bg-slate-100/50 border border-slate-200/50 rounded-[2rem] shadow-sm">
          <div className="bg-white border border-slate-100 p-6 md:p-8 rounded-[calc(2rem-0.25rem)] space-y-5">
            <h3 className="text-xs font-bold text-brand-navy uppercase tracking-wider border-b border-slate-100 pb-3">Tanggal & Deadline</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col">
                <label className={labelClass}>Tanggal Posting</label>
                <input type="datetime-local" value={form.postedAt} onChange={(e) => set('postedAt', e.target.value)} className={`${inputClass} font-mono`} />
              </div>
              <div className="flex flex-col">
                <label className={labelClass}>Deadline Pendaftaran</label>
                <input type="datetime-local" value={form.deadline} onChange={(e) => set('deadline', e.target.value)} className={`${inputClass} font-mono`} />
              </div>
            </div>
          </div>
        </div>

        {/* Action button panel */}
        <div className="flex items-center gap-4 pt-4">
          <button
            type="submit"
            disabled={submitting}
            className="rounded-full bg-brand-red hover:bg-brand-navy text-white py-3.5 pl-6 pr-4 font-bold uppercase tracking-widest text-[9px] flex items-center justify-between gap-4 transition-all duration-500 group active:scale-[0.98] disabled:opacity-50"
          >
            <span>{submitting ? 'Menyimpan...' : 'Simpan Lowongan'}</span>
            <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <svg className="w-3 h-3 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg>
            </span>
          </button>
          
          <button 
            type="button" 
            onClick={() => router.push('/admin/recruitment')}
            className="rounded-full border border-slate-200 bg-white text-[9px] font-bold uppercase tracking-widest text-slate-500 hover:bg-slate-50 px-6 py-3.5 transition-all duration-300 active:scale-[0.98]"
          >
            Batal
          </button>
        </div>

      </form>
    </div>
  );
}
