import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import TextLink from '@/components/atoms/TextLink';

export default {
  title: 'Atoms/TextLink',
  component: TextLink,
} as Meta;

const Template: Story<React.ComponentProps<typeof TextLink>> = (args) => (
  <TextLink {...args} />
);

export const Account = Template.bind({});
Account.args = {
  // @ts-ignore
  children: '@jiko21',
  href: '/',
  fontSize: 14,
};

export const Title = Template.bind({});
Title.args = {
  // @ts-ignore
  children: '〇〇は結婚していた？彼女の名前は××？',
  href: '/',
  fontSize: 24,
};
