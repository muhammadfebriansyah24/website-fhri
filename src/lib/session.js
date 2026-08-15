import { cookies } from 'next/headers';
import { getIronSession } from 'iron-session';

export const sessionOptions = {
  password: process.env.SESSION_SECRET,
  cookieName: 'fhri_admin_session',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
};

// Dipakai di Route Handler / Server Component (app/admin/**)
export async function getSession() {
  return getIronSession(await cookies(), sessionOptions);
}
