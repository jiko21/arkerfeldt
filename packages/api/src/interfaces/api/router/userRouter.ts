import { Router } from 'express';
import { createUserHandler } from '../handler/userHandler';
import { authMiddleware } from '../middleware/authMiddleware';
import cors from 'cors';

// eslint-disable-next-line new-cap
export const userRouter = Router();
userRouter.use(
  cors({
    origin: 'http://frontend:4000',
    optionsSuccessStatus: 200,
  }),
);
userRouter.use(authMiddleware);
userRouter.post('/new', createUserHandler);
