/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FC } from 'react';
import { Color } from '@/const/color';

const wrapperStyle = css`
  align-items: center;
  background-color: ${Color.LIGHT_GRAY};
  display: flex;
  justify-content: center;
  height: 24px;
  width: 80px;
`;

const spanStyle = css`
  color: ${Color.LIGHT_TEXT};
  font-size: 14px;
  font-weight: 700;
`;

const StatusText: FC = ({ children }) => (
  <div css={wrapperStyle}>
    <span css={spanStyle}>{children}</span>
  </div>
);

export default StatusText;
