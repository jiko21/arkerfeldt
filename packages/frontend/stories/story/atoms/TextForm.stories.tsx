import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import TextForm from '@/components/atoms/TextForm';

export default {
  title: 'Atoms/TextForm',
  component: TextForm,
} as Meta;

const Template: Story<{}> = (args) => {
  const [value, onChange] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  return <TextForm {...args} value={value} onChange={handleChange} />;
};

export const Email = Template.bind({});
Email.args = {
  placeholder: 'email',
  type: 'email',
};

export const Password = Template.bind({});
Password.args = {
  placeholder: 'password',
  type: 'password',
};
