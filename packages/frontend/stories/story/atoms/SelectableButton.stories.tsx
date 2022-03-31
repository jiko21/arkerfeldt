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
  const [text, updateText] = useState('UNPUBLISHED');
  return (
    <SelectableButton
      {...args}
    >
      {text}
    </SelectableButton>
  );
};

export const Sample1 = Template.bind({});
Sample1.args = {
  candidates: {
    'UNPUBLISHED': '未公開のまま保存',
    'PUBLISH': '公開する'

  },
  onSubmit: () => {
    console.log('onClick');
  },
  initValue: 'UNPUBLISHED'
};
