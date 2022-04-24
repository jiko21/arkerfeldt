import { Post, Prisma } from '@prisma/client';
import { PostFilterParam } from '../../types/Post';
import prismaClient from './client';
import PostCreateInput = Prisma.PostCreateInput;
import PostUpdateInput = Prisma.PostUpdateInput;

export const findPostById = async (id: number, authorId: string): Promise<Post | null> => {
  return await prismaClient.post.findFirst({
    where: {
      authorId: authorId,
      id: id,
    },
    include: { author: true },
  });
};

export const findPosts = async (authorId: string, params: PostFilterParam): Promise<Post[]> => {
  return await prismaClient.post.findMany({
    where: {
      AND: [
        {
          authorId: authorId,
        },
        {
          title: params.title,
        },
        {
          status: params.status,
        },
        {
          isDelete: false,
        },
      ],
    },
    include: { author: true },
  });
};

export const createPost = async (post: PostCreateInput) => {
  await prismaClient.post.create({
    data: post,
  });
};

export const updatePost = async (
  id: number,
  authorId: string,
  postUpdateInput: PostUpdateInput,
) => {
  await prismaClient.post.updateMany({
    where: {
      authorId,
      id,
    },
    data: {
      ...postUpdateInput,
    },
  });
};
