import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getSession } from '@/lib/session';

// Hanya super_admin yang boleh akses endpoint ini
async function requireSuperAdmin() {
  const session = await getSession();
  if (!session.user || session.user.role !== 'super_admin') {
    return null;
  }
  return session;
}

export async function GET() {
  if (!(await requireSuperAdmin())) {
    return NextResponse.json({ error: 'Akses ditolak.' }, { status: 403 });
  }

  const users = await prisma.user.findMany({
    orderBy: [{ status: 'asc' }, { createdAt: 'desc' }],
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      status: true,
      createdAt: true,
      approvedBy: { select: { name: true } },
      approvedAt: true,
    },
  });

  return NextResponse.json(users);
}

export async function PATCH(request) {
  const session = await requireSuperAdmin();
  if (!session) {
    return NextResponse.json({ error: 'Akses ditolak.' }, { status: 403 });
  }

  const { userId, action } = await request.json();

  if (!userId || !['approve', 'reject'].includes(action)) {
    return NextResponse.json({ error: 'userId dan action (approve/reject) wajib diisi.' }, { status: 400 });
  }

  const target = await prisma.user.findUnique({ where: { id: userId } });
  if (!target) {
    return NextResponse.json({ error: 'User tidak ditemukan.' }, { status: 404 });
  }
  if (target.status !== 'pending') {
    return NextResponse.json({ error: `User sudah berstatus "${target.status}".` }, { status: 400 });
  }

  const data =
    action === 'approve'
      ? { status: 'active', approvedById: session.user.id, approvedAt: new Date() }
      : { status: 'rejected' };

  await prisma.user.update({ where: { id: userId }, data });

  return NextResponse.json({ message: `User berhasil di-${action}.` });
}
