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
  const news = await prisma.news.findUnique({ where: { id: parseInt(id) } });
  if (!news) {
    return NextResponse.json({ error: 'Berita tidak ditemukan.' }, { status: 404 });
  }

  return NextResponse.json(news);
}

export async function PATCH(request, { params }) {
  const session = await requireAuth();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await params;
  const newsId = parseInt(id);
  const body = await request.json();

  const existing = await prisma.news.findUnique({ where: { id: newsId } });
  if (!existing) {
    return NextResponse.json({ error: 'Berita tidak ditemukan.' }, { status: 404 });
  }

  // Cek slug unik jika slug berubah
  if (body.slug && body.slug !== existing.slug) {
    const conflict = await prisma.news.findUnique({ where: { slug: body.slug } });
    if (conflict) {
      return NextResponse.json({ error: 'Slug sudah digunakan.' }, { status: 400 });
    }
  }

  const data = { ...body, updatedById: session.user.id };
  if (data.publishedAt) data.publishedAt = new Date(data.publishedAt);
  // Jangan izinkan ubah createdById
  delete data.createdById;
  delete data.id;

  const updated = await prisma.news.update({ where: { id: newsId }, data });
  return NextResponse.json(updated);
}

export async function DELETE(request, { params }) {
  if (!(await requireAuth())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await params;
  const newsId = parseInt(id);

  const existing = await prisma.news.findUnique({ where: { id: newsId } });
  if (!existing) {
    return NextResponse.json({ error: 'Berita tidak ditemukan.' }, { status: 404 });
  }

  await prisma.news.delete({ where: { id: newsId } });
  return NextResponse.json({ message: 'Berita berhasil dihapus.' });
}
