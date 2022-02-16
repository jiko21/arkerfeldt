import { PublishStatus } from '@/const/post';

export const convertStatusToString = (status: PublishStatus) => {
  switch (status) {
    case PublishStatus.PUBLISHED:
      return '公開中';
    case PublishStatus.UNPUBLISHED:
      return '未公開';
  }
};

export const convertStatusToText = (status: PublishStatus) => {
  switch (status) {
    case PublishStatus.PUBLISHED:
      return '公開する';
    case PublishStatus.UNPUBLISHED:
      return '未公開のまま保存';
  }
};
