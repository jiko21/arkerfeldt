import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import StatusText from '@/components/atoms/StatusText';

export default {
  title: 'Atoms/StatusText',
  component: StatusText,
} as Meta;

const Template: Story<{}> = (args) => <StatusText {...args} />;

export const Published = Template.bind({});
Published.args = {
  children: '公開中',
};

export const Unpublished = Template.bind({});
Unpublished.args = {
  children: '未公開',
};
