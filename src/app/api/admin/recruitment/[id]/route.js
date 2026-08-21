import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getSession } from '@/lib/session';

async function requireAuth() {
  const session = await getSession();
  if (!session.user) return null;
  return session;
}

export async function GET(request, { params }) {
  if (!(await requireAuth())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await params;
  const recruitment = await prisma.recruitment.findUnique({ where: { id: parseInt(id) } });
  if (!recruitment) {
    return NextResponse.json({ error: 'Lowongan tidak ditemukan.' }, { status: 404 });
  }

  return NextResponse.json(recruitment);
}

export async function PATCH(request, { params }) {
  const session = await requireAuth();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await params;
  const recruitmentId = parseInt(id);
  const body = await request.json();

  const existing = await prisma.recruitment.findUnique({ where: { id: recruitmentId } });
  if (!existing) {
    return NextResponse.json({ error: 'Lowongan tidak ditemukan.' }, { status: 404 });
  }

  const data = { ...body, updatedById: session.user.id };
  if (data.postedAt) data.postedAt = new Date(data.postedAt);
  if (data.deadline) data.deadline = new Date(data.deadline);
  else if (data.deadline === '') data.deadline = null;
  // Jangan izinkan ubah createdById
  delete data.createdById;
  delete data.id;

  const updated = await prisma.recruitment.update({ where: { id: recruitmentId }, data });
  return NextResponse.json(updated);
}

export async function DELETE(request, { params }) {
  if (!(await requireAuth())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await params;
  const recruitmentId = parseInt(id);

  const existing = await prisma.recruitment.findUnique({ where: { id: recruitmentId } });
  if (!existing) {
    return NextResponse.json({ error: 'Lowongan tidak ditemukan.' }, { status: 404 });
  }

  await prisma.recruitment.delete({ where: { id: recruitmentId } });
  return NextResponse.json({ message: 'Lowongan berhasil dihapus.' });
}
