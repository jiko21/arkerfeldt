import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import RadioPanel from '@/components/organisms/RadioPanel';

export default {
  title: 'Organisms/RadioPanel',
  component: RadioPanel,
} as Meta;

const Template: Story<React.ComponentProps<typeof RadioPanel>> = (args) => {
  const [value, updateValue] = useState('すべて');
  return <RadioPanel {...args} onApply={updateValue} value={value} />;
};

export const Sample1 = Template.bind({});
Sample1.args = {
  items: ['すべて', '公開中', '未公開'],
};
