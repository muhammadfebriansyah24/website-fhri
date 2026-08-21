import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { prisma } from '@/lib/prisma';
import { sendResetEmail } from '@/lib/mailer';

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { message: 'Jika email terdaftar, link reset sudah dikirim.' },
        { status: 200 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });

    // PRD: Hanya user berstatus 'active' yang benar-benar menerima email.
    // Tapi response ke frontend tetap generik, tidak membedakan.
    if (!user || user.status !== 'active') {
      return NextResponse.json(
        { message: 'Jika email terdaftar, link reset sudah dikirim.' },
        { status: 200 }
      );
    }

    // Cooldown check: 60 seconds
    const latestToken = await prisma.passwordResetToken.findFirst({
      where: { userId: user.id },
      orderBy: { createdAt: 'desc' },
    });

    if (latestToken && Date.now() - new Date(latestToken.createdAt).getTime() < 60000) {
      // Cooldown is active. Do not send email, but return generic success.
      return NextResponse.json(
        { message: 'Jika email terdaftar, link reset sudah dikirim.' },
        { status: 200 }
      );
    }

    // Invalidate existing tokens for this user
    await prisma.passwordResetToken.updateMany({
      where: {
        userId: user.id,
        usedAt: null,
        expiresAt: { gt: new Date() },
      },
      data: {
        usedAt: new Date(),
      },
    });

    // Generate crypto-secure random token
    const token = crypto.randomBytes(32).toString('hex');
    const tokenHash = crypto.createHash('sha256').update(token).digest('hex');
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

    // Save token hash to database
    await prisma.passwordResetToken.create({
      data: {
        userId: user.id,
        tokenHash,
        expiresAt,
      },
    });

    // Send email
    try {
      await sendResetEmail(user.email, user.name, token);
    } catch (mailError) {
      // Log error but do not break generic response
      console.error('Failed to send reset email:', mailError);
    }

    return NextResponse.json(
      { message: 'Jika email terdaftar, link reset sudah dikirim.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Forgot password error:', error);
    return NextResponse.json(
      { message: 'Jika email terdaftar, link reset sudah dikirim.' },
      { status: 200 }
    );
  }
}
