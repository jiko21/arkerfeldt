/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ButtonHTMLAttributes, FC } from 'react';
import { Color } from '@/const/color';

const buttonStyle = css`
  background-color: ${Color.BLACK};
  border: none;
  border-radius: 6px;
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  height: 30px;
  min-width: 240px;
  width: 100%;
  transition: 0.5s;
  &:hover {
    transform: translateY(-4px);
  }
`;

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  testId?: string;
}

const DefaultButton: FC<IProps> = ({ children, testId, ...props }) => (
  <button css={buttonStyle} {...props} data-testid={testId}>
    {children}
  </button>
);

export default DefaultButton;
