'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ResetPasswordClient({ token }) {
  const router = useRouter();
  const [form, setForm] = useState({ password: '', confirmPassword: '' });
  const [status, setStatus] = useState({ loading: false, success: false, error: '' });

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: '' });

    if (!token) {
      setStatus({ loading: false, success: false, error: 'Token reset password tidak ditemukan.' });
      return;
    }

    if (form.password.length < 8) {
      setStatus({ loading: false, success: false, error: 'Password minimal 8 karakter.' });
      return;
    }

    if (form.password !== form.confirmPassword) {
      setStatus({ loading: false, success: false, error: 'Konfirmasi password tidak cocok.' });
      return;
    }

    try {
      const res = await fetch('/api/admin/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, newPassword: form.password }),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus({ loading: false, success: false, error: data.error || 'Terjadi kesalahan.' });
        return;
      }

      setStatus({ loading: false, success: true, error: '' });
      setTimeout(() => {
        router.push('/admin/login');
      }, 3000);
    } catch (err) {
      setStatus({ loading: false, success: false, error: 'Koneksi ke server gagal.' });
    }
  }

  // If there's no token, show token missing message.
  const hasNoToken = !token;

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
            <h1 className="text-2xl font-extrabold tracking-tight text-brand-navy leading-none">Reset Password</h1>
            <p className="text-xs text-slate-500 mt-2">
              {status.success 
                ? 'Password berhasil diperbarui.' 
                : hasNoToken 
                  ? 'Tautan reset tidak valid.' 
                  : 'Silakan masukkan kata sandi baru Anda.'}
            </p>
          </div>

          {hasNoToken ? (
            <div className="space-y-6">
              <div className="bg-brand-red/10 border border-brand-red/20 rounded-xl p-4 text-xs text-brand-red">
                Token reset password tidak ditemukan atau tidak valid. Silakan minta tautan baru.
              </div>
              <Link
                href="/admin/forgot-password"
                className="block text-center w-full rounded-full bg-brand-red hover:bg-brand-navy text-white py-3.5 font-bold uppercase tracking-widest text-[10px] transition-all duration-500"
              >
                Minta Link Baru
              </Link>
            </div>
          ) : status.success ? (
            <div className="space-y-6">
              <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 text-xs text-emerald-800">
                Password Anda telah berhasil diubah. Mengalihkan Anda ke halaman login...
              </div>
              <Link
                href="/admin/login"
                className="block text-center w-full rounded-full bg-brand-red hover:bg-brand-navy text-white py-3.5 font-bold uppercase tracking-widest text-[10px] transition-all duration-500"
              >
                Login Sekarang
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] uppercase tracking-wider font-bold text-slate-500 pl-1">Password Baru</label>
                <input
                  type="password"
                  placeholder="Minimal 8 karakter"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  required
                  className="w-full bg-white border border-slate-200/80 rounded-xl px-4 py-3 text-xs text-brand-navy placeholder-slate-400 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red/20 transition-all duration-200"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] uppercase tracking-wider font-bold text-slate-500 pl-1">Konfirmasi Password Baru</label>
                <input
                  type="password"
                  placeholder="Ulangi password baru"
                  value={form.confirmPassword}
                  onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
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
                <span>{status.loading ? 'Menyimpan...' : 'Simpan Password'}</span>
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:translate-x-1">
                  <svg className="w-3.5 h-3.5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
                </span>
              </button>

              <div className="mt-8 pt-6 border-t border-slate-100 text-center">
                <p className="text-xs text-slate-500">
                  <Link href="/admin/login" className="text-brand-red hover:text-brand-navy font-bold transition-all underline">
                    Batal dan Kembali
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
