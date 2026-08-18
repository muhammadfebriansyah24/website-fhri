import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireSuperAdminApi } from '@/lib/auth';

export async function GET(request) {
  const admin = await requireSuperAdminApi();
  if (!admin) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  const { searchParams } = new URL(request.url);
  const statuses = (searchParams.get('status') || 'pending,active').split(',');

  const users = await prisma.user.findMany({
    where: { status: { in: statuses } },
    select: { id: true, name: true, email: true, role: true, status: true, createdAt: true, approvedAt: true },
    orderBy: { createdAt: 'desc' },
  });

  return NextResponse.json({ users });
}

const ALLOWED_STATUSES = ['active', 'rejected', 'inactive'];

export async function PATCH(request) {
  const admin = await requireSuperAdminApi();
  if (!admin) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  const { id, status } = await request.json();

  if (!id || !ALLOWED_STATUSES.includes(status)) {
    return NextResponse.json(
      { error: 'id dan status (active/rejected/inactive) wajib diisi.' },
      { status: 400 }
    );
  }
  if (id === admin.id) {
    return NextResponse.json({ error: 'Tidak bisa mengubah status akun sendiri.' }, { status: 400 });
  }

  const data = { status };
  if (status === 'active') {
    data.approvedById = admin.id;
    data.approvedAt = new Date();
  }

  const user = await prisma.user.update({
    where: { id },
    data,
    select: { id: true, name: true, email: true, role: true, status: true },
  });

  return NextResponse.json({ user });
}
