import { PublishStatus } from '@/const/post';

export type Post = {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  isDelete: boolean;
  status: PublishStatus;
  authorId: string;
  author: {
    displayName: string;
  };
};

export type PostResponse = Post & {
  author: {
    displayName: string;
    photoUrl: string;
    uid: string;
  }
};

export type PostInputType = {
  title: string;
  content: string;
  status: PublishStatus;
};
