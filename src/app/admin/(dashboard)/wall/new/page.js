'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ImageUpload from '@/components/ImageUpload';

const inputClass = "mt-1.5 w-full bg-white border border-slate-200/80 focus:border-brand-red/40 rounded-xl px-4 py-3 text-xs text-brand-navy placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-brand-red/20 transition-all duration-300";
const labelClass = "text-[10px] uppercase tracking-wider font-bold text-slate-500 pl-1";

export default function NewWallPage() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: '',
    company: '',
    roleId: '',
    roleEn: '',
    quoteId: '',
    quoteEn: '',
    photo: '',
    order: 0,
    active: true,
  });

  function set(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    const res = await fetch('/api/admin/wall', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      router.push('/admin/wall');
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
        <h1 className="text-2xl font-extrabold tracking-tight text-brand-navy mt-2 leading-none">Tambah Testimoni</h1>
        <p className="text-xs text-slate-500 mt-1">Buat testimoni baru untuk ditampilkan pada halaman Wall of Congratulations.</p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-4xl space-y-6">
        
        {/* Profile Details Card (Double Bezel) */}
        <div className="p-1.5 bg-slate-100/50 border border-slate-200/50 rounded-[2rem] shadow-sm">
          <div className="bg-white border border-slate-100 p-6 md:p-8 rounded-[calc(2rem-0.25rem)] space-y-5">
            <h3 className="text-xs font-bold text-brand-navy uppercase tracking-wider border-b border-slate-100 pb-3">Profil Pengirim</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col">
                <label className={labelClass}>Nama Lengkap *</label>
                <input type="text" required value={form.name} onChange={(e) => set('name', e.target.value)} placeholder="Masukkan nama lengkap" className={inputClass} />
              </div>
              <div className="flex flex-col">
                <label className={labelClass}>Instansi / Perusahaan</label>
                <input type="text" value={form.company} onChange={(e) => set('company', e.target.value)} placeholder="Contoh: PT ABC Indonesia" className={inputClass} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col">
                <label className={labelClass}>Jabatan / Role (ID)</label>
                <input type="text" value={form.roleId} onChange={(e) => set('roleId', e.target.value)} placeholder="Contoh: HR Director" className={inputClass} />
              </div>
              <div className="flex flex-col">
                <label className={labelClass}>Jabatan / Role (EN)</label>
                <input type="text" value={form.roleEn} onChange={(e) => set('roleEn', e.target.value)} placeholder="Contoh: HR Director" className={inputClass} />
              </div>
            </div>

            <div>
              <ImageUpload value={form.photo} onChange={(url) => set('photo', url)} label="Foto Pengirim *" />
            </div>
          </div>
        </div>

        {/* Quotes Card (Double Bezel) */}
        <div className="p-1.5 bg-slate-100/50 border border-slate-200/50 rounded-[2rem] shadow-sm">
          <div className="bg-white border border-slate-100 p-6 md:p-8 rounded-[calc(2rem-0.25rem)] space-y-5">
            <h3 className="text-xs font-bold text-brand-navy uppercase tracking-wider border-b border-slate-100 pb-3">Kutipan / Testimoni</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col">
                <label className={labelClass}>Testimoni (Bahasa Indonesia) *</label>
                <textarea required rows={4} value={form.quoteId} onChange={(e) => set('quoteId', e.target.value)} placeholder="Masukkan kutipan testimoni ID..." className={inputClass} />
              </div>
              <div className="flex flex-col">
                <label className={labelClass}>Testimoni (English) *</label>
                <textarea required rows={4} value={form.quoteEn} onChange={(e) => set('quoteEn', e.target.value)} placeholder="Masukkan kutipan testimoni EN..." className={inputClass} />
              </div>
            </div>
          </div>
        </div>

        {/* Display Settings Card (Double Bezel) */}
        <div className="p-1.5 bg-slate-100/50 border border-slate-200/50 rounded-[2rem] shadow-sm">
          <div className="bg-white border border-slate-100 p-6 md:p-8 rounded-[calc(2rem-0.375rem)] space-y-5">
            <h3 className="text-xs font-bold text-brand-navy uppercase tracking-wider border-b border-slate-100 pb-3">Konfigurasi Tampilan</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
              <div className="flex flex-col">
                <label className={labelClass}>Urutan Tampilan (Sorting Order)</label>
                <input type="number" value={form.order} onChange={(e) => set('order', parseInt(e.target.value) || 0)} className={`${inputClass} font-mono`} />
              </div>
              <div className="flex items-center gap-3 pt-6 pl-2">
                <input 
                  type="checkbox" 
                  id="active"
                  checked={form.active} 
                  onChange={(e) => set('active', e.target.checked)}
                  className="w-4 h-4 rounded border-slate-300 text-brand-red focus:ring-brand-red focus:ring-opacity-25" 
                />
                <label htmlFor="active" className="text-xs font-bold text-slate-600 uppercase tracking-wider cursor-pointer select-none">Aktifkan Testimoni (Ditampilkan pada website)</label>
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
            <span>{submitting ? 'Menyimpan...' : 'Simpan Testimoni'}</span>
            <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <svg className="w-3 h-3 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg>
            </span>
          </button>
          
          <button 
            type="button" 
            onClick={() => router.push('/admin/wall')}
            className="rounded-full border border-slate-200 bg-white text-[9px] font-bold uppercase tracking-widest text-slate-500 hover:bg-slate-50 px-6 py-3.5 transition-all duration-300 active:scale-[0.98]"
          >
            Batal
          </button>
        </div>

      </form>
    </div>
  );
}
