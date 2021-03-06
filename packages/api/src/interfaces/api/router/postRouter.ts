import { Router } from 'express';

import { authMiddleware } from '../middleware/authMiddleware';
import cors from 'cors';
import { createPost, getPostById, getPosts, putPost } from '../handler/postHandler';

// eslint-disable-next-line new-cap
export const postRouter = Router();
postRouter.use(
  cors({
    origin: 'http://frontend:4000',
    optionsSuccessStatus: 200,
  }),
);
postRouter.use(authMiddleware);
postRouter.get('/:id', getPostById);
postRouter.get('/', getPosts);
postRouter.post('/', createPost);
postRouter.put('/:id', putPost);
