'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import ImageUpload from '@/components/ImageUpload';
import RichTextEditor from '@/components/RichTextEditor';

function toSlug(str) {
  return str.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').trim();
}

const inputClass = "mt-1.5 w-full bg-white border border-slate-200/80 focus:border-brand-red/40 rounded-xl px-4 py-3 text-xs text-brand-navy placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-brand-red/20 transition-all duration-300";
const labelClass = "text-[10px] uppercase tracking-wider font-bold text-slate-500 pl-1";

export default function EditNewsPage() {
  const router = useRouter();
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    titleId: '',
    titleEn: '',
    slug: '',
    image: '',
    descriptionId: '',
    descriptionEn: '',
    contentId: '',
    contentEn: '',
    publishedAt: '',
    featured: false,
    instagramUrl: '',
  });

  useEffect(() => {
    async function load() {
      const res = await fetch(`/api/admin/news/${params.id}`);
      if (!res.ok) { alert('Berita tidak ditemukan.'); router.push('/admin/news'); return; }
      const data = await res.json();
      setForm({
        titleId: data.titleId || '',
        titleEn: data.titleEn || '',
        slug: data.slug || '',
        image: data.image || '',
        descriptionId: data.descriptionId || '',
        descriptionEn: data.descriptionEn || '',
        contentId: data.contentId || '',
        contentEn: data.contentEn || '',
        publishedAt: data.publishedAt ? new Date(data.publishedAt).toISOString().slice(0, 16) : '',
        featured: data.featured ?? false,
        instagramUrl: data.instagramUrl || '',
      });
      setLoading(false);
    }
    load();
  }, [params.id, router]);

  function set(field, value) {
    setForm((prev) => {
      const next = { ...prev, [field]: value };
      if (field === 'titleId') next.slug = toSlug(value);
      return next;
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    const res = await fetch(`/api/admin/news/${params.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      router.push('/admin/news');
    } else {
      alert((await res.json()).error || 'Gagal menyimpan.');
      setSubmitting(false);
    }
  }

  if (loading) return <p className="p-6 text-slate-500 text-xs uppercase tracking-widest font-bold animate-pulse">Memuat data berita...</p>;

  return (
    <div className="py-4 space-y-6">
      
      <div>
        <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[9px] uppercase tracking-[0.2em] font-bold bg-brand-navy/5 text-brand-navy border border-brand-navy/10">
          Formulir
        </span>
        <h1 className="text-2xl font-extrabold tracking-tight text-brand-navy mt-2 leading-none">Edit Berita</h1>
        <p className="text-xs text-slate-500 mt-1">Perbarui artikel berita atau pengumuman yang sudah diterbitkan.</p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-4xl space-y-6">
        
        <div className="p-1.5 bg-slate-100/50 border border-slate-200/50 rounded-[2rem] shadow-sm">
          <div className="bg-white border border-slate-100 p-6 md:p-8 rounded-[calc(2rem-0.375rem)] space-y-5">
            <h3 className="text-xs font-bold text-brand-navy uppercase tracking-wider border-b border-slate-100 pb-3">Informasi Utama</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col">
                <label className={labelClass}>Judul Berita (Bahasa Indonesia) *</label>
                <input type="text" required value={form.titleId} onChange={(e) => set('titleId', e.target.value)} placeholder="Masukkan judul ID" className={inputClass} />
              </div>
              <div className="flex flex-col">
                <label className={labelClass}>Judul Berita (English) *</label>
                <input type="text" required value={form.titleEn} onChange={(e) => set('titleEn', e.target.value)} placeholder="Masukkan judul EN" className={inputClass} />
              </div>
            </div>

            <div className="flex flex-col">
              <label className={labelClass}>Slug Berita (Auto-generated)</label>
              <input type="text" value={form.slug} onChange={(e) => set('slug', e.target.value)} placeholder="slug-artikel-berita" className={`${inputClass} font-mono`} />
            </div>

            <div>
              <ImageUpload value={form.image} onChange={(url) => set('image', url)} label="Gambar Header Berita" />
            </div>
          </div>
        </div>

        <div className="p-1.5 bg-slate-100/50 border border-slate-200/50 rounded-[2rem] shadow-sm">
          <div className="bg-white border border-slate-100 p-6 md:p-8 rounded-[calc(2rem-0.375rem)] space-y-5">
            <h3 className="text-xs font-bold text-brand-navy uppercase tracking-wider border-b border-slate-100 pb-3">Deskripsi Singkat (Teaser)</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col">
                <label className={labelClass}>Deskripsi Singkat (ID) *</label>
                <textarea required rows={3} value={form.descriptionId} onChange={(e) => set('descriptionId', e.target.value)} placeholder="Teaser paragraf pertama ID..." className={inputClass} />
              </div>
              <div className="flex flex-col">
                <label className={labelClass}>Deskripsi Singkat (EN) *</label>
                <textarea required rows={3} value={form.descriptionEn} onChange={(e) => set('descriptionEn', e.target.value)} placeholder="Teaser paragraf pertama EN..." className={inputClass} />
              </div>
            </div>
          </div>
        </div>

        <div className="p-1.5 bg-slate-100/50 border border-slate-200/50 rounded-[2rem] shadow-sm">
          <div className="bg-white border border-slate-100 p-6 md:p-8 rounded-[calc(2rem-0.375rem)] space-y-6">
            <h3 className="text-xs font-bold text-brand-navy uppercase tracking-wider border-b border-slate-100 pb-3">Konten Lengkap Berita</h3>
            
            <div className="space-y-2">
              <label className={labelClass}>Konten Utama (ID) *</label>
              <RichTextEditor value={form.contentId} onChange={(val) => set('contentId', val)} />
            </div>

            <div className="space-y-2">
              <label className={labelClass}>Konten Utama (EN) *</label>
              <RichTextEditor value={form.contentEn} onChange={(val) => set('contentEn', val)} />
            </div>
          </div>
        </div>

        <div className="p-1.5 bg-slate-100/50 border border-slate-200/50 rounded-[2rem] shadow-sm">
          <div className="bg-white border border-slate-100 p-6 md:p-8 rounded-[calc(2rem-0.375rem)] space-y-5">
            <h3 className="text-xs font-bold text-brand-navy uppercase tracking-wider border-b border-slate-100 pb-3">Pengaturan Penerbitan</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
              <div className="flex flex-col">
                <label className={labelClass}>Tanggal Terbit</label>
                <input type="datetime-local" value={form.publishedAt} onChange={(e) => set('publishedAt', e.target.value)} className={`${inputClass} font-mono`} />
              </div>
              <div className="flex items-center gap-3 pt-6 pl-2">
                <input 
                  type="checkbox" 
                  id="featured"
                  checked={form.featured} 
                  onChange={(e) => set('featured', e.target.checked)}
                  className="w-4 h-4 rounded border-slate-300 text-brand-red focus:ring-brand-red focus:ring-opacity-25" 
                />
                <label htmlFor="featured" className="text-xs font-bold text-slate-600 uppercase tracking-wider cursor-pointer select-none">Tampilkan Sebagai Berita Utama (Featured)</label>
              </div>
            </div>

            <div className="flex flex-col">
              <label className={labelClass}>Link Instagram (opsional)</label>
              <input
                type="url"
                value={form.instagramUrl}
                onChange={(e) => set('instagramUrl', e.target.value)}
                placeholder="https://www.instagram.com/reel/xxxxx/"
                className={inputClass}
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 pt-4">
          <button
            type="submit"
            disabled={submitting}
            className="rounded-full bg-brand-red hover:bg-brand-navy text-white py-3.5 pl-6 pr-4 font-bold uppercase tracking-widest text-[9px] flex items-center justify-between gap-4 transition-all duration-500 group active:scale-[0.98] disabled:opacity-50"
          >
            <span>{submitting ? 'Menyimpan...' : 'Simpan Berita'}</span>
            <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <svg className="w-3 h-3 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg>
            </span>
          </button>
          
          <button 
            type="button" 
            onClick={() => router.push('/admin/news')}
            className="rounded-full border border-slate-200 bg-white text-[9px] font-bold uppercase tracking-widest text-slate-500 hover:bg-slate-50 px-6 py-3.5 transition-all duration-300 active:scale-[0.98]"
          >
            Batal
          </button>
        </div>

      </form>
    </div>
  );
}