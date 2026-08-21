import { NextResponse } from 'next/server';
import crypto from 'crypto';
import bcrypt from 'bcryptjs';
import { prisma } from '@/lib/prisma';
import { sendConfirmationEmail } from '@/lib/mailer';

export async function POST(request) {
  try {
    const { token, newPassword } = await request.json();

    if (!token || !newPassword) {
      return NextResponse.json(
        { error: 'Token dan password baru wajib diisi.' },
        { status: 400 }
      );
    }

    if (newPassword.length < 8) {
      return NextResponse.json(
        { error: 'Password minimal 8 karakter.' },
        { status: 400 }
      );
    }

    const tokenHash = crypto.createHash('sha256').update(token).digest('hex');

    const resetTokenRecord = await prisma.passwordResetToken.findFirst({
      where: {
        tokenHash,
        usedAt: null,
        expiresAt: {
          gt: new Date(),
        },
      },
      include: {
        user: true,
      },
    });

    if (!resetTokenRecord || !resetTokenRecord.user) {
      return NextResponse.json(
        { error: 'Link reset password tidak valid atau sudah kedaluwarsa.' },
        { status: 400 }
      );
    }

    const user = resetTokenRecord.user;

    // Hash new password
    const newPasswordHash = await bcrypt.hash(newPassword, 10);

    // Update user's password and mark the token as used, plus invalidate any other tokens
    await prisma.$transaction([
      prisma.user.update({
        where: { id: user.id },
        data: { passwordHash: newPasswordHash },
      }),
      prisma.passwordResetToken.update({
        where: { id: resetTokenRecord.id },
        data: { usedAt: new Date() },
      }),
      prisma.passwordResetToken.updateMany({
        where: {
          userId: user.id,
          usedAt: null,
        },
        data: {
          usedAt: new Date(),
        },
      }),
    ]);

    // Send confirmation email
    try {
      await sendConfirmationEmail(user.email);
    } catch (mailError) {
      console.error('Failed to send password change confirmation email:', mailError);
    }

    return NextResponse.json(
      { message: 'Password berhasil diubah. Silakan login kembali.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Reset password error:', error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan pada server.' },
      { status: 500 }
    );
  }
}
