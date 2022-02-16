import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import CancelButton from '@/components/atoms/CancelButton';

export default {
  title: 'Atoms/CancelButton',
  component: CancelButton,
} as Meta;

const Template: Story<{}> = (args) => <CancelButton {...args} />;

export const Sample1 = Template.bind({});
Sample1.args = {
  children: 'Cancel',
};
