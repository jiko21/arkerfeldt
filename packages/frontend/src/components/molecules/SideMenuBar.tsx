/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FC } from 'react';
import { Color } from '@/const/color';
import { MenuItem } from '@/types/MenuItem';

const ulStyle = css`
  background-color: ${Color.BLACK};
  height: 100vh;
  position: sticky;
  width: 240px;
  margin: 0;
  padding: 210px 0 0 0;
  * {
    list-style-type: none;
  }
`;

const isSelectedStyle = css`
  background-color: ${Color.LIGHT};
`;

const liStyle = css`
  align-items: center;
  color: ${Color.WHITE};
  display: flex;
  font-size: 18px;
  font-weight: 700;
  height: 48px;
  justify-content: center;
  &:hover {
    background-color: ${Color.LIGHT};
  }
`;

type Props = {
  menuItems: MenuItem[];
};

const SideMenuBar: FC<Props> = ({ menuItems }) => (
  <ul css={ulStyle}>
    {menuItems.map((menuItem) => (
      <li
        css={[liStyle, menuItem.isSelected && isSelectedStyle]}
        key={menuItem.url}
      >
        {menuItem.title}
      </li>
    ))}
  </ul>
);

export default SideMenuBar;
