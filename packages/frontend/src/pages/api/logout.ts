import { NextApiRequest, NextApiResponse } from 'next';
import { parseCookies, destroyCookie } from 'nookies';
import firebaseAdmin from '@/server/firebaseAdmin';
import { authCookie } from '@/const/auth';

const logout = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') return res.status(404);
  const sessionId = parseCookies({ req })[authCookie] || '';
  const auth = firebaseAdmin.auth();
  try {
    const decodedSession = await auth.verifySessionCookie(sessionId);
    await auth.revokeRefreshTokens(decodedSession.sub);
    destroyCookie({ res }, authCookie, { path: '/' });
    return res.json({ msg: 'success' });
  } catch (e) {
    return res.status(500);
  }
};

export default logout;
