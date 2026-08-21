import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getSession } from '@/lib/session';

async function requireAuth() {
  const session = await getSession();
  if (!session.user) return null;
  return session;
}

function toSlug(str) {
  return str.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').trim();
}

export async function GET() {
  if (!(await requireAuth())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const news = await prisma.news.findMany({
    orderBy: { publishedAt: 'desc' },
    select: {
      id: true,
      titleId: true,
      slug: true,
      image: true,
      publishedAt: true,
      featured: true,
      createdAt: true,
    },
  });

  return NextResponse.json(news);
}

export async function POST(request) {
  const session = await requireAuth();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const { titleId, titleEn, image, descriptionId, descriptionEn, contentId, contentEn, publishedAt, featured, instagramUrl } = body; // ⬅️ tambah instagramUrl

  if (!titleId || !titleEn || !descriptionId || !descriptionEn || !contentId || !contentEn) {
    return NextResponse.json({ error: 'Field wajib belum lengkap.' }, { status: 400 });
  }

  let slug = body.slug ? toSlug(body.slug) : toSlug(titleId);
  if (!slug) {
    return NextResponse.json({ error: 'Slug tidak valid.' }, { status: 400 });
  }

  const baseSlug = slug;
  let counter = 1;
  while (await prisma.news.findUnique({ where: { slug } })) {
    counter++;
    slug = `${baseSlug}-${counter}`;
  }

  const news = await prisma.news.create({
    data: {
      titleId,
      titleEn,
      slug,
      image: image || '',
      descriptionId,
      descriptionEn,
      contentId,
      contentEn,
      publishedAt: publishedAt ? new Date(publishedAt) : new Date(),
      featured: featured ?? false,
      instagramUrl: instagramUrl || null,
      createdById: session.user.id,
      updatedById: session.user.id,
    },
  });

  return NextResponse.json(news, { status: 201 });
}