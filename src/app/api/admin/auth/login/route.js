import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { prisma } from '@/lib/prisma';
import { getSession } from '@/lib/session';

// Hash dummy — dipakai kalau email tidak ditemukan, supaya waktu respons sama
// dengan email yang ditemukan (hindari user enumeration lewat timing attack).
const DUMMY_HASH = '$2b$10$ZbSYALqWndHv6r0/5ZH.KelLL9CX2O/Lj8AAcWlzl/f8mUVYXxn0.';

export async function POST(request) {
  const { email, password } = await request.json();

  if (!email || !password) {
    return NextResponse.json({ error: 'Email dan password wajib diisi.' }, { status: 400 });
  }

  const user = await prisma.user.findUnique({ where: { email } });
  const validPassword = await bcrypt.compare(password, user?.passwordHash ?? DUMMY_HASH);

  if (!user || !validPassword) {
    return NextResponse.json({ error: 'Email atau password salah.' }, { status: 401 });
  }
  if (user.status !== 'active') {
    return NextResponse.json({ error: 'Akun belum disetujui Super Admin.' }, { status: 403 });
  }

  const session = await getSession();
  session.user = { id: user.id, name: user.name, email: user.email, role: user.role };
  await session.save();

  return NextResponse.json({ message: 'Login berhasil.' });
}
