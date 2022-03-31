/** @jsxImportSource @emotion/react */
import Head from 'next/head';
import React from 'react';
import { GetServerSideProps } from 'next';
import nookies from 'nookies';
import firebaseAdmin from '@/server/firebaseAdmin';
import { authCookie } from '@/const/auth';
import MenuTemplate from '@/components/templates/MenuTemplate';
import { PostCreateForm } from '@/components/organisms/PostCreateForm';
import { PostInputType } from '@/types/post';
import { createPost } from '@/service/api/post/postService';
import { useRouter } from 'next/router';

const Create: React.FC = () => {
  const router = useRouter();
  const onSubmit = async (postInput: PostInputType) => {
    try {
      await createPost(postInput);
      router.push('/posts');
    } catch (e) {
    }
  };
  return (
    <>
      <Head>
        <title>Arkerfeldt CMS</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <MenuTemplate>
        <PostCreateForm submit={onSubmit}/>
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

export default Create;
