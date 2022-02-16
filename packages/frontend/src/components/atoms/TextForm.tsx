/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FC, InputHTMLAttributes } from 'react';
import { Color } from '@/const/color';

const inputStyle = css`
  border: 1px solid ${Color.BLACK};
  border-radius: 6px;
  height: 30px;
  min-width: 240px;
  width: 100%;
  ::placeholder {
    color: ${Color.LIGHT};
  }
`;

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  testId?: string;
}

const TextForm: FC<IProps> = ({ testId, ...props }) => (
  <input css={inputStyle} {...props} data-testid={testId} />
);

export default TextForm;
