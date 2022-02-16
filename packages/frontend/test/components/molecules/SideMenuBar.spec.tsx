import SideMenuBar from '@/components/molecules/SideMenuBar';
import { render } from '@testing-library/react';

describe('SideMenuBar.tsx', () => {
  it('should correctly render', () => {
    const { container } = render(
      <SideMenuBar
        menuItems={[
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
        ]}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
