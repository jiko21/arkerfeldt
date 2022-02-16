/** @jsxImportSource @emotion/react */
import Link from 'next/link';
import { css } from '@emotion/react';
import { Color } from '@/const/color';
import * as React from 'react';

const hrefStyle = (fontSize: number) => css`
  color: ${Color.ENABLE};
  cursor: pointer;
  font-size: ${fontSize}px;
  font-weight: 600;
`;

interface IProps {
  href: string;
  fontSize: number;
}

const TextLink: React.FC<IProps> = ({ children, href, fontSize }) => (
  <Link href={href}>
    <a css={hrefStyle(fontSize)}>{children}</a>
  </Link>
);

export default TextLink;
