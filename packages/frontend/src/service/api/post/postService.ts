import { PostInputType } from '@/types/post';
import { postRequest, putRequest } from '@/service/api';

export const createPost = async (post: PostInputType) => {
  await postRequest('/api/v1/posts', {
    ...post,
  });
};

export const updatePost = async (id: number, post: PostInputType) => {
  await putRequest(`/api/v1/posts/${id}`, {
    ...post,
  });
};
