'use client';

import { useState } from 'react';

export default function ImageUpload({ value, onChange, label = 'Upload Gambar' }) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  async function handleFile(e) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError('');

    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch('/api/admin/upload', { method: 'POST', body: formData });
    const data = await res.json();

    if (!res.ok) {
      setError(data.error);
      setUploading(false);
      return;
    }

    onChange(data.path);
    setUploading(false);
  }

  return (
    <div className="space-y-3">
      <label className="text-[10px] uppercase tracking-wider font-bold text-slate-500 pl-1">{label}</label>

      {/* Image Preview Box */}
      {value && (
        <div className="p-1 bg-slate-100/50 border border-slate-200/50 rounded-2xl inline-block shadow-sm">
          <div className="relative h-28 aspect-video rounded-[calc(1rem-0.125rem)] overflow-hidden border border-slate-100 bg-slate-50 flex items-center justify-center group/preview">
            <img src={value} alt="Preview" className="h-full w-full object-cover transition-transform duration-500 group-hover/preview:scale-105" />
            <button
              type="button"
              onClick={() => onChange('')}
              className="absolute inset-0 bg-brand-navy/60 opacity-0 group-hover/preview:opacity-100 flex items-center justify-center text-[10px] font-bold text-white uppercase tracking-widest transition-opacity duration-300"
            >
              Hapus Gambar
            </button>
          </div>
        </div>
      )}

      {/* Dashed upload target area */}
      <div className="relative group/zone">
        <input
          type="file"
          accept="image/*"
          onChange={handleFile}
          disabled={uploading}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10 disabled:cursor-not-allowed"
        />
        <div className="border border-dashed border-slate-200/80 group-hover/zone:border-brand-red/40 bg-white group-hover/zone:bg-slate-50 rounded-xl px-5 py-4 flex items-center justify-between gap-4 transition-all duration-300">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 text-slate-400 group-hover/zone:text-brand-red group-hover/zone:border-brand-red/10 flex items-center justify-center transition-colors">
              {uploading ? (
                <svg className="animate-spin w-4 h-4 text-brand-red" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                </svg>
              ) : (
                <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"/>
                </svg>
              )}
            </span>
            <div>
              <p className="text-[10px] font-bold text-brand-navy uppercase tracking-wider">{uploading ? 'Mengunggah...' : 'Pilih File Gambar'}</p>
              <p className="text-[9px] text-slate-400 mt-0.5">Mendukung JPEG, PNG, WebP, SVG (Maks. 2MB)</p>
            </div>
          </div>
          <span className="text-[9px] font-bold text-slate-400 group-hover/zone:text-brand-red uppercase tracking-widest transition-colors">Telusuri &rarr;</span>
        </div>
      </div>

      {error && (
        <p className="text-brand-red text-[10px] font-bold uppercase tracking-wider pl-1 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
          {error}
        </p>
      )}

      {/* Manual URL input fallback */}
      <div className="flex flex-col gap-1.5 pt-1.5">
        <span className="text-[9px] uppercase tracking-wider font-bold text-slate-400 pl-1">Atau masukkan URL gambar secara manual</span>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="https://example.com/image.jpg"
          className="w-full bg-white border border-slate-200/80 rounded-xl px-4 py-2.5 text-xs text-brand-navy placeholder-slate-400 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red/20 transition-all duration-300"
        />
      </div>

    </div>
  );
}
