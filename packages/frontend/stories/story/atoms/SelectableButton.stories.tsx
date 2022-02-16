import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import SelectableButton from '@/components/atoms/SelectableButton';

export default {
  title: 'Atoms/SelectableButton',
  component: SelectableButton,
} as Meta;

const Template: Story<React.ComponentProps<typeof SelectableButton>> = (
  args,
) => {
  const [text, updateText] = useState('未公開のまま保存');
  return (
    <SelectableButton
      {...args}
      onItemClick={(item) => {
        updateText(item.text);
      }}
    >
      {text}
    </SelectableButton>
  );
};

export const Sample1 = Template.bind({});
Sample1.args = {
  candidates: [
    {
      text: '未公開のまま保存',
      value: 'UNPUBLISHED',
    },
    {
      text: '公開する',
      value: 'PUBLISH',
    },
  ],
  onClick: () => {
    console.log('onClick');
  },
};
