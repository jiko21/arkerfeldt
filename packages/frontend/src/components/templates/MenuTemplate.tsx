/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import SideMenuBar from '@/components/molecules/SideMenuBar';
import { MenuItem } from '@/types/MenuItem';

const topWrapper = css`
  padding: 0;
  display: flex;
  height: 100vh;
`;

const wrapperStyle = css`
  display: flex;
  padding: 100px;
  flex-direction: column;
  width: 100%;
`;

type Props = {
  menuItems: MenuItem[];
};

const MenuTemplate: React.FC<Props> = ({ children, menuItems }) => (
  <div css={topWrapper}>
    <SideMenuBar menuItems={menuItems} />
    <div css={wrapperStyle}>{children}</div>
  </div>
);

export default React.memo(MenuTemplate);
