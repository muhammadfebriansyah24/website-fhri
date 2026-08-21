import { redirect } from 'next/navigation';
import { getSession } from './session';

// Dipakai di Server Component (page.js) — langsung redirect kalau tidak berhak.
export async function requireSuperAdmin() {
  const session = await getSession();

  if (!session.user) {
    redirect('/admin/login');
  }
  if (session.user.role !== 'super_admin') {
    redirect('/admin');
  }
  return session.user;
}

// Dipakai di Route Handler (API) — return null, biar route yang putuskan response-nya
// (redirect() tidak cocok dipakai di sini, response API harus tetap JSON).
export async function requireSuperAdminApi() {
  const session = await getSession();

  if (!session.user || session.user.role !== 'super_admin') {
    return null;
  }
  return session.user;
}
