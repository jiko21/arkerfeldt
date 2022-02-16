import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import CheckBox from '@/components/atoms/CheckBox';

export default {
  title: 'Atoms/CheckBox',
  component: CheckBox,
} as Meta;

type TemplateProps = {
  value: boolean;
};

const Template: Story<TemplateProps> = (args) => {
  const [checked, updateChecked] = useState(args.value);
  return <CheckBox {...args} checked={checked} onClick={updateChecked} />;
};

export const NotChecked = Template.bind({});
NotChecked.args = {
  value: false,
};

export const Checked = Template.bind({});
Checked.args = {
  value: true,
};
