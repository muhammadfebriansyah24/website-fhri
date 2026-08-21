'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ loading: false, success: false, error: '' });

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: '' });

    try {
      const res = await fetch('/api/admin/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus({ loading: false, success: false, error: data.error || 'Terjadi kesalahan.' });
        return;
      }

      setStatus({ loading: false, success: true, error: '' });
    } catch (err) {
      setStatus({ loading: false, success: false, error: 'Koneksi ke server gagal.' });
    }
  }

  return (
    <main className="min-h-[100dvh] flex items-center justify-center p-6 bg-brand-offwhite selection:bg-brand-red selection:text-white">
      {/* Soft Double-Bezel Card */}
      <div className="w-full max-w-[420px] p-2 bg-slate-100/80 border border-slate-200/50 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,38,60,0.04)] animate-[fadeSlideUp_0.6s_cubic-bezier(0.16,1,0.3,1)_forwards]">
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes fadeSlideUp {
            from { opacity: 0; transform: translateY(16px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}} />
        <div className="bg-white border border-slate-100 p-8 md:p-10 rounded-[calc(2.5rem-0.5rem)]">
          
          <div className="mb-8">
            <span className="text-eyebrow block mb-4">
              FHRI Admin
            </span>
            <h1 className="text-2xl font-extrabold tracking-tight text-brand-navy leading-none">Lupa Password</h1>
            <p className="text-xs text-slate-500 mt-2">
              {status.success 
                ? 'Permintaan selesai diproses.' 
                : 'Masukkan alamat email Anda untuk mendapatkan tautan reset password.'}
            </p>
          </div>

          {status.success ? (
            <div className="space-y-6">
              <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 text-xs text-emerald-800">
                Jika email terdaftar dan aktif, link untuk menyetel ulang kata sandi Anda telah dikirim. Silakan periksa kotak masuk (atau folder spam) email Anda.
              </div>
              <Link
                href="/admin/login"
                className="block text-center w-full rounded-full bg-brand-red hover:bg-brand-navy text-white py-3.5 font-bold uppercase tracking-widest text-[10px] transition-all duration-500"
              >
                Kembali ke Login
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] uppercase tracking-wider font-bold text-slate-500 pl-1">Email</label>
                <input
                  type="email"
                  placeholder="nama@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-white border border-slate-200/80 rounded-xl px-4 py-3 text-xs text-brand-navy placeholder-slate-400 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red/20 transition-all duration-200"
                />
              </div>

              {status.error && (
                <p className="text-brand-red text-xs mt-1 pl-1 flex items-center gap-1.5 animate-pulse">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red inline-block"></span>
                  {status.error}
                </p>
              )}

              <button
                type="submit"
                disabled={status.loading}
                className="mt-4 w-full rounded-full bg-brand-red hover:bg-brand-navy text-white py-3.5 pl-6 pr-4 font-bold uppercase tracking-widest text-[10px] flex items-center justify-between gap-4 transition-all duration-500 group active:scale-[0.98] disabled:opacity-50"
              >
                <span>{status.loading ? 'Mengirim...' : 'Kirim Link Reset'}</span>
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:translate-x-1">
                  <svg className="w-3.5 h-3.5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
                </span>
              </button>

              <div className="mt-8 pt-6 border-t border-slate-100 text-center">
                <p className="text-xs text-slate-500">
                  <Link href="/admin/login" className="text-brand-red hover:text-brand-navy font-bold transition-all underline">
                    Kembali ke Login
                  </Link>
                </p>
              </div>
            </form>
          )}

        </div>
      </div>
    </main>
  );
}
