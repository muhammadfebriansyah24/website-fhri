import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587', 10),
  secure: parseInt(process.env.SMTP_PORT || '587', 10) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendResetEmail(toEmail, userName, resetToken) {
  const resetUrl = `${process.env.NEXT_PUBLIC_APP_URL}/admin/reset-password?token=${resetToken}`;
  
  const mailOptions = {
    from: process.env.SMTP_FROM,
    to: toEmail,
    subject: 'Reset Password Admin FHRI',
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; rounded: 8px;">
        <h2 style="color: #00263C; margin-bottom: 24px;">Reset Password Admin Portal</h2>
        <p>Halo <strong>${userName}</strong>,</p>
        <p>Kami menerima permintaan untuk menyetel ulang kata sandi akun admin FHRI Anda. Silakan klik tombol di bawah ini untuk melanjutkan:</p>
        <div style="margin: 32px 0; text-align: center;">
          <a href="${resetUrl}" style="background-color: #DC2626; color: white; padding: 12px 24px; text-decoration: none; border-radius: 9999px; font-weight: bold; display: inline-block;">Reset Password</a>
        </div>
        <p style="color: #64748b; font-size: 14px;">Link ini berlaku selama <strong>1 jam</strong>. Jika Anda tidak meminta pengaturan ulang ini, silakan abaikan saja email ini.</p>
        <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 32px 0;" />
        <p style="color: #94a3b8; font-size: 12px; text-align: center;">First HR Indonesia Admin Portal</p>
      </div>
    `,
  };

  return transporter.sendMail(mailOptions);
}

export async function sendConfirmationEmail(toEmail) {
  const now = new Date().toLocaleString('id-ID', {
    timeZone: 'Asia/Jakarta',
    dateStyle: 'medium',
    timeStyle: 'short',
  });

  const mailOptions = {
    from: process.env.SMTP_FROM,
    to: toEmail,
    subject: 'Password Admin FHRI Kamu Berhasil Diubah',
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; rounded: 8px;">
        <h2 style="color: #00263C; margin-bottom: 24px;">Password Berhasil Diubah</h2>
        <p>Halo,</p>
        <p>Kami ingin menginformasikan bahwa kata sandi untuk akun admin FHRI Anda telah berhasil diubah pada <strong>${now} WIB</strong>.</p>
        <p style="color: #dc2626; font-weight: bold; margin-top: 24px;">PENTING:</p>
        <p>Jika Anda merasa tidak melakukan perubahan ini, harap segera hubungi <strong>Super Admin</strong> untuk mengamankan akun Anda.</p>
        <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 32px 0;" />
        <p style="color: #94a3b8; font-size: 12px; text-align: center;">First HR Indonesia Admin Portal</p>
      </div>
    `,
  };

  return transporter.sendMail(mailOptions);
}
