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

  const recruitments = await prisma.recruitment.findMany({
    orderBy: { postedAt: 'desc' },
    select: {
      id: true,
      titleId: true,
      titleEn: true,
      department: true,
      location: true,
      employmentType: true,
      status: true,
      postedAt: true,
      deadline: true,
    },
  });

  return NextResponse.json(recruitments);
}

export async function POST(request) {
  const session = await requireAuth();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const { titleId, titleEn, department, location, employmentType, descId, descEn, postedAt, deadline, status } = body;

  if (!titleId || !titleEn || !department || !location || !employmentType || !descId || !descEn) {
    return NextResponse.json({ error: 'Field wajib belum lengkap.' }, { status: 400 });
  }

  const recruitment = await prisma.recruitment.create({
    data: {
      titleId,
      titleEn,
      department,
      location,
      employmentType,
      descId,
      descEn,
      postedAt: postedAt ? new Date(postedAt) : new Date(),
      deadline: deadline ? new Date(deadline) : null,
      status: status || 'open',
      createdById: session.user.id,
      updatedById: session.user.id,
    },
  });

  return NextResponse.json(recruitment, { status: 201 });
}
