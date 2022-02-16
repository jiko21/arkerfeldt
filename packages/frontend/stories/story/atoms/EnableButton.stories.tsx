import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import EnableButton from '@/components/atoms/EnableButton';

export default {
  title: 'Atoms/EnableButton',
  component: EnableButton,
} as Meta;

const Template: Story<{}> = (args) => <EnableButton {...args} />;

export const Sample1 = Template.bind({});
Sample1.args = {
  children: '選択',
};
