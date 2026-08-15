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
  const sponsor = await prisma.sponsor.findUnique({ where: { id: parseInt(id) } });

  if (!sponsor) {
    return NextResponse.json({ error: 'Sponsor tidak ditemukan.' }, { status: 404 });
  }

  return NextResponse.json(sponsor);
}

export async function PATCH(request, { params }) {
  const session = await requireAuth();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await params;
  const body = await request.json();
  const { name, logo, order, active } = body;

  const sponsor = await prisma.sponsor.update({
    where: { id: parseInt(id) },
    data: {
      ...(name !== undefined && { name }),
      ...(logo !== undefined && { logo }),
      ...(order !== undefined && { order }),
      ...(active !== undefined && { active }),
      updatedById: session.user.id,
    },
  });

  return NextResponse.json(sponsor);
}

export async function DELETE(request, { params }) {
  if (!(await requireAuth())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await params;
  await prisma.sponsor.delete({ where: { id: parseInt(id) } });

  return NextResponse.json({ success: true });
}
