/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ButtonHTMLAttributes, FC } from 'react';
import { Color } from '@/const/color';

const buttonStyle = css`
  background-color: ${Color.DISABLE};
  border: 2px solid ${Color.ENABLE};
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  color: ${Color.ENABLE};
  font-size: 14px;
  font-weight: 700;
  height: 30px;
  min-width: 80px;
  &:hover {
    background-color: ${Color.DISABLE_HOVER};
  }
`;

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  testId?: string;
}

const CancelButton: FC<IProps> = ({ children, testId, ...props }) => (
  <button {...props} css={buttonStyle} data-testid={testId}>
    {children}
  </button>
);

export default CancelButton;
