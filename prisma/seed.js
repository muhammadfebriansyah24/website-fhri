const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  const email = process.env.SEED_SUPER_ADMIN_EMAIL;
  const password = process.env.SEED_SUPER_ADMIN_PASSWORD;
  const name = process.env.SEED_SUPER_ADMIN_NAME || 'Super Admin';

  if (!email || !password) {
    throw new Error(
      'Set SEED_SUPER_ADMIN_EMAIL dan SEED_SUPER_ADMIN_PASSWORD di .env sebelum menjalankan seed.'
    );
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const user = await prisma.user.upsert({
    where: { email },
    update: {},
    create: { name, email, passwordHash, role: 'super_admin', status: 'active' },
  });

  console.log(`Super Admin siap: ${user.email}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
