/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Color } from '@/const/color';

const inputStyle = css`
  border: 1px solid ${Color.BLACK};
  border-radius: 6px;
  //height: 30px;
  //min-width: 240px;
  width: 100%;
  ::placeholder {
    color: ${Color.LIGHT};
  }
`;

type Props = React.ComponentProps<'textarea'> & {
  testId?: string;
};

export const TextArea: React.FC<Props> = ({ testId, ...props }) => (
  <textarea css={inputStyle} data-testid={testId} {...props} />
);
