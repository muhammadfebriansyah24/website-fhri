import { NextResponse } from 'next/server';
import { getSession } from '@/lib/session';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import crypto from 'crypto';

const MAX_SIZE = 2 * 1024 * 1024; // 2MB — PRD 5.1
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml'];

export async function POST(request) {
  const session = await getSession();
  if (!session.user) {
    return NextResponse.json({ error: 'Belum login.' }, { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get('file');

  if (!file || typeof file === 'string') {
    return NextResponse.json({ error: 'File wajib diupload.' }, { status: 400 });
  }
  if (!ALLOWED_TYPES.includes(file.type)) {
    return NextResponse.json({ error: 'Tipe file tidak didukung. Gunakan JPEG, PNG, WebP, GIF, atau SVG.' }, { status: 400 });
  }
  if (file.size > MAX_SIZE) {
    return NextResponse.json({ error: 'Ukuran file maksimal 2MB.' }, { status: 400 });
  }

  const ext = file.name.split('.').pop();
  const filename = `${Date.now()}-${crypto.randomBytes(4).toString('hex')}.${ext}`;
  const uploadDir = path.join(process.cwd(), 'public', 'uploads');

  await mkdir(uploadDir, { recursive: true });
  const buffer = Buffer.from(await file.arrayBuffer());
  await writeFile(path.join(uploadDir, filename), buffer);

  return NextResponse.json({ path: `/uploads/${filename}` });
}
