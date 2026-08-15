import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { prisma } from '@/lib/prisma';

export async function GET(request) {
  const secret = request.nextUrl.searchParams.get('secret');

  if (!secret || secret !== process.env.SETUP_SECRET) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  const existing = await prisma.user.findFirst({
    where: { role: 'super_admin' },
  });

  if (existing) {
    return NextResponse.json({
      message: 'Super Admin sudah ada, gak dibuat ulang.',
      email: existing.email,
    });
  }

  const passwordHash = await bcrypt.hash(process.env.SEED_SUPER_ADMIN_PASSWORD, 10);

  const user = await prisma.user.create({
    data: {
      name: process.env.SEED_SUPER_ADMIN_NAME,
      email: process.env.SEED_SUPER_ADMIN_EMAIL,
      passwordHash,
      role: 'super_admin',
      status: 'active',
    },
  });

  return NextResponse.json({
    message: 'Super Admin berhasil dibuat.',
    id: user.id,
    email: user.email,
  });
}