export const PublishStatus = {
  PUBLISHED: 'PUBLISHED',
  UNPUBLISHED: 'UNPUBLISHED',
} as const;

export type PublishStatus = typeof PublishStatus[keyof typeof PublishStatus];

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

export type PostInputType = {
  title: string;
  content: string;
  status: PublishStatus;
};

export const candidates: { [key in PublishStatus]: string } = {
  [PublishStatus.UNPUBLISHED]: '未公開のまま保存',
  [PublishStatus.PUBLISHED]: '公開する',
};
