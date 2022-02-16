/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Head from 'next/head';
import React, { useState } from 'react';
import { GetServerSideProps } from 'next';
import nookies from 'nookies';
import firebaseAdmin from '@/server/firebaseAdmin';
import { authCookie } from '@/const/auth';
import { useLogout } from '@/hooks/useAuth';
import MenuTemplate from '@/components/templates/MenuTemplate';
import { menuItems } from '@/const/menu';
import SearchForm from '@/components/atoms/SearchForm';
import RadioPanel from '@/components/organisms/RadioPanel';
import EnableButton from '@/components/atoms/EnableButton';
import { useRouter } from 'next/router';
import PostList from '@/components/organisms/PostList';
import { Post } from '@/types/post';
import { useQuery } from 'react-query';
import { getRequest } from '@/service/api';

const PanelStyle = css`
  display: flex;
  width: 100%;
  justify-content: center;
  *:first-child {
    margin-right: 20px;
  }
  *:last-child {
    margin-left: auto;
  }
`;

const Posts = () => {
  const { data, isLoading } = useQuery('posts', async () => {
    const { data } = await getRequest<{
      total: number;
      posts: Post[];
    }>('/api/v1/posts');
    return data;
  });
  const [status, updateValue] = useState('すべて');
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Arkerfeldt CMS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MenuTemplate menuItems={menuItems}>
        <div css={PanelStyle}>
          <SearchForm />
          <RadioPanel
            value={status}
            onApply={updateValue}
            items={['すべて', '公開中', '未公開']}
          />
          <EnableButton
            onClick={() => {
              router.push('/posts/create');
            }}
          >
            Create Post
          </EnableButton>
        </div>
        {isLoading ? <h1>loading</h1> : <PostList posts={data.posts} />}
      </MenuTemplate>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = nookies.get(ctx);
  const session = cookies[authCookie] || '';
  try {
    const user = await firebaseAdmin.auth().verifySessionCookie(session, true);
    console.log(user);
    return {
      props: {
        user: user,
      },
    };
  } catch (e) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
};

export default Posts;
