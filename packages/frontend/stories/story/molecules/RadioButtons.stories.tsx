import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import RadioButtons from '@/components/molecules/RadioButtons';

export default {
  title: 'Molecules/RadioButtons',
  component: RadioButtons,
} as Meta;

type Props = {
  items: string[];
};

const Template: Story<Props> = (args) => {
  const [item, onItemChange] = useState('すべて');
  return (
    <RadioButtons
      {...args}
      value={item}
      name={'status'}
      onChangeHandler={onItemChange}
    />
  );
};

export const Sample1 = Template.bind({});
Sample1.args = {
  items: ['すべて', '公開中', '未公開'],
};
