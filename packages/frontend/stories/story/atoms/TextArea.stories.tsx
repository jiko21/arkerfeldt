import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { TextArea } from '@/components/atoms/TextArea';

export default {
  title: 'Atoms/TextArea',
  component: TextArea,
} as Meta;

const Template: Story<{}> = (args) => {
  const [text, setText] = useState('');
  return <TextArea value={text} onChange={(e) => setText(e.target.value)} {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  rows: 4
};
