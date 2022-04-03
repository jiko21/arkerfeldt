import { Post, Prisma } from '@prisma/client';
import * as postRepository from '../../infrastructure/datasource/postRepository';
import { PostFilterParam } from '../../types/Post';
import PostCreateInput = Prisma.PostCreateInput;
import PostUpdateInput = Prisma.PostUpdateInput;

export const findPostById = async (id: number, authorId: string): Promise<Post | null> => {
  return await postRepository.findPostById(id, authorId);
};

export const findPosts = async (authorId: string, params: PostFilterParam): Promise<Post[]> => {
  return await postRepository.findPosts(authorId, params);
};

export const savePost = async (post: PostCreateInput): Promise<void> => {
  const postInput = {
    ...post,
  };
  return await postRepository.createPost(postInput);
};

export const updatePost = async (id: number, authorId: string, postUpdateInput: PostUpdateInput): Promise<void> => {
  return await postRepository.updatePost(id, authorId, postUpdateInput);
};
