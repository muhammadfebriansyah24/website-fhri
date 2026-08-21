import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getSession } from '@/lib/session';

async function requireAuth() {
  const session = await getSession();
  if (!session.user) return null;
  return session;
}

export async function GET() {
  if (!(await requireAuth())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const items = await prisma.wallOfCongratulations.findMany({
    orderBy: { order: 'asc' },
    select: {
      id: true,
      name: true,
      company: true,
      roleId: true,
      roleEn: true,
      photo: true,
      order: true,
      active: true,
      createdAt: true,
    },
  });

  return NextResponse.json(items);
}

export async function POST(request) {
  const session = await requireAuth();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const { name, quoteId, quoteEn, photo } = body;

  if (!name || !quoteId || !quoteEn || !photo) {
    return NextResponse.json({ error: 'Field wajib belum lengkap.' }, { status: 400 });
  }

  const item = await prisma.wallOfCongratulations.create({
    data: {
      name,
      company: body.company || null,
      roleId: body.roleId || null,
      roleEn: body.roleEn || null,
      quoteId,
      quoteEn,
      photo,
      order: body.order ?? 0,
      active: body.active ?? true,
      createdById: session.user.id,
      updatedById: session.user.id,
    },
  });

  return NextResponse.json(item, { status: 201 });
}
