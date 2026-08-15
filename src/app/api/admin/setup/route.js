import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import prisma from '@/lib/prisma';

// Sekali-pakai: buat Super Admin pertama di production.
// Setelah dipakai, HAPUS file ini (atau minimal hapus env var SETUP_SECRET
// dan SEED_SUPER_ADMIN_*) supaya endpoint ini gak nganggur di production.

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const key = searchParams.get('key');

  // Guard: tanpa key yang cocok, tolak.
  if (!process.env.SETUP_SECRET || key !== process.env.SETUP_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { SEED_SUPER_ADMIN_NAME, SEED_SUPER_ADMIN_EMAIL, SEED_SUPER_ADMIN_PASSWORD } =
    process.env;

  if (!SEED_SUPER_ADMIN_NAME || !SEED_SUPER_ADMIN_EMAIL || !SEED_SUPER_ADMIN_PASSWORD) {
    return NextResponse.json(
      { error: 'SEED_SUPER_ADMIN_NAME/EMAIL/PASSWORD belum di-set di Environment Variables' },
      { status: 400 }
    );
  }

  // Idempotent: kalau udah ada, jangan bikin dobel.
  const existing = await prisma.user.findUnique({
    where: { email: SEED_SUPER_ADMIN_EMAIL },
  });

  if (existing) {
    return NextResponse.json({
      message: 'Super Admin sudah ada, gak dibuat ulang',
      id: existing.id,
      email: existing.email,
    });
  }

  const passwordHash = await bcrypt.hash(SEED_SUPER_ADMIN_PASSWORD, 10);

  const user = await prisma.user.create({
    data: {
      name: SEED_SUPER_ADMIN_NAME,
      email: SEED_SUPER_ADMIN_EMAIL,
      passwordHash,
      role: 'super_admin',
      status: 'active',
    },
  });

  return NextResponse.json({
    message: 'Super Admin berhasil dibuat',
    id: user.id,
    email: user.email,
  });
}