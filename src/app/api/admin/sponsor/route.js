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

  const sponsors = await prisma.sponsor.findMany({
    orderBy: { order: 'asc' },
  });

  return NextResponse.json(sponsors);
}

export async function POST(request) {
  const session = await requireAuth();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const { name, logo, order, active } = body;

  if (!name || !logo) {
    return NextResponse.json({ error: 'Nama dan logo wajib diisi.' }, { status: 400 });
  }

  const sponsor = await prisma.sponsor.create({
    data: {
      name,
      logo,
      order: order ?? 0,
      active: active ?? true,
      createdById: session.user.id,
      updatedById: session.user.id,
    },
  });

  return NextResponse.json(sponsor, { status: 201 });
}
