import { NextApiRequest, NextApiResponse } from 'next';
import admin from '@/server/firebaseAdmin';
import { setCookie } from 'nookies';
import { authCookie } from '@/const/auth';

const signup = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') return res.status(404);
  const auth = admin.auth();

  const expiresIn = 24 * 60 * 60 * 1000;

  const id = (req.body.id || '').toString();

  const sessionCookie = await auth.createSessionCookie(id, {
    expiresIn,
  });

  setCookie({ res }, authCookie, sessionCookie, {
    maxAge: expiresIn,
    httpOnly: true,
    secure: true,
    path: '/',
  });

  return res.json({ msg: 'auth success' });
};

export default signup;
