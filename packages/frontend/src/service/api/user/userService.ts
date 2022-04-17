import { postRequest } from '@/service/api';

export const createUser = async () => {
  await postRequest('/api/v1/users/new', {});
};
