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
  const item = await prisma.wallOfCongratulations.findUnique({
    where: { id: parseInt(id) },
  });

  if (!item) {
    return NextResponse.json({ error: 'Data tidak ditemukan.' }, { status: 404 });
  }

  return NextResponse.json(item);
}

export async function PATCH(request, { params }) {
  const session = await requireAuth();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await params;
  const body = await request.json();

  const item = await prisma.wallOfCongratulations.update({
    where: { id: parseInt(id) },
    data: {
      ...body,
      updatedById: session.user.id,
    },
  });

  return NextResponse.json(item);
}

export async function DELETE(request, { params }) {
  if (!(await requireAuth())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await params;
  await prisma.wallOfCongratulations.delete({
    where: { id: parseInt(id) },
  });

  return NextResponse.json({ success: true });
}
