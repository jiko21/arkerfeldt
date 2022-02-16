import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import PostItem from '@/components/molecules/PostItem';
import { Post } from '@/types/post';
import { PublishStatus } from '@/const/post';

export default {
  title: 'Molecules/PostItem',
  component: PostItem,
} as Meta;

type Props = {
  post: Post;
  link: string;
};

const Template: Story<Props> = (args) => {
  const [checked, onChecked] = useState(false);
  return <PostItem {...args} checked={checked} onChecked={onChecked} />;
};

export const Sample1 = Template.bind({});
Sample1.args = {
  link: '#',
  post: {
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
};
