import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import SideMenuBar from '@/components/molecules/SideMenuBar';

export default {
  title: 'Molecules/SideMenuBar',
  component: SideMenuBar,
} as Meta;

const Template: Story<React.ComponentProps<typeof SideMenuBar>> = (args) => <SideMenuBar {...args} />;

export const Sample1 = Template.bind({});
Sample1.args = {
  menuItems: [
    {
      title: 'Post',
      url: '/post',
      isSelected: true,
    },
    {
      title: 'Layout',
      url: '/layout',
      isSelected: false,
    },
    {
      title: 'User',
      url: '/user',
      isSelected: false,
    },
  ],
};
