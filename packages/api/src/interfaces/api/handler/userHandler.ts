import { Request, Response } from 'express';
import { verifyAndGetUserInfo } from '../../../service/auth/firebaseAuthService';
import { InnerRequest } from './request';
import { saveUser } from '../../../application/usercase/userUsecase';
import logger from '../../../lib/logger';

export const createUserHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const uid = (req as InnerRequest).uid;
    const userInfo = await verifyAndGetUserInfo(uid);
    await saveUser({
      uid: userInfo.uid,
      displayName: userInfo.displayName ? userInfo.displayName : '',
      photoUrl: userInfo.photoURL ? userInfo.photoURL : null,
    });
  } catch (e) {
    logger.error(e);
    res.status(500).json({
      msg: 'internal_server_error',
    });
  }
  res.json({
    msg: 'ok',
  });
};
