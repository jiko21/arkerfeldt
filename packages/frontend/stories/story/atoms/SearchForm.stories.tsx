import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import SearchForm from '@/components/atoms/SearchForm';

export default {
  title: 'Atoms/SearchForm',
  component: SearchForm,
} as Meta;

const Template: Story<{}> = (args) => {
  const [value, setValue] = useState('');
  return (
    <SearchForm value={value} onChange={(e) => setValue(e.target.value)} />
  );
};

export const Sample1 = Template.bind({});
Sample1.args = {};
