/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

const wrapperStyle = css`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vh;
`;

const MenulessTemplate: React.FC = ({ children }) => (
  <div css={wrapperStyle}>{children}</div>
);

export default MenulessTemplate;
