import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import DefaultButton from '@/components/atoms/DefaultButton';

export default {
  title: 'Atoms/DefaultButton',
  component: DefaultButton,
} as Meta;

const Template: Story<{}> = (args) => <DefaultButton {...args} />;

export const Sample1 = Template.bind({});
Sample1.args = {
  children: 'Log In',
};
