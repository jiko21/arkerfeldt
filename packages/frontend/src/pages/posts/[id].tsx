/** @jsxImportSource @emotion/react */
import Head from 'next/head';
import React from 'react';
import { GetServerSideProps } from 'next';
import nookies from 'nookies';
import firebaseAdmin from '@/server/firebaseAdmin';
import { authCookie } from '@/const/auth';
import MenuTemplate from '@/components/templates/MenuTemplate';
import { PostCreateForm } from '@/components/organisms/PostCreateForm';
import { PostInputType, PostResponse } from '@/types/post';
import { updatePost } from '@/service/api/post/postService';
import { useRouter } from 'next/router';
import { getRequest } from '@/service/api';
import { useQuery } from 'react-query';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const EditWrapper: React.FC<{
  onSubmit: (postInput: PostInputType) => Promise<void>;
  id: number;
}> = ({ id, onSubmit }) => {
  const { data, isLoading } = useQuery(
    `posts/${id}`,
    async () => {
      const { data } = await getRequest<PostResponse>(
        `/api/v1/posts/${id}`,
        {},
      );
      return data;
    },
    {
      cacheTime: 0,
    },
  );
  if (isLoading) {
    return (
      <FontAwesomeIcon icon={faSpinner} color="paleturquoise" size="10x" spin />
    );
  } else {
    return (
      <PostCreateForm
        initTitle={data?.title}
        initContent={data?.content}
        submit={onSubmit}
      />
    );
  }
};

const Edit: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const onSubmit = async (postInput: PostInputType) => {
    try {
      await updatePost(Number(id), postInput);
      router.push('/posts');
    } catch (e) {}
  };

  return (
    <>
      <Head>
        <title>Arkerfeldt CMS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MenuTemplate>
        <EditWrapper onSubmit={onSubmit} id={Number(id)} />
      </MenuTemplate>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = nookies.get(ctx);
  const session = cookies[authCookie] || '';
  try {
    const user = await firebaseAdmin.auth().verifySessionCookie(session, true);
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

export default Edit;
