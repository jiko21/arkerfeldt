/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Color } from '@/const/color';
import { convertStatusToString } from '@/libs/post';
import CheckBox from '@/components/atoms/CheckBox';
import StatusText from '@/components/atoms/StatusText';
import TextLink from '@/components/atoms/TextLink';
import { Post } from '@/const/post';
import { formatDate } from '@/libs/date';

const wrapperStyle = css`
  align-items: center;
  background-color: ${Color.WHITE_LIGHT};
  border-radius: 6px;
  display: flex;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  justify-content: center;
  padding: 20px;
`;

const statusWrapper = css`
  margin-top: auto;
  margin-left: auto;
`;

type Props = {
  checked: boolean;
  onChecked: (value: boolean) => void;
  post: Post;
  link: string;
};

const PostItem: React.FC<Props> = ({ checked, onChecked, link, post }) => (
  <div css={wrapperStyle}>
    <CheckBox
      checked={checked}
      onClick={onChecked}
      testId={'postItem-checkbox'}
    />
    <div
      css={css`
        margin-left: 16px;
      `}
    >
      <TextLink fontSize={24} href={link}>
        {post.title}
      </TextLink>
      <div>
        <span
          css={css`
            color: ${Color.BLACK};
            font-size: 14px;
          `}
        >
          Created by{' '}
          <TextLink fontSize={14} href={post.authorId}>
            {post.author.displayName}
          </TextLink>
        </span>
        <span
          css={css`
            color: ${Color.BLACK};
            font-size: 14px;
            margin-left: 10px;
          `}
        >
          Last modified {formatDate(post.updatedAt)}
        </span>
      </div>
    </div>
    <div css={statusWrapper}>
      <StatusText>{convertStatusToString(post.status)}</StatusText>
    </div>
  </div>
);

export default PostItem;
