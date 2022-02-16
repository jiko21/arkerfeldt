import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import GithubButton from '@/components/atoms/GithubButton';

export default {
  title: 'Atoms/GithubButton',
  component: GithubButton,
} as Meta;

const Template: Story<{}> = (args) => <GithubButton {...args} />;

export const Sample1 = Template.bind({});
Sample1.args = {};
