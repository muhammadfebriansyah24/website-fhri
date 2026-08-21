import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireSuperAdminApi } from '@/lib/auth';

export async function DELETE(request, { params }) {
  const admin = await requireSuperAdminApi();
  if (!admin) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  const id = Number((await params).id);
  const user = await prisma.user.findUnique({ where: { id } });

  if (!user) {
    return NextResponse.json({ error: 'User tidak ditemukan.' }, { status: 404 });
  }

  // Sesuai PRD 6.1: hapus permanen HANYA untuk pendaftar yang ditolak
  // (belum pernah login, belum pernah punya konten). User lain wajib soft delete via status.
  if (user.status !== 'rejected') {
    return NextResponse.json(
      { error: 'Hanya user berstatus rejected yang bisa dihapus permanen.' },
      { status: 400 }
    );
  }

  await prisma.user.delete({ where: { id } });

  return NextResponse.json({ message: 'User dihapus permanen.' });
}
