/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Post } from '@/types/post';
import PostItem from '@/components/molecules/PostItem';
import * as React from 'react';

type Props = {
  posts: Post[];
};

const ulStyle = css`
  list-style: none;
  padding: 0;
  li {
    margin-bottom: 6px;
  }
`;

const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <ul css={ulStyle}>
      {posts.map((post) => (
        <li key={post.id}>
          <PostItem
            post={post}
            checked={false}
            onChecked={(value: boolean) => {
              console.log(value);
            }}
            link={`/posts/${post.id}`}
          />
        </li>
      ))}
    </ul>
  );
};

export default PostList;
