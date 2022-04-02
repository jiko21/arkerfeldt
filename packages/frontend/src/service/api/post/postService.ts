import { PostInputType } from '@/types/post';
import { postRequest } from '@/service/api';

export const createPost = async (post: PostInputType) => {
  await postRequest('/api/v1/posts', {
    ...post,
  });
};
