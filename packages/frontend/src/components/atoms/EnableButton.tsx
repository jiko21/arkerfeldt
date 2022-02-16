/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ButtonHTMLAttributes, FC } from 'react';
import { Color } from '@/const/color';

const buttonStyle = css`
  background-color: ${Color.ENABLE};
  border: none;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  height: 30px;
  min-width: 80px;
  &:hover {
    background-color: ${Color.ENABLE_HOVER};
  }
`;

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  testId?: string;
}

const EnableButton: FC<IProps> = ({ children, testId, ...props }) => (
  <button css={buttonStyle} {...props} data-testid={testId}>
    {children}
  </button>
);

export default EnableButton;
