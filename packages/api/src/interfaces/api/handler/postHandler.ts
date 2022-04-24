import { Post, Prisma } from '@prisma/client';
import { Response, Request } from 'express';
import {
  findPostById,
  findPosts,
  savePost,
  updatePost,
} from '../../../application/usercase/postUsecase';
import logger from '../../../lib/logger';
import { PostFilterParam } from '../../../types/Post';
import { InnerRequest } from './request';
import PostUpdateInput = Prisma.PostUpdateInput;

export const getPosts = async (
  req: Request<any, any, any, PostFilterParam>,
  res: Response,
): Promise<void> => {
  try {
    const params = req.query;
    const posts = await findPosts((req as unknown as InnerRequest).uid, params);
    res.status(200).json({
      total: posts.length,
      posts,
    });
  } catch (e) {
    logger.error(e);
    res.status(500).json({
      msg: 'internal_server_error',
    });
  }
};

export const getPostById = async (
  req: Request<{ id: string }, any, any, any>,
  res: Response,
): Promise<void> => {
  try {
    const id = Number(req.params.id);
    const post = await findPostById(id, (req as unknown as InnerRequest).uid);
    if (post === null) {
      res.status(404).json({
        msg: 'not_found',
      });
    } else {
      res.status(200).json({
        ...post,
      });
    }
  } catch (e) {
    logger.error(e);
    res.status(500).json({
      msg: 'internal_server_error',
    });
  }
};

export const createPost = async (
  req: Request<any, any, Post, any>,
  res: Response,
): Promise<void> => {
  try {
    const post = {
      ...req.body,
      author: {
        connect: {
          uid: (req as InnerRequest).uid,
        },
      },
    };
    await savePost(post);
    res.json({
      msg: 'ok',
    });
  } catch (e) {
    logger.error(e);
    res.status(500).json({
      msg: 'internal_server_error',
    });
  }
};

export const putPost = async (
  req: Request<{ id: string }, any, PostUpdateInput, any>,
  res: Response,
): Promise<void> => {
  try {
    const id = Number(req.params.id);
    const post = req.body;
    await updatePost(id, (req as unknown as InnerRequest).uid, post);
    res.json({
      msg: 'ok',
    });
  } catch (e) {
    logger.error(e);
    res.status(500).json({
      msg: 'internal_server_error',
    });
  }
};
