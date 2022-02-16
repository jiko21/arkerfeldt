import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import PostList from '@/components/organisms/PostList';
import { Post } from '@/types/post';
import { PublishStatus } from '@/const/post';

export default {
  title: 'Organisms/PostList',
  component: PostList,
} as Meta;

const Template: Story<React.ComponentProps<typeof PostList>> = (args) => {
  return <PostList {...args} />;
};

export const Sample1 = Template.bind({});
Sample1.args = {
  posts: [
    {
      id: 1,
      title: '〇〇は結婚していた？彼女の名前は××？',
      content: '',
      createdAt: new Date('2020/12/11 10:00'),
      updatedAt: new Date('2020/12/11 10:00'),
      isDelete: false,
      status: PublishStatus.PUBLISHED,
      authorId: '123',
      author: {
        displayName: 'jiko21',
      },
    },
    {
      id: 2,
      title: '〇〇は結婚していた？彼女の名前は××？',
      content: '',
      createdAt: new Date('2020/12/11 10:00'),
      updatedAt: new Date('2020/12/11 10:00'),
      isDelete: false,
      status: PublishStatus.UNPUBLISHED,
      authorId: '123',
      author: {
        displayName: 'jiko21',
      },
    },
  ],
};
